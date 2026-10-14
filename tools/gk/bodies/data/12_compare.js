/* Part 3 · C9 constitutional, statutory or neither (NITI Aayog, CBI, NDC); C10 comparison tables — tenure, removal, composition. */
const C9K = [
  ["Election Commission","Constitutional body","Article 324.","p"],
  ["Union Public Service Commission","Constitutional body","Article 315.","p"],
  ["Finance Commission","Constitutional body","Article 280.","p"],
  ["Comptroller and Auditor General","Constitutional body","Article 148.",""],
  ["GST Council","Constitutional body","Article 279A.","p"],
  ["National Commission for Scheduled Castes","Constitutional body","Article 338.",""],
  ["National Commission for Backward Classes (today)","Constitutional body","Article 338B since 2018.","p"],
  ["Inter-State Council","Constitutional body","Provided for in Article 263; set up by Presidential order in 1990.",""],
  ["National Human Rights Commission","Statutory body","Protection of Human Rights Act, 1993.","p"],
  ["Central Vigilance Commission","Statutory body","CVC Act, 2003.","p"],
  ["Lokpal","Statutory body","Lokpal and Lokayuktas Act, 2013.",""],
  ["Central Information Commission","Statutory body","RTI Act, 2005.","p"],
  ["National Commission for Women","Statutory body","NCW Act, 1990.",""],
  ["National Commission for Minorities","Statutory body","NCM Act, 1992.",""],
  ["National Green Tribunal","Statutory body","NGT Act, 2010.",""],
  ["National Disaster Management Authority","Statutory body","Disaster Management Act, 2005.",""],
  ["National Investigation Agency","Statutory body","NIA Act, 2008.",""],
  ["Zonal Councils","Statutory body","States Reorganisation Act, 1956.","p"],
  ["NITI Aayog","Executive body (neither constitutional nor statutory)","Cabinet resolution, 1 January 2015.","p"],
  ["Central Bureau of Investigation","Executive body (neither constitutional nor statutory)","Home Ministry resolution, 1963; powers from the DSPE Act, 1946.","p"],
  ["National Development Council","Executive body (neither constitutional nor statutory)","Executive resolution, 1952.","p"],
  ["Planning Commission (1950–2014)","Executive body (neither constitutional nor statutory)","Cabinet resolution, 1950.","p"]
];
const C9Y = [
  ["Delhi Special Police Establishment Act passed","1946","The CBI's powers still come from it.","p"],
  ["Planning Commission set up (15 March)","1950","Nehru its first chairman.","p"],
  ["National Development Council set up","1952","To approve the Five-Year Plans.","p"],
  ["Zonal Councils created","1956","Under the States Reorganisation Act.",""],
  ["CBI set up (1 April) by a Home Ministry resolution","1963","On the Santhanam Committee's advice.","p"],
  ["NITI Aayog replaces the Planning Commission (1 January)","2015","By a Cabinet resolution.","p"]
];
const C9C = [
  ["NITI Aayog","Prime Minister","The PM is the chairperson; a Vice-Chairperson and CEO run it.","p"],
  ["National Development Council","Prime Minister","","p"],
  ["Inter-State Council","Prime Minister","",""],
  ["NDMA","Prime Minister","",""],
  ["GST Council","Union Finance Minister","","p"],
  ["Zonal Councils","Union Home Minister","","p"]
];

const C10T = [
  ["Chief Election Commissioner","6 years or age 65","Election Commissioners: the same.","p"],
  ["Comptroller and Auditor General","6 years or age 65","","p"],
  ["UPSC chairman and members","6 years or age 65","","p"],
  ["State PSC chairman and members","6 years or age 62","","p"],
  ["Lokpal chairperson and members","5 years or age 70","","p"],
  ["NHRC chairperson and members","3 years or age 70","Cut from 5 years in 2019.","p"],
  ["Central Vigilance Commissioner","4 years or age 65","",""],
  ["Attorney General for India","No fixed term (President's pleasure)","Advocate General: the Governor's pleasure.","p"],
  ["CBI Director","At least 2 years (extendable up to 5)","Extensions allowed since 2021.",""]
];
const C10R = [
  ["Chief Election Commissioner","Like a Supreme Court judge (special majority in both Houses)","","p"],
  ["Comptroller and Auditor General","Like a Supreme Court judge (special majority in both Houses)","","p"],
  ["An Election Commissioner","By the President on the CEC's recommendation","",""],
  ["UPSC member","By the President after a Supreme Court inquiry","For misbehaviour; also for insolvency or other jobs (Article 317).","p"],
  ["State PSC member","By the President after a Supreme Court inquiry","Not by the Governor.","p"],
  ["NHRC chairperson","By the President after a Supreme Court inquiry","",""],
  ["Central Vigilance Commissioner","By the President after a Supreme Court inquiry","",""],
  ["Attorney General for India","At the pleasure of the President","","p"],
  ["Advocate General","At the pleasure of the Governor","",""]
];
const C10C = [
  ["Election Commission","CEC + 2 Election Commissioners","Since 1993.","p"],
  ["Finance Commission","Chairman + 4 members","","p"],
  ["NCSC / NCST / NCBC","Chairperson + vice-chairperson + 3 members","",""],
  ["Central Vigilance Commission","CVC + up to 2 Vigilance Commissioners","","p"],
  ["Lokpal","Chairperson + up to 8 members (half judicial)","","p"],
  ["Central Information Commission","CIC + up to 10 Information Commissioners","",""],
  ["Comptroller and Auditor General","A single person","",""]
];

LESSONS.push(
{id:"C9", heat:3, title:"Constitutional, statutory or neither? NITI Aayog, CBI, NDC", hi:"संवैधानिक, वैधानिक या कार्यकारी? नीति आयोग, सीबीआई, एनडीसी", blocks:[
  {k:"hot", h:"The classic trap: <b>“Which of these is NOT a constitutional / statutory body?”</b> Remember the three <b>executive</b> bodies — <b>NITI Aayog</b> (2015), <b>CBI</b> (1963) and the <b>National Development Council</b> (1952) — and that the old <b>Planning Commission</b> (1950) was executive too."},
  {k:"story", h:"<p>Sort every body into three boxes. <b>Constitutional</b>: an Article creates it (EC, UPSC, FC, CAG, GST Council, NCSC/NCST/NCBC). <b>Statutory</b>: an Act of Parliament creates it (NHRC, CVC, Lokpal, CIC, NCW, NCM, NGT, NDMA, NIA, SEBI, the Zonal Councils). <b>Executive</b> (non-constitutional, non-statutory): a simple government resolution creates it.</p><p>The <b>Planning Commission</b> was born by a Cabinet resolution on <b>15 March 1950</b>; the <b>NDC</b> by another in <b>1952</b>. The <b>CBI</b> was set up by a Home Ministry resolution on <b>1 April 1963</b> — it uses powers from the <b>Delhi Special Police Establishment Act, 1946</b>, but no Act created it. On <b>1 January 2015</b> the <b>NITI Aayog</b> (National Institution for Transforming India) replaced the Planning Commission, again by a Cabinet resolution. The <b>PM</b> chairs NITI Aayog; its first Vice-Chairperson was <b>Arvind Panagariya</b>.</p>", key:"Executive bodies: Planning Commission 1950, NDC 1952, CBI 1963, NITI Aayog 2015. NIA (2008 Act) and Zonal Councils (1956 Act) are statutory."},
  {k:"table", title:"Which kind of body?", head:["Body","Kind","Basis"], rows: C9K.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"When were they set up?", head:["Event","Year","Note"], rows: C9Y.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Who chairs it?", head:["Body","Chaired by","Note"], rows: C9C.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"The executive four — <b>“PNCN”</b>, <b>“Plans Need CBI's Nod”</b>: <b>P</b>lanning Commission, <b>N</b>DC, <b>C</b>BI, <b>N</b>ITI Aayog. Everything else in this app has an Article or an Act."},
  {k:"trap", h:"The <b>CBI</b> is <b>not</b> statutory even though it works under the <b>DSPE Act, 1946</b>. The <b>NIA</b> <b>is</b> statutory. The <b>Zonal Councils</b> are statutory (1956 Act), while the <b>Inter-State Council</b> is constitutional (Article 263). NITI Aayog <b>does not</b> give grants to states — the Planning Commission did."}
], sum:["Executive (non-constitutional, non-statutory) bodies: Planning Commission (1950), NDC (1952), CBI (1963), NITI Aayog (2015).","NITI Aayog replaced the Planning Commission on 1 January 2015 by a Cabinet resolution; the PM chairs it.","The CBI was set up by a Home Ministry resolution (1963); its powers come from the DSPE Act, 1946.","NIA (2008), NHRC, CVC, Lokpal, CIC, NGT, NDMA and the Zonal Councils are statutory.","The PM chairs NITI Aayog, NDC, NDMA and the Inter-State Council; the Home Minister chairs the Zonal Councils."]},

{id:"C10", heat:3, title:"Comparison tables: tenure, removal, composition", hi:"तुलना: कार्यकाल, पद से हटाना, संरचना", blocks:[
  {k:"hot", h:"Statement questions mix these up: <b>“6 years or 65”</b> (CEC, CAG, UPSC), <b>62</b> for State PSC, <b>“removed like an SC judge”</b> (CEC, CAG), <b>“removed by the President after an SC inquiry”</b> (UPSC, NHRC, CVC) and the <b>number of members</b> in each body."},
  {k:"story", h:"<p>Put the bodies side by side and three patterns appear. The posts that must be most independent — the <b>CEC</b> and the <b>CAG</b> — can be removed only <b>like a Supreme Court judge</b>, by a special majority in both Houses. The <b>commission members</b> — UPSC, State PSC, NHRC, CVC, Lokpal — are removed by the <b>President</b>, usually after a <b>Supreme Court inquiry</b> into misbehaviour. The <b>law officers</b> — AG and Advocate General — simply serve at the <b>pleasure</b> of the President or Governor.</p><p>Terms follow a similar logic: <b>6 years</b> for the constitutional heavyweights (with an age cap of <b>65</b>, or <b>62</b> for State PSCs), and shorter terms with a higher age cap (<b>70</b>) for the judge-led commissions — Lokpal 5 years, NHRC 3 years.</p>", key:"Removed like an SC judge: CEC, CAG. By the President after an SC inquiry: UPSC, State PSC, NHRC, CVC, Lokpal. At pleasure: AG, Advocate General."},
  {k:"table", title:"Tenure", head:["Post","Term","Note"], rows: C10T.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"How removed", head:["Post","Removal","Note"], rows: C10R.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Composition", head:["Body","Members","Note"], rows: C10C.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Six-Five for the Big Three”</b> — CEC, CAG, UPSC: 6 years / 65. <b>“State stops at 62.”</b> <b>“Judges' bodies live to 70”</b> — Lokpal and NHRC."},
  {k:"trap", h:"<b>State PSC</b> members are appointed by the Governor but removed by the <b>President</b>. An <b>Election Commissioner</b> is not removed like a judge — only the <b>CEC</b> is. The <b>CAG</b> is a single person, not a commission."}
], sum:["6 years or age 65: CEC and ECs, CAG, UPSC members; State PSC members: 6 years or 62.","Lokpal: 5 years or 70; NHRC: 3 years or 70; CVC: 4 years or 65.","CEC and CAG are removed like a Supreme Court judge; an EC only on the CEC's recommendation.","UPSC, State PSC, NHRC and CVC members are removed by the President after a Supreme Court inquiry.","EC: CEC + 2; FC: chairman + 4; Lokpal: chairperson + up to 8; CIC: up to 10 ICs; CVC: up to 2 VCs."]}
);

pairQs("C9", C9K, { q: t => `What kind of body is the ${t}?`, extra: ["Non-governmental organisation"] });
pairQs("C9", C9Y, { q: t => `${t} — in which year?`, rq: a => `Which body came into being in ${a}?` });
pairQs("C9", C9C, { q: t => `Who chairs the ${t}?`, rq: a => `Which body is chaired by the ${a}?`, extra: ["President of India","Vice-President of India"] });
pairQs("C10", C10T, { q: t => `What is the term of office of the ${t}?`, rq: a => `Whose term is "${a}"?` });
pairQs("C10", C10R, { q: t => `How can the ${t} be removed?`, rq: a => `Who is removed this way: ${a}?` });
pairQs("C10", C10C, { q: t => `What is the composition of the ${t}?`, rq: a => `Which body has this composition: ${a}?` });

QB.push(
["C9","NITI Aayog replaced the Planning Commission on:",["1 January 2015","26 January 2015","15 August 2014","1 April 2015"],"By a Cabinet resolution.","p"],
["C9","NITI Aayog stands for:",["National Institution for Transforming India","National Institute for Technology and Innovation","New India Transformation Initiative","National Integration and Transformation Institute"],"'Aayog' means commission.","p"],
["C9","Who is the chairperson of NITI Aayog?",["Prime Minister","President","Union Finance Minister","Vice-Chairperson of NITI Aayog"],"The PM chairs it by virtue of office.","p"],
["C9","The CBI derives its power to investigate from the:",["Delhi Special Police Establishment Act, 1946","CBI Act, 1963","Indian Police Act, 1861","Prevention of Corruption Act, 1988"],"There is no 'CBI Act'.","p"],
["C9","Which of these is a non-constitutional and non-statutory body?",["National Development Council","Finance Commission","National Human Rights Commission","Central Information Commission"],"Set up by an executive resolution in 1952.","p"],
["C9","The National Development Council approved the:",["Five-Year Plans","Union Budget","Finance Commission reports","GST rates"],"The PM chaired it; members included all Chief Ministers.",""],
["C9","Which of these is a constitutional body?",["Finance Commission","NITI Aayog","Central Vigilance Commission","National Green Tribunal"],"Article 280.","p"],
["C9","The CBI was set up on the recommendation of the:",["Santhanam Committee","Kothari Committee","Malhotra Committee","Sarkaria Commission"],"Set up on 1 April 1963.",""],
["C10","Which two posts can be removed only in the manner of a Supreme Court judge?",["Chief Election Commissioner and CAG","Attorney General and CAG","UPSC Chairman and CEC","Lokpal and CVC"],"Special majority in both Houses of Parliament.","p"],
["C10","Who among these can be removed by the President without any parliamentary process?",["Attorney General","Comptroller and Auditor General","Chief Election Commissioner","Judge of the Supreme Court"],"The AG serves at the President's pleasure.","p"],
["C10","Which body has the highest upper age limit for its members — 70 years?",["Lokpal","UPSC","Election Commission","Central Vigilance Commission"],"NHRC members also serve till 70.",""],
["C10","Which of these is a single-member constitutional authority?",["Comptroller and Auditor General","Finance Commission","Election Commission","Union Public Service Commission"],"The CAG has no fellow members.","p"]
);

LASTMOMENT.push(
{t:"Which is which?", era:["cb"], rows:[["Constitutional","EC, UPSC, FC, CAG, GST Council, NCSC/NCST/NCBC"],["Statutory","NHRC, CVC, Lokpal, CIC, NCW, NCM, NGT, NDMA, NIA"],["Executive","NITI Aayog, CBI, NDC, Planning Commission"],["NITI Aayog","1 Jan 2015"],["CBI","1963 (DSPE Act 1946)"],["NDC","1952"]]},
{t:"Tenure and removal", era:["cb"], rows:[["CEC, CAG, UPSC","6 yrs / 65"],["State PSC","6 yrs / 62"],["Lokpal","5 yrs / 70"],["NHRC","3 yrs / 70"],["CVC","4 yrs / 65"],["Like an SC judge","CEC, CAG"],["At pleasure","AG, Advocate General"],["State PSC removed by","President"]]}
);
TILES.push(["2015","NITI Aayog","cb"],["1963","CBI set up","cb"],["6 / 65","CEC · CAG · UPSC term","cb"],["5 / 70","Lokpal term","cb"]);
