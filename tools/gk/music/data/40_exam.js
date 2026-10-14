/* The exam side of Musical Instruments & Musicians. */
const GROUPS = [{ id: "mu", name: "Musical Instruments & Musicians", hi: "वाद्य यंत्र और संगीतकार", note: "Instruments and their maestros, Hindustani and Carnatic music, gharanas, ragas, singers, music awards and folk instruments · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { mu: "‘X is associated with which instrument?’ is asked in almost every SSC exam cycle. After that come the Carnatic trinity, gharanas and the Bharat Ratna musicians." };
const INTROS = { music: {
  lead: "Everything SSC asks about Indian music: the four classes of instruments, the maestro behind each instrument, Hindustani and Carnatic music, gharanas, ragas and their times, great singers, Bharat Ratna musicians, music awards, Indian Grammy winners and folk instruments by state.",
  tip: "Learn each maestro as a pair — name and instrument (Amjad Ali Khan · sarod). The Lab's maestro decks drill exactly that until you answer in three seconds.",
  order: "Start with Part 1 (instruments and maestros — the most asked), then Part 3 (singers and honours), then Part 2 (traditions, gharanas, ragas). Play the Grand Mix the week before your exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "M1", v: [2, 2, 2] }, { id: "M2", v: [3, 3, 3] }, { id: "M3", v: [3, 3, 3] }, { id: "M4", v: [2, 2, 2] },
    { id: "M5", v: [2, 2, 1] }, { id: "M6", v: [1, 1, 1] }, { id: "M7", v: [2, 3, 2] }, { id: "M8", v: [2, 2, 2] }, { id: "M9", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where music questions sit",
    head: ["Exam", "Section", "Music questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 0–1", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Music often shares the Art & Culture slot with dance and festivals."
  },
  tips: [
    "<b>Maestro → instrument</b> is the commonest question by far: Ravi Shankar sitar, Amjad Ali Khan sarod, Shivkumar Sharma santoor, Bismillah Khan shehnai, Hariprasad Chaurasia flute, Zakir Hussain tabla.",
    "<b>Watch near-names</b>: Amjad Ali Khan (sarod) vs Asad Ali Khan (rudra veena); Zakir Hussain (tabla) vs President Zakir Husain; pena (Manipur) vs pepa (Assam).",
    "<b>Classes</b>: tata string, sushira wind, avanaddha skin drum, ghana solid. The santoor is tata; the ghatam and jaltarang are ghana.",
    "<b>Firsts</b>: M. S. Subbulakshmi first musician Bharat Ratna (1998); Ravi Shankar first Indian Grammy; Gwalior the oldest khayal gharana."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions."
};
