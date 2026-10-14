/* World Geography Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const WG_DECKS = [
  { id: "capitals", ico: "🏛️", title: "Capitals", sub: "Country → capital city", lesson: "W2", q: "Capital of", rq: "Country whose capital is", pairs: labRows("W2") },
  { id: "currency", ico: "💱", title: "Currencies", sub: "Taka, Ngultrum, Rand…", lesson: "W3", q: "Currency of", pairs: labRows("W3") },
  { id: "parliament", ico: "🏢", title: "Parliaments", sub: "Diet, Knesset, Storting…", lesson: "W4", q: "Parliament of", rq: "Country whose parliament is the", pairs: labRows("W4") },
  { id: "peaks", ico: "🏔️", title: "Peaks", sub: "Where is each famous peak?", lesson: "W5", q: "Where is", pairs: labRows("W5") },
  { id: "ranges", ico: "⛰️", title: "Mountain Ranges", sub: "Andes to the Urals", lesson: "W5", q: "Where are the", rq: "Which range is in", pairs: labRows("W5", 1) },
  { id: "riverend", ico: "🌊", title: "Where Rivers End", sub: "Volga → Caspian Sea…", lesson: "W6", q: "The river flows into the sea or ocean:", pairs: labRows("W6") },
  { id: "rivercity", ico: "🌉", title: "Cities on Rivers", sub: "London–Thames, Rome–Tiber…", lesson: "W6", q: "River at", rq: "City on the", pairs: labRows("W6", 1) },
  { id: "deserts", ico: "🏜️", title: "Deserts", sub: "Sahara to Atacama", lesson: "W8", q: "Where is the desert", pairs: labRows("W8") },
  { id: "grass", ico: "🌾", title: "Grasslands", sub: "Pampas, Steppes, Prairies, Veld…", lesson: "W8", q: "Where are the", rq: "Grassland of", pairs: labRows("W8", 2) },
  { id: "straits", ico: "⛴️", title: "Straits", sub: "What does each strait separate?", lesson: "W9", q: "The strait separates:", rq: "Strait between", pairs: labRows("W9") },
  { id: "lines", ico: "📏", title: "Boundary Lines", sub: "Durand, McMahon, 38th Parallel…", lesson: "W10", q: "Which two sides does it divide:", rq: "Line between", pairs: labRows("W10") },
  { id: "nick", ico: "🏷️", title: "Nicknames", sub: "Land of the Rising Sun…", lesson: "W10", q: "Which place is the", rq: "Nickname of", pairs: labRows("W10", 1) }
];
/* Grand Mix: 6 rows from every deck, so each deck's wrong options always come from at least 6 of its own answers. */
function wgMix(){
  return shuffle(WG_DECKS.flatMap(d => shuffle(d.pairs.slice()).slice(0, 6).map(p => ({ p: `${d.q} ${p[0]}${/[?:]$/.test(d.q) ? "" : "?"}`, a: p[1], note: p[2] || "", pool: d.id }))));
}
const LAB_CONF = {
  title: "Globe Lab", blurb: "Spin the globe in your head — capitals, currencies, peaks, rivers, straits and borders. Every right answer earns XP.",
  ranks: [[0,"Tourist","🧳"],[60,"Traveller","🗺️"],[200,"Navigator","🧭"],[450,"Explorer","⛵"],[900,"Globe Master","🌍"]],
  decks: WG_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => wgMix(), list: () => WG_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "lines", title: "Pair each line with the lands it divides", sub: "Flip cards — pair each boundary line with the two sides it separates" }
};
