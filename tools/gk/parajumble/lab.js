/* Para Jumbles Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
// The question text lists the sentences on separate lines (P. … Q. … R. … S. …): keep those line breaks on this page.
// fieldset{min-width:0} stops the Mock tab's lesson picker from pushing the page wider than a phone screen.
(function(){ const st = document.createElement("style"); st.textContent = ".qt,.flash .front{white-space:pre-line}fieldset{min-width:0;grid-template-columns:minmax(0,1fr)}"; document.head.appendChild(st); })();
const PJ_DECKS = [
  { id: "openers", ico: "🚪", title: "Opener or Not?", sub: "Can a paragraph begin like this?", lesson: "J3", q: "Can a paragraph begin like this:", opts: ["Can open", "Cannot open"], pairs: labRows("J3", 0) },
  { id: "connectors", ico: "🔗", title: "Connector Jobs", sub: "However, therefore, moreover …", lesson: "J6", q: "What job does this connector do:", pairs: labRows("J6", 0) },
  { id: "pronouns", ico: "👉", title: "Pronoun Hooks", sub: "What must come before he, they, such …", lesson: "J4", q: "What must come before", pairs: labRows("J4", 0) },
  { id: "pointers", ico: "📌", title: "A → The", sub: "Articles and pointing words", lesson: "J5", q: "What does this signal:", pairs: labRows("J5", 0) },
  { id: "order", ico: "⏱️", title: "First, Then, Finally", sub: "Beginning, middle or end?", lesson: "J7", q: "Where does this word usually sit:", opts: ["Beginning", "Middle", "End"], pairs: labRows("J7", 0) },
  { id: "pairs", ico: "🧲", title: "Mandatory Pairs", sub: "What must the next sentence do?", lesson: "J9", q: "", pairs: labRows("J9", 0).map(r => ["One sentence " + r[0] + " — so the next one …", r[1], r[2]]) },
  { id: "closing", ico: "🏁", title: "Closing Lines", sub: "Advice, summary, result …", lesson: "J8", q: "What kind of closing sentence is this:", pairs: labRows("J8", 1).map(r => [r[1], r[0], ""]) },
  { id: "partners", ico: "🤝", title: "Partner Words", sub: "Not only … but also, no sooner … than", lesson: "J11", q: "What is the partner of", rq: "Which word goes with", pairs: labRows("J11", 0) }
];
const LAB_CONF = {
  title: "Link Lab", blurb: "Train your eye for the clues — openers, connectors, pronouns, order words and pairs. Every right answer earns XP.",
  ranks: [[0,"Shuffler","🔀"],[60,"Linker","🔗"],[200,"Sequencer","🧩"],[450,"Editor","✍️"],[900,"Paragraph Master","🏆"]],
  decks: PJ_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Every clue at once — the real exam feel", q: "", make: () => labMix(PJ_DECKS), list: () => PJ_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "partners", title: "Pair each word with its partner", sub: "Flip cards — match ‘not only’ with ‘but also’ and the rest" }
};
