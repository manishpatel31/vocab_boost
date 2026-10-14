/* Indian Geography Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const IG_DECKS = [
  { id: "passes", ico: "🏔️", title: "Mountain Passes", sub: "Zoji La to Bomdi La — which state?", lesson: "G2", q: "State of", pairs: labRows("G2", 1) },
  { id: "peaks", ico: "⛰️", title: "Peaks", sub: "K2, Kangchenjunga, Anamudi…", lesson: "G2", q: "Where is", pairs: labRows("G2", 0).concat(labRows("G3", 2)) },
  { id: "islands", ico: "🏝️", title: "Coasts & Islands", sub: "Which state or UT?", lesson: "G4", q: "State of", pairs: labRows("G4", 0).concat(labRows("G4", 1)) },
  { id: "source", ico: "💧", title: "River Sources", sub: "Where does each river rise?", lesson: "G5", q: "Source of the", pairs: labRows("G5", 0).concat(labRows("G6", 0)) },
  { id: "trib", ico: "🌊", title: "Tributaries", sub: "Which river does it flow into?", lesson: "G5", q: "Flows into:", pairs: labRows("G5", 1).concat(labRows("G6", 1)) },
  { id: "names", ico: "📜", title: "River Names", sub: "Vitasta, Tsangpo, Padma…", lesson: "G6", q: "Which river is", pairs: labRows("G6", 2) },
  { id: "city", ico: "🏙️", title: "Cities on Rivers", sub: "Which river flows past it?", lesson: "G7", q: "River of", pairs: labRows("G7", 0) },
  { id: "dams", ico: "🚧", title: "Dams", sub: "Which river is it on?", lesson: "G7", q: "River of the dam", pairs: labRows("G7", 1) },
  { id: "lakes", ico: "🛶", title: "Lakes & Falls", sub: "Which state?", lesson: "G8", q: "State of", pairs: labRows("G8", 0).concat(labRows("G8", 1)) },
  { id: "climate", ico: "🌧️", title: "Winds & Soils", sub: "Loo, mango showers, regur…", lesson: "G9", q: "Where:", pairs: labRows("G9", 0).concat(labRows("G10", 0)) },
  { id: "mines", ico: "⛏️", title: "Mines", sub: "What is dug out here?", lesson: "G11", q: "Mineral of", pairs: labRows("G11", 1) },
  { id: "power", ico: "⚡", title: "Power Plants", sub: "Nuclear, thermal, hydro, solar — which state?", lesson: "G12", q: "State of", pairs: labRows("G12", 0) }
];
const LAB_CONF = {
  title: "Map Lab", blurb: "Put every pass, river, dam, mine and power plant on the map in your head. Every right answer earns XP.",
  ranks: [[0,"Traveller","🎒"],[60,"Explorer","🧭"],[200,"Surveyor","📐"],[450,"Cartographer","🗺️"],[900,"Geographer Royal","🌏"]],
  decks: IG_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(IG_DECKS), list: () => IG_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "city", title: "Pair each city with its river", sub: "Flip cards — pair each city with the river it stands on" }
};
