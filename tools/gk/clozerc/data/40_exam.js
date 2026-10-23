/* The exam side of Cloze Test & Reading Comprehension. */
const GROUPS = [{ id: "cz", name: "Cloze Test & Reading Comprehension", hi: "क्लोज़ टेस्ट एवं अपठित गद्यांश", note: "Six cloze skills, five RC question families and mixed passages · SSC CGL and CHSL Tier 1 English" }];
const ERANOTE = { cz: "Cloze blanks most often test word choice, connectors and collocations; RC questions most often ask for a stated fact, the meaning of a word as used, and the main idea." };
const INTROS = { clozerc: {
  lead: "The two passage-based tests of SSC Tier 1 English, taught skill by skill: how the cloze test and the reading passage are set, a five-step method for each, six cloze skills (collocations, prepositions, connectors, tense, near-synonyms, articles), five RC question families (main idea, fact, inference, vocabulary in context, tone), and full mixed practice. Every passage is original, and every question carries its own sentence or passage, so it can be practised on its own.",
  tip: "Learn to name the skill: for each cloze blank say ‘collocation’, ‘connector’ or ‘tense’ before you choose; for each RC question say ‘fact’, ‘inference’ or ‘tone’. The Lab decks drill the word pairs and the question families until this is automatic.",
  order: "Start with the method lesson, then the six cloze skills in Part 1, the five RC skills in Part 2, and finish with the mixed passages in Part 3. Come back to the connectors and near-synonyms lessons before the exam — they decide the most blanks."
} };
const HEATMAP = {
  cols: [{ label: "SSC CGL", sub: "Tier 1 · English" }, { label: "SSC CHSL", sub: "Tier 1 · English" }, { label: "SSC CGL", sub: "Tier 2 · English" }],
  rows: [
    { id: "CZ1", v: [3, 3, 3] }, { id: "CZ2", v: [2, 2, 2] }, { id: "CZ3", v: [2, 2, 2] }, { id: "CZ4", v: [3, 2, 3] }, { id: "CZ5", v: [2, 2, 2] },
    { id: "CZ6", v: [3, 3, 3] }, { id: "CZ7", v: [1, 1, 1] }, { id: "CZ8", v: [2, 2, 2] }, { id: "CZ9", v: [3, 3, 3] }, { id: "CZ10", v: [2, 1, 2] },
    { id: "CZ11", v: [2, 2, 3] }, { id: "CZ12", v: [1, 1, 2] }, { id: "CZ13", v: [3, 3, 3] }
  ],
  pattern: {
    title: "Where these questions sit",
    head: ["Exam", "Section", "Cloze and RC questions", "Marking"],
    rows: [
      ["SSC CGL Tier 1", "English Comprehension (25 Q)", "Usually 5 cloze + 5 RC", "2 each, &minus;0.5 per wrong"],
      ["SSC CHSL Tier 1", "English Language (25 Q)", "Usually 5 cloze + 5 RC", "2 each, &minus;0.5 per wrong"],
      ["SSC CGL Tier 2", "English Language and Comprehension (45 Q)", "More passages than Tier 1; the count varies by shift", "3 each, &minus;1 per wrong"]
    ],
    note: "Typical counts from published shift-wise analyses — not fixed numbers. Some shifts set fewer passage questions."
  },
  tips: [
    "<b>Read the whole passage once</b> before you fill any blank or answer any question — it costs half a minute and saves several marks.",
    "<b>Cloze</b>: name the slot (noun, verb, preposition, connector), look at both sides of the blank, then check the logic with the sentence before.",
    "<b>RC</b>: find the key word of the question in the passage and answer from those lines only; reject options that are too narrow, too broad, extreme or outside the passage.",
    "<b>Negative marking</b>: leave a question only when two options still look equally good after going back to the text."
  ],
  note: "How the heat map is made: our estimate of how often each skill decides a cloze blank or an RC question, from the syllabus and published shift-wise analyses — not a count of questions."
};
LASTMOMENT.push(
{t:"Cloze: five steps", era:["cz"], rows:[["1","Read the whole passage"],["2","Name the slot (part of speech)"],["3","Look at both sides of the blank"],["4","Check the logic (contrast, result, addition)"],["5","Read it back"]]},
{t:"Connector jobs", era:["cz"], rows:[["Contrast","however, although, despite, nevertheless"],["Result","therefore, hence, consequently"],["Addition","moreover, furthermore, besides"],["Condition","unless, provided that, in case"],["Pairs","no sooner … than; hardly … when"]]},
{t:"RC: five families", era:["cz"], rows:[["Main idea","Covers the whole passage"],["Fact","Key word → line → meaning"],["Inference","One small step that must be true"],["Vocabulary","Meaning in this sentence"],["Tone","The author’s word choice"]]},
{t:"Wrong-option types", era:["cz"], rows:[["Too narrow","One detail"],["Too broad","Bigger than the passage"],["Extreme","always, never, only"],["Outside","True in life, not in the passage"],["Distorted","Right words, wrong claim"]]}
);
TILES.push(["5","Blanks in a Tier 1 cloze passage","cz"],["5","Questions on a Tier 1 RC passage","cz"],["20","Marks the two passages usually carry","cz"],["0.5","Marks lost for each wrong answer","cz"],["11","Skills: 6 cloze + 5 RC","cz"]);
