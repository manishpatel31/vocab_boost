/* Current Affairs 2026 · July 2026 (lesson CA7). Self-contained: its tables, lesson, questions, last-moment card and tiles.
   Every fact was checked on 24 Oct 2026 against the sources in the lesson's last table; nothing unconfirmed is kept.
   Table rows are [item, fact, note]. Names start with CA7_ so other month files never clash with them. */
const CA7_NAT = [
  ["Semicon India Mission 2.0","Approved by the Cabinet on 15 Jul 2026: about ₹1.27 lakh crore","The second phase of the India Semiconductor Mission (the first had ₹76,000 crore); it covers chip design, fabs, packaging, equipment and materials."],
  ["National Investment Policy for Urea-2026 (NIPU-2026)","Approved by the Cabinet Committee on Economic Affairs on 15 Jul 2026","For 8–9 new gas-based urea plants; it takes the place of the 2012 investment policy (NIP-2012)."],
  ["India's first hydrogen train","Flagged off by PM Modi at Jind (Haryana) on 17 Jul 2026","Runs Jind–Sonipat, about 89 km; fuel cells turn hydrogen into electricity and leave only water vapour."],
  ["Monsoon Session of Parliament","Began on 20 Jul 2026","It ran until 13 Aug 2026."],
  ["Dharmendra Pradhan resigns","Quit as Union Education Minister on 25 Jul 2026 over the NEET-UG paper leak","The President accepted it under Article 75(2); Pralhad Joshi was given additional charge of Education."],
  ["Anti-paper-leak law tightened","Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026: Lok Sabha 29 Jul, Rajya Sabha 30 Jul","Amends the 2024 Act: higher penalties for cheating in public exams, a special task force and fast-track courts."],
  ["BHAVYA Rasayan","Cabinet, 24 Jul 2026: ₹3,030 crore for three chemical parks","Bharat Audyogik Vikas Yojana – Rasayan; states compete for the parks (challenge route); 2026-27 to 2030-31."],
  ["PM-KISAN extended","Cabinet, 31 Jul 2026: continued to 2030-31 with about ₹3.15 lakh crore","Farmer families still get ₹6,000 a year in three instalments of ₹2,000."],
  ["Khelo India revamped","Cabinet, 31 Jul 2026: ₹36,441 crore for 2026-27 to 2030-31","Includes more help to the National Sports Federations."],
  ["PM Surya Sarovar Yojana (PM-SSY)","Cabinet, 31 Jul 2026: ₹5,070 crore for floating solar","Target: 5,000 MW of solar panels floating on reservoirs and ponds, with 10,000 MWh of storage."]
];
const CA7_INT = [
  ["NATO Summit 2026","Ankara (Türkiye), 7–8 Jul 2026","The 32 allies adopted the Ankara Summit Declaration; Türkiye's second NATO summit after Istanbul (2004)."],
  ["PM Modi in Indonesia","State visit, 6–8 Jul 2026; talks with President Prabowo Subianto in Jakarta on 7 Jul","14 agreements were signed; the leaders welcomed cooperation on the BrahMos missile."],
  ["3rd India–Australia Annual Summit","Melbourne, during PM Modi's visit of 8–10 Jul 2026","With PM Anthony Albanese; a uranium-export arrangement was finalised and a Sports Collaboration Roadmap launched at the MCG."],
  ["PM Modi in New Zealand","Auckland, 10–11 Jul 2026 — the first official visit by an Indian PM in about 40 years","Ties with Christopher Luxon's New Zealand were raised to a Strategic Partnership."],
  ["48th World Heritage Committee","Busan (South Korea), July 2026","Sarnath was added to the World Heritage List here on 25 Jul 2026."]
];
const CA7_ECO = [
  ["Mobile Phone Manufacturing Scheme (MPMS)","Cabinet, 15 Jul 2026: ₹62,500 crore for 2026-27 to 2030-31","Incentives of 2.25–5% on eligible sales, plus 3% for design and R&D by Indian brands."],
  ["Cabinet package of 15 Jul 2026","Seven decisions worth about ₹2.19 lakh crore","Semicon 2.0, the mobile phone scheme, the urea policy, two elevated roads in Varanasi and two rail projects."],
  ["Samudra Manthan","Cabinet, 31 Jul 2026: ₹84,084 crore National Offshore Exploration Scheme","Petroleum Ministry; seismic surveys and deep- and ultra-deepwater drilling, up to 2030-31."],
  ["IMF World Economic Outlook Update (July 2026)","India's growth for 2026 (FY 2026-27) cut to 6.4%, from 6.5%","Blamed on higher energy prices; the forecast for 2027 was raised to 6.7%."]
];
const CA7_SCI = [
  ["Vikram-1 (Skyroot Aerospace)","Reached orbit from Sriharikota on 18 Jul 2026 — India's first private orbital rocket","On its first attempt it reached an orbit of about 450 km and released payloads, including Skyroot's own SCOPE satellite."],
  ["INS Mahendragiri","Commissioned at Visakhapatnam on 11 Jul 2026 by Rajnath Singh","The sixth Project 17A (Nilgiri-class) stealth frigate; built by Mazagon Dock; joins the Eastern Fleet."],
  ["INS Malvan","Commissioned at Karwar on 22 Jul 2026","The second Mahe-class anti-submarine warfare shallow water craft; built by Cochin Shipyard."],
  ["Kusha long-range surface-to-air missile","First flight test by DRDO on 23 Jul 2026","Fired from Dr APJ Abdul Kalam Island off Odisha; it intercepted an electronic target that copied a fast, high-flying threat."]
];
const CA7_SPO = [
  ["FIFA World Cup 2026 final","Spain beat Argentina 1-0 after extra time on 19 Jul 2026","Ferran Torres scored in the 106th minute at MetLife Stadium (New Jersey); Spain's second title, after 2010."],
  ["Wimbledon 2026 — men's singles","Jannik Sinner beat Alexander Zverev on 12 Jul 2026","Sinner's second Wimbledon title in a row."],
  ["Wimbledon 2026 — women's singles","Linda Noskova beat Karolina Muchova on 11 Jul 2026","An all-Czech final; Noskova's first Grand Slam title."],
  ["ICC Women's T20 World Cup 2026","Australia beat England by 7 wickets at Lord's on 5 Jul 2026","Australia's record seventh title; Beth Mooney top-scored with 64."],
  ["Tour de France 2026","Tadej Pogačar won; the race ended in Paris on 26 Jul 2026","His fifth Tour title — level with Merckx, Hinault, Indurain and Anquetil."],
  ["Commonwealth Games 2026 opening","Glasgow, 23 Jul 2026 — Mirabai Chanu carried India's flag","Lovlina Borgohain carried the King's Baton; the Games ran to 2 Aug."],
  ["Mirabai Chanu","Women's 48 kg weightlifting gold at Glasgow, 26 Jul 2026","India's first gold of the Games and her third Commonwealth gold in a row (2018, 2022, 2026)."],
  ["Commonwealth Games javelin","31 Jul 2026: gold Rumesh Tharanga Pathirage (Sri Lanka), silver Neeraj Chopra, bronze Yashvir Singh","Pathirage threw 89.75 m; Neeraj 85.83 m."]
];
const CA7_AWD = [
  ["Bintang Republik Indonesia Adipurna","Indonesia's highest state honour, given to PM Modi in Jakarta on 7 Jul 2026","Pinned on by President Prabowo Subianto at the Merdeka Palace."],
  ["FIFA World Cup 2026 Golden Ball (best player)","Rodri (Spain)","Lionel Messi was second and Kylian Mbappé third."],
  ["FIFA World Cup 2026 Golden Boot (top scorer)","Kylian Mbappé (France), 10 goals","The first player to win the Golden Boot twice (also 2022)."],
  ["FIFA World Cup 2026 Golden Glove (best goalkeeper)","Unai Simón (Spain)","Spain's Pau Cubarsí was named Best Young Player."]
];
const CA7_APP = [
  ["Prime Minister of the United Kingdom","Andy Burnham — took office on 20 Jul 2026","Keir Starmer resigned the same day; Burnham, a former Mayor of Greater Manchester, became Labour leader unopposed."],
  ["CEO, NITI Aayog","Anurag Jain — ACC notification of 22 Jul 2026","A 1989-batch IAS officer (Madhya Pradesh cadre), earlier Chief Secretary of Madhya Pradesh; for two years."],
  ["Union Education Minister (additional charge)","Pralhad Joshi, from 25 Jul 2026","After Dharmendra Pradhan's resignation; Joshi kept his Food and Consumer Affairs portfolio."],
  ["Foreign Secretary","Vikram Misri's term extended by one year, to 14 Jul 2027 (ACC, 1 Jul 2026)","He had been due to retire on 14 Jul 2026; Foreign Secretary since 15 Jul 2024."]
];
const CA7_PLC = [
  ["Sarnath (Uttar Pradesh)","Became India's 45th UNESCO World Heritage Site on 25 Jul 2026","Where the Buddha gave his first sermon; the listing covers the Chaukhandi Stupa and the remains around the Dhamek Stupa."],
  ["Jind (Haryana)","India's first hydrogen train started here on 17 Jul 2026","Do not mix it up with the LNG train (Sabarmati, Gujarat, September 2026)."],
  ["Ankara","Capital of Türkiye — hosted the NATO Summit, 7–8 Jul 2026","Gave its name to the Ankara Summit Declaration."],
  ["MetLife Stadium, New Jersey (USA)","Hosted the FIFA World Cup final on 19 Jul 2026","The 2026 World Cup was shared by the USA, Canada and Mexico."],
  ["Glasgow (Scotland)","Hosted the Commonwealth Games, 23 Jul – 2 Aug 2026","The opening ceremony at the OVO Hydro was the first to be held fully indoors."],
  ["Karwar (Karnataka)","INS Malvan was commissioned here on 22 Jul 2026","Malvan itself is a coastal town in Maharashtra."],
  ["Dr APJ Abdul Kalam Island (Odisha)","The Kusha missile was first flight-tested here on 23 Jul 2026","Formerly Wheeler Island."]
];
const CA7_OBI = [
  ["Sam Neill","Actor, best known as Dr Alan Grant in Jurassic Park; died in Sydney on 13 Jul 2026, aged 78","A New Zealand actor; his family called the death sudden and unexpected."],
  ["K. Jamuna Rani","Veteran playback singer; died in Bengaluru on 30 Jul 2026, aged 88","Sang over 6,000 songs in Tamil, Telugu and other languages; began as a child in the Telugu film Tyagayya (1946)."]
];
const CA7_SRC = [
  ['<a href="https://theprint.in/economy/cabinet-approves-rs-1-27-lakh-crore-for-semicon-mission-2-0/2987130/">theprint.in</a>',"Semicon 2.0 approved, ₹1.27 lakh crore (15 Jul 2026)"],
  ['<a href="https://deccanherald.com/india/union-cabinet-approves-semicon-20-with-rs-127-lakh-crore-outlay-4075070">deccanherald.com</a>',"Semicon 2.0 outlay; ISM 1.0 had ₹76,000 crore"],
  ['<a href="https://www.pmindia.gov.in/?p=16883001">pmindia.gov.in</a>',"Mobile Phone Manufacturing Scheme, ₹62,500 crore, FY27–FY31; incentive rates"],
  ['<a href="https://www.governancenow.com/news/regular-story/cabinet-approves-mobile-phone-manufacturing-scheme">governancenow.com</a>',"MPMS approval"],
  ['<a href="https://www.freepressjournal.in/business/cabinet-approves-219-lakh-crore-projects-including-semicon-20-and-mobile-scheme">freepressjournal.in</a>',"15 Jul 2026 package: seven decisions, about ₹2.19 lakh crore"],
  ['<a href="https://www.businesstoday.in/latest/economy/story/cabinet-approves-national-investment-policy-for-urea-2026-to-boost-domestic-production-543124-2026-07-15">businesstoday.in</a>',"NIPU-2026 approved on 15 Jul 2026; 8–9 gas-based plants"],
  ['<a href="https://www.tribuneindia.com/news/business/cabinet-committee-on-economic-affairs-approves-new-urea-investment-policy-to-boost-domestic-production-cut-import-dependence/">tribuneindia.com</a>',"CCEA approval of the urea policy; replaces NIP-2012"],
  ['<a href="https://theprint.in/india/pm-modi-flags-off-indias-first-hydrogen-powered-train-from-haryanas-jind/2988805/">theprint.in</a>',"First hydrogen train flagged off at Jind, 17 Jul 2026"],
  ['<a href="https://www.dtnext.in/news/national/pm-modi-flags-off-indias-first-hydrogen-powered-train-from-haryanas-jind">dtnext.in</a>',"Jind–Sonipat, about 89 km; fuel cells"],
  ['<a href="https://prsindia.org/policy/monthly-policy-review/july-2026">prsindia.org (Monthly Policy Review, July 2026)</a>',"Monsoon Session from 20 Jul 2026; Public Examinations amendment; urea policy; PM-KISAN"],
  ['<a href="https://theprint.in/politics/union-education-minister-dharmendra-pradhan-resigns/2996534/">theprint.in</a>',"Dharmendra Pradhan resigned (25 Jul 2026)"],
  ['<a href="https://www.scconline.com/blog/post/2026/07/25/dharmendra-pradhan-resignation-education-ministry-pralhad-joshi-2026/">scconline.com</a>',"Resignation accepted under Article 75(2); Pralhad Joshi additional charge"],
  ['<a href="https://www.wionews.com/india-news/pralhad-joshi-assigned-education-ministry-charge-president-accepts-pradhan-s-resignation-1784991466273/amp">wionews.com</a>',"Joshi keeps Food and Consumer Affairs"],
  ['<a href="https://www.outlookindia.com/national/lok-sabha-passes-public-examinations-prevention-of-unfair-means-amendment-bill-2026">outlookindia.com</a>',"Lok Sabha passed the Public Examinations Amendment Bill (29 Jul 2026)"],
  ['<a href="https://deccanherald.com/india/bill-to-amend-anti-paper-law-gets-presidents-assent-4095562">deccanherald.com</a>',"Rajya Sabha passed it on Thursday 30 Jul; President's assent"],
  ['<a href="https://www.freepressjournal.in/business/cabinet-approves-3030-crore-bhavya-rasayan-scheme-to-set-up-3-chemical-parks">freepressjournal.in</a>',"BHAVYA Rasayan, ₹3,030 crore, three chemical parks (24 Jul 2026)"],
  ['<a href="https://www.outlookbusiness.com/economy-and-policy/cabinet-clears-3030-crore-bhavya-rasayan-scheme-to-build-three-mega-chemical-parks">outlookbusiness.com</a>',"BHAVYA Rasayan details; challenge route"],
  ['<a href="https://deccanherald.com/india/cabinet-approves-extension-of-pm-kisan-scheme-till-fy31-with-outlay-of-rs-315-lakh-crore-4094567">deccanherald.com</a>',"PM-KISAN to FY31, ₹3,15,614 crore"],
  ['<a href="https://eng.ruralvoice.in/cabinet-approves-pm-kisan-continuation-till-2030-31-rs-3.15-lakh-crore-outlay">ruralvoice.in</a>',"PM-KISAN continuation approved on Friday, 31 Jul 2026"],
  ['<a href="https://www.deccanherald.com/india/cabinet-approves-rs-84084-crore-samudra-manthan-scheme-to-boost-offshore-oil-and-gas-exploration-4094586">deccanherald.com</a>',"Samudra Manthan, ₹84,084 crore"],
  ['<a href="https://ianslive.in/cabinet-okays-samudra-manthan-scheme-with-rs-84084-crore-outlay-to-boost-oil-exploration--20260731162703">ianslive.in</a>',"Samudra Manthan approved on 31 Jul 2026"],
  ['<a href="https://newsonair.gov.in/cabinet-approves-expanded-khelo-india-scheme-to-harness-power-of-sports-for-youth/">newsonair.gov.in</a>',"Khelo India expansion approved, 31 Jul 2026"],
  ['<a href="https://www.scconline.com/blog/post/2026/08/06/cabinet-approves-revamped-khelo-india-scheme/">scconline.com</a>',"Khelo India: ₹36,441 crore, 2026-27 to 2030-31; approved 31 Jul"],
  ['<a href="https://deccanherald.com/india/cabinet-approves-rs-5070-crore-pm-surya-sarovar-scheme-to-boost-floating-solar-projects-4094856">deccanherald.com</a>',"PM Surya Sarovar Yojana, ₹5,070 crore, floating solar"],
  ['<a href="https://www.narendramodi.in/amp/category/news/pm-ssy">narendramodi.in</a>',"PM-SSY approved 31 Jul 2026; 5,000 MW with 10,000 MWh storage"],
  ['<a href="https://foreignpolicy.com/2026/07/08/nato-ankara-summit-declaration-full-text-trump-ukraine-russia/">foreignpolicy.com</a>',"Ankara Summit Declaration (8 Jul 2026)"],
  ['<a href="https://idsa.in/publisher/comments/the-2026-nato-summit-in-ankara-an-analysis">idsa.in</a>',"NATO Summit, Ankara, 7–8 Jul 2026; Türkiye's second after Istanbul 2004"],
  ['<a href="https://newsonair.gov.in/pm-modi-to-undertake-state-visit-to-indonesia-from-july-6-to-8/">newsonair.gov.in</a>',"PM's state visit to Indonesia, 6–8 Jul 2026"],
  ['<a href="https://www.tribuneindia.com/news/india/brahmos-astra-evms-india-indonesia-sign-14-pacts-to-boost-ties-in-defence-cooperation/">tribuneindia.com</a>',"India and Indonesia signed 14 pacts; BrahMos cooperation"],
  ['<a href="https://setkab.go.id/en/president-prabowo-confers-the-bintang-republik-indonesia-adipurna-upon-pm-narendra-modi/">setkab.go.id (Cabinet Secretariat, Indonesia)</a>',"Bintang Republik Indonesia Adipurna to PM Modi, 7 Jul 2026"],
  ['<a href="https://www.thestar.com.my/aseanplus/aseanplus-news/2026/07/07/indonesia-awards-highest-state-honour-to-modi">thestar.com.my (Reuters)</a>',"Indonesia's highest state honour for Modi"],
  ['<a href="https://www.pmindia.gov.in/en/news_updates/pms-visit-to-indonesia-australia-and-new-zealand/">pmindia.gov.in</a>',"Three-nation tour: Indonesia, Australia, New Zealand"],
  ['<a href="https://timesofoman.com//article/174140-indian-pm-modi-meets-australian-pm-albanese-in-melbourne">timesofoman.com</a>',"Modi–Albanese in Melbourne; uranium export arrangement"],
  ['<a href="https://gulfnews.com/sport/cricket/modi-albanese-unveil-india-australia-sports-roadmap-1.500603846">gulfnews.com</a>',"India–Australia Sports Collaboration Roadmap"],
  ['<a href="https://ianslive.in/pm-modi-holds-talks-with-christopher-luxon-india-new-zealand-ties-elevated-to-strategic-partnership--20260711073430">ianslive.in</a>',"India–New Zealand ties raised to a Strategic Partnership (Auckland)"],
  ['<a href="https://www.thestar.com.my/news/world/2026/07/03/indian-pm-modi-to-make-first-official-visit-to-new-zealand-next-week">thestar.com.my (Reuters)</a>',"First official visit by an Indian PM in 40 years; Auckland, 10–11 Jul"],
  ['<a href="https://www.outlooktraveller.com/News/sarnath-becomes-indias-45th-unesco-world-heritage-site">outlooktraveller.com</a>',"Sarnath, India's 45th World Heritage Site"],
  ['<a href="https://www.freepressjournal.in/uttar-pradesh/uttar-pradesh-sarnath-added-to-unesco-world-heritage-list-becomes-states-fourth-heritage-site">freepressjournal.in</a>',"Sarnath inscribed on 25 Jul 2026 at the 48th session in Busan; its components"],
  ['<a href="https://www.businesstoday.in/latest/economy/story/imf-trims-indias-2026-growth-forecast-to-6-4-raises-2027-outlook-to-6-7-541744-2026-07-08">businesstoday.in</a>',"IMF July 2026: India 6.4% (from 6.5%); 2027 raised to 6.7%"],
  ['<a href="https://www.outlookbusiness.com/economy-and-policy/imf-cuts-indias-growth-forecast-to-64-for-fy27-amid-higher-energy-prices">outlookbusiness.com</a>',"IMF cut blamed on energy prices"],
  ['<a href="https://www.aljazeera.com/amp/news/2026/7/18/india-achieves-milestone-with-launch-of-first-private-sector-orbital-rocket">aljazeera.com</a>',"Vikram-1, India's first private orbital rocket, 18 Jul 2026"],
  ['<a href="https://spectrum.ieee.org/skyroot-aerospace-vikram-1-launch">spectrum.ieee.org</a>',"Vikram-1 reached orbit on its first attempt"],
  ['<a href="https://satellitetoday.com/launch/2026/07/20/skyroot-aerospace-makes-history-for-india-with-first-launch-success/">satellitetoday.com</a>',"About 450 km orbit; SCOPE and other payloads"],
  ['<a href="https://www.marineinsight.com/indian-navy-commissions-sixth-indigenous-project-17a-stealth-guided-missile-frigate-ins-mahendragiri/">marineinsight.com</a>',"INS Mahendragiri, sixth Project 17A frigate"],
  ['<a href="https://www.deccanchronicle.com/amp/nation/vizag-rajnath-singh-commissions-indigenous-stealth-frigate-ins-mahendragiri-1970070">deccanchronicle.com</a>',"Commissioned by Rajnath Singh at Visakhapatnam (11 Jul 2026)"],
  ['<a href="https://www.deccanchronicle.com/nation/indian-navy-commissions-ins-malvan-at-karwar-1973052">deccanchronicle.com</a>',"INS Malvan commissioned at Karwar"],
  ['<a href="https://www.manoramayearbook.in/current-affairs/india/2026/07/22/navy-commissions-ins-malvan-warship.html">manoramayearbook.in</a>',"INS Malvan, 22 Jul 2026; second Mahe-class ASW-SWC; Cochin Shipyard"],
  ['<a href="https://newsonair.gov.in/drdo-successfully-conducts-maiden-flight-test-of-surface-to-air-missile-kusha/">newsonair.gov.in</a>',"Kusha maiden flight test, 23 Jul 2026"],
  ['<a href="https://theprint.in/defence/project-kusha-indias-desi-s-400-takes-to-the-skies-maiden-test-flight-successful/2994844/">theprint.in</a>',"Kusha test from Dr APJ Abdul Kalam Island; electronic target intercepted"],
  ['<a href="https://ipt.fifa.com/organisation/news/spain-crowned-world-cup-2026-champions-new-york-new-jersey">fifa.com</a>',"Spain crowned 2026 World Cup champions, New York New Jersey"],
  ['<a href="https://santamariatimes.com/ap/sports/ferran-torres-scores-in-extra-time-as-spain-beats-argentina-1-0-to-win-the/article_a8e21e5c-8c25-54ce-b065-7ebb7225d56f.html">santamariatimes.com (AP)</a>',"Spain 1-0 Argentina after extra time, Ferran Torres; 19 Jul 2026; second title"],
  ['<a href="https://www.irishtimes.com/sport/soccer/2026/07/20/rodri-wins-world-cup-golden-ball-as-kylian-mbappe-wins-second-golden-boot/">irishtimes.com</a>',"Golden Ball Rodri; Mbappé's second Golden Boot"],
  ['<a href="https://www.nbcsports.com/soccer/news/2026-world-cup-award-winners-golden-boot-golden-ball-best-young-player-golden-glove">nbcsports.com</a>',"World Cup awards: Mbappé 10 goals; Unai Simón; Pau Cubarsí"],
  ['<a href="https://atptour.com/en/news/wimbledon-2026-champion-prize-money">atptour.com</a>',"Sinner beat Zverev in the Wimbledon final"],
  ['<a href="https://www.upi.com/News_Photos/lp/32c563d4dd972fa5439570473d11c90e/">upi.com</a>',"Men's final on 12 Jul 2026; score"],
  ['<a href="https://www.outlookindia.com/sports/tennis/karolina-muchova-vs-linda-noskova-wimbledon-2026-ladies-singles-final-centre-court-in-pics">outlookindia.com</a>',"Noskova beat Muchova in the Wimbledon women's final"],
  ['<a href="https://jang.com.pk/en/68907-linda-noskova-wins-wimbledon-2026-youngest-champion-in-15-years-news">jang.com.pk</a>',"Noskova's first Grand Slam title; final on Saturday 11 Jul"],
  ['<a href="https://www.aljazeera.com/sports/2026/7/5/australia-thrash-england-to-win-record-seventh-womens-t20-world-cup">aljazeera.com</a>',"Australia's seventh Women's T20 World Cup, 5 Jul 2026"],
  ['<a href="https://www.khaleejtimes.com/sports/cricket/australia-beat-england-by-7-wickets-in-womens-t20-world-cup-final">khaleejtimes.com</a>',"By 7 wickets at Lord's; Mooney 64"],
  ['<a href="https://cyclinguptodate.com/cycling/tour-de-france-2026-final-classifications-pogacar-pedersen-carapaz-and-del-toro-seal-victory-in-paris">cyclinguptodate.com</a>',"Tour de France 2026 final classification: Pogačar"],
  ['<a href="https://slowtwitch.com/cycling/thats-a-wrap-2026-tour-de-france-finishes-in-paris/">slowtwitch.com</a>',"Finish in Paris, 26 Jul 2026; fifth title"],
  ['<a href="https://thebridge.in/commonwealth-games/mirabai-chanu-lovlina-borgohain-india-flagbearers-cwg-2026c-56940">thebridge.in</a>',"Mirabai (flag) and Lovlina (baton) lead India at the opening"],
  ['<a href="https://morungexpress.com/glasgow-rolls-out-red-carpet-as-king-charles-iii-declares-cwg-2026-open-mirabai-and-lovlina-lead-indias-medal-quest">morungexpress.com</a>',"Opening on 23 Jul 2026 at the OVO Hydro, fully indoors"],
  ['<a href="https://deccanherald.com/sports/other-sports/mirabai-chanu-clinches-indias-first-gold-medal-in-glasgow-commonwealth-games-completes-hat-trick-of-win-at-cwg-with-record-4088203">deccanherald.com</a>',"Mirabai: India's first Glasgow gold; third Commonwealth gold in a row"],
  ['<a href="https://www.onmanorama.com/sports/other-sports/2026/07/26/weightlifter-mirabai-wins-indian-s-first-gold-in-glasgow-commonwealth-games.amp.html">onmanorama.com</a>',"Mirabai's 48 kg gold, 26 Jul 2026"],
  ['<a href="https://www.aljazeera.com/sports/2026/7/31/pathirage-wins-sri-lankas-first-athletics-gold-in-commonwealth-javelin">aljazeera.com</a>',"Pathirage beat Chopra for javelin gold, 31 Jul 2026"],
  ['<a href="https://www.deccanchronicle.com/sports/cwg-2026-neeraj-chopra-wins-silver-in-javelin-throw-bronze-for-yashvir-1975671">deccanchronicle.com</a>',"Neeraj silver, Yashvir bronze; distances"],
  ['<a href="https://www.itv.com/news/2026-07-20/in-full-andy-burnhams-first-speech-as-prime-minister">itv.com</a>',"Andy Burnham's first speech as Prime Minister, 20 Jul 2026"],
  ['<a href="https://www.ewn.co.za/2026/07/20/burnham-becomes-new-uk-pm-after-meeting-king">ewn.co.za</a>',"Burnham became PM after meeting the King; Starmer resigned"],
  ['<a href="https://www.businesstoday.in/jobs/story/anurag-jain-takes-helm-at-niti-aayog-as-new-ceo-who-is-he-549580-2026-08-17">businesstoday.in</a>',"Anurag Jain NITI Aayog CEO; background"],
  ['<a href="https://www.gktoday.in/anurag-jain-appointed-ceo-of-niti-aayog/">gktoday.in</a>',"ACC notification of 22 Jul 2026; two-year term"],
  ['<a href="https://newsonair.gov.in/govt-gives-one-year-extension-to-foreign-secretary-vikram-misri-till-14th-july-2027/">newsonair.gov.in</a>',"Misri's extension to 14 Jul 2027 (1 Jul 2026)"],
  ['<a href="https://www.etvbharat.com/en/bharat/foreign-secy-vikram-misri-gets-extension-till-july-14-2027-enn26070106724">etvbharat.com</a>',"Misri extension details"],
  ['<a href="https://www.aljazeera.com/amp/news/2026/7/13/jurassic-park-actor-sam-neill-dies-aged-78">aljazeera.com</a>',"Sam Neill died aged 78"],
  ['<a href="https://www.thestar.com.my/news/world/2026/07/13/new-zealand-actor-sam-neill-has-died-family-says-in-statement">thestar.com.my (Reuters)</a>',"New Zealand actor Sam Neill died (13 Jul 2026)"],
  ['<a href="https://www.outlookindia.com/art-entertainment/south-cinema/jamuna-rani-dies-at-88-legendary-playback-singers-timeless-songs-live-on-forever">outlookindia.com</a>',"Jamuna Rani died at 88"],
  ['<a href="https://www.deccanchronicle.com/entertainment/veteran-playback-singer-k-jamuna-ranis-funeral-held-in-bengaluru-1975516">deccanchronicle.com</a>',"Died 30 Jul 2026; funeral in Bengaluru; 6,000+ songs; debut in Tyagayya (1946)"]
];

LESSONS.push(
{id:"CA7", title:"July 2026", hi:"जुलाई 2026", blocks:[
  {k:"hot", h:"Most likely to be asked: <b>Spain</b>'s World Cup win (19 Jul), the <b>Wimbledon</b> champions <b>Sinner</b> and <b>Noskova</b>, India's <b>first hydrogen train</b> at Jind, <b>Vikram-1</b> — the first private Indian rocket in orbit, <b>Sarnath</b> as India's 45th World Heritage Site, the <b>Kusha</b> missile test, and the Cabinet's <b>Semicon 2.0</b> and <b>PM-KISAN</b> decisions."},
  {k:"story", h:"<p>July 2026 began with PM Modi on a three-nation tour: a state visit to <b>Indonesia</b>, where President Prabowo gave him the country's highest honour, the <b>3rd India–Australia Annual Summit</b> in <b>Melbourne</b>, and <b>Auckland</b>, where India and New Zealand became Strategic Partners. NATO met in <b>Ankara</b>. At home, the Cabinet approved <b>Semicon 2.0</b> and a ₹62,500 crore <b>mobile phone scheme</b> on 15 July, PM Modi flagged off the <b>first hydrogen train</b> at <b>Jind</b> on 17 July, and Skyroot's <b>Vikram-1</b> reached orbit on 18 July. The <b>Monsoon Session</b> opened on 20 July, the day <b>Andy Burnham</b> became Britain's Prime Minister. After the NEET-UG paper leak, <b>Dharmendra Pradhan</b> resigned as Education Minister on 25 July, and Parliament tightened the anti-paper-leak law. The month ended with a big Cabinet day on 31 July: <b>PM-KISAN</b>, <b>Samudra Manthan</b>, <b>Khelo India</b> and <b>PM Surya Sarovar</b>.</p><p>In sport, <b>Australia</b> won the Women's T20 World Cup at Lord's, <b>Sinner</b> and <b>Noskova</b> won Wimbledon, and <b>Spain</b> beat Argentina in the World Cup final in New Jersey. The <b>Commonwealth Games</b> opened in <b>Glasgow</b> on 23 July: <b>Mirabai Chanu</b> carried India's flag and won India's first gold, and <b>Neeraj Chopra</b> took silver behind Sri Lanka's Pathirage. UNESCO added <b>Sarnath</b> to the World Heritage List on 25 July, and DRDO first flew the <b>Kusha</b> air-defence missile on 23 July.</p>", key:"Spain world champions; Sinner and Noskova; hydrogen train Jind; Vikram-1; Sarnath 45th; Kusha; Burnham UK PM; Pradhan quits."},
  {k:"table", title:"National — government decisions, schemes, laws", head:["Item","Fact","Note"], rows: CA7_NAT},
  {k:"table", title:"International — summits, agreements, elections abroad", head:["Item","Fact","Note"], rows: CA7_INT},
  {k:"table", title:"Economy and banking", head:["Item","Fact","Note"], rows: CA7_ECO},
  {k:"table", title:"Science, space and defence", head:["Item","Fact","Note"], rows: CA7_SCI},
  {k:"table", title:"Sports", head:["Item","Fact","Note"], rows: CA7_SPO},
  {k:"table", title:"Awards and honours", head:["Item","Fact","Note"], rows: CA7_AWD},
  {k:"table", title:"Appointments", head:["Item","Fact","Note"], rows: CA7_APP},
  {k:"table", title:"Places and persons in news", head:["Item","Fact","Note"], rows: CA7_PLC},
  {k:"table", title:"Obituaries", head:["Item","Fact","Note"], rows: CA7_OBI},
  {k:"trick", h:"Three Cabinet days — <b>15, 24, 31</b>. On <b>15 July</b> think of a computer's <b>C-P-U</b>: <b>C</b>hips (Semicon 2.0), <b>P</b>hones (₹62,500 crore) and <b>U</b>rea (NIPU-2026). On <b>24 July</b>, chemicals (BHAVYA Rasayan). On <b>31 July</b>, <b>“Farm, Sea, Sport, Sun”</b>: PM-KISAN, Samudra Manthan, Khelo India and PM Surya Sarovar."},
  {k:"trick", h:"Modi's July tour ran <b>west to east, I-A-N</b>: <b>I</b>ndonesia (Jakarta — highest honour), <b>A</b>ustralia (Melbourne — annual summit), <b>N</b>ew Zealand (Auckland — Strategic Partnership)."},
  {k:"trap", h:"<b>Hydrogen train</b> = <b>Jind–Sonipat</b>, Haryana, <b>17 Jul 2026</b>. The <b>LNG train</b> came later, from <b>Sabarmati</b>, Gujarat (27 Sep 2026). And <b>Vikram-1</b> is a <b>private</b> rocket built by <b>Skyroot Aerospace</b> — not ISRO's, and not Chandrayaan's Vikram lander."},
  {k:"trap", h:"<b>Two navy ships, two jobs</b>: <b>INS Mahendragiri</b> is a <b>stealth frigate</b> (Project 17A) commissioned at <b>Visakhapatnam</b>; <b>INS Malvan</b> is an <b>anti-submarine shallow water craft</b> commissioned at <b>Karwar</b>. And <b>Kusha</b> is a <b>surface-to-air</b> missile, tested from Dr APJ Abdul Kalam Island."},
  {k:"trap", h:"<b>Javelin at Glasgow</b>: gold went to <b>Rumesh Tharanga Pathirage</b> (Sri Lanka); <b>Neeraj Chopra</b> took <b>silver</b> and Yashvir Singh bronze. At <b>Wimbledon</b>, Sinner beat <b>Zverev</b> — Zverev went on to win the US Open in September."},
  {k:"table", title:"Sources (checked 24 Oct 2026)", head:["Source","What it confirmed"], rows: CA7_SRC}
], sum:[
  "15 Jul 2026 Cabinet: Semicon 2.0 (about ₹1.27 lakh crore), Mobile Phone Manufacturing Scheme (₹62,500 crore), urea policy NIPU-2026.",
  "First hydrogen train: Jind–Sonipat, Haryana, flagged off by PM Modi on 17 Jul 2026.",
  "Vikram-1 (Skyroot Aerospace) reached orbit from Sriharikota on 18 Jul 2026 — India's first private orbital rocket.",
  "Monsoon Session opened on 20 Jul 2026; anti-paper-leak amendment passed (LS 29 Jul, RS 30 Jul).",
  "Dharmendra Pradhan resigned as Education Minister on 25 Jul 2026 (NEET-UG leak); Pralhad Joshi got additional charge.",
  "24 Jul: BHAVYA Rasayan (₹3,030 crore, three chemical parks). 31 Jul: PM-KISAN to 2030-31, Samudra Manthan (₹84,084 crore), Khelo India (₹36,441 crore), PM Surya Sarovar (₹5,070 crore).",
  "PM in Indonesia (Bintang Adipurna, 7 Jul), Australia (3rd Annual Summit, Melbourne) and New Zealand (Strategic Partnership, Auckland).",
  "NATO Summit: Ankara, 7–8 Jul 2026. Andy Burnham became UK Prime Minister on 20 Jul 2026.",
  "Sarnath became India's 45th World Heritage Site on 25 Jul 2026 (48th session, Busan).",
  "INS Mahendragiri (11 Jul, Visakhapatnam), INS Malvan (22 Jul, Karwar); Kusha missile's first flight test (23 Jul).",
  "FIFA World Cup: Spain beat Argentina 1-0 (19 Jul, MetLife Stadium); Golden Ball Rodri, Golden Boot Mbappé.",
  "Wimbledon: Sinner and Noskova. Women's T20 World Cup: Australia (5 Jul, Lord's). Tour de France: Pogačar.",
  "Glasgow Games opened 23 Jul: Mirabai Chanu flag-bearer and first gold (48 kg); Neeraj silver behind Pathirage (31 Jul).",
  "IMF July update: India's 2026 growth cut to 6.4%. Anurag Jain named NITI Aayog CEO (22 Jul)."
]}
);

QB.push(
["CA7","Which country won the 2026 FIFA World Cup, beating Argentina in the final on 19 July 2026?",["Spain","France","England","Brazil"],"Spain won 1-0 after extra time — their second World Cup, after 2010.",""],
["CA7","The final of the 2026 FIFA World Cup was played at:",["MetLife Stadium, New Jersey","AT&T Stadium, Dallas","SoFi Stadium, Los Angeles","Estadio Azteca, Mexico City"],"MetLife Stadium in East Rutherford, New Jersey, hosted the final on 19 Jul 2026.",""],
["CA7","Who scored the only goal of the 2026 FIFA World Cup final?",["Ferran Torres","Lamine Yamal","Lautaro Martínez","Nico Williams"],"Ferran Torres scored in the 106th minute, set up by Nico Williams.",""],
["CA7","Who won the Golden Ball as the best player of the 2026 FIFA World Cup?",["Rodri","Lionel Messi","Kylian Mbappé","Pedri"],"Spain's Rodri won it; Messi was second and Mbappé third.",""],
["CA7","Kylian Mbappé won the Golden Boot at the 2026 FIFA World Cup with how many goals?",["10","8","7","6"],"He scored 10 and became the first player to win the Golden Boot twice; Messi had 8.",""],
["CA7","Who won the men's singles title at Wimbledon 2026?",["Jannik Sinner","Alexander Zverev","Carlos Alcaraz","Novak Djokovic"],"Sinner beat Zverev in the final on 12 Jul 2026 for his second Wimbledon title in a row.",""],
["CA7","Who won the women's singles title at Wimbledon 2026?",["Linda Noskova","Karolina Muchova","Aryna Sabalenka","Elena Rybakina"],"Noskova beat her fellow Czech Karolina Muchova on 11 Jul 2026 for her first Grand Slam title.",""],
["CA7","Which team won the ICC Women's T20 World Cup 2026, at Lord's on 5 July 2026?",["Australia","England","India","South Africa"],"Australia beat England by 7 wickets for a record seventh title.",""],
["CA7","Who won the Tour de France 2026, for the fifth time?",["Tadej Pogačar","Jonas Vingegaard","Remco Evenepoel","Richard Carapaz"],"Pogačar's fifth win put him level with Merckx, Hinault, Indurain and Anquetil.",""],
["CA7","Who carried India's flag at the opening ceremony of the Glasgow Commonwealth Games on 23 July 2026?",["Mirabai Chanu","Lovlina Borgohain","Neeraj Chopra","P. V. Sindhu"],"Mirabai Chanu carried the flag; Lovlina Borgohain carried the King's Baton.",""],
["CA7","Mirabai Chanu won India's first gold at the 2026 Commonwealth Games in which weight category?",["Women's 48 kg","Women's 49 kg","Women's 55 kg","Women's 59 kg"],"She won the 48 kg gold on 26 Jul 2026 — her third Commonwealth gold in a row.",""],
["CA7","Who won the men's javelin gold at the 2026 Commonwealth Games in Glasgow?",["Rumesh Tharanga Pathirage","Neeraj Chopra","Arshad Nadeem","Yashvir Singh"],"Sri Lanka's Pathirage threw 89.75 m; Neeraj Chopra won silver and Yashvir Singh bronze.",""],
["CA7","Which city hosted the NATO Summit of 7–8 July 2026?",["Ankara","The Hague","Istanbul","Vilnius"],"Türkiye hosted it in Ankara; the allies adopted the Ankara Summit Declaration.",""],
["CA7","Who became the Prime Minister of the United Kingdom on 20 July 2026?",["Andy Burnham","Keir Starmer","Rishi Sunak","Wes Streeting"],"Keir Starmer resigned, and Burnham, a former Mayor of Greater Manchester, took office.",""],
["CA7","PM Modi received the Bintang Republik Indonesia Adipurna on 7 July 2026 from:",["President Prabowo Subianto","President Joko Widodo","PM Anwar Ibrahim","President Ferdinand Marcos Jr."],"Prabowo gave him Indonesia's highest state honour at the Merdeka Palace, Jakarta.",""],
["CA7","The 3rd India–Australia Annual Summit was held in July 2026 in:",["Melbourne","Sydney","Canberra","Perth"],"PM Modi and Anthony Albanese met in Melbourne, where a sports roadmap was launched at the MCG.",""],
["CA7","During PM Modi's visit to Auckland in July 2026, India–New Zealand relations were raised to a:",["Strategic Partnership","Comprehensive Strategic Partnership","Special and Privileged Strategic Partnership","Global Strategic Partnership"],"The leaders agreed to a Strategic Partnership; it was the first official visit by an Indian PM in about 40 years.",""],
["CA7","India's first hydrogen-powered train, flagged off on 17 July 2026, runs between:",["Jind and Sonipat","Sabarmati and Mahesana","Kalka and Shimla","Delhi and Meerut"],"PM Modi flagged it off at Jind; the route is about 89 km.",""],
["CA7","Who was given additional charge of the Education Ministry after Dharmendra Pradhan resigned on 25 July 2026?",["Pralhad Joshi","Ashwini Vaishnaw","Shivraj Singh Chouhan","Jitendra Singh"],"Pralhad Joshi took the extra charge while keeping Food and Consumer Affairs.",""],
["CA7","Dharmendra Pradhan resigned as Union Education Minister in July 2026 over:",["The NEET-UG 2026 paper leak","The delimitation bill","A rail accident","The CUET results"],"He quit after weeks of student protests over the NEET-UG paper leak.",""],
["CA7","Which law did Parliament amend in July 2026 to raise the penalties for paper leaks?",["Public Examinations (Prevention of Unfair Means) Act, 2024","Bharatiya Nyaya Sanhita, 2023","Right to Education Act, 2009","Information Technology Act, 2000"],"The amendment bill passed the Lok Sabha on 29 Jul and the Rajya Sabha on 30 Jul 2026.",""],
["CA7","The outlay of Semicon India Mission 2.0, approved on 15 July 2026, is about:",["₹1.27 lakh crore","₹76,000 crore","₹62,500 crore","₹2.19 lakh crore"],"₹76,000 crore was the first mission; ₹62,500 crore is the phone scheme; ₹2.19 lakh crore was the whole day's package.",""],
["CA7","The ₹62,500 crore scheme approved by the Cabinet on 15 July 2026 promotes the manufacture of:",["Mobile phones","Semiconductor chips","Electric buses","Solar modules"],"It is the Mobile Phone Manufacturing Scheme (MPMS), for 2026-27 to 2030-31.",""],
["CA7","The National Investment Policy for Urea-2026 aims to set up new urea plants that run on:",["Natural gas","Coal","Naphtha","Fuel oil"],"It provides for 8–9 new gas-based urea plants and replaces NIP-2012.",""],
["CA7","The BHAVYA Rasayan scheme (24 July 2026, ₹3,030 crore) will set up three:",["Chemical parks","Bulk drug parks","Textile parks","Food parks"],"Rasayan means chemicals; states compete for the three parks.",""],
["CA7","'Samudra Manthan', approved on 31 July 2026 with ₹84,084 crore, is a scheme for:",["Offshore oil and gas exploration","Deep-sea mining of nodules","Coastal shipping","Sea-water desalination"],"It is the National Offshore Exploration Scheme of the Petroleum Ministry.",""],
["CA7","The PM Surya Sarovar Yojana (31 July 2026) supports:",["Floating solar plants on reservoirs","Rooftop solar on homes","Solar pumps for farmers","Solar parks in deserts"],"It targets 5,000 MW of floating solar with 10,000 MWh of storage, for ₹5,070 crore.",""],
["CA7","Up to which year was PM-KISAN extended by the Cabinet on 31 July 2026?",["2030-31","2028-29","2035-36","2026-27"],"It was continued for 2026-27 to 2030-31 with about ₹3.15 lakh crore.",""],
["CA7","The ₹36,441 crore approved by the Cabinet on 31 July 2026 is for:",["The revamped Khelo India scheme and aid to sports federations","PM-KISAN","PM Surya Sarovar Yojana","Samudra Manthan"],"It covers Khelo India and the National Sports Federations for 2026-27 to 2030-31.",""],
["CA7","In its July 2026 update, the IMF put India's growth for 2026 (FY 2026-27) at:",["6.4%","7.0%","7.8%","5.5%"],"It cut the forecast from 6.5% to 6.4%; it raised it to 7.0% in October.",""],
["CA7","Vikram-1, which reached orbit on 18 July 2026, was built by:",["Skyroot Aerospace","Agnikul Cosmos","ISRO","Hindustan Aeronautics Limited"],"Skyroot's Vikram-1 is India's first privately built rocket to reach orbit.",""],
["CA7","On 25 July 2026 Sarnath became India's World Heritage Site number:",["45","43","44","46"],"It was inscribed at the 48th session of the World Heritage Committee, held in Busan.",""],
["CA7","Where did the 48th session of the UNESCO World Heritage Committee take place in July 2026?",["Busan","Paris","New Delhi","Riyadh"],"Busan in South Korea; New Delhi had hosted the 46th session in 2024.",""],
["CA7","INS Mahendragiri, commissioned on 11 July 2026, belongs to:",["Project 17A (Nilgiri-class) frigates","Project 15B destroyers","Project 75 submarines","Mahe-class shallow water craft"],"It is the sixth Project 17A stealth frigate, built by Mazagon Dock.",""],
["CA7","Where was INS Malvan commissioned on 22 July 2026?",["Karwar","Visakhapatnam","Mumbai","Kochi"],"The second Mahe-class anti-submarine shallow water craft was commissioned at Karwar.",""],
["CA7","Kusha, first flight-tested by DRDO on 23 July 2026, is a:",["Long-range surface-to-air missile","Intercontinental ballistic missile","Anti-tank guided missile","Submarine-launched cruise missile"],"It is an air-defence missile; it hit an electronic target that copied a fast, high-flying threat.",""],
["CA7","Who was appointed CEO of NITI Aayog by an ACC notification of 22 July 2026?",["Anurag Jain","B. V. R. Subrahmanyam","Amitabh Kant","Vikram Misri"],"Anurag Jain, a former Chief Secretary of Madhya Pradesh, got a two-year term.",""],
["CA7","In July 2026 Foreign Secretary Vikram Misri's term was extended until:",["14 July 2027","14 July 2026","31 December 2026","30 June 2028"],"He was due to retire on 14 Jul 2026; the ACC gave him one more year.",""],
["CA7","Actor Sam Neill, who died on 13 July 2026, played Dr Alan Grant in:",["Jurassic Park","The Lord of the Rings","Titanic","Mad Max"],"The New Zealand actor died in Sydney, aged 78.",""],
["CA7","K. Jamuna Rani, who died in Bengaluru on 30 July 2026, was a well-known:",["Playback singer","Bharatanatyam dancer","Film director","Veena player"],"She sang over 6,000 film songs in Tamil, Telugu and other languages.",""]
);

LASTMOMENT.push(
{t:"July 2026", era:["ca"], rows:[["FIFA World Cup","Spain (1-0 v Argentina, 19 Jul)"],["Wimbledon","Sinner · Noskova"],["Women's T20 WC","Australia (7th title)"],["Hydrogen train","Jind–Sonipat, 17 Jul"],["Vikram-1","First private rocket in orbit, 18 Jul"],["Sarnath","45th World Heritage Site, 25 Jul"],["Kusha","LR-SAM first test, 23 Jul"],["UK PM","Andy Burnham, 20 Jul"],["NATO Summit","Ankara, 7–8 Jul"],["Semicon 2.0","about ₹1.27 lakh crore (15 Jul)"]]}
);
TILES.push(["45th","Sarnath — India's World Heritage Site, Jul 2026","ca"],["₹62,500 cr","Mobile Phone Manufacturing Scheme (15 Jul 2026)","ca"],["₹84,084 cr","Samudra Manthan offshore exploration (31 Jul 2026)","ca"],["89 km","Jind–Sonipat hydrogen train route","ca"],["3rd","Straight Commonwealth gold for Mirabai Chanu (48 kg)","ca"]);
