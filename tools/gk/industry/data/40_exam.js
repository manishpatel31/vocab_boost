/* The exam side of Industries & Transport. */
const GROUPS = [{ id: "it", name: "Industries & Transport", hi: "उद्योग और परिवहन", note: "Steel, textiles, refineries, industrial cities, railways, roads, ports, airports, waterways and pipelines · SSC CGL, CHSL, MTS, GD, RRB NTPC" }];
const ERANOTE = { it: "‘Which state is this plant / port / refinery in?’ and ‘Where is the headquarters of X Railway?’ are the commonest questions. Firsts (1853, 1907, 1901) come next." };
const INTROS = { industry: {
  lead: "Everything SSC asks about India's industries and transport: steel plants and who helped build them, textile firsts, refineries, aircraft and shipyards, nicknames of industrial cities, railway zones and milestones, highways and tunnels, the 13 major ports, airport names, National Waterways and pipelines.",
  tip: "Learn each place as a pair — name and state (Bhilai · Chhattisgarh · USSR; Digboi · Assam · 1901). The Lab decks drill exactly those pairs.",
  order: "Start with Part 2 (railway zones are asked most), then Part 1 (steel and refineries), then Part 3 (roads, ports, airports, waterways). Recheck the 'as of' facts in T6–T8 the week before your exam."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · GA" }, { label: "SSC CHSL / MTS", sub: "GA" }, { label: "RRB NTPC", sub: "GA" }],
  rows: [
    { id: "T1", v: [3, 3, 3] }, { id: "T2", v: [2, 2, 2] }, { id: "T3", v: [3, 2, 2] }, { id: "T4", v: [2, 2, 2] },
    { id: "T5", v: [2, 3, 3] }, { id: "T6", v: [2, 2, 3] }, { id: "T7", v: [3, 3, 2] }, { id: "T8", v: [3, 3, 2] },
    { id: "T9", v: [1, 2, 2] }, { id: "T10", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Industry / transport questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "General Awareness (25 Q)", "About 1–2 (geography)", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL / MTS / GD", "General Awareness", "About 1–2", "2 each, &minus;0.5 per wrong"],
      ["RRB NTPC", "General Awareness", "About 1–3 (railways often)", "1 each, &minus;1/3 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. These topics sit under Economic and Indian Geography."
  },
  tips: [
    "<b>Place → state</b> is the commonest question: Bhilai is in Chhattisgarh, Bokaro in Jharkhand, Mathura refinery in UP, Vizhinjam in Kerala.",
    "<b>Railway HQs</b>: watch Gorakhpur (North Eastern), Maligaon (NF), Hajipur (East Central), Hubballi (South Western), Bilaspur (SECR).",
    "<b>Firsts</b> every year: first train 1853, TISCO 1907, Digboi 1901, first cotton mill Mumbai 1854, first metro Kolkata 1984.",
    "<b>Recent projects change</b> — Atal Setu (2024), Sela Tunnel (2024), Chenab Bridge (2025), Vizhinjam (2025). Check the 'as of' date."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published shift-wise analyses, not a count of questions. Facts are dated 'as of October 2026'."
};
