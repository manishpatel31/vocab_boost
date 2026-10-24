/* Current Affairs 2026 · February 2026 (lesson CA2). Self-contained: its tables, lesson, questions, last-moment card and tiles.
   Every fact was checked on 24 Oct 2026 against the sources in the lesson's last table; nothing unconfirmed is kept.
   The Budget and Survey figures agree with lesson L20 of study-economics.html.
   Table rows are [item, fact, note]. Names start with CA2_ so other month files never clash with them. */
const CA2_NAT = [
  ["Union Budget 2026-27","Presented by FM Nirmala Sitharaman on 1 Feb 2026 — a Sunday","Total spending about ₹53.47 lakh crore; income-tax slabs and rates left unchanged."],
  ["Fiscal deficit target","4.3% of GDP for 2026-27 (BE)","Down from 4.4% in 2025-26 (revised estimate)."],
  ["Central government debt","55.6% of GDP in 2026-27 (BE)","The aim is about 50% of GDP by March 2031."],
  ["Capital expenditure","₹12.2 lakh crore for 2026-27","Up from ₹11.2 lakh crore in 2025-26."],
  ["Income-tax Act, 2025","Replaces the Income-tax Act, 1961 from 1 Apr 2026","'Previous year' and 'assessment year' give way to a single 'tax year'."],
  ["16th Finance Commission","Report for 2026–31 tabled on 1 Feb 2026; states' share of central taxes kept at 41%","Chaired by Arvind Panagariya; the same 41% as the 15th Commission."],
  ["India AI Impact Summit","Bharat Mandapam, New Delhi, from 16 Feb 2026","The New Delhi Declaration on AI Impact was adopted on 19 Feb; over 38,000 GPUs already provided under the IndiaAI Mission."],
  ["Ramsar sites on World Wetlands Day (2 Feb 2026)","India's count stood at 98 after Patna Bird Sanctuary (Etah, UP) and Chhari-Dhand (Kutch, Gujarat) were added","Announced on 30 Jan 2026 by Environment Minister Bhupender Yadav; up from 26 sites in 2014. Theme: 'Wetlands and Traditional Knowledge: Celebrating Cultural Heritage'."]
];
const CA2_INT = [
  ["India–US interim trade framework","Announced on 6 Feb 2026: US tariff on Indian goods cut to 18%","The extra 25% duty was removed from 7 Feb 2026; dairy and cereals stayed protected on India's side."],
  ["Bangladesh's general election","12 Feb 2026: the BNP won 209 of 297 declared seats","Jamaat-e-Islami second (68); the Awami League did not contest. A referendum backed the July National Charter reforms."],
  ["Bangladesh's new Prime Minister","Tarique Rahman sworn in on 17 Feb 2026","Son of Khaleda Zia; replaced the interim government led by Muhammad Yunus."],
  ["Japan's general election","8 Feb 2026: PM Sanae Takaichi's LDP won 316 of 465 seats","A two-thirds majority on its own — the LDP's best result since its founding in 1955."],
  ["Portugal's presidential run-off","8 Feb 2026: António José Seguro beat André Ventura with about 66.7%","Seguro, a Socialist, succeeds Marcelo Rebelo de Sousa; Ventura leads the far-right Chega."],
  ["US–Israeli strikes on Iran","28 Feb 2026: joint strikes across Iran; Supreme Leader Ali Khamenei killed","Iranian state media confirmed his death; Iran fired missiles at Israel and at Gulf states hosting US bases."]
];
const CA2_ECO = [
  ["RBI monetary policy (6 Feb 2026)","Repo rate kept at 5.25%; stance neutral","The last MPC meeting of 2025-26, after a 25 bp cut in December 2025. SDF 5.0%, MSF 5.5%."],
  ["New CPI series (12 Feb 2026)","Base year 2024; January 2026 retail inflation 2.75%","Replaced the 2012 base; built on the Household Consumption Expenditure Survey 2023-24; 358 items."],
  ["New GDP series (27 Feb 2026)","Base year 2022-23, replacing 2011-12","Under the new series, growth for 2025-26 is estimated at 7.6%."],
  ["Securities Transaction Tax on F&O","Futures 0.02% → 0.05%; options premium 0.1% → 0.15% (from 1 Apr 2026)","Announced in the Budget to cool speculative derivatives trading."],
  ["India Semiconductor Mission 2.0","Announced in the Budget 2026-27","Moves beyond chips to equipment, materials and Indian chip design (IP)."],
  ["Electronics Components Manufacturing Scheme","Outlay raised to ₹40,000 crore in the Budget","The scheme had started in April 2025 with about ₹23,000 crore."],
  ["SME Growth Fund","₹10,000 crore fund announced in the Budget 2026-27","The Cabinet approved it in October 2026 (see October)."],
  ["Henley Passport Index, February 2026","India 75th, with 56 visa-free destinations","Up from 80th in January."],
  ["Corruption Perceptions Index 2025 (Transparency International)","Released on 10 Feb 2026: India 91st of 182, score 39","Up from 96th (score up by one point). Denmark first (89) for the eighth time; the global average fell to 42."]
];
const CA2_SCI = [
  ["International Fleet Review 2026","Reviewed by President Droupadi Murmu off Visakhapatnam on 18 Feb 2026","Theme: 'United Through Oceans, Strengthening Bridges of Friendship'."],
  ["Exercise MILAN 2026","Multinational naval exercise at Visakhapatnam, alongside the Fleet Review","The IONS Conclave of Chiefs was held at the same time."],
  ["New Delhi Frontier AI Commitments","Voluntary framework announced on 19 Feb 2026 at the AI Impact Summit","Adopted by leading global and Indian AI companies."],
  ["INS Anjadip","Commissioned at Chennai on 27 Feb 2026","An anti-submarine warfare shallow water craft built by GRSE, Kolkata; Navy chief Admiral Dinesh K. Tripathi presided."]
];
const CA2_SPO = [
  ["Australian Open 2026 — men's singles","Carlos Alcaraz beat Novak Djokovic 2-6, 6-2, 6-3, 7-5 on 1 Feb 2026","His first Australian Open and seventh major; the youngest man to complete the career Grand Slam."],
  ["ICC Under-19 World Cup 2026","India beat England by 100 runs in the final at Harare on 6 Feb 2026","India's sixth U-19 title — a record; the tournament was held in Zimbabwe and Namibia."],
  ["Vaibhav Sooryavanshi","175 off 80 balls in the U-19 World Cup final","The highest score in a U-19 World Cup final; Player of the Match and of the Series."],
  ["Women's Premier League 2026","Royal Challengers Bengaluru beat Delhi Capitals by 6 wickets, Vadodara, 5 Feb 2026","RCB's second title; chasing 204 — the highest successful chase in the WPL. Delhi lost a fourth straight final."],
  ["Tata Steel Chess Masters 2026","Won by Nodirbek Abdusattorov (Uzbekistan) on 1 Feb 2026","Played at Wijk aan Zee (Netherlands); Javokhir Sindarov second."],
  ["Winter Olympics 2026","Milan–Cortina (Italy), ended on 22 Feb 2026: Norway top with 18 golds","The USA second (12 golds, its best); Italy had its best Winter Games."]
];
const CA2_AWD = [
  ["68th Grammy Awards (1 Feb 2026)","Album of the Year: Bad Bunny, 'Debí Tirar Más Fotos'","The first Spanish-language album to win it; held in Los Angeles."],
  ["Grammys 2026 — other main awards","Record of the Year 'Luther' (Kendrick Lamar & SZA); Song of the Year 'Wildflower' (Billie Eilish)","Best New Artist: Olivia Dean."]
];
const CA2_APP = [
  ["CEO, NITI Aayog (additional charge)","Nidhi Chhibber — from 24 Feb 2026","After B. V. R. Subrahmanyam's tenure ended. A 1994-batch IAS officer (Chhattisgarh cadre), DG of NITI Aayog's DMEO and a former CBSE chairperson. Anurag Jain became the regular CEO in July 2026."],
  ["Prime Minister of Bangladesh","Tarique Rahman — sworn in on 17 Feb 2026","Oath given by President Mohammed Shahabuddin; 25 ministers sworn in with him."],
  ["President-elect of Portugal","António José Seguro — elected on 8 Feb 2026","For a five-year term."],
  ["Prime Minister of Japan","Sanae Takaichi — won a two-thirds majority on 8 Feb 2026","PM since 21 Oct 2025; her party's best result since 1955."]
];
const CA2_PLC = [
  ["Bharat Mandapam, New Delhi","Hosted the India AI Impact Summit (Feb 2026)","Gave its name to the New Delhi Declaration on AI Impact."],
  ["Visakhapatnam","International Fleet Review and MILAN 2026","Home of the Navy's Eastern Naval Command."],
  ["Harare, Zimbabwe","U-19 World Cup final, 6 Feb 2026","India beat England at Harare Sports Club."],
  ["Vadodara, Gujarat","WPL 2026 final, 5 Feb 2026","At the Baroda Cricket Association Stadium."],
  ["Milan and Cortina d'Ampezzo, Italy","Joint hosts of the 2026 Winter Olympics","Norway topped the medal table."],
  ["Wijk aan Zee, Netherlands","Tata Steel Chess, which ended on 1 Feb 2026","Abdusattorov won the Masters."],
  ["Chhari-Dhand, Kutch (Gujarat)","Became a Ramsar site (announced 30 Jan 2026)","Gujarat's only Conservation Reserve; a stopover for migratory birds that spreads to about 80 sq km in the monsoon."],
  ["Patna Bird Sanctuary, Etah (Uttar Pradesh)","Became a Ramsar site (announced 30 Jan 2026)","Not in Bihar — it is in Etah district of Uttar Pradesh."]
];
const CA2_OBI = [
  ["André Béteille","Sociologist; died in New Delhi on 3 Feb 2026, aged 91","Professor at the Delhi School of Economics and the first Chancellor of Ashoka University; wrote 'Caste, Class and Power'; Padma Bhushan (2005)."],
  ["Ricky A. J. Syngkon","Lok Sabha MP for Shillong (Meghalaya); died on 19 Feb 2026, aged 54","Collapsed while playing football; a member of the Voice of the People Party (VPP)."],
  ["Mukul Roy","Former Railway Minister; died in Kolkata on 23 Feb 2026, aged 71","A founder of the Trinamool Congress; Railway Minister in 2012 after Dinesh Trivedi."],
  ["R. Nallakannu","CPI veteran and freedom fighter; died in Chennai on 25 Feb 2026, aged 101","State Secretary of the CPI in Tamil Nadu (1992–2005); given a state funeral."],
  ["Ayatollah Ali Khamenei","Supreme Leader of Iran; killed in the US–Israeli strikes of 28 Feb 2026","Iran declared national mourning; senior officials were killed with him."]
];
const CA2_SRC = [
  ['<a href="https://prsindia.org/files/budget/budget_parliament/2026/Union_Budget_Analysis-2026-27.pdf">prsindia.org (Union Budget Analysis 2026-27)</a>',"Fiscal deficit 4.3% (BE) v 4.4% (RE); total spending ₹53.47 lakh crore; debt 55.6% of GDP, about 50% by March 2031; tax slabs unchanged"],
  ['<a href="https://scroll.in/latest/1090413/scroll_in">scroll.in</a>',"Capex ₹12.2 lakh crore, up from ₹11.2 lakh crore; no tax-rate changes"],
  ["study-economics.html, lesson L20 (this repo)","Budget presented 1 Feb 2026, a Sunday; FD 4.3%; debt 55.6%; 16th FC 41%; ISM 2.0; SME Growth Fund"],
  ['<a href="https://www.outlookbusiness.com/economy-and-policy/new-i-t-law-higher-securities-transaction-tax-on-fo-trade-to-kick-in-from-april-1">outlookbusiness.com</a>',"New Income-tax Act and higher STT on F&O from 1 Apr 2026"],
  ['<a href="https://www.outlookmoney.com/invest/stt-hike-from-april-1-2026-budget-what-it-means-for-futures-and-options-traders">outlookmoney.com</a>',"STT rates: futures 0.02%→0.05%, options 0.1%→0.15%"],
  ['<a href="https://www.onmanorama.com/news/business/2026/03/31/new-income-tax-law-april-1.html">onmanorama.com</a>',"Income-tax Act, 2025 replaces the 1961 Act; 'tax year'"],
  ['<a href="https://prsindia.org/policy/report-summaries/report-of-the-16th-finance-commission-for-2026-31">prsindia.org (16th FC summary)</a>',"41% vertical share, unchanged from the 15th FC; period 2026–31"],
  ['<a href="https://assamtribune.com/buzz/union-budget-2026-27-live-492">assamtribune.com (Budget live blog)</a>',"Government accepted the 41% share; debt 55.6% (BE) from 56.1% (RE)"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/16th-finance-commission-report/print_manually">drishtiias.com</a>',"16th FC report, chaired by Arvind Panagariya, tabled with the Budget"],
  ['<a href="https://www.digitalindia.gov.in/press_release/budget-2026-27-announces-the-launch-of-india-semiconductor-mission-ism-2-0/">digitalindia.gov.in</a>',"Budget 2026-27 launches ISM 2.0"],
  ['<a href="https://www.thenewsminute.com/amp/story/all-states/budget-2026-27-announces-india-semiconductor-mission-20-hikes-component-manufacturing-outlay-to-rs-40000-crore">thenewsminute.com</a>',"ECMS outlay raised to ₹40,000 crore; ISM 2.0 scope; ₹10,000 crore SME fund"],
  ['<a href="https://www.digitalindia.gov.in/press_release/india-ai-impact-summit-2026-concludes-at-bharat-mandapam-with-strong-global-endorsement-of-indias-responsible-ai-vision/">digitalindia.gov.in</a>',"AI Impact Summit at Bharat Mandapam; 38,000+ GPUs under IndiaAI Mission"],
  ['<a href="https://visionias.in/blog/current-affairs/india-ai-impact-summit-2026-and-new-delhi-declaration-indias-leap-into-the-global-ai-order">visionias.in</a>',"New Delhi Declaration on AI Impact adopted 19 Feb; Frontier AI Commitments"],
  ['<a href="https://www.etvbharat.com/en/bharat/us-and-india-joint-statement-on-india-us-interim-trade-agreement-enn26020700547">etvbharat.com</a>',"India–US framework for an interim trade agreement; tariff 18%"],
  ['<a href="https://kpmg.com/us/en/taxnewsflash/news/2026/02/united-states-removes-tariffs-imports-india.html">kpmg.com</a>',"Extra 25% duty on Indian goods removed from 7 Feb 2026"],
  ['<a href="https://www.newsonair.gov.in/india-us-trade-deal-cuts-tariff-on-indian-exports-to-18-piyush-goyal">newsonair.gov.in</a>',"Tariff on Indian exports cut to 18% (Piyush Goyal)"],
  ['<a href="https://www.aljazeera.com/news/2026/2/13/bangladeshs-bnp-claims-landslide-win-in-first-election-since-2024-uprising">aljazeera.com</a>',"BNP landslide in the 12 Feb 2026 election"],
  ['<a href="https://www.asiapacific.ca/publication/bangladeshs-2026-election-bnp-landslide-ends-two-begums-era">asiapacific.ca</a>',"Seat counts; referendum backing the July Charter reforms"],
  ['<a href="https://english.adnkronos.com/2026/02/17/bangladesh-tarique-rahman-is-the-new-prime-minister/">adnkronos.com</a>',"Tarique Rahman sworn in on 17 Feb 2026; 25 ministers; President Shahabuddin"],
  ['<a href="https://www.ewn.co.za/2026/02/17/bangladesh-pm-to-be-tarique-rahman-and-lawmakers-sworn-into-parliament">ewn.co.za</a>',"End of Muhammad Yunus's interim government"],
  ['<a href="https://aljazeera.com/news/2026/2/8/pm-sanae-takaichis-party-set-for-majority-in-japan-parliamentary-elections">aljazeera.com</a>',"LDP 316 of 465 seats (NHK); best since 1955"],
  ['<a href="https://en.wikipedia.org/wiki/2026_Japanese_general_election">wikipedia.org</a>',"Japan election of 8 Feb 2026; Takaichi PM since 21 Oct 2025"],
  ['<a href="https://www.michiganpublic.org/2026-02-09/center-left-socialist-candidate-wins-over-populist-in-portugals-presidential-runoff">michiganpublic.org (AP)</a>',"Seguro 66.7% v Ventura 33.3%, 8 Feb 2026; five-year term; succeeds Rebelo de Sousa"],
  ['<a href="https://jamaica-gleaner.com/article/news/20260228/us-and-israel-strike-iran">jamaica-gleaner.com</a>',"US and Israel strike Iran, 28 Feb 2026"],
  ['<a href="https://www.dailysignal.com/2026/02/28/iranian-leader-khamenei-killed-in-strikes-israel-says/">dailysignal.com</a>',"Khamenei killed in the strikes; Iranian state media confirmation and mourning"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/rbi-mpc-keeps-repo-rate-unchanged/print_manually">drishtiias.com</a>',"RBI kept repo at 5.25% on 6 Feb 2026; FY26 growth projection 7.4%"],
  ['<a href="https://sahi.com/blogs/rbi-mpc-february-2026-repo-rate-held-at-5-25-as-rbi-prioritises-stability-over-fresh-easing">sahi.com</a>',"Neutral stance; SDF 5.0%, MSF 5.5%; after December cut"],
  ['<a href="https://www.businesstoday.in/amp/latest/economy/story/inflation-steady-at-275-in-january-under-revamped-cpi-framework-515907-2026-02-12">businesstoday.in</a>',"New CPI series, base 2024; January inflation 2.75% (12 Feb 2026)"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/cpi-base-year-revised-to-2024/print_manually">drishtiias.com</a>',"CPI base revised from 2012 to 2024; HCES 2023-24; 358 items"],
  ['<a href="https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/feb/doc2026227806401.pdf">pib.gov.in (MoSPI release, 27 Feb 2026)</a>',"New national accounts series, base 2022-23, replacing 2011-12"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/indias-new-gdp-series-with-base-year-2022-23/print_manually">drishtiias.com</a>',"New series: 2025-26 growth estimated at 7.6%"],
  ['<a href="https://gulfnews.com/world/asia/india/indian-passport-climbs-to-75th-in-feb-2026-visa-free-access-now-for-56-destinations-1.500443374">gulfnews.com</a>',"Henley Passport Index Feb 2026: India 75th, 56 destinations"],
  ['<a href="https://www.newsonair.gov.in/president-droupadi-murmu-to-witness-international-fleet-review-2026-in-visakhapatnam">newsonair.gov.in</a>',"President to review the IFR 2026 at Visakhapatnam"],
  ['<a href="https://www.hcicolombo.gov.in/section/press-releases/international-fleet-review-ifr-and-milan-2026-at-visakhapatnam/">hcicolombo.gov.in (Indian Navy release)</a>',"IFR on 18 Feb 2026; theme; MILAN and IONS Conclave alongside"],
  ['<a href="https://en.wikipedia.org/wiki/2026_Australian_Open_%E2%80%93_Men%27s_singles">wikipedia.org</a>',"Alcaraz beat Djokovic 2-6, 6-2, 6-3, 7-5 on 1 Feb 2026"],
  ['<a href="https://www.thestatesman.com/sports/australian-open-2026-live-streaming-where-to-watch-djokovic-vs-alcaraz-match-updates-1503550001.html">thestatesman.com</a>',"First AO title; career Grand Slam completed"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/australian-open-2026">drishtiias.com</a>',"Alcaraz's seventh major"],
  ['<a href="https://www.icc-cricket.com/news/dominant-india-beat-england-to-lift-the-u19-world-cup">icc-cricket.com</a>',"India beat England in the U-19 World Cup final"],
  ['<a href="https://www.newsonair.gov.in/india-clinch-6th-under-19-odi-cricket-world-cup-with-historic-100-run-win-over-england-in-summit-clash-in-harare">newsonair.gov.in</a>',"Sixth title; 100-run win at Harare, 6 Feb 2026"],
  ['<a href="https://deccanchronicle.com/sports/cricket/india-u19-won-by-100-runs-1935444">deccanchronicle.com</a>',"Sooryavanshi 175 off 80; 411/9 v 311"],
  ['<a href="https://en.wikipedia.org/wiki/2026_Women%27s_Premier_League_(cricket)_final">wikipedia.org</a>',"WPL final 5 Feb 2026, Vadodara: RCB beat DC by 6 wickets; highest chase"],
  ['<a href="https://outlookindia.com/sports/cricket/womens-premier-league-2026final-rcb-vs-dc-live-photo-see-the-best-photos-from-vadodara">outlookindia.com</a>',"RCB champions again; DC's fourth straight final loss"],
  ['<a href="https://www.fide.com/nodirbek-abdusattorov-wins-tata-steel-chess-masters-2026/">fide.com</a>',"Abdusattorov wins Tata Steel Masters 2026"],
  ['<a href="https://www.chess.com/news/view/abdusattorov-wins-2026-tata-steel-chess">chess.com</a>',"Tournament 16 Jan – 1 Feb 2026; Sindarov second"],
  ['<a href="https://en.wikipedia.org/wiki/2026_Winter_Olympics_medal_table">wikipedia.org</a>',"Final medal table: Norway 18 gold; USA 12; Italy best ever"],
  ['<a href="https://www.francsjeux.com/en/short/Milan-Cortina-2026-Norway-USA-Netherlands%3A-The-final-medal-table-of-the-Winter-Olympic-Games/">francsjeux.com</a>',"Games ended 22 Feb 2026; Norway, USA, Netherlands top three"],
  ['<a href="https://www.thestatesman.com/entertainment/grammy-awards-2026-full-list-of-winners-album-record-song-of-the-year-and-more-1503550473.html">thestatesman.com</a>',"68th Grammys, 1 Feb 2026: main winners"],
  ['<a href="https://www.outlookindia.com/art-entertainment/hollywood/grammy-awards-2026-full-list-of-winners">outlookindia.com</a>',"Bad Bunny Album of the Year — first Spanish-language album; 'Luther' Record of the Year"],
  ['<a href="https://www.newsonair.gov.in/world-wetlands-day-indias-ramsar-sites-grow-from-26-to-98-says-minister-kirti-vardhan-singh">newsonair.gov.in (2 Feb 2026)</a>',"World Wetlands Day 2026: Ramsar sites up from 26 to 98"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/india-expands-ramsar-network-to-98-sites/print_manually">drishtiias.com (2 Feb 2026)</a>',"98 sites; Patna Bird Sanctuary (Etah) and Chhari-Dhand (Kutch); announced 30 Jan; theme"],
  ['<a href="https://swarajyamag.com/amp/story/states/indias-ramsar-network-grows-to-98-with-inclusion-of-ups-patna-bird-sanctuary-and-gujarats-chhari-dhand-wetlands">swarajyamag.com</a>',"Ramsar network grows to 98; Chhari-Dhand a Conservation Reserve"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/corruption-perception-index-2025/print_manually">drishtiias.com (16 Feb 2026)</a>',"CPI 2025: India 91 of 182, score 39; Denmark 89, eighth time first; global average 42"],
  ['<a href="https://catholicconnect.in/news/india-ranks-91st-in-2025-corruption-perceptions-index">catholicconnect.in (PTI)</a>',"Released Tuesday 10 Feb 2026; India up five places from 96th"],
  ["study-economics.html (this repo, checked 2 Oct 2026)","CPI 2025 rank 91"],
  ['<a href="https://stratpost.com/ins-anjadip-commissioned-at-chennai/">stratpost.com</a>',"INS Anjadip commissioned at Chennai; Admiral Tripathi presided"],
  ['<a href="https://www.etvbharat.com/en/bharat/ins-anjadip-to-be-inducted-into-indian-navy-on-feb-27-enn26022304684">etvbharat.com</a>',"Induction on 27 Feb 2026; built by GRSE"],
  ['<a href="https://www.newsonair.gov.in/indian-navy-inducts-anjadip-fourth-anti-submarine-warfare-shallow-water-craft">newsonair.gov.in</a>',"Navy inducts Anjadip, an ASW shallow water craft"],
  ['<a href="https://storyboard18.com/brand-makers/nidhi-chhibber-takes-interim-charge-as-ceo-of-niti-aayog-after-subrahmanyams-tenure-ends-90604.htm">storyboard18.com (24 Feb 2026)</a>',"Nidhi Chhibber interim CEO of NITI Aayog from 24 Feb 2026; ACC/DoPT order"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/nidhi-chhibber-takes-additional-charge-as-niti-aayog-ceo/print_manually">drishtiias.com</a>',"Additional charge; 1994-batch IAS, Chhattisgarh cadre; DMEO; former CBSE chair"],
  ['<a href="https://thewire.in/education/renowned-sociologist-andre-beteille-passes-away-at-91">thewire.in</a>',"André Béteille died in New Delhi on 3 Feb 2026, aged 91; Delhi School of Economics"],
  ['<a href="https://www.ashoka.edu.in/remembering-andre-beteille-first-chancellor-of-ashoka-university/">ashoka.edu.in</a>',"First Chancellor of Ashoka University; Padma Bhushan"],
  ['<a href="https://nenow.in/national/renowned-indian-sociologist-andre-beteille-passes-away.html">nenow.in</a>',"Béteille's books, including Caste, Class and Power (1965)"],
  ['<a href="https://www.newsonair.gov.in/mp-from-the-shillong-parliamentary-constituency-dr-ricky-a-j-syngkon-passes-away-at-54-following-cardiac-arrest">newsonair.gov.in (20 Feb 2026)</a>',"Shillong MP Ricky A. J. Syngkon died aged 54 after a cardiac arrest"],
  ['<a href="https://en.wikipedia.org/wiki/Ricky_A._J._Syngkon">wikipedia.org</a>',"Died 19 Feb 2026 at Shillong; VPP; collapsed while playing football"],
  ['<a href="https://www.newsonair.gov.in/former-railway-minister-and-rajya-sabha-mp-mukul-roy-passes-away">newsonair.gov.in (23 Feb 2026)</a>',"Mukul Roy, former Railway Minister, passed away"],
  ['<a href="https://www.onmanorama.com/news/india/2026/02/23/former-railway-minster-mukul-roy-death-kolkata.amp.html">onmanorama.com</a>',"Died in Kolkata on 23 Feb 2026, aged 71; Railway Minister 2012 after Dinesh Trivedi"],
  ['<a href="https://www.newsonair.gov.in/veteran-cpi-leader-r-nallakannu-passes-away-at-age-101-in-chennai">newsonair.gov.in (25 Feb 2026)</a>',"R. Nallakannu died in Chennai aged 101"],
  ['<a href="https://thesouthfirst.com/tamilnadu/cpi-veteran-leader-r-nallakannu-passes-away-aged-101-in-chennai/">thesouthfirst.com</a>',"CPI State Secretary 1992–2005; state honours"]
];

LESSONS.push(
{id:"CA2", title:"February 2026", hi:"फ़रवरी 2026", blocks:[
  {k:"hot", h:"Most likely to be asked: the <b>Union Budget 2026-27</b> (1 Feb — fiscal deficit <b>4.3%</b>, capex <b>₹12.2 lakh crore</b>, new Income-tax Act from 1 April, 16th Finance Commission's <b>41%</b>), the <b>AI Impact Summit</b> at Bharat Mandapam, the <b>RBI holding the repo at 5.25%</b>, the new <b>CPI (2024)</b> and <b>GDP (2022-23)</b> base years, <b>India's sixth U-19 World Cup</b>, <b>Alcaraz</b>'s Australian Open, <b>Tarique Rahman</b> as Bangladesh's PM and the <b>18% US tariff</b> deal."},
  {k:"story", h:"<p>February 2026 began with the <b>Union Budget</b> on <b>Sunday, 1 February</b>. The Finance Minister held income-tax slabs where they were but brought in the new <b>Income-tax Act, 2025</b> from 1 April, raised the tax on <b>futures and options</b>, set the fiscal deficit at <b>4.3%</b> and capital spending at <b>₹12.2 lakh crore</b>, and tabled the <b>16th Finance Commission</b>'s report, which kept the states' share at <b>41%</b>. The same day, <b>Alcaraz</b> won the Australian Open to complete the career Grand Slam.</p><p>On <b>6 February</b> the RBI left the repo rate at <b>5.25%</b>, India and the US announced a trade framework cutting the US tariff to <b>18%</b>, and India's boys won a record <b>sixth U-19 World Cup</b> in Harare. Elections abroad followed — <b>Japan</b> and <b>Portugal</b> on 8 February, <b>Bangladesh</b> on 12 February, where <b>Tarique Rahman</b> became PM. New Delhi hosted the <b>AI Impact Summit</b> and Visakhapatnam the <b>International Fleet Review</b>. The statistics changed too — a <b>CPI with base 2024</b> (12 Feb) and a <b>GDP series with base 2022-23</b> (27 Feb). India's Ramsar count stood at <b>98</b> on World Wetlands Day, and the <b>Corruption Perceptions Index</b> put India at <b>91st</b>. The month ended with US–Israeli strikes on Iran that killed <b>Ayatollah Khamenei</b> (28 Feb).</p>", key:"Budget 1 Feb (FD 4.3%, capex ₹12.2 lakh crore, FC share 41%); repo 5.25% (6 Feb); U-19 WC sixth title; AI Summit New Delhi; Khamenei killed (28 Feb)."},
  {k:"table", title:"National — government decisions, schemes, laws", head:["Item","Fact","Note"], rows: CA2_NAT},
  {k:"table", title:"International — summits, agreements, elections abroad", head:["Item","Fact","Note"], rows: CA2_INT},
  {k:"table", title:"Economy and banking", head:["Item","Fact","Note"], rows: CA2_ECO},
  {k:"table", title:"Science, space and defence", head:["Item","Fact","Note"], rows: CA2_SCI},
  {k:"table", title:"Sports", head:["Item","Fact","Note"], rows: CA2_SPO},
  {k:"table", title:"Awards and honours", head:["Item","Fact","Note"], rows: CA2_AWD},
  {k:"table", title:"Appointments", head:["Item","Fact","Note"], rows: CA2_APP},
  {k:"table", title:"Places and persons in news", head:["Item","Fact","Note"], rows: CA2_PLC},
  {k:"table", title:"Obituaries", head:["Item","Fact","Note"], rows: CA2_OBI},
  {k:"trick", h:"Budget numbers as a ladder — <b>4.3 → 12.2 → 41 → 55.6</b>: fiscal deficit <b>4.3%</b> of GDP, capex <b>₹12.2 lakh crore</b>, states' share <b>41%</b>, debt <b>55.6%</b> of GDP. And the Survey came three days earlier, on <b>29 January</b>."},
  {k:"trick", h:"New bases, newest last: <b>CPI → 2024</b> (released 12 Feb), <b>GDP → 2022-23</b> (released 27 Feb). The old bases were <b>2012</b> for CPI and <b>2011-12</b> for GDP."},
  {k:"trap", h:"<b>Which growth figure?</b> The Economic Survey (29 Jan) and the RBI (6 Feb) said <b>7.4%</b> for 2025-26 on the old base; the <b>new series</b> of 27 Feb put it at <b>7.6%</b>. Read which series the question means."},
  {k:"trap", h:"The RBI <b>held</b> the repo at <b>5.25%</b> in February 2026 — the cut had come in December 2025, and the hike to 5.50% came only in October 2026. And the <b>16th</b> Finance Commission did <b>not</b> change the states' share: it stayed at <b>41%</b>, as under the 15th."},
  {k:"trap", h:"<b>Two finals on 1 February</b>: <b>Alcaraz</b> beat Djokovic in Melbourne, and <b>Abdusattorov</b> won the Tata Steel Masters at Wijk aan Zee. The women's Australian Open final (Rybakina) was a day earlier, on <b>31 January</b>."},
  {k:"trap", h:"<b>Ramsar count by month</b>: <b>98</b> on World Wetlands Day (2 Feb 2026), after Patna Bird Sanctuary and Chhari-Dhand; <b>103</b> by October 2026. And <b>Patna Bird Sanctuary</b> is in <b>Etah, Uttar Pradesh</b> — not in Bihar."},
  {k:"table", title:"Sources (checked 24 Oct 2026)", head:["Source","What it confirmed"], rows: CA2_SRC}
], sum:[
  "Union Budget 2026-27 on Sunday, 1 Feb 2026: fiscal deficit 4.3% (from 4.4%); debt 55.6% of GDP; capex ₹12.2 lakh crore; slabs unchanged.",
  "Income-tax Act, 2025 from 1 Apr 2026 ('tax year'); STT on futures 0.02% → 0.05%, on options 0.1% → 0.15%.",
  "16th Finance Commission (Arvind Panagariya), 2026–31: states' share kept at 41%.",
  "Budget: ISM 2.0; ECMS outlay ₹40,000 crore; SME Growth Fund ₹10,000 crore.",
  "RBI, 6 Feb: repo held at 5.25%, neutral. New CPI base 2024 (Jan inflation 2.75%); new GDP base 2022-23 (27 Feb).",
  "India AI Impact Summit, Bharat Mandapam: New Delhi Declaration on AI Impact (19 Feb).",
  "India–US trade framework (6 Feb): US tariff on Indian goods 18%.",
  "Bangladesh: BNP won (12 Feb); Tarique Rahman PM (17 Feb). Japan: LDP 316 of 465 (8 Feb). Portugal: Seguro President (8 Feb).",
  "28 Feb: US–Israeli strikes on Iran; Ayatollah Ali Khamenei killed.",
  "Sport: Alcaraz AO (1 Feb); India U-19 champions, sixth title (6 Feb, Harare); RCB WPL (5 Feb); Winter Olympics — Norway top.",
  "Grammys (1 Feb): Album of the Year Bad Bunny — first in Spanish. International Fleet Review, Visakhapatnam (18 Feb).",
  "Ramsar sites: 98 on World Wetlands Day (Patna Bird Sanctuary, UP; Chhari-Dhand, Gujarat). CPI 2025 (10 Feb): India 91 of 182, Denmark first.",
  "INS Anjadip commissioned at Chennai (27 Feb). Nidhi Chhibber NITI Aayog CEO (additional charge) from 24 Feb.",
  "Deaths: André Béteille (3 Feb), Ricky Syngkon (19 Feb), Mukul Roy (23 Feb), R. Nallakannu (25 Feb), Ali Khamenei (28 Feb)."
]}
);

QB.push(
["CA2","The Union Budget 2026-27 was presented on 1 February 2026, which fell on a:",["Sunday","Saturday","Monday","Friday"],"It was presented on a Sunday; the Economic Survey had come on 29 January.",""],
["CA2","What fiscal deficit target did the Union Budget 2026-27 set for 2026-27?",["4.3% of GDP","4.4% of GDP","4.8% of GDP","3.0% of GDP"],"The target of 4.3% is down from 4.4% in the revised estimate for 2025-26.",""],
["CA2","The capital expenditure budgeted for 2026-27 is about:",["₹12.2 lakh crore","₹11.2 lakh crore","₹15.5 lakh crore","₹10.0 lakh crore"],"Capex went up from ₹11.2 lakh crore in 2025-26 to ₹12.2 lakh crore.",""],
["CA2","The central government's debt for 2026-27 (BE) is put at about what share of GDP?",["55.6%","77.3%","41%","50%"],"Central debt is 55.6% of GDP in 2026-27, with a goal of about 50% by March 2031.",""],
["CA2","From which date does the Income-tax Act, 2025 replace the Income-tax Act, 1961?",["1 April 2026","1 February 2026","1 July 2026","1 January 2027"],"The new Act came into force on 1 April 2026 and uses a single 'tax year'.",""],
["CA2","Under the Budget 2026-27, Securities Transaction Tax on futures was raised from 0.02% to:",["0.05%","0.15%","0.1%","0.025%"],"Futures STT went to 0.05% and options premium STT from 0.1% to 0.15%, from 1 April 2026.",""],
["CA2","Who chaired the 16th Finance Commission, whose report was tabled on 1 February 2026?",["Arvind Panagariya","N. K. Singh","Y. V. Reddy","Ajay Seth"],"N. K. Singh chaired the 15th Finance Commission.",""],
["CA2","What share of the divisible pool of central taxes did the 16th Finance Commission recommend for the states?",["41%","42%","32%","50%"],"It kept the share at 41%, unchanged from the 15th Finance Commission; 42% was the 14th's figure.",""],
["CA2","The Budget 2026-27 raised the outlay of the Electronics Components Manufacturing Scheme to:",["₹40,000 crore","₹22,919 crore","₹76,000 crore","₹10,000 crore"],"The outlay was raised to ₹40,000 crore; ₹10,000 crore is the SME Growth Fund.",""],
["CA2","At its meeting of 6 February 2026, the RBI's Monetary Policy Committee kept the repo rate at:",["5.25%","5.50%","6.50%","5.00%"],"The repo rate stayed at 5.25% with a neutral stance; the SDF rate was 5.0%.",""],
["CA2","The new Consumer Price Index series released on 12 February 2026 has the base year:",["2024","2012","2022-23","2011-12"],"CPI's base moved from 2012 to 2024; January 2026 inflation was 2.75%.",""],
["CA2","The new GDP series released by MoSPI on 27 February 2026 uses which base year?",["2022-23","2011-12","2024","2017-18"],"The base 2022-23 replaced 2011-12; under it, 2025-26 growth was put at 7.6%.",""],
["CA2","India's retail (CPI) inflation for January 2026, the first reading of the new series, was:",["2.75%","5.2%","1.7%","4.0%"],"It was 2.75% on the new 2024 base.",""],
["CA2","In the Henley Passport Index of February 2026, India ranked:",["75th","80th","85th","84th"],"India rose to 75th, with 56 visa-free destinations, from 80th in January.",""],
["CA2","Where was the India AI Impact Summit held in February 2026?",["Bharat Mandapam, New Delhi","Yashobhoomi, New Delhi","HICC, Hyderabad","Jio World Centre, Mumbai"],"It was held at Bharat Mandapam; the New Delhi Declaration on AI Impact was adopted on 19 Feb 2026.",""],
["CA2","Under the India–US interim trade framework announced in February 2026, the US tariff on Indian goods was cut to:",["18%","25%","50%","10%"],"The tariff was set at 18% and the extra 25% duty was removed from 7 Feb 2026.",""],
["CA2","Who was sworn in as Prime Minister of Bangladesh on 17 February 2026?",["Tarique Rahman","Muhammad Yunus","Sheikh Hasina","Mirza Fakhrul Islam Alamgir"],"Tarique Rahman's BNP won the election of 12 Feb 2026; Muhammad Yunus had led the interim government.",""],
["CA2","Which party won Bangladesh's general election of 12 February 2026?",["Bangladesh Nationalist Party (BNP)","Awami League","Jamaat-e-Islami","Jatiya Party"],"The BNP won 209 of 297 declared seats; Jamaat-e-Islami was second and the Awami League did not contest.",""],
["CA2","In Japan's general election of 8 February 2026, the LDP led by Sanae Takaichi won how many of the 465 lower-house seats?",["316","233","249","191"],"It won 316 seats, a two-thirds majority; 233 is the halfway mark.",""],
["CA2","Who won Portugal's presidential run-off on 8 February 2026?",["António José Seguro","André Ventura","Marcelo Rebelo de Sousa","Luís Montenegro"],"Seguro beat far-right André Ventura with about two-thirds of the vote.",""],
["CA2","Iran's Supreme Leader Ali Khamenei was killed on 28 February 2026 in strikes by:",["The USA and Israel","Iraq and Saudi Arabia","Russia","Turkey and Azerbaijan"],"He was killed in joint US–Israeli strikes; Iranian state media confirmed his death.",""],
["CA2","President Droupadi Murmu reviewed the International Fleet Review 2026 on 18 February off:",["Visakhapatnam","Mumbai","Kochi","Port Blair"],"The Fleet Review and Exercise MILAN 2026 were held at Visakhapatnam.",""],
["CA2","Who won the men's singles title at the Australian Open 2026 on 1 February 2026?",["Carlos Alcaraz","Novak Djokovic","Jannik Sinner","Alexander Zverev"],"Alcaraz beat Djokovic in four sets and became the youngest man to complete the career Grand Slam.",""],
["CA2","India won the ICC Under-19 World Cup 2026 by beating which team in the final at Harare?",["England","Australia","Pakistan","Afghanistan"],"India beat England by 100 runs on 6 Feb 2026 for a record sixth title.",""],
["CA2","Who scored 175 off 80 balls in the Under-19 World Cup final of February 2026?",["Vaibhav Sooryavanshi","Ayush Mhatre","Shubman Gill","Yashasvi Jaiswal"],"It was the highest score in an U-19 World Cup final; he was Player of the Match and of the Series.",""],
["CA2","Which team won the Women's Premier League 2026, beating Delhi Capitals in the final at Vadodara?",["Royal Challengers Bengaluru","Mumbai Indians","UP Warriorz","Gujarat Giants"],"RCB won by 6 wickets on 5 Feb 2026 for their second title.",""],
["CA2","Who won the Tata Steel Chess Masters 2026, which ended on 1 February 2026?",["Nodirbek Abdusattorov","Javokhir Sindarov","Arjun Erigaisi","D. Gukesh"],"The Uzbek grandmaster won at Wijk aan Zee; his compatriot Javokhir Sindarov was second.",""],
["CA2","Which country topped the medal table at the 2026 Winter Olympics in Milan–Cortina?",["Norway","United States","Italy","Germany"],"Norway won 18 golds; the USA was second with 12.",""],
["CA2","Which album won Album of the Year at the 68th Grammy Awards on 1 February 2026?",["Debí Tirar Más Fotos (Bad Bunny)","Luther (Kendrick Lamar & SZA)","Wildflower (Billie Eilish)","Cowboy Carter (Beyoncé)"],"Bad Bunny's album was the first Spanish-language album to win; 'Luther' won Record of the Year.",""],
["CA2","In Transparency International's Corruption Perceptions Index 2025, released on 10 February 2026, India ranked:",["91st","96th","85th","116th"],"India rose five places from 96th to 91st of 182, with a score of 39.",""],
["CA2","Which country topped the Corruption Perceptions Index 2025 (released February 2026)?",["Denmark","Finland","Singapore","New Zealand"],"Denmark scored 89 and was first for the eighth time in a row.",""],
["CA2","On World Wetlands Day 2026 (2 February), how many Ramsar sites did India have?",["98","96","103","89"],"Two additions — Patna Bird Sanctuary and Chhari-Dhand — took the count from 96 to 98; it reached 103 in October 2026.",""],
["CA2","Chhari-Dhand, named a Ramsar site just before World Wetlands Day 2026, is in which state?",["Gujarat","Rajasthan","Uttar Pradesh","Maharashtra"],"It is in Kutch district, Gujarat, and is the state's only Conservation Reserve.",""],
["CA2","Patna Bird Sanctuary, a Ramsar site from early 2026, is located in:",["Etah district, Uttar Pradesh","Patna district, Bihar","Kutch district, Gujarat","Bharatpur district, Rajasthan"],"Despite its name, the sanctuary is in Etah district of Uttar Pradesh.",""],
["CA2","Who was given additional charge as CEO of NITI Aayog from 24 February 2026?",["Nidhi Chhibber","B. V. R. Subrahmanyam","Anurag Jain","Amitabh Kant"],"Nidhi Chhibber took over when B. V. R. Subrahmanyam's tenure ended; Anurag Jain was named the regular CEO in July 2026.",""],
["CA2","INS Anjadip, commissioned at Chennai on 27 February 2026, is a:",["Anti-submarine warfare shallow water craft","Nuclear-powered submarine","Aircraft carrier","Fleet support tanker"],"It is one of the Navy's anti-submarine shallow water craft, built by GRSE, Kolkata.",""],
["CA2","André Béteille, who died on 3 February 2026, was a renowned:",["Sociologist","Physicist","Carnatic musician","Cartoonist"],"He taught at the Delhi School of Economics, studied caste and class, and was Ashoka University's first Chancellor.",""],
["CA2","R. Nallakannu, who died in Chennai on 25 February 2026 aged 101, was a veteran of which party?",["Communist Party of India","DMK","Indian National Congress","AIADMK"],"He was the CPI's State Secretary in Tamil Nadu from 1992 to 2005.",""],
["CA2","Mukul Roy, who died on 23 February 2026, had served as Union Minister of:",["Railways","Home Affairs","External Affairs","Finance"],"He became Railway Minister in 2012, after Dinesh Trivedi; he was a founder of the Trinamool Congress.",""],
["CA2","Ricky A. J. Syngkon, who died on 19 February 2026, was the Lok Sabha MP from:",["Shillong","Tura","Aizawl","Kohima"],"He represented Shillong (Meghalaya) for the Voice of the People Party.",""]
);

LASTMOMENT.push(
{t:"February 2026", era:["ca"], rows:[["Budget 2026-27","1 Feb (Sunday)"],["Fiscal deficit","4.3% (from 4.4%)"],["Capex","₹12.2 lakh crore"],["16th FC","Panagariya · 41%"],["Repo (6 Feb)","Held at 5.25%"],["New bases","CPI 2024 · GDP 2022-23"],["AI Impact Summit","Bharat Mandapam"],["US tariff deal","18%"],["U-19 World Cup","India, 6th title (Harare)"],["Bangladesh PM","Tarique Rahman"]]}
);
TILES.push(["4.3%","Fiscal deficit target for 2026-27","ca"],["41%","States' share of central taxes — 16th Finance Commission","ca"],["5.25%","Repo rate held on 6 Feb 2026","ca"],["6th","U-19 World Cup title for India (Feb 2026)","ca"],["316","Seats won by Japan's LDP on 8 Feb 2026","ca"],["98","India's Ramsar sites on World Wetlands Day 2026","ca"],["91","India in the Corruption Perceptions Index 2025","ca"]);
