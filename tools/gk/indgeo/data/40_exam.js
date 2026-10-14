/* The exam side of Indian Geography. */
const GROUPS = [{ id: "ig", name: "Indian Geography", hi: "भारत का भूगोल", note: "Location and borders, Himalaya and plateaus, rivers, dams and lakes, climate, soils and forests, minerals and power plants · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { ig: "‘Which state is this pass / dam / mine / power plant in?’ and ‘Which river is this city or dam on?’ make up most geography questions. The Tropic of Cancer, the Standard Meridian and Mawsynram come almost every year." };
const INTROS = { indgeo: {
  lead: "The physical and resource geography of India that SSC asks: location and borders, the Himalaya and its passes, plains, plateaus, coasts and islands, Himalayan and Peninsular rivers, cities and dams on rivers, lakes and waterfalls, the monsoon, soils, forests (ISFR 2023), minerals and power plants.",
  tip: "Learn every place as a pair — name and state (Nathu La · Sikkim) or name and river (Hirakud · Mahanadi). The Lab decks drill exactly these pairs.",
  order: "Start with Part 1 (borders, Himalaya, plateaus), then Part 2 (rivers and dams — the biggest share of questions), then climate and soils, and finish with minerals and power plants."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "G1", v: [3, 3, 3] }, { id: "G2", v: [3, 2, 2] }, { id: "G3", v: [2, 2, 2] }, { id: "G4", v: [2, 2, 2] },
    { id: "G5", v: [3, 3, 3] }, { id: "G6", v: [3, 3, 2] }, { id: "G7", v: [3, 3, 3] }, { id: "G8", v: [2, 2, 2] },
    { id: "G9", v: [3, 3, 2] }, { id: "G10", v: [2, 2, 2] }, { id: "G11", v: [2, 2, 2] }, { id: "G12", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Indian geography questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 2–3", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 2–3", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 2–3", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Agriculture, industry, transport, census and national parks have their own apps."
  },
  tips: [
    "<b>Place → state</b> is the commonest question: passes (Shipki La — Himachal), mines (Khetri — Rajasthan), power plants (Narora — UP).",
    "<b>River pairs</b>: city on a river (Surat — Tapi), dam on a river (Hirakud — Mahanadi), river source (Godavari — Trimbakeshwar).",
    "<b>Firsts and records</b>: Tehri highest dam, Hirakud longest; Wular largest freshwater lake; Mawsynram wettest; Tarapur first nuclear plant.",
    "<b>Numbers that change</b> — forest cover (ISFR 2023: 25.17%), coastline (re-measured 11,098.81 km). Check the latest report before the exam."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions."
};
