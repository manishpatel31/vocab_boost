/* The exam side of Rivers of India. */
const GROUPS = [{ id: "rv", name: "Rivers of India", hi: "भारत की नदियाँ", note: "Sources, tributaries, cities, dams, waterfalls, landforms, disputes and waterways · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { rv: "‘Where does river X rise?’, ‘which river is Y on?’ and ‘X is a tributary of …’ are the commonest. Dams, waterfalls, the Indus Waters Treaty and water disputes come next." };
const INTROS = { rivers: {
  lead: "Every river SSC asks about, the way it is asked: where it rises, which way it flows, its tributaries and distributaries, the cities, dams and waterfalls on it, the landforms rivers make, and the disputes, river links and waterways in the news — with live river maps where the water flows downstream.",
  tip: "Learn each river as a card — source · direction · big tributaries · one city · one dam (Godavari · Trimbakeshwar · east · Pranhita, Indravati · Nashik · Polavaram). Then trace it on the map in Revise → River quiz.",
  order: "Start with Part 1 (the big picture, then Indus, Ganga and Brahmaputra), do the peninsula in Part 2, and finish with dams, landforms and disputes in Part 3. Revise the dam and waterfall tables the week before your exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "R1", v: [3, 3, 3] }, { id: "R2", v: [3, 2, 3] }, { id: "R3", v: [3, 2, 2] }, { id: "R4", v: [3, 3, 3] }, { id: "R5", v: [2, 2, 2] },
    { id: "R6", v: [3, 2, 3] }, { id: "R7", v: [3, 3, 3] }, { id: "R8", v: [3, 3, 3] }, { id: "R9", v: [2, 2, 2] }, { id: "R10", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "River questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Many river questions are filed under Indian Geography."
  },
  tips: [
    "<b>Source and tributary</b> questions are the easiest marks: Trimbakeshwar, Mahabaleshwar, Talakaveri, Amarkantak; Indravati → Godavari, Tungabhadra → Krishna.",
    "<b>Dam → river</b> and <b>waterfall → river</b> pairs repeat across shifts — learn them as one list.",
    "<b>Direction</b> catches people out: Narmada and Tapi flow west; the Son flows north to the Ganga; the Luni never reaches the sea.",
    "<b>News</b>: Indus Waters Treaty in abeyance (April 2025), the Ken–Betwa link (December 2024), Namami Gange — check the latest before your exam."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Facts dated 'as of October 2026'; river lengths are the commonly quoted round figures."
};
