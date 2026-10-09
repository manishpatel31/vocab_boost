// Build study-search.json / study-bank.json entries from a chapter app's data.
// Running this file directly checks that it reproduces the Trigonometry and Formula Book entries.
const fs = require('fs'), vm = require('vm');
const ROOT = require('path').join(__dirname, '..', '..') + '/';
function appData(file){
  const src = fs.readFileSync(ROOT + file, 'utf8');
  const a = src.indexOf('"use strict";'), b = src.indexOf('const $ = ');
  const code = src.slice(a + 13, b).replace(/^const (\w+)/gm, 'var $1');
  const ctx = {}; vm.createContext(ctx); vm.runInContext(code, ctx);
  return ctx;
}
const strip = h => String(h).replace(/<sup>(.*?)<\/sup>/g, '^$1').replace(/<sub>(.*?)<\/sub>/g, '$1').replace(/<svg[\s\S]*?<\/svg>/g, '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ').replace(/\s+/g, ' ').trim();
function blockText(b){
  const out = [];
  const add = s => { s = strip(s); if (s) out.push(s); };
  switch(b.k){
    case 'hot': case 'p': case 'trick': case 'trap': case 'link': add(b.h); break;
    case 'formula': add(b.title); b.rows.forEach(r => r.forEach(add)); break;
    case 'table': add(b.title); b.head.forEach(add); b.rows.forEach(r => r.forEach(add)); break;
    case 'facts': case 'tl': add(b.title); b.rows.forEach(r => r.forEach(add)); break;
    case 'fig': add(b.title); add(b.cap); break;
    case 'figs': add(b.title); b.items.forEach(i => add(i.cap)); break;
    case 'ex': if (b.src) add(b.src); (b.steps||[]).forEach(add); add(b.ans); if (b.tip) add(b.tip); break;
    case 'q': break;
  }
  return out;
}
function lessonEntry(l){ const parts = []; l.blocks.forEach(b => parts.push(...blockText(b))); (l.sum||[]).forEach(s => parts.push(strip(s))); return { id: l.id, t: l.title, h: l.hi, x: parts.join(' · ') }; }
const hash = s => { let h = 5381; for (let i=0;i<s.length;i++) h = ((h<<5)+h + s.charCodeAt(i))|0; return "q"+(h>>>0).toString(36); };
function bankEntry(d){
  const qs = d.QB.map(r => { const fixed = !!r[6]; const L = d.LESSONS.find(l => l.id === r[0]);
    const q = { id: hash(r[1]), q: r[1], o: r[2], a: fixed ? (r[5]||0) : 0, e: r[3], tag: L.title }; if (!fixed) q.sh = 1; q.l = r[0]; return q; });
  return { lessons: d.LESSONS.length, qs, g: 'maths', t: d.APP.brand };
}
// formula book chapter → search entry
function chapterEntry(c){
  const p = [];
  const add = s => { s = strip(s); if (s) p.push(s); };
  add(c.ask);
  (c.f||[]).forEach(r => add(strip(r[0]) + ': ' + strip(r[1]) + (r[2] ? ' (' + strip(r[2]) + ')' : '')));
  (c.c||[]).forEach(add); (c.tb||[]).forEach(t => add(t.title)); (c.tr||[]).forEach(add); (c.tp||[]).forEach(add);
  return { id: c.id, t: c.t, h: c.hi, x: p.join(' · ') };
}
function formulaData(){
  const src = fs.readFileSync(ROOT + 'study-maths-formulas.html', 'utf8');
  const a = src.indexOf('const CH = ['), b = src.indexOf('const APP = { key:"maths_formula_book_v1"');
  const code = src.slice(a, b).replace(/^const (\w+)/gm, 'var $1');
  const ctx = {}; vm.createContext(ctx); vm.runInContext(code, ctx); return ctx;
}
module.exports = { appData, lessonEntry, bankEntry, chapterEntry, formulaData, hash, ROOT };
if (require.main === module){
  const search = JSON.parse(fs.readFileSync(ROOT + 'study-search.json', 'utf8')), bank = JSON.parse(fs.readFileSync(ROOT + 'study-bank.json', 'utf8'));
  const d = appData('study-trigonometry.html');
  const mine = d.LESSONS.map(lessonEntry), theirs = search.modules.trigonometry;
  let same = 0; mine.forEach((m,i) => { if (JSON.stringify(m) === JSON.stringify(theirs[i])) same++; else if (i < 2) { const x=m.x, y=theirs[i].x; let k=0; while(x[k]===y[k]) k++; console.log('DIFF L'+(i+1), '\nmine :', x.slice(k-60,k+120), '\ntheir:', y.slice(k-60,k+120)); } });
  console.log('trig search same', same, '/', mine.length);
  console.log('trig bank same', JSON.stringify(bankEntry(d)) === JSON.stringify(bank.modules.trigonometry));
  const f = formulaData(); const fm = f.CH.map(chapterEntry); let fs2 = 0; fm.forEach((m,i)=>{ if (JSON.stringify(m)===JSON.stringify(search.modules.formulas[i])) fs2++; else if(i<3){ const x=m.x,y=search.modules.formulas[i].x; let k=0; while(x[k]===y[k]) k++; console.log('FDIFF', i, '\nmine :', x.slice(k-60,k+100), '\ntheir:', y.slice(k-60,k+100)); } });
  console.log('formula search same', fs2, '/', fm.length);
}
