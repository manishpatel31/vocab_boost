/* National Parks Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const NP_DECKS = [
  { id: "north", ico: "🏔️", title: "The North", sub: "Hemis to Dudhwa", lesson: "N2", q: "Which state or UT has", pairs: labRows("N2", 0) },
  { id: "west", ico: "🏜️", title: "The West", sub: "Ranthambore to Tadoba", lesson: "N3", q: "Which state or UT has", pairs: labRows("N3", 0) },
  { id: "centre", ico: "🐅", title: "The Centre", sub: "Kanha, Kuno, Indravati…", lesson: "N4", q: "Which state or UT has", pairs: labRows("N4", 0) },
  { id: "east", ico: "🐊", title: "The East", sub: "Valmiki to Khangchendzonga", lesson: "N5", q: "Which state or UT has", pairs: labRows("N5", 0) },
  { id: "ne", ico: "🦏", title: "The North-East", sub: "Kaziranga, Namdapha, Keibul Lamjao…", lesson: "N6", q: "Which state or UT has", pairs: labRows("N6", 0) },
  { id: "south", ico: "🐘", title: "The South", sub: "Bandipur to Guindy", lesson: "N7", q: "Which state or UT has", pairs: labRows("N7", 0) },
  { id: "islands", ico: "🏝️", title: "Islands, AP, Telangana", sub: "Buttons, marine parks, Hyderabad", lesson: "N8", q: "Which state or UT has", pairs: labRows("N8", 0) },
  { id: "animals", ico: "🦁", title: "Animal → Park", sub: "Lion, sangai, hangul…", lesson: "N9", q: "Best-known park for the", rq: "Which animal is famous at", pairs: labRows("N9", 0) },
  { id: "records", ico: "🏆", title: "Records", sub: "First, largest, smallest…", lesson: "N1", q: "", pairs: labRows("N1", 0) },
  { id: "heritage", ico: "🌏", title: "World Heritage Parks", sub: "When each was listed", lesson: "N10", q: "Listed in", pairs: labRows("N10", 0) }
];
const LAB_CONF = {
  title: "Safari Lab", blurb: "Drive across India one park at a time — the state, the animal, the record. Every right answer earns XP.",
  ranks: [[0,"Tourist","📷"],[60,"Guide","🧭"],[200,"Naturalist","🔭"],[450,"Ranger","🌿"],[900,"Chief Wildlife Warden","🐅"]],
  decks: NP_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(NP_DECKS), list: () => NP_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "animals", title: "Pair each animal with its park", sub: "Flip cards — pair each animal with the park it is famous for" }
};
