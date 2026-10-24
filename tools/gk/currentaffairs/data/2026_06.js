/* Current Affairs 2026 · June 2026 (lesson CA6). Self-contained: its tables, lesson, questions, last-moment card and tiles.
   Every fact was checked on 24 Oct 2026 against the sources in the lesson's last table; nothing unconfirmed is kept.
   Table rows are [item, fact, note]. Names start with CA6_ so other month files never clash with them. */
const CA6_NAT = [
  ["12th International Day of Yoga","21 Jun 2026 — main event led by PM Modi on Red Road, Kolkata","Theme: 'Yoga for Healthy Ageing'. Indian missions abroad held events at about 2,500 places."],
  ["MGNREGA ends","Ran until 30 Jun 2026; replaced by the VB-G RAM G Act from 1 Jul 2026","Viksit Bharat – Guarantee for Rozgar and Ajeevika Mission (Gramin): 125 days of wage work a year instead of 100. Works running on 30 June carry over."],
  ["QS World University Rankings 2027","Released 18 Jun 2026: IIT Delhi 118th, India's best for the second year","IIT Bombay 134th; 52 Indian institutions ranked. MIT first for the 15th year."]
];
const CA6_INT = [
  ["52nd G7 Summit","Evian-les-Bains, France, 15–17 Jun 2026","PM Modi attended as an invited leader and met US President Trump on the sidelines."],
  ["PM Modi in Slovakia","14–16 Jun 2026, Bratislava — the first visit by an Indian PM since Slovakia's independence in 1993","Talks with PM Robert Fico; agreements signed, including on defence."],
  ["President of the 81st UN General Assembly","Khalilur Rahman, Bangladesh's Foreign Minister — elected 2 Jun 2026","Beat Cyprus's Andreas Kakouris 99 votes to 91; term from 8 Sep 2026."],
  ["US–Iran Islamabad MoU","Signed electronically by both sides on 17 Jun 2026","Pakistan mediated. It extended the ceasefire, aimed to reopen the Strait of Hormuz and set a 60-day window for a final deal."],
  ["Global Peace Index 2026","India 127th of 163 (released June 2026)","By the Institute for Economics and Peace. Iceland most peaceful for the 18th year running."]
];
const CA6_ECO = [
  ["RBI monetary policy (5 Jun 2026)","Repo rate kept at 5.25%; stance neutral; MPC vote unanimous","SDF 5.00%, MSF and Bank Rate 5.50%. Governor Sanjay Malhotra."],
  ["RBI projections for 2026-27 (5 Jun 2026)","GDP growth cut to 6.6% (from 6.9%); CPI inflation raised to 5.1% (from 4.6%)","The West Asia conflict, costly crude and a weak rupee were the reasons given."],
  ["World Bank Global Economic Prospects (June 2026)","India to grow 6.6% in 2026-27; world growth 2.5% in 2026","India stays the fastest-growing major economy; 7.2% forecast for 2027-28."],
  ["New IIP series","Index of Industrial Production with base year 2022-23 released by MoSPI on 1 Jun 2026","Covers 463 item groups, up from 407."]
];
const CA6_SCI = [
  ["SIPRI Yearbook 2026","India had about 190 nuclear warheads in January 2026 — 12 of them deployed","The first time SIPRI counted Indian warheads as deployed. Pakistan about 170, China about 620."],
  ["Three warships commissioned","21 Jun 2026, Kolkata: INS Dunagiri, INS Sanshodhak and INS Agray","Commissioned by PM Modi at Syama Prasad Mookerjee Port; all built by GRSE. Dunagiri is a stealth frigate, Sanshodhak a large survey vessel, Agray an anti-submarine shallow-water craft."]
];
const CA6_SPO = [
  ["French Open 2026 — men","Alexander Zverev beat Flavio Cobolli in the final (7 Jun 2026)","Zverev's first Grand Slam title, after losing three earlier finals."],
  ["French Open 2026 — women","Mirra Andreeva beat qualifier Maja Chwalinska 6-3, 6-2 (6 Jun 2026)","Andreeva's first Grand Slam title."],
  ["Norway Chess 2026","R. Praggnanandhaa won — the first Indian to win Norway Chess","Held in Oslo, 25 May – 5 Jun 2026, after 13 years in Stavanger. He beat Magnus Carlsen twice; Wesley So was second. Women: Bibisara Assaubayeva."],
  ["SAFF Women's Championship 2026","India beat Bangladesh 3-1 in the final, 6 Jun 2026, Margao (Goa)","India's sixth title and first since 2019."],
  ["FIFA World Cup 2026 opener","Mexico beat South Africa 2-0 on 11 Jun 2026 at Estadio Azteca, Mexico City","The tournament is co-hosted by Mexico, the USA and Canada."]
];
const CA6_AWD = [
  ["Padma Awards — second investiture","23 Jun 2026, Rashtrapati Bhavan: 65 awards (2 Padma Vibhushan, 7 Padma Bhushan, 56 Padma Shri)","Completed the 2026 list after the first ceremony of 25 May (66 awards)."],
  ["Padma Vibhushan (23 Jun)","K. T. Thomas (public affairs) and P. Narayanan (literature and education)","The first ceremony's two Padma Vibhushans went to Dharmendra (posthumous) and N. Rajam."],
  ["Order of the White Double Cross, First Class","Slovakia's highest state honour, for PM Modi — 15 Jun 2026","Conferred by President Peter Pellegrini in Bratislava; reported as his 33rd international honour."]
];
const CA6_APP = [
  ["Chief of the Army Staff","General Dhiraj Seth — 31st chief, took charge on 30 Jun 2026","After General Upendra Dwivedi. Earlier Vice Chief; Armoured Corps officer; tenure to 31 Aug 2028."],
  ["Director, Intelligence Bureau","Mahesh Dixit — approved by the ACC on 25 Jun 2026","Succeeds Tapan Kumar Deka from 30 June. 1993-batch IPS (Andhra Pradesh cadre) and a medical doctor; two-year term."]
];
const CA6_PLC = [
  ["Evian-les-Bains, France","Host of the 52nd G7 Summit (15–17 Jun 2026)","A spa town on Lake Geneva."],
  ["Bratislava, Slovakia","PM Modi's first visit there (14–16 Jun 2026)","Slovakia became independent on 1 Jan 1993."],
  ["Red Road, Kolkata","Main venue of International Day of Yoga 2026","PM Modi led the Common Yoga Protocol there on 21 June."],
  ["Syama Prasad Mookerjee Port, Kolkata","Where three warships were commissioned on 21 Jun 2026","Home of the builder, Garden Reach Shipbuilders & Engineers (GRSE)."],
  ["Margao, Goa","Venue of the SAFF Women's Championship final (6 Jun 2026)","Played at the Pandit Jawaharlal Nehru Stadium."],
  ["Oslo, Norway","New home of Norway Chess (2026)","The event had been held in Stavanger for 13 years."],
  ["Khalilur Rahman","Bangladesh's Foreign Minister — President-elect of the 81st UN General Assembly","Elected 2 Jun 2026 for the Asia-Pacific Group's turn."]
];
const CA6_OBI = [
  ["Bharathiraja","Tamil film director; died in Chennai on 10 Jun 2026, aged 84","Debut film 16 Vayathinile (1977); Padma Shri 2004."],
  ["Jaspal Rana","Pistol shooter and national coach; died in Delhi on 12 Jun 2026, aged 49","Asian Games gold medallist; Arjuna Award 1994, Padma Shri 1997; coached Manu Bhaker. Cremated with state honours in Dehradun."]
];
const CA6_SRC = [
  ['<a href="https://newsonair.gov.in/international-yoga-day-2026-being-celebrated-across-the-globe-with-theme-yoga-for-healthy-ageing/">newsonair.gov.in</a>',"Yoga Day 2026 theme 'Yoga for Healthy Ageing' (21 Jun 2026)"],
  ['<a href="https://newsonair.gov.in/pm-modi-to-lead-main-international-day-of-yoga-event-at-kolkatas-red-road/">newsonair.gov.in</a>',"Main event at Red Road, Kolkata"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/12th-international-day-of-yoga-2026/print_manually">drishtiias.com</a>',"12th edition; missions abroad"],
  ['<a href="https://www.outlookmoney.com/news/vb-g-ram-g-act-replaces-mgnrega-implementation-to-take-effect-from-july-1">outlookmoney.com</a>',"VB-G RAM G Act replaces MGNREGA from 1 July"],
  ['<a href="https://arunachaltimes.in/article/vb-g-ram-g-act-to-come-into-force-from-1-july-govt">arunachaltimes.in</a>',"Notification: Act in force from 1 July; MGNREGA repealed; works of 30 June carried over"],
  ['<a href="https://www.shankariasparliament.com/current-affairs/viksit-bharat-guarantee-for-rozgar-and-ajeevika-mission-gramin">shankariasparliament.com</a>',"125 days of work instead of 100"],
  ['<a href="https://newsonair.gov.in/iit-delhi-remains-indias-highest-ranked-institution-in-qs-world-university-rankings-2027/">newsonair.gov.in</a>',"IIT Delhi India's top institution in QS WUR 2027"],
  ['<a href="https://www.indiatvnews.com/education/news/qs-world-university-rankings-2027-iit-delhi-ranks-118th-globally-tops-indian-institutions-2026-06-18-1045273">indiatvnews.com</a>',"IIT Delhi 118th; released 18 Jun 2026"],
  ['<a href="https://news.careers360.com/qs-world-university-rankings-2027-iit-delhi-bombay-ranked-highest-iits-du-jnu-mu-improve-globally">careers360.com</a>',"IIT Bombay 134th; 52 Indian institutions; MIT first"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/pm-modi-to-participate-in-52nd-g7-summit-in-france/print_manually">drishtiias.com</a>',"52nd G7 Summit, Evian, 15–17 Jun 2026"],
  ['<a href="https://newsonair.gov.in/pm-modi-reaches-evian-to-participate-in-g7-summit/">newsonair.gov.in</a>',"PM Modi reaches Evian for the G7 Summit"],
  ['<a href="https://www.thehitavada.com//Encyc/2026/6/17/pm-modi-trump-meet-at-g7-summit.html">thehitavada.com</a>',"Modi and Trump meet at the G7"],
  ['<a href="https://www.tribuneindia.com/news/world/first-ever-visit-by-indian-pm-to-the-slovak-republic-since-its-independence-mea-on-pm-modis-upcoming-visit/">tribuneindia.com</a>',"First visit by an Indian PM to Slovakia since independence"],
  ['<a href="https://www.indiatvnews.com/news/world/pm-modi-lands-in-slovakia-on-historic-visit-first-by-an-indian-pm-since-1993-what-s-on-agenda-2026-06-15-1044850">indiatvnews.com</a>',"Lands in Bratislava; first since 1993"],
  ['<a href="https://www.tribuneindia.com/news/world/pm-modi-holds-delegation-level-talks-with-slovak-pm-robert-fico-in-bratislava/">tribuneindia.com</a>',"Talks with PM Robert Fico"],
  ['<a href="https://ianslive.in/pm-modi-makes-history-in-bratislava-as-india-and-slovakia-sign-agreements-mea--20260616024333">ianslive.in</a>',"India and Slovakia sign agreements"],
  ['<a href="https://www.aljazeera.com/amp/news/2026/6/3/bangladeshs-rahman-elected-un-general-assembly-president-in-tight-race">aljazeera.com</a>',"Khalilur Rahman elected UNGA President in a tight race"],
  ['<a href="https://www.wam.ae/en/article/c0iu155-general-assembly-elects-bangladeshs-foreign">wam.ae</a>',"99 votes to 91 over Cyprus's Andreas Kakouris (2 Jun 2026); term from 8 Sep"],
  ['<a href="https://www.aljazeera.com/amp/news/2026/6/17/iran-confirms-that-mou-has-been-signed-electronically-by-both-sides">aljazeera.com</a>',"Iran confirms the MoU signed electronically by both sides (17 Jun 2026)"],
  ['<a href="https://propakistani.pk/2026/06/18/us-and-iran-electronically-sign-islamabad-mou-to-end-war/amp/">propakistani.pk</a>',"Islamabad MoU; Pakistan's mediation; 60-day negotiating period; Hormuz"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/global-peace-index-2026/print_manually">drishtiias.com</a>',"Global Peace Index 2026: India 127th of 163; Iceland first"],
  ['<a href="https://wionews.com/photos/global-peace-index-2026-how-india-and-its-neighbours-ranked-in-south-asia-1781249033160">wionews.com</a>',"India's GPI 2026 rank"],
  ['<a href="https://newsonair.gov.in/rbi-keeps-repo-rate-unchanged-at-5-25-retains-neutral-stance/">newsonair.gov.in</a>',"RBI keeps repo at 5.25%, neutral (5 Jun 2026); GDP 6.6%, CPI 5.1%"],
  ['<a href="https://thetaxcorp.in/article/rbi-keeps-repo-rate-steady-at-525-amid-global-headwinds-key-takeaways-from-june">thetaxcorp.in</a>',"Unanimous vote; SDF 5.00%, MSF 5.50%"],
  ['<a href="https://visionias.in/current-affairs/upsc-daily-news-summary/article/2026-06-12/the-economic-times/economy/world-bank-ups-fy27-india-growth-outlook-to-66">visionias.in (The Economic Times)</a>',"World Bank GEP: India 6.6% in FY27"],
  ['<a href="https://swarajyamag.com/amp/story/news-brief/india-to-retain-fastest-growing-major-economy-tag-at-66-per-cent-growth-says-world-bank">swarajyamag.com</a>',"India fastest-growing major economy at 6.6%"],
  ['<a href="https://superkalam.com/current-affairs/12-06-2026/world-bank-raises-india-s-fy27-growth-forecast-to-6-6-pg16-e0c54da1-0d3a-4b9c-8f69-ed266bf12210">superkalam.com</a>',"Global growth 2.5% in 2026; India 7.2% in 2027-28"],
  ['<a href="https://visionias.in/current-affairs/news-today/2026-06-03/economy/base-year-revision-of-the-all-india-index-of-industrial-production-iip">visionias.in</a>',"IIP base year revised to 2022-23 (June 2026)"],
  ['<a href="https://www.mospi.gov.in/uploads/latestReleases/latest_release_1782727994645_1af6a37e-b7fb-4ee8-bf52-96fcea2a47e2_IIP_Press_release_May_2026.pdf">mospi.gov.in (IIP release)</a>',"New IIP series, base 2022-23, released 1 Jun 2026; 463 item groups"],
  ['<a href="https://www.theweek.in/news/defence/2026/06/09/india-expands-nuclear-arsenal-to-190-warheads-deploys-some-for-first-time-sipri.amp.html">theweek.in</a>',"SIPRI: India 190 warheads, some deployed for the first time"],
  ['<a href="https://www.outlookbusiness.com/news/indias-nuclear-arsenal-expands-12-warheads-deployed-for-first-time-sipri">outlookbusiness.com</a>',"12 Indian warheads deployed"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/sipri-yearbook-2026/print_manually">drishtiias.com</a>',"SIPRI Yearbook 2026; Pakistan 170, China 620"],
  ['<a href="https://www.pmindia.gov.in/en/news_updates/pm-commissions-three-indigenously-designed-and-built-naval-ships-ins-dunagiri-ins-sanshodhak-and-ins-agray-at-syama-prasad-mookerjee-port-kolkata-west-bengal/">pmindia.gov.in</a>',"PM commissions INS Dunagiri, Sanshodhak and Agray at Syama Prasad Mookerjee Port, Kolkata"],
  ['<a href="https://www.marineinsight.com/india-commissions-3-indigenously-built-frontline-naval-platforms-in-kolkata/">marineinsight.com</a>',"Three GRSE-built ships commissioned in Kolkata"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/three-indigenous-naval-ships-commissioned/print_manually">drishtiias.com</a>',"Roles of the three ships (21 Jun 2026)"],
  ['<a href="https://www.games.cbssports.com/tennis/news/2026-french-open-prize-money-purse-payouts-roland-garros/">cbssports.com</a>',"Zverev beat Cobolli — his first Slam; Andreeva beat qualifier Chwalinska"],
  ['<a href="https://www.puntodebreak.com/en/2026/06/07/this-is-the-money-won-by-zverev-and-andreeva-as-champions-of-roland-garros-2026">puntodebreak.com</a>',"Zverev and Andreeva champions of Roland Garros 2026"],
  ['<a href="https://www.eldiario.ec/deportes/alexander-zverev-vence-a-flavio-cobolli-en-cinco-sets-y-se-corona-campeon-de-roland-garros-2026-07062026/">eldiario.ec</a>',"Zverev beat Cobolli in the final, 7 Jun 2026"],
  ['<a href="https://www.fide.com/2026/06/06/">fide.com</a>',"Norway Chess 2026: Praggnanandhaa and Assaubayeva win (Oslo, 25 May – 5 Jun)"],
  ['<a href="https://www.etvbharat.com/en/sports/praggnanandhaa-scripts-history-becomes-first-indian-to-win-norway-chess-title-enn26060600220">etvbharat.com</a>',"First Indian to win Norway Chess"],
  ['<a href="https://thebridge.in/chess/praggnanandhaa-wins-norway-chess-2026-56662">thebridge.in</a>',"Final standings; wins over Carlsen"],
  ['<a href="https://ianslive.in/norway-chess-shifts-to-oslo-after-13-years-in-stavanger--20260113123811">ianslive.in</a>',"Norway Chess moved to Oslo after 13 years in Stavanger"],
  ['<a href="https://newsonair.gov.in/india-defeats-bangladesh-and-lifts-saff-womens-championship-2026-trophy-for-record-sixth-time/">newsonair.gov.in</a>',"India beat Bangladesh for a record sixth SAFF Women's title"],
  ['<a href="https://www.the-aiff.com/article/familiar-foes-bigger-stakes-india-and-bangladesh-clash-again-in-saff-womens-cship-final">the-aiff.com</a>',"Final at Pandit Jawaharlal Nehru Stadium, Margao"],
  ['<a href="https://www.drishtiias.com/state-pcs-current-affairs/india-wins-saff-womens-championship-2026-for-record-sixth-time/print_manually">drishtiias.com</a>',"Sixth title; 3-1 score"],
  ['<a href="https://pajhwok.com/2026/06/12/mexico-defeats-south-africa-2-0-in-2026-world-cup-opener/">pajhwok.com</a>',"Mexico beat South Africa 2-0 in the World Cup opener"],
  ['<a href="https://newschannel9.com/sports/soccer/2026-world-cup-highlights-mexico-cruises-to-2-0-victory-over-south-africa-in-opener">newschannel9.com</a>',"Opener on 11 Jun 2026 at Estadio Azteca"],
  ['<a href="https://presidentofindia.gov.in/press_releases/president-india-presents-padma-awards-2026-civil-investiture-ceremony-ii">presidentofindia.gov.in</a>',"President presents Padma Awards 2026 at Civil Investiture Ceremony II (23 Jun 2026)"],
  ['<a href="https://www.manoramayearbook.in/current-affairs/india/2026/06/24/president-murmu-confers-65-padma-awards.html">manoramayearbook.in</a>',"65 awards (2 PV, 7 PB, 56 PS); Padma Vibhushan to K. T. Thomas and P. Narayanan"],
  ['<a href="https://newsonair.gov.in/president-droupadi-murmu-to-confer-padma-awards-2026-at-second-civil-investiture-ceremony-this-evening/">newsonair.gov.in</a>',"Second civil investiture ceremony, 23 Jun 2026"],
  ['<a href="https://www.pmindia.gov.in/en/news_updates/pm-conferred-with-the-highest-national-honour-of-the-slovak-republic-order-of-the-white-double-cross-1st-class/">pmindia.gov.in</a>',"Order of the White Double Cross, 1st Class, for PM Modi"],
  ['<a href="https://ianslive.in/slovakia-conferred-its-highest-honour-on-pm-modi--20260615230736">ianslive.in</a>',"Conferred on 15 Jun 2026 by President Pellegrini"],
  ['<a href="https://www.indiatvnews.com/news/world/pm-modi-receives-slovakia-highest-honour-his-33rd-international-recognition-latest-updates-2026-06-15-1044961">indiatvnews.com</a>',"His 33rd international honour"],
  ['<a href="https://newsonair.gov.in/general-dhiraj-seth-takes-charge-as-31st-chief-of-the-army-staff/">newsonair.gov.in</a>',"Gen Dhiraj Seth takes charge as 31st COAS (30 Jun 2026)"],
  ['<a href="https://www.freepressjournal.in/india/general-dhiraj-seth-takes-over-as-indian-army-chief-marking-armoured-corps-leadership-return-after-nearly-3-decades">freepressjournal.in</a>',"Armoured Corps officer; succeeds Gen Upendra Dwivedi"],
  ['<a href="https://gulfnews.com/world/asia/india/who-is-general-dhiraj-seth-india-s-new-army-chief-1.500591927">gulfnews.com</a>',"Tenure to 31 Aug 2028; former Vice Chief"],
  ['<a href="https://www.etvbharat.com/en/bharat/senior-ips-officer-mahesh-dixit-appointed-intelligence-bureau-chief-enn26062508085">etvbharat.com</a>',"Mahesh Dixit appointed IB chief (25 Jun 2026)"],
  ['<a href="https://www.theweek.in/news/india/2026/06/26/who-is-mahesh-dixit-meet-the-doctor-turned-ips-officer-appointed-as-the-new-intelligence-bureau-chief.html">theweek.in</a>',"Doctor-turned-IPS officer; 1993 batch, Andhra Pradesh cadre"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/mahesh-dixit-appointed-intelligence-bureau-chief/print_manually">drishtiias.com</a>',"Succeeds Tapan Kumar Deka; two-year term"],
  ['<a href="https://www.indiatvnews.com/entertainment/regional-cinema/bharathiraja-veteran-actor-filmmaker-dies-due-to-age-related-illness-2026-06-10-1044270">indiatvnews.com</a>',"Bharathiraja died, 10 Jun 2026"],
  ['<a href="https://thesouthfirst.com/tamilnadu/veteran-tamil-filmmaker-actor-bharathiraja-passes-away-at-84/">thesouthfirst.com</a>',"Aged 84, in Chennai; 16 Vayathinile; Padma Shri 2004"],
  ['<a href="https://ianslive.in/huge-loss-renowned-indian-pistol-shooter-and-coach-jaspal-rana-passes-away-at-49--20260612101417">ianslive.in</a>',"Jaspal Rana died, aged 49 (12 Jun 2026)"],
  ['<a href="https://scroll.in/latest/1093526/jaspal-rana-champion-shooter-and-coach-dies-at-49">scroll.in</a>',"Champion shooter and coach dies at 49"],
  ['<a href="https://www.deccanherald.com/sports/other-sports/jaspal-rana-indian-shooter-and-olympic-medallist-manu-bhakers-coach-passes-away-at-49-4036446">deccanherald.com</a>',"Manu Bhaker's coach; Arjuna 1994, Padma Shri 1997"],
  ['<a href="https://ianslive.in/indian-shooting-legend-jaspal-rana-given-full-state-honours-at-his-residence--20260613131852">ianslive.in</a>',"State honours at his Dehradun residence (13 Jun)"]
];

LESSONS.push(
{id:"CA6", title:"June 2026", hi:"जून 2026", blocks:[
  {k:"hot", h:"Most likely to be asked: <b>General Dhiraj Seth</b>, the 31st Army chief (30 June), <b>Mahesh Dixit</b> at the IB, the <b>RBI's hold at 5.25%</b> with growth cut to <b>6.6%</b>, the <b>G7 at Evian</b> and the PM's first visit to <b>Slovakia</b>, <b>Khalilur Rahman</b> as UNGA President-elect, Yoga Day's theme <b>'Yoga for Healthy Ageing'</b>, <b>Praggnanandhaa</b>'s Norway Chess title, the <b>French Open</b> champions, and <b>Jaspal Rana</b>'s death."},
  {k:"story", h:"<p>June 2026 opened with the RBI. On <b>5 June</b> it kept the repo rate at <b>5.25%</b> but cut its growth forecast to <b>6.6%</b> and raised its inflation forecast to <b>5.1%</b>, worried by the West Asia war and dear oil; the <b>World Bank</b> also said <b>6.6%</b>. Abroad, PM Modi went to <b>Slovakia</b> (the first Indian PM to do so) and received its highest honour, then joined the <b>52nd G7 Summit</b> at <b>Evian</b> in France. Bangladesh's <b>Khalilur Rahman</b> was elected to preside over the next UN General Assembly, and the US and Iran signed the <b>Islamabad MoU</b>.</p><p>On <b>21 June</b> Kolkata had a double day: the PM led <b>Yoga Day</b> on Red Road and commissioned <b>three warships</b> at the port. In sport, <b>Praggnanandhaa</b> became the first Indian to win <b>Norway Chess</b>, India's women won the <b>SAFF</b> title, and <b>Zverev</b> and <b>Andreeva</b> won their first Slams in Paris. The month closed with <b>General Dhiraj Seth</b> taking over the Army and <b>MGNREGA</b> giving way to the new VB-G RAM G law.</p>", key:"5 Jun RBI 5.25% (GDP 6.6, CPI 5.1); G7 Evian 15–17 Jun; Slovakia; 21 Jun Kolkata — Yoga + 3 ships; Pragg Norway Chess; 30 Jun — Gen Dhiraj Seth, MGNREGA ends."},
  {k:"table", title:"National — government decisions, schemes, laws", head:["Item","Fact","Note"], rows: CA6_NAT},
  {k:"table", title:"International — summits, agreements, elections abroad", head:["Item","Fact","Note"], rows: CA6_INT},
  {k:"table", title:"Economy and banking", head:["Item","Fact","Note"], rows: CA6_ECO},
  {k:"table", title:"Science, space and defence", head:["Item","Fact","Note"], rows: CA6_SCI},
  {k:"table", title:"Sports", head:["Item","Fact","Note"], rows: CA6_SPO},
  {k:"table", title:"Awards and honours", head:["Item","Fact","Note"], rows: CA6_AWD},
  {k:"table", title:"Appointments", head:["Item","Fact","Note"], rows: CA6_APP},
  {k:"table", title:"Places and persons in news", head:["Item","Fact","Note"], rows: CA6_PLC},
  {k:"table", title:"Obituaries", head:["Item","Fact","Note"], rows: CA6_OBI},
  {k:"trick", h:"<b>30 June 2026</b> is a triple date: <b>General Dhiraj Seth</b> takes over the Army, <b>Mahesh Dixit</b> takes over the IB, and <b>MGNREGA</b> runs its last day (VB-G RAM G from 1 July)."},
  {k:"trick", h:"The service chiefs in order of taking over — <b>“Navy and CDS in May, Army in June”</b>: CDS <b>Raja Subramani</b> (3rd) and Navy chief <b>Krishna Swaminathan</b> (27th) on <b>31 May</b>; Army chief <b>Dhiraj Seth</b> (31st) on <b>30 June</b>."},
  {k:"trap", h:"<b>6.6% twice</b>: the <b>RBI</b> (5 June) and the <b>World Bank</b> (June) both put India's 2026-27 growth at <b>6.6%</b>. Do not mix it with the RBI's April figure (<b>6.9%</b>) or its new inflation forecast (<b>5.1%</b>)."},
  {k:"trap", h:"<b>Two honours, two countries</b>: <b>Sweden</b> gave PM Modi the <b>Royal Order of the Polar Star</b> (May); <b>Slovakia</b> gave him the <b>Order of the White Double Cross</b> (June). And the G7 was at <b>Evian</b>, not Paris."},
  {k:"trap", h:"<b>Norway Chess 2026</b> was held in <b>Oslo</b>, not Stavanger, and won by <b>Praggnanandhaa</b> — not Gukesh or Carlsen."},
  {k:"table", title:"Sources (checked 24 Oct 2026)", head:["Source","What it confirmed"], rows: CA6_SRC}
], sum:[
  "RBI, 5 Jun 2026: repo 5.25% held, neutral; FY27 GDP 6.6% (from 6.9%), CPI 5.1% (from 4.6%).",
  "World Bank GEP (June): India 6.6% in 2026-27; world 2.5% in 2026.",
  "New IIP series with base 2022-23 released 1 Jun 2026.",
  "52nd G7 Summit: Evian, France, 15–17 Jun 2026. PM's first visit to Slovakia, 14–16 Jun; Order of the White Double Cross (15 Jun).",
  "Khalilur Rahman (Bangladesh) elected President of the 81st UNGA on 2 Jun 2026 (99–91 over Cyprus).",
  "US–Iran Islamabad MoU signed electronically, 17 Jun 2026 (Pakistan mediated).",
  "Yoga Day, 21 Jun 2026: 12th edition, Red Road, Kolkata — 'Yoga for Healthy Ageing'.",
  "21 Jun 2026: INS Dunagiri, INS Sanshodhak and INS Agray commissioned in Kolkata.",
  "SIPRI 2026: India about 190 warheads, 12 deployed. Global Peace Index 2026: India 127th. QS 2027: IIT Delhi 118th.",
  "30 Jun 2026: Gen Dhiraj Seth 31st Army chief; Mahesh Dixit IB Director; MGNREGA ends.",
  "French Open: Alexander Zverev and Mirra Andreeva (first Slams). Norway Chess (Oslo): Praggnanandhaa. SAFF Women's: India (6th title).",
  "Padma investiture II (23 Jun): 65 awards; Padma Vibhushan to K. T. Thomas and P. Narayanan.",
  "Died: Bharathiraja (10 Jun), Jaspal Rana (12 Jun)."
]}
);

QB.push(
["CA6","Who took charge as India's 31st Chief of the Army Staff on 30 June 2026?",["General Dhiraj Seth","General Upendra Dwivedi","General N. S. Raja Subramani","General Manoj Pande"],"Gen Dhiraj Seth, earlier the Vice Chief, succeeded Gen Upendra Dwivedi.",""],
["CA6","General Dhiraj Seth, the Army chief from 30 June 2026, belongs to which arm?",["Armoured Corps","Infantry","Regiment of Artillery","Corps of Engineers"],"He was commissioned into the Armoured Corps in 1986.",""],
["CA6","Who was appointed Director of the Intelligence Bureau in June 2026?",["Mahesh Dixit","Tapan Kumar Deka","Ravi Sinha","Parag Jain"],"Mahesh Dixit, a 1993-batch IPS officer, succeeded Tapan Kumar Deka from 30 June 2026.",""],
["CA6","In its policy of 5 June 2026, the RBI kept the repo rate at:",["5.25%","5.00%","5.50%","6.00%"],"The MPC held the rate at 5.25% with a neutral stance, as it had in April.",""],
["CA6","In June 2026, the RBI cut its GDP growth projection for 2026-27 to:",["6.6%","6.9%","7.2%","6.1%"],"It lowered the forecast from 6.9% to 6.6% because of the West Asia conflict and costly crude.",""],
["CA6","What CPI inflation did the RBI project for 2026-27 in its June 2026 policy?",["5.1%","4.6%","4.0%","2.1%"],"It raised the projection from 4.6% (April) to 5.1%.",""],
["CA6","In its Global Economic Prospects of June 2026, the World Bank projected world growth in 2026 at:",["2.5%","3.1%","6.6%","3.3%"],"It forecast 2.5% for the world and 6.6% for India in 2026-27.",""],
["CA6","The new series of the Index of Industrial Production released on 1 June 2026 has the base year:",["2022-23","2011-12","2017-18","2024-25"],"MoSPI moved the IIP base from 2011-12 to 2022-23 and widened it to 463 item groups.",""],
["CA6","Where was the 52nd G7 Summit held in June 2026?",["Evian-les-Bains, France","Kananaskis, Canada","Apulia, Italy","Hiroshima, Japan"],"France hosted it at Evian on 15–17 June 2026; Kananaskis hosted the 2025 summit.",""],
["CA6","PM Modi's visit of 14–16 June 2026 was the first by an Indian Prime Minister to which country since its independence in 1993?",["Slovakia","Czech Republic","Croatia","Slovenia"],"He held talks with PM Robert Fico in Bratislava.",""],
["CA6","Which honour did Slovakia confer on PM Modi on 15 June 2026?",["Order of the White Double Cross, First Class","Royal Order of the Polar Star","Order of the White Lion","Order of the White Eagle"],"President Peter Pellegrini conferred Slovakia's highest state honour in Bratislava.",""],
["CA6","Who was elected President of the 81st session of the UN General Assembly on 2 June 2026?",["Khalilur Rahman","Annalena Baerbock","Andreas Kakouris","Philemon Yang"],"Bangladesh's Foreign Minister beat Cyprus's Andreas Kakouris 99–91; Annalena Baerbock presided over the 80th session.",""],
["CA6","The US–Iran memorandum signed electronically on 17 June 2026 is named after which city?",["Islamabad","Doha","Muscat","Geneva"],"Pakistan mediated the Islamabad MoU, which extended the ceasefire.",""],
["CA6","In the Global Peace Index 2026, India ranked:",["127th","157th","118th","38th"],"India was 127th of 163; Iceland was the most peaceful country again.",""],
["CA6","What was the theme of the International Day of Yoga 2026?",["Yoga for Healthy Ageing","Yoga for One Earth, One Health","Yoga for Self and Society","Yoga for Humanity"],"The 12th Yoga Day had the theme 'Yoga for Healthy Ageing'; 'Yoga for One Earth, One Health' was the 2025 theme.",""],
["CA6","Where did PM Modi lead the main International Day of Yoga event on 21 June 2026?",["Red Road, Kolkata","Kartavya Path, New Delhi","Visakhapatnam beach","Srinagar, SKICC"],"The main national event was on Red Road, Kolkata; Visakhapatnam hosted it in 2025.",""],
["CA6","Under the VB-G RAM G Act, which replaced MGNREGA from 1 July 2026, how many days of wage work are guaranteed a year?",["125","100","150","90"],"The new law raises the guarantee from MGNREGA's 100 days to 125.",""],
["CA6","Which Indian institution ranked highest in the QS World University Rankings 2027 (June 2026)?",["IIT Delhi","IIT Bombay","IISc Bengaluru","IIT Madras"],"IIT Delhi was 118th; IIT Bombay was 134th.",""],
["CA6","According to the SIPRI Yearbook 2026, India had about how many nuclear warheads in January 2026?",["190","170","620","12"],"India had about 190, with 12 counted as deployed for the first time; Pakistan had about 170.",""],
["CA6","Which three ships did PM Modi commission at Kolkata on 21 June 2026?",["INS Dunagiri, INS Sanshodhak and INS Agray","INS Vikrant, INS Vagsheer and INS Surat","INS Nilgiri, INS Udaygiri and INS Himgiri","INS Arnala, INS Androth and INS Mahe"],"All three were built by GRSE: a stealth frigate, a large survey vessel and an anti-submarine shallow-water craft.",""],
["CA6","Who won the men's singles title at the French Open 2026?",["Alexander Zverev","Carlos Alcaraz","Jannik Sinner","Flavio Cobolli"],"Zverev beat Flavio Cobolli in the final on 7 June 2026 for his first Grand Slam title.",""],
["CA6","Who won the women's singles title at the French Open 2026?",["Mirra Andreeva","Coco Gauff","Aryna Sabalenka","Maja Chwalinska"],"Andreeva beat qualifier Maja Chwalinska 6-3, 6-2 for her first Grand Slam title.",""],
["CA6","Who became the first Indian to win the Norway Chess tournament, in 2026?",["R. Praggnanandhaa","D. Gukesh","Arjun Erigaisi","Viswanathan Anand"],"Praggnanandhaa won in Oslo with 18 points, ahead of Wesley So.",""],
["CA6","Norway Chess 2026 was held in:",["Oslo","Stavanger","Bergen","Trondheim"],"It moved to Oslo after 13 years in Stavanger.",""],
["CA6","India won the SAFF Women's Championship 2026 by beating which team in the final?",["Bangladesh","Nepal","Bhutan","Sri Lanka"],"India beat Bangladesh 3-1 at Margao, Goa, on 6 June 2026 for a sixth title.",""],
["CA6","The opening match of the 2026 FIFA World Cup, on 11 June 2026, was won by:",["Mexico","South Africa","USA","Canada"],"Mexico beat South Africa 2-0 at the Estadio Azteca, Mexico City.",""],
["CA6","At the second Padma investiture on 23 June 2026, how many Padma awards were presented?",["65","66","131","75"],"65 were given on 23 June after 66 on 25 May, completing the 131 awards of 2026.",""],
["CA6","K. T. Thomas (public affairs) received which award at the investiture of 23 June 2026?",["Padma Vibhushan","Padma Bhushan","Padma Shri","Bharat Ratna"],"He and P. Narayanan were the two Padma Vibhushan awardees at the second ceremony.",""],
["CA6","Jaspal Rana, who died in June 2026 aged 49, was a well-known:",["Pistol shooter and coach","Wrestler","Hockey goalkeeper","Archer"],"The Asian Games gold medallist was the national pistol coach and had guided Manu Bhaker.",""],
["CA6","Bharathiraja, who died in Chennai on 10 June 2026, was a noted:",["Tamil film director","Carnatic vocalist","Tamil poet","Cricket commentator"],"The director of 16 Vayathinile (1977) was 84 and a Padma Shri awardee.",""]
);

LASTMOMENT.push(
{t:"June 2026", era:["ca"], rows:[["Repo (5 Jun)","5.25% — held"],["RBI FY27","GDP 6.6% · CPI 5.1%"],["World Bank FY27","India 6.6% · world 2.5%"],["G7","Evian, 15–17 Jun"],["Slovakia","White Double Cross (15 Jun)"],["UNGA 81 President","Khalilur Rahman"],["Yoga Day","Red Road, Kolkata — Healthy Ageing"],["Army chief (30 Jun)","Gen Dhiraj Seth (31st)"],["IB Director","Mahesh Dixit"],["Norway Chess","Praggnanandhaa"],["Died","Bharathiraja · Jaspal Rana"]]}
);
TILES.push(["31st","Army chief — Gen Dhiraj Seth (30 Jun 2026)","ca"],["6.6%","RBI and World Bank growth forecast for 2026-27 (June)","ca"],["190","India's nuclear warheads — SIPRI Yearbook 2026","ca"],["127","India in the Global Peace Index 2026","ca"],["125","Days of work under the VB-G RAM G Act (from 1 Jul 2026)","ca"]);
