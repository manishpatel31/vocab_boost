/* Industries & Transport Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const IT_DECKS = [
  { id: "steel", ico: "🏭", title: "Steel Plants", sub: "Which state is the plant in?", lesson: "T1", q: "State of", pairs: labRows("T1") },
  { id: "collab", ico: "🤝", title: "Built With Help From", sub: "Bhilai, Rourkela, Durgapur…", lesson: "T1", q: "Foreign partner of the steel plant at", pairs: labRows("T1", 1) },
  { id: "textile", ico: "🧵", title: "Textile Towns", sub: "Which state is the town in?", lesson: "T2", q: "State of", pairs: labRows("T2", 2) },
  { id: "refinery", ico: "🛢️", title: "Oil Refineries", sub: "Digboi to Jamnagar", lesson: "T3", q: "State of the refinery at", pairs: labRows("T3") },
  { id: "nick", ico: "🏙️", title: "City Nicknames", sub: "Manchester, Detroit, Silicon Valley…", lesson: "T4", q: "Which city is the", rq: "Nickname of", pairs: labRows("T4", 1) },
  { id: "zones", ico: "🚆", title: "Railway Zones", sub: "Where is the headquarters?", lesson: "T5", q: "Headquarters of", rq: "Zone headquartered at", pairs: labRows("T5") },
  { id: "railyear", ico: "📅", title: "Railway Milestones", sub: "1853 to the underwater metro", lesson: "T6", q: "Year of", rq: "Which milestone came in", pairs: labRows("T6") },
  { id: "roads", ico: "🛣️", title: "Tunnels & Bridges", sub: "Which state is it in?", lesson: "T7", q: "State/UT of", pairs: labRows("T7") },
  { id: "ports", ico: "⚓", title: "Seaports", sub: "Which state is the port in?", lesson: "T8", q: "State/UT of", pairs: labRows("T8") },
  { id: "air", ico: "✈️", title: "Airport Names", sub: "Which city does it serve?", lesson: "T9", q: "City of", rq: "Airport of", pairs: labRows("T9") },
  { id: "nw", ico: "🚢", title: "National Waterways", sub: "NW-1 to NW-5 — the routes", lesson: "T10", q: "Route of", rq: "Which waterway is this:", pairs: labRows("T10") },
  { id: "pipe", ico: "🔧", title: "Pipelines", sub: "What does each pipeline carry?", lesson: "T10", q: "What flows through the", pairs: labRows("T10", 1) }
];
const LAB_CONF = {
  title: "Transport Lab", blurb: "Put every plant, port, zone and airport on the map in your head. Every right answer earns XP.",
  ranks: [[0,"Passenger","🎫"],[60,"Ticket Checker","🧾"],[200,"Station Master","🚉"],[450,"Loco Pilot","🚂"],[900,"Railway Board Chief","🏛️"]],
  decks: IT_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(IT_DECKS), list: () => IT_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "zones", title: "Pair each zone with its headquarters", sub: "Flip cards — pair each railway zone with its HQ city" }
};
