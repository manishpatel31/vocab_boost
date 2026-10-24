/* Tribes, Languages & Scripts Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const TL_DECKS = [
  { id: "north", ico: "🏔️", title: "North, West, Centre", sub: "Gaddi to Abujh Maria", lesson: "T2", q: "Home state or UT of the", pairs: labRows("T2", 0) },
  { id: "east", ico: "🏹", title: "Eastern homelands", sub: "Santhal Parganas, Kolhan, Niyamgiri…", lesson: "T3", q: "Homeland of the", pairs: labRows("T3", 0) }
];
const LAB_CONF = {
  title: "Tribes & Tongues Lab", blurb: "Match each tribe to its home, each language to its year and each script to its language. Every right answer earns XP.",
  ranks: [[0,"Visitor","🧳"],[60,"Listener","👂"],[200,"Field Worker","📓"],[450,"Linguist","🗣️"],[900,"Anthropologist","🧭"]],
  decks: TL_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(TL_DECKS), list: () => TL_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "north", title: "Pair each tribe with its home", sub: "Flip cards — pair each tribe with its state or UT" }
};
