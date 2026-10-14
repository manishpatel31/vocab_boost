/* Classical Dances Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const CD_DECKS = [
  { id: "states", ico: "🗺️", title: "Dance ↔ State", sub: "The eight classical dances and Chhau", lesson: "L2", q: "State of", rq: "Classical dance of", pairs: labRows("L2", 0) },
  { id: "roots", ico: "🌱", title: "Roots", sub: "Sadir, Gotipua, Lai Haraoba…", lesson: "L2", q: "Roots of", rq: "Which dance grew out of:", pairs: labRows("L2", 1) },
  { id: "spot", ico: "🔍", title: "Spot the Dance", sub: "Tribhanga, tarangam, chakkar…", lesson: "L3", q: "Which dance:", pairs: labRows("L3", 0) },
  { id: "terms", ico: "🤲", title: "Terms", sub: "Nritta, nritya, mudra, rasa…", lesson: "L1", q: "Meaning of", rq: "Which term means:", pairs: labRows("L1", 0) },
  { id: "texts", ico: "📜", title: "Texts", sub: "Natya Shastra and friends", lesson: "L1", q: "Author of", rq: "Which text is by", pairs: labRows("L1", 1) },
  { id: "south", ico: "🪷", title: "Dancers of the South", sub: "Bharatanatyam, Kuchipudi, Kathakali, Mohiniyattam", lesson: "L4", q: "Dance of", pairs: labRows("L4") },
  { id: "northeast", ico: "💃", title: "Dancers of North & East", sub: "Kathak, Odissi, Manipuri, Sattriya, Chhau", lesson: "L5", q: "Dance of", pairs: labRows("L5") },
  { id: "schools", ico: "🏫", title: "Schools", sub: "Kalakshetra, Kalamandalam, Darpana…", lesson: "L6", q: "Where is", rq: "Which school is in", pairs: labRows("L6", 0) },
  { id: "fest", ico: "🎪", title: "Festivals", sub: "Khajuraho to Konark", lesson: "L7", q: "State of the", rq: "Festival held in", pairs: labRows("L7") },
  { id: "padma", ico: "🏅", title: "Padma Vibhushan", sub: "Which year did they get it?", lesson: "L8", q: "Padma Vibhushan year of", pairs: labRows("L8", 0) },
  { id: "makeup", ico: "🎭", title: "Kathakali Make-up", sub: "Pacha, kathi, thadi, kari, minukku", lesson: "L3", q: "Who wears the Kathakali make-up", rq: "Which Kathakali make-up is for:", pairs: labRows("L3", 1) },
  { id: "folk", ico: "🥁", title: "Folk, Not Classical", sub: "Bihu, Yakshagana, Garba…", lesson: "L9", q: "State of folk dance", pairs: labRows("L9", 0) }
];
const LAB_CONF = {
  title: "Natya Lab", blurb: "Match every dance to its state, every dancer to their dance, every festival to its temple town. Every right answer earns XP.",
  ranks: [[0,"Shishya","🪔"],[60,"Rasika","🎶"],[200,"Nartaki","💃"],[450,"Guru","🪷"],[900,"Nataraja","🔱"]],
  decks: CD_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(CD_DECKS), list: () => CD_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "states", title: "Pair each dance with its state", sub: "Flip cards — pair each classical dance with its home state" }
};
