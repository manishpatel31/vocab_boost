/* T7: the Eighth Schedule, the classical languages, the official-language Articles (343–351) and the Census language facts. */
const ORIG = "In the original list (1950)";
const T7A = [
  ["Assamese",ORIG,"One of the 14 languages of 1950."],
  ["Bengali",ORIG,"One of the 14 languages of 1950."],
  ["Gujarati",ORIG,"One of the 14 languages of 1950."],
  ["Hindi",ORIG,"One of the 14 languages of 1950."],
  ["Kannada",ORIG,"One of the 14 languages of 1950."],
  ["Kashmiri",ORIG,"Kashmiri was in the first list; it is Sindhi that came later."],
  ["Malayalam",ORIG,"One of the 14 languages of 1950."],
  ["Marathi",ORIG,"One of the 14 languages of 1950."],
  ["Odia",ORIG,"In the 1950 list as ‘Oriya’; the 96th Amendment (2011) changed the spelling to Odia."],
  ["Punjabi",ORIG,"One of the 14 languages of 1950."],
  ["Sanskrit",ORIG,"In the 1950 list, though it is the least spoken of the 22."],
  ["Tamil",ORIG,"One of the 14 languages of 1950."],
  ["Telugu",ORIG,"One of the 14 languages of 1950."],
  ["Urdu",ORIG,"In the 1950 list."],
  ["Sindhi","21st Amendment (1967)","The first language added after 1950, and the only one added that year."],
  ["Konkani","71st Amendment (1992)","Added with Manipuri and Nepali."],
  ["Manipuri","71st Amendment (1992)","Added with Konkani and Nepali."],
  ["Nepali","71st Amendment (1992)","Added with Konkani and Manipuri."],
  ["Bodo","92nd Amendment (2003)","Added with Dogri, Maithili and Santhali."],
  ["Dogri","92nd Amendment (2003)","Added with Bodo, Maithili and Santhali."],
  ["Maithili","92nd Amendment (2003)","Added with Bodo, Dogri and Santhali."],
  ["Santhali","92nd Amendment (2003)","Added with Bodo, Dogri and Maithili."]
];
const T7B = [
  ["Tamil","2004","The first classical language (October 2004)."],
  ["Sanskrit","2005","The second, in November 2005."],
  ["Telugu","2008","Declared with Kannada on 31 October 2008."],
  ["Kannada","2008","Declared with Telugu on 31 October 2008."],
  ["Malayalam","2013","The fifth, in May 2013."],
  ["Odia","2014","The sixth, in February 2014."],
  ["Marathi","2024","One of the five declared on 3 October 2024."],
  ["Pali","2024","One of the five of 3 October 2024 — not in the Eighth Schedule."],
  ["Prakrit","2024","One of the five of 3 October 2024 — not in the Eighth Schedule."],
  ["Assamese","2024","One of the five declared on 3 October 2024."],
  ["Bengali","2024","One of the five declared on 3 October 2024."]
];
const T7C = [
  ["the official language of the Union","Article 343","Hindi in Devanagari, with the international form of Indian numerals; English was to continue for 15 years, to 1965."],
  ["the Official Language Commission and the parliamentary committee on it","Article 344","The President sets up a commission five and ten years after 1950; the first, under B. G. Kher (1955), reported in 1956."],
  ["the official language or languages of a state","Article 345","A state legislature may adopt one or more languages used in the state, or Hindi."],
  ["the language for communication between two states, or a state and the Union","Article 346","The language authorised for the Union's use; two states may agree on Hindi."],
  ["recognising a language spoken by a section of a state's people","Article 347","The President may direct it, if a substantial part of the people demand it."],
  ["the language of the Supreme Court, the high courts, and of Acts and Bills","Article 348","English, until Parliament provides otherwise."],
  ["the special procedure for laws on language","Article 349","For 15 years, such a Bill needed the President's prior sanction."],
  ["the language of a petition for the redress of grievances","Article 350","Anyone may petition in any language used in the Union or the state."],
  ["teaching in the mother tongue at the primary stage","Article 350A","Added by the 7th Amendment, 1956."],
  ["the Special Officer for linguistic minorities","Article 350B","Added by the 7th Amendment, 1956 — the Commissioner for Linguistic Minorities."],
  ["the directive for the development of Hindi","Article 351","Hindi is to draw on Hindustani and the Eighth Schedule languages, and mainly on Sanskrit for its words."]
];

LESSONS.push(
{id:"T7", heat:3, title:"Languages: the Eighth Schedule, classical languages and the official language", hi:"भाषाएँ: आठवीं अनुसूची, शास्त्रीय भाषाएँ और राजभाषा", blocks:[
  {k:"hot", h:"Asked almost every year: <b>how many languages</b> are in the Eighth Schedule (<b>22</b>), <b>which amendment</b> added which (21st, 71st, 92nd), the <b>classical languages</b> (11, Tamil first in 2004, five more in 2024), and the official-language <b>Articles 343–351</b> (Part XVII), with <b>Hindi Divas</b> (14 September)."},
  {k:"story", h:"<p>On <b>14 September 1949</b> the Constituent Assembly agreed on a compromise. <b>Hindi in the Devanagari script</b> would be the official language of the Union (<b>Article 343</b>), but <b>English</b> would carry on beside it for fifteen years. When 1965 came and protests broke out in the south, Parliament had already passed the <b>Official Languages Act, 1963</b>; its 1967 amendment let English continue for as long as needed.</p><p>Beside the official language stands a longer list: the <b>Eighth Schedule</b>. It began in 1950 with <b>14</b> languages. <b>Sindhi</b>, a language without a state, came in <b>1967</b> (21st Amendment); <b>Konkani, Manipuri and Nepali</b> in <b>1992</b> (71st); and <b>Bodo, Dogri, Maithili and Santhali</b> in <b>2003</b> (92nd), making <b>22</b>. Dozens more, from Bhojpuri to Tulu, are still asking to join.</p><p>A third list honours age. In <b>2004</b> the government declared <b>Tamil</b> a <b>classical language</b>, for its 2,000-year-old literature. Sanskrit, Telugu, Kannada, Malayalam and Odia followed, and on <b>3 October 2024</b> five more were added at once — <b>Marathi, Pali, Prakrit, Assamese and Bengali</b> — making <b>eleven</b>.</p>", key:"Hindi in Devanagari (Art. 343); 8th Schedule 14 → 22 (Sindhi 1967, Konkani–Manipuri–Nepali 1992, Bodo–Dogri–Maithili–Santhali 2003); 11 classical languages, Tamil first (2004)."},
  {k:"table", title:"The Eighth Schedule: how each language came in", head:["Language","How it came in","Remember"], rows: T7A.map(r => [r[0], r[1], r[2]])},
  {k:"tl", title:"The Eighth Schedule in time", rows:[["1950","14 languages"],["1967","21st Amendment — Sindhi (15)"],["1992","71st Amendment — Konkani, Manipuri, Nepali (18)"],["2003","92nd Amendment — Bodo, Dogri, Maithili, Santhali (22)"],["2011","96th Amendment — ‘Oriya’ becomes ‘Odia’"]]},
  {k:"table", title:"Classical languages and the year each was declared", head:["Language","Year declared","Remember"], rows: T7B.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Classical status in brief", rows:[
    ["Who decides","The Ministry of Culture, on the advice of a Linguistic Experts Committee; the Sahitya Akademi is the nodal agency"],
    ["Tests (revised 2024)","Early texts or recorded history of 1,500–2,000 years; ancient literature valued as a heritage; knowledge texts, especially prose, besides poetry and inscriptions; the classical form may differ from the modern language"],
    ["What it brings","Two international awards for scholars each year, a centre of excellence, and university chairs"],
    ["How many","11, as of October 2026"],
    ["Not in the Eighth Schedule","Pali and Prakrit — a classical language need not be a scheduled one"]
  ]},
  {k:"table", title:"Part XVII: the official-language Articles", head:["Subject","Article","Remember"], rows: T7C.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Laws, bodies and days", rows:[
    ["Official Languages Act, 1963","Lets English continue with Hindi for the Union's work; the 1967 amendment made this open-ended"],
    ["First Official Language Commission","B. G. Kher, set up in 1955 under Article 344"],
    ["Committee of Parliament on Official Language","Set up in 1976 under the 1963 Act — 30 members (20 from the Lok Sabha, 10 from the Rajya Sabha)"],
    ["Department of Official Language","Under the Ministry of Home Affairs (1975)"],
    ["Hindi Divas","14 September — the day in 1949 the Constituent Assembly adopted Hindi"],
    ["Articles 120 and 210","Business in Parliament and in state legislatures is in Hindi or English (or the state's language); a member may speak in his mother tongue with the Speaker's leave"],
    ["Article 29","Any section of citizens with its own language, script or culture has the right to keep it"],
    ["Eighth Schedule and the Articles","The Schedule is linked to Articles 344(1) and 351"],
    ["Pending demands","About 38 languages — among them Bhojpuri, Rajasthani, Tulu and Bhoti — have asked to join (as of October 2026, still 22)"]
  ]},
  {k:"table", title:"Most-spoken languages (Census 2011)", head:["Rank","Language","Share of speakers"], rows:[
    ["1","Hindi","43.6% (about 52.8 crore)"],["2","Bengali","8.0%"],["3","Marathi","6.9%"],["4","Telugu","6.7%"],["5","Tamil","5.7%"],["6","Gujarati","4.6%"],["7","Urdu","4.2%"],["8","Kannada","3.6%"],["9","Odia","3.1%"],["10","Malayalam","2.9%"]]},
  {k:"link", h:"The full language census — 121 languages, 19,569 raw mother-tongue returns, the largest non-scheduled language — is in the <b>Census</b> app. The Sanskrit playwrights and the first Jnanpith are in <b>Art & Culture</b> (Literature, languages & scripts); state official languages are in <b>States & UTs</b> (High courts and official languages)."},
  {k:"trick", h:"Amendments and their languages — <b>“21 Sindhi, 71 KMN, 92 BDMS”</b>: Sindhi; Konkani–Manipuri–Nepali; Bodo–Dogri–Maithili–Santhali (‘Big Dogs Make Sounds’). The numbers rise <b>21 → 71 → 92</b> as the years rise <b>1967 → 1992 → 2003</b>.<br>Classical years — <b>“04 Tamil, 05 Sanskrit, 08 the two southern twins, 13 Malayalam, 14 Odia, 24 the five”</b>."},
  {k:"trap", h:"<b>English is not</b> in the Eighth Schedule. <b>Kashmiri</b> was in the first list — the 1967 addition was <b>Sindhi</b>. <b>Nepali</b> came in 1992, not 2003. <b>Pali and Prakrit</b> are classical but <b>not</b> scheduled. Article <b>343</b> names Hindi as the Union's official language — India has <b>no ‘national language’</b> in the Constitution. Article <b>348</b> (courts) keeps <b>English</b>."}
], sum:["Eighth Schedule: 22 languages — 14 in 1950; Sindhi (21st, 1967); Konkani, Manipuri, Nepali (71st, 1992); Bodo, Dogri, Maithili, Santhali (92nd, 2003).","96th Amendment (2011): Oriya became Odia. English is not in the Eighth Schedule.","Classical languages (11): Tamil 2004, Sanskrit 2005, Telugu and Kannada 2008, Malayalam 2013, Odia 2014; Marathi, Pali, Prakrit, Assamese, Bengali on 3 October 2024.","Part XVII, Articles 343–351: 343 Union language (Hindi in Devanagari), 345 state languages, 348 courts (English), 350A mother tongue, 350B linguistic minorities officer, 351 developing Hindi.","Official Languages Act 1963; Kher Commission 1955; Hindi Divas 14 September.","Census 2011: Hindi 43.6%, then Bengali, Marathi, Telugu, Tamil."]}
);

pairQs("T7", T7A.filter(r => r[1] !== ORIG || ["Kashmiri","Sanskrit","Urdu","Odia","Assamese"].includes(r[0])),
  { q: t => `How did ${t} enter the Eighth Schedule?`, rq: a => `Which language entered the Eighth Schedule by the ${a}?` });
pairQs("T7", T7B, { q: t => `In which year was ${t} declared a classical language?`, rq: a => `Which language was declared a classical language in ${a}?`, extra: ["2010","2019"] });
pairQs("T7", T7C, { q: t => `Which Article of the Constitution deals with ${t}?` });

QB.push(
["T7","How many languages are there in the Eighth Schedule (as of October 2026)?",["22","18","24","14"],"There were 14 in 1950; three amendments raised the number to 22, and none has been added since 2003.",""],
["T7","How many languages did the Eighth Schedule have when the Constitution came into force?",["14","15","18","22"],"Fourteen. Sindhi made it 15 in 1967.",""],
["T7","Which of these is NOT in the Eighth Schedule?",["English","Nepali","Sindhi","Konkani"],"English is used for official work under Article 343 and the 1963 Act, but it is not a scheduled language.",""],
["T7","Which Amendment changed the spelling ‘Oriya’ to ‘Odia’ in the Eighth Schedule?",["96th Amendment, 2011","92nd Amendment, 2003","71st Amendment, 1992","100th Amendment, 2015"],"The 96th Amendment (2011) changed the name of the language; the state had been renamed Odisha the same year.",""],
["T7","How many classical languages does India have (as of October 2026)?",["11","6","22","9"],"Six were declared from 2004 to 2014 and five more on 3 October 2024.",""],
["T7","Which two classical languages are NOT in the Eighth Schedule?",["Pali and Prakrit","Pali and Sanskrit","Prakrit and Odia","Assamese and Bengali"],"Pali and Prakrit, declared classical in 2024, are not among the 22 scheduled languages.",""],
["T7","Which ministry confers classical-language status?",["Ministry of Culture","Ministry of Education","Ministry of Home Affairs","Ministry of External Affairs"],"The Ministry of Culture acts on the advice of a Linguistic Experts Committee, with the Sahitya Akademi as nodal agency.",""],
["T7","For classical status, a language must have early texts or a recorded history of about:",["1,500–2,000 years","500–1,000 years","300 years","5,000 years"],"The 2024 criteria keep the antiquity test of 1,500–2,000 years.",""],
["T7","Which five languages were declared classical on 3 October 2024?",["Marathi, Pali, Prakrit, Assamese and Bengali","Marathi, Bhojpuri, Pali, Tulu and Bengali","Gujarati, Pali, Prakrit, Assamese and Maithili","Marathi, Pali, Konkani, Assamese and Odia"],"These five took the number from six to eleven. Odia was already classical (2014).",""],
["T7","Arrange these classical languages in the order they were declared: Malayalam, Kannada, Odia, Sanskrit.",["Sanskrit, Kannada, Malayalam, Odia","Kannada, Sanskrit, Odia, Malayalam","Sanskrit, Malayalam, Kannada, Odia","Odia, Malayalam, Kannada, Sanskrit"],"Sanskrit 2005, Kannada 2008, Malayalam 2013, Odia 2014.",""],
["T7","Which of these languages was added to the Eighth Schedule in the same year as Santhali?",["Dogri","Nepali","Sindhi","Konkani"],"Santhali and Dogri came in together with Bodo and Maithili in 2003.",""],
["T7","Which group of languages was added to the Eighth Schedule by the 71st Amendment?",["Konkani, Manipuri and Nepali","Bodo, Dogri and Maithili","Sindhi, Konkani and Nepali","Manipuri, Santhali and Bodo"],"The 71st Amendment of 1992 added the three; Bodo, Dogri, Maithili and Santhali came in 2003.",""],
["T7","Under Article 343, the official language of the Union is:",["Hindi in the Devanagari script","Hindi and English equally","Hindustani in either script","All the Eighth Schedule languages"],"Article 343(1). The form of numerals is the international form of Indian numerals.",""],
["T7","Under Article 343, for how many years was English to continue for the Union's official purposes?",["15 years","10 years","25 years","Indefinitely"],"Fifteen years from 1950, i.e. to 1965. The Official Languages Act (1963, amended 1967) later let it continue.",""],
["T7","The official-language provisions (Articles 343–351) form which Part of the Constitution?",["Part XVII","Part XV","Part XIV","Part XVIII"],"Part XVII is on official language; Part XVIII is on emergency provisions.",""],
["T7","Who headed the first Official Language Commission (1955)?",["B. G. Kher","G. B. Pant","Kaka Kalelkar","K. M. Munshi"],"B. G. Kher's commission reported in 1956; G. B. Pant chaired the parliamentary committee that studied its report.",""],
["T7","The Official Languages Act was passed in:",["1963","1950","1956","1976"],"The Act of 1963, amended in 1967, lets English continue alongside Hindi.",""],
["T7","How many members does the Committee of Parliament on Official Language have?",["30 — 20 from the Lok Sabha and 10 from the Rajya Sabha","20 — 10 from each House","15 — all from the Lok Sabha","45 — 30 from the Lok Sabha and 15 from the Rajya Sabha"],"Set up in 1976 under the 1963 Act, it reviews the use of Hindi in the Union's work.",""],
["T7","Which language was spoken by the largest share of Indians after Hindi, according to Census 2011?",["Bengali","Marathi","Telugu","Tamil"],"Bengali (8.0%) was second, Marathi (6.9%) third and Telugu (6.7%) fourth.",""],
["T7","Which of these scheduled languages had the fewest speakers in Census 2011?",["Sanskrit","Bodo","Dogri","Manipuri"],"Fewer than 25,000 people returned Sanskrit as their mother tongue.",""],
["T7","Does the Constitution name a national language of India?",["No — it names Hindi as the official language of the Union","Yes — Hindi","Yes — Hindi and English","Yes — Sanskrit"],"The Constitution speaks only of an official language (Article 343); it names no national language.",""]
);

LASTMOMENT.push(
{t:"Eighth Schedule", era:["tl"], rows:[["1950","14 languages"],["21st (1967)","Sindhi"],["71st (1992)","Konkani, Manipuri, Nepali"],["92nd (2003)","Bodo, Dogri, Maithili, Santhali"],["96th (2011)","Oriya → Odia"],["Not in it","English, Pali, Prakrit"]]},
{t:"Classical languages", era:["tl"], rows:[["2004","Tamil"],["2005","Sanskrit"],["2008","Telugu, Kannada"],["2013","Malayalam"],["2014","Odia"],["2024","Marathi, Pali, Prakrit, Assamese, Bengali"]]},
{t:"Official-language Articles", era:["tl"], rows:[["343","Union: Hindi in Devanagari"],["345","State languages"],["348","Courts: English"],["350A","Mother tongue at primary"],["350B","Linguistic minorities officer"],["351","Develop Hindi"]]}
);
TILES.push(["22","Eighth Schedule languages","tl"],["11","Classical languages (2024)","tl"],["14","Languages in 1950","tl"],["2004","Tamil — first classical","tl"],["14 Sept","Hindi Divas","tl"]);
