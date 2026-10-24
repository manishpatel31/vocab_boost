/* Famous Personalities Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const PP_DECKS = [
  { id: "titles", ico: "🇮🇳", title: "Title → Leader", sub: "Netaji, Lokmanya, Deshbandhu…", lesson: "P1", q: "Who is known as", rq: "Which title belongs to", pairs: labRows("P1", 0) },
  { id: "givers", ico: "🎖️", title: "Who Gave the Title?", sub: "Tagore, Bose, Bardoli, Chirol…", lesson: "P1", q: "Who gave the title", pairs: labRows("P1", 1) },
  { id: "kesari", ico: "🦁", title: "Kesaris and Regional Titles", sub: "Punjab, Andhra, Bihar, Utkal…", lesson: "P2", q: "Who was known as", rq: "Which title belongs to", pairs: labRows("P2", 0) },
  { id: "modern", ico: "💧", title: "Titles after 1947", sub: "Waterman, Forest Man, Padman…", lesson: "P2", q: "Who is called", rq: "Which title belongs to", pairs: labRows("P2", 1) },
  { id: "reform", ico: "🕯️", title: "Reformers and Women", sub: "Krantijyoti, Periyar, Nightingale…", lesson: "P3", q: "Who is remembered as", rq: "Which title belongs to", pairs: labRows("P3", 0) },
  { id: "sportin", ico: "🏏", title: "Nickname → Indian Sportsperson", sub: "Flying Sikh, Payyoli Express, Hitman…", lesson: "P4", q: "Who is nicknamed", rq: "Nickname of", pairs: labRows("P4", 0) },
  { id: "sportw", ico: "🏅", title: "Nickname → World Sportsperson", sub: "The Don, Black Pearl, King of Clay…", lesson: "P4", q: "Who is nicknamed", rq: "Nickname of", pairs: labRows("P4", 1) },
  { id: "film", ico: "🎬", title: "Film Titles", sub: "Tragedy King, Showman, Dream Girl…", lesson: "P5", q: "Which star is called", rq: "Title of", pairs: labRows("P5", 0) },
  { id: "arts", ico: "🎨", title: "Music, Art and Letters", sub: "Swar Kokila, Mozart of Madras…", lesson: "P5", q: "Who is called", rq: "Title of", pairs: labRows("P5", 1) },
  { id: "world", ico: "🌍", title: "Nickname → World Figure", sub: "Iron Lady, Desert Fox, Madiba…", lesson: "P6", q: "Who is known as", rq: "Nickname of", pairs: labRows("P6", 0) },
  { id: "fathers", ico: "🏛️", title: "Fathers of Nations", sub: "Pakistan, Turkey, Ghana, Myanmar…", lesson: "P6", q: "Father of the Nation of", rq: "Father of the Nation of which country:", pairs: labRows("P6", 1) },
  { id: "slogans", ico: "📣", title: "Slogan → Speaker", sub: "Birthright, Do or Die, Garibi Hatao…", lesson: "P7", q: "Whose words:", pairs: labRows("P7", 0) },
  { id: "songs", ico: "🎶", title: "Lines → Writer", sub: "Saare Jahan Se Achha, Jhanda Ooncha…", lesson: "P7", q: "Who wrote:", pairs: labRows("P7", 1) },
  { id: "wquotes", ico: "💬", title: "World Quotes", sub: "I have a dream, Veni vidi vici…", lesson: "P7", q: "Who said:", pairs: labRows("P7", 2) },
  { id: "samadhi", ico: "🕊️", title: "Samadhi → Leader", sub: "Raj Ghat, Shanti Van, Kisan Ghat…", lesson: "P8", q: "Whose memorial is", rq: "Which samadhi belongs to", pairs: labRows("P8", 0) },
  { id: "statues", ico: "🗽", title: "Statue → Person", sub: "Unity, Equality, Social Justice…", lesson: "P8", q: "Whom does this honour:", rq: "Which statue honours", pairs: labRows("P8", 1) },
  { id: "born", ico: "🏠", title: "Birthplaces", sub: "Porbandar, Cuttack, Mhow, Nadiad…", lesson: "P9", q: "Where was this person born:", rq: "Who was born at", pairs: labRows("P9", 0) },
  { id: "places", ico: "📍", title: "Place → Person", sub: "Sabarmati, Santiniketan, Belur Math…", lesson: "P9", q: "Who is linked with", rq: "Which place is linked with", pairs: labRows("P9", 1) },
  { id: "pen", ico: "🖋️", title: "Pen Name → Real Name", sub: "Bachchan, Bhanusimha, Orwell…", lesson: "P9", q: "Real name of the writer", rq: "Pen name of", pairs: labRows("P9", 2) },
  { id: "realnames", ico: "🪪", title: "Born With Another Name", sub: "Vivekananda, Nivedita, Dilip Kumar…", lesson: "P10", q: "Original name of", rq: "Who was born", pairs: labRows("P10", 0) }
];
const LAB_CONF = {
  title: "Hall of Names", blurb: "Every great name carries a story — match the title, the slogan, the samadhi and the pen name. Every right answer earns XP.",
  ranks: [[0,"Listener","👂"],[60,"Storyteller","📖"],[200,"Chronicler","🖋️"],[450,"Historian","📜"],[900,"Keeper of Names","🏛️"]],
  decks: PP_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(PP_DECKS), list: () => PP_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "samadhi", title: "Pair each samadhi with its leader", sub: "Flip cards — pair each samadhi or memorial ghat with its leader" }
};
