// पाठShala service worker.
// - Lets browsers offer "Install app".
// - Opens instantly: the app, its libraries and fonts come from the saved copy first and are
//   refreshed in the background, so a slow or flaky connection never holds up opening the app.
//   When a newer version of the app arrives, the page is told so it can offer a reload.
// - Saved files live in one cache that is kept across versions, so an update does not
//   throw everything away and download it all again.
// - Mini apps, the question bank and the search index are saved the first time they are used,
//   and fetched quietly once the app is idle (see 'warm'), so they open offline too.
var VERSION = 'shabd-v166';                 // bump on every deploy so browsers pick up this file
var CACHE = 'shabd-files';                 // kept across versions
var SHELL = ['./', './index.html', './app.js?v=bc0bbc0a', './manifest.json', './icon-192.png', './icon-512.png',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js'];
var WARM = [
  './study-bank.json', './study-search.json',
  './study-core.css?v=1a7fb9b7', './study-core.js?v=a8288da9',
  './study-workbook.css?v=176d633c', './study-workbook.js?v=44501290', './study-games.js?v=2c884142', './study-plan-lab.js?v=9bd1de8a',   // shared engine, look and Lab games of the workbook apps            // shared look and engine of the chapter apps (?v= set by tools/stamp.js)
  './study-grammar-100.html', './study-bns-bnss-bsa.html', './study-govt-schemes.html',
  './study-history.html', './study-history-ancient.html', './study-history-medieval.html', './study-history-modern.html', './study-art-culture.html', './study-world-history.html', './study-computer.html', './study-computer-hardware.html', './study-computer-software.html', './study-computer-internet.html', './study-census.html', './study-intl-orgs.html', './study-reports-indices.html', './study-sports.html', './study-festivals.html', './study-visual.js?v=7c74733c', './study-world.js?v=6f51c606', './study-rivers.js?v=105322fa', './study-ipr-plans.html', './study-folk-dances.html', './study-appointments.html', './study-polity.html', './study-economics.html', './study-space.html', './study-physics.html', './typing.js?v=02ff18bc', './typing-passages.js?v=df4bd310', './study-chemistry.html', './study-books-authors.html', './study-important-days.html', './study-defence.html', './study-awards.html', './study-protected-areas.html', './study-rivers-india.html', './study-national-parks.html', './study-indian-geography.html', './study-world-geography.html', './study-states-uts.html', './study-agriculture.html', './study-banking.html', './study-physical-geography.html', './study-industries-transport.html', './study-inventions.html', './study-hq-founders.html', './study-classical-dances.html', './study-music-instruments.html', './study-const-bodies.html', './study-environment.html', './study-biology.html', './study-geometry.html', './study-mensuration2d.html', './study-mensuration3d.html', './study-trigonometry.html', './study-voice.html', './study-narration.html', './study-maths-formulas.html', './study-number-system.html', './study-calendar.html', './study-clock.html'
];

self.addEventListener('install', function(event){
  // only the small app shell, and only what is not saved yet
  event.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(SHELL.map(function(u){
      return c.match(u).then(function(hit){ return hit || c.add(u).catch(function(){}); });
    }));
  }));
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  // old per-version caches (shabd-v1 … v14): move what they hold into the kept cache, then remove them
  event.waitUntil(caches.keys().then(function(keys){
    var old = keys.filter(function(k){ return k !== CACHE; });
    return caches.open(CACHE).then(function(keep){
      return Promise.all(old.map(function(k){
        return caches.open(k).then(function(c){
          return c.keys().then(function(reqs){
            return Promise.all(reqs.map(function(r){
              return keep.match(r).then(function(hit){ return hit || c.match(r).then(function(res){ return res && keep.put(r, res); }); });
            }));
          });
        }).then(function(){ return caches.delete(k); });
      }));
    });
  }).then(function(){
    // pages used to be saved once per address (?embed=1&theme=…), leaving stale copies behind: keep one copy per page
    return caches.open(CACHE).then(function(c){
      return c.keys().then(function(reqs){
        return Promise.all(reqs.filter(function(r){ var u = new URL(r.url); return u.origin === self.location.origin && u.search && /(\.html|\/)$/.test(u.pathname); })
          .map(function(r){ return c.delete(r); }));
      });
    });
  }).catch(function(){}).then(function(){ return self.clients.claim(); }));
});

// The page asks for this a little after it has opened: save every mini app that is not saved yet.
self.addEventListener('message', function(event){
  if(!event.data || event.data.type !== 'warm') return;
  event.waitUntil(caches.open(CACHE).then(function(c){
    return WARM.reduce(function(p, u){
      return p.then(function(){ return c.match(u).then(function(hit){ return hit || c.add(u).catch(function(){}); }); });
    }, Promise.resolve());
  }));
});

function kind(url){
  if(url.origin === self.location.origin) return 'app';
  if(url.hostname === 'fonts.gstatic.com') return 'fixed';                                              // font files never change
  if(url.hostname === 'www.gstatic.com' && url.pathname.indexOf('/firebasejs/') === 0) return 'fixed';  // versioned library files
  if(url.hostname === 'fonts.googleapis.com') return 'app';
  if(url.hostname === 'cdnjs.cloudflare.com' && url.pathname.indexOf('/ajax/libs/KaTeX/') === 0) return 'fixed';   // maths in AI answers (versioned)
  if(url.hostname === 'upload.wikimedia.org') return 'fixed';
  if(url.hostname === 'commons.wikimedia.org' && url.pathname === '/w/api.php') return 'app';             // photo search when an article has none
  if(url.hostname === 'api.openverse.org') return /\/thumb\/?$/.test(url.pathname) ? 'fixed' : 'app';     // last-resort photo search and its thumbnails                                           // festival photos, kept once seen
  if(url.hostname === 'en.wikipedia.org' && (url.pathname.indexOf('/api/rest_v1/page/summary/') === 0 || url.pathname === '/w/api.php')) return 'app';   // which photo an article has
  return '';
}

function save(req, res){
  if(res && res.type === 'opaque' && /^(upload\.wikimedia\.org|api\.openverse\.org)$/.test(new URL(req.url || req).hostname)) return res;   // opaque photos count as megabytes each; keep only CORS copies
  if(res && (res.ok || res.type === 'opaque')){
    var copy = res.clone();
    caches.open(CACHE).then(function(c){ c.put(req, copy); });
  }
  return res;
}

/** Tell open pages that a newer copy of the app page has been saved. */
function tagOf(res){ return res ? (res.headers.get('etag') || res.headers.get('last-modified') || '') : ''; }
function announce(oldTag, newRes){
  var t = tagOf(newRes);
  if(!oldTag || !t || !newRes.ok || t === oldTag) return;
  self.clients.matchAll({ type: 'window' }).then(function(list){ list.forEach(function(c){ c.postMessage({ type: 'app-updated' }); }); });
}

self.addEventListener('fetch', function(event){
  var req = event.request;
  if(req.method !== 'GET') return;
  var url = new URL(req.url);
  var k = kind(url);
  if(!k) return;                                    // Firestore, Google sign-in etc. go straight to the network
  var nav = req.mode === 'navigate';
  if(k === 'fixed'){
    event.respondWith(caches.match(req).then(function(hit){ return hit || fetch(req).then(function(res){ return save(req, res); }); }));
    return;
  }
  // pages are saved once, without their ?query, so every open refreshes the same copy
  var page = nav || /\.html$/.test(url.pathname);
  var key = page ? url.origin + url.pathname : req;
  // only the main app page offers "Reload": mini apps in the frame simply open fresh next time
  var top = nav && req.destination === 'document';
  // saved copy now, fresh copy in the background (stale-while-revalidate)
  event.respondWith(caches.match(key).then(function(hit){
    var oldTag = top ? tagOf(hit) : '';
    var net = fetch(req).then(function(res){
      if(top) announce(oldTag, res);
      return save(key, res);
    });
    if(hit){
      event.waitUntil(net.catch(function(){}));
      return hit;
    }
    return net.catch(function(){
      if(nav) return caches.match('./index.html').then(function(r){ return r || Response.error(); });
      return Response.error();
    });
  }));
});
