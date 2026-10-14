/* The exam side of Awards & Honours. */
const GROUPS = [{ id: "aw", name: "Awards & Honours", hi: "पुरस्कार और सम्मान", note: "Bharat Ratna, Padma, literary, film, sports and world awards · SSC CGL, CHSL, MTS, RRB NTPC" }];
const ERANOTE = { aw: "Static questions ask what an award is and who gave it first; current-affairs questions ask the latest winner. Learn both." };
const INTROS = { awards: {
  lead: "Every award SSC asks about and why it matters: Bharat Ratna and Padma, Jnanpith and Sahitya Akademi, Phalke and National Film Awards, Khel Ratna and Dronacharya, the Nobel and its Indian laureates, and the world prizes with their nicknames.",
  tip: "For each award learn three things: who gives it, what it is for, and the first and latest winner. The Lab decks drill exactly that.",
  order: "Start with Part 1 (national honours), then Part 3 (Nobel and world awards), then Part 2 (film and sport). Read Lesson A8 again in the week of your exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "A1", v: [3, 3, 3] }, { id: "A2", v: [3, 3, 2] }, { id: "A3", v: [2, 2, 2] }, { id: "A4", v: [2, 2, 2] },
    { id: "A5", v: [3, 3, 3] }, { id: "A6", v: [2, 2, 2] }, { id: "A7", v: [2, 1, 2] }, { id: "A8", v: [3, 3, 3] }
  ],
  pattern: {
    title: "Where award questions sit",
    head: ["Exam", "Section", "Award questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS", "General Awareness", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–3", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts."
  },
  tips: [
    "<b>Firsts are favourites</b>: first Bharat Ratna (1954 — Rajagopalachari, Radhakrishnan, C. V. Raman), first Phalke (Devika Rani), first Jnanpith (G. Sankara Kurup).",
    "<b>Know who gives it</b>: Sahitya Akademi (Ministry of Culture body), Jnanpith (Bharatiya Jnanpith trust), Magsaysay (Philippines), Kalinga (UNESCO).",
    "<b>Sports awards renamed</b>: Khel Ratna became the Major Dhyan Chand Khel Ratna in 2021.",
    "<b>Latest winners change every year</b> — check the news for the newest Nobel, Booker, Padma and sports awards before your exam."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Recent winners are dated 'as of October 2026'."
};
