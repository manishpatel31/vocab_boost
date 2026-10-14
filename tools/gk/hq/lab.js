/* Headquarters & Founders Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const HQ_DECKS = [
  { id: "un", ico: "🇺🇳", title: "The UN Family", sub: "Which city is it in?", lesson: "H1", q: "Headquarters of", pairs: labRows("H1") },
  { id: "world", ico: "🌍", title: "Banks & Blocs", sub: "IMF to Interpol", lesson: "H2", q: "Headquarters of", pairs: labRows("H2") },
  { id: "sport", ico: "🏟️", title: "Sports Bodies", sub: "FIFA, IOC, ICC, BCCI…", lesson: "H3", q: "Headquarters of", pairs: labRows("H3").concat(labRows("H3", 1)) },
  { id: "science", ico: "🚀", title: "Science Centres", sub: "ISRO, BARC, surveys, CSIR labs", lesson: "H4", q: "Where is the", pairs: labRows("H4").concat(labRows("H4", 1)) },
  { id: "farm", ico: "🌾", title: "Farms & Boards", sub: "Research institutes and commodity boards", lesson: "H5", q: "Where is the", pairs: labRows("H5").concat(labRows("H5", 1)) },
  { id: "banks", ico: "🏦", title: "Banks & Regulators", sub: "RBI to UCO Bank", lesson: "H6", q: "Head office of", pairs: labRows("H6").concat(labRows("H6", 1)) },
  { id: "india", ico: "🇮🇳", title: "Indian Founders", sub: "Tata to Zomato", lesson: "H7", q: "Who founded", pairs: labRows("H7") },
  { id: "global", ico: "💻", title: "Global Founders", sub: "Microsoft to OpenAI", lesson: "H8", q: "Who founded", pairs: labRows("H8") },
  { id: "reform", ico: "🕯️", title: "Reformers & Parties", sub: "Brahmo Samaj to Forward Bloc", lesson: "H9", q: "Who founded the", pairs: labRows("H9") },
  { id: "papers", ico: "📰", title: "Newspapers", sub: "Kesari, Young India, Al-Hilal…", lesson: "H9", q: "Who started", pairs: labRows("H9", 2) },
  { id: "mottos", ico: "🏛️", title: "Mottos", sub: "Satyameva Jayate and more", lesson: "H10", q: "Motto or tagline of", rq: "Whose motto or tagline is", pairs: labRows("H10").concat(labRows("H10", 1)) }
];
const LAB_CONF = {
  title: "HQ Lab", blurb: "Put every organisation in its city and every company with its founder. Every right answer earns XP.",
  ranks: [[0,"Intern","🪪"],[60,"Clerk","🗂️"],[200,"Manager","💼"],[450,"Director","🏢"],[900,"Founder","🚀"]],
  decks: HQ_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(HQ_DECKS), list: () => HQ_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "reform", title: "Pair each body with its founder", sub: "Flip cards — pair each reform body or party with its founder" }
};
