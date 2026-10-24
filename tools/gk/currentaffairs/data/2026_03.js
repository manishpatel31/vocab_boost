/* Current Affairs 2026 · March 2026 (lesson CA3). Self-contained: its tables, lesson, questions, last-moment card and tiles.
   Every fact was checked on 24 Oct 2026 against the sources in the lesson's last table; nothing unconfirmed is kept.
   ISRO made no launch in March 2026 (none between PSLV-C62 on 12 Jan and GSLV-F17 on 4 Sep), so the science table is
   mostly defence and climate. Table rows are [item, fact, note]. Names start with CA3_ so other month files never clash with them. */
const CA3_NAT = [
  ["Jal Jeevan Mission extended","Cabinet, 10 Mar 2026: extended to December 2028","Total outlay raised to ₹8.69 lakh crore (central share ₹3.59 lakh crore); the aim is tap water for all 19.36 crore rural households."],
  ["Madurai Airport","Cabinet, 10 Mar 2026: declared an international airport","In Tamil Nadu; it already had customs and a few flights to Colombo, Dubai and Abu Dhabi."],
  ["Passive euthanasia — Harish Rana case","Supreme Court, 11 Mar 2026: life support may be withdrawn","India's first court-allowed passive euthanasia for a named person. Bench: Justices J. B. Pardiwala and K. V. Viswanathan; based on the Common Cause judgment (2018)."],
  ["Assembly elections announced","15 Mar 2026: Election Commission set polls for Assam, Kerala, Tamil Nadu, West Bengal and Puducherry","824 seats and about 17.4 crore voters; polling in April, counting on 4 May 2026 (see April)."],
  ["Small Hydro Power Development Scheme","Approved by the Cabinet in March 2026 for 2026-27 to 2030-31","Outlay of over ₹2,584 crore; aims at about 1,500 MW of small hydro projects in remote and rural areas."],
  ["Modified UDAN","Cabinet, 25 Mar 2026: ₹28,840 crore for ten years (2026-27 to 2035-36)","100 airports from unserved airstrips and 200 helipads, mostly in hilly, north-eastern, island and aspirational districts. UDAN began in October 2016."],
  ["Jan Vishwas (Amendment of Provisions) Bill, 2026","Introduced in the Lok Sabha on 27 Mar 2026","Decriminalises or rationalises 717 provisions in central laws — a second Jan Vishwas law after 2023."]
];
const CA3_INT = [
  ["Nepal's general election","5 Mar 2026: the Rastriya Swatantra Party (RSP) won 182 of 275 seats","125 of the 165 directly elected seats; the first election after the Gen Z protests of September 2025."],
  ["Nepal's new Prime Minister","Balendra (Balen) Shah sworn in on 27 Mar 2026","Oath from President Ram Chandra Poudel; a former rapper and Mayor of Kathmandu. He succeeded interim PM Sushila Karki."],
  ["Iran's new Supreme Leader","Mojtaba Khamenei named by the Assembly of Experts in early March 2026","Son of Ali Khamenei, killed on 28 Feb; the third Supreme Leader, and the first time the post has passed from father to son."],
  ["WTO's 14th Ministerial Conference (MC14)","Yaoundé, Cameroon, 26–30 Mar 2026 — ended without a declaration","The moratorium on customs duties on e-commerce lapsed; unfinished work was sent to Geneva. MC13 was at Abu Dhabi (2024)."],
  ["Indians leave Iran overland","Over 550 evacuated from Iran into Armenia by 16 Mar 2026","Air links were cut by the war; the embassies in Tehran, Yerevan and Baku ran the land routes."]
];
const CA3_ECO = [
  ["Excise duty on fuel cut","Notification of 26 Mar 2026: about ₹10 a litre off on both petrol and diesel","Petrol ₹13 → ₹3 and diesel ₹10 → nil, so pump prices stayed the same while crude went above US$ 110 (Strait of Hormuz disruption). Export duties on diesel and ATF were raised."],
  ["Current account deficit, Q3 2025-26","US$ 13.2 billion = 1.3% of GDP (RBI, 2 Mar 2026)","For October–December 2025; it was US$ 11.3 billion (1.1%) a year earlier. Merchandise trade gap US$ 93.6 billion."],
  ["Fiscal Health Index 2026 (NITI Aayog)","Second edition, March 2026: Odisha first (73.1) among 18 major states","Goa second, Jharkhand third; Punjab last. Arunachal Pradesh topped the 10 north-eastern and Himalayan states, ranked separately for the first time."],
  ["World Happiness Report 2026","India 116th of 147 (up from 118th) — released in March 2026","Finland first for the ninth year, then Iceland and Denmark. Theme: happiness and social media."],
  ["World Air Quality Report 2025 (IQAir)","Released in March 2026: India the 6th most polluted country","Loni (Ghaziabad, UP) the most polluted city; New Delhi the most polluted capital; Pakistan the most polluted country."]
];
const CA3_SCI = [
  ["India's climate target (NDC) for 2031–2035","Cabinet, 25 Mar 2026: emissions intensity of GDP to fall 47% by 2035 from 2005","Non-fossil sources to be 60% of installed power capacity by 2035; India had about 52.6% by February 2026."],
  ["LAMITIYE-2026","11th India–Seychelles exercise, Seychelles Defence Academy, March 2026","The first with all three services: the Assam Regiment, INS Trikand and an IAF C-130."],
  ["Dharma Guardian 2026","7th India–Japan army exercise, Chaubattia (Uttarakhand), ended in early March 2026","With Japan's Ground Self-Defense Force; it began in late February."]
];
const CA3_SPO = [
  ["ICC Men's T20 World Cup 2026","India beat New Zealand by 96 runs in the final, 8 Mar 2026, Ahmedabad","India's third T20 World Cup — the first team to win three, the first to win at home, and holders since 2024. Captain Suryakumar Yadav."],
  ["T20 World Cup 2026 — awards","Player of the Final: Jasprit Bumrah (4/15); Player of the Tournament: Sanju Samson","India made 255/5 in the final at the Narendra Modi Stadium; Samson scored 321 runs in the event."],
  ["All England Open 2026 (badminton)","Men: Lin Chun-yi (Chinese Taipei) beat Lakshya Sen 21-15, 22-20 on 8 Mar 2026","Women: Wang Zhiyi (China) beat top seed An Se-young. Played at Birmingham; both were first All England titles."],
  ["Indian Wells 2026 (BNP Paribas Open)","15 Mar 2026: Jannik Sinner beat Daniil Medvedev; Aryna Sabalenka beat Elena Rybakina","Sabalenka's first Indian Wells title after two lost finals; Sinner did not drop a set."],
  ["AFC Women's Asian Cup 2026","Japan beat hosts Australia 1-0 in the final at Sydney, 21 Mar 2026","Japan's third title. India went out in the group stage."]
];
const CA3_AWD = [
  ["98th Academy Awards (15 Mar 2026)","Best Picture: One Battle After Another","Best Director Paul Thomas Anderson; held at the Dolby Theatre, Los Angeles."],
  ["Oscars 2026 — acting","Best Actor Michael B. Jordan (Sinners); Best Actress Jessie Buckley (Hamnet)","Buckley is the first Irish winner of Best Actress. Supporting: Sean Penn and Amy Madigan."],
  ["Sahitya Akademi Awards 2025","Announced on 16 Mar 2026 in 24 languages","English: Navtej Sarna (Crimson Spring, a novel); Hindi: Mamta Kalia (Jeete Jee Allahabad, a memoir). The award carries ₹1 lakh."],
  ["Abel Prize 2026","Gerd Faltings (Germany) — announced on 19 Mar 2026","For arithmetic geometry, including his proof of the Mordell conjecture; the first German to win it. He also won the Fields Medal (1986)."],
  ["Pritzker Architecture Prize 2026","Smiljan Radić Clarke (Chile) — announced in March 2026","Known for the Regional Theatre of Biobío (Concepción) and the 2014 Serpentine Pavilion, London."]
];
const CA3_APP = [
  ["Governor of Bihar","Lt Gen (retd) Syed Ata Hasnain — named in the reshuffle announced in early March 2026","The President's order changed Governors and Lieutenant Governors in nine states and UTs."],
  ["Lieutenant Governor of Delhi","Taranjit Singh Sandhu — named in the same March 2026 order","A former diplomat (ambassador to the USA); Vinai Kumar Saxena moved from Delhi to Ladakh."],
  ["Governor of West Bengal","R. N. Ravi, moved from Tamil Nadu (March 2026)","After C. V. Ananda Bose resigned; Kerala Governor R. V. Arlekar was given charge of Tamil Nadu as well."],
  ["Other Governors (March 2026 order)","Maharashtra Jishnu Dev Varma · Telangana Shiv Pratap Shukla · Himachal Pradesh Kavinder Gupta · Nagaland Nand Kishore Yadav","Kavinder Gupta had been LG of Ladakh; Nand Kishore Yadav is a former Speaker of the Bihar Assembly."],
  ["Prime Minister of Nepal","Balen Shah — sworn in on 27 Mar 2026","His RSP won the 5 Mar election."],
  ["Supreme Leader of Iran","Mojtaba Khamenei — chosen in early March 2026","Only the third Supreme Leader since 1979 (Ruhollah Khomeini, Ali Khamenei)."]
];
const CA3_PLC = [
  ["Narendra Modi Stadium, Ahmedabad","Hosted the T20 World Cup final on 8 Mar 2026","India beat New Zealand there by 96 runs."],
  ["Yaoundé","Capital of Cameroon — hosted the WTO's MC14 (26–30 Mar 2026)","Chaired by Cameroon's trade minister, Luc Magloire Mbarga Atangana."],
  ["Madurai","Its airport was declared international on 10 Mar 2026","The upgrade is meant to help pilgrims to the Meenakshi Amman temple and Rameswaram."],
  ["Loni, Uttar Pradesh","World's most polluted city in the IQAir report released in March 2026","In Ghaziabad district, on Delhi's eastern edge."],
  ["Harish Rana","The first person allowed passive euthanasia by the Supreme Court (11 Mar 2026)","In a permanent vegetative state since a fall in 2013; AIIMS Delhi was asked to withdraw treatment with palliative care."],
  ["Balen Shah","Nepal's Prime Minister from 27 Mar 2026","A rapper turned politician; Mayor of Kathmandu from 2022."]
];
const CA3_OBI = [
  ["Jeelani Bano","Urdu fiction writer; died in Hyderabad on 1 Mar 2026","Padma Shri (2001); her best-known novel is Aiwan-e-Ghazal."],
  ["H. K. Dua","Journalist and diplomat; died in New Delhi on 4 Mar 2026, aged 88","Edited the Hindustan Times, The Indian Express and The Tribune; Ambassador to Denmark; nominated Rajya Sabha member (2009–15); Padma Bhushan (1998)."],
  ["Vijaypat Singhania","Former chairman of the Raymond Group (1980–2000); died in Mumbai in late March 2026, aged 87","In 2005 he set a world altitude record in a hot-air balloon (about 21 km); Padma Bhushan."]
];
const CA3_SRC = [
  ['<a href="https://www.pmindia.gov.in/en/news_updates/cabinet-approves-extension-of-jal-jeevan-mission-jjm-period-up-to-december-2028-with-enhanced-outlay-and-restructured-implementation-focusing-on-structural-reforms-in-rural-drinking-water-supply-sec">pmindia.gov.in (Cabinet release)</a>',"JJM to December 2028; ₹8.69 lakh crore, central ₹3.59 lakh crore; 19.36 crore households"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/cabinet-extends-jal-jeevan-mission-till-2028/print_manually">drishtiias.com (11 Mar 2026)</a>',"JJM extension reported on 11 Mar 2026 (Cabinet of Tuesday, 10 Mar)"],
  ['<a href="https://newsonair.gov.in/cabinet-approves-extension-of-jal-jeevan-mission-up-to-december-2028/">newsonair.gov.in</a>',"JJM extended to December 2028; outlay figures"],
  ['<a href="https://www.pmindia.gov.in/en/news_updates/cabinet-approves-declaration-of-madurai-airport-tamil-nadu-as-an-international-airport/">pmindia.gov.in (Cabinet release, 10 Mar 2026)</a>',"Madurai Airport declared international"],
  ['<a href="https://www.deccanherald.com/india/cabinet-clears-proposal-to-declare-madurai-airport-as-international-airport-3926494">deccanherald.com</a>',"Madurai decision; existing flights; pilgrim centres"],
  ['<a href="https://www.aljazeera.com/news/2026/3/11/indias-supreme-court-allows-first-ever-passive-euthanasia-death">aljazeera.com</a>',"Supreme Court allows first passive euthanasia, 11 Mar 2026"],
  ['<a href="https://www.tribuneindia.com/news/india/passive-euthanasia-sc-allows-withdrawal-of-life-support-to-32-year-old-in-vegetative-state-since-2013/">tribuneindia.com</a>',"Harish Rana in a vegetative state since 2013; AIIMS to withdraw support"],
  ['<a href="https://en.wikipedia.org/wiki/Harish_Rana_v._Union_of_India">wikipedia.org (Harish Rana v. Union of India)</a>',"Bench Pardiwala and Viswanathan; Common Cause (2018) basis"],
  ['<a href="https://www.theweek.in/news/india/2026/03/15/assam-west-bengal-kerala-tamil-nadu-and-puducherry-election-commission-announces-poll-dates-for-four-states-1-ut-174-crore-voters-to-decide-new-assemblies.amp.html">theweek.in</a>',"Poll schedule announced 15 Mar 2026; four states and Puducherry; 17.4 crore voters"],
  ['<a href="https://www.wionews.com/india-news/assembly-elections-2026-ec-announces-poll-dates-for-west-bengal-tamil-nadu-kerala-assam-and-puducherry-1773573754642/amp">wionews.com</a>',"Polling dates in April; counting 4 May 2026"],
  ['<a href="https://newsonair.gov.in/union-cabinet-approves-small-hydro-power-development-scheme-to-boost-clean-energy-initiatives-in-remote-and-rural-areas/">newsonair.gov.in</a>',"Small Hydro Power Development Scheme, 2026-27 to 2030-31; over ₹2,584 crore; about 1,500 MW"],
  ['<a href="https://www.newsonair.gov.in/cabinet-approves-modified-udan-with-%e2%82%b928840-crore-outlay">newsonair.gov.in</a>',"Modified UDAN, 25 Mar 2026: ₹28,840 crore, FY27–FY36"],
  ['<a href="https://indianinfrastructure.com/2026/03/26/union-cabinet-approves-modified-udan-scheme-with-rs-288-40-billion-outlay/">indianinfrastructure.com</a>',"100 airports, 200 helipads; UDAN since October 2016"],
  ["study-govt-schemes.html (this repo, checked 23 Oct 2026)","Modified UDAN approved 25 Mar 2026; hilly, NE, island and aspirational districts"],
  ['<a href="https://prsindia.org/files/bills_acts/bills_parliament/2026/Summary-Jan_Vishwas_Bill_2026.pdf">prsindia.org (Bill summary)</a>',"Jan Vishwas Bill, 2026 introduced in the Lok Sabha on 27 Mar 2026"],
  ['<a href="https://www.etvbharat.com/amp/en/bharat/govt-introduces-jan-vishwas-amendment-bill-in-lok-sabha-enn26032703471">etvbharat.com</a>',"Bill introduced; 717 provisions decriminalised"],
  ['<a href="https://prsindia.org/policy/monthly-policy-review/march-2026">prsindia.org (Monthly Policy Review, Mar 2026)</a>',"March 2026 items: Jan Vishwas Bill, Modified UDAN, CAD for Q3"],
  ['<a href="https://en.himalpress.com/vote-counting-concludes-in-all-165-fptp-seats-rsp-wins-125/">himalpress.com</a>',"Nepal: RSP won 125 of 165 FPTP seats; about 57–60 more under PR"],
  ['<a href="https://navbharatlive.com/world/nepal-balendra-shah-to-be-sworn-in-as-pm-march-27-rsp-wins-182-seats-1616947.html">navbharatlive.com</a>',"RSP 182 seats in all; Balen Shah to be sworn in on 27 Mar"],
  ['<a href="https://www.newsonair.gov.in/vote-counting-continues-in-14-constituencies-after-nepals-5-march-elections">newsonair.gov.in</a>',"Nepal voted on 5 Mar 2026"],
  ['<a href="https://www.ft.lk/news/Nepal-swears-in-ex-rapper-Balendra-Shah-as-Prime-Minister/56-790192">ft.lk</a>',"Balen Shah sworn in as PM by President Poudel; succeeded Sushila Karki"],
  ['<a href="https://www.intellinews.com/update-mojtaba-khamenei-chosen-as-new-supreme-leader-430169/">intellinews.com</a>',"Mojtaba Khamenei chosen Supreme Leader; first hereditary succession"],
  ['<a href="https://en.wikipedia.org/wiki/2026_Iranian_supreme_leader_election">wikipedia.org</a>',"Assembly of Experts vote early March 2026; third Supreme Leader"],
  ['<a href="https://www.weforum.org/stories/2026/04/mc14-yaounde-wto-trade/">weforum.org</a>',"MC14, Yaoundé, ended without a declaration; work moved to Geneva"],
  ['<a href="https://www.tralac.org/publications/article/17189-what-mc14-achieved-for-ldcs-and-what-happens-next.html">tralac.org</a>',"E-commerce duty moratorium lapsed at MC14"],
  ['<a href="https://www.thedailystar.net/business/news/wto-conference-ends-without-final-declaration-4139061">thedailystar.net</a>',"WTO conference ends without final declaration"],
  ["study-intl-orgs.html (this repo)","MC13 Abu Dhabi (2024), MC14 Yaoundé (March 2026)"],
  ['<a href="https://www.etvbharat.com/en/bharat/over-550-indians-evacuated-from-iran-to-armenia-govt-on-west-asia-situation-enn26031606472">etvbharat.com (16 Mar 2026)</a>',"Over 550 Indians evacuated from Iran to Armenia"],
  ['<a href="https://www.newsonair.gov.in/central-government-announces-duty-cut-on-fuel-export-taxes-to-ensure-domestic-supply">newsonair.gov.in (27 Mar 2026)</a>',"Excise cut on fuel; export taxes on diesel and ATF"],
  ['<a href="https://moneylife.in/article/petrol-excise-duty-down-to-rs3-diesel-nil-no-change-in-retail-prices-as-govt-aims-to-cut-omc-losses/80059.html">moneylife.in</a>',"Notification 11/2026-CE of 26 Mar 2026: petrol ₹13 → ₹3, diesel ₹10 → nil; retail prices unchanged"],
  ['<a href="https://sundayguardianlive.com/business/fuel-prices-today-30-march-2026-petrol-diesel-steady-at-9477l-8767l-in-delhi-global-crude-surges-to-113-amid-strait-of-hormuz-disruptions-check-city-wise-rates-180186">sundayguardianlive.com</a>',"Crude about US$ 113 on 30 Mar 2026 amid Hormuz disruption; pump prices steady"],
  ['<a href="https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=62317">rbi.org.in (press release 62317)</a>',"CAD US$ 13.2 bn (1.3% of GDP) in Q3 2025-26; US$ 11.3 bn a year earlier; trade gap US$ 93.6 bn"],
  ['<a href="https://www.etvbharat.com/en/business/india-current-account-deficit-widens-in-third-quarter-on-higher-trade-deficit-rbi-enn26030205166">etvbharat.com (2 Mar 2026)</a>',"CAD data released 2 Mar 2026"],
  ['<a href="https://niti.gov.in/sites/default/files/2026-03/Fiscal-Health-Index-2026.pdf">niti.gov.in (Fiscal Health Index 2026)</a>',"Second edition, published March 2026"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/odisha-tops-niti-aayog-fiscal-health-index-2026/print_manually">drishtiias.com</a>',"Odisha 73.1, Goa, Jharkhand; Punjab last; Arunachal first in NE and Himalayan group"],
  ['<a href="https://visionias.in/current-affairs/news-today/2026-03-12/economy/niti-aayog-launches-second-annual-edition-of-fiscal-health-index-fhi-2026">visionias.in</a>',"FHI 2026 launched as the second annual edition (March 2026); Punjab last"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/world-happiness-report-2026/print_manually">drishtiias.com (20 Mar 2026)</a>',"WHR 2026: India 116 of 147; Finland ninth year; theme social media"],
  ['<a href="https://www.dailyexcelsior.com/india-ranks-116th-in-world-happiness-report-2026-2/">dailyexcelsior.com</a>',"India 116th, up from 118th"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/world-air-quality-report-2025/print_manually">drishtiias.com (27 Mar 2026)</a>',"IQAir report: India 6th; Loni most polluted city; Delhi most polluted capital"],
  ['<a href="https://thewire.in/environment/a-2025-world-air-quality-report-lists-india-as-the-sixth-most-polluted-country">thewire.in</a>',"India the sixth most polluted country in the 2025 report"],
  ['<a href="https://www.newsonair.gov.in/cabinet-approves-indias-commitment-to-reduce-emissions-intensity-of-its-gdp-by-47-by-2035">newsonair.gov.in (26 Mar 2026)</a>',"NDC 2031–35: 47% emissions-intensity cut by 2035; 60% non-fossil capacity; 52.57% reached by Feb 2026"],
  ['<a href="https://newsonair.gov.in/11th-edition-of-india-seychelles-joint-military-exercise-lamitiye-2026-being-conducted-at-seychelles-defence-academy/">newsonair.gov.in (13 Mar 2026)</a>',"LAMITIYE-2026, 11th edition, Seychelles Defence Academy"],
  ['<a href="https://ianslive.in/indian-contingent-arrives-in-seychelles-for-joint-military-exercise-lamitiye-2026--20260309123909">ianslive.in</a>',"Contingent arrived 9 Mar 2026; Assam Regiment, INS Trikand, C-130; first tri-service edition"],
  ['<a href="https://ddnews.gov.in/en/7th-india-japan-joint-military-exercise-dharma-guardian-begins-in-uttarakhand/">ddnews.gov.in</a>',"7th Dharma Guardian begins in Uttarakhand"],
  ['<a href="https://ddnews.gov.in/en/india-japan-joint-exercise-dharma-guardian-2026-culminates/">ddnews.gov.in</a>',"Dharma Guardian 2026 concluded"],
  ['<a href="https://en.wikipedia.org/wiki/2026_Men%27s_T20_World_Cup_final">wikipedia.org</a>',"Final 8 Mar 2026, Ahmedabad: India 255/5 beat NZ by 96 runs; Bumrah Player of the Match"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/india-wins-third-icc-men-t20-world-cup-title/print_manually">drishtiias.com (9 Mar 2026)</a>',"India's third T20 World Cup title; first to win three"],
  ['<a href="https://www.radio.gov.pk/08-03-2026/india-clinch-icc-mens-t20-world-cup-title">radio.gov.pk</a>',"India clinch the title, 8 Mar 2026"],
  ['<a href="https://spmiasacademy.com/currentaffairs/who-won-the-t20-world-cup-2026-final-results/">spmiasacademy.com</a>',"Sanju Samson Player of the Tournament (321 runs); first home win"],
  ["study-sports.html (this repo, checked Oct 2026)","Suryakumar Yadav captain of the 2026 winning side"],
  ['<a href="https://en.wikipedia.org/wiki/2026_All_England_Open">wikipedia.org</a>',"All England 2026: Lin Chun-yi beat Lakshya Sen 21-15, 22-20; Wang Zhiyi beat An Se-young"],
  ['<a href="https://www.nst.com.my/amp/sports/badminton/2026/03/1392834/chun-yi-and-wang-zhiyi-claim-maiden-all-england-crowns">nst.com.my</a>',"Maiden All England crowns for Lin Chun-yi and Wang Zhiyi"],
  ['<a href="https://www.nbcpalmsprings.com/2026/03/16/sabalenka-and-sinner-crowned-champions-at-indian-wells">nbcpalmsprings.com</a>',"Sinner and Sabalenka won Indian Wells (finals 15 Mar 2026)"],
  ['<a href="https://en.wikipedia.org/wiki/2026_BNP_Paribas_Open_%E2%80%93_Men%27s_singles">wikipedia.org</a>',"Sinner beat Medvedev 7–6, 7–6 without dropping a set"],
  ['<a href="https://inside.fifa.com/en/news/japan-afc-womens-asia-cup-1-0-australia-matthias-grafstrom">inside.fifa.com</a>',"Japan 1-0 Australia, AFC Women's Asian Cup final, Sydney, 21 Mar 2026; third title"],
  ['<a href="https://en.wikipedia.org/wiki/2026_AFC_Women%27s_Asian_Cup">wikipedia.org</a>',"India out in the group stage (lost 3-1 to Chinese Taipei)"],
  ['<a href="https://www.leinsterexpress.ie/national/who-triumphed-at-the-98th-academy-awards-the-full-list-of-winners-6604311">leinsterexpress.ie (PA)</a>',"98th Oscars winners: One Battle After Another, Jordan, Buckley, Anderson, Penn, Madigan"],
  ['<a href="https://newsonair.gov.in/98th-academy-awards-underway-in-los-angeles/">newsonair.gov.in</a>',"98th Academy Awards in Los Angeles (night of 15 Mar 2026)"],
  ['<a href="https://www.newsweek.com/entertainment/did-the-oscars-get-it-right-every-winner-at-the-98th-academy-awards-11679559">newsweek.com</a>',"Every winner at the 98th Academy Awards; Buckley first Irish Best Actress"],
  ['<a href="https://www.newsonair.gov.in/sahitya-akademi-announces-winners-of-sahitya-akademi-awards-2025-in-24-indian-languages">newsonair.gov.in (16 Mar 2026)</a>',"Sahitya Akademi Awards 2025 announced in 24 languages"],
  ['<a href="https://www.manoramayearbook.in/current-affairs/india/2026/03/17/sahitya-akademi-award-2025-full-list-of-winners.html">manoramayearbook.in</a>',"Full list: Navtej Sarna (English), Mamta Kalia (Hindi); ₹1 lakh"],
  ['<a href="https://www.mpg.de/26279645/gerd-faltings-2026-abel-prize">mpg.de (19 Mar 2026)</a>',"Gerd Faltings to receive the Abel Prize 2026; Mordell conjecture; first German"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/abel-prize-2026/print_manually">drishtiias.com</a>',"Abel Prize 2026 to Faltings"],
  ['<a href="https://www.metalocus.es/en/news/smiljan-radic-clarke-new-2026-pritzker-architecture-prize">metalocus.es</a>',"Smiljan Radić Clarke (Chile), 2026 Pritzker laureate"],
  ['<a href="https://www.uia-architectes.org/?p=40207">uia-architectes.org</a>',"Radić wins the 2026 Pritzker (March 2026); Biobío theatre, Serpentine Pavilion 2014"],
  ['<a href="https://presidentofindia.nic.in/press_releases/press-communique-32">presidentofindia.nic.in (press communique)</a>',"Governors and LGs appointed; effective when they take charge"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/president-approves-governor-reshuffle-across-9-states-and-uts/print_manually">drishtiias.com (6 Mar 2026)</a>',"Reshuffle across nine states and UTs: full list"],
  ['<a href="https://www.newsonair.gov.in/wp-content/uploads/2026/03/kohima-eng-0730.pdf">newsonair.gov.in (news script, 6 Mar 2026)</a>',"Nand Kishore Yadav Governor of Nagaland; Syed Ata Hasnain Governor of Bihar"],
  ['<a href="https://www.siasat.com/jeelani-bano-the-matriarch-of-modern-urdu-letters-passes-away-at-age-90-3391678/">siasat.com</a>',"Jeelani Bano died in Hyderabad on Sunday, 1 Mar 2026; Aiwan-e-Ghazal"],
  ['<a href="https://www.outlookindia.com/amp/story/culture-society/the-red-bano-from-hyderabad-farewell-jeelani-bano">outlookindia.com</a>',"Jeelani Bano's death in Hyderabad; Padma Shri"],
  ['<a href="https://www.etvbharat.com/en/bharat/eminent-journalist-and-former-ambassador-h-k-dua-passes-away-at-88-enn26030402826">etvbharat.com (4 Mar 2026)</a>',"H. K. Dua died aged 88"],
  ['<a href="https://deccanchronicle.com/nation/eminent-journalist-rs-member-former-ambassador-h-k-dua-passes-away-1941409">deccanchronicle.com</a>',"Dua: editor, Rajya Sabha member, Ambassador; Padma Bhushan"],
  ['<a href="https://en.wikipedia.org/wiki/Deaths_in_March_2026">wikipedia.org (Deaths in March 2026)</a>',"Vijaypat Singhania, 87, listed in late March; Jeelani Bano, 1 Mar"],
  ['<a href="https://www.business-standard.com/topic/padma-shri">business-standard.com</a>',"Singhania, Padma Bhushan and former Raymond chairman, died in Mumbai aged 87"],
  ['<a href="https://www.aljazeera.com/news/2005/11/26/indian-breaks-hot-air-balloon-record">aljazeera.com (2005)</a>',"Singhania's hot-air balloon altitude record, November 2005"]
];

LESSONS.push(
{id:"CA3", title:"March 2026", hi:"मार्च 2026", blocks:[
  {k:"hot", h:"Most likely to be asked: <b>India's third T20 World Cup</b> (8 Mar, Ahmedabad, beat New Zealand), the <b>Harish Rana</b> passive-euthanasia ruling, the <b>Jal Jeevan Mission</b> to 2028, <b>Modified UDAN</b> and the <b>NDC for 2035</b> (25 Mar), the <b>Governor reshuffle</b>, <b>Balen Shah</b> as Nepal's PM, the <b>Oscars</b>, the <b>Sahitya Akademi Awards</b>, and India at <b>116</b> in the World Happiness Report."},
  {k:"story", h:"<p>March 2026 opened in the shadow of the war in West Asia. Iran's <b>Assembly of Experts</b> chose <b>Mojtaba Khamenei</b> to follow his father, Indians left Iran overland through <b>Armenia</b>, and with crude oil above US$ 110 the Centre cut <b>excise duty by about ₹10 a litre</b> on petrol and diesel (26 March) so that pump prices did not rise.</p><p>At home the Cabinet met on <b>10 March</b> (Jal Jeevan Mission extended to 2028; <b>Madurai</b> made an international airport) and on <b>25 March</b> (<b>Modified UDAN</b>; a new climate target — <b>47%</b> lower emissions intensity by 2035). On <b>11 March</b> the Supreme Court allowed passive euthanasia for <b>Harish Rana</b>, and on <b>15 March</b> the Election Commission announced polls in four states and Puducherry. New Governors went to Bihar, West Bengal, Maharashtra and other states, with <b>Taranjit Singh Sandhu</b> as Delhi's LG.</p><p>In sport, India won the <b>T20 World Cup</b> for a record third time, beating New Zealand by 96 runs at Ahmedabad on <b>8 March</b>; the same day <b>Lakshya Sen</b> lost the All England final. Next door, <b>Balen Shah</b>'s RSP swept Nepal's election (5 March) and he became Prime Minister on <b>27 March</b>. The WTO met at <b>Yaoundé</b> and ended without a declaration.</p>", key:"T20 WC — India, 3rd title (8 Mar, Ahmedabad); Harish Rana (11 Mar); JJM to 2028 and Madurai (10 Mar); UDAN and NDC (25 Mar); Balen Shah PM (27 Mar); fuel excise cut (26 Mar)."},
  {k:"table", title:"National — government decisions, schemes, laws", head:["Item","Fact","Note"], rows: CA3_NAT},
  {k:"table", title:"International — summits, agreements, elections abroad", head:["Item","Fact","Note"], rows: CA3_INT},
  {k:"table", title:"Economy and banking", head:["Item","Fact","Note"], rows: CA3_ECO},
  {k:"table", title:"Science, space and defence", head:["Item","Fact","Note"], rows: CA3_SCI},
  {k:"table", title:"Sports", head:["Item","Fact","Note"], rows: CA3_SPO},
  {k:"table", title:"Awards and honours", head:["Item","Fact","Note"], rows: CA3_AWD},
  {k:"table", title:"Appointments", head:["Item","Fact","Note"], rows: CA3_APP},
  {k:"table", title:"Places and persons in news", head:["Item","Fact","Note"], rows: CA3_PLC},
  {k:"table", title:"Obituaries", head:["Item","Fact","Note"], rows: CA3_OBI},
  {k:"trick", h:"Two Cabinet days, two pairs: <b>10 March = Water and Wings</b> (Jal Jeevan Mission to 2028, Madurai international airport); <b>25 March = Wings and Weather</b> (Modified UDAN, and the climate target of 47% by 2035)."},
  {k:"trick", h:"T20 World Cup numbers: <b>3</b> titles (2007, 2024, 2026), won by <b>96</b> runs, Bumrah <b>4/15</b>, Samson <b>321</b> runs. 'Three titles, ninety-six runs.'"},
  {k:"trap", h:"<b>Lakshya Sen</b> reached the All England final but <b>lost</b> to Lin Chun-yi of Chinese Taipei — he was runner-up, not champion. India's last All England singles winners are still Prakash Padukone (1980) and Pullela Gopichand (2001)."},
  {k:"trap", h:"The <b>Sahitya Akademi Awards 2025</b> were announced in <b>March 2026</b> — the award year is 2025. And the <b>Abel Prize</b> (mathematics, Faltings) is not the <b>Pritzker</b> (architecture, Radić)."},
  {k:"trap", h:"<b>Rank traps</b>: India is <b>116th</b> in the World Happiness Report 2026 but the <b>6th most polluted country</b> in IQAir's report. In NITI Aayog's Fiscal Health Index, <b>Odisha</b> is first and <b>Punjab</b> last. And ISRO made <b>no launch</b> in March 2026."},
  {k:"table", title:"Sources (checked 24 Oct 2026)", head:["Source","What it confirmed"], rows: CA3_SRC}
], sum:[
  "Cabinet, 10 Mar 2026: Jal Jeevan Mission extended to Dec 2028 (₹8.69 lakh crore); Madurai Airport declared international.",
  "Supreme Court, 11 Mar 2026: first passive euthanasia allowed — Harish Rana (Justices Pardiwala and Viswanathan).",
  "15 Mar 2026: polls announced for Assam, Kerala, Tamil Nadu, West Bengal and Puducherry (824 seats; counting 4 May).",
  "Cabinet, 25 Mar 2026: Modified UDAN (₹28,840 crore, 100 airports + 200 helipads); NDC 2031–35 (47% intensity cut by 2035, 60% non-fossil capacity).",
  "Jan Vishwas Bill, 2026 introduced in the Lok Sabha on 27 Mar.",
  "Fuel excise cut by about ₹10 a litre (notification 26 Mar) as crude passed US$ 110.",
  "CAD Q3 2025-26: US$ 13.2 bn = 1.3% of GDP. FHI 2026: Odisha first, Punjab last. WHR 2026: India 116. IQAir: India 6th most polluted; Loni worst city.",
  "Governors (March): Bihar Syed Ata Hasnain, West Bengal R. N. Ravi, Maharashtra Jishnu Dev Varma; Delhi LG Taranjit Singh Sandhu.",
  "Nepal: RSP won 182 of 275 (5 Mar); Balen Shah PM (27 Mar). Iran: Mojtaba Khamenei Supreme Leader. WTO MC14 at Yaoundé — no declaration.",
  "T20 World Cup: India beat NZ by 96 runs, Ahmedabad, 8 Mar — third title; Bumrah Player of the Final, Samson of the Tournament.",
  "All England: Lin Chun-yi beat Lakshya Sen; Wang Zhiyi. Indian Wells: Sinner, Sabalenka. AFC Women's Asian Cup: Japan.",
  "Oscars (15 Mar): One Battle After Another; Michael B. Jordan; Jessie Buckley. Abel: Gerd Faltings. Pritzker: Smiljan Radić.",
  "Sahitya Akademi Awards 2025 (16 Mar): Navtej Sarna (English), Mamta Kalia (Hindi).",
  "Exercises: LAMITIYE-2026 (Seychelles, first tri-service); Dharma Guardian (Japan, Uttarakhand).",
  "Deaths: Jeelani Bano (1 Mar), H. K. Dua (4 Mar), Vijaypat Singhania (late March)."
]}
);

QB.push(
["CA3","India won the ICC Men's T20 World Cup 2026 on 8 March 2026 by beating which team in the final?",["New Zealand","South Africa","England","Australia"],"India beat New Zealand by 96 runs at Ahmedabad for their third T20 World Cup title.",""],
["CA3","Where was the final of the ICC Men's T20 World Cup 2026 played?",["Narendra Modi Stadium, Ahmedabad","Eden Gardens, Kolkata","Wankhede Stadium, Mumbai","R. Premadasa Stadium, Colombo"],"The final on 8 Mar 2026 was at the Narendra Modi Stadium, Ahmedabad.",""],
["CA3","With the 2026 win, how many ICC Men's T20 World Cup titles has India won?",["Three","Two","Four","One"],"India won in 2007, 2024 and 2026 — the first team to win three.",""],
["CA3","Who was named Player of the Tournament at the ICC Men's T20 World Cup 2026?",["Sanju Samson","Jasprit Bumrah","Suryakumar Yadav","Abhishek Sharma"],"Samson scored 321 runs; Bumrah (4/15) was Player of the Final.",""],
["CA3","On 10 March 2026 the Union Cabinet extended the Jal Jeevan Mission up to:",["December 2028","March 2027","December 2030","March 2026"],"The mission was extended to December 2028 with the total outlay raised to ₹8.69 lakh crore.",""],
["CA3","Which airport did the Union Cabinet declare an international airport on 10 March 2026?",["Madurai","Coimbatore","Tiruchirappalli","Puducherry"],"Madurai Airport in Tamil Nadu was declared an international airport.",""],
["CA3","In March 2026 the Supreme Court allowed India's first court-approved passive euthanasia in the case of:",["Harish Rana","Aruna Shanbaug","Common Cause","Gian Kaur"],"On 11 Mar 2026 it allowed life support to be withdrawn for Harish Rana, in a vegetative state since 2013.",""],
["CA3","Which two judges gave the Harish Rana passive-euthanasia judgment of 11 March 2026?",["J. B. Pardiwala and K. V. Viswanathan","Surya Kant and B. R. Gavai","D. Y. Chandrachud and Sanjiv Khanna","Dipankar Datta and Satish Chandra Sharma"],"Justice Pardiwala wrote the lead opinion and Justice Viswanathan a concurring one.",""],
["CA3","The Modified UDAN scheme approved on 25 March 2026 has an outlay of about:",["₹28,840 crore","₹8,690 crore","₹12,200 crore","₹1,00,000 crore"],"₹28,840 crore over ten years (2026-27 to 2035-36), for 100 airports and 200 helipads.",""],
["CA3","How many new airports does the Modified UDAN scheme (March 2026) plan to develop from unserved airstrips?",["100","200","50","441"],"It plans 100 airports and 200 helipads.",""],
["CA3","Under the NDC for 2031–2035 approved on 25 March 2026, India aims to cut the emissions intensity of its GDP by 2035 (from 2005 levels) by:",["47%","45%","50%","60%"],"The target is 47% by 2035; 60% is the share of non-fossil sources in installed power capacity by 2035.",""],
["CA3","The notification of 26 March 2026 cut the central excise duty on petrol and diesel by about how much a litre?",["₹10","₹2","₹5","₹13"],"Petrol duty fell from ₹13 to ₹3 and diesel from ₹10 to nil, so pump prices stayed unchanged.",""],
["CA3","According to the RBI (2 March 2026), India's current account deficit in October–December 2025 was:",["US$ 13.2 billion, or 1.3% of GDP","US$ 4.2 billion, or 0.5% of GDP","US$ 30.1 billion, or 1.0% of GDP","A surplus of US$ 13.2 billion"],"The CAD was US$ 13.2 billion (1.3% of GDP), up from US$ 11.3 billion a year earlier.",""],
["CA3","Which state topped NITI Aayog's Fiscal Health Index 2026 among the 18 major states?",["Odisha","Goa","Gujarat","Punjab"],"Odisha scored 73.1; Goa and Jharkhand followed, and Punjab came last.",""],
["CA3","In the World Happiness Report 2026, India ranked:",["116th","118th","126th","131st"],"India moved up from 118th to 116th of 147; Finland was first for the ninth year.",""],
["CA3","According to IQAir's World Air Quality Report 2025, released in March 2026, the world's most polluted city was:",["Loni (Uttar Pradesh)","Byrnihat (Meghalaya)","New Delhi","Lahore"],"Loni in Ghaziabad district topped the list; New Delhi was the most polluted capital.",""],
["CA3","Who became Prime Minister of Nepal on 27 March 2026?",["Balendra (Balen) Shah","K. P. Sharma Oli","Sushila Karki","Pushpa Kamal Dahal"],"Balen Shah's Rastriya Swatantra Party won the election of 5 Mar 2026; he succeeded interim PM Sushila Karki.",""],
["CA3","Which party won Nepal's general election held on 5 March 2026?",["Rastriya Swatantra Party","Nepali Congress","CPN-UML","Rastriya Prajatantra Party"],"The RSP won 182 of 275 seats; the Nepali Congress came a distant second.",""],
["CA3","Who was chosen as Iran's new Supreme Leader in March 2026?",["Mojtaba Khamenei","Masoud Pezeshkian","Ebrahim Raisi","Hassan Rouhani"],"The Assembly of Experts chose Mojtaba Khamenei, son of Ali Khamenei, who was killed on 28 Feb 2026.",""],
["CA3","The WTO's 14th Ministerial Conference (MC14), held on 26–30 March 2026, took place in:",["Yaoundé, Cameroon","Abu Dhabi, UAE","Geneva, Switzerland","Nairobi, Kenya"],"MC14 was held at Yaoundé and ended without a declaration; MC13 had been at Abu Dhabi.",""],
["CA3","Who was appointed Lieutenant Governor of Delhi in the reshuffle of March 2026?",["Taranjit Singh Sandhu","Vinai Kumar Saxena","Kavinder Gupta","Syed Ata Hasnain"],"The former diplomat Taranjit Singh Sandhu replaced V. K. Saxena, who moved to Ladakh.",""],
["CA3","In March 2026, Lt Gen (retd) Syed Ata Hasnain was appointed Governor of:",["Bihar","West Bengal","Nagaland","Ladakh"],"He was named Governor of Bihar; former Bihar Speaker Nand Kishore Yadav went to Nagaland.",""],
["CA3","Who became Governor of West Bengal in March 2026 after C. V. Ananda Bose resigned?",["R. N. Ravi","Jishnu Dev Varma","Shiv Pratap Shukla","R. V. Arlekar"],"R. N. Ravi moved from Tamil Nadu; Kerala Governor R. V. Arlekar got charge of Tamil Nadu as well.",""],
["CA3","Who beat Lakshya Sen in the men's singles final of the All England Open 2026?",["Lin Chun-yi","Kunlavut Vitidsarn","Viktor Axelsen","Shi Yuqi"],"Lin Chun-yi of Chinese Taipei won 21-15, 22-20 on 8 Mar 2026 for his first All England title.",""],
["CA3","Who won the women's singles title at Indian Wells (BNP Paribas Open) in March 2026?",["Aryna Sabalenka","Elena Rybakina","Iga Swiatek","Coco Gauff"],"Sabalenka beat Rybakina in the final on 15 Mar 2026; Jannik Sinner won the men's title.",""],
["CA3","Which country won the AFC Women's Asian Cup 2026, beating Australia 1-0 in the final at Sydney?",["Japan","China","South Korea","North Korea"],"Japan won on 21 Mar 2026 for its third title.",""],
["CA3","Which film won Best Picture at the 98th Academy Awards on 15 March 2026?",["One Battle After Another","Sinners","Hamnet","Weapons"],"One Battle After Another won Best Picture, and Paul Thomas Anderson Best Director.",""],
["CA3","Who won Best Actress at the 98th Academy Awards (March 2026), the first Irish winner in the category?",["Jessie Buckley","Saoirse Ronan","Amy Madigan","Emma Stone"],"Jessie Buckley won for Hamnet; Michael B. Jordan was Best Actor for Sinners.",""],
["CA3","Navtej Sarna won the Sahitya Akademi Award 2025 (announced 16 March 2026) for English for his novel:",["Crimson Spring","Jeete Jee Allahabad","Aiwan-e-Ghazal","The Exile"],"Crimson Spring won in English; Mamta Kalia's memoir Jeete Jee Allahabad won in Hindi.",""],
["CA3","The Abel Prize 2026, announced in March 2026, went to:",["Gerd Faltings","Smiljan Radić","Terence Tao","Masaki Kashiwara"],"The German mathematician won for his work in arithmetic geometry; Smiljan Radić won the Pritzker Prize for architecture.",""],
["CA3","LAMITIYE-2026, held in March 2026, is a joint military exercise between India and:",["Seychelles","Sri Lanka","Mauritius","Maldives"],"The 11th edition was held at the Seychelles Defence Academy — the first with all three Indian services.",""],
["CA3","Dharma Guardian, whose 2026 edition was held in Uttarakhand in February–March 2026, is an exercise between the armies of India and:",["Japan","France","Australia","Mongolia"],"It is held with Japan's Ground Self-Defense Force; the 2026 edition was the seventh.",""],
["CA3","H. K. Dua, who died on 4 March 2026, was best known as a:",["Journalist and editor","Hindustani classical singer","Test cricketer","Nuclear scientist"],"He edited the Hindustan Times, The Indian Express and The Tribune, and was India's ambassador to Denmark.",""],
["CA3","Vijaypat Singhania, who died in March 2026, was a former chairman of which group?",["Raymond","Bajaj","Godrej","Mahindra"],"He led the Raymond Group from 1980 to 2000 and set a hot-air balloon altitude record in 2005.",""],
["CA3","On 15 March 2026 the Election Commission announced assembly polls for four states and which Union Territory?",["Puducherry","Jammu and Kashmir","Delhi","Ladakh"],"Assam, Kerala, Tamil Nadu, West Bengal and Puducherry voted in April; counting was on 4 May 2026.",""]
);

LASTMOMENT.push(
{t:"March 2026", era:["ca"], rows:[["T20 World Cup","India, 3rd title — beat NZ (8 Mar, Ahmedabad)"],["Passive euthanasia","Harish Rana (11 Mar)"],["JJM","Extended to Dec 2028 (10 Mar)"],["Modified UDAN","₹28,840 crore (25 Mar)"],["NDC 2035","47% intensity cut"],["Fuel excise","Cut ~₹10/litre (26 Mar)"],["Nepal PM","Balen Shah (27 Mar)"],["Delhi LG","Taranjit Singh Sandhu"],["Oscars","One Battle After Another"],["WHR 2026","India 116"]]}
);
TILES.push(["3rd","T20 World Cup title for India — 8 Mar 2026","ca"],["96","Runs — India beat New Zealand in the T20 WC final","ca"],["47%","Emissions-intensity cut by 2035 — India's new NDC","ca"],["₹28,840 cr","Modified UDAN (Mar 2026)","ca"],["116","India in the World Happiness Report 2026","ca"]);
