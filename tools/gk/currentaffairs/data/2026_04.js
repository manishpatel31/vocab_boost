/* Current Affairs 2026 · April 2026 (lesson CA4). Self-contained: its tables, lesson, questions, last-moment card and tiles.
   Every fact was checked on 24 Oct 2026 against the sources in the lesson's last table; nothing unconfirmed is kept.
   No award of note could be confirmed for April, so this month has no "Awards and honours" table.
   Table rows are [item, fact, note]. Names start with CA4_ so other month files never clash with them. */
const CA4_NAT = [
  ["Census 2027 — Phase I","Houselisting and Housing Census began on 1 April 2026; runs to 30 Sep 2026","Each state or UT picks its own 30-day window. Phase II, the population count, follows in February 2027."],
  ["Self-enumeration","Offered for the first time in an Indian census (from April 2026)","Residents fill the form on a web portal in the 15 days before house-to-house work starts, and get a Self-Enumeration ID."],
  ["Income-tax Act, 2025","Came into force on 1 April 2026, replacing the Income-tax Act, 1961","Passed in August 2025 (assent 21 Aug 2025); it introduces the 'tax year' — the first is 2026-27. Meant to simplify, not to change tax rates."],
  ["Dearness allowance","Cabinet, 18 Apr 2026: DA and DR raised by 2 points, from 58% to 60%","From 1 Jan 2026; about 50.46 lakh employees and 68.27 lakh pensioners benefit; cost about ₹6,791 crore a year."],
  ["Two hydro projects in Arunachal Pradesh","Approved by the CCEA in April 2026: ₹40,175 crore for 2,920 MW","Kamala HEP (1,720 MW, NHPC joint venture) and Kalai-II HEP (1,200 MW, on the Lohit, THDC joint venture). The state gets 12% free power."],
  ["Assembly polls — first round","9 Apr 2026: Assam (126 seats), Kerala (140) and Puducherry (30) voted","Each in a single phase. Schedule announced by the Election Commission on 15 Mar 2026."],
  ["Assembly polls — Tamil Nadu and West Bengal","Tamil Nadu (234 seats) voted on 23 Apr 2026; West Bengal on 23 Apr (152 seats) and 29 Apr (142)","824 seats and about 17.4 crore voters in all; counting for every state was set for 4 May 2026."]
];
const CA4_INT = [
  ["Hungary's parliamentary election","12 Apr 2026: Péter Magyar's Tisza party won about 53% and 138 of 199 seats","A two-thirds majority (preliminary count). Viktor Orbán, in power for 16 years, conceded; his Fidesz alliance got 55 seats."],
  ["US–Iran ceasefire","A two-week ceasefire announced on 7 Apr 2026, mediated by Pakistan","Tied to Iran reopening the Strait of Hormuz to safe passage; Pakistan's PM Shehbaz Sharif and army chief Asim Munir helped broker it."]
];
const CA4_ECO = [
  ["RBI monetary policy (8 Apr 2026)","Repo rate kept at 5.25%; stance neutral; MPC vote unanimous","The first policy of 2026-27. SDF 5.00%, MSF and Bank Rate 5.50%. Governor Sanjay Malhotra."],
  ["RBI projections for 2026-27 (8 Apr 2026)","GDP growth 6.9%; CPI inflation 4.6%","Growth for 2025-26 put at 7.6% (new GDP series); the West Asia war was flagged as a risk to prices."],
  ["IMF World Economic Outlook (14 Apr 2026)","India's growth for 2026-27 raised to 6.5% (from 6.4%)","World growth 3.1% in 2026. The IMF credited the cut in extra US tariffs on Indian goods (from 50% to 10%)."],
  ["World Press Freedom Index 2026 (RSF)","India 157th of 180 — released 30 Apr 2026","Down from 151st in 2025; 'very serious' category. Norway first for the 10th year running; Eritrea last."]
];
const CA4_SCI = [
  ["Artemis II — launch","NASA's SLS lifted off from Kennedy Space Center on 1 Apr 2026","Crew: Reid Wiseman (commander), Victor Glover (pilot), Christina Koch and Canada's Jeremy Hansen. First crew to the Moon since Apollo 17 (1972)."],
  ["Artemis II — return","Orion 'Integrity' splashed down in the Pacific off San Diego on 10 Apr 2026","A lunar flyby, not a landing; reached 406,771 km from Earth — the farthest humans have ever travelled, beating Apollo 13."],
  ["NASM-SR salvo launch","29 Apr 2026: two Naval Anti-Ship Missiles (Short Range) fired in quick succession from a Sea King helicopter","The first salvo launch, off Odisha (ITR Chandipur); developed by DRDO's Research Centre Imarat, Hyderabad, to replace the Sea Eagle."],
  ["DUSTLIK 2026","7th India–Uzbekistan army exercise, Gurumsaray (Namangan, Uzbekistan), ended 25 Apr 2026","60 personnel from each side; drills in semi-mountainous terrain. The 2025 edition was held in Pune."]
];
const CA4_SPO = [
  ["Asian Boxing Championships 2026","Ulaanbaatar (Mongolia), ended 10 Apr 2026: India 16 medals — 5 gold, 3 silver, 8 bronze","Most medals of any team; second on golds behind Kazakhstan (6). India's women topped the table with 10 medals."],
  ["Women's gold medallists","Minakshi (48 kg), Preeti Pawar (54 kg), Priya (60 kg), Arundhati (70 kg)","Four of India's five golds; silvers for Jaismine Lamboria (57 kg) and Alfiya Pathan (80+ kg)."],
  ["Vishvanath Suresh","Men's 50 kg gold, beating Japan's Daichi Iwai 5-0","India's only men's gold; Sachin Siwach took silver at 60 kg."],
  ["The Masters 2026 (golf)","Rory McIlroy won on 12 Apr 2026 at Augusta National","His second Masters in a row; his 2025 win had completed his career Grand Slam."]
];
const CA4_APP = [
  ["Vice-Chairperson, NITI Aayog","Ashok Kumar Lahiri — notified 24 Apr 2026","After Suman Bery. A former Chief Economic Adviser and member of the 15th Finance Commission."],
  ["Full-time members, NITI Aayog (24 Apr 2026)","Rajiv Gauba, K. V. Raju, Gobardhan Das, M. Srinivas and Abhay Karandikar","Named in the same notification that reconstituted NITI Aayog."],
  ["Secretary, Department of Land Resources","Narendra Bhooshan — took charge on 6 Apr 2026","IAS, 1992 batch (Uttar Pradesh cadre); the department is under the Ministry of Rural Development."]
];
const CA4_PLC = [
  ["Ulaanbaatar","Capital of Mongolia — hosted the Asian Boxing Championships (April 2026)","India won 16 medals there."],
  ["Gurumsaray, Namangan (Uzbekistan)","Venue of DUSTLIK 2026 (April 2026)","Dustlik means 'friendship' in Uzbek; the exercise alternates between India and Uzbekistan."],
  ["Anjaw district, Arunachal Pradesh","Site of the 1,200 MW Kalai-II project on the Lohit","The 1,720 MW Kamala project is in Kamle, Kra Daadi and Kurung Kumey districts."],
  ["Chandipur, Odisha","Integrated Test Range — tracked the NASM-SR salvo of 29 Apr 2026","On the Bay of Bengal coast."],
  ["Strait of Hormuz","Its reopening was the condition of the US–Iran ceasefire (7 Apr 2026)","The narrow sea link between the Persian Gulf and the Gulf of Oman."],
  ["Péter Magyar","Leader of Hungary's Tisza party — won the 12 Apr 2026 election","Ended Viktor Orbán's 16 years in power."]
];
const CA4_OBI = [
  ["Asha Bhosle","Playback singer; died in Mumbai on 12 Apr 2026, aged 92","Padma Vibhushan; last rites at Shivaji Park, Mumbai, on 13 Apr."],
  ["C. D. Gopinath","India's oldest living Test cricketer; died in Chennai on 9 Apr 2026, aged 96","Played in India's first Test win (v England, Madras, 1952); later chairman of selectors. Chandrakant Patankar is now the oldest."],
  ["Nadendla Bhaskara Rao","Former Chief Minister of Andhra Pradesh; died in Hyderabad on 22 Apr 2026, aged 90","CM for just 31 days (16 Aug – 16 Sep 1984), while N. T. Rama Rao was abroad for surgery."]
];
const CA4_SRC = [
  ['<a href="https://www.businesstoday.in/amp/india/story/initial-phase-of-census-2027-to-begin-on-april-1-houselisting-to-be-done-within-30-day-period-509920-2026-01-08">businesstoday.in</a>',"Census Phase I from 1 Apr to 30 Sep 2026; 30-day window per state"],
  ['<a href="https://www.businesstoday.in/india/story/how-to-self-enumerate-for-census-2027-step-by-step-guide-523851-2026-04-02">businesstoday.in</a>',"Self-enumeration open in April 2026; how it works"],
  ['<a href="https://en.vikaspedia.in/viewcontent/social-welfare/community-power/census-2027/self-enumeration-in-census-2027">vikaspedia.in</a>',"First census with self-enumeration; 15-day window; SE ID; Phase II in February 2027"],
  ['<a href="https://www.incometaxindia.gov.in/documents/d/guest/press-release-income-tax-act-2025-comes-into-force-from-01-april-2026-pdf">incometaxindia.gov.in (CBDT press release)</a>',"Income-tax Act, 2025 in force from 1 Apr 2026, replacing the 1961 Act"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/income-tax-act-2025">drishtiias.com</a>',"Assent 21 Aug 2025; tax year; Rules notified March 2026"],
  ['<a href="https://www.scconline.com/blog/post/2026/04/20/cabinet-approves-additional-2-percent-da-dr-january-2026/">scconline.com</a>',"Cabinet approved 2% DA/DR from 1 Jan 2026"],
  ['<a href="https://www.staffnews.in/2026/04/cabinet-approves-2-da-hike-effective-from-january-2026.html">staffnews.in</a>',"DA 58% to 60%; arrears from January 2026"],
  ['<a href="https://www.outlookmoney.com/news/cabinet-approves-2-da-hike-for-employees-and-pensioners-ahead-of-8th-pay-commission">outlookmoney.com</a>',"Decision of 18 Apr 2026; beneficiaries and cost"],
  ['<a href="https://www.energetica-india.net/news/ccea-approves-inr-40175-crore-investment-for-2920-mw-hydro-projects-in-arunachal-pradesh">energetica-india.net</a>',"CCEA: ₹40,175.33 crore, 2,920 MW; Kamala 1,720 MW (NHPC JV), Kalai-II 1,200 MW (THDC JV, Lohit, Anjaw); 12% free power"],
  ['<a href="https://www.manoramayearbook.in/current-affairs/india/2026/04/10/two-hydro-projects-in-arunachal-pradesh.html">manoramayearbook.in</a>',"Two Arunachal hydro projects approved (April 2026)"],
  ['<a href="https://arunachaltimes.in/article/cabinet-clears-rs-40000-crore-mega-hydro-projects-in-arunachal">arunachaltimes.in</a>',"Cabinet clears the Arunachal hydro projects"],
  ['<a href="https://www.wionews.com/india-news/assembly-elections-2026-ec-announces-poll-dates-for-west-bengal-tamil-nadu-kerala-assam-and-puducherry-1773573754642/amp">wionews.com</a>',"Poll dates: 9 Apr (Kerala, Assam, Puducherry), 23 Apr (Tamil Nadu, Bengal), 29 Apr (Bengal); results 4 May"],
  ['<a href="https://www.newsonair.gov.in/polling-to-be-held-in-single-phase-in-tamilnadu-on-23rd-april-two-phase-polling-in-west-bengal-to-be-held-on-23rd-and-29th-of-next-month">newsonair.gov.in</a>',"Single phase in Tamil Nadu; two phases (152 + 142 seats) in West Bengal"],
  ['<a href="https://www.etvbharat.com/en/bharat/assembly-election-2026-polling-in-assam-kerala-puducherry-enn26040805580">etvbharat.com</a>',"Polling in Assam, Kerala and Puducherry (30 seats) on 9 Apr 2026"],
  ['<a href="https://www.theweek.in/news/india/2026/03/15/assam-west-bengal-kerala-tamil-nadu-and-puducherry-election-commission-announces-poll-dates-for-four-states-1-ut-174-crore-voters-to-decide-new-assemblies.amp.html">theweek.in</a>',"Schedule announced 15 Mar 2026; 17.4 crore voters"],
  ['<a href="https://www.aljazeera.com/news/2026/4/12/hungary-election-early-results-show-magyars-tisza-ahead-of-orbans-fidesz">aljazeera.com</a>',"Péter Magyar wins Hungary's election, unseating Orbán after 16 years (12 Apr 2026)"],
  ['<a href="https://www.osw.waw.pl/en/publikacje/analyses/2026-04-13/elections-hungary-triumph-peter-magyar?page=1">osw.waw.pl</a>',"Tisza 138 of 199 seats, two-thirds majority; Fidesz 55"],
  ['<a href="https://www.intellinews.com/viktor-orban-concedes-loss-in-hungary-election-congratulates-peter-magyar-436848/">intellinews.com</a>',"Orbán conceded and congratulated Magyar"],
  ['<a href="https://www.fdd.org/analysis/2026/04/08/us-iran-agree-to-2-week-ceasefire-in-exchange-for-reopening-of-strait-of-hormuz/">fdd.org</a>',"US–Iran two-week ceasefire for reopening the Strait of Hormuz (8 Apr 2026)"],
  ['<a href="https://news.bgov.com/bloomberg-government-news/trump-agrees-to-two-week-iran-ceasefire-to-finalize-talks">news.bgov.com (Bloomberg)</a>',"Ceasefire agreed hours before the US deadline"],
  ['<a href="https://en.himalpress.com/iran-us-agree-two-week-ceasefire/">himalpress.com</a>',"Pakistan's mediation (Shehbaz Sharif, Asim Munir)"],
  ['<a href="https://ianslive.in/video/rbi-reporate-monetarypolicy-rbigovernor-sanjaymalhotra-08042026160926">ianslive.in</a>',"RBI keeps repo rate at 5.25% (8 Apr 2026)"],
  ['<a href="https://www.newsonair.gov.in/rbi-to-announce-its-first-bi-monthly-monetary-policy-statement-for-financial-year-2026-27-today">newsonair.gov.in</a>',"First bi-monthly policy of 2026-27, 8 Apr 2026"],
  ['<a href="https://www.tribuneindia.com/news/business/rbi-projects-6-9-gdp-growth-despite-geopolitical-headwinds/">tribuneindia.com</a>',"RBI projects 6.9% growth for 2026-27"],
  ['<a href="https://english.punjabkesari.com/india/rbi-raises-indias-real-gdp-growth-to-76-pc-for-fy26-pegs-fy27-at-69-pc/">punjabkesari.com</a>',"FY26 growth 7.6% (new series), FY27 6.9%"],
  ['<a href="https://dms.kotakmf.com/DMS/public/upload/1775727925782_RBI_Policy_-_080426.pdf">kotakmf.com (policy note, 8 Apr 2026)</a>',"CPI projection 4.6% for 2026-27; SDF 5.00%, MSF 5.50%"],
  ['<a href="https://www.theweek.in/wire-updates/business/2026/04/14/india-projected-to-grow-at-6.5-per-cent-in-fy27-imf.html">theweek.in (PTI)</a>',"IMF WEO, 14 Apr 2026: India 6.5%; US extra tariff cut from 50% to 10%"],
  ['<a href="https://www.outlookmoney.com/news/india-projected-to-grow-at-65-per-cent-in-fy27-imf">outlookmoney.com</a>',"World growth 3.1% in 2026"],
  ['<a href="https://thewire.in/media/india-is-157th-out-of-180-countries-on-rsfs-2026-world-press-freedom-index">thewire.in</a>',"Press Freedom Index 2026: India 157 of 180, down from 151; released 30 Apr 2026"],
  ['<a href="https://www.newslaundry.com/2026/04/30/palestine-freer-for-journalists-than-india-its-the-press-freedom-index-again">newslaundry.com</a>',"India's 2026 rank (157th)"],
  ['<a href="https://www.iasgyan.in/daily-current-affairs/world-press-freedom-index-2026-india-rank-global-trends">iasgyan.in</a>',"Norway first for the 10th year; Eritrea last"],
  ['<a href="https://news.wttw.com/2026/04/10/artemis-ii-astronauts-return-moon-splashdown-close-out-record-breaking-lunar-voyage">news.wttw.com</a>',"Artemis II: launch 1 Apr 2026, crew, record distance, splashdown 10 Apr"],
  ['<a href="https://ny1.com/nyc/all-boroughs/space/2026/04/10/artemis-ii-orion-splashdown-day-10">ny1.com</a>',"Orion splashdown, day 10 (10 Apr 2026)"],
  ['<a href="https://interestingengineering.com/space/nasa-artemis-ii-returns-safely-on-earth">interestingengineering.com</a>',"Artemis II returns safely; Orion 'Integrity'"],
  ['<a href="https://deccanchronicle.com/nation/drdo-navy-achieve-first-salvo-launch-of-nasm-sr-1953618">deccanchronicle.com</a>',"First salvo launch of NASM-SR"],
  ['<a href="https://stratpost.com/india-tests-naval-anti-ship-missile/">stratpost.com</a>',"Two missiles from a Sea King; ITR Chandipur; RCI-led development"],
  ['<a href="https://www.overtdefense.com/2026/05/06/drdo-and-the-indian-navys-successfully-test-salvo-launch-of-anti-ship-missile/">overtdefense.com</a>',"Salvo test on 29 Apr 2026 off Odisha"],
  ['<a href="https://newsonair.gov.in/india-uzbekistan-joint-military-exercise-dustlik-2026-concludes-successfully/">newsonair.gov.in</a>',"DUSTLIK 2026 concluded at Gurumsaray, Namangan"],
  ['<a href="https://www.tribuneindia.com/news/world/exercise-dustlik-2026-culminates-showcasing-india-uzbekistan-joint-operational-synergy/">tribuneindia.com</a>',"DUSTLIK 2026 culminates; semi-mountainous terrain"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/7th-edition-of-exercise-dustlik/print_manually">drishtiias.com</a>',"7th edition, to 25 Apr 2026; 6th edition was in Pune (2025)"],
  ['<a href="https://www.newsonair.gov.in/india-wins-16-medals-at-2026-asian-boxing-championships">newsonair.gov.in</a>',"India 16 medals (5 gold) at Ulaanbaatar, 10 Apr 2026"],
  ['<a href="https://thebridge.in/boxing/asian-cships-preeti-minakshi-india-4-gold-medals-56305">thebridge.in</a>',"Gold medallists and finals"],
  ['<a href="https://ianslive.in/asian-boxing-cships-indian-women-top-medal-charts-with-4-golds--20260409154836">ianslive.in</a>',"Indian women top the medal table with four golds"],
  ['<a href="https://www.timeforkids.com/g34/mcilroy-wins-again/">timeforkids.com</a>',"McIlroy wins the 2026 Masters (9–12 Apr)"],
  ['<a href="https://www.ajc.com/gallery/sports/2026/04/photos-masters-2026-round-4/">ajc.com</a>',"Green jacket presented to McIlroy on 12 Apr 2026"],
  ['<a href="https://digitalaudio.capitolbroadcasting.com/show/the-best-of-the-sports-shop/the-masters-rory-mcilroy-wins-back-to-back-masters-titles-at-augusta-national/">capitolbroadcasting.com</a>',"Back-to-back Masters titles"],
  ['<a href="https://www.newsonair.gov.in/economist-ashok-lahiri-appointed-as-vice-chairperson-of-niti-aayog/">newsonair.gov.in</a>',"Ashok Lahiri appointed NITI Aayog Vice-Chairperson"],
  ['<a href="https://www.niti.gov.in/sites/default/files/2026-04/Revised-Composition-of-the-National-Institution-for-Transforming-India-NITI-Aayog-24-04-26.pdf">niti.gov.in (revised composition, 24 Apr 2026)</a>',"Notification of 24 Apr 2026; full-time members"],
  ['<a href="https://www.dtnext.in/news/national/centre-reconstitutes-niti-aayog-ashok-lahiri-named-vice-chairman">dtnext.in</a>',"Succeeds Suman Bery; former CEA and 15th Finance Commission member"],
  ['<a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2249464&reg=1&lang=1">pib.gov.in (PRID 2249464)</a>',"Narendra Bhooshan takes charge as Secretary, Department of Land Resources (6 Apr 2026)"],
  ['<a href="https://www.businesstoday.in/india/story/legendary-singer-asha-bhosle-passes-away-at-92-in-mumbai-525263-2026-04-12">businesstoday.in</a>',"Asha Bhosle died in Mumbai on 12 Apr 2026, aged 92"],
  ['<a href="https://ianslive.in/asha-bhosle-passes-away-at-93-last-rites-to-be-held-on-monday-at-shivaji-park--20260412130249">ianslive.in</a>',"Last rites at Shivaji Park on Monday, 13 Apr"],
  ['<a href="https://www.newsonair.gov.in/legendary-singer-and-padma-vibhushan-awardee-asha-bhosle-passes-away-in-mumbai/">newsonair.gov.in</a>',"Padma Vibhushan awardee"],
  ['<a href="https://www.bcci.tv/articles/2026/news/55556335/bcci-mourns-the-passing-of-former-india-cricketer-c-d-gopinath">bcci.tv</a>',"BCCI condoles C. D. Gopinath (9 Apr 2026)"],
  ['<a href="https://www.etvbharat.com/en/sports/india-oldest-test-cricketer-cd-gopinath-passes-away-at-96-enn26040906531">etvbharat.com</a>',"Oldest Test cricketer, 96; 1952 win; selector; Patankar now oldest"],
  ['<a href="https://ianslive.in/c-d-gopinath-indias-oldest-test-cricketer-passes-away-at-96--20260409184401">ianslive.in</a>',"Gopinath died in Chennai"],
  ['<a href="https://www.etvbharat.com/en/state/former-andhra-pradesh-cm-nadendla-bhaskara-rao-passes-away-at-90-enn26042202639">etvbharat.com</a>',"Nadendla Bhaskara Rao died 22 Apr 2026, aged 90; CM 16 Aug – 16 Sep 1984"],
  ['<a href="https://www.siasat.com/former-andhra-pradesh-cm-nadendla-bhaskara-rao-passes-away-at-90-3458002/">siasat.com</a>',"Died in a Hyderabad hospital"]
];

LESSONS.push(
{id:"CA4", title:"April 2026", hi:"अप्रैल 2026", blocks:[
  {k:"hot", h:"Most likely to be asked: <b>Census 2027 Phase I</b> and the first <b>self-enumeration</b> (from 1 April), the <b>Income-tax Act, 2025</b> in force from 1 April, the <b>assembly poll dates</b> (9, 23 and 29 April), the <b>RBI's hold at 5.25%</b>, <b>Ashok Kumar Lahiri</b> at NITI Aayog, <b>Artemis II</b>, India's <b>16 medals</b> at the Asian Boxing Championships, and the death of <b>Asha Bhosle</b>."},
  {k:"story", h:"<p>April 2026 began with two big starts on the same day. On <b>1 April</b> the first phase of <b>Census 2027</b> opened — houselisting, with citizens allowed for the first time to <b>count themselves online</b> — and the new <b>Income-tax Act, 2025</b> replaced the law of 1961. The same evening (US time) NASA launched <b>Artemis II</b>, which carried four astronauts round the Moon and brought them home on 10 April.</p><p>At home it was an election month: <b>Assam, Kerala and Puducherry</b> voted on <b>9 April</b>, <b>Tamil Nadu</b> on <b>23 April</b>, and <b>West Bengal</b> on 23 and 29 April, with counting fixed for 4 May. The <b>RBI</b> held the repo rate at <b>5.25%</b> on 8 April, the Cabinet raised <b>DA to 60%</b>, and NITI Aayog got a new Vice-Chairperson, <b>Ashok Kumar Lahiri</b>. Abroad, <b>Péter Magyar</b> ended Viktor Orbán's 16 years in Hungary, and a Pakistan-brokered <b>US–Iran ceasefire</b> paused the West Asia war. India's boxers won <b>16 medals</b> in Ulaanbaatar, and the country mourned <b>Asha Bhosle</b>.</p>", key:"1 April: Census Phase I + Income-tax Act 2025 + Artemis II launch; polls 9/23/29 April; repo 5.25%; NITI — Lahiri; Asha Bhosle (12 Apr)."},
  {k:"table", title:"National — government decisions, schemes, laws", head:["Item","Fact","Note"], rows: CA4_NAT},
  {k:"table", title:"International — summits, agreements, elections abroad", head:["Item","Fact","Note"], rows: CA4_INT},
  {k:"table", title:"Economy and banking", head:["Item","Fact","Note"], rows: CA4_ECO},
  {k:"table", title:"Science, space and defence", head:["Item","Fact","Note"], rows: CA4_SCI},
  {k:"table", title:"Sports", head:["Item","Fact","Note"], rows: CA4_SPO},
  {k:"table", title:"Appointments", head:["Item","Fact","Note"], rows: CA4_APP},
  {k:"table", title:"Places and persons in news", head:["Item","Fact","Note"], rows: CA4_PLC},
  {k:"table", title:"Obituaries", head:["Item","Fact","Note"], rows: CA4_OBI},
  {k:"trick", h:"Poll dates — <b>“9 – 23 – 29, count on 4”</b>: <b>9 April</b> the three small ones (<b>A</b>ssam, <b>K</b>erala, <b>P</b>uducherry — “AKP”), <b>23 April</b> Tamil Nadu plus Bengal's first phase, <b>29 April</b> Bengal's second phase, and results on <b>4 May</b>. Only West Bengal voted twice."},
  {k:"trick", h:"<b>1 April 2026</b> is a triple date: Census Phase I begins, the Income-tax Act 2025 takes over, and Artemis II lifts off (US time). Say all three together."},
  {k:"trap", h:"<b>Three growth numbers</b> for 2026-27: the <b>RBI</b> said <b>6.9%</b> (8 Apr), the <b>IMF</b> said <b>6.5%</b> (14 Apr), and <b>7.6%</b> is the RBI's figure for the year just ended (2025-26). Match the number to the body."},
  {k:"trap", h:"<b>Kamala</b> = <b>1,720 MW</b> with <b>NHPC</b>; <b>Kalai-II</b> = <b>1,200 MW</b> on the <b>Lohit</b> with <b>THDC</b>. And <b>DUSTLIK 2026</b> was in <b>Uzbekistan</b> (Namangan) — it was the <b>2025</b> edition that was held in Pune."},
  {k:"trap", h:"<b>Artemis II did not land</b> on the Moon or even orbit it — it flew round it. The capsule is <b>Integrity</b>; the commander is <b>Reid Wiseman</b>, the pilot <b>Victor Glover</b>, and the Canadian is <b>Jeremy Hansen</b>."},
  {k:"table", title:"Sources (checked 24 Oct 2026)", head:["Source","What it confirmed"], rows: CA4_SRC}
], sum:[
  "Census 2027 Phase I (houselisting) from 1 Apr 2026 to 30 Sep 2026; first-ever self-enumeration (15 days before field work).",
  "Income-tax Act, 2025 in force from 1 Apr 2026, replacing the 1961 Act; first 'tax year' 2026-27.",
  "Polls: Assam, Kerala, Puducherry 9 Apr; Tamil Nadu 23 Apr; West Bengal 23 and 29 Apr; counting 4 May.",
  "RBI, 8 Apr 2026: repo unchanged at 5.25%, neutral; FY27 growth 6.9%, CPI 4.6%.",
  "IMF WEO, 14 Apr 2026: India 6.5% for 2026-27; world 3.1%.",
  "Press Freedom Index 2026 (RSF, 30 Apr): India 157 of 180; Norway first.",
  "DA raised from 58% to 60% (Cabinet, 18 Apr 2026; from 1 Jan 2026).",
  "Arunachal hydro: Kamala 1,720 MW (NHPC) + Kalai-II 1,200 MW (THDC, Lohit) — ₹40,175 crore.",
  "NITI Aayog Vice-Chairperson: Ashok Kumar Lahiri (24 Apr 2026), after Suman Bery.",
  "Hungary, 12 Apr: Péter Magyar's Tisza wins two-thirds; Orbán out after 16 years. US–Iran ceasefire (7 Apr), mediated by Pakistan.",
  "Artemis II: launched 1 Apr, splashdown 10 Apr off San Diego; Orion 'Integrity'; record 406,771 km from Earth.",
  "NASM-SR first salvo launch from a Sea King (29 Apr); DUSTLIK 2026 in Namangan, Uzbekistan.",
  "Asian Boxing Championships, Ulaanbaatar: India 16 medals (5 gold). Masters: Rory McIlroy again.",
  "Died: Asha Bhosle (12 Apr), C. D. Gopinath (9 Apr), Nadendla Bhaskara Rao (22 Apr)."
]}
);

QB.push(
["CA4","The first phase of Census 2027, houselisting and housing census, began on:",["1 April 2026","1 March 2027","1 October 2026","26 January 2026"],"Phase I opened on 1 April 2026 and runs to 30 September 2026; the population count follows in February 2027.",""],
["CA4","What did Census 2027 offer citizens for the first time in an Indian census?",["Self-enumeration on a web portal","Counting of livestock","A paper form sent by post","Voting on the census questions"],"Residents can fill in their own details online and get a Self-Enumeration ID, which enumerators later verify.",""],
["CA4","In Census 2027, the self-enumeration window in each state opens for how many days before house-to-house work starts?",["15 days","30 days","7 days","45 days"],"Self-enumeration runs for 15 days just before the state's 30-day houselisting window.",""],
["CA4","The Income-tax Act, 2025 came into force on:",["1 April 2026","1 April 2025","21 August 2025","1 January 2026"],"It took effect on 1 April 2026; 21 August 2025 was the date of the President's assent.",""],
["CA4","The Income-tax Act, 2025 replaced which law?",["The Income-tax Act, 1961","The Income-tax Act, 1922","The Finance Act, 2025","The Wealth-tax Act, 1957"],"It replaced the six-decade-old Income-tax Act, 1961, aiming at simpler language rather than new tax rates.",""],
["CA4","On which date did Assam, Kerala and Puducherry vote in the 2026 assembly elections?",["9 April 2026","23 April 2026","29 April 2026","4 May 2026"],"All three voted in a single phase on 9 April 2026; 4 May was the counting day.",""],
["CA4","Which state voted in two phases, on 23 and 29 April 2026?",["West Bengal","Tamil Nadu","Assam","Kerala"],"West Bengal voted for 152 seats on 23 April and 142 on 29 April; Tamil Nadu voted in one phase on 23 April.",""],
["CA4","Tamil Nadu's 234 assembly seats went to the polls in a single phase on:",["23 April 2026","9 April 2026","29 April 2026","13 May 2026"],"Tamil Nadu voted on 23 April 2026, the same day as West Bengal's first phase.",""],
["CA4","Under the Cabinet decision of 18 April 2026, dearness allowance for central government employees rose to:",["60%","58%","55%","62%"],"DA and DR went up by 2 points, from 58% to 60%, with effect from 1 January 2026.",""],
["CA4","The Kamala Hydro Electric Project in Arunachal Pradesh, approved in April 2026, has a capacity of:",["1,720 MW","1,200 MW","2,880 MW","600 MW"],"Kamala (1,720 MW) and Kalai-II (1,200 MW) together add 2,920 MW for about ₹40,175 crore.",""],
["CA4","On which river is the 1,200 MW Kalai-II hydro project, approved in April 2026, to be built?",["Lohit","Subansiri","Kameng","Siang"],"Kalai-II is on the Lohit in Anjaw district, built by a THDC–Arunachal Pradesh joint venture.",""],
["CA4","In its policy of 8 April 2026, the RBI kept the repo rate at:",["5.25%","5.50%","5.00%","6.50%"],"The MPC voted unanimously to hold the repo rate at 5.25% with a neutral stance.",""],
["CA4","What GDP growth did the RBI project for 2026-27 in its April 2026 policy?",["6.9%","7.6%","6.5%","7.4%"],"The RBI put 2026-27 growth at 6.9%; 7.6% was its estimate for 2025-26, and 6.5% was the IMF's forecast.",""],
["CA4","In the IMF's World Economic Outlook of April 2026, India's growth forecast for 2026-27 was:",["6.5%","6.9%","7.6%","3.1%"],"The IMF raised it from 6.4% to 6.5%; 3.1% was its forecast for world growth.",""],
["CA4","In the World Press Freedom Index 2026 released on 30 April 2026, India ranked:",["157th of 180","151st of 180","131st of 145","38th of 139"],"India fell six places from 151st in 2025 to 157th, in the 'very serious' category.",""],
["CA4","Which country topped the World Press Freedom Index 2026 for the tenth year running?",["Norway","Denmark","Sweden","Finland"],"Norway stayed first; Eritrea was last of the 180 countries.",""],
["CA4","Who was appointed Vice-Chairperson of NITI Aayog by the notification of 24 April 2026?",["Ashok Kumar Lahiri","Suman Bery","Rajiv Kumar","Arvind Panagariya"],"Ashok Kumar Lahiri succeeded Suman Bery when NITI Aayog was reconstituted.",""],
["CA4","Before becoming NITI Aayog's Vice-Chairperson in 2026, Ashok Kumar Lahiri had served as India's:",["Chief Economic Adviser","Governor of the RBI","Comptroller and Auditor General","Chairman of SEBI"],"He is a former Chief Economic Adviser and was a member of the 15th Finance Commission.",""],
["CA4","Which party won a two-thirds majority in Hungary's election of 12 April 2026?",["Tisza","Fidesz–KDNP","Our Homeland Movement","Jobbik"],"Péter Magyar's Tisza won about 138 of 199 seats, ending Viktor Orbán's 16 years in power.",""],
["CA4","Which country mediated the two-week US–Iran ceasefire announced on 7 April 2026?",["Pakistan","Qatar","Oman","Egypt"],"Pakistan's PM Shehbaz Sharif and army chief Asim Munir helped broker it; it was linked to reopening the Strait of Hormuz.",""],
["CA4","NASA's Artemis II mission, the first crewed flight to the Moon since 1972, was launched on:",["1 April 2026","10 April 2026","16 November 2022","12 April 2026"],"It lifted off from Kennedy Space Center on 1 April 2026; 16 November 2022 was the uncrewed Artemis I.",""],
["CA4","What was the name of the Orion capsule that carried the Artemis II crew?",["Integrity","Endurance","Resilience","Odyssey"],"The crew named their Orion 'Integrity'; it splashed down off San Diego on 10 April 2026.",""],
["CA4","Who was the Canadian astronaut on NASA's Artemis II mission (April 2026)?",["Jeremy Hansen","Chris Hadfield","David Saint-Jacques","Jenni Gibbons"],"Jeremy Hansen flew with NASA's Reid Wiseman, Victor Glover and Christina Koch; Jenni Gibbons was the Canadian backup.",""],
["CA4","Who commanded the Artemis II mission around the Moon in April 2026?",["Reid Wiseman","Victor Glover","Christina Koch","Jeremy Hansen"],"Reid Wiseman was commander and Victor Glover the pilot; Koch and Hansen were mission specialists.",""],
["CA4","On 29 April 2026, DRDO and the Navy carried out the first salvo launch of the NASM-SR missile from a:",["Sea King helicopter","Rafale-M fighter","P-8I aircraft","Kalvari-class submarine"],"Two missiles were fired in quick succession from a Sea King off Odisha; both hit the target.",""],
["CA4","Where was the India–Uzbekistan exercise DUSTLIK 2026 held in April 2026?",["Namangan, Uzbekistan","Pune, India","Umroi, Meghalaya","Bishkek, Kyrgyzstan"],"The 7th edition was held at the Gurumsaray training area in Namangan; the 2025 edition had been in Pune.",""],
["CA4","Where were the Asian Boxing Championships held in April 2026?",["Ulaanbaatar","Amman","Tashkent","Bangkok"],"India finished with 16 medals in the Mongolian capital.",""],
["CA4","How many medals did India win at the 2026 Asian Boxing Championships?",["16, including 5 gold","10, including 4 gold","12, including 6 gold","20, including 3 gold"],"India won 5 gold, 3 silver and 8 bronze — the most medals of any team; the women alone won 10, with 4 golds.",""],
["CA4","Who won India's only men's gold, at 50 kg, at the 2026 Asian Boxing Championships?",["Vishvanath Suresh","Sachin Siwach","Amit Panghal","Nishant Dev"],"Vishvanath Suresh beat Japan's Daichi Iwai 5-0; Sachin Siwach took silver at 60 kg.",""],
["CA4","Who won the Masters golf tournament at Augusta on 12 April 2026, his second in a row?",["Rory McIlroy","Scottie Scheffler","Justin Rose","Jon Rahm"],"McIlroy retained the green jacket he had won in 2025, when he completed his career Grand Slam.",""],
["CA4","Which legendary playback singer and Padma Vibhushan awardee died in Mumbai on 12 April 2026, aged 92?",["Asha Bhosle","Lata Mangeshkar","Alka Yagnik","Kavita Krishnamurthy"],"Asha Bhosle's last rites were held at Shivaji Park on 13 April; her sister Lata Mangeshkar had died in 2022.",""],
["CA4","C. D. Gopinath, who died in Chennai on 9 April 2026, was:",["India's oldest living Test cricketer","India's first Test captain","An Olympic hockey gold medallist","A former BCCI president"],"He was 96 and had played in India's first Test win, against England at Madras in 1952.",""],
["CA4","Nadendla Bhaskara Rao, who died on 22 April 2026, had briefly been Chief Minister of:",["Andhra Pradesh","Karnataka","Tamil Nadu","Odisha"],"He was CM of undivided Andhra Pradesh for 31 days in 1984, while N. T. Rama Rao was abroad.",""],
["CA4","Narendra Bhooshan took charge on 6 April 2026 as Secretary of which department?",["Department of Land Resources","Department of Rural Development","Department of Water Resources","Department of Agriculture and Farmers Welfare"],"The Department of Land Resources is under the Ministry of Rural Development.",""]
);

LASTMOMENT.push(
{t:"April 2026", era:["ca"], rows:[["Census Phase I","From 1 Apr (self-enumeration first)"],["Income-tax Act 2025","In force 1 Apr"],["Polls","9 · 23 · 29 Apr; count 4 May"],["Repo (8 Apr)","5.25% — held"],["RBI · IMF FY27","6.9% · 6.5%"],["Press Freedom","India 157"],["DA","60%"],["NITI VC","Ashok Kumar Lahiri"],["Artemis II","1–10 Apr, Orion Integrity"],["Asian Boxing","16 medals, Ulaanbaatar"],["Died","Asha Bhosle (12 Apr)"]]}
);
TILES.push(["5.25%","Repo rate held on 8 Apr 2026","ca"],["157","India in the Press Freedom Index 2026","ca"],["60%","DA from 1 Jan 2026 (approved 18 Apr)","ca"],["16","Medals for India — Asian Boxing Championships 2026","ca"],["2,920 MW","Two Arunachal hydro projects approved in April 2026","ca"]);
