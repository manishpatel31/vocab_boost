/* The exam side of Chemistry: where the marks are, the pattern, how to score, and the intro. */
const GROUPS = [{ id: "chem", name: "Chemistry", hi: "रसायन विज्ञान", note: "General Science · SSC CGL, CHSL, MTS, RRB NTPC and Group D" }];

const ERANOTE = { chem: "Common names and formulas, acids in food, ores and alloys, and the atom's discoverers bring the most marks — they are pure recall." };

const INTROS = { chemistry: {
  lead: "All the chemistry SSC and Railway papers ask, from the states of matter to radioactivity, told as short stories first and then as tables, tricks and traps — with a Lab of games to make the facts stick.",
  tip: "Chemistry questions in these exams are mostly one-line facts. Read a lesson's story, then play its game in the Lab until you can answer in under three seconds; that speed is what the exam needs.",
  order: "Go in order: Part 1 builds the basics (atom, periodic table), Part 2 the reactions and compounds that carry the most marks, Parts 3 and 4 the everyday and environment chemistry."
} };

/* Lessons × exams. 3 = almost every paper, 2 = often, 1 = now and then.
   These are estimates from the official syllabus and published shift analyses, not question counts. */
const HEATMAP = {
  cols: [
    { label: "SSC CGL", sub: "Tier 1 · in GA" },
    { label: "SSC CHSL / MTS", sub: "in GA" },
    { label: "RRB NTPC", sub: "CBT · in GA" },
    { label: "RRB Group D", sub: "General Science" }
  ],
  rows: [
    { id: "K1", v: [1, 2, 2, 3] }, { id: "K2", v: [2, 2, 2, 3] }, { id: "K3", v: [2, 2, 2, 3] }, { id: "K4", v: [2, 2, 2, 3] },
    { id: "K5", v: [1, 1, 1, 3] }, { id: "K6", v: [1, 2, 2, 3] }, { id: "K7", v: [3, 3, 3, 3] }, { id: "K8", v: [2, 2, 2, 3] },
    { id: "K9", v: [3, 3, 3, 3] }, { id: "K10", v: [2, 2, 2, 2] }, { id: "K11", v: [2, 2, 2, 3] }, { id: "K12", v: [2, 2, 2, 2] },
    { id: "K13", v: [2, 2, 2, 2] }, { id: "K14", v: [2, 2, 2, 2] }, { id: "K15", v: [1, 1, 1, 2] }, { id: "K16", v: [2, 2, 2, 2] },
    { id: "K17", v: [2, 2, 2, 2] }, { id: "K18", v: [2, 2, 2, 2] }
  ],
  pattern: {
    title: "Where chemistry sits in each paper",
    head: ["Exam", "Section", "Science questions", "Chemistry share", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 3–6", "About 1–3", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS", "General Awareness", "About 3–6", "About 1–3", "2 each, &minus;0.5 (MTS: as per its notice)"],
      ["RRB NTPC", "General Awareness", "About 4–8", "About 1–3", "1 each, &minus;1/3 per wrong"],
      ["RRB Group D", "General Science (25 Q)", "25", "About 7–9", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Numbers are typical ranges from published shift-wise analyses, not fixed counts — confirm the pattern in your exam's latest notice."
  },
  tips: [
    "<b>Recall beats reasoning here.</b> Almost every chemistry question is a one-line fact: a formula, a common name, an ore, a discoverer. Learn the Last-moment cards until each answer comes in three seconds.",
    "<b>Do the high-yield five first:</b> common names and formulas, acids in food and pH, metals and the reactivity series, ores and alloys, and the atom's discoverers.",
    "<b>Learn the traps as pairs.</b> Baking soda vs washing soda, isotope vs isobar, roasting vs calcination, galvanising vs tinning — papers set one against the other.",
    "<b>For RRB Group D</b> chemistry is about a third of General Science and follows the NCERT class 9–10 books: also do the reactions, the periodic trends and the mole lesson.",
    "<b>Play, then test.</b> Use the Lab games for speed, then a Mock to check you can do it under time and negative marking."
  ],
  note: "How the heat map is made: the levels are our estimate, from the syllabus of each exam and from published shift-wise analyses of recent SSC and RRB papers. They are not a count of questions. The questions here are exam-style practice written for this app; questions marked “repeatedly asked” test facts that come up again and again — they are not copied from an official paper."
};
