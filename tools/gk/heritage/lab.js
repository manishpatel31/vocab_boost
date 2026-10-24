/* Heritage Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const HM_SITE_LESSONS = ["H2", "H3"].filter(id => LESSONS.some(l => l.id === id));
const HM_DECKS = [
  { id: "ancient", ico: "🪷", title: "Ancient & Buddhist → State", sub: "Bhimbetka to Sarnath", lesson: "H2", q: "Which state has", pairs: labRows("H2", 0) },
  { id: "temples", ico: "🛕", title: "Temple Sites → State", sub: "Mahabalipuram to the Hoysalas", lesson: "H3", q: "Which state has", pairs: labRows("H3", 0) },
  { id: "years", ico: "📅", title: "Site → Year Inscribed", sub: "From 1983 to 2026", lesson: "H1", q: "Inscribed in which year:",
    pairs: HM_SITE_LESSONS.flatMap(id => labRows(id, 0).map(r => [r[0], r[2].replace(/\s*\(.*\)$/, ""), r[1]])) }
];
const LAB_CONF = {
  title: "Heritage Lab", blurb: "Tour India one monument at a time — the state, the builder, the year it was listed. Every right answer earns XP.",
  ranks: [[0,"Visitor","🎟️"],[60,"Guide","🧭"],[200,"Curator","🏺"],[450,"Archaeologist","⛏️"],[900,"Director-General, ASI","🏛️"]],
  decks: HM_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(HM_DECKS), list: () => HM_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "temples", title: "Pair each temple site with its state", sub: "Flip cards — pair each site with its state" }
};
