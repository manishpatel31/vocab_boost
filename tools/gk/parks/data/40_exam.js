/* The exam side of Protected Areas. */
const GROUPS = [{ id: "pa", name: "Protected Areas", hi: "संरक्षित क्षेत्र", note: "National parks, sanctuaries, tiger and biosphere reserves, Ramsar and World Heritage sites · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { pa: "‘Which state is this park / wetland / heritage site in?’ is the single commonest question. Recent additions to each list come next." };
const INTROS = { parks: {
  lead: "Everything SSC asks about India's protected places: wildlife laws and projects, national parks, sanctuaries, all 58 tiger reserves, the 18 biosphere reserves, Ramsar wetlands, UNESCO World Heritage sites, and which animal lives where.",
  tip: "Learn each place as a trio — name, state, animal (Kaziranga · Assam · rhino). The Lab's state decks drill exactly that.",
  order: "Start with Part 1 (parks and tiger reserves), then Part 2 (biosphere, Ramsar, heritage), then Part 3 (animals). Re-read the 'newest additions' in each lesson the week before your exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "P1", v: [2, 2, 2] }, { id: "P2", v: [3, 3, 3] }, { id: "P3", v: [2, 2, 2] }, { id: "P4", v: [3, 2, 3] },
    { id: "P5", v: [3, 3, 2] }, { id: "P6", v: [3, 3, 3] }, { id: "P7", v: [3, 3, 3] }, { id: "P8", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Protected-area questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Heritage-site questions also come under Art & Culture."
  },
  tips: [
    "<b>Place → state</b> is the commonest question. Watch the traps: Patna Bird Sanctuary is in UP, Rani-ki-Vav in Gujarat, Sanjay Gandhi NP in Mumbai.",
    "<b>Firsts, largest, smallest</b> come up every year: first park Corbett, largest Hemis; largest tiger reserve Nagarjunasagar-Srisailam, smallest Bor; first Ramsar Chilika and Keoladeo.",
    "<b>Counts change</b> — tiger reserves (58), biosphere reserves (18, 13 UNESCO), Ramsar (98 in Jan 2026, about 100 by mid-2026), heritage sites (44 in 2025). Check the latest number before the exam.",
    "<b>Learn the animal with the place</b> — most park questions are really 'which park is famous for this animal?'."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Counts are dated 'as of 2025–26'."
};
