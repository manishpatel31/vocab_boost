// Build the Chemistry page from tools/chemistry/data and the Lab (tools/chemistry/lab.js).
//
//   node tools/chemistry/build.js
//
// Writes study-chemistry.html. The engine and look are shared with History and Computer Knowledge (tools/workbook/);
// the Lab tab — periodic table and games — is this page's own script.
// Afterwards: node tools/index_app.js study-chemistry.html chemistry gs
const fs = require('fs'), path = require('path');
const { fail, loadData, check, writePage } = require('../workbook/lib.js');
const DATA = path.join(__dirname, 'data');

// Data files only push: 1x lessons with their questions, last-moment cards and tiles; 40 the exam side.
const ctx = loadData(DATA, { LESSONS: [], QB: [], LASTMOMENT: [], TILES: [] });
const num = id => +String(id).slice(1);
const LESSONS = ctx.LESSONS.slice().sort((a, b) => num(a.id) - num(b.id));
const PARTS = [['Part 1 · Basics: matter, atom, periodic table', 'मूल बातें', 1, 5], ['Part 2 · Reactions and compounds', 'अभिक्रियाएँ और यौगिक', 6, 10],
  ['Part 3 · Carbon and everyday chemistry', 'कार्बन और दैनिक रसायन', 11, 14], ['Part 4 · Gases, environment and the nucleus', 'गैसें, पर्यावरण और नाभिक', 15, 99]];
LESSONS.forEach(l => { const p = PARTS.find(p => num(l.id) >= p[2] && num(l.id) <= p[3]); l.part = [p[0], p[1]]; });
const byId = check(LESSONS, ctx.QB);
ctx.HEATMAP.rows.forEach(r => { if (!byId.has(r.id)) fail('heat map lists ' + r.id + ', which no data file defines'); });
LESSONS.forEach(l => { if (!ctx.HEATMAP.rows.some(r => r.id === l.id)) fail(l.id + ' is missing from the heat map'); });
LESSONS.forEach(l => { const n = ctx.QB.filter(q => q[0] === l.id).length; if (n < 12) fail(l.id + ' has only ' + n + ' questions'); });
const qb = ctx.QB.slice().sort((a, b) => num(a[0]) - num(b[0]));

// the atom's timeline (K3) and the periodic table's (K4) also show on the Revise tab
const tls = ['K3', 'K4', 'K18'].map(id => (byId.get(id).blocks.find(b => b.k === 'tl') || {}).rows || []).flat();
const lab = fs.readFileSync(path.join(__dirname, 'lab.js'), 'utf8');
const size = writePage({ file: 'study-chemistry.html', title: 'Chemistry', brand: 'Chemistry',
  small: 'रसायन विज्ञान · SSC CGL · CHSL · RRB NTPC · Group D', tabs: ['learn', 'practice', 'mock', 'lab', 'revise', 'plan'],
  source: 'tools/chemistry/build.js from tools/chemistry/data and lab.js', extra: lab }, {
  APP: { id: 'chemistry', key: 'chemistry_v1', mode: 'era', era: 'chem', title: 'Chemistry', hi: 'रसायन विज्ञान',
    tagline: 'SSC CGL · CHSL · RRB NTPC · Group D', plans: [3, 5, 7, 10, 15], storyLabel: 'The story first · two minutes', keyLabel: 'Remember this:', apps: [],
    tabs: ['learn', 'practice', 'mock', 'lab', 'revise', 'plan'] },
  GROUPS: ctx.GROUPS, LESSONS, QB: qb,
  TIMELINE: tls.length ? [{ era: 'chem', rows: tls }] : [],
  LASTMOMENT: ctx.LASTMOMENT, TILES: ctx.TILES, ERANOTE: ctx.ERANOTE, INTROS: ctx.INTROS, HEATMAP: ctx.HEATMAP
});
const p = qb.filter(r => r[4] === 'p').length;
console.log(`study-chemistry.html  ${LESSONS.length} lessons, ${qb.length} questions (${p} repeatedly asked), ` +
  `${ctx.LASTMOMENT.length} last-moment cards, ${ctx.TILES.length} tiles, ${Math.round(size / 1024)} KB`);
