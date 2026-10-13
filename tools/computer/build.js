// Build the Computer Knowledge page from tools/computer/data.
//
//   node tools/computer/build.js
//
// Writes study-computer.html. The engine and look are shared with the History pages (tools/workbook/).
// Afterwards: node tools/index_app.js study-computer.html computer gs
const path = require('path');
const { fail, loadData, check, writePage } = require('../workbook/lib.js');
const DATA = path.join(__dirname, 'data');

// Data files only push: 1x lessons and their questions (in three parts), 20 reported questions, 40 the exam side.
const ctx = loadData(DATA, { LESSONS: [], QB: [], LASTMOMENT: [], TILES: [] });
const num = id => +String(id).slice(1);
const LESSONS = ctx.LESSONS.slice().sort((a, b) => num(a.id) - num(b.id));
const PARTS = [['Part 1 · Hardware', 'हार्डवेयर', 1, 6], ['Part 2 · Software & MS Office', 'सॉफ़्टवेयर एवं एमएस ऑफ़िस', 7, 11], ['Part 3 · Internet, networks & security', 'इंटरनेट, नेटवर्क एवं सुरक्षा', 12, 99]];
LESSONS.forEach(l => { const p = PARTS.find(p => num(l.id) >= p[2] && num(l.id) <= p[3]); l.part = [p[0], p[1]]; });
const byId = check(LESSONS, ctx.QB);
ctx.HEATMAP.rows.forEach(r => { if (!byId.has(r.id)) fail('heat map lists ' + r.id + ', which no data file defines'); });
LESSONS.forEach(l => { if (!ctx.HEATMAP.rows.some(r => r.id === l.id)) fail(l.id + ' is missing from the heat map'); });
const qb = ctx.QB.slice().sort((a, b) => num(a[0]) - num(b[0]));

// The history of computing timeline lives in lesson C1; the Revise tab shows it as well.
const tl = (byId.get('C1') || { blocks: [] }).blocks.find(b => b.k === 'tl');
const size = writePage({ file: 'study-computer.html', title: 'Computer Knowledge', brand: 'Computer Knowledge',
  small: 'कंप्यूटर ज्ञान · SSC CGL · CHSL · RRB NTPC', tabs: ['learn', 'practice', 'mock', 'revise', 'plan'], source: 'tools/computer/build.js from tools/computer/data' }, {
  APP: { id: 'computer', key: 'computer_knowledge_v1', mode: 'era', era: 'cmp', title: 'Computer Knowledge', hi: 'कंप्यूटर ज्ञान',
    tagline: 'SSC CGL · CHSL · RRB NTPC', plans: [3, 5, 7, 10, 15], storyLabel: 'In plain words · two minutes', keyLabel: 'Remember this:', apps: [] },
  GROUPS: ctx.GROUPS, LESSONS, QB: qb,
  TIMELINE: tl ? [{ era: 'cmp', rows: tl.rows }] : [],
  LASTMOMENT: ctx.LASTMOMENT, TILES: ctx.TILES, ERANOTE: ctx.ERANOTE, INTROS: ctx.INTROS, HEATMAP: ctx.HEATMAP
});
const rep = qb.filter(r => r[7]).length, p = qb.filter(r => r[4] === 'p').length;
console.log(`study-computer.html  ${LESSONS.length} lessons, ${qb.length} questions (${rep} reported in papers, ${p} repeatedly asked), ` +
  `${ctx.LASTMOMENT.length} last-moment cards, ${ctx.TILES.length} tiles, ${Math.round(size / 1024)} KB`);
