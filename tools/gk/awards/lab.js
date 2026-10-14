/* Awards Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const AW_DECKS = [
  { id: "bharat", ico: "🏅", title: "Bharat Ratna", sub: "Who got it, and when?", lesson: "A1", q: "Bharat Ratna year of", pairs: labRows("A1") },
  { id: "padma", ico: "🌸", title: "Padma Vibhushan", sub: "Recent recipients", lesson: "A2", q: "Padma Vibhushan year of", pairs: labRows("A2") },
  { id: "litaw", ico: "📜", title: "Literary Awards", sub: "Jnanpith, Sahitya Akademi, Vyas…", lesson: "A3", q: "What is the", rq: "Which award is", pairs: labRows("A3") },
  { id: "litwin", ico: "✍️", title: "Literary Winners", sub: "Who won which award?", lesson: "A3", q: "Award won by", pairs: labRows("A3", 1) },
  { id: "phalke", ico: "🎬", title: "Phalke Winners", sub: "Devika Rani to today", lesson: "A4", q: "Phalke Award year of", pairs: labRows("A4", 1) },
  { id: "global", ico: "🏆", title: "Oscars, Grammys & Cannes", sub: "Indians on the world stage", lesson: "A4", q: "What did this winner get:", pairs: labRows("A4", 2) },
  { id: "sport", ico: "🥇", title: "Sports Awards", sub: "Khel Ratna, Arjuna, Dronacharya…", lesson: "A5", q: "What is the", rq: "Which award is", pairs: labRows("A5") },
  { id: "nobel", ico: "🎖️", title: "Indian Nobels", sub: "Tagore to Banerjee", lesson: "A6", q: "Nobel field and year of", rq: "Nobel in", pairs: labRows("A6") },
  { id: "nick", ico: "🌍", title: "Award Nicknames", sub: "Asia's Nobel, Green Nobel…", lesson: "A7", q: "", rq: "Which award is", pairs: labRows("A7") },
  { id: "latest", ico: "🆕", title: "Nobel 2025–26", sub: "The newest laureates", lesson: "A8", q: "Nobel", pairs: labRows("A8") }
];
const LAB_CONF = {
  title: "Awards Lab", blurb: "Match every award to its winner, year and meaning until it sticks. Every right answer earns XP.",
  ranks: [[0,"Nominee","🎟️"],[60,"Finalist","📜"],[200,"Laureate","🏅"],[450,"Padma Shri","🌸"],[900,"Bharat Ratna","🇮🇳"]],
  decks: AW_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(AW_DECKS), list: () => AW_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "nobel", title: "Pair each laureate with their Nobel", sub: "Flip cards — pair each Indian laureate with field and year" }
};
