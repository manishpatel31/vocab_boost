/* Tribes, Languages & Scripts Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js.
   The tribe decks use only the tables of tribes with one clear home, so no question has two right answers. */
const TL_DECKS = [
  { id: "north", ico: "🏔️", title: "Tribe → state: north, west, centre", sub: "Gaddi to Abujh Maria", lesson: "T2", q: "Home state or UT of the", pairs: labRows("T2", 0) },
  { id: "east", ico: "🏹", title: "Tribe → homeland: the east", sub: "Santhal Parganas, Kolhan, Niyamgiri…", lesson: "T3", q: "Homeland of the", pairs: labRows("T3", 0) },
  { id: "ne", ico: "🦅", title: "Tribe → state: North-East", sub: "Angami to Tripuri", lesson: "T4", q: "Home state of the", pairs: labRows("T4", 0) },
  { id: "islands", ico: "🏝️", title: "Island tribes", sub: "Jarawa, Onge, Sentinelese, Shompen…", lesson: "T5", q: "Where do they live:", rq: "Which tribe lives in", pairs: labRows("T5", 0) },
  { id: "south", ico: "🐃", title: "Southern tribes: known for", sub: "Toda buffaloes, Irula snakes…", lesson: "T5", q: "Best known for — the", pairs: labRows("T5", 1) },
  { id: "revolts", ico: "⚔️", title: "Revolt → leader", sub: "Hul, Ulgulan, Rampa…", lesson: "T6", q: "Who led the", rq: "Which movement was led by", pairs: labRows("T6", 0) },
  { id: "festivals", ico: "🥁", title: "Festival → tribe", sub: "Wangala, Dree, Bhagoria…", lesson: "T6", q: "Festival of which tribe:", rq: "Which festival belongs to the", pairs: labRows("T6", 1) },
  { id: "eighth", ico: "📜", title: "Language → Eighth Schedule", sub: "1950 list, 21st, 71st or 92nd?", lesson: "T7", q: "How did it enter the Eighth Schedule:", pairs: labRows("T7", 0) },
  { id: "classical", ico: "🏛️", title: "Language → year declared classical", sub: "Tamil 2004 to the five of 2024", lesson: "T7", q: "Year declared classical:", pairs: labRows("T7", 1) },
  { id: "articles", ico: "⚖️", title: "Official-language Articles", sub: "343 to 351", lesson: "T7", q: "Which Article deals with", pairs: labRows("T7", 2) },
  { id: "scripts", ico: "✍️", title: "Script → language", sub: "Ol Chiki, Gurmukhi, Grantha…", lesson: "T8", q: "Chiefly used for which language:", rq: "Which script is chiefly used for", pairs: labRows("T8", 0) },
  { id: "scriptnow", ico: "🔤", title: "Language → script today", sub: "Bodo, Kashmiri, Khasi…", lesson: "T8", q: "Standard script today for", pairs: labRows("T8", 1) },
  { id: "days", ico: "📅", title: "Language days", sub: "Hindi Divas, Mother Language Day…", lesson: "T9", q: "Date of", rq: "Which day falls on", pairs: labRows("T9", 1) },
  { id: "families", ico: "🌳", title: "Language → family", sub: "Indo-Aryan, Dravidian, Austro-Asiatic, Tibeto-Burman", lesson: "T9", q: "Language family of", pairs: labRows("T9", 2) }
];
const LAB_CONF = {
  title: "Tribes & Tongues Lab", blurb: "Match each tribe to its home, each language to its year and each script to its language. Every right answer earns XP.",
  ranks: [[0,"Visitor","🧳"],[60,"Listener","👂"],[200,"Field Worker","📓"],[450,"Linguist","🗣️"],[900,"Anthropologist","🧭"]],
  decks: TL_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(TL_DECKS), list: () => TL_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "scripts", title: "Pair each script with its language", sub: "Flip cards — pair each script with the language it was made for" }
};
