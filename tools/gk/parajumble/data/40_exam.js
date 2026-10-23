/* The exam side of Para Jumbles · Sentence Rearrangement. */
const GROUPS = [{ id: "pj", name: "Para Jumbles", hi: "वाक्य पुनर्व्यवस्था", note: "Sentence rearrangement for the English section · SSC CGL, CHSL, MTS, CPO" }];
const ERANOTE = { pj: "The four-sentence P-Q-R-S set is by far the commonest form, then S1 or S1–S6 sets, single-sentence parts and ‘which sentence comes first’." };
const INTROS = { parajumble: {
  lead: "Sentence rearrangement the way SSC sets it: four jumbled sentences, sets with the first or the first and last sentences fixed, parts of a single sentence, and ‘which sentence comes first’. One lesson for each clue — the opener, pronouns, articles, connectors, time order, paragraph shape and mandatory pairs — then option elimination and mixed practice. Every practice sentence is original.",
  tip: "Learn the five steps in Part 1, then do one clue lesson a day and play its Lab deck until you can spot the clue at a glance. Finish with the mixed set against the clock — about 45 seconds a question.",
  order: "Part 1 gives the formats and the method; Part 2 takes the clues one by one; Part 3 trains option elimination, single-sentence parts and mixed exam-style sets."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · English" }, { label: "SSC CHSL", sub: "Tier 1 · English" }, { label: "SSC MTS / CPO", sub: "English" }],
  rows: [
    { id: "J1", v: [2, 2, 2] }, { id: "J2", v: [2, 2, 2] }, { id: "J3", v: [2, 2, 2] }, { id: "J4", v: [2, 2, 2] },
    { id: "J5", v: [1, 1, 1] }, { id: "J6", v: [2, 2, 2] }, { id: "J7", v: [1, 1, 1] }, { id: "J8", v: [1, 1, 1] },
    { id: "J9", v: [1, 1, 1] }, { id: "J10", v: [2, 2, 2] }, { id: "J11", v: [1, 1, 1] }, { id: "J12", v: [2, 2, 2] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Rearrangement questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "English Comprehension (25 Q)", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL Tier 1", "English Language (25 Q)", "About 0–2", "2 each, &minus;0.5 per wrong"],
      ["SSC MTS", "English Language (25 Q, Session II)", "About 0–2", "3 each, &minus;1 per wrong"],
      ["SSC CPO Paper I", "English Comprehension (50 Q)", "About 1–3", "1 each, &minus;0.25 per wrong"]
    ],
    note: "Typical ranges from published shift-wise analyses — not fixed counts. Some shifts have none; check the latest notice for the marking scheme."
  },
  tips: [
    "<b>Find the opener first</b>: a sentence that begins with he, it, this, however, therefore or also cannot open.",
    "<b>One sure pair</b> — a name and its pronoun, ‘a’ and ‘the’, a question and its answer — usually strikes out two or three options.",
    "<b>Connectors</b> tell you what came before: contrast for however, a cause for therefore, a similar point for moreover.",
    "<b>Read the final order once</b>; options often share their first two letters and differ only at the end."
  ],
  note: "How the heat map is made: our estimate from the syllabus and published analyses of how often sentence rearrangement and each kind of clue appear, not a count of questions."
};

LASTMOMENT.push(
{t:"Cannot open a paragraph", era:["pj"], rows:[["Pronoun","he, she, it, they, his, its, their"],["Pointing word","this, these, such, the same, the former"],["Contrast","however, but, yet, on the other hand"],["Result","therefore, thus, so, as a result"],["Addition","also, moreover, besides, furthermore"],["Example","for example, for instance"],["Order","then, next, finally, later, another"]]},
{t:"Connector → job", era:["pj"], rows:[["However / but / yet","contrast"],["Moreover / also / besides","addition"],["Therefore / thus / hence","result"],["For example / for instance","example"],["First / then / finally","sequence"],["Similarly / likewise","comparison"],["In short / to sum up","conclusion"]]},
{t:"The five steps", era:["pj"], rows:[["1","Read all four — find the topic"],["2","Opener — full noun, no pronoun or connector"],["3","One sure pair"],["4","Strike options that break them"],["5","Read the survivor once"]]},
{t:"Mandatory pairs", era:["pj"], rows:[["a boat →","the boat"],["Dr Rao →","she"],["Why …? →","The reason is …"],["One reason →","Another reason"],["Some say →","Others believe"],["two things →","the former / the latter"]]}
);
TILES.push(["4","Sentences to order: P, Q, R, S","pj"],["24","Possible orders of four sentences","pj"],["4","Options to test — you never need the other 20","pj"],["5","Steps of the method","pj"],["~45 s","Target time per question","pj"]);
