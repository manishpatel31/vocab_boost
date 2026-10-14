/* Part 2 · Statutory bodies — C7 the watchdogs (NHRC, CVC, Lokpal, CIC); C8 commissions, tribunals and regulators (Act and year). */
const C7L = [
  ["National Human Rights Commission","Protection of Human Rights Act, 1993","State Human Rights Commissions come from the same Act.","p"],
  ["Central Vigilance Commission","Central Vigilance Commission Act, 2003","It existed from 1964 by resolution; statutory since 2003.","p"],
  ["Lokpal","Lokpal and Lokayuktas Act, 2013","Came into force in January 2014.","p"],
  ["Central Information Commission","Right to Information Act, 2005","State Information Commissions come from the same Act.","p"],
  ["Central Bureau of Investigation (its powers)","Delhi Special Police Establishment Act, 1946","The CBI itself was set up by a resolution in 1963.","p"]
];
const C7Y = [
  ["Santhanam Committee on corruption set up","1962","Led to the CVC and the CBI.",""],
  ["The word 'Lokpal' coined by L. M. Singhvi","1963","",""],
  ["CVC first set up by a government resolution","1964","On the Santhanam Committee's advice.","p"],
  ["First Lokayukta in India (Maharashtra)","1971","",""],
  ["NHRC set up (12 October)","1993","Under the Protection of Human Rights Act.","p"],
  ["CVC made a statutory body by an Act","2003","",""],
  ["Central Information Commission set up","2005","The RTI Act came fully into force on 12 October 2005.","p"],
  ["Lokpal and Lokayuktas Act passed by Parliament","2013","Signed by the President on 1 January 2014.","p"],
  ["First Lokpal chairperson appointed","2019","Justice Pinaki Chandra Ghose.","p"]
];
const C7P = [
  ["Chief Election Commissioner","PM + Leader of Opposition (Lok Sabha) + a Cabinet Minister","2023 Act.",""],
  ["Chief Information Commissioner","PM + Leader of Opposition (Lok Sabha) + a Cabinet Minister","RTI Act, 2005.","p"],
  ["Central Vigilance Commissioner","PM + Home Minister + Leader of Opposition (Lok Sabha)","CVC Act, 2003.","p"],
  ["NHRC chairperson","PM + Speaker + Home Minister + RS Deputy Chairman + both Leaders of Opposition","Six members in all.","p"],
  ["Lokpal chairperson","PM + Speaker + Leader of Opposition + CJI (or a judge) + an eminent jurist","Five members.","p"],
  ["CBI Director","PM + Leader of Opposition (Lok Sabha) + CJI (or a judge)","Under the DSPE Act as amended in 2014.",""]
];

const C8A = [
  ["National Commission for Women Act","1990","The NCW was set up on 31 January 1992.","p"],
  ["National Commission for Minorities Act","1992","",""],
  ["SEBI Act","1992","SEBI began in 1988 as a non-statutory body.","p"],
  ["TRAI Act","1997","",""],
  ["IRDA Act","1999","Followed the Malhotra Committee.",""],
  ["Competition Act (CCI)","2002","CCI replaced the MRTP Commission.","p"],
  ["Commissions for Protection of Child Rights Act (NCPCR)","2005","NCPCR set up in 2007.",""],
  ["Disaster Management Act (NDMA)","2005","",""],
  ["Food Safety and Standards Act (FSSAI)","2006","FSSAI set up in 2008.","p"],
  ["National Investigation Agency Act","2008","Passed after the 26/11 Mumbai attacks.","p"],
  ["National Green Tribunal Act","2010","NGT set up on 18 October 2010.","p"],
  ["PFRDA Act","2013","PFRDA had worked by government order since 2003.",""],
  ["Reserve Bank of India Act","1934","RBI began on 1 April 1935.","p"]
];
const C8H = [
  ["SEBI","Mumbai","",""],
  ["Reserve Bank of India","Mumbai","",""],
  ["IRDAI","Hyderabad","Moved from Delhi in 2001.","p"],
  ["TRAI","New Delhi","",""],
  ["Competition Commission of India","New Delhi","",""],
  ["FSSAI","New Delhi","Under the Ministry of Health.",""],
  ["PFRDA","New Delhi","",""],
  ["National Green Tribunal (principal bench)","New Delhi","Zonal benches: Bhopal, Pune, Kolkata, Chennai.","p"]
];
const C8W = [
  ["SEBI","Securities and the stock market","","p"],
  ["TRAI","Telecom and broadcasting","",""],
  ["Competition Commission of India","Fair competition and monopolies","",""],
  ["FSSAI","Food safety","",""],
  ["IRDAI","Insurance","",""],
  ["PFRDA","Pensions and the National Pension System","",""],
  ["National Green Tribunal","Environment and forest cases","","p"],
  ["NDMA","Disaster management","Chaired by the Prime Minister.","p"],
  ["National Commission for Women","Rights of women","",""],
  ["NCPCR","Rights of children","",""],
  ["National Commission for Minorities","Rights of notified minorities","Six minorities; Jains added in 2014.",""]
];

LESSONS.push(
{id:"C7", heat:3, title:"Watchdogs: NHRC, CVC, Lokpal and CIC", hi:"निगरानी निकाय: मानवाधिकार आयोग, सीवीसी, लोकपाल, सीआईसी", blocks:[
  {k:"hot", h:"Asked: the <b>Act and year</b> (NHRC 1993, CIC 2005 via RTI, CVC Act 2003, Lokpal Act 2013), the <b>selection panels</b>, the <b>tenure</b> (NHRC 3 yrs/70, CVC 4 yrs/65, Lokpal 5 yrs/70) and that all four are <b>statutory</b>, not constitutional."},
  {k:"story", h:"<p>In <b>1962</b> the <b>Santhanam Committee</b> looked at corruption; its advice gave India the <b>CVC</b> (by resolution, <b>1964</b>) and the <b>CBI</b> (1963). The CVC became <b>statutory</b> with the <b>CVC Act, 2003</b>: a Central Vigilance Commissioner and up to two Vigilance Commissioners, chosen by the PM, the Home Minister and the Leader of the Opposition, for <b>4 years or till 65</b>. The word <b>Lokpal</b> (coined by L. M. Singhvi, 1963) became law only with the <b>Lokpal and Lokayuktas Act, 2013</b>; the first Lokpal, <b>Pinaki Chandra Ghose</b>, came in <b>2019</b>. The Lokpal has a chairperson and up to <b>8 members</b>, half of them judicial.</p><p>The <b>NHRC</b> was set up on <b>12 October 1993</b> under the <b>Protection of Human Rights Act</b>; its first chairperson was former CJI <b>Ranganath Misra</b>. Since the 2019 amendment its members serve <b>3 years or till 70</b>, and a retired Supreme Court judge (not only a former CJI) can head it. The <b>Central Information Commission</b> came from the <b>RTI Act, 2005</b>: a Chief Information Commissioner and up to <b>10</b> Information Commissioners; the first CIC was <b>Wajahat Habibullah</b>.</p>", key:"NHRC 1993 · CIC 2005 (RTI) · CVC 1964 → Act 2003 · Lokpal Act 2013, first Lokpal 2019 — all statutory."},
  {k:"facts", title:"The four watchdogs", rows:[
    ["NHRC","Chairperson + 5 full-time members (+ heads of national commissions as deemed members) · 3 years or 70"],
    ["CVC","Central Vigilance Commissioner + up to 2 Vigilance Commissioners · 4 years or 65 · reports to the President"],
    ["Lokpal","Chairperson + up to 8 members (half judicial) · 5 years or 70 · can inquire into the PM, with safeguards"],
    ["CIC","Chief Information Commissioner + up to 10 Information Commissioners · term set by the Centre since 2019 (3 years by the 2019 rules)"],
    ["Removal (all four)","By the President, after a Supreme Court inquiry where misbehaviour is alleged"],
    ["Lokayukta","The state-level Lokpal — set up by each state's own law; Maharashtra was first (1971)"]
  ]},
  {k:"table", title:"Which Act?", head:["Body","Created under","Note"], rows: C7L.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Milestones", head:["Event","Year","Note"], rows: C7Y.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Who selects?", head:["Post","Selection panel","Note"], rows: C7P.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Tenures in a ladder — <b>“3-4-5”</b>: NHRC <b>3</b> years, CVC <b>4</b> years, Lokpal <b>5</b> years. Age limits: NHRC and Lokpal <b>70</b>, CVC <b>65</b>."},
  {k:"trap", h:"The <b>CVC</b> is older (<b>1964</b>) than its Act (<b>2003</b>) — both years are asked. The <b>CVC panel</b> has the <b>Home Minister</b>; the <b>CIC panel</b> has a <b>Cabinet Minister named by the PM</b>. The Lokpal Act was <b>2013</b>, but the first Lokpal came only in <b>2019</b>."}
], sum:["NHRC: Protection of Human Rights Act, 1993 (12 Oct 1993); first chairperson Ranganath Misra; 3 years or 70.","CVC: resolution 1964 (Santhanam Committee), statutory by the CVC Act 2003; 4 years or 65.","Lokpal: Lokpal and Lokayuktas Act 2013; first Lokpal P. C. Ghose (2019); chairperson + up to 8 members.","CIC: RTI Act 2005; CIC + up to 10 ICs; first CIC Wajahat Habibullah.","All four are statutory bodies; their heads are appointed by the President on a selection panel's advice."]},

{id:"C8", heat:2, title:"Commissions, tribunals and regulators", hi:"आयोग, न्यायाधिकरण और नियामक", blocks:[
  {k:"hot", h:"Asked: <b>the Act and year</b> (NCW 1990, NCM 1992, SEBI 1992, TRAI 1997, IRDA 1999, Competition 2002, Disaster Management 2005, FSS 2006, NGT 2010, PFRDA 2013), <b>headquarters</b> (SEBI Mumbai, IRDAI Hyderabad) and <b>what each regulates</b>."},
  {k:"story", h:"<p>Parliament creates a <b>statutory body</b> whenever a field needs a referee. Markets got <b>SEBI</b> (set up 1988, statutory by the SEBI Act 1992, HQ Mumbai). Telecom got <b>TRAI</b> (1997), insurance <b>IRDAI</b> (1999, Hyderabad), competition the <b>CCI</b> (Competition Act 2002, replacing the MRTP Commission), food <b>FSSAI</b> (2006 Act) and pensions <b>PFRDA</b> (2013 Act, runs the NPS). The <b>RBI</b> itself is statutory too — RBI Act, 1934.</p><p>Social justice got commissions: the <b>National Commission for Women</b> (Act 1990, set up 31 January 1992, first chairperson Jayanti Patnaik), the <b>National Commission for Minorities</b> (Act 1992) and the <b>NCPCR</b> for children (Act 2005). Nature got the <b>National Green Tribunal</b> (2010) — principal bench in <b>New Delhi</b>, zonal benches at Bhopal, Pune, Kolkata and Chennai — and disasters the <b>NDMA</b> (Disaster Management Act 2005), chaired by the <b>Prime Minister</b>.</p>", key:"Every regulator and national commission here is statutory — learn its Act year and HQ: SEBI 1992 Mumbai, IRDAI 1999 Hyderabad, NGT 2010 Delhi."},
  {k:"table", title:"Act → year", head:["Act","Year","Note"], rows: C8A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Headquarters", head:["Body","Headquarters","Note"], rows: C8H.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Who looks after what?", head:["Body","Looks after","Note"], rows: C8W.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"In order of the Acts: <b>“Women Meet Stock Traders In Competitive Child Disaster Food Investigations; Green Pensions”</b> — NCW 90, NCM 92, SEBI 92, TRAI 97, IRDA 99, CCI 2002, NCPCR 05, NDMA 05, FSSAI 06, NIA 08, NGT 10, PFRDA 13."},
  {k:"trap", h:"<b>SEBI</b> began in <b>1988</b> but became statutory in <b>1992</b>. <b>IRDAI</b> is in <b>Hyderabad</b>, not Mumbai. The <b>NIA</b> is statutory (2008 Act), but the <b>CBI</b> is not. The <b>NCM</b> is statutory, unlike the constitutional NCSC, NCST and NCBC."}
], sum:["NCW Act 1990 (NCW set up 1992); NCM Act 1992; NCPCR Act 2005.","SEBI Act 1992 (Mumbai); TRAI Act 1997; IRDA Act 1999 (Hyderabad); PFRDA Act 2013.","Competition Act 2002 set up the CCI in place of the MRTP Commission.","Disaster Management Act 2005 — NDMA chaired by the PM; FSS Act 2006 — FSSAI.","National Green Tribunal Act 2010 — principal bench New Delhi; zonal benches Bhopal, Pune, Kolkata, Chennai."]}
);

pairQs("C7", C7L, { q: t => `The ${t} draws its authority from the:`, rq: a => `Which body was created by (or draws its powers from) the ${a}?`, extra: ["Prevention of Corruption Act, 1988","Official Secrets Act, 1923"] });
pairQs("C7", C7Y, { q: t => `${t} — in which year?`, rq: a => `Which watchdog milestone came in ${a}?` });
pairQs("C7", C7P, { q: t => `Who sits on the panel that selects the ${t}?` });
pairQs("C8", C8A, { q: t => `The ${t} was passed in:`, rq: a => `Which law was passed in ${a}?` });
pairQs("C8", C8H, { q: t => `Where is the headquarters of the ${t}?`, rq: a => `Which body has its headquarters in ${a}?`, extra: ["Kolkata","Chennai","Bengaluru"] });
pairQs("C8", C8W, { q: t => `The ${t} looks after:`, rq: a => `Which body looks after this: ${a.toLowerCase()}?` });

QB.push(
["C7","The National Human Rights Commission is a:",["Statutory body","Constitutional body","Executive body","Non-governmental body"],"Set up under the Protection of Human Rights Act, 1993.","p"],
["C7","Who appoints the chairperson and members of the NHRC?",["President","Prime Minister","Chief Justice of India","Parliament"],"On the advice of a six-member panel led by the PM.","p"],
["C7","After the 2019 amendment, the NHRC chairperson can be a former Chief Justice of India or a former:",["Judge of the Supreme Court","Chief Justice of a High Court","Attorney General","Chief Election Commissioner"],"Earlier only a former CJI could head it.",""],
["C7","The Central Vigilance Commission was first set up on the recommendation of the:",["Santhanam Committee","Sarkaria Commission","Malhotra Committee","Administrative Reforms Commission"],"In February 1964.","p"],
["C7","The Lokpal can have a chairperson and at most how many members?",["8","10","5","6"],"Half of them must be judicial members.","p"],
["C7","The Central Information Commission can have a Chief Information Commissioner and up to how many Information Commissioners?",["10","8","5","12"],"Under the RTI Act, 2005.",""],
["C7","A Lokayukta is the anti-corruption body of a:",["State","District","Municipal corporation","Union Territory only"],"Set up by each state's own law.",""],
["C7","The Central Vigilance Commissioner holds office for:",["4 years or until age 65","5 years or until age 70","3 years or until age 70","6 years or until age 65"],"Under the CVC Act, 2003.","p"],
["C8","The National Green Tribunal has its principal bench at:",["New Delhi","Bhopal","Pune","Chennai"],"Zonal benches at Bhopal, Pune, Kolkata and Chennai.","p"],
["C8","Who chairs the National Disaster Management Authority?",["Prime Minister","Union Home Minister","President","Cabinet Secretary"],"Under the Disaster Management Act, 2005.","p"],
["C8","SEBI was first set up in 1988 and became a statutory body in:",["1992","1991","1995","1988"],"By the SEBI Act, 1992.","p"],
["C8","The Competition Commission of India replaced the:",["MRTP Commission","Tariff Commission","Planning Commission","Forward Markets Commission"],"Under the Competition Act, 2002.","p"],
["C8","Which community was added to the list of national minorities in 2014?",["Jains","Parsis","Buddhists","Sikhs"],"Now six: Muslims, Christians, Sikhs, Buddhists, Parsis and Jains.","p"],
["C8","The National Commission for Women was set up on 31 January of which year?",["1992","1990","1993","1995"],"Under the NCW Act, 1990.","p"],
["C8","Which of these is a statutory body?",["National Investigation Agency","NITI Aayog","Central Bureau of Investigation","National Development Council"],"NIA Act, 2008.","p"]
);

LASTMOMENT.push(
{t:"Watchdogs", era:["cb"], rows:[["NHRC","1993 Act · 3 yrs / 70"],["CVC","1964 → Act 2003 · 4 yrs / 65"],["Lokpal","2013 Act · 5 yrs / 70 · first 2019"],["CIC","RTI Act 2005"],["CVC panel","PM, Home Min, LoP"],["CIC / CEC panel","PM, LoP, Cabinet Min"],["Lokpal panel","PM, Speaker, LoP, CJI, jurist"],["CBI Director panel","PM, LoP, CJI"]]},
{t:"Regulators", era:["cb"], rows:[["SEBI","1992 · Mumbai"],["TRAI","1997 · Delhi"],["IRDAI","1999 · Hyderabad"],["CCI","2002 · Delhi"],["FSSAI","2006 · Delhi"],["NGT","2010 · Delhi"],["PFRDA","2013 · Delhi"],["RBI","1934 Act · Mumbai"]]}
);
TILES.push(["1993","NHRC set up","cb"],["2005","RTI Act — CIC","cb"],["2013","Lokpal Act","cb"],["2010","National Green Tribunal","cb"]);
