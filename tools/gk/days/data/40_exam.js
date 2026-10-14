/* The exam side of Important Days. */
const GROUPS = [{ id: "dy", name: "Important Days", hi: "महत्वपूर्ण दिवस", note: "National and international days · SSC CGL, CHSL, MTS, RRB NTPC" }];
const ERANOTE = { dy: "Birthday-days of great Indians, health days and environment days come up most — learn the person or treaty behind each date." };
const INTROS = { days: {
  lead: "About 200 national and international days, each tied to the person, treaty or event behind it, plus the days with moving dates and the UN's years and decades.",
  tip: "Never learn a bare date. Learn the reason — 28 February is Science Day because Raman announced his discovery then — and the date follows.",
  order: "National days first (they are asked most), then health and environment days, then the rest of the world days."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "D1", v: [3, 3, 3] }, { id: "D2", v: [3, 3, 3] }, { id: "D3", v: [2, 2, 2] }, { id: "D4", v: [2, 2, 2] }, { id: "D5", v: [2, 2, 2] },
    { id: "D6", v: [2, 2, 2] }, { id: "D7", v: [3, 3, 3] }, { id: "D8", v: [3, 3, 3] }, { id: "D9", v: [1, 1, 2] }
  ],
  pattern: {
    title: "Where 'important days' questions sit",
    head: ["Exam", "Section", "Questions on days", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS", "General Awareness", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–2", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts."
  },
  tips: [
    "<b>Learn the reason, not the date.</b> A day is almost always someone's birthday, a treaty's signing or an event's anniversary.",
    "<b>Watch the national vs international twins</b>: Teachers' Day 5 Sep / 5 Oct, Youth Day 12 Jan / 12 Aug, Hindi 14 Sep / 10 Jan, Milk 26 Nov / 1 Jun.",
    "<b>Themes change every year</b> — for current affairs, read this year's theme of Environment Day, Yoga Day and Health Day a month before your exam.",
    "<b>Questions tagged 📜</b> were asked in real SSC papers (from published solved papers); the rest are exam-style practice."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. 📜 questions carry the paper they were reported from; other questions are written for this app."
};
