/* Part 1 · N1 the Reserve Bank of India; N2 monetary policy tools and the MPC; N3 history of Indian banking (as of October 2026). */
const N1 = [
  ["Hilton Young Commission (Royal Commission on Indian Currency and Finance) report","1926","Recommended a central bank for India.","p"],
  ["Reserve Bank of India Act passed","1934","The RBI still works under this Act.","p"],
  ["RBI starts work (1 April)","1935","Began as a private shareholders' bank with ₹5 crore capital.","p"],
  ["RBI head office moves from Calcutta to Bombay","1937","",""],
  ["C. D. Deshmukh becomes the first Indian governor","1943","",""],
  ["RBI nationalised (1 January)","1949","Under the RBI (Transfer to Public Ownership) Act, 1948.","p"],
  ["Deposit Insurance Corporation starts","1962","Became the DICGC in 1978.",""],
  ["RBI's accounting year changed to April–March","2020","Earlier it ran July–June; 2020–21 was the switch-over year.",""]
];
const N1P = [
  ["First governor of the RBI","Sir Osborne Smith","1935–37.","p"],
  ["Second governor of the RBI","Sir James Taylor","1937–43.",""],
  ["First Indian governor of the RBI","C. D. Deshmukh","1943–49; later India's Finance Minister.","p"],
  ["Only RBI governor who later became Prime Minister","Manmohan Singh","Governor 1982–85.","p"],
  ["First woman deputy governor of the RBI","K. J. Udeshi","Appointed in 2003.",""],
  ["Author of 'The Problem of the Rupee', whose ideas are credited with shaping the RBI","B. R. Ambedkar","",""],
  ["Chairman of the 1926 commission that recommended the RBI","Edward Hilton Young","",""]
];
const N1F = [
  ["Only body that issues currency notes (except the ₹1 note)","Issuer of currency","The ₹1 note and all coins are issued by the Government of India.","p"],
  ["Keeps the accounts of the Centre and the states and manages their borrowing","Banker to the government","","p"],
  ["Holds part of banks' cash and lends to them","Banker's bank","","p"],
  ["Lends to a bank in crisis when no one else will","Lender of last resort","","p"],
  ["Holds India's foreign exchange and gold reserves","Custodian of forex reserves","",""],
  ["Licenses and supervises banks under the Banking Regulation Act, 1949","Regulator of banks","",""],
  ["Manages foreign exchange under FEMA, 1999","Manager of foreign exchange","",""],
  ["Controls money supply and interest rates to keep prices stable","Monetary authority","",""]
];
const N2 = [
  ["Rate at which the RBI lends short-term money to banks against government securities","Repo rate","Raised to fight inflation; cut to boost growth.","p"],
  ["Rate at which the RBI absorbs money from banks against government securities","Reverse repo rate","No longer the floor of the corridor since the SDF came in 2022.","p"],
  ["Rate at which banks park extra money with the RBI without giving collateral — the floor of the corridor","Standing Deposit Facility (SDF)","Introduced in April 2022.",""],
  ["Rate at which banks borrow overnight in an emergency by dipping into their SLR securities — the ceiling","Marginal Standing Facility (MSF)","Introduced in 2011.","p"],
  ["Rate for longer-term lending or rediscounting bills without a repo; kept equal to the MSF rate","Bank rate","",""],
  ["Share of deposits (NDTL) a bank must keep as cash with the RBI, earning no interest","Cash Reserve Ratio (CRR)","","p"],
  ["Share of deposits (NDTL) a bank must keep itself in cash, gold or government securities","Statutory Liquidity Ratio (SLR)","","p"],
  ["Buying and selling government securities in the market to change the money supply","Open Market Operations (OMO)","RBI buys → money flows in; RBI sells → money flows out.","p"],
  ["Persuading banks through advice and appeals rather than rules","Moral suasion","A qualitative tool.",""],
  ["Changing the part of a secured loan the borrower must fund himself","Margin requirement","A qualitative (selective) tool.",""]
];
const N2Y = [
  ["Liquidity Adjustment Facility (LAF)","2000","",""],
  ["Base rate system for bank loans","2010","Replaced the BPLR.",""],
  ["Marginal Standing Facility (MSF)","2011","",""],
  ["Urjit Patel Committee report on monetary policy","2014","Recommended inflation targeting and an MPC.",""],
  ["Monetary Policy Committee (MPC)","2016","Through the Finance Act, 2016, which amended the RBI Act.","p"],
  ["External benchmark lending rate (EBLR) for retail loans","2019","",""],
  ["Standing Deposit Facility (SDF)","2022","",""]
];
const N3 = [
  ["Bank of Hindustan — the first bank in India (Calcutta)","1770","Set up by Alexander and Co.; later closed.","p"],
  ["General Bank of India","1786","",""],
  ["Bank of Calcutta (renamed Bank of Bengal in 1809)","1806","SBI traces its roots to it.","p"],
  ["Bank of Bombay","1840","A presidency bank.",""],
  ["Bank of Madras","1843","A presidency bank.",""],
  ["Allahabad Bank — oldest joint-stock bank","1865","Merged into Indian Bank in 2020.",""],
  ["Oudh Commercial Bank — first bank managed by Indians (Faizabad)","1881","",""],
  ["Punjab National Bank founded in Lahore","1894","First bank started with Indian capital; began business in 1895.","p"],
  ["Imperial Bank of India (three presidency banks merged)","1921","",""],
  ["Imperial Bank becomes the State Bank of India (1 July)","1955","On the All India Rural Credit Survey (Gorwala) Committee's advice.","p"],
  ["First bank nationalisation — 14 banks (19 July)","1969","PM Indira Gandhi; banks with deposits over ₹50 crore.","p"],
  ["Second bank nationalisation — 6 banks (15 April)","1980","Banks with deposits over ₹200 crore.","p"],
  ["SBI's associate banks and Bharatiya Mahila Bank merge into SBI","2017","",""],
  ["Vijaya Bank and Dena Bank merge into Bank of Baroda","2019","",""],
  ["Ten public sector banks merged into four (1 April)","2020","Public sector banks fell to 12.","p"]
];
const N3M = [
  ["Vijaya Bank","Bank of Baroda","1 April 2019.",""],
  ["Dena Bank","Bank of Baroda","1 April 2019.",""],
  ["Oriental Bank of Commerce","Punjab National Bank","1 April 2020.","p"],
  ["United Bank of India","Punjab National Bank","1 April 2020.","p"],
  ["Syndicate Bank","Canara Bank","1 April 2020.","p"],
  ["Andhra Bank","Union Bank of India","1 April 2020.","p"],
  ["Corporation Bank","Union Bank of India","1 April 2020.","p"],
  ["Allahabad Bank","Indian Bank","1 April 2020.","p"],
  ["Bharatiya Mahila Bank","State Bank of India","1 April 2017.",""],
  ["State Bank of Bikaner and Jaipur","State Bank of India","1 April 2017.",""],
  ["New Bank of India","Punjab National Bank","1993.",""]
];

LESSONS.push(
{id:"N1", heat:3, title:"The Reserve Bank of India", hi:"भारतीय रिज़र्व बैंक", blocks:[
  {k:"hot", h:"Asked again and again: RBI set up on <b>1 April 1935</b> under the <b>RBI Act, 1934</b>, on the <b>Hilton Young Commission</b>'s advice; <b>nationalised on 1 January 1949</b>; HQ <b>Mumbai</b> (first Calcutta); first governor <b>Osborne Smith</b>, first Indian governor <b>C. D. Deshmukh</b>; and its <b>functions</b>."},
  {k:"story", h:"<p>In 1926 the <b>Hilton Young Commission</b> told the British government that India needed its own central bank. The <b>RBI Act</b> was passed in <b>1934</b>, and the Reserve Bank opened on <b>1 April 1935</b> in <b>Calcutta</b> — as a private bank owned by shareholders. Its head office moved to <b>Bombay</b> in 1937. After Independence it was <b>nationalised on 1 January 1949</b>, so it now belongs fully to the Government of India.</p><p>The RBI prints and issues our currency notes, keeps the government's accounts, acts as the <b>banker's bank</b> and the <b>lender of last resort</b>, guards the forex reserves and regulates banks. Its emblem shows a <b>tiger and a palm tree</b>. The first governor was <b>Sir Osborne Smith</b>; the first Indian governor was <b>C. D. Deshmukh</b> (1943).</p>", key:"RBI: Hilton Young 1926 → Act 1934 → opened 1 April 1935 → nationalised 1 Jan 1949; HQ Mumbai; first Indian governor C. D. Deshmukh."},
  {k:"facts", title:"RBI at a glance", rows:[
    ["Set up","1 April 1935, under the RBI Act, 1934"],
    ["Nationalised","1 January 1949"],
    ["Head office","Mumbai (Calcutta until 1937)"],
    ["Emblem","Tiger and palm tree"],
    ["Top body","Central Board of Directors — Governor, up to 4 deputy governors and directors named by the Centre"],
    ["Appointed by","Central Government (Governor and deputy governors)"],
    ["Accounting year","April–March (July–June until 2020)"],
    ["Notes signed by","RBI Governor — except the ₹1 note, signed by the Finance Secretary"]
  ]},
  {k:"table", title:"RBI timeline", head:["Event","Year","Note"], rows: N1.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"People in RBI history", head:["Who","Name","Note"], rows: N1P.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"What the RBI does", head:["Work","Function","Note"], rows: N1F.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“34 Act, 35 Open, 49 Owned”</b> — Act 1934, opened 1935, owned by the nation 1949. First governors: <b>“Smith, Taylor, then Deshmukh”</b> — two Britons, then the first Indian."},
  {k:"trap", h:"The RBI was set up in <b>1935</b>, not 1934 (that is the Act) and not 1949 (that is nationalisation). The <b>₹1 note</b> is issued by the <b>Government of India</b>, not the RBI. The RBI's first home was <b>Calcutta</b>, not Bombay."}
], sum:["The RBI opened on 1 April 1935 under the RBI Act, 1934, on the Hilton Young Commission's advice.","It was nationalised on 1 January 1949; its head office is in Mumbai (Calcutta until 1937).","First governor: Sir Osborne Smith; first Indian governor: C. D. Deshmukh; Manmohan Singh was governor 1982–85.","Functions: issuer of notes, banker to government, banker's bank, lender of last resort, forex custodian, bank regulator.","Its emblem is a tiger and a palm tree; the ₹1 note is issued by the Government of India."]},

{id:"N2", heat:3, title:"Monetary policy tools and the MPC", hi:"मौद्रिक नीति के उपकरण और एमपीसी", blocks:[
  {k:"hot", h:"Definitions are the favourite: <b>repo vs reverse repo</b>, <b>CRR vs SLR</b>, <b>MSF</b>, <b>bank rate</b>, <b>OMO</b>, quantitative vs qualitative tools, and the <b>MPC</b> — 6 members, set up in 2016, chaired by the Governor, inflation target <b>4% ± 2%</b>."},
  {k:"story", h:"<p>Think of the RBI as the tap that controls money in the economy. When prices rise too fast, it <b>raises the repo rate</b> — the rate at which it lends to banks — so loans become costly and spending slows. It can also raise the <b>CRR</b> (cash banks must keep with the RBI) or <b>sell bonds</b> through <b>open market operations</b>, sucking money out. To push growth, it does the opposite.</p><p>Banks park spare cash with the RBI at the <b>SDF</b> rate (the floor) and borrow in an emergency at the <b>MSF</b> rate (the ceiling); the repo rate sits in between. Since <b>2016</b> the repo rate is decided by a six-member <b>Monetary Policy Committee</b> — three from the RBI, including the Governor who chairs it, and three experts named by the Centre — with the aim of keeping CPI inflation at <b>4%, within 2–6%</b>.</p>", key:"Repo = RBI lends; SDF = floor, MSF = ceiling; CRR = cash with RBI, SLR = kept by the bank itself; MPC = 6 members, 2016, target 4% ± 2%."},
  {k:"facts", title:"Policy rates (as of 7 October 2026 — check before your exam)", rows:[
    ["Repo rate","5.50% — raised from 5.25% on 7 October 2026"],
    ["Standing Deposit Facility (SDF)","5.25%"],
    ["Marginal Standing Facility (MSF) and Bank rate","5.75%"],
    ["CRR","3% of NDTL (cut in stages to 3% by late 2025)"],
    ["SLR","18% of NDTL"],
    ["Inflation target","4% CPI, with a band of 2–6%"]
  ]},
  {k:"facts", title:"The Monetary Policy Committee", rows:[
    ["Set up","2016, under Section 45ZB of the RBI Act (added by the Finance Act, 2016)"],
    ["Members","6 — the Governor (chair), a Deputy Governor, one RBI officer, and 3 outside experts named by the Centre"],
    ["Term of outside members","4 years"],
    ["Tie","The Governor has a casting (second) vote"],
    ["Quorum","4 members"],
    ["Meetings","At least 4 a year (usually 6)"],
    ["Recommended by","Urjit Patel Committee (2014)"]
  ]},
  {k:"table", title:"The tools, defined", head:["What it is","Tool","Note"], rows: N2.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"When each came in", head:["Change","Year","Note"], rows: N2Y.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>RE-po = RBI lends (RBI gives); REVERSE = Reserve takes.</b> <b>CRR = Cash with RBI, SLR = Self-kept Liquid assets.</b> The corridor, bottom to top: <b>“Some Rupees Move”</b> — SDF < Repo < MSF."},
  {k:"trap", h:"<b>CRR</b> money sits with the RBI and earns nothing; <b>SLR</b> assets stay with the bank and can earn interest. <b>Moral suasion</b> and <b>margin requirement</b> are <i>qualitative</i> tools; repo, CRR, SLR and OMO are <i>quantitative</i>. The MPC sets <b>only the repo rate</b>, not CRR or SLR."}
], sum:["Repo rate: RBI lends to banks; reverse repo: RBI absorbs money from banks.","SDF (2022) is the floor and MSF (2011) the ceiling of the corridor; the bank rate equals the MSF rate.","CRR is cash kept with the RBI; SLR is cash, gold or government bonds kept by the bank itself.","OMO: the RBI buys bonds to add money and sells bonds to take money out.","The MPC (2016) has 6 members, is chaired by the Governor and targets 4% CPI inflation (2–6%)."]},

{id:"N3", heat:2, title:"History of Indian banking", hi:"भारतीय बैंकिंग का इतिहास", blocks:[
  {k:"hot", h:"Frequent: the <b>first bank</b> (Bank of Hindustan, 1770), <b>PNB</b> as the first bank started with Indian capital (Lahore, 1894), <b>Imperial Bank → SBI (1955)</b>, nationalisation of <b>14 banks in 1969</b> and <b>6 in 1980</b>, and the <b>2019–20 mergers</b>."},
  {k:"story", h:"<p>Banking in British India began with the <b>Bank of Hindustan</b> in Calcutta (1770). The three <b>presidency banks</b> — Bengal (1806, as the Bank of Calcutta), Bombay (1840) and Madras (1843) — were merged in <b>1921</b> into the <b>Imperial Bank of India</b>. Indians soon started their own banks: <b>Punjab National Bank</b> was founded in <b>Lahore</b> in 1894 with Lala Lajpat Rai among its founders. In <b>1955</b> the Imperial Bank became the <b>State Bank of India</b>.</p><p>On <b>19 July 1969</b> PM <b>Indira Gandhi</b> nationalised <b>14</b> big banks so that credit would reach farmers and small traders; <b>6</b> more followed on <b>15 April 1980</b>. Fifty years later the government did the reverse — it merged banks: Vijaya and Dena into Bank of Baroda (2019), and ten banks into four on <b>1 April 2020</b>, leaving <b>12</b> public sector banks.</p>", key:"Bank of Hindustan 1770; Imperial Bank 1921 → SBI 1955; PNB 1894 Lahore; 14 banks 1969 + 6 in 1980; 12 PSBs after 2020."},
  {k:"facts", title:"The nationalised banks", rows:[
    ["1969 (14)","Central Bank of India, Bank of India, Punjab National Bank, Bank of Baroda, United Commercial (UCO) Bank, Canara Bank, Dena Bank, United Bank of India, Syndicate Bank, Allahabad Bank, Indian Bank, Bank of Maharashtra, Indian Overseas Bank, Union Bank of India"],
    ["1980 (6)","Andhra Bank, Corporation Bank, New Bank of India, Oriental Bank of Commerce, Punjab & Sind Bank, Vijaya Bank"],
    ["Public sector banks now","12 (since 1 April 2020)"],
    ["Largest bank","State Bank of India"]
  ]},
  {k:"table", title:"Milestones", head:["Event","Year","Note"], rows: N3.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Mergers", head:["Bank","Merged into","When"], rows: N3M.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“69 = 14, 80 = 6”</b> — and 14 + 6 = 20 nationalised banks. The 2020 mergers — <b>“OU to PNB, S to Canara, AC to Union, A to Indian”</b>: Oriental + United → PNB; Syndicate → Canara; Andhra + Corporation → Union; Allahabad → Indian Bank."},
  {k:"trap", h:"<b>SBI</b> was created in <b>1955</b> by law, not by the 1969 nationalisation. <b>Allahabad Bank</b> went to <b>Indian Bank</b>, not to Union Bank. Some books call <b>Central Bank of India</b> (1911) the first bank wholly owned and managed by Indians — SSC usually answers <b>PNB</b> for the first bank started with Indian capital."}
], sum:["Bank of Hindustan (1770, Calcutta) was India's first bank.","The three presidency banks merged into the Imperial Bank of India in 1921, which became SBI on 1 July 1955.","Punjab National Bank was founded in Lahore in 1894 with Indian capital.","14 banks were nationalised on 19 July 1969 and 6 more on 15 April 1980.","After the 2019 and 2020 mergers India has 12 public sector banks."]}
);

pairQs("N1", N1, { q: t => `${t} — in which year?`, rq: a => `Which RBI milestone came in ${a}?` });
pairQs("N1", N1P, { q: t => `${t} was:`, rq: a => `${a} is remembered in RBI history as the:` });
pairQs("N1", N1F, { q: t => `Which RBI role is this: ${t}?`, rq: a => `As '${a}', the RBI:` });
pairQs("N2", N2, { q: t => `Which tool is this: ${t}?`, rq: a => `What is the ${a}?` });
pairQs("N2", N2Y, { q: t => `${t} came in:`, rq: a => `Which monetary-policy change came in ${a}?` });
pairQs("N3", N3, { q: t => `${t} — year?`, rq: a => `Which banking milestone belongs to ${a}?` });
pairQs("N3", N3M, { q: t => `${t} was merged into:`, rq: a => `Which bank was merged into ${a}?` });

QB.push(
["N1","The Reserve Bank of India was established on:",["1 April 1935","1 June 1935","1 January 1945","1 May 1932"],"Under the RBI Act, 1934.","p","","","SSC GD · 25 Jan 2023 (Shift 3)"],
["N1","The Reserve Bank of India was nationalised on:",["1 January 1949","1 April 1935","15 August 1947","19 July 1969"],"Under the RBI (Transfer to Public Ownership) Act, 1948.","p","","","SSC Stenographer · 12 Oct 2023 (Shift 1)"],
["N1","In which year was the Reserve Bank of India nationalised?",["1949","1935","1955","1969"],"With effect from 1 January 1949.","p","","","SSC MTS · 2 Nov 2021 (Shift 3)"],
["N1","The RBI was set up on the recommendation of the:",["Hilton Young Commission","Narasimham Committee","Gorwala Committee","Sivaraman Committee"],"The Royal Commission on Indian Currency and Finance, 1926.","p"],
["N1","Where is the head office of the RBI?",["Mumbai","New Delhi","Kolkata","Chennai"],"It moved from Calcutta to Bombay in 1937.","p"],
["N1","The RBI's emblem shows:",["A tiger and a palm tree","A lion and a lotus","An elephant and a banyan tree","The Ashoka Chakra and wheat"],"RBI's emblem shows a tiger and a palm tree; the tiger replaced the lion first planned.","p"],
["N1","Who signs the ₹1 currency note?",["Finance Secretary","RBI Governor","Finance Minister","President of India"],"The ₹1 note is issued by the Government of India.","p"],
["N1","When it began in 1935 the RBI was:",["A private shareholders' bank","A government department","A cooperative bank","A branch of the Imperial Bank"],"It became fully government-owned in 1949.",""],
["N2","How many members does the Monetary Policy Committee have?",["6","5","7","9"],"3 from the RBI and 3 named by the Centre.","p"],
["N2","Who chairs the Monetary Policy Committee?",["RBI Governor","Finance Minister","Chief Economic Adviser","Finance Secretary"],"He also has a casting vote in a tie.","p"],
["N2","The inflation target given to the RBI is:",["4% CPI inflation, within 2–6%","2% WPI inflation","6% CPI inflation, within 4–8%","5% WPI inflation, within 3–7%"],"Set by the Government in consultation with the RBI.","p"],
["N2","The outside members of the MPC are appointed for:",["4 years","3 years","5 years","2 years"],"The three external MPC members are appointed by the government for four years and cannot be reappointed.",""],
["N2","To control inflation the RBI is most likely to:",["Raise the repo rate","Cut the CRR","Buy government securities","Cut the repo rate"],"Costlier loans slow spending.","p"],
["N2","When the RBI buys government securities through OMO, money in the economy:",["Increases","Decreases","Stays the same","Is frozen"],"The RBI pays banks for the bonds.",""],
["N2","Which of these is a qualitative tool of the RBI?",["Moral suasion","CRR","SLR","Repo rate"],"Qualitative tools guide where credit goes.","p"],
["N2","The floor of the RBI's interest-rate corridor is now the:",["Standing Deposit Facility rate","Reverse repo rate","Bank rate","MSF rate"],"Since April 2022.",""],
["N2","The Monetary Policy Committee decides the:",["Repo rate","CRR","SLR","Bank's lending rates"],"CRR and SLR are set by the RBI itself.",""],
["N3","Which was the first bank set up in India?",["Bank of Hindustan","Punjab National Bank","Bank of Calcutta","Allahabad Bank"],"Calcutta, 1770.","p"],
["N3","How many banks were nationalised in 1969?",["14","6","20","10"],"On 19 July 1969.","p"],
["N3","How many banks were nationalised in 1980?",["6","14","8","4"],"On 15 April 1980.","p"],
["N3","Who was Prime Minister when 14 banks were nationalised in 1969?",["Indira Gandhi","Jawaharlal Nehru","Morarji Desai","Lal Bahadur Shastri"],"Indira Gandhi's government nationalised 14 major banks on 19 July 1969.","p"],
["N3","In 1955 the Imperial Bank of India was renamed as:",["State Bank of India","Reserve Bank of India","Bank of India","Punjab National Bank"],"Under the State Bank of India Act, 1955.","p","","","SSC CPO · 14 Mar 2019 (Shift 1)"],
["N3","Punjab National Bank was founded in which city?",["Lahore","Amritsar","New Delhi","Shimla"],"In 1894; Lala Lajpat Rai was among its founders.","p"],
["N3","Which bank was nationalised in 1980 (not 1969)?",["Andhra Bank","Canara Bank","Syndicate Bank","Bank of India"],"The 1980 six: Andhra, Corporation, New Bank of India, OBC, Punjab & Sind, Vijaya.",""],
["N3","The Imperial Bank of India (1921) was formed by merging the:",["Banks of Bengal, Bombay and Madras","Banks of Bengal, Hindustan and Oudh","Allahabad, Punjab and Oudh banks","Banks of Bombay, Madras and Hindustan"],"The three presidency banks.","p"],
["N3","How many public sector banks has India had since the 2020 mergers?",["12","10","14","19"],"Down from 27 in 2017.","p"]
);

LASTMOMENT.push(
{t:"RBI", era:["bf"], rows:[["Commission","Hilton Young (1926)"],["Act","1934"],["Opened","1 April 1935"],["Nationalised","1 January 1949"],["HQ","Mumbai (Calcutta till 1937)"],["First governor","Osborne Smith"],["First Indian governor","C. D. Deshmukh"],["Emblem","Tiger and palm tree"]]},
{t:"Policy tools", era:["bf"], rows:[["Repo","RBI lends to banks"],["Reverse repo","RBI absorbs money"],["SDF","Floor, no collateral (2022)"],["MSF","Ceiling, emergency (2011)"],["CRR","Cash kept with RBI"],["SLR","Liquid assets kept by bank"],["MPC","6 members, 2016"],["Target","4% ± 2% CPI"]]},
{t:"Banking history", era:["bf"], rows:[["First bank","Bank of Hindustan, 1770"],["Imperial Bank","1921"],["PNB","1894, Lahore"],["SBI","1955"],["Nationalisation","1969 (14), 1980 (6)"],["Mergers","2019, 2020"],["PSBs now","12"]]}
);
TILES.push(["1935","RBI set up","bf"],["1949","RBI nationalised","bf"],["6","MPC members","bf"],["1955","SBI born","bf"],["14","Banks nationalised, 1969","bf"],["12","Public sector banks","bf"]);
