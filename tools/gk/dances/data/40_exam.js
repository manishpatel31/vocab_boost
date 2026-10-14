/* The exam side of Classical Dances & Dancers. */
const GROUPS = [{ id: "cd", name: "Classical Dances & Dancers", hi: "शास्त्रीय नृत्य और नर्तक", note: "The eight classical dances, texts and terms, dancers, gurus, schools, festivals and awards · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { cd: "‘X is an exponent of which dance?’ and ‘Y is a classical dance of which state?’ are by far the commonest questions. Festivals and the Natya Shastra come next." };
const INTROS = { classical: {
  lead: "Everything SSC asks about India's classical dances: the eight recognised by the Sangeet Natak Akademi (and Chhau), their states, roots, features and music, the Natya Shastra and its terms, the great dancers and gurus, the schools, the festivals, the awards — and how to tell a classical dance from a folk one.",
  tip: "Learn each dancer as a pair — name and dance (Kelucharan Mohapatra · Odissi). The Lab's dancer decks drill exactly that, and that is the question SSC asks most.",
  order: "Start with Part 1 (the eight dances and their states), then Part 2 (dancers — the biggest scorer), then Part 3 (festivals, awards, folk vs classical). Re-read the Padma Vibhushan list the week before your exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "L1", v: [2, 2, 2] }, { id: "L2", v: [3, 3, 3] }, { id: "L3", v: [2, 2, 2] },
    { id: "L4", v: [3, 3, 2] }, { id: "L5", v: [3, 3, 2] }, { id: "L6", v: [2, 2, 1] },
    { id: "L7", v: [2, 2, 2] }, { id: "L8", v: [2, 2, 1] }, { id: "L9", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Dance questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–2", "2 each, &minus;0.5 per wrong (MTS session 2 / GD vary)"],
      ["RRB NTPC", "General Awareness", "About 0–1", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Folk dances, music and instruments are counted separately under Art & Culture."
  },
  tips: [
    "<b>Dancer → dance</b> is the commonest question since 2021. Learn the gurus first: Birju Maharaj, Kelucharan Mohapatra, Rukmini Devi Arundale, Vempati Chinna Satyam, Guru Bipin Singh, Kalyanikutty Amma.",
    "<b>Dance → state</b> traps: Kuchipudi is Andhra Pradesh; Kerala has two (Kathakali, Mohiniyattam); Sattriya (Assam) is the newest, from 2000.",
    "<b>“Which is NOT classical?”</b> — Yakshagana, Bihu, Garba, Lavani, Theyyam are the usual wrong answers.",
    "<b>Awards change</b> — new Padma lists come every January. As of 2026: Padma Subrahmanyam and Vyjayanthimala (2024), Kumudini Lakhia (2025) got the Padma Vibhushan."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions."
};
