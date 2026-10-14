/* The exam side of Defence. */
const GROUPS = [{ id: "df", name: "Defence", hi: "रक्षा", note: "Armed forces, weapons, operations and exercises · SSC CGL, CHSL, MTS, RRB NTPC, CAPF" }];
const ERANOTE = { df: "Joint exercises (and their partner countries) are the single most asked defence topic; operations and missiles come next." };
const INTROS = { defence: {
  lead: "India's armed forces in one place: mottos, academies, commands, ranks and gallantry awards, the paramilitary forces, missiles and ships, operations from Polo to Sindoor, and every joint exercise with its partner.",
  tip: "Exercise questions are pure recall: play the Exercise Partners decks daily for a week. For operations, link the name to its story (Meghdoot — clouds — Siachen).",
  order: "Start with Part 3 (exercises) — it gives the most marks — then operations and missiles, then the forces themselves."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "F1", v: [2, 2, 2] }, { id: "F2", v: [1, 1, 1] }, { id: "F3", v: [2, 2, 2] }, { id: "F4", v: [2, 2, 2] }, { id: "F5", v: [2, 2, 3] },
    { id: "F6", v: [2, 2, 2] }, { id: "F7", v: [3, 3, 3] }, { id: "F8", v: [2, 2, 2] }, { id: "F9", v: [3, 3, 3] }
  ],
  pattern: {
    title: "Where defence questions sit",
    head: ["Exam", "Section", "Defence questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS", "General Awareness", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. CAPF and CDS papers ask more."
  },
  tips: [
    "<b>Exercise → partner country</b> is the commonest question. Learn the name's clue (Nomadic → Mongolia, Harimau → Malaysia, Dustlik → Uzbekistan).",
    "<b>Mind the look-alikes</b>: Garuda (air, France) vs Garuda Shakti (army, Indonesia); Shakti (France) vs Mitra Shakti (Sri Lanka).",
    "<b>Current affairs asks the latest edition</b> — its number and venue. Check the news of the last six months before your exam.",
    "<b>Service chiefs change</b> — this app doesn't quiz on who holds each post right now; read the latest names in the news before the exam."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Recent editions are dated 'as of October 2026'."
};
