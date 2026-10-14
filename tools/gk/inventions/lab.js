/* Inventions Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const IV_DECKS = [
  { id: "machines", ico: "🚂", title: "Machines & Transport", sub: "Steam engine to jet engine", lesson: "I1", q: "Who invented the", rq: "What did they invent:", pairs: labRows("I1", 0) },
  { id: "everyday", ico: "🧷", title: "Everyday Inventions", sub: "Pins, pens, razors, dynamite", lesson: "I1", q: "Who invented the", rq: "What did they invent:", pairs: labRows("I1", 1) },
  { id: "comms", ico: "📡", title: "Signals & Computers", sub: "Telephone to the World Wide Web", lesson: "I2", q: "Who is credited with the", rq: "What is this person credited with:", pairs: labRows("I2") },
  { id: "atoms", ico: "⚛️", title: "Atoms, Rays & Space", sub: "Electron, X-rays, relativity", lesson: "I3", q: "Who discovered the", rq: "What did this scientist discover:", pairs: labRows("I3", 0) },
  { id: "elements", ico: "🧪", title: "Elements & Chemistry", sub: "Oxygen to the periodic table", lesson: "I3", q: "Who is credited with the", rq: "What is this scientist credited with:", pairs: labRows("I3", 1) },
  { id: "life", ico: "🧬", title: "Cells, Blood & Genes", sub: "Hooke to Watson and Crick", lesson: "I4", q: "Who discovered the", rq: "What did this scientist discover:", pairs: labRows("I4") },
  { id: "medicine", ico: "💉", title: "Vaccines & Medicines", sub: "Jenner, Pasteur, Fleming…", lesson: "I5", q: "Who is credited with the", rq: "What is this scientist known for:", pairs: labRows("I5", 0) },
  { id: "vitamins", ico: "🥕", title: "Vitamins", sub: "Which lack causes which disease?", lesson: "I5", q: "What does a lack of this cause:", rq: "Which vitamin's lack causes", pairs: labRows("I5", 1) },
  { id: "laws", ico: "⚖️", title: "Laws & Principles", sub: "Describe the law — name the scientist", lesson: "I6", q: "Who gave this law:", rq: "Law given by", pairs: labRows("I6") },
  { id: "units", ico: "📏", title: "SI Units", sub: "Unit → what it measures", lesson: "I7", q: "What does this SI unit measure:", rq: "SI unit of", pairs: labRows("I7") },
  { id: "instruments", ico: "🌡️", title: "Instruments", sub: "Barometer to sphygmomanometer", lesson: "I8", q: "What does this measure:", rq: "Instrument for", pairs: labRows("I8", 0) },
  { id: "indian", ico: "🇮🇳", title: "Indian Scientists", sub: "Raman, Bose, Bhabha, Kalam…", lesson: "I9", q: "What is this scientist known for:", rq: "Who is known for", pairs: labRows("I9") },
  { id: "fathers", ico: "👴", title: "Fathers & Titles", sub: "Father of medicine, Missile Man…", lesson: "I10", q: "Who is the", rq: "Title of", pairs: labRows("I10", 1) }
];
const LAB_CONF = {
  title: "Inventors Lab", blurb: "Match every invention, discovery, unit and instrument to its name until it sticks. Every right answer earns XP.",
  ranks: [[0,"Tinkerer","🔧"],[60,"Lab Assistant","🧪"],[200,"Inventor","💡"],[450,"Scientist","🔬"],[900,"Nobel Laureate","🏅"]],
  decks: IV_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(IV_DECKS), list: () => IV_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "instruments", title: "Pair each instrument with what it measures", sub: "Flip cards — pair each instrument with its quantity" }
};
