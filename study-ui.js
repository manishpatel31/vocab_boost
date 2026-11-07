/* The shared layer of every mini app — the study-core pages (Maths, Reasoning, Physics, BNS, Voice, Narration,
   Statistics), the workbook pages (History, GK, Geography, Chemistry, Computer) and the hand-built pages with Plan and
   Lab tabs. study-core.js, study-workbook.js and study-plan-lab.js each load it (it runs once). It reads only the
   markup those engines share, so a change here reaches all of them:
   .hero / .lessons > .les (the Learn page), .steps (a lesson's Learn · Quiz · Summary), #lq and #lqnext (its quiz),
   .mbar and #mprev / #mnext / #mmark (a running mock), #plist > .qcard[data-q], #pshuf and #pmore (Practice),
   .seg and .chips (tab and filter rows), .nav (the tab bar) and the Lab's #labopts / #labgo.

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
    const b = live("#fxnext") || live("#lqnext") || live("#labgo") || live("#mnext");
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
/* buttons that stay in reach of a thumb: Take the quiz, the quiz's Next, the mock's Prev / Mark / Clear / Next, Practice's bar */
.fx-dock{position:sticky;bottom:var(--fx-nav,0px);z-index:14;margin-inline:-16px;padding:10px 16px calc(10px + var(--fx-safe,0px));background:color-mix(in srgb,var(--paper) 90%,transparent);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-top:1px solid var(--rule)}
@media (min-width:1024px){.fx-dock{margin-inline:0;padding-inline:0}}
html.fx-focus .nav{display:none}
html.fx-focus{--fx-safe:env(safe-area-inset-bottom,0px)}
@media (max-width:1023px){
  html.fx-focus .fx-dock:has(> #mprev){position:fixed;left:0;right:0;bottom:0;margin:0}
  html.fx-focus #app{padding-bottom:84px}
}
@media (min-width:1024px){html.fx-focus .nav{display:block}}
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
@media (prefers-reduced-motion:reduce){#plist.fx-one > .qcard.fx-cur{animation:none}.steps.fx-steps::after{transition:none}}
`;
  document.head.appendChild(css2);

  const esc2 = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  /** The tab bar's height when it sits at the bottom (a phone), 0 when it is the side bar or hidden; and the header's. */
  function measure(){
    const nav = document.querySelector(".nav"), top = document.querySelector(".top");
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

  /** Learn page: Continue card in place of the bar and button under the intro. */
  function front(){
    const hero = appEl.querySelector(".view > .hero"), list = appEl.querySelector(".lessons");
    if (!hero || !list) return;
    fold(hero.querySelector(":scope > p"));
    fold(appEl.querySelector(".view > .callout"));
    if (hero.dataset.fxFront) return;
    hero.dataset.fxFront = "1";
    const rows = [...appEl.querySelectorAll(".les")], done = rows.filter(r => r.classList.contains("done")).length;
    const next = appEl.querySelector(".les.next") || rows.find(r => !r.classList.contains("done"));
    let tried = 0, right = 0, total = 0;
    try { const ids = new Set(QS.map(q => q.id)); total = QS.length; Object.keys(S.ans || {}).forEach(k => { if (ids.has(k)) { tried++; if (S.ans[k] === 1) right++; } }); } catch (e) {}
    const pct = rows.length ? Math.round(done * 100 / rows.length) : 0;
    const name = next ? (next.querySelector(".t b") || next).childNodes[0].textContent.trim() : "";
    const num = next ? (next.querySelector(".no") || {}).textContent : "";
    const card = el("div", "fx-front",
      `<div class="fx-ring" style="--p:${pct}" role="img" aria-label="${done} of ${rows.length} lessons done"><span><b>${done}</b><small>of ${rows.length}</small></span></div>` +
      `<div class="fx-fr-tx"><span class="eyebrow">${next ? (done ? "Continue" : "Start") + (/^\d+$/.test(num) ? " · Lesson " + num : "") : "All lessons done"}</span>` +
      `<b>${next ? esc2(name) : "Every lesson is done"}</b>` +
      `<small>${total ? tried + " of " + total + " questions tried" + (tried ? " · " + Math.round(right * 100 / tried) + "% right" : "") : rows.length + " lessons"}</small></div>` +
      `<button type="button" class="btn pri fx-fr-go">${next ? (done ? "Continue ›" : "Start ›") : "Take a mock ›"}</button>`);
    card.querySelector(".fx-fr-go").onclick = () => { if (next) next.click(); else if (typeof go === "function") go("mock"); };
    hero.classList.add("fx-has-front");
    hero.after(card);
  }

  /** A lesson: the three steps as one pinned bar; done steps ticked; reading progress along its bottom edge. */
  function steps(){
    const st = appEl.querySelector(".steps");
    if (!st) return;
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
    const st = appEl.querySelector(".steps.fx-steps");
    if (!st) return;
    const learning = !!st.querySelector('[aria-current="step"][data-step="learn"]');
    const max = document.documentElement.scrollHeight - innerHeight;
    st.style.setProperty("--fx-read", learning ? (max > 0 ? Math.min(1, scrollY / max) : 1).toFixed(3) : (st.querySelector('[aria-current="step"][data-step="sum"]') ? 1 : 0));
  }

  /** Buttons in reach of a thumb, and a mock as a focus screen. */
  function docks(){
    [["#toquiz"], ["#lqnext"], ["#mprev"]].forEach(([sel]) => {
      const b = appEl.querySelector(sel), row = b && b.parentElement;
      if (row && !row.classList.contains("fx-dock")) row.classList.add("fx-dock");
    });
    const mock = !!appEl.querySelector("#mprev");
    root.classList.toggle("fx-focus", mock);
    const bar = appEl.querySelector(".mbar");
    if (mock && bar && !bar.querySelector(".fx-leave") && typeof showMockLeave === "function") {
      const b = el("button", "btn sm ghost fx-leave", "Leave");
      b.type = "button";
      b.title = "Leave the test (your answers are scored)";
      b.onclick = () => showMockLeave("learn");
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
