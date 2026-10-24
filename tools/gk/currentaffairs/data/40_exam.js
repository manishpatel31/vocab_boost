/* The exam side of Current Affairs 2026 · Month by Month.
   This file loads after the month files (data/2026_01.js … data/2026_12.js sort before 40_exam.js), so it can read
   LESSONS. It needs no change when a month is added: the heat of every lesson and the heat-map rows are worked out
   here from the months that exist. Heat is about recency: the latest three months get 3, older months 2. */
const CA_MONTH = id => +String(id).replace(/\D/g, '');
const CA_LATEST = LESSONS.reduce((m, l) => Math.max(m, CA_MONTH(l.id)), 0);
const CA_HEAT = id => (CA_LATEST - CA_MONTH(id) < 3 ? 3 : 2);
LESSONS.forEach(l => { l.heat = CA_HEAT(l.id); });

const GROUPS = [{ id: "ca", name: "Current Affairs 2026", hi: "समसामयिकी 2026", note: "One lesson per month of 2026 — national, international, economy, science and defence, sports, awards, appointments, places and persons, obituaries · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { ca: "SSC asks current affairs from roughly the last six to twelve months before a paper, most of all the last three: who was appointed, who won, where a summit was held, what was launched and when." };
const INTROS = { currentaffairs: {
  lead: "The year 2026 month by month, the way SSC asks it: one lesson per month, each with the month in two minutes, then tables for national news, the world, the economy, science and defence, sports, awards, appointments, places and persons in the news, and obituaries. Every fact was checked against official or major news sources, which are listed at the end of each month.",
  tip: "Read the newest month first, then play its decks in the Lab until each answer comes in about three seconds. Dates matter: say the date aloud with the fact.",
  order: "Start with the latest month and work backwards — recent months are asked most. Each month stands alone, so you can do them in any order."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: LESSONS.slice().sort((a, b) => CA_MONTH(a.id) - CA_MONTH(b.id)).map(l => ({ id: l.id, v: [l.heat, l.heat, l.heat] })),
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Current-affairs questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 3–6", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 3–6", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 5–10", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Many current-affairs questions are filed under sports, awards, appointments or schemes."
  },
  tips: [
    "<b>Recency wins</b>: most current-affairs questions come from the six months before the paper, and the last three months most of all.",
    "<b>Who, where, which</b>: appointments, winners and host cities are the commonest forms — learn the name with the post or the place.",
    "<b>Numbers and editions</b>: the 29th chief, the 20th edition, the 100th rank — the number is often the question.",
    "<b>Check before the exam</b>: posts and records change. Re-check anything older than a month."
  ],
  note: "How the heat map is made: it is about recency, not a count of questions. The latest three months in the app get three dots and older months two, because papers lean on the most recent news. Facts are dated as checked at the end of each month's lesson."
};
