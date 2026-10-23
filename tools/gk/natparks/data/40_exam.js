/* The exam side of National Parks of India. */
const GROUPS = [{ id: "np", name: "National Parks", hi: "राष्ट्रीय उद्यान", note: "Every national park, state by state, with its animal and its records · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { np: "‘Park X is in which state?’ is by far the commonest, then ‘which park is famous for animal Y?’ and the records (first, largest, smallest, floating)." };
const INTROS = { natparks: {
  lead: "All of India's national parks — about 106 — state by state, the way SSC asks about them: which state each is in, the animal it protects, the records (first, largest, smallest, floating), the World Heritage parks and the news (Project Cheetah, new and renamed parks). Each region has its own map, and Revise has a Map quiz.",
  tip: "Learn by region on the map: say the parks of a state aloud as you tap it in Revise → State map, then take the Map quiz until you can place every park.",
  order: "Start with the records in Part 1 and the north, go round the country in Part 2, and finish with the south, the islands, the animal pairs and the news in Part 3."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "N1", v: [3, 3, 3] }, { id: "N2", v: [3, 2, 3] }, { id: "N3", v: [3, 3, 3] }, { id: "N4", v: [3, 3, 3] }, { id: "N5", v: [2, 2, 2] },
    { id: "N6", v: [3, 3, 3] }, { id: "N7", v: [3, 2, 3] }, { id: "N8", v: [2, 1, 2] }, { id: "N9", v: [3, 3, 3] }, { id: "N10", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "National-park questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–1", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Often filed under Environment or Geography."
  },
  tips: [
    "<b>Park → state</b> is the easiest mark: Dachigam, Keibul Lamjao, Namdapha, Bhitarkanika, Eravikulam, Silent Valley and Valmiki repeat across shifts.",
    "<b>Animal → park</b> pairs come next: lion–Gir, rhino–Kaziranga, sangai–Keibul Lamjao, hangul–Dachigam, barasingha–Kanha.",
    "<b>Records</b>: first (Corbett, 1936), largest (Hemis), smallest (South Button), floating (Keibul Lamjao), most (Madhya Pradesh).",
    "<b>Counts change</b>: new parks are notified now and then — check the latest number before your exam."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Facts dated 'as of October 2026'."
};
