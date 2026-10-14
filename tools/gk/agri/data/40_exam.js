/* The exam side of Agriculture. */
const GROUPS = [{ id: "ag", name: "Agriculture", hi: "कृषि", note: "Crop seasons, major crops and states, farming types, revolutions, irrigation, livestock, institutions and schemes · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { ag: "‘Which of these is a kharif / rabi crop?’, ‘which revolution is for X?’ and ‘which state leads in Y?’ are the three commonest questions. Schemes and institutions come next." };
const INTROS = { agri: {
  lead: "Everything SSC asks about Indian agriculture: kharif, rabi and zaid crops, what each crop needs and where it grows, shifting cultivation and the '-culture' words, the coloured revolutions and their fathers, irrigation projects, cattle and buffalo breeds, ICAR and NABARD, and schemes from PM-KISAN to e-NAM.",
  tip: "Learn each crop as a trio — season, climate, leading state (wheat · rabi, 50–75 cm · Uttar Pradesh). The Lab's decks drill exactly that.",
  order: "Start with Part 1 (seasons and crops), then the revolutions (R6) and schemes (R10), then the rest. Leading states are 2023–24 estimates — only stable leaders are quizzed."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS / GD", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "R1", v: [3, 3, 3] }, { id: "R2", v: [2, 3, 2] }, { id: "R3", v: [2, 2, 2] }, { id: "R4", v: [2, 2, 2] }, { id: "R5", v: [2, 2, 2] },
    { id: "R6", v: [3, 3, 3] }, { id: "R7", v: [2, 2, 2] }, { id: "R8", v: [2, 2, 2] }, { id: "R9", v: [2, 2, 2] }, { id: "R10", v: [3, 3, 3] }
  ],
  pattern: {
    title: "Where agriculture questions sit",
    head: ["Exam", "Section", "Agriculture questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Questions come under Geography and Economy, and schemes under current affairs."
  },
  tips: [
    "<b>Season questions</b> are the easiest marks: rice, maize, cotton, soybean, groundnut — kharif; wheat, barley, gram, mustard — rabi; melons — zaid.",
    "<b>Revolutions</b> are pure recall — white milk, blue fish, yellow oilseeds, round potato, silver eggs, golden fibre jute.",
    "<b>Leading states change</b> for some crops (rice, maize, coconut). Stable leaders: wheat and sugarcane — UP; bajra and mustard — Rajasthan; tea — Assam; coffee — Karnataka; rubber — Kerala; jute — West Bengal.",
    "<b>Schemes</b>: learn launch year and what each gives — PM-KISAN ₹6,000 (2019), PMFBY insurance (2016), Soil Health Card (2015), e-NAM (2016)."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Numbers are dated 'as of 2023–24 data' (checked October 2026)."
};
