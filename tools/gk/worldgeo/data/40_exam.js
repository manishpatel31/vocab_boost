/* The exam side of World Geography. */
const GROUPS = [{ id: "wg", name: "World Geography", hi: "विश्व भूगोल", note: "Continents, capitals, currencies, peaks, rivers, straits, boundary lines, nicknames and tribes · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { wg: "Short one-liners: ‘capital / currency of X’, ‘which strait separates X and Y’, ‘which line divides X and Y’, ‘largest / longest / highest’. Learn pairs, not paragraphs." };
const INTROS = { worldgeo: {
  lead: "All the world geography SSC asks as static GK: continents and oceans, capitals and currencies, parliaments and flags, peaks and ranges, rivers and river cities, lakes, waterfalls, deserts and grasslands, straits, canals and islands, boundary lines, nicknames and tribes.",
  tip: "Almost every question is a pair — country ↔ capital, strait ↔ two lands, line ↔ two countries. Drill the pairs in the Lab both ways until they are instant.",
  order: "Start with Part 1 (capitals and currencies — the most asked), then Part 3 (straits, canals, boundary lines, nicknames), then Part 2 (mountains, rivers, grasslands). Revise the 'records' facts the week before your exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "W1", v: [2, 3, 3] }, { id: "W2", v: [2, 3, 3] }, { id: "W3", v: [2, 3, 3] }, { id: "W4", v: [1, 2, 2] }, { id: "W5", v: [2, 2, 2] },
    { id: "W6", v: [2, 2, 2] }, { id: "W7", v: [1, 2, 2] }, { id: "W8", v: [2, 2, 2] }, { id: "W9", v: [3, 3, 3] }, { id: "W10", v: [3, 3, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "World-geography questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–3", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–3", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Physical geography (rocks, winds, currents) and Indian geography are counted separately."
  },
  tips: [
    "<b>Capitals and currencies</b> come up most in MTS, CHSL and GD. Watch the traps: Canberra, Ottawa, Ankara, Abu Dhabi; Rupiah vs Rufiyaa.",
    "<b>Straits and lines</b> are CGL favourites: Palk, Gibraltar, Bering, Hormuz; Durand, McMahon, Radcliffe, 38th and 49th Parallel.",
    "<b>Records</b> — largest, longest, highest, deepest — are easy marks: Pacific, Nile, Everest, Mariana Trench, Caspian, Angel Falls, Greenland.",
    "<b>Some names change</b> — Astana (Nur-Sultan 2019–22), Türkiye, Denali/Mount McKinley, the Euro's new members. Check the latest before the exam."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Facts are as of October 2026."
};
