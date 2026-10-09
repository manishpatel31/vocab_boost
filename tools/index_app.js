// Add (or refresh) a chapter app in study-search.json and study-bank.json,
// so its lessons show in search and its questions reach Mistakes, mocks and the phone app.
//
//   node tools/index_app.js study-clock.html clock reasoning [--after calendar]
//
// <module id> must match the app's id in index.html's STUDY list; <group> is maths, reasoning, english or gs.
// A new module goes after --after (or at the end); an existing one keeps its place.
const fs = require('fs'), i = require('./lib/idx.js'), R = i.ROOT;
const [file, id, group] = process.argv.slice(2);
const ai = process.argv.indexOf('--after'), after = ai > 0 ? process.argv[ai + 1] : null;
if (!file || !id || !group) { console.error('usage: node tools/index_app.js <study-x.html> <module id> <group> [--after <module id>]'); process.exit(1); }

const search = JSON.parse(fs.readFileSync(R + 'study-search.json', 'utf8'));
const bank = JSON.parse(fs.readFileSync(R + 'study-bank.json', 'utf8'));
const d = i.appData(file);
const entry = i.bankEntry(d); entry.g = group;
const ids = entry.qs.map(q => q.id);
if (new Set(ids).size !== ids.length) { console.error('two questions have the same text — reword one'); process.exit(1); }

const oldS = JSON.stringify(search.modules[id]), oldB = JSON.stringify(bank.modules[id]);
search.modules[id] = d.LESSONS.map(i.lessonEntry);
if (id in bank.modules) bank.modules[id] = entry;
else {
  if (after && !(after in bank.modules)) { console.error('no module "' + after + '" in study-bank.json'); process.exit(1); }
  const mods = {};
  Object.keys(bank.modules).forEach(k => { mods[k] = bank.modules[k]; if (k === after) mods[id] = entry; });
  if (!(id in mods)) mods[id] = entry;
  bank.modules = mods;
}
const changed = oldS !== JSON.stringify(search.modules[id]) || oldB !== JSON.stringify(bank.modules[id]);
if (!changed) { console.log(id + ': already up to date'); process.exit(0); }
bank.built = new Date().toISOString().slice(0, 10);
fs.writeFileSync(R + 'study-search.json', JSON.stringify(search));
fs.writeFileSync(R + 'study-bank.json', JSON.stringify(bank));
console.log(id + ': ' + entry.qs.length + ' questions, ' + d.LESSONS.length + ' lessons written');
