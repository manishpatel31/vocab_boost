/* Cloze & RC Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js.
   Every deck's table is written so that each prompt has one right answer among the deck's answers. */
const CZ_STRIP = s => String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();
const CZ_TABLE = (id, n) => { const l = LESSONS.find(x => x.id === id); return l.blocks.filter(b => b.k === "table")[n].rows.map(r => r.map(CZ_STRIP)); };
const CZ_DECKS = [
  { id: "verbs", ico: "🧩", title: "Verb + Noun", sub: "make, do, take, pay, catch, keep…", lesson: "CZ2", q: "Which verb fills the blank:", pairs: labRows("CZ2", 0) },
  { id: "pairs", ico: "🔗", title: "Fixed Pairs", sub: "safe and sound, null and void…", lesson: "CZ2", q: "Complete the pair:", pairs: labRows("CZ2", 1) },
  { id: "preps", ico: "📍", title: "Word + Preposition", sub: "accused of, depend on, prefer to…", lesson: "CZ3", q: "Which preposition:", pairs: labRows("CZ3", 0) },
  { id: "links", ico: "🚦", title: "Connector Jobs", sub: "Contrast, result, addition, condition…", lesson: "CZ4", q: "What job does this connector do:", pairs: labRows("CZ4", 0) },
  { id: "pairwords", ico: "🤝", title: "Words in Pairs", sub: "No sooner … than, hardly … when", lesson: "CZ4", q: "What completes the pair:", pairs: labRows("CZ4", 1) },
  { id: "tense", ico: "⏳", title: "Signal → Tense", sub: "since, by the time, yesterday…", lesson: "CZ5", q: "Which tense or form goes with:", pairs: labRows("CZ5", 0) },
  { id: "form", ico: "🔧", title: "Verb Form After…", sub: "-ing, to + V1, V1 or V3?", lesson: "CZ5", q: "Which form follows:", pairs: labRows("CZ5", 1) },
  { id: "shade", ico: "🎭", title: "Approving or Not?", sub: "thrifty or miserly, firm or stubborn", lesson: "CZ6", q: "Approving or disapproving:", opts: ["Approving (+)", "Disapproving (−)"], pairs: labRows("CZ6", 1) },
  { id: "aan", ico: "🔤", title: "a or an?", sub: "Go by the sound: an hour, a university", lesson: "CZ7", q: "a or an:", opts: ["a", "an"], pairs: labRows("CZ7", 0) },
  { id: "the", ico: "📰", title: "the, or No Article?", sub: "the Ganga, Mount Everest, play cricket", lesson: "CZ7", q: "Which fits the blank:", opts: ["the", "no article"], pairs: labRows("CZ7", 1) },
  { id: "qtypes", ico: "🔎", title: "Name the RC Question", sub: "Main idea, fact, inference, vocabulary, tone", lesson: "CZ1", q: "What type of question is this:", pairs: labRows("CZ1", 1) },
  { id: "tones", ico: "🎨", title: "Tone Words", sub: "ironic, nostalgic, didactic, cynical…", lesson: "CZ12", q: "Meaning of the tone word:", rq: "Which tone word means:", pairs: labRows("CZ12", 0) }
];
// Look-alikes: each sentence offers only its right word and its look-alike, so no other word in the deck can also fit.
const CZ_WORDS = { id: "words", ico: "👯", title: "Look-alike Words", sub: "affect or effect? principal or principle?", lesson: "CZ6",
  pairs: labRows("CZ6", 0),
  make: () => CZ_TABLE("CZ6", 0).map(r => ({ p: r[0], a: r[1], note: r[3], wrong: r[2], pool: "a" })),
  options: it => shuffle([it.a, it.wrong]) };
const LAB_CONF = {
  title: "Word Workshop", blurb: "Drill the pairs that decide cloze blanks — collocations, prepositions, connectors, tenses, articles — and learn to name every RC question at a glance. Every right answer earns XP.",
  ranks: [[0,"Reader","📖"],[60,"Learner","✏️"],[200,"Editor","🖋️"],[450,"Wordsmith","📝"],[900,"Master of Passages","🏆"]],
  decks: CZ_DECKS.concat([CZ_WORDS, { id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(CZ_DECKS), list: () => CZ_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "tones", title: "Pair each tone word with its meaning", sub: "Flip cards — pair each tone word with what it means" }
};
