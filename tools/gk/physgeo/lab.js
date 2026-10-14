/* Physical Geography Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const PG_DECKS = [
  { id: "planets", ico: "🪐", title: "Planet Records", sub: "Largest, hottest, farthest…", lesson: "Y1", q: "Which planet", pairs: labRows("Y1", 0) },
  { id: "moons", ico: "🌙", title: "Whose Moon?", sub: "Ganymede, Titan, Phobos…", lesson: "Y1", q: "Planet of the moon", pairs: labRows("Y1", 1) },
  { id: "lines", ico: "🧭", title: "Lines on the Globe", sub: "Tropics, circles and meridians", lesson: "Y2", q: "Where is the", pairs: labRows("Y2", 1) },
  { id: "inside", ico: "🌍", title: "Discontinuities", sub: "Which layers do they separate?", lesson: "Y3", q: "What does this discontinuity separate:", pairs: labRows("Y3", 0) },
  { id: "rocks", ico: "🪨", title: "Rock Types", sub: "Igneous, sedimentary or metamorphic?", lesson: "Y3", q: "What kind of rock is", pairs: labRows("Y3", 3) },
  { id: "volcano", ico: "🌋", title: "Volcanoes", sub: "Which country is it in?", lesson: "Y4", q: "Country of the volcano", pairs: labRows("Y4", 3) },
  { id: "landform", ico: "🏔️", title: "Landform Makers", sub: "River, glacier, wind or sea?", lesson: "Y5", q: "Agent that makes this:", pairs: labRows("Y5", 0) },
  { id: "layers", ico: "☁️", title: "Air Layers", sub: "Ozone, meteors, radio waves…", lesson: "Y6", q: "Which layer", pairs: labRows("Y6", 0) },
  { id: "iso", ico: "🗺️", title: "Iso-lines", sub: "Isobar, isohyet, isohaline…", lesson: "Y6", q: "This line joins places of equal what:", pairs: labRows("Y6", 2) },
  { id: "winds", ico: "🌬️", title: "Local Winds", sub: "Chinook to Loo — where do they blow?", lesson: "Y7", q: "Where does this wind blow:", pairs: labRows("Y7", 1) },
  { id: "currents", ico: "🌊", title: "Ocean Currents", sub: "Warm or cold, and which ocean?", lesson: "Y9", q: "Warm or cold, and which ocean:", pairs: labRows("Y9", 0) },
  { id: "grass", ico: "🌾", title: "Grasslands of the World", sub: "Prairies, Pampas, Steppes…", lesson: "Y10", q: "Where are the", pairs: labRows("Y10", 1) }
];
const LAB_CONF = {
  title: "Earth Lab", blurb: "Pair every layer, wind, current and landform with its place until it sticks. Every right answer earns XP.",
  ranks: [[0,"Pebble","🪨"],[60,"Explorer","🧭"],[200,"Geographer","🗺️"],[450,"Storm Chaser","🌪️"],[900,"Earth Master","🌍"]],
  decks: PG_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(PG_DECKS), list: () => PG_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "winds", title: "Pair each wind with its home", sub: "Flip cards — pair each local wind with where it blows" }
};
