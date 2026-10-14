/* The exam side of Constitutional & Statutory Bodies. */
const GROUPS = [{ id: "cb", name: "Constitutional & Statutory Bodies", hi: "संवैधानिक और वैधानिक निकाय", note: "Election Commission, UPSC, Finance Commission, CAG, AG, NHRC, CVC, Lokpal, CIC, regulators, NITI Aayog and CBI · SSC CGL, CHSL, MTS, CPO, RRB NTPC" }];
const ERANOTE = { cb: "‘Which Article provides for this body?’ and ‘Which of these is NOT a constitutional / statutory body?’ are the two commonest questions. Then tenure, removal and who appoints." };
const INTROS = { bodies: {
  lead: "Every body SSC asks about in Polity: the constitutional ones (with their Articles), the statutory ones (with their Acts and years), the executive ones (NITI Aayog, CBI, NDC), and side-by-side tables of appointment, tenure, removal and composition.",
  tip: "Learn each body as a set — Article or Act · who appoints · term · how removed. The Lab's Article, tenure and removal decks drill exactly that.",
  order: "Start with Part 1 (C1 Article map first), then Part 2 (watchdogs and regulators), then Part 3 — the 'which is which' trap and the comparison tables are the best last-week revision."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "C1", v: [3, 3, 3] }, { id: "C2", v: [3, 3, 2] }, { id: "C3", v: [2, 2, 2] }, { id: "C4", v: [3, 3, 2] }, { id: "C5", v: [2, 2, 2] },
    { id: "C6", v: [2, 2, 1] }, { id: "C7", v: [3, 2, 2] }, { id: "C8", v: [2, 2, 2] }, { id: "C9", v: [3, 3, 3] }, { id: "C10", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Questions on these bodies", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / CPO", "General Awareness", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. These questions sit inside the Polity share of General Awareness."
  },
  tips: [
    "<b>Article ↔ body</b> is the commonest question: EC 324, FC 280, CAG 148, AG 76, UPSC 315, NCSC 338, GST Council 279A.",
    "<b>Which is which?</b> NITI Aayog, CBI and NDC are executive bodies; NHRC, CVC, Lokpal, CIC, NIA are statutory; NCBC became constitutional in 2018.",
    "<b>Who removes?</b> CEC and CAG like an SC judge; State PSC members by the President (not the Governor); AG at the President's pleasure.",
    "<b>Current office-holders change</b> — check the CEC, CAG, AG and NHRC chair just before the exam; this app does not quiz them."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Facts are as of October 2026."
};
