/* The exam side of Banking & Finance. */
const GROUPS = [{ id: "bf", name: "Banking & Finance", hi: "बैंकिंग और वित्त", note: "RBI, monetary policy, banking history, banks, regulators, payments, markets, schemes and currency · SSC CGL, CHSL, MTS, RRB NTPC" }];
const ERANOTE = { bf: "Years (RBI 1935, nationalisation 1969, NABARD 1982), headquarters and full forms are the commonest questions. Current rates change — learn the definitions, and check the latest numbers before your exam." };
const INTROS = { banking: {
  lead: "Everything SSC asks about money and banks: the RBI and its tools (repo, CRR, SLR, MSF, SDF, OMO), the MPC, the history from the Bank of Hindustan to the 2020 mergers, kinds of banks, headquarters and taglines, regulators and development banks, UPI and NPCI, stock indices, Jan Dhan and other schemes, banking terms and the rupee.",
  tip: "Learn every institution as a trio — year, headquarters, job (NABARD · 1982 · Mumbai · rural credit). The Lab decks drill each of these.",
  order: "Start with Part 1 (RBI and monetary policy), then Part 2 (banks and payments), then Part 3 (markets, schemes, terms). Re-check current policy rates in the week of your exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "N1", v: [3, 3, 3] }, { id: "N2", v: [3, 2, 3] }, { id: "N3", v: [2, 2, 2] }, { id: "N4", v: [2, 2, 2] }, { id: "N5", v: [2, 2, 2] },
    { id: "N6", v: [3, 2, 2] }, { id: "N7", v: [3, 3, 3] }, { id: "N8", v: [2, 2, 2] }, { id: "N9", v: [3, 3, 3] }, { id: "N10", v: [3, 3, 3] }
  ],
  pattern: {
    title: "Where banking questions sit",
    head: ["Exam", "Section", "Banking & finance questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–3", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS", "General Awareness", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Banking questions are often counted under Economy."
  },
  tips: [
    "<b>Years</b> are the commonest question: RBI 1935, nationalised 1949, SBI 1955, bank nationalisation 1969 and 1980, RRBs 1975, NABARD 1982, SIDBI 1990, UPI 2016.",
    "<b>Definitions</b> come next: repo vs reverse repo, CRR vs SLR, MSF, OMO, NPA (90 days).",
    "<b>Rates change</b> — repo 5.50% as of 7 October 2026. Learn what each rate means; check the latest number before the exam.",
    "<b>Headquarters, taglines and full forms</b> are quick marks — drill them in the Lab."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Rates are dated 'as of October 2026'."
};
