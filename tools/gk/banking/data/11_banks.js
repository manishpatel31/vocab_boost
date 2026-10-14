/* Part 2 · N4 types of banks; N5 bank headquarters and taglines; N6 regulators and development finance institutions; N7 payment systems (as of October 2026). */
const N4 = [
  ["Listed in the Second Schedule of the RBI Act, 1934","Scheduled bank","","p"],
  ["Set up from 2 October 1975 to give credit in villages; owned by the Centre, a sponsor bank and the state","Regional Rural Bank","Shares 50 : 35 : 15.","p"],
  ["Registered under cooperative societies laws; owned by its members","Cooperative bank","Also supervised by the RBI.","p"],
  ["Takes deposits up to ₹2 lakh per customer but cannot give loans","Payment bank","Idea from the Nachiket Mor Committee.","p"],
  ["Must give 75% of its loans to the priority sector; serves small borrowers","Small finance bank","","p"],
  ["Small private bank allowed to work in three neighbouring districts (scheme of 1996)","Local area bank","",""],
  ["More than 50% owned by the Government of India","Public sector bank","",""],
  ["Incorporated abroad, with branches in India","Foreign bank","",""],
  ["Gives long-term money for industry and infrastructure rather than taking public deposits","Development finance institution","",""]
];
const N4B = [
  ["Airtel Payments Bank","Payment bank","India's first payment bank to start work (2017).",""],
  ["India Post Payments Bank","Payment bank","Launched in 2018, run through post offices.","p"],
  ["Fino Payments Bank","Payment bank","",""],
  ["AU Small Finance Bank","Small finance bank","Jaipur.",""],
  ["Ujjivan Small Finance Bank","Small finance bank","",""],
  ["Equitas Small Finance Bank","Small finance bank","",""],
  ["Prathama Bank","Regional Rural Bank","The first RRB (Moradabad, UP, 1975).","p"],
  ["Saraswat Bank","Urban cooperative bank","",""]
];
const N5 = [
  ["State Bank of India","Mumbai","","p"],
  ["Punjab National Bank","New Delhi","","p"],
  ["Bank of Baroda","Vadodara","Corporate office in Mumbai.","p"],
  ["Canara Bank","Bengaluru","","p"],
  ["Union Bank of India","Mumbai","",""],
  ["Bank of India","Mumbai","",""],
  ["Central Bank of India","Mumbai","",""],
  ["Indian Bank","Chennai","",""],
  ["Indian Overseas Bank","Chennai","",""],
  ["UCO Bank","Kolkata","",""],
  ["Bank of Maharashtra","Pune","",""],
  ["Punjab & Sind Bank","New Delhi","",""],
  ["HDFC Bank","Mumbai","",""],
  ["Kotak Mahindra Bank","Mumbai","",""],
  ["IDBI Bank","Mumbai","",""],
  ["Federal Bank","Aluva (Kerala)","",""],
  ["South Indian Bank","Thrissur","",""],
  ["Karnataka Bank","Mangaluru","",""],
  ["Karur Vysya Bank","Karur","",""],
  ["Jammu & Kashmir Bank","Srinagar","",""],
  ["Bandhan Bank","Kolkata","",""],
  ["AU Small Finance Bank","Jaipur","",""],
  ["NABARD","Mumbai","","p"],
  ["SIDBI","Lucknow","","p"],
  ["EXIM Bank","Mumbai","",""],
  ["National Housing Bank","New Delhi","",""],
  ["SEBI","Mumbai","","p"],
  ["IRDAI","Hyderabad","","p"],
  ["PFRDA","New Delhi","",""],
  ["NPCI","Mumbai","",""]
];
const N5T = [
  ["The Banker to Every Indian","State Bank of India","","p"],
  ["The Name You Can Bank Upon","Punjab National Bank","","p"],
  ["India's International Bank","Bank of Baroda","","p"],
  ["Together We Can","Canara Bank","","p"],
  ["Good people to bank with","Union Bank of India","",""],
  ["Relationship beyond banking","Bank of India","",""],
  ["Taking Banking Technology to Common Man","Indian Bank","",""],
  ["Central to You Since 1911","Central Bank of India","",""],
  ["Good people to grow with","Indian Overseas Bank","",""],
  ["Honours Your Trust","UCO Bank","",""],
  ["One Family One Bank","Bank of Maharashtra","",""],
  ["Where service is a way of life","Punjab & Sind Bank","",""],
  ["We understand your world","HDFC Bank","","p"],
  ["Hum Hai Na","ICICI Bank","",""],
  ["Let's make money simple","Kotak Mahindra Bank","",""],
  ["Banking for all","IDBI Bank","",""],
  ["Your Perfect Banking Partner","Federal Bank","",""],
  ["Taking Rural India Forward","NABARD","",""],
  ["Yogakshemam Vahamyaham","LIC","","p"]
];
const N5W = [
  ["World Bank","Washington, D.C.","Shares the city with the IMF.","p"],
  ["Asian Development Bank (ADB)","Manila","Philippines.","p"],
  ["Asian Infrastructure Investment Bank (AIIB)","Beijing","","p"],
  ["New Development Bank (BRICS)","Shanghai","","p"],
  ["Bank for International Settlements (BIS)","Basel","Switzerland — Basel norms are named after it.","p"],
  ["African Development Bank","Abidjan","Côte d'Ivoire.",""],
  ["European Bank for Reconstruction and Development","London","",""],
  ["Islamic Development Bank","Jeddah","",""]
];
const N6 = [
  ["IFCI (India's first development finance institution)","1948","",""],
  ["ICICI","1955","",""],
  ["LIC","1956","Life insurance was nationalised.","p"],
  ["IDBI","1964","",""],
  ["DICGC","1978","Deposit insurance and credit guarantee merged.",""],
  ["NABARD","1982","12 July 1982.","p"],
  ["EXIM Bank","1982","1 January 1982.",""],
  ["National Housing Bank","1988","",""],
  ["SIDBI","1990","2 April 1990.","p"],
  ["SEBI gets statutory powers (SEBI Act)","1992","First set up in 1988.","p"],
  ["IRDA Act passed","1999","IRDAI regulates insurance.","p"],
  ["PFRDA set up","2003","Statutory under the PFRDA Act, 2013.",""],
  ["IBBI (Insolvency and Bankruptcy Board)","2016","",""],
  ["NaBFID (infrastructure lender)","2021","",""]
];
const N6R = [
  ["SEBI","Securities and stock markets","",""],
  ["IRDAI","Insurance","",""],
  ["PFRDA","Pensions (the National Pension System)","",""],
  ["NABARD","Agriculture and rural development","Apex body for rural credit.","p"],
  ["SIDBI","Micro, small and medium enterprises (MSMEs)","","p"],
  ["EXIM Bank","Exports and imports","",""],
  ["National Housing Bank","Housing finance","",""],
  ["IBBI","Insolvency professionals and processes","",""],
  ["NaBFID","Long-term infrastructure finance","",""],
  ["DICGC","Insurance of bank deposits","Up to ₹5 lakh per depositor per bank.","p"]
];
const N6C = [
  ["Hilton Young Commission (1926)","Setting up the RBI","","p"],
  ["Gorwala Committee (All India Rural Credit Survey)","Creating the State Bank of India","",""],
  ["B. Sivaraman Committee (CRAFICARD)","Setting up NABARD","","p"],
  ["Narasimham Committee (1991, 1998)","Banking sector reforms","","p"],
  ["Nachiket Mor Committee (2014)","Payment banks and financial inclusion","",""],
  ["Urjit Patel Committee (2014)","Inflation targeting and the MPC","",""],
  ["P. J. Nayak Committee (2014)","Governance of bank boards","",""]
];
const N7 = [
  ["RTGS","2004","",""],
  ["NEFT","2005","",""],
  ["NPCI set up","2008","",""],
  ["IMPS","2010","",""],
  ["RuPay card network","2012","",""],
  ["UPI","2016","Launched in April 2016; live for the public from August 2016.","p"],
  ["BHIM app","2016","Launched on 30 December 2016.",""],
  ["Digital rupee (e₹) pilots","2022","Wholesale from 1 November, retail from 1 December 2022.","p"],
  ["UPI 123PAY for feature phones","2022","",""]
];
const N7F = [
  ["Large-value transfers settled one by one in real time; minimum ₹2 lakh","RTGS","","p"],
  ["Transfers settled in half-hourly batches; no minimum amount","NEFT","",""],
  ["Instant 24×7 interbank transfer by mobile, run by NPCI since 2010","IMPS","",""],
  ["Pay anyone instantly using a virtual payment address (VPA) or QR code","UPI","","p"],
  ["India's own card network — 'Rupee' + 'Payment'","RuPay","","p"],
  ["Withdraw cash at a micro-ATM using your Aadhaar number and fingerprint","AePS","Aadhaar Enabled Payment System.",""],
  ["Currency issued by the RBI in digital form","e₹ (digital rupee)","",""],
  ["Pay highway tolls automatically with an RFID tag","FASTag","",""],
  ["UPI payments from a feature phone without the internet","UPI 123PAY","",""],
  ["Small UPI payments from an on-device wallet without a PIN","UPI Lite","",""]
];

LESSONS.push(
{id:"N4", heat:2, title:"Types of banks", hi:"बैंकों के प्रकार", blocks:[
  {k:"hot", h:"Asked often: <b>RRBs</b> (2 October 1975, first Prathama Bank, share 50 : 35 : 15), <b>payment banks</b> (₹2 lakh limit, no loans, Nachiket Mor), <b>small finance banks</b> (75% priority sector) and what makes a bank <b>scheduled</b>."},
  {k:"story", h:"<p>Not every bank is the same. A <b>scheduled bank</b> is one listed in the <b>Second Schedule of the RBI Act, 1934</b>; it can borrow from the RBI and must keep CRR with it. <b>Regional Rural Banks</b> began on <b>2 October 1975</b> — the first was <b>Prathama Bank</b> at Moradabad — to lend to small farmers and village workers. Each is owned 50% by the Centre, 35% by a sponsor bank and 15% by the state. <b>Cooperative banks</b> belong to their members.</p><p>In 2014 the RBI created two new kinds on the <b>Nachiket Mor Committee</b>'s ideas. <b>Payment banks</b> (like India Post Payments Bank) take small deposits — up to <b>₹2 lakh</b> a customer — and offer payments, but cannot lend. <b>Small finance banks</b> (like AU and Ujjivan) can lend, but must give <b>75%</b> of their loans to the priority sector.</p>", key:"Scheduled = in the 2nd Schedule of RBI Act; RRB 1975 (50:35:15); payment bank = ₹2 lakh, no loans; SFB = 75% priority sector."},
  {k:"facts", title:"Numbers to know (as of 2025–26)", rows:[
    ["RRBs","28 after the 'One State, One RRB' merger of 1 May 2025"],
    ["RRB law","Regional Rural Banks Act, 1976"],
    ["Payment bank deposit limit","₹2 lakh per customer"],
    ["Small finance bank priority-sector share","75% of loans"],
    ["Priority-sector target for commercial banks","40% of adjusted net bank credit"],
    ["Minimum capital","Small finance bank ₹200 crore; payment bank ₹100 crore"]
  ]},
  {k:"table", title:"Which kind of bank?", head:["Feature","Type","Note"], rows: N4.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Examples", head:["Bank","Type","Note"], rows: N4B.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>RRB = 50-35-15</b>, read as <b>“Centre, Sponsor, State”</b> — biggest share to the biggest owner. <b>Payment bank = “Pay, don't lend”.</b>"},
  {k:"trap", h:"A <b>payment bank</b> can issue debit cards but <b>not credit cards</b> and cannot lend. RRBs started in <b>1975</b> by ordinance — the <b>RRB Act</b> came in <b>1976</b>. Cooperative banks can be scheduled too."}
], sum:["A scheduled bank is listed in the Second Schedule of the RBI Act, 1934.","RRBs began on 2 October 1975 (first: Prathama Bank, Moradabad); owners Centre 50%, sponsor bank 35%, state 15%.","Payment banks take deposits up to ₹2 lakh a customer and cannot lend (Nachiket Mor Committee).","Small finance banks must give 75% of loans to the priority sector.","Commercial banks must give 40% of credit to the priority sector."]},

{id:"N5", heat:2, title:"Bank headquarters and taglines", hi:"बैंकों के मुख्यालय और टैगलाइन", blocks:[
  {k:"hot", h:"Two question types: <b>“Where is the HQ of X?”</b> (Bank of Baroda — Vadodara, Canara — Bengaluru, UCO — Kolkata, SIDBI — Lucknow, IRDAI — Hyderabad) and <b>“Whose tagline is this?”</b> (SBI — The Banker to Every Indian)."},
  {k:"story", h:"<p>Most big banks sit in <b>Mumbai</b>, India's money capital — SBI, Union Bank, Bank of India, Central Bank, HDFC, and also NABARD, SEBI, EXIM Bank and NPCI. The exceptions are what exams ask: <b>PNB</b> and <b>Punjab & Sind Bank</b> in New Delhi, <b>Bank of Baroda</b> in Vadodara, <b>Canara</b> in Bengaluru, <b>Indian Bank</b> and <b>IOB</b> in Chennai, <b>UCO</b> and <b>Bandhan</b> in Kolkata and <b>Bank of Maharashtra</b> in Pune.</p><p>Taglines tell a bank's personality: SBI is <b>“The Banker to Every Indian”</b>, PNB <b>“The Name You Can Bank Upon”</b>, Bank of Baroda <b>“India's International Bank”</b> and Canara <b>“Together We Can”</b>. Abroad, the World Bank and IMF are in <b>Washington, D.C.</b>, the ADB in <b>Manila</b>, the AIIB in <b>Beijing</b> and the BRICS bank in <b>Shanghai</b>.</p>", key:"Mumbai = SBI, NABARD, SEBI, NPCI; PNB New Delhi; BoB Vadodara; Canara Bengaluru; SIDBI Lucknow; IRDAI Hyderabad."},
  {k:"table", title:"Headquarters in India", head:["Bank / body","Headquarters","Note"], rows: N5.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Taglines", head:["Tagline","Bank","Note"], rows: N5T.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"World banks and their headquarters", head:["Bank","Headquarters","Note"], rows: N5W.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Lucky SIDBI in Lucknow, Hi IRDAI in Hyderabad.”</b> <b>“Canara Can”</b> — Together We Can. <b>“BoB goes Abroad”</b> — India's International Bank."},
  {k:"trap", h:"<b>Bank of Baroda</b>'s HQ is <b>Vadodara</b>, though it has a big office in Mumbai. <b>Indian Bank</b> (Chennai) and <b>Bank of India</b> (Mumbai) are different banks. The <b>AIIB</b> is in Beijing but the <b>BRICS New Development Bank</b> is in Shanghai."}
], sum:["SBI, Union Bank, Bank of India, Central Bank, HDFC, NABARD, SEBI and NPCI are in Mumbai.","PNB and Punjab & Sind Bank — New Delhi; Bank of Baroda — Vadodara; Canara — Bengaluru; UCO — Kolkata.","SIDBI — Lucknow; IRDAI — Hyderabad; PFRDA and NHB — New Delhi.","SBI: The Banker to Every Indian; PNB: The Name You Can Bank Upon; Canara: Together We Can.","World Bank and IMF — Washington, D.C.; ADB — Manila; AIIB — Beijing; NDB — Shanghai; BIS — Basel."]},

{id:"N6", heat:2, title:"Regulators and development finance institutions", hi:"नियामक और विकास वित्त संस्थान", blocks:[
  {k:"hot", h:"Know who regulates what — <b>SEBI</b> (markets), <b>IRDAI</b> (insurance), <b>PFRDA</b> (pensions), RBI (banks) — and the year of <b>NABARD (1982)</b>, <b>SIDBI (1990)</b>, <b>EXIM (1982)</b>, <b>NHB (1988)</b>, and which committee led to what."},
  {k:"story", h:"<p>India's money world has several referees. The <b>RBI</b> watches banks and NBFCs; <b>SEBI</b> (set up 1988, given legal powers in <b>1992</b>) watches the stock market; <b>IRDAI</b> (Hyderabad) watches insurance; <b>PFRDA</b> watches pensions such as the NPS.</p><p>Beside them stand the <b>development banks</b> that lend for a purpose: <b>NABARD</b> (12 July 1982, on the Sivaraman Committee's advice) for farming and villages, <b>EXIM Bank</b> (1982) for trade, <b>NHB</b> (1988) for housing, <b>SIDBI</b> (1990, Lucknow) for small industry and <b>NaBFID</b> (2021) for infrastructure. India's first such institution was <b>IFCI</b> in 1948.</p>", key:"SEBI markets (1992 statutory), IRDAI insurance, PFRDA pensions; NABARD 1982, EXIM 1982, NHB 1988, SIDBI 1990, NaBFID 2021; first DFI IFCI 1948."},
  {k:"table", title:"When they were set up", head:["Body","Year","Note"], rows: N6.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Who looks after what", head:["Body","Field","Note"], rows: N6R.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Committees and what they led to", head:["Committee","Led to","Note"], rows: N6C.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Years in order — <b>“Not Every Need Sinks”</b>: <b>N</b>ABARD 82, <b>E</b>XIM 82, <b>N</b>HB 88, <b>S</b>IDBI 90."},
  {k:"trap", h:"SEBI was <b>formed in 1988</b> but became a <b>statutory body in 1992</b> — read the question carefully. <b>SIDBI</b> is for small <i>industries</i>; <b>NABARD</b> is for <i>agriculture</i>. The <b>DICGC</b> is a subsidiary of the RBI."}
], sum:["RBI regulates banks; SEBI markets; IRDAI insurance; PFRDA pensions.","SEBI: set up 1988, statutory 1992; IRDA Act 1999; PFRDA 2003.","NABARD 1982 (Sivaraman Committee), EXIM 1982, NHB 1988, SIDBI 1990, NaBFID 2021.","IFCI (1948) was India's first development finance institution.","Narasimham Committee: banking reforms; Urjit Patel Committee: inflation targeting."]},

{id:"N7", heat:3, title:"Payments: NPCI, UPI and more", hi:"भुगतान प्रणाली: एनपीसीआई, यूपीआई और अन्य", blocks:[
  {k:"hot", h:"Hot in recent papers: <b>UPI (2016)</b> and <b>NPCI (2008)</b>, <b>RuPay</b>, <b>IMPS</b>, <b>NEFT vs RTGS</b> (RTGS minimum ₹2 lakh), <b>AePS</b>, <b>BHIM</b> and the <b>digital rupee (e₹, 2022)</b>."},
  {k:"story", h:"<p>The RBI runs two big pipes for money: <b>RTGS</b> (2004) for large sums, settled one by one in real time, and <b>NEFT</b> (2005), settled in half-hourly batches. Both now work round the clock. In <b>2008</b> the RBI and the Indian Banks' Association set up the not-for-profit <b>National Payments Corporation of India (NPCI)</b> in Mumbai.</p><p>NPCI built <b>IMPS</b> (2010) for instant mobile transfers, the <b>RuPay</b> card (2012), <b>AePS</b> for Aadhaar-based cash at micro-ATMs, and in <b>2016</b> the <b>Unified Payments Interface (UPI)</b> — now the world's busiest real-time payment system — with the <b>BHIM</b> app. In <b>2022</b> the RBI began pilots of the <b>digital rupee (e₹)</b>, India's central bank digital currency.</p>", key:"RTGS 2004, NEFT 2005 (RBI); NPCI 2008 → IMPS 2010, RuPay 2012, UPI & BHIM 2016; e₹ pilots 2022."},
  {k:"facts", title:"Payment facts", rows:[
    ["NPCI","2008, Mumbai; promoted by the RBI and Indian Banks' Association; a not-for-profit (Section 8) company"],
    ["UPI abroad","Works in several countries, including Bhutan, Nepal, Singapore, UAE, Mauritius, Sri Lanka and France"],
    ["NEFT 24×7","Since December 2019"],
    ["RTGS 24×7","Since December 2020"],
    ["BHIM","Bharat Interface for Money"],
    ["Digital rupee","Issued by the RBI; announced in the 2022 Budget"]
  ]},
  {k:"table", title:"Launch years", head:["System","Year","Note"], rows: N7.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Which system is it?", head:["Feature","System","Note"], rows: N7F.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“R before N”</b> — RTGS 2004, NEFT 2005. NPCI's babies in order — <b>“I Run Up”</b>: <b>I</b>MPS 2010, <b>R</b>uPay 2012, <b>U</b>PI 2016."},
  {k:"trap", h:"<b>NEFT and RTGS</b> are run by the <b>RBI</b>; <b>UPI, IMPS, RuPay, AePS</b> by <b>NPCI</b>. RTGS has a <b>minimum</b> of ₹2 lakh; NEFT has none. <b>e₹</b> is issued by the RBI, not by NPCI."}
], sum:["RTGS (2004) and NEFT (2005) are run by the RBI; both work 24×7.","NPCI was set up in 2008 by the RBI and the IBA; HQ Mumbai.","NPCI runs IMPS (2010), RuPay (2012), UPI (2016), BHIM, AePS and FASTag's network.","RTGS minimum is ₹2 lakh; NEFT has no minimum.","The digital rupee (e₹) pilots began in 2022; it is issued by the RBI."]}
);

pairQs("N4", N4, { q: t => `Which kind of bank: ${t}?`, rq: a => `What is true of a ${a}?` });
pairQs("N4", N4B, { q: t => `${t} is a:`, extra: ["Local area bank", "Foreign bank"] });
pairQs("N5", N5, { q: t => `Where is the headquarters of ${t}?`, rq: a => `Which of these is headquartered in ${a}?` });
pairQs("N5", N5T, { q: t => `'${t}' is the tagline of:` });
pairQs("N5", N5W, { q: t => `Where is the headquarters of the ${t}?`, rq: a => `Which international bank is headquartered in ${a}?` });
pairQs("N6", N6, { q: t => `${t} — in which year?`, rq: a => `Which financial body came in ${a}?` });
pairQs("N6", N6R, { q: t => `${t} mainly deals with:` });
pairQs("N6", N6C, { q: t => `The ${t} led to:`, rq: a => `Which committee led to ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("N7", N7, { q: t => `${t} — launched in which year?`, rq: a => `Which payment system or body came in ${a}?` });
pairQs("N7", N7F, { q: t => `Which system is this: ${t}?`, rq: a => `What does ${a} do?` });

QB.push(
["N4","Regional Rural Banks were set up on:",["2 October 1975","15 August 1975","1 April 1976","19 July 1969"],"Gandhi Jayanti, 1975.","p"],
["N4","Which was the first Regional Rural Bank?",["Prathama Bank","Gramin Bank of Aryavart","Kerala Gramin Bank","Baroda UP Bank"],"Moradabad, Uttar Pradesh.","p"],
["N4","In an RRB, the Central Government's share is:",["50%","35%","15%","26%"],"Centre 50, sponsor bank 35, state 15.","p"],
["N4","The maximum balance a customer can keep in a payment bank is:",["₹2 lakh","₹1 lakh","₹5 lakh","₹10 lakh"],"Raised from ₹1 lakh in 2021.","p"],
["N4","Payment banks were recommended by the:",["Nachiket Mor Committee","Narasimham Committee","Urjit Patel Committee","Raghuram Rajan Committee"],"Report of 2014.","p"],
["N4","A payment bank is NOT allowed to:",["Give loans","Accept deposits","Issue debit cards","Offer mobile payments"],"It can take deposits and make payments only.","p"],
["N4","Commercial banks must give what share of their credit to the priority sector?",["40%","75%","18%","25%"],"Of adjusted net bank credit (ANBC).","p"],
["N4","A scheduled bank is one listed in the:",["Second Schedule of the RBI Act, 1934","First Schedule of the Banking Regulation Act","Seventh Schedule of the Constitution","Schedule of the Companies Act"],"","p"],
["N5","Which is India's largest commercial bank?",["State Bank of India","HDFC Bank","Punjab National Bank","ICICI Bank"],"","p"],
["N5","The Bank for International Settlements, which sets the Basel norms, is in:",["Switzerland","Belgium","Germany","France"],"In Basel.",""],
["N5","Which two bodies are both headquartered in Washington, D.C.?",["World Bank and IMF","World Bank and WTO","IMF and ADB","AIIB and NDB"],"The Bretton Woods twins.","p"],
["N6","In which year was NABARD established?",["1982","1969","1975","1990"],"On 12 July 1982.","p","","","SSC CGL · 6 Mar 2020 (Shift 2)"],
["N6","When was NABARD established?",["12 July 1982","1 April 1935","2 October 1975","2 April 1990"],"On the B. Sivaraman Committee's advice.","p","","","SSC CPO · 14 Mar 2019 (Shift 1)"],
["N6","SEBI was first set up (as a non-statutory body) in:",["1988","1992","1985","1995"],"It got statutory powers in 1992.","p"],
["N6","Which body is the apex bank for agriculture and rural development?",["NABARD","SIDBI","RRB","EXIM Bank"],"","p"],
["N6","The insurance regulator IRDAI is headquartered in:",["Hyderabad","Mumbai","New Delhi","Chennai"],"",""],
["N6","India's first development finance institution was:",["IFCI","ICICI","IDBI","SIDBI"],"Industrial Finance Corporation of India, 1948.","p"],
["N7","UPI was developed by:",["NPCI","RBI","SBI","NITI Aayog"],"Launched in 2016.","p"],
["N7","The minimum amount for an RTGS transfer is:",["₹2 lakh","₹1 lakh","₹50,000","No minimum"],"NEFT has no minimum.","p"],
["N7","BHIM stands for:",["Bharat Interface for Money","Bharat Integrated Money","Bank Holding Interface Module","Bharat Instant Mobile"],"Launched on 30 December 2016.","p"],
["N7","The digital rupee (e₹) is issued by:",["Reserve Bank of India","NPCI","Ministry of Finance","SBI"],"It is a central bank digital currency.","p"],
["N7","NPCI was set up by the RBI together with the:",["Indian Banks' Association","SEBI","NABARD","Ministry of Electronics and IT"],"In 2008, as a not-for-profit company.",""],
["N7","Which of these is run by the RBI, not NPCI?",["NEFT","UPI","IMPS","RuPay"],"NEFT and RTGS belong to the RBI.","p"],
["N7","AePS lets a person withdraw cash using:",["Aadhaar number and fingerprint","PAN card and OTP","Debit card and PIN","Mobile number and UPI PIN"],"At a bank correspondent's micro-ATM.",""]
);

LASTMOMENT.push(
{t:"Kinds of banks", era:["bf"], rows:[["Scheduled","2nd Schedule, RBI Act"],["RRB","2 Oct 1975, 50:35:15"],["First RRB","Prathama Bank"],["Payment bank","₹2 lakh, no loans"],["SFB","75% priority sector"],["Priority sector","40% (commercial banks)"]]},
{t:"Headquarters", era:["bf"], rows:[["PNB","New Delhi"],["Bank of Baroda","Vadodara"],["Canara","Bengaluru"],["UCO","Kolkata"],["Bank of Maharashtra","Pune"],["SIDBI","Lucknow"],["IRDAI","Hyderabad"],["ADB","Manila"]]},
{t:"Taglines", era:["bf"], rows:[["SBI","The Banker to Every Indian"],["PNB","The Name You Can Bank Upon"],["BoB","India's International Bank"],["Canara","Together We Can"],["LIC","Yogakshemam Vahamyaham"],["NABARD","Taking Rural India Forward"]]},
{t:"Payments", era:["bf"], rows:[["RTGS","2004 (min ₹2 lakh)"],["NEFT","2005"],["NPCI","2008"],["IMPS","2010"],["RuPay","2012"],["UPI, BHIM","2016"],["e₹ pilots","2022"]]}
);
TILES.push(["1975","RRBs begin","bf"],["1982","NABARD","bf"],["1990","SIDBI","bf"],["2008","NPCI","bf"],["2016","UPI","bf"],["₹2 lakh","RTGS minimum","bf"]);
