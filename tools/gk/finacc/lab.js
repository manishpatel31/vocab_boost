/* Finance & Accounts Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const FA_DECKS = [
  { id: "side", ico: "⚖️", title: "Debit or Credit?", sub: "Which side of the trial balance", lesson: "F2", q: "Trial balance side of", opts: ["Debit", "Credit"], pairs: labRows("F2", 4) },
  { id: "acctype", ico: "🗂️", title: "Personal, Real or Nominal?", sub: "Name the type of account", lesson: "F2", q: "Type of account:", opts: ["Personal account", "Real account", "Nominal account"], pairs: labRows("F2", 2) },
  { id: "concept", ico: "💡", title: "Name the Concept", sub: "Entity, going concern, matching…", lesson: "F1", q: "", pairs: labRows("F1", 0) },
  { id: "book", ico: "📚", title: "Which Book?", sub: "Purchases book, journal proper, cash book…", lesson: "F3", q: "Which book records:", pairs: labRows("F3", 0) },
  { id: "brs", ico: "🏦", title: "Add or Less?", sub: "BRS, starting from the cash book balance", lesson: "F4", q: "From the cash book balance:", opts: ["Add", "Less"], pairs: labRows("F4", 0) },
  { id: "errtype", ico: "🩹", title: "Name the Error", sub: "Omission, commission, principle, compensating", lesson: "F5", q: "Type of error:", opts: ["Error of omission", "Error of commission", "Error of principle", "Compensating errors"], pairs: labRows("F5", 0) },
  { id: "errtb", ico: "🔎", title: "Will the Trial Balance Agree?", sub: "One-sided or two-sided error", lesson: "F5", q: "", opts: ["Affects the trial balance", "Does not affect the trial balance"], pairs: labRows("F5", 1) },
  { id: "depm", ico: "📉", title: "Depreciation Methods", sub: "Method ↔ feature", lesson: "F6", q: "", rq: "Which method:", pairs: labRows("F6", 0) },
  { id: "bills", ico: "📜", title: "Bills of Exchange", sub: "Drawer, drawee, noting, retirement…", lesson: "F7", q: "", rq: "Which term:", pairs: labRows("F7", 0) },
  { id: "place", ico: "📊", title: "Where Does It Go?", sub: "Trading, P&L or balance sheet — which side", lesson: "F8", q: "Final accounts place of", pairs: labRows("F8", 0) },
  { id: "caprev", ico: "🏗️", title: "Capital or Revenue?", sub: "Expenditure and receipts", lesson: "F8", q: "", pairs: labRows("F8", 1) },
  { id: "adj", ico: "🧷", title: "Adjustments", sub: "Where each one goes in the balance sheet", lesson: "F9", q: "Balance sheet treatment of", pairs: labRows("F9", 0) },
  { id: "ratio", ico: "➗", title: "Ratio → Formula", sub: "Sacrificing, gaining, goodwill, drawings…", lesson: "F10", q: "", rq: "This formula gives:", pairs: labRows("F10", 1) },
  { id: "consign", ico: "🚚", title: "Consignment & Joint Venture", sub: "Consignor, del credere, account sales…", lesson: "F11", q: "", rq: "Which term:", pairs: labRows("F11", 0) },
  { id: "npo", ico: "🏛️", title: "Club Accounts: Capital or Revenue?", sub: "Life membership, legacy, subscriptions…", lesson: "F12", q: "", opts: ["Capital receipt", "Revenue receipt"], pairs: labRows("F12", 1) },
  { id: "sbl", ico: "📒", title: "Debtors' Ledger Adjustment", sub: "Debit, credit or not recorded", lesson: "F13", q: "", opts: ["Debit", "Credit", "Not recorded"], pairs: labRows("F13", 0) },
  { id: "dpc", ico: "🔍", title: "DPC Act 1971", sub: "Section → what it deals with", lesson: "F14", q: "", rq: "Which section:", pairs: labRows("F14", 2) },
  { id: "audit", ico: "🧐", title: "Kinds of Audit", sub: "Regularity, propriety, performance…", lesson: "F14", q: "", rq: "Which audit:", pairs: labRows("F14", 3) }
];
const LAB_CONF = {
  title: "Ledger Lab", blurb: "Drill the rules of accounting until they are automatic — which side, which account, which book, which method. Every right answer earns XP.",
  ranks: [[0,"Trainee","📒"],[60,"Accounts Clerk","🧾"],[200,"Accountant","🧮"],[450,"Auditor","🔍"],[900,"Audit Officer","🏛️"]],
  decks: FA_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Every open-answer deck at once — the real exam feel", q: "", make: () => labMix(FA_DECKS.filter(d => !d.opts)), list: () => FA_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "concept", title: "Pair each example with its concept", sub: "Flip cards — match the situation to the concept or convention" }
};
