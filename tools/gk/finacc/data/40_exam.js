/* The exam side of Finance & Accounts (SSC CGL Tier 2 Paper III). */
const GROUPS = [{ id: "fa", name: "Finance & Accounts", hi: "वित्त एवं लेखा", note: "Paper III Part A (Finance and Accounts) in full, and a map of Part B (Economics and Governance) · SSC CGL Tier 2 · AAO" }];
const ERANOTE = { fa: "Part A mixes rule questions (which account, which side, which concept) with short numericals (BRS, depreciation, due dates, partnership ratios, missing figures). Part B leans on the CAG, the Finance Commission and basic economics." };
const INTROS = { finacc: {
  lead: "Paper III of SSC CGL Tier 2 is taken only by candidates for Assistant Audit Officer and Assistant Accounts Officer. This app teaches its Part A — Finance and Accounts — in full: concepts and standards, journal and ledger, subsidiary books, bank reconciliation, rectification, depreciation, bills of exchange, final accounts with adjustments, partnership, joint ventures and consignment, single entry and non-profit organisations, and self-balancing ledgers. Each lesson has rule tables, worked journal entries and numericals with steps, traps and a quiz. The last lesson maps Part B — Economics and Governance — to the lessons of the Economy, Polity and Bodies apps, and adds what they leave out: the CAG's duties under the DPC Act 1971, the kinds of audit, the Finance Commission's working and the 16th Finance Commission's formula.",
  tip: "Do every worked example with a pen before you read the steps. In the Lab, play 'Debit or Credit?', 'Where does it go?' and 'Add or Less?' until you answer in about three seconds — Part A rewards speed on the rules, so you have time left for the numericals.",
  order: "Part 1 builds the foundation (concepts, golden rules, books, BRS, rectification) — do it in order. Part 2 (depreciation, bills, final accounts) carries the most numericals. Part 3 has partnership and the special accounts, then the Part B map."
} };
const HEATMAP = {
  cols: [{ label: "CGL Paper III", sub: "Tier 2 · AAO" }, { label: "Other accounts papers", sub: "JAO, auditor, commerce" }],
  rows: [
    { id: "F1", v: [3, 3] }, { id: "F2", v: [3, 3] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Paper", "Part", "Marks", "Marking"],
    rows: [
      ["SSC CGL Tier 2 · Paper III (General Studies — Finance and Economics)", "Part A: Finance and Accounts", "80", "100 questions × 2 marks in 2 hours; &minus;0.5 per wrong"],
      ["", "Part B: Economics and Governance", "120", "Same paper and marking"]
    ],
    note: "Paper III is taken only by candidates for Assistant Audit Officer and Assistant Accounts Officer. Its marks count, with Paper I, towards the merit for those posts. Check the notification of your year for any change."
  },
  tips: [
    "<b>Rules first</b>: which account, which side, which book, which concept — these are quick marks if you have drilled them.",
    "<b>Numericals are short</b>: a BRS with four items, depreciation for three years, a due date with days of grace, a new profit-sharing ratio. Write each step; most wrong options are the result of one skipped step or a wrong sign.",
    "<b>Final accounts adjustments</b> carry two effects each — learn both (P&amp;L and balance sheet).",
    "<b>Part B</b>: the CAG and the Finance Commission are named in the syllabus — know their Articles, the DPC Act 1971 and the 16th Finance Commission's numbers."
  ],
  note: "How the heat map is made: our estimate from the official syllabus and the weight each topic carries in commerce-based accounts papers — not a count of past questions."
};
