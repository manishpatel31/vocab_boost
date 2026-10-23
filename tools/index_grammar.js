// Refresh Grammar 100's questions in study-bank.json (module "grammar"), so new rule questions reach
// Mistakes, mocks and the phone app. Grammar 100 keeps its own DATA (units → rules → Q, plus each unit's test),
// which tools/index_app.js cannot read. Its search entry (study-search.json) is built from the rules' text,
// not their questions, so it is left alone.
//
//   node tools/index_grammar.js            write the module into study-bank.json
//   node tools/index_grammar.js --check    only report whether study-bank.json is up to date
//
// Ids match the page: hash("r" + text) for a rule question, hash("t" + text) for a unit-test question,
// where text is the question, or the options joined by "/" for error spotting.
const fs = require('fs'), vm = require('vm'), i = require('./lib/idx.js'), R = i.ROOT;
const check = process.argv.includes('--check');
const src = fs.readFileSync(R + 'study-grammar-100.html', 'utf8');
const line = src.split('\n').find(l => l.startsWith('const DATA = '));
if (!line) { console.error('no "const DATA = " line in study-grammar-100.html'); process.exit(1); }
const ctx = {}; vm.createContext(ctx); vm.runInContext(line.replace(/^const DATA/, 'var DATA'), ctx);
const ERR = 'Spot the error — which part has a mistake?';
const item = (q, pre, tag, rule) => ({ id: i.hash(pre + (q.q || q.o.join('/'))), k: q.k, q: q.k === 'e' ? ERR : q.q, o: q.o, a: q.a, e: q.e, tag, l: 'R' + rule });
const qs = [];
ctx.DATA.forEach(c => {
  c.rules.forEach(r => r.Q.forEach(q => qs.push(item(q, 'r', c.name, r.n))));
  c.test.forEach(q => qs.push(item(q, 't', c.name, q.r)));
});
const ids = qs.map(q => q.id);
if (new Set(ids).size !== ids.length) { console.error('two questions have the same text — reword one'); process.exit(1); }
const entry = { lessons: ctx.DATA.reduce((n, c) => n + c.rules.length, 0), qs, g: 'english', t: 'Grammar 100' };
const bank = JSON.parse(fs.readFileSync(R + 'study-bank.json', 'utf8'));
if (!bank.modules.grammar) { console.error('no "grammar" module in study-bank.json'); process.exit(1); }
const old = bank.modules.grammar;
if (JSON.stringify(old) === JSON.stringify(entry)) { console.log('grammar: already up to date (' + qs.length + ' questions)'); process.exit(0); }
if (check) { console.log('grammar: study-bank.json has ' + old.qs.length + ' questions, the page has ' + qs.length + ' — run without --check to write'); process.exit(1); }
bank.modules.grammar = entry;
bank.built = new Date().toISOString().slice(0, 10);
fs.writeFileSync(R + 'study-bank.json', JSON.stringify(bank));
console.log('grammar: ' + qs.length + ' questions, ' + entry.lessons + ' rules written');
