/* Typing test — SSC CHSL / CGL style (LDC/JSA and similar posts), practice drills and AI-made passages.
   Drawn into #typingRoot when the Typing tab opens. Talks to app.js only through window.shabdBridge
   (AI calls and the synced 'typing' record), so it can be read on its own.

   How a test is marked (SSC's published guidelines for typing-test scripts):
   - the passage you typed is matched word by word against the master passage;
   - FULL mistakes: a word left out (omission), a wrong or misspelt word (substitution), a word added, a word repeated,
     a word left incomplete;
   - HALF mistakes: spacing (two words run together or one word split), capitalisation, punctuation,
     two words swapped (transposition);
   - error % = (full + half ÷ 2) × 100 ÷ words of the passage you reached, to two decimals;
   - speed: 35 w.p.m. in English = 10,500 key depressions an hour, i.e. 1,750 in 10 minutes (5 key depressions = 1 word).
   The allowed error % is set by each exam's notice, so it can be changed here. */
(function(){
  'use strict';
  var KEY_NEED_WPM = 35;
  var CATS = [['ur', 'UR / EWS', 7], ['res', 'OBC / SC / ST / PwBD / ESM', 10]];
  var LIMIT_NOTE = 'Coaching sources commonly give 7% for UR/EWS and 10% for others for LDC/JSA; each exam’s notice decides it.';
  var root = null, T = { screen: 'home' }, timer = null;

  var bridge = function(){ return window.shabdBridge || {}; };
  function load(){
    var s = (bridge().load ? bridge().load() : null) || {};
    s.hist = Array.isArray(s.hist) ? s.hist : [];
    s.ai = Array.isArray(s.ai) ? s.ai : [];
    s.keys = s.keys || {}; s.words = s.words || {};
    s.set = Object.assign({ min: 10, cat: 'ur', limit: 7, bs: true, live: false, pid: 'random' }, s.set || {});
    return s;
  }
  function save(s){ if(bridge().save) bridge().save(s); }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(n, d){ return (Math.round(n * Math.pow(10, d || 0)) / Math.pow(10, d || 0)).toFixed(d || 0); }
  function mmss(s){ s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + ('0' + s % 60).slice(-2); }
  function words(t){ return String(t || '').split(/\s+/).filter(Boolean); }
  function norm(w){ return String(w).toLowerCase().replace(/[^a-z0-9ऀ-ॿ]/g, ''); }
  function ascii(t){
    return String(t || '').replace(/[“”„]/g, '"').replace(/[‘’]/g, "'").replace(/[–—]/g, '-').replace(/…/g, '...')
      .replace(/₹\s?/g, 'Rs. ').replace(/[^\x20-\x7E\n]/g, '').replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
  }
  function passages(s){ return (window.TYPING_PASSAGES || []).concat(s.ai.map(function(p){ return { id: p.id, t: '✨ ' + p.t, text: p.text, ai: 1 }; })); }
  function findPassage(s, id){
    var all = passages(s);
    if(id === 'random' || !id){
      var seen = s.hist.slice(-6).map(function(h){ return h.pid; }), fresh = all.filter(function(p){ return seen.indexOf(p.id) === -1; });
      var pool = fresh.length ? fresh : all; return pool[Math.floor(Math.random() * pool.length)];
    }
    return all.filter(function(p){ return p.id === id; })[0] || all[0];
  }

  // ---------- marking ----------
  /** Match typed words against the master passage. Returns the list of operations and the counts. */
  function evaluate(master, typed){
    var M = words(master), W = words(typed), n = M.length, m = W.length, cols = m + 1;
    var D = new Float64Array((n + 1) * cols), C = new Int8Array((n + 1) * cols);
    var nm = M.map(norm), nw = W.map(norm);
    for(var i = 0; i <= n; i++){
      for(var j = 0; j <= m; j++){
        var k = i * cols + j;
        if(!i && !j){ D[k] = 0; continue; }
        var best = Infinity, op = 0;
        var take = function(v, o){ if(v < best - 1e-9){ best = v; op = o; } };
        if(i && j){
          var a = M[i - 1], b = W[j - 1];
          if(a === b) take(D[k - cols - 1], 1);
          else if(nm[i - 1] && nm[i - 1] === nw[j - 1]) take(D[k - cols - 1] + 0.5, 2);
          else take(D[k - cols - 1] + 1, 3);
        }
        if(i) take(D[k - cols] + 1, 4);                 // omission
        if(j) take(D[k - 1] + 1, 5);                    // addition
        if(i > 1 && j && nw[j - 1] && nw[j - 1] === nm[i - 2] + nm[i - 1]) take(D[k - 2 * cols - 1] + 0.5, 6);         // two words run together
        if(i && j > 1 && nm[i - 1] && nm[i - 1] === nw[j - 2] + nw[j - 1]) take(D[k - cols - 2] + 0.5, 7);             // one word split
        if(i > 1 && j > 1 && nm[i - 1] && nm[i - 2] !== nm[i - 1] && nm[i - 2] === nw[j - 1] && nm[i - 1] === nw[j - 2]) take(D[k - 2 * cols - 2] + 0.5, 8); // swapped
        D[k] = best; C[k] = op;
      }
    }
    // the passage is usually longer than what is typed in time: words after the last one reached are not omissions
    var end = 0, bestEnd = Infinity;
    for(i = 0; i <= n; i++){ var v = D[i * cols + m]; if(v <= bestEnd + 1e-9){ bestEnd = v; end = i; } }
    if(!m) end = 0;
    var ops = []; i = end; j = m;
    while(i > 0 || j > 0){
      var o = C[i * cols + j];
      if(o === 1 || o === 2 || o === 3){ ops.push({ o: o, mi: i - 1, wi: j - 1 }); i--; j--; }
      else if(o === 4){ ops.push({ o: 4, mi: i - 1 }); i--; }
      else if(o === 5){ ops.push({ o: 5, wi: j - 1 }); j--; }
      else if(o === 6){ ops.push({ o: 6, mi: i - 2, wi: j - 1 }); i -= 2; j--; }
      else if(o === 7){ ops.push({ o: 7, mi: i - 1, wi: j - 2 }); i--; j -= 2; }
      else if(o === 8){ ops.push({ o: 8, mi: i - 2, wi: j - 2 }); i -= 2; j -= 2; }
      else break;
    }
    ops.reverse();
    var full = 0, half = 0, by = {}, list = [];
    var add = function(kind, isHalf, x){ by[kind] = (by[kind] || 0) + 1; if(isHalf) half++; else full++; list.push(Object.assign({ kind: kind, half: !!isHalf }, x)); };
    ops.forEach(function(x){
      var a = x.mi != null ? M[x.mi] : '', b = x.wi != null ? W[x.wi] : '';
      if(x.o === 1) x.kind = 'ok';
      else if(x.o === 2){ x.kind = a.toLowerCase() === b.toLowerCase() ? 'cap' : 'punct'; add(x.kind, true, { want: a, got: b }); }
      else if(x.o === 3){ x.kind = nw[x.wi] && nm[x.mi].indexOf(nw[x.wi]) === 0 && nw[x.wi].length < nm[x.mi].length ? 'incomplete' : 'spell'; add(x.kind, false, { want: a, got: b }); }
      else if(x.o === 4){ x.kind = 'omit'; add('omit', false, { want: a, got: '' }); }
      else if(x.o === 5){ x.kind = nw[x.wi] && (nw[x.wi] === nw[x.wi - 1] || nw[x.wi] === nw[x.wi + 1]) ? 'repeat' : 'extra'; add(x.kind, false, { want: '', got: b }); }
      else if(x.o === 6){ x.kind = 'space'; add('space', true, { want: M[x.mi] + ' ' + M[x.mi + 1], got: b }); }
      else if(x.o === 7){ x.kind = 'space'; add('space', true, { want: a, got: W[x.wi] + ' ' + W[x.wi + 1] }); }
      else if(x.o === 8){ x.kind = 'trans'; add('trans', true, { want: M[x.mi] + ' ' + M[x.mi + 1], got: W[x.wi] + ' ' + W[x.wi + 1] }); }
    });
    var reached = end, err = reached ? (full + half / 2) * 100 / reached : 0;
    return { ops: ops, M: M, W: W, full: full, half: half, by: by, list: list, reached: reached, total: n, err: Math.round(err * 100) / 100 };
  }
  var KIND = {
    omit: ['Word left out', 'full'], spell: ['Wrong or misspelt word', 'full'], extra: ['Word added', 'full'], repeat: ['Word repeated', 'full'],
    incomplete: ['Incomplete word', 'full'], space: ['Spacing', 'half'], cap: ['Capital / small letter', 'half'], punct: ['Punctuation', 'half'], trans: ['Two words swapped', 'half']
  };

  // ---------- drills ----------
  var DRILLS = [
    ['home', '🏠', 'Home row', 'a s d f g h j k l ;', 'add all ask dad fad fall flag flask gal glad glass had hall half has hash lad lag lash lass sad salad sash shall slag slash alas dash gash flash'],
    ['top', '⬆️', 'Top row', 'q w e r t y u i o p', 'we were tree free quiet route power tower write type quite equip prior poetry pretty require your tire yet our out pour ripe riot outer quote wire port rope pity'],
    ['bottom', '⬇️', 'Bottom row', 'z x c v b n m , . /', 'zinc box calm vex buzz cab man van mix exam zebra novice combine maximum convex banana cave bench zone vacuum mobile number nation'],
    ['caps', '🔠', 'Capitals', 'Shift with the other hand', 'India Delhi Mumbai Kolkata Chennai Reserve Bank Supreme Court Parliament Ganga Himalaya January Monday Gandhi Nehru Ministry Railways Constitution Kerala Assam Punjab'],
    ['nums', '🔢', 'Numbers', '1 2 3 4 5 6 7 8 9 0', '2024 15 350 1,750 10,500 1853 2.5 75 per cent 31.12.2026 12 crore 4.6 lakh 1947 26 January 100 2,000 18 per cent 9 30'],
    ['punct', '❗', 'Punctuation', ', . ; : \' " ( ) - ?', 'However, the order said: "Report by Monday." (See page 4.) Is it final? Yes; it is. The officer\'s note - dated 5 May - was clear. Well, then!'],
    ['common', '💬', 'Common words', 'The 200 words you type most', 'the of and to in is that for it as was with be by on not he this are or his from at which but have an they you were her she there been one all we their has would when if so no will more can about other into some could them what only time these may first then any my now such like our over man me even most made after also did many before must through back years where much your way well down should because each just those people how too little state good very make world still own see men work long get here between both life being under never day same another know while last might us great old year off come since against go came right used take three'],
    ['weak', '🎯', 'My weak keys', 'Built from your mistakes', '']
  ];
  function drillText(d, s){
    var pool = words(d[4]);
    if(d[0] === 'weak'){
      var ww = Object.keys(s.words).sort(function(a, b){ return s.words[b] - s.words[a]; }).slice(0, 30);
      var wk = weakKeys(s).slice(0, 5).map(function(x){ return x[0]; });
      var extra = [];
      (window.TYPING_PASSAGES || []).forEach(function(p){ words(p.text).forEach(function(w){ if(wk.some(function(c){ return w.toLowerCase().indexOf(c) !== -1; }) && extra.length < 200) extra.push(w); }); });
      pool = ww.concat(extra);
      if(!pool.length) pool = words(DRILLS[6][4]);
    }
    if(d[0] === 'punct' || d[0] === 'nums') return Array(8).fill(d[4]).join(' ');
    var out = [];
    for(var i = 0; i < 260; i++) out.push(pool[(i * 7 + Math.floor(Math.random() * pool.length)) % pool.length]);
    return out.join(' ');
  }
  function weakKeys(s){
    return Object.keys(s.keys).map(function(c){ var k = s.keys[c]; return [c, k.e / Math.max(1, k.n), k.e, k.n]; })
      .filter(function(x){ return x[3] >= 20 && x[2] >= 2; }).sort(function(a, b){ return b[1] - a[1]; });
  }

  // ---------- keyboard ----------
  var ROWS = ['`1234567890-=', 'qwertyuiop[]\\', "asdfghjkl;'", 'zxcvbnm,./'];
  var SHIFTED = { '~': '`', '!': '1', '@': '2', '#': '3', '$': '4', '%': '5', '^': '6', '&': '7', '*': '8', '(': '9', ')': '0', '_': '-', '+': '=', '{': '[', '}': ']', '|': '\\', ':': ';', '"': "'", '<': ',', '>': '.', '?': '/' };
  var FINGER = {}; ['`1qaz', '2wsx', '3edc', '45rtfgvb', '67yuhjnm', '8ik,', '9ol.', "0-=p[]\\;'/"].forEach(function(g, f){ g.split('').forEach(function(c){ FINGER[c] = f; }); });
  var FNAME = ['left little', 'left ring', 'left middle', 'left index', 'right index', 'right middle', 'right ring', 'right little'];
  function keyFor(ch){
    if(ch == null) return null;
    if(ch === ' ') return { k: ' ', shift: false };
    if(ch === '\n') return { k: '\n', shift: false };
    if(/[A-Z]/.test(ch)) return { k: ch.toLowerCase(), shift: true };
    if(SHIFTED[ch]) return { k: SHIFTED[ch], shift: true };
    return { k: ch, shift: false };
  }
  function keyboardHtml(){
    return '<div class="ty-kb" id="tyKb">' + ROWS.map(function(r, ri){
      return '<div class="ty-kr ty-kr' + ri + '">' + (ri === 3 ? '<span class="ty-k ty-wide" data-k="shiftL">Shift</span>' : '') +
        r.split('').map(function(c){ return '<span class="ty-k f' + FINGER[c] + '" data-k="' + esc(c) + '">' + esc(c) + '</span>'; }).join('') +
        (ri === 2 ? '<span class="ty-k ty-wide" data-k="\n">Enter</span>' : '') + (ri === 3 ? '<span class="ty-k ty-wide" data-k="shiftR">Shift</span>' : '') + '</div>';
    }).join('') + '<div class="ty-kr"><span class="ty-k ty-space" data-k=" ">space</span></div><div class="ty-finger" id="tyFinger"></div></div>';
  }
  function lightKey(ch){
    var kb = document.getElementById('tyKb'); if(!kb) return;
    kb.querySelectorAll('.on').forEach(function(e){ e.classList.remove('on'); });
    var k = keyFor(ch), f = document.getElementById('tyFinger');
    if(!k){ if(f) f.textContent = ''; return; }
    var el = kb.querySelector('[data-k="' + (k.k === '"' ? '\\"' : k.k === '\\' ? '\\\\' : k.k) + '"]');
    if(el) el.classList.add('on');
    var fi = FINGER[k.k];
    if(k.shift){ var sh = kb.querySelector('[data-k="' + (fi != null && fi < 4 ? 'shiftR' : 'shiftL') + '"]'); if(sh) sh.classList.add('on'); }
    if(f) f.textContent = k.k === ' ' ? 'Space — either thumb' : k.k === '\n' ? 'Enter — right little finger' : fi != null ? 'Use your ' + FNAME[fi] + ' finger' + (k.shift ? ' + Shift with the other hand' : '') : '';
  }

  // ---------- screens ----------
  function render(){
    root = document.getElementById('typingRoot');
    if(!root) return;
    if(T.screen === 'test') return drawTest();
    if(T.screen === 'result') return drawResult();
    drawHome();
  }
  function drawHome(){
    var s = load(), set = s.set, ps = passages(s), last = s.hist.slice(-12);
    var best = s.hist.filter(function(h){ return h.mode === 'test'; }).reduce(function(b, h){ return Math.max(b, h.net || 0); }, 0);
    var wk = weakKeys(s).slice(0, 8);
    var aiOn = bridge().aiReady && bridge().aiReady();
    root.innerHTML = '<div class="ty-wrap">' +
      '<div class="ty-hero"><div><div class="ty-eyebrow">Skill test practice</div><h2>Typing Test</h2><p>SSC CHSL &amp; CGL typing test (LDC/JSA, Tax Assistant and similar posts): 35 words a minute in English, marked the SSC way — full and half mistakes.</p></div>' +
      '<div class="ty-best"><b>' + (best ? fmt(best) : '–') + '</b><span>best net w.p.m.</span><b>' + s.hist.length + '</b><span>tests and drills</span></div></div>' +

      '<div class="ty-card"><h3>Start a test</h3>' +
      '<div class="ty-grid">' +
      '<label>Passage<select id="tyPid"><option value="random">Any passage (a new one each time)</option>' + ps.map(function(p){ return '<option value="' + esc(p.id) + '"' + (set.pid === p.id ? ' selected' : '') + '>' + esc(p.t) + ' · ' + words(p.text).length + ' words</option>'; }).join('') + '</select></label>' +
      '<label>Time<select id="tyMin">' + [[10, '10 minutes (the real test)'], [15, '15 minutes (PwBD with scribe)'], [5, '5 minutes'], [2, '2 minutes'], [1, '1 minute']].map(function(o){ return '<option value="' + o[0] + '"' + (+set.min === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></label>' +
      '<label>Category (allowed error)<select id="tyCat">' + CATS.map(function(c){ return '<option value="' + c[0] + '"' + (set.cat === c[0] ? ' selected' : '') + '>' + c[1] + ' — ' + c[2] + '%</option>'; }).join('') + '</select></label>' +
      '<label>Allowed error %<input type="number" id="tyLimit" min="1" max="30" step="0.5" value="' + esc(set.limit) + '"></label>' +
      '</div>' +
      '<div class="ty-checks"><label><input type="checkbox" id="tyBs"' + (set.bs ? ' checked' : '') + '> Backspace allowed</label>' +
      '<label><input type="checkbox" id="tyLive"' + (set.live ? ' checked' : '') + '> Show mistakes as I type (practice — the real test doesn’t)</label></div>' +
      '<button class="btn teal" id="tyStart">Start test ›</button><p class="ty-note">' + esc(LIMIT_NOTE) + '</p></div>' +

      '<div class="ty-card ty-ai"><h3>✨ Make a passage with AI</h3><p class="ty-sub">A fresh passage in the SSC style on any topic — saved here so you can retake it.</p>' +
      '<div class="ty-grid"><label>Topic<input type="text" id="tyTopic" placeholder="e.g. GST, Chandrayaan, a government circular, cyber safety"></label>' +
      '<label>Style<select id="tyStyle"><option value="editorial">Editorial / essay</option><option value="notice">Government letter or circular</option><option value="news">News report with dates and figures</option><option value="numbers">Heavy on numbers and names</option></select></label>' +
      '<label>Length<select id="tyLen"><option value="350">About 350 words</option><option value="450" selected>About 450 words</option><option value="600">About 600 words</option></select></label></div>' +
      '<div class="ty-checks"><label><input type="checkbox" id="tyWeak"' + (Object.keys(s.words).length ? ' checked' : '') + '> Use the words I often get wrong</label></div>' +
      '<button class="btn mustard" id="tyGen">' + (aiOn ? 'Generate passage' : 'Set up AI first') + '</button> <span class="ty-st" id="tySt"></span>' +
      (s.ai.length ? '<div class="ty-saved">' + s.ai.slice(-6).reverse().map(function(p){ return '<span class="ty-chip"><button data-ty-ai="' + esc(p.id) + '">' + esc(p.t) + '</button><button class="x" title="Delete" data-ty-del="' + esc(p.id) + '">×</button></span>'; }).join('') + '</div>' : '') + '</div>' +

      '<div class="ty-card"><h3>Drills</h3><p class="ty-sub">Short timed drills with an on-screen keyboard that shows the next key and the finger to use.</p><div class="ty-drills">' +
      DRILLS.map(function(d){ return '<button class="ty-drill" data-ty-drill="' + d[0] + '"><span class="ic">' + d[1] + '</span><b>' + d[2] + '</b><small>' + esc(d[3]) + '</small></button>'; }).join('') +
      '</div><div class="ty-checks">Drill time: ' + [1, 2, 3].map(function(n){ return '<label><input type="radio" name="tyDm" value="' + n + '"' + (n === (+set.dmin || 2) ? ' checked' : '') + '> ' + n + ' min</label>'; }).join('') + '</div></div>' +

      (last.length ? '<div class="ty-card"><h3>Your progress</h3>' + chart(last) +
        '<table class="ty-table"><thead><tr><th>When</th><th>What</th><th>Net w.p.m.</th><th>Errors</th><th></th></tr></thead><tbody>' +
        last.slice().reverse().map(function(h){ return '<tr><td>' + new Date(h.at).toLocaleDateString(undefined, { day: 'numeric', month: 'short' }) + '</td><td>' + esc(h.title) + ' · ' + h.min + ' min</td><td><b>' + fmt(h.net) + '</b> <small>(' + fmt(h.gross) + ' gross)</small></td><td>' + fmt(h.err, 2) + '%</td><td>' + (h.mode === 'test' ? (h.ok ? '<span class="ty-ok">Qualified</span>' : '<span class="ty-no">Not yet</span>') : '<small>drill</small>') + '</td></tr>'; }).join('') +
        '</tbody></table>' + (wk.length ? '<div class="ty-weak"><b>Keys you miss most:</b> ' + wk.map(function(x){ return '<span class="ty-key">' + esc(x[0] === ' ' ? 'space' : x[0]) + '</span><small>' + Math.round(x[1] * 100) + '%</small>'; }).join(' ') + '</div>' : '') + '</div>' : '') +

      '<details class="ty-card ty-rules"><summary><h3>How the SSC typing test works</h3></summary>' +
      '<ul><li><b>Speed:</b> 35 w.p.m. in English (30 in Hindi) — 10,500 key depressions an hour, so about <b>1,750 key depressions in 10 minutes</b>. Five key depressions (letters, spaces, punctuation) count as one word.</li>' +
      '<li><b>Time:</b> 10 minutes; 15 minutes for eligible PwBD candidates using a scribe. The test is qualifying — it gives no marks, only pass or fail.</li>' +
      '<li><b>Full mistakes:</b> a word left out, a wrong or misspelt word, a word added, a word repeated, an incomplete word.</li>' +
      '<li><b>Half mistakes:</b> spacing errors, capital/small letter, punctuation, two words swapped (e.g. “hope I” for “I hope”), paragraph errors.</li>' +
      '<li><b>Error %</b> = (full + half ÷ 2) × 100 ÷ number of words, rounded to two decimals. This app counts the words of the passage you reached.</li>' +
      '<li><b>Allowed error</b> is fixed in each exam’s notice — set it above. Keep your error under the limit <i>and</i> reach the key depressions.</li>' +
      '<li><b>Tips:</b> accuracy first, speed later; never look at the keys; don’t stop to fix every slip — a missed word costs one mistake, a long pause costs speed; keep a steady rhythm; practise on a full keyboard.</li></ul>' +
      '<p class="ty-note">From SSC’s published guidelines for evaluating typing-test scripts; coaching sources differ on details such as backspace and the allowed error, so check your notice.</p></details>' +
      '</div>';

    var keep = function(){
      var s2 = load();
      s2.set = Object.assign(s2.set, { pid: val('tyPid'), min: +val('tyMin'), cat: val('tyCat'), limit: +val('tyLimit') || 7, bs: chk('tyBs'), live: chk('tyLive'),
        dmin: +((root.querySelector('input[name=tyDm]:checked') || {}).value || 2) });
      save(s2); return s2;
    };
    on('tyCat', 'change', function(){ var c = CATS.filter(function(x){ return x[0] === val('tyCat'); })[0]; document.getElementById('tyLimit').value = c[2]; keep(); });
    ['tyPid', 'tyMin', 'tyLimit', 'tyBs', 'tyLive'].forEach(function(id){ on(id, 'change', keep); });
    root.querySelectorAll('input[name=tyDm]').forEach(function(r){ r.addEventListener('change', keep); });
    on('tyStart', 'click', function(){ var s2 = keep(), p = findPassage(s2, s2.set.pid); startTest({ mode: 'test', pid: p.id, title: p.t, text: p.text, min: s2.set.min, bs: s2.set.bs, live: s2.set.live, kb: false }); });
    root.querySelectorAll('[data-ty-drill]').forEach(function(b){ b.addEventListener('click', function(){
      var s2 = keep(), d = DRILLS.filter(function(x){ return x[0] === b.dataset.tyDrill; })[0];
      startTest({ mode: 'drill', pid: 'drill-' + d[0], title: d[2] + ' drill', text: drillText(d, s2), min: s2.set.dmin || 2, bs: true, live: true, kb: true });
    }); });
    root.querySelectorAll('[data-ty-ai]').forEach(function(b){ b.addEventListener('click', function(){
      var s2 = keep(), p = findPassage(s2, b.dataset.tyAi); startTest({ mode: 'test', pid: p.id, title: p.t, text: p.text, min: s2.set.min, bs: s2.set.bs, live: s2.set.live, kb: false });
    }); });
    root.querySelectorAll('[data-ty-del]').forEach(function(b){ b.addEventListener('click', function(){
      var s2 = load(); s2.ai = s2.ai.filter(function(p){ return p.id !== b.dataset.tyDel; }); if(s2.set.pid === b.dataset.tyDel) s2.set.pid = 'random'; save(s2); drawHome();
    }); });
    on('tyGen', 'click', generate);
  }
  function val(id){ var e = document.getElementById(id); return e ? e.value : ''; }
  function chk(id){ var e = document.getElementById(id); return !!(e && e.checked); }
  function on(id, ev, fn){ var e = document.getElementById(id); if(e) e.addEventListener(ev, fn); }
  function chart(h){
    var mx = Math.max(40, Math.max.apply(null, h.map(function(x){ return x.net || 0; })) + 5);
    return '<div class="ty-chart" aria-label="Net speed of recent attempts">' + h.map(function(x){
      return '<span title="' + esc(x.title) + ': ' + fmt(x.net) + ' net w.p.m., ' + fmt(x.err, 2) + '% errors" class="' + (x.mode === 'test' ? (x.ok ? 'ok' : 'no') : 'dr') + '" style="height:' + Math.max(4, (x.net || 0) / mx * 100) + '%"><i>' + fmt(x.net) + '</i></span>';
    }).join('') + '<em style="bottom:' + (KEY_NEED_WPM / mx * 100) + '%">35</em></div>';
  }

  // ---------- AI passage ----------
  var genCtl = null;
  async function generate(){
    var b = bridge(), st = document.getElementById('tySt');
    if(!b.aiReady || !b.aiReady()){ if(b.aiSettings) b.aiSettings(); return; }
    if(genCtl){ genCtl.abort(); genCtl = null; return; }
    var s = load(), topic = val('tyTopic').trim() || 'a current topic of national importance in India', style = val('tyStyle'), len = +val('tyLen') || 450;
    var weak = chk('tyWeak') ? Object.keys(s.words).sort(function(a, c){ return s.words[c] - s.words[a]; }).slice(0, 15) : [];
    var styles = { editorial: 'a formal editorial or essay', notice: 'an official government letter or circular, with a subject line written as a sentence, references and dates', news: 'a news report with dates, figures and names of places and organisations', numbers: 'a factual passage with many numbers, percentages, dates and proper nouns' };
    var sys = 'You write practice passages for the SSC (Staff Selection Commission, India) English typing test for LDC/JSA posts. Reply with JSON only: {"title": "...", "text": "..."}. ' +
      'The text is plain formal Indian English, in 3 to 6 paragraphs separated by a single \\n, with no headings, lists, emojis or markdown. Use only characters on a standard English keyboard: straight quotes, hyphens, no rupee sign (write Rs.). ' +
      'Facts must be accurate and neutral; avoid naming people currently in office. The title is at most 6 words.';
    var user = 'Write ' + styles[style] + ' of about ' + len + ' words on: ' + topic + '.' + (weak.length ? ' Use each of these words naturally at least once: ' + weak.join(', ') + '.' : '');
    var btn = document.getElementById('tyGen');
    genCtl = new AbortController();
    if(btn) btn.textContent = 'Stop';
    if(st) st.textContent = 'Writing your passage…';
    try{
      var txt = await b.ai(sys, user, { signal: genCtl.signal, onStatus: function(t){ var e = document.getElementById('tySt'); if(e) e.textContent = t; } });
      var data; try{ data = JSON.parse(String(txt).replace(/^[\s\S]*?(\{[\s\S]*\})[\s\S]*$/, '$1')); }catch(e){ data = { title: topic, text: txt }; }
      var text = ascii(data.text || ''), n = words(text).length;
      if(n < 80) throw new Error('The AI sent back too short a passage (' + n + ' words). Try again.');
      var s2 = load(), p = { id: 'ai' + Date.now().toString(36), t: ascii(data.title || topic).slice(0, 60) || 'AI passage', text: text, at: Date.now() };
      s2.ai.push(p); s2.ai = s2.ai.slice(-20); s2.set.pid = p.id; save(s2);
      genCtl = null; drawHome();
      var st2 = document.getElementById('tySt'); if(st2) st2.innerHTML = 'Ready: <b>' + esc(p.t) + '</b> (' + n + ' words) — chosen above. Press <b>Start test</b>.';
    }catch(e){
      genCtl = null;
      if(btn) btn.textContent = 'Generate passage';
      if(st) st.textContent = e && e.name === 'AbortError' ? 'Stopped.' : 'Couldn’t make a passage: ' + ((e && e.message) || e);
    }
  }

  // ---------- the test ----------
  function startTest(cfg){
    stop();
    T = { screen: 'test', cfg: cfg, typed: '', started: 0, left: cfg.min * 60, M: words(cfg.text), keysDown: 0, bsUsed: 0 };
    render();
    window.scrollTo(0, 0);
  }
  function stop(){ if(timer){ clearInterval(timer); timer = null; } }
  function drawTest(){
    var c = T.cfg, paras = c.text.split('\n'), wi = 0;
    root.innerHTML = '<div class="ty-wrap ty-testing">' +
      '<div class="ty-bar"><div><b>' + esc(c.title) + '</b><small>' + (c.mode === 'drill' ? 'Drill' : 'Test') + ' · ' + c.min + ' min · ' + (c.bs ? 'backspace on' : 'backspace off') + '</small></div>' +
      '<div class="ty-clock" id="tyClock">' + mmss(T.left) + '</div><div class="ty-live" id="tyLiveSp">0 w.p.m.</div><button class="btn sm ghost" id="tyEnd">Submit</button><button class="btn sm ghost" id="tyQuit">Quit</button></div>' +
      '<div class="ty-pass" id="tyPass">' + paras.map(function(p){ return '<p>' + words(p).map(function(w){ return '<span data-i="' + (wi++) + '">' + esc(w) + '</span>'; }).join(' ') + '</p>'; }).join('') + '</div>' +
      '<textarea id="tyIn" class="ty-in" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" placeholder="Start typing — the clock starts with your first key."></textarea>' +
      (c.kb ? keyboardHtml() : '') + '</div>';
    var ta = document.getElementById('tyIn');
    ta.addEventListener('paste', function(e){ e.preventDefault(); });
    ta.addEventListener('drop', function(e){ e.preventDefault(); });
    ta.addEventListener('keydown', function(e){
      if(!c.bs && (e.key === 'Backspace' || e.key === 'Delete')){ e.preventDefault(); return; }
      if(e.key === 'Backspace') T.bsUsed++;
      if(e.key === 'Tab'){ e.preventDefault(); }
      if(e.key.length === 1 || e.key === 'Enter' || e.key === 'Backspace') T.keysDown++;
      if(!T.started && e.key.length === 1) begin();
    });
    ta.addEventListener('input', function(){
      if(!c.bs && ta.value.length < T.typed.length && ta.value !== T.typed.slice(0, ta.value.length)){ ta.value = T.typed; return; }
      if(!T.started && ta.value) begin();
      T.typed = ta.value; live();
    });
    on('tyEnd', 'click', function(){ if(!T.typed || confirm('Submit now? The test will be marked on what you have typed.')) finish(); });
    on('tyQuit', 'click', function(){ if(!T.typed || confirm('Leave this test? Nothing will be saved.')){ stop(); T = { screen: 'home' }; render(); } });
    ta.focus();
    live();
  }
  function begin(){
    T.started = Date.now();
    timer = setInterval(function(){
      T.left = T.cfg.min * 60 - (Date.now() - T.started) / 1000;
      var el = document.getElementById('tyClock'); if(el){ el.textContent = mmss(T.left); el.classList.toggle('low', T.left < 60); }
      var mins = (Date.now() - T.started) / 60000, sp = document.getElementById('tyLiveSp');
      if(sp && mins > 0.05) sp.textContent = Math.round(T.typed.length / 5 / mins) + ' w.p.m.';
      if(T.left <= 0) finish();
    }, 250);
  }
  /** Light marking while typing: word i typed vs passage word i (the full matching runs at the end). */
  function live(){
    var W = words(T.typed), n = W.length, endsSpace = /\s$/.test(T.typed) || !T.typed, cur = endsSpace ? n : n - 1;
    var pass = document.getElementById('tyPass'); if(!pass) return;
    var prev = T.liveCur || 0, lo = Math.max(0, Math.min(prev, cur) - 2), hi = Math.min(T.M.length - 1, Math.max(prev, cur) + 2);
    if(T.cfg.live){
      for(var i = lo; i <= hi; i++){
        var sp = pass.querySelector('[data-i="' + i + '"]'); if(!sp) continue;
        sp.className = i < cur ? (W[i] === T.M[i] ? 'good' : 'bad') : i === cur ? 'cur' + (W[i] && T.M[i].indexOf(W[i]) !== 0 ? ' bad' : '') : '';
      }
      if(!T.typed) pass.querySelectorAll('span[class]').forEach(function(s){ s.className = ''; });
    }else{
      var old = pass.querySelector('.here'); if(old) old.classList.remove('here');
    }
    T.liveCur = cur;
    var cs = pass.querySelector('[data-i="' + cur + '"]');
    if(cs && T.cfg.live && T.typed){ var top = cs.getBoundingClientRect().top - pass.getBoundingClientRect().top + pass.scrollTop; if(top > pass.scrollTop + pass.clientHeight - 60 || top < pass.scrollTop) pass.scrollTop = Math.max(0, top - 40); }
    if(T.cfg.kb){
      var w = T.M[cur] || '', typedPart = endsSpace ? '' : (W[cur] || ''), next;
      if(w.indexOf(typedPart) === 0 && typedPart.length < w.length) next = w.charAt(typedPart.length);
      else if(typedPart === w) next = ' ';
      else next = 'Backspace';
      if(next === 'Backspace'){ var kb = document.getElementById('tyKb'); if(kb) kb.querySelectorAll('.on').forEach(function(e){ e.classList.remove('on'); }); var f = document.getElementById('tyFinger'); if(f) f.textContent = 'Fix the last word (Backspace)'; }
      else lightKey(next);
    }
  }
  function finish(){
    if(T.screen !== 'test') return;
    stop();
    var c = T.cfg, used = T.started ? Math.min(c.min * 60, (Date.now() - T.started) / 1000) : 0;
    var mins = c.mode === 'test' ? (T.left <= 0 ? c.min : Math.max(used / 60, 0.1)) : Math.max(used / 60, 0.1);
    var r = evaluate(c.text, T.typed), kd = T.typed.length, gross = kd / 5 / mins, net = Math.max(0, (kd / 5 - (r.full + r.half / 2)) / mins);
    var s = load(), limit = +s.set.limit || 7, need = KEY_NEED_WPM * 5 * c.min;
    var ok = c.mode === 'test' && kd >= need && r.err <= limit && T.left <= 0;
    var okIfFull = c.mode === 'test' && gross >= KEY_NEED_WPM && r.err <= limit;
    // learn weak keys and words
    r.ops.forEach(function(x){
      if(x.mi == null) return;
      var want = r.M[x.mi] || '', got = x.wi != null ? r.W[x.wi] || '' : '';
      for(var i = 0; i < want.length; i++){
        var ch = want.charAt(i).toLowerCase(), k = s.keys[ch] || (s.keys[ch] = { n: 0, e: 0 }); k.n++;
        if((x.kind === 'spell' || x.kind === 'incomplete') && got.charAt(i).toLowerCase() !== ch) k.e++;
      }
      if(x.kind === 'spell' || x.kind === 'incomplete'){ var nw = norm(want); if(nw.length > 2) s.words[nw] = (s.words[nw] || 0) + 1; }
    });
    var wk = Object.keys(s.words).sort(function(a, b){ return s.words[b] - s.words[a]; }).slice(0, 80), w2 = {}; wk.forEach(function(w){ w2[w] = s.words[w]; }); s.words = w2;
    var h = { at: Date.now(), mode: c.mode, pid: c.pid, title: c.title, min: c.min, used: Math.round(used), kd: kd, need: need, gross: Math.round(gross * 10) / 10, net: Math.round(net * 10) / 10,
      err: r.err, full: r.full, half: r.half, reached: r.reached, total: r.total, ok: ok, limit: limit, bs: T.bsUsed };
    if(kd >= 10){ s.hist.push(h); s.hist = s.hist.slice(-100); save(s); }
    T = { screen: 'result', cfg: c, r: r, h: h, okIfFull: okIfFull, typed: T.typed, early: T.left > 0 };
    render();
  }
  function drawResult(){
    var r = T.r, h = T.h, c = T.cfg, test = c.mode === 'test';
    var verdict = !test ? '<div class="ty-verdict dr">Drill done</div>' :
      h.ok ? '<div class="ty-verdict ok">✓ Qualified</div>' :
      T.early && T.okIfFull ? '<div class="ty-verdict mid">On track — you stopped early</div>' : '<div class="ty-verdict no">Not yet qualified</div>';
    var why = test ? '<ul class="ty-why">' +
      '<li class="' + (h.kd >= h.need ? 'y' : 'n') + '">Key depressions: <b>' + h.kd.toLocaleString() + '</b> of ' + h.need.toLocaleString() + ' needed in ' + h.min + ' min (35 w.p.m.)' + (T.early ? ' — you submitted after ' + mmss(h.used) : '') + '</li>' +
      '<li class="' + (h.err <= h.limit ? 'y' : 'n') + '">Errors: <b>' + fmt(h.err, 2) + '%</b> (allowed ' + h.limit + '%)</li></ul>' : '';
    var stat = function(v, l){ return '<div><b>' + v + '</b><span>' + l + '</span></div>'; };
    var kinds = Object.keys(KIND).filter(function(k){ return r.by[k]; });
    // annotated passage
    var html = [], done = {};
    r.ops.forEach(function(x){
      var cls = x.kind, tip = KIND[x.kind] ? KIND[x.kind][0] : '';
      if(x.o === 5){ html.push('<ins class="' + cls + '" title="' + esc(tip) + '">' + esc(r.W[x.wi]) + '</ins>'); return; }
      var span = x.o === 6 || x.o === 8 ? [x.mi, x.mi + 1] : [x.mi];
      var want = span.map(function(i){ done[i] = 1; return r.M[i]; }).join(' ');
      var got = x.o === 7 || x.o === 8 ? r.W[x.wi] + ' ' + r.W[x.wi + 1] : x.wi != null ? r.W[x.wi] : '';
      if(x.kind === 'ok') html.push('<span>' + esc(want) + '</span>');
      else if(x.kind === 'omit') html.push('<del class="omit" title="' + esc(tip) + '">' + esc(want) + '</del>');
      else html.push('<mark class="' + cls + '" title="' + esc(tip + ': you typed “' + got + '”') + '">' + esc(want) + '<sub>' + esc(got) + '</sub></mark>');
    });
    var rest = r.M.slice(r.reached).join(' ');
    var list = r.list.slice(0, 60);
    root.innerHTML = '<div class="ty-wrap">' +
      '<div class="ty-card ty-res">' + verdict + why +
      '<div class="ty-stats">' + stat(fmt(h.net, 1), 'net w.p.m.') + stat(fmt(h.gross, 1), 'gross w.p.m.') + stat(fmt(h.err, 2) + '%', 'error') + stat(r.full, 'full mistakes') + stat(r.half, 'half mistakes') + stat(r.reached + ' / ' + r.total, 'words reached') + '</div>' +
      (kinds.length ? '<div class="ty-kinds">' + kinds.map(function(k){ return '<span class="ty-kind ' + KIND[k][1] + '">' + KIND[k][0] + ' <b>' + r.by[k] + '</b></span>'; }).join('') + '</div>' : '<p class="ty-sub">No mistakes at all. Excellent!</p>') +
      '<p class="ty-note">Error % = (' + r.full + ' + ' + r.half + ' ÷ 2) × 100 ÷ ' + r.reached + ' words = ' + fmt(h.err, 2) + '%. Net speed = (key depressions ÷ 5 − mistakes) ÷ minutes.' + (h.bs ? ' Backspace used ' + h.bs + ' times.' : '') + '</p>' +
      '<div class="ty-btns"><button class="btn teal" id="tyAgain">Try this again</button><button class="btn ghost" id="tyHome">All tests</button>' +
      (Object.keys(load().words).length ? '<button class="btn mustard" id="tyWeakAi">✨ AI passage from my mistakes</button>' : '') + '</div></div>' +
      '<div class="ty-card"><h3>Your typing, marked</h3><p class="ty-sub"><span class="lg ok">correct</span> <span class="lg full">full mistake</span> <span class="lg half">half mistake</span> <span class="lg omit">left out</span> <span class="lg extra">added</span> — tap a word to see what you typed.</p>' +
      '<div class="ty-marked">' + html.join(' ') + (rest ? ' <span class="ty-rest">' + esc(rest) + '</span>' : '') + '</div></div>' +
      (list.length ? '<div class="ty-card"><h3>Mistakes, one by one</h3><table class="ty-table"><thead><tr><th>Passage</th><th>You typed</th><th>Counted as</th></tr></thead><tbody>' +
        list.map(function(x){ return '<tr><td>' + esc(x.want || '—') + '</td><td>' + esc(x.got || '—') + '</td><td><span class="ty-kind ' + (x.half ? 'half' : 'full') + '">' + KIND[x.kind][0] + ' · ' + (x.half ? '½' : '1') + '</span></td></tr>'; }).join('') +
        '</tbody></table>' + (r.list.length > list.length ? '<p class="ty-note">…and ' + (r.list.length - list.length) + ' more.</p>' : '') + '</div>' : '') +
      '</div>';
    on('tyAgain', 'click', function(){ var cc = T.cfg; if(cc.mode === 'drill' && /^drill-/.test(cc.pid)){ var d = DRILLS.filter(function(x){ return 'drill-' + x[0] === cc.pid; })[0]; cc = Object.assign({}, cc, { text: drillText(d, load()) }); } startTest(cc); });
    on('tyHome', 'click', function(){ T = { screen: 'home' }; render(); });
    on('tyWeakAi', 'click', function(){ T = { screen: 'home' }; render(); var w = document.getElementById('tyWeak'); if(w) w.checked = true; var tp = document.getElementById('tyTopic'); if(tp) tp.focus(); generate(); });
    root.querySelectorAll('.ty-marked mark').forEach(function(m){ m.addEventListener('click', function(){ m.classList.toggle('show'); }); });
    window.scrollTo(0, 0);
  }

  function leave(){ if(T.screen === 'test' && T.started){ finish(); } }
  window.shabdTyping = { render: render, leave: leave, evaluate: evaluate };

  var css = document.createElement('style');
  css.textContent = [
    '.ty-wrap{max-width:860px;margin:0 auto;padding:4px 2px 40px}',
    '.ty-hero{display:flex;gap:16px;justify-content:space-between;align-items:flex-end;margin:6px 0 16px}',
    '.ty-hero h2{font-family:var(--font-display);font-size:30px;margin:2px 0 6px}.ty-hero p{color:var(--ink-soft);margin:0;max-width:540px}',
    '.ty-eyebrow{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--teal);font-weight:700}',
    '.ty-best{display:grid;grid-template-columns:auto auto;gap:2px 8px;align-items:baseline;background:var(--card);border:1px solid var(--rule);border-radius:var(--radius);padding:10px 14px;white-space:nowrap}',
    '.ty-best b{font-size:20px;font-family:var(--font-display)}.ty-best span{font-size:12px;color:var(--ink-faint)}',
    '.ty-card{background:var(--card);border:1px solid var(--rule);border-radius:var(--radius-lg);padding:18px;box-shadow:var(--shadow);margin-bottom:16px}',
    '.ty-card h3{margin:0 0 10px;font-family:var(--font-display);font-size:19px}.ty-sub{color:var(--ink-soft);margin:-4px 0 12px;font-size:14px}',
    '.ty-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:10px}',
    '.ty-grid label{font-size:12.5px;font-weight:600;color:var(--ink-soft);display:flex;flex-direction:column;gap:5px}',
    '.ty-grid input[type=number]{width:100%;background:var(--card);border:1.5px solid var(--rule);border-radius:var(--radius);padding:10px 12px;font-size:14px;color:var(--ink)}',
    '.ty-checks{display:flex;flex-wrap:wrap;gap:8px 18px;margin:4px 0 12px;font-size:14px;color:var(--ink-soft)}.ty-checks label{display:flex;gap:6px;align-items:center}',
    '.ty-note{font-size:12.5px;color:var(--ink-faint);margin:10px 0 0}.ty-st{font-size:13.5px;color:var(--ink-soft)}',
    '.ty-saved{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.ty-chip{display:inline-flex;border:1px solid var(--rule);border-radius:var(--pill);overflow:hidden}',
    '.ty-chip button{background:var(--paper);border:0;padding:5px 10px;font-size:12.5px;color:var(--ink);cursor:pointer}.ty-chip .x{padding:5px 8px;color:var(--ink-faint)}',
    '.ty-drills{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px}',
    '.ty-drill{text-align:left;background:var(--paper);border:1px solid var(--rule);border-radius:var(--radius);padding:10px 12px;cursor:pointer;color:var(--ink);display:flex;flex-direction:column;gap:2px}',
    '.ty-drill:hover{border-color:var(--teal)}.ty-drill .ic{font-size:20px}.ty-drill small{color:var(--ink-faint);font-size:11.5px}',
    '.ty-table{width:100%;border-collapse:collapse;font-size:13.5px;margin-top:8px}.ty-table th,.ty-table td{padding:7px 6px;border-bottom:1px solid var(--rule);text-align:left;vertical-align:top}',
    '.ty-table th{font-size:12px;color:var(--ink-faint);font-weight:600}.ty-ok{color:var(--teal);font-weight:700}.ty-no{color:var(--maroon);font-weight:700}',
    '.ty-chart{position:relative;display:flex;align-items:flex-end;gap:5px;height:110px;padding:14px 0 0;border-bottom:1px solid var(--rule)}',
    '.ty-chart span{flex:1;max-width:44px;border-radius:6px 6px 0 0;position:relative;background:var(--ink-faint)}.ty-chart span.ok{background:var(--teal)}.ty-chart span.no{background:var(--maroon)}',
    '.ty-chart i{position:absolute;top:-16px;left:0;right:0;text-align:center;font-size:10.5px;font-style:normal;color:var(--ink-soft)}',
    '.ty-chart em{position:absolute;left:0;right:0;border-top:1.5px dashed var(--mustard);font-size:10px;font-style:normal;color:var(--mustard-deep);text-align:right}',
    '.ty-weak{margin-top:12px;font-size:13.5px}.ty-key{display:inline-block;min-width:22px;text-align:center;border:1px solid var(--rule);border-bottom-width:3px;border-radius:6px;padding:1px 6px;margin:0 2px 0 8px;font-family:monospace;background:var(--paper)}',
    '.ty-rules summary{cursor:pointer;list-style:none}.ty-rules summary h3{display:inline}.ty-rules ul{padding-left:18px;margin:8px 0 0;line-height:1.6;font-size:14px}',
    '.ty-bar{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:10px;background:var(--card);border:1px solid var(--rule);border-radius:var(--radius);padding:8px 12px;margin-bottom:10px;box-shadow:var(--shadow)}',
    '.ty-bar>div:first-child{flex:1;min-width:0}.ty-bar b{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ty-bar small{color:var(--ink-faint);font-size:12px}',
    '.ty-clock{font-family:var(--font-display);font-size:24px;font-variant-numeric:tabular-nums}.ty-clock.low{color:var(--maroon)}.ty-live{font-size:12.5px;color:var(--ink-soft);white-space:nowrap}',
    '.ty-pass{background:var(--card);border:1px solid var(--rule);border-radius:var(--radius);padding:14px 16px;max-height:38vh;overflow-y:auto;font-size:17px;line-height:1.75;user-select:none;-webkit-user-select:none}',
    '.ty-pass p{margin:0 0 10px}.ty-pass .good{color:var(--teal)}.ty-pass .bad{color:var(--maroon);text-decoration:underline wavy}.ty-pass .cur{background:rgba(201,154,46,.3);border-radius:3px}',
    '.ty-in{margin-top:10px;min-height:30vh;font-size:17px;line-height:1.6;font-family:var(--font-body)}',
    '.ty-kb{margin-top:10px;display:flex;flex-direction:column;gap:4px;align-items:center;user-select:none}.ty-kr{display:flex;gap:4px}',
    '.ty-k{min-width:30px;height:32px;display:flex;align-items:center;justify-content:center;border:1px solid var(--rule);border-bottom-width:3px;border-radius:6px;font-family:monospace;font-size:13px;background:var(--paper)}',
    '.ty-k.f0,.ty-k.f7{box-shadow:inset 0 -3px 0 #c0662e55}.ty-k.f1,.ty-k.f6{box-shadow:inset 0 -3px 0 #b08a1e55}.ty-k.f2,.ty-k.f5{box-shadow:inset 0 -3px 0 #2e7d4f55}.ty-k.f3,.ty-k.f4{box-shadow:inset 0 -3px 0 #2e6da455}',
    '.ty-k.on{background:var(--mustard);color:#1b1203;border-color:var(--mustard-deep);transform:translateY(1px)}.ty-wide{min-width:58px;font-family:var(--font-body);font-size:11px}.ty-space{min-width:220px;font-family:var(--font-body);font-size:11px}',
    '.ty-finger{font-size:13px;color:var(--ink-soft);min-height:18px}',
    '@media (max-width:640px){.ty-k{min-width:22px;height:28px;font-size:11px}.ty-wide{min-width:36px}.ty-space{min-width:140px}.ty-hero{flex-direction:column;align-items:flex-start}.ty-live{display:none}}',
    '.ty-verdict{font-family:var(--font-display);font-size:26px;font-weight:700;margin-bottom:6px}.ty-verdict.ok{color:var(--teal)}.ty-verdict.no{color:var(--maroon)}.ty-verdict.mid{color:var(--mustard-deep)}',
    '.ty-why{list-style:none;padding:0;margin:0 0 12px;font-size:14px}.ty-why li:before{content:"✗ ";color:var(--maroon);font-weight:700}.ty-why li.y:before{content:"✓ ";color:var(--teal)}',
    '.ty-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;margin:8px 0 12px}.ty-stats div{background:var(--paper);border-radius:var(--radius);padding:10px;text-align:center}',
    '.ty-stats b{display:block;font-family:var(--font-display);font-size:22px}.ty-stats span{font-size:12px;color:var(--ink-faint)}',
    '.ty-kinds{display:flex;flex-wrap:wrap;gap:6px}.ty-kind{display:inline-block;font-size:12.5px;padding:3px 9px;border-radius:var(--pill);background:var(--paper)}.ty-kind.full{color:var(--maroon);background:rgba(140,47,57,.1)}.ty-kind.half{color:var(--mustard-deep);background:rgba(201,154,46,.15)}',
    '.ty-btns{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}',
    '.ty-marked{font-size:16px;line-height:2.1}.ty-marked mark{background:rgba(140,47,57,.14);color:var(--maroon);border-radius:4px;padding:1px 3px;cursor:pointer;position:relative}',
    '.ty-marked mark.space,.ty-marked mark.cap,.ty-marked mark.punct,.ty-marked mark.trans{background:rgba(201,154,46,.2);color:var(--mustard-deep)}',
    '.ty-marked mark sub{display:none}.ty-marked mark.show sub{display:inline;font-size:12px;margin-left:4px;color:var(--ink-soft);text-decoration:line-through}',
    '.ty-marked del.omit{color:var(--ink-faint);text-decoration:line-through;background:rgba(140,47,57,.08)}.ty-marked ins{color:#6b4bb8;text-decoration:none;background:rgba(107,75,184,.12);border-radius:4px;padding:1px 3px}',
    '.ty-rest{color:var(--ink-faint);opacity:.6}',
    '.lg{display:inline-block;padding:0 6px;border-radius:4px;font-size:12px}.lg.ok{color:var(--ink)}.lg.full{background:rgba(140,47,57,.14);color:var(--maroon)}.lg.half{background:rgba(201,154,46,.2);color:var(--mustard-deep)}.lg.omit{text-decoration:line-through;color:var(--ink-faint)}.lg.extra{background:rgba(107,75,184,.12);color:#6b4bb8}'
  ].join('\n');
  document.head.appendChild(css);
})();
