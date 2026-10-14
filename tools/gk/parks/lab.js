/* Protected Areas Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const PA_DECKS = [
  { id: "parks", ico: "🏞️", title: "National Parks", sub: "Which state is it in?", lesson: "P2", q: "State of", pairs: labRows("P2") },
  { id: "sanct", ico: "🦌", title: "Sanctuaries", sub: "Which state is it in?", lesson: "P3", q: "State of", pairs: labRows("P3") },
  { id: "tiger", ico: "🐅", title: "Tiger Reserves", sub: "All 58 — where are they?", lesson: "P4", q: "State of", pairs: labRows("P4") },
  { id: "bio", ico: "🌳", title: "Biosphere Reserves", sub: "The 18 and their states", lesson: "P5", q: "State of", pairs: labRows("P5") },
  { id: "ramsar", ico: "🦩", title: "Ramsar Sites", sub: "Wetlands and their states", lesson: "P6", q: "State of", pairs: labRows("P6", 0) },
  { id: "heritage", ico: "🏛️", title: "World Heritage", sub: "Which state is the site in?", lesson: "P7", q: "State of", pairs: labRows("P7") },
  { id: "animals", ico: "🦏", title: "Who Lives Where", sub: "Animal → its famous home", lesson: "P8", q: "Home of the", rq: "Famous animal of", pairs: labRows("P8") },
  { id: "years", ico: "📅", title: "Laws & Projects", sub: "Wildlife Act to Project Cheetah", lesson: "P1", q: "Year of", rq: "Which came in", pairs: labRows("P1", 0) },
  { id: "iucn", ico: "🚦", title: "Red List", sub: "How endangered is it?", lesson: "P8", q: "IUCN status of", pairs: labRows("P8", 1) }
];
const LAB_CONF = {
  title: "Wild India Lab", blurb: "Put every park, reserve, wetland and heritage site on the map in your head. Every right answer earns XP.",
  ranks: [[0,"Visitor","🎒"],[60,"Guide","🧭"],[200,"Ranger","🌲"],[450,"Warden","🦉"],[900,"Tiger Guardian","🐅"]],
  decks: PA_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(PA_DECKS), list: () => PA_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "animals", title: "Pair each animal with its home", sub: "Flip cards — pair each animal with the park it's famous for" }
};
