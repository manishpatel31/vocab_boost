/* Environment Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const EN_DECKS = [
  { id: "terms", ico: "📖", title: "Ecology Terms", sub: "Niche, ecotone, biome…", lesson: "E1", q: "Meaning of", rq: "Which term means:", pairs: labRows("E1", 0) },
  { id: "coined", ico: "🧑‍🔬", title: "Who Coined It", sub: "Haeckel, Tansley, Myers…", lesson: "E1", q: "Who coined", rq: "Which term was coined by", pairs: labRows("E1", 1) },
  { id: "chain", ico: "🐸", title: "Food Chain Roles", sub: "Producer, consumer, decomposer", lesson: "E2", q: "Role of", pairs: labRows("E2", 0) },
  { id: "nitro", ico: "🦠", title: "Nitrogen Cycle", sub: "Which microbe does it?", lesson: "E3", q: "", rq: "What does this microbe do:", pairs: labRows("E3", 0) },
  { id: "grass", ico: "🌾", title: "Grasslands", sub: "Pampas, Veld, Downs…", lesson: "E3", q: "Where are the", rq: "Which grassland is in", pairs: labRows("E3", 1) },
  { id: "redlist", ico: "🚦", title: "Red List Codes", sub: "EX, CR, EN, VU…", lesson: "E4", q: "IUCN code meaning:", rq: "IUCN code for:", pairs: labRows("E4", 1) },
  { id: "groves", ico: "🌳", title: "Sacred Groves", sub: "Local name → state", lesson: "E4", q: "Sacred grove of which state:", pairs: labRows("E4", 2) },
  { id: "diseases", ico: "☠️", title: "Pollution Diseases", sub: "Minamata, Itai-itai…", lesson: "E6", q: "Cause of", rq: "Which disease is caused by", pairs: labRows("E6", 0) },
  { id: "ghg", ico: "🌡️", title: "Greenhouse Gases", sub: "Where does each come from?", lesson: "E7", q: "Main source of", rq: "Which gas comes from:", pairs: labRows("E7", 0) },
  { id: "treaty", ico: "📜", title: "Treaties & Subjects", sub: "Montreal, Basel, Cartagena…", lesson: "E8", q: "What does this treaty deal with:", rq: "Which treaty deals with:", pairs: labRows("E8", 1) },
  { id: "years", ico: "📅", title: "Treaty Years", sub: "Ramsar 1971 to Kunming 2022", lesson: "E8", q: "Year of", rq: "Which came in", pairs: labRows("E8", 0) },
  { id: "cop", ico: "🌍", title: "Climate COPs", sub: "Berlin to Belém", lesson: "E9", q: "Venue of", rq: "Which COP was held in", pairs: labRows("E9", 0) },
  { id: "people", ico: "🌱", title: "Green Heroes", sub: "Movements and their leaders", lesson: "E10", q: "What is this person known for:", rq: "Who is known for:", pairs: labRows("E10", 2) }
];
const LAB_CONF = {
  title: "Green Earth Lab", blurb: "Lock in every treaty, term, pollutant and green hero. Every right answer earns XP.",
  ranks: [[0,"Seedling","🌱"],[60,"Sapling","🌿"],[200,"Forester","🌲"],[450,"Eco Warrior","🦋"],[900,"Earth Guardian","🌍"]],
  decks: EN_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(EN_DECKS), list: () => EN_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "diseases", title: "Pair each disease with its cause", sub: "Flip cards — pair each pollution disease with the metal or dust behind it" }
};
