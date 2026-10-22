// Build the Computer Knowledge page from tools/computer/data and tools/computer/lab.js.
//
//   node tools/computer/build.js
//
// Writes study-computer.html. The engine and look are shared with the History pages (tools/workbook/),
// and the Lab games with the Static GK apps (tools/workbook/games.js).
// Afterwards: node tools/index_app.js study-computer.html computer gs
const fs = require('fs'), path = require('path');
const { fail, loadData, check, writePage } = require('../workbook/lib.js');
const DATA = path.join(__dirname, 'data');

// Data files only push: 1x lessons and their questions (one file per part), 20 reported questions, 40 the exam side.
const ctx = loadData(DATA, { LESSONS: [], QB: [], LASTMOMENT: [], TILES: [] });
// Lessons keep their ids (saved progress hangs on them), so newer lessons (C18 onwards) are placed by this list.
const PARTS = [
  ['Part 1 · Hardware', 'हार्डवेयर', ['C1', 'C2', 'C3', 'C18', 'C4', 'C5', 'C6']],
  ['Part 2 · Software, Windows & MS Office', 'सॉफ़्टवेयर, विंडोज़ एवं एमएस ऑफ़िस', ['C7', 'C19', 'C20', 'C8', 'C9', 'C10', 'C11', 'C21']],
  ['Part 3 · Internet, networks & security', 'इंटरनेट, नेटवर्क एवं सुरक्षा', ['C12', 'C13', 'C14', 'C15', 'C16', 'C22', 'C17']]
];
const ORDER = PARTS.flatMap(p => p[2]);
ctx.LESSONS.forEach(l => { if (!ORDER.includes(l.id)) fail(l.id + ' is not placed in PARTS in tools/computer/build.js'); });
const LESSONS = ctx.LESSONS.slice().sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
LESSONS.forEach(l => { const p = PARTS.find(p => p[2].includes(l.id)); l.part = [p[0], p[1]]; });
const byId = check(LESSONS, ctx.QB);
ORDER.forEach(id => { if (!byId.has(id)) fail('PARTS lists ' + id + ', which no data file defines'); });
ctx.HEATMAP.rows.forEach(r => { if (!byId.has(r.id)) fail('heat map lists ' + r.id + ', which no data file defines'); });
LESSONS.forEach(l => { if (!ctx.HEATMAP.rows.some(r => r.id === l.id)) fail(l.id + ' is missing from the heat map'); });
LESSONS.forEach(l => { const n = ctx.QB.filter(q => q[0] === l.id).length; if (n < 12) fail(l.id + ' has only ' + n + ' questions'); });
const qb = ctx.QB.slice().sort((a, b) => ORDER.indexOf(a[0]) - ORDER.indexOf(b[0]));

// The history of computing timeline lives in lesson C1; the Revise tab shows it as well.
const tl = (byId.get('C1') || { blocks: [] }).blocks.find(b => b.k === 'tl');
const lab = fs.readFileSync(path.join(__dirname, 'lab.js'), 'utf8') + '\n' + fs.readFileSync(path.join(__dirname, '..', 'workbook', 'games.js'), 'utf8');
const tabs = ['learn', 'practice', 'mock', 'lab', 'revise', 'plan'];
const size = writePage({ file: 'study-computer.html', title: 'Computer Knowledge', brand: 'Computer Knowledge',
  small: 'कंप्यूटर ज्ञान · SSC CGL · CHSL · RRB NTPC', tabs, source: 'tools/computer/build.js from tools/computer/data', extra: lab }, {
  APP: { id: 'computer', key: 'computer_knowledge_v1', mode: 'era', era: 'cmp', title: 'Computer Knowledge', hi: 'कंप्यूटर ज्ञान',
    tagline: 'SSC CGL · CHSL · RRB NTPC', plans: [3, 5, 7, 10, 15, 30], storyLabel: 'In plain words · two minutes', keyLabel: 'Remember this:', apps: [], tabs },
  GROUPS: ctx.GROUPS, LESSONS, QB: qb,
  TIMELINE: tl ? [{ era: 'cmp', rows: tl.rows }] : [],
  LASTMOMENT: ctx.LASTMOMENT, TILES: ctx.TILES, ERANOTE: ctx.ERANOTE, INTROS: ctx.INTROS, HEATMAP: ctx.HEATMAP
});
const rep = qb.filter(r => r[7]).length, p = qb.filter(r => r[4] === 'p').length;
console.log(`study-computer.html  ${LESSONS.length} lessons, ${qb.length} questions (${rep} reported in papers, ${p} repeatedly asked), ` +
  `${ctx.LASTMOMENT.length} last-moment cards, ${ctx.TILES.length} tiles, ${Math.round(size / 1024)} KB`);
