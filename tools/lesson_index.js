// Writes study-lessons.json: every mini app's lessons, by the page that shows them, for the PDF import
// (☰ → Import PDFs from Drive) to match files to apps and lessons and to know where each lesson's PDFs are kept.
//   { v: 1, apps: { <STUDY id>: { t: title, files: { "study-x.html": [[lessonId, title], …] } } } }
// Lesson ids are what the PDFs use: LESSONS ids, the Maths formula book's chapter ids (CH), Grammar 100's units
// ("u1"…, as PDFs attach to a unit). The Computer app is a hub: its lessons live in three sub-pages, listed here.
// Run after adding or renaming lessons:   python3 -m http.server 8765 &   node tools/lesson_index.js
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const R = path.join(__dirname, '..');
// History is a hub too, but its three parts are apps of their own (histancient, histmedieval, histmodern): left out.
const SKIP = ['history'];
const HUB_PAGES = { computer: ['study-computer-hardware.html', 'study-computer-software.html', 'study-computer-internet.html'] };
const app = fs.readFileSync(path.join(R, 'app.js'), 'utf8');
const study = {};
for (const m of app.matchAll(/(\w+):\s*\{\s*title:\s*'([^']*)',\s*file:\s*'(study-[\w-]+\.html)'/g)) study[m[1]] = { t: m[2], file: m[3] };
(async () => {
  const b = await chromium.launch(), out = { v: 1, apps: {} }, base = process.env.BASE || 'http://localhost:8765/';
  for (const [id, s] of Object.entries(study)) {
    if (SKIP.includes(id)) continue;
    const files = {};
    for (const f of HUB_PAGES[id] || [s.file]) {
      const p = await b.newPage();
      await p.goto(base + f + '?embed=1', { waitUntil: 'load' }).catch(() => {});
      await p.waitForTimeout(150).catch(() => {});
      const ls = await p.evaluate(() => {
        try { if (typeof openRule === 'function') return DATA.map(u => ['u' + u.n, 'Unit ' + u.n + ' · ' + u.name]); } catch (e) {}
        try { if (typeof chapterHTML === 'function') return CH.map(c => [String(c.id), c.t]); } catch (e) {}
        try { return LESSONS.map(l => [String(l.id), l.title]); } catch (e) { return []; }
      }).catch(() => []);
      await p.close();
      if (ls.length) files[f] = ls;
    }
    if (Object.keys(files).length) out.apps[id] = { t: s.t, files };
  }
  await b.close();
  fs.writeFileSync(path.join(R, 'study-lessons.json'), JSON.stringify(out));
  const n = Object.values(out.apps).reduce((t, a) => t + Object.values(a.files).reduce((u, l) => u + l.length, 0), 0);
  console.log('study-lessons.json:', Object.keys(out.apps).length, 'apps,', n, 'lessons');
})();
