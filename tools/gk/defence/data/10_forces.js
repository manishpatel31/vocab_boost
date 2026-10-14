/* Part 1 · The armed forces — F1 structure, mottos and training, F2 commands, F3 ranks and gallantry awards. */
const F1M = [
  ["Indian Army","Service Before Self","",""],
  ["Indian Navy","Sham No Varunah","'May the Lord of the Waters be auspicious unto us' (from the Taittiriya Upanishad).","p"],
  ["Indian Air Force","Nabhah Sparsham Deeptam","'Touch the sky with glory' — from the Bhagavad Gita.","p"],
  ["Indian Coast Guard","Vayam Rakshamah","'We protect'.",""],
  ["Border Security Force","Duty unto Death","Jeevan Paryant Kartavya.",""],
  ["National Security Guard","Sarvatra Sarvottam Suraksha","",""],
  ["Assam Rifles","Friends of the North East","",""],
  ["National Cadet Corps","Unity and Discipline","",""]
];
const F1A = [
  ["Indian Military Academy","Dehradun","Trains Army officers; set up in 1932.","p"],
  ["National Defence Academy","Khadakwasla, Pune","First tri-service academy in the world; 1954.","p"],
  ["Officers Training Academy","Chennai","Short Service Commission officers.",""],
  ["Indian Naval Academy","Ezhimala, Kerala","",""],
  ["Air Force Academy","Dundigal, Hyderabad","",""],
  ["Defence Services Staff College","Wellington, Tamil Nadu","",""],
  ["National Defence College","New Delhi","",""],
  ["College of Defence Management","Secunderabad","",""],
  ["High Altitude Warfare School","Gulmarg","",""],
  ["Counter Insurgency and Jungle Warfare School","Vairengte, Mizoram","",""],
  ["Rashtriya Indian Military College","Dehradun","",""]
];
const F2 = [
  ["Northern Command (Army)","Udhampur","",""],
  ["Western Command (Army)","Chandimandir","",""],
  ["Eastern Command (Army)","Kolkata","",""],
  ["Southern Command (Army)","Pune","Oldest Army command.",""],
  ["Central Command (Army)","Lucknow","",""],
  ["South Western Command (Army)","Jaipur","Newest Army command (2005).",""],
  ["Army Training Command","Shimla","",""],
  ["Western Naval Command","Mumbai","",""],
  ["Eastern Naval Command","Visakhapatnam","",""],
  ["Southern Naval Command","Kochi","Training command of the Navy.",""],
  ["Western Air Command","New Delhi","",""],
  ["Eastern Air Command","Shillong","",""],
  ["Central Air Command","Prayagraj","",""],
  ["South Western Air Command","Gandhinagar","",""],
  ["Southern Air Command","Thiruvananthapuram","",""],
  ["Training Command (IAF)","Bengaluru","",""],
  ["Maintenance Command (IAF)","Nagpur","",""],
  ["Andaman and Nicobar Command","Port Blair","India's first and only integrated tri-service theatre command (2001).","p"]
];
const F3R = [
  ["General","Admiral","Air Chief Marshal"],["Lieutenant General","Vice Admiral","Air Marshal"],["Major General","Rear Admiral","Air Vice Marshal"],
  ["Brigadier","Commodore","Air Commodore"],["Colonel","Captain","Group Captain"],["Lieutenant Colonel","Commander","Wing Commander"],
  ["Major","Lieutenant Commander","Squadron Leader"],["Captain","Lieutenant","Flight Lieutenant"],["Lieutenant","Sub Lieutenant","Flying Officer"]
];
const F3G = [
  ["Param Vir Chakra","Highest wartime gallantry award","First awarded to Major Somnath Sharma (1947, posthumous); designed by Savitri Khanolkar.","p"],
  ["Maha Vir Chakra","Second-highest wartime gallantry award","","p"],
  ["Vir Chakra","Third-highest wartime gallantry award","",""],
  ["Ashoka Chakra","Highest peacetime gallantry award","Also given to civilians — e.g. Neerja Bhanot; Rakesh Sharma received it too.","p"],
  ["Kirti Chakra","Second-highest peacetime gallantry award","",""],
  ["Shaurya Chakra","Third-highest peacetime gallantry award","",""],
  ["Param Vishisht Seva Medal","Highest award for distinguished service (not gallantry)","",""]
];
const F3F = [
  ["First Indian Commander-in-Chief of the Army","K. M. Cariappa","Took over on 15 January 1949 — Army Day.","p"],
  ["First Field Marshal","Sam Manekshaw","Made Field Marshal in 1973 after the 1971 victory.","p"],
  ["Second Field Marshal","K. M. Cariappa","Conferred in 1986.",""],
  ["Only Marshal of the Indian Air Force","Arjan Singh","Five-star rank, 2002.","p"],
  ["First Chief of Defence Staff","Bipin Rawat","Took office on 1 January 2020.","p"],
  ["First Param Vir Chakra","Somnath Sharma","Battle of Badgam, 1947.","p"],
  ["First women fighter pilots of the IAF","Avani Chaturvedi, Bhawana Kanth and Mohana Singh","Commissioned in 2016.","p"],
  ["First woman to become Lieutenant General","Punita Arora","",""],
  ["First woman Air Marshal","Padmavathy Bandopadhyay","",""],
  ["First woman Rafale pilot","Shivangi Singh","",""],
  ["Missile Man of India","A. P. J. Abdul Kalam","Led the Integrated Guided Missile Development Programme.","p"],
  ["Missile Woman of India","Tessy Thomas","Led the Agni-IV project.","p"]
];

LESSONS.push(
{id:"F1", heat:2, title:"The armed forces: structure, mottos and academies", hi:"सशस्त्र बल: संरचना, आदर्श वाक्य और अकादमियाँ", blocks:[
  {k:"hot", h:"Expect: <b>Supreme Commander</b> (the President), the <b>Chief of Defence Staff</b>, <b>mottos</b> of the three services, and <b>where</b> the IMA, NDA and other academies are."},
  {k:"story", h:"<p>India's armed forces have three services — the <b>Army</b>, the <b>Navy</b> and the <b>Air Force</b> — under the Ministry of Defence. Their <b>Supreme Commander</b> is the <b>President of India</b>. Since 1 January 2020 a <b>Chief of Defence Staff</b> (CDS) heads the Department of Military Affairs and works for jointness among the three; the first CDS was General <b>Bipin Rawat</b>.</p><p>Each service has a Sanskrit or English motto: the Army's 'Service Before Self', the Navy's 'Sham No Varunah' and the Air Force's 'Nabhah Sparsham Deeptam' from the Gita. Young officers train at the <b>NDA</b> (Khadakwasla), then the <b>IMA</b> (Dehradun), the <b>Naval Academy</b> (Ezhimala) or the <b>Air Force Academy</b> (Dundigal).</p>", key:"Supreme Commander = President; first CDS = Bipin Rawat (2020); IMA Dehradun, NDA Khadakwasla."},
  {k:"table", title:"Mottos", head:["Force","Motto","Meaning / source"], rows: F1M.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Academies and where they are", head:["Institution","Place","Note"], rows: F1A.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Navy's motto has <b>Varuna</b> (god of the sea) in it; the Air Force's has <b>Nabhah</b> (sky). <b>NDA = Khadakwasla</b> (K for Kadets), <b>IMA = Dehradun</b>."},
  {k:"trap", h:"The <b>President</b> is Supreme Commander, not the Prime Minister or the Defence Minister. <b>'Service Before Self'</b> is the Army's motto. <b>NDA</b> is in Pune (Khadakwasla), not Dehradun."}
], sum:["The President is the Supreme Commander of the armed forces.","The first Chief of Defence Staff was General Bipin Rawat (1 January 2020).","Mottos: Army 'Service Before Self', Navy 'Sham No Varunah', Air Force 'Nabhah Sparsham Deeptam', Coast Guard 'Vayam Rakshamah'.","IMA Dehradun (1932), NDA Khadakwasla (1954), Naval Academy Ezhimala, Air Force Academy Dundigal.","High Altitude Warfare School — Gulmarg; Jungle Warfare School — Vairengte."]},

{id:"F2", heat:1, title:"Commands of the Army, Navy and Air Force", hi:"थल, नौ और वायु सेना की कमान", blocks:[
  {k:"hot", h:"Now and then: <b>headquarters of a command</b> (Northern Command — Udhampur, Eastern Naval — Visakhapatnam, Eastern Air — Shillong) and the <b>Andaman and Nicobar Command</b>, India's only tri-service command."},
  {k:"story", h:"<p>Each service divides India into <b>commands</b>. The Army has seven, the Navy three, the Air Force seven. Learn them as a map: the Army's <b>Northern</b> command watches J&K from Udhampur; the <b>Eastern</b> Army and Navy commands sit in Kolkata and Visakhapatnam; the Air Force's <b>Eastern</b> command is up in Shillong.</p><p>In 2001 India created the <b>Andaman and Nicobar Command</b> at Port Blair — its first command where all three services work under one commander. The <b>Strategic Forces Command</b> (2003) manages nuclear weapons.</p>", key:"Army 7, Navy 3, Air Force 7; tri-service: Andaman and Nicobar Command (Port Blair, 2001)."},
  {k:"table", title:"Commands and headquarters", head:["Command","Headquarters","Note"], rows: F2.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Navy's three on the coast — <b>West Mumbai, East Vizag, South Kochi</b>. IAF's odd ones: <b>Central = Prayagraj, Maintenance = Nagpur, Training = Bengaluru</b>."},
  {k:"trap", h:"<b>Eastern Command</b> (Army) is Kolkata but <b>Eastern Air Command</b> is Shillong. <b>Western Command</b> (Army) is Chandimandir; <b>Western Air Command</b> is New Delhi. <b>Southern Command</b> (Army) is Pune; <b>Southern Naval Command</b> is Kochi."}
], sum:["Army commands: Northern Udhampur, Western Chandimandir, Eastern Kolkata, Southern Pune, Central Lucknow, South Western Jaipur, Training Shimla.","Naval commands: Western Mumbai, Eastern Visakhapatnam, Southern Kochi.","Air commands: Western New Delhi, Eastern Shillong, Central Prayagraj, South Western Gandhinagar, Southern Thiruvananthapuram.","IAF Training Command — Bengaluru; Maintenance Command — Nagpur.","Andaman and Nicobar Command (Port Blair, 2001) is the only tri-service theatre command."]},

{id:"F3", heat:2, title:"Ranks, gallantry awards and firsts", hi:"रैंक, वीरता पुरस्कार और प्रथम", blocks:[
  {k:"hot", h:"Popular: <b>Param Vir Chakra</b> (highest wartime) vs <b>Ashoka Chakra</b> (highest peacetime), the <b>first PVC</b>, <b>Field Marshals</b>, the only <b>Marshal of the IAF</b>, <b>equivalent ranks</b> (Colonel = Captain = Group Captain), and women firsts."},
  {k:"story", h:"<p>Gallantry awards come in two ladders. In <b>war</b>: Param Vir Chakra, Maha Vir Chakra, Vir Chakra. In <b>peace</b>: Ashoka Chakra, Kirti Chakra, Shaurya Chakra. The very first Param Vir Chakra went to <b>Major Somnath Sharma</b>, killed defending Srinagar airfield at Badgam in 1947. The medal itself was designed by <b>Savitri Khanolkar</b>, born in Switzerland.</p><p>Only three officers have held five-star rank: Field Marshals <b>Sam Manekshaw</b> and <b>K. M. Cariappa</b>, and Marshal of the Air Force <b>Arjan Singh</b>.</p>", key:"War: PVC → MVC → VrC. Peace: Ashoka → Kirti → Shaurya. Five-stars: Manekshaw, Cariappa, Arjan Singh."},
  {k:"table", title:"Equivalent ranks", head:["Army","Navy","Air Force"], rows: F3R},
  {k:"table", title:"Gallantry and service awards", head:["Award","Rank","Note"], rows: F3G.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Firsts and famous names", head:["Who","Name","Note"], rows: F3F.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Peacetime ladder <b>A-K-S</b> — <i>“Always Keep Smiling”</i>: Ashoka, Kirti, Shaurya. Wartime ladder <b>P-M-V</b> — Param, Maha, Vir (biggest word first)."},
  {k:"trap", h:"<b>Colonel</b> (Army) = <b>Captain</b> (Navy) — but an Army <b>Captain</b> is only a Navy <b>Lieutenant</b>. <b>Ashoka Chakra</b> is peacetime; it is not the highest overall — the PVC is. <b>Manekshaw</b> was the first Field Marshal, Cariappa the second (though senior in age)."}
], sum:["Wartime gallantry: Param Vir Chakra, Maha Vir Chakra, Vir Chakra; peacetime: Ashoka, Kirti, Shaurya Chakra.","The first Param Vir Chakra went to Major Somnath Sharma (1947); the medal was designed by Savitri Khanolkar.","Field Marshals: Sam Manekshaw (first, 1973) and K. M. Cariappa (1986); Arjan Singh is the only Marshal of the IAF.","Colonel = Captain (Navy) = Group Captain; Brigadier = Commodore = Air Commodore.","The first women fighter pilots (2016): Avani Chaturvedi, Bhawana Kanth, Mohana Singh."]}
);

pairQs("F1", F1M, { q: t => `What is the motto of the ${t}?`, rq: a => `'${a}' is the motto of:` });
pairQs("F1", F1A, { q: t => `Where is the ${t} located?`, rq: a => `Which institution is located at ${a}?` });
pairQs("F2", F2, { q: t => `Where is the headquarters of the ${t}?`, rq: a => `Which command is headquartered at ${a}?` });
pairQs("F3", F3R.map(r => [r[0], r[1], `Army ${r[0]} = Navy ${r[1]} = Air Force ${r[2]}.`, ""]), { q: t => `The Army rank of ${t} is equal to which Navy rank?` });
pairQs("F3", F3R.map(r => [r[0], r[2], `Army ${r[0]} = Navy ${r[1]} = Air Force ${r[2]}.`, ""]), { q: t => `The Army rank of ${t} is equal to which Air Force rank?` });
pairQs("F3", F3G, { q: t => `The ${t} is the:`, rq: a => `Which is the ${a.toLowerCase()}?` });
pairQs("F3", F3F, { q: t => `${t}:` });

QB.push(
["F1","Who is the Supreme Commander of the Indian Armed Forces?",["The President of India","The Prime Minister","The Defence Minister","The Chief of Defence Staff"],"Article 53(2) vests the supreme command of the defence forces in the President.","p"],
["F1","The post of Chief of Defence Staff was created in:",["2019 (first CDS took office on 1 January 2020)","2001","2014","1999"],"Announced on Independence Day 2019; General Bipin Rawat became the first CDS.","p"],
["F2","India's only integrated tri-service theatre command is the:",["Andaman and Nicobar Command","Strategic Forces Command","Southern Naval Command","Northern Command"],"Set up at Port Blair in 2001.","p"],
["F3","The Param Vir Chakra was designed by:",["Savitri Khanolkar","Nandalal Bose","Amrita Sher-Gil","Raja Ravi Varma"],"Born Eve Yvonne Maday de Maros in Switzerland.","p"],
["F3","Who was the only officer of the Indian Air Force to hold the five-star rank of Marshal of the Air Force?",["Arjan Singh","Subroto Mukerjee","P. C. Lal","Idris Hasan Latif"],"Arjan Singh led the IAF in the 1965 war.","p"]
);

LASTMOMENT.push(
{t:"Forces basics", era:["df"], rows:[["Supreme Commander","President"],["First CDS","Bipin Rawat (2020)"],["Army motto","Service Before Self"],["Navy motto","Sham No Varunah"],["IAF motto","Nabhah Sparsham Deeptam"],["IMA","Dehradun"],["NDA","Khadakwasla, Pune"],["Tri-service command","Andaman & Nicobar (2001)"]]},
{t:"Gallantry and firsts", era:["df"], rows:[["Highest wartime","Param Vir Chakra"],["Highest peacetime","Ashoka Chakra"],["First PVC","Maj. Somnath Sharma"],["PVC designer","Savitri Khanolkar"],["First Field Marshal","Sam Manekshaw"],["Marshal of IAF","Arjan Singh"],["Colonel =","Captain (Navy) = Group Captain"],["Missile Woman","Tessy Thomas"]]}
);
TILES.push(["1932","IMA and IAF founded","df"],["1954","NDA founded","df"],["2001","Andaman & Nicobar Command","df"],["2020","First CDS","df"],["3","Five-star officers ever","df"],["21","Param Vir Chakra recipients","df"]);
