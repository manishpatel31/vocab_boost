/* Current Affairs 2026 · January 2026 (lesson CA1). Self-contained: its tables, lesson, questions, last-moment card and tiles.
   Every fact was checked on 24 Oct 2026 against the sources in the lesson's last table; nothing unconfirmed is kept.
   Table rows are [item, fact, note]. Names start with CA1_ so other month files never clash with them. */
const CA1_NAT = [
  ["77th Republic Day (26 Jan 2026)","Chief guests: European Council President António Costa and European Commission President Ursula von der Leyen","The first time two EU leaders were joint chief guests; the celebrations marked 150 years of 'Vande Mataram'."],
  ["Best state tableau, Republic Day 2026","Maharashtra — 'Ganeshotsav: A Symbol of Aatmanirbharta' (jury results, 29 Jan 2026)","Jammu & Kashmir second, Kerala third; the Ministry of Culture won among ministries ('Vande Mataram')."],
  ["First Vande Bharat Sleeper train","Flagged off by PM Modi from Malda Town (West Bengal) on 17 Jan 2026","Runs Howrah–Kamakhya (Guwahati); 16 coaches for 823 passengers."],
  ["Somnath Swabhiman Parv","8–11 Jan 2026 at Somnath, Gujarat; PM Modi led the Shaurya Yatra on 11 Jan","Marked 1,000 years since Mahmud of Ghazni's attack of 1026 and 75 years of the temple's restoration (1951)."],
  ["Startup India at 10","National Startup Day, 16 Jan 2026 — PM Modi at Bharat Mandapam, New Delhi","Startup India (DPIIT) was launched on 16 Jan 2016; India is called the world's third-largest startup ecosystem."],
  ["Budget Session of Parliament","Began on 28 Jan 2026","The Economic Survey followed on 29 Jan and the Union Budget on 1 Feb."],
  ["Economic Survey 2025-26","Tabled on 29 Jan 2026 by FM Nirmala Sitharaman","Growth for 2025-26 put at 7.4%; 2026-27 projected at 6.8–7.2%. Prepared under CEA V. Anantha Nageswaran."]
];
const CA1_INT = [
  ["16th India–EU Summit","New Delhi (Hyderabad House), 27 Jan 2026","Talks on the India–EU free trade agreement were declared concluded; a Security and Defence Partnership was signed the same day."],
  ["India–EU Security and Defence Partnership","Signed on 27 Jan 2026 by S. Jaishankar and EU foreign-policy chief Kaja Kallas","Covers maritime security, defence industry, cyber, space and counter-terrorism; an annual dialogue runs it."],
  ["German Chancellor Friedrich Merz in India","First official visit; with PM Modi in Ahmedabad on 12 Jan 2026","They visited Sabarmati Ashram and opened the International Kite Festival at the Sabarmati Riverfront."],
  ["World Economic Forum, 56th Annual Meeting","Davos-Klosters (Switzerland), 19–23 Jan 2026","Theme: 'A Spirit of Dialogue'. India sent four Union ministers and teams from about ten states."],
  ["Board of Peace","Charter signed by Donald Trump at Davos on 22 Jan 2026","A new body set up to oversee post-war stabilisation in Gaza and possibly other conflicts."],
  ["United States leaves the WHO","Exit took effect on 22 Jan 2026","One year after the notice of January 2025; all US funding to the WHO was ended."],
  ["Venezuela","US forces captured President Nicolás Maduro on 3 Jan 2026","After strikes on Caracas and other cities; he was flown out of the country with his wife, Cilia Flores."],
  ["Uganda's presidential election","15 Jan 2026: Yoweri Museveni declared winner on 17 Jan with about 71.6%","His seventh term; Bobi Wine (Robert Kyagulanyi) second with about 24.7%."],
  ["Japan","PM Sanae Takaichi dissolved the lower house on 23 Jan 2026","A snap general election was set for 8 Feb 2026."]
];
const CA1_ECO = [
  ["First Advance Estimates of GDP, 2025-26","Real GDP growth 7.4% (NSO, 7 Jan 2026)","Up from 6.5% in 2024-25; GVA growth put at 7.3%."],
  ["IMF World Economic Outlook update (19 Jan 2026)","India's 2025-26 growth forecast raised to 7.3% (from 6.6%)","Growth expected to ease to 6.4% in each of the next two years; world growth 3.3% for 2026."],
  ["Henley Passport Index, January 2026","India 80th — up five places — with 55 visa-free destinations","Singapore first (192 destinations); India was 85th a year earlier."],
  ["Global Risks Report 2026 (WEF, 14 Jan 2026)","Top risk for 2026: geoeconomic confrontation","The 21st edition; over ten years, extreme weather leads the list."]
];
const CA1_SCI = [
  ["PSLV-C62","Failed on 12 Jan 2026 after a third-stage problem; EOS-N1 was lost","EOS-N1 was a DRDO hyperspectral earth-observation satellite. The second PSLV failure in a row (after PSLV-C61, May 2025)."],
  ["78th Army Day","Parade in Jaipur on 15 Jan 2026","The first Army Day parade held outside a cantonment; Bhairav battalion contingents marched for the first time."],
  ["Army Day — the reason","15 Jan 1949: K. M. Cariappa became the first Indian Commander-in-Chief","The 2026 parade followed Bengaluru (2023), Lucknow (2024) and Pune (2025) outside Delhi."],
  ["MPATGM","Flight-tested by DRDO on 11 Jan 2026 against a moving target","Man-Portable Anti-Tank Guided Missile, fire-and-forget with top attack; tested at KK Ranges, Ahilya Nagar (Maharashtra)."],
  ["Scramjet combustor","Ground run of over 12 minutes on 9 Jan 2026","DRDL Hyderabad's actively cooled full-scale scramjet combustor — a step towards hypersonic missiles."],
  ["Ashoka Chakra, Republic Day 2026","Group Captain Shubhanshu Shukla (announced 25 Jan 2026)","India's highest peacetime gallantry award; in 2025 he became the first Indian on the ISS (Axiom-4)."]
];
const CA1_SPO = [
  ["Australian Open 2026 — women's singles","Elena Rybakina beat Aryna Sabalenka 6-4, 4-6, 6-4 on 31 Jan 2026","Her second Grand Slam title; she came back from 0-3 down in the final set."],
  ["Malaysia Open badminton (Super 1000)","Kuala Lumpur, final day 11 Jan 2026","Men: Kunlavut Vitidsarn (Thailand); women: An Se-young (South Korea)."],
  ["India Open badminton (Super 750)","New Delhi (IG Arena), 13–18 Jan 2026","Men: Lin Chun-yi (Chinese Taipei) beat Jonatan Christie; women: An Se-young beat Wang Zhi Yi."],
  ["Hockey India League 2025-26 (men)","Vedanta Kalinga Lancers beat Ranchi Royals 3-2 in the final, 26 Jan 2026","Played at Kalinga Stadium, Bhubaneswar; SG Pipers won the women's league."]
];
const CA1_AWD = [
  ["Padma Awards 2026","Announced on 25 Jan 2026: 131 awards","5 Padma Vibhushan, 13 Padma Bhushan and 113 Padma Shri; 16 posthumous."],
  ["Padma Vibhushan 2026","Dharmendra and V. S. Achuthanandan (both posthumous), Justice K. T. Thomas, violinist N. Rajam, journalist P. Narayanan","Achuthanandan was a former Kerala Chief Minister."],
  ["Padma Bhushan 2026 (some names)","Mammootty, Alka Yagnik, Uday Kotak, Vijay Amritraj","Also Piyush Pandey and Shibu Soren, both posthumously."],
  ["Padma Shri 2026 (sport)","Rohit Sharma and Harmanpreet Kaur","Among 113 Padma Shri awards."],
  ["Gallantry awards, Republic Day 2026","Ashoka Chakra to Shubhanshu Shukla; three Kirti Chakras and 13 Shaurya Chakras","Announced on 25 Jan 2026, the eve of Republic Day."],
  ["83rd Golden Globe Awards (11 Jan 2026)","Best Drama: Hamnet; Best Musical or Comedy: One Battle After Another","Jessie Buckley won Best Actress (Drama) for Hamnet, directed by Chloé Zhao."]
];
const CA1_APP = [
  ["National President, BJP","Nitin Nabin — elected unopposed, took over on 20 Jan 2026","After J. P. Nadda; the youngest BJP president and the first from Bihar."],
  ["Director General, NIA","Rakesh Aggarwal — ACC approval of 15 Jan 2026, till 31 Aug 2028","After Sadanand Vasant Date, who became DGP of Maharashtra on 3 Jan 2026."],
  ["Vigilance Commissioner, CVC","Praveen Vashista — took oath on 16 Jan 2026","A 1991-batch IPS officer (Bihar cadre); oath before the Central Vigilance Commissioner."],
  ["Deputy Chief Minister, Maharashtra","Sunetra Pawar — sworn in on 31 Jan 2026","The state's first woman Deputy CM, three days after Ajit Pawar's death."],
  ["Director-General, CERN","Mark Thomson — five-year term from 1 Jan 2026","CERN is the European physics laboratory near Geneva."]
];
const CA1_PLC = [
  ["Malda Town, West Bengal","India's first Vande Bharat Sleeper flagged off from here on 17 Jan 2026","The train runs between Howrah and Kamakhya (Guwahati)."],
  ["Somnath, Gujarat","Somnath Swabhiman Parv, 8–11 Jan 2026","1,000 years since the attack of 1026 by Mahmud of Ghazni."],
  ["Jaipur","Hosted the 78th Army Day parade on 15 Jan 2026","On Mahal Road, Jagatpura — outside a cantonment for the first time."],
  ["Hyderabad House, New Delhi","Venue of the 16th India–EU Summit, 27 Jan 2026","Where the FTA talks were declared concluded."],
  ["Davos, Switzerland","WEF Annual Meeting, 19–23 Jan 2026; Board of Peace charter signed 22 Jan","Do not confuse it with Geneva, home of the WHO and CERN."],
  ["Baramati, Maharashtra","Ajit Pawar's aircraft crashed here on 28 Jan 2026","A Learjet 45 crashed while landing; five people died."],
  ["Bhubaneswar","Hockey India League final, 26 Jan 2026","Kalinga Lancers won at home, at Kalinga Stadium."]
];
const CA1_OBI = [
  ["Ajit Pawar","Deputy CM of Maharashtra and NCP president; died in a plane crash at Baramati on 28 Jan 2026","Four others on board also died; the state observed three days of mourning."],
  ["Suresh Kalmadi","Former Union minister and IOA president; died in Pune on 6 Jan 2026, aged 81","Led the Indian Olympic Association 1996–2011 and chaired the 2010 Commonwealth Games organising committee."],
  ["Madhav Gadgil","Ecologist; died in Pune on 7 Jan 2026, aged 83","Chaired the Western Ghats Ecology Expert Panel (Gadgil Report, 2011); UN Champion of the Earth (2024)."],
  ["Sir Mark Tully","BBC's 'voice of India'; died in New Delhi on 25 Jan 2026, aged 90","Padma Shri and Padma Bhushan; knighted in 2002."],
  ["I. S. Bindra","Former BCCI president (1993–96); died in New Delhi on 25 Jan 2026, aged 84","The Mohali stadium of the Punjab Cricket Association is named after him."]
];
const CA1_SRC = [
  ['<a href="https://www.etvbharat.com/en/bharat/top-eu-leaders-will-be-chief-guests-at-republic-day-celebrations-enn26011504509">etvbharat.com</a>',"Costa and von der Leyen chief guests for the 77th Republic Day; visit 25–27 Jan; summit on 27 Jan"],
  ['<a href="https://www.thestatesman.com/india/republic-day-2026-chief-guests-eu-leaders-1503546641.html">thestatesman.com</a>',"First time two EU leaders were chief guests"],
  ['<a href="https://vajiramandravi.com/current-affairs/?p=82767">vajiramandravi.com</a>',"Republic Day 2026 theme: 150 years of Vande Mataram"],
  ['<a href="https://www.newsonair.gov.in/republic-day-parade-2026-best-marching-contingents-and-tableaux-announced">newsonair.gov.in</a>',"Best tableaux announced 29 Jan 2026: Maharashtra, J&K, Kerala; Ministry of Culture"],
  ['<a href="https://www.newsonair.gov.in/mos-defence-sanjay-seth-presents-awards-for-best-contingents-and-tableaux-of-r-day-parade-2026/">newsonair.gov.in</a>',"Tableau awards presented on 30 Jan 2026"],
  ['<a href="https://www.thestatesman.com/india/india-gets-its-first-vande-bharat-sleeper-pm-modi-flags-off-howrah-guwahati-train-from-west-bengals-malda-1503542073.html">thestatesman.com</a>',"First Vande Bharat Sleeper flagged off from Malda, Howrah–Guwahati, 17 Jan 2026"],
  ['<a href="https://www.theweek.in/news/biz-tech/2026/01/17/first-ever-vande-bharat-sleeper-flagged-off-from-kamakhya-to-howrah.amp.html">theweek.in</a>',"Vande Bharat Sleeper features; 16 coaches, 823 passengers"],
  ['<a href="https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jan/doc2026110754401.pdf">pib.gov.in (backgrounder)</a>',"Somnath Swabhiman Parv: 1,000 years since 1026, 75 years since 1951"],
  ['<a href="https://www.newsonair.gov.in/pm-modi-to-participate-in-shaurya-yatra-to-honour-warriors-who-laid-down-their-lives-defending-somnath-temple/">newsonair.gov.in</a>',"PM's Shaurya Yatra at Somnath, 11 Jan 2026"],
  ['<a href="https://www.pmindia.gov.in/en/news_updates/on-national-startup-day-pm-to-participate-in-a-programme-marking-a-decade-of-startup-india-on-16-january/">pmindia.gov.in</a>',"Decade of Startup India, 16 Jan 2026, Bharat Mandapam"],
  ['<a href="https://yourstory.com/2026/01/national-startup-day-pm-modi-message">yourstory.com</a>',"Startup India launched 16 Jan 2016; third-largest ecosystem"],
  ['<a href="https://hi.prsindia.org/files/policy/policy_annual_policy_review/Monthly Policy Review/2026-01-01/MPR-Jan_2026(H).pdf">prsindia.org (Monthly Policy Review, Jan 2026)</a>',"Budget Session from 28 Jan 2026; Budget on 1 Feb"],
  ['<a href="https://www.businesstoday.in/amp/union-budget/story/economic-survey-tabled-in-lok-sabha-fy27-growth-seen-at-68-72-ahead-of-budget-513403-2026-01-29">businesstoday.in</a>',"Economic Survey tabled 29 Jan 2026; FY27 growth 6.8–7.2%"],
  ['<a href="https://www.governancenow.com/news/regular-story/economic-survey-gdp-growth-for-fy26-pegged-at-74">governancenow.com</a>',"Survey: FY26 growth 7.4%"],
  ["study-economics.html (this repo)","Survey prepared under CEA V. Anantha Nageswaran; figures match lesson L20"],
  ['<a href="https://en.wikipedia.org/wiki/India%E2%80%93European_Union_Free_Trade_Agreement">wikipedia.org</a>',"FTA conclusion announced at Hyderabad House, 27 Jan 2026"],
  ['<a href="https://www.intellinews.com/india-and-eu-seal-landmark-free-trade-agreement-422381/">intellinews.com</a>',"India and EU seal the FTA; scale of the deal"],
  ['<a href="https://eeas.europa.eu/eeas/security-and-defence-eu-and-india-sign-security-defence-partnership_en">eeas.europa.eu</a>',"Security and Defence Partnership signed by Kallas and Jaishankar, 27 Jan 2026"],
  ['<a href="https://ianslive.in/webstories/pm-modi-and-german-chancellor-merz-attend-international-kite-festival-in-ahmedabad">ianslive.in</a>',"Modi and Merz at the Kite Festival, Ahmedabad"],
  ['<a href="https://www.orissapost.com/pm-modi-german-chancellor-merz-enjoy-kite-flying-at-sabarmati-riverfront-in-ahmedabad/">orissapost.com (PTI)</a>',"12 Jan 2026; Sabarmati Ashram; Merz's first official India visit"],
  ['<a href="https://currentaffairs.adda247.com/davos-2026-key-dates-theme-participants-and-global-challenges-in-focus/">adda247.com</a>',"WEF 56th Annual Meeting, 19–23 Jan 2026; theme 'A Spirit of Dialogue'"],
  ['<a href="https://ianslive.in/india-poised-to-make-strong-splash-at-wef-meet-in-davos--20260118213304">ianslive.in</a>',"India's delegation: four Union ministers, about ten states"],
  ['<a href="https://www.npr.org/2026/01/22/g-s1-106799/board-of-peace-gaza-trump">npr.org</a>',"Board of Peace charter signed at Davos, 22 Jan 2026"],
  ['<a href="https://cdc.gov/global-health/resources/us-withdrawal-who.html">cdc.gov (HHS fact sheet)</a>',"US exit from the WHO effective 22 Jan 2026"],
  ['<a href="https://www.opb.org/article/2026/01/03/trump-claims-u-s-captured-maduro-after-caracas-blasts/">opb.org (NPR)</a>',"US strikes and capture of Maduro, 3 Jan 2026"],
  ['<a href="https://www.fdd.org/analysis/2026/01/03/united-states-strikes-venezuela-captures-president-maduro/">fdd.org</a>',"Maduro and Cilia Flores flown out, 3 Jan 2026"],
  ['<a href="https://allafrica.com/stories/202601180054.html">allafrica.com</a>',"Museveni declared winner, 2026–2031"],
  ['<a href="https://www.thecitizen.co.tz/tanzania/news/east-africa-news/museveni-declared-winner-of-uganda-election-extending-rule-beyond-40-years-5329704">thecitizen.co.tz</a>',"71.65% for Museveni; Kyagulanyi 24.72%; seventh term"],
  ['<a href="https://www.aljazeera.com/amp/news/2026/1/23/japan-pm-takaichi-dissolves-parliament-paving-way-for-snap-election">aljazeera.com</a>',"Takaichi dissolved the lower house on 23 Jan 2026; election on 8 Feb"],
  ['<a href="https://www.governancenow.com/news/regular-story/indias-real-gdp-growth-pegged-at-74-in-fy-202526">governancenow.com</a>',"First Advance Estimates: 7.4% (released 7 Jan 2026)"],
  ['<a href="https://www.shankariasparliament.com/current-affairs/first-advance-estimates-of-gdp-for-2025-26">shankariasparliament.com</a>',"FAE details: 6.5% in 2024-25; GVA 7.3%"],
  ['<a href="https://www.businesstoday.in/amp/latest/economy/story/imf-upgrades-india-growth-outlook-lifts-fy26-forecast-to-73-511462-2026-01-19">businesstoday.in</a>',"IMF WEO update 19 Jan 2026: India 7.3% for FY26; 6.4% after"],
  ['<a href="https://www.newsonair.gov.in/imf-raises-indias-economic-growth-projection-for-2025-by-0-7-percentage-point-to-7-3">newsonair.gov.in</a>',"IMF raise of 0.7 percentage point to 7.3%"],
  ['<a href="https://www.businesstoday.in/amp/nri/visa/story/henley-passport-index-2026-indian-passport-climbs-five-places-to-gain-80th-spot-510835-2026-01-14">businesstoday.in</a>',"Henley Passport Index Jan 2026: India 80th, 55 destinations"],
  ['<a href="https://www.iasgyan.in/daily-current-affairs/henley-passport-index-2026-indias-rank-rises-to-80">iasgyan.in</a>',"India up from 85th; Singapore first"],
  ['<a href="https://www.businesstoday.in/amp/wef-2026/story/wef-summit-davos-2026-world-faces-stormy-next-decade-geoeconomic-confrontation-now-top-risk-warns-wef-510919-2026-01-14">businesstoday.in</a>',"Global Risks Report 2026: geoeconomic confrontation top risk (14 Jan)"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/world-economic-forum-released-global-risks-report-2026/print_manually">drishtiias.com</a>',"21st edition; long-term list led by extreme weather"],
  ['<a href="https://www.deccanherald.com/science/space/isros-first-2026-mission-pslv-c62-fails-3859678">deccanherald.com</a>',"PSLV-C62 failed, 12 Jan 2026"],
  ['<a href="https://theprint.in/science/isro-pslv-c62-eos-n1-satellite/2825191/">theprint.in</a>',"EOS-N1, DRDO hyperspectral satellite; third-stage problem"],
  ['<a href="https://www.theregister.com/2026/01/14/isro_pslv_mission_fail/">theregister.com</a>',"Second PSLV failure in a row"],
  ['<a href="https://newsonair.gov.in/a-grand-parade-to-mark-78th-army-day-held-in-jaipur/">newsonair.gov.in</a>',"78th Army Day parade in Jaipur, 15 Jan 2026"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/78th-army-day">drishtiias.com</a>',"First parade outside a cantonment; earlier venues; Bhairav battalions; Cariappa 1949"],
  ['<a href="https://www.vifindia.org/category-articles/18184">vifindia.org (S&T Digest, 1–15 Jan 2026)</a>',"MPATGM test 11 Jan 2026 at KK Ranges; scramjet ground test of 12+ minutes on 9 Jan"],
  ['<a href="https://www.businesstoday.in/amp/india/story/republic-day-2026-shubhanshu-shukla-awarded-ashoka-chakra-who-is-he-and-why-has-he-been-awarded-512835-2026-01-25">businesstoday.in</a>',"Ashoka Chakra for Shubhanshu Shukla, 25 Jan 2026"],
  ['<a href="https://visionias.in/current-affairs/upsc-daily-news-summary/article/2026-01-27/the-indian-express/culture/republic-day-2026-ashoka-chakra-for-astronaut-shubhanshu-shaurya-chakra-for-2-women-navy-officers">visionias.in (Indian Express)</a>',"Three Kirti Chakras and 13 Shaurya Chakras; names"],
  ['<a href="https://en.wikipedia.org/wiki/2026_Australian_Open_%E2%80%93_Women%27s_singles">wikipedia.org</a>',"Rybakina beat Sabalenka 6-4, 4-6, 6-4, 31 Jan 2026; second major"],
  ['<a href="https://en.wikipedia.org/wiki/2026_Malaysia_Open_(badminton)">wikipedia.org</a>',"Malaysia Open 2026 winners, 11 Jan"],
  ['<a href="https://www.spotvnow.com/read/?p=3300">spotvnow.com</a>',"An Se-young's Malaysia Open title"],
  ['<a href="https://morungexpress.com/india-open-badminton-an-se-young-lin-chun-yi-crowned-womens-and-mens-singles-champions">morungexpress.com</a>',"India Open 2026: Lin Chun-yi and An Se-young"],
  ['<a href="https://en.wikipedia.org/wiki/2026_India_Open">wikipedia.org</a>',"India Open 13–18 Jan 2026, IG Arena, Super 750"],
  ['<a href="https://en.wikipedia.org/wiki/2025%E2%80%9326_Hockey_India_League">wikipedia.org</a>',"HIL final: Kalinga Lancers 3-2 Ranchi Royals, 26 Jan 2026, Bhubaneswar; SG Pipers women's champions"],
  ['<a href="https://www.newsonair.gov.in/govt-announces-131-padma-awards-with-former-kerala-cm-v-s-achuthanandan-veteran-actor-dharmendra-among-other-recipients">newsonair.gov.in</a>',"131 Padma awards announced 25 Jan 2026; Dharmendra and Achuthanandan"],
  ['<a href="https://gulfnews.com/world/asia/india/padma-awards-2026-dharmendra-vs-achuthanandan-get-padma-vibhushan-posthumously-1.500420249">gulfnews.com</a>',"Padma Vibhushan list; split 5 / 13 / 113"],
  ['<a href="https://www.thenewsminute.com/amp/story/news/padma-awards-2026-131-recipients-named-mammootty-alka-yagnik-among-awardees">thenewsminute.com</a>',"Padma Bhushan: Mammootty, Alka Yagnik and others"],
  ['<a href="https://www.boston.com/culture/entertainment/2026/01/11/golden-globes-2026-winners/">boston.com</a>',"Golden Globes 2026: Hamnet; One Battle After Another"],
  ['<a href="https://www.newsonair.gov.in/nitin-nabin-becomes-national-president-of-bharatiya-janata-party">newsonair.gov.in</a>',"Nitin Nabin BJP president, 20 Jan 2026"],
  ['<a href="https://en.wikipedia.org/wiki/Nitin_Nabin">wikipedia.org</a>',"Youngest BJP president; first from Bihar; after Nadda"],
  ['<a href="https://ips.gov.in/Empanelment/Rakesh_15012026.pdf">ips.gov.in (MHA order, 15 Jan 2026)</a>',"Rakesh Aggarwal DG NIA till 31 Aug 2028"],
  ['<a href="https://deccanchronicle.com/nation/ips-officer-rakesh-aggarwal-takes-charge-as-nia-chief-1930531">deccanchronicle.com</a>',"Aggarwal takes charge; Date had moved to Maharashtra DGP"],
  ['<a href="https://www.newsonair.gov.in/president-droupadi-murmu-appoints-praveen-vashista-as-vigilance-commissioner">newsonair.gov.in</a>',"Praveen Vashista Vigilance Commissioner"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/central-vigilance-commission-4/print_manually">drishtiias.com</a>',"Oath on 16 Jan 2026; 1991-batch IPS, Bihar cadre"],
  ['<a href="https://rajbhavan-maharashtra.gov.in/en/31-01-2026-sunetra-pawar-sworn-in-as-dy-cm/">rajbhavan-maharashtra.gov.in</a>',"Sunetra Pawar sworn in as Deputy CM, 31 Jan 2026"],
  ['<a href="https://www.thehitavada.com/Encyc/2026/2/1/sunetra-pawar-takes-oath-as-mahs-1st-woman-dy-cm.html">thehitavada.com</a>',"First woman Deputy CM of Maharashtra"],
  ['<a href="https://www.nikhef.nl/en/news/cern-council-selects-mark-thomson-as-next-director-general">nikhef.nl</a>',"Mark Thomson CERN Director-General from 1 Jan 2026"],
  ['<a href="https://www.businesstoday.in/amp/india/story/ajit-pawar-dead-after-plane-crashes-in-maharashtras-baramati-during-landing-report-513141-2026-01-28">businesstoday.in</a>',"Ajit Pawar died in plane crash at Baramati, 28 Jan 2026"],
  ['<a href="https://moneylife.in/article/maharashtra-deputy-cm-ajit-pawar-4-others-dead-in-plane-crash-near-baramati/79483.html">moneylife.in</a>',"Five dead; Learjet 45"],
  ['<a href="https://www.theweek.in/news/india/2026/01/06/suresh-kalmadi-senior-congress-leader-and-former-union-minister-dies-at-81.amp.html">theweek.in</a>',"Suresh Kalmadi died 6 Jan 2026, aged 81"],
  ['<a href="https://scroll.in/latest/1089781/scroll_in">scroll.in</a>',"Kalmadi: IOA president 1996–2011; CWG 2010"],
  ['<a href="https://www.iisc.ac.in/?p=60598">iisc.ac.in</a>',"Madhav Gadgil died in Pune on 7 Jan 2026"],
  ['<a href="https://deccanchronicle.com/nation/renowned-ecologist-madhav-gadgil-dies-at-83-1929071">deccanchronicle.com</a>',"Gadgil aged 83; Western Ghats panel; Champions of the Earth 2024"],
  ['<a href="https://thepeninsulaqatar.com/article/25/01/2026/bbcs-voice-of-india-mark-tully-dies-at-90">thepeninsulaqatar.com</a>',"Mark Tully died at 90, 25 Jan 2026"],
  ['<a href="https://en.wikipedia.org/wiki/Mark_Tully">wikipedia.org</a>',"Tully: knighted 2002; Padma Shri and Padma Bhushan"],
  ['<a href="https://www.bcci.tv/news/article/bcci-mourns-the-passing-of-former-president-i-s-bindra">bcci.tv</a>',"I. S. Bindra died 25 Jan 2026"],
  ['<a href="https://www.deccanherald.com/sports/former-bcci-president-i-s-bindra-passes-away-at-84-3874571">deccanherald.com</a>',"Bindra aged 84; BCCI president 1993–96"]
];

LESSONS.push(
{id:"CA1", title:"January 2026", hi:"जनवरी 2026", blocks:[
  {k:"hot", h:"Most likely to be asked: the <b>EU leaders as Republic Day chief guests</b> and the <b>16th India–EU Summit</b> (FTA talks concluded, 27 Jan), the <b>Padma Awards</b> and the <b>Ashoka Chakra for Shubhanshu Shukla</b>, the <b>first Vande Bharat Sleeper</b>, the <b>78th Army Day in Jaipur</b>, the <b>PSLV-C62 failure</b>, <b>Nitin Nabin</b> as BJP president, <b>Rybakina</b>'s Australian Open title and the <b>Economic Survey</b> of 29 January."},
  {k:"story", h:"<p>January 2026 opened with a shock abroad — on <b>3 January</b> US forces captured Venezuela's President <b>Nicolás Maduro</b>. At home, PM Modi marked <b>1,000 years since Ghazni's attack on Somnath</b> (8–11 January), welcomed German Chancellor <b>Friedrich Merz</b> to Ahmedabad, and on <b>17 January</b> flagged off India's <b>first Vande Bharat Sleeper</b> from Malda. ISRO began the year badly: <b>PSLV-C62</b> failed on <b>12 January</b>, its second failure in a row.</p><p>The month built up to <b>Republic Day</b>, when <b>António Costa</b> and <b>Ursula von der Leyen</b> were the chief guests. The <b>Padma Awards</b> (131, with Padma Vibhushan for <b>Dharmendra</b> posthumously) and the <b>Ashoka Chakra</b> for astronaut <b>Shubhanshu Shukla</b> came on the eve. Next day, <b>27 January</b>, the India–EU Summit declared the <b>free trade agreement</b> talks concluded. Parliament's Budget Session began on <b>28 January</b> — the same day Maharashtra's Deputy CM <b>Ajit Pawar</b> died in a plane crash at Baramati — and the <b>Economic Survey</b> was tabled on <b>29 January</b>.</p>", key:"Maduro captured (3 Jan); Vande Bharat Sleeper (17 Jan); EU chief guests (26 Jan); India–EU FTA talks done (27 Jan); Economic Survey (29 Jan)."},
  {k:"table", title:"National — government decisions, schemes, laws", head:["Item","Fact","Note"], rows: CA1_NAT},
  {k:"table", title:"International — summits, agreements, elections abroad", head:["Item","Fact","Note"], rows: CA1_INT},
  {k:"table", title:"Economy and banking", head:["Item","Fact","Note"], rows: CA1_ECO},
  {k:"table", title:"Science, space and defence", head:["Item","Fact","Note"], rows: CA1_SCI},
  {k:"table", title:"Sports", head:["Item","Fact","Note"], rows: CA1_SPO},
  {k:"table", title:"Awards and honours", head:["Item","Fact","Note"], rows: CA1_AWD},
  {k:"table", title:"Appointments", head:["Item","Fact","Note"], rows: CA1_APP},
  {k:"table", title:"Places and persons in news", head:["Item","Fact","Note"], rows: CA1_PLC},
  {k:"table", title:"Obituaries", head:["Item","Fact","Note"], rows: CA1_OBI},
  {k:"trick", h:"The last week of January runs <b>25-26-27-28-29</b>: <b>25</b> Padma Awards and gallantry awards · <b>26</b> Republic Day (EU chief guests) · <b>27</b> India–EU Summit · <b>28</b> Budget Session opens · <b>29</b> Economic Survey. The Budget itself came on <b>1 February</b>."},
  {k:"trick", h:"<b>Two 7.4s and a 7.3</b>: the NSO's First Advance Estimate (7 Jan) and the Economic Survey both put 2025-26 growth at <b>7.4%</b>; the IMF (19 Jan) said <b>7.3%</b>. For 2026-27 the Survey gives a range, <b>6.8–7.2%</b>."},
  {k:"trap", h:"<b>Davos ≠ Geneva</b>: the WEF meets in <b>Davos</b> (where the Board of Peace charter was signed on 22 Jan); the <b>WHO</b>, which the US left the same day, is in <b>Geneva</b>."},
  {k:"trap", h:"<b>Rybakina, not Sabalenka</b>, won the 2026 Australian Open women's title. And <b>An Se-young</b> won <b>both</b> January badminton titles (Malaysia and India Open), but the men's winners were different: <b>Kunlavut Vitidsarn</b> in Kuala Lumpur, <b>Lin Chun-yi</b> in New Delhi."},
  {k:"trap", h:"The <b>Ashoka Chakra</b> is the highest <b>peacetime</b> gallantry award — do not confuse it with the Param Vir Chakra (wartime). Shubhanshu Shukla's 2026 award was for the <b>Axiom-4</b> mission of 2025."},
  {k:"table", title:"Sources (checked 24 Oct 2026)", head:["Source","What it confirmed"], rows: CA1_SRC}
], sum:[
  "77th Republic Day: chief guests António Costa and Ursula von der Leyen (EU); theme 150 years of Vande Mataram; best tableau Maharashtra.",
  "16th India–EU Summit, New Delhi, 27 Jan 2026: FTA talks concluded; Security and Defence Partnership signed.",
  "First Vande Bharat Sleeper: Howrah–Kamakhya, flagged off from Malda on 17 Jan 2026.",
  "Somnath Swabhiman Parv, 8–11 Jan: 1,000 years since Ghazni's attack (1026).",
  "Economic Survey 2025-26 tabled on 29 Jan: growth 7.4% (2025-26), 6.8–7.2% projected for 2026-27.",
  "PSLV-C62 failed on 12 Jan 2026; EOS-N1 lost. 78th Army Day parade in Jaipur (15 Jan).",
  "Padma Awards 2026: 131 (5 PV, 13 PB, 113 PS); Ashoka Chakra to Shubhanshu Shukla.",
  "Nitin Nabin BJP president (20 Jan); Rakesh Aggarwal DG NIA; Sunetra Pawar first woman Deputy CM of Maharashtra (31 Jan).",
  "Maduro captured by US forces (3 Jan); US left WHO (22 Jan); Board of Peace charter at Davos (22 Jan); Museveni's seventh term.",
  "Australian Open women: Elena Rybakina (31 Jan). Henley Passport Index: India 80th.",
  "Deaths: Suresh Kalmadi (6 Jan), Madhav Gadgil (7 Jan), Mark Tully and I. S. Bindra (25 Jan), Ajit Pawar (28 Jan, plane crash)."
]}
);

QB.push(
["CA1","Who were the chief guests at India's 77th Republic Day celebrations in January 2026?",["António Costa and Ursula von der Leyen","Emmanuel Macron and Olaf Scholz","Prabowo Subianto and Anwar Ibrahim","Keir Starmer and Mark Carney"],"The President of the European Council and the President of the European Commission were joint chief guests — a first for two EU leaders.",""],
["CA1","The 16th India–EU Summit, at which the free trade agreement talks were declared concluded, was held on 27 January 2026 in:",["New Delhi","Brussels","Mumbai","Strasbourg"],"It was held at Hyderabad House in New Delhi, the day after Republic Day.",""],
["CA1","On 27 January 2026 India and the EU signed which agreement besides closing the FTA talks?",["A Security and Defence Partnership","A civil nuclear agreement","A double taxation avoidance treaty","A visa-free travel pact"],"S. Jaishankar and Kaja Kallas signed the Security and Defence Partnership, covering maritime security, cyber, space and the defence industry.",""],
["CA1","Which state's tableau was judged the best at the Republic Day parade 2026?",["Maharashtra","Gujarat","Kerala","Uttar Pradesh"],"Maharashtra's 'Ganeshotsav' tableau came first; Jammu & Kashmir and Kerala were second and third.",""],
["CA1","India's first Vande Bharat Sleeper train, flagged off on 17 January 2026, runs between:",["Howrah and Kamakhya (Guwahati)","New Delhi and Mumbai","Chennai and Bengaluru","Delhi and Srinagar"],"PM Modi flagged it off from Malda Town in West Bengal.",""],
["CA1","The Somnath Swabhiman Parv (8–11 January 2026) marked 1,000 years since the attack on Somnath temple by:",["Mahmud of Ghazni","Muhammad Ghori","Alauddin Khalji","Aurangzeb"],"Mahmud of Ghazni attacked Somnath in 1026; 2026 also marked 75 years of the temple's restoration in 1951.",""],
["CA1","The Startup India initiative completed ten years on 16 January 2026. Which body runs it?",["DPIIT","NITI Aayog","SIDBI","Ministry of MSME"],"Startup India is a flagship initiative of the Department for Promotion of Industry and Internal Trade, launched on 16 Jan 2016.",""],
["CA1","The Economic Survey 2025-26, tabled on 29 January 2026, projected India's growth for 2026-27 at:",["6.8–7.2%","7.4–7.8%","6.0–6.4%","8.0–8.5%"],"It put growth for 2025-26 at 7.4% and gave a range of 6.8–7.2% for 2026-27.",""],
["CA1","The First Advance Estimates released by the NSO on 7 January 2026 put real GDP growth for 2025-26 at:",["7.4%","6.5%","8.2%","6.8%"],"Growth of 7.4% was up from 6.5% in 2024-25.",""],
["CA1","In its January 2026 World Economic Outlook update, the IMF raised India's growth forecast for 2025-26 to:",["7.3%","6.6%","6.4%","8.0%"],"It raised the forecast from 6.6% to 7.3% and expects 6.4% in each of the next two years.",""],
["CA1","In the Henley Passport Index of January 2026, India's rank was:",["80th","85th","75th","84th"],"India rose five places to 80th, with visa-free access to 55 destinations; Singapore stayed first.",""],
["CA1","According to the WEF's Global Risks Report 2026, the top risk for 2026 is:",["Geoeconomic confrontation","Extreme weather events","Misinformation and disinformation","Pandemics"],"Geoeconomic confrontation came first for 2026; extreme weather leads the ten-year list.",""],
["CA1","What was the theme of the World Economic Forum's Annual Meeting at Davos in January 2026?",["A Spirit of Dialogue","Collaboration for the Intelligent Age","Rebuilding Trust","Cooperation in a Fragmented World"],"The 56th Annual Meeting (19–23 Jan 2026) had the theme 'A Spirit of Dialogue'.",""],
["CA1","On 3 January 2026 US forces captured the President of which country?",["Venezuela","Cuba","Nicaragua","Colombia"],"Nicolás Maduro and his wife were taken out of Venezuela after US strikes on Caracas and other cities.",""],
["CA1","The United States' withdrawal from the World Health Organization took effect on:",["22 January 2026","1 January 2026","20 January 2025","4 July 2026"],"The exit came into effect on 22 Jan 2026, a year after the notice.",""],
["CA1","Who won Uganda's presidential election held on 15 January 2026?",["Yoweri Museveni","Bobi Wine","Kizza Besigye","Samia Suluhu Hassan"],"Museveni was declared winner with about 71.6% for a seventh term; Samia Suluhu Hassan is Tanzania's President.",""],
["CA1","PSLV-C62, which failed on 12 January 2026, was carrying which main satellite?",["EOS-N1","EOS-09","NISAR","GSAT-7R"],"EOS-N1 was a DRDO hyperspectral satellite; the rocket failed because of a third-stage problem.",""],
["CA1","Where was the 78th Army Day parade held on 15 January 2026?",["Jaipur","Pune","Lucknow","Bengaluru"],"Jaipur hosted it — the first Army Day parade held outside a cantonment. Pune hosted it in 2025.",""],
["CA1","Army Day is observed on 15 January because on that day in 1949:",["K. M. Cariappa became the first Indian Commander-in-Chief","India became a republic","The Indian Army fought its first battle","Sam Manekshaw became Field Marshal"],"K. M. Cariappa took over from General Sir Francis Bucher, the last British chief, on 15 Jan 1949.",""],
["CA1","Which missile did DRDO flight-test against a moving target on 11 January 2026?",["Man-Portable Anti-Tank Guided Missile (MPATGM)","Agni-V","BrahMos-NG","Astra Mk-2"],"The fire-and-forget MPATGM with top-attack capability was tested at KK Ranges, Ahilya Nagar, Maharashtra.",""],
["CA1","Group Captain Shubhanshu Shukla was awarded which gallantry award on the eve of Republic Day 2026?",["Ashoka Chakra","Kirti Chakra","Param Vir Chakra","Shaurya Chakra"],"He received the Ashoka Chakra, India's highest peacetime gallantry award, for the Axiom-4 mission.",""],
["CA1","How many Padma Awards were announced on 25 January 2026?",["131","139","106","119"],"There were 131: 5 Padma Vibhushan, 13 Padma Bhushan and 113 Padma Shri.",""],
["CA1","Which actor was given the Padma Vibhushan posthumously in 2026?",["Dharmendra","Manoj Kumar","Mithun Chakraborty","Mammootty"],"Dharmendra received it posthumously; Mammootty received the Padma Bhushan.",""],
["CA1","Which former Kerala Chief Minister was awarded the Padma Vibhushan posthumously in 2026?",["V. S. Achuthanandan","Oommen Chandy","E. K. Nayanar","A. K. Antony"],"V. S. Achuthanandan was among the five Padma Vibhushan recipients.",""],
["CA1","Which two cricketers were among the Padma Shri recipients of 2026?",["Rohit Sharma and Harmanpreet Kaur","Virat Kohli and Smriti Mandhana","Jasprit Bumrah and Mithali Raj","Shubman Gill and Jhulan Goswami"],"Rohit Sharma and Harmanpreet Kaur were honoured with the Padma Shri.",""],
["CA1","Which film won Best Motion Picture – Drama at the Golden Globe Awards on 11 January 2026?",["Hamnet","One Battle After Another","Sinners","Frankenstein"],"Hamnet won Best Drama; One Battle After Another won Best Musical or Comedy.",""],
["CA1","Who won the women's singles title at the Australian Open 2026?",["Elena Rybakina","Aryna Sabalenka","Iga Swiatek","Coco Gauff"],"Rybakina beat world No. 1 Sabalenka 6-4, 4-6, 6-4 on 31 Jan 2026.",""],
["CA1","Who won the women's singles title at both the Malaysia Open and the India Open badminton in January 2026?",["An Se-young","P. V. Sindhu","Wang Zhi Yi","Akane Yamaguchi"],"South Korea's An Se-young won both; the men's titles went to Kunlavut Vitidsarn and Lin Chun-yi.",""],
["CA1","Which team won the men's Hockey India League 2025-26, beating Ranchi Royals in the final on 26 January 2026?",["Vedanta Kalinga Lancers","Hyderabad Toofans","Soorma Hockey Club","Tamil Nadu Dragons"],"Kalinga Lancers won 3-2 at Kalinga Stadium, Bhubaneswar.",""],
["CA1","Who became the national president of the BJP on 20 January 2026?",["Nitin Nabin","J. P. Nadda","Shivraj Singh Chouhan","Dharmendra Pradhan"],"Nitin Nabin, elected unopposed, succeeded J. P. Nadda; he is the party's youngest president.",""],
["CA1","Who was appointed Director General of the National Investigation Agency in January 2026?",["Rakesh Aggarwal","Sadanand Vasant Date","Praveen Vashista","Tapan Deka"],"Rakesh Aggarwal's term runs till 31 Aug 2028; Sadanand Date had become DGP of Maharashtra.",""],
["CA1","Who became Maharashtra's first woman Deputy Chief Minister on 31 January 2026?",["Sunetra Pawar","Supriya Sule","Pankaja Munde","Rashmi Shukla"],"Sunetra Pawar was sworn in three days after the death of her husband, Ajit Pawar.",""],
["CA1","Madhav Gadgil, who died on 7 January 2026, was known for his work as a/an:",["Ecologist who chaired the Western Ghats expert panel","Nuclear physicist","Economist who headed the Planning Commission","Classical vocalist"],"His 2011 Western Ghats Ecology Expert Panel report is known as the Gadgil Report.",""],
["CA1","Mark Tully, who died in New Delhi on 25 January 2026, was famous as a journalist of the:",["BBC","Reuters","The Times of India","Associated Press"],"He was the BBC's long-time India correspondent, often called its 'voice of India'.",""],
["CA1","Suresh Kalmadi, who died on 6 January 2026, had been president of the:",["Indian Olympic Association","BCCI","Hockey India","All India Football Federation"],"He headed the IOA from 1996 to 2011; former BCCI president I. S. Bindra died later that month.",""]
);

LASTMOMENT.push(
{t:"January 2026", era:["ca"], rows:[["R-Day chief guests","Costa & von der Leyen (EU)"],["India–EU Summit (16th)","New Delhi, 27 Jan — FTA talks done"],["Vande Bharat Sleeper","Howrah–Kamakhya, 17 Jan"],["Economic Survey","29 Jan · 7.4% · 6.8–7.2%"],["PSLV-C62","Failed, 12 Jan (EOS-N1)"],["Army Day (78th)","Jaipur"],["Padma Awards","131 · PV Dharmendra"],["Ashoka Chakra","Shubhanshu Shukla"],["BJP president","Nitin Nabin"],["AO women","Rybakina"]]}
);
TILES.push(["131","Padma Awards announced on 25 Jan 2026","ca"],["16th","India–EU Summit — New Delhi, 27 Jan 2026","ca"],["80th","India in the Henley Passport Index (Jan 2026)","ca"],["78th","Army Day — parade in Jaipur","ca"],["1026","Ghazni's attack on Somnath — 1,000 years marked in Jan 2026","ca"]);
