/* Rivers of India Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const RV_DECKS = [
  { id: "source", ico: "⛰️", title: "Where It Rises", sub: "Gangotri to Talakaveri", lesson: "R1", q: "Source of the", rq: "Which river rises here:", pairs: labRows("R1", 0) },
  { id: "vedic", ico: "📜", title: "Vedic Names", sub: "Vitasta, Asikni, Parushni…", lesson: "R2", q: "Vedic name of the", rq: "Which river was called", pairs: labRows("R2", 0) },
  { id: "prayag", ico: "🔱", title: "Panch Prayag", sub: "Five meetings of the Alaknanda", lesson: "R3", q: "Which river joins the Alaknanda at", pairs: labRows("R3", 0) },
  { id: "gtrib", ico: "🌊", title: "Ganga's Tributaries", sub: "Where each one joins", lesson: "R4", q: "Where does this join the Ganga:", pairs: labRows("R4", 0) },
  { id: "nick", ico: "😢", title: "River Nicknames", sub: "Sorrows and Gangas", lesson: "R4", q: "Which river is the", pairs: labRows("R4", 1) },
  { id: "brahma", ico: "🛶", title: "Brahmaputra", sub: "Names and tributaries", lesson: "R5", q: "Brahmaputra's name in", pairs: labRows("R5", 0).concat(labRows("R5", 1).map(r => [r[0] + " comes from", r[1], r[2]])) },
  { id: "ptrib", ico: "🌿", title: "Peninsular Tributaries", sub: "Indravati, Bhima, Kabini…", lesson: "R6", q: "Main river of the", pairs: labRows("R6", 0) },
  { id: "city", ico: "🏙️", title: "City on the River", sub: "Nashik, Vijayawada, Madurai…", lesson: "R3", q: "Which river:", pairs: labRows("R2", 1).concat(labRows("R3", 2), labRows("R6", 1), labRows("R5", 2)) },
  { id: "west", ico: "🌅", title: "Flowing West", sub: "Mouths and features", lesson: "R7", q: "Which river:", pairs: labRows("R7", 1).concat(labRows("R7", 0).map(r => [r[0] + " ends in", r[1], r[2]])) },
  { id: "dams", ico: "🏗️", title: "Dams", sub: "Tehri to Mettur", lesson: "R8", q: "Which river has the", rq: "A dam on the", pairs: labRows("R8", 0) },
  { id: "falls", ico: "💦", title: "Waterfalls", sub: "Jog, Chitrakote, Hundru…", lesson: "R8", q: "Which river makes", rq: "Waterfall on the", pairs: labRows("R8", 1) },
  { id: "land", ico: "🏞️", title: "Landforms", sub: "Gorge, oxbow, delta…", lesson: "R9", q: "Where does this form:", pairs: labRows("R9", 0) },
  { id: "pattern", ico: "🌳", title: "Drainage Patterns", sub: "Dendritic, radial, centripetal…", lesson: "R9", q: "Which pattern:", pairs: labRows("R9", 2) },
  { id: "dispute", ico: "⚖️", title: "Water Disputes", sub: "Which states fight over which river", lesson: "R10", q: "States in the dispute over the", pairs: labRows("R10", 0) }
];
const LAB_CONF = {
  title: "River Lab", blurb: "Follow every river from its source to the sea — tributaries, cities, dams and waterfalls. Every right answer earns XP.",
  ranks: [[0,"Paddler","🛶"],[60,"Boatman","⛵"],[200,"River Pilot","🧭"],[450,"Hydrologist","💧"],[900,"Ganga Navigator","🌊"]],
  decks: RV_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(RV_DECKS), list: () => RV_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "dams", title: "Pair each dam with its river", sub: "Flip cards — pair each dam with the river it holds back" }
};
