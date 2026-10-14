/* Part 1 · S1 how the map was made (reorganisation, new states, zonal councils); S2 the north; S3 the centre (as of October 2026). */
const S1 = [
  ["Andhra State formed — the first state made on the basis of language","1953","1 October 1953, after Potti Sriramulu died fasting in December 1952; capital Kurnool.","p"],
  ["States Reorganisation Commission (Fazl Ali Commission) set up","1953","December 1953; it reported in 1955.","p"],
  ["States Reorganisation Act comes into force","1956","1 November 1956 — 14 states and 6 Union Territories.","p"],
  ["Bombay State split into Gujarat and Maharashtra","1960","1 May 1960, by the Bombay Reorganisation Act.","p"],
  ["Goa, Daman and Diu freed from Portuguese rule","1961","19 December 1961 — Operation Vijay.",""],
  ["Nagaland becomes a state","1963","1 December 1963 — the 16th state.","p"],
  ["Haryana carved out of Punjab","1966","1 November 1966; Chandigarh became a UT and the shared capital.","p"],
  ["Madras State renamed Tamil Nadu","1969","14 January 1969.",""],
  ["Himachal Pradesh becomes a full state","1971","25 January 1971 — the 18th state.","p"],
  ["Manipur, Tripura and Meghalaya become states","1972","21 January 1972.","p"],
  ["Mysore State renamed Karnataka","1973","1 November 1973.",""],
  ["Sikkim becomes the 22nd state","1975","16 May 1975, by the 36th Amendment.","p"],
  ["Mizoram and Arunachal Pradesh become states","1987","20 February 1987; Goa followed on 30 May 1987 as the 25th state.","p"],
  ["Chhattisgarh, Uttarakhand and Jharkhand formed","2000","On 1, 9 and 15 November 2000.","p"],
  ["Pondicherry renamed Puducherry","2006","",""],
  ["Uttaranchal renamed Uttarakhand","2007","1 January 2007.",""],
  ["Orissa renamed Odisha","2011","And the language Oriya became Odia.",""],
  ["Telangana becomes the 29th state","2014","2 June 2014.","p"],
  ["Jammu and Kashmir state split into two UTs","2019","31 October 2019 — the UTs of Jammu and Kashmir, and Ladakh.","p"],
  ["Dadra and Nagar Haveli merged with Daman and Diu","2020","26 January 2020 — India now has 8 UTs.","p"],
  ["Port Blair renamed Sri Vijaya Puram","2024","September 2024 — capital of the Andaman and Nicobar Islands.",""]
];
const S1C = [
  ["Andhra State (1953)","Madras State","The Telugu-speaking north of Madras State.","p"],
  ["Gujarat (1960)","Bombay State","Bombay State was split in two.","p"],
  ["Maharashtra (1960)","Bombay State","","p"],
  ["Nagaland (1963)","Assam","",""],
  ["Haryana (1966)","Punjab","The Hindi-speaking part of Punjab.","p"],
  ["Meghalaya (1972)","Assam","An autonomous state inside Assam from 1970, a full state in 1972.",""],
  ["Mizoram (UT 1972, state 1987)","Assam","Once the Mizo Hills district of Assam.",""],
  ["Chhattisgarh (2000)","Madhya Pradesh","","p"],
  ["Uttarakhand (2000)","Uttar Pradesh","","p"],
  ["Jharkhand (2000)","Bihar","","p"],
  ["Telangana (2014)","Andhra Pradesh","","p"],
  ["Ladakh UT (2019)","Jammu and Kashmir state","",""]
];
const S1Z = [
  ["Punjab","Northern Zonal Council",""],
  ["Rajasthan","Northern Zonal Council",""],
  ["Himachal Pradesh","Northern Zonal Council",""],
  ["Uttarakhand","Central Zonal Council","Not the Northern council — a common trap."],
  ["Uttar Pradesh","Central Zonal Council",""],
  ["Chhattisgarh","Central Zonal Council",""],
  ["Madhya Pradesh","Central Zonal Council",""],
  ["Jharkhand","Eastern Zonal Council",""],
  ["Odisha","Eastern Zonal Council",""],
  ["West Bengal","Eastern Zonal Council",""],
  ["Goa","Western Zonal Council",""],
  ["Gujarat","Western Zonal Council",""],
  ["Telangana","Southern Zonal Council",""],
  ["Kerala","Southern Zonal Council",""],
  ["Puducherry","Southern Zonal Council","The only UT in the Southern council."],
  ["Sikkim","North Eastern Council","Joined the NEC in 2002; the NEC (1971) is not one of the five zonal councils."]
];
const S2 = [
  ["Punjab","Chandigarh","Shared with Haryana; Chandigarh itself is a UT.","p"],
  ["Haryana","Chandigarh","Shared with Punjab.","p"],
  ["Himachal Pradesh","Shimla","Summer capital; Dharamshala is the winter (second) capital since 2017.","p",1],
  ["Himachal Pradesh (winter)","Dharamshala","Declared the second capital in 2017; the Assembly’s winter session meets at Tapovan near Dharamshala.",""],
  ["Rajasthan","Jaipur","The Pink City — but the high court sits at Jodhpur.","p"]
];
const S2K = [
  ["is known as the ‘Land of Five Rivers’","Punjab","Panj (five) + aab (water): Sutlej, Beas, Ravi, Chenab and Jhelum.","p"],
  ["is home to the Golden Temple and Jallianwala Bagh","Punjab","Both in Amritsar.",""],
  ["is known for Bhangra and Giddha, and the Baisakhi harvest festival","Punjab","",""],
  ["was carved out of Punjab on 1 November 1966","Haryana","India’s 17th state.","p"],
  ["is home to Kurukshetra and Panipat","Haryana","Panipat saw three great battles: 1526, 1556 and 1761.",""],
  ["became a full state on 25 January 1971","Himachal Pradesh","India’s 18th state.","p"],
  ["is called India’s ‘Apple State’","Himachal Pradesh","Most apples come from Shimla and Kullu.",""],
  ["made Sanskrit its second official language in 2019","Himachal Pradesh","Uttarakhand did it first, in 2010.",""],
  ["has the Kalka–Shimla railway, a UNESCO World Heritage site","Himachal Pradesh","Part of the Mountain Railways of India.",""],
  ["was once called Rajputana, the ‘Land of Kings’","Rajasthan","",""],
  ["has the Thar Desert and Mount Abu","Rajasthan","Guru Shikhar on Mount Abu is the highest point of the Aravallis.","p"],
  ["is known for the Ghoomar and Kalbelia dances","Rajasthan","Kalbelia is on UNESCO’s intangible heritage list.",""],
  ["celebrates its foundation day on 30 March","Rajasthan","Greater Rajasthan was formed on 30 March 1949.",""]
];
const S3 = [
  ["Uttar Pradesh","Lucknow","The high court is at Prayagraj (Allahabad), with a bench at Lucknow.","p",1],
  ["Uttarakhand","Dehradun","Winter capital and seat of government.","p"],
  ["Uttarakhand (summer)","Gairsain (Bhararisain)","Declared the summer capital in 2020.","p"],
  ["Madhya Pradesh","Bhopal","The City of Lakes — the high court is at Jabalpur.","p"],
  ["Chhattisgarh","Raipur","Nava Raipur (Atal Nagar) is the new planned capital; the high court is at Bilaspur.","p",1]
];
const S3K = [
  ["has the most Lok Sabha seats (80)","Uttar Pradesh","Also the most Rajya Sabha seats (31).","p"],
  ["is home to Varanasi, Prayagraj and Ayodhya","Uttar Pradesh","",""],
  ["celebrates its foundation day on 24 January","Uttar Pradesh","The United Provinces were renamed Uttar Pradesh on 24 January 1950.",""],
  ["is called ‘Devbhoomi’ (Land of the Gods)","Uttarakhand","Char Dham: Yamunotri, Gangotri, Kedarnath, Badrinath.","p"],
  ["was carved out of Uttar Pradesh on 9 November 2000","Uttarakhand","The 27th state, first named Uttaranchal.","p"],
  ["has the sources of the Ganga and the Yamuna","Uttarakhand","Gangotri and Yamunotri glaciers.",""],
  ["brought in a Uniform Civil Code in January 2025","Uttarakhand","The first state to pass a UCC law after independence.","p"],
  ["is called the ‘Heart of India’","Madhya Pradesh","It lies at the centre of the country.","p"],
  ["is called the ‘Tiger State’","Madhya Pradesh","Most tigers in the 2022 census.","p"],
  ["is home to Khajuraho, Sanchi and Bhimbetka","Madhya Pradesh","All three are UNESCO sites.",""],
  ["was carved out of Madhya Pradesh on 1 November 2000","Chhattisgarh","The 26th state.","p"],
  ["has a name meaning ‘36 forts’","Chhattisgarh","",""],
  ["is called the ‘Rice Bowl of Central India’","Chhattisgarh","",""]
];

LESSONS.push(
{id:"S1", heat:3, title:"How the map was made", hi:"राज्यों का पुनर्गठन — नक्शा कैसे बना", blocks:[
  {k:"hot", h:"Asked again and again: the <b>Fazl Ali Commission</b> and the <b>States Reorganisation Act, 1956</b>; the <b>year each new state was born</b> (Nagaland 1963, Haryana 1966, Sikkim 1975, the three of 2000, Telangana 2014); <b>which state it was carved from</b>; and the <b>2019 and 2020 changes</b> that left India with <b>28 states and 8 UTs</b>."},
  {k:"story", h:"<p>In 1947 India was a patchwork of British provinces and more than 500 princely states. People wanted states drawn by <b>language</b>. When <b>Potti Sriramulu</b> died fasting in December 1952, the government gave in: <b>Andhra State</b> was born on 1 October 1953 — the first linguistic state. The <b>States Reorganisation Commission</b> (chair <b>Fazl Ali</b>, members <b>K. M. Panikkar</b> and <b>H. N. Kunzru</b>) then redrew the whole map. The <b>States Reorganisation Act</b> came into force on <b>1 November 1956</b> with <b>14 states and 6 UTs</b>, and the <b>7th Amendment</b> ended the old Part A/B/C/D classes.</p><p>The map kept changing: Bombay State split into <b>Gujarat and Maharashtra</b> (1960), <b>Nagaland</b> (1963), <b>Haryana</b> (1966), <b>Himachal</b> (1971), <b>Manipur, Tripura, Meghalaya</b> (1972), <b>Sikkim</b> (1975), <b>Mizoram, Arunachal, Goa</b> (1987), <b>Chhattisgarh, Uttarakhand, Jharkhand</b> (2000) and <b>Telangana</b> (2014). In 2019 the state of <b>Jammu and Kashmir</b> became two UTs, and in 2020 <b>Dadra and Nagar Haveli</b> merged with <b>Daman and Diu</b>. The same 1956 Act set up <b>five zonal councils</b>, chaired by the Union Home Minister.</p>", key:"1953 Andhra → 1956 SRC Act (14 states, 6 UTs) → 1960 Gujarat/Maharashtra → 1963 Nagaland → 1966 Haryana → 1971 HP → 1972 three NE states → 1975 Sikkim → 1987 Mizoram, Arunachal, Goa → 2000 three → 2014 Telangana → today 28 states and 8 UTs."},
  {k:"facts", title:"India today (as of October 2026)", rows:[
    ["States","28 — the youngest is Telangana (2 June 2014)"],
    ["Union Territories","8 — Delhi, Chandigarh, J&K, Ladakh, Puducherry, Lakshadweep, Andaman and Nicobar Islands, Dadra and Nagar Haveli and Daman and Diu"],
    ["UTs with an elected legislature","3 — Delhi, Puducherry, Jammu and Kashmir"],
    ["States Reorganisation Commission","Fazl Ali (chair), K. M. Panikkar, H. N. Kunzru — set up 1953, report 1955"],
    ["Earlier committees (1948)","Dhar Commission and the JVP Committee (Jawaharlal Nehru, Vallabhbhai Patel, Pattabhi Sitaramayya) — both against language as the basis"],
    ["Zonal councils","5 — Northern, Central, Eastern, Western, Southern (States Reorganisation Act, 1956); chaired by the Union Home Minister"],
    ["North Eastern Council","Set up by an Act of 1971, HQ Shillong; Sikkim added in 2002"]
  ]},
  {k:"tl", title:"The changing map", rows:[["1953","Andhra State — the first linguistic state"],["1956","States Reorganisation Act: 14 states, 6 UTs"],["1960","Gujarat and Maharashtra"],["1963","Nagaland"],["1966","Haryana"],["1971","Himachal Pradesh"],["1972","Manipur, Tripura, Meghalaya"],["1975","Sikkim"],["1987","Mizoram, Arunachal Pradesh, Goa"],["2000","Chhattisgarh, Uttarakhand, Jharkhand"],["2014","Telangana"],["2019","J&K becomes two UTs"],["2020","DNH and DD merged"]]},
  {k:"table", title:"Milestones by year", head:["Event","Year","Note"], rows: S1.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Carved out of", head:["New state","Carved out of","Note"], rows: S1C.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Zonal councils", head:["State / UT","Council","Note"], rows: S1Z.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"The 2000 trio in date order — <b>“C-U-J”</b> (1, 9, 15 November): <b>C</b>hhattisgarh from MP, <b>U</b>ttarakhand from UP, <b>J</b>harkhand from Bihar. Parents in the same order: <b>“MUB”</b> — <b>M</b>P, <b>U</b>P, <b>B</b>ihar. And <b>Assam is the mother of the North-East</b>: Nagaland, Meghalaya and Mizoram all came out of it."},
  {k:"trap", h:"<b>Odisha (1936)</b> was the first <i>province</i> made on language — but the first <i>state after independence</i> on language is <b>Andhra (1953)</b>. <b>Uttarakhand</b> sits in the <b>Central</b> zonal council, not the Northern. The North-East has the <b>North Eastern Council</b>, which is not one of the five zonal councils."}
], sum:["Andhra State (1 October 1953) was the first state formed on language after independence.","The Fazl Ali Commission (1953–55) led to the States Reorganisation Act, 1956: 14 states and 6 UTs.","New states: Gujarat and Maharashtra 1960, Nagaland 1963, Haryana 1966, HP 1971, Sikkim 1975, Goa 1987.","Chhattisgarh, Uttarakhand, Jharkhand in 2000; Telangana in 2014.","J&K split into two UTs in 2019; DNH and DD merged in 2020 — 28 states and 8 UTs now."]},

{id:"S2", heat:2, title:"The north: Punjab, Haryana, Himachal, Rajasthan", hi:"उत्तर भारत: पंजाब, हरियाणा, हिमाचल, राजस्थान", blocks:[
  {k:"hot", h:"Most asked: <b>Chandigarh</b> as the shared capital of Punjab and Haryana, <b>Shimla and Dharamshala</b> (Himachal’s two capitals), <b>Rajasthan</b> as the largest state by area, and <b>Punjab</b> as the ‘Land of Five Rivers’. (Delhi, Chandigarh, J&K and Ladakh — the other members of the Northern council — are in the UT lesson.)"},
  {k:"story", h:"<p><b>Punjab</b> takes its name from five rivers — Sutlej, Beas, Ravi, Chenab and Jhelum. In 1966 its Hindi-speaking south became <b>Haryana</b>, and the new city of <b>Chandigarh</b>, designed by <b>Le Corbusier</b>, became a UT and the capital of both. <b>Himachal Pradesh</b> rose from a UT to a full state on 25 January 1971; it governs from <b>Shimla</b> in summer and declared <b>Dharamshala</b> its winter capital in 2017.</p><p><b>Rajasthan</b>, the old Rajputana, is India’s <b>largest state by area</b> (about 10.4% of India). Its capital is the Pink City, <b>Jaipur</b>, but its high court sits at <b>Jodhpur</b>. The <b>Thar Desert</b> fills its west and the <b>Aravallis</b> run through it, peaking at <b>Guru Shikhar</b> on Mount Abu.</p>", key:"Punjab + Haryana → Chandigarh; HP → Shimla (summer), Dharamshala (winter); Rajasthan → Jaipur, the largest state."},
  {k:"table", title:"Capitals", head:["State","Capital","Note"], rows: S2.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Which state is it?", head:["Which state …","State","Note"], rows: S2K.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Two states, one Chandigarh”</b> — Punjab and Haryana share it; Chandigarh itself is a UT. For Himachal remember <b>“Summer Shimla, Dharamshala December”</b>."},
  {k:"trap", h:"Both Himachal and Uttarakhand are sometimes called Devbhoomi — but in SSC options <b>‘Devbhoomi’ = Uttarakhand</b>. Rajasthan’s high court is at <b>Jodhpur</b>, not Jaipur (Jaipur has a bench)."}
], sum:["Punjab and Haryana share Chandigarh as capital; Chandigarh is a UT.","Haryana was carved from Punjab on 1 November 1966.","Himachal: Shimla (summer) and Dharamshala (winter, 2017); full state on 25 January 1971.","Punjab is the Land of Five Rivers: Sutlej, Beas, Ravi, Chenab, Jhelum.","Rajasthan (capital Jaipur, high court Jodhpur) is India's largest state by area."]},

{id:"S3", heat:2, title:"The centre: UP, Uttarakhand, MP, Chhattisgarh", hi:"मध्य भारत: उत्तर प्रदेश, उत्तराखंड, मध्य प्रदेश, छत्तीसगढ़", blocks:[
  {k:"hot", h:"Most asked: <b>UP</b> borders the most states and has the most people and Lok Sabha seats; <b>Uttarakhand</b> (from UP) and <b>Chhattisgarh</b> (from MP) were born in November 2000; the capitals <b>Dehradun / Gairsain</b>, <b>Bhopal</b>, <b>Raipur</b>; and high courts away from capitals (Prayagraj, Nainital, Jabalpur, Bilaspur)."},
  {k:"story", h:"<p>These four states make up the <b>Central Zonal Council</b>. <b>Uttar Pradesh</b> (capital <b>Lucknow</b>) is India’s most populous state (Census 2011), sends <b>80</b> MPs to the Lok Sabha and touches <b>eight</b> states plus Delhi. In 2000 its hill districts became <b>Uttarakhand</b> — ‘Devbhoomi’, home of the Char Dham and the sources of the Ganga and Yamuna. It runs from <b>Dehradun</b> and named <b>Gairsain</b> its summer capital in 2020.</p><p><b>Madhya Pradesh</b> (capital <b>Bhopal</b>) is the ‘Heart of India’ and the ‘Tiger State’. It was the biggest state until 1 November 2000, when <b>Chhattisgarh</b> — ‘36 forts’, the rice bowl of central India — was carved out, with its capital at <b>Raipur</b>. MP now touches five states: Rajasthan, UP, Chhattisgarh, Maharashtra and Gujarat.</p>", key:"UP → Lucknow (80 seats, 8 neighbours); Uttarakhand → Dehradun + Gairsain; MP → Bhopal; Chhattisgarh → Raipur."},
  {k:"table", title:"Capitals", head:["State","Capital","Note"], rows: S3.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Which state is it?", head:["Which state …","State","Note"], rows: S3K.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"UP’s eight neighbours, clockwise from the north — <b>“U H H R M C J B”</b>: <b>U</b>ttarakhand, <b>H</b>imachal, <b>H</b>aryana, <b>R</b>ajasthan, <b>M</b>P, <b>C</b>hhattisgarh, <b>J</b>harkhand, <b>B</b>ihar (plus Delhi, a UT, and Nepal abroad)."},
  {k:"trap", h:"Uttarakhand’s <b>high court</b> is at <b>Nainital</b>; its <b>summer capital</b> is <b>Gairsain</b>. MP’s high court is at <b>Jabalpur</b>, Chhattisgarh’s at <b>Bilaspur</b>, UP’s at <b>Prayagraj</b> — none in the capital."}
], sum:["UP (Lucknow): most populous state, 80 Lok Sabha seats, borders 8 states.","Uttarakhand (Dehradun; Gairsain in summer) was carved from UP on 9 November 2000.","Madhya Pradesh (Bhopal) is the Heart of India and the Tiger State; it borders 5 states.","Chhattisgarh (Raipur) was carved from MP on 1 November 2000.","All four form the Central Zonal Council."]}
);

pairQs("S1", S1, { q: t => `${t} — in which year?`, rq: a => `Which of these happened in ${a}?` });
pairQs("S1", S1C, { q: t => `${t} was carved out of:`, rq: a => `Which new state or UT was carved out of ${a}?` });
pairQs("S1", S1Z, { q: t => `Which council does ${t} belong to?` });
pairQs("S2", S2, { q: t => `What is the capital of ${t}?`, rq: a => `${a} is the capital of:`, extra: ["Amritsar","Gurugram","Jodhpur","Ambala"] });
pairQs("S2", S2K, { q: t => `Which state ${t}?`, extra: ["Uttarakhand","Uttar Pradesh","Gujarat"] });
pairQs("S3", S3, { q: t => `What is the capital of ${t}?`, rq: a => `${a} is the capital of:`, extra: ["Prayagraj","Nainital","Jabalpur","Bilaspur"] });
pairQs("S3", S3K, { q: t => `Which state ${t}?`, extra: ["Bihar","Jharkhand","Himachal Pradesh"] });

QB.push(
["S1","Who chaired the States Reorganisation Commission?",["Fazl Ali","K. M. Panikkar","H. N. Kunzru","S. K. Dhar"],"The other two members were K. M. Panikkar and H. N. Kunzru.","p"],
["S1","Besides the chairman, the States Reorganisation Commission had which two members?",["K. M. Panikkar and H. N. Kunzru","S. K. Dhar and Pattabhi Sitaramayya","Nehru and Vallabhbhai Patel","B. R. Ambedkar and K. M. Munshi"],"Set up in December 1953.",""],
["S1","The JVP Committee (1948) on linguistic states was made up of:",["Jawaharlal Nehru, Vallabhbhai Patel, Pattabhi Sitaramayya","Jawaharlal Nehru, V. P. Menon, Pattabhi Sitaramayya","Jayaprakash Narayan, Vallabhbhai Patel, Rajendra Prasad","Jawaharlal Nehru, B. R. Ambedkar, Rajendra Prasad"],"J-V-P from their first names; it advised against language as the basis for now.",""],
["S1","Potti Sriramulu died fasting in 1952 for a separate state for:",["Telugu speakers (Andhra)","Kannada speakers","Marathi speakers","Punjabi speakers"],"Andhra State followed on 1 October 1953.","p"],
["S1","Which Constitutional Amendment went with the 1956 reorganisation and ended the Part A/B/C/D classes of states?",["7th Amendment, 1956","1st Amendment, 1951","42nd Amendment, 1976","36th Amendment, 1975"],"Both came into force on 1 November 1956.","p"],
["S1","The States Reorganisation Act, 1956 created how many states and Union Territories?",["14 states and 6 UTs","16 states and 3 UTs","14 states and 9 UTs","28 states and 8 UTs"],"","p"],
["S1","How many states and Union Territories does India have (as of October 2026)?",["28 states and 8 UTs","29 states and 7 UTs","28 states and 9 UTs","29 states and 9 UTs"],"Since the DNH and DD merger on 26 January 2020.","p"],
["S1","Zonal councils were set up under the:",["States Reorganisation Act, 1956","North Eastern Council Act, 1971","Government of India Act, 1935","Constitution (7th Amendment) Act, 1956"],"They are statutory, not constitutional, bodies.","p"],
["S1","Who chairs each zonal council?",["The Union Home Minister","The Prime Minister","The President","The Vice-President"],"The chief ministers of the member states are members.",""],
["S1","How many zonal councils are there?",["5","6","4","7"],"Northern, Central, Eastern, Western, Southern.","p"],
["S1","Which was the first province formed on the basis of language, in 1936 (before independence)?",["Odisha","Andhra","Bihar","Bengal"],"Utkal Divas is on 1 April.","p"],
["S2","Which two states share Chandigarh as their capital?",["Punjab and Haryana","Punjab and Himachal Pradesh","Haryana and Rajasthan","Himachal Pradesh and Haryana"],"Chandigarh became a UT on 1 November 1966.","p"],
["S2","Shimla is the capital of which Indian state?",["Himachal Pradesh","Punjab","Uttarakhand","Haryana"],"Shimla is the summer capital; Dharamshala the winter capital.","p","","","SSC CHSL · 24 Jan 2017 (Morning)"],
["S2","Which of the following Indian states is biggest in area?",["Rajasthan","Uttar Pradesh","Madhya Pradesh","Maharashtra"],"About 3.42 lakh sq km — then MP, then Maharashtra.","p","","","SSC MTS · 15 Jun 2023 (Shift 3)"],
["S2","Who designed Chandigarh, the planned capital of Punjab and Haryana?",["Le Corbusier","Edwin Lutyens","Herbert Baker","Laurie Baker"],"Swiss-French architect, 1950s.","p"],
["S2","The five rivers that give Punjab its name all join the:",["Indus","Ganga","Yamuna","Brahmaputra"],"Sutlej, Beas, Ravi, Chenab and Jhelum are Indus tributaries.",""],
["S2","Which of these is NOT in the Northern Zonal Council?",["Uttar Pradesh","Rajasthan","Himachal Pradesh","Haryana"],"UP is in the Central council.",""],
["S3","Lucknow is the capital city of:",["Uttar Pradesh","Bihar","Madhya Pradesh","Uttarakhand"],"UP’s high court is at Prayagraj.","p","","","SSC CHSL · 24 Jan 2017 (Evening)"],
["S3","Raipur is the capital of which Indian state?",["Chhattisgarh","Jharkhand","Odisha","Madhya Pradesh"],"Chhattisgarh was carved from MP in 2000.","p","","","SSC CHSL · 16 Jan 2017 (Evening)"],
["S3","Madhya Pradesh shares its border with how many states?",["5","4","6","3"],"Rajasthan, Uttar Pradesh, Chhattisgarh, Maharashtra and Gujarat.","p","","","SSC JE · 23 Jan 2018 (Shift 1)"],
["S3","Which state shares its border with the most Indian states?",["Uttar Pradesh","Madhya Pradesh","Assam","Chhattisgarh"],"Eight states (and Delhi); Assam and Chhattisgarh touch seven each.","p"],
["S3","Uttar Pradesh borders which foreign country?",["Nepal","Bhutan","China","Bangladesh"],"","p"],
["S3","Uttarakhand was first known as:",["Uttaranchal","Kumaon Pradesh","Garhwal State","Himachal Uttar"],"Renamed Uttarakhand on 1 January 2007.","p"],
["S3","Which of these states is NOT in the Central Zonal Council?",["Bihar","Uttarakhand","Chhattisgarh","Madhya Pradesh"],"Bihar is in the Eastern council.",""]
);

LASTMOMENT.push(
{t:"The changing map", era:["su"], rows:[["Andhra State","1953"],["SRC Act (14 + 6)","1956"],["Gujarat, Maharashtra","1960"],["Nagaland","1963"],["Haryana","1966"],["Sikkim","1975"],["CG, UK, JH","2000"],["Telangana","2014"]]},
{t:"North and centre capitals", era:["su"], rows:[["Punjab, Haryana","Chandigarh"],["Himachal","Shimla / Dharamshala"],["Rajasthan","Jaipur"],["Uttar Pradesh","Lucknow"],["Uttarakhand","Dehradun / Gairsain"],["Madhya Pradesh","Bhopal"],["Chhattisgarh","Raipur"]]}
);
TILES.push(["1953","Andhra State, first linguistic state","su"],["1956","States Reorganisation Act","su"],["28","States","su"],["8","Union Territories","su"],["5","Zonal councils","su"],["80","UP's Lok Sabha seats","su"]);
