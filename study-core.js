/* Shared engine of the chapter apps (study-*.html). Each page defines LESSONS, QB, HEAT, TILES, PAIRS,
   COVERS, FIND and APP in its own <script>, then loads this file. Built from study-trigonometry.html. */
"use strict";
/* the "PYQ" label: some apps say "PYQ-type" (set APP.pyq) */
const PYQ = APP.pyq || "PYQ";

/* ============================================================
   HELPERS & STATE
   ============================================================ */
const $ = (s, r=document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const hash = s => { let h = 5381; for (let i=0;i<s.length;i++) h = ((h<<5)+h + s.charCodeAt(i))|0; return "q"+(h>>>0).toString(36); };
const shuffle = a => { const b=a.slice(); for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [b[i],b[j]]=[b[j],b[i]];} return b; };
const L = id => LESSONS.find(l => l.id === id);
const LNUM = id => LESSONS.findIndex(l => l.id === id) + 1;

const QS = QB.map(r => {
  const fixed = !!r[6];
  return { t:r[0], q:r[1], o:r[2], e:r[3], p:(r[4]||"").includes("p"), a: fixed ? (r[5]||0) : 0, fixed, id:hash(r[1]) };
});
const byLesson = id => QS.filter(q => q.t === id);
// order of options to show: array of original indexes
const makePerm = q => q.fixed ? q.o.map((_,i)=>i) : shuffle(q.o.map((_,i)=>i));

const KEY = APP.key;
let S = { ans:{}, bm:{}, les:{}, mocks:[] };
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch(e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {} };
const record = (q, ok) => { S.ans[q.id] = ok ? 1 : 0; save(); renderTop(); };

function renderTop(){
  const ids = Object.keys(S.ans).filter(k => QS.some(q => q.id === k));
  const right = ids.filter(k => S.ans[k] === 1).length;
  const pct = ids.length ? Math.round(right*100/ids.length) : 0;
  $("#topstat").innerHTML = `<b>${ids.length}</b>/${QS.length} tried<br><b>${pct}%</b> right now`;
}

/* ============================================================
   ROUTING
   ============================================================ */
let TAB = "learn";
let timerId = null;
function go(tab){
  TAB = tab;
  document.querySelectorAll(".nav button").forEach(b => b.setAttribute("aria-current", b.dataset.tab===tab ? "page" : "false"));
  if (tab === "learn") renderLearn();
  if (tab === "practice") renderPractice();
  if (tab === "mock") renderMock();
  if (tab === "revise") renderRevise();
  window.scrollTo(0,0);
  try { history.replaceState(null, "", "#"+tab); } catch(e) {}
}
document.querySelectorAll(".nav button").forEach(b => b.addEventListener("click", () => {
  if (TAB === "mock" && M && M.running && b.dataset.tab !== "mock") { go("mock"); showMockLeave(b.dataset.tab); return; }
  go(b.dataset.tab);
}));

/* ============================================================
   LEARN
   ============================================================ */
function renderLearn(){
  const done = LESSONS.filter(l => S.les[l.id] && S.les[l.id].done).length;
  const nextIdx = LESSONS.findIndex(l => !(S.les[l.id] && S.les[l.id].done));
  $("#app").innerHTML = `<section class="view stack">
    <div class="hero">
      <span class="eyebrow">${APP.eyebrow}</span>
      <h1>Learn it, test it, revise it</h1>
      <p>${APP.intro} ${QS.length} exam-style questions in all.</p>
      <div class="meter" aria-label="Lessons done"><i style="width:${done/LESSONS.length*100}%"></i></div>
      <div class="row between"><span class="muted num" style="font-size:13px">${done}/${LESSONS.length} lessons done</span>
      ${nextIdx>=0 ? `<button class="btn pri sm" type="button" data-open="${LESSONS[nextIdx].id}">${done? "Continue" : "Start"}: Lesson ${nextIdx+1}</button>` : `<span class="muted" style="font-size:13px">All lessons done. Try a mock test.</span>`}</div>
    </div>
    <div class="lessons">${LESSONS.map((l,i) => {
      const st = S.les[l.id] || {}; const n = byLesson(l.id).length;
      return `<button type="button" class="les ${st.done?"done":""} ${i===nextIdx?"next":""}" data-open="${l.id}">
        <span class="no">${st.done ? "✓" : i+1}</span>
        <span class="t"><b>${esc(l.title)}<span class="heatb" title="Exam frequency">${"🔥".repeat(l.heat||1)}</span></b><span>${l.hi} · ${n} questions</span></span>
        <span class="sc">${st.best!=null ? `best<br>${st.best}/${n}` : ""}</span></button>`;}).join("")}
    </div>
    <p class="foot">${APP.foot}</p>
  </section>`;
  $("#app").querySelectorAll("[data-open]").forEach(b => b.addEventListener("click", () => openLesson(b.dataset.open, "learn")));
}

function blockHTML(b){

  if (b.k==="formula") return `<div class="block"><h3>${b.title}</h3><div class="fgrid">${b.rows.map(r=>`<div class="fcard"><span class="fn">${r[0]}</span><span class="fx">${r[1]}</span>${r[2]?`<span class="fnote">${r[2]}</span>`:""}</div>`).join("")}</div></div>`;
  if (b.k==="ex") return `<div class="ex"><div class="exhead"><span class="lab">${b.src ? PYQ : "Solved example"}</span>${b.src?`<span class="src">${b.src}</span>`:""}</div><div class="exq">${b.q}</div>${b.fig?`<figure class="fig">${b.fig}</figure>`:""}<details><summary>Show solution</summary><ol>${b.steps.map(x=>`<li>${x}</li>`).join("")}</ol><div class="exans">Answer: ${b.ans}</div>${b.tip?`<div class="trick" style="margin-top:8px"><span class="lab">Shortcut</span>${b.tip}</div>`:""}</details></div>`;
  if (b.k==="figs") return `<div class="block"><h3>${b.title}</h3><div class="figwrap">${b.items.map(it=>`<figure>${it.svg}<figcaption>${it.cap}</figcaption></figure>`).join("")}</div></div>`;
  if (b.k==="p") return `<div class="plain"><p>${b.h}</p></div>`;
  if (b.k==="trick") return `<div class="trick"><span class="lab">Trick</span>${b.h}</div>`;
  if (b.k==="link") return `<div class="link"><span class="lab">Link · connect the dots</span>${b.h}</div>`;
  if (b.k==="q") { const perm = shuffle(b.o.map((_,i)=>i)); return `<div class="icheck" data-ic><span class="lab">Quick check</span><p class="qt">${esc(b.q)}</p><div class="opts">${perm.map((oi,k)=>`<button type="button" class="opt" data-ioi="${oi}"><span class="k">${"ABCD"[k]}</span><span>${esc(b.o[oi])}</span></button>`).join("")}</div><div class="exp" hidden><b class="okl"></b> ${esc(b.e)}</div></div>`; }
  if (b.k==="hot") return `<div class="hot"><span class="lab">🔥 Exam radar · how often it's asked</span>${b.h}</div>`;
  if (b.k==="trap") return `<div class="trap"><span class="lab">Trap · correction</span>${b.h}</div>`;
  if (b.k==="facts") return `<div class="block"><h3>${b.title}</h3><dl class="facts">${b.rows.map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join("")}</dl></div>`;
  if (b.k==="tl") return `<div class="block"><h3>${b.title}</h3><ul class="tl">${b.rows.map(r=>`<li><span class="y">${r[0]}</span><span>${r[1]}</span></li>`).join("")}</ul></div>`;
  if (b.k==="table") {
    const isNum = (ci) => b.numcol==="all" ? ci>0 : (b.numcol===1 && ci===1) || (typeof b.numcol==="string" && b.numcol.includes(String(ci)));
    return `<div class="block"><h3>${b.title}</h3><div class="tbl"><table><thead><tr>${b.head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map((c,ci)=>`<td class="${isNum(ci)?"n":""}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`;
  }
  if (b.k==="fig") return `<div class="block"><h3>${b.title}</h3><figure class="fig">${b.svg}<figcaption>${b.cap}</figcaption></figure></div>`;
  if (b.k==="pyr") return `<div class="block"><h3>${b.title}</h3><div class="pyr">${b.items.map(it=>`<div>${PYR(it.rows)}<b>${it.name}</b><span class="muted">${it.note}</span></div>`).join("")}</div><p class="muted" style="font-size:13px;margin-top:8px"><span style="color:var(--blue)">■</span> males · <span style="color:var(--accent)">■</span> females · top = old, base = young</p></div>`;
  return "";
}

let LQ = null;
function openLesson(id, step){
  const l = L(id), i = LNUM(id);
  if (step === "quiz") { LQ = { id, list: shuffle(byLesson(id)).map(q => ({q, perm:makePerm(q)})), i:0, score:0, picked:null }; }
  const head = `<div class="lhead"><button class="back" type="button" id="lback">‹ Lessons</button></div>
    <span class="eyebrow">Lesson ${i} of ${LESSONS.length} · ${l.hi}</span><h1>${esc(l.title)}</h1>
    <div class="steps" role="tablist">
      <button type="button" data-step="learn" aria-current="${step==="learn"?"step":"false"}">1 · Learn</button>
      <button type="button" data-step="quiz" aria-current="${step==="quiz"?"step":"false"}">2 · Quiz</button>
      <button type="button" data-step="sum" aria-current="${step==="sum"?"step":"false"}">3 · Summary</button>
    </div>`;
  let body = "";
  if (step === "learn") {
    body = `<div class="stack">${l.blocks.map(blockHTML).join("")}
      <div class="row end"><button class="btn pri" type="button" id="toquiz">Take the lesson quiz · ${byLesson(id).length} questions</button></div></div>`;
  } else if (step === "quiz") {
    body = `<div id="lq"></div>`;
  } else {
    const nxt = LESSONS[i];
    body = `<div class="stack"><div class="block"><h3>Remember these</h3><ul class="sum">${l.sum.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></div>
      <div class="row between"><button class="btn" type="button" id="relearn">Read again</button>
      ${nxt ? `<button class="btn pri" type="button" id="nextles">Next: ${esc(nxt.title)}</button>` : `<button class="btn pri" type="button" id="tomock">Take a mock test</button>`}</div></div>`;
    S.les[id] = Object.assign(S.les[id]||{}, {done:1}); save();
  }
  $("#app").innerHTML = `<section class="view stack">${head}${body}</section>`;
  $("#lback").onclick = () => renderLearn();
  $("#app").querySelectorAll("[data-step]").forEach(b => b.onclick = () => openLesson(id, b.dataset.step));
  if (step==="learn") { $("#toquiz").onclick = () => openLesson(id,"quiz");
    const ics = l.blocks.filter(b=>b.k==="q");
    $("#app").querySelectorAll("[data-ic]").forEach((box,n) => { const b = ics[n];
      box.querySelectorAll("[data-ioi]").forEach(btn => btn.onclick = () => {
        if (box.dataset.done) return; box.dataset.done = 1; const pick = +btn.dataset.ioi;
        box.querySelectorAll("[data-ioi]").forEach(x => { const oi=+x.dataset.ioi; x.disabled = true; if (oi===0) x.classList.add("ok"); else if (oi===pick) x.classList.add("no"); });
        const ex = box.querySelector(".exp"); ex.hidden = false; const lab = ex.querySelector("b");
        if (pick===0) { lab.textContent = "Correct."; } else { lab.className = "nol"; lab.textContent = "Answer: " + b.o[0] + "."; }
      }); }); }
  if (step==="quiz") renderLQ();
  if (step==="sum") {
    $("#relearn").onclick = () => openLesson(id,"learn");
    const n = $("#nextles"); if (n) n.onclick = () => openLesson(LESSONS[i].id,"learn");
    const m = $("#tomock"); if (m) m.onclick = () => go("mock");
  }
  window.scrollTo(0,0);
}

function optsHTML(q, perm, state){
  // state: {picked: originalIndex|null, reveal: bool, sel: originalIndex|null}
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
  return `<div class="qmeta"><span class="qno">${no}</span><span class="tag">L${LNUM(q.t)} · ${esc(L(q.t).title)}</span>${q.p?`<span class="tag pyq">High-yield</span>`:""}
  <button type="button" class="bm" data-bm="${q.id}" aria-pressed="${S.bm[q.id]?"true":"false"}" aria-label="Bookmark">${S.bm[q.id]?"★":"☆"}</button></div>`;
}

function renderLQ(){
  const box = $("#lq");
  if (LQ.i >= LQ.list.length) {
    const n = LQ.list.length, l = L(LQ.id);
    const st = S.les[LQ.id] || {}; st.best = Math.max(st.best||0, LQ.score); S.les[LQ.id] = st; save();
    box.innerHTML = `<div class="stack"><div class="block stack"><span class="eyebrow">Quiz done</span>
      <div class="scorebig"><span class="num">${LQ.score}</span><span class="muted">/ ${n} correct</span></div>
      <p class="muted">${LQ.score===n ? "Full marks." : LQ.score >= n*0.8 ? "Strong. Review the ones you missed in Practice → Mistakes." : "Read the lesson once more, then retry. Missed questions are saved under Practice → Mistakes."}</p></div>
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
function practiceList(){
  let list = QS;
  if (PF === "pyq") list = QS.filter(q => q.p);
  else if (PF === "hot") list = QS.filter(q => (L(q.t).heat||1) === 3);
  else if (PF === "wrong") list = QS.filter(q => S.ans[q.id] === 0);
  else if (PF === "new") list = QS.filter(q => S.ans[q.id] === undefined);
  else if (PF === "bm") list = QS.filter(q => S.bm[q.id]);
  else if (PF !== "all") list = QS.filter(q => q.t === PF);
  if (PORDER) { const pos = new Map(PORDER.map((id,i)=>[id,i])); list = list.slice().sort((a,b)=>(pos.get(a.id)??0)-(pos.get(b.id)??0)); }
  return list;
}
function renderPractice(){
  const wrongN = QS.filter(q => S.ans[q.id] === 0).length, bmN = QS.filter(q=>S.bm[q.id]).length, pyqN = QS.filter(q=>q.p).length;
  const chips = [["all",`All ${QS.length}`],["new","Not tried"],["wrong",`Mistakes ${wrongN}`],["hot",`🔥 Hot topics ${QS.filter(q=>(L(q.t).heat||1)===3).length}`],["pyq",`${PYQ} ${pyqN}`],["bm",`Starred ${bmN}`]].concat(LESSONS.map((l,i)=>[l.id,`L${i+1} ${l.title}`]));
  const list = practiceList();
  $("#app").innerHTML = `<section class="view stack">
    <div class="stack" style="gap:6px"><span class="eyebrow">Question bank</span><h1>Practice</h1>
    <p class="muted">Tap an option to check it. Wrong answers go to <b>Mistakes</b> until you get them right.</p></div>
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
  bindP(box);
  const more = $("#pmore"); if (more) more.onclick = () => { PSHOW += 20; drawPList(); };
}
function bindP(box){ box.querySelectorAll(".qcard").forEach(bindCard); }
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
function renderMock(){
  if (M && M.running) return drawMockRun();
  if (M && M.done) return drawMockResult();
  const hist = (S.mocks||[]).slice(-6).reverse();
  $("#app").innerHTML = `<section class="view stack">
    <div class="stack" style="gap:6px"><span class="eyebrow">Timed, SSC pattern</span><h1>Mock test</h1>
    <p class="muted">+2 for a right answer, −0.5 for a wrong one, 36 seconds per question (CGL Tier-1 pace). Answers show only after you submit.</p></div>
    <div class="block stack">
      <fieldset><legend>Questions</legend><div class="radios">${[10,25,50,100].map(n=>`<label><input type="radio" name="mn" id="mn${n}" value="${n}" ${MCFG.n===n?"checked":""}><span>${n} · ${Math.round(n*36/60)} min</span></label>`).join("")}</div></fieldset>
      <fieldset><legend>From</legend><select id="mscope" aria-label="Lessons to draw from"><option value="all">All lessons</option><option value="hot">🔥 Hot topics only</option><option value="pyq">${PYQ === "PYQ" ? "PYQs" : PYQ} only</option><option value="wrong">My mistakes</option>${LESSONS.map((l,i)=>`<option value="${l.id}" ${MCFG.scope===l.id?"selected":""}>L${i+1} · ${esc(l.title)}</option>`).join("")}</select></fieldset>
      <label class="row" style="gap:8px;font-weight:600"><input type="checkbox" id="mneg" ${MCFG.neg?"checked":""}> Negative marking (−0.5)</label>
      <div id="merr" class="muted" style="font-size:14px"></div>
      <div class="row end"><button class="btn pri" type="button" id="mstart">Start test</button></div>
    </div>
    ${hist.length ? `<div class="block"><h3>Recent attempts</h3><div class="hist">${hist.map(h=>`<div><span>${esc(h.d)} · ${h.n} Q</span><span class="num">${h.score}/${h.max} · ${h.acc}%</span></div>`).join("")}</div></div>` : ""}
  </section>`;
  $("#mscope").value = MCFG.scope;
  $("#mstart").onclick = () => {
    MCFG.n = +(document.querySelector('input[name="mn"]:checked')||{value:25}).value;
    MCFG.scope = $("#mscope").value; MCFG.neg = $("#mneg").checked ? 1 : 0;
    let pool = MCFG.scope==="all" ? QS : MCFG.scope==="pyq" ? QS.filter(q=>q.p) : MCFG.scope==="hot" ? QS.filter(q=>(L(q.t).heat||1)===3) : MCFG.scope==="wrong" ? QS.filter(q=>S.ans[q.id]===0) : QS.filter(q=>q.t===MCFG.scope);
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
      <p class="muted" style="font-size:12px;margin-top:8px">Filled = answered · orange line = marked for review</p></div>` : ""}
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
    const a = M.ans[k]; const t = it.q.t; per[t] = per[t] || {c:0,n:0}; per[t].n++;
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
   REVISE
   ============================================================ */
let RV = "heat", FC = null, FCSCOPE = "all";
const HID = {}, REV = {};
Object.keys(COVERS).forEach(k => { HID[k] = 1; REV[k] = {}; });
function renderRevise(){
  const tabs = [["heat", APP.heatTab || "🔥 PYQ heat map"]].concat(Object.keys(COVERS).map(k=>[k, COVERS[k].tab]), [["dis",FIND.tab],["nums","Numbers & pairs"],["links","Connections"],["tricks","Tricks"],["traps","Traps"],["flash","Flashcards"]]);
  if (!tabs.some(t=>t[0]===RV)) RV = "heat";
  $("#app").innerHTML = `<section class="view stack">
    <div class="stack" style="gap:6px"><span class="eyebrow">Last-day revision</span><h1>Revise</h1></div>
    <div class="seg" role="tablist">${tabs.map(t=>`<button type="button" role="tab" data-rv="${t[0]}" aria-selected="${RV===t[0]}">${t[1]}</button>`).join("")}</div>
    <div id="rv" class="stack"></div></section>`;
  $("#app").querySelectorAll("[data-rv]").forEach(b => b.onclick = () => { RV = b.dataset.rv; renderRevise(); });
  const on = $(`.seg [aria-selected="true"]`); if (on) on.scrollIntoView({block:"nearest", inline:"center"});
  const box = $("#rv");
  const pk = (key, i, val) => (HID[key] && !REV[key][i]) ? `<button type="button" class="peek" data-pk="${key}:${i}">tap</button>` : val;
  const coverChips = (key, label) => `<div class="chips"><button type="button" class="chip" data-hide="${key}" aria-pressed="${!!HID[key]}">${label}</button><button type="button" class="chip" data-cover="${key}">Cover all again</button></div>`;
  const bindCover = () => {
    box.querySelectorAll("[data-hide]").forEach(b => b.onclick = () => { const k=b.dataset.hide; HID[k] = HID[k]?0:1; renderRevise(); });
    box.querySelectorAll("[data-cover]").forEach(b => b.onclick = () => { REV[b.dataset.cover] = {}; renderRevise(); });
    box.querySelectorAll("[data-pk]").forEach(b => b.onclick = () => { const [k,i] = b.dataset.pk.split(":"); REV[k][i]=1; renderRevise(); });
  };
  if (RV === "heat") {
    const max = Math.max(...HEAT.map(h=>h[1]));
    box.innerHTML = `<p class="muted">${APP.heatNote}</p>
      <div class="block"><div class="heat">${HEAT.map(h=>`<button type="button" class="hrow" data-open="${h[2]}"><span class="ht"><b>${esc(h[0])}</b><span class="muted">${esc(h[3])}</span></span><span class="hbar"><i style="width:${h[1]/max*100}%"></i></span><span class="num hp">${h[1]}%</span></button>`).join("")}</div></div>
      <div class="block"><h3>Lessons by exam heat</h3><dl class="rk">${[3,2,1].map(n=>`<div><dt>${"🔥".repeat(n)} ${n===3?"Very frequent":n===2?"Regular":"Occasional"}</dt><dd>${LESSONS.map((l,i)=>[l,i]).filter(x=>(x[0].heat||1)===n).map(x=>`L${x[1]+1} ${esc(x[0].title)}`).join(" · ")}</dd></div>`).join("")}</dl></div>`;
    box.querySelectorAll("[data-open]").forEach(b => b.onclick = () => openLesson(b.dataset.open, "learn"));
  }
  if (COVERS[RV]) {
    const c = COVERS[RV];
    box.innerHTML = `<p class="muted">${c.note}</p>${coverChips(RV, c.hideLabel)}
      <div class="block"><div class="tbl"><table class="cover"><thead><tr>${c.head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${c.rows.map((r,i)=>`<tr>${r.map((v,ci)=>`<td ${ci?`data-l="${c.head[ci]}"`:""}>${ci===0?`<b>${esc(v)}</b>`:ci===c.hide?pk(RV,i,esc(v)):esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`;
    bindCover();
  }
  if (RV === "dis") {
    box.innerHTML = `<input class="search" id="fs" type="search" placeholder="${FIND.ph}" aria-label="${FIND.tab}">
      <div class="chips" id="dtype"></div>
      <div class="block"><div class="tbl"><table class="cover"><thead><tr>${FIND.head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody id="fb"></tbody></table></div></div>`;
    const types = ["All"].concat([...new Set(FIND.rows.map(d=>d[2]))]);
    let T = "All";
    const draw = () => { const q = $("#fs").value.trim().toLowerCase();
      $("#dtype").innerHTML = types.map(t=>`<button type="button" class="chip" data-t="${esc(t)}" aria-pressed="${T===t}">${esc(t)}</button>`).join("");
      $("#dtype").querySelectorAll("[data-t]").forEach(b => b.onclick = () => { T = b.dataset.t; draw(); });
      const rows = FIND.rows.filter(x => (T==="All"||x[2]===T) && (!q || x.join(" ").toLowerCase().includes(q)));
      $("#fb").innerHTML = rows.length ? rows.map(a=>`<tr><td><b>${esc(a[0])}</b></td><td data-l="${FIND.head[1]}">${esc(a[1])}</td><td data-l="${FIND.head[2]}">${esc(a[2])}</td><td data-l="${FIND.head[3]}" class="muted">${esc(a[3])}</td></tr>`).join("") : `<tr><td colspan="4" class="muted">No match.</td></tr>`; };
    $("#fs").oninput = draw; draw();
  }
  if (RV === "links") {
    const items = LESSONS.flatMap((l,i) => l.blocks.filter(b=>b.k==="link").map(b=>({l:i+1, t:l.title, h:b.h})));
    box.innerHTML = items.map(x => `<div class="link"><span class="lab">L${x.l} · ${esc(x.t)}</span>${x.h}</div>`).join("");
  }
  if (RV === "nums") {
    box.innerHTML = `<div class="tiles">${TILES.map(t=>`<div class="tile"><span class="num">${t[0]}</span><span>${t[1]}</span></div>`).join("")}</div>
    <div class="block"><h3>Look-alike pairs</h3><dl class="rk">${PAIRS.map(p=>`<div><dt>${esc(p[0])}</dt><dd>${esc(p[1])}</dd></div>`).join("")}</dl></div>`;
  }
  if (RV === "tricks" || RV === "traps") {
    const kind = RV==="tricks" ? "trick" : "trap";
    const items = LESSONS.flatMap((l,i) => l.blocks.filter(b=>b.k===kind).map(b=>({l:i+1, t:l.title, h:b.h})));
    const extra = kind==="trick" ? `<div class="trick"><span class="lab">Exam craft</span>${APP.craft}</div>` : "";
    box.innerHTML = extra + items.map(x => `<div class="${kind}"><span class="lab">L${x.l} · ${esc(x.t)}</span>${x.h}</div>`).join("");
  }
  if (RV === "flash") drawFlash(box);
}


function drawFlash(box){
  if (!FC) { const pool = FCSCOPE==="all" ? QS : FCSCOPE==="wrong" ? QS.filter(q=>S.ans[q.id]===0) : QS.filter(q=>q.t===FCSCOPE); FC = {list: shuffle(pool), i:0, flip:false, known:0}; }
  const sel = `<select id="fcs" aria-label="Flashcard set"><option value="all">All questions</option><option value="wrong">My mistakes</option>${LESSONS.map((l,i)=>`<option value="${l.id}">L${i+1} · ${esc(l.title)}</option>`).join("")}</select>`;
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

/* boot */
renderTop();
const start = (location.hash||"").replace("#","");
go(["learn","practice","mock","revise"].includes(start) ? start : "learn");
