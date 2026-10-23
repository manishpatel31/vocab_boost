/* Part 3 · A6 the Nobel Prize and Indians, A7 world awards and what they are called, A8 latest winners (as of October 2026). */
const A6 = [
  ["Rabindranath Tagore","Literature, 1913","The first Asian Nobel laureate — for Gitanjali.","p"],
  ["C. V. Raman","Physics, 1930","For the Raman effect — the first Asian Nobel in science.","p"],
  ["Har Gobind Khorana","Medicine, 1968","For decoding the genetic code.","p"],
  ["Mother Teresa","Peace, 1979","","p"],
  ["Subrahmanyan Chandrasekhar","Physics, 1983","The Chandrasekhar limit for stars.","p"],
  ["Amartya Sen","Economics, 1998","Welfare economics.","p"],
  ["V. S. Naipaul","Literature, 2001","Trinidad-born, of Indian origin.",""],
  ["Venkatraman Ramakrishnan","Chemistry, 2009","Structure of the ribosome.",""],
  ["Kailash Satyarthi","Peace, 2014","Shared with Malala Yousafzai — against child labour.","p"],
  ["Abhijit Banerjee","Economics, 2019","Shared with Esther Duflo and Michael Kremer — fighting poverty.","p"],
  ["Ronald Ross","Medicine, 1902","Born in Almora; showed that mosquitoes carry malaria.",""],
  ["Rudyard Kipling","Literature, 1907","Born in Bombay; youngest Literature laureate.",""],
  ["Dalai Lama","Peace, 1989","Lives in India (Dharamshala).",""]
];
const A7 = [
  ["Ramon Magsaysay Award","Asia's Nobel Prize","Philippines, since 1957.","p"],
  ["Pritzker Prize","The Nobel of architecture","B. V. Doshi (2018) was the first Indian winner.","p"],
  ["Abel Prize","A Nobel-level prize for mathematics (Norway)","S. R. Srinivasa Varadhan won in 2007.",""],
  ["Fields Medal","Mathematics, for those under 40, every four years","Manjul Bhargava (2014) and Akshay Venkatesh (2018) are of Indian origin.","p"],
  ["Turing Award","The Nobel of computing","Raj Reddy (1994) was the first Asian winner.","p"],
  ["Templeton Prize","For spiritual and religious contributions","The Dalai Lama won in 2012.",""],
  ["Kalinga Prize","UNESCO prize for popularising science","Instituted in 1952 with a gift from Biju Patnaik.","p"],
  ["Goldman Environmental Prize","The Green Nobel","",""],
  ["Stockholm Water Prize","The Nobel Prize of water","Rajendra Singh, 'Waterman of India', won in 2015.","p"],
  ["Right Livelihood Award","The Alternative Nobel Prize","Sweden.",""],
  ["World Food Prize","The Nobel of food and agriculture","M. S. Swaminathan was the first winner (1987).","p"],
  ["Champions of the Earth","The UN Environment Programme's top environmental honour","Narendra Modi received it in 2018 (with Emmanuel Macron).",""],
  ["Gandhi Peace Prize","Government of India's international peace award","Started 1995; first winner Julius Nyerere; latest (2021) Gita Press, Gorakhpur.","p"],
  ["Indira Gandhi Peace Prize","Indira Gandhi Memorial Trust's award for peace, disarmament and development","Started 1986.",""],
  ["Lasker Award","Medical research — 'America's Nobel'","",""],
  ["Sakharov Prize","European Parliament's prize for freedom of thought","",""],
  ["Nansen Refugee Award","UNHCR's award for helping refugees","",""],
  ["Holberg Prize","Humanities and social sciences (Norway)","",""]
];
const A7M = [
  ["Vinoba Bhave","Ramon Magsaysay Award, 1958","The first Indian to receive it.","p"],
  ["Kiran Bedi","Ramon Magsaysay Award, 1994","",""],
  ["T. N. Seshan","Ramon Magsaysay Award, 1996","Election reforms.",""],
  ["Arvind Kejriwal","Ramon Magsaysay Award, 2006","",""],
  ["Ravish Kumar","Ramon Magsaysay Award, 2019","Journalism.",""],
  ["Educate Girls","Ramon Magsaysay Award, 2025","The first Indian organisation to receive it (founded by Safeena Husain).","p"]
];
const A8N = [
  ["Physics 2026","Francis Halzen","For discovering high-energy neutrinos from space.",""],
  ["Chemistry 2026","Henri B. Kagan and Kenso Soai","How homochirality can arise by itself.",""],
  ["Medicine 2026","Karl Deisseroth, Peter Hegemann and Georg Nagel","Optogenetics.",""],
  ["Literature 2026","Anne Carson","Canadian poet.",""],
  ["Peace 2026","Navi Pillay","South African jurist, former UN human rights chief.",""],
  ["Economics 2026","Robert E. Hall and Michael Woodford","New macroeconomic models for stabilisation policy.",""],
  ["Physics 2025","John Clarke, Michel Devoret and John Martinis","Quantum effects in electric circuits.",""],
  ["Chemistry 2025","Susumu Kitagawa, Richard Robson and Omar Yaghi","Metal–organic frameworks.",""],
  ["Medicine 2025","Mary Brunkow, Fred Ramsdell and Shimon Sakaguchi","Peripheral immune tolerance.",""],
  ["Literature 2025","László Krasznahorkai","Hungarian novelist.",""],
  ["Peace 2025","María Corina Machado","Venezuelan democracy campaigner.",""],
  ["Economics 2025","Joel Mokyr, Philippe Aghion and Peter Howitt","Innovation-driven growth.",""]
];
const A8O = [
  ["International Booker Prize 2026","Taiwan Travelogue — Yáng Shuāng-zǐ (tr. Lin King)","The first winner translated from Mandarin.",""],
  ["International Booker Prize 2025","Heart Lamp — Banu Mushtaq (tr. Deepa Bhasthi)","The first Kannada winner.",""],
  ["Booker Prize 2025","Flesh — David Szalay","",""],
  ["Oscar for Best Picture 2026","One Battle After Another","Directed by Paul Thomas Anderson, who also won Best Director.",""],
  ["Oscar for Best Actor 2026","Michael B. Jordan","For Sinners.",""],
  ["Oscar for Best Actress 2026","Jessie Buckley","For Hamnet.",""],
  ["Ramon Magsaysay Award 2026","Tommy Koh, Runa Khan and Bo Kyi","From Singapore, Bangladesh and Myanmar — no Indian winner.",""],
  ["Padma Vibhushan 2026 (art)","Dharmendra and N. Rajam","",""],
  ["Jnanpith (59th, 2024)","Vinod Kumar Shukla","Hindi.",""],
  ["Bharat Ratna (latest, 2024)","Karpoori Thakur, L. K. Advani, P. V. Narasimha Rao, Charan Singh and M. S. Swaminathan","None announced in 2025 or 2026 (to date).",""]
];

LESSONS.push(
{id:"A6", heat:3, title:"The Nobel Prize and Indian laureates", hi:"नोबेल पुरस्कार और भारतीय विजेता", blocks:[
  {k:"hot", h:"Always asked: <b>Indian Nobel laureates</b> with field and year (Tagore 1913, Raman 1930, Khorana 1968, Mother Teresa 1979, Chandrasekhar 1983, Sen 1998, Satyarthi 2014, Banerjee 2019) and basic Nobel facts (1901, Alfred Nobel, Oslo for Peace)."},
  {k:"story", h:"<p>Alfred Nobel, the inventor of dynamite, left his fortune to reward those who did the most good for humanity. The first prizes were given in <b>1901</b> in five fields — Physics, Chemistry, Medicine, Literature and Peace; <b>Economics</b> was added in <b>1969</b>. All are handed out on <b>10 December</b>, Nobel's death anniversary — Peace in <b>Oslo</b>, the rest in <b>Stockholm</b>.</p><p>India's story begins with <b>Rabindranath Tagore</b>, the first Asian laureate, in 1913, and <b>C. V. Raman</b>, the first Asian scientist to win, in 1930. Since then: Khorana, Mother Teresa, Chandrasekhar, Amartya Sen, Kailash Satyarthi and Abhijit Banerjee — plus Indian-origin and India-born laureates like Naipaul, Ramakrishnan, Ronald Ross and Kipling.</p>", key:"Nobel started 1901; Economics from 1969; Peace given in Oslo; Tagore (1913) the first Asian; Raman (1930) the first Asian scientist."},
  {k:"facts", title:"Nobel facts", rows:[
    ["Founded by","The will of Alfred Nobel (inventor of dynamite)"],
    ["First awarded","1901"],
    ["Economics prize","Added in 1969 (Sveriges Riksbank Prize)"],
    ["Ceremony","10 December — Peace in Oslo (Norway), the others in Stockholm (Sweden)"],
    ["Youngest laureate","Malala Yousafzai — Peace, 2014, at 17"],
    ["Won in two sciences","Marie Curie — Physics 1903, Chemistry 1911"],
    ["Two unshared Nobels","Linus Pauling — Chemistry 1954, Peace 1962"],
    ["Most Peace prizes","The International Committee of the Red Cross (three)"]
  ]},
  {k:"table", title:"Indians and India-linked laureates", head:["Laureate","Field and year","Note"], rows: A6.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Indian Nobels in order — <b>“Tagore Raised Kids, Mother Cared, Sen Sat Bravely”</b>: Tagore 1913, Raman 1930, Khorana 1968, Mother Teresa 1979, Chandrasekhar 1983, Sen 1998, Satyarthi 2014, Banerjee 2019."},
  {k:"trap", h:"<b>Khorana</b> won for <b>Medicine</b>, not Chemistry. <b>Ramakrishnan</b> (2009) won for <b>Chemistry</b>. The <b>Peace</b> prize is given in <b>Oslo</b>, not Stockholm. <b>Kailash Satyarthi</b> shared his prize with <b>Malala</b>."}
], sum:["The Nobel Prize was first given in 1901; Economics was added in 1969; Peace is given in Oslo.","Tagore (Literature 1913) was the first Asian laureate; C. V. Raman (Physics 1930) the first Asian in science.","Khorana — Medicine 1968; Mother Teresa — Peace 1979; Chandrasekhar — Physics 1983; Amartya Sen — Economics 1998.","Kailash Satyarthi — Peace 2014 (with Malala); Abhijit Banerjee — Economics 2019.","Malala is the youngest laureate; Marie Curie won in two sciences; Linus Pauling won two unshared prizes."]},

{id:"A7", heat:2, title:"World awards and what they are called", hi:"विश्व पुरस्कार और उनके उपनाम", blocks:[
  {k:"hot", h:"Papers love the nicknames: <b>Asia's Nobel</b> (Magsaysay), <b>Green Nobel</b> (Goldman), <b>Nobel of architecture</b> (Pritzker), <b>Nobel of computing</b> (Turing), <b>Alternative Nobel</b> (Right Livelihood), <b>Nobel of water</b> (Stockholm Water Prize) — plus Indian winners of each."},
  {k:"story", h:"<p>Many fields have a prize so famous it is called 'the Nobel of' that field. The <b>Pritzker</b> for architecture (B. V. Doshi, 2018), the <b>Turing Award</b> for computing (Raj Reddy, 1994), the <b>Abel Prize</b> and <b>Fields Medal</b> for mathematics, the <b>World Food Prize</b> for agriculture (M. S. Swaminathan, the very first, 1987), and the <b>Stockholm Water Prize</b> (Rajendra Singh, 2015).</p><p>Asia's own is the <b>Ramon Magsaysay Award</b> from the Philippines: <b>Vinoba Bhave</b> was the first Indian (1958), and in 2025 <b>Educate Girls</b> became the first Indian organisation to win. India's government gives the <b>Gandhi Peace Prize</b>, started in 1995.</p>", key:"Magsaysay = Asia's Nobel; Pritzker = architecture; Turing = computing; Goldman = Green Nobel; Right Livelihood = Alternative Nobel."},
  {k:"table", title:"Awards and their nicknames", head:["Award","Called / given for","Note"], rows: A7.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Indians and the Magsaysay Award", head:["Winner","Year","Note"], rows: A7M.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>Pritzker = Plans</b> (architects draw plans). <b>Turing = Tech</b>. <b>Goldman = Green</b> (G-G). <b>Kalinga = Knowledge for all</b> (popular science)."},
  {k:"trap", h:"The <b>Fields Medal</b> is only for mathematicians <b>under 40</b>; the <b>Abel Prize</b> has no age limit. The <b>Gandhi Peace Prize</b> is given by the Indian government; the <b>Indira Gandhi Peace Prize</b> by a trust. <b>Magsaysay</b> is Philippine, not Indian."}
], sum:["Ramon Magsaysay Award (Philippines, 1957) is called Asia's Nobel; Vinoba Bhave was the first Indian winner.","Pritzker — architecture (B. V. Doshi 2018); Turing — computing (Raj Reddy 1994); Abel and Fields — mathematics.","World Food Prize — first winner M. S. Swaminathan (1987); Stockholm Water Prize — Rajendra Singh (2015).","Goldman — the Green Nobel; Right Livelihood — the Alternative Nobel; Kalinga — UNESCO science popularisation (1952).","Gandhi Peace Prize (1995) — first Julius Nyerere, latest Gita Press (2021); Educate Girls won the Magsaysay in 2025."]},

{id:"A8", heat:3, title:"Latest winners, 2025–2026", hi:"नवीनतम विजेता 2025–26", blocks:[
  {k:"hot", h:"Current-affairs sections ask about the <b>most recent</b> winners: Nobel 2025 and 2026, the International Booker, the Booker, the Oscars, the Magsaysay Award and India's own honours. This lesson is dated <b>October 2026</b>."},
  {k:"story", h:"<p>The <b>2026 Nobels</b> (announced 5–12 October 2026) went to: Francis Halzen (Physics), Henri Kagan and Kenso Soai (Chemistry), Deisseroth, Hegemann and Nagel (Medicine, for optogenetics), Canadian poet <b>Anne Carson</b> (Literature), South African jurist <b>Navi Pillay</b> (Peace), and Robert Hall and Michael Woodford (Economics).</p><p>In books, <b>Taiwan Travelogue</b> won the International Booker 2026 and <b>Flesh</b> by David Szalay the Booker 2025. At the 2026 Oscars <b>One Battle After Another</b> was Best Picture. No Indian won the Magsaysay in 2026, and no Bharat Ratna has been announced since 2024.</p>", key:"Nobel Peace 2026 — Navi Pillay; Literature 2026 — Anne Carson; 2025 Peace — María Corina Machado."},
  {k:"table", title:"Nobel Prizes 2025 and 2026", head:["Prize","Winners","For"], rows: A8N.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Other recent winners", head:["Award","Winner","Note"], rows: A8O.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Read the year in the question carefully — <b>Peace 2025 Machado, Peace 2026 Pillay</b>; <b>Literature 2025 Krasznahorkai, 2026 Carson</b>."},
  {k:"trap", h:"This lesson goes out of date every year. Before your exam, check the latest Nobel, Booker, Oscar, Padma and sports award winners in the news."},
  {k:"p", h:"<b>Checked 23 October 2026</b> against NobelPrize.org and Britannica (Nobel 2026), the Ramon Magsaysay Award Foundation's 2026 information kit (announced 31 Aug; presented 15 Nov in Manila) and the Booker Prizes site. <b>Booker Prize 2026</b>: the winner is due on <b>9 November 2026</b>; the shortlist (22 Sept) is M. John Harrison, Marlon James, Luke Kennard, Rebecca Perry, Elizabeth Strout and Douglas Stuart — until then, Flesh (David Szalay, 2025) is the latest winner."}
], sum:["Nobel 2026: Physics Halzen; Chemistry Kagan and Soai; Medicine Deisseroth, Hegemann, Nagel; Literature Anne Carson; Peace Navi Pillay; Economics Hall and Woodford.","Nobel 2025: Peace María Corina Machado; Literature László Krasznahorkai; Chemistry Kitagawa, Robson, Yaghi (MOFs).","International Booker 2026: Taiwan Travelogue; 2025: Heart Lamp (Banu Mushtaq). Booker 2025: Flesh (David Szalay).","Oscars 2026: Best Picture One Battle After Another; Best Actor Michael B. Jordan; Best Actress Jessie Buckley.","Magsaysay 2026: Tommy Koh, Runa Khan, Bo Kyi; the latest Bharat Ratna awards are those of 2024."]}
);

pairQs("A6", A6, { q: t => `${t} won the Nobel Prize in:`, rq: a => `Who won the Nobel Prize in ${a}?` });
pairQs("A7", A7, { q: t => `The ${t} is known as / given for:`, rq: a => `Which award is known as '${a}'?` });
pairQs("A7", A7M, { q: t => `${t} received the:`, rq: a => `Who received the ${a}?` });
pairQs("A8", A8N, { q: t => `Who won the Nobel Prize in ${t}?` });
pairQs("A8", A8O, { q: t => `Who / what won the ${t}?` });

QB.push(
["A6","Who was the first Asian to win a Nobel Prize?",["Rabindranath Tagore","C. V. Raman","Mother Teresa","Har Gobind Khorana"],"Literature, 1913, for Gitanjali.","p"],
["A6","Kailash Satyarthi shared the 2014 Nobel Peace Prize with:",["Malala Yousafzai","Aung San Suu Kyi","Barack Obama","Abhijit Banerjee"],"For their struggle against the suppression of children.","p"],
["A6","The Nobel Peace Prize is presented in:",["Oslo","Stockholm","Geneva","Copenhagen"],"All other Nobels are presented in Stockholm.","p"],
["A6","In which year was the Nobel Prize first awarded?",["1901","1896","1911","1969"],"1969 is when the Economics prize was added.","p"],
["A7","Which award is called 'Asia's Nobel Prize'?",["Ramon Magsaysay Award","Gandhi Peace Prize","Kalinga Prize","Seoul Peace Prize"],"Given by the Ramon Magsaysay Award Foundation, Philippines.","p"],
["A7","Who was the first winner of the World Food Prize (1987)?",["M. S. Swaminathan","Norman Borlaug","Verghese Kurien","C. Subramaniam"],"The father of India's Green Revolution.","p"],
["A8","Who won the Nobel Peace Prize 2026?",["Navi Pillay","María Corina Machado","Narges Mohammadi","Nihon Hidankyo"],"South African jurist and former UN High Commissioner for Human Rights.",""],
["A8","The 2025 Nobel Prize in Chemistry was awarded for the development of:",["Metal–organic frameworks","Protein structure prediction","Quantum dots","Click chemistry"],"Kitagawa, Robson and Yaghi.",""]
);

LASTMOMENT.push(
{t:"Indian Nobels", era:["aw"], rows:[["Tagore","Literature 1913"],["C. V. Raman","Physics 1930"],["Khorana","Medicine 1968"],["Mother Teresa","Peace 1979"],["Chandrasekhar","Physics 1983"],["Amartya Sen","Economics 1998"],["Kailash Satyarthi","Peace 2014"],["Abhijit Banerjee","Economics 2019"]]},
{t:"Award nicknames", era:["aw"], rows:[["Asia's Nobel","Magsaysay"],["Architecture","Pritzker"],["Computing","Turing"],["Green Nobel","Goldman"],["Alternative Nobel","Right Livelihood"],["Water","Stockholm Water Prize"],["Food","World Food Prize"],["Science for all","Kalinga Prize (UNESCO)"]]},
{t:"Nobel 2026", era:["aw"], rows:[["Physics","Francis Halzen"],["Chemistry","Kagan, Soai"],["Medicine","Deisseroth, Hegemann, Nagel"],["Literature","Anne Carson"],["Peace","Navi Pillay"],["Economics","Hall, Woodford"],["Peace 2025","María Corina Machado"],["Literature 2025","László Krasznahorkai"]]}
);
TILES.push(["1901","First Nobel Prizes","aw"],["1969","Economics Nobel added","aw"],["10 Dec","Nobel ceremony","aw"],["1913","Tagore's Nobel","aw"],["1957","Magsaysay Award begins","aw"],["1995","Gandhi Peace Prize begins","aw"]);
