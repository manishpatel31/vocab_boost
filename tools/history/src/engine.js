/* ============================================================
   History engine — shared by every History page (tools/history/build.js puts it in each one).
   APP.mode "era": a subject app with its own lessons and questions (Learn · Practice · Mock · Revise · Plan).
   APP.mode "hub": start here, a plan across all of history, and revision across every era (no questions of its own).
   ============================================================ */
const HUB = APP.mode === "hub";
const EMBED = (() => { try { return window.parent !== window; } catch(e) { return true; } })();
const TABS = HUB ? ["start","plan","revise"] : ["learn","practice","mock","revise","plan"];

/* ============================================================
   HELPERS & STATE
   ============================================================ */
const $ = (s, r=document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const hash = s => { let h = 5381; for (let i=0;i<s.length;i++) h = ((h<<5)+h + s.charCodeAt(i))|0; return "q"+(h>>>0).toString(36); };
const shuffle = a => { const b=a.slice(); for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [b[i],b[j]]=[b[j],b[i]];} return b; };
const L = id => LESSONS.find(l => l.id === id);
const LNUM = id => LESSONS.findIndex(l => l.id === id) + 1;
const G = id => GROUPS.find(g => g.id === id) || GROUPS[0];
const A = id => APP.apps.find(a => a.id === id);
const appOf = id => (L(id) && L(id).app) || APP.id;       // in the hub, each lesson carries the app it lives in

const QS = QB.map(r => {
  const fixed = !!r[6];
  return { t:r[0], q:r[1], o:r[2], e:r[3], p:(r[4]||"").includes("p"), a: fixed ? (r[5]||0) : 0, fixed, id:hash(r[1]) };
});
const byLesson = id => QS.filter(q => q.t === id);
const makePerm = q => q.fixed ? q.o.map((_,i)=>i) : shuffle(q.o.map((_,i)=>i));
const qCount = id => HUB ? null : byLesson(id).length;
const pCount = id => HUB ? ((APP.pcount||{})[id] || 0) : byLesson(id).filter(q=>q.p).length;

const KEY = APP.key;
let S = { ans:{}, bm:{}, les:{}, mocks:[], plan:null };
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch(e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {} };
const record = (q, ok) => { S.ans[q.id] = ok ? 1 : 0; save(); renderTop(); };

/* Another History app's saved progress. Every page is on the same site, so the hub (and a
   plan) can see which lessons you have read and quizzed in the subject apps. */
function appState(a){ try { return JSON.parse(localStorage.getItem(a.key) || "{}") || {}; } catch(e) { return {}; } }
function lessonState(id){
  const owner = appOf(id);
  if (owner === APP.id) return S.les[id] || {};
  const a = A(owner); return a ? ((appState(a).les || {})[id] || {}) : {};
}
const lesDone = l => !!lessonState(l.id).done;
const heatDots = n => `<span class="dots" aria-label="Asked ${n===3?"almost every shift":n===2?"often":"now and then"}">${[1,2,3].map(i=>`<i class="${i<=n?"on":""}"></i>`).join("")}</span>`;

/* Open a lesson or a tab, here or in the History app it lives in. Inside पाठShala the
   app is asked to switch (so your session is tracked); on its own the page just navigates. */
function openApp(appId, lesson, tab){
  if (appId === APP.id) {
    if (lesson) openLesson(lesson, "learn"); else go(tab || TABS[0]);
    return;
  }
  const a = appId === APP.hub.id ? APP.hub : A(appId);
  if (!a) return;
  const here = () => { location.href = a.file + (lesson ? "?lesson=" + encodeURIComponent(lesson) : "") + (tab ? "#" + tab : ""); };
  if (!EMBED) return here();
  let ok = false;
  const onAck = e => { if (e.origin === location.origin && e.data && e.data.type === "shabd-open-ok") ok = true; };
  window.addEventListener("message", onAck);
  try { window.parent.postMessage({ type:"shabd-open", mod:a.id, lesson: lesson || null, tab: tab || null }, location.origin); } catch(e) {}
  setTimeout(() => { window.removeEventListener("message", onAck); if (!ok) here(); }, 700);
}
const goLink = (label, appId, lesson, tab) => `<button type="button" class="golink" data-go="${esc(JSON.stringify([appId, lesson||null, tab||null]))}">${label}</button>`;
function bindGo(root){
  root.querySelectorAll("[data-go]").forEach(b => b.onclick = ev => { ev.stopPropagation(); const g = JSON.parse(b.dataset.go); openApp(g[0], g[1], g[2]); });
}

function renderTop(){
  if (HUB) {
    const done = LESSONS.filter(lesDone).length;
    $("#topstat").innerHTML = `<b>${done}</b>/${LESSONS.length} lessons<br>in ${APP.apps.length} apps`;
    return;
  }
  const ids = Object.keys(S.ans).filter(k => QS.some(q => q.id === k));
  const right = ids.filter(k => S.ans[k] === 1).length;
  const pct = ids.length ? Math.round(right*100/ids.length) : 0;
  $("#topstat").innerHTML = `<b>${ids.length}</b>/${QS.length} tried<br><b>${pct}%</b> right now`;
}

/* ============================================================
   ROUTING
   ============================================================ */
let TAB = TABS[0];
let timerId = null;
function go(tab){
  if (!TABS.includes(tab)) tab = TABS[0];
  TAB = tab;
  document.querySelectorAll(".nav button").forEach(b => b.setAttribute("aria-current", b.dataset.tab===tab ? "page" : "false"));
  if (tab === "start") renderStart();
  if (tab === "learn") renderLearn();
  if (tab === "practice") renderPractice();
  if (tab === "mock") renderMock();
  if (tab === "revise") renderRevise();
  if (tab === "plan") renderPlan();
  window.scrollTo(0,0);
  try { history.replaceState(null, "", location.pathname + location.search + "#" + tab); } catch(e) {}
}
document.querySelectorAll(".nav button").forEach(b => b.addEventListener("click", () => {
  if (TAB === "mock" && M && M.running && b.dataset.tab !== "mock") { go("mock"); showMockLeave(b.dataset.tab); return; }
  go(b.dataset.tab);
}));

/* ============================================================
   START HERE (hub)
   ============================================================ */
function renderStart(){
  const done = LESSONS.filter(lesDone).length;
  const cards = APP.apps.map(a => {
    const ls = LESSONS.filter(l => l.app === a.id), d = ls.filter(lesDone).length, it = INTROS[a.id] || {};
    return `<button type="button" class="appc" data-go="${esc(JSON.stringify([a.id,null,null]))}">
      <div class="hd"><span class="ic" aria-hidden="true">${a.ico}</span><span><b>${esc(a.title)}</b><small>${esc(a.hi)}</small></span><span class="go">Open ›</span></div>
      ${it.lead ? `<p>${esc(it.lead)}</p>` : ""}
      <div class="meter"><i style="width:${ls.length ? d/ls.length*100 : 0}%"></i></div>
      <span class="meta">${d}/${ls.length} lessons done · ${(APP.qcount||{})[a.id] || 0} questions</span></button>`;
  }).join("");
  const tips = APP.apps.filter(a => INTROS[a.id]).map(a => `<div><dt>${esc(a.title)}</dt><dd>${esc(INTROS[a.id].tip)} ${esc(INTROS[a.id].order)}</dd></div>`).join("");
  $("#app").innerHTML = `<section class="view stack">
    <div class="hero">
      <span class="eyebrow">New to history? Start here</span>
      <h1>History, from zero to exam-ready</h1>
      <p>SSC splits history into five subjects, so these are five apps &mdash; Ancient, Medieval, Modern, Art &amp; Culture, and World &mdash; with ${LESSONS.length} lessons between them. You do not need to know anything before you begin: every lesson opens with a two-minute story that explains what happened and why, and only then gives you the tables, tricks and traps the exam asks about.</p>
      <div class="meter" aria-label="Lessons done in every History app"><i style="width:${done/LESSONS.length*100}%"></i></div>
      <div class="row between"><span class="muted num" style="font-size:13px">${done}/${LESSONS.length} lessons done across the apps</span>
        <button class="btn pri sm" type="button" id="toplan">${S.plan ? "Open my plan" : "Make a study plan"}</button></div>
    </div>
    <div class="block"><h3>How to use these apps</h3><ol class="steps-list">
      <li><b>Pick a plan</b> in the Plan tab &mdash; 5, 7, 10, 15 or 30 days. It tells you exactly what to read each day, and ticks itself as you finish lessons in the apps.</li>
      <li><b>Read the story first</b> in every lesson, then the tables. The <b>Trick</b> boxes help you remember; the <b>Trap</b> boxes are the pairs SSC swaps to catch you.</li>
      <li><b>Take the quiz</b> at the end of each lesson. Anything you get wrong waits for you under Practice &rarr; Mistakes until you get it right.</li>
      <li><b>Revise in layers</b> in the Revise tab here: 30 days out read every summary, in the last week only the most-asked lessons, and in the final hour the Last moment sheet.</li>
    </ol></div>
    <h2>The five apps</h2>
    <div class="appcs">${cards}</div>
    ${tips ? `<div class="block"><h3>How to study each one</h3><dl class="facts prose">${tips}</dl></div>` : ""}
    <div class="block"><h3>Where the marks are</h3><dl class="facts prose">${GROUPS.filter(g=>ERANOTE[g.id]).map(g=>`<div><dt>${esc(g.name)}</dt><dd>${ERANOTE[g.id]}</dd></div>`).join("")}</dl>
      <p class="muted" style="font-size:13px;margin-top:8px">The dots next to each lesson show how often its topic comes up: three dots means almost every shift.</p></div>
  </section>`;
  bindGo($("#app"));
  $("#toplan").onclick = () => go("plan");
}

/* ============================================================
   LEARN (subject app)
   ============================================================ */
function lessonRow(l, nextL){
  const st = lessonState(l.id), n = byLesson(l.id).length;
  return `<button type="button" class="les ${lesDone(l)?"done":""} ${nextL&&l.id===nextL.id?"next":""}" data-open="${l.id}">
    <span class="no">${lesDone(l) ? "✓" : LNUM(l.id)}</span>
    <span class="t"><b>${esc(l.title)}${heatDots(l.heat)}</b><span>${l.hi} · ${n} questions</span></span>
    <span class="sc">${st.best!=null ? `best<br>${st.best}/${n}` : ""}</span></button>`;
}
function renderLearn(){
  const done = LESSONS.filter(lesDone).length;
  const nextL = LESSONS.find(l => !lesDone(l));
  const it = INTROS[APP.id] || {};
  const parts = [];
  LESSONS.forEach(l => {
    const name = l.part ? l.part[0] : "";
    if (!parts.length || parts[parts.length-1].name !== name) parts.push({ name, hi: l.part ? l.part[1] : "", ls: [] });
    parts[parts.length-1].ls.push(l);
  });
  $("#app").innerHTML = `<section class="view stack">
    <div class="hero">
      <span class="eyebrow">${esc(APP.hi)} · History for SSC</span>
      <h1>${esc(APP.title)}</h1>
      <p>${it.lead ? esc(it.lead) + " " : ""}${LESSONS.length} lessons and ${QS.length} exam-style questions. Each lesson starts with a short story, then the tables, tricks and traps, a quiz and a one-screen summary.</p>
      <div class="meter" aria-label="Lessons done"><i style="width:${done/LESSONS.length*100}%"></i></div>
      <div class="row between"><span class="muted num" style="font-size:13px">${done}/${LESSONS.length} lessons done</span>
      ${nextL ? `<button class="btn pri sm" type="button" data-open="${nextL.id}">${done? "Continue" : "Start"}: ${esc(nextL.title)}</button>` : `<span class="muted" style="font-size:13px">All lessons done. Try a mock test.</span>`}</div>
    </div>
    ${it.tip ? `<div class="callout"><b>How to study it.</b> ${esc(it.tip)} ${esc(it.order || "")}</div>` : ""}
    ${parts.map(p => `${p.name ? `<div class="grph"><h2>${esc(p.name)}</h2><span>${p.ls.length} lessons</span></div>${p.hi?`<p class="muted" style="font-size:13px;margin:-8px 0 2px">${p.hi}</p>`:""}` : ""}
      <div class="lessons">${p.ls.map(l => lessonRow(l, nextL)).join("")}</div>`).join("")}
    <p class="foot">The dots show how often a topic is asked in CGL &mdash; three dots means almost every shift. A plan for all of history, and revision across every era, is in ${goLink("History: Start here", APP.hub.id)}.</p>
  </section>`;
  $("#app").querySelectorAll("[data-open]").forEach(b => b.addEventListener("click", () => openLesson(b.dataset.open, "learn")));
  bindGo($("#app"));
}

function blockHTML(b){
  if (b.k==="p") return `<div class="plain"><p>${b.h}</p></div>`;
  if (b.k==="hot") return `<div class="hot"><span class="lab">Why it is asked</span>${b.h}</div>`;
  if (b.k==="story") return `<div class="story"><span class="lab">The story first · two minutes</span>${b.h}${b.key?`<p class="key"><b>Carry this into the tables:</b> ${esc(b.key)}</p>`:""}</div>`;
  if (b.k==="trick") return `<div class="trick"><span class="lab">Trick</span>${b.h}</div>`;
  if (b.k==="trap") return `<div class="trap"><span class="lab">Trap · don't mix these up</span>${b.h}</div>`;
  if (b.k==="link") return `<div class="link"><span class="lab">Link it up</span>${b.h}</div>`;
  if (b.k==="facts") return `<div class="block"><h3>${b.title}</h3><dl class="facts">${b.rows.map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join("")}</dl></div>`;
  if (b.k==="tl") return `<div class="block"><h3>${b.title}</h3><ul class="tl">${b.rows.map(r=>`<li><span class="y">${r[0]}</span><span>${r[1]}</span></li>`).join("")}</ul></div>`;
  if (b.k==="table") return `<div class="block"><h3>${b.title}</h3><div class="tbl"><table><thead><tr>${b.head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`;
  if (b.k==="fig") return `<div class="block"><h3>${b.title}</h3><figure class="fig">${b.svg}<figcaption>${b.cap}</figcaption></figure></div>`;
  return "";
}

let LQ = null;
function openLesson(id, step){
  if (HUB || !L(id) || appOf(id) !== APP.id) { openApp(appOf(id), id); return; }   // the hub shows lessons in their own app
  const l = L(id), i = LNUM(id);
  if (step === "quiz") { LQ = { id, list: shuffle(byLesson(id)).map(q => ({q, perm:makePerm(q)})), i:0, score:0, picked:null }; }
  const head = `<div class="lhead"><button class="back" type="button" id="lback">‹ Lessons</button></div>
    <span class="eyebrow">${esc(APP.title)} · Lesson ${i} of ${LESSONS.length} · ${l.hi}</span><h1>${esc(l.title)}</h1>
    <p class="muted" style="font-size:13px">Asked in CGL ${heatDots(l.heat)} ${l.heat===3?"— almost every shift":l.heat===2?"— often":"— now and then"}</p>
    <div class="steps" role="tablist">
      <button type="button" data-step="learn" aria-current="${step==="learn"?"step":"false"}">1 · Learn</button>
      <button type="button" data-step="quiz" aria-current="${step==="quiz"?"step":"false"}">2 · Quiz</button>
      <button type="button" data-step="sum" aria-current="${step==="sum"?"step":"false"}">3 · Summary</button>
    </div>`;
  let body = "";
  if (step === "learn") {
    body = `<div class="stack">${l.blocks.map(blockHTML).join("")}
      <div class="row end"><button class="btn pri" type="button" id="toquiz">Take the quiz · ${byLesson(id).length} questions</button></div></div>`;
  } else if (step === "quiz") {
    body = `<div id="lq"></div>`;
  } else {
    const nxt = LESSONS[i];
    body = `<div class="stack"><div class="block"><h3>Remember these</h3><ul class="sum">${l.sum.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></div>
      <div class="row between"><button class="btn" type="button" id="relearn">Read again</button>
      ${nxt ? `<button class="btn pri" type="button" id="nextles">Next: ${esc(nxt.title)}</button>` : `<button class="btn pri" type="button" id="tomock">Take a mock test</button>`}</div></div>`;
    S.les[id] = Object.assign(S.les[id]||{}, {done:1}); save(); renderTop();
  }
  $("#app").innerHTML = `<section class="view stack">${head}${body}</section>`;
  $("#lback").onclick = () => go("learn");
  $("#app").querySelectorAll("[data-step]").forEach(b => b.onclick = () => openLesson(id, b.dataset.step));
  if (step==="learn") $("#toquiz").onclick = () => openLesson(id,"quiz");
  if (step==="quiz") renderLQ();
  if (step==="sum") {
    $("#relearn").onclick = () => openLesson(id,"learn");
    const n = $("#nextles"); if (n) n.onclick = () => openLesson(LESSONS[i].id,"learn");
    const m = $("#tomock"); if (m) m.onclick = () => go("mock");
  }
  window.scrollTo(0,0);
}

function optsHTML(q, perm, state){
  return perm.map((oi, k) => {
    let cls = "opt";
    if (state.reveal) { if (oi === q.a) cls += " ok"; else if (oi === state.picked) cls += " no"; }
    else if (state.sel === oi) cls += " sel";
    return `<button type="button" class="${cls}" data-oi="${oi}" ${state.reveal?"disabled":""}><span class="k">${"ABCD"[k]}</span><span>${esc(q.o[oi])}</span></button>`;
  }).join("");
}
function expHTML(q, picked){
  const ok = picked === q.a;
  return `<div class="exp">${ok ? `<b class="okl">Correct.</b>` : `<b class="nol">Answer: ${esc(q.o[q.a])}.</b>`} ${esc(q.e)}</div>`;
}
function metaHTML(q, no){
  return `<div class="qmeta"><span class="qno">${no}</span><span class="tag">L${LNUM(q.t)} · ${esc(L(q.t).title)}</span>${q.p?`<span class="tag pyq" title="This fact comes up again and again in SSC papers">Repeatedly asked</span>`:""}
  <button type="button" class="bm" data-bm="${q.id}" aria-pressed="${S.bm[q.id]?"true":"false"}" aria-label="Bookmark">${S.bm[q.id]?"★":"☆"}</button></div>`;
}

function renderLQ(){
  const box = $("#lq");
  if (LQ.i >= LQ.list.length) {
    const n = LQ.list.length;
    const st = S.les[LQ.id] || {}; st.best = Math.max(st.best||0, LQ.score); S.les[LQ.id] = st; save();
    box.innerHTML = `<div class="stack"><div class="block stack"><span class="eyebrow">Quiz done</span>
      <div class="scorebig"><span class="num">${LQ.score}</span><span class="muted">/ ${n} correct</span></div>
      <p class="muted">${LQ.score===n ? "Full marks." : LQ.score >= n*0.8 ? "Strong. Review the ones you missed under Practice → Mistakes." : "Read the story and the Trap boxes once more, then retry. Missed questions are saved under Practice → Mistakes."}</p></div>
      <div class="row between"><button class="btn" type="button" id="retry">Retry quiz</button><button class="btn pri" type="button" id="tosum">See summary</button></div></div>`;
    $("#retry").onclick = () => openLesson(LQ.id,"quiz");
    $("#tosum").onclick = () => openLesson(LQ.id,"sum");
    return;
  }
  const it = LQ.list[LQ.i], q = it.q;
  const reveal = LQ.picked !== null;
  box.innerHTML = `<div class="stack"><div class="meter"><i style="width:${LQ.i/LQ.list.length*100}%"></i></div>
    <article class="qcard">${metaHTML(q, `Q${LQ.i+1}/${LQ.list.length}`)}
    <p class="qt">${esc(q.q)}</p><div class="opts">${optsHTML(q, it.perm, {picked:LQ.picked, reveal})}</div>
    ${reveal ? expHTML(q, LQ.picked) : ""}</article>
    ${reveal ? `<div class="row end"><button class="btn pri" type="button" id="lqnext">${LQ.i+1 < LQ.list.length ? "Next question" : "Finish"}</button></div>` : `<p class="muted" style="font-size:13px">Score so far: <span class="num">${LQ.score}</span></p>`}</div>`;
  box.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    if (LQ.picked !== null) return;
    LQ.picked = +b.dataset.oi; const ok = LQ.picked === q.a; if (ok) LQ.score++; record(q, ok); renderLQ();
  });
  bindBM(box);
  const nx = $("#lqnext"); if (nx) nx.onclick = () => { LQ.i++; LQ.picked = null; renderLQ(); window.scrollTo(0,0); };
}

function bindBM(root){
  root.querySelectorAll("[data-bm]").forEach(b => b.onclick = (ev) => {
    ev.stopPropagation();
    const id = b.dataset.bm; if (S.bm[id]) delete S.bm[id]; else S.bm[id] = 1; save();
    b.setAttribute("aria-pressed", S.bm[id] ? "true":"false"); b.textContent = S.bm[id] ? "★" : "☆";
  });
}

/* ============================================================
   PRACTICE
   ============================================================ */
let PF = "all", PSHOW = 20, PORDER = null, PPERM = {}, PPICK = {};
const hasHot = () => LESSONS.some(l => l.heat === 3) && LESSONS.some(l => l.heat !== 3);
function practiceList(){
  let list = QS;
  if (PF === "pyq") list = QS.filter(q => q.p);
  else if (PF === "hot") list = QS.filter(q => L(q.t).heat === 3);
  else if (PF === "wrong") list = QS.filter(q => S.ans[q.id] === 0);
  else if (PF === "new") list = QS.filter(q => S.ans[q.id] === undefined);
  else if (PF === "bm") list = QS.filter(q => S.bm[q.id]);
  else if (PF !== "all") list = QS.filter(q => q.t === PF);
  if (PORDER) { const pos = new Map(PORDER.map((id,i)=>[id,i])); list = list.slice().sort((a,b)=>(pos.get(a.id)??0)-(pos.get(b.id)??0)); }
  return list;
}
function renderPractice(){
  const wrongN = QS.filter(q => S.ans[q.id] === 0).length, bmN = QS.filter(q=>S.bm[q.id]).length;
  const pyqN = QS.filter(q=>q.p).length, hotN = QS.filter(q=>L(q.t).heat===3).length;
  const chips = [["all",`All ${QS.length}`],["new","Not tried"],["wrong",`Mistakes ${wrongN}`]]
    .concat(hasHot() ? [["hot",`Most-asked topics ${hotN}`]] : [])
    .concat([["pyq",`Repeatedly asked ${pyqN}`],["bm",`Starred ${bmN}`]])
    .concat(LESSONS.map(l=>[l.id,`L${LNUM(l.id)} ${l.title}`]));
  const list = practiceList();
  $("#app").innerHTML = `<section class="view stack">
    <div class="stack" style="gap:6px"><span class="eyebrow">Question bank · ${QS.length} questions</span><h1>Practice</h1>
    <p class="muted">Tap an option to check it. Wrong answers go to <b>Mistakes</b> until you get them right. <b>Repeatedly asked</b> marks the facts that come up again and again in SSC papers${hasHot() ? "; <b>Most-asked topics</b> is every question from the three-dot lessons" : ""}.</p></div>
    <div class="chips" role="group" aria-label="Filter">${chips.map(c=>`<button type="button" class="chip" data-f="${c[0]}" aria-pressed="${PF===c[0]}">${esc(c[1])}</button>`).join("")}</div>
    <div class="row between"><span class="muted num" style="font-size:13px">${list.length} questions</span>
      <div class="row"><button class="btn sm ghost" type="button" id="pshuf">${PORDER?"In order":"Shuffle"}</button></div></div>
    <div class="stack" id="plist"></div>
  </section>`;
  $("#app").querySelectorAll("[data-f]").forEach(b => b.onclick = () => { PF = b.dataset.f; PSHOW = 20; PPICK = {}; renderPractice(); });
  $("#pshuf").onclick = () => { PORDER = PORDER ? null : shuffle(QS.map(q=>q.id)); PSHOW = 20; renderPractice(); };
  const chipOn = $(`.chip[aria-pressed="true"]`); if (chipOn) chipOn.scrollIntoView({block:"nearest", inline:"center"});
  drawPList();
}
function pCard(q, idx){
  if (!PPERM[q.id]) PPERM[q.id] = makePerm(q);
  const picked = PPICK[q.id]; const reveal = picked !== undefined;
  return `<article class="qcard" data-q="${q.id}">${metaHTML(q, "Q"+(idx+1))}<p class="qt">${esc(q.q)}</p>
    <div class="opts">${optsHTML(q, PPERM[q.id], {picked: reveal?picked:null, reveal})}</div>${reveal?expHTML(q,picked):""}</article>`;
}
function drawPList(){
  const list = practiceList(), box = $("#plist");
  if (!list.length) { box.innerHTML = `<p class="empty">${PF==="wrong"?"No mistakes saved. Answer some questions first, or you've cleared them all.":PF==="bm"?"Nothing starred yet. Tap ☆ on any question.":"Nothing here."}</p>`; return; }
  box.innerHTML = list.slice(0, PSHOW).map((q,i)=>pCard(q,i)).join("") + (list.length > PSHOW ? `<button class="btn" type="button" id="pmore">Show 20 more (${list.length-PSHOW} left)</button>` : "");
  box.querySelectorAll(".qcard").forEach(bindCard);
  const more = $("#pmore"); if (more) more.onclick = () => { PSHOW += 20; drawPList(); };
}
function bindCard(card){
  card.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    const q = QS.find(x => x.id === card.dataset.q); if (PPICK[q.id] !== undefined) return;
    PPICK[q.id] = +b.dataset.oi; record(q, PPICK[q.id] === q.a);
    const idx = +card.querySelector(".qno").textContent.slice(1) - 1;
    const tmp = document.createElement("div"); tmp.innerHTML = pCard(q, idx); const nc = tmp.firstElementChild;
    card.replaceWith(nc); bindCard(nc);
  });
  bindBM(card);
}

/* ============================================================
   MOCK TEST
   ============================================================ */
let M = null, MCFG = {n:25, scope:"all", neg:1}, LEAVE_TO = null;
function mockPool(scope){
  if (scope === "all") return QS;
  if (scope === "pyq") return QS.filter(q=>q.p);
  if (scope === "hot") return QS.filter(q=>L(q.t).heat===3);
  if (scope === "wrong") return QS.filter(q=>S.ans[q.id]===0);
  return QS.filter(q=>q.t===scope);
}
function renderMock(){
  if (M && M.running) return drawMockRun();
  if (M && M.done) return drawMockResult();
  const hist = (S.mocks||[]).slice(-6).reverse();
  $("#app").innerHTML = `<section class="view stack">
    <div class="stack" style="gap:6px"><span class="eyebrow">Timed, SSC pattern</span><h1>Mock test</h1>
    <p class="muted">+2 for a right answer, &minus;0.5 for a wrong one, 36 seconds a question (CGL Tier-1 pace). Answers show only after you submit.</p></div>
    <div class="block stack">
      <fieldset><legend>Questions</legend><div class="radios">${[10,25,50,100].map(n=>`<label><input type="radio" name="mn" id="mn${n}" value="${n}" ${MCFG.n===n?"checked":""}><span>${n} · ${Math.round(n*36/60)} min</span></label>`).join("")}</div></fieldset>
      <fieldset><legend>From</legend><select id="mscope" aria-label="Topics to draw from">
        <option value="all">Everything (${QS.length} Q)</option>
        ${hasHot() ? `<option value="hot">Most-asked topics only</option>` : ""}
        <option value="pyq">Repeatedly asked only</option>
        <option value="wrong">My mistakes</option>
        ${LESSONS.map(l=>`<option value="${l.id}">L${LNUM(l.id)} · ${esc(l.title)}</option>`).join("")}
      </select></fieldset>
      <label class="row" style="gap:8px;font-weight:600"><input type="checkbox" id="mneg" ${MCFG.neg?"checked":""}> Negative marking (&minus;0.5)</label>
      <div id="merr" class="muted" style="font-size:14px"></div>
      <div class="row end"><button class="btn pri" type="button" id="mstart">Start test</button></div>
    </div>
    ${hist.length ? `<div class="block"><h3>Recent attempts</h3><div class="hist">${hist.map(h=>`<div><span>${esc(h.d)} · ${h.n} Q</span><span class="num">${h.score}/${h.max} · ${h.acc}%</span></div>`).join("")}</div></div>` : ""}
  </section>`;
  if ([...$("#mscope").options].some(o => o.value === MCFG.scope)) $("#mscope").value = MCFG.scope;
  $("#mstart").onclick = () => {
    MCFG.n = +(document.querySelector('input[name="mn"]:checked')||{value:25}).value;
    MCFG.scope = $("#mscope").value; MCFG.neg = $("#mneg").checked ? 1 : 0;
    const pool = mockPool(MCFG.scope);
    if (!pool.length) { $("#merr").textContent = "No questions in that set yet. Pick another source."; return; }
    const qs = shuffle(pool).slice(0, MCFG.n);
    M = { running:true, list: qs.map(q=>({q, perm:makePerm(q)})), ans: qs.map(()=>null), mark: qs.map(()=>false), i:0, neg:MCFG.neg, secs: qs.length*36, start: Date.now(), showPal:false, confirm:false };
    M.end = M.start + M.secs*1000;
    startTimer(); drawMockRun();
  };
}
function startTimer(){
  clearInterval(timerId);
  timerId = setInterval(() => {
    if (!M || !M.running) { clearInterval(timerId); return; }
    const left = Math.max(0, Math.round((M.end - Date.now())/1000));
    const el = $("#mtime"); if (el) { el.textContent = fmt(left); el.classList.toggle("low", left <= 60); }
    if (left <= 0) submitMock();
  }, 1000);
}
const fmt = s => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
function drawMockRun(){
  const it = M.list[M.i], q = it.q, left = Math.max(0, Math.round((M.end-Date.now())/1000));
  const answered = M.ans.filter(a=>a!==null).length;
  $("#app").innerHTML = `<section class="view stack">
    <div class="mbar"><span class="timer num ${left<=60?"low":""}" id="mtime">${fmt(left)}</span>
      <span class="muted num" style="font-size:13px;flex:1">Q ${M.i+1}/${M.list.length} · ${answered} answered</span>
      <button class="btn sm" type="button" id="mpal">${M.showPal?"Hide":"All Qs"}</button></div>
    ${LEAVE_TO ? `<div class="confirm"><b>Leave the test?</b><span>Your answers so far will be scored now.</span><div class="row"><button class="btn sm pri" type="button" id="lvy">Submit and leave</button><button class="btn sm" type="button" id="lvn">Stay</button></div></div>` : ""}
    ${M.showPal ? `<div class="block"><div class="pal">${M.list.map((_,k)=>`<button type="button" data-j="${k}" class="${M.ans[k]!==null?"a":""} ${M.mark[k]?"m":""} ${k===M.i?"cur":""}" aria-label="Question ${k+1}">${k+1}</button>`).join("")}</div>
      <p class="muted" style="font-size:12px;margin-top:8px">Filled = answered · gold line = marked for review</p></div>` : ""}
    <article class="qcard"><div class="qmeta"><span class="qno">Q${M.i+1}</span><span class="tag">L${LNUM(q.t)}</span>${M.mark[M.i]?`<span class="tag pyq">Marked</span>`:""}</div>
      <p class="qt">${esc(q.q)}</p><div class="opts">${optsHTML(q, it.perm, {sel:M.ans[M.i], reveal:false})}</div></article>
    <div class="row between"><button class="btn" type="button" id="mprev" ${M.i===0?"disabled":""}>‹ Prev</button>
      <button class="btn ghost" type="button" id="mmark">${M.mark[M.i]?"Unmark":"Mark"}</button>
      <button class="btn ghost" type="button" id="mclr" ${M.ans[M.i]===null?"disabled":""}>Clear</button>
      <button class="btn ${M.i<M.list.length-1?"pri":""}" type="button" id="mnext" ${M.i===M.list.length-1?"disabled":""}>Next ›</button></div>
    ${M.confirm ? `<div class="confirm"><b>Submit the test?</b><span>${M.list.length-answered} unanswered${M.mark.filter(Boolean).length?`, ${M.mark.filter(Boolean).length} marked for review`:""}.</span><div class="row"><button class="btn sm pri" type="button" id="msubY">Submit</button><button class="btn sm" type="button" id="msubN">Keep going</button></div></div>`
      : `<button class="btn pri" type="button" id="msub">Submit test</button>`}
  </section>`;
  $("#app").querySelectorAll(".opt").forEach(b => b.onclick = () => { M.ans[M.i] = +b.dataset.oi; drawMockRun(); });
  $("#mprev").onclick = () => { if (M.i>0){M.i--; drawMockRun();} };
  $("#mnext").onclick = () => { if (M.i<M.list.length-1){M.i++; drawMockRun(); window.scrollTo(0,0);} };
  $("#mmark").onclick = () => { M.mark[M.i] = !M.mark[M.i]; drawMockRun(); };
  $("#mclr").onclick = () => { M.ans[M.i] = null; drawMockRun(); };
  $("#mpal").onclick = () => { M.showPal = !M.showPal; drawMockRun(); };
  $("#app").querySelectorAll("[data-j]").forEach(b => b.onclick = () => { M.i = +b.dataset.j; drawMockRun(); });
  const s = $("#msub"); if (s) s.onclick = () => { M.confirm = true; drawMockRun(); };
  const y = $("#msubY"); if (y) y.onclick = submitMock;
  const n = $("#msubN"); if (n) n.onclick = () => { M.confirm = false; drawMockRun(); };
  const lvy = $("#lvy"); if (lvy) lvy.onclick = () => { const t = LEAVE_TO; LEAVE_TO = null; submitMock(); go(t); };
  const lvn = $("#lvn"); if (lvn) lvn.onclick = () => { LEAVE_TO = null; drawMockRun(); };
}
function showMockLeave(tab){ LEAVE_TO = tab; drawMockRun(); }
function submitMock(){
  if (!M || !M.running) return;
  clearInterval(timerId);
  M.running = false; M.done = true; M.confirm = false;
  let c=0,w=0,sk=0; const per = {};
  M.list.forEach((it,k) => {
    const a = M.ans[k], t = it.q.t; per[t] = per[t] || {c:0,n:0}; per[t].n++;
    if (a===null) sk++; else if (a===it.q.a) { c++; per[t].c++; S.ans[it.q.id]=1; } else { w++; S.ans[it.q.id]=0; }
  });
  const max = M.list.length*2, score = +(c*2 - (M.neg? w*0.5 : 0)).toFixed(1);
  const used = Math.min(M.secs, Math.round((Date.now()-M.start)/1000));
  M.res = {c,w,sk,score,max,used,per, acc: (c+w) ? Math.round(c*100/(c+w)) : 0};
  const d = new Date(); const ds = d.toLocaleDateString("en-IN",{day:"numeric",month:"short"})+" "+d.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"});
  S.mocks = (S.mocks||[]).concat([{d:ds, n:M.list.length, score, max, acc:M.res.acc}]).slice(-20); save(); renderTop();
  M.filter = "wrong";
  if (TAB==="mock") drawMockResult();
}
function drawMockResult(){
  const r = M.res;
  const per = Object.keys(r.per).sort((a,b)=>LNUM(a)-LNUM(b)).map(t => `<div><span>L${LNUM(t)} · ${esc(L(t).title)}</span><span class="num">${r.per[t].c}/${r.per[t].n}</span></div>`).join("");
  const rows = M.list.map((it,k)=>({it,k})).filter(({it,k}) => M.filter==="all" ? true : M.filter==="wrong" ? (M.ans[k]!==null && M.ans[k]!==it.q.a) : M.ans[k]===null);
  $("#app").innerHTML = `<section class="view stack">
    <div class="stack" style="gap:6px"><span class="eyebrow">Result</span>
    <div class="scorebig"><span class="num">${r.score}</span><span class="muted">/ ${r.max} marks</span></div></div>
    <div class="kpis"><div class="kpi g"><span class="num">${r.c}</span><span>right</span></div><div class="kpi b"><span class="num">${r.w}</span><span>wrong</span></div><div class="kpi"><span class="num">${r.sk}</span><span>skipped</span></div><div class="kpi"><span class="num">${r.acc}%</span><span>accuracy</span></div></div>
    <p class="muted num" style="font-size:13px">Time used ${fmt(r.used)} of ${fmt(M.secs)}</p>
    <div class="block"><h3>By lesson</h3><div class="hist">${per}</div></div>
    <div class="row between"><button class="btn" type="button" id="mnew">New test</button><button class="btn pri" type="button" id="mretry">Retake same questions</button></div>
    <h2>Review</h2>
    <div class="chips">${[["wrong",`Wrong ${r.w}`],["skip",`Skipped ${r.sk}`],["all",`All ${M.list.length}`]].map(c=>`<button class="chip" type="button" data-rf="${c[0]}" aria-pressed="${M.filter===c[0]}">${c[1]}</button>`).join("")}</div>
    <div class="stack">${rows.length ? rows.map(({it,k}) => `<article class="qcard">${metaHTML(it.q, "Q"+(k+1))}<p class="qt">${esc(it.q.q)}</p><div class="opts">${optsHTML(it.q, it.perm, {picked:M.ans[k], reveal:true})}</div>${M.ans[k]===null?`<div class="exp"><b class="nol">Skipped. Answer: ${esc(it.q.o[it.q.a])}.</b> ${esc(it.q.e)}</div>`:expHTML(it.q, M.ans[k])}</article>`).join("") : `<p class="empty">Nothing in this list.</p>`}</div>
  </section>`;
  bindBM($("#app"));
  $("#app").querySelectorAll("[data-rf]").forEach(b => b.onclick = () => { M.filter = b.dataset.rf; drawMockResult(); });
  $("#mnew").onclick = () => { M = null; renderMock(); };
  $("#mretry").onclick = () => {
    const list = M.list.map(it=>({q:it.q, perm:makePerm(it.q)}));
    M = { running:true, list, ans:list.map(()=>null), mark:list.map(()=>false), i:0, neg:MCFG.neg, secs:list.length*36, start:Date.now(), showPal:false, confirm:false };
    M.end = M.start + M.secs*1000; startTimer(); drawMockRun();
  };
}

/* ============================================================
   REVISE — layered: a month out, a week out, the last hour
   ============================================================ */
let RV = "month", FC = null, FCSCOPE = "all";
function reviseTabs(){
  const t = [["month","30 days"],["week","7 days"],["last","Last moment"]];
  if (TIMELINE.some(x => x.rows.length)) t.push(["time","Timeline"]);
  t.push(["tricks","Tricks"],["traps","Traps"]);
  if (TILES.length) t.push(["nums","Numbers"]);
  if (!HUB) t.push(["flash","Flashcards"]);
  return t;
}
function renderRevise(){
  const tabs = reviseTabs();
  if (!tabs.some(t => t[0] === RV)) RV = "month";
  $("#app").innerHTML = `<section class="view stack">
    <div class="stack" style="gap:6px"><span class="eyebrow">Revision, layered by how long you have${HUB ? " · every era" : ""}</span><h1>Revise</h1>
    <p class="muted">Start at <b>30 days</b> for every summary, drop to <b>7 days</b> for the most-asked lessons only, and open <b>Last moment</b> in the hour before the paper.</p></div>
    <div class="seg" role="tablist">${tabs.map(t=>`<button type="button" role="tab" data-rv="${t[0]}" aria-selected="${RV===t[0]}">${t[1]}</button>`).join("")}</div>
    <div id="rv" class="stack"></div>
    ${HUB && RV !== "flash" ? `<div class="row">${S.les["rv:"+RV] ? `<span class="muted" style="font-size:14px">✓ You marked this sheet as revised.</span> <button class="btn sm ghost" type="button" id="rvundo">Undo</button>` : `<button class="btn sm revdone" type="button" id="rvdone">Mark this sheet as revised</button>`}</div>` : ""}
  </section>`;
  $("#app").querySelectorAll("[data-rv]").forEach(b => b.onclick = () => { RV = b.dataset.rv; renderRevise(); });
  const rd = $("#rvdone"); if (rd) rd.onclick = () => { S.les["rv:"+RV] = {done:1}; save(); renderRevise(); };
  const ru = $("#rvundo"); if (ru) ru.onclick = () => { delete S.les["rv:"+RV]; save(); renderRevise(); };
  const box = $("#rv");
  if (RV === "month") drawDigest(box, LESSONS, "Every lesson's summary in one scroll — " + (HUB ? "all of history" : "the whole app") + " in about " + Math.max(1, Math.round(LESSONS.length * 4 / 60)) + " hour" + (LESSONS.length * 4 >= 90 ? "s" : "") + ".");
  if (RV === "week") { const w = LESSONS.filter(l=>l.heat===3); drawDigest(box, w.length ? w : LESSONS.filter(l=>l.heat>=2), "Only the three-dot lessons — what the paper asks almost every shift."); }
  if (RV === "last") drawLastMoment(box);
  if (RV === "time") drawTimeline(box);
  if (RV === "tricks" || RV === "traps") {
    const kind = RV==="tricks" ? "trick" : "trap";
    const items = LESSONS.flatMap(l => l.blocks.filter(b=>b.k===kind).map(b=>({l, h:b.h})));
    box.innerHTML = `<p class="muted" style="font-size:14px">${items.length} ${kind==="trick"?"memory tricks and mnemonics":"traps — the pairs SSC deliberately swaps"} from ${LESSONS.length} lessons.</p>`
      + items.map(x => `<div class="${kind}"><span class="lab">${HUB ? esc(A(x.l.app).title) + " · " : ""}${esc(x.l.title)}</span>${x.h}</div>`).join("");
  }
  if (RV === "nums") box.innerHTML = `<div class="tiles">${TILES.map(t=>`<div class="tile"><span class="num">${t[0]}</span><span>${t[1]}</span></div>`).join("")}</div>`;
  if (RV === "flash") drawFlash(box);
}
function digestGroups(list){
  if (HUB) return APP.apps.map(a => ({ name: a.title, note: ERANOTE[a.era] || "", ls: list.filter(l => l.app === a.id) }));
  const out = [];
  list.forEach(l => {
    const name = l.part ? l.part[0] : APP.title;
    if (!out.length || out[out.length-1].name !== name) out.push({ name, note: out.length ? "" : (ERANOTE[APP.era] || ""), ls: [] });
    out[out.length-1].ls.push(l);
  });
  return out;
}
function drawDigest(box, list, note){
  box.innerHTML = `<input class="search" id="dgs" type="search" placeholder="Search the summaries (e.g. Lothal, jizya, Dandi)" aria-label="Search summaries">
    <p class="muted" style="font-size:14px">${note}</p><div id="dgl" class="stack"></div>`;
  const draw = () => {
    const s = $("#dgs").value.trim().toLowerCase();
    const html = digestGroups(list).map(g => {
      const ls = g.ls.map(l => {
        const pts = l.sum.filter(p => !s || p.toLowerCase().includes(s) || l.title.toLowerCase().includes(s));
        if (!pts.length) return "";
        return `<div class="block"><h3>${esc(l.title)} ${heatDots(l.heat)}</h3><ul class="sum">${pts.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>
          <p style="margin-top:8px;font-size:14px">${goLink("Open the lesson ›", appOf(l.id), l.id)}</p></div>`;
      }).filter(Boolean);
      if (!ls.length) return "";
      return `<div class="grph"><h2>${esc(g.name)}</h2><span>${ls.length} lessons</span></div>
        ${g.note && !s ? `<p class="muted" style="font-size:13px;margin:-8px 0 2px">${g.note}</p>` : ""}${ls.join("")}`;
    }).join("");
    $("#dgl").innerHTML = html || `<p class="empty">Nothing matches that.</p>`;
    bindGo($("#dgl"));
  };
  $("#dgs").oninput = draw; draw();
}
function drawLastMoment(box){
  box.innerHTML = `<div class="callout"><b>Read this, nothing else.</b> These are the pairings that decide marks — the ones candidates lose because two names got swapped.</div>
    <input class="search" id="lms" type="search" placeholder="Search a name or term" aria-label="Search the last-moment sheet">
    <div id="lml" class="stack"></div>`;
  const draw = () => {
    const s = $("#lms").value.trim().toLowerCase();
    const html = LASTMOMENT.map(c => {
      const rows = c.rows.filter(r => !s || (r[0]+" "+r[1]).toLowerCase().includes(s) || c.t.toLowerCase().includes(s));
      if (!rows.length) return "";
      return `<div class="block"><h3>${esc(c.t)}</h3><div class="lines">${rows.map(r=>`<div><span>${r[0]}</span><b>${r[1]}</b></div>`).join("")}</div></div>`;
    }).filter(Boolean).join("");
    $("#lml").innerHTML = html || `<p class="empty">Nothing matches that.</p>`;
  };
  $("#lms").oninput = draw; draw();
}
function drawTimeline(box){
  box.innerHTML = `<input class="search" id="tls" type="search" placeholder="Search a year or an event (e.g. 1857, Panipat)" aria-label="Search the timeline"><div id="tll" class="stack"></div>`;
  const draw = () => {
    const s = $("#tls").value.trim().toLowerCase();
    const html = TIMELINE.map(t => {
      const rows = t.rows.filter(r => !s || (r[0]+" "+r[1]).toLowerCase().includes(s));
      if (!rows.length) return "";
      return `<div class="grph"><h2>${esc(G(t.era).name)}</h2><span>${rows.length} dates</span></div>
        <div class="block"><ul class="tl">${rows.map(r=>`<li><span class="y">${r[0]}</span><span>${r[1]}</span></li>`).join("")}</ul></div>`;
    }).filter(Boolean).join("");
    $("#tll").innerHTML = html || `<p class="empty">No date matches that.</p>`;
  };
  $("#tls").oninput = draw; draw();
}
function drawFlash(box){
  if (!FC) { const pool = FCSCOPE==="all" ? QS : FCSCOPE==="wrong" ? QS.filter(q=>S.ans[q.id]===0) : QS.filter(q=>q.t===FCSCOPE); FC = {list: shuffle(pool), i:0, flip:false, known:0}; }
  const sel = `<select id="fcs" aria-label="Flashcard set"><option value="all">All questions</option><option value="wrong">My mistakes</option>${LESSONS.map(l=>`<option value="${l.id}">L${LNUM(l.id)} · ${esc(l.title)}</option>`).join("")}</select>`;
  if (!FC.list.length || FC.i >= FC.list.length) {
    box.innerHTML = `<div class="row">${sel}</div><div class="block stack"><h3>${FC.list.length ? "Deck finished" : "No cards in this set"}</h3>${FC.list.length?`<p class="muted">You knew ${FC.known} of ${FC.list.length} on first look.</p>`:""}<div class="row"><button class="btn pri" type="button" id="fcr">Shuffle and restart</button></div></div>`;
    $("#fcs").value = FCSCOPE; $("#fcs").onchange = e => { FCSCOPE = e.target.value; FC = null; drawFlash(box); };
    $("#fcr").onclick = () => { FC = null; drawFlash(box); }; return;
  }
  const q = FC.list[FC.i];
  box.innerHTML = `<div class="row between">${sel}<span class="muted num" style="font-size:13px">${FC.i+1}/${FC.list.length}</span></div>
    <button type="button" class="flash" id="fcard" aria-label="Flip card">
      <span class="side">${FC.flip?"Answer":"Question · tap to flip"}</span>
      <span class="front">${esc(q.q)}</span>
      ${FC.flip ? `<span class="ans">${esc(q.o[q.a])}</span><span class="muted">${esc(q.e)}</span>` : ""}
    </button>
    <div class="row between"><button class="btn" type="button" id="fca" ${FC.flip?"":"disabled"}>Again later</button><button class="btn pri" type="button" id="fck" ${FC.flip?"":"disabled"}>Got it</button></div>`;
  $("#fcs").value = FCSCOPE; $("#fcs").onchange = e => { FCSCOPE = e.target.value; FC = null; drawFlash(box); };
  $("#fcard").onclick = () => { FC.flip = !FC.flip; drawFlash(box); };
  $("#fca").onclick = () => { FC.list.push(q); FC.list.splice(FC.i,1); FC.flip=false; drawFlash(box); };
  $("#fck").onclick = () => { FC.known++; FC.i++; FC.flip=false; drawFlash(box); };
}

/* ============================================================
   PLAN MAKER
   A plan is generated, never stored: only its length, the start date and your own ticks
   live in localStorage, so it survives changes to the lessons. Reading a lesson or taking
   its quiz in the app ticks that task by itself.
   ============================================================ */
const DAYMS = 86400000, MAXPD = 4;     // at most four new lessons a day, unless the must-do lessons need more
const label = d => d + " day" + (d === 1 ? "" : "s");

/* the closing revision days, built first so a plan is always exactly `days` long */
function planTailDays(days){
  const t = [];
  const rv = (rv, l, s) => ({ k:"rev", label:l, sub:s, go:[APP.id, null, "revise"], rv });
  if (HUB && days >= 30) APP.apps.filter(a => ["anc","med","mod"].includes(a.era)).forEach(a => t.push({ title:"Revision", sub:a.title, tasks:[
    { k:"rev", label:`${a.title}: Revise → 30 days`, sub:"Every summary in the app", go:[a.id, null, "revise"] },
    { k:"prac", label:`${a.title}: practise your mistakes`, sub:"Practice → Mistakes", go:[a.id, null, "practice"] },
    { k:"mock", label:`${a.title}: a 25-question mock`, sub:"Mock tab", go:[a.id, null, "mock"] }]}));
  if (days >= 15) t.push({ title:"Revision", sub:"Timeline, tricks and traps", tasks:[
    rv("time", "Revise → Timeline, top to bottom", "Be able to place every date"),
    rv("tricks", "Revise → Tricks, all of them", "The mnemonics"),
    rv("traps", "Revise → Traps, all of them", "The pairs SSC swaps")]});
  if (days >= 10) t.push({ title:"Revision", sub:"Full-length test", tasks: HUB
    ? APP.apps.filter(a => ["anc","med","mod"].includes(a.era)).map(a => ({ k:"mock", label:`${a.title}: a 50-question mock, timed`, sub:"Then go through every mistake", go:[a.id, null, "mock"] }))
    : [{ k:"mock", label:"A 50-question mock, timed", sub:"Mock tab · 30 min", go:[APP.id, null, "mock"] },
       { k:"prac", label:"Go through every mistake it throws up", sub:"Practice → Mistakes", go:[APP.id, null, "practice"] }]});
  t.push({ title:"The day before", sub:"and the hour before", tasks:[
    rv("week", "Revise → 7 days: the most-asked lessons only", "About an hour"),
    HUB ? rv("tricks", "Revise → Traps once more", "The swaps cost the most marks")
        : { k:"flash", label:"Flashcards from your mistakes", sub:"Revise → Flashcards → My mistakes", go:[APP.id, null, "revise"], rv:"flash" },
    rv("last", "Revise → Last moment, in the final hour", "The pairings sheet — nothing new today")]});
  return t;
}
/* which lessons fit: every three-dot lesson always; then the rest, most-asked first, while there is room */
function planPool(days){
  const studyDays = Math.max(1, days - planTailDays(days).length), room = studyDays * MAXPD;
  const must = LESSONS.filter(l => l.heat === 3);
  const rest = LESSONS.filter(l => l.heat !== 3).slice().sort((a,b) => (b.heat - a.heat) || (pCount(b.id) - pCount(a.id)));
  const pick = new Set(must.map(l => l.id));
  rest.forEach(l => { if (pick.size < room) pick.add(l.id); });
  return LESSONS.filter(l => pick.has(l.id));
}
function buildPlan(days){
  const pool = planPool(days), tail = planTailDays(days);
  const studyDays = Math.max(1, days - tail.length);
  const out = [];
  for (let d = 0; d < studyDays; d++) {   // spread evenly: one or two a day in a long plan, not a rush and then nothing
    const mine = pool.slice(Math.round(d * pool.length / studyDays), Math.round((d+1) * pool.length / studyDays));
    const prev = d > 0 ? out[d-1].lessons : null;
    const tasks = [];
    mine.forEach(l => tasks.push({ k:"read", id:l.id, label:`Read: ${l.title}`, sub:`${HUB ? A(l.app).title + " · " : ""}story first, then the tables`, go:[appOf(l.id), l.id, null] }));
    mine.forEach(l => tasks.push({ k:"quiz", id:l.id, label:`Quiz: ${l.title}`, sub:"The lesson's step 2", go:[appOf(l.id), l.id, null] }));
    if (prev && prev.length) tasks.push({ k:"recap", label:"Re-read yesterday's summaries", sub:prev.map(l=>l.title).join(" · "), go:[appOf(prev[0].id), prev[0].id, null] });
    if (mine.length) tasks.push({ k:"prac", label:`Practise ${mine.length > 1 ? 30 : 20} questions on today's lessons`, sub:"Practice → pick the lesson", go:[appOf(mine[0].id), null, "practice"] });
    else tasks.push({ k:"prac", label:"Catch up, then clear your Mistakes list", sub:"Practice → Mistakes", go:[HUB ? APP.apps[0].id : APP.id, null, "practice"] });
    out.push({ title:"Day", sub: mine.length ? [...new Set(mine.map(l => HUB ? A(l.app).title : (l.part ? l.part[0] : APP.title)))].join(" + ") : "Catch-up", lessons: mine, tasks });
  }
  tail.forEach(x => out.push(x));
  return { days, list: out, pool, dropped: LESSONS.filter(l => !pool.includes(l)) };
}
function planNote(days){
  const p = buildPlan(days), per = p.pool.length / Math.max(1, days - planTailDays(days).length);
  const pace = per <= 1.05 ? "about one lesson a day" : per <= 2.05 ? "one or two lessons a day" : "about " + Math.round(per) + " lessons a day";
  return p.dropped.length
    ? `Crash course: the ${p.pool.length} most-asked lessons, ${pace}. Leaves out ${p.dropped.length}.`
    : `All ${p.pool.length} lessons, ${pace}, then ${planTailDays(days).length} revision day${planTailDays(days).length>1?"s":""}.`;
}
const autoDone = t => (t.k === "read" && !!lessonState(t.id).done) || (t.k === "quiz" && lessonState(t.id).best != null);
function planState(){ return S.plan && APP.plans.includes(S.plan.days) ? S.plan : null; }

function renderPlan(){
  const st = planState();
  if (!st) {
    $("#app").innerHTML = `<section class="view stack">
      <div class="stack" style="gap:6px"><span class="eyebrow">Plan maker${HUB ? " · all of history" : " · " + esc(APP.title)}</span><h1>How long do you have?</h1>
      <p class="muted">Pick a length and you get what to read, quiz and practise each day, with revision days at the end. Tick the boxes as you go &mdash; lessons you finish ${HUB ? "in the History apps" : "here"} tick themselves.</p></div>
      <div class="plancfg">${APP.plans.map(d => {
        const pl = buildPlan(d);
        return `<button type="button" class="pday" data-days="${d}" style="text-align:left;cursor:pointer;width:100%;border-width:1px">
          <div style="padding:12px 14px;display:grid;gap:6px">
            <div class="row between"><b style="font-family:var(--f-display);font-size:17px">${label(d)}</b>
            <span class="num muted" style="font-size:12px">${pl.pool.length} lessons</span></div>
            <span class="muted" style="font-size:13px">${planNote(d)}</span>
            ${pl.dropped.length ? `<span style="font-size:12px;color:var(--bad)">Leaves out: ${pl.dropped.map(l=>esc(l.title)).join(" · ")}</span>` : `<span style="font-size:12px;color:var(--good)">Covers everything</span>`}
          </div></button>`;
      }).join("")}</div>
      <p class="foot">A shorter plan does not squeeze the syllabus &mdash; it keeps every lesson that is asked almost every shift and drops the least-asked ones, and says which.${HUB ? "" : " For a plan across all of history, open " + goLink("History: Start here", APP.hub.id, null, "plan") + "."}</p>
    </section>`;
    $("#app").querySelectorAll("[data-days]").forEach(b => b.onclick = () => { S.plan = { days:+b.dataset.days, start: Date.now(), done:{} }; save(); renderPlan(); });
    bindGo($("#app"));
    return;
  }
  const pl = buildPlan(st.days), total = pl.list.length;
  const today = Math.min(Math.max(Math.floor((Date.now() - st.start) / DAYMS), 0), total - 1);
  const isDone = (t, key) => autoDone(t) || !!st.done[key];
  const allTasks = pl.list.reduce((a,d)=>a+d.tasks.length, 0);
  const doneTasks = pl.list.reduce((a,d,i)=>a + d.tasks.filter((t,j)=>isDone(t, `d${i}t${j}`)).length, 0);
  $("#app").innerHTML = `<section class="view stack">
    <div class="hero"><span class="eyebrow">${label(st.days)} plan · started ${new Date(st.start).toLocaleDateString("en-IN",{day:"numeric",month:"short"})}</span>
      <h1>Day ${today+1} of ${total}</h1>
      <p>${planNote(st.days)}</p>
      <div class="meter" aria-label="Plan progress"><i style="width:${allTasks?doneTasks/allTasks*100:0}%"></i></div>
      <div class="row between"><span class="muted num" style="font-size:13px">${doneTasks}/${allTasks} tasks done</span>
        <button class="btn sm ghost" type="button" id="pchg">Change plan</button></div></div>
    ${pl.dropped.length ? `<div class="trap"><span class="lab">Left out of this plan</span>${pl.dropped.map(l=>esc(l.title)).join(" · ")}. Open them if you find time.</div>` : ""}
    ${pl.list.map((d,i) => {
      const dn = d.tasks.filter((t,j)=>isDone(t, `d${i}t${j}`)).length, all = dn === d.tasks.length;
      return `<details class="pday ${i===today?"cur":""} ${all?"allgood":""}" ${i===today?"open":""}>
        <summary><span class="dno">${all?"✓ ":""}Day ${i+1}</span>
          <span class="dt">${esc(d.title==="Day" ? d.sub : d.title + " · " + d.sub)}<small>${d.tasks.length} task${d.tasks.length>1?"s":""}${i===today?" · today":""}</small></span>
          <span class="dp">${dn}/${d.tasks.length}</span></summary>
        <div class="body">${d.tasks.map((t,j) => {
          const key = `d${i}t${j}`, auto = autoDone(t), done = auto || !!st.done[key];
          return `<div class="ptask-row"><button type="button" class="ptask" data-k="${key}" aria-pressed="${done}" ${auto?"disabled":""}>
            <span class="box">${done?"✓":""}</span>
            <span class="lbl">${esc(t.label)}${auto?`<span class="autotag">done in the lesson</span>`:""}<small>${esc(t.sub||"")}</small></span></button>
            ${t.go ? `<button type="button" class="btn sm ghost" data-ptgo="${i}:${j}">Open</button>` : ""}</div>`;
        }).join("")}</div></details>`;
    }).join("")}
    <p class="foot">“Today” is counted from the day you started, so a missed day stays visible instead of quietly disappearing.${HUB ? "" : " A plan for all of history is in " + goLink("History: Start here", APP.hub.id, null, "plan") + "."}</p>
  </section>`;
  $("#pchg").onclick = () => { if (confirm("Change the plan? Your ticks on this plan will be cleared.")) { S.plan = null; save(); renderPlan(); } };
  $("#app").querySelectorAll("[data-k]").forEach(b => b.onclick = () => {
    const k = b.dataset.k; if (st.done[k]) delete st.done[k]; else st.done[k] = 1; save(); renderPlan();
  });
  $("#app").querySelectorAll("[data-ptgo]").forEach(b => b.onclick = () => {
    const [i, j] = b.dataset.ptgo.split(":").map(Number), t = pl.list[i].tasks[j];
    if (t.rv) RV = t.rv;
    if (t.k === "quiz" && t.go[0] === APP.id) { openLesson(t.id, "quiz"); return; }
    openApp(t.go[0], t.go[1], t.go[2]);
  });
  bindGo($("#app"));
  const cur = $(".pday.cur"); if (cur && cur.scrollIntoView) cur.scrollIntoView({block:"center"});
}

/* ============================================================
   BOOT
   ============================================================ */
renderTop();
const hashTab = () => (location.hash||"").replace("#","");
go(TABS.includes(hashTab()) ? hashTab() : TABS[0]);
/* the back button, or a link that only changes the fragment, should move tabs */
window.addEventListener("hashchange", () => {
  const t = hashTab();
  if (TABS.includes(t) && t !== TAB && !(M && M.running)) go(t);
});
/* progress made in another History app (another tab, or synced from your account) */
window.addEventListener("storage", e => { if (e.key && e.key !== KEY && APP.apps.some(a => a.key === e.key) && (TAB === "plan" || TAB === "start")) go(TAB); });
