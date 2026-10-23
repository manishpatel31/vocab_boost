/* Para Jumbles — Part 1: how SSC sets the question (J1) and the step-by-step method (J2).
   Every sentence below is original practice writing. */
const PJ_FIG_CHAIN = `<svg viewBox="0 0 360 330" role="img" aria-label="A paragraph as a chain: opener, two links, and a closing sentence" style="max-width:420px;margin:0 auto">
  <defs><marker id="pjar" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker></defs>
  <g font-family="inherit">
    <rect x="20" y="10" width="320" height="58" rx="12" fill="var(--sheet)" stroke="var(--accent)" stroke-width="2"/>
    <text x="36" y="34" font-size="16" font-weight="700" fill="var(--ink)">1 · Opener</text><text x="36" y="56" font-size="13" fill="var(--ink2)">names the topic: “A young farmer …”</text>
    <line x1="180" y1="70" x2="180" y2="88" stroke="var(--accent)" stroke-width="2" marker-end="url(#pjar)"/>
    <rect x="20" y="90" width="320" height="58" rx="12" fill="var(--sheet)" stroke="var(--rule)" stroke-width="2"/>
    <text x="36" y="114" font-size="16" font-weight="700" fill="var(--ink)">2 · Link back</text><text x="36" y="136" font-size="13" fill="var(--ink2)">points back: “He …”, “The farmer …”</text>
    <line x1="180" y1="150" x2="180" y2="168" stroke="var(--accent)" stroke-width="2" marker-end="url(#pjar)"/>
    <rect x="20" y="170" width="320" height="58" rx="12" fill="var(--sheet)" stroke="var(--rule)" stroke-width="2"/>
    <text x="36" y="194" font-size="16" font-weight="700" fill="var(--ink)">3 · Move on</text><text x="36" y="216" font-size="13" fill="var(--ink2)">a turn or a step: “However …”, “Then …”</text>
    <line x1="180" y1="230" x2="180" y2="248" stroke="var(--accent)" stroke-width="2" marker-end="url(#pjar)"/>
    <rect x="20" y="250" width="320" height="58" rx="12" fill="var(--sheet)" stroke="var(--accent)" stroke-width="2"/>
    <text x="36" y="274" font-size="16" font-weight="700" fill="var(--ink)">4 · Close</text><text x="36" y="296" font-size="13" fill="var(--ink2)">result or advice: “So …”, “Therefore …”</text>
  </g></svg>`;

LESSONS.push(
{id:"J1", heat:2, title:"How SSC sets para jumbles", hi:"SSC में वाक्य पुनर्व्यवस्था के प्रश्न कैसे आते हैं", blocks:[
  {k:"hot", h:"Sentence rearrangement is a regular part of the English section of SSC CGL and CHSL Tier 1 — usually <b>one or two questions</b> a shift, sometimes none. Each is worth the same marks as any other question and takes under a minute once you know the clues."},
  {k:"story", h:"<p>A para jumble is a short paragraph whose sentences have been shuffled. Your job is to put them back. Most of the time SSC gives <b>four sentences marked P, Q, R and S</b> and four orders such as <b>QPSR</b> to choose from. Sometimes the <b>first sentence</b> is printed separately (marked S1) and you arrange the rest; sometimes both the <b>first (S1) and the last (S6)</b> are fixed and you arrange the four in the middle.</p><p>Two other forms appear: a single long sentence cut into <b>four parts</b>, and a question that asks only <b>which sentence should come first</b> (or last). The skill is the same in every case: a well-written paragraph is a chain, and every sentence after the first holds on to the one before it.</p>", key:"Every sentence after the first is tied to the one before it — find the ties and the order falls out."},
  {k:"table", title:"The formats SSC uses", head:["Format","What you see","What you choose"], rows:[
    ["Four sentences","P, Q, R and S, all jumbled","An order such as QPSR"],
    ["First sentence fixed","S1 printed first, then P, Q, R and S","The order of P, Q, R and S after S1"],
    ["First and last fixed","S1 and S6 printed; P, Q, R and S in between","The order of the middle four"],
    ["Parts of one sentence","One sentence cut into four parts (sometimes the opening words are given)","The order of the parts"],
    ["Opening sentence","Four sentences","The one that should start the paragraph"],
    ["Closing sentence (less common)","Four sentences","The one that should end the paragraph"]]},
  {k:"facts", title:"What makes a paragraph hang together", rows:[
    ["One topic","Every sentence is about the same subject."],
    ["An opener","The first sentence introduces the subject with a full noun — it does not lean on anything earlier."],
    ["Links","Pronouns (he, it, they), articles (a → the), pointing words (this, such) and connectors (however, therefore) tie each sentence to the one before."],
    ["A natural flow","Time order, cause before effect, general before specific, problem before solution."],
    ["An ending","A result, a summary, advice or a look ahead."]]},
  {k:"trick", h:"You never have to build the order from nothing. There are 24 possible orders of four sentences, but SSC shows you only <b>four</b>. Find one or two sure clues, strike out the options that break them, and check the one that is left."},
  {k:"trap", h:"An order can <b>sound</b> fine at a quick glance and still be wrong. Read your chosen order once from start to end: a sentence that begins with <b>He</b>, <b>This</b> or <b>However</b> cannot come before the sentence it refers to."}
], sum:["SSC sets four sentences P, Q, R, S; or S1 fixed; or S1 and S6 fixed; or four parts of one sentence; or ‘which sentence comes first’.","There are 24 possible orders, but only four options — test them.","A paragraph is a chain: one topic, an opener, links, a natural flow and an ending.","Links are pronouns, articles, pointing words and connectors.","Always read the chosen order once from start to end."]},

{id:"J2", heat:2, title:"The step-by-step method", hi:"हल करने की चरणबद्ध विधि", blocks:[
  {k:"hot", h:"A fixed routine saves time and stops guesswork: <b>topic → opener → one sure pair → strike options → read once</b>. With practice it takes 40–50 seconds a question."},
  {k:"story", h:"<p>Think of the four sentences as four railway coaches that have come uncoupled. Each coach has a hook at the front (the word that points back — <i>he, this, however, then</i>) and a ring at the back (the new thing it introduces — <i>a farmer, a plan, a problem</i>). The engine is the one coach with no hook at the front: the opener.</p><p>Find the engine first. Then find one hook that clearly fits one ring — a <b>pair</b>. Usually the opener and one pair are enough to strike out three options. Read the last option through once to be sure.</p>", key:"Opener plus one sure pair usually leaves only one option standing."},
  {k:"table", title:"The five steps", head:["Step","Do this","Ask yourself"], rows:[
    ["1 · Read","Read all four sentences quickly","What is this paragraph about?"],
    ["2 · Opener","Find the sentence that introduces the topic with a full noun and leans on nothing","Could I say this sentence to someone who knows nothing yet?"],
    ["3 · Pair","Find two sentences that must sit together: a noun and its pronoun, ‘a’ and ‘the’, a cause and its ‘so’","Which sentence must come right after which?"],
    ["4 · Strike","Cross out every option that starts wrongly or breaks the pair","Which options are still standing?"],
    ["5 · Check","Read the surviving order from start to end","Does it read like one smooth paragraph?"]]},
  {k:"fig", title:"A paragraph is a chain", svg:PJ_FIG_CHAIN, cap:"The opener has nothing to point back to. Every later sentence holds on to the one before it, and the last one rounds the paragraph off."},
  {k:"facts", title:"The clues to look for", rows:[
    ["Pronouns","he, she, it, they, his, its, their — need a noun before them"],
    ["Articles and pointers","a → the; this, these, such, the same — point back"],
    ["Connectors","however, but (contrast); also, moreover (addition); so, therefore (result); for example (example)"],
    ["Time and order","first, then, finally; dates in order; cause before effect"],
    ["Shape","general → specific; problem → solution; question → answer"]]},
  {k:"ex", h:"<p><b>P.</b> She sold them at the weekly market in the next village. <b>Q.</b> A widow named Lakshmi made baskets from palm leaves. <b>R.</b> Soon a shop in the city began to order them by the hundred. <b>S.</b> Because her baskets were strong and cheap, they sold out every week.</p><p><b>Step 1:</b> the topic is Lakshmi’s baskets. <b>Step 2:</b> P begins with <i>She</i>, R with <i>Soon</i>, S with <i>her baskets</i> — only <b>Q</b>, which names Lakshmi and her baskets, can open. <b>Step 3:</b> <i>She</i> and <i>them</i> in P are Lakshmi and the baskets, so <b>QP</b> is a pair. <b>Step 4:</b> strike every option that does not begin QP. <b>Step 5:</b> the baskets sell out at the market (S), and <i>Soon</i> a city shop orders them (R): <b>QPSR</b>.</p>"},
  {k:"trick", h:"Write the four letters on your rough sheet and draw arrows for the pairs you are sure of (Q → P). An option that does not contain your arrow is out."},
  {k:"trap", h:"Do not judge an option by its first two letters only. Two options often start the same way (QPRS and QPSR); the last two letters decide it, so check the second pair too."}
], sum:["Step 1: read all four and find the topic.","Step 2: find the opener — full noun, no pronoun or connector at the start.","Step 3: find one sure pair that must sit together.","Step 4: strike the options that start wrongly or break the pair.","Step 5: read the surviving order once from start to end."]}
);

/* ---------- J1 · formats ---------- */
pj("J1","order",[
  "Our town opened a public library last year.",
  "It lends books free of charge to anyone who lives in the town.",
  "As a result, many students now study there after school.",
  "However, it closes early on Sundays."],
  ["2134","3124","1243"],
  "{1} introduces the library; ‘It’ in {2} refers to it; ‘As a result’ in {3} follows from the free books; ‘However’ in {4} adds a drawback.");
pj("J1","first",[
  "The wells dried up, and the crops began to wilt.",
  "Worried, the farmers met in the temple courtyard to find a way out.",
  "They decided to dig a small pond to store water for the next season.",
  "When the rains finally came, the pond filled to the brim."],
  ["2134","1324","1243"],
  "No rain (S1) dries the wells ({1}); this worries the farmers ({2}); ‘They’ in {3} is the farmers, who plan the pond; ‘the pond’ in {4} can fill only after it is dug.",
  {s1:"Rain had not fallen in the village for nearly two months."});
pj("J1","both",[
  "Besides honey, they give us beeswax, which is used in candles and polish.",
  "Their most important job, however, is carrying pollen from flower to flower.",
  "Without this help, many fruits and vegetables would not grow.",
  "Sadly, their numbers are falling because of pesticides and loss of habitat."],
  ["3124","1342","2314"],
  "‘Besides honey’ in {1} lists a useful product; ‘however’ in {2} turns to their most important job; ‘this help’ in {3} is pollination; {4} brings in the danger that S6 answers.",
  {s1:"Honeybees are among the most useful insects in the world.", s6:"Protecting them, therefore, protects our food supply as well."});
pj("J1","parts",["The old man","who lives next door","walks his dog","in the park every morning."],
  ["1342","3412","2134"],
  "Subject ({1}) + its ‘who’ clause ({2}) + verb and object ({3}) + place and time ({4}). The ‘who’ clause must sit right after ‘The old man’.");
pj("J1","open",[
  "Solar panels turn sunlight directly into electricity.",
  "They work best on clear days with long hours of sunshine.",
  "For this reason, they are popular in sunny states such as Rajasthan.",
  "Many homes there now have panels on their roofs."], null,
  "{1} names the subject, solar panels. {2} begins with ‘They’, {3} with ‘For this reason’, and ‘there’ in {4} needs a place named earlier.");
pj("J1","order",[
  "Ravi found a wallet lying on a bus seat.",
  "Inside it were some cash and an identity card.",
  "He called the number printed on the card.",
  "The owner, a nurse, thanked him and came to collect it."],
  ["2134","1324","1243"],
  "‘it’ in {2} is the wallet in {1}; ‘the card’ in {3} is the identity card of {2}; the owner can come only after Ravi calls ({4}).");
pj("J1","first",[
  "One common reason is the use of phones just before bed.",
  "The bright screen tells the brain that it is still daytime.",
  "Another reason is drinking tea or coffee late in the evening.",
  "Doctors therefore advise keeping both screens and caffeine away after dinner."],
  ["3124","1324","1243"],
  "‘One common reason’ ({1}) must come before ‘Another reason’ ({3}); ‘The bright screen’ in {2} explains the phone in {1}; {4} needs both causes before it.",
  {s1:"Many people find it hard to sleep well at night."});
pj("J1","both",[
  "He joined a beginners’ class at the town pool.",
  "On the first day, he was too afraid to let go of the edge.",
  "The coach, however, kept encouraging him patiently.",
  "Slowly, he began to float and kick on his own."],
  ["2134","1324","1423"],
  "He joins a class ({1}) before ‘the first day’ ({2}); ‘however’ in {3} contrasts with his fear; ‘Slowly’ in {4} leads to the success in S6.",
  {s1:"Mohan wanted to learn to swim before the summer holidays ended.", s6:"By the end of May, he could swim across the pool without help."});
pj("J1","parts",["Neither the manager","nor his assistants","were aware of","the change in the schedule."],
  ["2134","1324","1342"],
  "‘Neither’ ({1}) is followed at once by ‘nor’ ({2}); then the verb ‘were aware of’ ({3}) and its object ({4}).");
pj("J1","open",[
  "An old lighthouse stands on the rocky coast near our village.",
  "For over a century, its light guided ships away from the rocks.",
  "Today, modern radar has made it unnecessary.",
  "Still, the villagers keep it clean and paint it every year."], null,
  "{1} introduces ‘an old lighthouse’. {2} has ‘its’, {3} has ‘it’, and {4} begins with ‘Still’ — all three lean on the lighthouse.");
pj("J1","close",[
  "Plastic bags take hundreds of years to break down.",
  "Meanwhile, they choke drains and harm animals that swallow them.",
  "Cloth and jute bags, on the other hand, can be used again and again.",
  "We should therefore carry our own bag when we go shopping."], null,
  "{4} is the advice that follows from the problem ({1}, {2}) and the alternative ({3}); ‘therefore’ marks a conclusion.");
cq("J1","In the ‘S1 … S6’ form of the question, how many sentences do you actually arrange?",["Four","Six","Two","Five"],"S1 and S6 are fixed; you arrange only the middle four, P, Q, R and S.");
cq("J1","How many different orders can four sentences P, Q, R and S form?",["24","16","12","8"],"4 × 3 × 2 × 1 = 24. The question shows only four of them, so testing the options is quicker than building the order.");
pj("J1","order",[
  "The monsoon reaches the coast of Kerala in early June.",
  "From there, it moves north and covers most of India by July.",
  "These rains are vital, because many farmers depend on them to water their fields.",
  "A weak monsoon, therefore, can hurt the whole economy."],
  ["2134","1342","3124"],
  "{1} sets the scene; ‘From there’ in {2} is Kerala; ‘These rains’ in {3} sums up the monsoon; ‘therefore’ in {4} follows from the farmers’ need.");
pj("J1","first",[
  "Each class was given one part of the campus to clean.",
  "The juniors picked up litter from the playground, while the seniors cleared the garden.",
  "By noon, the whole campus was spotless.",
  "Pleased with the result, the principal gave a prize to the tidiest class."],
  ["1324","1243","3124"],
  "The plan ({1}) comes before the work ({2}); ‘By noon’ ({3}) gives the result; ‘Pleased with the result’ in {4} needs that result before it.",
  {s1:"Our school held a cleanliness drive last Saturday."});
pj("J1","both",[
  "Every morning, long lines of buses and trucks waited to cross it.",
  "People often reached their offices and schools late.",
  "To solve this problem, the council built a second, wider bridge.",
  "It was opened to traffic last month."],
  ["3124","1342","2134"],
  "‘it’ in {1} is the narrow bridge of S1; the delay ({2}) is ‘this problem’ in {3}; ‘It’ in {4} is the new bridge, which leads to S6.",
  {s1:"The town of Rampur had only one narrow bridge over its river.", s6:"Since the new bridge opened, the journey takes just ten minutes."});
pj("J1","parts",["the farmers","continued","to plant","the rice seedlings."],
  ["1324","4213","1342"],
  "After the fixed clause comes the subject ({1}), the verb ‘continued’ ({2}), the infinitive ‘to plant’ ({3}) and its object ({4}).",
  {start:"Although it was raining heavily,"});
pj("J1","open",[
  "A new metro line will link the airport with the city centre.",
  "Trains on it will run every five minutes.",
  "As a result, a trip that now takes an hour will take only twenty-five minutes.",
  "This will also reduce traffic on the busy airport road."], null,
  "{1} introduces ‘a new metro line’. ‘on it’ in {2}, ‘As a result’ in {3} and ‘This will also’ in {4} all point back.");
pj("J1","close",[
  "Asha had been practising the violin for months for the school concert.",
  "On the day of the concert, her hands shook as she walked on stage.",
  "Once she began to play, however, her fear melted away.",
  "When she finished, the hall rang with applause."], null,
  "The story runs practice ({1}) → nerves ({2}) → playing ({3}) → ‘When she finished’ ({4}), the natural last event.");
pj("J1","order",[
  "Bamboo is one of the fastest-growing plants on Earth.",
  "Some kinds can grow almost a metre in a single day.",
  "Because it grows so quickly, it can be cut again and again without destroying the forest.",
  "This ability to regrow makes it a good substitute for timber."],
  ["2134","1423","3124"],
  "{1} names bamboo; {2} gives a detail of its speed; ‘Because it grows so quickly’ in {3} builds on that; ‘This ability to regrow’ in {4} points to {3}.");
pj("J1","first",[
  "Water carries nutrients to the cells and removes waste.",
  "It also helps keep the body’s temperature steady.",
  "When we do not drink enough, we may feel tired or get headaches.",
  "Doctors, therefore, advise drinking water regularly through the day."],
  ["2134","1324","1342"],
  "{1} gives the first job of water; ‘It also’ in {2} adds a second; {3} shows what happens without it; ‘therefore’ in {4} gives the advice.",
  {s1:"The human body needs water to work properly."});
pj("J1","order",[
  "Kabaddi is a contact sport that began in ancient India.",
  "It is played between two teams of seven players each.",
  "A raider enters the other half of the court and tries to touch as many opponents as possible.",
  "He must then return to his own half before he is caught."],
  ["2134","1243","3412"],
  "{1} names the sport; ‘It’ in {2} is kabaddi; {3} introduces ‘a raider’; ‘He’ and ‘then’ in {4} point to the raider.");

/* ---------- J2 · the method ---------- */
cq("J2","In the five-step method, what do you do first?",["Read all four sentences to find the topic","Pick the shortest sentence as the opener","Look only at the first option","Start with the sentence that contains a name"],"First read all four sentences quickly to see what the paragraph is about; the opener and the pairs come next.");
cq("J2","Which sentence start is the surest sign that a sentence can NOT open a paragraph?",["“This method …”","“A new method …”","“Many methods …”","“Scientists have found a method …”"],"‘This’ points back to something already mentioned, so a sentence starting ‘This method’ cannot come first.");
cq("J2","You are sure that R must come right after Q. Which option can you strike out at once?",["PRQS","PQRS","SPQR","QRSP"],"Only PRQS does not contain ‘QR’ side by side — R comes before Q there.");
cq("J2","The opener is S, and P must come right after Q. Which option survives?",["SQPR","SPQR","QPSR","SRPQ"],"SQPR begins with S and keeps ‘QP’ together. SPQR and SRPQ have P before Q; QPSR does not begin with S.");
cq("J2","You have found the opener and one sure pair. What should you do next?",["Strike out the options that break them, then read the survivor once","Choose the first option that begins with the opener","Rewrite the paragraph in your own words","Leave the question for later"],"Use the opener and the pair to strike out options, then read the last one standing from start to end.");
pj("J2","order",[
  "Every winter, thousands of birds fly to Chilika lake in Odisha from colder lands.",
  "They arrive in November, when their homes in the north grow too cold.",
  "For the next four months, the lake is crowded with ducks, geese and waders.",
  "In March, the birds begin their long journey back."],
  ["2134","1324","1432"],
  "Opener: {1} names the birds and the lake. Pair: ‘They’ in {2} is the birds. ‘For the next four months’ in {3} counts from November; ‘In March’ ({4}) is the end.");
pj("J2","first",[
  "First, collect peels, leftover food and dry leaves in a bin.",
  "Then cover the waste with a layer of soil and keep it slightly moist.",
  "Turn the mixture every week so that air can reach it.",
  "In about two months, it will become dark, crumbly compost."],
  ["2134","1324","1243"],
  "‘First’ ({1}) and ‘Then’ ({2}) fix the start; ‘the mixture’ in {3} is the waste and soil of {2}; ‘In about two months’ ({4}) is the result.",
  {s1:"Composting is a simple way to turn kitchen waste into rich soil."});
pj("J2","both",[
  "His tea was so good that travellers often came back for a second cup.",
  "Encouraged, he began selling snacks along with the tea.",
  "Soon the stall became too small for all his customers.",
  "So he rented a shop nearby and opened his first cafe."],
  ["2134","1243","3124"],
  "‘His tea’ in {1} follows S1; ‘Encouraged’ in {2} needs the praise of {1}; more customers ({3}) is the reason for ‘So’ in {4}, which leads to S6.",
  {s1:"Raju sold tea at a small stall outside the railway station.", s6:"Today he owns three cafes in the city."});
pj("J2","open",[
  "The Constitution of India came into force on 26 January 1950.",
  "That is why the day is celebrated every year as Republic Day.",
  "On this day, a grand parade is held on Kartavya Path in New Delhi.",
  "It shows the country’s military strength and cultural variety."], null,
  "{1} states the fact the rest depends on. ‘That is why’ ({2}), ‘On this day’ ({3}) and ‘It’ ({4}) all point back.");
pj("J2","order",[
  "Rohan forgot his umbrella at home one rainy morning.",
  "By the time he reached the bus stop, he was soaking wet.",
  "A kind old woman standing there offered to share her umbrella.",
  "Rohan thanked her and promised himself never to forget his umbrella again."],
  ["2134","1324","1432"],
  "Opener: {1}. ‘he’ in {2} is Rohan; ‘there’ in {3} is the bus stop of {2}; ‘thanked her’ in {4} needs the woman of {3}.");
pj("J2","first",[
  "First, they absorb carbon dioxide and release the oxygen we breathe.",
  "Second, their roots hold the soil together and prevent erosion.",
  "Third, they offer food and shelter to birds and animals.",
  "Cutting them down, therefore, harms both people and nature."],
  ["2134","1324","4123"],
  "‘First’, ‘Second’ and ‘Third’ fix {1}, {2} and {3}; ‘therefore’ in {4} draws the conclusion from all three.",
  {s1:"Trees do much more than give us shade."});
pj("J2","parts",["The scientist","who discovered the new medicine","was given","an award by the government."],
  ["1342","3124","2134"],
  "The ‘who’ clause ({2}) must follow ‘The scientist’ ({1}); placed at the end it would seem to describe the government.");
pj("J2","close",[
  "Water is becoming scarce in many Indian cities.",
  "Rainwater harvesting is one way to deal with this shortage.",
  "In this method, rain falling on roofs is collected and stored in tanks or sent underground.",
  "If every building adopted it, cities could save millions of litres each year."], null,
  "Problem ({1}) → solution ({2}) → how it works ({3}) → the benefit ({4}), which rounds the paragraph off.");
pj("J2","order",[
  "A spider spins its web with silk made inside its body.",
  "The silk is liquid at first but hardens as soon as it meets the air.",
  "Once the web is ready, the spider waits for insects to fly into it.",
  "The sticky threads hold the insects until the spider can reach them."],
  ["2134","1324","1243"],
  "Opener: {1}. ‘The silk’ in {2} repeats ‘silk’ from {1}; ‘Once the web is ready’ ({3}) comes after it is made; ‘the insects’ in {4} are those of {3}.");
pj("J2","first",[
  "The farmer showed us how the cows are milked by machine.",
  "The milk is then cooled and sent to a factory in tankers.",
  "There, it is turned into butter, cheese and curd.",
  "We returned home with a new respect for the glass of milk on our table."],
  ["2134","1324","1243"],
  "‘The farmer’ in {1} belongs to the farm of S1; ‘then’ in {2} follows milking; ‘There’ in {3} is the factory; {4} closes the visit.",
  {s1:"Last week, our class visited a dairy farm."});
pj("J2","both",[
  "While we sleep, the body repairs its muscles and tissues.",
  "The brain, too, sorts and stores what we learned during the day.",
  "People who sleep badly, on the other hand, find it hard to concentrate.",
  "Over time, poor sleep can even lead to illness."],
  ["2134","3124","1342"],
  "{1} gives the body’s gain; ‘too’ in {2} adds the brain; ‘on the other hand’ in {3} turns to poor sleep; ‘Over time’ in {4} takes that further before S6’s advice.",
  {s1:"A good night’s sleep is as important as food and exercise.", s6:"So, the next time you feel like staying up late, think again."});
pj("J2","open",[
  "A group of students in Pune built a robot that sorts waste.",
  "It uses a camera to tell plastic from paper and metal.",
  "Each item is then dropped into the right bin.",
  "The students now hope to install their machine in their college canteen."], null,
  "{1} introduces ‘a robot’. ‘It’ ({2}), ‘then’ ({3}) and ‘their machine’ and ‘now’ ({4}) need it first.");
pj("J2","order",[
  "Many people think that a camel stores water in its hump.",
  "In fact, the hump is made mostly of fat.",
  "When food is scarce, the camel’s body uses this fat for energy.",
  "The camel survives without water for days because its body loses very little of it."],
  ["2134","1324","3214"],
  "{1} gives the common belief; ‘In fact’ in {2} corrects it; ‘this fat’ in {3} needs {2}; {4} gives the real reason for the camel’s endurance.");
pj("J2","parts",["you must","study regularly","and revise","every chapter twice."],
  ["1342","2134","3412"],
  "‘you must’ ({1}) takes the first verb ‘study regularly’ ({2}); ‘and revise’ ({3}) adds a second verb, whose object is ‘every chapter twice’ ({4}).",
  {start:"If you want to pass the exam,"});
pj("J2","close",[
  "Our town once had a lake full of fish and birds.",
  "Over the years, factories began to dump their waste into it.",
  "The fish died, and the birds stopped coming.",
  "Last year, the people of the town cleaned the lake, and the birds have now returned."], null,
  "The story runs from the past ({1}) through the damage ({2}, {3}) to the recovery ‘now’ ({4}), which must be last.");
pj("J2","first",[
  "First, listen to the language every day, even for a few minutes.",
  "Next, learn a handful of useful words and use them in sentences.",
  "After that, try speaking with someone who knows the language well.",
  "Above all, do not be afraid of making mistakes."],
  ["2134","1324","3124"],
  "‘First’, ‘Next’ and ‘After that’ fix {1}, {2} and {3}; ‘Above all’ in {4} gives the final, most important habit.",
  {s1:"Learning a new language is easier if you follow a few simple habits."});
pj("J2","order",[
  "Unlike most substances, water expands when it freezes.",
  "This is why ice floats on water instead of sinking.",
  "In winter, therefore, a layer of ice forms on top of a pond while the water below stays liquid.",
  "Fish and other creatures can thus survive under the ice."],
  ["2134","1324","1423"],
  "{1} states the fact; ‘This is why’ in {2} draws the first result; ‘therefore’ in {3} applies it to a pond; ‘thus’ in {4} gives the final result.");
