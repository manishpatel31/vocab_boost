/* The exam side of Famous Personalities: Titles, Nicknames & Memorials. */
const GROUPS = [{ id: "pp", name: "Famous Personalities", hi: "प्रसिद्ध व्यक्तित्व", note: "Titles, nicknames, slogans, samadhis, birthplaces and pen names · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { pp: "One-liners: ‘who is known as …’, ‘who gave the title …’, ‘who said …’ and ‘whose samadhi is …’. Most wrong answers come from look-alike titles — Lokmanya and Loknayak, the two Nightingales, the two Little Masters." };
const INTROS = { persons: {
  lead: "The names India gives its great people — titles of freedom fighters and who gave them, the Kesaris and regional titles, reformers and women leaders, sports and film nicknames, the names of world leaders, famous slogans and lines, the samadhis of Delhi and the new memorials, birthplaces, pen names and real names. Facts that change were checked as of October 2026.",
  tip: "Learn each fact as a pair — title → person, slogan → speaker, samadhi → leader, pen name → real name — then play the Lab decks both ways. Say the look-alikes aloud together (Lokmanya–Tilak, Loknayak–JP) so they never swap.",
  order: "Start with the freedom fighters (Part 1), which carry the most marks; take sport, film and world leaders (Part 2) next; and finish with slogans, samadhis, places and names (Part 3), ending with the mixed revision."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "P1", v: [2, 3, 2] }, { id: "P2", v: [1, 1, 1] }, { id: "P3", v: [2, 2, 2] }, { id: "P4", v: [1, 2, 2] }, { id: "P5", v: [1, 1, 1] }, { id: "P6", v: [1, 1, 1] },
    { id: "P7", v: [3, 2, 2] }, { id: "P8", v: [2, 2, 2] }, { id: "P9", v: [1, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Questions from this app", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–1", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 0–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. These questions are often filed under History, Sports or ‘Miscellaneous’."
  },
  tips: [
    "<b>Who gave the title</b> is the favourite twist: Mahatma — Tagore; Father of the Nation — Bose (1944); Gurudev — Gandhi; Sardar — the women of Bardoli.",
    "<b>Slogans</b>: learn who <b>coined</b> and who <b>made famous</b> — Inquilab Zindabad (Hasrat Mohani / Bhagat Singh), Quit India (Yusuf Meherally / Gandhi), Jai Hind (Abid Hasan / Bose).",
    "<b>Samadhis</b>: Raj Ghat, Shanti Van, Vijay Ghat, Shakti Sthal, Veer Bhumi, Kisan Ghat and Sadaiv Atal cover most questions; new memorials go up at the Rashtriya Smriti Sthal.",
    "<b>Read the subject</b>: 'Nightingale of India' is Sarojini Naidu in history and Lata Mangeshkar in music; 'Little Master' is Gavaskar first, Tendulkar later."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Facts dated 'as of October 2026'."
};
