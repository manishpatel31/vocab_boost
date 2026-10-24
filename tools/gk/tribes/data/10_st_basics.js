/* Tribes, Languages & Scripts of India — T1: Scheduled Tribes in the Constitution and the law, PVTGs and the numbers.
   Census figures are from Census 2011 (the latest full count). Counts that change are dated "as of October 2026". */
const T1A = [
  ["Article 342","How a community becomes a Scheduled Tribe","The President notifies the list for each state or UT (after consulting the Governor of a state); only Parliament can change it by law."],
  ["Article 366(25)","Defines “Scheduled Tribes”","Those tribes or communities that are deemed Scheduled Tribes under Article 342."],
  ["Article 244(1)","Fifth Schedule — Scheduled Areas","Administration of Scheduled Areas and Scheduled Tribes in states other than Assam, Meghalaya, Tripura and Mizoram."],
  ["Article 244(2)","Sixth Schedule — tribal areas of the North-East","Autonomous district councils in Assam, Meghalaya, Tripura and Mizoram."],
  ["Article 275(1)","Grants-in-aid for tribal welfare","Money from the Consolidated Fund of India to states for the welfare of STs and Scheduled Areas."],
  ["Article 338A","National Commission for Scheduled Tribes","Added by the 89th Amendment (2003); the commission was set up in 2004."],
  ["Article 339","Union control over tribal welfare","The President may appoint a commission on Scheduled Areas — the Dhebar Commission (1960–61) was the first."],
  ["Article 330","ST seats in the Lok Sabha","47 Lok Sabha seats are reserved for STs (after the 2008 delimitation)."],
  ["Article 332","ST seats in state assemblies","Seats are reserved in proportion to the ST population of the state."],
  ["Article 46","Directive Principle","The state shall promote the educational and economic interests of SCs, STs and weaker sections."]
];
const T1P = [
  ["Odisha","13","The most PVTGs of any state — Bonda, Dongria Kondh, Juang, Lodha, Didayi, Saora and others."],
  ["Andhra Pradesh (with Telangana)","12","Chenchu, Konda Reddi, Kolam, Gadaba, Bondo Poroja and others — the list was drawn before the 2014 split."],
  ["Andaman and Nicobar Islands","5","The only UT with PVTGs: Great Andamanese, Jarawa, Onge, Sentinelese and Shompen."],
  ["Rajasthan","1","Sahariya — the state's only PVTG."],
  ["Tripura","1","Reang (Bru) — the state's only PVTG."],
  ["Uttarakhand","2","Buksa and Raji."],
  ["Gujarat","5","Kathodi, Kotwalia, Padhar, Siddi and Kolgha."],
  ["Tamil Nadu","6","Toda, Kota, Kurumba, Irula, Paniya and Kattunayakan — mostly in the Nilgiris."]
];

LESSONS.push(
{id:"T1", heat:3, title:"Scheduled Tribes: the Constitution, the law and the numbers", hi:"अनुसूचित जनजातियाँ: संविधान, क़ानून और आँकड़े", blocks:[
  {k:"hot", h:"Asked most: <b>Article 342</b> (who notifies an ST), the <b>Fifth vs Sixth Schedule</b> and its four states, the number of <b>PVTGs (75)</b> and the state with the most (<b>Odisha, 13</b>), the Census 2011 ST share (<b>8.6%</b>), the state with the most tribal people (<b>Madhya Pradesh</b>) and the highest share (<b>Mizoram</b>), and the <b>Forest Rights Act, 2006</b>."},
  {k:"story", h:"<p>The Constitution never says what a tribe <i>is</i>. Instead, <b>Article 342</b> gives the job to the <b>President</b>: for each state, after talking to the Governor, the President issues a list — the first was the <b>Constitution (Scheduled Tribes) Order, 1950</b>. Once the list is out, only <b>Parliament</b>, by a law, can add or drop a community. Officials judge a claim by the old <b>Lokur Committee (1965)</b> tests: primitive traits, a distinct culture, geographical isolation, shyness of contact and backwardness.</p><p>Where tribal people are many, the Constitution gives two kinds of shield. In ten states of the mainland, the <b>Fifth Schedule</b> lets the President declare <b>Scheduled Areas</b>, guarded by the Governor and a <b>Tribes Advisory Council</b>. In four north-eastern states — <b>Assam, Meghalaya, Tripura and Mizoram</b> — the <b>Sixth Schedule</b> goes further: elected <b>autonomous district councils</b> make some of their own laws.</p><p>The 2011 Census counted about <b>10.4 crore</b> tribal people — <b>8.6%</b> of India — in some 705 groups, nine in ten of them in villages. Among them, <b>75</b> of the most fragile groups are called <b>PVTGs</b>. And since 2006 a law, the <b>Forest Rights Act</b>, has let forest-dwellers claim the land and forests they have always used.</p>", key:"President lists (342), Parliament changes; Fifth Schedule = mainland Scheduled Areas, Sixth = Assam, Meghalaya, Tripura, Mizoram; 8.6% ST, 75 PVTGs."},
  {k:"table", title:"Articles about Scheduled Tribes", head:["Article","What it does","Remember"], rows: T1A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Fifth Schedule and Sixth Schedule", head:["","Fifth Schedule","Sixth Schedule"], rows:[
    ["Article","244(1)","244(2)"],
    ["Where","Scheduled Areas in 10 states: Andhra Pradesh, Telangana, Chhattisgarh, Gujarat, Himachal Pradesh, Jharkhand, Madhya Pradesh, Maharashtra, Odisha, Rajasthan","Tribal areas of 4 states: <b>Assam, Meghalaya, Tripura, Mizoram</b>"],
    ["Body","Tribes Advisory Council — up to 20 members, three-fourths of them ST members of the state assembly","Autonomous District Councils — usually up to 30 members, not more than 4 nominated by the Governor and the rest elected"],
    ["Who declares","The President declares an area a Scheduled Area","The Governor can create or change an autonomous district"],
    ["Powers","The Governor can keep a law of Parliament or the state away from a Scheduled Area, or apply it with changes","The councils make laws on land, forests, inheritance, marriage and social customs, and run village courts"],
    ["How many","—","10 councils: 3 in Assam (Bodoland Territorial Council, Karbi Anglong, Dima Hasao), 3 in Meghalaya (Khasi, Jaintia, Garo Hills), 3 in Mizoram (Chakma, Lai, Mara), 1 in Tripura"]]},
  {k:"facts", title:"Laws, bodies and schemes", rows:[
    ["PESA Act, 1996","Panchayats (Extension to Scheduled Areas) Act — carries Part IX (panchayats) into Fifth Schedule areas and gives the gram sabha a strong say; based on the Bhuria Committee"],
    ["Forest Rights Act, 2006","Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act — in force from 31 December 2007; nodal ministry: Tribal Affairs"],
    ["FRA — the numbers","Cut-off date 13 December 2005; other forest dwellers must show 3 generations (75 years) of residence; individual land up to 4 hectares; the gram sabha starts the process"],
    ["FRA — firsts","Mendha Lekha (Gadchiroli, Maharashtra) won community forest rights, then the right to sell its bamboo; the Soligas of BR Hills (Karnataka) were the first to win forest rights inside a tiger reserve"],
    ["Ministry of Tribal Affairs","Set up in October 1999, taken out of the Ministry of Social Justice"],
    ["National Commission for STs","Article 338A — the 89th Amendment (2003) split the old joint commission for SCs and STs; it began work in 2004"],
    ["Article 164(1) proviso","A minister for tribal welfare is required in Chhattisgarh, Jharkhand, Madhya Pradesh and Odisha (the 94th Amendment, 2006, put Chhattisgarh and Jharkhand in place of Bihar)"],
    ["TRIFED","Tribal Co-operative Marketing Development Federation, 1987 — buys and sells tribal produce; runs Aadi Mahotsav"],
    ["Eklavya Model Residential Schools","Boarding schools for tribal children, begun in 1997–98"],
    ["PM JANMAN","Pradhan Mantri Janjati Adivasi Nyaya Maha Abhiyan — for the 75 PVTGs; launched at Khunti (Jharkhand) on 15 November 2023, about ₹24,100 crore"],
    ["Dharti Aaba Janjatiya Gram Utkarsh Abhiyan","Launched on 2 October 2024 for about 63,000 tribal-majority villages; named after Birsa Munda (“Dharti Aaba”)"],
    ["Sickle Cell Anaemia Elimination Mission","Launched at Shahdol (Madhya Pradesh) on 1 July 2023 — the disease is common among tribal people"],
    ["Adi Vaani","An AI translation app for tribal languages (beta, September 2025): Santali, Bhili, Mundari and Gondi first"]
  ]},
  {k:"table", title:"PVTGs: states and their numbers", head:["State / UT","PVTGs","Examples"], rows: T1P.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"PVTGs in brief", rows:[
    ["What","Particularly Vulnerable Tribal Groups — the most fragile tribes"],
    ["How many","75, in 18 states and 1 UT (Andaman and Nicobar Islands), as of October 2026"],
    ["Origin","The Dhebar Commission (1960–61) spoke of the most backward groups; 52 “Primitive Tribal Groups” were named in 1975; renamed PVTGs in 2006"],
    ["Tests","Pre-agricultural level of technology, very low literacy, a stagnant or falling population, and a subsistence economy"],
    ["Most","Odisha (13), then Andhra Pradesh (12)"]
  ]},
  {k:"table", title:"Census 2011: the tribal numbers", head:["Measure","Figure","Note"], rows:[
    ["ST population","About 10.43 crore","8.6% of India's people"],
    ["Living in villages","About 90%","STs are 11.3% of rural India"],
    ["Number of groups","705","Many are listed in more than one state"],
    ["Largest tribe","Bhil","The Gond come second"],
    ["Most tribal people (number)","Madhya Pradesh","About 1.53 crore — 14.7% of India's STs; then Maharashtra and Odisha"],
    ["Highest ST share (state)","Mizoram — 94.4%","Lakshadweep (UT) is higher still at 94.8%; then Nagaland and Meghalaya"],
    ["Lowest ST share (state with STs)","Uttar Pradesh — about 0.6%","Then Tamil Nadu and Bihar"],
    ["No STs notified","Punjab, Haryana, Delhi, Chandigarh, Puducherry","These have no ST list at all"],
    ["ST sex ratio","990","Higher than the national 943"],
    ["ST literacy","About 59%","National 73%"]]},
  {k:"link", h:"The full Census tables — SC numbers, religion and the language census — are in the <b>Census</b> app (lesson “Religion, SC/ST and language”). Tribal <b>dances</b> are in the <b>Folk Dances</b> app."},
  {k:"trick", h:"Sixth Schedule states — <b>“AMTM”</b>, read as <b>“A Meghalaya-Tripura-Mizoram”</b>: <b>A</b>ssam, <b>M</b>eghalaya, <b>T</b>ripura, <b>M</b>izoram. Notice that <b>Nagaland, Manipur, Arunachal and Sikkim are not in it</b>.<br>PVTG numbers — <b>“75 in 18 + 1, Odisha 13”</b>."},
  {k:"trap", h:"The <b>President</b> issues the ST list, but <b>Parliament</b> alone can change it — not the state, not the Governor. <b>Article 342</b> is for STs; <b>Article 341</b> is for SCs. The <b>Fifth</b> Schedule has <b>Tribes Advisory Councils</b>; the <b>Sixth</b> has <b>Autonomous District Councils</b>. The state with the <b>most</b> tribal people is <b>Madhya Pradesh</b>, but the highest <b>share</b> is <b>Mizoram</b> — and the largest <b>tribe</b> is the <b>Bhil</b>, not the Gond."}
], sum:["Article 342: the President notifies STs (after consulting the Governor); only Parliament can change the list.","Fifth Schedule (Art. 244(1)): Scheduled Areas in 10 states, Tribes Advisory Councils. Sixth Schedule (Art. 244(2)): Assam, Meghalaya, Tripura, Mizoram — 10 autonomous district councils.","NCST: Article 338A, 89th Amendment 2003. Ministry of Tribal Affairs: 1999. PESA: 1996.","Forest Rights Act 2006 (in force 31 Dec 2007): cut-off 13 Dec 2005, 75 years for other forest dwellers, up to 4 ha.","PVTGs: 75 in 18 states and the Andaman and Nicobar Islands; Odisha has the most (13). PM JANMAN (Khunti, 15 Nov 2023) is for them.","Census 2011: STs 10.43 crore, 8.6%; largest tribe Bhil; most STs Madhya Pradesh; highest share Mizoram; lowest share Uttar Pradesh; none in Punjab, Haryana, Delhi, Chandigarh, Puducherry."]}
);

QB.push(
["T1","Under which Article does the President specify the Scheduled Tribes of a state?",["Article 342","Article 341","Article 338","Article 244"],"Article 342 is for Scheduled Tribes; Article 341 does the same job for Scheduled Castes.",""],
["T1","Once the list of Scheduled Tribes of a state is notified, who can add a community to it?",["Parliament, by law","The Governor of the state","The state legislature","The National Commission for Scheduled Tribes"],"Article 342(2): only Parliament can include or exclude a community, by passing a law.",""],
["T1","Which Article defines the term “Scheduled Tribes”?",["Article 366(25)","Article 366(24)","Article 342(2)","Article 15(4)"],"Article 366(25) says STs are the communities deemed so under Article 342. Clause 24 of the same Article defines Scheduled Castes.",""],
["T1","The Sixth Schedule applies to the tribal areas of which four states?",["Assam, Meghalaya, Tripura and Mizoram","Assam, Nagaland, Manipur and Mizoram","Meghalaya, Nagaland, Arunachal Pradesh and Sikkim","Tripura, Manipur, Nagaland and Arunachal Pradesh"],"Article 244(2) and the Sixth Schedule cover Assam, Meghalaya, Tripura and Mizoram only.",""],
["T1","Which of these states is NOT covered by the Sixth Schedule?",["Nagaland","Mizoram","Tripura","Meghalaya"],"Nagaland has its own special provision (Article 371A) but no Sixth Schedule councils.",""],
["T1","Tribes Advisory Councils are a feature of which Schedule?",["Fifth Schedule","Sixth Schedule","Seventh Schedule","Eleventh Schedule"],"Fifth Schedule states have a Tribes Advisory Council of up to 20 members; Sixth Schedule areas have autonomous district councils instead.",""],
["T1","Who declares an area to be a “Scheduled Area” under the Fifth Schedule?",["The President","The Governor","Parliament","The Ministry of Tribal Affairs"],"The President declares Scheduled Areas by order; the Governor then looks after them and reports to the President.",""],
["T1","How many autonomous district councils are there under the Sixth Schedule (as of October 2026)?",["10","6","12","4"],"Three each in Assam, Meghalaya and Mizoram and one in Tripura — ten in all.",""],
["T1","The Bodoland Territorial Council works under which Schedule of the Constitution?",["Sixth Schedule","Fifth Schedule","Eighth Schedule","Ninth Schedule"],"The Bodoland Territorial Council in Assam is one of the Sixth Schedule's autonomous councils.",""],
["T1","Which of these is an autonomous district council of Mizoram?",["Chakma","Karbi Anglong","Dima Hasao","Garo Hills"],"Mizoram has the Chakma, Lai and Mara councils. Karbi Anglong and Dima Hasao are in Assam, Garo Hills in Meghalaya.",""],
["T1","Which Article provides for the National Commission for Scheduled Tribes?",["Article 338A","Article 338","Article 340","Article 339"],"Article 338A was added by the 89th Amendment, 2003. Article 338 is the commission for Scheduled Castes.",""],
["T1","The National Commission for Scheduled Tribes was created as a separate body by which Constitutional Amendment?",["89th Amendment, 2003","65th Amendment, 1990","86th Amendment, 2002","73rd Amendment, 1992"],"The 65th Amendment had set up one joint commission for SCs and STs; the 89th split it into two.",""],
["T1","Which Article provides grants-in-aid from the Centre to states for the welfare of Scheduled Tribes?",["Article 275(1)","Article 282","Article 280","Article 293"],"The first proviso to Article 275(1) gives grants for tribal welfare and for raising the administration of Scheduled Areas.",""],
["T1","How many Lok Sabha seats are reserved for Scheduled Tribes?",["47","84","79","41"],"47 seats for STs and 84 for SCs, after the 2008 delimitation.",""],
["T1","The Constitution requires a separate minister for tribal welfare in which group of states?",["Chhattisgarh, Jharkhand, Madhya Pradesh and Odisha","Bihar, Jharkhand, Odisha and West Bengal","Assam, Meghalaya, Tripura and Mizoram","Gujarat, Rajasthan, Maharashtra and Madhya Pradesh"],"The proviso to Article 164(1), as changed by the 94th Amendment (2006), names these four; Bihar was dropped.",""],
["T1","The PESA Act, which extended panchayats to Scheduled Areas, was passed in:",["1996","1992","2006","1993"],"The Panchayats (Extension to Scheduled Areas) Act, 1996 followed the Bhuria Committee's report.",""],
["T1","PESA extends the panchayat provisions to the areas of which Schedule?",["Fifth Schedule","Sixth Schedule","Eleventh Schedule","Twelfth Schedule"],"PESA carries Part IX of the Constitution into Fifth Schedule areas; Sixth Schedule areas have their own councils.",""],
["T1","The Ministry of Tribal Affairs was set up in:",["1999","1985","2004","1950"],"It was carved out of the Ministry of Social Justice and Empowerment in October 1999.",""],
["T1","Which committee (1965) laid down the tests used to decide whether a community is a Scheduled Tribe?",["Lokur Committee","Dhebar Commission","Bhuria Committee","Xaxa Committee"],"The Lokur Committee's tests: primitive traits, distinct culture, geographical isolation, shyness of contact and backwardness.",""],
["T1","Which was the first commission on Scheduled Areas and Scheduled Tribes, appointed under Article 339?",["Dhebar Commission","Lokur Committee","Kaka Kalelkar Commission","Bhuria Commission"],"U. N. Dhebar headed it in 1960–61; Dilip Singh Bhuria headed the second (2002–04).",""],
["T1","The full name of the Forest Rights Act, 2006 begins “The Scheduled Tribes and Other Traditional Forest Dwellers …”. What comes next?",["(Recognition of Forest Rights) Act","(Protection of Forests) Act","(Conservation of Forests) Act","(Rehabilitation and Resettlement) Act"],"The Act recognises rights that forest-dwellers already had; it does not grant new land.",""],
["T1","Under the Forest Rights Act, what is the cut-off date for forest occupation?",["13 December 2005","31 December 2007","1 January 2006","15 August 1980"],"The land must have been occupied before 13 December 2005; the Act itself came into force on 31 December 2007.",""],
["T1","Under the Forest Rights Act, “other traditional forest dwellers” must have lived in the forest for at least:",["Three generations (75 years)","Two generations (50 years)","25 years","100 years"],"A generation is counted as 25 years, so three generations means 75 years before 13 December 2005.",""],
["T1","Under the Forest Rights Act, the most land that can be recognised for one claimant is:",["4 hectares","2 hectares","5 hectares","10 hectares"],"Individual land rights are capped at 4 hectares.",""],
["T1","Who is the nodal ministry for the Forest Rights Act?",["Ministry of Tribal Affairs","Ministry of Environment, Forest and Climate Change","Ministry of Rural Development","Ministry of Home Affairs"],"Although the Act is about forests, it is run by the Ministry of Tribal Affairs.",""],
["T1","Under the Forest Rights Act, which body starts the process of deciding forest rights?",["The gram sabha","The district collector","The state forest department","The Tribes Advisory Council"],"The gram sabha receives and checks claims; committees at the sub-division and district levels follow.",""],
["T1","Which tribe became the first to win forest rights inside a tiger reserve, at BR Hills in Karnataka?",["Soliga","Toda","Jenu Kuruba","Irula"],"The Soligas of Biligiri Rangaswamy Temple Tiger Reserve won the rights in 2011.",""],
["T1","Mendha Lekha, famous for its community forest rights and its own bamboo sales, is a village in:",["Maharashtra","Chhattisgarh","Odisha","Jharkhand"],"Mendha Lekha is in Gadchiroli district; its motto is “our government in Delhi and Mumbai, but we are the government in our village”.",""],
["T1","How many Particularly Vulnerable Tribal Groups (PVTGs) are there (as of October 2026)?",["75","52","705","87"],"75 PVTGs live in 18 states and the Andaman and Nicobar Islands. 52 was the first list of 1975; 705 is the number of ST groups.",""],
["T1","Which state has the largest number of PVTGs?",["Odisha","Madhya Pradesh","Jharkhand","Andhra Pradesh"],"Odisha has 13 PVTGs; undivided Andhra Pradesh comes next with 12.",""],
["T1","Which is the only Union Territory with PVTGs?",["Andaman and Nicobar Islands","Lakshadweep","Ladakh","Dadra and Nagar Haveli and Daman and Diu"],"Its five PVTGs are the Great Andamanese, Jarawa, Onge, Sentinelese and Shompen.",""],
["T1","Which of these is NOT a test for naming a group as a PVTG?",["A rising population","A pre-agricultural level of technology","A very low level of literacy","A subsistence economy"],"A PVTG has a stagnant or falling population, not a rising one.",""],
["T1","Before 2006, PVTGs were called:",["Primitive Tribal Groups","Denotified Tribes","Backward Hill Tribes","Nomadic Tribes"],"The term “Primitive Tribal Groups” (1975) was replaced by “Particularly Vulnerable Tribal Groups” in 2006.",""],
["T1","PM JANMAN, a mission for PVTGs, was launched in 2023 at:",["Khunti, Jharkhand","Shahdol, Madhya Pradesh","Bijapur, Chhattisgarh","Ranchi, Jharkhand"],"It was launched at Khunti, Birsa Munda's district, on Janjatiya Gaurav Divas, 15 November 2023.",""],
["T1","The National Sickle Cell Anaemia Elimination Mission was launched in 2023 at:",["Shahdol, Madhya Pradesh","Khunti, Jharkhand","Dantewada, Chhattisgarh","Mayurbhanj, Odisha"],"It was launched on 1 July 2023; sickle cell disease is common in many tribal communities.",""],
["T1","According to Census 2011, Scheduled Tribes make up what share of India's population?",["8.6%","16.6%","10.4%","6.8%"],"About 10.43 crore people. 16.6% is the share of Scheduled Castes.",""],
["T1","According to Census 2011, which is the largest tribe of India?",["Bhil","Gond","Santhal","Mina"],"The Bhils are the largest; the Gonds come second.",""],
["T1","According to Census 2011, which state has the largest number of tribal people?",["Madhya Pradesh","Mizoram","Odisha","Jharkhand"],"Madhya Pradesh has about 1.53 crore STs, 14.7% of India's tribal population.",""],
["T1","Among the states, which has the highest share of Scheduled Tribes in its population (Census 2011)?",["Mizoram","Nagaland","Meghalaya","Arunachal Pradesh"],"Mizoram: 94.4%. Among UTs, Lakshadweep is higher at 94.8%.",""],
["T1","Among states that have Scheduled Tribes, which has the lowest ST share of its population (Census 2011)?",["Uttar Pradesh","Bihar","Tamil Nadu","Kerala"],"Uttar Pradesh is about 0.6%; Tamil Nadu (1.1%) and Bihar (1.3%) come next.",""],
["T1","Which of these has no Scheduled Tribe list at all?",["Haryana","Uttar Pradesh","Goa","Kerala"],"No tribes are notified in Punjab, Haryana, Delhi, Chandigarh and Puducherry.",""],
["T1","Which body buys and markets tribal forest produce and crafts, and runs the Aadi Mahotsav?",["TRIFED","NAFED","KVIC","NCST"],"TRIFED, the Tribal Co-operative Marketing Development Federation, was set up in 1987.",""],
["T1","In 2024, Parliament added the Pahari Ethnic Group, Paddari, Koli and Gadda Brahmin to the ST list of:",["Jammu and Kashmir","Himachal Pradesh","Ladakh","Uttarakhand"],"The Constitution (Jammu and Kashmir) Scheduled Tribes Order (Amendment) Act, 2024 added the four communities.",""]
);

LASTMOMENT.push(
{t:"Scheduled Tribes in the Constitution", era:["tl"], rows:[["List","Art. 342 — President; Parliament changes"],["Definition","Art. 366(25)"],["Fifth Schedule","Art. 244(1) — 10 states"],["Sixth Schedule","Art. 244(2) — Assam, Meghalaya, Tripura, Mizoram"],["NCST","Art. 338A — 89th Amendment, 2003"],["Grants","Art. 275(1)"]]},
{t:"Tribal numbers", era:["tl"], rows:[["ST share (2011)","8.6% — 10.43 crore"],["Largest tribe","Bhil"],["Most STs","Madhya Pradesh"],["Highest share","Mizoram (94.4%)"],["PVTGs","75 — Odisha most (13)"],["FRA","2006; cut-off 13 Dec 2005"]]}
);
TILES.push(["75","PVTGs in 18 states + 1 UT","tl"],["8.6%","ST share of India (2011)","tl"],["705","ST groups (2011)","tl"],["13","PVTGs in Odisha","tl"],["47","Lok Sabha seats for STs","tl"],["10","Sixth Schedule councils","tl"]);
