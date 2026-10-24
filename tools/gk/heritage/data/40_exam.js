/* The exam side of UNESCO Heritage & Monuments of India. */
const GROUPS = [{ id: "hm", name: "Heritage & Monuments", hi: "धरोहर एवं स्मारक", note: "India's World Heritage sites, monuments and their builders, famous temples, intangible heritage · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { hm: "The commonest forms are ‘who built monument X?’, ‘site X is in which state?’, ‘which was the latest site / intangible element?’ and ‘which dynasty built temple X?’." };
const INTROS = { heritage: {
  lead: "India's 45 World Heritage sites (as of October 2026) group by group — what each is, where it is, who built it and when it was listed — then the monuments SSC asks about, famous temples and their styles, the 16 intangible heritage elements, the Memory of the World entries and the Creative Cities.",
  tip: "Learn each site as a trio — place, builder, year — and say it aloud: “Ramappa, Telangana, Kakatiyas, 2021.” Then play the Lab decks until the state and builder come without thinking.",
  order: "Start with how the list works and the latest additions in Part 1, go site by site through Parts 1 and 2, and finish with builders, temples, intangible heritage and the mixed revision in Part 3."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "H1", v: [2, 2, 2] }, { id: "H2", v: [2, 2, 2] }, { id: "H3", v: [2, 2, 2] }, { id: "H4", v: [3, 2, 3] }, { id: "H5", v: [2, 1, 2] },
    { id: "H6", v: [1, 1, 1] }, { id: "H7", v: [3, 3, 3] }, { id: "H8", v: [2, 2, 2] }, { id: "H9", v: [2, 2, 2] },
    { id: "H10", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Heritage and monument questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 0–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Usually filed under Art &amp; Culture or Static GK."
  },
  tips: [
    "<b>Monument → builder</b> is the classic: Charminar, Gol Gumbaz, Hawa Mahal, Buland Darwaza, Qutb Minar, Brihadisvara, Konark.",
    "<b>Site → state</b> and the <b>latest additions</b> come next: Sarnath (2026), Maratha Military Landscapes (2025), Moidams (2024), Santiniketan and Hoysala temples (2023).",
    "<b>Intangible heritage</b>: know the 16 elements and the latest — Deepavali (December 2025).",
    "<b>Counts change</b> every July (sites) and December (intangible elements) — check the latest number before your exam."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Facts dated 'as of October 2026'."
};
