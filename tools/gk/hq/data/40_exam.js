/* The exam side of Headquarters & Founders. */
const GROUPS = [{ id: "hq", name: "Headquarters & Founders", hi: "मुख्यालय और संस्थापक", note: "HQs of world and Indian organisations, founders of companies, reform bodies and newspapers, mottos · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { hq: "‘The headquarters of X is in…’ and ‘Who founded X?’ are two of the oldest question types in SSC General Awareness. Learn each body as a pair — name and city, or name and founder." };
const INTROS = { hq: {
  lead: "Every SSC favourite on headquarters and founders: the UN family, money and regional bodies, sports federations, Indian science labs, farm institutes, commodity boards and banks, the founders of Indian and global companies, the reform societies and newspapers of the freedom struggle, and the mottos of India's institutions.",
  tip: "Group by city, not by organisation: Geneva (WHO, ILO, WTO, ITU…), Lausanne (IOC, FIDE, FIH…), Mumbai (RBI, SEBI, NABARD…), Kolkata (GSI, ZSI, BSI, Tea Board). The Lab decks drill exactly these pairs.",
  order: "Start with Part 1 (world bodies), then Part 2 (Indian institutions), then Part 3 (founders and mottos). Lesson H9 — reformers and newspapers — is the single most-asked lesson: revise it twice."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "H1", v: [3, 3, 3] }, { id: "H2", v: [2, 2, 3] }, { id: "H3", v: [2, 3, 2] }, { id: "H4", v: [2, 2, 2] }, { id: "H5", v: [1, 1, 2] },
    { id: "H6", v: [2, 1, 2] }, { id: "H7", v: [2, 2, 2] }, { id: "H8", v: [1, 2, 2] }, { id: "H9", v: [3, 3, 3] }, { id: "H10", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "HQ / founder questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–3", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Reformer and newspaper questions are often counted under Modern History."
  },
  tips: [
    "<b>Organisation → city</b> is the commonest form. Watch the traps: UPU is in Bern, Interpol in Lyon, SIDBI in Lucknow, IRDAI in Hyderabad, ICC (cricket) in Dubai.",
    "<b>Founded in one city, based in another</b>: FIFA and IOC (founded in Paris), OPEC (Baghdad → Vienna), SAARC (Dhaka → Kathmandu), RBI (Calcutta → Mumbai), PNB (Lahore → New Delhi).",
    "<b>Reformer + year</b> together: Brahmo 1828, Prarthana 1867, Satyashodhak 1873, Arya 1875, Ramakrishna Mission 1897, Servants of India 1905.",
    "<b>Never memorise current CEOs from old notes</b> — they change. Founders and founding years do not."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions."
};
