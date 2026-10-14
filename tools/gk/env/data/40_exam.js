/* The exam side of Environment & Ecology. */
const GROUPS = [{ id: "en", name: "Environment & Ecology", hi: "पर्यावरण और पारिस्थितिकी", note: "Ecology, biodiversity, pollution, climate change, treaties and India's green story · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { en: "‘Which treaty deals with what’, ‘which metal causes which disease’ and ‘who coined the term’ are the commonest questions. The latest COP comes next." };
const INTROS = { environment: {
  lead: "Everything SSC asks about the environment: ecology terms, food chains and pyramids, nutrient cycles and biomes, biodiversity hotspots and the Red List, air, water and noise pollution and the diseases they cause, climate change and the ozone layer, every major treaty and COP, and India's green laws, missions and movements.",
  tip: "Learn in pairs — treaty + subject (Montreal · ozone), disease + cause (Minamata · mercury), term + coiner (ecosystem · Tansley). The Lab decks drill exactly those pairs.",
  order: "Start with Part 1 (ecology basics), then Part 2 (biodiversity and pollution), then Part 3 (climate, treaties and India). Re-read the COP lesson the week before your exam — it changes every year."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "E1", v: [2, 2, 2] }, { id: "E2", v: [3, 3, 3] }, { id: "E3", v: [2, 2, 2] }, { id: "E4", v: [3, 3, 2] }, { id: "E5", v: [3, 3, 3] },
    { id: "E6", v: [3, 3, 3] }, { id: "E7", v: [3, 3, 3] }, { id: "E8", v: [3, 3, 3] }, { id: "E9", v: [2, 2, 3] }, { id: "E10", v: [3, 3, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Environment questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–3", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–3", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–3", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Some environment questions are also counted under Biology, Chemistry or Geography."
  },
  tips: [
    "<b>Treaty → subject</b> is the commonest question: Montreal — ozone, Kyoto — greenhouse gases, Basel — hazardous waste, Cartagena — GM organisms, Ramsar — wetlands, CITES — wildlife trade.",
    "<b>Pollution diseases</b> come every year: Minamata — mercury, Itai-itai — cadmium, blue baby — nitrate, fluorosis — fluoride, black foot — arsenic.",
    "<b>Ecology basics</b>: 10% law (Lindeman), energy pyramid always upright, Haeckel coined ecology and Tansley ecosystem.",
    "<b>Things that change</b>: the latest COP (COP30 Belém 2025; COP31 Antalya, November 2026 as of October 2026), hotspot counts and India's targets. Check the news before the exam."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Dated facts are 'as of October 2026'."
};
