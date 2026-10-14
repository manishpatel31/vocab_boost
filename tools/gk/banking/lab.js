/* Banking & Finance Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const BF_DECKS = [
  { id: "rbi", ico: "🏛️", title: "RBI Timeline", sub: "From Hilton Young to today", lesson: "N1", q: "Year of", rq: "Which RBI milestone came in", pairs: labRows("N1", 0) },
  { id: "tools", ico: "🎚️", title: "Policy Tools", sub: "Repo, CRR, SLR, MSF, SDF, OMO", lesson: "N2", q: "", rq: "What is the", pairs: labRows("N2", 0) },
  { id: "history", ico: "📜", title: "Banking History", sub: "1770 to the 2020 mergers", lesson: "N3", q: "Year of", pairs: labRows("N3", 0) },
  { id: "merge", ico: "🔗", title: "Bank Mergers", sub: "Who merged into whom?", lesson: "N3", q: "Which bank absorbed", pairs: labRows("N3", 1) },
  { id: "hq", ico: "📍", title: "Headquarters", sub: "Banks and regulators", lesson: "N5", q: "Headquarters of", pairs: labRows("N5", 0) },
  { id: "tag", ico: "💬", title: "Taglines", sub: "Whose line is it?", lesson: "N5", q: "Whose tagline:", rq: "Tagline of", pairs: labRows("N5", 1) },
  { id: "regs", ico: "⚖️", title: "Who Regulates What", sub: "SEBI, IRDAI, NABARD, SIDBI…", lesson: "N6", q: "Field of", pairs: labRows("N6", 1) },
  { id: "pay", ico: "📲", title: "Payment Systems", sub: "UPI, NEFT, RTGS, AePS…", lesson: "N7", q: "", pairs: labRows("N7", 1) },
  { id: "index", ico: "📈", title: "World Indices", sub: "Which country's index?", lesson: "N8", q: "Which country's index is", pairs: labRows("N8", 1) },
  { id: "schemes", ico: "🤝", title: "Schemes", sub: "Jan Dhan, MUDRA, APY…", lesson: "N9", q: "", pairs: labRows("N9", 1) },
  { id: "full", ico: "🔤", title: "Full Forms", sub: "NPA, IFSC, MICR, RTGS…", lesson: "N10", q: "Full form of", pairs: labRows("N10", 0) },
  { id: "notes", ico: "💵", title: "Note Motifs", sub: "What's on the back of each note?", lesson: "N10", q: "Motif on the", pairs: labRows("N10", 2) }
];
/* Up to n rows of a deck for the Grand Mix, spread over different answers so every question gets real wrong options. */
function bfSpread(rows, n){
  const by = {}; shuffle(rows).forEach(r => { (by[r[1]] = by[r[1]] || []).push(r); });
  const groups = shuffle(Object.values(by)), out = [];
  for (let i = 0; out.length < n && groups.some(g => g.length); i++) { const g = groups[i % groups.length]; if (g.length) out.push(g.shift()); }
  return out;
}
const LAB_CONF = {
  title: "Money Lab", blurb: "Drill every rate, bank, year and full form until it sticks. Every right answer earns XP.",
  ranks: [[0,"Account Holder","💳"],[60,"Clerk","🧾"],[200,"Probationary Officer","🏦"],[450,"Branch Manager","💼"],[900,"RBI Governor","🏛️"]],
  decks: BF_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(BF_DECKS.map(d => Object.assign({}, d, { pairs: bfSpread(d.pairs, 6) }))), list: () => BF_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "notes", title: "Pair each note with its motif", sub: "Flip cards — pair each new note with the picture on its back" }
};
