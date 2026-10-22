// Build the Static GK apps from tools/gk/<app>/data and tools/gk/<app>/lab.js.
//
//   node tools/gk/build.js            (all of them)
//   node tools/gk/build.js books      (one)
//
// Pages share the workbook engine (tools/workbook/) and the Lab games (tools/workbook/games.js).
// Data files push LESSONS, QB, LASTMOMENT and TILES, and may call pairQs() to turn a table of pairs into
// questions (see below). 40_exam.js gives GROUPS, ERANOTE, INTROS and HEATMAP.
// Afterwards, for each app: node tools/index_app.js <file> <id> gs   and   node tools/check_app.js <file>
const fs = require('fs'), path = require('path');
const { fail, hash, loadData, check, writePage, applyVisual } = require('../workbook/lib.js');

const APPS = [
  { dir: 'books', id: 'books', file: 'study-books-authors.html', key: 'books_authors_v1', era: 'bk', title: 'Books & Authors', hi: 'पुस्तकें और लेखक',
    parts: [['Part 1 · Classics of India', 'भारत के शास्त्रीय ग्रंथ', 1, 3], ['Part 2 · Modern Indian writing', 'आधुनिक भारतीय लेखन', 4, 6], ['Part 3 · The world and recent books', 'विश्व और हाल की पुस्तकें', 7, 99]] },
  { dir: 'days', id: 'days', file: 'study-important-days.html', key: 'important_days_v1', era: 'dy', title: 'Important Days', hi: 'महत्वपूर्ण दिवस',
    parts: [['Part 1 · National days of India', 'भारत के राष्ट्रीय दिवस', 1, 3], ['Part 2 · World days', 'विश्व दिवस', 4, 7], ['Part 3 · Themes, years and decades', 'थीम, वर्ष और दशक', 8, 99]] },
  { dir: 'defence', id: 'defence', file: 'study-defence.html', key: 'defence_v1', era: 'df', title: 'Defence', hi: 'रक्षा',
    parts: [['Part 1 · The armed forces', 'सशस्त्र बल', 1, 3], ['Part 2 · Weapons and operations', 'हथियार और अभियान', 4, 5], ['Part 3 · Military exercises', 'सैन्य अभ्यास', 6, 99]] },
  { dir: 'awards', id: 'awards', file: 'study-awards.html', key: 'awards_honours_v1', era: 'aw', title: 'Awards & Honours', hi: 'पुरस्कार और सम्मान',
    parts: [['Part 1 · India’s national honours', 'भारत के राष्ट्रीय सम्मान', 1, 3], ['Part 2 · Literature, film, sport', 'साहित्य, फ़िल्म, खेल', 4, 6], ['Part 3 · World awards and the latest winners', 'विश्व पुरस्कार और नवीनतम विजेता', 7, 99]] },
  { dir: 'parks', id: 'parks', file: 'study-protected-areas.html', key: 'protected_areas_v1', era: 'pa', title: 'Protected Areas', hi: 'संरक्षित क्षेत्र',
    parts: [['Part 1 · Parks and sanctuaries', 'राष्ट्रीय उद्यान और अभयारण्य', 1, 4], ['Part 2 · Reserves and wetlands', 'आरक्षित क्षेत्र और आर्द्रभूमि', 5, 7], ['Part 3 · Heritage and wildlife', 'धरोहर और वन्यजीव', 8, 99]] }
];
// Newer apps keep their config next to their data: tools/gk/<dir>/app.json, same fields as above ("dir" is the folder).
fs.readdirSync(__dirname).filter(d => fs.existsSync(path.join(__dirname, d, 'app.json')))
  .forEach(d => APPS.push(Object.assign({ dir: d }, JSON.parse(fs.readFileSync(path.join(__dirname, d, 'app.json'), 'utf8')))));

/** pairQs(lesson, rows, o): one question per row, and (with o.rq) the reverse question for answers that occur once.
    rows: [prompt, answer, note?, tag?] — tag "p" = repeatedly asked, or "p|SSC CGL · 7 Mar 2020 (Shift 2)" for a question
    reported from that paper. o: { q: prompt → question, e?: row → explanation, rq?: answer → question, re?: row → explanation,
    extra?: more wrong answers, pool?: more prompts for reverse wrong answers }.
    Wrong options are other answers in the same table, picked the same way on every build. */
function pairMaker(QB){
  const pick = (seed, list, not) => { const o = list.filter(x => x !== not).sort((a, b) => hash(seed + a) < hash(seed + b) ? -1 : 1).slice(0, 3); if (o.length < 3) fail('not enough wrong options for: ' + seed); return o; };
  const tagOf = t => { t = t || ''; const [f, paper] = t.split('|'); return [f || '', paper || '']; };
  return function pairQs(lesson, rows, o){
    const answers = [...new Set(rows.map(r => r[1]).concat(o.extra || []))];
    rows.forEach(r => {
      const [f, paper] = tagOf(r[3]), q = o.q(r[0]);
      QB.push([lesson, q, [r[1]].concat(pick(q, answers, r[1])), o.e ? o.e(r) : (r[2] || `${r[0]} — ${r[1]}.`), f, '', '', paper]);
    });
    if (o.rq) {
      const n = {}; rows.forEach(r => { n[r[1]] = (n[r[1]] || 0) + 1; });
      const prompts = [...new Set(rows.map(r => r[0]).concat(o.pool || []))];
      rows.filter(r => n[r[1]] === 1 && !r[4]).forEach(r => {
        const q = o.rq(r[1]);
        if (QB.some(x => x[1] === q)) return;     // the same date or name asked from another table: one question is enough
        QB.push([lesson, q, [r[0]].concat(pick(q, prompts, r[0])), o.re ? o.re(r) : (r[2] || `${r[0]} — ${r[1]}.`), '', '', '', '']);
      });
    }
  };
}

const only = process.argv[2];
APPS.filter(a => !only || a.id === only || a.dir === only).forEach(app => {
  const dir = path.join(__dirname, app.dir), QB = [];
  const ctx = loadData(path.join(dir, 'data'), { LESSONS: [], QB, LASTMOMENT: [], TILES: [], pairQs: pairMaker(QB) });
  const num = id => +String(id).replace(/\D/g, '');
  const LESSONS = ctx.LESSONS.slice().sort((a, b) => num(a.id) - num(b.id));
  LESSONS.forEach(l => { const p = app.parts.find(p => num(l.id) >= p[2] && num(l.id) <= p[3]); l.part = [p[0], p[1]]; l.g = app.era; });
  const byId = check(LESSONS, QB);
  ctx.HEATMAP.rows.forEach(r => { if (!byId.has(r.id)) fail(app.id + ': heat map lists ' + r.id + ', which no data file defines'); });
  LESSONS.forEach(l => { if (!ctx.HEATMAP.rows.some(r => r.id === l.id)) fail(l.id + ' is missing from the heat map'); });
  LESSONS.forEach(l => { const n = QB.filter(q => q[0] === l.id).length; if (n < 12) fail(l.id + ' has only ' + n + ' questions'); });
  const qb = QB.slice().sort((a, b) => num(a[0]) - num(b[0]));
  const tls = LESSONS.map(l => (l.blocks.find(b => b.k === 'tl') || {}).rows || []).flat();
  const lab = fs.readFileSync(path.join(dir, 'lab.js'), 'utf8') + '\n' + fs.readFileSync(path.join(__dirname, '..', 'workbook', 'games.js'), 'utf8');
  const tabs = ['learn', 'practice', 'mock', 'lab', 'revise', 'plan'];
  // photos, maps, charts and timelines: tools/gk/<dir>/visual.js (see applyVisual in tools/workbook/lib.js)
  const V = applyVisual(path.join(dir, 'visual.js'), LESSONS, { QB: qb, TILES: ctx.TILES });
  const size = writePage({ file: app.file, title: app.title, brand: app.title, small: app.hi + ' · SSC CGL · CHSL · MTS · RRB NTPC', tabs,
    source: 'tools/gk/build.js from tools/gk/' + app.dir, extra: lab, visual: V.visual }, {
    APP: { id: app.id, key: app.key, mode: 'era', era: app.era, title: app.title, hi: app.hi, tagline: 'SSC CGL · CHSL · MTS · RRB NTPC',
      plans: [3, 5, 7, 10, 15], storyLabel: 'The story first · two minutes', keyLabel: 'Remember this:', apps: [], tabs },
    GROUPS: ctx.GROUPS, LESSONS, QB: qb, TIMELINE: tls.length ? [{ era: app.era, rows: tls }] : [],
    LASTMOMENT: ctx.LASTMOMENT, TILES: ctx.TILES, ERANOTE: ctx.ERANOTE, INTROS: ctx.INTROS, HEATMAP: ctx.HEATMAP, VIS: V.VIS
  });
  const rep = qb.filter(r => r[7]).length, p = qb.filter(r => r[4] === 'p').length;
  console.log(`${app.file.padEnd(30)} ${LESSONS.length} lessons, ${qb.length} questions (${rep} reported in papers, ${p} repeatedly asked), ` +
    `${ctx.LASTMOMENT.length} cards, ${ctx.TILES.length} tiles, ${Math.round(size / 1024)} KB`);
});
