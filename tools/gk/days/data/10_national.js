/* Part 1 · National days of India — D1 days that honour people, D2 days for causes and events, D3 the armed forces.
   Rows: [day, date, note, tag]; tag "p" = repeatedly asked, "p|<paper>" = reported from that paper. */
const D1 = [
  ["National Youth Day","12 January","Birth anniversary of Swami Vivekananda (1863).","p"],
  ["Parakram Diwas","23 January","Birth anniversary of Netaji Subhas Chandra Bose; observed since 2021.","p"],
  ["Martyrs' Day (Shaheed Diwas)","30 January","Mahatma Gandhi was assassinated on this day in 1948.","p"],
  ["National Women's Day","13 February","Birth anniversary of Sarojini Naidu.",""],
  ["Shaheed Diwas for Bhagat Singh, Rajguru and Sukhdev","23 March","They were hanged in Lahore in 1931.","p"],
  ["Ambedkar Jayanti","14 April","Birth anniversary of Dr B. R. Ambedkar.","p"],
  ["National Statistics Day","29 June","Birth anniversary of P. C. Mahalanobis.","p"],
  ["National Doctors' Day","1 July","Birth and death anniversary of Dr B. C. Roy.","p"],
  ["Sadbhavana Diwas","20 August","Birth anniversary of Rajiv Gandhi.",""],
  ["National Sports Day","29 August","Birth anniversary of hockey wizard Major Dhyan Chand.","p|SSC CGL · 7 Mar 2020 (Shift 3)"],
  ["Teachers' Day","5 September","Birth anniversary of Dr Sarvepalli Radhakrishnan.","p"],
  ["Engineers' Day","15 September","Birth anniversary of Sir M. Visvesvaraya.","p"],
  ["Gandhi Jayanti","2 October","Also Lal Bahadur Shastri's birth anniversary.","p"],
  ["Rashtriya Ekta Diwas (National Unity Day)","31 October","Birth anniversary of Sardar Vallabhbhai Patel; since 2014.","p"],
  ["National Education Day","11 November","Birth anniversary of Maulana Abul Kalam Azad, India's first Education Minister.","p"],
  ["Children's Day","14 November","Birth anniversary of Jawaharlal Nehru.","p"],
  ["Janjatiya Gaurav Divas","15 November","Birth anniversary of Birsa Munda; since 2021.","p"],
  ["Mahaparinirvan Diwas","6 December","Death anniversary of Dr B. R. Ambedkar.",""],
  ["National Mathematics Day","22 December","Birth anniversary of Srinivasa Ramanujan.","p"],
  ["Kisan Diwas (National Farmers' Day)","23 December","Birth anniversary of Chaudhary Charan Singh.","p"],
  ["Good Governance Day","25 December","Birth anniversary of Atal Bihari Vajpayee.","p"],
  ["Veer Bal Diwas","26 December","Martyrdom of the young sons (Sahibzadas) of Guru Gobind Singh; since 2022.",""]
];
const D1P = [
  ["National Youth Day","Swami Vivekananda"],["Parakram Diwas","Netaji Subhas Chandra Bose"],["National Women's Day","Sarojini Naidu"],
  ["National Statistics Day","P. C. Mahalanobis"],["National Doctors' Day","Dr B. C. Roy"],["Sadbhavana Diwas","Rajiv Gandhi"],
  ["National Sports Day","Major Dhyan Chand"],["Teachers' Day","Dr Sarvepalli Radhakrishnan"],["Engineers' Day","M. Visvesvaraya"],
  ["Rashtriya Ekta Diwas (National Unity Day)","Sardar Vallabhbhai Patel"],["National Education Day","Maulana Abul Kalam Azad"],["Children's Day","Jawaharlal Nehru"],
  ["Janjatiya Gaurav Divas","Birsa Munda"],["National Mathematics Day","Srinivasa Ramanujan"],["Kisan Diwas (National Farmers' Day)","Chaudhary Charan Singh"],
  ["Good Governance Day","Atal Bihari Vajpayee"]
].map(r => [r[0], r[1], "", ""]);
const D2 = [
  ["National Startup Day","16 January","Since 2022.",""],
  ["National Girl Child Day","24 January","Since 2008.","p"],
  ["National Voters' Day","25 January","The Election Commission was set up on 25 January 1950.","p"],
  ["Republic Day","26 January","The Constitution came into force in 1950.","p"],
  ["National Science Day","28 February","C. V. Raman announced the Raman effect in 1928.","p"],
  ["National Safety Day","4 March","",""],
  ["National Vaccination Day","16 March","The first dose of oral polio vaccine was given in 1995.",""],
  ["Civil Services Day","21 April","Sardar Patel addressed the first batch of officers in 1947.",""],
  ["National Panchayati Raj Day","24 April","The 73rd Amendment came into force in 1993.","p"],
  ["National Technology Day","11 May","Pokhran-II nuclear tests, 1998.","p"],
  ["Anti-Terrorism Day","21 May","Death anniversary of Rajiv Gandhi (1991).","p"],
  ["Samvidhan Hatya Diwas","25 June","Marks the Emergency of 1975; declared in 2024.",""],
  ["National Broadcasting Day","23 July","Organised radio broadcasting began in 1927.",""],
  ["National Handloom Day","7 August","The Swadeshi movement was launched on 7 August 1905.","p"],
  ["Partition Horrors Remembrance Day","14 August","Since 2021.",""],
  ["Independence Day","15 August","1947.","p"],
  ["National Space Day","23 August","Chandrayaan-3 landed near the Moon's south pole in 2023.","p"],
  ["Hindi Diwas","14 September","The Constituent Assembly adopted Hindi as an official language in 1949.","p"],
  ["National Press Day","16 November","The Press Council of India began work in 1966.",""],
  ["Constitution Day (Samvidhan Divas)","26 November","The Constitution was adopted in 1949; observed since 2015.","p"],
  ["National Pollution Control Day","2 December","In memory of the Bhopal gas tragedy victims (1984).",""],
  ["National Energy Conservation Day","14 December","",""],
  ["National Consumer Day","24 December","The Consumer Protection Act, 1986 got assent.","p"]
];
const D3 = [
  ["Armed Forces Veterans' Day","14 January","Field Marshal K. M. Cariappa retired on this day in 1953.",""],
  ["Army Day","15 January","Cariappa became the first Indian Commander-in-Chief in 1949.","p"],
  ["NDRF Raising Day","19 January","",""],
  ["Indian Coast Guard Day","1 February","",""],
  ["CISF Raising Day","10 March","",""],
  ["CRPF Raising Day","27 July","",""],
  ["Kargil Vijay Diwas","26 July","Victory in the Kargil war, 1999 (Operation Vijay).","p"],
  ["Air Force Day","8 October","The Indian Air Force was formed in 1932.","p"],
  ["Territorial Army Day","9 October","",""],
  ["Police Commemoration Day","21 October","Ten CRPF men were killed at Hot Springs, Ladakh, in 1959.",""],
  ["ITBP Raising Day","24 October","",""],
  ["Infantry Day","27 October","Troops landed in Srinagar in 1947.",""],
  ["BSF Raising Day","1 December","",""],
  ["Navy Day","4 December","Operation Trident — the attack on Karachi port in 1971.","p"],
  ["Armed Forces Flag Day","7 December","Funds are collected for soldiers' welfare.","p"],
  ["Submarine Day","8 December","",""],
  ["Vijay Diwas","16 December","Victory in the 1971 war; Bangladesh was born.","p"]
];

LESSONS.push(
{id:"D1", heat:3, title:"Days that honour people", hi:"महान व्यक्तियों को समर्पित दिवस", blocks:[
  {k:"hot", h:"The most-asked kind: <b>whose birthday is this day?</b> — Teachers' Day (Radhakrishnan), Engineers' Day (Visvesvaraya), National Sports Day (Dhyan Chand), Statistics Day (Mahalanobis), Mathematics Day (Ramanujan), Youth Day (Vivekananda)."},
  {k:"story", h:"<p>India marks its heroes by turning their birthdays into days with a purpose. A teacher-philosopher's birthday became <b>Teachers' Day</b>; an engineer who built dams became <b>Engineers' Day</b>; a hockey wizard became <b>Sports Day</b>; a monk who inspired the young became <b>Youth Day</b>.</p><p>So learn each day as a <b>person + job</b> pair: Radhakrishnan taught → 5 September; Visvesvaraya built → 15 September; Ramanujan counted → 22 December; Mahalanobis measured → 29 June; Dr B. C. Roy healed → 1 July.</p>", key:"The day's theme matches the person's work: teacher, engineer, sportsman, statistician, mathematician, doctor."},
  {k:"table", title:"Days and dates", head:["Day","Date","Whom it honours"], rows: D1.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Whom each day honours", head:["Day","Person","Note"], rows: D1P.map(r => [r[0], r[1], ""])},
  {k:"trick", h:"September's three: <b>5 Teacher, 14 Hindi, 15 Engineer</b>. December's farmer-to-governance run: <b>22 Ramanujan, 23 Charan Singh (Kisan), 24 Consumer, 25 Vajpayee (Good Governance)</b> — four days in a row."},
  {k:"trap", h:"<b>National Youth Day</b> (12 Jan, Vivekananda) vs <b>International Youth Day</b> (12 Aug). <b>Teachers' Day</b> in India is 5 Sep; <b>World Teachers' Day</b> is 5 Oct. <b>National Education Day</b> is Azad's birthday (11 Nov); <b>Children's Day</b> is Nehru's (14 Nov)."}
], sum:["National Youth Day 12 Jan (Vivekananda); Parakram Diwas 23 Jan (Netaji); Martyrs' Day 30 Jan (Gandhi).","Statistics Day 29 Jun (Mahalanobis); Doctors' Day 1 Jul (B. C. Roy); Sports Day 29 Aug (Dhyan Chand).","Teachers' Day 5 Sep (Radhakrishnan); Engineers' Day 15 Sep (Visvesvaraya); National Unity Day 31 Oct (Patel).","Education Day 11 Nov (Azad); Children's Day 14 Nov (Nehru); Janjatiya Gaurav Divas 15 Nov (Birsa Munda).","Mathematics Day 22 Dec (Ramanujan); Kisan Diwas 23 Dec (Charan Singh); Good Governance Day 25 Dec (Vajpayee)."]},

{id:"D2", heat:3, title:"National days for causes and events", hi:"कारणों और घटनाओं के राष्ट्रीय दिवस", blocks:[
  {k:"hot", h:"Asked often: <b>National Science Day</b> (Raman effect), <b>National Voters' Day</b>, <b>National Technology Day</b> (Pokhran-II), <b>Constitution Day</b>, <b>National Handloom Day</b>, <b>Hindi Diwas</b>, <b>Panchayati Raj Day</b> and the new <b>National Space Day</b>."},
  {k:"story", h:"<p>Other national days remember an <b>event</b>. On 28 February 1928 C. V. Raman announced his discovery — so that is <b>National Science Day</b>. On 11 May 1998 India tested nuclear weapons at Pokhran — <b>National Technology Day</b>. On 7 August 1905 the Swadeshi movement began — <b>National Handloom Day</b>. On 23 August 2023 Chandrayaan-3 touched down on the Moon — <b>National Space Day</b>.</p><p>The Constitution gives two: it was <b>adopted</b> on 26 November 1949 (Constitution Day) and came <b>into force</b> on 26 January 1950 (Republic Day). The Election Commission was born a day before — 25 January 1950 — so that is <b>National Voters' Day</b>.</p>", key:"Constitution adopted 26 Nov 1949 (Constitution Day); in force 26 Jan 1950 (Republic Day); EC founded 25 Jan 1950 (Voters' Day)."},
  {k:"table", title:"Days and dates", head:["Day","Date","Why this date"], rows: D2.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Late January cluster — <b>24 girl, 25 voter, 26 republic</b>: a girl grows up, votes, and celebrates the Republic. <b>11 May 1998 = Technology</b>; <b>23 Aug 2023 = Space</b>."},
  {k:"trap", h:"<b>Constitution Day</b> (26 Nov) is not <b>Republic Day</b> (26 Jan). <b>Hindi Diwas</b> (14 Sep, India) is not <b>World Hindi Day</b> (10 Jan). <b>National Science Day</b> is 28 Feb — not Raman's birthday (7 Nov)."}
], sum:["National Voters' Day 25 Jan; Republic Day 26 Jan; National Science Day 28 Feb (Raman effect, 1928).","Panchayati Raj Day 24 Apr; National Technology Day 11 May (Pokhran-II); Anti-Terrorism Day 21 May.","National Handloom Day 7 Aug (Swadeshi, 1905); National Space Day 23 Aug (Chandrayaan-3); Hindi Diwas 14 Sep.","Constitution Day 26 Nov (adopted 1949); National Pollution Control Day 2 Dec (Bhopal).","National Consumer Day 24 Dec; Samvidhan Hatya Diwas 25 Jun (Emergency, 1975)."]},

{id:"D3", heat:2, title:"Armed forces and security days", hi:"सशस्त्र बल और सुरक्षा दिवस", blocks:[
  {k:"hot", h:"Regulars: <b>Army Day</b> (15 Jan), <b>Air Force Day</b> (8 Oct), <b>Navy Day</b> (4 Dec), <b>Armed Forces Flag Day</b> (7 Dec), <b>Kargil Vijay Diwas</b> (26 Jul) and <b>Vijay Diwas</b> (16 Dec)."},
  {k:"story", h:"<p>Each service has its own birthday-like day. The <b>Army</b> celebrates 15 January, when General K. M. Cariappa took over from the last British commander in 1949. The <b>Air Force</b> was set up on 8 October 1932. The <b>Navy</b> marks 4 December, when Indian missile boats struck Karachi in 1971 (Operation Trident).</p><p>Two victories are remembered: <b>16 December</b> 1971, when Pakistan's army surrendered in Dhaka and Bangladesh was born, and <b>26 July</b> 1999, when the Kargil heights were won back. On <b>7 December</b> every citizen can donate on Armed Forces Flag Day.</p>", key:"Army 15 Jan, Air Force 8 Oct, Navy 4 Dec; Kargil 26 Jul, Vijay Diwas 16 Dec."},
  {k:"table", title:"Days and dates", head:["Day","Date","Why this date"], rows: D3.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Services in calendar order — <b>Army (Jan), Air (Oct), Navy (Dec)</b>: <i>A-A-N</i> — Army, Air, Navy, like the alphabet."},
  {k:"trap", h:"<b>Vijay Diwas</b> (16 Dec, 1971 war) is not <b>Kargil Vijay Diwas</b> (26 Jul, 1999). <b>Navy Day</b> is 4 Dec; <b>Armed Forces Flag Day</b> is 7 Dec. <b>Army Day</b> 15 Jan is the day after <b>Veterans' Day</b> (14 Jan)."}
], sum:["Army Day 15 Jan (Cariappa, 1949); Armed Forces Veterans' Day 14 Jan.","Kargil Vijay Diwas 26 Jul (1999).","Air Force Day 8 Oct (1932); Police Commemoration Day 21 Oct (Hot Springs, 1959).","Navy Day 4 Dec (Operation Trident, 1971); Armed Forces Flag Day 7 Dec.","Vijay Diwas 16 Dec (1971 victory); BSF Raising Day 1 Dec."]}
);

pairQs("D1", D1, { q: t => `When is ${t} observed?`, rq: a => `Which day is observed on ${a}?` });
pairQs("D1", D1P, { q: t => `${t} is observed in honour of:`, rq: a => `Which day honours ${a}?` });
pairQs("D2", D2, { q: t => `On which date is ${t} observed in India?`, rq: a => `Which national day falls on ${a}?` });
pairQs("D3", D3, { q: t => `When is ${t} observed?`, rq: a => `Which day is observed on ${a}?` });

QB.push(
["D2","National Science Day marks the discovery of:",["The Raman effect","Penicillin","The structure of DNA","Radioactivity"],"C. V. Raman announced it on 28 February 1928; he won the Nobel Prize in Physics in 1930.","p"],
["D2","National Technology Day (11 May) commemorates:",["The Pokhran-II nuclear tests of 1998","The launch of Aryabhata","The first computer in India","Chandrayaan-1"],"Operation Shakti, 11 May 1998.","p"],
["D2","National Space Day (23 August) marks:",["Chandrayaan-3's landing on the Moon (2023)","Aryabhata's launch (1975)","Mangalyaan reaching Mars (2014)","Rakesh Sharma's flight (1984)"],"Vikram lander touched down near the lunar south pole; the site is called Shiv Shakti point.","p"],
["D3","Navy Day (4 December) commemorates:",["Operation Trident against Karachi in 1971","The commissioning of INS Vikrant","Independence of the Navy from Britain","The Kargil war"],"Indian missile boats attacked Karachi harbour on 4 December 1971.","p"],
["D1","Engineers' Day honours:",["M. Visvesvaraya","Homi Bhabha","A. P. J. Abdul Kalam","Vikram Sarabhai"],"Sir M. Visvesvaraya (born 15 September 1861), builder of the Krishna Raja Sagara dam; Bharat Ratna 1955.","p"]
);

LASTMOMENT.push(
{t:"Birthdays turned into days", era:["dy"], rows:[["12 Jan","Youth Day — Vivekananda"],["29 Jun","Statistics — Mahalanobis"],["1 Jul","Doctors — B. C. Roy"],["29 Aug","Sports — Dhyan Chand"],["5 Sep","Teachers — Radhakrishnan"],["15 Sep","Engineers — Visvesvaraya"],["11 Nov","Education — Azad"],["22 Dec","Maths — Ramanujan"]]},
{t:"Event days", era:["dy"], rows:[["25 Jan","Voters' Day"],["28 Feb","Science Day"],["24 Apr","Panchayati Raj"],["11 May","Technology Day"],["7 Aug","Handloom Day"],["23 Aug","Space Day"],["14 Sep","Hindi Diwas"],["26 Nov","Constitution Day"]]},
{t:"Forces days", era:["dy"], rows:[["15 Jan","Army Day"],["26 Jul","Kargil Vijay Diwas"],["8 Oct","Air Force Day"],["21 Oct","Police Commemoration"],["4 Dec","Navy Day"],["7 Dec","Flag Day"],["16 Dec","Vijay Diwas"],["1 Dec","BSF Raising Day"]]}
);
TILES.push(["5 Sep","Teachers' Day","dy"],["15 Sep","Engineers' Day","dy"],["29 Aug","National Sports Day","dy"],["28 Feb","National Science Day","dy"],["26 Nov","Constitution Day","dy"],["15 Jan","Army Day","dy"]);
