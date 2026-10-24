/* Finance & Accounts Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const FA_DECKS = [
  { id: "side", ico: "⚖️", title: "Debit or Credit?", sub: "Which side of the trial balance", lesson: "F2", q: "Trial balance side of", opts: ["Debit", "Credit"], pairs: labRows("F2", 4) },
  { id: "acctype", ico: "🗂️", title: "Personal, Real or Nominal?", sub: "Name the type of account", lesson: "F2", q: "Type of account:", opts: ["Personal account", "Real account", "Nominal account"], pairs: labRows("F2", 2) },
  { id: "concept", ico: "💡", title: "Name the Concept", sub: "Entity, going concern, matching…", lesson: "F1", q: "", pairs: labRows("F1", 0) }
];
const LAB_CONF = {
  title: "Ledger Lab", blurb: "Drill the rules of accounting until they are automatic — which side, which account, which book, which method. Every right answer earns XP.",
  ranks: [[0,"Trainee","📒"],[60,"Accounts Clerk","🧾"],[200,"Accountant","🧮"],[450,"Auditor","🔍"],[900,"Audit Officer","🏛️"]],
  decks: FA_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Every deck at once — the real exam feel", q: "", make: () => labMix(FA_DECKS.filter(d => !d.opts)), list: () => FA_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "concept", title: "Pair each example with its concept", sub: "Flip cards — match the situation to the concept or convention" }
};
