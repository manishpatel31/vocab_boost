/* Firsts, Superlatives & National Symbols Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const FS_DECKS = [
  { id: "symbols", ico: "🇮🇳", title: "Symbol → Item", sub: "Animal, bird, flower, tree, river…", lesson: "F2", q: "Which is India's", rq: "Which national title does this hold:", pairs: labRows("F2", 0).map(p => [p[0].replace(/^National/, "national"), p[1], p[2]]) },
  { id: "makers", ico: "✍️", title: "Who Made It?", sub: "Anthem, song, flag, ₹, pledge", lesson: "F1", q: "Who wrote or designed:", rq: "What did this person write or design:", pairs: labRows("F1", 0) }
];
const LAB_CONF = {
  title: "Record Room", blurb: "A hall of firsts and records — symbols, pioneers, the longest and the highest. Every right answer earns XP.",
  ranks: [[0,"Visitor","🎟️"],[60,"Collector","🗂️"],[200,"Archivist","📚"],[450,"Curator","🏛️"],[900,"Keeper of Records","🏆"]],
  decks: FS_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(FS_DECKS), list: () => FS_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "symbols", title: "Pair each symbol with what it is", sub: "Flip cards — pair each national title with its animal, bird, plant or river" }
};
