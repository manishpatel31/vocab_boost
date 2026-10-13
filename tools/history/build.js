// Build the History pages from tools/history/data.
//
//   node tools/history/build.js
//
// Writes study-history.html (the hub: start here, full-history plan, cross-era revision)
// and the five subject apps listed in apps.js. Each page holds only its own lessons and
// questions; the engine (src/engine.js) and look (src/head.html, src/tail.html) are shared.
// Afterwards run tools/index_app.js for each subject app (see tools/README.md).
const fs = require('fs'), path = require('path'), vm = require('vm');
const HERE = __dirname, ROOT = path.join(HERE, '..', '..') + '/', DATA = path.join(HERE, 'data');
const CFG = require('./apps.js');
const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return 'q' + (h >>> 0).toString(36); };
const fail = m => { console.error('build stopped: ' + m); process.exit(1); };

/* ---------- 1. load the data files in name order into one context ---------- */
// 1x lessons · 2x question bank · 3x new lessons (lessons + their questions) · 4x revision and stories
const ctx = {}; vm.createContext(ctx);
let firstBank = null;          // number of questions in the 2x files; their flags come from flags.json
fs.readdirSync(DATA).filter(f => f.endsWith('.js')).sort().forEach(f => {
  if (firstBank === null && f >= '3') firstBank = ctx.QB ? ctx.QB.length : 0;
  vm.runInContext(fs.readFileSync(path.join(DATA, f), 'utf8').replace(/^const (\w+)/gm, 'var $1'), ctx, { filename: f });
});
if (firstBank === null) firstBank = ctx.QB.length;
const { GROUPS, LESSONS, QB } = ctx;
const STORIES = ctx.STORIES || {}, INTROS = ctx.INTROS || {}, EXTRA_TRICKS = ctx.EXTRA_TRICKS || {};

/* ---------- 2. stories, extra tricks and the "repeatedly asked" flags ---------- */
LESSONS.forEach(l => {
  const st = STORIES[l.id];
  if (st && !l.blocks.some(b => b.k === 'story')) {
    const at = l.blocks.findIndex(b => b.k === 'hot') + 1;
    l.blocks.splice(at, 0, { k: 'story', h: st.s, key: st.key });
  }
  if (EXTRA_TRICKS[l.id]) {
    const t = l.blocks.findIndex(b => b.k === 'trap');
    l.blocks.splice(t < 0 ? l.blocks.length : t, 0, { k: 'trick', h: EXTRA_TRICKS[l.id] });
  }
});
const flagFile = path.join(DATA, 'flags.json');
if (fs.existsSync(flagFile)) {
  const keep = new Set(JSON.parse(fs.readFileSync(flagFile, 'utf8')).keep);
  for (let i = 0; i < firstBank; i++) QB[i][4] = keep.has(hash(QB[i][1])) ? 'p' : '';
}

/* ---------- 3. checks: every lesson placed once, every question sound ---------- */
const byId = new Map(LESSONS.map(l => [l.id, l]));
if (byId.size !== LESSONS.length) fail('two lessons share an id');
const placed = new Map();
CFG.apps.forEach(a => a.lessons.forEach(id => {
  if (!byId.has(id)) fail(a.id + ' lists ' + id + ', which no data file defines');
  if (placed.has(id)) fail(id + ' is listed in both ' + placed.get(id) + ' and ' + a.id);
  placed.set(id, a.id);
}));
LESSONS.forEach(l => { if (!placed.has(l.id)) fail(l.id + ' (' + l.title + ') is not listed in any app in apps.js'); });
const seen = new Set();
QB.forEach(r => {
  if (!byId.has(r[0])) fail('question for unknown lesson ' + r[0] + ': ' + r[1]);
  if (!Array.isArray(r[2]) || r[2].length !== 4 || new Set(r[2].map(o => String(o).trim().toLowerCase())).size !== 4) fail('needs 4 different options: ' + r[1]);
  const h = hash(r[1]); if (seen.has(h)) fail('two questions have the same text: ' + r[1]); seen.add(h);
});
LESSONS.forEach(l => (l.sum || []).forEach(s => { if (/<\/?[a-z]/i.test(s)) fail(l.id + ' summary lines are plain text, shown as typed (no HTML tags): ' + s); }));

/* ---------- 4. write the pages ---------- */
const head = fs.readFileSync(path.join(HERE, 'src', 'head.html'), 'utf8');
const engine = fs.readFileSync(path.join(HERE, 'src', 'engine.js'), 'utf8');
const tail = fs.readFileSync(path.join(HERE, 'src', 'tail.html'), 'utf8');
const ICON = {
  learn: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
  practice: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  mock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6M12 2v3"/>',
  revise: '<path d="M12 3 2 8l10 5 10-5z"/><path d="m2 13 10 5 10-5"/>',
  plan: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15l2 2 4-4"/>',
  start: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>'
};
const LABEL = { learn: 'Learn', practice: 'Practice', mock: 'Mock', revise: 'Revise', plan: 'Plan', start: 'Start here' };
const nav = tabs => tabs.map(t => `    <button type="button" id="nav-${t}" data-tab="${t}"><svg viewBox="0 0 24 24">${ICON[t]}</svg><span>${LABEL[t]}</span></button>`).join('\n');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const J = v => JSON.stringify(v).replace(/<\//g, '<\\/');            // never close the <script> early
const list = (name, arr) => `const ${name} = [\n${arr.map(J).join(',\n')}\n];\n`;
const appRef = a => ({ id: a.id, file: a.file, key: a.key, title: a.title, hi: a.hi, ico: a.ico, era: a.era, lessons: a.lessons });

function page(app, data, tabs){
  const top = head.replace('{{TITLE}}', esc(app.title)).replace('{{BRAND}}', esc(app.brand || app.title))
    .replace('{{SMALL}}', esc(app.small)).replace('{{NAV}}', nav(tabs));
  const block = `const APP = ${J(data.APP)};\n` + list('GROUPS', GROUPS) + list('LESSONS', data.LESSONS) + list('QB', data.QB) +
    list('TIMELINE', data.TIMELINE) + list('LASTMOMENT', data.LASTMOMENT) + list('TILES', data.TILES) +
    `const ERANOTE = ${J(data.ERANOTE)};\nconst INTROS = ${J(data.INTROS)};\n`;
  const html = top + '<script>\n"use strict";\n/* data: generated by tools/history/build.js from tools/history/data — edit there, not here */\n' + block +
    '</script>\n\n<script>\n"use strict";\n' + engine + '\n</script>\n' + tail;
  fs.writeFileSync(ROOT + app.file, html);
  return html.length;
}
const hubRef = { id: CFG.hub.id, file: CFG.hub.file, title: CFG.hub.title };
const report = [];
CFG.apps.forEach(a => {
  const ids = new Set(a.lessons);
  const part = {}; (a.parts || []).forEach(p => p[2].forEach(id => { part[id] = [p[0], p[1]]; }));
  const lessons = a.lessons.map(id => Object.assign({}, byId.get(id), part[id] ? { part: part[id] } : {}));
  const qb = QB.filter(r => ids.has(r[0]));
  const data = {
    APP: { id: a.id, key: a.key, mode: 'era', era: a.era, title: a.title, hi: a.hi, ico: a.ico, plans: a.plans, hub: hubRef, apps: CFG.apps.map(appRef) },
    LESSONS: lessons, QB: qb,
    TIMELINE: ctx.TIMELINE.filter(t => t.era === a.era),
    LASTMOMENT: ctx.LASTMOMENT.filter(c => (c.era || []).includes(a.era)),
    TILES: ctx.TILES.filter(t => t[2] === a.era),
    ERANOTE: { [a.era]: ctx.ERANOTE[a.era] }, INTROS: INTROS[a.id] ? { [a.id]: INTROS[a.id] } : {}
  };
  const size = page(Object.assign({ brand: a.title, small: a.hi + ' · SSC CGL workbook' }, a), data, ['learn', 'practice', 'mock', 'revise', 'plan']);
  report.push(`${a.file.padEnd(30)} ${String(lessons.length).padStart(2)} lessons ${String(qb.length).padStart(4)} questions ${Math.round(size / 1024)} KB`);
});
// the hub: every lesson (for summaries, plans and links), no questions of its own
const all = [];
CFG.apps.forEach(a => a.lessons.forEach(id => all.push(Object.assign({}, byId.get(id), { app: a.id }))));
const hubSize = page(CFG.hub, {
  APP: { id: CFG.hub.id, key: CFG.hub.key, mode: 'hub', title: CFG.hub.title, plans: CFG.hub.plans, hub: hubRef, apps: CFG.apps.map(appRef),
    qcount: Object.fromEntries(CFG.apps.map(a => [a.id, QB.filter(r => a.lessons.includes(r[0])).length])),
    pcount: Object.fromEntries(LESSONS.map(l => [l.id, QB.filter(r => r[0] === l.id && r[4] === 'p').length])) },
  LESSONS: all, QB: [], TIMELINE: ctx.TIMELINE, LASTMOMENT: ctx.LASTMOMENT, TILES: ctx.TILES, ERANOTE: ctx.ERANOTE, INTROS
}, ['start', 'plan', 'revise']);
report.push(`${CFG.hub.file.padEnd(30)} ${String(all.length).padStart(2)} lessons    0 questions ${Math.round(hubSize / 1024)} KB  (hub)`);
console.log(report.join('\n'));
console.log(`${LESSONS.length} lessons, ${QB.length} questions (${QB.filter(r => r[4] === 'p').length} marked repeatedly asked), ` +
  `${Object.keys(STORIES).length} stories${Object.keys(STORIES).length ? '' : ' — stories.js not added yet'}`);
