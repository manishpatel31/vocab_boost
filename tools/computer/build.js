// Build the Computer Knowledge pages from tools/computer/data and tools/computer/lab.js.
//
//   node tools/computer/build.js
//
// Writes study-computer.html (the hub: start here, a plan across the three parts, revision) and one app per part
// in PARTS. The hub and the parts share one saved state (APP.shared), so answers, bookmarks, finished lessons and
// Lab XP made before the split carry over. The engine and look are shared with the History pages (tools/workbook/),
// and the Lab games with the Static GK apps (tools/workbook/games.js).
// Afterwards (one module for all three parts):
//   node tools/index_app.js study-computer-hardware.html,study-computer-software.html,study-computer-internet.html computer gs
const fs = require('fs'), path = require('path');
const { fail, loadData, check, writePage, applyVisual } = require('../workbook/lib.js');
const DATA = path.join(__dirname, 'data');

// Data files only push: 1x lessons and their questions (one file per part), 20 reported questions, 40 the exam side.
const ctx = loadData(DATA, { LESSONS: [], QB: [], LASTMOMENT: [], TILES: [] });
// Lessons keep their ids (saved progress hangs on them), so newer lessons (C18 onwards) are placed by this list.
const PARTS = [
  { id: 'comphw', file: 'study-computer-hardware.html', ico: '🖥️', title: 'Computer Hardware', hi: 'हार्डवेयर', part: 'Part 1 · Hardware',
    lessons: ['C1', 'C2', 'C3', 'C18', 'C4', 'C5', 'C6'] },
  { id: 'compsw', file: 'study-computer-software.html', ico: '📝', title: 'Software, Windows & MS Office', hi: 'सॉफ़्टवेयर, विंडोज़ एवं एमएस ऑफ़िस', part: 'Part 2 · Software, Windows & MS Office',
    lessons: ['C7', 'C19', 'C20', 'C8', 'C9', 'C10', 'C11', 'C21'] },
  { id: 'compnet', file: 'study-computer-internet.html', ico: '🌐', title: 'Internet, Networks & Security', hi: 'इंटरनेट, नेटवर्क एवं सुरक्षा', part: 'Part 3 · Internet, networks & security',
    lessons: ['C12', 'C13', 'C14', 'C15', 'C16', 'C22', 'C17'] }
];
const ORDER = PARTS.flatMap(p => p.lessons);
ctx.LESSONS.forEach(l => { if (!ORDER.includes(l.id)) fail(l.id + ' is not placed in PARTS in tools/computer/build.js'); });
const LESSONS = ctx.LESSONS.slice().sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
LESSONS.forEach(l => { const p = PARTS.find(p => p.lessons.includes(l.id)); l.part = [p.part, p.hi]; });
const byId = check(LESSONS, ctx.QB);
ORDER.forEach(id => { if (!byId.has(id)) fail('PARTS lists ' + id + ', which no data file defines'); });
ctx.HEATMAP.rows.forEach(r => { if (!byId.has(r.id)) fail('heat map lists ' + r.id + ', which no data file defines'); });
LESSONS.forEach(l => { if (!ctx.HEATMAP.rows.some(r => r.id === l.id)) fail(l.id + ' is missing from the heat map'); });
LESSONS.forEach(l => { const n = ctx.QB.filter(q => q[0] === l.id).length; if (n < 12) fail(l.id + ' has only ' + n + ' questions'); });
const qb = ctx.QB.slice().sort((a, b) => ORDER.indexOf(a[0]) - ORDER.indexOf(b[0]));

// The history of computing timeline lives in lesson C1; the Revise tab shows it as well.
const tl = (byId.get('C1') || { blocks: [] }).blocks.find(b => b.k === 'tl');
const lab = fs.readFileSync(path.join(__dirname, 'lab.js'), 'utf8');
const tabs = ['learn', 'practice', 'mock', 'lab', 'revise', 'plan'];
const KEY = 'computer_knowledge_v1';          // the one saved state of the hub and the three parts (see APP.shared)
// photos, diagrams and charts: visual.js beside this file (see applyVisual in tools/workbook/lib.js)
const V = applyVisual(path.join(__dirname, 'visual.js'), LESSONS, { QB: qb });
const SOURCE = 'tools/computer/build.js from tools/computer/data';
const hubRef = { id: 'computer', file: 'study-computer.html', title: 'Computer Knowledge: Start here' };
const appRef = p => ({ id: p.id, file: p.file, key: KEY, title: p.title, hi: p.hi, ico: p.ico, era: 'cmp', major: true, lessons: p.lessons });
const heat = ids => Object.assign({}, ctx.HEATMAP, { rows: ctx.HEATMAP.rows.filter(r => ids.includes(r.id)) });
const report = [];
PARTS.forEach(p => {
  const own = LESSONS.filter(l => p.lessons.includes(l.id)), q = qb.filter(r => p.lessons.includes(r[0]));
  const size = writePage({ file: p.file, title: p.title, brand: p.title, small: p.hi + ' · Computer Knowledge · SSC CGL · CHSL · RRB NTPC', tabs, source: SOURCE, extra: lab, games: true, visual: V.visual }, {
    APP: { id: p.id, key: KEY, shared: true, mode: 'era', era: 'cmp', title: p.title, hi: p.hi, ico: p.ico,
      tagline: 'Computer Knowledge · SSC CGL · CHSL · RRB NTPC', plans: [2, 3, 5, 7, 10], storyLabel: 'In plain words · two minutes', keyLabel: 'Remember this:',
      hub: hubRef, apps: PARTS.map(appRef), tabs },
    GROUPS: ctx.GROUPS, LESSONS: own, QB: q,
    TIMELINE: tl && p.lessons.includes('C1') ? [{ era: 'cmp', rows: tl.rows }] : [],
    LASTMOMENT: ctx.LASTMOMENT, TILES: ctx.TILES, ERANOTE: ctx.ERANOTE, INTROS: { [p.id]: ctx.INTROS[p.id] }, HEATMAP: heat(p.lessons), VIS: V.VIS
  });
  report.push(`${p.file.padEnd(30)} ${String(own.length).padStart(2)} lessons ${String(q.length).padStart(4)} questions ${Math.round(size / 1024)} KB`);
});
// the hub: every lesson's title, summary, tricks and traps (for plans, revision and links), no questions of its own
const hubLessons = LESSONS.map(l => Object.assign({}, l, { app: PARTS.find(p => p.lessons.includes(l.id)).id, blocks: l.blocks.filter(b => b.k === 'trick' || b.k === 'trap') }));
const hubSize = writePage({ file: 'study-computer.html', title: 'Computer Knowledge', brand: 'Computer Knowledge', small: 'कंप्यूटर ज्ञान · start here · plan · revise',
  tabs: ['start', 'plan', 'revise'], source: SOURCE }, {
  APP: { id: 'computer', key: KEY, shared: true, mode: 'hub', title: 'Computer Knowledge: Start here', plans: [3, 5, 7, 10, 15, 30], hub: hubRef, apps: PARTS.map(appRef),
    qcount: Object.fromEntries(PARTS.map(p => [p.id, qb.filter(r => p.lessons.includes(r[0])).length])),
    pcount: Object.fromEntries(LESSONS.map(l => [l.id, qb.filter(r => r[0] === l.id && r[4] === 'p').length])),
    start: { eyebrow: 'New to computers? Start here', h1: 'Computer Knowledge, from zero to exam-ready', subject: 'Computer Knowledge', apps: 'The three parts', every: ' · all three parts',
      read: '<b>Read “In plain words” first</b> in every lesson, then the tables.',
      p: 'The computer module is split into three parts &mdash; Hardware; Software, Windows &amp; MS Office; and Internet, Networks &amp; Security &mdash; with {n} lessons between them. You do not need to know anything before you begin: every lesson opens with a two-minute explanation in plain words, then gives you the tables, shortcuts, tricks and traps the exam asks about. Your answers, bookmarks and Lab XP are shared by all three parts.' } },
  GROUPS: ctx.GROUPS, LESSONS: hubLessons, QB: [], TIMELINE: tl ? [{ era: 'cmp', rows: tl.rows }] : [],
  LASTMOMENT: ctx.LASTMOMENT, TILES: ctx.TILES, ERANOTE: ctx.ERANOTE, INTROS: Object.fromEntries(PARTS.map(p => [p.id, ctx.INTROS[p.id]])), HEATMAP: ctx.HEATMAP
});
const rep = qb.filter(r => r[7]).length, pp = qb.filter(r => r[4] === 'p').length;
console.log(report.join('\n'));
console.log(`study-computer.html (hub)       ${LESSONS.length} lessons, ${qb.length} questions in the parts (${rep} reported in papers, ${pp} repeatedly asked), ` +
  `${ctx.LASTMOMENT.length} last-moment cards, ${ctx.TILES.length} tiles, ${Math.round(hubSize / 1024)} KB`);
