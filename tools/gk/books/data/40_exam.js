/* The exam side of Books & Authors. */
const GROUPS = [{ id: "bk", name: "Books & Authors", hi: "पुस्तकें और लेखक", note: "Static GK and current affairs · SSC CGL, CHSL, MTS, RRB NTPC" }];
const ERANOTE = { bk: "One book–author question comes in most GA sections — ancient classics, freedom-struggle books, Booker winners and recent memoirs lead." };
const INTROS = { books: {
  lead: "Every book and author SSC and Railway papers like to ask — from the Arthashastra to the 2026 International Booker — grouped so you remember them by story, not by rote.",
  tip: "Learn a book with one hook: its king, its prize or its subject (e.g. Rajatarangini = Kashmir). Then play the Lab decks until each pair comes in three seconds.",
  order: "Part 1 (classics and the freedom struggle) never goes out of date; Part 3's recent books change every year — revise them just before the exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "B1", v: [3, 2, 2] }, { id: "B2", v: [3, 2, 2] }, { id: "B3", v: [3, 3, 3] }, { id: "B4", v: [2, 2, 2] }, { id: "B5", v: [3, 3, 2] },
    { id: "B6", v: [2, 2, 2] }, { id: "B7", v: [2, 2, 2] }, { id: "B8", v: [1, 1, 1] }, { id: "B9", v: [2, 2, 3] }
  ],
  pattern: {
    title: "Where book questions sit",
    head: ["Exam", "Section", "Book / author questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS", "General Awareness", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts."
  },
  tips: [
    "<b>Tie each book to one hook</b> — a king's court (Harshacharita → Harsha), a prize (White Tiger → Booker 2008) or a place (Rajatarangini → Kashmir).",
    "<b>Learn pairs that are swapped</b>: Mudrarakshasa / Mricchakatika, Republic / Politics, Kiran Desai / Anita Desai, Booker / International Booker.",
    "<b>Recent books</b> come from the news of the last 12–18 months: prize-winners, memoirs of leaders, and books released by the President or PM.",
    "<b>Questions tagged 📜</b> were asked in real SSC papers (from published solved papers); the rest are exam-style practice."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. 📜 questions carry the paper they were reported from (solved-paper sources); other questions are written for this app."
};
