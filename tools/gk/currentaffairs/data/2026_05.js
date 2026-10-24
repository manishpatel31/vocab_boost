/* Current Affairs 2026 · May 2026 (lesson CA5). Self-contained: its tables, lesson, questions, last-moment card and tiles.
   Every fact was checked on 24 Oct 2026 against the sources in the lesson's last table; nothing unconfirmed is kept.
   Table rows are [item, fact, note]. Names start with CA5_ so other month files never clash with them. */
const CA5_NAT = [
  ["Assembly results (4 May 2026)","Counting in Assam, Kerala, Tamil Nadu, West Bengal and Puducherry","NDA kept Assam and Puducherry and won West Bengal; the Congress-led UDF won Kerala; Vijay's TVK won most seats in Tamil Nadu."],
  ["West Bengal","BJP won 207 seats (208 after the Falta re-poll) of 294; Trinamool 80","Suvendu Adhikari sworn in on 9 May 2026 at the Brigade Parade Ground, Kolkata — the state's first BJP Chief Minister."],
  ["Tamil Nadu","TVK the largest party with 108 of 234 seats, short of the 118 needed","C. Joseph Vijay sworn in as CM on 10 May 2026 in Chennai, backed by the Congress, CPI, CPI(M), VCK and IUML. The DMK lost power."],
  ["Kerala","Congress-led UDF back in power after 10 years, defeating the LDF","V. D. Satheesan sworn in as CM on 18 May 2026 at Central Stadium, Thiruvananthapuram."],
  ["Assam","NDA won 102 of 126 seats (BJP 82, AGP 10, BPF 10)","Himanta Biswa Sarma sworn in for a second straight term on 12 May 2026 in Guwahati — the first non-Congress CM of Assam to win consecutive terms."],
  ["Puducherry","AINRC-led NDA won 18 of the 30 elected seats","N. Rangasamy sworn in on 13 May 2026 for a record fifth term as CM; oath given by Lt Governor K. Kailashnathan."],
  ["Falta re-poll (West Bengal)","Held on 21 May 2026; BJP's Debangshu Panda won by about 1.09 lakh votes","The 29 April poll there was cancelled over EVM tampering complaints; counting on 24 May."],
  ["Supreme Court judges ordinance","Promulgated 16 May 2026: judges raised from 33 to 37, besides the CJI (38 in all)","Amends the Supreme Court (Number of Judges) Act, 1956 under Article 123. The last rise was in 2019 (30 to 33)."],
  ["Assam UCC Bill","Passed by the Assam Assembly on 27 May 2026","Third state after Uttarakhand and Gujarat, and the first in the North-East. Scheduled Tribes are kept out of it."],
  ["Kharif MSP 2026-27","Cabinet, 13 May 2026: MSP raised for 14 kharif crops; common paddy ₹2,441 a quintal (up ₹72)","Biggest rise for sunflower seed (₹622). MSP at least 50% above the cost of production for every crop."]
];
const CA5_INT = [
  ["PM's five-nation tour","15–20 May 2026: UAE, Netherlands, Sweden, Norway and Italy","Ties with Sweden were raised to a Strategic Partnership."],
  ["3rd India–Nordic Summit","Oslo, 19 May 2026 — ties raised to a Green Technology and Innovation Strategic Partnership","With Denmark, Finland, Iceland, Norway and Sweden. Earlier summits: Stockholm (2018) and Copenhagen (2022); Finland hosts the next."],
  ["India–Norway","Green Strategic Partnership launched during the PM's Oslo visit (May 2026)","The first visit to Norway by an Indian Prime Minister since 1983; 12 agreements and initiatives."],
  ["BRICS Foreign Ministers' Meeting","New Delhi, 14–15 May 2026, chaired by S. Jaishankar","India holds the BRICS chair for 2026 (from 1 Jan, after Brazil). Theme: Building for Resilience, Innovation, Cooperation and Sustainability."]
];
const CA5_ECO = [
  ["RBI surplus to the Centre","Record ₹2,86,588 crore (about ₹2.87 lakh crore) for 2025-26","Approved at the RBI board's 623rd meeting on 22 May 2026; the previous record was ₹2.69 lakh crore. Contingent Risk Buffer kept at 6.5% of the balance sheet."]
];
const CA5_SCI = [
  ["Advanced Agni with MIRV","Flight-tested on 8 May 2026 from Dr APJ Abdul Kalam Island, Odisha","Carried several payloads to separate targets in the Indian Ocean Region. The first Agni-5 MIRV test, 'Mission Divyastra', was in March 2024."],
  ["Exercise PRAGATI 2026","First edition of India's multilateral army exercise — Umroi, Meghalaya (May 2026)","India and 12 friendly nations, over 400 troops; counter-terrorism in jungle and semi-mountainous terrain. Ended with a 72-hour validation drill."]
];
const CA5_SPO = [
  ["IPL 2026","Royal Challengers Bengaluru beat Gujarat Titans by 5 wickets — 31 May 2026","Final at the Narendra Modi Stadium, Ahmedabad. RCB's second title in a row; Virat Kohli Player of the Match."],
  ["Thomas Cup 2026","China beat France 3-1 in the final at Horsens, Denmark (3 May 2026)","China's 12th Thomas Cup. India lost the semi-final 0-3 to France and took bronze."],
  ["Uber Cup 2026","South Korea beat China 3-1 in the final at Horsens","The women's team title, held with the Thomas Cup."],
  ["ISSF World Cup, Munich","Suruchi Inder Singh won the women's 10m air pistol gold on 29 May 2026","Esha Singh took silver in the same final."]
];
const CA5_AWD = [
  ["Padma Awards — first investiture","25 May 2026, Rashtrapati Bhavan: 66 awards (2 Padma Vibhushan, 6 Padma Bhushan, 58 Padma Shri)","131 Padma Awards were announced for 2026; the rest were given at a second ceremony."],
  ["Padma Vibhushan (25 May)","Actor Dharmendra (posthumous) and violinist N. Rajam","Hema Malini received Dharmendra's award; he had died in November 2025."],
  ["International Booker Prize 2026","Taiwan Travelogue by Yáng Shuāng-zǐ, translated by Lin King — 19 May 2026","Announced at Tate Modern, London; the first winner translated from Mandarin Chinese. The £50,000 is shared by author and translator."],
  ["Royal Order of the Polar Star","Sweden's honour (Commander Grand Cross) for PM Modi — 17 May 2026, Gothenburg","Presented by Crown Princess Victoria; reported as his 31st international honour."]
];
const CA5_APP = [
  ["Chief of Defence Staff","General N. S. Raja Subramani — took charge on 31 May 2026","India's third CDS, after General Anil Chauhan. He was Military Adviser in the National Security Council Secretariat and a former Vice Chief of Army Staff."],
  ["Chief of the Naval Staff","Admiral Krishna Swaminathan — 27th chief, from 31 May 2026","After Admiral Dinesh K. Tripathi. He was Flag Officer Commanding-in-Chief, Western Naval Command."],
  ["DRDO Chairman (additional charge)","Defence Secretary Rajesh Kumar Singh, after Samir V. Kamat","Appointments Committee of the Cabinet order of 29 May 2026; Kamat had led DRDO since August 2022."],
  ["Vice-Chairperson, NITI Aayog","Ashok Kumar Lahiri took charge on 8 May 2026","Named in the NITI Aayog notification of 24 April 2026, after Suman Bery."]
];
const CA5_PLC = [
  ["Brigade Parade Ground, Kolkata","Where Suvendu Adhikari took oath as West Bengal CM (9 May 2026)","The date was Pochishe Boishakh, Rabindranath Tagore's birth anniversary."],
  ["Bhabanipur, Kolkata","Mamata Banerjee lost here to Suvendu Adhikari by about 15,000 votes (4 May 2026)","Adhikari also won Nandigram."],
  ["Umroi, Meghalaya","Venue of the first Exercise PRAGATI (May 2026)","Umroi Military Station, near Shillong."],
  ["Horsens, Denmark","Hosted the Thomas and Uber Cup Finals (April–May 2026)","China won the Thomas Cup, South Korea the Uber Cup."],
  ["Oslo, Norway","Hosted the 3rd India–Nordic Summit (19 May 2026)","Norway's PM Jonas Gahr Støre was the host."],
  ["Dr APJ Abdul Kalam Island, Odisha","Launch site of the Advanced Agni MIRV test (8 May 2026)","Formerly Wheeler Island, off the Odisha coast."],
  ["C. Joseph Vijay","Actor and TVK founder — Tamil Nadu CM from 10 May 2026","His party's first election."]
];
const CA5_OBI = [
  ["Bashir Badr","Urdu poet; died in Bhopal on 28 May 2026, aged 91","Padma Shri and Sahitya Akademi Award (for the ghazal collection 'Aas'), both in 1999."],
  ["Suman Kalyanpur","Playback singer; died in Mumbai on 31 May 2026, aged 89","Padma Bhushan; sang many duets with Mohammed Rafi. Last rites with state honours on 1 June."]
];
const CA5_SRC = [
  ['<a href="https://www.thestatesman.com/india/assembly-election-results-2026-counting-begins-in-westbengal-assam-tamil-nadu-kerala-puducherry-1503589335.html">thestatesman.com</a>',"Counting in five assemblies on 4 May 2026"],
  ['<a href="https://www.aajtak.in/elections/assembly-chunav/story/assembly-election-results-2026-west-bengal-assam-tamil-nadu-kerala-puducherry-ntc-bktw-dskc-2542374-2026-05-04">aajtak.in</a>',"Who won each state (4 May 2026)"],
  ['<a href="https://newsonair.gov.in/suvendu-adhikari-takes-oath-as-first-bjp-cm-of-west-bengal/">newsonair.gov.in</a>',"Suvendu Adhikari takes oath as first BJP CM of West Bengal (9 May 2026)"],
  ['<a href="https://www.theweek.in/news/india/2026/05/09/suvendu-adhikari-set-to-take-oath-as-cm-heralding-new-bjp-era-in-west-bengal.amp.html">theweek.in</a>',"Brigade Parade Ground; Pochishe Boishakh; ministers sworn in"],
  ['<a href="https://thefinancialexpress.com.bd/world/asia/suvendu-sworn-in-as-west-bengal-cm">thefinancialexpress.com.bd</a>',"BJP 207 of 294 seats; Trinamool 80"],
  ['<a href="https://www.indiatvnews.com/west-bengal/news-mamata-banerjee-loses-to-bjp-s-suvendu-adhikari-by-over-15000-votes-in-bhabanipur-in-west-bengal-assembly-elections-2026-05-04-1039923">indiatvnews.com</a>',"Mamata Banerjee lost Bhabanipur by over 15,000 votes"],
  ['<a href="https://scroll.in/latest/1092579/bengal-results-mamata-banerjee-leads-bjps-suvendu-adhikari-in-bhabanipur">scroll.in</a>',"Bhabanipur result; Adhikari also won Nandigram"],
  ['<a href="https://newsonair.gov.in/bjp-candidate-debangshu-panda-wins-falta-assembly-seat-in-west-bengal-by-margin-of-1-09-lakh-votes/">newsonair.gov.in</a>',"Falta re-poll won by Debangshu Panda by 1.09 lakh votes; BJP tally 208"],
  ['<a href="https://www.latestly.com/india/politics/bjps-debangshu-panda-wins-falta-assembly-repoll-by-landslide-tmc-candidate-finishes-4th-with-forfeited-deposit-7444985.html">latestly.com</a>',"Re-poll on 21 May; 29 April poll countermanded"],
  ['<a href="https://www.thequint.com/amp/story/news/breaking-news/joseph-vijay-sworn-in-tamil-nadu-chief-minister">thequint.com</a>',"C. Joseph Vijay sworn in as Tamil Nadu CM"],
  ['<a href="https://www.khaleejtimes.com/world/asia/vijay-to-be-sworn-in-as-tamil-nadu-cm-actor-trisha-krishnan-arrives-for-ceremony?amp=1">khaleejtimes.com</a>',"Oath on 10 May 2026 in Chennai; TVK 108 seats, short of 118; support of Congress, CPI, CPI(M), VCK, IUML"],
  ['<a href="https://thesouthfirst.com/tamilnadu/historic-oath-taking-ceremony-of-tvk-president-c-joseph-vijay-as-tamil-nadu-chief-minister-underway/">thesouthfirst.com</a>',"Oath ceremony of TVK president Vijay"],
  ['<a href="https://newsonair.gov.in/keralam-vd-satheesan-to-be-sworn-in-as-chief-minister-on-may-18/">newsonair.gov.in</a>',"V. D. Satheesan to be sworn in as Kerala CM on 18 May"],
  ['<a href="https://scroll.in/latest/1092933/scroll_in">scroll.in</a>',"Satheesan takes oath as Kerala CM"],
  ['<a href="https://www.manoramayearbook.in/current-affairs/india/2026/05/18/vd-satheesan-takes-oath-as-kerala-chief-minister.html">manoramayearbook.in</a>',"Oath on 18 May 2026; UDF back after a decade"],
  ['<a href="https://newsonair.gov.in/senior-bjp-leader-himanta-biswa-sarma-to-be-sworn-in-as-cm-of-assam-in-guwahati-today/">newsonair.gov.in</a>',"Himanta Biswa Sarma sworn in, Guwahati, 12 May 2026"],
  ['<a href="https://www.thehitavada.com/Encyc/2026/5/13/himanta-takes-oath-for-2nd-term-4-mlas-sworn-in-as-ministers.html">thehitavada.com</a>',"Second term; NDA 102 of 126 (BJP 82, AGP 10, BPF 10)"],
  ['<a href="https://wionews.com/india-news/himanta-biswa-sarma-takes-oath-as-assam-s-cm-for-consecutive-term-1778567331079">wionews.com</a>',"First non-Congress CM of Assam with consecutive terms"],
  ['<a href="https://www.newsonair.gov.in/n-rangasamy-sworn-in-as-puducherry-chief-minister-for-record-fifth-term/">newsonair.gov.in</a>',"N. Rangasamy sworn in for a record fifth term; Lt Governor K. Kailashnathan"],
  ['<a href="https://newsonair.gov.in/all-india-n-r-congress-leader-n-rangasamy-to-take-oath-as-chief-minister-of-puducherry-today/">newsonair.gov.in</a>',"Oath on 13 May 2026"],
  ['<a href="https://scroll.in/latest/1092826/scroll_in">scroll.in</a>',"Rangasamy takes oath; NDA 18 of 30 seats"],
  ['<a href="https://newsonair.gov.in/president-approves-increase-in-sanctioned-strength-of-judges-in-supreme-court-from-33-to-37/">newsonair.gov.in</a>',"Supreme Court strength raised from 33 to 37"],
  ['<a href="https://www.scconline.com/blog/post/2026/05/18/supreme-court-judges-increase-ordinance-2026-explained/">scconline.com</a>',"Ordinance of 16 May 2026 under Article 123; amends the 1956 Act"],
  ['<a href="https://www.dailyexcelsior.com/president-murmu-promulgates-ordinance-to-increase-supreme-court-judge-strength-by-four/">dailyexcelsior.com</a>',"Ordinance raises strength by four; 2019 rise from 30 to 33"],
  ['<a href="https://newsonair.gov.in/assam-assembly-passes-ucc-bill-becoming-third-state-to-adopt-legislation/">newsonair.gov.in</a>',"Assam passes UCC Bill, third state (27 May 2026)"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/assam-becomes-third-state-to-pass-uniform-civil-code-ucc-bill-2026/print_manually">drishtiias.com</a>',"After Uttarakhand and Gujarat; first in the North-East; STs excluded"],
  ['<a href="https://scroll.in/latest/1093157/assam-passes-uniform-civil-code-bill">scroll.in</a>',"Assam passes Uniform Civil Code bill"],
  ['<a href="https://www.tribuneindia.com/news/india/pm-modi-to-visit-uae-netherlands-sweden-norway-italy-from-may-15-20">tribuneindia.com</a>',"PM's tour of UAE, Netherlands, Sweden, Norway, Italy, 15–20 May 2026"],
  ['<a href="https://ianslive.in/pm-modi-arrives-in-delhi-after-successfully-concluding-five-nation-tour--20260521094923">ianslive.in</a>',"PM returns after the five-nation tour"],
  ['<a href="https://www.outlookbusiness.com/economy-and-policy/narendra-modi-wraps-up-his-five-nation-tourwhat-india-gained">outlookbusiness.com</a>',"India–Sweden ties raised to a Strategic Partnership"],
  ['<a href="https://government.se/statements/2026/05/joint-statement3rd-india-nordic-summit-oslo-19-may-2026/">government.se (joint statement)</a>',"3rd India–Nordic Summit, Oslo, 19 May 2026; Green Technology and Innovation Strategic Partnership"],
  ['<a href="https://valtioneuvosto.fi/en/-/nordic-countries-and-india-pledge-to-deepen-cooperation">valtioneuvosto.fi (Finland PMO)</a>',"Leaders present; Finland to host the next summit"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/india-nordic-summit-2026/print_manually">drishtiias.com</a>',"Earlier summits in Stockholm (2018) and Copenhagen (2022)"],
  ['<a href="https://www.regjeringen.no/en/whats-new/norway-and-india-to-strengthen-cooperation/id3160149/">regjeringen.no (Norway govt)</a>',"Green strategic partnership; first Indian PM visit to Norway since 1983"],
  ['<a href="https://gulfnews.com/amp/story/world/asia/india/india-norway-seal-12-agreements-to-deepen-green-strategic-partnership-during-pm-modis-visit-1.500545130">gulfnews.com</a>',"12 India–Norway agreements"],
  ['<a href="https://ianslive.in/india-set-to-host-brics-foreign-ministers-meeting-this-week--20260512163257">ianslive.in</a>',"BRICS Foreign Ministers' Meeting, New Delhi, 14–15 May, chaired by Jaishankar"],
  ['<a href="https://gulfnews.com/world/asia/brics-foreign-ministers-meet-to-kick-off-in-delhi-1.500539824">gulfnews.com</a>',"Meeting opens in Delhi; India's BRICS chair and theme"],
  ['<a href="https://www.newsonair.gov.in/rbi-approves-record-%E2%82%B92-86-lakh-crore-surplus-transfer-to-central-government-for-financial-year-2025-26/">newsonair.gov.in</a>',"Record RBI surplus transfer for 2025-26 (22 May 2026)"],
  ['<a href="https://www.moneylife.in/article/rbi-transfers-record-287-lakh-crore-dividend-to-govt-for-fy2526/80548.html">moneylife.in</a>',"₹2,86,588.46 crore; 623rd board meeting; CRB 6.5%; previous ₹2.69 lakh crore"],
  ['<a href="https://www.etvbharat.com/en/bharat/india-conducts-successful-flight-trial-of-advanced-agni-missile-enn26050903923">etvbharat.com</a>',"Advanced Agni MIRV test, 8 May 2026, Dr APJ Abdul Kalam Island"],
  ['<a href="https://www.newsonair.gov.in/india-successfully-tests-advanced-agni-missile-with-mirv-capability-from-odisha/">newsonair.gov.in</a>',"Advanced Agni with MIRV tested from Odisha"],
  ['<a href="https://keralakaumudi.com/en/news/news-amp.php?id=1744718">keralakaumudi.com</a>',"Several payloads to different targets"],
  ['<a href="https://newsonair.gov.in/india-hosts-pragati-2026-exercise-with-12-friendly-nations-participating/">newsonair.gov.in</a>',"India hosts PRAGATI 2026 with 12 friendly nations"],
  ['<a href="https://www.etvbharat.com/amp/en/bharat/multilateral-military-exercise-pragati-concludes-with-72-hour-validation-drill-enn26053006579">etvbharat.com</a>',"PRAGATI concludes with a 72-hour validation drill"],
  ['<a href="https://www.aviation-defence-universe.com/multilateral-exercise-pragati-2026-commences-at-umroi-meghalaya/">aviation-defence-universe.com</a>',"PRAGATI 2026 begins at Umroi, Meghalaya"],
  ['<a href="https://www.thestatesman.com/sports/rcb-vs-gt-live-score-ipl-2026-final-updates-royal-challengers-bengaluru-vs-gujarat-titans-ahmedabad-1503600354.html">thestatesman.com</a>',"RCB beat GT for back-to-back IPL titles"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/royal-challengers-bengaluru-win-ipl-2026/print_manually">drishtiias.com</a>',"RCB win IPL 2026 (31 May, Ahmedabad)"],
  ['<a href="https://currentaffairs.adda247.com/rcb-win-ipl-2026-final-by-5-wickets-defend-title-against-gujarat-titans/">adda247.com</a>',"Won by 5 wickets"],
  ['<a href="https://www.freemalaysiatoday.com/category/highlight/2026/05/04/china-win-12th-thomas-cup-title-after-beating-france">freemalaysiatoday.com</a>',"China beat France for a 12th Thomas Cup"],
  ['<a href="https://badmintonasia.org/2026/05/03/thomas-cup-2026-china-close-in-on-12th-title-as-france-rewrite-history-in-horsens/">badmintonasia.org</a>',"Horsens; France beat India 3-0 in the semi-final"],
  ['<a href="https://www.badmintonplanet.com/?p=26049">badmintonplanet.com</a>',"Korea beat China 3-1 in the Uber Cup final"],
  ['<a href="https://www.issf-sports.org/news/5074">issf-sports.org</a>',"Suruchi Inder Singh gold, Esha Singh silver, 10m air pistol, Munich (29 May 2026)"],
  ['<a href="https://www.tribuneindia.com/news/sports/india-dominates-womens-10m-air-pistol-at-issf-world-cup-2026-as-suruchi-wins-gold-esha-takes-silver/">tribuneindia.com</a>',"Suruchi gold, Esha silver"],
  ['<a href="https://newsonair.gov.in/president-murmu-presents-padma-awards-2026-late-dharmendra-violin-maestro-n-rajam-conferred-with-padma-vibhushan/">newsonair.gov.in</a>',"Padma Awards presented 25 May 2026; Dharmendra and N. Rajam get Padma Vibhushan"],
  ['<a href="https://www.etvbharat.com/amp/en/bharat/president-murmu-to-confer-66-padma-awards-on-monday-enn26052404227">etvbharat.com</a>',"66 awards: 2 PV, 6 PB, 58 PS; 131 in all for 2026"],
  ['<a href="https://www.thestatesman.com/india/president-murmu-confers-padma-awards-on-66-luminaries-hema-malini-receives-dharmendras-posthumous-padma-vibhushan-1503598115.html">thestatesman.com</a>',"Hema Malini receives Dharmendra's posthumous Padma Vibhushan"],
  ['<a href="https://www.npr.org/2026/05/19/nx-s1-5823677/2026-booker-prize-winner-taiwan-travelogue">npr.org</a>',"Taiwan Travelogue wins the International Booker (19 May 2026); first from Mandarin"],
  ['<a href="https://www.thebookseller.com/news/taiwan-travelogue-by-yang-shuang-zi-wins-international-booker-prize-2026">thebookseller.com</a>',"Yáng Shuāng-zǐ and translator Lin King"],
  ['<a href="https://scroll.in/article/1092965/taiwan-travelogue-by-yang-shuang-zi-translated-by-lin-king-wins-2026-international-booker-prize">scroll.in</a>',"Winner and translator"],
  ['<a href="https://www.theweek.in/news/india/2026/05/17/pm-modis-31st-international-honour-sweden-confers-the-royal-order-of-the-polar-star.amp.html">theweek.in</a>',"Royal Order of the Polar Star for PM Modi, 31st international honour (17 May 2026)"],
  ['<a href="https://www.businesstoday.in/amp/india/story/sweden-confers-prestigious-polar-star-honour-on-pm-modi-his-31st-global-award-531887-2026-05-17">businesstoday.in</a>',"Commander Grand Cross; presented in Gothenburg by Crown Princess Victoria"],
  ['<a href="https://www.dailypioneer.com/news/general-ns-raja-subramani-takes-charge-as-india---s-third-chief-of-defence-staff">dailypioneer.com</a>',"Gen N. S. Raja Subramani takes charge as third CDS"],
  ['<a href="https://www.thestatesman.com/india/general-ns-raja-subramani-takes-charge-as-chief-of-defence-staff-cds-taking-over-from-general-anil-chauhan-1503600211.html">thestatesman.com</a>',"Takes over from Gen Anil Chauhan; former Military Adviser, NSCS"],
  ['<a href="https://www.manoramayearbook.in/current-affairs/india/2026/06/01/gen-raja-subramani-chief-of-defence-staff.html">manoramayearbook.in</a>',"New CDS from 31 May 2026"],
  ['<a href="https://newsonair.gov.in/admiral-krishna-swaminathan-assumes-charge-as-27th-chief-of-the-naval-staff/">newsonair.gov.in</a>',"Adm Krishna Swaminathan assumes charge as 27th CNS (31 May 2026)"],
  ['<a href="https://www.thestatesman.com/india/vice-admiral-krishna-swaminathan-to-succeed-admiral-dinesh-kumar-tripathi-as-indias-next-navy-chief-1503591635.html">thestatesman.com</a>',"Succeeds Adm Dinesh Kumar Tripathi; was FOC-in-C Western Naval Command"],
  ['<a href="https://thedailyguardian.com/india/defence-secretary-given-additional-charge-of-drdo-chairman20260529215901-701052/">thedailyguardian.com</a>',"Defence Secretary given additional charge of DRDO (ACC order, 29 May 2026)"],
  ['<a href="https://www.indiandefensenews.in/2026/05/defence-secretary-rajesh-kumar-singh.html">indiandefensenews.in</a>',"Rajesh Kumar Singh as DRDO Chairman after Samir V. Kamat"],
  ['<a href="https://investmentguruindia.com/newsdetail/ashok-kumar-lahiri-takes-charge-as-niti-aayog-vice-chairman386196">investmentguruindia.com (IANS, 8 May 2026)</a>',"Ashok Kumar Lahiri takes charge as NITI Aayog Vice Chairman"],
  ['<a href="https://www.niti.gov.in/sites/default/files/2026-04/Revised-Composition-of-the-National-Institution-for-Transforming-India-NITI-Aayog-24-04-26.pdf">niti.gov.in (notification of 24 Apr 2026)</a>',"Appointment from the date he assumes charge"],
  ['<a href="https://ianslive.in/cabinet-okays-increase-in-msp-for-14-kharif-crops--20260513155103">ianslive.in</a>',"Cabinet raises MSP for 14 kharif crops (13 May 2026)"],
  ['<a href="https://swarajyamag.com/amp/story/economy/pm-modi-led-cabinet-approves-higher-msp-for-14-kharif-crops-for-2026-27-marketing-season">swarajyamag.com</a>',"Paddy ₹2,441 (+₹72); sunflower seed +₹622; at least 50% over cost"],
  ['<a href="https://www.thestatesman.com/india/union-cabinet-approves-increase-in-msp-for-14-kharif-crops-1503593495.html">thestatesman.com</a>',"MSP increase for 14 kharif crops"],
  ['<a href="https://www.thestatesman.com/entertainment/the-voice-that-lingered-like-a-melody-india-bids-a-tearful-farewell-to-suman-kalyanpur-1503600770.html">thestatesman.com</a>',"Suman Kalyanpur died 31 May 2026, aged 89; Padma Bhushan"],
  ['<a href="https://wionews.com/entertainment/bollywood/veteran-singer-suman-kalyanpur-dies-at-89-tributes-pour-in-1780281408313">wionews.com</a>',"Died at her Mumbai home; last rites with state honours"],
  ['<a href="https://newsonair.gov.in/famous-urdu-poet-bashir-badr-passes-away-in-bhopal/">newsonair.gov.in</a>',"Bashir Badr died in Bhopal (28 May 2026)"],
  ['<a href="https://wionews.com/entertainment/legendary-urdu-poet-bashir-badr-passes-away-at-91-at-bhopal-residence-1779970296312">wionews.com</a>',"Aged 91; Padma Shri and Sahitya Akademi (1999)"]
];

LESSONS.push(
{id:"CA5", title:"May 2026", hi:"मई 2026", blocks:[
  {k:"hot", h:"Most likely to be asked: the <b>4 May results</b> and the <b>new Chief Ministers</b> (Suvendu Adhikari, Vijay, V. D. Satheesan, Himanta Biswa Sarma, N. Rangasamy), the <b>new CDS and Navy chief</b> (31 May), the <b>India–Nordic Summit</b> in Oslo, the <b>Supreme Court strength of 37</b>, the <b>RBI's record surplus</b>, the <b>Agni MIRV test</b>, <b>RCB's</b> second IPL title, and the <b>Padma investiture</b> of 25 May."},
  {k:"story", h:"<p>May 2026 was the month of results. Counting on <b>4 May</b> changed three of the five governments: the <b>BJP</b> won <b>West Bengal</b> for the first time and <b>Suvendu Adhikari</b> took oath on <b>9 May</b>; actor <b>Vijay</b>'s new party <b>TVK</b> came first in <b>Tamil Nadu</b> and he became CM on <b>10 May</b>; and the <b>UDF</b> returned in <b>Kerala</b> under <b>V. D. Satheesan</b> (18 May). <b>Himanta Biswa Sarma</b> (Assam, 12 May) and <b>N. Rangasamy</b> (Puducherry, 13 May) stayed on.</p><p>The President raised the <b>Supreme Court</b>'s strength to <b>37 judges plus the CJI</b> by ordinance, and <b>Assam</b> became the <b>third state</b> to pass a UCC Bill. PM Modi toured <b>five countries</b> and attended the <b>3rd India–Nordic Summit</b> in <b>Oslo</b>, while Delhi hosted the <b>BRICS foreign ministers</b>. The RBI sent a record <b>₹2.87 lakh crore</b> to the government, DRDO tested an <b>Agni with MIRV</b>, and on <b>31 May</b> both a new <b>CDS</b> and a new <b>Navy chief</b> took over — the same evening <b>RCB</b> won the IPL again.</p>", key:"4 May results: BJP Bengal, TVK Tamil Nadu, UDF Kerala; SC 33→37 (16 May); Oslo summit (19 May); RBI ₹2.87 lakh cr; 31 May — CDS Raja Subramani, CNS Swaminathan, RCB."},
  {k:"table", title:"National — government decisions, schemes, laws", head:["Item","Fact","Note"], rows: CA5_NAT},
  {k:"table", title:"International — summits, agreements, elections abroad", head:["Item","Fact","Note"], rows: CA5_INT},
  {k:"table", title:"Economy and banking", head:["Item","Fact","Note"], rows: CA5_ECO},
  {k:"table", title:"Science, space and defence", head:["Item","Fact","Note"], rows: CA5_SCI},
  {k:"table", title:"Sports", head:["Item","Fact","Note"], rows: CA5_SPO},
  {k:"table", title:"Awards and honours", head:["Item","Fact","Note"], rows: CA5_AWD},
  {k:"table", title:"Appointments", head:["Item","Fact","Note"], rows: CA5_APP},
  {k:"table", title:"Places and persons in news", head:["Item","Fact","Note"], rows: CA5_PLC},
  {k:"table", title:"Obituaries", head:["Item","Fact","Note"], rows: CA5_OBI},
  {k:"trick", h:"Oath dates in order — <b>“9, 10, 12, 13, 18”</b>: <b>9</b> Bengal (Suvendu), <b>10</b> Tamil Nadu (Vijay), <b>12</b> Assam (Himanta), <b>13</b> Puducherry (Rangasamy), <b>18</b> Kerala (Satheesan). Kerala took longest because the Congress needed ten days to pick its leader."},
  {k:"trick", h:"<b>31 May 2026</b> is a triple date: <b>Raja Subramani</b> becomes the <b>3rd CDS</b>, <b>Krishna Swaminathan</b> the <b>27th Navy chief</b>, and <b>RCB</b> win the IPL final in Ahmedabad."},
  {k:"trap", h:"<b>Supreme Court strength</b>: <b>37</b> is the number of judges <b>besides</b> the Chief Justice — <b>38</b> in all. Before the ordinance it was 33 + CJI = 34."},
  {k:"trap", h:"<b>UCC order</b>: <b>Uttarakhand</b> first, <b>Gujarat</b> second, <b>Assam</b> third (27 May 2026) — and Assam's law leaves out the Scheduled Tribes."},
  {k:"trap", h:"<b>Two Nordic partnerships</b>: the <b>whole Nordic group</b> got a <b>Green Technology and Innovation Strategic Partnership</b> at the Oslo summit, while <b>Norway alone</b> got a <b>Green Strategic Partnership</b>. And the Polar Star was given in <b>Gothenburg</b>, not Stockholm."},
  {k:"table", title:"Sources (checked 24 Oct 2026)", head:["Source","What it confirmed"], rows: CA5_SRC}
], sum:[
  "Results 4 May 2026: BJP 207 (208 after Falta) in West Bengal; TVK 108 in Tamil Nadu; UDF in Kerala; NDA 102 of 126 in Assam; NDA 18 of 30 in Puducherry.",
  "New CMs: Suvendu Adhikari (WB, 9 May, first BJP CM), C. Joseph Vijay (TN, 10 May), V. D. Satheesan (Kerala, 18 May); Himanta Biswa Sarma second term (12 May); N. Rangasamy fifth term (13 May).",
  "Mamata Banerjee lost Bhabanipur to Suvendu Adhikari; Falta re-poll on 21 May won by BJP's Debangshu Panda.",
  "Ordinance of 16 May 2026: Supreme Court judges 33 → 37 besides the CJI.",
  "Assam UCC Bill passed 27 May 2026 — third state after Uttarakhand and Gujarat.",
  "PM's tour 15–20 May: UAE, Netherlands, Sweden, Norway, Italy. 3rd India–Nordic Summit, Oslo, 19 May — Green Technology and Innovation Strategic Partnership.",
  "BRICS Foreign Ministers' Meeting, New Delhi, 14–15 May (India chairs BRICS in 2026).",
  "RBI surplus for 2025-26: record ₹2.87 lakh crore (board meeting 22 May).",
  "Advanced Agni with MIRV tested 8 May from Dr APJ Abdul Kalam Island; first PRAGATI exercise at Umroi, Meghalaya.",
  "31 May: Gen N. S. Raja Subramani 3rd CDS; Adm Krishna Swaminathan 27th Navy chief. Rajesh Kumar Singh holds DRDO charge.",
  "IPL 2026: RCB beat GT by 5 wickets (31 May, Ahmedabad). Thomas Cup — China; Uber Cup — South Korea; India bronze.",
  "Padma investiture I (25 May): 66 awards; Padma Vibhushan to Dharmendra (posthumous) and N. Rajam.",
  "International Booker 2026: Taiwan Travelogue (Yáng Shuāng-zǐ, tr. Lin King). PM Modi: Sweden's Royal Order of the Polar Star.",
  "Kharif MSP 2026-27 (13 May): common paddy ₹2,441 a quintal.",
  "Died: Bashir Badr, Urdu poet (28 May, Bhopal); Suman Kalyanpur, playback singer (31 May, Mumbai)."
]}
);

QB.push(
["CA5","Who became the first BJP Chief Minister of West Bengal in May 2026?",["Suvendu Adhikari","Dilip Ghosh","Samik Bhattacharya","Agnimitra Paul"],"Suvendu Adhikari took oath on 9 May 2026 at the Brigade Parade Ground, Kolkata; Dilip Ghosh and Agnimitra Paul were sworn in as ministers.",""],
["CA5","Suvendu Adhikari was sworn in as Chief Minister of West Bengal on:",["9 May 2026","4 May 2026","12 May 2026","18 May 2026"],"The oath was on 9 May 2026, Pochishe Boishakh; 4 May was counting day.",""],
["CA5","In the 2026 West Bengal election, from which seat did Mamata Banerjee lose to Suvendu Adhikari?",["Bhabanipur","Nandigram","Falta","Singur"],"Adhikari beat her in Bhabanipur by about 15,000 votes; he also won Nandigram.",""],
["CA5","Which party won the most seats in the 2026 Tamil Nadu Assembly election?",["Tamilaga Vettri Kazhagam (TVK)","DMK","AIADMK","Indian National Congress"],"Vijay's TVK won 108 of 234 seats in its first election and formed the government with outside support.",""],
["CA5","C. Joseph Vijay was sworn in as Chief Minister of Tamil Nadu on:",["10 May 2026","4 May 2026","13 May 2026","23 April 2026"],"He took oath on 10 May 2026 in Chennai; 23 April was polling day in Tamil Nadu.",""],
["CA5","Who became Chief Minister of Kerala on 18 May 2026?",["V. D. Satheesan","Pinarayi Vijayan","Ramesh Chennithala","K. Sudhakaran"],"V. D. Satheesan of the Congress led the UDF back to power after ten years of LDF rule.",""],
["CA5","Which alliance won the 2026 Kerala Assembly election?",["United Democratic Front (UDF)","Left Democratic Front (LDF)","National Democratic Alliance (NDA)","TVK-led front"],"The Congress-led UDF defeated the ruling LDF; V. D. Satheesan became Chief Minister.",""],
["CA5","Himanta Biswa Sarma took oath for a second consecutive term as Chief Minister of Assam on:",["12 May 2026","9 May 2026","10 May 2026","18 May 2026"],"He was sworn in on 12 May 2026 in Guwahati after the NDA won 102 of 126 seats.",""],
["CA5","How many of Assam's 126 assembly seats did the NDA win in 2026?",["102","82","118","64"],"The NDA won 102 — BJP 82, AGP 10 and BPF 10.",""],
["CA5","N. Rangasamy, sworn in on 13 May 2026, became Chief Minister of Puducherry for which time?",["Fifth","Third","Fourth","Second"],"It was a record fifth term; the AINRC-led NDA won 18 of the 30 elected seats.",""],
["CA5","By the ordinance of 16 May 2026, the sanctioned strength of Supreme Court judges, besides the Chief Justice, was raised to:",["37","34","33","38"],"It went from 33 to 37 besides the CJI, so the court can have 38 judges in all.",""],
["CA5","In May 2026, Assam became which state to pass a Uniform Civil Code Bill?",["Third","First","Second","Fourth"],"Assam followed Uttarakhand and Gujarat when its Assembly passed the Bill on 27 May 2026.",""],
["CA5","Which group is kept out of Assam's Uniform Civil Code Bill passed in May 2026?",["Scheduled Tribes","Scheduled Castes","Government employees","Residents of Guwahati"],"The Bill does not apply to members of the Scheduled Tribes living in Assam.",""],
["CA5","Where was the 3rd India–Nordic Summit held on 19 May 2026?",["Oslo","Stockholm","Copenhagen","Helsinki"],"Oslo hosted it; the first two summits were in Stockholm (2018) and Copenhagen (2022).",""],
["CA5","At the 3rd India–Nordic Summit (May 2026), India–Nordic ties were raised to a:",["Green Technology and Innovation Strategic Partnership","Comprehensive Strategic Partnership","Special and Privileged Strategic Partnership","Blue Economy Partnership"],"The leaders of the five Nordic countries and India agreed to the green technology and innovation partnership.",""],
["CA5","Which of these countries was NOT part of PM Modi's five-nation tour of 15–20 May 2026?",["Germany","Netherlands","Sweden","Italy"],"The tour covered the UAE, the Netherlands, Sweden, Norway and Italy.",""],
["CA5","Which Swedish honour was conferred on PM Modi on 17 May 2026?",["Royal Order of the Polar Star","Order of the Seraphim","Order of Vasa","Order of the Sword"],"Crown Princess Victoria presented the Commander Grand Cross of the Royal Order of the Polar Star in Gothenburg.",""],
["CA5","The BRICS Foreign Ministers' Meeting of 14–15 May 2026 was held in:",["New Delhi","Rio de Janeiro","Moscow","Johannesburg"],"India holds the BRICS chair in 2026, and S. Jaishankar chaired the meeting in New Delhi.",""],
["CA5","The RBI's record surplus transfer to the Centre for 2025-26, approved on 22 May 2026, was about:",["₹2.87 lakh crore","₹2.11 lakh crore","₹2.69 lakh crore","₹1.76 lakh crore"],"The board approved ₹2,86,588 crore, beating the previous year's record of ₹2.69 lakh crore.",""],
["CA5","From where was the Advanced Agni missile with MIRV technology flight-tested on 8 May 2026?",["Dr APJ Abdul Kalam Island, Odisha","Sriharikota, Andhra Pradesh","Pokhran, Rajasthan","Chandipur, Odisha"],"It was launched from Dr APJ Abdul Kalam Island off the Odisha coast and hit several targets in the Indian Ocean Region.",""],
["CA5","In missile technology, what does MIRV stand for?",["Multiple Independently targetable Re-entry Vehicle","Medium Intercontinental Range Vehicle","Multi-stage Inertial Rocket Vehicle","Missile with Integrated Radar Vision"],"A MIRV missile carries several warheads that can each be sent to a different target.",""],
["CA5","The first edition of the multilateral army exercise PRAGATI was held in May 2026 at:",["Umroi, Meghalaya","Pune, Maharashtra","Mahajan, Rajasthan","Gurumsaray, Uzbekistan"],"Umroi Military Station hosted India and 12 friendly nations for counter-terrorism training.",""],
["CA5","Who took charge as India's third Chief of Defence Staff on 31 May 2026?",["General N. S. Raja Subramani","General Anil Chauhan","General Upendra Dwivedi","General Manoj Pande"],"Gen Raja Subramani succeeded Gen Anil Chauhan; Gen Bipin Rawat was the first CDS.",""],
["CA5","Who became the 27th Chief of the Naval Staff on 31 May 2026?",["Admiral Krishna Swaminathan","Admiral Dinesh K. Tripathi","Admiral R. Hari Kumar","Vice Admiral Sanjay J. Singh"],"Admiral Krishna Swaminathan, earlier the Western Naval Command chief, took over from Admiral Dinesh K. Tripathi.",""],
["CA5","In May 2026, additional charge of DRDO Chairman was given to:",["Defence Secretary Rajesh Kumar Singh","National Security Adviser Ajit Doval","Chief of Defence Staff N. S. Raja Subramani","Former ISRO chief S. Somanath"],"Rajesh Kumar Singh took the charge after Samir V. Kamat's tenure ended, by an ACC order of 29 May 2026.",""],
["CA5","Which team won IPL 2026, beating Gujarat Titans in the final on 31 May 2026?",["Royal Challengers Bengaluru","Mumbai Indians","Chennai Super Kings","Punjab Kings"],"RCB won by 5 wickets at Ahmedabad to retain the title they first won in 2025.",""],
["CA5","Where was the IPL 2026 final played?",["Narendra Modi Stadium, Ahmedabad","M. Chinnaswamy Stadium, Bengaluru","Eden Gardens, Kolkata","Wankhede Stadium, Mumbai"],"The final was moved from Bengaluru to Ahmedabad and played there on 31 May 2026.",""],
["CA5","Which country won the Thomas Cup 2026 at Horsens, Denmark?",["China","France","Denmark","Indonesia"],"China beat France 3-1 for their 12th Thomas Cup; India took bronze.",""],
["CA5","Which country won the Uber Cup 2026?",["South Korea","China","Japan","India"],"South Korea beat China 3-1 in the final at Horsens.",""],
["CA5","Who won the women's 10m air pistol gold at the ISSF World Cup in Munich on 29 May 2026?",["Suruchi Inder Singh","Manu Bhaker","Esha Singh","Rhythm Sangwan"],"Suruchi Inder Singh won gold and Esha Singh silver, an Indian one-two.",""],
["CA5","At the Padma investiture of 25 May 2026, who received the Padma Vibhushan on behalf of the late actor Dharmendra?",["Hema Malini","Sunny Deol","Esha Deol","Bobby Deol"],"Hema Malini, his wife, received the posthumous award from President Droupadi Murmu.",""],
["CA5","Violinist N. Rajam received which Padma award on 25 May 2026?",["Padma Vibhushan","Padma Bhushan","Padma Shri","Bharat Ratna"],"She and Dharmendra were the two Padma Vibhushan awardees at the first ceremony.",""],
["CA5","Which book won the International Booker Prize 2026?",["Taiwan Travelogue","Heart Lamp","Tomb of Sand","Kairos"],"Taiwan Travelogue by Yáng Shuāng-zǐ, translated by Lin King, won on 19 May 2026; Heart Lamp won in 2025.",""],
["CA5","Under the kharif MSP approved on 13 May 2026, the MSP of common paddy for 2026-27 is:",["₹2,441 a quintal","₹2,369 a quintal","₹2,183 a quintal","₹2,610 a quintal"],"The Cabinet raised it by ₹72 to ₹2,441; ₹2,610 is the wheat MSP for 2027-28.",""],
["CA5","Suman Kalyanpur, who died in Mumbai on 31 May 2026, was a famous:",["Playback singer","Kathak dancer","Film director","Tabla player"],"The Padma Bhushan singer was 89 and was known for her duets with Mohammed Rafi.",""],
["CA5","Bashir Badr, who died in Bhopal on 28 May 2026, was a noted:",["Urdu poet","Hindustani classical singer","Film director","Hockey player"],"The Urdu poet was 91 and had received the Padma Shri and the Sahitya Akademi Award in 1999.",""]
);

LASTMOMENT.push(
{t:"May 2026", era:["ca"], rows:[["WB CM (9 May)","Suvendu Adhikari — first BJP CM"],["TN CM (10 May)","C. Joseph Vijay (TVK)"],["Kerala CM (18 May)","V. D. Satheesan (UDF)"],["Assam · Puducherry","Himanta (2nd term) · Rangasamy (5th term)"],["SC judges","37 + CJI (ordinance 16 May)"],["UCC","Assam 3rd state (27 May)"],["India–Nordic","Oslo, 19 May"],["RBI surplus","₹2.87 lakh crore"],["CDS · CNS (31 May)","Raja Subramani · Krishna Swaminathan"],["IPL 2026","RCB (beat GT)"],["Died","Bashir Badr · Suman Kalyanpur"]]}
);
TILES.push(["37","Supreme Court judges besides the CJI — ordinance of 16 May 2026","ca"],["207","BJP seats in West Bengal, 4 May 2026","ca"],["₹2.87 lakh cr","RBI surplus to the Centre for 2025-26","ca"],["3rd","CDS — Gen N. S. Raja Subramani (31 May 2026)","ca"],["27th","Navy chief — Adm Krishna Swaminathan (31 May 2026)","ca"]);
