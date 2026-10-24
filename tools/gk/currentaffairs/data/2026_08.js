/* Current Affairs 2026 · August 2026 (lesson CA8). Self-contained: its tables, lesson, questions, last-moment card and tiles.
   Every fact was checked on 24 Oct 2026 against the sources in the lesson's last table; nothing unconfirmed is kept.
   Table rows are [item, fact, note]. Names start with CA8_ so other month files never clash with them.
   No Appointments or Obituaries table this month: no item could be confirmed with a date inside August 2026. */
const CA8_NAT = [
  ["80th Independence Day","15 Aug 2026: PM Modi's 13th address in a row from the Red Fort","Only Jawaharlal Nehru (17) has given more in a row; the year also marked 150 years of Vande Mataram."],
  ["GOBARdhan scheme","Cabinet, 6 Aug 2026: ₹23,731 crore for compressed biogas (CBG)","A national unified scheme for 2026-27 to 2035-36, run by the Petroleum Ministry; it aims at about ten times more CBG."],
  ["Supreme Court judges' strength","Bill passed by the Lok Sabha on 3 Aug and the Rajya Sabha on 5 Aug 2026","Raises the number of judges from 33 to 37 besides the CJI (38 in all); replaces an ordinance of May 2026."],
  ["Monsoon Session ends","Parliament adjourned sine die on 13 Aug 2026","The session had begun on 20 Jul; the FCRA amendment bill was sent to a joint committee."]
];
const CA8_INT = [
  ["PM Modi's state visit to Uzbekistan","29–30 Aug 2026, Tashkent — talks with President Shavkat Mirziyoyev","Ties raised to a Comprehensive Strategic Partnership, with a trade target of US$ 5 billion by 2030."],
  ["Commonwealth Games handover","At the Glasgow closing ceremony on 2 Aug 2026, the Commonwealth flag passed to India","Ahmedabad hosts the 2030 Games; Neeraj Chopra and IOA president P. T. Usha received the flag."]
];
const CA8_ECO = [
  ["RBI monetary policy (5 Aug 2026)","Repo rate kept at 5.25%; stance neutral","A unanimous MPC decision; SDF 5.00%, MSF and Bank Rate 5.50%. The next meeting was set for 5–7 Oct 2026."],
  ["GDP growth, Q1 2026-27 (April–June)","7.8% — released by MoSPI (NSO) on 31 Aug 2026","Above the RBI's projection of 7%; gross value added grew 8.2% and manufacturing 9.2%."],
  ["GST collections for July 2026","₹2.11 lakh crore gross, up 15.4% — data of 1 Aug 2026","GST on imports rose about 29%; net collections after refunds were ₹1.81 lakh crore."]
];
const CA8_SCI = [
  ["Agni-4","Test-fired from the Integrated Test Range, Chandipur (Odisha), on 6 Aug 2026","Carried out under the Strategic Forces Command; all operational and technical parameters were validated."],
  ["INS Nipun","Commissioned at the Naval Dockyard, Mumbai, on 31 Aug 2026","The second Nistar-class diving support vessel, built by Hindustan Shipyard, Visakhapatnam; supports diving to 300 m and submarine rescue."]
];
const CA8_SPO = [
  ["Commonwealth Games 2026 — India","4th with 39 medals: 13 gold, 17 silver, 9 bronze (Games ended 2 Aug 2026)","Boxing gave India 7 of its 13 golds."],
  ["Commonwealth Games 2026 — medal table","Australia first: 70 gold, 171 medals","England second (29 gold), Canada third (19 gold)."],
  ["India's flag-bearer at the closing ceremony","Jaismine Lamboria (boxing), 2 Aug 2026","She won the women's 57 kg gold at Glasgow."],
  ["Grand Chess Tour Finals 2026","R. Praggnanandhaa won in Saint Louis, 22–27 Aug 2026","He came back from 3–9 down to beat Fabiano Caruana 15–13 — his first overall Grand Chess Tour title."]
];
const CA8_AWD = [
  ["Lokmanya Tilak National Award 2026","NSA Ajit Doval — presented in Pune on 1 Aug 2026 by Amit Shah","Given by the Lokmanya Tilak Smarak Trust on Tilak's death anniversary; a memento, citation and ₹1 lakh."],
  ["Oliy Darajali Do'stlik Order","Uzbekistan's highest state honour, given to PM Modi in Tashkent on 30 Aug 2026","Presented by President Shavkat Mirziyoyev."],
  ["Ramon Magsaysay Award 2026","Announced on 31 Aug 2026: Tommy Koh (Singapore), Runa Khan (Bangladesh), Bo Kyi (Myanmar)","Koh is a diplomat and law professor, Runa Khan founded the development group Friendship, and Bo Kyi is a human-rights advocate."]
];
const CA8_PLC = [
  ["Red Fort, Delhi","PM Modi's 13th straight Independence Day address, 15 Aug 2026","India's 80th Independence Day."],
  ["Chandipur (Odisha)","Integrated Test Range — Agni-4 test on 6 Aug 2026","Do not mix it up with Dr APJ Abdul Kalam Island, where Kusha was tested in July."],
  ["Naval Dockyard, Mumbai","INS Nipun commissioned here on 31 Aug 2026","Her sister ship INS Nistar is based at Visakhapatnam."],
  ["Tashkent","Capital of Uzbekistan — PM Modi received the Oliy Darajali Do'stlik Order here on 30 Aug 2026","From Tashkent he went on to Bishkek for the SCO Summit (31 Aug – 1 Sep)."],
  ["Pune","Ajit Doval received the Lokmanya Tilak National Award here on 1 Aug 2026","Tilak died on 1 Aug 1920."],
  ["Saint Louis (USA)","Hosted the Grand Chess Tour Finals, 22–27 Aug 2026","Praggnanandhaa beat the defending champion Caruana in the final."],
  ["Ahmedabad","Next host of the Commonwealth Games, in 2030","It received the Commonwealth flag at Glasgow on 2 Aug 2026."]
];
const CA8_SRC = [
  ['<a href="https://swarajyamag.com/news-brief/pm-modi-becomes-second-pm-after-nehru-to-deliver-13-straight-i-day-addresses">swarajyamag.com</a>',"Modi's 13th straight Independence Day address; second PM after Nehru (17)"],
  ['<a href="https://madhyamamonline.com/india/indias-80th-independence-day-record-13th-address-by-pm-modi-at-red-fort-1546023">madhyamamonline.com</a>',"80th Independence Day, 15 Aug 2026"],
  ['<a href="https://www.etvbharat.com/amp/en/videos/pm-modi-addresses-nation-from-red-fort-on-independence-day-enn26081500543">etvbharat.com</a>',"Address from the Red Fort; 150 years of Vande Mataram"],
  ['<a href="https://www.business-standard.com/industry/news/cabinet-clears-rs-23-731-crore-gobardhan-scheme-for-compressed-biogas-126080601393_1.html">business-standard.com</a>',"GOBARdhan, ₹23,731 crore, compressed biogas (6 Aug 2026)"],
  ['<a href="https://www.etvbharat.com/en/bharat/union-cabinet-decisions-ashwini-vaishnaw-biogas-assam-highway-enn26080604558">etvbharat.com</a>',"GOBARdhan: national unified CBG scheme; FY27 to FY36; Petroleum Ministry"],
  ['<a href="https://www.barandbench.com/news/lok-sabha-passes-bill-to-increase-supreme-court-judge-strength-to-38">barandbench.com</a>',"Lok Sabha passed the bill raising the Supreme Court's strength to 38"],
  ['<a href="https://www.scconline.com/blog/post/2026/08/03/lok-sabha-passes-supreme-court-number-of-judges-amendment-bill-2026/">scconline.com</a>',"Passed by the Lok Sabha on 3 Aug 2026; 33 to 37 besides the CJI"],
  ['<a href="https://www.dailyexcelsior.com/parliament-clears-bill-to-raise-supreme-court-judge-strength-to-38/">dailyexcelsior.com</a>',"Parliament cleared the bill (Rajya Sabha, 5 Aug 2026); replaces the May ordinance"],
  ['<a href="https://www.livelaw.in/news-updates/monsoon-session-parliament-2026-12-bills-passed-lok-sabha-rajya-sabha-545997">livelaw.in</a>',"Monsoon Session 20 Jul – 13 Aug 2026; FCRA bill sent to a joint committee"],
  ['<a href="https://prsindia.org/policy/monthly-policy-review/august-2026">prsindia.org (Monthly Policy Review, August 2026)</a>',"Session dates; repo rate unchanged at 5.25%; Q1 GDP 7.8%"],
  ['<a href="https://www.pmindia.gov.in/en/news_updates/visit-of-pm-to-uzbekistan-and-kyrgyz-republic-29-august-1-september-2026/">pmindia.gov.in</a>',"PM's visit to Uzbekistan and the Kyrgyz Republic, 29 Aug – 1 Sep 2026"],
  ['<a href="https://daryo.uz/en/2026/08/30/uzbekistan-welcomes-indian-prime-minister-narendra-modi-for-state-visit/">daryo.uz</a>',"State visit to Uzbekistan"],
  ['<a href="https://thewire.in/diplomacy/modi-receives-uzbekistans-highest-honour-india-uzbekistan-ties-elevated">thewire.in</a>',"Uzbek honour; ties raised to a Comprehensive Strategic Partnership; US$ 5 bn trade target"],
  ['<a href="https://ianslive.in/uzbekistan-confers-its-highest-honour-oliy-darajali-dostlik-order-on-pm-modi--20260830143611">ianslive.in</a>',"Oliy Darajali Do'stlik Order conferred on PM Modi, 30 Aug 2026"],
  ['<a href="https://www.etvbharat.com/en/bharat/pm-modi-receives-uzbekistans-highest-state-honours-enn26083002839">etvbharat.com</a>',"Presented by President Mirziyoyev in Tashkent"],
  ['<a href="https://www.outlookmoney.com/banking/rbi-mpc-august-2026-meeting-live-updates-governor-sanjay-malhotra-speech-repo-rate-inflation-gdp-news">outlookmoney.com</a>',"RBI kept the repo rate at 5.25% (5 Aug 2026)"],
  ['<a href="https://currentaffairs.adda247.com/rbi-monetary-policy-august-2026-key-announcements/">adda247.com</a>',"SDF 5.00%, MSF and Bank Rate 5.50%; neutral stance; unanimous; next meeting 5–7 Oct"],
  ['<a href="https://www.scconline.com/blog/?p=392925">scconline.com</a>',"Repo rate unchanged at 5.25%"],
  ['<a href="https://timesofoman.com/article/176276-indias-gdp-grows-by-78-in-apr-jun-quarter-beats-rbis-estimate">timesofoman.com</a>',"GDP 7.8% in April–June 2026, above the RBI's estimate"],
  ['<a href="https://www.5paisa.com/news/indias-gdp-growth-rises-to-78-in-q1-fy27-beats-estimates-despite-global-headwinds">5paisa.com</a>',"Q1 FY27 data released 31 Aug 2026; GVA 8.2%"],
  ['<a href="https://www.oneindia.com/business/india-s-gdp-grows-7-8-in-q1-fy27-surpasses-forecasts-8191841.html">oneindia.com</a>',"Q1 FY27 growth 7.8%; manufacturing 9.2%"],
  ['<a href="https://businesstoday.in/latest/economy/story/gst-collections-jump-15-4-to-rs2-11-lakh-crore-in-july-import-tax-revenues-surge-nearly-29-546657-2026-08-01">businesstoday.in</a>',"July 2026 GST ₹2.11 lakh crore, +15.4%; import GST up nearly 29% (1 Aug 2026)"],
  ['<a href="https://www.etvbharat.com/amp/en/business/gross-gst-collection-rose-in-july-2026-enn26080101798">etvbharat.com</a>',"Net GST ₹1.81 lakh crore after refunds"],
  ['<a href="https://newsonair.gov.in/india-successfully-test-fired-medium-range-ballistic-missile-agni-4-from-integrated-test-range-at-chandipur-in-odisha/">newsonair.gov.in</a>',"Agni-4 test from ITR Chandipur; Strategic Forces Command"],
  ['<a href="https://www.etvbharat.com/en/bharat/india-successfully-test-fires-agni-4-medium-range-ballistic-missile-enn26080607617">etvbharat.com</a>',"Agni-4 test on 6 Aug 2026; parameters validated"],
  ['<a href="https://newsonair.gov.in/indian-navy-commissions-ins-nipun-at-naval-dockyard-mumbai/">newsonair.gov.in</a>',"INS Nipun commissioned at Naval Dockyard, Mumbai (31 Aug 2026)"],
  ['<a href="https://www.theweek.in/news/defence/2026/08/31/deep-sea-diving-to-submarine-rescue-what-ins-nipun-brings-to-indian-navy.html">theweek.in</a>',"Diving to 300 m; submarine rescue"],
  ['<a href="https://www.marineinsight.com/watch-indian-navy-commissions-indigenously-built-diving-support-vessel-ins-nipun/">marineinsight.com</a>',"Second Nistar-class DSV; built by Hindustan Shipyard"],
  ['<a href="https://www.brut.media/in/articles/commonwealth-games-2026-india-wins-39-medals-finishes-fourth">brut.media</a>',"India 4th with 39 medals at Glasgow 2026"],
  ['<a href="https://www.drishtiias.com/daily-updates/daily-news-analysis/india-at-commonwealth-games-2026/print_manually">drishtiias.com</a>',"13 gold, 17 silver, 9 bronze; Australia, England, Canada on top; seven boxing golds"],
  ['<a href="https://www.freepressjournal.in/sports/commonwealth-games-2026-medal-tally-india-jump-to-4th-after-boxing-run-total-rises-to-39-in-glasgow">freepressjournal.in</a>',"India up to 4th after the boxing finals; total 39"],
  ['<a href="https://deccanherald.com/sports/other-sports/commonwealth-games-2026-boxer-jasimine-to-be-indias-flag-bearers-for-closing-ceremony-4096671">deccanherald.com</a>',"Jaismine Lamboria India's flag-bearer at the closing ceremony"],
  ['<a href="https://www.etvbharat.com/en/sports/commonwealth-games-2026-ends-neeraj-chopra-and-pt-usha-receive-cwg-flag-ahmedabad-to-host-cwg-2030-enn26080300701">etvbharat.com</a>',"Games ended 2 Aug; Neeraj Chopra and P. T. Usha received the flag; Ahmedabad 2030"],
  ['<a href="https://www.deccanchronicle.com/sports/cwg-2026-glasgow-ends-as-flag-and-baton-handed-to-next-host-india-1976114">deccanchronicle.com</a>',"Flag and baton handed to India, the next host"],
  ['<a href="https://www.fide.com/praggnanandhaa-rameshbabu-wins-grand-chess-tour-2026/">fide.com</a>',"Praggnanandhaa won the Grand Chess Tour 2026"],
  ['<a href="https://grandchesstour.org/news/grandmaster-praggnanandhaa-rameshbabu-crowned-winner-of-2026-gct-finals-and-overall-gct-champion/">grandchesstour.org</a>',"Winner of the 2026 GCT Finals and overall champion; his first overall title"],
  ['<a href="https://en.chessbase.com/post/gct-finals-2026-6">chessbase.com</a>',"Comeback from 3–9 to beat Caruana 15–13; Saint Louis, 22–27 Aug"],
  ['<a href="https://theprint.in/india/amit-shah-confers-lokmanya-tilak-national-award-on-nsa-ajit-doval/3003016/">theprint.in</a>',"Amit Shah conferred the Lokmanya Tilak National Award on Ajit Doval"],
  ['<a href="https://www.freepressjournal.in/pune/pune-ajit-doval-conferred-lokmanya-tilak-award-amit-shah-hails-nsas-role-in-shaping-indias-security-doctrine">freepressjournal.in</a>',"Ceremony in Pune, 1 Aug 2026; Tilak's death anniversary; memento, citation, ₹1 lakh"],
  ['<a href="https://newsonair.gov.in/nsa-ajit-doval-selected-for-lokmanya-tilak-national-award/">newsonair.gov.in</a>',"Doval selected by the Tilak Smarak Trust"],
  ['<a href="https://mb.com.ph/2026/08/31/3-transformative-leaders-named-2026-ramon-magsaysay-awardees">mb.com.ph</a>',"2026 Ramon Magsaysay awardees named on 31 Aug 2026"],
  ['<a href="https://www.gmanetwork.com/news/lifestyle/content/1000519/the-2026-ramon-magsaysay-award-reveals-recipients-from-singapore-bangladesh-myanmar/story/">gmanetwork.com</a>',"Awardees from Singapore, Bangladesh and Myanmar: Koh, Khan, Bo Kyi"]
];

LESSONS.push(
{id:"CA8", title:"August 2026", hi:"अगस्त 2026", blocks:[
  {k:"hot", h:"Most likely to be asked: India's <b>4th place with 39 medals</b> at the Glasgow Commonwealth Games, <b>Ahmedabad</b> as the 2030 host, the <b>RBI holding the repo rate at 5.25%</b>, <b>Q1 GDP growth of 7.8%</b>, the <b>Agni-4</b> test, <b>INS Nipun</b>, Modi's <b>13th Red Fort address</b>, <b>Praggnanandhaa</b>'s Grand Chess Tour title and Uzbekistan's highest honour for PM Modi."},
  {k:"story", h:"<p>August 2026 opened with the end of the <b>Glasgow Commonwealth Games</b> on 2 August: India finished <b>fourth with 39 medals</b>, seven of its 13 golds from boxing, and received the Commonwealth flag for <b>Ahmedabad 2030</b>. A day earlier, on 1 August, NSA <b>Ajit Doval</b> received the <b>Lokmanya Tilak National Award</b> in Pune. On 5 August the RBI kept the <b>repo rate at 5.25%</b>; on 6 August India test-fired <b>Agni-4</b> from Chandipur and the Cabinet approved the ₹23,731 crore <b>GOBARdhan</b> scheme for compressed biogas. Parliament raised the number of <b>Supreme Court judges to 37 besides the CJI</b>, and the <b>Monsoon Session</b> ended on 13 August.</p><p>On <b>15 August</b>, India's <b>80th Independence Day</b>, PM Modi spoke from the Red Fort for the <b>13th year in a row</b>. In Saint Louis, <b>R. Praggnanandhaa</b> fought back to win the <b>Grand Chess Tour</b>. The month ended busily: PM Modi received Uzbekistan's highest honour in <b>Tashkent</b> on 30 August, and on 31 August the Navy commissioned <b>INS Nipun</b>, the government reported <b>7.8% GDP growth</b> for April–June, and the <b>Ramon Magsaysay Award</b> winners were named.</p>", key:"CWG: India 4th, 39 medals; Ahmedabad 2030; repo 5.25%; Agni-4; GDP 7.8%; INS Nipun; 13th Red Fort speech; Pragg; Uzbek honour."},
  {k:"table", title:"National — government decisions, schemes, laws", head:["Item","Fact","Note"], rows: CA8_NAT},
  {k:"table", title:"International — summits, agreements, elections abroad", head:["Item","Fact","Note"], rows: CA8_INT},
  {k:"table", title:"Economy and banking", head:["Item","Fact","Note"], rows: CA8_ECO},
  {k:"table", title:"Science, space and defence", head:["Item","Fact","Note"], rows: CA8_SCI},
  {k:"table", title:"Sports", head:["Item","Fact","Note"], rows: CA8_SPO},
  {k:"table", title:"Awards and honours", head:["Item","Fact","Note"], rows: CA8_AWD},
  {k:"table", title:"Places and persons in news", head:["Item","Fact","Note"], rows: CA8_PLC},
  {k:"trick", h:"<b>39 = 13 + 17 + 9</b>: India's Glasgow medals. Remember <b>“13 golds, 7 from the ring”</b> — boxing. And <b>13</b> again on <b>15 August</b>: Modi's 13th Red Fort speech, on the <b>80th</b> Independence Day."},
  {k:"trick", h:"Four Navy ships of 2026, four jobs — <b>“Frigate, Sub-hunter, Diver, Supplier”</b>: <b>Mahendragiri</b> (frigate, Jul), <b>Malvan</b> (anti-submarine craft, Jul), <b>Nipun</b> (diving support, 31 Aug) and <b>Surya</b> (fleet support ship, launched Oct)."},
  {k:"trap", h:"<b>Rate direction</b>: on <b>5 August</b> the RBI <b>held</b> the repo rate at <b>5.25%</b>; it <b>raised</b> it to 5.50% only on 7 October. And <b>7.8%</b> is actual Q1 GDP growth — <b>7%</b> was the RBI's projection and <b>8.2%</b> is GVA growth."},
  {k:"trap", h:"<b>Two Central Asian capitals in two days</b>: <b>Tashkent</b> (Uzbekistan) gave Modi the <b>Oliy Darajali Do'stlik Order</b> on 30 Aug; <b>Bishkek</b> (Kyrgyzstan) hosted the <b>SCO Summit</b> from 31 Aug. And <b>Agni-4</b> flew from <b>Chandipur</b>, not from Dr APJ Abdul Kalam Island."},
  {k:"trap", h:"<b>Supreme Court numbers</b>: the law now says <b>37 judges besides the Chief Justice</b> — so the full strength is <b>38</b>. The old figure was 33 + CJI = 34."},
  {k:"table", title:"Sources (checked 24 Oct 2026)", head:["Source","What it confirmed"], rows: CA8_SRC}
], sum:[
  "Glasgow Commonwealth Games ended 2 Aug 2026: India 4th, 39 medals (13 gold, 17 silver, 9 bronze); 7 golds in boxing.",
  "Australia topped the table (70 gold, 171 medals); Jaismine Lamboria India's closing flag-bearer; Ahmedabad hosts 2030.",
  "Lokmanya Tilak National Award 2026: Ajit Doval, Pune, 1 Aug (presented by Amit Shah).",
  "RBI, 5 Aug 2026: repo rate unchanged at 5.25%, neutral stance (SDF 5.00%, MSF 5.50%).",
  "6 Aug 2026: Agni-4 test from ITR Chandipur; Cabinet approved GOBARdhan (₹23,731 crore, compressed biogas).",
  "Supreme Court strength raised to 37 + CJI (bill passed 3 and 5 Aug); Monsoon Session ended 13 Aug.",
  "15 Aug 2026: 80th Independence Day — Modi's 13th straight Red Fort address.",
  "Praggnanandhaa won the Grand Chess Tour Finals in Saint Louis (22–27 Aug), beating Fabiano Caruana.",
  "PM Modi in Tashkent, 29–30 Aug: Comprehensive Strategic Partnership; Oliy Darajali Do'stlik Order (30 Aug).",
  "31 Aug 2026: INS Nipun commissioned (Mumbai); Q1 GDP growth 7.8%; Ramon Magsaysay 2026 winners named.",
  "GST for July 2026: ₹2.11 lakh crore, up 15.4% (released 1 Aug)."
]}
);

QB.push(
["CA8","Where did India finish on the medal table of the 2026 Commonwealth Games in Glasgow?",["4th","3rd","5th","2nd"],"India won 39 medals (13 gold) and finished fourth, behind Australia, England and Canada.",""],
["CA8","How many medals did India win in all at the Glasgow Commonwealth Games, which ended on 2 August 2026?",["39","61","66","85"],"India won 13 gold, 17 silver and 9 bronze; 61 was its Birmingham 2022 total.",""],
["CA8","Which sport gave India 7 of its 13 gold medals at the 2026 Commonwealth Games?",["Boxing","Weightlifting","Wrestling","Shooting"],"India's boxers won seven golds; weightlifting's gold came from Mirabai Chanu.",""],
["CA8","Which country topped the medal table at the 2026 Commonwealth Games?",["Australia","England","Canada","India"],"Australia won 70 gold and 171 medals in all.",""],
["CA8","Who carried India's flag at the closing ceremony of the Glasgow Commonwealth Games on 2 August 2026?",["Jaismine Lamboria","Mirabai Chanu","Lovlina Borgohain","Nikhat Zareen"],"Boxer Jaismine Lamboria, the women's 57 kg champion, led India; Mirabai Chanu carried the flag at the opening.",""],
["CA8","Which city will host the next Commonwealth Games, in 2030?",["Ahmedabad","New Delhi","Victoria","Kuala Lumpur"],"Neeraj Chopra and P. T. Usha received the Commonwealth flag for Ahmedabad at Glasgow.",""],
["CA8","Whom did R. Praggnanandhaa beat to win the 2026 Grand Chess Tour Finals?",["Fabiano Caruana","Wesley So","Vincent Keymer","Magnus Carlsen"],"He came back from 3–9 down to beat the defending champion Caruana 15–13.",""],
["CA8","The 2026 Grand Chess Tour Finals, won by Praggnanandhaa, were held in:",["Saint Louis","Stavanger","Zagreb","Chennai"],"They were played in Saint Louis (USA) from 22 to 27 Aug 2026; Stavanger hosts Norway Chess.",""],
["CA8","At its meeting ending on 5 August 2026, the RBI's Monetary Policy Committee kept the repo rate at:",["5.25%","5.50%","5.00%","6.50%"],"It was a unanimous hold; the rate went up to 5.50% only in October.",""],
["CA8","What stance did the RBI's MPC keep in its August 2026 policy?",["Neutral","Accommodative","Calibrated tightening","Withdrawal of accommodation"],"It kept the neutral stance; it switched to 'calibrated tightening' in October 2026.",""],
["CA8","India's GDP growth for April–June 2026, released on 31 August 2026, was:",["7.8%","7.0%","8.2%","6.4%"],"7.8% beat the RBI's projection of 7%; 8.2% was the growth of gross value added.",""],
["CA8","Which body released India's GDP estimate for April–June 2026 on 31 August 2026?",["The National Statistics Office (MoSPI)","The Reserve Bank of India","NITI Aayog","The Department of Economic Affairs"],"Quarterly GDP estimates come from the NSO under the Ministry of Statistics and Programme Implementation.",""],
["CA8","Gross GST collections for July 2026 (released on 1 August 2026) were about:",["₹2.11 lakh crore","₹1.94 lakh crore","₹1.83 lakh crore","₹2.37 lakh crore"],"They rose 15.4%; ₹1.83 lakh crore was the July 2025 figure.",""],
["CA8","The GOBARdhan scheme approved by the Cabinet on 6 August 2026 (₹23,731 crore) mainly promotes:",["Compressed biogas","Organic fertiliser exports","Cattle insurance","Solar pumps"],"It is a national unified scheme to raise compressed biogas (CBG) output about tenfold by 2035-36.",""],
["CA8","After the bill passed in August 2026, the Supreme Court's sanctioned strength, including the Chief Justice, is:",["38","34","37","35"],"The law now allows 37 judges besides the CJI — 38 in all, up from 34.",""],
["CA8","On 6 August 2026 India test-fired the Agni-4 ballistic missile from:",["The Integrated Test Range, Chandipur","Dr APJ Abdul Kalam Island","Sriharikota","Pokhran"],"It was fired from ITR Chandipur in Odisha under the Strategic Forces Command.",""],
["CA8","INS Nipun, commissioned on 31 August 2026, is a:",["Diving support vessel","Fleet support ship","Stealth frigate","Anti-submarine shallow water craft"],"It supports deep diving to 300 m and submarine rescue; Surya is the fleet support ship.",""],
["CA8","INS Nipun is the second ship of which class?",["Nistar class","Mahe class","Nilgiri class","Kamorta class"],"Its sister INS Nistar, the first diving support vessel of the class, is based at Visakhapatnam.",""],
["CA8","Which shipyard built INS Nipun?",["Hindustan Shipyard, Visakhapatnam","Cochin Shipyard","Mazagon Dock, Mumbai","Garden Reach, Kolkata"],"Hindustan Shipyard designed and built it; it was commissioned at the Naval Dockyard, Mumbai.",""],
["CA8","The Oliy Darajali Do'stlik Order, given to PM Modi on 30 August 2026, is the highest honour of:",["Uzbekistan","Kyrgyzstan","Kazakhstan","Tajikistan"],"President Shavkat Mirziyoyev presented it in Tashkent during the state visit.",""],
["CA8","During PM Modi's state visit to Uzbekistan (29–30 August 2026), the two countries raised their ties to a:",["Comprehensive Strategic Partnership","Strategic Partnership","Privileged Partnership","Global Strategic Partnership"],"They also set a trade target of US$ 5 billion by 2030.",""],
["CA8","Who received the Lokmanya Tilak National Award 2026 in Pune on 1 August 2026?",["Ajit Doval","Amit Shah","S. Jaishankar","Rajnath Singh"],"Home Minister Amit Shah presented the award to the National Security Adviser.",""],
["CA8","The Lokmanya Tilak National Award is presented every year on 1 August because it is Tilak's:",["Death anniversary","Birth anniversary","Day of arrest in 1908","Day he founded Kesari"],"Bal Gangadhar Tilak died on 1 Aug 1920; he was born on 23 Jul 1856.",""],
["CA8","Runa Khan, named a 2026 Ramon Magsaysay awardee on 31 August 2026, is from:",["Bangladesh","Myanmar","Singapore","Pakistan"],"The other two 2026 awardees are Tommy Koh of Singapore and Bo Kyi of Myanmar.",""],
["CA8","On 15 August 2026 PM Modi gave his Independence Day address from the Red Fort for the:",["13th time in a row","12th time in a row","11th time in a row","17th time in a row"],"Only Jawaharlal Nehru, with 17, has given more in a row.",""],
["CA8","Independence Day on 15 August 2026 was India's:",["80th","79th","81st","75th"],"Counting 15 Aug 1947 as the first, 2026 is the 80th Independence Day.",""],
["CA8","The Monsoon Session of Parliament in 2026 ran from:",["20 July to 13 August","21 July to 21 August","1 July to 31 July","3 August to 31 August"],"It began on 20 Jul and was adjourned sine die on 13 Aug 2026.",""]
);

LASTMOMENT.push(
{t:"August 2026", era:["ca"], rows:[["CWG Glasgow (ended 2 Aug)","India 4th — 39 medals (13 gold)"],["CWG 2030","Ahmedabad"],["Repo rate (5 Aug)","5.25%, unchanged"],["Q1 GDP (31 Aug)","7.8%"],["Agni-4","Chandipur, 6 Aug"],["INS Nipun","Diving support vessel, 31 Aug"],["GOBARdhan","₹23,731 crore (6 Aug)"],["Red Fort","Modi's 13th straight speech"],["Grand Chess Tour","Praggnanandhaa"],["Uzbek honour","Oliy Darajali Do'stlik, 30 Aug"]]}
);
TILES.push(["39","India's medals at the Glasgow Commonwealth Games","ca"],["7.8%","GDP growth, April–June 2026","ca"],["5.25%","Repo rate after the August 2026 policy","ca"],["38","Supreme Court strength including the CJI (Aug 2026)","ca"],["13th","Modi's straight Red Fort address, 15 Aug 2026","ca"]);
