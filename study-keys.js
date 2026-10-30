/* Keyboard shortcuts and answer feedback for every mini app — the study-core pages (Maths, Reasoning, Physics, BNS,
   Voice, Narration, Statistics), the workbook pages (History, GK, Geography, Chemistry, Computer) and the hand-built
   pages with Plan and Lab tabs. study-core.js, study-workbook.js and study-plan-lab.js each load it (it runs once).
   It reads only the quiz markup those engines share, so it never needs to know which one drew the page:
   .opts > .opt[data-oi] (or [data-ioi] in a lesson's Quick check), #lqnext, the mock's #mprev / #mnext / #mmark,
   and the Lab's #labopts / #labgo.

     1–4 or A–D     answer the question on screen (Lab: pick an option)
     Enter, →, N    next question · in Practice, the next unanswered one · in the Lab, start / play again
     ←, P           previous question (mock)
     M              mark for review (mock)
     ?              list these keys

   It also gives a picked option a short pop (right) or shake (wrong), brings the explanation and the Next button into
   view on a phone, and fades a tab in when you switch tabs. Animations are skipped under "reduce motion". */
"use strict";
(function(){
  if (window.__studyKeys) return;
  window.__studyKeys = true;

  const still = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desk = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };

  const style = document.createElement("style");
  style.textContent = `
@media (hover:hover){.opt:not(:disabled):hover{border-color:var(--blue);background:var(--blue-bg)}}
.opt:not(:disabled):active{transform:scale(.985)}
.opt{transition:border-color .12s ease,background-color .12s ease,transform .08s ease}
.opt.ok.fx-pick{animation:fxPop .34s ease-out}
.opt.no.fx-pick{animation:fxShake .38s ease-in-out}
.opt.sel.fx-pick{animation:fxTap .2s ease-out}
.opts.fx-missed .opt.ok{animation:fxGlow .9s ease-out}
#app > .fx-in{animation:fxIn .2s ease-out}
@keyframes fxPop{0%{transform:scale(1)}40%{transform:scale(1.025)}100%{transform:scale(1)}}
@keyframes fxTap{0%{transform:scale(.98)}100%{transform:scale(1)}}
@keyframes fxShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(5px)}60%{transform:translateX(-3px)}80%{transform:translateX(2px)}}
@keyframes fxGlow{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--good) 45%,transparent)}100%{box-shadow:0 0 0 10px transparent}}
@keyframes fxIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.kb-help{position:fixed;inset:0;z-index:300;display:grid;place-items:center;background:rgba(0,0,0,.35);padding:16px}
.kb-help>div{background:var(--sheet);color:var(--ink);border:1px solid var(--rule);border-radius:14px;padding:18px 20px;max-width:420px;width:100%;box-shadow:0 12px 40px rgba(0,0,0,.25)}
.kb-help h3{margin:0 0 10px;font-size:17px}
.kb-help dl{display:grid;grid-template-columns:auto 1fr;gap:8px 14px;margin:0;font-size:14.5px}
.kb-help dt{font-weight:700;white-space:nowrap}
.kb-help dd{margin:0;color:var(--ink2)}
.kb-help kbd,.kb-tip kbd{display:inline-block;min-width:1.6em;text-align:center;border:1px solid var(--rule);border-bottom-width:2px;border-radius:5px;padding:0 4px;font:600 12.5px/1.5 ui-monospace,monospace;background:var(--paper);color:var(--ink)}
.kb-help button{margin-top:14px;width:100%}
.kb-tip{position:fixed;right:14px;bottom:calc(84px + env(safe-area-inset-bottom));z-index:250;background:var(--sheet);color:var(--ink);border:1px solid var(--rule);border-radius:10px;padding:8px 12px;font-size:13.5px;box-shadow:0 6px 20px rgba(0,0,0,.15);cursor:pointer;animation:fxIn .25s ease-out}
@media (min-width:900px){.kb-tip{bottom:18px}}
@media (prefers-reduced-motion:reduce){.opt,.opt.fx-pick,.opts.fx-missed .opt.ok,#app > .fx-in,.kb-tip{animation:none;transition:none}}
`;
  document.head.appendChild(style);

  const typing = e => { const t = e.target; return !!t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)); };
  const visible = el => !!el && el.getClientRects().length > 0;
  const live = sel => { const el = document.querySelector(sel); return visible(el) && !el.disabled ? el : null; };
  const onScreen = el => { const r = el.getBoundingClientRect(); return r.bottom > 40 && r.top < innerHeight - 40; };

  /** Every question still waiting for an answer, in page order. */
  const openSets = () => [...document.querySelectorAll(".opts")].filter(o => visible(o) && o.querySelector(".opt:not(:disabled)"));
  /** The one the keys act on: the first open question on screen, else the first open one on the page. */
  const target = () => { const all = openSets(); return all.find(onScreen) || all[0] || null; };

  function pick(n){
    const lab = document.querySelector("#labopts");
    if (visible(lab)) { const b = lab.querySelectorAll("button")[n]; if (b && !b.disabled) { b.click(); return true; } return false; }
    const set = target();
    const b = set && set.querySelectorAll(".opt")[n];
    if (!b || b.disabled) return false;
    b.click();
    return true;
  }
  function next(){
    const b = live("#lqnext") || live("#labgo") || live("#mnext");
    if (b) { b.click(); return true; }
    // Practice: the questions are a list, so move to the next one still waiting
    const cur = target(), all = openSets();
    const after = all.find(o => cur && o !== cur && (cur.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING) && !onScreen(o)) ||
      all.find(o => !onScreen(o) && o.getBoundingClientRect().top > 0);
    if (after) { (after.closest(".qcard") || after).scrollIntoView({ block: "center", behavior: still() ? "auto" : "smooth" }); return true; }
    const more = live("#pmore");
    if (more) { more.click(); return true; }
    return false;
  }
  const press = sel => { const b = live(sel); if (b) { b.click(); return true; } return false; };

  /* ---------- the key list ---------- */
  function help(){
    const old = document.querySelector(".kb-help");
    if (old) { old.remove(); return; }
    const box = document.createElement("div");
    box.className = "kb-help";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", "Keyboard shortcuts");
    box.innerHTML = `<div><h3>Keyboard shortcuts</h3><dl>
      <dt><kbd>1</kbd>–<kbd>4</kbd> or <kbd>A</kbd>–<kbd>D</kbd></dt><dd>Answer the question on screen</dd>
      <dt><kbd>Enter</kbd> <kbd>→</kbd> <kbd>N</kbd></dt><dd>Next question (in Practice, the next unanswered one)</dd>
      <dt><kbd>←</kbd> <kbd>P</kbd></dt><dd>Previous question in a mock</dd>
      <dt><kbd>M</kbd></dt><dd>Mark for review in a mock</dd>
      <dt><kbd>?</kbd></dt><dd>Show or hide this list</dd>
      </dl><button type="button" class="btn">Close</button></div>`;
    box.addEventListener("click", e => { if (e.target === box || e.target.tagName === "BUTTON") box.remove(); });
    document.body.appendChild(box);
    box.querySelector("button").focus();
  }

  document.addEventListener("keydown", e => {
    if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || typing(e)) return;
    const k = e.key, low = k.length === 1 ? k.toLowerCase() : k;
    const helpOpen = document.querySelector(".kb-help");
    if (k === "Escape" && helpOpen) { helpOpen.remove(); e.preventDefault(); return; }
    if (k === "?") { help(); e.preventDefault(); return; }
    if (helpOpen) return;
    const onButton = e.target && /^(BUTTON|A|SUMMARY)$/.test(e.target.tagName);
    let done = false;
    if (/^[1-6]$/.test(k)) done = pick(+k - 1);
    else if (/^[a-f]$/.test(low) && !e.shiftKey) done = pick(low.charCodeAt(0) - 97);
    else if (k === "Enter" && !onButton) done = next();
    else if (k === "ArrowRight" || low === "n") done = next();
    else if (k === "ArrowLeft" || low === "p") done = press("#mprev");
    else if (low === "m") done = press("#mmark");
    if (done) e.preventDefault();
  });

  /* ---------- feedback on a picked option ---------- */
  document.addEventListener("click", e => {
    const b = e.target.closest && e.target.closest(".opt");
    if (!b || b.disabled) return;
    const card = b.closest(".qcard[data-q]"), lq = b.closest("#lq"), oi = b.dataset.oi, ioi = b.dataset.ioi;
    requestAnimationFrame(() => {
      // the engines redraw the question after a pick, so find the same option in the new markup
      let nb = null;
      if (b.isConnected) nb = b;
      else if (card) nb = document.querySelector(`.qcard[data-q="${CSS.escape(card.dataset.q)}"] .opt[data-oi="${CSS.escape(oi || "")}"]`);
      else if (lq) nb = document.querySelector(`#lq .opt[data-oi="${CSS.escape(oi || "")}"]`);
      if (!nb && ioi == null) nb = document.querySelector(`.opt[data-oi="${CSS.escape(oi || "")}"].sel`);
      if (!nb) return;
      nb.classList.remove("fx-pick"); void nb.offsetWidth; nb.classList.add("fx-pick");
      const set = nb.closest(".opts");
      if (set && nb.classList.contains("no")) set.classList.add("fx-missed");
      // on a small screen the explanation and the Next button can land below the fold
      const box = nb.closest(".qcard, .icheck") || set;
      const exp = box && (box.querySelector(".exp:not([hidden])") || (box.nextElementSibling && box.nextElementSibling.querySelector && box.nextElementSibling.querySelector(".exp")));
      const nx = document.querySelector("#lqnext");
      const show = nx && visible(nx) ? nx : exp;
      if (show && show.getBoundingClientRect().bottom > innerHeight - 70) show.scrollIntoView({ block: "nearest", behavior: still() ? "auto" : "smooth" });
    });
  }, true);

  /* ---------- fade a tab in ---------- */
  if (typeof go === "function") {
    const inner = go;
    go = function(){
      const r = inner.apply(this, arguments);
      const v = document.querySelector("#app > :first-child");
      if (v && !still()) v.classList.add("fx-in");
      return r;
    };
  }

  /* ---------- tell desktop users once that the keys exist ---------- */
  if (desk && !lsGet("studyKeysTip")) {
    const check = () => {
      if (!openSets().length || document.querySelector(".kb-tip")) return;
      watch.disconnect();
      lsSet("studyKeysTip", "1");
      const tip = document.createElement("div");
      tip.className = "kb-tip";
      tip.setAttribute("role", "status");
      tip.innerHTML = `Tip: answer with <kbd>1</kbd>–<kbd>4</kbd>, next with <kbd>Enter</kbd> · <kbd>?</kbd> for all keys`;
      tip.onclick = () => { tip.remove(); help(); };
      document.body.appendChild(tip);
      setTimeout(() => tip.remove(), 7000);
    };
    const watch = new MutationObserver(check);
    check();
    watch.observe(document.getElementById("app") || document.body, { childList: true, subtree: true });
  }
})();
