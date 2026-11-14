/* The shared layer of every mini app — the study-core pages (Maths, Reasoning, Physics, BNS, Voice, Narration,
   Statistics), the workbook pages (History, GK, Geography, Chemistry, Computer) and the hand-built pages with Plan and
   Lab tabs. study-core.js, study-workbook.js and study-plan-lab.js each load it (it runs once); Grammar 100 and the
   Formula Book, which have their own code, load it with a script tag and describe their front page through
   window.STUDY_UI (below). It reads only the markup the pages share, so a change here reaches all of them:
   .hero / .lessons > .les (the Learn page), .steps (a lesson's Learn · Quiz · Summary), #lq and #lqnext (its quiz),
   .mbar and #mprev / #mnext / #mmark (a running mock), #plist > .qcard[data-q], #pshuf and #pmore (Practice),
   .seg and .chips (tab and filter rows), .nav (the tab bar) and the Lab's #labopts / #labgo — and Grammar 100's own
   ids: nav.tabs, #rq / #rqnext (a rule's questions), #timer, #prev / #next / #sub (a test), and the Formula Book's
   chapter row (‹ Previous · #mark · Next ›).

   window.STUDY_UI (optional, set by a page before this loads):
     front()   → null when the page on screen is not the front page, else { done, total, unit, label, title, stat,
                 button, go } for the Continue card (the engines' Learn page needs none: it is read from .lessons)
     keepRow   true: keep the row under the intro (the Formula Book's Full book / Start a new round buttons)

   Keys (on a computer):
     1–4 or A–D     answer the question on screen (Lab: pick an option)
     Enter, →, N    next question · in Practice, the next unanswered one · in the Lab, start / play again
     ←, P           previous question (mock)
     M              mark for review (mock)
     ?              list these keys

   Look and feel:
   - a picked option pops (right) or shakes (wrong); tabs fade in; animations are skipped under "reduce motion"
   - inside पाठShala the page's own header is hidden (the app's bar already names it); the Learn page leads with a
     Continue card (lessons done, questions tried, % right) and folds its long intro to three lines with "More"
   - a lesson's steps sit in a pinned bar that shows how far you have read; "Take the quiz" and the quiz's Next stay
     at the bottom, in reach of a thumb
   - a running mock is a focus screen: on a phone the tab bar goes, Prev / Mark / Clear / Next stay at the bottom and
     the timer bar has Leave
   - Practice can show one question at a time (studyOneAtATime), with a counter and a streak
   - rows of tabs and filters that scroll sideways fade at the edge that has more; lesson heat is shown as dots in
     every app; the tab bar says "Mock" */
"use strict";
(function(){
  if (window.__studyUI) return;
  window.__studyUI = true;

  const still = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desk = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };

  const style = document.createElement("style");
  style.textContent = `
/* bars (heat map, scores, charts) grow from zero the first time they are seen */
@keyframes fxgrow{from{transform:scaleX(0)}to{transform:none}}
.hbar i,.hero .meter i{transform-origin:left center;animation:fxgrow .7s cubic-bezier(.2,.8,.2,1) both}
@media (prefers-reduced-motion:reduce){.hbar i,.hero .meter i{animation:none}}
@media (hover:hover){.opt:not(:disabled):hover{border-color:var(--blue);background:var(--blue-bg)}}
.opt:not(:disabled):active{transform:scale(.985)}
.opt{transition:border-color .12s ease,background-color .12s ease,transform .08s ease}
.opt.ok.fx-pick{animation:fxPop .34s ease-out}
.opt.no.fx-pick{animation:fxShake .38s ease-in-out}
.opt.sel.fx-pick{animation:fxTap .2s ease-out}
.opts.fx-missed .opt.ok{animation:fxGlow .9s ease-out}
#app > .fx-in{animation:fxSlR .3s cubic-bezier(.2,.8,.2,1)}
#app > .fx-in-l{animation:fxSlL .3s cubic-bezier(.2,.8,.2,1)}
@keyframes fxSlR{from{opacity:0;transform:translateX(22px)}to{opacity:1;transform:none}}
@keyframes fxSlL{from{opacity:0;transform:translateX(-22px)}to{opacity:1;transform:none}}
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
    const b = live("#fxnext") || live("#lqnext") || live("#rqnext") || live("#labgo") || live("#mnext") ||
      (document.querySelector("#timer") && live("#next")) || live("#mark ~ [data-nav]");
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
      <dt><kbd>←</kbd> <kbd>P</kbd></dt><dd>Previous question in a mock (in the Formula Book, the chapter before)</dd>
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
    else if (k === "ArrowLeft" || low === "p") done = press("#mprev") || (!!document.querySelector("#timer") && press("#prev")) || press("[data-nav]:has(~ #mark)");
    else if (low === "m") done = press("#mmark");
    if (done) e.preventDefault();
  });

  /* ---------- feedback on a picked option ---------- */
  document.addEventListener("click", e => {
    const b = e.target.closest && e.target.closest(".opt");
    if (!b || b.disabled) return;
    const card = b.closest(".qcard[data-q]"), lq = b.closest("#lq, #rq"), oi = b.dataset.oi, ioi = b.dataset.ioi;
    requestAnimationFrame(() => {
      // the engines redraw the question after a pick, so find the same option in the new markup
      let nb = null;
      if (b.isConnected) nb = b;
      else if (card) nb = document.querySelector(`.qcard[data-q="${CSS.escape(card.dataset.q)}"] .opt[data-oi="${CSS.escape(oi || "")}"]`);
      else if (lq) nb = document.querySelector(`#${lq.id} .opt[data-oi="${CSS.escape(oi || "")}"]`);
      if (!nb && ioi == null) nb = document.querySelector(`.opt[data-oi="${CSS.escape(oi || "")}"].sel`);
      if (!nb) return;
      nb.classList.remove("fx-pick"); void nb.offsetWidth; nb.classList.add("fx-pick");
      // feel it: a buzz for right / wrong (study-ui "FEEL" below), a tick drawn on the right answer, +1 floating up
      const F = window.PathshalaFeel;
      if (F) {
        if (nb.classList.contains("no")) F.feel("wrong");
        else if (nb.classList.contains("ok")) { F.feel("right"); F.tick(nb); F.plus(nb, 1); }
      }
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
      // slide in from the side of the tab that was tapped (order of the tab bar)
      const order = [...document.querySelectorAll(".nav [data-tab], nav.tabs [data-tab], .nav button, nav.tabs button")].map(b => b.dataset.tab || b.textContent.trim().toLowerCase());
      const to = order.indexOf(String(arguments[0] || "")), from = order.indexOf(go.__last || "");
      go.__last = String(arguments[0] || "");
      if (v && !still()) v.classList.add(to >= 0 && from >= 0 && to < from ? "fx-in-l" : "fx-in");
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

  /* =====================================================================================================
     Look and feel. Everything below works on the markup after an engine has drawn it: a watcher on #app runs
     ui() once per frame after any redraw, and every step checks before it changes anything, so running it
     again does nothing.
     ===================================================================================================== */
  const root = document.documentElement, appEl = document.getElementById("app");
  const css2 = document.createElement("style");
  css2.textContent = `
/* inside पाठShala its own bar already names the app: drop the page's header and the gap left for it */
html.in-shabd .top{display:none}
html.in-shabd .mbar{top:env(safe-area-inset-top,0px)!important}
@media (min-width:1024px){html.in-shabd .nav{padding-top:24px}}
.stat{font-family:var(--f-body);font-variant-numeric:tabular-nums}
.stat b{font-weight:700}
/* Learn page: a Continue card, and a long intro folded to three lines */
.hero.fx-has-front > .meter,.hero.fx-has-front > .row{display:none}
.fx-front{display:flex;align-items:center;gap:14px;padding:14px 16px;background:var(--sheet);border:1px solid var(--rule);border-radius:16px;box-shadow:0 8px 22px -16px rgba(0,0,0,.35)}
@property --p{syntax:"<number>";inherits:false;initial-value:0}
.fx-ring{transition:--p .9s cubic-bezier(.2,.8,.2,1)}
.fx-ring{--p:0;position:relative;width:62px;height:62px;flex:none;border-radius:50%;background:conic-gradient(var(--blue) calc(var(--p) * 1%),var(--sunk) 0)}
.fx-ring::before{content:"";position:absolute;inset:6px;border-radius:50%;background:var(--sheet)}
.fx-ring span{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.05}
.fx-ring b{font-family:var(--f-num,inherit);font-size:18px}
.fx-ring small{font-size:10.5px;color:var(--ink2)}
.fx-fr-tx{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.fx-fr-tx .eyebrow{margin:0}
.fx-fr-tx b{font-size:16.5px;line-height:1.25}
.fx-fr-tx small{font-size:12.5px;color:var(--ink2)}
.fx-fr-go{flex:none;white-space:nowrap}
@media (max-width:420px){.fx-front{flex-wrap:wrap}.fx-fr-tx{flex:1 1 calc(100% - 80px)}.fx-fr-go{width:100%}}
.fx-clamp{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}
.fx-open > .fx-clamp{display:inline;-webkit-line-clamp:unset;overflow:visible}
.fx-more{justify-self:start;align-self:flex-start;border:0;background:none;padding:2px 0;font:inherit;font-size:13.5px;font-weight:700;color:var(--blue);cursor:pointer}
/* a lesson: one bar for its three steps, pinned, filling in as you read */
.steps.fx-steps{position:sticky;top:var(--fx-top,0px);z-index:12;gap:4px;padding:4px 4px 7px;border-radius:12px;background:var(--sunk);box-shadow:0 0 0 6px var(--paper)}
.steps.fx-steps::after{content:"";position:absolute;left:10px;bottom:2px;height:3px;border-radius:3px;width:calc((100% - 20px) * var(--fx-read,0));background:var(--blue);transition:width .15s linear}
.steps.fx-steps button{display:flex;align-items:center;justify-content:center;gap:7px;border:0;background:none;border-radius:9px;padding:7px 4px}
.steps.fx-steps button i{font-style:normal;width:20px;height:20px;border-radius:50%;display:grid;place-items:center;font-size:11.5px;font-weight:700;background:var(--rule);color:var(--ink2)}
/* Exam Hall: its rule colour is as dark as its text, so the number sat unseen on its disc — ring it instead */
:root[data-xskin="exam"] .steps.fx-steps button:not([aria-current="step"]):not(.fx-done) i{background:none;box-shadow:inset 0 0 0 1.5px var(--ink2);color:var(--ink)}
/* pages with their own styles (not study-workbook.css): a fieldset is as wide as its widest select, which pushed the Mock page sideways */
fieldset{min-width:0;grid-template-columns:minmax(0,1fr)}
fieldset select{max-width:100%;min-width:0}
.steps.fx-steps button[aria-current="step"]{background:var(--sheet);color:var(--ink);box-shadow:0 1px 3px rgba(0,0,0,.14)}
.steps.fx-steps button[aria-current="step"] i{background:var(--blue);color:var(--on-blue)}
.steps.fx-steps button.fx-done{color:var(--good)}
.steps.fx-steps button.fx-done i{background:var(--good-bg);color:var(--good)}
.steps.fx-bar{position:sticky;top:var(--fx-top,0px);z-index:12;padding:10px 0 9px;background:var(--paper)}
.steps.fx-bar::after{content:"";position:absolute;left:0;bottom:1px;height:2px;border-radius:2px;width:calc(100% * var(--fx-read,0));background:var(--blue);transition:width .15s linear}
/* buttons that stay in reach of a thumb: Take the quiz, the quiz's Next, the mock's Prev / Mark / Clear / Next, Practice's bar */
.fx-dock{position:sticky;bottom:var(--fx-nav,0px);z-index:14;margin-inline:-16px;padding:10px 16px calc(10px + var(--fx-safe,0px));background:color-mix(in srgb,var(--paper) 90%,transparent);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-top:1px solid var(--rule)}
@media (min-width:1024px){.fx-dock{margin-inline:0;padding-inline:0}}
.fx-dock:has(> #mark){flex-wrap:nowrap;gap:8px}
.fx-dock:has(> #mark) .btn{padding-inline:12px;white-space:nowrap}
.fx-dock:has(> #mark) #mark{flex:1}
html.fx-focus .nav,html.fx-focus nav.tabs{display:none}
html.fx-focus{--fx-safe:env(safe-area-inset-bottom,0px)}
@media (max-width:1023px){
  html.fx-focus .fx-dock:has(> #mprev),html.fx-focus .fx-dock:has(> #prev){position:fixed;left:0;right:0;bottom:0;margin:0}
  html.fx-focus #app{padding-bottom:84px}
}
@media (min-width:1024px){html.fx-focus .nav,html.fx-focus nav.tabs{display:block}}
/* Practice, one question at a time */
#plist.fx-one > .qcard:not(.fx-cur),#plist.fx-one > #pmore{display:none}
#plist.fx-one{grid-template-columns:minmax(0,1fr)!important;max-width:760px}
.fx-onebar{max-width:760px}
#plist.fx-one > .qcard.fx-cur{animation:fxIn .2s ease-out}
.fx-onebar{display:flex;align-items:center;gap:10px}
.fx-onebar[hidden]{display:none}
.fx-onebar .fx-c{flex:1;min-width:0;font-size:13.5px;color:var(--ink2)}
.fx-onebar .fx-c b{color:var(--ink);font-variant-numeric:tabular-nums}
.fx-onebar .fx-st{color:var(--accent);font-weight:700}
#app .fx-one-tg[aria-pressed="true"]{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.fx-onedone{padding:26px 10px;text-align:center;color:var(--ink2)}
/* rows of tabs and filters that scroll sideways: fade the edge that has more */
.seg.fx-r,.chips.fx-r{-webkit-mask-image:linear-gradient(to right,#000 82%,transparent);mask-image:linear-gradient(to right,#000 82%,transparent)}
.seg.fx-l,.chips.fx-l{-webkit-mask-image:linear-gradient(to left,#000 82%,transparent);mask-image:linear-gradient(to left,#000 82%,transparent)}
.seg.fx-l.fx-r,.chips.fx-l.fx-r{-webkit-mask-image:linear-gradient(to right,transparent,#000 14%,#000 86%,transparent);mask-image:linear-gradient(to right,transparent,#000 14%,#000 86%,transparent)}
/* lesson heat as dots in every app */
.dots{display:inline-flex;gap:2px;vertical-align:middle;margin-left:6px}
.dots i{width:5px;height:5px;border-radius:50%;background:var(--rule);display:block}
.dots i.on{background:var(--accent)}
@media (prefers-reduced-motion:reduce){#plist.fx-one > .qcard.fx-cur{animation:none}.steps.fx-steps::after,.steps.fx-bar::after{transition:none}}
`;
  document.head.appendChild(css2);

  const esc2 = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  /** The tab bar's height when it sits at the bottom (a phone), 0 when it is the side bar or hidden; and the header's. */
  function measure(){
    const nav = document.querySelector(".nav, nav.tabs"), top = document.querySelector(".top");
    let h = 0;
    if (nav && visible(nav)) { const r = nav.getBoundingClientRect(); if (r.top > innerHeight / 2) h = Math.round(innerHeight - r.top); }
    root.style.setProperty("--fx-nav", h + "px");
    root.style.setProperty("--fx-top", (top && visible(top) ? Math.round(top.getBoundingClientRect().height) : 0) + "px");
  }

  /** A long paragraph folds to three lines, with More / Less. The text moves into an inner box that does the folding,
      so a box with padding (the "How to study it" note) cuts cleanly after the third line. */
  function fold(p){
    if (!p || p.dataset.fx) return;
    p.dataset.fx = "1";
    const t = el("span", "fx-clamp");
    while (p.firstChild) t.appendChild(p.firstChild);
    p.appendChild(t);
    if (t.scrollHeight <= t.clientHeight + 2) { p.classList.add("fx-open"); return; }
    const b = el("button", "fx-more", "More ▾");
    b.type = "button";
    b.setAttribute("aria-expanded", "false");
    b.onclick = () => { const open = p.classList.toggle("fx-open"); b.textContent = open ? "Less ▴" : "More ▾"; b.setAttribute("aria-expanded", String(open)); };
    p.after(b);
  }

  /** Learn page: Continue card in place of the bar and button under the intro. The engines' Learn page is read from its
      lesson list; Grammar 100 and the Formula Book say what to show through window.STUDY_UI.front(). */
  function front(){
    const cfg = window.STUDY_UI || {}, hero = appEl.querySelector(".view > .hero");
    let info = null;
    if (cfg.front) { try { info = cfg.front(); } catch (e) { info = null; } if (!info) return; }
    else if (!appEl.querySelector(".lessons")) return;
    if (!hero) return;
    fold(hero.querySelector(":scope > p"));
    fold(appEl.querySelector(".view > .callout"));
    if (hero.dataset.fxFront) return;
    hero.dataset.fxFront = "1";
    if (!info) {
      const rows = [...appEl.querySelectorAll(".les")], done = rows.filter(r => r.classList.contains("done")).length;
      const next = appEl.querySelector(".les.next") || rows.find(r => !r.classList.contains("done"));
      let tried = 0, right = 0, total = 0;
      try { const ids = new Set(QS.map(q => q.id)); total = QS.length; Object.keys(S.ans || {}).forEach(k => { if (ids.has(k)) { tried++; if (S.ans[k] === 1) right++; } }); } catch (e) {}
      const num = next ? (next.querySelector(".no") || {}).textContent : "";
      info = { done, total: rows.length, unit: "lessons",
        label: next ? (done ? "Continue" : "Start") + (/^\d+$/.test(num) ? " · Lesson " + num : "") : "All lessons done",
        title: next ? (next.querySelector(".t b") || next).childNodes[0].textContent.trim() : "Every lesson is done",
        stat: total ? tried + " of " + total + " questions tried" + (tried ? " · " + Math.round(right * 100 / tried) + "% right" : "") : rows.length + " lessons",
        button: next ? (done ? "Continue ›" : "Start ›") : "Take a mock ›",
        go: () => { if (next) next.click(); else if (typeof go === "function") go("mock"); } };
    }
    const pct = info.total ? Math.round(info.done * 100 / info.total) : 0;
    const card = el("div", "fx-front",
      `<div class="fx-ring" style="--p:${pct}" role="img" aria-label="${info.done} of ${info.total} ${esc2(info.unit || "lessons")} done"><span><b>${info.done}</b><small>of ${info.total}</small></span></div>` +
      `<div class="fx-fr-tx"><span class="eyebrow">${esc2(info.label)}</span><b>${esc2(info.title)}</b><small>${esc2(info.stat || "")}</small></div>` +
      `<button type="button" class="btn pri fx-fr-go">${esc2(info.button)}</button>`);
    card.querySelector(".fx-fr-go").onclick = info.go;
    // the ring fills and the number counts up when the page is first shown, and again whenever progress has moved
    if (!still() && pct !== front.last) {
      const ring = card.querySelector(".fx-ring"), num = ring.querySelector("b"), from = front.last == null ? 0 : front.last, n0 = front.lastN || 0, t0 = performance.now();
      ring.style.setProperty("--p", from); num.textContent = n0;
      requestAnimationFrame(() => requestAnimationFrame(() => ring.style.setProperty("--p", pct)));
      const tick = t => { const k = Math.min(1, (t - t0) / 800), e = 1 - Math.pow(1 - k, 3); num.textContent = Math.round(n0 + (info.done - n0) * e); if (k < 1 && num.isConnected) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }
    front.last = pct; front.lastN = info.done;
    if (!cfg.keepRow) hero.classList.add("fx-has-front");
    else hero.querySelectorAll(":scope > .meter").forEach(m => { m.hidden = true; });
    hero.after(card);
  }

  /** A lesson: the three steps as one pinned bar; done steps ticked; reading progress along its bottom edge. */
  function steps(){
    const st = appEl.querySelector(".steps");
    if (!st) return;
    if (!st.querySelector("button")) { if (!st.dataset.fx) { st.dataset.fx = "1"; st.classList.add("fx-bar"); } read(); return; }   // Grammar 100: three segments, not buttons
    if (!st.dataset.fx) {
      st.dataset.fx = "1";
      st.classList.add("fx-steps");
      const bs = [...st.querySelectorAll("button")], cur = bs.findIndex(b => b.getAttribute("aria-current") === "step");
      bs.forEach((b, i) => {
        const m = /^\s*(\d+)\s*·\s*(.+)$/.exec(b.textContent);
        if (m) b.innerHTML = `<i>${i < cur ? "✓" : m[1]}</i>${esc2(m[2])}`;
        if (i < cur) b.classList.add("fx-done");
      });
    }
    read();
  }
  function read(){
    const st = appEl.querySelector(".steps.fx-steps, .steps.fx-bar");
    if (!st) return;
    const learning = !!appEl.querySelector("#toquiz"), finished = !!appEl.querySelector("#relearn");   // the reading step, the last step
    const max = document.documentElement.scrollHeight - innerHeight;
    st.style.setProperty("--fx-read", learning ? (max > 0 ? Math.min(1, scrollY / max) : 1).toFixed(3) : finished ? 1 : 0);
  }

  /** Buttons in reach of a thumb, and a mock (or Grammar 100's timed test) as a focus screen. */
  function dock(b){
    if (!b || !b.parentElement || b.parentElement.classList.contains("fx-dock")) return;
    if (b.parentElement.classList.contains("row")) { b.parentElement.classList.add("fx-dock"); return; }
    const d = el("div", "fx-dock");   // a button on its own (Grammar 100's "Practise this rule", its Next question)
    b.before(d);
    d.appendChild(b);
  }
  function docks(){
    const timed = appEl.querySelector("#timer") && appEl.querySelector("#sub");
    ["#toquiz", "#lqnext", "#rqnext", "#mprev", "#mark"].forEach(sel => dock(appEl.querySelector(sel)));
    if (timed) dock(appEl.querySelector("#prev"));
    const mock = !!appEl.querySelector("#mprev") || !!timed;
    root.classList.toggle("fx-focus", mock);
    const bar = appEl.querySelector(".mbar") || (timed && appEl.querySelector("#timer").parentElement);
    const leave = typeof showMockLeave === "function" ? () => showMockLeave("learn") : typeof showLeave === "function" ? () => showLeave("tests") : null;
    if (mock && bar && leave && !bar.querySelector(".fx-leave")) {
      const b = el("button", "btn sm ghost fx-leave", "Leave");
      b.type = "button";
      b.title = "Leave the test";
      b.onclick = leave;
      bar.appendChild(b);
    }
  }

  /* ---------- Practice, one question at a time ---------- */
  let one = lsGet("studyOneAtATime") === "1", oneCur = null, oneSkip = new Set(), oneSeen = new Set(), streak = 0;
  const unanswered = c => !!c.querySelector(".opt:not(:disabled)");
  function practice(){
    const list = appEl.querySelector("#plist"), shuf = appEl.querySelector("#pshuf");
    if (!list || !shuf) return;
    let tg = appEl.querySelector(".fx-one-tg");
    if (!tg) {
      tg = el("button", "btn sm ghost fx-one-tg", "One at a time");
      tg.type = "button";
      tg.onclick = () => { one = !one; lsSet("studyOneAtATime", one ? "1" : "0"); oneCur = null; oneSkip.clear(); tg.blur(); ui(); if (one) scrollToCard(); };   // blur: Enter must mean Next, not this again
      shuf.before(tg);
    }
    tg.setAttribute("aria-pressed", String(one));
    list.classList.toggle("fx-one", one);
    let bar = appEl.querySelector(".fx-onebar");
    if (!one) { if (bar) bar.remove(); list.querySelectorAll(".fx-cur").forEach(c => c.classList.remove("fx-cur")); return; }
    const cards = [...list.querySelectorAll(":scope > .qcard[data-q]")], more = list.querySelector(":scope > #pmore");
    let cur = cards.find(c => c.dataset.q === oneCur);
    if (!cur) {
      cur = cards.find(c => unanswered(c) && !oneSkip.has(c.dataset.q)) || cards.find(c => unanswered(c));
      if (!cur && more) { more.click(); return; }
    }
    cards.forEach(c => c.classList.toggle("fx-cur", c === cur));
    if (cur) {
      oneCur = cur.dataset.q;
      if (!unanswered(cur) && !oneSeen.has(oneCur)) { oneSeen.add(oneCur); streak = cur.querySelector(".opt.no") ? 0 : streak + 1; }
    }
    let total = cards.length;
    try { total = practiceList().length; } catch (e) { const m = /(\d+)/.exec((shuf.closest(".between") || shuf.parentElement).textContent); if (m) total = +m[1]; }
    const idx = cur ? cards.indexOf(cur) + 1 : 0, answered = cur && !unanswered(cur);
    if (!bar) { bar = el("div", "fx-onebar fx-dock"); list.after(bar); }
    const html = !cur ? "" :
      `<span class="fx-c">Question <b>${idx}</b> of <b>${total}</b>${streak > 1 ? ` · <span class="fx-st">🔥 ${streak} in a row</span>` : ""}</span>` +
      (answered ? `<button type="button" class="btn pri" id="fxnext">Next ›</button>` : `<button type="button" class="btn ghost" id="fxskip">Skip</button>`);
    if (!cur && !list.querySelector(".fx-onedone")) list.appendChild(el("p", "fx-onedone", "Every question in this list is answered. Pick another filter, or turn off “One at a time” to look back over them."));
    if (bar.dataset.html !== html) {
      bar.dataset.html = html;
      bar.innerHTML = html;
      bar.hidden = !cur;
      const nx = bar.querySelector("#fxnext"), sk = bar.querySelector("#fxskip");
      if (nx) nx.onclick = () => step(false);
      if (sk) sk.onclick = () => step(true);
    }
  }
  function step(skip){
    const list = appEl.querySelector("#plist");
    if (!list) return;
    if (skip && oneCur) { oneSkip.add(oneCur); streak = 0; }
    const cards = [...list.querySelectorAll(":scope > .qcard[data-q]")], i = cards.findIndex(c => c.dataset.q === oneCur);
    const after = cards.slice(i + 1).find(c => unanswered(c) && !oneSkip.has(c.dataset.q));
    oneCur = after ? after.dataset.q : null;
    if (!after) { const more = list.querySelector(":scope > #pmore"); if (more) { more.click(); return; } }
    ui();
    scrollToCard();
  }
  function scrollToCard(){
    const c = appEl.querySelector("#plist .qcard.fx-cur");
    if (c && c.getBoundingClientRect().top < 0 || c && c.getBoundingClientRect().top > innerHeight * 0.4) {
      const y = c.getBoundingClientRect().top + scrollY - (parseFloat(getComputedStyle(root).getPropertyValue("--fx-top")) || 0) - 12;
      scrollTo({ top: Math.max(0, y), behavior: still() ? "auto" : "smooth" });
    }
  }

  /* ---------- small things ---------- */
  function edges(){ document.querySelectorAll(".seg, .chips").forEach(fade); }
  function fade(r){
    const more = r.scrollWidth - r.clientWidth > 4;
    r.classList.toggle("fx-r", more && r.scrollLeft + r.clientWidth < r.scrollWidth - 4);
    r.classList.toggle("fx-l", more && r.scrollLeft > 4);
    if (more && !r.dataset.fx) { r.dataset.fx = "1"; r.addEventListener("scroll", () => fade(r), { passive: true }); }
  }
  function heat(){
    appEl.querySelectorAll(".heatb").forEach(h => {
      const n = Math.max(1, Math.min(3, (h.textContent.match(/🔥/gu) || []).length));
      const d = el("span", "dots", [1, 2, 3].map(i => `<i class="${i <= n ? "on" : ""}"></i>`).join(""));
      d.setAttribute("aria-label", "Asked " + (n === 3 ? "almost every shift" : n === 2 ? "often" : "now and then"));
      d.title = h.title || "How often it is asked";
      h.replaceWith(d);
    });
  }
  document.querySelectorAll('.nav button[data-tab="mock"] span').forEach(s => { if (s.textContent.trim() === "Mock test") s.textContent = "Mock"; });

  function ui(){
    if (!appEl) return;
    heat();
    front();
    steps();
    docks();
    practice();
    edges();
    measure();   // last: a mock's focus screen has just hidden the tab bar
  }
  let queued = false;
  const soon = () => { if (queued) return; queued = true; requestAnimationFrame(() => { queued = false; ui(); }); };
  if (appEl) {
    new MutationObserver(soon).observe(appEl, { childList: true, subtree: true });
    addEventListener("scroll", read, { passive: true });
    addEventListener("resize", soon);
    ui();
  }
})();

/* ============================================================
   MY NOTES — select a word or sentence in any mini app → "📝 Add note": type it, or draw with a finger or stylus.
   The words stay highlighted with a 📝 after them; tap either to read, edit or delete the note.
   - Saved per app in localStorage "shabdNotes_<page>" as { v:1, n: { id: { q, pre, suf, les, t, d, c, u, del? } } }
     (q = the words, pre / suf = text around them to find the right spot again, les = the lesson, t = typed text,
     d = drawing, c / u = created / updated time; a deleted note stays as { del:1, u } so other devices learn of it).
   - Inside पाठShala the app syncs that key to your account like progress ("notes_<app id>", merged note by note)
     and lists every note under ☰ → My notes and the 📝 button on the mini app's bar. On its own page,
     the 📝 pill (bottom left) lists this app's notes.
   - A drawing is strokes "colour|width|x,y x,y …;…" on a 600 × 360 pad, drawn back as SVG (so it stays sharp).
   - Notes find their words again whenever the page redraws (MutationObserver), by the words plus the text around them.
   - A note can also be PLACED anywhere on the page: 📝 on the bar → "＋ New note on this page" → tap a spot → write it.
     It shows as a small 📝 there (tap to read; "Show on page" opens it out as a sticky card, – folds it back;
     drag the 📝 or the card's ⠿ to move it) and scrolls with the lesson.
     Saved as { q: "", pin: { q, pre, suf, x, y }, f? }: pin.q / pre / suf find the nearest text again (like a highlight),
     x is the spot across the page (0–1) and y the distance below that text (in unzoomed px); f = folded.
   - The drawing pad grows as you write near its bottom (and "＋ Space" adds more); its height is kept as h.
     Two fingers scroll the pad; once a stylus is used, a finger scrolls too; "✋ Scroll" lets one finger scroll.
   ============================================================ */
(function(){
  if (window.__studyNotes) return;
  window.__studyNotes = true;
  const FILE = (location.pathname.split("/").pop() || "").replace(/\.html?$/, "");
  if (!/^study-/.test(FILE)) return;
  const KEY = "shabdNotes_" + FILE, EMBED = /[?&]embed=1/.test(location.search);
  const W = 600, H = 360, MAX = 900000;
  const COLORS = { k: "currentColor", r: "#D64545", b: "#2F6FD1", g: "#2E8B57", y: "rgba(255,196,0,.55)" };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const norm = s => String(s || "").replace(/\s+/g, " ").trim();
  const now = () => Date.now();
  const SKIP = "script,style,noscript,textarea,input,select,svg,.un-ui,.un-ico,.un-add,[contenteditable]";

  // ---------- storage ----------
  function load(){ try { const d = JSON.parse(localStorage.getItem(KEY) || "null"); if (d && d.n && typeof d.n === "object") return d; } catch (e) {} return { v: 1, n: {} }; }
  function save(d){
    const js = JSON.stringify(d);
    if (js.length > MAX) { toast("This app's notes are full — delete a few drawings first."); return false; }
    try { localStorage.setItem(KEY, js); } catch (e) { toast("Couldn't save — this device's storage is full."); return false; }
    try { if (parent !== window) parent.postMessage({ type: "pathshala-notes", file: FILE }, location.origin); } catch (e) {}
    apply(); badge();
    return true;
  }
  const notes = () => { const n = load().n; return Object.keys(n).filter(id => !n[id].del).map(id => Object.assign({ id }, n[id])); };

  // ---------- the lesson on screen (the engines open lessons through openLesson) ----------
  let lesson = null;
  function hook(){
    if (typeof window.openLesson !== "function" || window.openLesson.__notes) return;
    const inner = window.openLesson;
    window.openLesson = function(id){ lesson = typeof id === "string" || typeof id === "number" ? String(id) : lesson; return inner.apply(this, arguments); };
    window.openLesson.__notes = true;
  }
  hook(); addEventListener("load", hook);
  const onFront = () => !document.querySelector(".lhead, .steps");     // the lesson's own header is gone: back on a list

  // ---------- page text, with every character's place, for finding words again ----------
  function index(){
    const root = document.getElementById("app") || document.body, out = [], map = [];
    let sp = true;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement && n.parentElement.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    for (let n; (n = w.nextNode());) {
      const v = n.nodeValue;
      for (let i = 0; i < v.length; i++) {
        if (/\s/.test(v[i])) { if (sp) continue; out.push(" "); map.push([n, i]); sp = true; }
        else { out.push(v[i]); map.push([n, i]); sp = false; }
      }
    }
    return { s: out.join(""), map };
  }
  function locate(ix, nt, vis){
    const q = norm(nt.q); if (!q) return null;
    let best = -1, score = -1;
    for (let i = ix.s.indexOf(q); i !== -1; i = ix.s.indexOf(q, i + 1)) {
      if (vis) { const m = ix.map[i], r = document.createRange(); try { r.setStart(m[0], m[1]); r.setEnd(m[0], m[1] + 1); } catch (e) { continue; } const b = r.getClientRects()[0]; if (!b || !seen(m[0], b)) continue; }
      let sc = 0;
      const pre = norm(nt.pre), suf = norm(nt.suf), before = ix.s.slice(Math.max(0, i - pre.length), i), after = ix.s.slice(i + q.length, i + q.length + suf.length);
      for (let k = 1; k <= pre.length && before[before.length - k] === pre[pre.length - k]; k++) sc++;
      for (let k = 0; k < suf.length && after[k] === suf[k]; k++) sc++;
      if (sc > score) { score = sc; best = i; }
    }
    if (best < 0) return null;
    const a = ix.map[best], b = ix.map[best + q.length - 1];
    if (!a || !b) return null;
    const r = document.createRange();
    try { r.setStart(a[0], a[1]); r.setEnd(b[0], b[1] + 1); } catch (e) { return null; }
    return r;
  }

  // ---------- highlights and 📝 marks ----------
  let ranges = [], applying = false, mo = null;
  const HL = typeof Highlight === "function" && window.CSS && CSS.highlights;
  function apply(){
    applying = true;
    document.querySelectorAll(".un-ico").forEach(b => b.remove());
    const list = notes(), ix = list.length ? index() : null;
    ranges = [];
    list.forEach(nt => { const r = locate(ix, nt); if (r) ranges.push([nt.id, r]); });
    if (HL) CSS.highlights.set("pathshala-note", new Highlight(...ranges.map(x => x[1])));
    // the 📝 after the words (from the last to the first, so earlier places stay right)
    ranges.slice().reverse().forEach(([id, r]) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "un-ico"; b.dataset.note = id; b.setAttribute("aria-label", "Your note"); b.textContent = "📝";
      const end = r.cloneRange(); end.collapse(false);
      try { end.insertNode(b); } catch (e) {}
    });
    pins(ix);
    if (mo) mo.takeRecords();
    applying = false;
  }
  let applyT = 0;
  const soon = () => { clearTimeout(applyT); applyT = setTimeout(apply, 250); };
  function watch(){
    const root = document.getElementById("app") || document.body;
    mo = new MutationObserver(recs => {
      if (applying) return;
      const ours = recs.every(r => [...r.addedNodes, ...r.removedNodes].every(n => n.nodeType === 1 && n.matches && n.matches(".un-ico, .un-ui, .un-add, .un-pin, .pdf-go, .pdf-pick")) && r.type === "childList");
      if (!ours) soon();
    });
    mo.observe(root, { childList: true, subtree: true, characterData: true });
  }
  addEventListener("storage", e => { if (e.key === KEY) { apply(); badge(); } });

  // ---------- "📝 Add note" by a selection ----------
  const add = document.createElement("button");
  add.type = "button"; add.className = "un-add"; add.hidden = true; add.innerHTML = "📝 Add note";
  let picked = null, selT = 0;
  function readSelection(){
    const sel = getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) return null;
    const r = sel.getRangeAt(0), host = r.commonAncestorContainer.nodeType === 1 ? r.commonAncestorContainer : r.commonAncestorContainer.parentElement;
    if (!host || host.closest(SKIP) || !(document.getElementById("app") || document.body).contains(host)) return null;
    const q = norm(sel.toString());
    if (q.length < 2 || q.length > 600) return null;
    const ix = index();
    let start = -1;
    if (r.startContainer.nodeType === 3) start = ix.map.findIndex(m => m[0] === r.startContainer && m[1] >= r.startOffset);
    if (start < 0 || ix.s.slice(start, start + q.length) !== q) start = ix.s.indexOf(q);
    return { q, pre: start > 0 ? ix.s.slice(Math.max(0, start - 40), start) : "", suf: start >= 0 ? ix.s.slice(start + q.length, start + q.length + 40) : "", rect: r.getBoundingClientRect() };
  }
  function showAdd(){
    picked = readSelection();
    if (!picked) { add.hidden = true; return; }
    const r = picked.rect, bw = 130, below = r.bottom + 46 < innerHeight;
    add.style.left = Math.max(8, Math.min(innerWidth - bw - 8, r.left + r.width / 2 - bw / 2)) + "px";
    add.style.top = (below ? r.bottom + 10 : Math.max(8, r.top - 46)) + "px";
    add.hidden = false;
  }
  document.addEventListener("selectionchange", () => { clearTimeout(selT); selT = setTimeout(showAdd, 300); });
  add.addEventListener("pointerdown", e => e.preventDefault());           // keep the selection while tapping
  add.addEventListener("click", () => {
    const p = picked || readSelection(); add.hidden = true; if (!p) return;
    try { getSelection().removeAllRanges(); } catch (e) {}
    editor({ q: p.q, pre: p.pre, suf: p.suf, les: onFront() ? null : lesson });
  });
  addEventListener("scroll", () => { if (!add.hidden) showAdd(); }, { passive: true });


  // ---------- notes placed on the page (📝 on the bar → ＋ New note → tap a spot) ----------
  const layer = document.createElement("div"); layer.className = "un-ui un-layer";
  const appEl = () => document.getElementById("app") || document.body;
  const zoomOf = () => parseFloat(appEl().style.zoom) || 1;
  const here = () => onFront() ? null : lesson;
  // text you can see: not hidden, see-through, or cut off by a folded box ("More ▾" keeps its text, clipped to nothing)
  function seen(node, b){
    const el = node.parentElement;
    if (!el || (el.checkVisibility && !el.checkVisibility({ opacityProperty: true, visibilityProperty: true }))) return false;
    for (let a = el; a && a !== document.body; a = a.parentElement) {
      const cs = getComputedStyle(a);
      if (cs.overflowX === "visible" && cs.overflowY === "visible") continue;
      const r = a.getBoundingClientRect();
      if (b.bottom <= r.top + 1 || b.top >= r.bottom - 1 || b.right <= r.left || b.left >= r.right) return false;
    }
    return true;
  }
  // the text nearest above the spot (x, y on screen): its first words, the text around them, and where the spot is from it
  function anchorAt(x, y){
    const ix = index();
    let best = -1, bestTop = -Infinity, first = -1, last = null;
    for (let i = 0; i < ix.map.length; i++) {
      const node = ix.map[i][0];
      if (node === last || ix.s[i] === " ") continue;
      last = node;
      const r = document.createRange(); r.selectNodeContents(node);
      const b = r.getClientRects()[0];
      if (!b || !b.height) continue;
      if (b.top <= y + 2 && b.top >= bestTop) { if (!seen(node, b)) continue; bestTop = b.top; best = i; }
      else if (first < 0 && b.top > y && seen(node, b)) first = i;
    }
    const i = best >= 0 ? best : first;
    if (i < 0) return null;
    const q = ix.s.slice(i, i + 40).trim();
    const a = { q, pre: ix.s.slice(Math.max(0, i - 40), i), suf: ix.s.slice(i + q.length, i + q.length + 40) };
    const r = locate(ix, a, true), rb = r && r.getClientRects()[0];
    if (!rb) return null;
    const ar = appEl().getBoundingClientRect();
    a.x = Math.round(Math.max(0, Math.min(1, (x - ar.left) / ar.width)) * 1000) / 1000;
    a.y = Math.round((y - rb.top) / zoomOf());
    return a;
  }
  function card(nt){
    const el = document.createElement("div");
    el.className = "un-pin" + (nt.f ? " un-fold" : ""); el.dataset.pin = nt.id;
    el.innerHTML = nt.f ? `<button type="button" class="un-pin-dot" aria-label="Your note (tap to read, drag to move)">📝</button>`
      : `<div class="un-pin-bar"><span class="un-grip" role="button" aria-label="Drag to move" title="Drag to move">⠿</span><button type="button" class="un-pin-fold" aria-label="Fold the note" title="Fold">–</button></div>
        <button type="button" class="un-pin-body" aria-label="Your note">${nt.t ? `<span>${esc(nt.t)}</span>` : ""}${svgOf(nt.d, "un-pin-draw", nt.h)}</button>`;
    const fold = v => { const d = load(), x = d.n[nt.id]; if (!x) return; if (v) x.f = 1; else delete x.f; x.u = now(); save(d); };
    if (nt.f) drag(el, el.querySelector(".un-pin-dot"), () => view(nt.id));
    else {
      drag(el, el.querySelector(".un-grip"));
      el.querySelector(".un-pin-fold").onclick = () => fold(true);
      el.querySelector(".un-pin-body").onclick = () => view(nt.id);
    }
    return el;
  }
  // drag the card by its handle; a tap without moving calls tap()
  function drag(el, handle, tap){
    handle.addEventListener("pointerdown", e => {
      if (e.button) return;
      e.preventDefault(); handle.setPointerCapture(e.pointerId);
      const sx = e.clientX, sy = e.clientY, sl = parseFloat(el.style.left) || 0, st = parseFloat(el.style.top) || 0, ss = scrollY;
      let moved = false;
      const move = ev => {
        if (!moved && Math.hypot(ev.clientX - sx, ev.clientY - sy) < 6) return;
        moved = true; el.classList.add("un-dragging");
        if (ev.clientY > innerHeight - 40) scrollBy(0, 14); else if (ev.clientY < 40) scrollBy(0, -14);
        el.style.left = (sl + ev.clientX - sx) + "px"; el.style.top = (st + ev.clientY - sy + scrollY - ss) + "px";
      };
      const up = () => {
        handle.removeEventListener("pointermove", move); handle.removeEventListener("pointerup", up); handle.removeEventListener("pointercancel", up);
        el.classList.remove("un-dragging");
        if (!moved) { if (tap) tap(); return; }
        const b = el.getBoundingClientRect(), a = anchorAt(b.left, b.top), d = load(), x = d.n[el.dataset.pin];
        if (!a || !x) { pins(); return; }
        x.pin = a; x.u = now(); save(d);
      };
      handle.addEventListener("pointermove", move); handle.addEventListener("pointerup", up); handle.addEventListener("pointercancel", up);
    });
  }
  function pins(ix){
    const list = notes().filter(nt => nt.pin && nt.pin.q), at = here(), keep = new Set();
    if (list.length && !ix) ix = index();
    const ar = appEl().getBoundingClientRect(), z = zoomOf(), vw = document.documentElement.clientWidth;
    list.forEach(nt => {
      if ((nt.les || null) !== at) return;
      const r = locate(ix, nt.pin, true), rb = r && r.getClientRects()[0];
      if (!rb || !rb.height) return;
      keep.add(nt.id);
      let el = layer.querySelector(`[data-pin="${CSS.escape(nt.id)}"]`);
      if (el && el.classList.contains("un-dragging")) return;
      const sig = String(nt.u || 0) + (nt.f ? "f" : "");
      if (!el || el.dataset.sig !== sig) { if (el) el.remove(); el = card(nt); el.dataset.sig = sig; layer.appendChild(el); }
      const w = el.offsetWidth || 172;
      el.style.left = Math.round(Math.max(4, Math.min(vw - w - 4, ar.left + nt.pin.x * ar.width)) + scrollX) + "px";
      el.style.top = Math.round(rb.top + nt.pin.y * z + scrollY) + "px";
    });
    layer.querySelectorAll("[data-pin]").forEach(el => { if (!keep.has(el.dataset.pin)) el.remove(); });
  }
  let pinT = 0;
  const pinSoon = () => { clearTimeout(pinT); pinT = setTimeout(() => pins(), 120); };
  addEventListener("resize", pinSoon);
  addEventListener("pathshala-zoomed", pinSoon);

  // choosing the spot: a banner, then the next tap on the page is the spot (Back or Cancel stops)
  let placing = false;
  const banner = document.createElement("div");
  banner.className = "un-ui un-place"; banner.hidden = true; banner.setAttribute("role", "status");
  banner.innerHTML = `<span>📌 Tap the spot where your note should go</span><button type="button" class="un-btn">Cancel</button>`;
  function place(){
    drop();
    if (!(history.state && history.state.unNote)) { try { history.pushState(Object.assign({}, history.state, { unNote: 1 }), ""); } catch (e) {} }
    placing = true; banner.hidden = false; document.documentElement.classList.add("un-placing");
  }
  function endPlace(){ placing = false; banner.hidden = true; document.documentElement.classList.remove("un-placing"); }
  banner.querySelector("button").onclick = () => { endPlace(); close(); };
  document.addEventListener("click", e => {
    if (!placing || (e.target.closest && e.target.closest(".un-place"))) return;
    e.preventDefault(); e.stopImmediatePropagation();
    const a = anchorAt(e.clientX, e.clientY);
    endPlace();
    if (!a) { close(); toast("Couldn't place it there — try a spot near some text"); return; }
    editor({ q: "", pin: a, les: here() });
  }, true);

  // ---------- tapping a 📝 or the highlighted words ----------
  document.addEventListener("click", e => {
    const ico = e.target.closest && e.target.closest(".un-ico");
    if (ico) { e.preventDefault(); e.stopPropagation(); view(ico.dataset.note); return; }
    if (!ranges.length || e.target.closest(".un-ui, .un-add, button, a, input, .opt")) return;
    const s = getSelection(); if (s && !s.isCollapsed) return;
    for (const [id, r] of ranges) for (const b of r.getClientRects()) if (e.clientX >= b.left && e.clientX <= b.right && e.clientY >= b.top && e.clientY <= b.bottom) { view(id); return; }
  }, true);

  // ---------- a drawing, as SVG ----------
  function strokes(d){
    return String(d || "").split(";").filter(Boolean).map(s => { const [c, w, pts] = s.split("|"); return { c, w: +w || 3, p: (pts || "").split(" ").filter(Boolean).map(p => p.split(",").map(Number)) }; });
  }
  const pack = list => list.map(s => s.c + "|" + s.w + "|" + s.p.map(p => p.join(",")).join(" ")).join(";");
  function svgOf(d, cls, h){
    const list = strokes(d); if (!list.length) return "";
    return `<svg class="${cls || "un-draw"}" viewBox="0 0 ${W} ${Math.max(H, +h || H)}" role="img" aria-label="Your drawing">` + list.map(s =>
      s.p.length === 1 ? `<circle cx="${s.p[0][0]}" cy="${s.p[0][1]}" r="${s.w / 2}" fill="${COLORS[s.c] || COLORS.k}"/>`
      : `<polyline points="${s.p.map(p => p.join(",")).join(" ")}" fill="none" stroke="${COLORS[s.c] || COLORS.k}" stroke-width="${s.w}" stroke-linecap="round" stroke-linejoin="round"/>`).join("") + `</svg>`;
  }

  // ---------- sheets ----------
  // a sheet is one step in the history, so the phone's Back button closes it (not the whole mini app)
  function sheet(html){
    drop();
    if (!(history.state && history.state.unNote)) { try { history.pushState(Object.assign({}, history.state, { unNote: 1 }), ""); } catch (e) {} }
    const ov = document.createElement("div"); ov.className = "un-ui un-ov";
    ov.innerHTML = `<div class="un-card" role="dialog" aria-label="Note">${html}</div>`;
    ov.addEventListener("click", e => { if (e.target === ov) close(); });
    document.body.appendChild(ov);
    return ov.firstElementChild;
  }
  function drop(){ document.querySelectorAll(".un-ov").forEach(o => o.remove()); }
  function close(){ if (history.state && history.state.unNote) history.back(); else drop(); }
  addEventListener("popstate", () => { if (!(history.state && history.state.unNote)) { drop(); if (placing) endPlace(); } });
  addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  function toast(t){ const el = document.createElement("div"); el.className = "un-ui un-toast"; el.textContent = t; document.body.appendChild(el); setTimeout(() => el.remove(), 2600); }
  const when = t => { try { return new Date(t).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }); } catch (e) { return ""; } };

  function view(id){
    const nt = load().n[id]; if (!nt || nt.del) return;
    const c = sheet(`${nt.q ? `<div class="un-q">“${esc(nt.q)}”</div>` : `<div class="un-q un-q-pin">📌 Note on the page</div>`}
      ${nt.t ? `<div class="un-text">${esc(nt.t)}</div>` : ""}${svgOf(nt.d, "", nt.h)}
      <div class="un-when">${esc(when(nt.u || nt.c))}</div>
      <div class="un-row"><button type="button" class="un-btn un-del">Delete</button>${nt.pin ? `<button type="button" class="un-btn un-show">${nt.f ? "Show on page" : "Fold to 📝"}</button>` : ""}<span></span><button type="button" class="un-btn un-close">Close</button><button type="button" class="un-btn un-pri un-edit">Edit</button></div>`);
    c.querySelector(".un-close").onclick = close;
    const sh = c.querySelector(".un-show");
    if (sh) sh.onclick = () => { const d = load(), x = d.n[id]; if (!x) return; if (x.f) delete x.f; else x.f = 1; x.u = now(); if (save(d)) close(); };
    c.querySelector(".un-edit").onclick = () => editor(Object.assign({ id }, nt));
    c.querySelector(".un-del").onclick = () => remove(id);
  }
  function remove(id){
    if (!confirm("Delete this note?")) return;
    const d = load(); d.n[id] = { del: 1, u: now() }; if (save(d)) { close(); toast("Note deleted"); }
  }

  function editor(nt){
    const c = sheet(`${nt.q ? `<div class="un-q">“${esc(nt.q)}”</div>` : `<div class="un-q un-q-pin">📌 Note on the page</div>`}
      <div class="un-tabs" role="tablist"><button type="button" data-t="type" aria-selected="true">✏️ Type</button><button type="button" data-t="draw" aria-selected="false">🖊️ Draw</button></div>
      <div class="un-pane" data-p="type"><textarea class="un-ta" rows="5" placeholder="Your trick, extra fact, a reminder…">${esc(nt.t || "")}</textarea></div>
      <div class="un-pane" data-p="draw" hidden>
        <div class="un-tools">${Object.keys(COLORS).map((k, i) => `<button type="button" class="un-col${i === 0 ? " on" : ""}" data-c="${k}" aria-label="${{ k: "Ink", r: "Red", b: "Blue", g: "Green", y: "Highlighter" }[k]}" style="--c:${k === "k" ? "var(--ink,#222)" : COLORS[k]}"></button>`).join("")}
          <span class="un-sep"></span><button type="button" class="un-tool" data-w="3">Thin</button><button type="button" class="un-tool on" data-w="6">Thick</button>
          <span class="un-sep"></span><button type="button" class="un-tool" data-x="erase" aria-label="Eraser">⌫ Erase</button><button type="button" class="un-tool" data-x="undo" aria-label="Undo">↶</button><button type="button" class="un-tool" data-x="clear">Clear</button>
          <span class="un-sep"></span><button type="button" class="un-tool" data-x="hand" aria-pressed="false" title="Scroll the pad with one finger">✋ Scroll</button><button type="button" class="un-tool" data-x="more" title="Make the pad longer">＋ Space</button></div>
        <div class="un-padwrap"><canvas class="un-pad"></canvas></div>
        <div class="un-hint">Write with a finger or stylus · two fingers scroll · the pad grows when you reach the bottom · Erase removes a whole line you touch</div>
      </div>
      <div class="un-row">${nt.id ? `<button type="button" class="un-btn un-del">Delete</button>` : ""}<span></span><button type="button" class="un-btn un-close">Cancel</button><button type="button" class="un-btn un-pri un-save">Save</button></div>`);
    const ta = c.querySelector(".un-ta"), pad = c.querySelector(".un-pad"), wrap = c.querySelector(".un-padwrap"), g = pad.getContext("2d");
    let list = strokes(nt.d), col = "k", wid = 6, mode = "pen", cur = null, PH = Math.max(H, +nt.h || H);
    const ink = () => getComputedStyle(c).color;
    function draw(){
      g.setTransform(2, 0, 0, 2, 0, 0); g.clearRect(0, 0, W, PH); g.lineCap = "round"; g.lineJoin = "round";
      list.forEach(s => { g.strokeStyle = g.fillStyle = s.c === "k" ? ink() : COLORS[s.c]; g.lineWidth = s.w;
        if (s.p.length === 1) { g.beginPath(); g.arc(s.p[0][0], s.p[0][1], s.w / 2, 0, 7); g.fill(); return; }
        g.beginPath(); s.p.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); g.stroke(); });
    }
    function size(){ pad.width = W * 2; pad.height = PH * 2; pad.style.aspectRatio = W + " / " + PH; draw(); }
    const grow = y => { if (y > PH - 50 && PH < 4800) { PH = Math.min(4800, PH + 240); size(); } };
    size();
    const at = e => { const r = pad.getBoundingClientRect(); return [Math.round((e.clientX - r.left) / r.width * W), Math.round((e.clientY - r.top) / r.height * PH)]; };
    const near = (s, p) => s.p.some(q => Math.hypot(q[0] - p[0], q[1] - p[1]) < Math.max(10, s.w));
    // fingers and the mouse: two of them scroll; with ✋, or once a stylus has been used, one scrolls too
    const pts = new Map(); let pan = null, penSeen = false, hand = false;
    const mid = () => { let x = 0, y = 0; pts.forEach(p => { x += p[0]; y += p[1]; }); return [x / pts.size, y / pts.size]; };
    pad.addEventListener("pointerdown", e => {
      e.preventDefault(); pad.setPointerCapture(e.pointerId);
      if (e.pointerType === "pen") penSeen = true;
      else pts.set(e.pointerId, [e.clientX, e.clientY]);
      if (e.pointerType !== "pen" && (pts.size >= 2 || hand || (penSeen && e.pointerType === "touch"))) {
        if (cur && !cur.erase && pts.size >= 2 && now() - cur.t0 < 500) { const i = list.indexOf(cur); if (i >= 0) { list.splice(i, 1); draw(); } }
        cur = null; pan = mid(); return;
      }
      const p = at(e);
      if (mode === "erase") { const n = list.length; list = list.filter(s => !near(s, p)); if (list.length !== n) draw(); cur = { erase: 1, t0: now() }; return; }
      const w = e.pointerType === "pen" && e.pressure ? Math.max(1.5, Math.round(wid * (0.55 + e.pressure) * 10) / 10) : (col === "y" ? 16 : wid);
      cur = { c: col, w, p: [p], t0: now() }; list.push(cur); grow(p[1]); draw();
    });
    pad.addEventListener("pointermove", e => {
      if (pts.has(e.pointerId)) pts.set(e.pointerId, [e.clientX, e.clientY]);
      if (pan) { if (!pts.has(e.pointerId)) return; const m = mid(); wrap.scrollTop -= m[1] - pan[1]; wrap.scrollLeft -= m[0] - pan[0]; pan = m; return; }
      if (!cur) return; const p = at(e);
      if (cur.erase) { const n = list.length; list = list.filter(s => !near(s, p)); if (list.length !== n) draw(); return; }
      const last = cur.p[cur.p.length - 1]; if (Math.hypot(p[0] - last[0], p[1] - last[1]) < 2) return;
      cur.p.push(p); grow(p[1]); draw();
    });
    ["pointerup", "pointercancel"].forEach(t => pad.addEventListener(t, e => { pts.delete(e.pointerId); if (!pts.size) pan = null; else if (pan) pan = mid(); cur = null; }));
    c.querySelector('[data-x="hand"]').onclick = function(){ hand = !hand; this.classList.toggle("on", hand); this.setAttribute("aria-pressed", String(hand)); };
    c.querySelector('[data-x="more"]').onclick = () => { PH = Math.min(4800, PH + 360); size(); wrap.scrollTo({ top: wrap.scrollHeight, behavior: "smooth" }); };
    c.querySelectorAll(".un-tabs button").forEach(b => b.onclick = () => {
      c.querySelectorAll(".un-tabs button").forEach(x => x.setAttribute("aria-selected", String(x === b)));
      c.querySelectorAll(".un-pane").forEach(p => p.hidden = p.dataset.p !== b.dataset.t);
      if (b.dataset.t === "draw") requestAnimationFrame(draw);
    });
    c.querySelectorAll(".un-col").forEach(b => b.onclick = () => { col = b.dataset.c; mode = "pen"; c.querySelectorAll(".un-col").forEach(x => x.classList.toggle("on", x === b)); c.querySelector('[data-x="erase"]').classList.remove("on"); });
    c.querySelectorAll("[data-w]").forEach(b => b.onclick = () => { wid = +b.dataset.w; c.querySelectorAll("[data-w]").forEach(x => x.classList.toggle("on", x === b)); });
    c.querySelector('[data-x="erase"]').onclick = function(){ mode = mode === "erase" ? "pen" : "erase"; this.classList.toggle("on", mode === "erase"); };
    c.querySelector('[data-x="undo"]').onclick = () => { list.pop(); draw(); };
    c.querySelector('[data-x="clear"]').onclick = () => { if (list.length && confirm("Clear the drawing?")) { list = []; draw(); } };
    if (!nt.t && nt.d) c.querySelector('[data-t="draw"]').click();
    else setTimeout(() => ta.focus(), 50);
    c.querySelector(".un-close").onclick = close;
    if (c.querySelector(".un-del")) c.querySelector(".un-del").onclick = () => remove(nt.id);
    c.querySelector(".un-save").onclick = () => {
      const drawn = list.filter(s => s.p && s.p.length), t = ta.value.trim(), d = pack(drawn);
      if (!t && !d) { toast("Type something or draw first"); return; }
      const all = load(), id = nt.id || ("n" + now().toString(36) + Math.random().toString(36).slice(2, 6));
      const low = drawn.reduce((m, s) => s.p.reduce((mm, p) => Math.max(mm, p[1]), m), 0), h = Math.max(H, Math.min(PH, Math.ceil(low + 40)));
      all.n[id] = { q: nt.q || "", pre: nt.pre || "", suf: nt.suf || "", les: nt.les || null, t, d, c: nt.c || now(), u: now() };
      if (nt.pin) all.n[id].pin = nt.pin;
      if (nt.f || (nt.pin && !nt.id)) all.n[id].f = 1;
      if (d && h > H) all.n[id].h = h;
      if (save(all)) { close(); toast(nt.id ? "Note updated" : "Note saved 📝"); }
    };
  }

  // ---------- this app's notes (the 📝 pill on its own page; the app's bar inside पाठShala) ----------
  const pill = document.createElement("button");
  pill.type = "button"; pill.className = "un-ui un-pill"; pill.hidden = true;
  function badge(){ const n = notes().length; pill.textContent = n ? "📝 " + n : "📝"; pill.hidden = EMBED; }
  function listAll(){
    const list = notes().sort((a, b) => (b.u || 0) - (a.u || 0));
    const c = sheet(`<h3 class="un-h">My notes in this app <small>${list.length}</small></h3>
      <button type="button" class="un-new">＋ New note on this page</button>
      <div class="un-list">${list.length ? list.map(nt => `<button type="button" class="un-item" data-go="${esc(nt.id)}"><b>${nt.q ? `“${esc(nt.q.slice(0, 90))}${nt.q.length > 90 ? "…" : ""}”` : "📌 Note on the page"}</b>${nt.t ? `<span>${esc(nt.t.slice(0, 140))}</span>` : ""}${nt.d ? svgOf(nt.d, "un-thumb", nt.h) : ""}<small>${nt.les ? "Lesson " + esc(nt.les) + " · " : ""}${esc(when(nt.u || nt.c))}</small></button>`).join("")
        : `<p class="un-empty">No notes yet. Tap <b>＋ New note</b> and then any spot to stick one there, or select a word or sentence in a lesson and tap <b>📝 Add note</b>.</p>`}</div>
      <div class="un-row"><span></span><button type="button" class="un-btn un-close">Close</button></div>`);
    c.querySelector(".un-close").onclick = close;
    c.querySelector(".un-new").onclick = place;
    c.querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));
  }
  function go(id){
    const nt = load().n[id]; close(); if (!nt || nt.del) return;
    if (nt.les && typeof window.openLesson === "function" && lesson !== nt.les) { try { window.openLesson(nt.les, "learn"); } catch (e) {} }
    let tries = 0;
    (function find(){
      apply();
      const b = document.querySelector(`.un-ico[data-note="${CSS.escape(id)}"], .un-pin[data-pin="${CSS.escape(id)}"]`);
      if (b) { b.scrollIntoView({ block: "center", behavior: "smooth" }); b.classList.add("un-flash"); setTimeout(() => b.classList.remove("un-flash"), 1600); setTimeout(() => view(id), 600); return; }
      if (++tries < 8) setTimeout(find, 250); else view(id);
    })();
  }
  pill.onclick = listAll;
  // the app's bar asks for this app's notes, or for one note (from ☰ → My notes)
  addEventListener("message", e => {
    if (e.origin !== location.origin || !e.data) return;
    if (e.data.type === "pathshala-notes-list") listAll();
    if (e.data.type === "pathshala-notes-go" && typeof e.data.id === "string") go(e.data.id);
  });

  const css = document.createElement("style");
  css.textContent = `
::highlight(pathshala-note){background-color:rgba(255,196,0,.38)}
.un-ico{all:unset;cursor:pointer;font-size:.85em;line-height:1;padding:0 2px;margin-left:1px;vertical-align:baseline;border-radius:4px}
.un-ico:hover,.un-ico:focus-visible{background:rgba(255,196,0,.35)}
.un-ico.un-flash{animation:unFlash 1.5s ease-out}
@keyframes unFlash{0%,60%{background:rgba(255,196,0,.8);box-shadow:0 0 0 6px rgba(255,196,0,.35)}100%{background:none;box-shadow:none}}
.un-add{position:fixed;z-index:400;width:130px;padding:9px 0;border:none;border-radius:999px;background:var(--ink,#242019);color:var(--sheet,#fff);font:700 14px var(--f-body,system-ui);box-shadow:0 6px 18px rgba(0,0,0,.25);cursor:pointer}
.un-pill{position:fixed;left:12px;bottom:calc(84px + var(--nav-h,0px) + env(safe-area-inset-bottom));z-index:150;padding:8px 13px;border-radius:999px;border:1px solid var(--rule,#ddd);background:var(--sheet,#fff);color:var(--ink,#222);font:700 13.5px var(--f-body,system-ui);box-shadow:0 2px 10px rgba(0,0,0,.15);cursor:pointer}
.un-ov{position:fixed;inset:0;z-index:500;background:rgba(0,0,0,.4);display:flex;align-items:flex-end;justify-content:center;padding:12px}
@media (min-width:640px){.un-ov{align-items:center}}
.un-card{width:100%;max-width:560px;max-height:92vh;overflow:auto;background:var(--sheet,#fff);color:var(--ink,#222);border-radius:18px;padding:16px;box-shadow:0 12px 40px rgba(0,0,0,.3);font:15px/1.45 var(--f-body,system-ui)}
.un-q{font-style:italic;color:var(--ink2,#555);border-left:3px solid rgba(255,196,0,.9);padding:2px 0 2px 10px;margin-bottom:12px;max-height:5.8em;overflow:auto}
.un-h{margin:0 0 10px;font:700 18px var(--f-display,var(--f-body,system-ui))}.un-h small{font-weight:600;color:var(--ink2,#666);font-size:13px;margin-left:6px}
.un-tabs{display:flex;gap:6px;margin-bottom:10px}
.un-tabs button{flex:1;padding:8px;border-radius:10px;border:1px solid var(--rule,#ddd);background:none;color:inherit;font:600 14px var(--f-body,system-ui);cursor:pointer}
.un-tabs button[aria-selected="true"]{background:var(--ink,#222);color:var(--sheet,#fff);border-color:transparent}
.un-ta{width:100%;box-sizing:border-box;border:1px solid var(--rule,#ddd);border-radius:12px;padding:10px;background:var(--paper,transparent);color:inherit;font:15px/1.45 var(--f-body,system-ui);resize:vertical}
.un-tools{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-bottom:8px}
.un-col{width:28px;height:28px;border-radius:50%;border:2px solid var(--rule,#ddd);background:var(--c);cursor:pointer;padding:0}
.un-col.on{outline:3px solid var(--accent,#2f6f63);outline-offset:1px}
.un-tool{padding:6px 10px;border-radius:9px;border:1px solid var(--rule,#ddd);background:none;color:inherit;font:600 13px var(--f-body,system-ui);cursor:pointer}
.un-tool.on{background:var(--ink,#222);color:var(--sheet,#fff)}
.un-sep{width:1px;height:22px;background:var(--rule,#ddd);margin:0 2px}
.un-padwrap{max-height:min(52vh,460px);overflow:auto;border:1px solid var(--rule,#ddd);border-radius:12px;overscroll-behavior:contain;background:var(--paper,#fffdf7)}
.un-pad{display:block;width:100%;aspect-ratio:${W}/${H};touch-action:none;cursor:crosshair}
.un-q-pin{font-style:normal;font-weight:600}
.un-new{width:100%;padding:12px;margin:0 0 10px;border-radius:12px;border:2px dashed var(--accent,#2f6f63);background:none;color:var(--accent,#2f6f63);font:700 15px var(--f-body,system-ui);cursor:pointer}
.un-layer{position:absolute;left:0;top:0;width:0;height:0;z-index:60}
.un-pin{position:absolute;width:172px;background:#FFF1A8;color:#2B2615;border-radius:4px 4px 14px 4px;box-shadow:0 6px 16px rgba(0,0,0,.18),0 1px 0 rgba(0,0,0,.06);font:13.5px/1.4 var(--f-body,system-ui);transform:rotate(-.6deg);transition:box-shadow .15s,transform .15s}
:root[data-theme="dark"] .un-pin,:root[data-theme="dark"] .un-pin-dot{background:#5A4E1C;color:#FFF6D0}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .un-pin,:root:not([data-theme="light"]) .un-pin-dot{background:#5A4E1C;color:#FFF6D0}}
.un-pin-bar{display:flex;justify-content:space-between;align-items:center;padding:2px 2px 0}
.un-grip{cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none;padding:4px 10px;font-size:15px;line-height:1;opacity:.55}
.un-pin-fold{all:unset;cursor:pointer;padding:2px 10px;font-weight:800;font-size:16px;line-height:1;opacity:.55}
.un-pin-body{all:unset;box-sizing:border-box;display:block;width:100%;cursor:pointer;padding:0 11px 10px;max-height:200px;overflow:hidden;white-space:pre-wrap;overflow-wrap:anywhere}
.un-pin-draw{display:block;width:100%;height:auto;margin-top:4px}
.un-pin.un-fold{width:auto;background:none;box-shadow:none;transform:none}
.un-pin-dot{all:unset;cursor:pointer;touch-action:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#FFF1A8;box-shadow:0 3px 10px rgba(0,0,0,.22);font-size:17px}
.un-pin.un-dragging{z-index:2;transform:rotate(-2deg) scale(1.04);box-shadow:0 16px 32px rgba(0,0,0,.3)}
.un-pin.un-flash{animation:unFlash 1.5s ease-out}
.un-place{position:fixed;left:50%;top:calc(10px + env(safe-area-inset-top,0px));transform:translateX(-50%);z-index:450;display:flex;gap:10px;align-items:center;width:max-content;max-width:calc(100vw - 24px);background:var(--ink,#222);color:var(--sheet,#fff);padding:7px 7px 7px 14px;border-radius:999px;font:600 14px var(--f-body,system-ui);box-shadow:0 6px 18px rgba(0,0,0,.3)}
.un-place[hidden]{display:none}
.un-place .un-btn{padding:6px 12px;border-color:rgba(255,255,255,.45);color:inherit}
html.un-placing #app{cursor:crosshair}
.un-hint{font-size:12px;color:var(--ink2,#666);margin-top:6px}
.un-text{white-space:pre-wrap;margin:0 0 10px}
.un-draw{display:block;width:100%;height:auto;border:1px solid var(--rule,#ddd);border-radius:12px;margin:0 0 8px;background:var(--paper,transparent)}
.un-when{font-size:12px;color:var(--ink2,#666)}
.un-row{display:flex;align-items:center;gap:8px;margin-top:14px}.un-row > span{flex:1}
.un-btn{padding:10px 16px;border-radius:12px;border:1px solid var(--rule,#ddd);background:none;color:inherit;font:700 14px var(--f-body,system-ui);cursor:pointer}
.un-pri{background:var(--accent,#2f6f63);border-color:transparent;color:#fff}
.un-del{color:var(--bad,#b3261e)}
.un-list{display:grid;gap:8px}
.un-item{text-align:left;display:grid;gap:4px;padding:10px 12px;border-radius:12px;border:1px solid var(--rule,#ddd);background:none;color:inherit;font:14px/1.4 var(--f-body,system-ui);cursor:pointer}
.un-item span{color:var(--ink2,#555);white-space:pre-wrap}.un-item small{color:var(--ink2,#777);font-size:12px}
.un-thumb{width:120px;height:auto;border:1px solid var(--rule,#ddd);border-radius:8px;background:var(--paper,transparent)}
.un-empty{color:var(--ink2,#666)}
.un-toast{position:fixed;left:50%;bottom:calc(24px + var(--nav-h,0px));transform:translateX(-50%);z-index:600;background:var(--ink,#222);color:var(--sheet,#fff);padding:9px 16px;border-radius:999px;font:600 14px var(--f-body,system-ui);box-shadow:0 6px 18px rgba(0,0,0,.25)}`;
  function start(){
    document.head.appendChild(css); document.body.appendChild(add); document.body.appendChild(pill);
    document.body.appendChild(layer); document.body.appendChild(banner);
    hook(); watch(); apply(); badge();
    if (window.ResizeObserver) new ResizeObserver(pinSoon).observe(appEl());
    const want = new URLSearchParams(location.search).get("note");
    if (want) setTimeout(() => go(want), 600);
  }
  if (document.body) start(); else addEventListener("DOMContentLoaded", start);
})();

/* ============================================================
   MORE DESIGNS — Saffron Dawn, Chalkboard and Exam Hall in every mini app.
   The pages themselves know two skins (data-skin="paper" / "indigo", with their tokens inline or in study-core.css)
   and ignore any other name. Here a new design keeps data-skin="paper" (its pattern and layout rules) and adds
   data-xskin="saffron" | "chalk" | "exam", whose tokens below win over paper's (more specific selectors, later in
   the page). The app sends the design in the frame address (?skin=) and in "shabd-theme" messages.
   ============================================================ */
(function(){
  if (window.__studyXSkin) return;
  window.__studyXSkin = true;
  const root = document.documentElement;
  const FONTS = {
    saffron: "Baloo+2:wght@500;600;700;800&family=Mukta:wght@400;500;600;700",
    chalk: "Kalam:wght@400;700&family=Nunito:wght@400;500;600;700",
    exam: "Atkinson+Hyperlegible:wght@400;700&family=Hind:wght@400;500;600"
  };
  // light, dark: [card, rule, primary, ink, soft, faint, bg, deep, onPrimary, accent, good, bad, warn, pattern, patternSize]
  const T = {
    saffron: { fd: "'Baloo 2', system-ui, sans-serif", fb: "'Mukta', system-ui, sans-serif",
      l: ["#FFFDF7", "#EFD5A6", "#C26500", "#2A1A0B", "#6E5435", "#93795A", "#FFF6E5", "#FBEACB", "#FFFFFF", "#0F6B45", "#138A55", "#C0392B", "#FFB627", "radial-gradient(rgba(217,112,0,.10) 1.6px, transparent 2px)", "24px 24px"],
      d: ["#26190D", "#3D2A16", "#FF9F1C", "#FCEBD2", "#D3B48A", "#A88C68", "#1A120A", "#22170C", "#1A120A", "#3CC47C", "#3CC47C", "#FF6B5B", "#FFB627", "radial-gradient(rgba(255,159,28,.08) 1.6px, transparent 2px)", "24px 24px"] },
    chalk: { fd: "'Kalam', cursive", fb: "'Nunito', system-ui, sans-serif",
      l: ["#FFFFFF", "#D6DED8", "#1B7F5A", "#1E2B25", "#51625A", "#748580", "#F7F8F5", "#ECEFEA", "#FFFFFF", "#B88A0C", "#1B7F5A", "#C2412D", "#E9B824", "linear-gradient(rgba(30,43,37,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(30,43,37,.045) 1px, transparent 1px)", "28px 28px"],
      d: ["#24443A", "rgba(242,240,230,.28)", "#F6D365", "#F2F0E6", "#C7D3C9", "#9DB2A6", "#1F3A2E", "#1A3227", "#1F3A2E", "#9BE3A8", "#9BE3A8", "#FF9B9B", "#F6D365", "radial-gradient(rgba(255,255,255,.035) 1px, transparent 1.2px)", "5px 5px"] },
    exam: { fd: "'Atkinson Hyperlegible', system-ui, sans-serif", fb: "'Atkinson Hyperlegible', 'Hind', system-ui, sans-serif",
      l: ["#FFFFFF", "#1A1A1A", "#0047AB", "#000000", "#262626", "#4D4D4D", "#FFFFFF", "#F2F2F2", "#FFFFFF", "#8A6100", "#006B2D", "#B00020", "#FFD400", "none", "auto"],
      d: ["#000000", "#FFFFFF", "#7CB3FF", "#FFFFFF", "#E6E6E6", "#BFBFBF", "#000000", "#0D0D0D", "#000000", "#FFD400", "#4ADE80", "#FF6B6B", "#FFD400", "none", "auto"] }
  };
  const vars = (t, v, dark) => {
    const [card, rule, pri, ink, soft, faint, bg, deep, onPri, acc, good, bad, warn, pat, psize] = v, mix = (c, k) => `color-mix(in srgb, ${c} ${k}%, ${card})`;
    return `--app-pattern:${pat};--app-psize:${psize};--app-card:${card};--app-rule:${rule};--app-pri:${pri};--app-ink:${ink};--app-soft:${soft};--app-faint:${faint};--app-bg:${bg};--app-deep:${deep};` +
      `--app-display:${t.fd};--app-body:${t.fb};--paper:${bg};--sheet:${card};--sunk:${deep};--ink:${ink};--ink2:${soft};--rule:${rule};--blue:${pri};--on-blue:${onPri};` +
      `--blue-bg:${mix(pri, dark ? 22 : 14)};--accent:${acc};--accent-bg:${mix(acc, dark ? 24 : 16)};--good:${good};--good-bg:${mix(good, dark ? 22 : 14)};--bad:${bad};--bad-bg:${mix(bad, dark ? 22 : 14)};` +
      `--warn-bg:${mix(warn, dark ? 26 : 18)};--f-display:${t.fd};--f-body:${t.fb};color-scheme:${dark ? "dark" : "light"};`;
  };
  let css = "";
  Object.keys(T).forEach(k => {
    const t = T[k], s = `:root[data-skin][data-xskin="${k}"]`;
    css += `${s}{${vars(t, t.l, false)}}${s}[data-theme="dark"]{${vars(t, t.d, true)}}` +
      `@media (prefers-color-scheme: dark){${s}:not([data-theme="light"]){${vars(t, t.d, true)}}}`;
  });
  css += `:root[data-xskin="chalk"][data-theme="dark"] .card,:root[data-xskin="chalk"][data-theme="dark"] .les{border-style:dashed}` +
    `:root[data-xskin="exam"] .card,:root[data-xskin="exam"] .opt,:root[data-xskin="exam"] .les{border-width:2px}`;
  const style = document.createElement("style"); style.id = "xskin-css"; style.textContent = css;
  const fontsOf = k => { const id = "xskin-font-" + k; if (document.getElementById(id) || !FONTS[k]) return;
    const l = document.createElement("link"); l.id = id; l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=" + FONTS[k] + "&display=swap"; document.head.appendChild(l); };
  function apply(sk){
    if (T[sk]) { root.setAttribute("data-skin", "paper"); root.setAttribute("data-xskin", sk); fontsOf(sk); }
    else if (sk === "paper" || sk === "indigo") root.removeAttribute("data-xskin");
  }
  function start(){
    if (!document.getElementById("xskin-css")) document.head.appendChild(style);
    apply(new URLSearchParams(location.search).get("skin") || "");
  }
  if (document.head) start(); else addEventListener("DOMContentLoaded", start);
  // after the page's own handler (it only knows paper / indigo), so a new design wins
  addEventListener("message", e => { if (e.origin === location.origin && e.data && e.data.type === "shabd-theme" && e.data.skin) setTimeout(() => apply(e.data.skin), 0); });
})();

/* ============================================================
   FEEL — vibrations and small animations in every mini app (Style Lab picks, Nov 2026).
   Vibration patterns match the app's (app.js HAPTIC); right / wrong use Android's own haptics inside the app; all
   switched off by Display settings → Vibration ('pathshalaHaptics' = '0', shared with the app).
   - tap: a light tick on every button, tab and chip · select: picking an option · hold: starting to select text
   - right answer: a tick drawn on the option and "+1" floating up · wrong: the shake already here, plus a buzz
   - the last minute of a mock (#mtime, Grammar's #timer): a warning buzz and the clock pulses
   - a lesson's Summary reached from its quiz, or a mock finished: confetti; the last lesson of an app: a badge
   - flashcards (#fcard) turn over; tabs slide in from the side tapped (go wrapper above)
   - building blocks: lettered answer badges, question dots over a lesson quiz, soft-shadow cards, the Continue card
     as a bold block
   ============================================================ */
(function(){
  if (window.__studyFeel) return;
  window.__studyFeel = true;
  const P = { tick: [8], select: [15], right: [12, 60, 18], wrong: [45, 50, 45], streak: [15, 40, 15, 40, 30], goal: [20, 50, 20, 50, 20, 50, 70], level: [30, 30, 30, 30, 30, 30, 120], warn: [80, 120, 80], hold: [25] };
  const on = () => { try { return localStorage.getItem("pathshalaHaptics") !== "0"; } catch (e) { return true; } };
  const still = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  // sounds (the app's set; Display settings → Sounds, 'pathshalaSounds' = '0' turns them off)
  const soundOn = () => { try { return localStorage.getItem("pathshalaSounds") !== "0"; } catch (e) { return true; } };
  let ac = null;
  function tone(f, start, dur, type, vol){
    try {
      if (!ac) ac = new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === "suspended") ac.resume();
      const o = ac.createOscillator(), g = ac.createGain(), t0 = ac.currentTime + start;
      o.type = type || "sine"; o.frequency.value = f; o.connect(g); g.connect(ac.destination);
      g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(vol || .16, t0 + .01); g.gain.exponentialRampToValueAtTime(.0001, t0 + dur);
      o.start(t0); o.stop(t0 + dur + .02);
    } catch (e) {}
  }
  const SND = {
    tick: () => tone(1800, 0, .035, "triangle", .05),
    select: () => tone(1500, 0, .04, "triangle", .07),
    right: () => { tone(880, 0, .12); tone(1320, .09, .2); },
    wrong: () => { tone(220, 0, .16, "triangle", .2); tone(180, .1, .2, "triangle", .18); },
    streak: () => [660, 880, 1100].forEach((f, i) => tone(f, i * .08, .16)),
    goal: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, i * .09, .25)),
    level: () => [523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, i * .08, .28)),
    warn: () => { tone(440, 0, .15, "square", .06); tone(440, .25, .15, "square", .06); }
  };
  function feel(k){
    if (soundOn() && SND[k]) SND[k]();
    if (!on()) return;
    const A = window.PathshalaApp;
    if (A && typeof A.haptic === "function" && (k === "right" || k === "wrong")) { A.haptic(k); return; }
    try { if (navigator.vibrate) navigator.vibrate(P[k] || P.tick); } catch (e) {}
  }
  function tick(opt){
    if (!opt || opt.querySelector(".fx-tick")) return;
    opt.insertAdjacentHTML("beforeend", '<svg class="fx-tick" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10.5l4 4 8-9"/></svg>');
  }
  function plus(el, n){
    if (!el || still()) return;
    const r = el.getBoundingClientRect(); if (!r.width) return;
    const f = document.createElement("div"); f.className = "fx-plus"; f.textContent = "+" + n;
    f.style.left = (r.right - 34) + "px"; f.style.top = (r.top + 2) + "px";
    document.body.appendChild(f); setTimeout(() => f.remove(), 1150);
  }
  function confetti(){
    if (still()) return;
    const cv = document.createElement("canvas"); cv.className = "fx-conf"; document.body.appendChild(cv);
    const w = cv.width = innerWidth * 2, h = cv.height = innerHeight * 2, g = cv.getContext("2d"), cs = getComputedStyle(document.documentElement);
    const cols = ["--blue", "--accent", "--good", "--bad"].map(v => cs.getPropertyValue(v).trim() || "#f90");
    const bits = Array.from({ length: 110 }, () => ({ x: w / 2 + (Math.random() - .5) * w * .3, y: h * .35, vx: (Math.random() - .5) * 26, vy: -Math.random() * 30 - 10, a: Math.random() * 6, c: cols[Math.floor(Math.random() * cols.length)], s: 10 + Math.random() * 10 }));
    let t = 0;
    (function frame(){
      g.clearRect(0, 0, w, h);
      bits.forEach(b => { b.x += b.vx; b.y += b.vy; b.vy += 1; b.vx *= .985; b.a += .2; g.save(); g.translate(b.x, b.y); g.rotate(b.a); g.fillStyle = b.c; g.fillRect(-b.s / 2, -b.s / 4, b.s, b.s / 2); g.restore(); });
      if (++t < 100) requestAnimationFrame(frame); else cv.remove();
    })();
  }
  function badge(title, sub){
    const b = document.createElement("div"); b.className = "fx-level"; b.setAttribute("role", "status");
    b.innerHTML = `<b>${title}</b><small>${sub}</small>`;
    document.body.appendChild(b); setTimeout(() => b.classList.add("out"), 2600); setTimeout(() => b.remove(), 3100);
  }
  window.PathshalaFeel = { feel, tick, plus, confetti };

  // taps and picks
  document.addEventListener("click", e => {
    const t = e.target.closest && e.target.closest("button, [role=tab], .chip, a.btn");
    if (!t || t.disabled || t.closest(".un-ui")) return;
    feel(t.classList.contains("opt") ? "select" : "tick");
  }, true);
  // starting to select text (a long press on a phone)
  let selWas = true;
  document.addEventListener("selectionchange", () => { const s = getSelection(), empty = !s || s.isCollapsed; if (!empty && selWas) feel("hold"); selWas = empty; });

  // the last minute of a mock
  let warned = false;
  setInterval(() => {
    const el = document.querySelector("#mtime, #timer"); if (!el) { warned = false; return; }
    const m = /(\d+):(\d{2})/.exec(el.textContent || ""); if (!m) return;
    const secs = +m[1] * 60 + +m[2];
    if (secs > 60) { warned = false; el.classList.remove("fx-low"); return; }
    if (secs > 0 && !warned) { warned = true; feel("warn"); el.classList.add("fx-low"); }
  }, 1000);

  // lesson finished (Summary right after its quiz), app finished (its last lesson), mock finished
  let lastStep = "", lastTitle = "", mockWas = false, flipped = false, cardWas = null;
  function watch(){
    const cur = document.querySelector(".steps [aria-current=\"step\"]"), step = cur ? cur.dataset.step || "" : "";
    const h1 = document.querySelector("#app h1"), title = h1 ? h1.textContent : "";
    if (step === "sum" && lastStep === "quiz" && title === lastTitle) {
      confetti(); feel("goal");
      if (!document.getElementById("nextles") && document.getElementById("tomock")) setTimeout(() => { badge("App complete", "Every lesson done — try a mock test"); feel("level"); }, 700);
    }
    lastStep = step; lastTitle = title;
    let mk = null; try { mk = typeof M !== "undefined" ? M : null; } catch (e) {}
    const done = !!(mk && mk.done);
    if (done && !mockWas) { confetti(); feel("goal"); }
    mockWas = done;
    // a flashcard turned over
    const card = document.getElementById("fcard");
    if (card && card !== cardWas && flipped && !still()) card.classList.add("fx-flip");
    if (card !== cardWas) flipped = false;
    cardWas = card;
    // question dots over a lesson quiz
    const lq = document.getElementById("lq");
    let st = null; try { st = typeof LQ !== "undefined" ? LQ : null; } catch (e) {}
    if (lq && st && st.list && st.list.length > 1) {
      let bar = document.querySelector(".fx-qdots");
      if (!bar || bar.nextElementSibling !== lq) { if (bar) bar.remove(); bar = document.createElement("div"); bar.className = "fx-qdots"; bar.setAttribute("aria-hidden", "true"); lq.parentNode.insertBefore(bar, lq); }
      const n = st.list.length, html = Array.from({ length: Math.min(n, 40) }, (_, i) => `<i class="${i < st.i ? "d" : i === st.i ? "c" : ""}"></i>`).join("");
      if (bar.innerHTML !== html) bar.innerHTML = html;
    }
  }
  document.addEventListener("click", e => { if (e.target.closest && e.target.closest("#fcard")) flipped = true; }, true);
  let q = false;
  const soon = () => { if (q) return; q = true; requestAnimationFrame(() => { q = false; watch(); }); };

  const css = document.createElement("style");
  css.textContent = `
.opt.ok{position:relative}
.fx-tick{position:absolute;right:10px;top:50%;width:18px;height:18px;margin-top:-9px;pointer-events:none}
.fx-tick path{fill:none;stroke:var(--good);stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:24;stroke-dashoffset:24;animation:fxDraw .35s .1s ease-out forwards}
@keyframes fxDraw{to{stroke-dashoffset:0}}
.fx-plus{position:fixed;z-index:600;pointer-events:none;font:800 19px var(--f-display,inherit);color:var(--good);animation:fxFly 1.1s ease-out forwards}
@keyframes fxFly{0%{opacity:0;transform:translateY(8px) scale(.8)}20%{opacity:1;transform:none}100%{opacity:0;transform:translateY(-44px)}}
.fx-conf{position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:650}
.fx-level{position:fixed;left:50%;top:calc(18px + env(safe-area-inset-top,0px));z-index:660;transform:translateX(-50%);overflow:hidden;border-radius:16px;padding:12px 20px;background:var(--blue);color:var(--on-blue);text-align:center;box-shadow:0 14px 34px -14px rgba(0,0,0,.5);animation:fxLvl .7s cubic-bezier(.3,1.6,.5,1);transition:opacity .4s, transform .4s}
.fx-level b{display:block;font:800 18px var(--f-display,inherit)}.fx-level small{font-size:12.5px;opacity:.9}
.fx-level::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.55) 50%,transparent 70%);transform:translateX(-120%);animation:fxShine .9s .3s ease-out forwards}
.fx-level.out{opacity:0;transform:translate(-50%,-12px)}
@keyframes fxLvl{0%{transform:translateX(-50%) scale(.6);opacity:0}100%{transform:translateX(-50%) scale(1);opacity:1}}
@keyframes fxShine{to{transform:translateX(120%)}}
#mtime.fx-low,#timer.fx-low{color:var(--bad);animation:fxPulse 1s ease-in-out infinite}
@keyframes fxPulse{50%{opacity:.55}}
#fcard.fx-flip{animation:fxFlip .45s cubic-bezier(.4,.2,.2,1)}
@keyframes fxFlip{0%{transform:perspective(700px) rotateY(90deg)}100%{transform:perspective(700px) rotateY(0)}}
.fx-qdots{display:flex;flex-wrap:wrap;gap:5px;margin:2px 0 10px}
.fx-qdots i{width:9px;height:9px;border-radius:50%;background:var(--rule);transition:background .2s,transform .2s}
.fx-qdots i.d{background:var(--blue)}
.fx-qdots i.c{background:var(--accent);transform:scale(1.25)}
/* building blocks: lettered answers, soft-shadow cards, the Continue card as a bold block */
.opt .k{display:inline-grid;place-items:center;width:26px;height:26px;padding:0;border-radius:8px;background:var(--sunk);color:var(--ink2);font-size:13px;font-weight:700;align-self:start}
.opt.sel .k{background:var(--blue);color:var(--on-blue)}
.opt.ok .k{background:var(--good);color:#fff}
.opt.no .k{background:var(--bad);color:#fff}
.block,.qcard,.icheck{box-shadow:0 10px 24px -18px rgba(0,0,0,.4)}
.fx-front{border:2px solid var(--ink)!important;border-radius:10px!important;box-shadow:4px 4px 0 var(--ink)!important}
@media (prefers-reduced-motion:reduce){.fx-tick path{animation:none;stroke-dashoffset:0}.fx-level,.fx-level::after,#fcard.fx-flip,#mtime.fx-low,#timer.fx-low{animation:none}}`;
  function start(){
    document.head.appendChild(css);
    const root = document.getElementById("app") || document.body;
    new MutationObserver(soon).observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["aria-current"] });
    watch();
  }
  if (document.body) start(); else addEventListener("DOMContentLoaded", start);
})();

/* ============================================================
   ZOOM — pinch the lesson with two fingers, or 🔍 on the app's bar (＋ / −).
   Zooms the page's content (#app) with CSS zoom, so the text reflows to the screen's width (no sideways scrolling).
   80 % – 200 %, one setting for every mini app, kept in localStorage "pathshalaZoom". The app's bar sends
   { type: "pathshala-zoom", z }. Maps keep their own pinch (an SVG with its own zoom is left alone), and so do
   the note sheets. A "pathshala-zoomed" event tells MY NOTES to move its placed notes.
   ============================================================ */
(function(){
  if (window.__studyZoom) return;
  window.__studyZoom = true;
  const FILE = (location.pathname.split("/").pop() || "").replace(/\.html?$/, "");
  if (!/^study-/.test(FILE)) return;
  const KEY = "pathshalaZoom", MIN = 0.8, MAX = 2;
  const clamp = v => Math.round(Math.max(MIN, Math.min(MAX, v)) * 100) / 100;
  const read = () => { try { const v = parseFloat(localStorage.getItem(KEY)); return v ? clamp(v) : 1; } catch (e) { return 1; } };
  const app = () => document.getElementById("app");
  let z = 1;
  function set(v, fy){
    v = clamp(v); const el = app();
    if (!el || v === z) return;
    fy = fy == null ? innerHeight / 2 : fy;
    const top = el.getBoundingClientRect().top + scrollY, rel = (scrollY + fy - top) / z;   // keep the spot under the fingers
    z = v; el.style.zoom = v === 1 ? "" : String(v);
    if (scrollY + fy > top) scrollTo(scrollX, top + rel * v - fy);
    dispatchEvent(new Event("pathshala-zoomed"));
  }
  const keep = () => { try { if (z === 1) localStorage.removeItem(KEY); else localStorage.setItem(KEY, String(z)); } catch (e) {} };

  // the size while pinching
  const chip = document.createElement("div"); chip.className = "zm-chip"; chip.hidden = true;
  let chipT = 0;
  const show = () => { chip.textContent = Math.round(z * 100) + "%"; chip.hidden = false; clearTimeout(chipT); chipT = setTimeout(() => chip.hidden = true, 900); };

  const own = el => { for (let s = el && el.closest ? el.closest("svg") : null; s; s = s.parentElement ? s.parentElement.closest("svg") : null) if (s._z) return true; return false; };
  const skip = el => !el || !el.closest || !!el.closest(".un-ui, canvas, input, textarea, select") || own(el);
  const dist = t => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
  let pinch = null, want = 1, raf = 0;
  document.addEventListener("touchstart", e => {
    if (e.touches.length !== 2) { if (e.touches.length > 2) pinch = null; return; }
    if ([...e.touches].some(t => skip(t.target))) return;
    pinch = { d: dist(e.touches) || 1, z, fy: (e.touches[0].clientY + e.touches[1].clientY) / 2 };
    want = z;
  }, { passive: true });
  document.addEventListener("touchmove", e => {
    if (!pinch || e.touches.length !== 2) return;
    e.preventDefault();
    want = pinch.z * dist(e.touches) / pinch.d;
    if (!raf) raf = requestAnimationFrame(() => { raf = 0; if (pinch) { set(want, pinch.fy); show(); } });
  }, { passive: false });
  const end = e => { if (pinch && e.touches.length < 2) { pinch = null; keep(); } };
  document.addEventListener("touchend", end, { passive: true });
  document.addEventListener("touchcancel", end, { passive: true });

  addEventListener("message", e => {
    if (e.origin !== location.origin || !e.data || e.data.type !== "pathshala-zoom") return;
    set(+e.data.z || 1); show();
  });
  addEventListener("storage", e => { if (e.key === KEY) set(read()); });

  const css = document.createElement("style");
  css.textContent = `.zm-chip{position:fixed;left:50%;top:calc(14px + env(safe-area-inset-top,0px));transform:translateX(-50%);z-index:460;background:var(--ink,#222);color:var(--sheet,#fff);padding:6px 14px;border-radius:999px;font:700 14px var(--f-body,system-ui);font-variant-numeric:tabular-nums;box-shadow:0 6px 18px rgba(0,0,0,.25);pointer-events:none}.zm-chip[hidden]{display:none}`;
  function start(){ document.head.appendChild(css); document.body.appendChild(chip); set(read()); }
  if (document.body && app()) start(); else addEventListener("DOMContentLoaded", start);
})();

/* ============================================================
   CHAPTER PDFs — Google Drive PDFs (shared "Anyone with the link") attached to a whole mini app or to any of its
   lessons, and read inside the app.
   - Learn page: a "📄 PDFs for this app" card above the lessons, with the app's own PDFs and "Manage PDFs".
   - Manage PDFs: paste one link or many (one per line; "Name | link" names it). Inside the Android app (3.5+) each
     name is read from Drive (PathshalaApp.pdfTitle); otherwise "PDF 1"… — rename in place. Then attach each PDF to
     the whole app and/or any lessons, from either side: "By PDF" (a PDF → tick lessons) or "By lesson" (a lesson →
     tick PDFs).
   - A lesson: "📄 PDFs" under its title with its PDFs, the app's own ones (marked "app") and "＋ Attach PDF".
   - The list of lessons: 📄 at the right end of a lesson's row with its own PDFs (📄 2 → a short list).
     Rows are .les[data-open] in .lessons (lesson apps, the Maths formula book; wrapped in a .pdf-rw) and the unit
     cards of Grammar 100 (.unit, beside .uh[data-unit]).
   - "📁 Import a Drive folder" (inside पाठShala) asks the app to open its import for this app (app.js openPdfImport):
     a folder's PDFs (Android app 3.6+) or many links, matched to lessons by name and the user's AI, then reviewed.
   - The reader: full screen through Google's viewer (drive /preview, Docs / Slides / Sheets /preview, any other
     https PDF via docs.google.com/viewer), − / ＋ (a wider frame → bigger pages), pinch in the app (3.4+), ✎ to edit.
   - Saved per app in localStorage "shabdPdfs_<page>": { v:1, n: { id: { name, url, ls: [lesson ids], all?, les,
     c, u, o?, del? } } } — all = the whole app, o = last opened, les = ls[0] (what older versions read). Same shape
     as My notes, so the app syncs it the same way, as "pdfs_<app id>", merged PDF by PDF (newest change wins;
     a removed one stays as { del, u }).
   ============================================================ */
(function(){
  if (window.__studyPdfs) return;
  window.__studyPdfs = true;
  const FILE = (location.pathname.split("/").pop() || "").replace(/\.html?$/, "");
  if (!/^study-/.test(FILE)) return;
  const KEY = "shabdPdfs_" + FILE;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const now = () => Date.now();
  const newId = () => "p" + now().toString(36) + Math.random().toString(36).slice(2, 6);
  function load(){ try { const d = JSON.parse(localStorage.getItem(KEY) || "null"); if (d && d.n && typeof d.n === "object") return d; } catch (e) {} return { v: 1, n: {} }; }
  function save(d){
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { toast("Couldn't save — this device's storage is full."); return false; }
    try { if (parent !== window) parent.postMessage({ type: "pathshala-pdfs", file: FILE }, location.origin); } catch (e) {}
    paint();
    return true;
  }
  const lsOf = p => Array.isArray(p.ls) ? p.ls.map(String) : (p.les != null && p.les !== "" ? [String(p.les)] : []);
  const put = (d, id, p) => { const ls = lsOf(p); d.n[id] = Object.assign({}, p, { ls, les: ls[0] || null, u: now() }); if (!p.all) delete d.n[id].all; };
  const list = () => { const n = load().n; return Object.keys(n).filter(id => !n[id].del).map(id => Object.assign({ id }, n[id])).sort((a, b) => (a.c || 0) - (b.c || 0)); };
  const forLesson = les => list().filter(p => lsOf(p).includes(String(les)));
  const forApp = () => list().filter(p => p.all);

  // Three kinds of page: lesson apps (LESSONS + openLesson, a .lhead on a lesson), the Maths formula book
  // (CH + openLesson, a single .chap with #mark) and Grammar 100 (DATA units of RULE, openRule, a .rulehead).
  const kind = () => {
    try { if (typeof window.openRule === "function" && Array.isArray(DATA) && typeof RULE === "object") return "rule"; } catch (e) {}
    try { if (typeof window.chapterHTML === "function" && Array.isArray(CH) && CH.length) return "ch"; } catch (e) {}
    try { if (Array.isArray(LESSONS) && LESSONS.length) return "les"; } catch (e) {}
    return "";
  };
  const lessons = () => {                                      // [{ id, title }] — what a PDF can belong to
    const k = kind();
    if (k === "les") return LESSONS.map(l => ({ id: String(l.id), title: l.title }));
    if (k === "ch") return CH.map(c => ({ id: String(c.id), title: c.t || c.title || c.id }));
    if (k === "rule") return DATA.map(u => ({ id: "u" + u.n, title: "Unit " + u.n + " · " + u.name }));
    return [];
  };
  const lessonNo = id => lessons().findIndex(x => String(x.id) === String(id)) + 1;
  const lessonTitle = id => { const l = lessons().find(x => String(x.id) === String(id)); return l ? l.title : ""; };
  const appTitle = () => { try { if (typeof APP === "object" && APP.title) return APP.title; } catch (e) {} return document.title; };
  const where = p => { const ls = lsOf(p), bits = []; if (p.all) bits.push("Whole app"); if (ls.length) bits.push(ls.length === 1 ? lessonTitle(ls[0]) : ls.length + " lessons"); return bits.join(" · "); };

  // the lesson on screen: the one the page last opened (or a Grammar rule's unit), while it is showing
  let lesson = null;
  function wrap(name, take){
    const f = window[name];
    if (typeof f !== "function" || f.__pdfs) return;
    window[name] = function(id){ if (typeof id === "string" || typeof id === "number") lesson = take(id); return f.apply(this, arguments); };
    for (const k in f) if (!(k in window[name])) window[name][k] = f[k];
    window[name].__pdfs = true;
  }
  function hook(){
    wrap("openLesson", id => String(id));
    wrap("openRule", n => { try { return RULE[n] ? "u" + RULE[n].ch : null; } catch (e) { return null; } });
  }
  hook(); addEventListener("load", hook);
  function anchor(){                                           // where a lesson's strip goes (null: not in a lesson)
    const app = document.getElementById("app"), k = kind();
    if (!app || lesson === null) return null;
    if (k === "ch") return app.querySelectorAll(".chap").length === 1 && app.querySelector("#mark") ? app.querySelector(".chap > .stack") : null;
    if (k === "rule") return app.querySelector(".rulehead");
    if (!app.querySelector(".lhead")) return null;
    return app.querySelector(".steps") || app.querySelector(".lhead ~ h1") || app.querySelector(".lhead");
  }
  function frontAnchor(){                                      // the Learn page: before the first group of lessons
    const app = document.getElementById("app");
    if (!app || anchor()) return null;
    const first = app.querySelector(".lessons, .unit");
    if (!first) return null;
    let c = first;
    while (c.parentElement && c.parentElement.parentElement !== app && c.parentElement !== app) c = c.parentElement;
    for (;;) {                                                 // keep a group's heading, note and the search box with it
      const p = c.previousElementSibling;
      if (p && p.matches(".grph, input.search, p.muted") && !p.matches(".pdf-app")) { c = p; continue; }
      break;
    }
    return c;
  }

  // ---------- a link → the page that shows it ----------
  function viewUrl(raw){
    let u; try { u = new URL(String(raw).trim()); } catch (e) { return null; }
    if (!/^https?:$/.test(u.protocol)) return null;
    const host = u.hostname.replace(/^www\./, "");
    let m;
    if (host === "drive.google.com") {
      const id = (m = u.pathname.match(/\/file\/d\/([\w-]{10,})/)) ? m[1] : u.searchParams.get("id");
      return id && /^[\w-]{10,}$/.test(id) ? `https://drive.google.com/file/d/${id}/preview` : null;
    }
    if (host === "docs.google.com" && (m = u.pathname.match(/\/(document|presentation|spreadsheets)\/d\/([\w-]{10,})/))) return `https://docs.google.com/${m[1]}/d/${m[2]}/preview`;
    return "https://docs.google.com/viewer?embedded=true&url=" + encodeURIComponent(u.href);
  }
  // the Drive file id of a PDF that can be marked up here (a file link, inside an app that can hand over its bytes), else ""
  function inkId(raw){
    if (!(window.__pdfInk && window.__pdfInk.can())) return "";
    let u; try { u = new URL(String(raw).trim()); } catch (e) { return ""; }
    if (u.hostname.replace(/^www\./, "") !== "drive.google.com") return "";
    const m = u.pathname.match(/\/file\/d\/([\w-]{10,})/), id = m ? m[1] : u.searchParams.get("id");
    return id && /^[\w-]{10,}$/.test(id) ? id : "";
  }
  // the file's name from Drive: only the Android app can read it (3.5+); "" when it can't
  const canName = () => { try { const A = window.PathshalaApp || (parent !== window && parent.PathshalaApp); return !!(A && A.pdfTitle); } catch (e) { return false; } };
  function driveName(url){
    try {
      const A = window.PathshalaApp || (parent !== window && parent.PathshalaApp);
      if (!A || !A.pdfTitle) return Promise.resolve("");
      return Promise.resolve(A.pdfTitle(url)).then(t => String(t || "").replace(/\.pdf$/i, "").trim().slice(0, 80), () => "");
    } catch (e) { return Promise.resolve(""); }
  }

  // ---------- the strip under a lesson's title ----------
  const bar = document.createElement("div");
  bar.className = "un-ui pdf-strip";
  const chip = (p, app) => `<button type="button" class="pdf-chip" data-pdf="${esc(p.id)}" title="${esc(p.name)}${p.o ? " · last opened " + esc(when(p.o)) : ""}"><b>${esc(p.name)}</b>${app ? `<i>app</i>` : ""}${p.o ? `<small>${esc(when(p.o))}</small>` : ""}</button>`;
  function strip(force){
    const at = anchor();
    if (!at) { if (bar.isConnected) bar.remove(); return; }
    const mine = forLesson(lesson), app = forApp().filter(p => !mine.some(q => q.id === p.id));
    const sig = lesson + "|" + mine.concat(app).map(p => p.id + p.u).join(",");
    if (force || bar.dataset.sig !== sig) {
      bar.dataset.sig = sig;
      bar.innerHTML = `<span class="pdf-lbl">📄 PDFs</span>` + mine.map(p => chip(p)).join("") + app.map(p => chip(p, 1)).join("") +
        `<button type="button" class="pdf-add">＋ Attach PDF</button>`;
      bar.querySelectorAll("[data-pdf]").forEach(b => b.onclick = () => open(b.dataset.pdf));
      bar.querySelector(".pdf-add").onclick = () => edit({ ls: lesson !== null ? [lesson] : [] });
    }
    if (at.nextElementSibling !== bar) at.after(bar);
  }

  // ---------- the card on the Learn page ----------
  const card = document.createElement("div");
  card.className = "un-ui pdf-app";
  function front(force){
    const at = frontAnchor();
    if (!at) { if (card.isConnected) card.remove(); return; }
    const app = forApp(), inLes = list().filter(p => !p.all && lsOf(p).length).length, loose = list().filter(p => !p.all && !lsOf(p).length).length;
    const sig = app.map(p => p.id + p.u).join(",") + "|" + inLes + "|" + loose;
    if (force || card.dataset.sig !== sig) {
      card.dataset.sig = sig;
      card.innerHTML = `<div class="pdf-ah"><b>📄 PDFs for this app</b><button type="button" class="pdf-mng">Manage PDFs</button></div>` +
        (app.length ? `<div class="pdf-alist">${app.map(p => `<button type="button" class="pdf-arow" data-pdf="${esc(p.id)}"><span>📄</span><b>${esc(p.name)}</b><small>${p.o ? "opened " + esc(when(p.o)) : "not opened yet"}</small></button>`).join("")}</div>`
          : `<p class="pdf-anone">${inLes || loose ? "No PDF for the whole app yet." : "Paste Google Drive links in <b>Manage PDFs</b> — attach your notes to the whole app or to its lessons."}</p>`) +
        (inLes || loose ? `<p class="pdf-ameta">${inLes ? inLes + " PDF" + (inLes > 1 ? "s" : "") + " in lessons (📄 on their rows)" : ""}${inLes && loose ? " · " : ""}${loose ? loose + " not attached yet" : ""}</p>` : "");
      card.querySelectorAll("[data-pdf]").forEach(b => b.onclick = () => open(b.dataset.pdf));
      card.querySelector(".pdf-mng").onclick = () => manager();
    }
    if (at.previousElementSibling !== card) at.before(card);
  }

  // ---------- 📄 at the right end of a lesson's row on the list ----------
  function rows(){
    const app = document.getElementById("app");
    if (!app) return;
    const k = kind(), found = [];
    if (k === "rule") app.querySelectorAll(".uh[data-unit]").forEach(r => found.push([r, "u" + r.dataset.unit]));
    else app.querySelectorAll(".lessons > .les[data-open], .lessons > .pdf-rw > .les[data-open]").forEach(r => found.push([r, r.dataset.open]));
    if (!found.length) return;
    const all = list();
    found.forEach(([row, les]) => {
      const mine = all.filter(p => lsOf(p).includes(String(les)));
      // Grammar's unit header is styled as a child of its card (.unit), so the card holds the button; a lesson row gets a wrapper
      const own = k === "rule";
      let w = own ? row.parentElement : (row.parentElement && row.parentElement.classList.contains("pdf-rw") ? row.parentElement : null);
      if (!mine.length) { if (w) { w.classList.remove("has"); w.querySelectorAll(":scope > .pdf-go, :scope > .pdf-pick").forEach(e => e.remove()); } return; }
      if (!w) { w = document.createElement("div"); w.className = "pdf-rw"; row.before(w); w.appendChild(row); }
      w.classList.add("pdf-rw", "has");
      const mid = own ? (row.offsetTop + row.offsetHeight / 2) + "px" : "";
      let g = w.querySelector(":scope > .pdf-go");
      const label = "📄" + (mine.length > 1 ? "<b>" + mine.length + "</b>" : ""), sig = mine.map(p => p.id + p.u).join(",");
      if (!g) { g = document.createElement("button"); g.type = "button"; g.className = "pdf-go"; w.appendChild(g); }
      g.style.top = mid; w.style.setProperty("--pdf-mid", mid || "50%");
      if (g.dataset.sig !== sig) {
        g.dataset.sig = sig; g.innerHTML = label;
        g.setAttribute("aria-label", mine.length > 1 ? mine.length + " PDFs for this lesson" : "Open the PDF: " + mine[0].name);
        g.title = mine.length > 1 ? mine.length + " PDFs" : mine[0].name;
      }
      g.onclick = e => {
        e.stopPropagation();
        const ps = forLesson(les);
        if (ps.length === 1) { open(ps[0].id); return; }
        pick(w, ps);
      };
    });
  }
  function pick(w, ps){
    const was = w.querySelector(".pdf-pick");
    document.querySelectorAll(".pdf-pick").forEach(e => e.remove());
    if (was) return;                                            // a second tap closes it
    const m = document.createElement("div");
    m.className = "pdf-pick"; m.setAttribute("role", "menu");
    m.innerHTML = ps.map(p => `<button type="button" role="menuitem" data-pdf="${esc(p.id)}">📄 ${esc(p.name)}<small>${p.o ? "opened " + esc(when(p.o)) : "not opened yet"}</small></button>`).join("");
    w.appendChild(m);
    m.querySelectorAll("[data-pdf]").forEach(b => b.onclick = e => { e.stopPropagation(); m.remove(); open(b.dataset.pdf); });
    // a tap outside only closes the list (it doesn't also open the lesson under it)
    const eat = e => { e.preventDefault(); e.stopImmediatePropagation(); };
    const off = e => {
      if (!m.isConnected) { document.removeEventListener("pointerdown", off, true); return; }   // closed another way
      if (m.contains(e.target) || (e.target.closest && e.target.closest(".pdf-go"))) return;
      m.remove(); document.removeEventListener("pointerdown", off, true);
      document.addEventListener("click", eat, { capture: true, once: true });
      setTimeout(() => document.removeEventListener("click", eat, true), 600);
    };
    setTimeout(() => document.addEventListener("pointerdown", off, true), 0);
  }
  function paint(){ strip(true); front(true); rows(); if (mgr && mgr.isConnected) mgr._draw(); }
  let t = 0;
  const soon = () => { clearTimeout(t); t = setTimeout(() => { hook(); strip(); front(); rows(); }, 80); };
  const when = ms => { try { const d = new Date(ms), today = new Date(); return d.toDateString() === today.toDateString() ? "today" : d.toLocaleDateString(undefined, { day: "numeric", month: "short" }); } catch (e) { return ""; } };

  // ---------- layers: each one is a step in the history, so the phone's Back closes the top one ----------
  const stack = [];
  function layer(cls, html){
    const ov = document.createElement("div"); ov.className = "un-ui " + cls; ov.innerHTML = html;
    document.body.appendChild(ov); stack.push(ov);
    try { history.pushState(Object.assign({}, history.state, { unPdf: stack.length }), ""); ov._h = 1; } catch (e) {}
    document.documentElement.classList.add("pdf-lock");
    return ov;
  }
  // Inside the Android app the phone's own pinch-zoom is off (the app scales its pages itself); APK 3.4+ turns it on
  // while a PDF is open (PathshalaApp.pinchZoom), so Google's viewer can be pinched, and back off (zoom reset) on close.
  const pinch = on => { try { const A = window.PathshalaApp || (parent !== window && parent.PathshalaApp); if (A && A.pinchZoom) A.pinchZoom(on); } catch (e) {} };
  function pop(){
    const top = stack.pop();
    if (top) { if (top.classList.contains("pdf-view")) pinch(false); top.remove(); }
    if (!stack.length) document.documentElement.classList.remove("pdf-lock");
    else if (stack[stack.length - 1].classList.contains("pdf-view")) pinch(true);
  }
  function close(n){ n = n || 1; const h = stack.slice(-n).filter(o => o._h).length; if (h) history.go(-h); else for (let i = 0; i < n; i++) pop(); }
  addEventListener("popstate", () => { const want = (history.state && history.state.unPdf) || 0; while (stack.length > want) pop(); });
  function toast(msg){ const el = document.createElement("div"); el.className = "un-ui un-toast"; el.textContent = msg; document.body.appendChild(el); setTimeout(() => el.remove(), 2600); }

  // ---------- ticking: lessons for one PDF, or PDFs for one lesson ----------
  function tick(title, items, done){
    // items: [{ key, label, sub?, on, head? }]
    const ov = layer("pdf-ov", `<div class="un-card pdf-card" role="dialog" aria-label="${esc(title)}">
      <h3 class="un-h">${esc(title)}</h3>
      <div class="pdf-ticks">${items.map(x => `<label class="pdf-tk${x.head ? " head" : ""}"><input type="checkbox" value="${esc(x.key)}"${x.on ? " checked" : ""}><span>${x.label}${x.sub ? `<small>${x.sub}</small>` : ""}</span></label>`).join("") || `<p class="pdf-anone">Nothing to choose yet.</p>`}</div>
      <div class="un-row"><button type="button" class="un-btn pdf-none">Clear</button><span></span><button type="button" class="un-btn pdf-cancel">Cancel</button><button type="button" class="un-btn un-pri pdf-ok">Done</button></div></div>`);
    ov.addEventListener("click", e => { if (e.target === ov) close(); });
    ov.querySelector(".pdf-cancel").onclick = () => close();
    ov.querySelector(".pdf-none").onclick = () => ov.querySelectorAll("input").forEach(i => i.checked = false);
    ov.querySelector(".pdf-ok").onclick = () => { const on = [...ov.querySelectorAll("input:checked")].map(i => i.value); close(); done(on); };
  }
  function tickLessons(id){
    const p = load().n[id]; if (!p || p.del) return;
    const ls = lsOf(p);
    tick("Attach “" + p.name + "” to", [{ key: "*all", label: "<b>Whole app</b>", sub: "On the Learn page and in every lesson", on: !!p.all, head: 1 }]
      .concat(lessons().map((l, i) => ({ key: l.id, label: `<em>${i + 1}</em> ${esc(l.title)}`, on: ls.includes(l.id) }))), on => {
      const d = load(), x = d.n[id]; if (!x || x.del) return;
      put(d, id, Object.assign({}, x, { all: on.includes("*all") ? 1 : 0, ls: on.filter(k => k !== "*all") }));
      save(d);
    });
  }
  function tickPdfs(les){
    const ps = list(), isApp = les === "*all";
    tick(isApp ? "PDFs for the whole app" : "PDFs for " + lessonNo(les) + " · " + lessonTitle(les), ps.map(p => ({ key: p.id, label: `<b>${esc(p.name)}</b>`, sub: esc(where(p) || "not attached yet"), on: isApp ? !!p.all : lsOf(p).includes(String(les)) })), on => {
      const d = load();
      ps.forEach(p => {
        const x = d.n[p.id]; if (!x || x.del) return;
        const want = on.includes(p.id);
        if (isApp) { if (!!x.all !== want) put(d, p.id, Object.assign({}, x, { all: want ? 1 : 0 })); return; }
        const ls = lsOf(x), has = ls.includes(String(les));
        if (has !== want) put(d, p.id, Object.assign({}, x, { ls: want ? ls.concat(String(les)) : ls.filter(k => k !== String(les)) }));
      });
      save(d);
    });
  }

  // ---------- Manage PDFs ----------
  let mgr = null, view = "pdf";
  const fresh = new Set(), reading = new Set();
  function manager(){
    mgr = layer("pdf-mgr", `<div class="pdf-top"><button type="button" class="pdf-x" aria-label="Back">‹</button>
        <div class="pdf-t"><b>Manage PDFs</b><small>${esc(appTitle())}</small></div></div>
      <div class="pdf-mbody">
        <section class="pdf-paste">
          <label for="pdfLinks"><b>Add PDFs</b> — paste Google Drive links, one per line</label>
          <textarea id="pdfLinks" rows="3" placeholder="https://drive.google.com/file/d/…&#10;https://drive.google.com/file/d/…&#10;Lecture 3 | https://drive.google.com/file/d/…"></textarea>
          <div class="pdf-prow"><small>${canName() ? "Names are read from Drive. Write <b>Name | link</b> to name one yourself." : "Write <b>Name | link</b> to name one, or rename it below. (The Android app 3.5+ reads names from Drive.)"} Files must be shared as <b>Anyone with the link</b>.</small><button type="button" class="un-btn un-pri pdf-addall">Add</button></div>
        </section>
        ${parent !== window ? `<button type="button" class="pdf-imp"><b>📁 Import a Drive folder</b><span>Every PDF in it, placed in the right lessons by name (and your AI)</span></button>` : ""}
        <div class="pdf-seg" role="tablist"><button type="button" data-v="pdf">By PDF</button><button type="button" data-v="les">By lesson</button></div>
        <div class="pdf-mlist"></div>
      </div>`);
    mgr.querySelector(".pdf-x").onclick = () => close();
    mgr.querySelectorAll(".pdf-seg button").forEach(b => b.onclick = () => { view = b.dataset.v; mgr._draw(); });
    mgr.querySelector(".pdf-addall").onclick = addAll;
    const imp = mgr.querySelector(".pdf-imp");               // the app does the folder import (it has the AI and every lesson)
    if (imp) imp.onclick = () => { try { parent.postMessage({ type: "pathshala-pdf-import", file: FILE }, location.origin); } catch (e) {} };
    mgr._draw = draw;
    draw();
  }
  function addAll(){
    const ta = mgr.querySelector("#pdfLinks"), lines = ta.value.split(/\n+/).map(s => s.trim()).filter(Boolean);
    if (!lines.length) { toast("Paste one or more links first"); ta.focus(); return; }
    const d = load(), have = new Set(Object.keys(d.n).filter(k => !d.n[k].del).map(k => viewUrl(d.n[k].url)));
    let added = 0, dup = 0, bad = 0, n = Object.keys(d.n).filter(k => !d.n[k].del).length;
    const ask = [];
    lines.forEach(line => {
      const m = line.match(/https?:\/\/\S+/);
      if (!m || !viewUrl(m[0])) { bad++; return; }
      const url = m[0].replace(/[),.;]+$/, ""), v = viewUrl(url);
      if (have.has(v)) { dup++; return; }
      have.add(v);
      let name = line.includes("|") ? line.split("|")[0].trim() : line.slice(0, m.index).replace(/[-–:|]+\s*$/, "").trim();
      const id = newId();
      n++;
      put(d, id, { name: (name || "PDF " + n).slice(0, 80), url, ls: [], c: now() + added });
      if (!name) { d.n[id].auto = 1; ask.push([id, url]); }
      fresh.add(id); added++;
    });
    if (added && save(d)) ta.value = "";
    toast([added ? added + " added" : "", dup ? dup + " already there" : "", bad ? bad + " not a link" : ""].filter(Boolean).join(" · ") || "Nothing added");
    if (view !== "pdf") { view = "pdf"; draw(); }
    // names from Drive, one by one (only in the app)
    ask.forEach(([id, url]) => {
      if (!canName()) return;
      reading.add(id); draw();
      driveName(url).then(name => {
        reading.delete(id);
        const d2 = load(), x = d2.n[id];
        if (name && x && !x.del && x.auto) { delete x.auto; x.name = name; x.u = now(); save(d2); }
        else draw();
      });
    });
  }
  function draw(){
    if (!mgr || !mgr.isConnected) return;
    mgr.querySelectorAll(".pdf-seg button").forEach(b => b.setAttribute("aria-selected", String(b.dataset.v === view)));
    const box = mgr.querySelector(".pdf-mlist"), ps = list(), act = document.activeElement;
    if (act && act.classList && act.classList.contains("pdf-nm") && box.contains(act)) return;   // don't redraw under typing
    if (view === "pdf") {
      const order = ps.filter(p => fresh.has(p.id)).reverse().concat(ps.filter(p => !fresh.has(p.id)));
      box.innerHTML = order.length ? order.map(p => {
        const ls = lsOf(p), tags = (p.all ? [`<span class="pdf-tag app">Whole app</span>`] : []).concat(ls.map(id => `<span class="pdf-tag">${lessonNo(id) || "?"} · ${esc(lessonTitle(id) || id)}</span>`));
        return `<div class="pdf-item${fresh.has(p.id) ? " new" : ""}" data-id="${esc(p.id)}">
          <div class="pdf-ir"><input class="pdf-nm" value="${esc(p.name)}" maxlength="80" aria-label="Name">${reading.has(p.id) ? `<small class="pdf-rd">reading name…</small>` : ""}
            <button type="button" class="pdf-ib pdf-op" aria-label="Open" title="Open">📄</button><button type="button" class="pdf-ib pdf-rm" aria-label="Remove" title="Remove">🗑</button></div>
          <div class="pdf-tags">${tags.length ? tags.join("") : `<span class="pdf-tag none">Not attached yet</span>`}<button type="button" class="pdf-lsb">${tags.length ? "Change" : "Attach to…"}</button></div></div>`;
      }).join("") : `<p class="pdf-anone">No PDFs yet. Paste links above and tap <b>Add</b>.</p>`;
      box.querySelectorAll(".pdf-item").forEach(el => {
        const id = el.dataset.id, nm = el.querySelector(".pdf-nm");
        nm.onchange = () => { const v = nm.value.trim().replace(/\s+/g, " "); const d = load(), x = d.n[id]; if (!x || x.del) return; if (!v) { nm.value = x.name; return; } if (v !== x.name) { delete x.auto; x.name = v; x.u = now(); save(d); } };
        nm.onkeydown = e => { if (e.key === "Enter") nm.blur(); };
        el.querySelector(".pdf-op").onclick = () => open(id);
        el.querySelector(".pdf-lsb").onclick = () => tickLessons(id);
        el.querySelector(".pdf-rm").onclick = () => remove(id);
      });
    } else {
      const row = (key, title, sub, ps2) => `<div class="pdf-lrow" data-les="${esc(key)}"><div class="pdf-lh"><b>${title}</b>${sub ? `<small>${sub}</small>` : ""}</div>
        <div class="pdf-tags">${ps2.map(p => `<button type="button" class="pdf-tag pdf-tp" data-pdf="${esc(p.id)}">📄 ${esc(p.name)}</button>`).join("")}<button type="button" class="pdf-lsb">${ps2.length ? "Change" : "＋ PDFs"}</button></div></div>`;
      box.innerHTML = (ps.length ? "" : `<p class="pdf-anone">No PDFs yet. Paste links above and tap <b>Add</b>.</p>`) +
        row("*all", "Whole app", "On the Learn page and in every lesson", ps.filter(p => p.all)) +
        lessons().map((l, i) => row(l.id, `<em>${i + 1}</em> ${esc(l.title)}`, "", ps.filter(p => lsOf(p).includes(l.id)))).join("");
      box.querySelectorAll(".pdf-lrow").forEach(el => {
        el.querySelector(".pdf-lsb").onclick = () => { if (!list().length) { toast("Add some PDFs first"); mgr.querySelector("#pdfLinks").focus(); return; } tickPdfs(el.dataset.les); };
        el.querySelectorAll(".pdf-tp").forEach(b => b.onclick = () => open(b.dataset.pdf));
      });
    }
  }
  function remove(id, then){
    const p = load().n[id]; if (!p || p.del) return;
    if (!confirm("Remove “" + p.name + "” from this app? (The file stays in your Drive.)")) return;
    const d = load(); d.n[id] = { del: 1, u: now() }; fresh.delete(id);
    if (save(d)) { toast("PDF removed"); if (then) then(); }
  }

  // ---------- attach one (＋ Attach PDF) / edit one (✎) ----------
  function edit(p, onDone){
    const ls = lessons(), on = new Set(lsOf(p));
    const ov = layer("pdf-ov", `<div class="un-card pdf-card" role="dialog" aria-label="${p.id ? "Edit PDF" : "Attach a PDF"}">
      <h3 class="un-h">${p.id ? "Edit PDF" : "Attach a PDF"}</h3>
      <label class="pdf-f"><span>Google Drive link</span><input type="url" class="pdf-url" inputmode="url" autocomplete="off" placeholder="https://drive.google.com/file/d/…" value="${esc(p.url || "")}"></label>
      <p class="pdf-tip">In Drive: ⋮ → Share → <b>General access: Anyone with the link</b> → Copy link.</p>
      <label class="pdf-f"><span>Name</span><input type="text" class="pdf-name" maxlength="80" placeholder="${canName() ? "Read from Drive when you paste the link" : "e.g. Lecture 3 notes"}" value="${esc(p.name || "")}"></label>
      <div class="pdf-f"><span>Show it in</span><div class="pdf-ticks short">
        <label class="pdf-tk head"><input type="checkbox" value="*all"${p.all ? " checked" : ""}><span><b>Whole app</b><small>On the Learn page and in every lesson</small></span></label>
        ${ls.map((l, i) => `<label class="pdf-tk"><input type="checkbox" value="${esc(l.id)}"${on.has(l.id) ? " checked" : ""}><span><em>${i + 1}</em> ${esc(l.title)}</span></label>`).join("")}</div></div>
      <div class="un-row">${p.id ? `<button type="button" class="un-btn un-del">Remove</button>` : ""}<span></span><button type="button" class="un-btn pdf-cancel">Cancel</button><button type="button" class="un-btn un-pri pdf-save">${p.id ? "Save" : "Attach"}</button></div></div>`);
    ov.addEventListener("click", e => { if (e.target === ov) close(); });
    const url = ov.querySelector(".pdf-url"), name = ov.querySelector(".pdf-name");
    setTimeout(() => { (p.id ? name : url).focus(); const first = ov.querySelector(".pdf-ticks input:checked:not([value='*all'])"); if (first) first.closest("label").scrollIntoView({ block: "nearest" }); }, 60);
    let auto = !p.name;
    name.oninput = () => { auto = !name.value.trim(); };
    const guess = () => { const v = url.value.trim(); if (!auto || !viewUrl(v) || !canName()) return; name.placeholder = "Reading the name from Drive…"; driveName(v).then(t => { if (auto && t && url.value.trim() === v) name.value = t; name.placeholder = "e.g. Lecture 3 notes"; }); };
    url.addEventListener("change", guess); url.addEventListener("paste", () => setTimeout(guess, 0));
    ov.querySelector(".pdf-cancel").onclick = () => close();
    if (p.id) ov.querySelector(".un-del").onclick = () => remove(p.id, () => close(stack.length >= 2 && stack[stack.length - 2].classList.contains("pdf-view") ? 2 : 1));
    ov.querySelector(".pdf-save").onclick = () => {
      const v = url.value.trim(), nm = name.value.trim().replace(/\s+/g, " ");
      if (!viewUrl(v)) { toast("Paste the PDF's link (it starts with https://)"); url.focus(); return; }
      if (!nm) { toast("Give it a name"); name.focus(); return; }
      const picked = [...ov.querySelectorAll(".pdf-ticks input:checked")].map(i => i.value);
      if (!picked.length) { toast("Tick the whole app or at least one lesson"); return; }
      const d = load(), id = p.id || newId(), old = d.n[id] || {};
      put(d, id, Object.assign({}, old, { name: nm, url: v, all: picked.includes("*all") ? 1 : 0, ls: picked.filter(k => k !== "*all"), c: old.c || now() }));
      delete d.n[id].auto;
      if (save(d)) { close(); toast(p.id ? "PDF updated" : "PDF attached 📄"); if (onDone) onDone(id); }
    };
  }

  // ---------- the reader ----------
  function open(id){
    const d = load(), p = d.n[id];
    if (!p || p.del) return;
    const src = viewUrl(p.url);
    p.o = now(); p.u = now(); save(d);
    const ov = layer("pdf-view", `<div class="pdf-top"><button type="button" class="pdf-x" aria-label="Close">‹</button>
        <div class="pdf-t"><b>${esc(p.name)}</b><small>${esc(where(p))}</small></div>
        <button type="button" class="pdf-zo" aria-label="Zoom out" disabled>−</button><button type="button" class="pdf-zi" aria-label="Zoom in">＋</button>${inkId(p.url) ? `<button type="button" class="pdf-inkb" aria-label="Draw and highlight on this PDF" title="Mark up">✏️</button>` : ""}<button type="button" class="pdf-ed" aria-label="Edit">✎</button></div>
      <div class="pdf-body"><div class="pdf-wait"><span>Opening the PDF…</span><small>Not opening, or asks you to sign in? In Google Drive set the file to <b>Share → General access → Anyone with the link</b>. It also needs the internet.</small></div><iframe class="pdf-frame" title="${esc(p.name)}" allow="fullscreen" referrerpolicy="no-referrer"></iframe></div>`);
    pinch(true);
    const fr = ov.querySelector(".pdf-frame");
    // − / ＋: Google's viewer fits its pages to its width, so a wider frame (scrolled sideways here) shows them bigger, still sharp
    let z = 1;
    const zo = ov.querySelector(".pdf-zo"), zi = ov.querySelector(".pdf-zi"), body = ov.querySelector(".pdf-body");
    const zoom = dz => {
      const cx = (body.scrollLeft + body.clientWidth / 2) / (body.scrollWidth || 1);
      z = Math.round(Math.max(1, Math.min(3, z + dz)) * 4) / 4;
      fr.style.width = (z * 100) + "%"; zo.disabled = z <= 1; zi.disabled = z >= 3;
      body.scrollLeft = cx * body.scrollWidth - body.clientWidth / 2;
    };
    zo.onclick = () => zoom(-0.5); zi.onclick = () => zoom(0.5);
    fr.addEventListener("load", () => { const w = ov.querySelector(".pdf-wait"); if (w) w.remove(); });
    fr.src = src;
    // ✏️ draw and highlight (PDF INK, below): the pages are drawn here instead of in Google's frame
    const ib = ov.querySelector(".pdf-inkb");
    if (ib) ib.onclick = () => { pinch(false); window.__pdfInk.start(ov, id, inkId(load().n[id].url)); };
    ov.querySelector(".pdf-x").onclick = () => close();
    ov.querySelector(".pdf-ed").onclick = () => edit(Object.assign({ id }, load().n[id]), () => {
      const x = load().n[id]; if (!x || !ov.isConnected) return;
      ov.querySelector(".pdf-t b").textContent = x.name; ov.querySelector(".pdf-t small").textContent = where(x);
      if (viewUrl(x.url) !== src) fr.src = viewUrl(x.url);
    });
  }

  const css = document.createElement("style");
  css.textContent = `
.pdf-strip{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:10px 0 4px}
.pdf-lbl{font:700 12.5px var(--f-body,system-ui);color:var(--ink2,#666);margin-right:2px}
.pdf-chip,.pdf-add{display:inline-flex;align-items:baseline;gap:6px;max-width:100%;padding:6px 12px;border-radius:999px;border:1.5px solid var(--rule,#ddd);background:var(--sheet,#fff);color:var(--ink,#222);font:600 13.5px var(--f-body,system-ui);cursor:pointer}
.pdf-chip b{font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:62vw}
.pdf-chip small{font-weight:500;color:var(--ink2,#777);font-size:11.5px;white-space:nowrap}
.pdf-chip i{font-style:normal;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--accent,#2f6f63)}
.pdf-chip::before{content:"📄";font-size:13px}
.pdf-add{border-style:dashed;color:var(--accent,#2f6f63);border-color:color-mix(in srgb,var(--accent,#2f6f63) 55%,transparent);background:none}
.pdf-app{border:1.5px solid var(--rule,#ddd);border-radius:16px;background:var(--sheet,#fff);padding:12px 14px;display:grid;gap:8px}
.pdf-ah{display:flex;align-items:center;justify-content:space-between;gap:10px;font:700 15px var(--f-body,system-ui)}
.pdf-mng{flex:none;padding:7px 12px;border-radius:999px;border:1.5px solid var(--accent,#2f6f63);background:none;color:var(--accent,#2f6f63);font:700 13px var(--f-body,system-ui);cursor:pointer}
.pdf-alist{display:grid;gap:6px}
.pdf-arow{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:8px;text-align:left;padding:9px 11px;border-radius:12px;border:1px solid var(--rule,#ddd);background:var(--paper,transparent);color:var(--ink,#222);font:600 14px var(--f-body,system-ui);cursor:pointer}
.pdf-arow b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pdf-arow small{color:var(--ink2,#777);font-weight:500;font-size:12px;white-space:nowrap}
.pdf-anone,.pdf-ameta{margin:0;font-size:13px;color:var(--ink2,#666)}
.pdf-rw{position:relative}
.pdf-rw.has > .les,.pdf-rw.has > .uh{padding-right:64px}
.pdf-go{position:absolute;right:10px;top:50%;transform:translateY(-50%);z-index:1;display:inline-flex;align-items:center;justify-content:center;gap:3px;height:36px;min-width:40px;padding:0 10px;border-radius:12px;border:1.5px solid var(--rule,#ddd);background:var(--sheet,#fff);color:var(--ink,#222);font:700 13px var(--f-body,system-ui);box-shadow:0 1px 3px rgba(0,0,0,.08);cursor:pointer}
.pdf-go b{font-size:12px;color:var(--ink2,#666)}
.pdf-pick{position:absolute;right:10px;top:calc(var(--pdf-mid,50%) + 24px);z-index:6;min-width:220px;max-width:calc(100vw - 32px);background:var(--sheet,#fff);border:1px solid var(--rule,#ddd);border-radius:14px;box-shadow:0 12px 30px rgba(0,0,0,.22);padding:6px;display:grid}
.pdf-pick button{all:unset;display:grid;padding:9px 12px;border-radius:10px;font:600 14px var(--f-body,system-ui);color:var(--ink,#222);cursor:pointer;overflow-wrap:anywhere}
.pdf-pick button:hover,.pdf-pick button:focus-visible{background:var(--paper,#f4f1ea)}
.pdf-pick small{font-weight:500;color:var(--ink2,#666);font-size:12px}
.pdf-ov{position:fixed;inset:0;z-index:540;background:rgba(0,0,0,.4);display:flex;align-items:flex-end;justify-content:center;padding:12px}
@media (min-width:640px){.pdf-ov{align-items:center}}
.pdf-f{display:grid;gap:4px;margin:0 0 10px;font:600 13px var(--f-body,system-ui);color:var(--ink2,#555)}
.pdf-f input[type=url],.pdf-f input[type=text]{width:100%;box-sizing:border-box;padding:10px 12px;border-radius:12px;border:1px solid var(--rule,#ddd);background:var(--paper,transparent);color:var(--ink,#222);font:15px var(--f-body,system-ui)}
.pdf-tip{margin:-4px 0 12px;font-size:12.5px;color:var(--ink2,#666)}
.pdf-ticks{display:grid;gap:2px;max-height:min(56vh,480px);overflow:auto;border:1px solid var(--rule,#ddd);border-radius:12px;padding:4px;margin-bottom:4px}
.pdf-ticks.short{max-height:min(34vh,300px)}
.pdf-tk{display:flex;align-items:flex-start;gap:10px;padding:9px 10px;border-radius:9px;cursor:pointer;font:500 14.5px/1.35 var(--f-body,system-ui);color:var(--ink,#222)}
.pdf-tk:hover{background:var(--paper,#f4f1ea)}
.pdf-tk.head{border-bottom:1px dashed var(--rule,#ddd);border-radius:9px 9px 0 0;margin-bottom:2px}
.pdf-tk input{width:20px;height:20px;margin:1px 0 0;flex:none;accent-color:var(--accent,#2f6f63)}
.pdf-tk span{display:grid;gap:1px}.pdf-tk small{font-size:12px;color:var(--ink2,#666)}
.pdf-tk em,.pdf-lh em{font-style:normal;font-weight:700;color:var(--ink2,#777);font-variant-numeric:tabular-nums;margin-right:4px}
.pdf-view,.pdf-mgr{position:fixed;inset:0;z-index:530;display:flex;flex-direction:column;background:var(--paper,#f4f1ea)}
html.pdf-lock,html.pdf-lock body{overflow:hidden}
.pdf-top{display:flex;align-items:center;gap:8px;padding:8px 10px;padding-top:calc(8px + env(safe-area-inset-top,0px));background:var(--sheet,#fff);color:var(--ink,#222);border-bottom:1px solid var(--rule,#ddd)}
.pdf-top button{flex:none;width:38px;height:38px;border-radius:10px;border:1px solid var(--rule,#ddd);background:none;color:inherit;font:700 18px var(--f-body,system-ui);cursor:pointer}
.pdf-t{flex:1;min-width:0;display:grid}.pdf-t b{font:700 15px var(--f-body,system-ui);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pdf-t small{font-size:12px;color:var(--ink2,#666);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pdf-body{position:relative;flex:1;min-height:0;background:#525659;overflow-x:auto;overflow-y:hidden;overscroll-behavior:contain}
.pdf-frame{position:absolute;left:0;top:0;width:100%;height:100%;border:0;background:transparent}
.pdf-top button:disabled{opacity:.35;cursor:default}
.pdf-wait{position:absolute;inset:0;display:grid;place-content:center;gap:10px;padding:24px;text-align:center;color:#eee;font:600 14px var(--f-body,system-ui)}
.pdf-wait small{max-width:34ch;font-weight:500;font-size:12.5px;color:#cfd3d6;line-height:1.45}
.pdf-mbody{flex:1;min-height:0;overflow:auto;padding:14px max(14px,env(safe-area-inset-left,0px)) calc(24px + env(safe-area-inset-bottom,0px));display:grid;gap:14px;align-content:start;max-width:720px;width:100%;margin:0 auto;box-sizing:border-box;color:var(--ink,#222);font:15px/1.45 var(--f-body,system-ui)}
.pdf-paste{display:grid;gap:8px;padding:12px;border:1.5px solid var(--rule,#ddd);border-radius:16px;background:var(--sheet,#fff)}
.pdf-paste label{font-size:14px;color:var(--ink2,#555)}.pdf-paste label b{color:var(--ink,#222)}
.pdf-paste textarea{width:100%;box-sizing:border-box;min-height:84px;padding:10px 12px;border-radius:12px;border:1px solid var(--rule,#ddd);background:var(--paper,transparent);color:var(--ink,#222);font:14px/1.4 var(--f-body,system-ui);resize:vertical}
.pdf-prow{display:flex;align-items:flex-end;gap:10px}.pdf-prow small{flex:1;font-size:12.5px;color:var(--ink2,#666)}
.pdf-imp{display:grid;gap:2px;text-align:left;padding:12px 14px;border-radius:16px;border:1.5px dashed color-mix(in srgb,var(--accent,#2f6f63) 60%,transparent);background:color-mix(in srgb,var(--accent,#2f6f63) 7%,transparent);color:var(--ink,#222);font:14px var(--f-body,system-ui);cursor:pointer}
.pdf-imp b{font-size:15px;color:var(--accent,#2f6f63)}.pdf-imp span{font-size:12.5px;color:var(--ink2,#666)}
.pdf-seg{display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:4px;border-radius:12px;background:var(--sheet,#fff);border:1px solid var(--rule,#ddd)}
.pdf-seg button{padding:9px;border-radius:9px;border:0;background:none;color:var(--ink2,#555);font:700 14px var(--f-body,system-ui);cursor:pointer}
.pdf-seg button[aria-selected=true]{background:var(--ink,#222);color:var(--sheet,#fff)}
.pdf-mlist{display:grid;gap:8px}
.pdf-item,.pdf-lrow{display:grid;gap:8px;padding:10px 12px;border:1px solid var(--rule,#ddd);border-radius:14px;background:var(--sheet,#fff)}
.pdf-item.new{border-color:var(--accent,#2f6f63);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent,#2f6f63) 18%,transparent)}
.pdf-ir{display:flex;align-items:center;gap:6px}
.pdf-nm{flex:1;min-width:0;padding:8px 10px;border-radius:10px;border:1px solid transparent;background:var(--paper,transparent);color:var(--ink,#222);font:700 15px var(--f-body,system-ui)}
.pdf-nm:focus{border-color:var(--accent,#2f6f63);outline:none}
.pdf-rd{font-size:11.5px;color:var(--accent,#2f6f63);white-space:nowrap}
.pdf-ib{flex:none;width:36px;height:36px;border-radius:10px;border:1px solid var(--rule,#ddd);background:none;cursor:pointer;font-size:15px}
.pdf-tags{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.pdf-tag{display:inline-flex;align-items:center;gap:4px;max-width:100%;padding:4px 10px;border-radius:999px;background:var(--paper,#f4f1ea);border:1px solid var(--rule,#ddd);color:var(--ink,#222);font:600 12.5px var(--f-body,system-ui);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pdf-tag.app{background:color-mix(in srgb,var(--accent,#2f6f63) 14%,transparent);border-color:color-mix(in srgb,var(--accent,#2f6f63) 45%,transparent)}
.pdf-tag.none{border-style:dashed;color:var(--ink2,#666)}
button.pdf-tag{cursor:pointer}
.pdf-lsb{padding:4px 12px;border-radius:999px;border:1.5px dashed color-mix(in srgb,var(--accent,#2f6f63) 55%,transparent);background:none;color:var(--accent,#2f6f63);font:700 12.5px var(--f-body,system-ui);cursor:pointer}
.pdf-lh{display:grid;gap:1px}.pdf-lh b{font-size:14.5px}.pdf-lh small{font-size:12px;color:var(--ink2,#666)}`;
  function start(){
    document.head.appendChild(css);
    const app = document.getElementById("app");
    const mine = n => n === bar || n === card || (n.nodeType === 1 && n.matches && n.matches(".pdf-go, .pdf-pick, .pdf-pick *, .pdf-app *, .pdf-strip *"));
    if (app) new MutationObserver(recs => { if (recs.every(r => [...r.addedNodes, ...r.removedNodes].every(mine))) return; soon(); }).observe(app, { childList: true, subtree: true });
    addEventListener("storage", e => { if (e.key === KEY) paint(); });
    soon();
  }
  if (document.body) start(); else addEventListener("DOMContentLoaded", start);
})();

/* ============================================================
   PDF INK — draw and highlight on a chapter PDF (inside the Android app 3.8+).
   Google's viewer is a sealed frame, so marking up needs the pages drawn here: the app hands over the PDF's bytes
   at  __drive/<Drive file id>.pdf  (WebActivity fetches the public file; a website can't), PDF.js (vendor/pdfjs,
   loaded on first use) draws each page on a canvas as it scrolls into view, and a second canvas over it takes the ink.
   - Tools: ✋ move (the page scrolls as usual), 🖊 pen, 🖍 highlighter, ⌫ eraser (removes a whole stroke), ↶ undo,
     four colours, − / ＋. With a drawing tool on, a stylus or one finger draws and two fingers scroll; once a stylus
     has been used a finger only scrolls (palm-friendly). A stylus coming near switches from ✋ to the last drawing tool.
   - Strokes are kept per page as "h|c|w|x,y x,y…;…" with x, y and w in 1/10000 of the page's width / height, so they
     fit any zoom. Saved in localStorage "shabdPdfInk_<page>": { v:1, n: { <pdf id>: { u, p: { <page no>: strokes } } } },
     the same shape as My notes, and synced by the app as "ink_<app id>" (the newest copy of a PDF's ink wins).
   - window.__pdfInk.can() says whether this device can do it; .start(view, pdfId, driveId) is called by the reader's ✏️.
   ============================================================ */
(function(){
  if (window.__pdfInk) return;
  const FILE = (location.pathname.split("/").pop() || "").replace(/\.html?$/, "");
  if (!/^study-/.test(FILE)) return;
  const KEY = "shabdPdfInk_" + FILE, COLS = { k: "#1d2a22", r: "#d64545", b: "#2f6fd1", g: "#2e8b57", y: "#ffc400" };
  const app = () => { try { return window.PathshalaApp || (parent !== window && parent.PathshalaApp) || null; } catch (e) { return null; } };
  const can = () => { const A = app(); return !!(A && A.pdfInk); };
  function load(){ try { const d = JSON.parse(localStorage.getItem(KEY) || "null"); if (d && d.n && typeof d.n === "object") return d; } catch (e) {} return { v: 1, n: {} }; }
  function toast(msg){ const el = document.createElement("div"); el.className = "un-ui un-toast"; el.textContent = msg; document.body.appendChild(el); setTimeout(() => el.remove(), 2800); }
  const parse = s => String(s || "").split(";").filter(Boolean).map(t => { const [h, c, w, pts] = t.split("|"); return { h: h === "1", c, w: +w || 30, p: (pts || "").split(" ").filter(Boolean).map(q => q.split(",").map(Number)) }; });
  const pack = l => l.filter(s => s.p.length).map(s => (s.h ? 1 : 0) + "|" + s.c + "|" + s.w + "|" + s.p.map(q => q.join(",")).join(" ")).join(";");

  let libP = null;
  function lib(){
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    if (!libP) libP = new Promise((res, rej) => { const s = document.createElement("script"); s.src = "vendor/pdfjs/pdf.min.js"; s.onload = () => { try { window.pdfjsLib.GlobalWorkerOptions.workerSrc = "vendor/pdfjs/pdf.worker.min.js"; res(window.pdfjsLib); } catch (e) { rej(e); } }; s.onerror = () => { libP = null; rej(new Error("couldn't load the PDF reader")); }; document.head.appendChild(s); });
    return libP;
  }

  async function start(view, pdfId, driveId){
    const body = view.querySelector(".pdf-body"), top = view.querySelector(".pdf-top");
    if (!body || view.dataset.ink) return;
    view.dataset.ink = "1";
    top.querySelectorAll(".pdf-zo, .pdf-zi, .pdf-inkb").forEach(b => b.hidden = true);
    const old = body.innerHTML;
    body.classList.add("ink-on");
    body.innerHTML = `<div class="ink-wait"><span>Getting the PDF ready to mark up…</span><small class="ink-pc"></small></div>`;
    const bar = document.createElement("div");
    bar.className = "ink-bar";
    bar.innerHTML = `<button type="button" data-t="move" class="on" aria-label="Move the page" title="Move">✋</button><button type="button" data-t="pen" aria-label="Pen" title="Pen">🖊</button><button type="button" data-t="hl" aria-label="Highlighter" title="Highlighter">🖍</button><button type="button" data-t="erase" aria-label="Eraser" title="Eraser">⌫</button>
      <span class="ink-sep"></span>${Object.keys(COLS).map((k, i) => `<button type="button" class="ink-col${i === 0 ? " on" : ""}" data-c="${k}" style="--c:${COLS[k]}" aria-label="${{ k: "Black", r: "Red", b: "Blue", g: "Green", y: "Yellow" }[k]}"></button>`).join("")}
      <span class="ink-sep"></span><button type="button" data-x="undo" aria-label="Undo" title="Undo">↶</button><button type="button" data-x="zo" aria-label="Smaller">−</button><button type="button" data-x="zi" aria-label="Bigger">＋</button><span class="ink-pg" aria-live="off"></span>`;
    top.after(bar);
    const fail = msg => { body.classList.remove("ink-on"); bar.remove(); delete view.dataset.ink; body.innerHTML = old; const fr = body.querySelector(".pdf-frame"); if (fr) fr.src = fr.src; top.querySelectorAll(".pdf-zo, .pdf-zi, .pdf-inkb").forEach(b => b.hidden = false); toast(msg); };
    let doc;
    try {
      const L = await lib(), task = L.getDocument({ url: "__drive/" + encodeURIComponent(driveId) + ".pdf", disableRange: true, disableStream: true, disableAutoFetch: false });
      const pc = body.querySelector(".ink-pc");
      task.onProgress = e => { if (pc && e.total) pc.textContent = Math.round(e.loaded * 100 / e.total) + "%"; else if (pc && e.loaded) pc.textContent = (e.loaded / 1048576).toFixed(1) + " MB"; };
      doc = await task.promise;
    } catch (e) { fail("Couldn't open this PDF for marking up — is it shared as “Anyone with the link”?"); return; }
    if (!view.isConnected) { try { doc.destroy(); } catch (e) {} return; }

    const data = load(), rec = data.n[pdfId] && !data.n[pdfId].del ? data.n[pdfId] : { u: 0, p: {} };
    const ink = {};                                               // page no → strokes
    Object.keys(rec.p || {}).forEach(k => ink[k] = parse(rec.p[k]));
    const hist = [];                                              // [page no, stroke] for undo
    let saveT = 0;
    const save = () => { clearTimeout(saveT); saveT = setTimeout(() => {
      const d = load(), p = {}; Object.keys(ink).forEach(k => { const s = pack(ink[k]); if (s) p[k] = s; });
      d.n[pdfId] = { u: Date.now(), p };
      const js = JSON.stringify(d);
      if (js.length > 850000) { toast("This app's PDF ink is nearly full — erase some marks you no longer need."); }
      try { localStorage.setItem(KEY, js); } catch (e) { toast("Couldn't save the marks — this device's storage is full."); return; }
      try { if (parent !== window) parent.postMessage({ type: "pathshala-ink", file: FILE }, location.origin); } catch (e) {}
    }, 500); };

    body.innerHTML = `<div class="ink-scroll"><div class="ink-pages"></div></div>`;
    const scroll = body.querySelector(".ink-scroll"), pagesEl = body.querySelector(".ink-pages"), pg = bar.querySelector(".ink-pg");
    let zoom = 1, tool = "move", draw = "pen", col = "k", penSeen = false;
    const first = await doc.getPage(1), v1 = first.getViewport({ scale: 1 }), ratio = v1.height / v1.width;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const pages = [];
    for (let n = 1; n <= doc.numPages; n++) {
      const el = document.createElement("div"); el.className = "ink-page"; el.dataset.n = n; el.style.aspectRatio = "1 / " + ratio;
      el.innerHTML = `<canvas class="ink-pdf"></canvas><canvas class="ink-ink"></canvas><span class="ink-no">${n}</span>`;
      pagesEl.appendChild(el); pages.push({ n, el, done: 0, busy: false });
    }
    const paint = P => {                                           // the ink of one page, at the canvas's current size
      const c = P.el.querySelector(".ink-ink"), g = c.getContext("2d"), W = c.width, H = c.height;
      g.clearRect(0, 0, W, H); g.lineCap = "round"; g.lineJoin = "round";
      (ink[P.n] || []).forEach(s => { g.globalAlpha = s.h ? 0.5 : 1; g.strokeStyle = g.fillStyle = COLS[s.c] || COLS.k; g.lineWidth = Math.max(1, s.w / 10000 * W);
        if (s.p.length === 1) { g.beginPath(); g.arc(s.p[0][0] / 10000 * W, s.p[0][1] / 10000 * H, g.lineWidth / 2, 0, 7); g.fill(); return; }
        g.beginPath(); s.p.forEach((q, i) => { const x = q[0] / 10000 * W, y = q[1] / 10000 * H; i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.stroke(); });
      g.globalAlpha = 1;
    };
    async function render(P){
      const w = Math.round(P.el.clientWidth * dpr);
      if (P.busy || P.done === w || !w) return;
      P.busy = true;
      try {
        const page = P.n === 1 ? first : await doc.getPage(P.n), vp0 = page.getViewport({ scale: 1 }), vp = page.getViewport({ scale: w / vp0.width });
        P.el.style.aspectRatio = "1 / " + (vp0.height / vp0.width);
        const c = P.el.querySelector(".ink-pdf"), tmp = document.createElement("canvas"); tmp.width = Math.round(vp.width); tmp.height = Math.round(vp.height);
        await page.render({ canvasContext: tmp.getContext("2d"), viewport: vp }).promise;
        c.width = tmp.width; c.height = tmp.height; c.getContext("2d").drawImage(tmp, 0, 0);
        const ic = P.el.querySelector(".ink-ink"); ic.width = tmp.width; ic.height = tmp.height; paint(P);
        P.done = w; P.el.classList.add("ready");
      } catch (e) {}
      P.busy = false;
    }
    const drop = P => { if (!P.done) return; const c = P.el.querySelector(".ink-pdf"); c.width = c.height = 0; const ic = P.el.querySelector(".ink-ink"); ic.width = ic.height = 0; P.done = 0; P.el.classList.remove("ready"); };
    const near = new Set();
    const io = new IntersectionObserver(es => { es.forEach(e => { const P = pages[+e.target.dataset.n - 1]; if (e.isIntersecting) { near.add(P); render(P); } else near.delete(P); });
      pages.forEach(P => { if (P.done && !near.has(P) && pages.filter(x => x.done).length > 8) drop(P); }); }, { root: scroll, rootMargin: "700px 0px" });
    pages.forEach(P => io.observe(P.el));
    const showPg = () => { const mid = scroll.scrollTop + scroll.clientHeight / 2; let cur = 1; for (const P of pages) { if (P.el.offsetTop <= mid) cur = P.n; else break; } pg.textContent = cur + " / " + doc.numPages; };
    scroll.addEventListener("scroll", showPg, { passive: true }); showPg();

    const setTool = t => { tool = t; if (t === "pen" || t === "hl") draw = t; bar.querySelectorAll("[data-t]").forEach(b => b.classList.toggle("on", b.dataset.t === t)); pagesEl.classList.toggle("drawing", t !== "move"); };
    bar.querySelectorAll("[data-t]").forEach(b => b.onclick = () => setTool(b.dataset.t));
    bar.querySelectorAll(".ink-col").forEach(b => b.onclick = () => { col = b.dataset.c; bar.querySelectorAll(".ink-col").forEach(x => x.classList.toggle("on", x === b)); if (tool === "move" || tool === "erase") setTool(draw); });
    bar.querySelector('[data-x="undo"]').onclick = () => { const h = hist.pop(); if (!h) return; const l = ink[h[0]] || []; if (h[2]) l.push(...h[2]); else { const i = l.indexOf(h[1]); if (i >= 0) l.splice(i, 1); } const P = pages[h[0] - 1]; if (P.done) paint(P); save(); };
    const setZoom = z => { const cy = (scroll.scrollTop + scroll.clientHeight / 2) / (scroll.scrollHeight || 1); zoom = Math.max(1, Math.min(3, z)); pagesEl.style.width = (zoom * 100) + "%"; scroll.scrollTop = cy * scroll.scrollHeight - scroll.clientHeight / 2;
      bar.querySelector('[data-x="zo"]').disabled = zoom <= 1; bar.querySelector('[data-x="zi"]').disabled = zoom >= 3; setTimeout(() => near.forEach(render), 60); };
    bar.querySelector('[data-x="zo"]').onclick = () => setZoom(zoom - 0.5); bar.querySelector('[data-x="zi"]').onclick = () => setZoom(zoom + 0.5); setZoom(1);

    // drawing
    const pts = new Map(); let cur = null, pan = null;
    const at = (e, el) => { const r = el.getBoundingClientRect(); return [Math.round((e.clientX - r.left) / r.width * 10000), Math.round((e.clientY - r.top) / r.height * 10000)]; };
    const mid = () => { let x = 0, y = 0; pts.forEach(p => { x += p[0]; y += p[1]; }); return [x / pts.size, y / pts.size]; };
    const hit = (s, q, W, H) => s.p.some(a => Math.hypot((a[0] - q[0]) * W, (a[1] - q[1]) * H) / 10000 < Math.max(12, s.w / 10000 * W));
    const eraseAt = (P, q) => { const l = ink[P.n] || [], r = P.el.getBoundingClientRect(), gone = l.filter(s => hit(s, q, r.width, r.height)); if (!gone.length) return; ink[P.n] = l.filter(s => !gone.includes(s)); hist.push([P.n, null, gone]); paint(P); save(); };
    scroll.addEventListener("pointermove", e => { if (e.pointerType === "pen" && tool === "move" && !e.buttons) setTool(draw); }, { passive: true });   // a stylus coming near
    pagesEl.addEventListener("pointerdown", e => {
      if (tool === "move") return;
      const el = e.target.closest(".ink-page"); if (!el) return;
      const P = pages[+el.dataset.n - 1];
      e.preventDefault(); try { pagesEl.setPointerCapture(e.pointerId); } catch (x) {}
      if (e.pointerType === "pen") penSeen = true; else pts.set(e.pointerId, [e.clientX, e.clientY]);
      if (e.pointerType !== "pen" && (pts.size >= 2 || (penSeen && e.pointerType === "touch"))) {
        if (cur && cur.s && pts.size >= 2 && Date.now() - cur.t0 < 500) { const l = ink[cur.P.n], i = l.indexOf(cur.s); if (i >= 0) l.splice(i, 1); hist.pop(); paint(cur.P); }
        cur = null; pan = mid(); return;
      }
      const q = at(e, el);
      if (tool === "erase") { cur = { P, erase: 1, t0: Date.now() }; eraseAt(P, q); return; }
      const hl = tool === "hl", base = hl ? 340 : 40, w = e.pointerType === "pen" && e.pressure && !hl ? Math.round(base * (0.6 + e.pressure)) : base;
      const s = { h: hl, c: hl && col === "k" ? "y" : col, w, p: [q] };
      (ink[P.n] = ink[P.n] || []).push(s); hist.push([P.n, s]); cur = { P, s, el, t0: Date.now() }; paint(P);
    });
    pagesEl.addEventListener("pointermove", e => {
      if (pts.has(e.pointerId)) pts.set(e.pointerId, [e.clientX, e.clientY]);
      if (pan) { if (!pts.has(e.pointerId)) return; const m = mid(); scroll.scrollTop -= m[1] - pan[1]; scroll.scrollLeft -= m[0] - pan[0]; pan = m; return; }
      if (!cur) return;
      if (cur.erase) { const el = e.target.closest && e.target.closest(".ink-page"); if (el) eraseAt(pages[+el.dataset.n - 1], at(e, el)); return; }
      const q = at(e, cur.el), last = cur.s.p[cur.s.p.length - 1];
      if (Math.hypot(q[0] - last[0], q[1] - last[1]) < 12) return;
      cur.s.p.push([Math.max(0, Math.min(10000, q[0])), Math.max(0, Math.min(10000, q[1]))]); paint(cur.P);
    });
    ["pointerup", "pointercancel"].forEach(t => pagesEl.addEventListener(t, e => { pts.delete(e.pointerId); if (!pts.size) pan = null; else if (pan) pan = mid(); if (cur && cur.s) save(); cur = null; }));
    new ResizeObserver(() => near.forEach(render)).observe(scroll);
    new MutationObserver(() => { if (!view.isConnected) { io.disconnect(); try { doc.destroy(); } catch (e) {} } }).observe(document.body, { childList: true });
    if (!localStorage.getItem("pdfInkTip")) { toast("Pick 🖊 or 🖍 to draw. Two fingers scroll while drawing; ✋ goes back to moving the page."); try { localStorage.setItem("pdfInkTip", "1"); } catch (e) {} }
  }

  const css = document.createElement("style");
  css.textContent = `
.ink-bar{display:flex;align-items:center;gap:5px;padding:6px 8px;background:var(--sheet,#fff);border-bottom:1px solid var(--rule,#ddd);overflow-x:auto;scrollbar-width:none;color:var(--ink,#222)}
.ink-bar::-webkit-scrollbar{display:none}
.ink-bar button{flex:none;min-width:38px;height:36px;border-radius:10px;border:1px solid var(--rule,#ddd);background:none;color:inherit;font:700 16px var(--f-body,system-ui);cursor:pointer}
.ink-bar button.on{background:var(--ink,#222);color:var(--sheet,#fff);border-color:transparent}
.ink-bar button:disabled{opacity:.35}
.ink-bar .ink-col{min-width:28px;width:28px;height:28px;border-radius:50%;background:var(--c);border:2px solid var(--rule,#ddd)}
.ink-bar .ink-col.on{background:var(--c);outline:3px solid var(--accent,#2f6f63);outline-offset:1px}
.ink-sep{flex:none;width:1px;height:22px;background:var(--rule,#ddd);margin:0 2px}
.ink-pg{margin-left:auto;padding-left:8px;font:600 12.5px var(--f-body,system-ui);color:var(--ink2,#666);white-space:nowrap;font-variant-numeric:tabular-nums}
.pdf-body.ink-on{overflow:hidden}
.ink-scroll{position:absolute;inset:0;overflow:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
.ink-pages{width:100%;margin:0 auto;display:grid;gap:10px;padding:10px 0 40px;box-sizing:border-box}
.ink-pages.drawing{touch-action:none}
.ink-page{position:relative;width:100%;background:#fff;box-shadow:0 1px 6px rgba(0,0,0,.35)}
.ink-page canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.ink-page .ink-ink{mix-blend-mode:multiply}
.ink-pages.drawing .ink-page{cursor:crosshair}
.ink-no{position:absolute;right:6px;bottom:4px;font:600 10px var(--f-body,system-ui);color:#888;pointer-events:none}
.ink-page:not(.ready)::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,#f3f3f3 40%,#fafafa 50%,#f3f3f3 60%);background-size:200% 100%;animation:inkload 1.2s linear infinite}
@keyframes inkload{to{background-position:-200% 0}}
.ink-wait{position:absolute;inset:0;display:grid;place-content:center;gap:8px;text-align:center;color:#eee;font:600 14px var(--f-body,system-ui)}
.ink-wait small{font-weight:500;color:#cfd3d6}`;
  (document.head || document.documentElement).appendChild(css);
  window.__pdfInk = { can, start };
})();
