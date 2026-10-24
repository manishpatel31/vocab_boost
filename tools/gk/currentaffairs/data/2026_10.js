/* Current Affairs 2026 · October 2026, up to 24 Oct (lesson CA10). Self-contained: its tables, lesson, questions,
   last-moment card and tiles. Every fact was checked on 24 Oct 2026 against the sources in the lesson's last table;
   nothing unconfirmed is kept. Table rows are [item, fact, note]. Names start with CA10_ so other month files never clash. */
const CA10_NAT = [
  ["NSAP renamed","Became the Pradhan Mantri Samajik Sahayata Yojana on 14 Oct 2026","Cabinet approved ₹53,428 crore for 2026-27 to 2030-31; disability pension now from 40% disability (was 80%)."],
  ["Old-age pension under the renamed NSAP","IGNOAPS is now the Pradhan Mantri Vridhavastha Pension Yojana (Oct 2026)","One of the four component schemes given new names on 14 Oct 2026."],
  ["SME Growth Fund","Cabinet approved a ₹10,000 crore government commitment on 6 Oct 2026","The fund makes direct equity investments in small and medium enterprises; announced in the Budget 2026-27."],
  ["Chennai Metro Phase II","PM Modi opened a stretch of about 15 km on 11 Oct 2026","With Tamil Nadu CM C. Joseph Vijay; projects worth over ₹13,000 crore launched in Tamil Nadu the same day."],
  ["New Ramsar sites","Sukhna Wetland (Chandigarh) and Sauj Jheel (Uttar Pradesh) added in Oct 2026","India now has 103 Ramsar sites."]
];
const CA10_INT = [
  ["India–New Zealand free trade agreement","Came into force on 20 Oct 2026","All Indian exports get duty-free entry into New Zealand; New Zealand is to help bring US$ 20 billion of investment into India over 15 years."],
  ["Brazil's presidential election, first round","4 Oct 2026: Flávio Bolsonaro first (about 47%), President Lula second (about 45%)","No one crossed 50%, so the two meet in a run-off on 25 Oct 2026."],
  ["Romania's new government","Independent diplomat Luca Niculescu sworn in as PM (decree of 20 Oct 2026)","Parliament backed his cabinet 280 to 58, ending a crisis that began in May."],
  ["Choosing the next UN Secretary-General","The Security Council held its 6th straw poll on 16 Oct 2026","António Guterres's term ends on 31 Dec 2026; the new Secretary-General takes office in January 2027."]
];
const CA10_ECO = [
  ["RBI monetary policy (7 Oct 2026)","Repo rate raised by 25 basis points to 5.50%","The first hike since February 2023; stance changed from neutral to 'calibrated tightening'. SDF 5.25%, MSF and Bank Rate 5.75%."],
  ["RBI projections for 2026-27 (7 Oct 2026)","GDP growth 7.1%; CPI inflation 5.2%","Governor Sanjay Malhotra; the next MPC meeting is on 2–4 Dec 2026."],
  ["IMF World Economic Outlook (13 Oct 2026)","India's growth forecast for 2026-27 raised to 7.0%","0.6 percentage point above the July 2026 forecast; India stays among the fastest-growing major economies."],
  ["Global Hunger Index 2026 (14 Oct 2026)","India 100th of 122, score 24.1 — 'serious'","Published by Concern Worldwide and Welthungerhilfe; India was 102nd in 2025."],
  ["Henley Passport Index (Oct 2026)","India 84th; Singapore first (visa-free access to 193 destinations)","India was 81st in July 2026."]
];
const CA10_SCI = [
  ["INS Samarthak","Commissioned at Karwar on 16 Oct 2026","Built by L&T at Kattupalli; a multi-purpose vessel to test weapons and sensors; Vice-President C. P. Radhakrishnan presided."],
  ["Fleet Support Ship 'Surya'","Launched at Hindustan Shipyard, Visakhapatnam, on 6 Oct 2026","The Navy's first Fleet Support Ship (FSS-1); Rajnath Singh was the chief guest."],
  ["DRDO high-altitude airship","Flight to 21 km announced on 6 Oct 2026","Built by ADRDE, Agra; stayed near 20 km for over 30 minutes and was recovered."],
  ["INDRA 2026","India–Russia exercise in Russia; naval phase in the Sea of Japan on 16–17 Oct 2026","Land, sea and air components; the land phase ran to 23 Oct."],
  ["AUSTRAHIND 2026","India–Australia army exercise, Thiruvananthapuram, 19 Oct – 1 Nov 2026","Held at the Foreign Training Node; jungle, island and coastal drills."],
  ["SIMBEX 2026","India–Singapore naval exercise began on 21 Oct 2026","Sea phase planned for 24–26 Oct."]
];
const CA10_SPO = [
  ["Asian Games 2026 — India's final place","4th, with 85 medals (21 gold, 27 silver, 37 bronze)","Games closed on 4 Oct 2026; China topped the table; India's best remains 107 medals (Hangzhou)."],
  ["Asian Games — men's hockey","Gold on 3 Oct 2026, beating Malaysia in the final","India kept its title and qualified directly for the 2028 Los Angeles Olympics."],
  ["Asian Games — women's hockey","Gold on 2 Oct 2026, beating China 1-0","Lalremsiami scored; India's first women's hockey gold since 1982; also an LA 2028 place."],
  ["Asian Games — men's cricket","Gold on 3 Oct 2026, beating Pakistan by 19 runs","India 211/6, Pakistan 192/6; India's second straight Asian Games title."],
  ["Pranavi Urs","Women's individual golf gold, 3 Oct 2026","The first Indian woman to win an Asian Games golf gold; also team silver."],
  ["Asian Games closing ceremony flag-bearer","Neeru Dhanda (4 Oct 2026)","The next Asian Games are in Doha (2030)."],
  ["India vs West Indies T20I series","Drawn 2-2; the fifth match in Bengaluru was washed out on 17 Oct 2026","India had won the ODI series 2-1."]
];
const CA10_AWD = [
  ["Nobel Peace Prize 2026","Navi Pillay (South Africa) — announced 9 Oct 2026","Jurist of Indian origin; former UN High Commissioner for Human Rights."],
  ["Nobel Prize in Literature 2026","Anne Carson","Canadian poet."],
  ["Nobel Prize in Physics 2026","Francis Halzen","For discovering high-energy neutrinos from space."],
  ["Nobel Prize in Chemistry 2026","Henri B. Kagan and Kenso Soai","How homochirality (one-handedness of molecules) can arise by itself."],
  ["Nobel Prize in Medicine 2026","Karl Deisseroth, Peter Hegemann and Georg Nagel","Optogenetics — controlling cells with light."],
  ["Economics Nobel 2026","Robert E. Hall and Michael Woodford","Macroeconomic models for stabilisation policy."]
];
const CA10_APP = [
  ["Chief of the Air Staff (29th)","Air Marshal Ashutosh Dixit — named on 6 Oct 2026, takes over on 31 Oct 2026","After ACM Amar Preet Singh (28th); tenure to 31 Dec 2028."],
  ["Governor of Tamil Nadu","Rajendra Vishwanath Arlekar — moved from Keralam (12 Oct 2026)","One of six governors appointed by the President that day."],
  ["Governor of Karnataka","Sudha Yadav (12 Oct 2026)","Also named: Keralam O. P. Mathur, Odisha Braj Mohan Ram, Uttarakhand Dhal Singh Bisen, Sikkim Dushyant Gautam."],
  ["Director General, RPF","Jitendra Kumar — named on 14 Oct 2026 (to March 2030)","After Sonali Mishra, the first woman DG of the RPF."],
  ["Chairman, men's cricket selection committee (BCCI)","Pragyan Ojha — 19 Oct 2026","After Ajit Agarkar; Ramesh Powar joined the panel."]
];
const CA10_PLC = [
  ["Karwar, Karnataka","INS Samarthak commissioned here on 16 Oct 2026","At the INS Kadamba naval base."],
  ["Sukhna Wetland, Chandigarh","Named a Ramsar site in Oct 2026","Sukhna Lake lies at the foot of the Shivalik hills."],
  ["Sauj Jheel, Uttar Pradesh","Named a Ramsar site in Oct 2026","A shallow lake in the Ganga floodplain, Mainpuri district."],
  ["Navi Pillay","Nobel Peace laureate 2026","South African jurist of Indian origin; once President of the Rwanda tribunal (ICTR)."],
  ["Lalremsiami","Scored the only goal of the Asian Games women's hockey final (2 Oct 2026)","India beat China 1-0."],
  ["Flávio Bolsonaro","Led Brazil's presidential first round on 4 Oct 2026","Faces President Lula in the run-off on 25 Oct."]
];
const CA10_OBI = [
  ["Nana Patekar","Hindi and Marathi film actor; died in Goa on 8 Oct 2026","Cardiac arrest at his residence; given a state funeral by Maharashtra."],
  ["Madhu Kambikar","Marathi actress and Lavani artiste; died in Pune on 12 Oct 2026","Known for Shapit and Ek Hota Vidushak; Maharashtra CM Devendra Fadnavis paid tribute."],
  ["Vummidi Ethiraj","Jeweller linked to the Sengol; died in Chennai in Oct 2026, aged 99","The Sengol was presented to Jawaharlal Nehru in 1947; PM Modi and Vice-President Radhakrishnan condoled."]
];
const CA10_SRC = [
  ["study-govt-schemes.html (this repo, checked 23 Oct 2026)","NSAP renamed PM Samajik Sahayata Yojana on 14 Oct 2026; ₹53,428 crore; IGNOAPS renamed (DD News, All India Radio News, Manorama Yearbook)"],
  ['<a href="https://organiser.org/2026/10/23/419797/bharat/pradhan-mantri-samajik-sahayata-yojana-to-cover-more-persons-with-disabilities-eligibility-lowered-to-40-per-cent/">organiser.org</a>',"Disability pension eligibility lowered to 40%"],
  ['<a href="https://www.business-standard.com/amp/economy/news/union-cabinet-approves-10-000-crore-commitment-to-sme-growth-fund-126100600817_1.html">business-standard.com</a>',"₹10,000 crore SME Growth Fund approved, 6 Oct 2026"],
  ['<a href="https://openthemagazine.com/india/pm-modi-inaugurates-chennai-metro-phase-ii-stretch-takes-a-ride-with-cm-vijay">openthemagazine.com</a>',"Chennai Metro Phase II stretch opened with CM Vijay"],
  ['<a href="https://thenewsmill.com/2026/10/pm-modi-inaugurates-infrastructure-projects-worth-over-rs-13000-crore-in-tamil-nadu/">thenewsmill.com</a>',"Projects worth over ₹13,000 crore in Tamil Nadu (11 Oct 2026)"],
  ['<a href="https://www.onmanorama.com/upsc/current-affairs/2026/10/16/india-now-has-103-ramsar-sites.html">onmanorama.com</a>',"India has 103 Ramsar sites"],
  ['<a href="https://www.manoramayearbook.in/current-affairs/india/2026/10/16/sukhna-lake-sauj-jheel-get-ramsar-site-tag.html">manoramayearbook.in</a>',"Sukhna and Sauj Jheel get the Ramsar tag; Sauj Jheel in the Ganga floodplain"],
  ['<a href="https://www.drishtiias.com/statepcs/19-10-2026/punjab">drishtiias.com</a>',"Sukhna at the foot of the Shivaliks; Sauj Jheel in Mainpuri"],
  ['<a href="https://www.deccanherald.com/business/india-new-zealand-fta-comes-into-force-on-october-20-4188622">deccanherald.com</a>',"India–NZ FTA in force from 20 Oct 2026"],
  ['<a href="https://www.maritimegateway.com/india-new-zealand-fta-kicks-in-from-october-20-with-duty-free-access-for-all-indian-exports/">maritimegateway.com</a>',"Duty-free access for all Indian exports; US$ 20 billion investment over 15 years"],
  ['<a href="https://www.washingtonpost.com/world/2026/10/04/bolsonaro-lula-head-runoff-5-takeaways-brazils-election/">washingtonpost.com</a>',"Brazil: Flávio Bolsonaro and Lula head to a run-off (4 Oct 2026)"],
  ['<a href="https://www.npr.org/2026/10/04/nx-s1-5981181/brazil-presidential-lula-bolsonaro">npr.org</a>',"First-round shares; run-off on 25 Oct"],
  ['<a href="https://www.euronews.com/2026/10/21/new-romanian-prime-minister-luca-niculescu-and-cabinet-members-sworn-in">euronews.com</a>',"Niculescu cabinet sworn in; 280 votes to 58"],
  ['<a href="https://agerpres.ro/english/2026/10/20/decree-appointing-niculescu-government-published-in-romania-s-official-gazette--1605099">agerpres.ro</a>',"Decree appointing the Niculescu government, 20 Oct 2026"],
  ['<a href="https://news.cgtn.com/news/2026-10-17/UNSC-holds-6th-straw-poll-on-secretary-general-candidates-1RjhPtMoRCo/share_amp.html">news.cgtn.com</a>',"Security Council's 6th straw poll for Secretary-General, 16 Oct 2026"],
  ['<a href="https://static.un.org/en/ga/president/81/">un.org</a>',"Guterres's term ends 31 Dec 2026"],
  ['<a href="https://swarajyamag.com/economy/rbi-raises-repo-rate-to-55-per-cent-projects-fy27-growth-at-71-per-cent-and-inflation-at-52-per-cent">swarajyamag.com</a>',"Repo 5.5% on 7 Oct 2026; first rise since Feb 2023; GDP 7.1%, CPI 5.2%"],
  ['<a href="https://www.gktoday.in/rbi-hikes-repo-rate-by-25-basis-points-to-5-50/">gktoday.in</a>',"25 bps rise to 5.50%; stance 'calibrated tightening'"],
  ['<a href="https://www.5paisa.com/index.php/blog/rbi-mpc-meeting-schedule">5paisa.com</a>',"SDF 5.25%, MSF 5.75%; next MPC 2–4 Dec 2026"],
  ['<a href="https://morungexpress.com/imf-raises-indias-growth-forecast-to-7-pc-keeps-it-among-fastest-growing-major-economies">morungexpress.com</a>',"IMF raises India's forecast to 7%"],
  ['<a href="https://www.thehansindia.com/business/imf-raises-indias-growth-forecast-to-7-pc-keeps-it-among-fastest-growing-major-economies-1131988">thehansindia.com</a>',"IMF WEO of 13 Oct 2026; +0.6 point from July"],
  ["study-reports-indices.html (this repo, checked 23 Oct 2026)","Global Hunger Index 2026 (14 Oct): India 100 of 122, score 24.1; Henley Oct 2026: India 84, Singapore 193 (Outlook, Free Press Journal, National Herald, The Star; Henley & Partners)"],
  ['<a href="https://newsonair.gov.in/vice-president-commissions-indigenously-built-ins-samarthak-into-indian-navy-in-karnataka/">newsonair.gov.in</a>',"INS Samarthak commissioned by the Vice-President, 16 Oct 2026"],
  ['<a href="https://swarajyamag.com/defence/indian-navy-commissions-ins-samarthak-indigenous-warship-designed-to-test-next-generation-weapons-and-drones">swarajyamag.com</a>',"INS Samarthak's role (weapons and sensor trials); L&T"],
  ['<a href="https://www.navalnews.com/naval-news/2026/10/hindustan-shipyard-launches-first-fleet-support-ship-surya-for-indian-navy/">navalnews.com</a>',"FSS-1 Surya launched at HSL, 6 Oct 2026; Rajnath Singh"],
  ['<a href="https://organiser.org/2026/10/06/384850/bharat/drdo-successfully-tests-indigenous-high-altitude-airship-boosts-aerial-surveillance-operational-strength/">organiser.org</a>',"DRDO high-altitude airship to 21 km (6 Oct 2026)"],
  ['<a href="https://www.manoramayearbook.in/current-affairs/india/2026/10/07/drdo-tests-high-altitude-airship-platform.html">manoramayearbook.in</a>',"ADRDE Agra; over 30 minutes near 20 km"],
  ['<a href="https://newsonair.gov.in/india-russia-joint-military-exercise-indra-2026-underway-in-russia/">newsonair.gov.in</a>',"INDRA 2026 in Russia; naval phase 16–17 Oct, land to 23 Oct"],
  ['<a href="https://tribuneindia.com/news/austrahind-2026/india-australia-armies-conduct-joint-drills-in-jungle-island-and-coastal-terrain-under-austrahind-2026">tribuneindia.com</a>',"AUSTRAHIND 2026 drills"],
  ['<a href="https://currentaffairs.adda247.com/india-australia-joint-military-exercise-austrahind-2026-begins-in-kerala/">adda247.com</a>',"AUSTRAHIND 2026 from 19 Oct to 1 Nov, Thiruvananthapuram"],
  ['<a href="https://indianmasterminds.com/news/defence/simbex-2026-india-singapore-naval-exercise-244589">indianmasterminds.com</a>',"SIMBEX 2026 began 21 Oct; sea phase 24–26 Oct"],
  ['<a href="https://www.outlookindia.com/sports/others/india-final-medal-tally-asian-games-2026-fourth-place-standings-gold-silver-bronze-count-aichi-nagoya">outlookindia.com</a>',"India 4th with 85 medals (21-27-37)"],
  ['<a href="https://newsonair.gov.in/india-signs-off-with-85-medals-after-gold-rush-in-cricket-hockey-kabaddi-at-asian-games/">newsonair.gov.in</a>',"India's 85 medals; hockey and cricket golds"],
  ['<a href="https://www.olympics.com/en/news/asian-games-2026-closing-ceremony-india-report">olympics.com</a>',"Closing ceremony: Neeru Dhanda flag-bearer; Doha 2030"],
  ['<a href="https://organiser.org/2026/10/03/384299/sports/asian-games-2026-india-retain-mens-hockey-gold-defeat-malaysia/amp/">organiser.org</a>',"Men's hockey gold v Malaysia, 3 Oct 2026"],
  ['<a href="https://www.oneindia.com/sports/india-win-asian-games-2026-mens-hockey-gold-beat-malaysia-5-1-to-qualify-for-la-2028-8223963.html">oneindia.com</a>',"Men's hockey: LA 2028 qualification"],
  ['<a href="https://www.theweek.in/news/sports/2026/10/02/asian-games-2026-india-end-44-year-wait-for-women-s-hockey-gold-secure-spot-in-2028-la-olympics.amp.html">theweek.in</a>',"Women's hockey gold, 2 Oct 2026; first since 1982; LA 2028"],
  ['<a href="https://www.nationalheraldindia.com/sports/asian-games-2026-india-win-womens-hockey-gold-after-44-years-qualify-for-la-2028">nationalheraldindia.com</a>',"Beat China 1-0"],
  ['<a href="https://www.businesstoday.in/sports/story/asian-games-2026-india-beats-pakistan-by-19-runs-clinches-gold-in-mens-cricket-final-559306-2026-10-03">businesstoday.in</a>',"Men's cricket gold, beat Pakistan by 19 runs, 3 Oct 2026"],
  ['<a href="https://gulfnews.com/sport/india-beat-pakistan-to-win-second-asian-games-gold-medal-in-mens-cricket-1.500696903">gulfnews.com</a>',"India's second Asian Games men's cricket gold"],
  ['<a href="https://www.businesstoday.in/sports/story/asian-games-2026-pranavi-sharath-urs-becomes-first-indian-woman-golfer-to-win-gold-559298-2026-10-03">businesstoday.in</a>',"Pranavi Urs, first Indian woman golf gold, 3 Oct 2026"],
  ['<a href="https://newsonair.gov.in/pranavi-urs-becomes-first-indian-woman-golfer-to-win-gold-medal-at-asian-games/">newsonair.gov.in</a>',"Pranavi Urs gold"],
  ['<a href="https://www.aljazeera.com/sports/liveblog/2026/10/17/live-india-vs-west-indies-fifth-t20-international">aljazeera.com</a>',"Fifth T20I, India v West Indies, 17 Oct 2026"],
  ['<a href="https://sportsdigest.in/ind-vs-wi-5th-t20i-rain-draw/226946/amp/">sportsdigest.in</a>',"Rain ends the decider; series 2-2"],
  ['<a href="https://khelnow.com/cricket/ind-vs-wi-most-runs-wickets-3rd-odi-202610">khelnow.com</a>',"West Indies won the third ODI; India took the ODI series 2-1"],
  ['<a href="https://www.aljazeera.com/news/2026/10/9/who-is-navi-pillay-winner-of-the-2026-nobel-peace-prize">aljazeera.com</a>',"Navi Pillay, Nobel Peace Prize 2026 (9 Oct)"],
  ['<a href="https://www.khaleejtimes.com/world/navanethem-navi-pillay-wins-nobel-peace-prize-2026">khaleejtimes.com</a>',"Indian-origin Navanethem 'Navi' Pillay"],
  ["tools/gk/awards (this repo, checked 23 Oct 2026)","Nobel 2026 winners in Physics, Chemistry, Medicine, Literature and Economics (NobelPrize.org, Britannica)"],
  ["study-appointments.html (this repo, checked 23 Oct 2026)","Air chief Ashutosh Dixit (6 Oct; from 31 Oct); governors of 12 Oct (Rashtrapati Bhavan communiqué); RPF DG Jitendra Kumar (14 Oct, PSU Watch); chief selector Pragyan Ojha (19 Oct; The Week, Onmanorama)"],
  ['<a href="https://www.khaleejtimes.com/entertainment/indian-actor-nana-patekar-dies-cardiac-arrest">khaleejtimes.com</a>',"Nana Patekar died after cardiac arrest at his residence"],
  ['<a href="https://www.khaleejtimes.com/nana-patekar-dies-state-funeral-planned-india-cinema">khaleejtimes.com</a>',"State funeral announced by Maharashtra minister Ashish Shelar"],
  ['<a href="https://www.thenationalnews.com/arts-culture/film-tv/2026/10/08/veteran-indian-actor-nana-patekar-dies-aged-75/">thenationalnews.com</a>',"Nana Patekar's death reported on 8 Oct 2026"],
  ['<a href="https://newsonair.gov.in/veteran-marathi-actress-and-lavani-artist-madhu-kambikar-passes-away/">newsonair.gov.in</a>',"Madhu Kambikar died 12 Oct 2026; Fadnavis's tribute"],
  ['<a href="https://theprint.in/feature/veteran-marathi-actor-and-lavani-artiste-madhu-kambikar-passes-away/3069445/">theprint.in</a>',"Kambikar, Lavani artiste, Pune"],
  ['<a href="https://theprint.in/india/vummidi-ethiraj-instrumental-in-crafting-historic-sengol-dies/3077976/">theprint.in</a>',"Vummidi Ethiraj, linked to the Sengol, died"],
  ['<a href="https://organiser.org/2026/10/21/418933/bharat/sengol-maker-vummidi-ethiraj-dies-at-99-pm-modi-hail-his-civilisational-legacy/">organiser.org</a>',"Aged 99; PM and Vice-President condoled"]
];

LESSONS.push(
{id:"CA10", title:"October 2026 (to 24 Oct)", hi:"अक्टूबर 2026 (24 अक्टूबर तक)", blocks:[
  {k:"hot", h:"Most likely to be asked: the <b>RBI's repo rate hike to 5.50%</b> (7 Oct), India's <b>85 medals</b> and the <b>hockey and cricket golds</b> at the Asian Games, the <b>Nobel Prizes 2026</b> (Peace — Navi Pillay), the <b>29th Air chief Ashutosh Dixit</b>, the <b>new governors</b> of 12 October, <b>INS Samarthak</b>, the <b>103 Ramsar sites</b> and the <b>India–New Zealand FTA</b>."},
  {k:"story", h:"<p>October 2026 opened with India's best days at the <b>Asian Games</b>: the women's hockey team ended a 44-year wait by beating <b>China</b> on 2 October, and on 3 October came golds in <b>men's hockey</b>, <b>men's cricket</b> (against Pakistan) and <b>golf</b> (Pranavi Urs). India finished <b>fourth with 85 medals</b> when the Games closed on 4 October.</p><p>On 7 October the <b>RBI</b> did something it had not done since February 2023 — it <b>raised the repo rate</b>, by 25 basis points to <b>5.50%</b>. The Nobel week followed, with the Peace Prize for <b>Navi Pillay</b>. The government renamed the NSAP the <b>PM Samajik Sahayata Yojana</b>, appointed six <b>governors</b> and named <b>Ashutosh Dixit</b> the next Air chief. The Navy commissioned <b>INS Samarthak</b> at Karwar, Chandigarh's <b>Sukhna</b> wetland took India to <b>103 Ramsar sites</b>, and the <b>India–New Zealand FTA</b> came into force on 20 October.</p>", key:"Repo 5.50% (7 Oct); Asian Games 4th, 85 medals; Nobel Peace — Navi Pillay; Air chief — Ashutosh Dixit (29th); India–NZ FTA from 20 Oct."},
  {k:"table", title:"National — government decisions, schemes, laws", head:["Item","Fact","Note"], rows: CA10_NAT},
  {k:"table", title:"International — summits, agreements, elections abroad", head:["Item","Fact","Note"], rows: CA10_INT},
  {k:"table", title:"Economy and banking", head:["Item","Fact","Note"], rows: CA10_ECO},
  {k:"table", title:"Science, space and defence", head:["Item","Fact","Note"], rows: CA10_SCI},
  {k:"table", title:"Sports", head:["Item","Fact","Note"], rows: CA10_SPO},
  {k:"table", title:"Awards and honours", head:["Item","Fact","Note"], rows: CA10_AWD},
  {k:"table", title:"Appointments", head:["Item","Fact","Note"], rows: CA10_APP},
  {k:"table", title:"Places and persons in news", head:["Item","Fact","Note"], rows: CA10_PLC},
  {k:"table", title:"Obituaries", head:["Item","Fact","Note"], rows: CA10_OBI},
  {k:"trick", h:"The Air chiefs in order — <b>“28 Amar, 29 Ashu”</b>: Amar Preet Singh was the <b>28th</b> Chief of the Air Staff; <b>Ashutosh Dixit</b> is the <b>29th</b>, from <b>31 October 2026</b>."},
  {k:"trick", h:"Three golds on one day — <b>3 October</b> = <b>H-C-G</b>: <b>H</b>ockey (men, v Malaysia), <b>C</b>ricket (men, v Pakistan), <b>G</b>olf (Pranavi Urs). The women's hockey gold came a day earlier, on <b>2 October</b>, against China."},
  {k:"trap", h:"<b>Rate direction</b>: in October 2026 the RBI <b>raised</b> the repo rate (to 5.50%) — it did not cut it. The stance became '<b>calibrated tightening</b>', not 'neutral' or 'accommodative'."},
  {k:"trap", h:"<b>R. V. Arlekar</b> moved <b>from Keralam to Tamil Nadu</b>; Keralam's new governor is <b>O. P. Mathur</b>. And <b>Sudha Yadav</b> went to <b>Karnataka</b>, <b>Dhal Singh Bisen</b> to <b>Uttarakhand</b>."},
  {k:"trap", h:"<b>Two 'first woman' facts</b>: <b>Sonali Mishra</b> was the first woman DG of the RPF (her successor is <b>Jitendra Kumar</b>), and <b>Pranavi Urs</b> is the first Indian woman to win an Asian Games golf gold. Do not confuse the GHI rank (<b>100</b>) with the Henley Passport rank (<b>84</b>)."},
  {k:"table", title:"Sources (checked 24 Oct 2026)", head:["Source","What it confirmed"], rows: CA10_SRC}
], sum:[
  "RBI, 7 Oct 2026: repo rate up 25 bps to 5.50% (first rise since Feb 2023); stance 'calibrated tightening'; GDP 7.1%, CPI 5.2% for 2026-27.",
  "IMF WEO (13 Oct 2026): India's 2026-27 growth forecast 7.0%.",
  "Asian Games closed on 4 Oct 2026: India 4th with 85 medals (21 gold); golds in men's and women's hockey, men's cricket and golf.",
  "Nobel Peace Prize 2026: Navi Pillay (9 Oct). Literature: Anne Carson. Economics: Robert Hall and Michael Woodford.",
  "29th Chief of the Air Staff: Ashutosh Dixit, from 31 Oct 2026 (named 6 Oct).",
  "Governors (12 Oct 2026): Tamil Nadu R. V. Arlekar, Keralam O. P. Mathur, Karnataka Sudha Yadav, Odisha Braj Mohan Ram, Uttarakhand Dhal Singh Bisen, Sikkim Dushyant Gautam.",
  "NSAP renamed Pradhan Mantri Samajik Sahayata Yojana (14 Oct 2026, ₹53,428 crore for 2026-31).",
  "INS Samarthak commissioned at Karwar (16 Oct); FSS Surya launched at Visakhapatnam (6 Oct).",
  "Ramsar sites: 103, after Sukhna (Chandigarh) and Sauj Jheel (UP).",
  "India–New Zealand FTA in force from 20 Oct 2026.",
  "GHI 2026: India 100 of 122. Henley Passport Index (Oct 2026): India 84.",
  "Obituaries: Nana Patekar (8 Oct), Madhu Kambikar (12 Oct), Vummidi Ethiraj (Sengol jeweller)."
]}
);

QB.push(
["CA10","On 7 October 2026 the RBI's Monetary Policy Committee set the repo rate at:",["5.50%","5.25%","5.75%","6.00%"],"It raised the rate by 25 basis points to 5.50%; 5.25% is now the SDF rate and 5.75% the MSF rate.",""],
["CA10","The RBI's repo rate increase of October 2026 was its first increase since:",["February 2023","May 2022","December 2024","April 2020"],"The last increase before October 2026 had come in February 2023.",""],
["CA10","After its October 2026 meeting, the RBI's MPC changed its stance from neutral to:",["Calibrated tightening","Accommodative","Withdrawal of accommodation","Neutral with an easing bias"],"The stance became 'calibrated tightening', backed by four of the six members.",""],
["CA10","In its World Economic Outlook of 13 October 2026, the IMF put India's growth for 2026-27 at:",["7.0%","6.4%","7.8%","5.5%"],"The IMF raised the forecast to 7.0%, 0.6 percentage point above its July 2026 figure.",""],
["CA10","In the Global Hunger Index 2026 (released 14 October 2026), India ranks:",["100th of 122","102nd of 123","84th of 122","131st of 145"],"India is 100th with a score of 24.1, rated 'serious'; it was 102nd in 2025.",""],
["CA10","In October 2026 the National Social Assistance Programme (NSAP) was renamed:",["Pradhan Mantri Samajik Sahayata Yojana","Pradhan Mantri Garib Kalyan Yojana","Pradhan Mantri Jan Suraksha Yojana","Pradhan Mantri Samajik Nyay Yojana"],"The Cabinet renamed it on 14 Oct 2026 and approved ₹53,428 crore for 2026-31.",""],
["CA10","Under the renamed NSAP (October 2026), the disability pension is now available from how much disability?",["40%","80%","60%","25%"],"The required level of disability was lowered from 80% to 40%.",""],
["CA10","On 6 October 2026 the Cabinet approved a ₹10,000 crore commitment to which fund?",["SME Growth Fund","Fund of Funds for Startups","National Investment and Infrastructure Fund","Agri Infrastructure Fund"],"The SME Growth Fund will make direct equity investments in small and medium enterprises.",""],
["CA10","Which two wetlands took India's number of Ramsar sites to 103 in October 2026?",["Sukhna (Chandigarh) and Sauj Jheel (Uttar Pradesh)","Chilika and Bhitarkanika (Odisha)","Shekha Jheel and Patna Bird Sanctuary (UP)","Wular and Hokera (J&K)"],"Sukhna Wetland in Chandigarh and Sauj Jheel in Uttar Pradesh were added in October 2026.",""],
["CA10","The India–New Zealand free trade agreement came into force on:",["20 October 2026","1 January 2027","15 August 2026","2 October 2026"],"It took effect on 20 Oct 2026, giving all Indian exports duty-free entry into New Zealand.",""],
["CA10","In the first round of Brazil's presidential election on 4 October 2026, who came first?",["Flávio Bolsonaro","Luiz Inácio Lula da Silva","Tarcísio de Freitas","Jair Bolsonaro"],"Flávio Bolsonaro led with about 47% to Lula's 45%, so the two meet in a run-off on 25 October.",""],
["CA10","Who became Prime Minister of Romania in October 2026?",["Luca Niculescu","Ilie Bolojan","Nicușor Dan","Marcel Ciolacu"],"The independent diplomat's cabinet won 280 votes to 58; Nicușor Dan is Romania's President.",""],
["CA10","INS Samarthak was commissioned into the Indian Navy on 16 October 2026 at:",["Karwar","Visakhapatnam","Mumbai","Kochi"],"It was commissioned at the INS Kadamba base, Karwar, with Vice-President C. P. Radhakrishnan presiding.",""],
["CA10","Which company built INS Samarthak?",["Larsen & Toubro","Cochin Shipyard","Mazagon Dock Shipbuilders","Goa Shipyard"],"L&T built the multi-purpose vessel at its Kattupalli yard in Tamil Nadu.",""],
["CA10","The Navy's first Fleet Support Ship, launched at Visakhapatnam on 6 October 2026, is named:",["Surya","Samarthak","Nipun","Nistar"],"FSS-1 'Surya' was launched at Hindustan Shipyard with Rajnath Singh as chief guest.",""],
["CA10","Which DRDO laboratory developed the high-altitude airship flown to 21 km (announced 6 October 2026)?",["ADRDE, Agra","DRDL, Hyderabad","ADE, Bengaluru","DEBEL, Bengaluru"],"The Aerial Delivery Research and Development Establishment, Agra, is building the high-altitude platform.",""],
["CA10","AUSTRAHIND 2026 (19 October – 1 November 2026) is a military exercise between India and:",["Australia","Austria","the United States","Indonesia"],"The India–Australia army exercise is being held at Thiruvananthapuram.",""],
["CA10","The naval phase of INDRA 2026 (16–17 October 2026) was held in the:",["Sea of Japan","Bay of Bengal","Black Sea","Arabian Sea"],"INDRA is the India–Russia exercise; this edition was held in Russia, with its sea phase in the Sea of Japan.",""],
["CA10","Where did India finish on the medal table of the 2026 Asian Games?",["4th, with 85 medals","3rd, with 107 medals","5th, with 70 medals","2nd, with 120 medals"],"India won 21 gold, 27 silver and 37 bronze; 107 was its Hangzhou total.",""],
["CA10","Which team did India beat in the men's hockey final of the 2026 Asian Games (3 October 2026)?",["Malaysia","Pakistan","Japan","South Korea"],"India beat Malaysia, kept its title and qualified directly for the 2028 Olympics.",""],
["CA10","India's women's hockey team won the 2026 Asian Games gold — its first since 1982 — by beating:",["China","Japan","South Korea","Malaysia"],"India beat China 1-0 on 2 Oct 2026; Lalremsiami scored.",""],
["CA10","By how many runs did India beat Pakistan in the men's cricket final of the 2026 Asian Games?",["19 runs","147 runs","9 runs","29 runs"],"India made 211/6 and held Pakistan to 192/6; 147 runs was the margin of the women's final win.",""],
["CA10","Who became the first Indian woman to win a golf gold at the Asian Games, on 3 October 2026?",["Pranavi Urs","Aditi Ashok","Diksha Dagar","Tvesa Malik"],"Pranavi Urs won the women's individual gold and also a team silver with Aditi Ashok and Diksha Dagar.",""],
["CA10","Who carried India's flag at the 2026 Asian Games closing ceremony on 4 October?",["Neeru Dhanda","Manu Bhaker","Pawan Sehrawat","Harmanpreet Singh"],"Trap gold medallist Neeru Dhanda was the flag-bearer; Bhaker and Sehrawat led India at the opening.",""],
["CA10","Which city is to host the next Asian Games, in 2030?",["Doha","Riyadh","Seoul","Jakarta"],"After Aichi-Nagoya 2026, the Asian Games go to Doha in 2030.",""],
["CA10","How did the five-match T20I series between India and the West Indies (Sept–Oct 2026) end?",["Drawn 2-2","India won 3-1","West Indies won 3-2","India won 4-0"],"The fifth match, in Bengaluru on 17 Oct 2026, was washed out, leaving the series 2-2.",""],
["CA10","Who won the Nobel Peace Prize 2026?",["Navi Pillay","María Corina Machado","Narges Mohammadi","Nihon Hidankyo"],"The South African jurist of Indian origin was named on 9 Oct 2026; Machado won in 2025.",""],
["CA10","Who won the Nobel Prize in Literature 2026?",["Anne Carson","László Krasznahorkai","Han Kang","Margaret Atwood"],"The Canadian poet Anne Carson won in 2026; Krasznahorkai won in 2025.",""],
["CA10","The Nobel Prize in Medicine 2026 was awarded for:",["Optogenetics","mRNA vaccines","microRNA","Peripheral immune tolerance"],"Karl Deisseroth, Peter Hegemann and Georg Nagel won for optogenetics — controlling cells with light.",""],
["CA10","Who shared the 2026 Nobel Prize in Economic Sciences?",["Robert E. Hall and Michael Woodford","Joel Mokyr, Philippe Aghion and Peter Howitt","Daron Acemoglu and James Robinson","Abhijit Banerjee and Esther Duflo"],"Hall and Woodford won for macroeconomic models for stabilisation policy.",""],
["CA10","Who takes over as India's 29th Chief of the Air Staff on 31 October 2026?",["Air Marshal Ashutosh Dixit","Air Chief Marshal Amar Preet Singh","Air Marshal Narmdeshwar Tiwari","Air Marshal S. P. Dharkar"],"He was named on 6 Oct 2026; Amar Preet Singh, the 28th chief, retires on 31 October.",""],
["CA10","In October 2026 R. V. Arlekar moved from Keralam to which state as Governor?",["Tamil Nadu","Karnataka","Odisha","Goa"],"He was one of six governors appointed on 12 Oct 2026; O. P. Mathur went to Keralam.",""],
["CA10","Who was appointed Governor of Karnataka on 12 October 2026?",["Sudha Yadav","Dhal Singh Bisen","Braj Mohan Ram","Dushyant Gautam"],"Sudha Yadav went to Karnataka; Bisen to Uttarakhand, Braj Mohan Ram to Odisha and Gautam to Sikkim.",""],
["CA10","Who was named Director General of the RPF on 14 October 2026?",["Jitendra Kumar","Sonali Mishra","Manoj Yadava","Arun Kumar"],"Jitendra Kumar succeeds Sonali Mishra, the first woman to head the RPF.",""],
["CA10","Who replaced Ajit Agarkar as chairman of India's men's cricket selectors on 19 October 2026?",["Pragyan Ojha","Ramesh Powar","R. P. Singh","Shiv Sundar Das"],"Pragyan Ojha became chairman; Ramesh Powar joined the panel.",""],
["CA10","Nana Patekar, who died on 8 October 2026, was a well-known:",["Film actor","Classical singer","Cricket commentator","Painter"],"The Hindi and Marathi film actor died in Goa after a cardiac arrest and was given a state funeral.",""],
["CA10","Vummidi Ethiraj, who died aged 99 in October 2026, was linked to the making of the:",["Sengol","Ashoka Chakra medal","Bharat Ratna medallion","Peacock Throne replica"],"The Chennai jeweller's family firm made the Sengol presented to Jawaharlal Nehru in 1947.",""],
["CA10","Madhu Kambikar, who died in Pune on 12 October 2026, was a Marathi actress and an artiste of which folk form?",["Lavani","Powada","Koli dance","Dhangari Gaja"],"She was a celebrated Lavani performer and acted in films such as Shapit.",""]
);

LASTMOMENT.push(
{t:"October 2026", era:["ca"], rows:[["Repo rate (7 Oct)","5.50% — first rise since Feb 2023"],["Asian Games","India 4th, 85 medals (21 gold)"],["3 Oct golds","Men's hockey, men's cricket, golf (Pranavi Urs)"],["Nobel Peace","Navi Pillay"],["Air chief (29th)","Ashutosh Dixit, from 31 Oct"],["NSAP","→ PM Samajik Sahayata Yojana"],["INS Samarthak","Karwar, 16 Oct"],["Ramsar sites","103 (Sukhna, Sauj Jheel)"],["India–NZ FTA","In force 20 Oct"],["GHI · Henley","100 · 84"]]}
);
TILES.push(["5.50%","Repo rate from 7 Oct 2026","ca"],["85","India's medals at the 2026 Asian Games","ca"],["29th","Air chief Ashutosh Dixit (from 31 Oct)","ca"],["103","Ramsar sites in India (Oct 2026)","ca"],["100","India in the Global Hunger Index 2026","ca"]);
