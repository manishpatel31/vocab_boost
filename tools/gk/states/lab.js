/* States & UTs Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const REG = ["S2","S3","S4","S5","S6","S7"];
const SU_DECKS = [
  { id: "caps", ico: "🏛️", title: "Capitals", sub: "Every state and UT capital", lesson: "S2", q: "Capital of", rq: "Whose capital is", pairs: REG.flatMap(l => labRows(l, 0)).concat(labRows("S8", 0)) },
  { id: "which", ico: "🗺️", title: "Which State Is It?", sub: "Nicknames, history, landmarks", lesson: "S2", q: "Which state", pairs: REG.flatMap(l => labRows(l, 1)) },
  { id: "years", ico: "📅", title: "The Changing Map", sub: "1953 to 2024 — when did it happen?", lesson: "S1", q: "When was this:", rq: "What happened in", pairs: labRows("S1", 0) },
  { id: "carved", ico: "✂️", title: "Carved Out Of", sub: "Each new state and its parent", lesson: "S1", q: "Parent of", rq: "Which new state came out of", pairs: labRows("S1", 1) },
  { id: "zonal", ico: "🧭", title: "Zonal Councils", sub: "Northern, Central, Eastern…", lesson: "S1", q: "Which council has", pairs: labRows("S1", 2) },
  { id: "uts", ico: "🏝️", title: "Union Territories", sub: "Largest, smallest, firsts", lesson: "S8", q: "Which Union Territory", pairs: labRows("S8", 1) },
  { id: "hc", ico: "⚖️", title: "High Court Seats", sub: "Not always the capital!", lesson: "S9", q: "High court seat for", rq: "Main high court at", pairs: labRows("S9", 0) },
  { id: "bench", ico: "🔨", title: "Benches", sub: "Lucknow, Indore, Madurai…", lesson: "S9", q: "Which high court has a bench at", pairs: labRows("S9", 1) },
  { id: "lang", ico: "🗣️", title: "Official Languages", sub: "From English to Konkani", lesson: "S9", q: "Official language of", rq: "Whose official language is", pairs: labRows("S9", 2) },
  { id: "records", ico: "🏆", title: "Records", sub: "Largest, smallest, densest", lesson: "S10", q: "Which state", pairs: labRows("S10", 0) },
  { id: "animals", ico: "🦏", title: "State Animals", sub: "Lion, rhino, sangai…", lesson: "S10", q: "State animal of", rq: "Whose state animal is this:", pairs: labRows("S10", 1) },
  { id: "birds", ico: "🦚", title: "State Birds", sub: "Bustard, sarus, monal…", lesson: "S10", q: "State bird of", rq: "Whose state bird is this:", pairs: labRows("S10", 2) }
];
const LAB_CONF = {
  title: "Map of India Lab", blurb: "Put every state and UT on the map in your head — capitals, birthdays, courts and records. Every right answer earns XP.",
  ranks: [[0,"Traveller","🎒"],[60,"Tehsildar","📜"],[200,"Collector","🗂️"],[450,"Governor’s Aide","🏛️"],[900,"Cartographer","🗺️"]],
  decks: SU_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(SU_DECKS), list: () => SU_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "caps", title: "Pair each state with its capital", sub: "Flip cards — pair each state or UT with its capital" }
};
