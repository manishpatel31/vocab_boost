/* The exam side of Inventions & Discoveries. */
const GROUPS = [{ id: "iv", name: "Inventions & Discoveries", hi: "आविष्कार और खोजें", note: "Inventors, discoveries, laws, SI units, instruments, Indian scientists and 'father of' titles · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { iv: "‘Who invented / discovered X?’ and ‘What does instrument Y measure?’ are the two commonest forms. Units and Indian scientists come next." };
const INTROS = { inventions: {
  lead: "Everything SSC asks about inventions and discoveries: who invented which machine, which scientist found which particle, cell or vaccine, who gave which law, which unit honours whom, what each instrument measures, and the great Indian scientists from Aryabhata to Kalam.",
  tip: "Learn each fact as a pair — thing and person (telephone · Bell, neutron · Chadwick, hygrometer · humidity). The Lab decks drill exactly those pairs both ways.",
  order: "Start with Part 3 (instruments and units — the surest marks), then Part 1 (inventors), then Part 2 (discoveries and laws). Read the Indian-scientists lesson again just before the exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "I1", v: [2, 3, 3] }, { id: "I2", v: [2, 3, 3] }, { id: "I3", v: [3, 3, 3] }, { id: "I4", v: [2, 2, 3] }, { id: "I5", v: [3, 3, 3] },
    { id: "I6", v: [2, 2, 2] }, { id: "I7", v: [3, 3, 3] }, { id: "I8", v: [3, 3, 3] }, { id: "I9", v: [3, 3, 2] }, { id: "I10", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Inventions & discoveries questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–3", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–3", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–3", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Many of these questions are counted under General Science."
  },
  tips: [
    "<b>Instrument → what it measures</b> is the easiest mark: hygrometer–humidity, seismograph–earthquakes, lactometer–milk, hydrometer–liquid density.",
    "<b>Particles and rays</b> come every year: electron Thomson, nucleus/proton Rutherford, neutron Chadwick, X-rays Röntgen, radioactivity Becquerel.",
    "<b>Look-alikes</b> are the traps: hygrometer vs hydrometer, Salk vs Sabin, phonograph vs gramophone, J. C. Bose vs S. N. Bose, Daniel vs Ernest Rutherford.",
    "<b>Indian scientists</b> are tied to days: Science Day 28 Feb (Raman), Maths Day 22 Dec (Ramanujan), Engineers' Day 15 Sep (Visvesvaraya), Statistics Day 29 June (Mahalanobis)."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions."
};
