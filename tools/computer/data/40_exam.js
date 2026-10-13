/* The exam side of Computer Knowledge: where the marks are, the pattern, how to score, and the intro. */
const GROUPS = [{ id: "cmp", name: "Computer Knowledge", hi: "कंप्यूटर ज्ञान", note: "SSC CGL & CHSL Tier 2 computer module · RRB NTPC general awareness" }];

const ERANOTE = { cmp: "Shortcuts, full forms, memory and the input/output devices carry the most marks in every one of these exams." };

const INTROS = { computer: {
  lead: "Everything the computer questions in SSC CGL and CHSL Tier 2 and RRB NTPC ask about, from what a CPU is to cyber security, explained for someone who has never studied computers.",
  tip: "Learn by doing: keep a computer or phone open and press each shortcut as you read it. Full forms and shortcuts are pure recall, so revise them every day for a week rather than once.",
  order: "Go in order: hardware first (Part 1), then Windows and MS Office (Part 2), then the internet, networks and security (Part 3)."
} };

/* Lessons × exams. 3 = almost every paper, 2 = often, 1 = now and then, 0 = not in the syllabus.
   These are estimates from the official syllabus and published shift analyses, not question counts. */
const HEATMAP = {
  cols: [
    { label: "SSC CGL", sub: "Tier 2 · 20 Q" },
    { label: "SSC CHSL", sub: "Tier 2 · 15 Q" },
    { label: "RRB NTPC", sub: "CBT · in GA" }
  ],
  rows: [
    { id: "C1", v: [1, 1, 3] }, { id: "C2", v: [3, 3, 2] }, { id: "C3", v: [3, 3, 3] }, { id: "C4", v: [3, 3, 3] },
    { id: "C5", v: [2, 2, 2] }, { id: "C6", v: [1, 1, 1] }, { id: "C7", v: [3, 3, 2] }, { id: "C8", v: [3, 3, 2] },
    { id: "C9", v: [3, 3, 2] }, { id: "C10", v: [3, 3, 2] }, { id: "C11", v: [2, 2, 1] }, { id: "C12", v: [3, 3, 2] },
    { id: "C13", v: [2, 2, 1] }, { id: "C14", v: [3, 3, 2] }, { id: "C15", v: [3, 3, 3] }, { id: "C16", v: [3, 3, 2] },
    { id: "C17", v: [1, 1, 2] }
  ],
  pattern: {
    title: "Exam pattern at a glance",
    head: ["Exam", "Where it sits", "Questions", "Marks", "Time", "Counts as"],
    rows: [
      ["SSC CGL", "Tier 2, Paper 1 · Section III, Module I", "20", "60 (3 each, &minus;1 per wrong)", "15 min", "Qualifying"],
      ["SSC CHSL", "Tier 2 · Section III, Module I", "15", "45 (3 each, &minus;1 per wrong)", "15 min", "Qualifying"],
      ["RRB NTPC", "Inside General Awareness (CBT 1 and CBT 2)", "about 2&ndash;4", "1 each, &minus;1/3 per wrong", "shared", "Counts in the merit"]
    ],
    note: "As in recent notifications. Patterns change — confirm against the official notice for your exam. The NTPC count is an estimate from published paper analyses."
  },
  tips: [
    "<b>Qualifying does not mean safe.</b> In CGL and CHSL a wrong answer costs a mark, and you must clear the qualifying score. Attempt what you know cold and leave pure guesses.",
    "<b>Shortcuts and full forms are the cheapest marks.</b> Learn the Shortcuts and the Protocols &amp; abbreviations lessons until the answers are automatic — they need no reasoning on the day.",
    "<b>Watch keys that change meaning between programs.</b> Ctrl+D, F7 and Ctrl+K do different things in Word, Excel and the browser, and the papers use that to set traps.",
    "<b>Memory questions are about order and volatility.</b> Know the hierarchy (registers → cache → RAM → disk) and which memories lose their data when the power goes.",
    "<b>For RRB NTPC</b> the computer questions sit inside General Awareness, so put full forms, memory units, input/output devices, generations and the “father of” questions first."
  ],
  note: "How the heat map is made: the levels are our estimate, from the official SSC syllabus for the computer module and from published shift-wise analyses of SSC CGL Tier 2 (March 2023) and RRB NTPC CBT-1 (June 2025). They are not a count of questions. Questions tagged 📜 were reported by candidates after those papers (memory-based); they are not copied from an official paper."
};
