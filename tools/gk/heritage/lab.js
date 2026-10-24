/* Heritage Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const HM_SITES = ["H2", "H3", "H4", "H5", "H6"];
const HM_DECKS = [
  { id: "ancient", ico: "🪷", title: "Ancient & Buddhist → State", sub: "Bhimbetka to Sarnath", lesson: "H2", q: "Which state has", pairs: labRows("H2", 0) },
  { id: "temples", ico: "🛕", title: "Temple Sites → State", sub: "Mahabalipuram to the Hoysalas", lesson: "H3", q: "Which state has", pairs: labRows("H3", 0) },
  { id: "forts", ico: "🏰", title: "Mughal & Forts → State", sub: "Taj Mahal to the Moidams", lesson: "H4", q: "Where is", pairs: labRows("H4", 0) },
  { id: "cities", ico: "🚂", title: "Cities & Railways → State", sub: "Old Goa to Santiniketan", lesson: "H5", q: "Where is", pairs: labRows("H5", 0).concat(labRows("H5", 1)) },
  { id: "nature", ico: "🦏", title: "Natural Sites → State", sub: "Kaziranga to Khangchendzonga", lesson: "H6", q: "Where is", pairs: labRows("H6", 0) },
  { id: "years", ico: "📅", title: "Site → Year Inscribed", sub: "From 1983 to 2026", lesson: "H1", q: "Inscribed in which year:",
    pairs: HM_SITES.flatMap(id => labRows(id, 0).map(r => [r[0], r[2].replace(/\s*\(.*\)$/, ""), r[1]])) },
  { id: "dynasty", ico: "👑", title: "Temple Site → Dynasty", sub: "Pallava, Chola, Hoysala…", lesson: "H3", q: "Built by which dynasty:",
    pairs: (LESSONS.find(l => l.id === "H3").blocks.find(b => b.k === "table").rows).map(r => [r[0].replace(/<[^>]+>/g, ""), r[3], r[1]]) },
  { id: "builders", ico: "🕌", title: "Monument → Builder", sub: "Sultans, Mughals, Deccan", lesson: "H7", q: "Who built", pairs: labRows("H7", 0) },
  { id: "builders2", ico: "🏛️", title: "Monument → Builder II", sub: "Rajput, colonial, modern", lesson: "H7", q: "Who built or designed", pairs: labRows("H7", 1) },
  { id: "templest", ico: "🔔", title: "Famous Temple → State", sub: "Kamakhya, Dilwara, Modhera…", lesson: "H8", q: "Which state has the", pairs: labRows("H8", 1) },
  { id: "styles", ico: "📐", title: "Temple → Style", sub: "Nagara, Dravida or Vesara?", lesson: "H8", q: "Which style is", pairs: labRows("H8", 2) },
  { id: "ich", ico: "🪔", title: "Intangible Element → State", sub: "Garba, Chhau, Ramman…", lesson: "H9", q: "Where is it from:", pairs: labRows("H9", 0) },
  { id: "ichyear", ico: "🗓️", title: "Intangible Element → Year", sub: "Koodiyattam to Deepavali", lesson: "H9", q: "Inscribed in which year:", pairs: labRows("H9", 0).map(r => [r[0], r[2], r[1]]) },
  { id: "creative", ico: "🎵", title: "Creative City → Field", sub: "Music, film, food, crafts…", lesson: "H9", q: "Creative City of what:", pairs: labRows("H9", 2) },
  { id: "notes", ico: "💵", title: "Banknote → Site", sub: "₹10 to ₹500", lesson: "H10", q: "On the back of the", pairs: labRows("H10", 0) },
  { id: "nick", ico: "🏷️", title: "Nickname → Monument", sub: "Black Pagoda, Baby Taj…", lesson: "H10", q: "Which is the", pairs: labRows("H10", 1) }
];
const LAB_CONF = {
  title: "Heritage Lab", blurb: "Tour India one monument at a time — the state, the builder, the year it was listed. Every right answer earns XP.",
  ranks: [[0,"Visitor","🎟️"],[60,"Guide","🧭"],[200,"Curator","🏺"],[450,"Archaeologist","⛏️"],[900,"Director-General, ASI","🏛️"]],
  decks: HM_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(HM_DECKS), list: () => HM_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "builders", title: "Pair each monument with its builder", sub: "Flip cards — pair each monument with the ruler who built it" }
};
