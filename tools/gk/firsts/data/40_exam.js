/* The exam side of Firsts, Superlatives & National Symbols. */
const GROUPS = [{ id: "fs", name: "Firsts, Superlatives & Symbols", hi: "प्रथम, सर्वोच्च एवं राष्ट्रीय प्रतीक", note: "National symbols, India's and the world's firsts, records and nicknames of places · SSC CGL, CHSL, MTS, RRB NTPC" }];
const ERANOTE = { fs: "One-liners: ‘who was the first woman …’, ‘which is the longest or highest …’, ‘what is India's national …’ and ‘which city is called …’. Records in transport change — learn them with their dates." };
const INTROS = { firsts: {
  lead: "The one-line facts SSC loves: India's national symbols (flag, emblem, anthem, song, calendar, the living symbols and the ₹ sign), the first holders of India's top posts, the first women, the first institutions and events, the world's firsts, India's and the world's records, and the nicknames of places — with the records that change checked as of October 2026.",
  tip: "Learn each fact as a pair — post → person, symbol → item, record → place, nickname → place — then play the Lab decks both ways until every pair comes back in a second.",
  order: "Start with the symbols (Part 1), then the people and women firsts (Part 2), and keep the records and nicknames (Part 3) for the last week, when the newest bridges and tunnels are fresh in mind."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "F1", v: [2, 3, 2] }, { id: "F2", v: [2, 2, 2] }, { id: "F3", v: [2, 2, 2] }, { id: "F4", v: [2, 3, 2] }, { id: "F5", v: [1, 2, 2] },
    { id: "F6", v: [1, 1, 1] }, { id: "F7", v: [2, 2, 2] }, { id: "F8", v: [1, 1, 1] }, { id: "F9", v: [1, 2, 1] }, { id: "F10", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Questions from this app", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. These questions are often filed under ‘Static GK’ or ‘Miscellaneous’."
  },
  tips: [
    "<b>Symbols</b>: the dates (22 July 1947, 24 and 26 January 1950, 22 March 1957), the 24 spokes, the 2:3 ratio, the Mundaka Upanishad and the 52-second anthem are the safest marks.",
    "<b>Women firsts</b> come up more than any other ‘first’: IAS (Anna Rajam Malhotra), IPS (Kiran Bedi), Chief Minister (Sucheta Kripalani), Governor (Sarojini Naidu), Everest (Bachendri Pal).",
    "<b>Records change</b>: bridges, tunnels and expressways open every year — this app gives the position as of October 2026; check the news before your exam.",
    "<b>Nicknames</b>: learn the city with the reason — pink paint for a royal visit (Jaipur), blue houses (Jodhpur), yellow sandstone (Jaisalmer)."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Facts dated ‘as of October 2026’."
};
