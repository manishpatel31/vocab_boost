/* Part 3 · N8 stock exchanges and indices; N9 financial inclusion schemes; N10 banking terms, laws and currency (as of October 2026). */
const N8 = [
  ["Bombay Stock Exchange (BSE) founded — Asia's oldest","1875","Began as the Native Share and Stock Brokers' Association.","p"],
  ["Sensex first published","1986","Base year 1978–79 = 100.","p"],
  ["National Stock Exchange (NSE) set up","1992","Began trading in 1994.","p"],
  ["Nifty 50 launched","1996","Base value 1,000 (November 1995).",""],
  ["NSDL, India's first depository","1996","",""],
  ["CDSL depository","1999","",""],
  ["India INX — first international exchange, GIFT City","2017","",""]
];
const N8W = [
  ["Dow Jones","USA","","p"],
  ["Nasdaq","USA","",""],
  ["Nikkei 225","Japan","","p"],
  ["Hang Seng","Hong Kong","","p"],
  ["FTSE 100","United Kingdom","","p"],
  ["DAX","Germany","","p"],
  ["CAC 40","France","",""],
  ["KOSPI","South Korea","",""],
  ["Straits Times Index","Singapore","",""],
  ["SSE Composite","China","Shanghai.",""],
  ["TAIEX","Taiwan","",""],
  ["KSE-100","Pakistan","",""],
  ["S&P/ASX 200","Australia","",""],
  ["Bovespa (Ibovespa)","Brazil","",""],
  ["Jakarta Composite","Indonesia","",""],
  ["Tadawul All Share (TASI)","Saudi Arabia","",""],
  ["Sensex","India","BSE.","p"]
];
const N9 = [
  ["Kisan Credit Card","1998","",""],
  ["National Pension System (for new central government staff)","2004","",""],
  ["Pradhan Mantri Jan Dhan Yojana (PMJDY)","2014","Launched on 28 August 2014.","p"],
  ["Sukanya Samriddhi Yojana","2015","",""],
  ["Pradhan Mantri MUDRA Yojana","2015","Launched on 8 April 2015.","p"],
  ["Pradhan Mantri Suraksha Bima Yojana (PMSBY)","2015","Launched on 9 May 2015 with PMJJBY and APY.","p"],
  ["Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)","2015","",""],
  ["Atal Pension Yojana (APY)","2015","Replaced Swavalamban.",""],
  ["Stand-Up India","2016","Launched on 5 April 2016.","p"],
  ["PM-KISAN","2019","",""],
  ["PM SVANidhi","2020","",""],
  ["Unified Pension Scheme (in force)","2025","From 1 April 2025.",""]
];
const N9B = [
  ["Zero-balance bank account with a RuPay card, accident cover and overdraft","PMJDY","Motto: 'Mera Khata, Bhagya Vidhata'.","p"],
  ["₹2 lakh accident insurance for ₹20 a year, age 18–70","PMSBY","","p"],
  ["₹2 lakh life insurance for ₹436 a year, age 18–50","PMJJBY","","p"],
  ["Pension of ₹1,000–5,000 a month after 60; join between 18 and 40","Atal Pension Yojana","","p"],
  ["Collateral-free loans up to ₹20 lakh for small non-farm businesses","MUDRA","","p"],
  ["Bank loans of ₹10 lakh to ₹1 crore for SC/ST and women entrepreneurs","Stand-Up India","","p"],
  ["Savings account for a girl child below 10 years","Sukanya Samriddhi Yojana","",""],
  ["Small working-capital loans for street vendors","PM SVANidhi","",""],
  ["₹6,000 a year to farmer families in three instalments","PM-KISAN","",""],
  ["Short-term crop loans to farmers through a card","Kisan Credit Card","",""]
];
const N9M = [
  ["Shishu","Up to ₹50,000","",""],
  ["Kishore","₹50,000 to ₹5 lakh","",""],
  ["Tarun","₹5 lakh to ₹10 lakh","",""],
  ["Tarun Plus","₹10 lakh to ₹20 lakh","For those who repaid a Tarun loan; added in 2024.",""]
];
const N10 = [
  ["NPA","Non-Performing Asset","","p"],
  ["CASA","Current Account Savings Account","",""],
  ["SARFAESI","Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest","",""],
  ["IBC","Insolvency and Bankruptcy Code","",""],
  ["DICGC","Deposit Insurance and Credit Guarantee Corporation","","p"],
  ["NEFT","National Electronic Funds Transfer","","p"],
  ["RTGS","Real Time Gross Settlement","","p"],
  ["IMPS","Immediate Payment Service","",""],
  ["UPI","Unified Payments Interface","","p"],
  ["NPCI","National Payments Corporation of India","",""],
  ["MCLR","Marginal Cost of Funds based Lending Rate","",""],
  ["NDTL","Net Demand and Time Liabilities","",""],
  ["KYC","Know Your Customer","",""],
  ["IFSC","Indian Financial System Code","","p"],
  ["MICR","Magnetic Ink Character Recognition","","p"],
  ["CRAR","Capital to Risk-weighted Assets Ratio","",""],
  ["NBFC","Non-Banking Financial Company","",""],
  ["CBDC","Central Bank Digital Currency","",""],
  ["MUDRA","Micro Units Development and Refinance Agency","","p"],
  ["NABARD","National Bank for Agriculture and Rural Development","","p"],
  ["SIDBI","Small Industries Development Bank of India","",""]
];
const N10L = [
  ["Negotiable Instruments Act (cheques; Section 138 — cheque bounce)","1881","",""],
  ["Banking Regulation Act","1949","Passed as the Banking Companies Act.","p"],
  ["DICGC Act","1961","",""],
  ["Foreign Exchange Management Act (FEMA)","1999","Replaced FERA (1973).","p"],
  ["SARFAESI Act","2002","Lets banks seize secured assets without going to court.","p"],
  ["Payment and Settlement Systems Act","2007","",""],
  ["Coinage Act","2011","",""],
  ["Insolvency and Bankruptcy Code","2016","","p"],
  ["Fugitive Economic Offenders Act","2018","",""]
];
const N10N = [
  ["₹10 note","Sun Temple, Konark","",""],
  ["₹20 note","Ellora Caves","",""],
  ["₹50 note","Hampi with its stone chariot","",""],
  ["₹100 note","Rani ki Vav","","p"],
  ["₹200 note","Sanchi Stupa","","p"],
  ["₹500 note","Red Fort","","p"],
  ["₹2000 note","Mangalyaan","Withdrawn from circulation in 2023 but still legal tender.","p"]
];
const N10P = [
  ["India Government Mint — the oldest","Kolkata","Coins carry no mint mark.",""],
  ["India Government Mint — diamond (◆) mint mark","Mumbai","",""],
  ["India Government Mint — star (★) mint mark","Hyderabad","",""],
  ["India Government Mint — dot (●) mint mark, set up 1986","Noida","",""],
  ["Currency Note Press (SPMCIL)","Nashik","","p"],
  ["Bank Note Press (SPMCIL)","Dewas","","p"],
  ["Security Paper Mill","Narmadapuram (Hoshangabad)","",""],
  ["Note press of the RBI's BRBNMPL in Karnataka","Mysuru","",""],
  ["Note press of the RBI's BRBNMPL in West Bengal","Salboni","",""]
];

LESSONS.push(
{id:"N8", heat:2, title:"Stock exchanges and indices", hi:"शेयर बाज़ार और सूचकांक", blocks:[
  {k:"hot", h:"Asked most: <b>BSE 1875</b> (Asia's oldest), <b>Sensex = 30</b> companies, <b>Nifty = 50</b>, NSE 1992, and <b>which country</b> an index belongs to — Nikkei (Japan), Hang Seng (Hong Kong), FTSE (UK), DAX (Germany), Dow Jones (USA)."},
  {k:"story", h:"<p>Under a banyan tree near Mumbai's Town Hall, a few share brokers began trading in the 1850s. In <b>1875</b> they formed the <b>Native Share and Stock Brokers' Association</b> — today's <b>BSE</b> on Dalal Street, <b>Asia's oldest stock exchange</b>. Its index, the <b>Sensex</b> (Sensitive Index), tracks <b>30</b> big companies, with 1978–79 as the base year.</p><p>The <b>NSE</b> was set up in <b>1992</b> and began screen-based trading in 1994. Its index, the <b>Nifty 50</b>, tracks <b>50</b> companies. <b>SEBI</b> regulates both. Every big market has its own index: Dow Jones and Nasdaq in the USA, Nikkei in Japan, FTSE in London and DAX in Germany.</p>", key:"BSE 1875, Sensex 30 (base 1978–79 = 100); NSE 1992, Nifty 50 (base 1,000); regulator SEBI."},
  {k:"facts", title:"Market words", rows:[
    ["Sensex","Sensitive Index of BSE — 30 stocks"],
    ["Nifty 50","National + Fifty — NSE's index of 50 stocks"],
    ["Bull market","Prices rising"],
    ["Bear market","Prices falling"],
    ["IPO","Initial Public Offering — a company's first sale of shares to the public"],
    ["Dalal Street","Home of the BSE in Mumbai"],
    ["Depositories","NSDL (1996) and CDSL (1999) hold shares in electronic form"]
  ]},
  {k:"table", title:"Indian market milestones", head:["Event","Year","Note"], rows: N8.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"World stock indices", head:["Index","Country","Note"], rows: N8W.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Sensex Thirty, Nifty Fifty.”</b> World indices — <b>“Nikki from Japan, Hang in Hong Kong, DAX for Deutschland, CAC for Cafés of France.”</b>"},
  {k:"trap", h:"The <b>Sensex</b> belongs to the <b>BSE</b>, the <b>Nifty</b> to the <b>NSE</b> — don't swap them. <b>Hang Seng</b> is Hong Kong, not mainland China (that is the SSE Composite). The <b>FTSE 100</b> is London, not Frankfurt."}
], sum:["BSE (1875) is Asia's oldest stock exchange; its Sensex tracks 30 companies (base 1978–79 = 100).","NSE was set up in 1992; its Nifty 50 tracks 50 companies.","SEBI regulates the stock markets.","Dow Jones and Nasdaq — USA; Nikkei — Japan; Hang Seng — Hong Kong; FTSE — UK; DAX — Germany; CAC 40 — France.","NSDL (1996) and CDSL (1999) are India's two depositories."]},

{id:"N9", heat:3, title:"Financial inclusion schemes", hi:"वित्तीय समावेशन योजनाएँ", blocks:[
  {k:"hot", h:"Always one question: <b>PMJDY (28 August 2014)</b>, the 2015 trio <b>PMSBY, PMJJBY, APY</b> (premiums and age limits), <b>MUDRA</b> (Shishu, Kishore, Tarun) and <b>Stand-Up India</b> (SC/ST and women)."},
  {k:"story", h:"<p>In 2014 millions of Indians had no bank account. On <b>28 August 2014</b> the <b>Pradhan Mantri Jan Dhan Yojana</b> began, giving everyone a <b>zero-balance account</b>, a <b>RuPay</b> debit card, accident cover and a small overdraft. Its motto: <b>“Mera Khata, Bhagya Vidhata”</b>.</p><p>On <b>9 May 2015</b> came cheap safety nets for these accounts: <b>PMSBY</b> (₹2 lakh accident cover for ₹20 a year), <b>PMJJBY</b> (₹2 lakh life cover for ₹436 a year) and the <b>Atal Pension Yojana</b>. <b>MUDRA</b> (April 2015) lends to tiny businesses without collateral, in stages called <b>Shishu, Kishore, Tarun</b> and now <b>Tarun Plus</b>, and <b>Stand-Up India</b> (2016) helps SC/ST and women start enterprises.</p>", key:"PMJDY 28 Aug 2014; PMSBY ₹20 accident, PMJJBY ₹436 life, APY pension — all 2015; MUDRA 2015 (Shishu–Kishore–Tarun); Stand-Up India 2016."},
  {k:"table", title:"Schemes by year", head:["Scheme","Year","Note"], rows: N9.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"What each scheme gives", head:["Benefit","Scheme","Note"], rows: N9B.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"MUDRA loan categories", head:["Category","Loan size","Note"], rows: N9M.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"MUDRA grows like a person: <b>Shishu</b> (child) → <b>Kishore</b> (teen) → <b>Tarun</b> (youth) → <b>Tarun Plus</b>. Insurance ages: <b>“Suraksha to Seventy, Jeevan to Fifty, Atal to Forty”</b> (last entry age for APY is 40)."},
  {k:"trap", h:"<b>PMSBY</b> is <i>accident</i> cover (₹20); <b>PMJJBY</b> is <i>life</i> cover (₹436). PMJDY was <b>announced</b> on 15 August 2014 but <b>launched</b> on <b>28 August 2014</b>. Stand-Up India is for <b>SC/ST and women</b>; Start-up India is a different scheme."}
], sum:["PMJDY: launched 28 August 2014 — zero-balance account, RuPay card, accident cover, overdraft.","PMSBY: ₹2 lakh accident cover for ₹20 a year (18–70); PMJJBY: ₹2 lakh life cover for ₹436 a year (18–50).","APY (2015): pension of ₹1,000–5,000 a month after 60, join at 18–40.","MUDRA (8 April 2015): Shishu up to ₹50,000, Kishore to ₹5 lakh, Tarun to ₹10 lakh, Tarun Plus to ₹20 lakh.","Stand-Up India (2016): loans of ₹10 lakh–₹1 crore for SC/ST and women entrepreneurs."]},

{id:"N10", heat:3, title:"Banking terms, laws and currency", hi:"बैंकिंग शब्दावली, क़ानून और मुद्रा", blocks:[
  {k:"hot", h:"Expect: <b>full forms</b> (NPA, IFSC, MICR, RTGS, NEFT), <b>NPA = overdue 90 days</b>, <b>DICGC cover ₹5 lakh</b>, <b>Basel III</b>, <b>SARFAESI 2002</b>, <b>IBC 2016</b>, the <b>₹ symbol</b> (2010, D. Udaya Kumar) and the <b>motifs on new notes</b>."},
  {k:"story", h:"<p>When a borrower stops paying interest or instalments for <b>90 days</b>, the loan becomes a <b>Non-Performing Asset (NPA)</b>. Banks can then use the <b>SARFAESI Act (2002)</b> to seize the security without a court, or take a company to the <b>Insolvency and Bankruptcy Code (2016)</b>. To make banks strong enough to bear such losses, the world follows the <b>Basel III</b> capital rules made at Basel, Switzerland. If a bank fails, the <b>DICGC</b> repays each depositor up to <b>₹5 lakh</b> (raised from ₹1 lakh in 2020).</p><p>Our money has its own story. The <b>₹ symbol</b>, designed by <b>D. Udaya Kumar</b>, was adopted on <b>15 July 2010</b> — a blend of Devanagari ‘र’ and Roman ‘R’. On <b>8 November 2016</b> the old ₹500 and ₹1000 notes were demonetised, and new notes with Indian heritage motifs followed. Notes are printed at Nashik, Dewas, Mysuru and Salboni; coins are minted at Mumbai, Kolkata, Hyderabad and Noida.</p>", key:"NPA = 90 days overdue; SARFAESI 2002, IBC 2016; DICGC ₹5 lakh; ₹ symbol 2010 by D. Udaya Kumar; demonetisation 8 Nov 2016."},
  {k:"facts", title:"Key terms", rows:[
    ["NPA","A loan whose interest or instalment is overdue for more than 90 days"],
    ["CASA","Current + savings deposits — cheap money for a bank; a high CASA ratio is good"],
    ["Basel III","Global capital rules for banks, made by the Basel Committee at the BIS"],
    ["DICGC cover","₹5 lakh per depositor per bank (since 4 February 2020)"],
    ["Repo-linked loans (EBLR)","Retail loan rates linked to an outside benchmark such as the repo rate"],
    ["Demonetisation","8 November 2016 — old ₹500 and ₹1000 notes"],
    ["₹ symbol","Adopted 15 July 2010; designed by D. Udaya Kumar"],
    ["Coins and ₹1 note","Issued by the Government of India under the Coinage Act, 2011"]
  ]},
  {k:"table", title:"Full forms", head:["Short form","Full form","Note"], rows: N10.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Banking and finance laws", head:["Law","Year","Note"], rows: N10L.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Mahatma Gandhi New Series — back of the note", head:["Note","Motif","Note"], rows: N10N.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Where money is made", head:["Facility","City","Note"], rows: N10P.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"New-note motifs in rising order — <b>“Sun, Ellora, Hampi, Vav, Sanchi, Fort, Mars”</b>: ₹10 Konark Sun Temple, ₹20 Ellora, ₹50 Hampi, ₹100 Rani ki Vav, ₹200 Sanchi, ₹500 Red Fort, ₹2000 Mangalyaan. <b>NPA = 90</b> — “Nine-Zero, No Payment”."},
  {k:"trap", h:"<b>₹100</b> has <b>Rani ki Vav</b> (Gujarat), not the Red Fort — that is <b>₹500</b>. <b>SARFAESI</b> is <b>2002</b>; <b>IBC</b> is <b>2016</b>. The DICGC limit is <b>₹5 lakh</b> per depositor <i>per bank</i>, covering principal and interest together."}
], sum:["A loan becomes an NPA when payments are overdue for more than 90 days.","SARFAESI Act 2002; Insolvency and Bankruptcy Code 2016; FEMA 1999; Banking Regulation Act 1949.","DICGC insures deposits up to ₹5 lakh per depositor per bank.","The ₹ symbol was adopted on 15 July 2010; designer D. Udaya Kumar.","New-note motifs: ₹10 Konark, ₹20 Ellora, ₹50 Hampi, ₹100 Rani ki Vav, ₹200 Sanchi, ₹500 Red Fort, ₹2000 Mangalyaan."]}
);

pairQs("N8", N8, { q: t => `${t} — in which year?`, rq: a => `Which market milestone came in ${a}?` });
pairQs("N8", N8W, { q: t => `The ${t} stock index belongs to:` });
pairQs("N9", N9, { q: t => `${t} was launched in:`, rq: a => `Which scheme was launched in ${a}?` });
pairQs("N9", N9B, { q: t => `Which scheme offers this: ${t}?` });
pairQs("N9", N9M, { q: t => `Under MUDRA, a '${t}' loan is:`, rq: a => `Which MUDRA category covers loans of ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("N10", N10, { q: t => `What is the full form of ${t}?` });
pairQs("N10", N10L, { q: t => `The ${t} came in:`, rq: a => `Which banking law dates from ${a}?` });
pairQs("N10", N10N, { q: t => `The back of the new ${t} shows:` });
pairQs("N10", N10P, { q: t => `${t} is in:` });

QB.push(
["N8","When was the Mumbai Stock Exchange set up?",["1875","1857","1900","1947"],"Asia's oldest stock exchange.","p","","","SSC CPO · 6 Jun 2016 (Morning)"],
["N8","How many companies make up the Sensex?",["30","50","100","20"],"","p"],
["N8","How many companies make up the Nifty?",["50","30","100","40"],"","p"],
["N8","The Sensex is the index of the:",["Bombay Stock Exchange","National Stock Exchange","Calcutta Stock Exchange","Multi Commodity Exchange"],"","p"],
["N8","A 'bear market' means prices are:",["Falling","Rising","Stable","Controlled by the government"],"Bull = rising.","p"],
["N8","The base year of the Sensex is:",["1978–79","1986–87","1991–92","1995–96"],"Base value 100.",""],
["N8","Which body regulates the stock markets in India?",["SEBI","RBI","IRDAI","NSE"],"","p"],
["N9","The motto of PMJDY is:",["Mera Khata, Bhagya Vidhata","Sabka Saath, Sabka Vikas","Jan Jan ka Bank","Har Ghar Khata"],"","p"],
["N9","PMJDY was launched on:",["28 August 2014","15 August 2014","2 October 2014","26 January 2015"],"It was announced on 15 August 2014.","p"],
["N9","What does MUDRA stand for?",["Micro Units Development and Refinance Agency","Money Unit Development and Rural Agency","Micro Unit Deposit and Refinance Authority","Monetary Units Development and Reform Agency"],"","p"],
["N9","The annual premium of PMSBY (accident cover) is:",["₹20","₹436","₹12","₹330"],"Raised from ₹12 in 2022.","p"],
["N9","Atal Pension Yojana replaced which scheme?",["Swavalamban","Varishtha Pension Bima","Aam Admi Bima","NPS-Lite Plus"],"",""],
["N9","Stand-Up India supports entrepreneurs who are:",["SC/ST and women","Ex-servicemen","Farmers","Students"],"Each bank branch should fund at least one of each.","p"],
["N10","The Indian rupee symbol (₹) was designed by:",["D. Udaya Kumar","Satyajit Ray","Raghuram Rajan","Nandan Nilekani"],"Adopted on 15 July 2010.","p","","","SSC CGL · 11 Sep 2016 (Shift 2)"],
["N10","In which year was the ₹ symbol adopted?",["2010","2008","2011","2014"],"On 15 July 2010.","p"],
["N10","A loan becomes an NPA when payment is overdue for more than:",["90 days","30 days","60 days","180 days"],"","p"],
["N10","Deposit insurance by the DICGC covers up to:",["₹5 lakh per depositor per bank","₹1 lakh per depositor","₹10 lakh per account","₹2 lakh per bank"],"Raised from ₹1 lakh in February 2020.","p"],
["N10","Basel III norms are mainly about a bank's:",["Capital and liquidity","Interest rates","Branch expansion","Priority-sector lending"],"","p"],
["N10","Demonetisation of the old ₹500 and ₹1000 notes was announced on:",["8 November 2016","1 July 2017","8 November 2015","1 January 2017"],"","p"],
["N10","Coins in India are issued by the:",["Government of India","Reserve Bank of India","SBI","SEBI"],"Under the Coinage Act, 2011; the RBI only distributes them.","p"]
);

LASTMOMENT.push(
{t:"Markets", era:["bf"], rows:[["BSE","1875, Asia's oldest"],["Sensex","30 stocks"],["NSE","1992"],["Nifty","50 stocks"],["Nikkei","Japan"],["Hang Seng","Hong Kong"],["FTSE","UK"],["DAX","Germany"]]},
{t:"Schemes", era:["bf"], rows:[["PMJDY","28 Aug 2014"],["PMSBY","₹20, accident, 18–70"],["PMJJBY","₹436, life, 18–50"],["APY","18–40, pension after 60"],["MUDRA","Up to ₹20 lakh"],["Stand-Up India","SC/ST and women, 2016"]]},
{t:"Terms and currency", era:["bf"], rows:[["NPA","90 days"],["DICGC","₹5 lakh"],["SARFAESI","2002"],["IBC","2016"],["₹ symbol","2010, D. Udaya Kumar"],["₹100 note","Rani ki Vav"],["₹500 note","Red Fort"],["Demonetisation","8 Nov 2016"]]}
);
TILES.push(["1875","BSE founded","bf"],["30","Sensex stocks","bf"],["2014","Jan Dhan Yojana","bf"],["₹5 lakh","DICGC cover","bf"],["90","Days to NPA","bf"],["2010","₹ symbol","bf"]);
