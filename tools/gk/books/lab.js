/* Books & Authors Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const BK_DECKS = [
  { id: "ancient", ico: "📜", title: "Ancient Library", sub: "Sanskrit, Tamil and the travellers", lesson: "B1", q: "Who wrote", rq: "Which book is by", pairs: labRows("B1") },
  { id: "medieval", ico: "🕌", title: "Mughal Bookshelf", sub: "Memoirs, court histories, Bhakti poets", lesson: "B2", q: "Who wrote", rq: "Which work is by", pairs: labRows("B2") },
  { id: "freedom", ico: "✊", title: "Freedom Pens", sub: "Books of the national movement", lesson: "B3", q: "Who wrote", rq: "Which book is by", pairs: labRows("B3") },
  { id: "papers", ico: "📰", title: "Press Room", sub: "Which leader ran which paper?", lesson: "B3", q: "Who ran", pairs: labRows("B3", 1) },
  { id: "hindi", ico: "🪔", title: "Hindi & Regional", sub: "Godan to Pather Panchali", lesson: "B4", q: "Who wrote", rq: "Which book is by", pairs: labRows("B4") },
  { id: "pens", ico: "🖋️", title: "Pen Name Detective", sub: "Who is really behind the name?", lesson: "B4", q: "Real name of", rq: "Pen name of", pairs: labRows("B4", 1) },
  { id: "english", ico: "📗", title: "Booker Shelf", sub: "Indian writing in English", lesson: "B5", q: "Who wrote", rq: "Which book is by", pairs: labRows("B5") },
  { id: "leaders", ico: "🎙️", title: "Life Stories", sub: "Autobiographies of leaders", lesson: "B6", q: "Whose book is", rq: "Which book is by", pairs: labRows("B6") },
  { id: "sports", ico: "🏏", title: "Sports Shelf", sub: "Champions and their books", lesson: "B7", q: "Whose book is", rq: "Which book is by", pairs: labRows("B7") },
  { id: "world", ico: "🌍", title: "World Classics", sub: "Thinkers and great novels", lesson: "B8", q: "Who wrote", rq: "Which book is by", pairs: labRows("B8") },
  { id: "recent", ico: "🆕", title: "New Releases", sub: "Prize-winners 2022–2026", lesson: "B9", q: "Who wrote", rq: "Which book is by", pairs: labRows("B9") }
];
const LAB_CONF = {
  title: "Books Lab", blurb: "Match books to their authors at speed — the way the paper asks. Every right answer earns XP.",
  ranks: [[0,"Reader","📖"],[60,"Bookworm","🐛"],[200,"Librarian","📚"],[450,"Critic","🧐"],[900,"Laureate","🏅"]],
  decks: BK_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Every shelf at once — the real exam feel", q: "", make: () => labMix(BK_DECKS), list: () => BK_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "world", title: "Pair each book with its author", sub: "Flip cards — pair each classic with its writer" }
};
