/* Defence Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const DF_DECKS = [
  { id: "army", ico: "🪖", title: "Exercise Partners · Army", sub: "Which country does India train with?", lesson: "F7", q: "Partner in", rq: "Army exercise with", pairs: labRows("F7") },
  { id: "navy", ico: "⚓", title: "Exercise Partners · Navy", sub: "Varuna, Konkan, SIMBEX…", lesson: "F8", q: "Partner in", rq: "Naval exercise with", pairs: labRows("F8") },
  { id: "air", ico: "✈️", title: "Exercise Partners · Air", sub: "Garuda, Cope India, Indradhanush…", lesson: "F8", q: "Partner in", rq: "Air exercise with", pairs: labRows("F8", 1) },
  { id: "multi", ico: "🌐", title: "Multilateral Mix", sub: "Malabar, MILAN, RIMPAC, Red Flag", lesson: "F9", q: "Who takes part in", pairs: labRows("F9") },
  { id: "ops", ico: "🎯", title: "Operation Names", sub: "Polo to Sindoor", lesson: "F6", q: "What was", rq: "Name the operation:", pairs: labRows("F6") },
  { id: "weapons", ico: "🚀", title: "Arsenal", sub: "Missiles, ships and aircraft", lesson: "F5", q: "What is", rq: "Name the", pairs: labRows("F5") },
  { id: "borders", ico: "🧭", title: "Border Guards", sub: "Which force guards which border?", lesson: "F4", q: "Border with", pairs: labRows("F4", 1) },
  { id: "raised", ico: "📅", title: "Raising Years", sub: "When was each force raised?", lesson: "F4", q: "Raised in which year:", pairs: labRows("F4") },
  { id: "commands", ico: "🗺️", title: "Command HQs", sub: "Where is each command?", lesson: "F2", q: "HQ of", rq: "Which command sits at", pairs: labRows("F2") },
  { id: "mottos", ico: "🛡️", title: "Mottos", sub: "Whose motto is it?", lesson: "F1", q: "Motto of", rq: "Whose motto is", pairs: labRows("F1") },
  { id: "ranks", ico: "⭐", title: "Rank Ladder", sub: "Army rank → Navy rank", lesson: "F3", q: "Navy equal of Army", pairs: labRows("F3").map(r => [r[0], r[1], "Air Force: " + r[2]]) },
  { id: "firsts", ico: "🥇", title: "Firsts & Heroes", sub: "Field Marshals, PVC, women firsts", lesson: "F3", q: "", pairs: labRows("F3", 2) }
];
const LAB_CONF = {
  title: "Defence Lab", blurb: "Drill the exercise partners, operations and arsenal until they are automatic. Every right answer earns XP.",
  ranks: [[0,"Recruit","🪖"],[60,"Cadet","🎖️"],[200,"Captain","⭐"],[450,"Colonel","🌟"],[900,"Field Marshal","🏅"]],
  decks: DF_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(DF_DECKS), list: () => DF_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "army", title: "Pair each exercise with its partner", sub: "Flip cards — pair each army exercise with its country" }
};
