// Open a chapter app in a headless browser, visit every lesson, tab and revise card,
// and report any JavaScript error. Saves a screenshot of the home screen next to this file.
//
//   node tools/check_app.js study-clock.html
//
// Needs Playwright (npm i -D playwright, or a global install).
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..'), file = process.argv[2];
if (!file) { console.error('usage: node tools/check_app.js <study-x.html>'); process.exit(1); }

const types = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': types[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
}).listen(0);

(async () => {
  const url = 'http://localhost:' + server.address().port + '/' + file;
  const b = await chromium.launch(), pg = await b.newPage({ viewport: { width: 400, height: 850 } });
  const errs = [];
  pg.on('pageerror', e => errs.push(e.message));
  pg.on('console', m => { if (m.type() === 'error' && !/fonts|ERR_/.test(m.text())) errs.push(m.text()); });
  await pg.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  await pg.goto(url); await pg.waitForTimeout(500);
  await pg.screenshot({ path: path.join(__dirname, file.replace(/\.html$/, '') + '-home.png') });
  // three kinds of page: lessons (openLesson), the Grammar course (openRule) and the History hub, whose lessons open the subject app
  const kind = await pg.evaluate(() => typeof LESSONS !== 'undefined' && typeof openLesson === 'function' ? 'lessons' : typeof RULE !== 'undefined' && typeof openRule === 'function' ? 'rules' : 'none');
  const ids = kind === 'lessons' ? await pg.evaluate(() => LESSONS.map(l => l.id)) : kind === 'rules' ? await pg.evaluate(() => Object.keys(RULE).map(Number)) : [];
  const home = () => pg.goto(url).then(() => pg.waitForTimeout(400));
  for (const id of ids) {
    const before = pg.url();
    if (kind === 'lessons') await pg.evaluate(id => openLesson(id, 'learn'), id);
    else { await pg.evaluate(n => openRule(n, 'learn'), id); await pg.evaluate(n => openRule(n, 'quiz'), id); }
    await pg.waitForTimeout(kind === 'rules' ? 20 : 60);
    if (pg.url() !== before) { console.log(id, '→ opens', pg.url().replace(/^.*\//, '')); await home(); continue; }   // a hub lesson opens its app
    console.log(id, await pg.$eval('h1', e => e.textContent).catch(() => '(no heading)'));
  }
  // every tab in the bottom or top navigation, then every Revise card
  for (const tab of await pg.$$eval('nav [data-tab]', e => e.map(x => x.dataset.tab))) {
    await pg.click(`nav [data-tab="${tab}"]`); await pg.waitForTimeout(200);
    if (pg.url().split('?')[0] !== url) { await home(); continue; }
    for (const rv of await pg.$$eval('[data-rv]', e => e.map(x => x.dataset.rv))) { const el = await pg.$(`[data-rv="${rv}"]`); if (el) { await el.click(); await pg.waitForTimeout(100); } }
  }
  if (ids.length) {
    await pg.goto(url + '?lesson=' + (kind === 'rules' ? 'R' + ids[ids.length - 1] : ids[ids.length - 1])); await pg.waitForTimeout(600);
    console.log('link to last lesson opens:', await pg.$eval('h1', e => e.textContent).catch(() => '(no heading)'));
  }
  await b.close(); server.close();
  console.log(errs.length ? 'ERRORS:\n' + errs.join('\n') : 'no errors');
  process.exit(errs.length ? 1 : 0);
})().catch(e => { console.error(e); server.close(); process.exit(1); });
