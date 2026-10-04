// शब्दRegister service worker.
// - Lets browsers offer "Install app".
// - Network first: you always get the newest version when online.
// - Everything opened once is kept, so the app and the study modules open offline too.
var CACHE = 'shabd-v13';
var PRECACHE = [
  './', './index.html', './manifest.json',
  './study-grammar-100.html', './study-bns-bnss-bsa.html', './study-govt-schemes.html',
  './study-census.html', './study-intl-orgs.html', './study-reports-indices.html', './study-sports.html', './study-festivals.html', './study-ipr-plans.html', './study-folk-dances.html', './study-appointments.html', './study-polity.html', './study-economics.html', './study-space.html', './study-physics.html', './study-biology.html', './study-geometry.html', './study-mensuration2d.html', './study-mensuration3d.html', './study-trigonometry.html', './study-voice.html', './study-narration.html', './study-maths-formulas.html', './study-bank.json',
  './icon-192.png', './icon-512.png'
];

self.addEventListener('install', function(event){
  event.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(PRECACHE.map(function(u){ return c.add(u).catch(function(){}); }));
  }));
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

function cacheable(url){
  if(url.origin === self.location.origin) return true;
  // fonts and the Firebase library files, so the app shell also works offline
  return /(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname) ||
         (url.hostname === 'www.gstatic.com' && url.pathname.indexOf('/firebasejs/') === 0);
}

self.addEventListener('fetch', function(event){
  var req = event.request;
  if(req.method !== 'GET') return;
  var url = new URL(req.url);
  if(!cacheable(url)) return;               // Firestore / Google sign-in etc. go straight to the network
  event.respondWith(
    fetch(req).then(function(res){
      if(res && (res.ok || res.type === 'opaque')){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(req, copy); });
      }
      return res;
    }).catch(function(){
      return caches.match(req, { ignoreSearch: true }).then(function(hit){
        if(hit) return hit;
        if(req.mode === 'navigate') return caches.match('./index.html').then(function(r){ return r || Response.error(); });
        return Response.error();
      });
    })
  );
});
