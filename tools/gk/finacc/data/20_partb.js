/* F14 Part B (Economics and Governance): a map to the existing apps, plus what they leave out —
   the CAG under the DPC Act 1971 and the kinds of audit, the Finance Commission's working and the 16th FC's formula
   (facts as of October 2026), a few micro-economics gaps and e-governance. */
const FA_A = (file, id, label) => `<a href="${file}${id ? '?lesson=' + id : ''}">${label}</a>`;
const FA_AUDIT = [
  ["Financial (attest) audit","Certifies that the accounts give a true and fair view","Also called certification audit."],
  ["Compliance audit — regularity","Checks that money was spent under the law, the rules and a proper sanction",""],
  ["Compliance audit — propriety","Asks whether spending was wise, faithful and economical, in the public interest","Goes beyond the rules."],
  ["Performance audit","Judges economy, efficiency and effectiveness (the 3 Es) of a scheme or body","Value-for-money audit."],
  ["Supplementary audit","A second audit of a government company after its statutory auditor's","Section 143(6), Companies Act 2013."],
  ["Test audit","Checking a sample of transactions instead of all of them",""]
];
const FA_DPC = [
  ["Section 10","Compiling the accounts of the Union and the states","Union accounts were taken away from the CAG in 1976."],
  ["Section 11","Preparing annual accounts and submitting them to the President or Governor",""],
  ["Section 13","Audit of all spending from the Consolidated, Contingency and Public Accounts",""],
  ["Section 14","Audit of bodies substantially financed from government funds","Grants or loans of ₹25 lakh or more that are at least 75% of the body's spending; with approval, any body getting ₹1 crore or more."],
  ["Section 15","Audit of grants and loans given to other bodies",""],
  ["Section 16","Audit of receipts of the Union and the states",""],
  ["Section 17","Audit of stores and stock accounts",""],
  ["Section 18","Powers: inspect offices, call for records, ask questions",""],
  ["Section 19","Audit of government companies and corporations",""],
  ["Section 20","Audit of other bodies entrusted by the President or Governor",""]
];

LESSONS.push(
{id:"F14", heat:3, title:"Economics & Governance: what Paper III asks, and where to study it", hi:"अर्थशास्त्र एवं शासन: पेपर III क्या पूछता है और कहाँ पढ़ें", blocks:[
  {k:"hot", h:"Part B carries <b>120 marks</b>. The syllabus names the <b>CAG</b> (constitutional provisions, role and responsibility) and the <b>Finance Commission</b> (role and functions) first — then micro-economics, the Indian economy, reforms, money and banking, budgets and the role of IT in governance. Most of it is already taught in other apps; this lesson maps each topic and adds only what they leave out."},
  {k:"story", h:"<p>An Assistant Audit Officer works in the <b>Indian Audit and Accounts Department</b>, headed by the <b>Comptroller and Auditor General of India</b>. That is why Paper III asks about the CAG and the Finance Commission in more depth than Tier 1 does: not only the Articles, but the <b>Duties, Powers and Conditions of Service Act, 1971</b>, the kinds of audit, and how a Finance Commission divides tax money.</p><p>For the economics half, use the table below: open each linked lesson, then come back for the gaps — laws of production, consumer equilibrium, price under each market form, and e-governance.</p>", key:"Read the linked lesson first; this lesson adds only what it lacks."},
  {k:"table", title:"Part B syllabus → where to study it", head:["Syllabus topic","Study it in","Added here"], rows:[
    ["CAG: constitutional provisions, role and responsibility", FA_A("study-const-bodies.html","C4","Bodies · C4") + ", " + FA_A("study-polity.html","L19","Polity · L19"), "DPC Act 1971, kinds of audit, Articles 149–151 and 279"],
    ["Finance Commission: role and functions", FA_A("study-const-bodies.html","C4","Bodies · C4") + ", " + FA_A("study-polity.html","L14","Polity · L14") + ", " + FA_A("study-economics.html","L20","Economy · L20"), "Article 280(3), the 1951 Act, 15th vs 16th FC formula"],
    ["Meaning and scope of economics; central problems", FA_A("study-economics.html","L1","Economy · L1"), "Production possibility curve"],
    ["Demand, supply, elasticity; consumer behaviour", FA_A("study-economics.html","L2","Economy · L2"), "Consumer equilibrium (Marshall; indifference curves)"],
    ["Production and cost", FA_A("study-economics.html","L3","Economy · L3"), "Law of variable proportions; returns to scale"],
    ["Forms of market and price determination", FA_A("study-economics.html","L3","Economy · L3"), "MR = MC; price under each market"],
    ["Nature of the Indian economy; agriculture, industry, services", FA_A("study-economics.html","L1","Economy · L1") + ", " + FA_A("study-economics.html","L14","L14") + ", " + FA_A("study-economics.html","L18","L18"), "—"],
    ["National income: concepts and methods", FA_A("study-economics.html","L4","Economy · L4"), "—"],
    ["Population: size, growth, effect on growth", FA_A("study-census.html","L4","Census · L4") + ", " + FA_A("study-census.html","L11","L11"), "—"],
    ["Poverty and unemployment", FA_A("study-economics.html","L5","Economy · L5") + ", " + FA_A("study-economics.html","L18","L18"), "—"],
    ["Infrastructure: energy, transport, communication", FA_A("study-industries-transport.html","T5","Industries & Transport · T5–T10"), "—"],
    ["Reforms since 1991: LPG, disinvestment", FA_A("study-economics.html","L15","Economy · L15"), "—"],
    ["Monetary and fiscal policy; RBI", FA_A("study-economics.html","L7","Economy · L6–L7") + ", " + FA_A("study-banking.html","N1","Banking · N1–N2"), "—"],
    ["Commercial banks, RRBs, payments banks", FA_A("study-banking.html","N4","Banking · N4") + ", " + FA_A("study-economics.html","L8","Economy · L8"), "—"],
    ["Budget, fiscal deficit, balance of payments, FRBM Act 2003", FA_A("study-economics.html","L9","Economy · L9–L10") + ", " + FA_A("study-economics.html","L16","L16"), "—"],
    ["Role of information technology in governance", FA_A("study-computer.html","C22","Computer · C22") + ", " + FA_A("study-govt-schemes.html","L12","Schemes · L12"), "NeGP, e-Kranti, G2C/G2B/G2G"]]},
  {k:"link", h:"The CAG's Article (148), term (6 years or 65), removal (like a Supreme Court judge) and the 'friend, philosopher and guide' of the Public Accounts Committee, and the Finance Commission's chairmen, are in " + FA_A("study-const-bodies.html","C4","Constitutional &amp; Statutory Bodies · C4") + "; the PAC, Estimates Committee and COPU are in " + FA_A("study-polity.html","L12","Polity · L12") + "; the 16th FC's 41% share and the Budget 2026-27 numbers are in " + FA_A("study-economics.html","L20","Indian Economy · L20") + "."},
  {k:"table", title:"The CAG in the Constitution: what the other apps leave out", head:["Article","Provision","Note"], rows:[
    ["148(1)","Appointed by the President by warrant under his hand and seal","Oath in the Third Schedule."],
    ["148(4)","Not eligible for any further office under the Union or a state after leaving",""],
    ["148(5)","Conditions of service of IA&amp;AD staff set by the President after consulting the CAG",""],
    ["148(6)","The office's administrative expenses are charged on the Consolidated Fund of India","Not voted by Parliament."],
    ["149","Duties and powers as laid down by Parliament","Parliament did this through the DPC Act, 1971."],
    ["150","Accounts of the Union and states kept in the form the President prescribes on the CAG's advice",""],
    ["151","Audit reports go to the President (Union) or the Governor (state), who lay them before the legislature",""],
    ["279","The CAG's certificate of the 'net proceeds' of a tax is final",""]]},
  {k:"table", title:"The Comptroller and Auditor General's (Duties, Powers and Conditions of Service) Act, 1971", head:["Section","Deals with","Note"], rows: FA_DPC},
  {k:"table", title:"Kinds of audit", head:["Audit","What it checks","Note"], rows: FA_AUDIT},
  {k:"facts", title:"The audit department", rows:[
    ["Indian Audit and Accounts Department (IA&amp;AD)","Headed by the CAG; the Accountants General work in the states"],
    ["Origin","The first Auditor General, Sir Edward Drummond, took charge in 1860"],
    ["Separation of accounts from audit","1976: Union accounts moved to the ministries under the Controller General of Accounts (Ministry of Finance)"],
    ["Government companies","Under the Companies Act 2013 the CAG appoints the statutory auditor (Section 139(5)) and may conduct a supplementary or test audit (Section 143(6))"],
    ["Motto","'Lokahitartham Satyanishtha' — dedicated to truth in public interest"],
    ["CAG as of October 2026","K. Sanjay Murthy, in office since 21 November 2024"]]},
  {k:"table", title:"Finance Commission: how it works", head:["Provision","What it says","Note"], rows:[
    ["Article 280(1)","Set up by the President every fifth year, or earlier","A chairman and four members."],
    ["Article 280(2) and the 1951 Act","Qualifications are laid down by the Finance Commission (Miscellaneous Provisions) Act, 1951","Chairman: experience in public affairs."],
    ["Members under the 1951 Act","A High Court judge or one qualified to be; an expert in government finance and accounts; one with wide experience of financial administration; an economist",""],
    ["Article 280(3)(a)","Sharing of net tax proceeds between the Union and the states (vertical) and among the states (horizontal)",""],
    ["Article 280(3)(b)","Principles for grants-in-aid to states under Article 275",""],
    ["Article 280(3)(bb) and (c)","Measures to help states fund panchayats and municipalities","Added by the 73rd and 74th Amendments."],
    ["Article 281","The President lays the recommendations before Parliament with an explanatory memorandum","They are advisory."],
    ["State Finance Commission","Article 243-I (panchayats) and 243Y (municipalities); set up by the Governor","Different body."]]},
  {k:"table", title:"Sharing among the states: 15th vs 16th Finance Commission", head:["Criterion","15th FC (2021–26)","16th FC (2026–31)"], rows:[
    ["Income distance","45%","42.5%"],
    ["Population (2011 Census)","15%","17.5%"],
    ["Area","15%","10%"],
    ["Forest and ecology","10%","10% (redefined)"],
    ["Demographic performance","12.5%","10% (population growth 1971–2011)"],
    ["Tax and fiscal effort","2.5%","Dropped"],
    ["Contribution to GDP","—","10% (new)"],
    ["States' share of the divisible pool","41%","41%"]]},
  {k:"facts", title:"16th Finance Commission timeline", rows:[
    ["Set up","31 December 2023; chairman Arvind Panagariya"],
    ["Report to the President","17 November 2025"],
    ["Laid in Parliament","1 February 2026, with the Union Budget 2026-27"],
    ["Award period","2026-27 to 2030-31"]]},
  {k:"table", title:"Micro-economics the Economy app does not spell out", head:["Idea","Rule","Note"], rows:[
    ["Law of variable proportions — Stage I","Total product rises fast; marginal product rises, then falls; ends where AP is highest","Increasing returns to the variable factor."],
    ["Stage II","MP falls but stays positive; TP is highest where MP = 0","The rational stage — a firm produces here."],
    ["Stage III","MP is negative and TP falls","Never chosen."],
    ["Returns to scale","All inputs raised in the same proportion — output rises more (increasing), equally (constant) or less (diminishing)","A long-run idea."],
    ["Production possibility curve","Concave to the origin because opportunity cost rises; a point inside means idle resources; growth shifts it outward",""],
    ["Consumer equilibrium (Marshall)","One good: MU = price; two goods: MUx/Px = MUy/Py","Law of equi-marginal utility."],
    ["Consumer equilibrium (indifference curves)","Budget line tangent to the highest indifference curve: MRS = Px/Py","Curves slope down, are convex and never cross."],
    ["Price under any market","Profit is greatest where MR = MC (MC cutting MR from below)",""],
    ["Perfect competition","P = AR = MR = MC; in the long run P = minimum AC (normal profit)",""],
    ["Monopoly","P &gt; MR = MC; can practise price discrimination",""],
    ["Oligopoly","Kinked demand curve (Sweezy) explains rigid prices",""]]},
  {k:"facts", title:"IT in governance", rows:[
    ["National e-Governance Plan (NeGP)","Approved in May 2006 with 27 Mission Mode Projects (later 31)"],
    ["e-Kranti","NeGP 2.0, approved in March 2015 as a pillar of Digital India"],
    ["Core infrastructure","State Wide Area Networks (SWAN), State Data Centres, Common Services Centres (CSCs)"],
    ["Models","G2C (citizens), G2B (businesses), G2G (between governments), G2E (employees)"]]},
  {k:"trick", h:"DPC Act sections in a line — <b>“13 spend, 14 funded bodies, 16 receipts, 17 stores, 19 companies, 20 on request”</b>. Audit types — <b>regularity</b> asks 'was it allowed?', <b>propriety</b> asks 'was it wise?', <b>performance</b> asks 'did it work?'."},
  {k:"trap", h:"Article <b>149</b> (duties and powers) is filled in by the <b>DPC Act 1971</b>, not by the Constitution itself. The CAG audits but no longer <b>compiles</b> the Union's accounts (since 1976 — the CGA does). The 16th FC kept the share at <b>41%</b> but changed the weights: income distance fell to <b>42.5%</b> and a new <b>contribution to GDP</b> criterion (10%) replaced tax effort."}
], sum:["Part B (120 marks) names the CAG and the Finance Commission first; most other topics are in the Economy, Polity, Bodies, Banking, Census, Industries and Computer apps.","Article 149: CAG's duties and powers, set out in the DPC Act 1971; Article 150: form of accounts; Article 151: reports; Article 279: net proceeds certificate.","DPC Act: Section 13 spending, 14 substantially financed bodies (₹25 lakh and 75%), 16 receipts, 17 stores, 19 government companies, 20 audit on request.","Audit kinds: financial (attest), compliance (regularity and propriety), performance (economy, efficiency, effectiveness).","Union accounts were separated from audit in 1976 (Controller General of Accounts).","Finance Commission: Article 280(3) duties; qualifications in the 1951 Act; Article 281 report to Parliament.","16th FC: 41% share; income distance 42.5%, population 17.5%, area 10%, forest 10%, demographic performance 10%, contribution to GDP 10%; report 17 November 2025, laid 1 February 2026.","Profit is maximised where MR = MC; Stage II of the law of variable proportions is the rational stage."]}
);

QB.push(
["F14","Which Article of the Constitution deals with the duties and powers of the CAG?",["Article 149","Article 148","Article 150","Article 151"],"Article 149 leaves the duties and powers to Parliament, which passed the DPC Act 1971.",""],
["F14","The Act that lays down the CAG's duties, powers and conditions of service was passed in:",["1971","1950","1976","1993"],"The Comptroller and Auditor General's (Duties, Powers and Conditions of Service) Act, 1971.",""],
["F14","Under the DPC Act 1971, the audit of government companies and corporations is covered by:",["Section 19","Section 13","Section 16","Section 10"],"Section 19 covers government companies and corporations.",""],
["F14","Under Section 14 of the DPC Act, a body is 'substantially financed' if its government grants or loans are at least ₹25 lakh and make up at least what share of its spending?",["75%","50%","25%","90%"],"Section 14(1) uses ₹25 lakh and 75% of total expenditure.",""],
["F14","Audit of the receipts of the Union and the states is provided for in the DPC Act by:",["Section 16","Section 17","Section 19","Section 20"],"Section 16 covers receipts; Section 17 stores and stock.",""],
["F14","Under the DPC Act, the CAG audits a body at the request of the President or a Governor under:",["Section 20","Section 14","Section 11","Section 18"],"Section 20 provides for audit entrusted on request.",""],
["F14","A performance audit judges a scheme mainly by its:",["Economy, efficiency and effectiveness","Arithmetical accuracy","Legal authority alone","Cash balance"],"Performance (value-for-money) audit looks at the 3 Es.",""],
["F14","An audit that asks whether spending was wise and in the public interest, even if the rules were followed, is a:",["Propriety audit","Regularity audit","Financial audit","Test audit"],"Propriety audit goes beyond rules to the wisdom and economy of spending.",""],
["F14","An audit that checks whether money was spent under the law, the rules and a proper sanction is a:",["Regularity audit","Propriety audit","Performance audit","Supplementary audit"],"Regularity audit is the rule-based part of compliance audit.",""],
["F14","An audit that certifies whether accounts give a true and fair view is a:",["Financial (attest) audit","Performance audit","Propriety audit","Pre-audit"],"It is also called certification audit.",""],
["F14","Under the Companies Act 2013, the statutory auditor of a government company is appointed by the:",["CAG","Board of directors","Shareholders in general meeting","Registrar of Companies"],"Section 139(5) gives this power to the CAG.",""],
["F14","The Union government's accounts were separated from audit, and moved under the Controller General of Accounts, in:",["1976","1950","1971","1991"],"Departmentalisation of Union accounts took place in 1976.",""],
["F14","Under Article 279, the CAG's certificate is final on the:",["Net proceeds of a tax","Size of the fiscal deficit","Salary of judges","Number of Finance Commission members"],"The CAG certifies the net proceeds of taxes shared with the states.",""],
["F14","The form in which the accounts of the Union and the states are kept is prescribed by the President on the advice of the CAG under:",["Article 150","Article 149","Article 151","Article 148"],"Article 150 deals with the form of accounts.",""],
["F14","The administrative expenses of the CAG's office are:",["Charged on the Consolidated Fund of India","Voted by Parliament every year","Paid from the Contingency Fund","Paid by the states in proportion"],"Article 148(6) charges them on the Consolidated Fund.",""],
["F14","The first Auditor General of India, appointed in 1860, was:",["Sir Edward Drummond","V. Narahari Rao","Sir Basil Blackett","Lord Canning"],"V. Narahari Rao was the first CAG of independent India (1948).",""],
["F14","The motto of the CAG of India, 'Lokahitartham Satyanishtha', means:",["Dedicated to truth in public interest","Truth alone triumphs","Service before self","Knowledge is power"],"It appears with the CAG's emblem.",""],
["F14","The qualifications of the members of the Finance Commission are laid down by the:",["Finance Commission (Miscellaneous Provisions) Act, 1951","DPC Act, 1971","FRBM Act, 2003","Constitution's Seventh Schedule"],"Article 280(2) lets Parliament set them; it did so in 1951.",""],
["F14","Recommending measures to help states fund their panchayats is a duty of the Finance Commission under:",["Article 280(3)(bb)","Article 280(3)(a)","Article 275","Article 243Y"],"Clause (bb) was added by the 73rd Amendment; clause (c) covers municipalities.",""],
["F14","The Finance Commission recommends the principles for grants-in-aid to states under which Article?",["Article 275","Article 282","Article 293","Article 266"],"Article 280(3)(b) refers to grants under Article 275.",""],
["F14","In the 15th Finance Commission's formula for sharing among the states, the weight of income distance was:",["45%","42.5%","15%","12.5%"],"The 16th FC cut it to 42.5%.",""],
["F14","The 16th Finance Commission gave income distance a weight of:",["42.5%","45%","17.5%","10%"],"Its other weights: population 17.5%, area 10%, forest 10%, demographic performance 10%, contribution to GDP 10%.",""],
["F14","Which new criterion did the 16th Finance Commission add to the formula for sharing among the states?",["Contribution to GDP","Tax and fiscal effort","Area","Forest cover"],"Contribution to GDP (10%) replaced tax and fiscal effort.",""],
["F14","The weight given to population (2011 Census) by the 16th Finance Commission is:",["17.5%","15%","10%","12.5%"],"Up from 15% under the 15th FC.",""],
["F14","The 16th Finance Commission submitted its report to the President on:",["17 November 2025","31 December 2023","1 February 2026","1 April 2026"],"It was set up on 31 December 2023 and its report was laid in Parliament on 1 February 2026.",""],
["F14","In the law of variable proportions, the stage in which a rational firm operates is:",["Stage II — marginal product falling but positive","Stage I — marginal product rising","Stage III — marginal product negative","The stage where total product is falling"],"In Stage I the fixed factor is underused; in Stage III extra units reduce output.",""],
["F14","When all inputs are doubled and output more than doubles, there are:",["Increasing returns to scale","Constant returns to scale","Diminishing returns to scale","Negative returns to a factor"],"Returns to scale compare output with a proportional rise in all inputs.",""],
["F14","A production possibility curve is concave to the origin because:",["Opportunity cost rises as more of one good is produced","Resources are unlimited","Prices are fixed","Technology falls"],"Resources are not equally suited to both goods.",""],
["F14","Under the Marshallian approach, a consumer buying two goods is in equilibrium when:",["MUx/Px = MUy/Py","MUx = MUy","Px = Py","Total utility is zero"],"This is the law of equi-marginal utility.",""],
["F14","Under the indifference curve approach, the consumer is in equilibrium where:",["MRS equals the price ratio Px/Py","The indifference curve cuts the budget line twice","Marginal utility is zero","The budget line is vertical"],"The budget line is tangent to the highest attainable indifference curve.",""],
["F14","In every form of market, a firm earns the most profit where:",["MR = MC","AR = AC","P = AVC","TR is at its maximum"],"Profit is maximised where marginal revenue equals marginal cost (MC cutting MR from below).",""],
["F14","The kinked demand curve, used to explain rigid prices, belongs to:",["Oligopoly","Perfect competition","Monopoly","Monopolistic competition"],"Paul Sweezy's model for a few interdependent sellers.",""],
["F14","The National e-Governance Plan, approved in 2006, began with how many Mission Mode Projects?",["27","44","12","100"],"It later grew to 31; e-Kranti (2015) lists 44.",""],
["F14","e-Kranti, approved in 2015 as part of Digital India, is also known as:",["NeGP 2.0","BharatNet","Digital India Land Records","National Knowledge Network"],"e-Kranti is the second phase of the National e-Governance Plan.",""],
["F14","An online portal for companies to file returns and get licences is an example of which e-governance model?",["G2B","G2C","G2G","G2E"],"Government to Business.",""]
);

LASTMOMENT.push(
{t:"CAG beyond Article 148", era:["fa"], rows:[["Art 149","Duties & powers (DPC Act 1971)"],["Art 150","Form of accounts"],["Art 151","Reports"],["Art 279","Net proceeds certificate"],["DPC S14","₹25 lakh + 75%"],["DPC S19","Government companies"]]},
{t:"16th Finance Commission", era:["fa"], rows:[["Share","41%"],["Income distance","42.5%"],["Population","17.5%"],["Contribution to GDP","10% (new)"],["Report","17 Nov 2025"],["Laid","1 Feb 2026"]]}
);
TILES.push(["1971","DPC Act for the CAG","fa"],["41%","States' share, 16th FC","fa"],["120","Marks for Part B","fa"],["80","Marks for Part A","fa"]);
