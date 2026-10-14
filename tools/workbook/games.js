/* ============================================================
   Lab games — shared by the workbook pages that have a "lab" tab (Chemistry and the Static GK apps).
   A page sets LAB_CONF before this file:
     { title, blurb, ranks?: [[xp, name, icon]…],
       decks: [{ id, ico, title, sub, lesson?, q? (prompt prefix), rq? (prefix for the reverse question),
                 pairs: [[prompt, answer, note?]…] | make(): items, list?(): pairs to show, opts?: fixed options, options?(item) }],
       match?: { deck, title, sub },                               — Memory Match from a deck's pairs
       specials?: [{ id, ico, title, sub, wide?, best?(L), start?(), open() }] }   — the page's own games (e.g. the periodic table)
   Games: 60-second quizzes with combos, Memory Match, XP and ranks. Scores live in the app's saved state (S.lab).
   Runs after the engine has booted, so it uses the engine's helpers ($, esc, shuffle, S, save, openLesson).
   ============================================================ */
/* ---------- state ---------- */
function labS(){ S.lab = S.lab || { best:{}, xp:0, plays:0, find:null, match:null }; S.lab.best = S.lab.best || {}; return S.lab; }
const LAB_RANKS_DEF = [[0,"Beginner","🌱"],[60,"Learner","📘"],[200,"Scholar","🎓"],[450,"Expert","🏆"],[900,"Topper","👑"]];
const labRanks = () => LAB_CONF.ranks || LAB_RANKS_DEF;
function labRank(xp){ const R = labRanks(); let r = R[0]; R.forEach(x => { if (xp >= x[0]) r = x; }); const nx = R.find(x => x[0] > xp); return { r, nx }; }
let LAB = { view: "home", sel: null, cat: null, timer: null };
function leaveLab(){ labStop(); LAB.view = "home"; }
function labStop(){ if (LAB.timer) { clearInterval(LAB.timer); LAB.timer = null; } }

function labStyle(){
  if (document.getElementById("labcss")) return;
  const st = document.createElement("style"); st.id = "labcss";
  st.textContent = `
.lab-hero{display:flex;gap:14px;align-items:center;justify-content:space-between;flex-wrap:wrap}
.lab-rank{display:flex;align-items:center;gap:10px;background:var(--accent-bg);border-radius:14px;padding:10px 14px}
.lab-rank b{display:block;font-size:15px}.lab-rank small{color:var(--ink2);font-size:12px}
.lab-rank .ic{font-size:26px}
.lab-xpbar{height:6px;border-radius:9px;background:var(--rule);margin-top:6px;overflow:hidden;min-width:140px}.lab-xpbar i{display:block;height:100%;background:var(--accent)}
.lab-games{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:10px}
.lab-g{display:flex;flex-direction:column;gap:6px;text-align:left;background:var(--sheet);border:1px solid var(--rule);border-radius:14px;padding:14px;cursor:pointer;font:inherit;color:var(--ink);transition:transform .12s ease,border-color .12s ease}
.lab-g:hover{transform:translateY(-2px);border-color:var(--blue)}
.lab-g .t{display:flex;align-items:center;gap:10px}.lab-g .t span{font-size:26px}.lab-g b{font-size:16px}
.lab-g small{color:var(--ink2)}.lab-g .best{font-family:var(--f-num);font-size:12px;color:var(--accent)}
.lab-g.wide{grid-column:1/-1;background:linear-gradient(135deg,var(--blue-bg),var(--sheet))}
.pt-wrap{overflow-x:auto;padding-bottom:6px;-webkit-overflow-scrolling:touch}
.pt{display:grid;grid-template-columns:repeat(18,minmax(34px,1fr));gap:3px;min-width:640px}
.pt .el{position:relative;aspect-ratio:1/1.05;border-radius:6px;border:1px solid transparent;background:color-mix(in srgb,var(--c) 26%,var(--sheet));color:var(--ink);font:inherit;cursor:pointer;padding:2px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.05;transition:transform .1s ease,box-shadow .1s ease}
.pt .el:hover,.pt .el:focus-visible{transform:scale(1.12);z-index:2;box-shadow:0 4px 14px rgba(0,0,0,.18);outline:none}
.pt .el small{font-size:8.5px;opacity:.75;font-family:var(--f-num)}
.pt .el b{font-size:14px}
.pt .el.dim{opacity:.18}
.pt .el.sel{border-color:var(--ink);box-shadow:0 0 0 2px var(--ink)}
.pt .el.ok{background:var(--good);color:#fff}.pt .el.no{animation:labshake .35s}.pt .el.show{box-shadow:0 0 0 3px var(--bad)}
.pt .gap{grid-column:span 1}
.pt .fnote{font-size:9px;display:flex;align-items:center;justify-content:center;color:var(--ink2);border:1px dashed var(--rule);border-radius:6px}
.pt .frow{height:8px;grid-column:1/-1}
@keyframes labshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
.pt-legend{display:flex;flex-wrap:wrap;gap:6px}
.pt-legend button{border:1px solid var(--rule);background:color-mix(in srgb,var(--c) 22%,var(--sheet));color:var(--ink);border-radius:99px;padding:4px 10px;font:inherit;font-size:12.5px;cursor:pointer}
.pt-legend button[aria-pressed="true"]{border-color:var(--ink);font-weight:700}
.el-card{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start}
.el-big{width:92px;height:100px;border-radius:12px;background:color-mix(in srgb,var(--c) 34%,var(--sheet));display:flex;flex-direction:column;align-items:center;justify-content:center}
.el-big b{font-size:36px;font-family:var(--f-display)}.el-big small{font-family:var(--f-num);font-size:12px}
.el-card dl{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;margin:6px 0 0;font-size:14px}.el-card dt{color:var(--ink2)}.el-card dd{margin:0}
.lab-play{max-width:640px;margin:0 auto;width:100%}
.lab-hud{display:flex;align-items:center;gap:12px;justify-content:space-between}
.lab-hud .sc{font-family:var(--f-num);font-size:22px;font-weight:700}
.lab-combo{font-weight:700;color:var(--accent);min-height:22px}
.lab-time{height:8px;border-radius:9px;background:var(--rule);overflow:hidden}.lab-time i{display:block;height:100%;background:var(--blue);transition:width 1s linear}
.lab-time.low i{background:var(--bad)}
.lab-q{font-family:var(--f-display);font-size:clamp(22px,5vw,30px);text-align:center;padding:18px 8px 6px;min-height:84px;display:flex;align-items:center;justify-content:center}
.lab-opts{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.lab-opts.three{grid-template-columns:1fr 1fr 1fr}
.lab-opts button{min-height:64px;border-radius:14px;border:1px solid var(--rule);background:var(--sheet);color:var(--ink);font:inherit;font-size:17px;font-weight:600;cursor:pointer;padding:8px;transition:transform .08s ease}
.lab-opts button:active{transform:scale(.97)}
.lab-opts button.ok{background:var(--good);border-color:var(--good);color:#fff}
.lab-opts button.no{background:var(--bad);border-color:var(--bad);color:#fff}
.lab-flash{text-align:center;min-height:22px;font-size:14px;color:var(--ink2)}
.lab-res{text-align:center}.lab-res .big{font-size:56px;font-family:var(--f-display);line-height:1}
.lab-miss{display:grid;gap:6px}.lab-miss div{display:flex;justify-content:space-between;gap:10px;border-bottom:1px dashed var(--rule);padding:6px 0;font-size:14px}
.lab-miss b{color:var(--good)}
.mm{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.mm button{min-height:78px;border-radius:12px;border:1px solid var(--rule);background:var(--blue);color:var(--on-blue);font:inherit;font-weight:600;cursor:pointer;padding:6px;font-size:14px;transition:transform .25s ease}
.mm button.up{background:var(--sheet);color:var(--ink)}
.mm button.done{background:var(--good-bg);color:var(--ink);border-color:var(--good);cursor:default}
.lab-pairs{display:grid;gap:4px}.lab-pairs div{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:6px 0;border-bottom:1px dashed var(--rule);font-size:14px}
.lab-pop{animation:labpop .35s ease}
@keyframes labpop{0%{transform:scale(.8);opacity:.4}100%{transform:scale(1);opacity:1}}
@media (max-width:520px){.mm{grid-template-columns:repeat(3,1fr)}.lab-opts button{font-size:15.5px;min-height:58px}}
@media (prefers-reduced-motion:reduce){.lab-g,.pt .el,.lab-opts button,.mm button{transition:none}.lab-pop,.pt .el.no{animation:none}}
`;
  document.head.appendChild(st);
}

/* ---------- home ---------- */
function renderLab(){
  labStyle(); labStop();
  const L = labS();
  const sp = (LAB_CONF.specials || []).find(x => x.id === LAB.view); if (sp) return sp.open();
  const { r, nx } = labRank(L.xp || 0);
  const pct = nx ? Math.round(((L.xp || 0) - r[0]) * 100 / (nx[0] - r[0])) : 100;
  const card = d => `<button type="button" class="lab-g" data-lab-play="${d.id}"><span class="t"><span aria-hidden="true">${d.ico}</span><b>${esc(d.title)}</b></span><small>${esc(d.sub)}</small><span class="best">${L.best[d.id] ? "Best: " + L.best[d.id] : "Not played yet"}</span></button>`;
  $("#app").innerHTML = `<section class="view stack">
    <div class="lab-hero"><div><span class="eyebrow">Learn by playing</span><h1>${esc(LAB_CONF.title || "Lab")}</h1><p class="muted" style="margin:0">${LAB_CONF.blurb || "Quick games for the facts that win marks. Every right answer earns XP."}</p></div>
      <div class="lab-rank"><span class="ic" aria-hidden="true">${r[2]}</span><div><b>${r[1]}</b><small>${L.xp || 0} XP${nx ? ` · ${nx[0] - (L.xp || 0)} to ${nx[1]}` : " · top rank!"}</small><div class="lab-xpbar"><i style="width:${pct}%"></i></div></div></div></div>
    <div class="lab-games">
      ${(LAB_CONF.specials || []).map(s => `<button type="button" class="lab-g${s.wide ? " wide" : ""}" data-lab-go="${s.id}"><span class="t"><span aria-hidden="true">${s.ico}</span><b>${esc(s.title)}</b></span><small>${s.sub}</small><span class="best">${s.best ? s.best(L) : ""}</span></button>`).join("")}
      ${LAB_CONF.decks.map(card).join("")}
      ${LAB_CONF.match ? `<button type="button" class="lab-g" data-lab-go="match"><span class="t"><span aria-hidden="true">🃏</span><b>Memory Match</b></span><small>${esc(LAB_CONF.match.sub)}</small><span class="best">${L.match ? "Best: " + L.match + " moves" : "Not played yet"}</span></button>` : ""}
    </div>
    <div class="block"><h3>How to use the Lab</h3><p class="muted" style="margin:0">Read a lesson first, then play its game until you can answer in about three seconds — that is the speed the exam needs. Each game lasts 60 seconds: right answers in a row build a combo for bonus points. Tap <b>See all pairs</b> on a game to revise its list.</p></div>
  </section>`;
  $("#app").querySelectorAll("[data-lab-play]").forEach(b => b.onclick = () => labIntro(b.dataset.labPlay));
  $("#app").querySelectorAll("[data-lab-go]").forEach(b => b.onclick = () => {
    if (b.dataset.labGo === "match") return labMatch();
    const s = LAB_CONF.specials.find(x => x.id === b.dataset.labGo); LAB.view = s.id; if (s.start) s.start(); s.open(); window.scrollTo(0, 0);
  });
}
const labBack = () => `<div class="lhead"><button class="back" type="button" data-lab-home>‹ Lab</button></div>`;
function labBindHome(){ $("#app").querySelectorAll("[data-lab-home]").forEach(b => b.onclick = () => { labStop(); LAB.view = "home"; renderLab(); window.scrollTo(0,0); }); }

/* ---------- quiz games (60 seconds) ---------- */
function labDeck(id){
  const d = LAB_CONF.decks.find(x => x.id === id);
  const ask = (pre, t) => pre ? `${pre} ${t}${/[?:]$/.test(pre) ? "" : "?"}` : t;
  let items = d.make ? d.make() : d.pairs.map(p => ({ p: ask(d.q, p[0]), a: p[1], note: p[2] || "", raw: p[0], pool: "a" }));
  if (d.rq && !d.make) {   // also ask the other way round, where an answer belongs to one prompt only
    const n = {}; d.pairs.forEach(p => { n[p[1]] = (n[p[1]] || 0) + 1; });
    items = items.concat(d.pairs.filter(p => n[p[1]] === 1).map(p => ({ p: ask(d.rq, p[1]), a: p[0], note: p[2] || "", raw: p[1], pool: "p" })));
  }
  return { d, items };
}
function labIntro(id){
  const { d } = labDeck(id), L = labS();
  const list = d.list ? d.list() : d.pairs;
  $("#app").innerHTML = `<section class="view stack lab-play">${labBack()}
    <div class="block stack lab-pop" style="text-align:center"><div style="font-size:46px" aria-hidden="true">${d.ico}</div><h1 style="margin:0">${esc(d.title)}</h1><p class="muted" style="margin:0">${esc(d.sub)} · 60 seconds · combos for answers in a row</p>
      <p style="margin:0">${L.best[d.id] ? "Your best: <b>" + L.best[d.id] + "</b>" : "First go — no pressure."}</p>
      <div class="row" style="justify-content:center"><button class="btn pri" type="button" id="labgo">▶ Start</button><button class="btn" type="button" id="labpairs">See all pairs</button>${d.lesson ? `<button class="btn ghost" type="button" id="lablesson">Read the lesson</button>` : ""}</div></div>
    <div id="labpairlist"></div></section>`;
  labBindHome();
  $("#labgo").onclick = () => labRun(id);
  $("#labpairs").onclick = () => { $("#labpairlist").innerHTML = `<div class="block"><h3>${list.length} pairs to know</h3><div class="lab-pairs">${list.map(p => `<div><span>${esc(p[0])}</span><b>${esc(p[1])}</b></div>`).join("")}</div></div>`; };
  const lb = $("#lablesson"); if (lb) lb.onclick = () => openLesson(d.lesson, "learn");
}
let LG = null;
function labRun(id){
  labStop();
  const { d, items } = labDeck(id);
  LG = { d, items: shuffle(items), i: 0, score: 0, right: 0, tried: 0, combo: 0, maxc: 0, left: 60, miss: [], lock: false };
  $("#app").innerHTML = `<section class="view stack lab-play">
    <div class="lab-hud"><button class="back" type="button" id="labquit">✕ Stop</button><span class="lab-combo" id="labcombo"></span><span class="sc" id="labscore">0</span></div>
    <div class="lab-time" id="labtime"><i style="width:100%"></i></div>
    <div class="lab-q" id="labq" aria-live="polite"></div>
    <div class="lab-opts" id="labopts"></div>
    <div class="lab-flash" id="labflash"></div></section>`;
  $("#labquit").onclick = () => { labStop(); labOver(); };
  labNext();
  LAB.timer = setInterval(() => {
    LG.left--; const t = $("#labtime"); if (!t) { labStop(); return; }
    t.firstElementChild.style.width = (LG.left / 60 * 100) + "%"; t.classList.toggle("low", LG.left <= 10);
    if (LG.left <= 0) { labStop(); labOver(); }
  }, 1000);
}
function labOptions(it){
  const d = LG.d;
  if (d.opts) return d.opts.slice();
  if (d.options) return d.options(it);
  // wrong options come from the same side of the deck as the answer (names with names, dates with dates)
  const answers = [...new Set(it.all || LG.items.filter(x => x.pool === it.pool).map(x => x.a))].filter(a => a !== it.a);
  const pool = shuffle(answers).slice(0, 3);
  return shuffle([it.a].concat(pool));
}
function labNext(){
  if (LG.i >= LG.items.length) { LG.items = shuffle(LG.items); LG.i = 0; }
  const it = LG.items[LG.i], opts = labOptions(it);
  LG.cur = it; LG.lock = false;
  const q = $("#labq"); q.innerHTML = `<span class="lab-pop">${esc(it.p)}</span>`;
  const box = $("#labopts"); box.className = "lab-opts" + (opts.length === 3 ? " three" : "");
  box.innerHTML = opts.map(o => `<button type="button" data-o="${esc(o)}">${esc(o)}</button>`).join("");
  box.querySelectorAll("button").forEach(b => b.onclick = () => labPick(b));
}
function labPick(b){
  if (LG.lock) return; LG.lock = true;
  const it = LG.cur, ok = b.dataset.o === it.a;
  LG.tried++;
  if (ok) {
    LG.right++; LG.combo++; LG.maxc = Math.max(LG.maxc, LG.combo);
    const gain = 10 + Math.min(LG.combo - 1, 5) * 2;
    LG.score += gain; b.classList.add("ok");
    $("#labflash").textContent = it.note ? it.note : "+" + gain;
  } else {
    LG.combo = 0; b.classList.add("no");
    $("#labopts").querySelectorAll("button").forEach(x => { if (x.dataset.o === it.a) x.classList.add("ok"); });
    LG.miss.push(it); $("#labflash").textContent = (it.note ? it.note + " · " : "") + "Answer: " + it.a;
  }
  $("#labscore").textContent = LG.score;
  $("#labcombo").textContent = LG.combo >= 2 ? "🔥 ×" + LG.combo : "";
  LG.i++;
  setTimeout(() => { if (LAB.timer && $("#labopts")) labNext(); }, ok ? 450 : 1200);
}
function labOver(){
  const L = labS(), id = LG.d.id, best = !L.best[id] || LG.score > L.best[id];
  if (best && LG.score > 0) L.best[id] = LG.score;
  L.xp = (L.xp || 0) + LG.right; L.plays = (L.plays || 0) + 1; save();
  const acc = LG.tried ? Math.round(LG.right * 100 / LG.tried) : 0, seen = new Set();
  const miss = LG.miss.filter(m => { if (seen.has(m.p)) return false; seen.add(m.p); return true; });
  const { r } = labRank(L.xp);
  $("#app").innerHTML = `<section class="view stack lab-play">${labBack()}
    <div class="block lab-res lab-pop"><span class="eyebrow">${esc(LG.d.title)}</span><div class="big">${LG.score}</div>
      <p>${best && LG.score > 0 ? "🎉 New best!" : "Best: " + (L.best[id] || 0)} · ${LG.right}/${LG.tried} right (${acc}%) · longest combo ${LG.maxc} · +${LG.right} XP</p>
      <p class="muted" style="margin:0">${r[2]} ${r[1]} · ${L.xp} XP</p>
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn pri" type="button" id="again">Play again</button><button class="btn" type="button" data-lab-home>More games</button></div></div>
    ${miss.length ? `<div class="block"><h3>Fix these ${miss.length}</h3><div class="lab-miss">${miss.map(m => `<div><span>${esc(m.p)}</span><b>${esc(m.a)}</b></div>`).join("")}</div></div>` : (LG.tried ? `<div class="block"><p style="margin:0">💯 No mistakes — try to beat your score.</p></div>` : "")}
  </section>`;
  labBindHome();
  $("#again").onclick = () => labRun(id);
}

/* ---------- memory match ---------- */
function labMatch(){
  labStop();
  const all = LAB_CONF.decks.find(d => d.id === LAB_CONF.match.deck).pairs, n = {};
  all.forEach(p => { n[p[1]] = (n[p[1]] || 0) + 1; });
  const pairs = shuffle(all.filter(p => n[p[1]] === 1)).slice(0, 6);
  const cards = shuffle(pairs.flatMap((p, i) => [{ k: i, t: p[0] }, { k: i, t: p[1] }]));
  const M = { cards, up: [], done: new Set(), moves: 0, t0: Date.now() };
  const draw = () => {
    $("#app").innerHTML = `<section class="view stack lab-play">${labBack()}
      <div class="lab-hud"><div><span class="eyebrow">Memory Match</span><h2 style="margin:4px 0 0">${esc(LAB_CONF.match.title)}</h2></div><span class="sc">${M.moves} moves</span></div>
      <div class="mm">${M.cards.map((c, i) => `<button type="button" data-i="${i}" class="${M.done.has(c.k) ? "done" : M.up.includes(i) ? "up" : ""}" aria-label="${M.done.has(c.k) || M.up.includes(i) ? esc(c.t) : "Hidden card " + (i + 1)}">${M.done.has(c.k) || M.up.includes(i) ? esc(c.t) : "?"}</button>`).join("")}</div></section>`;
    labBindHome();
    $("#app").querySelectorAll(".mm button").forEach(b => b.onclick = () => flip(+b.dataset.i));
  };
  const flip = i => {
    if (M.up.length === 2 || M.up.includes(i) || M.done.has(M.cards[i].k)) return;
    M.up.push(i); draw();
    if (M.up.length === 2) {
      M.moves++;
      const [a, b] = M.up;
      if (M.cards[a].k === M.cards[b].k) { M.done.add(M.cards[a].k); M.up = []; setTimeout(() => { draw(); if (M.done.size === 6) done(); }, 250); }
      else setTimeout(() => { M.up = []; draw(); }, 900);
    }
  };
  const done = () => {
    const L = labS(), best = !L.match || M.moves < L.match; if (best) L.match = M.moves;
    L.xp = (L.xp || 0) + 12; L.plays = (L.plays || 0) + 1; save();
    $("#app").innerHTML = `<section class="view stack lab-play">${labBack()}<div class="block lab-res lab-pop"><span class="eyebrow">Memory Match</span><div class="big">${M.moves}</div>
      <p>moves · ${Math.round((Date.now() - M.t0) / 1000)} s · ${best ? "🎉 New best!" : "Best: " + L.match + " moves"} · +12 XP</p>
      <div class="lab-pairs" style="text-align:left">${pairs.map(p => `<div><span>${esc(p[0])}</span><b>${esc(p[1])}</b></div>`).join("")}</div>
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn pri" type="button" id="again">New cards</button><button class="btn" type="button" data-lab-home>More games</button></div></div></section>`;
    labBindHome(); $("#again").onclick = labMatch;
  };
  draw(); window.scrollTo(0, 0);
}


/* ---------- decks from the lessons' own tables ---------- */
/** Rows of a lesson's n-th table as [prompt, answer, note] (tags stripped), so a deck never repeats the data. */
function labRows(lessonId, n){
  const strip = s => String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&minus;/g, "−").trim();
  const l = LESSONS.find(x => x.id === lessonId), t = l ? l.blocks.filter(b => b.k === "table")[n || 0] : null;
  return t ? t.rows.map(r => [strip(r[0]), strip(r[1]), strip(r[2])]) : [];
}
/** A "grand mix" deck: a few rows from every listed deck, with each deck's own question wording. */
function labMix(decks){
  // wrong options come from the whole deck (all), so a deck drawn only once or twice in the 80 still has enough
  return shuffle(decks.flatMap(d => { const all = [...new Set(d.pairs.map(p => p[1]))];
    return d.pairs.map(p => ({ p: d.q ? `${d.q} ${p[0]}${/[?:]$/.test(d.q) ? "" : "?"}` : p[0], a: p[1], note: p[2] || "", pool: d.id, all })); })).slice(0, 80);
}
