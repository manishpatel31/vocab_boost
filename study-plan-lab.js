/* Plan and Lab tabs for the hand-built subject apps (Polity, Economy, Biology, Space, Sports, Festivals, Folk Dances,
   Schemes, Reports, Appointments, IPR, Census, Intl Orgs, BNS). Loaded after the page's own script and study-games.js
   (tools/hand/plan-lab.js puts both tags in); it uses the page's own globals: LESSONS, QS, S, save, go, TAB, $, esc,
   shuffle, openLesson and the Practice filter PF.
   Plan: pick 3–15 days; each day says which lessons to read and quiz, with revision and mock days at the end. Lessons tick
   themselves when you finish them, mocks when you take one; the rest you tick. Saved in S.plan.
   Lab: one 60-second game per lesson, made from that lesson's own tables (first column → second column, and back when the
   answers are unique), a Grand Mix and a Memory Match, played by study-games.js. XP is saved in S.lab. */
"use strict";
(function(){
  if (typeof LESSONS === "undefined" || typeof go !== "function" || !document.querySelector(".nav-in")) return;
  const strip = h => String(h == null ? "" : h).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ").replace(/&minus;/g, "−").replace(/&[a-z]+;/g, "").replace(/\s+/g, " ").trim();
  const ICO = ["🎯", "🧠", "⚡", "🔍", "🧩", "📌", "🏁", "💡", "🔑", "🗂️", "🎲", "🪄"];

  /* ---------- Lab decks from the lessons' tables ---------- */
  const decks = [];
  LESSONS.forEach((l, li) => {
    const items = [], pairs = [];
    (l.blocks || []).filter(b => (b.k === "table" || b.k === "facts") && Array.isArray(b.rows) && b.rows.length >= 4).forEach(b => {
      const head = (b.head || []).map(strip), title = strip(b.title);
      if (/\bask(s|ed)?\b|how often|exam pattern|weightage/i.test(title + " " + (head[1] || ""))) return;      // tables about the exam, not the subject
      const word = /[A-Za-z0-9\u0900-\u097F]/;      // rows that are only symbols (a ★★★ legend) make no question
      const rows = b.rows.map(r => [strip(r[0]), strip(r[1])]).filter(r => word.test(r[0]) && word.test(r[1]) && r[0].length <= 70 && r[1].length <= 46);
      const ans = new Set(rows.map(r => r[1]));
      if (rows.length < 4 || ans.size < 4) return;
      // the table's title goes in front of every question, so "Charter signed?" says which organisation
      const what = head[1] ? head[1].toLowerCase() : "", cut = (t, n) => t.length > n ? t.slice(0, n - 2).replace(/\s+\S*$/, "") + "…" : t;
      const ctx = title.length < 14 ? cut(strip(l.title), 32) + " · " + title : cut(title, 44);      // "Basics" alone says nothing
      rows.forEach(r => {
        items.push({ p: `${ctx} · ${r[0]}${what ? " — " + what : ""}?`, a: r[1], note: title, pool: title + "|a" });
        pairs.push([r[0], r[1], title]);
      });
      // the other way round, when every answer belongs to one row
      if (ans.size === rows.length && head[0] && rows.every(r => r[0].length <= 46))
        rows.forEach(r => items.push({ p: `${ctx} · which ${head[0].toLowerCase()}: ${r[1]}?`, a: r[0], note: title, pool: title + "|p" }));
    });
    if (items.length >= 6) decks.push({ id: "l" + l.id, ico: ICO[li % ICO.length], title: strip(l.title), sub: `${pairs.length} facts from the lesson's tables`,
      lesson: l.id, q: "", pairs, make: () => items.slice() });
  });
  if (decks.length) {
    const short = decks.map(d => ({ d, n: d.pairs.filter(p => p[0].length <= 24 && p[1].length <= 24).length })).sort((a, b) => b.n - a.n)[0];
    window.LAB_CONF = {
      title: (typeof APP !== "undefined" && APP.brand ? APP.brand.replace(/ PYQ Workbook$| Workbook$/, "") + " " : "") + "Lab",
      blurb: "One quick game per lesson, made from its own tables. Read the lesson first, then play until each answer comes in about three seconds. Every right answer earns XP.",
      decks: decks.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Every lesson at once — the real exam feel", q: "",
        make: () => shuffle(decks.flatMap(d => shuffle(d.make()).slice(0, 8))), list: () => decks.flatMap(d => d.pairs) }]),
      match: short && short.n >= 6 ? { deck: short.d.id, title: "Pair them up: " + short.d.title, sub: "Flip the cards and match each pair from " + short.d.title } : null
    };
    // Memory Match needs short cards: the match deck keeps its short pairs for the cards and lists every pair
    const md = window.LAB_CONF.match && decks.find(d => d.id === window.LAB_CONF.match.deck);
    if (md) { const full = md.pairs.slice(); md.list = () => full; md.pairs = full.filter(p => p[0].length <= 24 && p[1].length <= 24); }
  }
  const HAS_LAB = !!window.LAB_CONF && typeof renderLab === "function";

  /* ---------- Plan ---------- */
  const DAYS = [3, 5, 7, 10, 15].filter(n => n <= LESSONS.length * 2 + 3);
  const lesDone = id => !!(S.les[id] && S.les[id].done);
  function planDays(days){
    const tail = days >= 10 ? 2 : days >= 5 ? 1 : 0, study = days - tail, per = Math.ceil(LESSONS.length / study), out = [];
    for (let d = 0; d < study; d++) {
      const ls = LESSONS.slice(d * per, (d + 1) * per), tasks = [];
      ls.forEach(l => tasks.push({ k: "les", id: l.id, label: "Read and quiz: " + strip(l.title), sub: "Learn, then the end-of-lesson quiz" }));
      if (ls.length) tasks.push({ k: "prac", id: "p" + d, label: "Practise today's lessons once more", sub: "Practice → pick the lesson", go: ls[0].id });
      else tasks.push({ k: "prac", id: "p" + d, label: "Catch up, then clear your mistakes", sub: "Practice → Mistakes", go: "wrong" });
      out.push({ title: ls.length ? ls.map(l => "L" + (LESSONS.indexOf(l) + 1)).join(" + ") : "Catch-up", tasks });
    }
    if (tail >= 2) out.push({ title: "Mock day", tasks: [{ k: "mock", id: "m1", label: "A 25-question mock, timed", sub: "Mock tab" },
      { k: "prac", id: "w1", label: "Go through every mistake it throws up", sub: "Practice → Mistakes", go: "wrong" }] });
    if (tail >= 1) out.push({ title: "The day before", tasks: [{ k: "rev", id: "r1", label: "Revise tab, top to bottom", sub: "Summaries, rankers and flashcards" },
      { k: "mock", id: "m2", label: "One last mock", sub: "Then rest" }] });
    return out;
  }
  const dayNo = p => Math.min(p.days, Math.max(1, Math.floor((Date.now() - p.start) / 864e5) + 1));
  function taskDone(p, t, mockIx){
    if (t.k === "les") return lesDone(t.id);
    if (t.k === "mock" && (S.mocks || []).length - (p.m0 || 0) > mockIx) return true;
    return !!p.done[t.id];
  }
  function renderPlan(){
    const p = S.plan && DAYS.includes(S.plan.days) ? S.plan : null;
    if (!p) {
      $("#app").innerHTML = `<section class="view stack">
        <div class="hero"><span class="eyebrow">Study plan</span><h1>How many days do you have?</h1>
          <p>Pick a length and you get what to read, quiz and practise each day, with revision and a mock at the end. Lessons you finish tick themselves, and so does a mock when you take one.</p>
          <div class="row" style="flex-wrap:wrap;gap:8px">${DAYS.map(n => `<button class="btn ${n === 7 ? "pri" : ""}" type="button" data-days="${n}">${n} days</button>`).join("")}</div></div>
        <p class="muted" style="font-size:14px">${LESSONS.length} lessons · ${QS.length} questions. A shorter plan puts more lessons on each day; nothing is dropped.</p></section>`;
      $("#app").querySelectorAll("[data-days]").forEach(b => b.onclick = () => { S.plan = { days: +b.dataset.days, start: new Date().setHours(0, 0, 0, 0), done: {}, m0: (S.mocks || []).length }; save(); renderPlan(); });
      return;
    }
    const days = planDays(p.days), today = dayNo(p);
    let mockIx = 0, all = 0, done = 0;
    const html = days.map((d, i) => {
      const rows = d.tasks.map(t => { const ok = taskDone(p, t, t.k === "mock" ? mockIx++ : 0); all++; if (ok) done++;
        return `<li class="pl-t${ok ? " ok" : ""}"><button type="button" class="pl-c" data-tick="${t.id || ""}" data-k="${t.k}" aria-pressed="${ok}" ${t.k === "les" || t.k === "mock" ? "disabled" : ""} aria-label="${ok ? "Done" : "Not done"}">${ok ? "✓" : ""}</button>
          <button type="button" class="pl-go" data-go-k="${t.k}" data-go-v="${esc(t.k === "les" ? t.id : t.go || "")}"><b>${esc(t.label)}</b><small>${esc(t.sub)}</small></button></li>`; }).join("");
      const n = i + 1, left = d.tasks.length;
      return `<details class="block pl-day${n === today ? " now" : ""}" ${n === today ? "open" : ""}><summary><span class="pl-n">Day ${n}</span><span class="pl-s">${esc(d.title)}</span>${n === today ? `<span class="pl-today">Today</span>` : ""}</summary><ul class="pl-list">${rows}</ul></details>`;
    }).join("");
    $("#app").innerHTML = `<section class="view stack">
      <div class="hero"><span class="eyebrow">${p.days}-day plan · started ${new Date(p.start).toLocaleDateString([], { day: "numeric", month: "short" })}</span><h1>Day ${today} of ${p.days}</h1>
        <div class="meter" aria-label="Plan tasks done"><i style="width:${all ? done / all * 100 : 0}%"></i></div>
        <div class="row between"><span class="muted num" style="font-size:13px">${done}/${all} tasks done</span><button class="btn sm" type="button" id="pchg">Change plan</button></div></div>
      ${html}
      <p class="muted" style="font-size:13px">“Today” is counted from the day you started, so a missed day stays visible instead of quietly disappearing.</p></section>`;
    $("#app").querySelectorAll("[data-tick]").forEach(b => b.onclick = () => { if (b.disabled) return; const id = b.dataset.tick; p.done[id] = !p.done[id]; save(); renderPlan(); });
    $("#app").querySelectorAll("[data-go-k]").forEach(b => b.onclick = () => {
      const k = b.dataset.goK, v = b.dataset.goV;
      if (k === "les") return openLesson(v, "learn");
      if (k === "mock") return go("mock");
      if (k === "rev") return go("revise");
      try { PF = v === "wrong" ? "wrong" : v; PORDER = null; } catch(e) {}
      go("practice");
    });
    $("#pchg").onclick = () => { if (confirm("Change the plan? Your ticks on this plan will be cleared.")) { S.plan = null; save(); renderPlan(); } };
  }

  /* ---------- styles, nav buttons and routing ---------- */
  const st = document.createElement("style");
  st.textContent = `.pl-day summary{display:flex;align-items:center;gap:10px;cursor:pointer;list-style:none}.pl-day summary::-webkit-details-marker{display:none}
.pl-n{font-weight:700;min-width:52px}.pl-s{flex:1;color:var(--ink2);font-size:14px;overflow-wrap:anywhere}.pl-today{font-size:12px;font-weight:700;color:var(--blue);border:1px solid var(--blue);border-radius:99px;padding:1px 8px}
.pl-day.now{border-color:var(--blue)}.pl-list{list-style:none;margin:10px 0 0;padding:0;display:flex;flex-direction:column;gap:8px}
.pl-t{display:flex;gap:10px;align-items:flex-start}.pl-c{flex:none;width:26px;height:26px;border-radius:8px;border:1.5px solid var(--rule);background:var(--sheet);color:#fff;font-weight:800;cursor:pointer}
.pl-c:disabled{cursor:default}.pl-t.ok .pl-c{background:var(--accent);border-color:var(--accent)}
.pl-go{flex:1;text-align:left;background:none;border:0;padding:0;font:inherit;color:var(--ink);cursor:pointer;display:flex;flex-direction:column;gap:2px}
.pl-go small{color:var(--ink2);font-size:13px}.pl-t.ok .pl-go b{text-decoration:line-through;text-decoration-color:var(--ink2)}`;
  document.head.appendChild(st);
  const ICON = {
    lab: '<path d="M9 3h6M10 3v6.5L4.6 18.4A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.4-2.6L14 9.5V3"/><path d="M7.5 15h9"/>',
    plan: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 15l2 2 4-4"/>'
  };
  const nav = document.querySelector(".nav-in"), rev = nav.querySelector('[data-tab="revise"]');
  const add = (tab, label, before) => { if (nav.querySelector(`[data-tab="${tab}"]`)) return;
    const b = document.createElement("button"); b.type = "button"; b.id = "nav-" + tab; b.dataset.tab = tab;
    b.innerHTML = `<svg viewBox="0 0 24 24">${ICON[tab]}</svg><span>${label}</span>`;
    nav.insertBefore(b, before); b.addEventListener("click", () => {
      if (TAB === "mock" && typeof M !== "undefined" && M && M.running) { go("mock"); showMockLeave(tab); return; }
      go(tab); }); };
  if (HAS_LAB) add("lab", "Lab", rev);
  add("plan", "Plan", null);
  const base = go;
  go = function(tab){
    if (TAB === "lab" && tab !== "lab" && typeof leaveLab === "function") leaveLab();
    if (tab !== "plan" && !(tab === "lab" && HAS_LAB)) return base(tab);
    TAB = tab;
    document.querySelectorAll(".nav button").forEach(b => b.setAttribute("aria-current", b.dataset.tab === tab ? "page" : "false"));
    if (tab === "plan") renderPlan(); else { LAB.view = "home"; renderLab(); }
    window.scrollTo(0, 0);
    try { history.replaceState(null, "", "#" + tab); } catch(e) {}
  };
  const start = (location.hash || "").replace("#", "");
  if (start === "plan" || (start === "lab" && HAS_LAB)) go(start);
})();

/* keyboard shortcuts and answer feedback, shared by every mini app (study-keys.js; tools/stamp.js sets its ?v=) */
(function(){ if (window.__studyKeys || document.querySelector("script[data-study-keys]")) return; const s = document.createElement("script"); s.src = "study-keys.js?v=c97dabb7"; s.dataset.studyKeys = ""; document.head.appendChild(s); })();
