// Stamp the shared script and style files with a short hash of their contents, so browsers and the
// service worker fetch a fresh copy exactly when a file changed:
//
//   node tools/stamp.js
//
// Updates  app.js?v=…           in index.html and sw.js
//          study-core.js?v=…    in every study-*.html and sw.js
//          study-core.css?v=…   in every study-*.html and sw.js
// and bumps VERSION in sw.js when anything changed. Run it after editing any of those three files.
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const R = path.join(__dirname, '..') + '/';
const files = ['app.js', 'study-core.js', 'study-core.css'];
const hash = f => crypto.createHash('sha1').update(fs.readFileSync(R + f)).digest('hex').slice(0, 8);
const pages = ['index.html', 'sw.js'].concat(fs.readdirSync(R).filter(f => /^study-.*\.html$/.test(f)));
let changed = 0;
const stamps = {};
files.forEach(f => { stamps[f] = hash(f); });
pages.forEach(p => {
  const src = fs.readFileSync(R + p, 'utf8');
  let out = src;
  files.forEach(f => {
    const re = new RegExp(f.replace(/\./g, '\\.') + '\\?v=[A-Za-z0-9]+', 'g');
    out = out.replace(re, f + '?v=' + stamps[f]);
  });
  if (out !== src) { fs.writeFileSync(R + p, out); changed++; console.log('updated', p); }
});
if (changed) {
  const sw = fs.readFileSync(R + 'sw.js', 'utf8');
  const m = sw.match(/var VERSION = 'shabd-v(\d+)'/);
  if (m) { fs.writeFileSync(R + 'sw.js', sw.replace(m[0], "var VERSION = 'shabd-v" + (+m[1] + 1) + "'")); console.log('sw.js VERSION → shabd-v' + (+m[1] + 1)); }
} else console.log('already stamped:', JSON.stringify(stamps));
