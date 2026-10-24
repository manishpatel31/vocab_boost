/* Part 2 · P4 nicknames of sportspersons, P5 titles in film, music and the arts, P6 world leaders and figures.
   Rows: [nickname, person, note, tag]. The Sports app teaches the games and records; Music and Classical Dances teach the
   artists' work — this app keeps to the names people call them. */

const P4I = [
  ["Flying Sikh","Milkha Singh","Named by Pakistan's General Ayub Khan after a race in Lahore (1960).",""],
  ["Payyoli Express","P. T. Usha","From her village, Payyoli in Kerala; fourth in the 400 m hurdles at Los Angeles 1984.",""],
  ["Golden Girl","P. T. Usha","For her many Asian golds; also the title of her autobiography.",""],
  ["Dhing Express","Hima Das","From Dhing in Assam; world under-20 400 m champion (2018).",""],
  ["The Wizard","Dhyan Chand","Hockey's magician; his birthday, 29 August, is National Sports Day.",""],
  ["Pocket Dynamo","K. D. Jadhav","Wrestler; India's first individual Olympic medal, bronze at Helsinki 1952.",""],
  ["Golden Boy","Neeraj Chopra","Javelin gold at the Tokyo Olympics (held 2021).",""],
  ["Magnificent Mary","M. C. Mary Kom","Six-time world amateur boxing champion from Manipur.",""],
  ["Tiger of Madras","Viswanathan Anand","India's first chess Grandmaster (1988); five-time world champion.",""],
  ["Sikkimese Sniper","Baichung Bhutia","Striker and former India football captain.",""],
  ["Captain Fantastic","Sunil Chhetri","India's highest goal-scorer in men's international football.",""],
  ["The Wall","Rahul Dravid","For his solid defence as a Test batsman.",""],
  ["Captain Cool","M. S. Dhoni","Calm captain of the 2007, 2011 and 2013 ICC title wins.",""],
  ["Hitman","Rohit Sharma","The only batsman with three ODI double centuries (as of October 2026).",""],
  ["Chase Master","Virat Kohli","For winning run-chases in one-day cricket.",""],
  ["Master Blaster","Sachin Tendulkar","100 international centuries; also called the 'God of Cricket'.",""],
  ["Haryana Hurricane","Kapil Dev","Fast bowler; captain of the 1983 World Cup winners.",""],
  ["Nawab of Najafgarh","Virender Sehwag","From Najafgarh, Delhi; India's first Test triple-centurion.",""],
  ["Prince of Kolkata","Sourav Ganguly","Also 'Dada'; later President of the BCCI.",""],
  ["Turbanator","Harbhajan Singh","Off-spinner; first Indian Test hat-trick (2001).",""],
  ["Jumbo","Anil Kumble","Leg-spinner; took all ten wickets in a Test innings (1999).",""],
  ["Mysore Express","Javagal Srinath","Fast bowler from Mysuru.",""],
  ["Lady Tendulkar","Mithali Raj","The most runs in women's ODIs (7,805, as of October 2026).",""],
  ["Tiger Pataudi","Mansur Ali Khan Pataudi","Became India's Test captain at 21 (1962).",""]
];
const P4W = [
  ["Rawalpindi Express","Shoaib Akhtar","Pakistan fast bowler; first to be timed at 100 mph (2003).",""],
  ["Sultan of Swing","Wasim Akram","Pakistan left-arm fast bowler.",""],
  ["The Don","Don Bradman","Australia; Test batting average 99.94.",""],
  ["Universe Boss","Chris Gayle","West Indies; first T20 international century.",""],
  ["Mr 360","AB de Villiers","South Africa; could hit the ball to every part of the ground.",""],
  ["Black Pearl","Pelé","Brazil; won three football World Cups (1958, 1962, 1970).",""],
  ["Lightning Bolt","Usain Bolt","Jamaica; world records in the 100 m and 200 m.",""],
  ["Flying Finn","Paavo Nurmi","Finland; nine Olympic gold medals in distance running.",""],
  ["King of Clay","Rafael Nadal","Spain; won the French Open 14 times.",""],
  ["The Greatest","Muhammad Ali","USA; three-time world heavyweight boxing champion.",""],
  ["Iron Mike","Mike Tyson","USA; youngest heavyweight boxing champion (1986).",""],
  ["La Pulga (the Flea)","Lionel Messi","Argentina; World Cup winner 2022.",""],
  ["Baltimore Bullet","Michael Phelps","USA swimmer; 23 Olympic gold medals.",""],
  ["Czech Locomotive","Emil Zátopek","Won the 5,000 m, 10,000 m and marathon at Helsinki 1952.",""],
  ["Swiss Maestro","Roger Federer","Switzerland; eight Wimbledon singles titles.",""]
];

const P5F = [
  ["Tragedy King","Dilip Kumar","For sad, intense roles such as Devdas (1955).",""],
  ["Tragedy Queen","Meena Kumari","For roles such as Sahib Bibi Aur Ghulam and Pakeezah.",""],
  ["The Showman","Raj Kapoor","Called the greatest showman of Indian cinema (Awara, Shree 420).",""],
  ["Dream Girl","Hema Malini","From her 1977 film Dream Girl.",""],
  ["Evergreen Hero","Dev Anand","Starred for six decades.",""],
  ["First Superstar","Rajesh Khanna","Gave a long run of hits from 1969 to 1971.",""],
  ["Angry Young Man","Amitabh Bachchan","From Zanjeer (1973) and Deewaar (1975).",""],
  ["King Khan","Shah Rukh Khan","Also 'King of Romance'.",""],
  ["Mr Perfectionist","Aamir Khan","For his careful choice and preparation of roles.",""],
  ["He-Man","Dharmendra","Action star of Sholay (1975).",""],
  ["Bharat Kumar","Manoj Kumar","For patriotic films such as Upkar and Purab Aur Paschim.",""],
  ["Jumping Jack","Jeetendra","For his energetic dancing.",""],
  ["Dadamoni","Ashok Kumar","'Elder brother' in Bengali; an early hero of Hindi films.",""],
  ["Venus of Indian Cinema","Madhubala","Star of Mughal-e-Azam (1960).",""],
  ["Thalaivar","Rajinikanth","'Leader' in Tamil; Dadasaheb Phalke Award 2019 (given 2021).",""],
  ["Ulaganayagan","Kamal Haasan","'Universal hero' in Tamil.",""],
  ["Puratchi Thalaivar","M. G. Ramachandran","'Revolutionary leader'; actor who became Chief Minister of Tamil Nadu.",""],
  ["Khiladi","Akshay Kumar","From his run of 'Khiladi' films from 1992.",""],
  ["Father of Indian Cinema","Dadasaheb Phalke","Made Raja Harishchandra (1913), India's first full-length feature film.",""]
];
const P5A = [
  ["Swar Kokila","Lata Mangeshkar","Also the 'Nightingale of India' in music; Bharat Ratna 2001.",""],
  ["Mozart of Madras","A. R. Rahman","Composer; two Oscars for Slumdog Millionaire (2009).",""],
  ["Isaignani","Ilaiyaraaja","'Musical genius' — Tamil film composer.",""],
  ["Gana Gandharvan","K. J. Yesudas","'Celestial singer' — Malayalam playback singer.",""],
  ["Malika-e-Tarannum","Noor Jehan","'Queen of melody'; singer and actor who moved to Pakistan.",""],
  ["Picasso of India","M. F. Husain","Painter of the Progressive Artists' Group.",""],
  ["Shakespeare of India","Kalidasa","Sanskrit poet-dramatist of Abhijnanasakuntalam.",""],
  ["Upanyas Samrat","Premchand","'Emperor of novels' — Godan, Gaban, Nirmala.",""],
  ["Modern Meera","Mahadevi Varma","Chhayavad poet of longing and devotion.",""],
  ["Poet of Nature (Hindi)","Sumitranandan Pant","Chhayavad poet of the Kumaon hills; first Jnanpith in Hindi (1968).",""],
  ["Rebel Poet","Kazi Nazrul Islam","'Bidrohi Kobi'; national poet of Bangladesh.",""],
  ["Kaviguru","Rabindranath Tagore","'Poet-teacher'; the first Asian Nobel laureate (1913).",""]
];

const P6W = [
  ["Iron Lady","Margaret Thatcher","Britain's first woman Prime Minister (1979–90).",""],
  ["Lady with the Lamp","Florence Nightingale","Nursed soldiers at night in the Crimean War (1850s).",""],
  ["Maid of Orleans","Joan of Arc","Led the French at Orléans (1429); burnt at Rouen (1431).",""],
  ["Desert Fox","Erwin Rommel","German general in North Africa in the Second World War.",""],
  ["Man of Destiny","Napoleon Bonaparte","Emperor of the French (1804); defeated at Waterloo (1815).",""],
  ["Little Corporal","Napoleon Bonaparte","His soldiers' affectionate name for him.",""],
  ["Iron Chancellor","Otto von Bismarck","United Germany in 1871 by 'blood and iron'.",""],
  ["Iron Duke","Duke of Wellington","Arthur Wellesley, who defeated Napoleon at Waterloo.",""],
  ["Great Emancipator","Abraham Lincoln","Freed the slaves of the rebel states (1863); also 'Honest Abe'.",""],
  ["Madiba","Nelson Mandela","His clan name; first black President of South Africa (1994).",""],
  ["Uncle Ho","Ho Chi Minh","Leader of Vietnam's fight for independence.",""],
  ["Il Duce","Benito Mussolini","'The Leader' — Italy's Fascist dictator.",""],
  ["Great Helmsman","Mao Zedong","Founder of the People's Republic of China (1949).",""],
  ["El Libertador","Simón Bolívar","Freed much of South America from Spain; Bolivia is named after him.",""],
  ["Mwalimu","Julius Nyerere","'Teacher' in Swahili; first President of Tanzania.",""],
  ["African Gandhi","Kenneth Kaunda","First President of Zambia; non-violent freedom struggle.",""],
  ["Hero of Two Worlds","Giuseppe Garibaldi","Fought in South America and for Italian unity.",""],
  ["Bard of Avon","William Shakespeare","Born at Stratford-upon-Avon (1564).",""],
  ["Father of History","Herodotus","Greek writer of the Histories (5th century BCE).",""],
  ["Father of English Poetry","Geoffrey Chaucer","Wrote The Canterbury Tales.",""],
  ["Father of Economics","Adam Smith","Wrote The Wealth of Nations (1776).",""],
  ["King of Pop","Michael Jackson","Thriller (1982) is the best-selling album ever.",""]
];
const P6N = [
  ["Pakistan","Muhammad Ali Jinnah","'Quaid-e-Azam' (Great Leader).",""],
  ["Bangladesh","Sheikh Mujibur Rahman","'Bangabandhu' (friend of Bengal); in June 2025 Bangladesh's interim government dropped 'Father of the Nation' from the law.",""],
  ["Turkey","Mustafa Kemal Atatürk","'Atatürk' means 'father of the Turks' — a surname given to him in 1934.",""],
  ["the United States","George Washington","First President (1789–97); 'Father of His Country'.",""],
  ["the Republic of China","Sun Yat-sen","Inspired the 1911 revolution that ended China's last empire.",""],
  ["South Africa","Nelson Mandela","Fought apartheid; spent 27 years in prison.",""],
  ["Kenya","Jomo Kenyatta","First President of Kenya (1964).",""],
  ["Ghana","Kwame Nkrumah","Led Ghana to freedom in 1957, one of the first African colonies to win it.",""],
  ["Myanmar","Aung San","General who won freedom from Britain; father of Aung San Suu Kyi.",""],
  ["Sri Lanka","D. S. Senanayake","First Prime Minister of Ceylon (1947).",""],
  ["Vietnam","Ho Chi Minh","Declared Vietnam independent in 1945.",""],
  ["Singapore","Lee Kuan Yew","First Prime Minister (1959–90).",""],
  ["Indonesia","Sukarno","Proclaimed independence in 1945; first President.",""],
  ["Tanzania","Julius Nyerere","Led Tanganyika to freedom (1961).",""],
  ["Nepal","Prithvi Narayan Shah","Unified Nepal in the 18th century.",""]
];

LESSONS.push(
{id:"P4", heat:2, title:"Nicknames of sportspersons", hi:"खिलाड़ियों के उपनाम", blocks:[
  {k:"hot", h:"Most asked: <b>Flying Sikh</b> (Milkha Singh), <b>Payyoli Express</b> and <b>Golden Girl</b> (P. T. Usha), <b>Dhing Express</b> (Hima Das), <b>The Wizard</b> (Dhyan Chand), and cricket's <b>Wall, Captain Cool, Hitman, Master Blaster</b> and <b>Haryana Hurricane</b>."},
  {k:"story", h:"<p>A sports nickname is a headline in two words. Milkha Singh beat Pakistan's best sprinter in Lahore in 1960, and General Ayub Khan told him he had not run but flown — the <b>Flying Sikh</b> was born. P. T. Usha's speed was named after her village — the <b>Payyoli Express</b> — and Hima Das, from Dhing in Assam, became the <b>Dhing Express</b>.</p><p>Cricket names describe a style: Rahul Dravid stood firm like <b>The Wall</b>, M. S. Dhoni stayed calm as <b>Captain Cool</b>, Rohit Sharma hits hard as the <b>Hitman</b>. Many names carry a place: <b>Haryana</b> Hurricane, <b>Mysore</b> Express, Nawab of <b>Najafgarh</b>, Prince of <b>Kolkata</b>, Tiger of <b>Madras</b>, <b>Sikkimese</b> Sniper, <b>Rawalpindi</b> Express.</p>",
    key:"Flying Sikh — Milkha; Payyoli Express — Usha; Dhing Express — Hima; Wizard — Dhyan Chand; Wall — Dravid; Captain Cool — Dhoni."},
  {k:"table", title:"Indian sportspersons", head:["Nickname","Sportsperson","Note"], rows: P4I.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Sportspersons of the world", head:["Nickname","Sportsperson","Note"], rows: P4W.map(r => [r[0], r[1], r[2]])},
  {k:"link", h:"The games, trophies and records behind these names are in <a href=\"study-sports.html\">Sports</a>; sportspersons' autobiographies (Playing It My Way, The Race of My Life) are in <a href=\"study-books-authors.html?lesson=B7\">Books &amp; Authors, B7</a>; sports awards in <a href=\"study-awards.html?lesson=A5\">Awards &amp; Honours, A5</a>."},
  {k:"trick", h:"<b>Express trains run from home towns</b>: Payyoli (Usha), Dhing (Hima), Mysore (Srinath), Rawalpindi (Shoaib). <b>Gold by age</b>: Usha the Golden <b>Girl</b> (1980s), Neeraj the Golden <b>Boy</b> (2021)."},
  {k:"trap", h:"<b>Little Master</b> was first <b>Sunil Gavaskar</b>; Tendulkar is also called Little Master but is best known as the <b>Master Blaster</b>. <b>Tiger of Madras</b> is Anand (chess), but <b>Tiger Pataudi</b> is the cricket captain. The <b>Flying Finn</b> (Nurmi) is not the <b>Flying Sikh</b> (Milkha)."}
], sum:[
  "Flying Sikh — Milkha Singh (named by Ayub Khan, 1960); Payyoli Express and Golden Girl — P. T. Usha; Dhing Express — Hima Das.",
  "The Wizard — Dhyan Chand; Pocket Dynamo — K. D. Jadhav; Golden Boy — Neeraj Chopra; Magnificent Mary — Mary Kom.",
  "Tiger of Madras — Viswanathan Anand; Sikkimese Sniper — Baichung Bhutia; Captain Fantastic — Sunil Chhetri.",
  "The Wall — Dravid; Captain Cool — Dhoni; Hitman — Rohit Sharma; Master Blaster — Tendulkar; Little Master — Gavaskar (first).",
  "Haryana Hurricane — Kapil Dev; Nawab of Najafgarh — Sehwag; Turbanator — Harbhajan; Jumbo — Kumble; Lady Tendulkar — Mithali Raj.",
  "World: Rawalpindi Express — Shoaib Akhtar; Black Pearl — Pelé; Flying Finn — Nurmi; King of Clay — Nadal; The Don — Bradman."
]},

{id:"P5", heat:1, title:"Titles in film, music and the arts", hi:"फ़िल्म, संगीत और कला की उपाधियाँ", blocks:[
  {k:"hot", h:"Asked now and then: <b>Tragedy King</b> (Dilip Kumar), <b>Showman</b> (Raj Kapoor), <b>Dream Girl</b> (Hema Malini), <b>Father of Indian Cinema</b> (Dadasaheb Phalke), <b>Swar Kokila</b> (Lata Mangeshkar), <b>Mozart of Madras</b> (A. R. Rahman), and the poets' titles — <b>Upanyas Samrat, Modern Meera, Rashtrakavi</b>."},
  {k:"story", h:"<p>Film fans name their stars after the roles they play. Dilip Kumar died on screen so often, and so movingly, that he became the <b>Tragedy King</b>; Meena Kumari was his <b>Tragedy Queen</b>. Raj Kapoor made big, colourful films full of songs — the <b>Showman</b>. Amitabh Bachchan's roles in Zanjeer and Deewaar made him the <b>Angry Young Man</b>, and Hema Malini kept the name of her film <b>Dream Girl</b>.</p><p>Writers and musicians are crowned too. Premchand, who wrote of farmers and clerks, is the <b>Upanyas Samrat</b> (emperor of novels); Mahadevi Varma, who wrote of longing for the divine, is the <b>Modern Meera</b>; Lata Mangeshkar's voice made her <b>Swar Kokila</b>, the cuckoo of melody.</p>",
    key:"Tragedy King — Dilip Kumar; Showman — Raj Kapoor; Dream Girl — Hema Malini; Swar Kokila — Lata Mangeshkar; Upanyas Samrat — Premchand."},
  {k:"table", title:"Film stars", head:["Title","Star","Note"], rows: P5F.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Music, painting and literature", head:["Title","Artist","Note"], rows: P5A.map(r => [r[0], r[1], r[2]])},
  {k:"link", h:"The singers' styles and gharanas are in <a href=\"study-music-instruments.html?lesson=M7\">Music, M7</a>; dancers and their gurus in <a href=\"study-classical-dances.html\">Classical Dances</a>; the Dadasaheb Phalke Award winners in <a href=\"study-awards.html?lesson=A4\">Awards &amp; Honours, A4</a>; the poets' books in <a href=\"study-books-authors.html?lesson=B4\">Books &amp; Authors, B4</a>."},
  {k:"trick", h:"<b>Tragedy pair</b>: King Dilip, Queen Meena. <b>Tamil titles end in 'leader'</b>: Thalaivar (Rajinikanth), Puratchi Thalaivar (MGR). <b>Three Bharats</b>: Bharat Kumar (Manoj Kumar), Bharat Ratna (the award), Bharat Kokila (Sarojini Naidu)."},
  {k:"trap", h:"<b>The Showman</b> is <b>Raj Kapoor</b>; Subhash Ghai was later called the 'showman' of the 1980s and 90s — the classic answer stays Raj Kapoor. <b>Rashtrakavi</b> is <b>Maithili Sharan Gupt</b> (Gandhi's name for him), though Dinkar is also called a national poet. <b>Nightingale of India</b>: Sarojini Naidu in history, Lata Mangeshkar in music."}
], sum:[
  "Tragedy King — Dilip Kumar; Tragedy Queen — Meena Kumari; Showman — Raj Kapoor; Dream Girl — Hema Malini.",
  "Evergreen — Dev Anand; First Superstar — Rajesh Khanna; Angry Young Man — Amitabh Bachchan; Bharat Kumar — Manoj Kumar.",
  "Thalaivar — Rajinikanth; Ulaganayagan — Kamal Haasan; Puratchi Thalaivar — MGR; Father of Indian Cinema — Dadasaheb Phalke.",
  "Swar Kokila — Lata Mangeshkar; Mozart of Madras — A. R. Rahman; Isaignani — Ilaiyaraaja; Picasso of India — M. F. Husain.",
  "Shakespeare of India — Kalidasa; Upanyas Samrat — Premchand; Modern Meera — Mahadevi Varma; Rebel Poet — Nazrul Islam."
]},

{id:"P6", heat:2, title:"Nicknames of world leaders and figures", hi:"विश्व नेताओं और हस्तियों के उपनाम", blocks:[
  {k:"hot", h:"Most asked: <b>Iron Lady</b> (Thatcher), <b>Lady with the Lamp</b> (Florence Nightingale), <b>Maid of Orleans</b> (Joan of Arc), <b>Desert Fox</b> (Rommel), <b>Man of Destiny</b> (Napoleon), <b>Iron Chancellor</b> (Bismarck), and the <b>Father of the Nation</b> of Pakistan, Bangladesh, Turkey and the USA."},
  {k:"story", h:"<p>Nicknames travel faster than history books. A Soviet army newspaper mocked Margaret Thatcher as the <b>Iron Lady</b> in 1976, and she wore the name with pride. Florence Nightingale walked the hospital wards of the Crimean War at night with a lamp — the <b>Lady with the Lamp</b>. Joan of Arc, a farm girl, led France to victory at Orléans — the <b>Maid of Orleans</b>.</p><p>Generals got names from their enemies and their soldiers: the British called Rommel the <b>Desert Fox</b>; Napoleon's men called him the <b>Little Corporal</b>. And almost every free nation has a <b>father</b>: Jinnah for Pakistan, Mujib for Bangladesh, Atatürk for Turkey, Washington for the United States, Mandela for South Africa.</p>",
    key:"Iron Lady — Thatcher; Lady with the Lamp — Nightingale; Maid of Orleans — Joan of Arc; Desert Fox — Rommel; Man of Destiny — Napoleon."},
  {k:"table", title:"World figures: nickname → person", head:["Nickname","Person","Note"], rows: P6W.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Fathers of nations", head:["Country","Father of the Nation","Note"], rows: P6N.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Italy's three makers", rows:[
    ["Soul of Italian unity","Giuseppe <b>Mazzini</b> — founded Young Italy (1831)"],
    ["Sword of Italian unity","Giuseppe <b>Garibaldi</b> — his Red Shirts took Sicily and Naples (1860)"],
    ["Brain of Italian unity","Count <b>Cavour</b> — Prime Minister of Piedmont-Sardinia"]]},
  {k:"link", h:"The revolutions and wars these leaders fought are in <a href=\"study-world-history.html\">World History</a> (L29); the world's 'firsts' (first woman PM, first man in space) are in <a href=\"study-firsts-symbols.html?lesson=F6\">Firsts, F6</a>; scientists' 'father of' titles in <a href=\"study-inventions.html?lesson=I10\">Inventions, I10</a>."},
  {k:"trick", h:"<b>Three irons</b>: Iron <b>Lady</b> — Thatcher (Britain), Iron <b>Chancellor</b> — Bismarck (Germany), Iron <b>Duke</b> — Wellington (Britain). <b>Italy's body</b>: Mazzini the soul, Garibaldi the sword, Cavour the brain."},
  {k:"trap", h:"<b>Lady with the Lamp</b> is Florence <b>Nightingale</b>; the <b>Nightingale of India</b> is Sarojini Naidu — the word 'nightingale' is the trap. The <b>Iron Duke</b> (Wellington) beat Napoleon, the <b>Man of Destiny</b>. <b>Atatürk</b> is a title-surname meaning 'father of the Turks', not his birth name."}
], sum:[
  "Iron Lady — Thatcher; Lady with the Lamp — Florence Nightingale; Maid of Orleans — Joan of Arc; Desert Fox — Rommel.",
  "Man of Destiny and Little Corporal — Napoleon; Iron Chancellor — Bismarck; Iron Duke — Wellington; Great Emancipator — Lincoln.",
  "Madiba — Mandela; Uncle Ho — Ho Chi Minh; Il Duce — Mussolini; Great Helmsman — Mao; El Libertador — Bolívar; Mwalimu — Nyerere.",
  "Fathers: Jinnah (Pakistan), Mujib (Bangladesh), Atatürk (Turkey), Washington (USA), Sun Yat-sen (Republic of China), Kenyatta (Kenya).",
  "Italy: Mazzini the soul, Garibaldi the sword, Cavour the brain. Bard of Avon — Shakespeare; Father of History — Herodotus."
]}
);

pairQs("P4", P4I, { q: t => `Which Indian sportsperson is known as '${t}'?`, e: r => `${r[1]} — '${r[0]}'. ${r[2]}` });
pairQs("P4", P4W, { q: t => `Which sportsperson is nicknamed '${t}'?`, e: r => `${r[1]} — '${r[0]}'. ${r[2]}` });
pairQs("P5", P5F, { q: t => `Which film personality is known as '${t}'?`, e: r => `${r[1]} — '${r[0]}'. ${r[2]}` });
pairQs("P5", P5A, { q: t => `Who is known by the title '${t}'?`, e: r => `${r[1]} — '${r[0]}'. ${r[2]}` });
pairQs("P6", P6W, { q: t => `Who is known as '${t}'?`, e: r => `${r[1]} — '${r[0]}'. ${r[2]}` });
pairQs("P6", P6N, { q: t => `Who is called the Father of the Nation of ${t}?`, e: r => `${r[1]} — ${r[0]}. ${r[2]}` });

QB.push(
["P4","Who gave Milkha Singh the name 'Flying Sikh'?",["General Ayub Khan","Jawaharlal Nehru","Abdul Khaliq","Dhyan Chand"],"Pakistan's leader said it after Milkha beat Abdul Khaliq in Lahore in 1960.",""],
["P4","The cricketer first called the 'Little Master' was:",["Sunil Gavaskar","Sachin Tendulkar","Gundappa Viswanath","Kapil Dev"],"Gavaskar, the short opener of the 1970s and 80s; Tendulkar later shared the name.",""],
["P4","'Payyoli Express' P. T. Usha comes from which state?",["Kerala","Tamil Nadu","Karnataka","Goa"],"Payyoli is in Kozhikode district, Kerala.",""],
["P4","Hima Das gets her nickname 'Dhing Express' from a village in:",["Assam","Odisha","Manipur","Jharkhand"],"Dhing is in Nagaon district, Assam.",""],
["P4","Which sport did 'Tiger of Madras' Viswanathan Anand play?",["Chess","Cricket","Tennis","Billiards"],"He became India's first Grandmaster in 1988.",""],
["P4","K. D. Jadhav, the 'Pocket Dynamo', won India's first individual Olympic medal in:",["Wrestling","Boxing","Weightlifting","Shooting"],"A bronze in freestyle wrestling at Helsinki, 1952.",""],
["P4","Which pair of nickname and sport is wrong?",["Sikkimese Sniper — hockey","The Wizard — hockey","Magnificent Mary — boxing","Captain Fantastic — football"],"Baichung Bhutia, the Sikkimese Sniper, played football.",""],
["P4","Which nickname belongs to Sachin Tendulkar?",["Master Blaster","Chase Master","Hitman","The Wall"],"Chase Master is Kohli, Hitman is Rohit Sharma and The Wall is Dravid.",""],
["P4","'Captain Cool' M. S. Dhoni led India to the ICC T20 World Cup title in:",["2007","2011","2013","2024"],"2011 was the ODI World Cup and 2013 the Champions Trophy; Rohit Sharma led the 2024 T20 win.",""],
["P5","Raj Kapoor is the 'Showman' of Hindi cinema. Which later director of Karz and Ram Lakhan was also called a showman?",["Subhash Ghai","Yash Chopra","Manmohan Desai","Prakash Mehra"],"Subhash Ghai made big musical hits in the 1980s and 90s; the classic answer to 'the Showman' is still Raj Kapoor.",""],
["P5","Lata Mangeshkar and Sarojini Naidu share which title?",["Nightingale of India","Swar Kokila","Bharat Ratna","Modern Meera"],"Both are called the Nightingale of India — Lata for singing, Sarojini for poetry. Only Lata got the Bharat Ratna (2001).",""],
["P5","Dadasaheb Phalke is called the Father of Indian Cinema because he made:",["Raja Harishchandra (1913)","Alam Ara (1931)","Kisan Kanya (1937)","Achhut Kanya (1936)"],"Alam Ara (1931) was the first Indian talkie, by Ardeshir Irani.",""],
["P5","Gandhi called which poet 'Rashtrakavi'?",["Maithili Sharan Gupt","Ramdhari Singh Dinkar","Jaishankar Prasad","Harivansh Rai Bachchan"],"Gupt wrote Bharat Bharati (1912); Dinkar is also called a national poet, but Gandhi's 'Rashtrakavi' was Gupt.",""],
["P5","Which pair of film title and star is wrongly matched?",["Tragedy Queen — Madhubala","Tragedy King — Dilip Kumar","Dream Girl — Hema Malini","Venus of Indian Cinema — Madhubala"],"The Tragedy Queen is Meena Kumari.",""],
["P6","The name 'Iron Lady' was first given to Margaret Thatcher by:",["A Soviet army newspaper","The British Parliament","An American President","The Queen"],"The Red Star newspaper used it in 1976 to mock her; she liked it.",""],
["P6","Florence Nightingale was called the 'Lady with the Lamp' for her work in the:",["Crimean War","First World War","Boer War","American Civil War"],"She nursed British soldiers at Scutari in the 1850s.",""],
["P6","In Italian unification, Mazzini, Garibaldi and Cavour are called its:",["Soul, sword and brain","Brain, soul and sword","Sword, brain and soul","Soul, brain and sword"],"Mazzini the soul, Garibaldi the sword, Cavour the brain.",""],
["P6","Napoleon Bonaparte was defeated at Waterloo (1815) by the man known as the:",["Iron Duke","Iron Chancellor","Desert Fox","Little Corporal"],"The Duke of Wellington; the Little Corporal is Napoleon himself.",""],
["P6","'Quaid-e-Azam', the title of Muhammad Ali Jinnah, means:",["Great Leader","Father of the Nation","Friend of the People","Lion of Islam"],"It is used in Pakistan for its founder.",""],
["P6","Joan of Arc, the 'Maid of Orleans', fought for France against:",["England","Spain","Germany","the Ottoman Turks"],"In the Hundred Years' War; she lifted the siege of Orléans in 1429.",""],
["P6","Erwin Rommel, the 'Desert Fox', commanded German forces in:",["North Africa","Russia","Italy","Norway"],"He fought the British in the Western Desert, 1941–43.",""]
);

LASTMOMENT.push(
{t:"Sports nicknames", era:["pp"], rows:[["Flying Sikh","Milkha Singh"],["Payyoli Express","P. T. Usha"],["Dhing Express","Hima Das"],["The Wizard","Dhyan Chand"],["The Wall","Rahul Dravid"],["Hitman","Rohit Sharma"],["Haryana Hurricane","Kapil Dev"],["Tiger of Madras","V. Anand"]]},
{t:"Screen and arts", era:["pp"], rows:[["Tragedy King","Dilip Kumar"],["Showman","Raj Kapoor"],["Dream Girl","Hema Malini"],["Swar Kokila","Lata Mangeshkar"],["Mozart of Madras","A. R. Rahman"],["Upanyas Samrat","Premchand"],["Modern Meera","Mahadevi Varma"]]},
{t:"World nicknames", era:["pp"], rows:[["Iron Lady","Thatcher"],["Lady with the Lamp","F. Nightingale"],["Maid of Orleans","Joan of Arc"],["Desert Fox","Rommel"],["Man of Destiny","Napoleon"],["Iron Chancellor","Bismarck"],["Madiba","Mandela"]]}
);
TILES.push(["1960","Milkha becomes the Flying Sikh","pp"],["1913","Raja Harishchandra","pp"],["1976","Thatcher called Iron Lady","pp"]);
