#!/usr/bin/env node
// Pictures for the hand-built study pages (Sports, International Organisations …), from tools/hand/<name>.visual.js.
// The visual file uses the same place() / rows() / GEO as the workbook apps' visual.js; this script checks every place
// against the page's own LESSONS and writes the blocks into the page, between the "visual" markers just before the boot,
// where visPlace() (study-visual.js) splices them into LESSONS before anything is drawn. Run it again after editing.
//   node tools/workbook/apply-hand.js sports        → study-sports.html from tools/hand/sports.visual.js
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..', '..');
const PAGES = { sports: 'study-sports.html', intlorgs: 'study-intl-orgs.html' };
const name = process.argv[2], file = PAGES[name];
if (!file) { console.error('usage: apply-hand.js ' + Object.keys(PAGES).join('|')); process.exit(1); }
const P = path.join(ROOT, file);
let s = fs.readFileSync(P, 'utf8');
const fail = m => { console.error(file + ': ' + m); process.exit(1); };
const rep = (a, b) => { if (s.split(a).length !== 2) fail('expected exactly one: ' + a.slice(0, 80)); s = s.replace(a, () => b); };

// the page's lessons, as data
const a = s.indexOf('const LESSONS = '), b = s.indexOf('\nconst QB = ');
if (a < 0 || b < 0) fail('no LESSONS / QB');
const ctx = {}; vm.createContext(ctx); vm.runInContext('var LESSONS = ' + s.slice(a + 'const LESSONS = '.length, b).trim().replace(/;$/, ''), ctx);
const LESSONS = ctx.LESSONS;

// run the visual file: place() records [lesson, where, blocks] after checking that the spot exists
const strip = x => String(x == null ? '' : x).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
const placed = [];
const place = (id, where, ...blocks) => { const l = LESSONS.find(x => x.id === id); if (!l) fail('no lesson ' + id);
  if (!['start', 'end', 'story'].includes(where) && !l.blocks.some(bl => bl.title && strip(bl.title).startsWith(where))) fail(id + ' has no block titled "' + where + '"');
  placed.push([id, where, blocks]); };
const rows = (id, title) => { const l = LESSONS.find(x => x.id === id), bl = l && l.blocks.find(x => x.rows && x.title && strip(x.title).startsWith(title));
  if (!bl) fail(id + ' has no table "' + title + '"'); return bl.rows.map(r => r.map(strip)); };
const vf = path.join(__dirname, '..', 'hand', name + '.visual.js');
const vctx = { place, rows, LESSONS, VISUAL: null, fail, GEO: require('./geo.js'), KIT: require('./visual-kit.js') }; vm.createContext(vctx);
vm.runInContext(fs.readFileSync(vf, 'utf8').replace(/^const (\w+)/gm, 'var $1'), vctx, { filename: vf });
if (!vctx.VISUAL) fail('the visual file sets no VISUAL');
const J = v => JSON.stringify(v).replace(/<\//g, '<\\/');

// 1) the shared scripts, before the page's own
const has = m => [].concat(vctx.VISUAL.mode).includes(m), world = has('world'), rivers = has('rivers');
s = s.replace(/\n<script src="study-(visual|world|rivers)\.js\?v=[0-9a-f]+"><\/script>/g, '');
const first = s.lastIndexOf('\n<script>\n', s.indexOf('const LESSONS = '));   // the page's own script, the one that holds LESSONS
if (first < 0) fail('no main script');
s = s.slice(0, first) + '\n<script src="study-visual.js?v=00000000"></script>' + (world ? '\n<script src="study-world.js?v=00000000"></script>' : '') +
  (rivers ? '\n<script src="study-rivers.js?v=00000000"></script>' : '') + s.slice(first);
// 2) the blocks and VIS, just before the boot
s = s.replace(/\/\* visual: from tools\/hand\/[\s\S]*?\/\* visual end \*\/\n/, '');
rep('/* boot */\n', `/* visual: from tools/hand/${name}.visual.js by tools/workbook/apply-hand.js — edit that file, not this */\nconst VIS = ${J(vctx.VISUAL.VIS)};\nvisPlace(${J(placed)});\nvisInit();\n/* visual end */\n/* boot */\n`);
// 3) lesson blocks of the new kinds, drawn by study-visual.js
if (!s.includes('const vb = visBlock(b)')) rep('function blockHTML(b){\n', 'function blockHTML(b){\n  if (typeof visBlock === "function") { const vb = visBlock(b); if (vb) return vb; }\n');
// 4) Revise: the photo quiz (and the map quiz) as tabs
if (!s.includes('.concat(VIS.tabs')) {
  const t = s.indexOf('function renderRevise(){\n  const tabs = ['); if (t < 0) fail('no Revise tabs');
  const e = s.indexOf('];\n', t); s = s.slice(0, e) + '].concat(VIS.tabs || []);\n' + s.slice(e + 3);
  rep('  const box = $("#rv");\n', '  const box = $("#rv");\n  if (RV === "vphotos") { photoQuiz(box); return; }\n  if (RV === "vmap") { mapQuiz(box); return; }\n  if (RV === "vriver") { riverQuiz(box); return; }\n');
}
fs.writeFileSync(P, s);
console.log(file + ': ' + placed.reduce((n, p) => n + p[2].length, 0) + ' blocks in ' + new Set(placed.map(p => p[0])).size + ' lessons' + (world ? ' (with the world map)' : ''));
