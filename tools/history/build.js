// Build the History pages from tools/history/data.
//
//   node tools/history/build.js
//
// Writes study-history.html (the hub: start here, full-history plan, cross-era revision)
// and the five subject apps listed in apps.js. Each page holds only its own lessons and
// questions; the engine and look are shared with the other workbooks (tools/workbook/).
// Afterwards run tools/index_app.js for each subject app (see tools/README.md).
const path = require('path');
const { hash, fail, loadData, check, writePage, applyVisual } = require('../workbook/lib.js');
const DATA = path.join(__dirname, 'data');
const CFG = require('./apps.js');

/* ---------- 1. load the data files in name order into one context ---------- */
// 1x lessons · 2x question bank · 3x new lessons (lessons + their questions) · 4x revision and stories
let firstBank = null;          // number of questions in the 2x files; their flags come from flags.json
const ctx = loadData(DATA, {}, (f, c) => { if (firstBank === null && f >= '3') firstBank = c.QB ? c.QB.length : 0; });
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
const fs = require('fs'), flagFile = path.join(DATA, 'flags.json');
if (fs.existsSync(flagFile)) {
  const keep = new Set(JSON.parse(fs.readFileSync(flagFile, 'utf8')).keep);
  for (let i = 0; i < firstBank; i++) QB[i][4] = keep.has(hash(QB[i][1])) ? 'p' : '';
}

/* ---------- 3. checks: every lesson placed once, every question sound ---------- */
const byId = check(LESSONS, QB);
const placed = new Map();
CFG.apps.forEach(a => a.lessons.forEach(id => {
  if (!byId.has(id)) fail(a.id + ' lists ' + id + ', which no data file defines');
  if (placed.has(id)) fail(id + ' is listed in both ' + placed.get(id) + ' and ' + a.id);
  placed.set(id, a.id);
}));
LESSONS.forEach(l => { if (!placed.has(l.id)) fail(l.id + ' (' + l.title + ') is not listed in any app in apps.js'); });

/* ---------- 4. write the pages ---------- */
const SOURCE = 'tools/history/build.js from tools/history/data';
const appRef = a => ({ id: a.id, file: a.file, key: a.key, title: a.title, hi: a.hi, ico: a.ico, era: a.era, lessons: a.lessons });
const hubRef = { id: CFG.hub.id, file: CFG.hub.file, title: CFG.hub.title };
const report = [];
CFG.apps.forEach(a => {
  const ids = new Set(a.lessons);
  const part = {}; (a.parts || []).forEach(p => p[2].forEach(id => { part[id] = [p[0], p[1]]; }));
  const lessons = a.lessons.map(id => Object.assign({}, byId.get(id), part[id] ? { part: part[id] } : {}));
  const qb = QB.filter(r => ids.has(r[0]));
  // photos, maps and diagrams for one app: tools/history/visual/<id>.js (copies, so the hub's lessons stay as they are)
  const own = lessons.map(l => JSON.parse(JSON.stringify(l)));
  const V = applyVisual(path.join(__dirname, 'visual', a.id + '.js'), own, { QB: qb });
  const size = writePage({ file: a.file, title: a.title, brand: a.title, small: a.hi + ' · SSC CGL workbook', tabs: ['learn', 'practice', 'mock', 'revise', 'plan'], source: SOURCE, visual: V.visual }, {
    APP: { id: a.id, key: a.key, mode: 'era', era: a.era, title: a.title, hi: a.hi, ico: a.ico, tagline: 'History for SSC', plans: a.plans, hub: hubRef, apps: CFG.apps.map(appRef) },
    GROUPS, LESSONS: own, QB: qb, VIS: V.VIS,
    TIMELINE: ctx.TIMELINE.filter(t => t.era === a.era),
    LASTMOMENT: ctx.LASTMOMENT.filter(c => (c.era || []).includes(a.era)),
    TILES: ctx.TILES.filter(t => t[2] === a.era),
    ERANOTE: { [a.era]: ctx.ERANOTE[a.era] }, INTROS: INTROS[a.id] ? { [a.id]: INTROS[a.id] } : {}
  });
  report.push(`${a.file.padEnd(30)} ${String(lessons.length).padStart(2)} lessons ${String(qb.length).padStart(4)} questions ${Math.round(size / 1024)} KB`);
});
// the hub: every lesson (for summaries, plans and links), no questions of its own
const all = [];
CFG.apps.forEach(a => a.lessons.forEach(id => all.push(Object.assign({}, byId.get(id), { app: a.id }))));
const hubSize = writePage(Object.assign({ tabs: ['start', 'plan', 'revise'], source: SOURCE }, CFG.hub), {
  APP: { id: CFG.hub.id, key: CFG.hub.key, mode: 'hub', title: CFG.hub.title, plans: CFG.hub.plans, hub: hubRef, apps: CFG.apps.map(appRef),
    qcount: Object.fromEntries(CFG.apps.map(a => [a.id, QB.filter(r => a.lessons.includes(r[0])).length])),
    pcount: Object.fromEntries(LESSONS.map(l => [l.id, QB.filter(r => r[0] === l.id && r[4] === 'p').length])) },
  GROUPS, LESSONS: all, QB: [], TIMELINE: ctx.TIMELINE, LASTMOMENT: ctx.LASTMOMENT, TILES: ctx.TILES, ERANOTE: ctx.ERANOTE, INTROS
});
report.push(`${CFG.hub.file.padEnd(30)} ${String(all.length).padStart(2)} lessons    0 questions ${Math.round(hubSize / 1024)} KB  (hub)`);
console.log(report.join('\n'));
console.log(`${LESSONS.length} lessons, ${QB.length} questions (${QB.filter(r => r[4] === 'p').length} marked repeatedly asked), ` +
  `${Object.keys(STORIES).length} stories${Object.keys(STORIES).length ? '' : ' — stories.js not added yet'}`);
