/* Music Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const MU_DECKS = [
  { id: "class", ico: "🗂️", title: "Four Classes", sub: "Tata, sushira, avanaddha or ghana?", lesson: "M1", q: "Class of the", pairs: labRows("M1") },
  { id: "strings", ico: "🎻", title: "String Maestros", sub: "Sitar, sarod, santoor, violin…", lesson: "M2", q: "Instrument of", rq: "Maestro of the", pairs: labRows("M2") },
  { id: "beats", ico: "🥁", title: "Wind & Rhythm Maestros", sub: "Shehnai, flute, tabla, mridangam…", lesson: "M3", q: "Instrument of", rq: "Maestro of the", pairs: labRows("M3") },
  { id: "names", ico: "📜", title: "Who's Who", sub: "Trinity, Tansen, Khusrau…", lesson: "M4", q: "", pairs: labRows("M4") },
  { id: "gharana", ico: "🏠", title: "Gharanas", sub: "Which school did they sing in?", lesson: "M5", q: "Gharana of", pairs: labRows("M5") },
  { id: "raga", ico: "🌅", title: "Raga Clock", sub: "Which time or season?", lesson: "M6", q: "Time of raga", pairs: labRows("M6", 0) },
  { id: "terms", ico: "🎼", title: "Music Words", sub: "Tala, alap, thaat, khayal…", lesson: "M6", q: "Meaning of", rq: "Which term:", pairs: labRows("M6", 1) },
  { id: "singers", ico: "🎤", title: "Singers", sub: "Hindustani, Carnatic, ghazal or folk?", lesson: "M7", q: "Style of", pairs: labRows("M7") },
  { id: "ratna", ico: "🏅", title: "Bharat Ratna Musicians", sub: "Who got it, and when?", lesson: "M8", q: "Bharat Ratna year of", pairs: labRows("M8", 0) },
  { id: "grammy", ico: "🏆", title: "Indian Grammys", sub: "Who won it for what?", lesson: "M8", q: "Grammy-winning work of", rq: "Who won a Grammy for", pairs: labRows("M8", 1) },
  { id: "folk", ico: "🪕", title: "Folk Instruments", sub: "Which state is it from?", lesson: "M9", q: "State of the", pairs: labRows("M9") }
];
const LAB_CONF = {
  title: "Music Lab", blurb: "Tune your memory: every maestro, raga, gharana and folk instrument until it sticks. Every right answer earns XP.",
  ranks: [[0,"Listener","🎧"],[60,"Shishya","🪘"],[200,"Riyaz Regular","🎶"],[450,"Pandit / Ustad","🎻"],[900,"Bharat Ratna Maestro","🏅"]],
  decks: MU_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(MU_DECKS), list: () => MU_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "grammy", title: "Pair each musician with their Grammy", sub: "Flip cards — pair each Indian musician with the work that won a Grammy" }
};
