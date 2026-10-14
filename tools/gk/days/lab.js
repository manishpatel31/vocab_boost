/* Important Days Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const DY_DECKS = [
  { id: "people", ico: "🎂", title: "Birthday Days", sub: "Whose birthday is this day?", lesson: "D1", q: "Who is honoured on", pairs: labRows("D1", 1) },
  { id: "national", ico: "🇮🇳", title: "India's Calendar", sub: "Days that honour people — dates", lesson: "D1", q: "When is", rq: "Which day is on", pairs: labRows("D1") },
  { id: "events", ico: "🗓️", title: "Event Days", sub: "Science Day to Constitution Day", lesson: "D2", q: "When is", rq: "Which day is on", pairs: labRows("D2") },
  { id: "forces", ico: "🎖️", title: "Forces Days", sub: "Army, Navy, Air Force and more", lesson: "D3", q: "When is", rq: "Which day is on", pairs: labRows("D3") },
  { id: "w1", ico: "❄️", title: "World Days · Jan–Apr", sub: "Hindi Day to Book Day", lesson: "D4", q: "When is", rq: "Which day is on", pairs: labRows("D4") },
  { id: "w2", ico: "☀️", title: "World Days · May–Aug", sub: "Labour Day to Youth Day", lesson: "D5", q: "When is", rq: "Which day is on", pairs: labRows("D5") },
  { id: "w3", ico: "🍂", title: "World Days · Sep–Dec", sub: "Literacy Day to Human Rights Day", lesson: "D6", q: "When is", rq: "Which day is on", pairs: labRows("D6") },
  { id: "health", ico: "🩺", title: "Health Days", sub: "WHO days and the scientists behind them", lesson: "D7", q: "When is", rq: "Which health day is on", pairs: labRows("D7") },
  { id: "nature", ico: "🌿", title: "Nature Days", sub: "Wetlands, wildlife, ozone, tigers", lesson: "D8", q: "When is", rq: "Which day is on", pairs: labRows("D8") },
  { id: "moving", ico: "🔄", title: "Moving Dates", sub: "Second Sunday, last Saturday…", lesson: "D9", q: "When is", pairs: labRows("D9") }
];
const LAB_CONF = {
  title: "Days Lab", blurb: "Beat the calendar: match each day to its date at speed. Every right answer earns XP.",
  ranks: [[0,"Calendar newbie","📅"],[60,"Date keeper","🗓️"],[200,"Almanac","📆"],[450,"Time lord","⏳"],[900,"Living calendar","🏅"]],
  decks: DY_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "All days at once — the real exam feel", q: "", make: () => labMix(DY_DECKS), list: () => DY_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "people", title: "Pair each day with its person", sub: "Flip cards — pair each day with the person it honours" }
};
