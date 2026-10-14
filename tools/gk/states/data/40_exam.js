/* The exam side of States & UTs at a Glance. */
const GROUPS = [{ id: "su", name: "States & UTs", hi: "राज्य और केंद्रशासित प्रदेश", note: "Capitals, formation years, high courts, languages, records, borders and state symbols · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { su: "‘X is the capital of which state?’ and ‘which state was formed in year Y / carved out of Z?’ are the commonest. Records (largest, smallest, most populous) and high-court seats come next." };
const INTROS = { states: {
  lead: "All 28 states and 8 Union Territories the way SSC asks about them: capitals (with summer, winter and second capitals), when each state was born and what it was carved from, the 1956 reorganisation and the 2019–20 changes, zonal councils, high courts and benches, official languages, records, borders, nicknames and state animals and birds.",
  tip: "Learn each state as a card — capital · born · carved from · high court · one nickname (Uttarakhand · Dehradun/Gairsain · 2000 · from UP · Nainital · Devbhoomi). The Lab’s Capitals and Which-State decks drill exactly that.",
  order: "Start with Part 1 (the history of the map, then the north and centre), go round the country in Part 2, and finish with Part 3 (UTs, high courts, records). Revise the ‘high court not in the capital’ list and the UT changes the week before your exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "S1", v: [3, 2, 3] }, { id: "S2", v: [2, 2, 2] }, { id: "S3", v: [2, 2, 2] }, { id: "S4", v: [2, 2, 2] }, { id: "S5", v: [3, 3, 3] },
    { id: "S6", v: [2, 2, 2] }, { id: "S7", v: [3, 2, 3] }, { id: "S8", v: [3, 3, 3] }, { id: "S9", v: [2, 2, 2] }, { id: "S10", v: [3, 3, 3] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "States-and-UTs questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Many of these questions are also filed under Geography or Polity."
  },
  tips: [
    "<b>Capital → state</b> and <b>state → capital</b> are the easiest marks: Shimla, Raipur, Patna and Lucknow have all been asked word for word in SSC CHSL.",
    "<b>Formation years</b> come in chains: 1953 Andhra, 1956 SRC Act, 1960 Gujarat/Maharashtra, 1963 Nagaland, 1966 Haryana, 1975 Sikkim, 1987 Goa, 2000 three states, 2014 Telangana.",
    "<b>Counts change</b>: 28 states and 8 UTs since 26 January 2020; 25 high courts (as of 2026); Port Blair is now Sri Vijaya Puram.",
    "<b>Census records</b> are from 2011 — the next census figures may change them, so watch the news before your exam."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Facts dated 'as of October 2026'."
};
