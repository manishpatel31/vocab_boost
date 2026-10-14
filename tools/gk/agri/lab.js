/* Agriculture Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const AG_DECKS = [
  { id: "season", ico: "🌾", title: "Kharif or Rabi?", sub: "Which season is each crop?", lesson: "R1", q: "Season of", pairs: labRows("R1", 0) },
  { id: "names", ico: "🔤", title: "Desi Names", sub: "Hindi crop name → English", lesson: "R1", q: "English name of", pairs: labRows("R1", 1) },
  { id: "needs", ico: "🌦️", title: "What Crops Need", sub: "Rain, heat and soil", lesson: "R2", q: "What suits", pairs: labRows("R2", 0) },
  { id: "plant", ico: "🍵", title: "Crop ↔ State", sub: "Tea, coffee, saffron and more", lesson: "R4", q: "Top state for", pairs: labRows("R4", 0) },
  { id: "shift", ico: "🔥", title: "Slash and Burn", sub: "Local names of shifting cultivation", lesson: "R5", q: "Where is shifting cultivation called", pairs: labRows("R5", 0) },
  { id: "culture", ico: "🐝", title: "The '-culture' Words", sub: "Sericulture, apiculture, viticulture…", lesson: "R5", q: "What is raised in", pairs: labRows("R5", 2) },
  { id: "rev", ico: "🌈", title: "Revolutions", sub: "Which colour for which product?", lesson: "R6", q: "Product of the", pairs: labRows("R6", 0) },
  { id: "fathers", ico: "👨‍🌾", title: "Fathers of Revolutions", sub: "Borlaug, Swaminathan, Kurien…", lesson: "R6", q: "Father of which revolution:", pairs: labRows("R6", 1) },
  { id: "dams", ico: "💧", title: "Dams and Rivers", sub: "Which river is it on?", lesson: "R7", q: "River of", pairs: labRows("R7", 0) },
  { id: "breeds", ico: "🐄", title: "Breeds by State", sub: "Gir, Murrah, Jamunapari…", lesson: "R8", q: "Home state of", pairs: labRows("R8", 0) },
  { id: "hq", ico: "🏛️", title: "Headquarters", sub: "Boards, banks and institutes", lesson: "R9", q: "Headquarters of", pairs: labRows("R9", 0) },
  { id: "schemes", ico: "📋", title: "Schemes", sub: "What does each scheme give?", lesson: "R10", q: "What does this scheme give:", pairs: labRows("R10", 1) }
];
const LAB_CONF = {
  title: "Krishi Lab", blurb: "Seasons, crops, revolutions, breeds and schemes — drill them until they stick. Every right answer earns XP.",
  ranks: [[0,"Seedling","🌱"],[60,"Farmhand","🧑‍🌾"],[200,"Kisan","🌾"],[450,"Agronomist","🚜"],[900,"Green Revolutionary","🏆"]],
  decks: AG_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(AG_DECKS), list: () => AG_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "rev", title: "Pair each revolution with its product", sub: "Flip cards — pair each coloured revolution with what it boosted" }
};
