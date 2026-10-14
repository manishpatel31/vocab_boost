/* Bodies Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const CB_DECKS = [
  { id: "article", ico: "📜", title: "Article Map", sub: "Which Article creates it?", lesson: "C1", q: "Article for the", rq: "Body under", pairs: labRows("C1", 0) },
  { id: "amend", ico: "✏️", title: "Amendments", sub: "7th, 89th, 101st, 102nd…", lesson: "C1", q: "What did this bring:", pairs: labRows("C1", 1) },
  { id: "firsts", ico: "🥇", title: "Firsts", sub: "First CEC, CAG, AG, Lokpal…", lesson: "C1", q: "", pairs: labRows("C1", 2) },
  { id: "ec", ico: "🗳️", title: "Election Milestones", sub: "1950 to the 2023 Act", lesson: "C2", q: "Year:", pairs: labRows("C2") },
  { id: "upsc", ico: "📝", title: "Articles 315–323", sub: "The PSC Articles", lesson: "C3", q: "What does this cover:", pairs: labRows("C3") },
  { id: "fc", ico: "💰", title: "Finance Commissions", sub: "Neogy to Panagariya", lesson: "C4", q: "Chairman of the", pairs: labRows("C4") },
  { id: "acts", ico: "⚖️", title: "Watchdog Laws", sub: "NHRC, CVC, Lokpal, CIC", lesson: "C7", q: "Law behind the", pairs: labRows("C7", 0) },
  { id: "panel", ico: "🪑", title: "Selection Panels", sub: "Who chooses whom?", lesson: "C7", q: "Panel that selects the", pairs: labRows("C7", 2) },
  { id: "regyear", ico: "🏛️", title: "Acts & Years", sub: "NCW 1990 to PFRDA 2013", lesson: "C8", q: "Year of the", pairs: labRows("C8", 0) },
  { id: "kind", ico: "🧩", title: "Which Kind?", sub: "Constitutional, statutory or executive", lesson: "C9", q: "What kind of body:", pairs: labRows("C9", 0) },
  { id: "tenure", ico: "⏳", title: "Tenure", sub: "6/65, 5/70, 3/70…", lesson: "C10", q: "Term of the", pairs: labRows("C10", 0) },
  { id: "removal", ico: "🚪", title: "Removal", sub: "Like a judge, or at pleasure?", lesson: "C10", q: "How is this removed:", pairs: labRows("C10", 1) }
];
const LAB_CONF = {
  title: "Bodies Lab", blurb: "Pin every body to its Article or Act, its term and its removal until the trap questions can't catch you. Every right answer earns XP.",
  ranks: [[0,"Voter","🗳️"],[60,"Clerk","📋"],[200,"Commissioner","🏛️"],[450,"Auditor General","📊"],[900,"Chief Election Commissioner","⚖️"]],
  decks: CB_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(CB_DECKS), list: () => CB_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "article", title: "Pair each body with its Article", sub: "Flip cards — pair each body with the Article that creates it" }
};
