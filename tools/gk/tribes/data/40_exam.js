/* The exam side of Tribes, Languages & Scripts of India. */
const GROUPS = [{ id: "tl", name: "Tribes, Languages & Scripts", hi: "जनजातियाँ, भाषाएँ एवं लिपियाँ", note: "Scheduled Tribes and the law, tribes region by region, revolts and festivals, the Eighth Schedule, classical languages and scripts · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { tl: "‘Tribe X lives in which state?’ is the commonest tribal question; for languages it is the Eighth Schedule (22, and which amendment added which), the classical languages (11, and the years) and ‘which script for which language’." };
const INTROS = { tribes: {
  lead: "India's tribes and languages the way SSC asks about them: Article 342 and the Fifth and Sixth Schedules, the PVTGs, the tribes of each region and what each is known for, the tribal revolts and festivals, the Eighth Schedule and its amendments, the eleven classical languages, the official-language Articles, the scripts and who made them, and the linguistic states.",
  tip: "Learn the tribes on the map, one region at a time, and say each tribe with its state aloud; for languages, learn the four dates of the Eighth Schedule (1950, 1967, 1992, 2003) and the six years of the classical languages (2004, 2005, 2008, 2013, 2014, 2024).",
  order: "Start with the law and the numbers (T1), go round the country in T2–T5, then the revolts and festivals (T6), and finish with languages, scripts and the mixed revision in Part 3."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "T1", v: [2, 1, 2] }, { id: "T2", v: [1, 1, 1] }, { id: "T3", v: [1, 1, 1] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Tribe and language questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–1", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 0–1", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 0–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. These questions are usually filed under Polity (Schedules, Articles), Art & Culture (festivals, languages, scripts) or History (tribal revolts)."
  },
  tips: [
    "<b>Tribe → state</b> is the easiest mark: Toda, Gaddi, Tharu, Bhotia, Apatani, Khasi, Garo, Santhal, Jarawa and Shompen repeat.",
    "<b>Eighth Schedule</b>: 22 languages; Sindhi 1967 (21st), Konkani–Manipuri–Nepali 1992 (71st), Bodo–Dogri–Maithili–Santhali 2003 (92nd).",
    "<b>Classical languages</b>: 11 since October 2024 — Tamil (2004) first; Marathi, Pali, Prakrit, Assamese and Bengali the newest.",
    "<b>Polity links</b>: Article 342 (STs), 244 (Fifth and Sixth Schedules), 338A (NCST), 343–351 (official language).",
    "<b>Counts change</b>: the ST list, PVTG list and language lists are changed by Parliament or the Cabinet now and then — check the latest before the exam."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Facts dated 'as of October 2026'."
};
