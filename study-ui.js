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
     It shows as a sticky card there (drag ⠿ to move it, – folds it to a 📝 dot) and scrolls with the lesson.
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
      const ours = recs.every(r => [...r.addedNodes, ...r.removedNodes].every(n => n.nodeType === 1 && n.matches && n.matches(".un-ico, .un-ui, .un-add, .un-pin")) && r.type === "childList");
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
    el.innerHTML = nt.f ? `<button type="button" class="un-pin-dot" aria-label="Your note (tap to open, drag to move)">📝</button>`
      : `<div class="un-pin-bar"><span class="un-grip" role="button" aria-label="Drag to move" title="Drag to move">⠿</span><button type="button" class="un-pin-fold" aria-label="Fold the note" title="Fold">–</button></div>
        <button type="button" class="un-pin-body" aria-label="Your note">${nt.t ? `<span>${esc(nt.t)}</span>` : ""}${svgOf(nt.d, "un-pin-draw", nt.h)}</button>`;
    const fold = v => { const d = load(), x = d.n[nt.id]; if (!x) return; if (v) x.f = 1; else delete x.f; x.u = now(); save(d); };
    if (nt.f) drag(el, el.querySelector(".un-pin-dot"), () => fold(false));
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
      <div class="un-row"><button type="button" class="un-btn un-del">Delete</button><span></span><button type="button" class="un-btn un-close">Close</button><button type="button" class="un-btn un-pri un-edit">Edit</button></div>`);
    c.querySelector(".un-close").onclick = close;
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
      if (nt.f) all.n[id].f = 1;
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
