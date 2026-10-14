/* The exam side of Physical Geography. */
const GROUPS = [{ id: "pg", name: "Physical Geography", hi: "भौतिक भूगोल", note: "Solar system, Earth's motions, interior, rocks, landforms, atmosphere, winds, oceans and climate · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { pg: "Physical geography gives SSC 1–3 questions in almost every shift. Local winds, the layers of the Earth and of the atmosphere, ocean currents and planet records come back again and again." };
const INTROS = { physgeo: {
  lead: "Everything SSC asks about how the Earth works: the planets, the Earth's motions and time, the layers inside the Earth, rocks, plates, earthquakes and volcanoes, landforms, the atmosphere, winds, clouds and cyclones, oceans, and climate types.",
  tip: "Learn in pairs: discontinuity → the two layers it separates, wind → where it blows, current → warm or cold. The Lab decks drill exactly these pairs.",
  order: "Start with Part 2 (interior, rocks, plates) and Part 3 (atmosphere and winds) — they carry the most marks. Then oceans and climate, then Part 1. Revise the local-winds and ocean-currents decks the week before your exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "Y1", v: [2, 2, 3] }, { id: "Y2", v: [2, 2, 3] }, { id: "Y3", v: [3, 3, 3] }, { id: "Y4", v: [3, 2, 3] }, { id: "Y5", v: [2, 2, 2] },
    { id: "Y6", v: [3, 3, 3] }, { id: "Y7", v: [3, 3, 2] }, { id: "Y8", v: [2, 2, 2] }, { id: "Y9", v: [3, 2, 2] }, { id: "Y10", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Physical geography questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–3", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–3", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 2–3", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Indian geography (rivers, soils, states) is asked separately."
  },
  tips: [
    "<b>Pairs win marks</b>: Moho = crust/mantle, Gutenberg = mantle/core, Lehmann = outer/inner core; Chinook = Rockies, Foehn = Alps, Mistral = France.",
    "<b>Layers in order</b> come up every year — of the Earth (crust, mantle, outer core, inner core) and of the air (troposphere, stratosphere, mesosphere, thermosphere, exosphere).",
    "<b>Warm or cold?</b> West-coast tropical currents are cold (Canary, Benguela, Humboldt, California); east-coast ones are warm (Gulf Stream, Kuroshio, Brazil, Agulhas).",
    "<b>Watch the traps</b>: hottest planet Venus (not Mercury), ozone in the stratosphere (not ionosphere), Earth nearest the Sun in January, spring tides twice a month."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions."
};
