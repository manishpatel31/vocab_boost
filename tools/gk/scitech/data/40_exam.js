/* The exam side of Science & Technology in India. */
const GROUPS = [{ id: "st", name: "Science & Technology in India", hi: "भारत में विज्ञान एवं प्रौद्योगिकी", note: "Who runs Indian science, nuclear energy, biotech, the new missions, Digital India, the poles, science awards and technology terms · SSC CGL, CHSL, MTS, CPO, RRB NTPC" }];
const ERANOTE = { st: "SSC asks one or two science-and-technology GA questions a paper, usually 'which body / mission / year', a full form, or a recent first (PFBR, BIRSA 101, the SHANTI Act). Counts and recent events are dated 'as of October 2026'." };
const INTROS = { scitech: {
  lead: "India's own science and technology, the way SSC General Awareness asks it: the departments and councils that run science, Bhabha's three-stage nuclear plan and the plants, biotech and vaccine firsts, the new national missions (quantum, chips, AI, green hydrogen), Digital India and the data law, the polar stations, the Rashtriya Vigyan Puraskar and the technology terms. Space, weapons, classic inventors, institute headquarters and power plants have their own apps, linked from each lesson.",
  tip: "Hang every fact on three pegs — who runs it, when it began, where it is — and drill the Lab decks until the ministry, year and city come without thinking.",
  order: "Start with the science system and nuclear energy in Part 1, then the biotech, missions and Digital India lessons, and finish with the poles, awards, terms and the mixed revision."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "ST1", v: [2, 1, 2] }, { id: "ST2", v: [1, 1, 1] }, { id: "ST3", v: [2, 1, 2] }, { id: "ST4", v: [2, 2, 2] },
    { id: "ST5", v: [2, 1, 2] }, { id: "ST6", v: [2, 1, 2] }, { id: "ST7", v: [2, 2, 2] }, { id: "ST8", v: [1, 1, 1] },
    { id: "ST9", v: [1, 1, 1] }, { id: "ST10", v: [2, 2, 2] }, { id: "ST11", v: [2, 1, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "India's S&T questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / CPO", "General Awareness", "About 0–2", "2 each, &minus;0.5 per wrong (MTS session 2 has no negative mark)"],
      ["RRB NTPC", "General Awareness", "About 1–3", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. These questions are often filed under 'Science & Technology', 'Current Affairs' or 'Static GK'."
  },
  tips: [
    "<b>Body → ministry and year</b> is the commonest form: CSIR 1942, DAE 1954 (under the PM), DRDO 1958, DST 1971, DBT 1986, MoES 2006.",
    "<b>Nuclear</b>: the three stages (uranium → plutonium → thorium), the plant–state and plant–partner pairs, Pokhran 1974 and 1998, and the new SHANTI Act and PFBR.",
    "<b>Missions</b>: learn year, money and ministry together — Quantum (2023, ₹6,003 crore, DST), Semiconductor (2021, ₹76,000 crore, MeitY), IndiaAI (2024), Green Hydrogen (2023, MNRE).",
    "<b>Counts change</b>: UPI volumes, reactors, chip projects and supercomputers — check the latest figure before your exam."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Facts dated 'as of October 2026'."
};
