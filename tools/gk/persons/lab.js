/* Famous Personalities Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const PP_DECKS = [
  { id: "titles", ico: "🇮🇳", title: "Title → Leader", sub: "Netaji, Lokmanya, Deshbandhu…", lesson: "P1", q: "Who is known as", rq: "Which title belongs to", pairs: labRows("P1", 0) },
  { id: "givers", ico: "🎖️", title: "Who Gave the Title?", sub: "Tagore, Bose, Bardoli, Chirol…", lesson: "P1", q: "Who gave the title", pairs: labRows("P1", 1) },
  { id: "kesari", ico: "🦁", title: "Kesaris and Regional Titles", sub: "Punjab, Andhra, Bihar, Utkal…", lesson: "P2", q: "Who was known as", rq: "Which title belongs to", pairs: labRows("P2", 0) },
  { id: "modern", ico: "💧", title: "Titles after 1947", sub: "Waterman, Forest Man, Padman…", lesson: "P2", q: "Who is called the", rq: "Which title belongs to", pairs: labRows("P2", 1) },
  { id: "reform", ico: "🕯️", title: "Reformers and Women", sub: "Krantijyoti, Periyar, Nightingale…", lesson: "P3", q: "Who is remembered as", rq: "Which title belongs to", pairs: labRows("P3", 0) }
];
const LAB_CONF = {
  title: "Hall of Names", blurb: "Every great Indian carries a name the people gave — match the title, the slogan, the samadhi and the pen name. Every right answer earns XP.",
  ranks: [[0,"Listener","👂"],[60,"Storyteller","📖"],[200,"Chronicler","🖋️"],[450,"Historian","📜"],[900,"Keeper of Names","🏛️"]],
  decks: PP_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(PP_DECKS), list: () => PP_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "titles", title: "Pair each title with its leader", sub: "Flip cards — pair each title with the leader who carried it" }
};
