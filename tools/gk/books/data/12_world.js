/* Part 3 · The world and recent books — B7 sports, B8 world classics and thinkers, B9 recent and prize-winning books. */
const B7 = [
  ["Playing It My Way","Sachin Tendulkar","Autobiography, 2014.","p"],
  ["Straight from the Heart","Kapil Dev","","p"],
  ["Sunny Days","Sunil Gavaskar","He also wrote Idols and One-Day Wonders.","p"],
  ["A Century Is Not Enough","Sourav Ganguly","",""],
  ["The Test of My Life","Yuvraj Singh","About beating cancer.",""],
  ["281 and Beyond","V. V. S. Laxman","Named after his 281 against Australia (2001).",""],
  ["The Race of My Life","Milkha Singh","Basis of the film Bhaag Milkha Bhaag.","p"],
  ["Golden Girl","P. T. Usha","",""],
  ["Unbreakable","M. C. Mary Kom","","p"],
  ["Playing to Win","Saina Nehwal","",""],
  ["Ace Against Odds","Sania Mirza","",""],
  ["A Shot at History","Abhinav Bindra","India's first individual Olympic gold (2008).","p"],
  ["Goal","Dhyan Chand","Autobiography of the hockey wizard.",""],
  ["Mind Master","Viswanathan Anand","",""],
  ["Controversially Yours","Shoaib Akhtar","",""],
  ["Open","Andre Agassi","",""],
  ["No Spin","Shane Warne","",""],
  ["Imperfect","Sanjay Manjrekar","",""],
  ["I Am Zlatan","Zlatan Ibrahimović","",""],
  ["The Greatest: My Own Story","Muhammad Ali","",""]
];
const B8 = [
  ["Hamlet","William Shakespeare","Also Macbeth, Othello, King Lear, Romeo and Juliet, The Merchant of Venice.","p"],
  ["War and Peace","Leo Tolstoy","Also Anna Karenina.","p"],
  ["Crime and Punishment","Fyodor Dostoevsky","",""],
  ["Les Misérables","Victor Hugo","","p"],
  ["Oliver Twist","Charles Dickens","Also A Tale of Two Cities, David Copperfield.","p"],
  ["Animal Farm","George Orwell","Also Nineteen Eighty-Four; Orwell was born in Motihari, Bihar.","p"],
  ["Iliad","Homer","Also the Odyssey.","p"],
  ["The Divine Comedy","Dante Alighieri","",""],
  ["Don Quixote","Miguel de Cervantes","",""],
  ["Paradise Lost","John Milton","","p"],
  ["Faust","Johann Wolfgang von Goethe","",""],
  ["Pride and Prejudice","Jane Austen","","p"],
  ["The Adventures of Tom Sawyer","Mark Twain","",""],
  ["The Old Man and the Sea","Ernest Hemingway","Pulitzer 1953.","p"],
  ["Das Kapital","Karl Marx","With Engels he also wrote The Communist Manifesto (1848).","p"],
  ["The Wealth of Nations","Adam Smith","1776 — Smith is the father of economics.","p"],
  ["On the Origin of Species","Charles Darwin","1859 — natural selection.","p"],
  ["The Prince","Niccolò Machiavelli","","p"],
  ["The Republic","Plato","","p"],
  ["Politics","Aristotle","",""],
  ["The Social Contract","Jean-Jacques Rousseau","","p"],
  ["Utopia","Thomas More","",""],
  ["One Hundred Years of Solitude","Gabriel García Márquez","",""],
  ["Harry Potter series","J. K. Rowling","",""],
  ["The Alchemist","Paulo Coelho","Brazilian novelist.","p"],
  ["The Da Vinci Code","Dan Brown","",""],
  ["A Brief History of Time","Stephen Hawking","","p"],
  ["Sapiens","Yuval Noah Harari","",""],
  ["Gulliver's Travels","Jonathan Swift","",""],
  ["Robinson Crusoe","Daniel Defoe","",""],
  ["Pygmalion","George Bernard Shaw","",""],
  ["Silent Spring","Rachel Carson","Started the modern environmental movement (1962).",""],
  ["To Kill a Mockingbird","Harper Lee","",""],
  ["Alice's Adventures in Wonderland","Lewis Carroll","",""],
  ["Leviathan","Thomas Hobbes","",""],
  ["The General Theory of Employment, Interest and Money","John Maynard Keynes","",""],
  ["Uncle Tom's Cabin","Harriet Beecher Stowe","",""]
];
const B9 = [
  ["Heart Lamp","Banu Mushtaq","Kannada stories, translated by Deepa Bhasthi — International Booker 2025, the first for a Kannada book.","p"],
  ["Tomb of Sand (Ret Samadhi)","Geetanjali Shree","Translated by Daisy Rockwell — International Booker 2022, the first for a Hindi book.","p"],
  ["Taiwan Travelogue","Yáng Shuāng-zǐ","Translated by Lin King — International Booker 2026.",""],
  ["Kairos","Jenny Erpenbeck","German novel — International Booker 2024.",""],
  ["Flesh","David Szalay","Booker Prize 2025.",""],
  ["Orbital","Samantha Harvey","Booker Prize 2024.",""],
  ["Prophet Song","Paul Lynch","Booker Prize 2023.",""],
  ["The Seven Moons of Maali Almeida","Shehan Karunatilaka","Sri Lankan writer — Booker Prize 2022.",""],
  ["Knife","Salman Rushdie","Memoir (2024) about surviving the 2022 attack on him.",""],
  ["Spare","Prince Harry","Memoir, 2023.",""],
  ["Why Bharat Matters","S. Jaishankar","2024; his earlier book was The India Way (2020).",""],
  ["Mother Mary Comes to Me","Arundhati Roy","Memoir about her mother (2025).",""],
  ["The Presidential Years","Pranab Mukherjee","Last volume of his memoirs (2021).",""],
  ["The Light We Carry","Michelle Obama","2022.",""],
  ["Crimson Spring","Navtej Sarna","English novel — Sahitya Akademi Award 2025 (announced March 2026).",""],
  ["Jeete Jee Allahabad","Mamta Kalia","Hindi memoir — Sahitya Akademi Award 2025.",""],
  ["Spirit Nights","Easterine Kire","English — Sahitya Akademi Award 2024.",""]
];

LESSONS.push(
{id:"B7", heat:2, title:"Books by sportspersons", hi:"खिलाड़ियों की पुस्तकें", blocks:[
  {k:"hot", h:"A sports autobiography turns up most years: <b>Playing It My Way</b> (Sachin), <b>Straight from the Heart</b> (Kapil), <b>Sunny Days</b> (Gavaskar), <b>Unbreakable</b> (Mary Kom), <b>A Shot at History</b> (Bindra), <b>The Race of My Life</b> (Milkha)."},
  {k:"story", h:"<p>Champions like to tell their own stories. <b>Sachin</b> called his Playing It My Way; <b>Kapil Dev</b> spoke Straight from the Heart; <b>Yuvraj</b> wrote about The Test of My Life — beating cancer. <b>Milkha Singh</b>'s The Race of My Life became the film Bhaag Milkha Bhaag, and <b>Abhinav Bindra</b> wrote A Shot at History about India's first individual Olympic gold.</p><p>Women champions too: <b>Mary Kom</b> — Unbreakable, <b>Saina Nehwal</b> — Playing to Win, <b>Sania Mirza</b> — Ace Against Odds, <b>P. T. Usha</b> — Golden Girl.</p>", key:"Titles often hint at the sport: 'Shot' — shooter Bindra; 'Ace' — tennis Sania; 'Race' — runner Milkha; '281' — Laxman's famous innings."},
  {k:"table", title:"Books and authors", head:["Book","Author","Note"], rows: B7.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Read the title as a clue: <b>Ace</b> (tennis), <b>Shot</b> (shooting), <b>Race</b> (track), <b>Goal</b> (hockey), <b>281</b> (Laxman's score), <b>Mind</b> (chess — Anand)."},
  {k:"trap", h:"<b>Sunny Days</b> is Gavaskar's (nickname Sunny), not Sourav's. <b>Unbreakable</b> is Mary Kom's. <b>Playing to Win</b> (Saina) vs <b>Playing It My Way</b> (Sachin) — mind the words."}
], sum:["Playing It My Way — Sachin Tendulkar; Straight from the Heart — Kapil Dev; Sunny Days — Sunil Gavaskar.","A Century Is Not Enough — Sourav Ganguly; The Test of My Life — Yuvraj Singh; 281 and Beyond — V. V. S. Laxman.","The Race of My Life — Milkha Singh; Golden Girl — P. T. Usha; Goal — Dhyan Chand.","Unbreakable — Mary Kom; Playing to Win — Saina Nehwal; Ace Against Odds — Sania Mirza.","A Shot at History — Abhinav Bindra; Mind Master — Viswanathan Anand."]},

{id:"B8", heat:2, title:"World classics and great thinkers", hi:"विश्व क्लासिक और विचारक", blocks:[
  {k:"hot", h:"Classic pairs keep coming back: <b>Das Kapital, Wealth of Nations, Origin of Species, The Prince, The Republic, Social Contract, Animal Farm, War and Peace, Hamlet, A Brief History of Time, The Alchemist</b>."},
  {k:"story", h:"<p>Some books changed how the world thinks. <b>Plato's Republic</b> and <b>Aristotle's Politics</b> began political philosophy; <b>Machiavelli</b>'s The Prince taught rulers to be practical; <b>Rousseau</b>'s Social Contract inspired the French Revolution. In economics, <b>Adam Smith</b> argued for free markets in The Wealth of Nations (1776), <b>Karl Marx</b> answered with Das Kapital, and <b>Keynes</b> rescued the 1930s with his General Theory. <b>Darwin</b>'s Origin of Species (1859) changed biology.</p><p>And then the great stories — Homer's Iliad, Shakespeare's plays, Tolstoy's War and Peace, Dickens's Oliver Twist, Orwell's Animal Farm — and modern favourites like The Alchemist and Harry Potter.</p>", key:"Economics: Smith (Wealth of Nations), Marx (Das Kapital), Keynes (General Theory). Politics: Plato, Aristotle, Machiavelli, Rousseau, Hobbes."},
  {k:"table", title:"Books and authors", head:["Book","Author","Note"], rows: B8.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>Smith before Marx before Keynes</b> — 1776, 1867, 1936: capitalism, its critique, its repair. <b>George Orwell was born in India</b> (Motihari, Bihar) — a favourite twist."},
  {k:"trap", h:"<b>The Republic</b> is Plato's; <b>Politics</b> is Aristotle's. <b>Utopia</b> is Thomas More's; <b>Leviathan</b> is Hobbes's. <b>Les Misérables</b> is Victor Hugo, not Dumas. <b>The Communist Manifesto</b> was Marx with Engels."}
], sum:["Hamlet — Shakespeare; War and Peace — Tolstoy; Oliver Twist — Dickens; Les Misérables — Victor Hugo.","Animal Farm and Nineteen Eighty-Four — Orwell; The Old Man and the Sea — Hemingway.","Das Kapital — Marx; The Wealth of Nations — Adam Smith; General Theory — Keynes.","The Republic — Plato; Politics — Aristotle; The Prince — Machiavelli; The Social Contract — Rousseau.","Origin of Species — Darwin; A Brief History of Time — Hawking; The Alchemist — Paulo Coelho."]},

{id:"B9", heat:3, title:"Recent books and prize-winners (2022–2026)", hi:"हाल की पुस्तकें और पुरस्कार विजेता", blocks:[
  {k:"hot", h:"Current affairs questions ask about <b>new books and prize winners</b>: International Booker (Heart Lamp 2025, Taiwan Travelogue 2026), Booker (Flesh 2025), Sahitya Akademi 2025, and memoirs like <b>Knife</b>, <b>Spare</b>, <b>Mother Mary Comes to Me</b>."},
  {k:"story", h:"<p>Two Indian books made history in the International Booker: <b>Geetanjali Shree</b>'s Tomb of Sand (2022) became the first Hindi winner, and <b>Banu Mushtaq</b>'s Heart Lamp (2025) the first Kannada winner — both shared with their translators, Daisy Rockwell and Deepa Bhasthi. In 2026 the prize went to <b>Taiwan Travelogue</b>, the first winner translated from Mandarin.</p><p>Meanwhile <b>Salman Rushdie</b> wrote Knife about surviving a stabbing, <b>Arundhati Roy</b> wrote her first memoir, and the Sahitya Akademi's 2025 awards (announced in March 2026) went to <b>Navtej Sarna</b> (English) and <b>Mamta Kalia</b> (Hindi).</p>", key:"International Booker: 2022 Tomb of Sand (Hindi), 2025 Heart Lamp (Kannada), 2026 Taiwan Travelogue. Booker: 2025 Flesh (David Szalay)."},
  {k:"table", title:"Books and authors (as of October 2026)", head:["Book","Author","Note"], rows: B9.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>International Booker = translated books</b>, prize split between author and translator. <b>Booker = written in English.</b> India's two International Booker wins: <b>Hindi 2022, Kannada 2025</b>."},
  {k:"trap", h:"<b>Heart Lamp</b> won the <b>International</b> Booker, not the Booker. The 2025 Booker went to <b>Flesh</b> (David Szalay). <b>Tomb of Sand</b>'s translator is <b>Daisy Rockwell</b>; <b>Heart Lamp</b>'s is <b>Deepa Bhasthi</b>. Facts in this lesson change every year — check the latest winners before your exam."}
], sum:["Heart Lamp by Banu Mushtaq (tr. Deepa Bhasthi) won the International Booker 2025 — the first Kannada book to win.","Tomb of Sand by Geetanjali Shree (tr. Daisy Rockwell) won in 2022 — the first Hindi book; Taiwan Travelogue won in 2026.","Booker winners: 2022 Shehan Karunatilaka, 2023 Paul Lynch, 2024 Samantha Harvey, 2025 David Szalay (Flesh).","Knife — Salman Rushdie; Spare — Prince Harry; Why Bharat Matters — S. Jaishankar; Mother Mary Comes to Me — Arundhati Roy.","Sahitya Akademi 2025: Navtej Sarna (Crimson Spring, English), Mamta Kalia (Jeete Jee Allahabad, Hindi)."]}
);

pairQs("B7", B7, { q: t => `'${t}' is the autobiography of:`, rq: a => `Which book was written by ${a}?` });
pairQs("B8", B8, { q: t => `Who wrote '${t}'?`, rq: a => `Which of these was written by ${a}?` });
pairQs("B9", B9, { q: t => `Who is the author of '${t}'?`, rq: a => `Which recent book is by ${a}?` });

QB.push(
["B8","Who is known as the father of economics?",["Adam Smith","Karl Marx","John Maynard Keynes","Alfred Marshall"],"Adam Smith, author of The Wealth of Nations (1776).","p"],
["B8","George Orwell, author of Animal Farm, was born in:",["Motihari, India","London, England","Paris, France","Rangoon, Burma"],"He was born in 1903 in Motihari, Bihar.","p"],
["B8","The Communist Manifesto (1848) was written by Karl Marx and:",["Friedrich Engels","Vladimir Lenin","Leon Trotsky","Hegel"],"The Communist Manifesto (1848) was written by Karl Marx and Friedrich Engels.",""],
["B9","Who translated Banu Mushtaq's 'Heart Lamp' into English?",["Deepa Bhasthi","Daisy Rockwell","Lin King","Arunava Sinha"],"The prize is shared equally by author and translator.",""],
["B9","'Tomb of Sand', the first Hindi book to win the International Booker Prize, was originally titled:",["Ret Samadhi","Mai","Tirohit","Hamara Shahar Us Baras"],"Geetanjali Shree's Ret Samadhi, translated by Daisy Rockwell (2022).","p"],
["B9","In which language was 'Heart Lamp' originally written?",["Kannada","Malayalam","Tamil","Telugu"],"It became the first Kannada book to win the International Booker (2025).",""],
["B9","Who won the Booker Prize 2025?",["David Szalay","Samantha Harvey","Paul Lynch","Kiran Desai"],"For the novel Flesh.",""],
["B7","India's first individual Olympic gold medallist wrote which book?",["A Shot at History","Unbreakable","Playing to Win","The Race of My Life"],"Abhinav Bindra won the 10 m air rifle gold at Beijing 2008.",""]
);

LASTMOMENT.push(
{t:"Sports autobiographies", era:["bk"], rows:[["Playing It My Way","Sachin"],["Straight from the Heart","Kapil Dev"],["Sunny Days","Gavaskar"],["Unbreakable","Mary Kom"],["A Shot at History","Abhinav Bindra"],["Race of My Life","Milkha Singh"],["Ace Against Odds","Sania Mirza"],["Playing to Win","Saina Nehwal"]]},
{t:"World classics", era:["bk"], rows:[["Das Kapital","Marx"],["Wealth of Nations","Adam Smith"],["Origin of Species","Darwin"],["The Prince","Machiavelli"],["The Republic","Plato"],["Social Contract","Rousseau"],["Animal Farm","Orwell"],["War and Peace","Tolstoy"]]},
{t:"Recent winners", era:["bk"], rows:[["Intl Booker 2026","Taiwan Travelogue"],["Intl Booker 2025","Heart Lamp — Banu Mushtaq"],["Intl Booker 2022","Tomb of Sand — Geetanjali Shree"],["Booker 2025","Flesh — David Szalay"],["Booker 2024","Orbital — Samantha Harvey"],["Knife","Salman Rushdie"],["Sahitya Akademi 2025 (Eng)","Navtej Sarna"],["Sahitya Akademi 2025 (Hindi)","Mamta Kalia"]]}
);
TILES.push(["1776","Wealth of Nations","bk"],["1859","Origin of Species","bk"],["1848","Communist Manifesto","bk"],["2022","Tomb of Sand — Intl Booker","bk"],["2025","Heart Lamp — Intl Booker","bk"],["2026","Taiwan Travelogue — Intl Booker","bk"]);
