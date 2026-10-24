/* Current Affairs 2026 · September 2026 (lesson CA9). Self-contained: its tables, lesson, questions, last-moment card and tiles.
   Every fact was checked on 24 Oct 2026 against the sources in the lesson's last table; nothing unconfirmed is kept.
   Table rows are [item, fact, note]. Names start with CA9_ so other month files never clash with them. */
const CA9_NAT = [
  ["EPFO wage ceiling","Raised from ₹15,000 to ₹25,000 a month, with effect from 17 Sep 2026","Cabinet decision; the first revision since September 2014. Over 51 lakh more workers come under compulsory EPFO cover."],
  ["Supreme Court on the CEC law","Split verdict on 23 Sep 2026; the matter sent to the CJI for a Constitution Bench","Justices Dipankar Datta and Satish Chandra Sharma differed on the challenge to the 2023 law on appointing the CEC and Election Commissioners."],
  ["India's first LNG-powered train","Flagged off from Sabarmati (Ahmedabad) by Amit Shah on 27 Sep 2026","Dual-fuel (diesel + LNG) power cars; LNG can replace up to about 40% of the diesel."],
  ["India Net Zero Portal and NAPCC Dashboard","Launched in Mumbai on 16 Sep 2026, World Ozone Day","Launched by MoS Kirti Vardhan Singh (Environment Ministry); companies register net-zero targets on the portal."],
  ["Green Energy Corridor Phase-III","Approved by the Cabinet on 30 Sep 2026: ₹1,86,405 crore","Intra-state transmission lines plus 50 GWh of battery storage, by 2032-33."],
  ["Rabi MSP for 2027-28","Approved on 30 Sep 2026: wheat ₹2,610 a quintal (+₹25)","Safflower got the biggest rise (+₹675, to ₹7,215); mustard ₹6,613, masur ₹7,390."],
  ["E-commerce rules","Consumer Protection (E-Commerce) Amendment Rules, 2026 notified in Sep 2026","Sponsored listings must be labelled and search ranking explained; in force from 1 Jan 2027."],
  ["SEMICON India 2026","5th edition, Yashobhoomi (New Delhi), 17–19 Sep 2026","Inaugurated by PM Modi on 17 Sep; organised by the India Semiconductor Mission, MeitY and SEMI."]
];
const CA9_INT = [
  ["18th BRICS Summit","New Delhi, 12–13 Sep 2026 — India the host","Leaders adopted the New Delhi Declaration; China hosts the next summit in 2027."],
  ["26th SCO Summit","Bishkek (Kyrgyzstan), 31 Aug – 1 Sep 2026","The Bishkek Declaration was signed on 1 Sep; Kyrgyz President Sadyr Japarov chaired; PM Modi attended."],
  ["UN General Assembly, 81st session","Opened on 8 Sep 2026 under President Khalilur Rahman","Bangladesh's Foreign Minister; elected on 2 June 2026 (99 votes to 91 for Cyprus)."],
  ["Sweden's general election","Held on 13 Sep 2026; the centre-left opposition won 176 of 349 seats","PM Ulf Kristersson announced his resignation on 17 Sep; Social Democrat leader Magdalena Andersson was expected to return."],
  ["Russia's State Duma election","September 2026: United Russia won 349 of 450 seats (final count)","A record for Putin's party; the Communists came second."],
  ["Saxony-Anhalt (Germany) state election","6 Sep 2026: the far-right AfD came first with 43.8%","39 of 83 seats — short of a majority; other parties refuse to work with it."],
  ["India–EU free trade agreement","On 11 Sep 2026 the European Commission sent the text to the EU Council","Talks had concluded on 27 Jan 2026; signing was expected in December."]
];
const CA9_ECO = [
  ["UPI merchant charge (MDR)","Notified on 14 Sep 2026: 0.4% on payments to merchants above ₹2,000, from 15 Oct 2026","Capped at ₹300; no charge up to ₹2,000, on person-to-person payments or on the customer."],
  ["Current account deficit, Q1 2026-27","US$ 4.2 billion = 0.5% of GDP (RBI, 1 Sep 2026)","0.4% of GDP a year earlier; forex reserves fell by US$ 8.1 billion (BoP basis) in the quarter."],
  ["Moody's growth forecast for India","Raised to 7% for 2026-27 (from 6%), in Sep 2026","India's rating kept at Baa3 with a stable outlook."],
  ["Global Innovation Index 2026 (WIPO)","India 38th of 139 — released on 29 Sep 2026","Switzerland first for the 16th year; India 1st among lower-middle-income economies."],
  ["Global Gender Gap Report 2026 (WEF)","India 131st of 145 — released on 16 Sep 2026","Rank unchanged; India's score 64.5%. Iceland is first, then Finland and Norway."]
];
const CA9_SCI = [
  ["GSLV-F17 / EOS-05 (GISAT-1A)","Launched from Sriharikota on 4 Sep 2026","An earth-observation satellite for a geosynchronous orbit; ISRO's first launch since the PSLV-C62 failure of 12 Jan 2026."],
  ["Next Generation Missile Vessel (NGMV)","Keel of the first ship laid at Cochin Shipyard on 18 Sep 2026","Six NGMVs are being built for the Navy, armed with BrahMos; first delivery due March 2027."],
  ["Drug haul in the Arabian Sea","About 526 kg seized from an Iranian boat on 25 Sep 2026","Coast Guard and Gujarat ATS, west of Lakshadweep; worth over ₹3,000 crore; five Pakistani nationals held."],
  ["World Ozone Day 2026 (32nd)","Marked in Mumbai on 16 Sep 2026","Theme: 'Global Action for a Cooler Planet'; the Net Zero Portal was launched there."]
];
const CA9_SPO = [
  ["US Open 2026 — men's singles","Alexander Zverev (Germany) beat Ben Shelton on 13 Sep 2026","His first US Open and second Grand Slam title, after the 2026 French Open."],
  ["US Open 2026 — women's singles","Elena Rybakina beat Aryna Sabalenka on 12 Sep 2026","Her third Grand Slam title; she also won the 2026 Australian Open."],
  ["Asian Games 2026 opening","Aichi-Nagoya (Japan), 19 Sep 2026","India's flag-bearers: Manu Bhaker and kabaddi star Pawan Sehrawat."],
  ["India's first gold at the 2026 Asian Games","Women's cricket, 22 Sep 2026: beat Sri Lanka by 147 runs","India kept the title it won in 2023; Smriti Mandhana top-scored with 79."],
  ["Neeru Dhanda","Women's trap gold at the Asian Games, 29 Sep 2026","The first Indian woman to win the trap gold at the Asian Games."],
  ["46th Chess Olympiad (Samarkand, Uzbekistan)","Ended 27 Sep 2026: India silver (open) and bronze (women)","Open gold Uzbekistan, women's gold China; India kept the Nona Gaprindashvili Trophy for the best combined result."],
  ["World Athletics Ultimate Championship","First edition, Budapest, 11–13 Sep 2026","Men's javelin won by Rumesh Tharanga Pathirage (Sri Lanka) with 91.09 m; Neeraj Chopra missed it through injury."]
];
const CA9_AWD = [
  ["Dadasaheb Phalke Award (for 2024)","Anant Nag — announced 16 Sep, presented 22 Sep 2026","The second Kannada actor to get it, after Dr Rajkumar (1995)."],
  ["72nd National Film Awards ceremony","Ekta Nagar (Kevadia), Gujarat, on 22 Sep 2026","Presented by President Droupadi Murmu — the first ceremony held outside New Delhi."],
  ["72nd National Film Awards — Best Actor","Shared: Mammootty (Bramayugam) and Kartik Aaryan (Chandu Champion)","Best Actress Yami Gautam and Best Feature Film Article 370."],
  ["78th Primetime Emmy Awards","Los Angeles, 14 Sep 2026: Best Drama The Pitt, Best Comedy Widow's Bay","The Pitt won Best Drama for the second year running."],
  ["Right Livelihood Award 2026","Announced on 30 Sep 2026: four laureates","Jalila Haider (Pakistan), Timnit Gebru, the Rural Women's Assembly (South Africa) and the Georgian Young Lawyers' Association."],
  ["Booker Prize 2026 shortlist","Announced on 22 Sep 2026; winner due on 9 Nov 2026","Includes Elizabeth Strout, Marlon James and Douglas Stuart."]
];
const CA9_APP = [
  ["Chairperson, CBSE","Mandeep K. Bhandari — ACC order of 25 Sep 2026","After Lokhande Prashant Sitaram."],
  ["Deputy Chair, ICC","Tavengwa Mukuhlani (Zimbabwe) — 17 Sep 2026, till Nov 2027","The first Zimbabwean in the post; succeeded Imran Khwaja."],
  ["Chairperson, IBBI (additional charge)","Jayanti Prasad, from 13 Sep 2026","A whole-time member of IBBI, after Ravi Mital retired; at most till 20 Nov 2026."],
  ["President, UN General Assembly (81st session)","Khalilur Rahman (Bangladesh) — took office on 8 Sep 2026","Only the second time Bangladesh has held the post (the first was 1986)."]
];
const CA9_PLC = [
  ["Ekta Nagar (Kevadia), Gujarat","Hosted the National Film Awards on 22 Sep 2026","Home of the Statue of Unity — the first time the ceremony left New Delhi."],
  ["Sabarmati, Ahmedabad","India's first LNG-powered train started here on 27 Sep 2026","Do not mix it up with the hydrogen train (Jind–Sonipat, Haryana, July 2026)."],
  ["Bishkek","Capital of Kyrgyzstan — hosted the 26th SCO Summit (31 Aug – 1 Sep 2026)","Gave its name to the Bishkek Declaration."],
  ["Samarkand","Uzbekistan — hosted the 46th Chess Olympiad (Sept 2026)","Uzbekistan won the open section at home."],
  ["Nisshin, Japan","Venue of the Asian Games women's cricket final on 22 Sep 2026","India beat Sri Lanka there by 147 runs."],
  ["Yashobhoomi, New Delhi","Hosted SEMICON India 2026 (17–19 Sep)","The 5th edition; PM Modi opened it on 17 Sep."]
];
const CA9_OBI = [
  ["S. R. Janakiraman","Carnatic musicologist; died in Chennai on 4 Sep 2026, aged 98","The last disciple of Tiger Varadachariar; Padma Shri; Sangita Kala Acharya (1997)."],
  ["Solomon Pappaiah","Tamil scholar and Pattimandram (debate) moderator; died in Madurai in Sep 2026, aged 90","Taught Tamil at The American College, Madurai; Padma Shri (2021); acted in Shankar's films."],
  ["Major Vijay Singh Mankotia","Former Himachal Pradesh minister; died on 29 Sep 2026, aged 87","Died at his village in Kangra district."]
];
const CA9_SRC = [
  ['<a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2313829&reg=48&lang=2">pib.gov.in (PRID 2313829)</a>',"EPFO wage ceiling ₹25,000 from 17 Sep 2026; first revision since Sep 2014; 51 lakh+ workers"],
  ['<a href="https://www.labour.gov.in/static/uploads/2026/09/4f607a88c5342aeb980c6b999997caab.pdf">labour.gov.in (Cabinet release, Sep 2026)</a>',"Cabinet approval of the higher EPFO wage ceiling"],
  ['<a href="https://www.aninews.in/news/national/general-news/supreme-court-delivers-split-verdict-on-pleas-challenging-cec-appointment-law-matter-sent-to-cji-for-constitution-bench20260923160933/">aninews.in</a>',"Split verdict on the CEC law, 23 Sep 2026; reference to the CJI"],
  ['<a href="https://www.scobserver.in/reports/sc-delivers-split-verdict-sends-eci-appointments-law-challenge-to-larger-bench/">scobserver.in</a>',"Judges (Datta, S.C. Sharma) and the 2023 law"],
  ['<a href="https://www.business-standard.com/india-news/amit-shah-flags-off-india-s-first-lng-powered-train-from-sabarmati-126092800027_1.html">business-standard.com</a>',"First LNG-powered train, Sabarmati, 27 Sep 2026"],
  ['<a href="https://newsonair.gov.in/union-minister-amit-shah-flags-off-countrys-first-lng-powered-train-from-sabarmati/">newsonair.gov.in</a>',"LNG train: Amit Shah; dual-fuel; up to 40% diesel replaced"],
  ['<a href="https://theprint.in/india/pm-modi-flags-off-indias-first-hydrogen-powered-train-from-haryanas-jind/2988805/">theprint.in</a>',"Hydrogen train Jind–Sonipat, 17 Jul 2026 (used in a trap box)"],
  ['<a href="https://www.uniindia.com/national/environment-digital-tools-climate-action/181402">uniindia.com</a>',"Net Zero Portal and NAPCC Dashboard, 16 Sep 2026"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/india-launches-net-zero-portal-and-napcc-dashboard">drishtiias.com</a>',"Launched in Mumbai by MoS Kirti Vardhan Singh; 32nd World Ozone Day and its theme"],
  ['<a href="https://www.pib.gov.in/PressReleaseDetail.aspx?PRID=2316950&reg=3&lang=1">pib.gov.in (PRID 2316950)</a>',"Green Energy Corridor Phase-III approved, 30 Sep 2026 (figures as in study-govt-schemes.html, checked 23 Oct 2026)"],
  ['<a href="https://ddnews.gov.in/en/cabinet-approves-msp-hike-for-all-rabi-crops-for-2027-28-marketing-season/">ddnews.gov.in</a>',"Rabi MSP 2027-28 approved"],
  ['<a href="https://www.business-standard.com/industry/agriculture/cabinet-likely-to-raise-wheat-msp-by-25-to-2-610-per-quintal-for-2027-28-126093000611_1.html">business-standard.com</a>',"Wheat ₹2,610 (+₹25), 30 Sep 2026; other rabi prices"],
  ['<a href="https://www.mondaq.com/overview-of-the-consumer-protection-(e-commerce)-(amendment)-rules-2026/1846008">mondaq.com</a>',"E-commerce Amendment Rules 2026: sponsored labels, ranking, from 1 Jan 2027"],
  ['<a href="https://prsindia.org/policy/monthly-policy-review/september-2026">prsindia.org (Monthly Policy Review, Sep 2026)</a>',"E-commerce rules, UPI MDR, EPFO, GEC-III and BRICS listed as September 2026 items"],
  ['<a href="https://www.semi.org/en/semi-press-release/honble-pm-shri-narendra-modi-to-inaugurate-semicon-india-2026-on-17th-september">semi.org</a>',"SEMICON India 2026, Yashobhoomi, 17–19 Sep; organisers"],
  ['<a href="https://www.uniindia.com/national/pm-modi-semicon-india-2026-17di1/182477">uniindia.com</a>',"PM inaugurated SEMICON India on 17 Sep 2026; 5th edition"],
  ['<a href="https://www.aljazeera.com/news/2026/9/13/brics-summit-2026-what-are-the-key-takeaways">aljazeera.com</a>',"18th BRICS Summit, New Delhi, 12–13 Sep 2026"],
  ['<a href="https://www.outlookindia.com/national/new-delhi-declaration-adopted-what-are-the-key-takeaways">outlookindia.com</a>',"New Delhi Declaration adopted"],
  ['<a href="https://newsonair.gov.in/pm-modi-arrives-in-bishkek-on-two-day-visit-to-kyrgyzstan-to-attend-sco-summit-and-meet-several-sco-leaders/">newsonair.gov.in</a>',"PM in Bishkek for the SCO Summit"],
  ['<a href="https://timesofoman.com/article/176302-26th-sco-summit-begins-in-bishkek-as-heads-of-state-gather-round-table-discussion-underway">timesofoman.com</a>',"26th SCO Summit, Bishkek, 31 Aug – 1 Sep 2026; chaired by Sadyr Japarov"],
  ['<a href="https://static.un.org/en/ga/president/81/">un.org (President of the 81st session)</a>',"Khalilur Rahman elected 2 June 2026; term from 8 Sep 2026"],
  ['<a href="https://www.aljazeera.com/news/2026/9/17/sweden-prime-minister-to-resign-as-left-wing-bloc-seals-narrow-election-win">aljazeera.com</a>',"Sweden: 176 of 349 seats for the opposition; Kristersson to resign (17 Sep)"],
  ['<a href="https://aljazeera.com/news/2026/9/21/russia-election-results-show-putins-party-winning-what-we-know">aljazeera.com</a>',"Russia's Duma election: United Russia wins"],
  ['<a href="https://newsonair.gov.in/vladimir-putins-united-russia-party-retains-majority-in-parliament/">newsonair.gov.in</a>',"United Russia keeps its majority; 349 of 450 seats in the final count"],
  ['<a href="https://www.osw.waw.pl/en/publikacje/analyses/2026-09-07/germany-afd-scores-landslide-victory-saxony-anhalt">osw.waw.pl</a>',"AfD 43.8% and 39 of 83 seats in Saxony-Anhalt, 6 Sep 2026"],
  ['<a href="https://swarajyamag.com/economy/india-eu-free-trade-agreement-moves-closer-to-signing-as-european-commission-sends-pact-to-eu-council-for-approval">swarajyamag.com</a>',"India–EU FTA text sent to the EU Council, 11 Sep 2026; talks concluded 27 Jan 2026"],
  ['<a href="https://www.onmanorama.com/news/india/2026/09/15/centre-imposes-0-4-mdr-on-upi-merchant-payments-above-rs-2-000.amp.html">onmanorama.com</a>',"UPI MDR 0.4% above ₹2,000, from 15 Oct 2026"],
  ['<a href="https://www.khaleejtimes.com/world/asia/india-charge-some-merchants-up-to-rs300-upi-transactions-over-rs2000">khaleejtimes.com</a>',"MDR cap ₹300; notification of 14 Sep 2026"],
  ['<a href="https://rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=63493">rbi.org.in (press release 63493)</a>',"CAD US$ 4.2 bn (0.5% of GDP) in Q1 2026-27; reserves −US$ 8.1 bn"],
  ['<a href="https://theprint.in/economy/current-account-deficit-widens-to-usd-4-2-bn-in-q1-rbi-data/3030972/">theprint.in</a>',"CAD data released 1 Sep 2026"],
  ['<a href="https://theprint.in/economy/moodys-sharply-raises-indias-fy27-gdp-forecast-to-7-pc-flags-inflation-risks/3046256/">theprint.in</a>',"Moody's raises FY27 forecast to 7%"],
  ['<a href="https://www.freepressjournal.in/business/moodys-raises-india-gdp-growth-forecast-to-7-for-fy27-on-strong-domestic-demand">freepressjournal.in</a>',"From 6% to 7%; Baa3 stable"],
  ['<a href="https://www.manoramayearbook.in/current-affairs/india/2026/09/19/global-gender-gap-index-india-rank-131.html">manoramayearbook.in</a>',"Gender Gap Index 2026: India 131 of 145"],
  ['<a href="https://telanganatoday.com/india-ranks-131st-in-global-gender-gap-index-2026">telanganatoday.com</a>',"Gender Gap Report released 16 Sep 2026; Iceland first"],
  ["study-reports-indices.html (this repo, checked 23 Oct 2026)","GII 2026: India 38 of 139, released 29 Sep 2026; Switzerland first (WIPO results; ETV Bharat)"],
  ['<a href="https://www.dtnext.in/news/national/gslv-f17-launches-eos-05-successfully-places-satellite-in-orbit">dtnext.in</a>',"GSLV-F17 / EOS-05 launch, Sriharikota"],
  ['<a href="https://www.manoramanews.com/technology/info-hub/space/2026/09/04/isro-succeeds-with-gslv-f-17-launching-first-geosynchronous-earth-observation-satellite.html">manoramanews.com</a>',"Launch on 4 Sep 2026; first since the January PSLV-C62 failure"],
  ['<a href="https://www.uniindia.com/national/defence-navy-ngmv-keel-laying/185436">uniindia.com</a>',"First NGMV keel laid, Cochin Shipyard, 18 Sep 2026"],
  ['<a href="https://www.marineinsight.com/cochin-shipyard-lays-keel-for-first-of-six-next-gen-missile-vessels-for-indian-navy/">marineinsight.com</a>',"Six NGMVs; BrahMos; delivery from March 2027"],
  ['<a href="https://www.onmanorama.com/news/india/2026/09/30/3-000-crore-drugs-seized-from-iranian-boat-in-arabian-sea-5-pakistani-nationals-detained.html">onmanorama.com</a>',"526 kg drugs, Iranian boat, 25 Sep 2026; five Pakistanis held"],
  ['<a href="https://www.outlookindia.com/international/iranian-boat-seized-with-rs-3000-crore-drugs-in-arabian-sea-5-pakistanis-held">outlookindia.com</a>',"Worth over ₹3,000 crore; Coast Guard and Gujarat ATS"],
  ['<a href="https://www.thestar.com.my/sport/tennis/2026/09/14/tennis-zverev-beats-shelton-to-win-us-open-title">thestar.com.my (Reuters)</a>',"Zverev beat Shelton, US Open final, 13 Sep 2026; his second major"],
  ['<a href="https://wjla.com/news/nation-world/rybakina-tops-sabalenka-to-win-us-open-claim-no-1-ranking">wjla.com</a>',"Rybakina beat Sabalenka 6-4, 5-7, 6-2; third major"],
  ['<a href="https://sports.yahoo.com/articles/us-open-results-2026-quarterfinal-232139597.html">sports.yahoo.com</a>',"Women's final on 12 Sep 2026; Rybakina also won the 2026 Australian Open"],
  ['<a href="https://www.businesstoday.in/sports/story/asian-games-2026-pawan-sehrawat-manu-bhaker-lead-indian-contingent-at-opening-ceremony-556626-2026-09-19">businesstoday.in</a>',"Opening ceremony 19 Sep 2026; flag-bearers Bhaker and Sehrawat (Toor dropped out)"],
  ['<a href="https://newsonair.gov.in/indias-womens-cricket-team-wins-first-asian-games-gold-beats-sri-lanka-by-147-runs/">newsonair.gov.in</a>',"Women's cricket gold, beat Sri Lanka by 147 runs, 22 Sep 2026"],
  ['<a href="https://www.icc-cricket.com/news/india-beat-sri-lanka-to-claim-asian-games-gold">icc-cricket.com</a>',"Asian Games cricket final details"],
  ['<a href="https://www.theweek.in/news/sports/2026/09/29/history-made-neeru-dhanda-becomes-first-indian-woman-to-win-trap-gold-at-asian-games.html">theweek.in</a>',"Neeru Dhanda, first Indian woman trap gold, 29 Sep 2026"],
  ['<a href="https://www.uniindia.com/sports/asian-games-shooting-trap-neeru-gold/196491">uniindia.com</a>',"Neeru Dhanda's trap gold"],
  ['<a href="https://newsonair.gov.in/india-retains-nona-gaprindashvili-trophy-at-chess-olympiad-with-open-silver-womens-bronze/">newsonair.gov.in</a>',"Chess Olympiad: India open silver, women bronze; Gaprindashvili Trophy kept (27 Sep 2026)"],
  ['<a href="https://www.nationalheraldindia.com/sports/chess-olympiad-india-men-finish-with-silver-women-bronze-in-samarkand">nationalheraldindia.com</a>',"Held in Samarkand; Uzbekistan and China won gold"],
  ['<a href="https://khelnow.com/athletics/rumesh-pathirage-gold-world-athletics-ultimate-championship-202609">khelnow.com</a>',"Ultimate Championship javelin: Pathirage 91.09 m"],
  ['<a href="https://www.nbcsports.com/olympics/news/world-athletics-ultimate-championship-results-2026">nbcsports.com</a>',"Inaugural Ultimate Championship, Budapest, 11–13 Sep 2026"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/anant-nag-to-receive-dadasaheb-phalke-award-for-2024">drishtiias.com</a>',"Anant Nag: Phalke Award for 2024"],
  ['<a href="https://utkarsh.com/current-affairs/national/person-in-news/veteran-actor-anant-nag-to-receive-dadasaheb-phalke-award">utkarsh.com</a>',"Second Kannada actor after Rajkumar (1995); announced 16 Sep 2026"],
  ['<a href="https://www.manoramayearbook.in/current-affairs/india/2026/09/23/president-murmu-presents-72nd-national-film-awards-at-ekta-nagar.html">manoramayearbook.in</a>',"72nd NFA presented at Ekta Nagar, 22 Sep 2026; first outside New Delhi; winners"],
  ['<a href="https://www.onmanorama.com/entertainment/entertainment-news/2026/09/22/national-film-awards-ceremony-gujarat-mammootty-yami-gautam.html">onmanorama.com</a>',"Ceremony in Gujarat on 22 Sep; Mammootty, Yami Gautam among awardees"],
  ['<a href="https://abcnews4.com/news/entertainment/see-the-full-winners-list-for-the-78th-annual-primetime-emmys">abcnews4.com</a>',"78th Emmys winners: The Pitt, Widow's Bay"],
  ['<a href="https://bolnews.com/pakistan/pakistani-human-rights-lawyer-wins-alternative-nobel-award">bolnews.com</a>',"Right Livelihood Award 2026 announced 30 Sep; Jalila Haider"],
  ['<a href="https://eurovisionnews.ebu.ch/news-event/culture-entertainment/58827">eurovisionnews.ebu.ch</a>',"Right Livelihood Award 2026 laureates"],
  ["tools/gk/awards (this repo, checked 23 Oct 2026)","Booker 2026 shortlist on 22 Sep; winner due 9 Nov 2026 (Booker Prizes site)"],
  ["study-appointments.html (this repo, checked 23 Oct 2026)","CBSE Chairperson Mandeep K. Bhandari, ACC order of 25 Sep 2026 (Onmanorama, Careers360)"],
  ['<a href="https://www.icc-cricket.com/media-releases/tavengwa-mukuhlani-appointed-as-icc-deputy-chair">icc-cricket.com</a>',"Mukuhlani ICC Deputy Chair, to Nov 2027; after Imran Khwaja"],
  ['<a href="https://tribune.com.pk/story/2629863/mukuhlani-named-icc-deputy-chair">tribune.com.pk</a>',"Named on 17 Sep 2026"],
  ['<a href="https://psuwatch.com/newsupdates/jayanti-prasad-takes-additional-charge-as-ibbi-chairperson">psuwatch.com</a>',"Jayanti Prasad, IBBI additional charge from 13 Sep 2026"],
  ['<a href="https://musicacademymadras.in/?p=6506">musicacademymadras.in</a>',"S. R. Janakiraman died 4 Sep 2026, aged 98; honours"],
  ['<a href="https://www.newsbytesapp.com/news/entertainment/janakiraman-dies-aged-98-in-chennai-last-varadachariar-student/tldr">newsbytesapp.com</a>',"Last student of Tiger Varadachariar"],
  ['<a href="https://www.thenewsminute.com/tamil-nadu/solomon-pappaiah-tamil-scholar-and-celebrated-pattimandram-moderator-dies-at-90">thenewsminute.com</a>',"Solomon Pappaiah died aged 90, Madurai"],
  ['<a href="https://www.uniindia.com/south-india/people-tn-solomon-pappiah-passes-away/176184">uniindia.com</a>',"Pappaiah's death (Sep 2026); Padma Shri 2021"],
  ['<a href="https://www.uniindia.com/north-india/himachal-cm-condoles-mankotia-death/197261">uniindia.com</a>',"Vijay Singh Mankotia died 29 Sep 2026, aged 87"]
];

LESSONS.push(
{id:"CA9", title:"September 2026", hi:"सितंबर 2026", blocks:[
  {k:"hot", h:"Most likely to be asked: the <b>18th BRICS Summit</b> in New Delhi, the <b>EPFO wage ceiling of ₹25,000</b>, the <b>first LNG train</b> at Sabarmati, the <b>Asian Games</b> opening and India's first gold (women's cricket), <b>Anant Nag</b>'s Phalke Award at the first National Film Awards held outside Delhi, and the <b>US Open</b> champions."},
  {k:"story", h:"<p>September 2026 was India's month as host. On <b>12–13 September</b> New Delhi held the <b>18th BRICS Summit</b>, which ended with the <b>New Delhi Declaration</b>; a fortnight earlier PM Modi had been at the <b>SCO Summit in Bishkek</b>. At home, the EPFO wage ceiling went up from ₹15,000 to <b>₹25,000</b> on 17 September — the first change since 2014 — and a <b>0.4% charge on large UPI payments to merchants</b> was notified. Amit Shah flagged off India's <b>first LNG-powered train</b> from Sabarmati, and the Cabinet ended the month with <b>Green Energy Corridor Phase-III</b> and the <b>rabi MSPs</b>.</p><p>In sport, the <b>Asian Games</b> opened in <b>Aichi-Nagoya</b> on 19 September; India's women cricketers won the first gold and <b>Neeru Dhanda</b> made history in trap. <b>Zverev</b> and <b>Rybakina</b> won the US Open, and India took silver and bronze at the <b>Chess Olympiad</b> in Samarkand. The <b>72nd National Film Awards</b> were presented at <b>Ekta Nagar</b> in Gujarat — the first time outside New Delhi — with the <b>Phalke Award</b> for <b>Anant Nag</b>.</p>", key:"BRICS in Delhi, SCO in Bishkek; EPFO ₹25,000; LNG train Sabarmati; Asian Games Aichi-Nagoya; Phalke — Anant Nag."},
  {k:"table", title:"National — government decisions, schemes, laws", head:["Item","Fact","Note"], rows: CA9_NAT},
  {k:"table", title:"International — summits, agreements, elections abroad", head:["Item","Fact","Note"], rows: CA9_INT},
  {k:"table", title:"Economy and banking", head:["Item","Fact","Note"], rows: CA9_ECO},
  {k:"table", title:"Science, space and defence", head:["Item","Fact","Note"], rows: CA9_SCI},
  {k:"table", title:"Sports", head:["Item","Fact","Note"], rows: CA9_SPO},
  {k:"table", title:"Awards and honours", head:["Item","Fact","Note"], rows: CA9_AWD},
  {k:"table", title:"Appointments", head:["Item","Fact","Note"], rows: CA9_APP},
  {k:"table", title:"Places and persons in news", head:["Item","Fact","Note"], rows: CA9_PLC},
  {k:"table", title:"Obituaries", head:["Item","Fact","Note"], rows: CA9_OBI},
  {k:"trick", h:"Two summits, two declarations — <b>“S before B”</b>: the <b>SCO</b> met first, in <b>Bishkek</b> (1 Sep, Bishkek Declaration), then <b>BRICS</b> in <b>Delhi</b> (12–13 Sep, New Delhi Declaration). Count the BRICS summits on your fingers: Delhi's was the <b>18th</b>, and <b>China</b> hosts the 19th in 2027."},
  {k:"trick", h:"The <b>₹25,000 EPFO</b> ceiling came on <b>17 September</b> — the same day SEMICON India opened at Yashobhoomi. One date, two headlines."},
  {k:"trap", h:"<b>LNG train</b> = <b>Sabarmati</b>, Gujarat, <b>27 Sep 2026</b> (Amit Shah). <b>Hydrogen train</b> = <b>Jind–Sonipat</b>, Haryana, <b>17 Jul 2026</b> (PM Modi). Do not swap the fuel and the place."},
  {k:"trap", h:"At the Asian Games opening, <b>Tajinderpal Singh Toor</b> was first named India's male flag-bearer, but <b>Pawan Sehrawat</b> carried the flag with <b>Manu Bhaker</b>. And the Games are in <b>Aichi-Nagoya</b> (Japan) — not Hangzhou, which hosted the previous Games."},
  {k:"trap", h:"<b>Two different numbers</b>: India is <b>131st</b> in the Gender Gap Index 2026 (WEF) but <b>38th</b> in the Global Innovation Index 2026 (WIPO). <b>₹2,610</b> is wheat's MSP; <b>₹2,000</b> is the UPI limit above which merchants pay 0.4%."},
  {k:"table", title:"Sources (checked 24 Oct 2026)", head:["Source","What it confirmed"], rows: CA9_SRC}
], sum:[
  "18th BRICS Summit: New Delhi, 12–13 Sep 2026; New Delhi Declaration; China hosts in 2027.",
  "26th SCO Summit: Bishkek, 31 Aug – 1 Sep 2026; Bishkek Declaration.",
  "EPFO wage ceiling raised to ₹25,000 a month from 17 Sep 2026 (first change since 2014).",
  "UPI: 0.4% MDR on merchant payments above ₹2,000 from 15 Oct 2026 (notified 14 Sep).",
  "First LNG-powered train: Sabarmati, 27 Sep 2026 (Amit Shah).",
  "Cabinet, 30 Sep 2026: Green Energy Corridor Phase-III (₹1,86,405 crore) and rabi MSPs (wheat ₹2,610).",
  "Supreme Court split on the CEC appointment law (23 Sep 2026); matter sent to the CJI.",
  "GSLV-F17 launched EOS-05 (GISAT-1A) on 4 Sep 2026; first NGMV keel laid at Cochin Shipyard on 18 Sep.",
  "Asian Games opened in Aichi-Nagoya on 19 Sep; India's first gold: women's cricket (22 Sep); Neeru Dhanda trap gold (29 Sep).",
  "US Open 2026: Alexander Zverev and Elena Rybakina. Chess Olympiad (Samarkand): India open silver, women bronze.",
  "72nd National Film Awards at Ekta Nagar, Gujarat (22 Sep); Phalke Award for 2024 to Anant Nag.",
  "Gender Gap 2026: India 131 (16 Sep). GII 2026: India 38 (29 Sep).",
  "UNGA 81st session opened on 8 Sep under Khalilur Rahman (Bangladesh)."
]}
);

QB.push(
["CA9","Which city hosted the 18th BRICS Summit in September 2026?",["New Delhi","Rio de Janeiro","Kazan","Johannesburg"],"India hosted the 18th BRICS Summit in New Delhi on 12–13 Sep 2026; it ended with the New Delhi Declaration.",""],
["CA9","Which country is to host the BRICS summit in 2027, after India's 2026 summit?",["China","Brazil","Russia","South Africa"],"The New Delhi summit noted that China will host the next BRICS summit in 2027.",""],
["CA9","The 26th SCO Summit (31 Aug – 1 Sep 2026) was held in:",["Bishkek","Astana","Tianjin","Dushanbe"],"Kyrgyzstan's capital Bishkek hosted the 26th SCO Summit; the Bishkek Declaration was signed on 1 Sep 2026.",""],
["CA9","With effect from 17 September 2026, the wage ceiling for compulsory EPFO coverage is:",["₹25,000 a month","₹15,000 a month","₹21,000 a month","₹30,000 a month"],"The ceiling was raised from ₹15,000 to ₹25,000 a month — its first revision since September 2014.",""],
["CA9","From where was India's first LNG-powered train flagged off on 27 September 2026?",["Sabarmati (Ahmedabad)","Jind (Haryana)","Varanasi","Secunderabad"],"Amit Shah flagged it off from Sabarmati; Jind is where the hydrogen train started in July 2026.",""],
["CA9","India's first LNG-powered train runs on:",["A dual-fuel system of diesel and LNG","Hydrogen fuel cells","Electricity from overhead lines alone","Compressed biogas alone"],"Its power cars use both diesel and LNG; LNG can replace up to about 40% of the diesel.",""],
["CA9","On 23 September 2026 the Supreme Court gave a split verdict on challenges to the law on appointing the:",["Chief Election Commissioner and Election Commissioners","Comptroller and Auditor General","Chief Information Commissioner","Lokpal and its members"],"Justices Dipankar Datta and Satish Chandra Sharma differed, and the matter was placed before the CJI for a Constitution Bench.",""],
["CA9","The India Net Zero Portal and the NAPCC Dashboard were launched on 16 September 2026 in:",["Mumbai","New Delhi","Bengaluru","Chennai"],"They were launched in Mumbai on World Ozone Day by MoS Kirti Vardhan Singh.",""],
["CA9","Under the rabi MSPs for 2027-28 approved on 30 September 2026, wheat's MSP per quintal is:",["₹2,610","₹2,585","₹2,425","₹2,710"],"Wheat went up by ₹25 to ₹2,610; ₹2,585 was the previous year's price.",""],
["CA9","Which rabi crop got the largest MSP increase (₹675) for 2027-28?",["Safflower","Wheat","Gram","Barley"],"Safflower rose by ₹675 to ₹7,215 a quintal; wheat got the smallest rise.",""],
["CA9","Green Energy Corridor Phase-III, approved on 30 September 2026, adds intra-state transmission lines and about how much battery storage?",["50 GWh","5 GWh","500 GWh","20 GWh"],"Phase-III (₹1,86,405 crore, to 2032-33) includes 50 GWh of battery energy storage.",""],
["CA9","From 15 October 2026, what MDR applies to UPI payments to merchants above ₹2,000?",["0.4%","1.1%","0.04%","2%"],"The 14 Sep 2026 notification set 0.4% (capped at ₹300); payments up to ₹2,000 stay free, and customers pay nothing.",""],
["CA9","India's current account deficit in April–June 2026 (RBI data of 1 Sep 2026) was about:",["0.5% of GDP","2.5% of GDP","1.5% of GDP","0.1% of GDP"],"It was US$ 4.2 billion, or 0.5% of GDP, against 0.4% a year earlier.",""],
["CA9","In the Global Innovation Index 2026 released by WIPO on 29 September 2026, India ranked:",["38th","48th","131st","40th"],"India stayed 38th of 139; Switzerland was first for the 16th year.",""],
["CA9","In the WEF Global Gender Gap Report 2026 (16 September 2026), India's rank is:",["131st of 145","127th of 146","38th of 139","100th of 122"],"India's rank was unchanged at 131 of 145; Iceland stayed first.",""],
["CA9","GSLV-F17 lifted off from Sriharikota on 4 September 2026 carrying:",["EOS-05 (GISAT-1A)","NVS-02","Chandrayaan-4","NISAR"],"It put EOS-05 (GISAT-1A) into orbit — ISRO's first launch since the PSLV-C62 failure in January 2026.",""],
["CA9","The keel of the Indian Navy's first Next Generation Missile Vessel was laid on 18 September 2026 at:",["Cochin Shipyard","Mazagon Dock, Mumbai","Garden Reach, Kolkata","Hindustan Shipyard, Visakhapatnam"],"Cochin Shipyard is building six NGMVs; the first is due in March 2027.",""],
["CA9","Who won the men's singles title at the US Open 2026?",["Alexander Zverev","Ben Shelton","Carlos Alcaraz","Jannik Sinner"],"Zverev beat Ben Shelton in the final on 13 Sep 2026 for his first US Open title.",""],
["CA9","Who won the women's singles title at the US Open 2026?",["Elena Rybakina","Aryna Sabalenka","Coco Gauff","Iga Swiatek"],"Rybakina beat two-time defending champion Sabalenka on 12 Sep 2026 for her third Grand Slam title.",""],
["CA9","The 2026 Asian Games, opened on 19 September 2026, are being held in:",["Aichi-Nagoya, Japan","Hangzhou, China","Doha, Qatar","Riyadh, Saudi Arabia"],"Aichi-Nagoya (Japan) hosts the 2026 Games (19 Sep – 4 Oct); Hangzhou hosted the previous edition.",""],
["CA9","Who carried India's flag with Manu Bhaker at the 2026 Asian Games opening ceremony?",["Pawan Sehrawat","Tajinderpal Singh Toor","Neeraj Chopra","Harmanpreet Singh"],"Pawan Sehrawat stepped in for Tajinderpal Singh Toor, who could not attend the ceremony.",""],
["CA9","India's first gold medal at the 2026 Asian Games came in:",["Women's cricket","Men's hockey","Shooting","Kabaddi"],"India's women beat Sri Lanka by 147 runs in the final on 22 Sep 2026.",""],
["CA9","Neeru Dhanda made history at the 2026 Asian Games by winning gold in:",["Women's trap shooting","Women's skeet shooting","Women's 10 m air pistol","Women's 50 m rifle 3 positions"],"On 29 Sep 2026 she became the first Indian woman to win the Asian Games trap gold.",""],
["CA9","At the Chess Olympiad held in Samarkand in September 2026, India's open team won:",["Silver","Gold","Bronze","No medal"],"Uzbekistan won the open gold and India silver; India's women won bronze.",""],
["CA9","Who won the men's javelin at the first World Athletics Ultimate Championship (Budapest, September 2026)?",["Rumesh Tharanga Pathirage","Neeraj Chopra","Anderson Peters","Arshad Nadeem"],"The Sri Lankan threw 91.09 m; Neeraj Chopra did not compete because of injury.",""],
["CA9","Who received the Dadasaheb Phalke Award for 2024, presented on 22 September 2026?",["Anant Nag","Mohanlal","Mithun Chakraborty","Mammootty"],"Anant Nag received it at the 72nd National Film Awards; Mohanlal was the previous recipient.",""],
["CA9","Where were the 72nd National Film Awards presented on 22 September 2026?",["Ekta Nagar (Kevadia), Gujarat","Vigyan Bhawan, New Delhi","Panaji, Goa","Mumbai"],"It was the first time the ceremony was held outside New Delhi.",""],
["CA9","At the 72nd National Film Awards, the Best Actor award was shared by Kartik Aaryan and:",["Mammootty","Mohanlal","Vikrant Massey","Shah Rukh Khan"],"Mammootty won for Bramayugam and Kartik Aaryan for Chandu Champion.",""],
["CA9","Who was appointed Deputy Chair of the ICC on 17 September 2026?",["Tavengwa Mukuhlani","Imran Khwaja","Jay Shah","Roger Twose"],"The Zimbabwe Cricket chairman, the first Zimbabwean in the post, succeeded Imran Khwaja until November 2027.",""],
["CA9","Who presides over the 81st session of the UN General Assembly, which opened on 8 September 2026?",["Khalilur Rahman of Bangladesh","Annalena Baerbock of Germany","Philemon Yang of Cameroon","Andreas Kakouris of Cyprus"],"Bangladesh's Foreign Minister Khalilur Rahman was elected in June 2026, beating Cyprus's Andreas Kakouris.",""],
["CA9","Who was named Chairperson of the CBSE by an ACC order of 25 September 2026?",["Mandeep K. Bhandari","Lokhande Prashant Sitaram","Rahul Singh","Nidhi Chhibber"],"Mandeep K. Bhandari succeeded Lokhande Prashant Sitaram.",""],
["CA9","After Sweden's election of 13 September 2026, which Prime Minister announced his resignation?",["Ulf Kristersson","Stefan Löfven","Jonas Gahr Støre","Mark Rutte"],"The centre-left opposition won 176 of 349 seats, and Kristersson announced his resignation on 17 Sep 2026.",""],
["CA9","S. R. Janakiraman, who died in Chennai on 4 September 2026, was known as a:",["Carnatic musicologist","Kathakali dancer","Tamil film director","Chess grandmaster"],"He was a Carnatic vocalist and musicologist, the last disciple of Tiger Varadachariar, and died at 98.",""],
["CA9","Solomon Pappaiah, who died in Madurai in September 2026, was famous as a:",["Tamil scholar and Pattimandram debate moderator","Carnatic violinist","Bharatanatyam guru","Kabaddi coach"],"He moderated thousands of Pattimandram debates and received the Padma Shri in 2021.",""],
["CA9","Which Right Livelihood laureate of 2026 (announced 30 September) is a human-rights lawyer from Pakistan?",["Jalila Haider","Malala Yousafzai","Asma Jahangir","Timnit Gebru"],"Jalila Haider was one of four laureates; Timnit Gebru, also a 2026 laureate, is an AI researcher.",""],
["CA9","Which series won Outstanding Comedy Series at the 78th Primetime Emmy Awards (14 September 2026)?",["Widow's Bay","The Pitt","The Bear","Hacks"],"Widow's Bay won Best Comedy; The Pitt won Best Drama for the second year running.",""]
);

LASTMOMENT.push(
{t:"September 2026", era:["ca"], rows:[["BRICS (18th)","New Delhi, 12–13 Sep"],["SCO (26th)","Bishkek, 1 Sep"],["EPFO ceiling","₹25,000 from 17 Sep"],["UPI MDR","0.4% above ₹2,000 (from 15 Oct)"],["LNG train","Sabarmati, 27 Sep"],["Wheat MSP 2027-28","₹2,610"],["Asian Games","Aichi-Nagoya, from 19 Sep"],["US Open","Zverev · Rybakina"],["Phalke (2024)","Anant Nag"],["Gender Gap · GII","131 · 38"]]}
);
TILES.push(["18th","BRICS Summit — New Delhi, Sep 2026","ca"],["₹25,000","EPFO wage ceiling from 17 Sep 2026","ca"],["₹2,610","Wheat MSP for 2027-28","ca"],["147","Runs — India women beat Sri Lanka for Asian Games gold","ca"],["131","India in the Gender Gap Index 2026","ca"]);
