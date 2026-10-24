/* Firsts, Superlatives & National Symbols Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const fsLow = rows => rows.map(p => [p[0].replace(/^(The|National) /, m => m.toLowerCase()), p[1], p[2]]);
const FS_DECKS = [
  { id: "symbols", ico: "🇮🇳", title: "Symbol → Item", sub: "Animal, bird, flower, tree, river…", lesson: "F2", q: "Which is India's", rq: "Which national title does this hold:", pairs: fsLow(labRows("F2", 0)) },
  { id: "makers", ico: "✍️", title: "Who Made It?", sub: "Anthem, song, flag, ₹, pledge", lesson: "F1", q: "Who wrote or designed:", pairs: labRows("F1", 0) },
  { id: "posts", ico: "🏛️", title: "First Person → Post", sub: "President, PM, Speaker, CJI…", lesson: "F3", q: "Who became", rq: "Which first belongs to", pairs: fsLow(labRows("F3", 0)) },
  { id: "stage", ico: "🚀", title: "Indians on the World Stage", sub: "Space, Nobel, Olympics, Oscar", lesson: "F3", q: "Who was", rq: "Which first belongs to", pairs: fsLow(labRows("F3", 1)) },
  { id: "women", ico: "👩", title: "First Women", sub: "IAS, IPS, Governor, Everest…", lesson: "F4", q: "Who was", rq: "Which first belongs to", pairs: fsLow(labRows("F4", 0)) },
  { id: "world", ico: "🌍", title: "World Firsts", sub: "Bandaranaike, Curie, Amundsen…", lesson: "F6", q: "Who was", rq: "Which first belongs to", pairs: fsLow(labRows("F6", 0)) },
  { id: "nobel", ico: "🏅", title: "The First Nobels", sub: "1901 — and Economics in 1969", lesson: "F6", q: "The first Nobel Prize for", rq: "Which first Nobel went to", pairs: labRows("F6", 1) },
  { id: "india", ico: "🌉", title: "Superlative → Place: India", sub: "Bridges, tunnels, roads", lesson: "F7", q: "Which is", rq: "Which record does this hold:", pairs: fsLow(labRows("F7", 0)) },
  { id: "places", ico: "🗿", title: "India's Record Buildings", sub: "Statue, stadium, dome, minaret", lesson: "F7", q: "Which is", rq: "Which record does this hold:", pairs: fsLow(labRows("F7", 1)) },
  { id: "builtw", ico: "🏙️", title: "Superlative → Place: World", sub: "Buildings, bridges, tunnels", lesson: "F8", q: "Which is", rq: "Which record does this hold:", pairs: labRows("F8", 0) },
  { id: "living", ico: "🐋", title: "Record Animals and Plants", sub: "Biggest, tallest, fastest", lesson: "F8", q: "Which is", rq: "Which record does this hold:", pairs: labRows("F8", 2) },
  { id: "nickin", ico: "🏷️", title: "Nickname → City", sub: "Pink City, City of Lakes…", lesson: "F9", q: "Which city is called the", rq: "Nickname of", pairs: labRows("F9", 0) },
  { id: "nickw", ico: "🗺️", title: "Nickname → Place: World", sub: "Rainbow Nation, City of Light…", lesson: "F9", q: "Which place is called the", rq: "Nickname of", pairs: labRows("F9", 2) }
];
const LAB_CONF = {
  title: "Record Room", blurb: "A hall of firsts and records — symbols, pioneers, the longest and the highest. Every right answer earns XP.",
  ranks: [[0,"Visitor","🎟️"],[60,"Collector","🗂️"],[200,"Archivist","📚"],[450,"Curator","🏛️"],[900,"Keeper of Records","🏆"]],
  decks: FS_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(FS_DECKS), list: () => FS_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "symbols", title: "Pair each national title with its symbol", sub: "Flip cards — pair each national title with its animal, bird, plant or river" }
};
