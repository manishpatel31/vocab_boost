/* Part 1 · Constitutional bodies — C1 the Article map, amendments and firsts; C2 Election Commission; C3 UPSC and State PSCs;
   C4 Finance Commission, CAG and GST Council; C5 Attorney General and Advocate General; C6 commissions for SCs, STs, BCs and others.
   Facts that change (who holds a post today) are kept out of the questions. */
const C1A = [
  ["Election Commission of India","Article 324","Part XV (Elections), Articles 324–329.","p"],
  ["Union Public Service Commission","Article 315","Articles 315–323 cover the UPSC and the State PSCs.","p"],
  ["Finance Commission","Article 280","Set up by the President every five years.","p"],
  ["Comptroller and Auditor General","Article 148","Articles 148–151 cover the CAG.","p"],
  ["Attorney General for India","Article 76","India's highest law officer.","p"],
  ["Advocate General of a state","Article 165","The state's highest law officer.","p"],
  ["National Commission for Scheduled Castes","Article 338","","p"],
  ["National Commission for Scheduled Tribes","Article 338A","Added by the 89th Amendment, 2003.","p"],
  ["National Commission for Backward Classes","Article 338B","Added by the 102nd Amendment, 2018.","p"],
  ["GST Council","Article 279A","Added by the 101st Amendment, 2016.","p"],
  ["Special Officer for Linguistic Minorities","Article 350B","Added by the 7th Amendment, 1956.",""],
  ["Inter-State Council","Article 263","Set up in 1990 on the Sarkaria Commission's advice.","p"],
  ["State Election Commission","Article 243K","Holds panchayat elections (municipal ones under Article 243ZA).",""],
  ["State Finance Commission","Article 243I","Reviews the finances of panchayats; set up by the Governor every five years.",""],
  ["Official Language Commission","Article 344","",""]
];
const C1B = [
  ["7th Amendment (1956)","Special Officer for Linguistic Minorities (Article 350B)","Same amendment that reorganised the states.",""],
  ["65th Amendment (1990)","A multi-member National Commission for SCs and STs","Replaced the single Special Officer (Commissioner) for SCs and STs.",""],
  ["73rd Amendment (1992)","State Election Commissions and State Finance Commissions for panchayats","Articles 243K and 243I.",""],
  ["89th Amendment (2003)","Separate commissions for SCs and for STs","NCSC (338) and NCST (338A) worked separately from 2004.","p"],
  ["101st Amendment (2016)","The GST Council (Article 279A)","GST itself began on 1 July 2017.","p"],
  ["102nd Amendment (2018)","Constitutional status for the NCBC (Article 338B)","The NCBC had been a statutory body since 1993.","p"],
  ["105th Amendment (2021)","States' power to make their own OBC lists","Restored after the Maratha quota judgment (2021).",""]
];
const C1F = [
  ["First Chief Election Commissioner","Sukumar Sen","Ran the first general elections of 1951–52.","p"],
  ["First woman Chief Election Commissioner","V. S. Ramadevi","Held the post briefly in 1990.",""],
  ["First Comptroller and Auditor General","V. Narahari Rao","Took office in 1948.","p"],
  ["First Attorney General for India","M. C. Setalvad","Also the longest-serving (1950–63).","p"],
  ["First chairperson of the NHRC","Ranganath Misra","A former Chief Justice of India.","p"],
  ["First Chief Information Commissioner","Wajahat Habibullah","From 2005.","p"],
  ["First chairperson of the Lokpal","Pinaki Chandra Ghose","Appointed in March 2019.","p"],
  ["First Central Vigilance Commissioner","Nittoor Srinivasa Rau","From 1964.",""],
  ["First chairperson of the National Commission for Women","Jayanti Patnaik","From 1992.",""],
  ["First Director of the CBI","D. P. Kohli","From 1963.",""],
  ["First Vice-Chairperson of NITI Aayog","Arvind Panagariya","From 2015; later chaired the 16th Finance Commission.","p"],
  ["First Deputy Chairman of the Planning Commission","Gulzarilal Nanda","The PM (Nehru) was the chairman.",""],
  ["First chairman of the Public Service Commission (1926)","Sir Ross Barker","Set up on the Lee Commission's advice.",""]
];

/* C2 · Election Commission */
const C2Y = [
  ["Election Commission set up (25 January)","1950","25 January is now National Voters' Day.","p"],
  ["First general elections","1951–52","Under CEC Sukumar Sen.","p"],
  ["EVMs first used (Paravur, Kerala)","1982","In a single assembly seat.",""],
  ["Commission first made multi-member (briefly)","1989","Went back to one member in 1990.",""],
  ["Commission made permanently multi-member (CEC + 2 ECs)","1993","From 1 October 1993.","p"],
  ["EVMs used in every Lok Sabha seat","2004","",""],
  ["First National Voters' Day","2011","Held every year on 25 January.","p"],
  ["NOTA added to the ballot (Supreme Court order)","2013","PUCL case, September 2013.","p"],
  ["New law on choosing the CEC and ECs","2023","The Chief Election Commissioner and Other Election Commissioners Act.",""]
];

/* C3 · UPSC and State PSCs */
const C3A = [
  ["Article 315","Public Service Commissions for the Union and the states","",""],
  ["Article 316","Appointment and term of members","",""],
  ["Article 317","Removal and suspension of members","",""],
  ["Article 318","Conditions of service and staff","",""],
  ["Article 319","Bar on holding office after ceasing to be a member","",""],
  ["Article 320","Functions of the Public Service Commissions","",""],
  ["Article 321","Power to extend their functions","",""],
  ["Article 322","Expenses of the Public Service Commissions","",""],
  ["Article 323","Reports of the Public Service Commissions","",""]
];

/* C4 · Finance Commission, CAG, GST Council */
const C4F = [
  ["1st Finance Commission (1951)","K. C. Neogy","The first one.","p"],
  ["10th Finance Commission","K. C. Pant","",""],
  ["11th Finance Commission","A. M. Khusro","",""],
  ["12th Finance Commission","C. Rangarajan","",""],
  ["13th Finance Commission","Vijay Kelkar","",""],
  ["14th Finance Commission","Y. V. Reddy","Raised the states' share to 42%.","p"],
  ["15th Finance Commission","N. K. Singh","Covered 2021–26; states' share 41%.","p"],
  ["16th Finance Commission","Arvind Panagariya","Set up on 31 December 2023; covers 2026–31.","p"]
];
const C4A = [
  ["Article 148","Appointment and conditions of the CAG","",""],
  ["Article 149","Duties and powers of the CAG","",""],
  ["Article 150","Form of the accounts of the Union and the states","",""],
  ["Article 151","The CAG's audit reports","Union reports go to the President, state reports to the Governor.","p"],
  ["Article 281","Finance Commission's recommendations laid before Parliament","",""]
];

/* C5 · law officers */
const C5L = [
  ["Highest law officer of India","Attorney General for India","","p"],
  ["Highest law officer of a state","Advocate General","","p"],
  ["Appointed by the Governor and holds office at his pleasure","Advocate General","",""],
  ["Must be qualified to be a Supreme Court judge","Attorney General for India","",""],
  ["Must be qualified to be a High Court judge","Advocate General","",""],
  ["May speak in both Houses of Parliament but cannot vote (Article 88)","Attorney General for India","","p"],
  ["May speak in the state legislature but cannot vote (Article 177)","Advocate General","",""],
  ["Second law officer of India — not a constitutional post","Solicitor General of India","","p"]
];

/* C6 · commissions for SCs, STs, BCs and others */
const C6Y = [
  ["Mandal Commission report on backward classes","1980","Set up in 1979 under B. P. Mandal.","p"],
  ["Sarkaria Commission on Centre–state relations set up","1983","Its report (1988) led to the Inter-State Council.",""],
  ["Inter-State Council set up by a Presidential order","1990","",""],
  ["Indra Sawhney (Mandal) judgment","1992","Upheld 27% OBC quota; asked for a permanent backward classes body.",""],
  ["NCBC set up by law (NCBC Act)","1993","A statutory body at first.",""],
  ["NCSC and NCST start working separately","2004","After the 89th Amendment (2003).","p"],
  ["NCBC made a constitutional body","2018","102nd Amendment — Article 338B.","p"],
  ["States get back the power to list OBCs","2021","105th Amendment.",""],
  ["Special Officer for Linguistic Minorities added","1956","7th Amendment — Article 350B.",""]
];

LESSONS.push(
{id:"C1", heat:3, title:"The Article map: which body, which Article", hi:"किस निकाय का कौन सा अनुच्छेद", blocks:[
  {k:"hot", h:"The single commonest question: <b>“Body X is under which Article?”</b> — Election Commission <b>324</b>, Finance Commission <b>280</b>, CAG <b>148</b>, Attorney General <b>76</b>, UPSC <b>315</b>, NCSC <b>338</b>, GST Council <b>279A</b>. Next come the <b>amendments</b> that created bodies and the <b>first</b> holder of each post."},
  {k:"story", h:"<p>A <b>constitutional body</b> is one the Constitution itself creates — its Article names it, and only a constitutional amendment can abolish it. The Election Commission, UPSC, Finance Commission and CAG were there from 26 January 1950. Others were added later by amendments: the <b>Special Officer for Linguistic Minorities</b> (7th, 1956), the <b>NCST</b> (89th, 2003), the <b>GST Council</b> (101st, 2016) and the <b>NCBC</b> (102nd, 2018).</p><p>A <b>statutory body</b> is made by an ordinary Act of Parliament (NHRC, CVC, Lokpal), and an <b>executive body</b> is made by a simple government order (NITI Aayog, CBI). Parts 2 and 3 deal with those. Here, learn the Article numbers as pairs — they are asked in almost every SSC shift.</p>", key:"Constitutional = made by the Constitution (an Article). Statutory = made by an Act. Executive = made by a government resolution."},
  {k:"table", title:"Body → Article", head:["Body","Article","Note"], rows: C1A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Amendments that created or changed bodies", head:["Amendment","What it did","Note"], rows: C1B.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Firsts", head:["Post","First holder","Note"], rows: C1F.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Count up the money trail: <b>76</b> the lawyer (AG) → <b>148</b> the auditor (CAG) → <b>280</b> the sharer (FC) → <b>315</b> the recruiter (UPSC) → <b>324</b> the referee (EC). Then the <b>338 family</b>: 338 SC, 338<b>A</b> ST (A for Adivasi), 338<b>B</b> BC (B for Backward)."},
  {k:"trap", h:"<b>Article 280</b> is the Finance Commission, but <b>Article 243I</b> is the <b>State</b> Finance Commission. <b>Article 324</b> is the Election Commission; the <b>State</b> Election Commission is <b>243K</b>. <b>Article 165</b> is the Advocate General (state), not the Attorney General (76)."}
], sum:["Election Commission 324; UPSC 315 (315–323); Finance Commission 280; CAG 148 (148–151).","Attorney General 76; Advocate General 165; Inter-State Council 263; GST Council 279A.","NCSC 338; NCST 338A (89th Amendment); NCBC 338B (102nd Amendment); Linguistic Minorities officer 350B (7th Amendment).","State Election Commission 243K and State Finance Commission 243I came with the 73rd Amendment.","Firsts: CEC Sukumar Sen, CAG V. Narahari Rao, AG M. C. Setalvad, NHRC Ranganath Misra, Lokpal P. C. Ghose."]},

{id:"C2", heat:3, title:"Election Commission of India", hi:"भारत निर्वाचन आयोग", blocks:[
  {k:"hot", h:"Asked again and again: <b>Article 324</b>, the <b>composition</b> (CEC + 2 Election Commissioners), <b>tenure</b> (6 years or age 65), <b>removal of the CEC</b> (like a Supreme Court judge), the <b>first CEC</b> (Sukumar Sen) and that the ECI does <b>not</b> hold panchayat or municipal elections."},
  {k:"story", h:"<p>The Election Commission was set up on <b>25 January 1950</b> — the day before the Constitution came into force — and that date is now <b>National Voters' Day</b>. Under <b>Article 324</b> it superintends, directs and controls elections to <b>Parliament</b>, the <b>state legislatures</b> and the offices of the <b>President</b> and <b>Vice-President</b>. Panchayat and municipal polls belong to the <b>State Election Commissions</b>.</p><p>For most of its life the ECI had only one member. It became a <b>three-member</b> body permanently in <b>1993</b> — the same year <b>T. N. Seshan</b> brought in voter ID cards. Since the <b>2023 Act</b>, the President appoints the CEC and ECs on the advice of a panel of the <b>Prime Minister</b>, the <b>Leader of the Opposition in the Lok Sabha</b> and a <b>Union Cabinet Minister</b> named by the PM.</p>", key:"Article 324 · CEC + 2 ECs · 6 years or 65 · CEC removed like an SC judge · set up 25 Jan 1950."},
  {k:"facts", title:"Election Commission at a glance", rows:[
    ["Article","324 (Part XV, Articles 324–329)"],
    ["Composition","Chief Election Commissioner + 2 Election Commissioners (since 1993)"],
    ["Appointed by","The President, on a selection panel's advice (PM, Leader of Opposition in Lok Sabha, a Cabinet Minister) — 2023 Act"],
    ["Term","6 years or age 65, whichever is earlier"],
    ["Removal of the CEC","Like a Supreme Court judge — special majority in both Houses"],
    ["Removal of an EC","By the President, only on the CEC's recommendation"],
    ["Decisions","By majority when members differ"],
    ["Does not conduct","Panchayat and municipal elections (State Election Commissions)"],
    ["Holder as of 2025–26 (not quizzed)","Gyanesh Kumar became CEC in February 2025 — check before the exam"]
  ]},
  {k:"table", title:"Election milestones", head:["Event","Year","Note"], rows: C2Y.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“6–65, Judge-like”</b>: CEC serves <b>6</b> years or to <b>65</b> and goes only the way a <b>Supreme Court judge</b> goes. The other ECs need the <b>CEC's</b> word to be removed."},
  {k:"trap", h:"The <b>ECI does not</b> hold <b>panchayat</b> or <b>municipal</b> elections. The <b>Rajya Sabha Deputy Chairman</b> and the <b>Lok Sabha Speaker</b> are elected inside the Houses — not by the ECI. The CEC is removed like an SC judge, but an <b>EC</b> is removed by the President on the <b>CEC's recommendation</b>."}
], sum:["Article 324: the ECI conducts elections to Parliament, state legislatures, President and Vice-President.","Set up 25 January 1950 (National Voters' Day); permanently three-member since 1993.","CEC and ECs: 6 years or age 65; CEC removed like a Supreme Court judge.","2023 Act: selection panel of PM, Leader of Opposition (Lok Sabha) and a Cabinet Minister.","First CEC Sukumar Sen; T. N. Seshan brought voter ID cards (1993); NOTA came in 2013."]},

{id:"C3", heat:2, title:"UPSC and State Public Service Commissions", hi:"संघ और राज्य लोक सेवा आयोग", blocks:[
  {k:"hot", h:"Asked: <b>Articles 315–323</b>, who <b>appoints</b> (President for UPSC, Governor for State PSC), who <b>removes</b> (the President in both cases), the <b>term</b> (6 years or 65 for UPSC, 62 for State PSC) and to whom they <b>report</b>."},
  {k:"story", h:"<p>Recruiting civil servants on merit began with the <b>Public Service Commission</b> of <b>1926</b>, set up on the <b>Lee Commission</b>'s advice with <b>Sir Ross Barker</b> as chairman. The 1935 Act made it the Federal PSC, and in 1950 it became the <b>Union Public Service Commission</b> under <b>Article 315</b>. The President appoints its chairman and members, and decides how many there are.</p><p>Every state has its own <b>State PSC</b>, whose members the <b>Governor</b> appoints — but only the <b>President</b> can remove them. Two or more states can share a <b>Joint State PSC</b>, made by a law of Parliament, with members appointed by the President. The UPSC sends its yearly report to the <b>President</b>; a State PSC to the <b>Governor</b> (Article 323).</p>", key:"UPSC: appointed by the President; State PSC: by the Governor — but both are removed only by the President."},
  {k:"table", title:"Articles 315–323", head:["Article","Deals with","Note"], rows: C3A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"UPSC vs State PSC", head:["","UPSC","State PSC"], rows:[
    ["Appointed by","The President","The Governor"],
    ["Removed by","The President","The President (not the Governor)"],
    ["Term","6 years or age 65","6 years or age 62"],
    ["Resignation goes to","The President","The Governor"],
    ["Annual report goes to","The President","The Governor"],
    ["After leaving","Chairman: no further government job","Chairman may become UPSC chairman or member"]
  ]},
  {k:"trick", h:"<b>“Governor hires, President fires”</b> — for State PSC members. And <b>65 vs 62</b>: the Union is the bigger number."},
  {k:"trap", h:"The <b>Governor appoints</b> State PSC members but <b>cannot remove</b> them — only the President can, after a <b>Supreme Court</b> inquiry for misbehaviour. A <b>Joint State PSC</b> is <b>statutory</b> (made by Parliament), not constitutional."}
], sum:["Articles 315–323 cover the UPSC and State PSCs; Article 320 lists their functions.","UPSC members: appointed by the President; 6 years or age 65.","State PSC members: appointed by the Governor; 6 years or age 62; removed only by the President.","Reports: UPSC to the President, State PSC to the Governor (Article 323).","The first Public Service Commission (1926) followed the Lee Commission; Sir Ross Barker was chairman."]},

{id:"C4", heat:3, title:"Finance Commission, CAG and GST Council", hi:"वित्त आयोग, नियंत्रक-महालेखापरीक्षक और जीएसटी परिषद", blocks:[
  {k:"hot", h:"Asked: Finance Commission <b>Article 280</b> and its <b>chairmen</b> (1st K. C. Neogy, 15th N. K. Singh, 16th Arvind Panagariya); CAG <b>Article 148</b>, term (6 years or 65), <b>removal like an SC judge</b>, reports (<b>Article 151</b>); GST Council <b>Article 279A</b>, chaired by the <b>Union Finance Minister</b>."},
  {k:"story", h:"<p>Three bodies guard India's money. The <b>Finance Commission</b> (Article 280) is set up by the <b>President</b> every five years with a <b>chairman and four members</b>. It recommends how the taxes the Centre collects are shared with the states. The 15th (N. K. Singh) gave the states <b>41%</b>; the <b>16th</b> (Arvind Panagariya, set up 31 December 2023) covers <b>2026–31</b>. Its advice is not binding; the report is laid before Parliament (Article 281).</p><p>The <b>Comptroller and Auditor General</b> (Articles 148–151) audits every rupee spent from the Consolidated Funds. Appointed by the President by warrant for <b>6 years or till 65</b>, the CAG can be removed only like a <b>Supreme Court judge</b>, and cannot take any government job afterwards. The <b>GST Council</b> (Article 279A, 101st Amendment, 2016) is chaired by the <b>Union Finance Minister</b>, with every state's finance minister as a member.</p>", key:"FC 280 (chairman + 4, every 5 years) · CAG 148 (6 yrs/65, removed like an SC judge, reports under 151) · GST Council 279A (Union FM chairs)."},
  {k:"facts", title:"The three money bodies", rows:[
    ["Finance Commission","Article 280 · chairman + 4 members · set up by the President every 5 years · advisory"],
    ["CAG","Articles 148–151 · single person · 6 years or 65 · salary equal to a Supreme Court judge"],
    ["CAG reports","Union accounts → President → Parliament; state accounts → Governor → state legislature"],
    ["CAG and Parliament","Called the 'friend, philosopher and guide' of the Public Accounts Committee"],
    ["GST Council","Article 279A · chaired by the Union Finance Minister · state finance ministers are members"],
    ["GST Council voting","Decisions need 3/4 of weighted votes — Centre 1/3, all states together 2/3"],
    ["Holders as of 2025–26 (not quizzed)","CAG K. Sanjay Murthy (from November 2024) — check before the exam"]
  ]},
  {k:"table", title:"Finance Commission chairmen", head:["Commission","Chairman","Note"], rows: C4F.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"CAG and Finance Commission Articles", head:["Article","Deals with","Note"], rows: C4A.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“2-8-0 = share the dough”</b> — Article 280 shares tax money. <b>“1-4-8 = check the ledger”</b> — Article 148 audits it. <b>“Neogy began, Singh was 15, Panagariya 16.”</b>"},
  {k:"trap", h:"The CAG is removed like a <b>Supreme Court judge</b> but <b>appointed</b> by the President alone (no panel). The GST Council is chaired by the <b>Union Finance Minister</b>, not the PM. The <b>State</b> Finance Commission (243I) is a different body, set up by the <b>Governor</b>."}
], sum:["Finance Commission: Article 280, chairman + 4 members, set up by the President every five years.","First FC K. C. Neogy (1951); 15th N. K. Singh (41% to states); 16th Arvind Panagariya (2026–31).","CAG: Article 148; 6 years or 65; removed like a Supreme Court judge; no government job afterwards.","CAG reports (Article 151) go to the President (Union) or the Governor (state).","GST Council: Article 279A (101st Amendment, 2016), chaired by the Union Finance Minister."]},

{id:"C5", heat:2, title:"Attorney General and Advocate General", hi:"महान्यायवादी और महाधिवक्ता", blocks:[
  {k:"hot", h:"Asked: <b>Article 76</b> (Attorney General) and <b>Article 165</b> (Advocate General), who <b>appoints</b> them, their <b>qualification</b> (fit to be an SC / HC judge), <b>no fixed term</b>, the right to <b>speak but not vote</b> (Articles 88 and 177) and the <b>first AG</b> (M. C. Setalvad)."},
  {k:"story", h:"<p>The <b>Attorney General for India</b> (Article 76) is the Union government's chief lawyer. The <b>President</b> appoints a person <b>qualified to be a Supreme Court judge</b>, and the AG holds office <b>during the pleasure of the President</b> — the Constitution fixes no term. The AG can <b>speak</b> in both Houses of Parliament and their committees but <b>cannot vote</b> (Article 88), and has the right of audience in every court in India. The first AG was <b>M. C. Setalvad</b>.</p><p>Each state has an <b>Advocate General</b> (Article 165), appointed by the <b>Governor</b> from people <b>qualified to be High Court judges</b>, holding office at the Governor's pleasure. The AG is helped by the <b>Solicitor General</b> and Additional Solicitors General, but those posts are <b>not</b> in the Constitution.</p>", key:"AG: Article 76, President, SC-judge qualification, no fixed term, speaks in Parliament (88). Advocate General: Article 165, Governor, HC-judge qualification (177)."},
  {k:"table", title:"Attorney General vs Advocate General", head:["","Attorney General","Advocate General"], rows:[
    ["Article","76","165"],
    ["Appointed by","The President","The Governor"],
    ["Qualification","Fit to be a Supreme Court judge","Fit to be a High Court judge"],
    ["Term","Not fixed — at the President's pleasure","Not fixed — at the Governor's pleasure"],
    ["Speaks (no vote) in","Parliament — Article 88","State legislature — Article 177"],
    ["Pay","Decided by the President","Decided by the Governor"]
  ]},
  {k:"table", title:"Which law officer?", head:["Clue","Post","Note"], rows: C5L.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“76 trombones lead the nation”</b> — the AG leads India's legal band; <b>“165”</b> is a smaller state band. <b>A</b>ttorney = <b>A</b>ll-India; <b>Ad</b>vocate = <b>Ad</b>ministration of a state."},
  {k:"trap", h:"The AG is <b>not</b> a member of Parliament or the Cabinet, yet may <b>speak</b> in Parliament. The AG is <b>not</b> barred from private practice (only from advising against the Government of India). The <b>Solicitor General</b> is <b>not</b> a constitutional post."}
], sum:["Attorney General: Article 76, appointed by the President, qualified to be a Supreme Court judge.","No fixed term — holds office during the President's pleasure.","May speak in Parliament but cannot vote (Article 88).","Advocate General: Article 165, appointed by the Governor, qualified to be a High Court judge (Article 177 for the legislature).","First AG: M. C. Setalvad; the Solicitor General is not a constitutional post."]},

{id:"C6", heat:2, title:"Commissions for SCs, STs, BCs, linguistic minorities and the Inter-State Council", hi:"अनुसूचित जाति, जनजाति, पिछड़ा वर्ग आयोग और अंतर-राज्य परिषद", blocks:[
  {k:"hot", h:"Asked: <b>338 / 338A / 338B</b>, the <b>89th</b> (NCSC–NCST split) and <b>102nd</b> (NCBC) Amendments, the <b>Special Officer for Linguistic Minorities</b> (350B), and the <b>Inter-State Council</b> (263, chaired by the PM, set up in 1990)."},
  {k:"story", h:"<p>At first a single <b>Special Officer</b> (Commissioner) watched over the safeguards for Scheduled Castes and Tribes under Article 338. The <b>65th Amendment (1990)</b> made it a multi-member commission, and the <b>89th Amendment (2003)</b> split it: the <b>NCSC</b> (338) and the <b>NCST</b> (338A) have worked separately since <b>2004</b>. Each has a chairperson, a vice-chairperson and three members appointed by the <b>President</b> by warrant, and each reports to the President.</p><p>The <b>NCBC</b> began as a statutory body in <b>1993</b> after the Indra Sawhney judgment and became constitutional through the <b>102nd Amendment (2018)</b> — Article 338B. The <b>Special Officer for Linguistic Minorities</b> (350B, 7th Amendment, 1956) is appointed by the President and reports to him. The <b>Inter-State Council</b> (263) was set up by a Presidential order in <b>1990</b> on the Sarkaria Commission's advice; the <b>Prime Minister</b> chairs it.</p>", key:"338 SC · 338A ST (89th, 2003) · 338B BC (102nd, 2018) · 350B linguistic minorities (7th, 1956) · 263 Inter-State Council (1990, PM chairs)."},
  {k:"table", title:"Milestones", head:["Event","Year","Note"], rows: C6Y.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Three commissions side by side", head:["","NCSC","NCST","NCBC"], rows:[
    ["Article","338","338A","338B"],
    ["Came from","Original Constitution (as a Special Officer)","89th Amendment, 2003","102nd Amendment, 2018"],
    ["Members","Chairperson, vice-chairperson, 3 members","Chairperson, vice-chairperson, 3 members","Chairperson, vice-chairperson, 3 members"],
    ["Appointed by","The President","The President","The President"],
    ["Reports to","The President","The President","The President"]
  ]},
  {k:"trick", h:"<b>“A for Adivasi, B for Backward”</b> — 338A is the ST commission, 338B the BC commission. And <b>89 → split, 102 → BC</b>."},
  {k:"trap", h:"The <b>NCBC</b> was <b>statutory</b> (1993) before it became <b>constitutional</b> (2018) — both answers can appear. The <b>National Commission for Minorities</b> is <b>statutory</b> (1992 Act), but the <b>Special Officer for Linguistic Minorities</b> is <b>constitutional</b> (350B). The Inter-State Council is chaired by the <b>PM</b>; the Zonal Councils by the <b>Home Minister</b>."}
], sum:["NCSC (Article 338) and NCST (338A) separated by the 89th Amendment, working apart since 2004.","NCBC: statutory in 1993, constitutional by the 102nd Amendment (2018), Article 338B.","All three have a chairperson, vice-chairperson and three members, appointed by the President.","Special Officer for Linguistic Minorities: Article 350B (7th Amendment, 1956), reports to the President.","Inter-State Council: Article 263, set up in 1990 on the Sarkaria Commission's advice, chaired by the PM."]}
);

pairQs("C1", C1A, { q: t => `The ${t} is provided for in:`, rq: a => `Which body is provided for in ${a}?` });
pairQs("C1", C1B, { q: t => `The ${t} of the Constitution is linked to:`, rq: a => `Which amendment brought this: ${a}?` });
pairQs("C1", C1F, { q: t => `Who was the ${t[0].toLowerCase() + t.slice(1)}?`, rq: a => `${a} is remembered as the:` });
pairQs("C2", C2Y, { q: t => `${t} — in which year?`, rq: a => `Which election milestone came in ${a}?` });
pairQs("C3", C3A, { q: t => `${t} of the Constitution deals with:`, rq: a => `Which Article deals with this: ${a}?` });
pairQs("C4", C4F, { q: t => `Who chaired the ${t}?`, rq: a => `${a} chaired the:` });
pairQs("C4", C4A, { q: t => `Which of these is covered by ${t}?`, rq: a => `Which Article covers this: ${a}?` });
pairQs("C5", C5L, { q: t => `Which post fits this clue: “${t}”?`, extra: ["Chief Justice of India","Union Law Minister"] });
pairQs("C6", C6Y, { q: t => `${t} — in which year?`, rq: a => `Which of these happened in ${a}?` });

QB.push(
["C1","A body created by an Article of the Constitution is called a:",["Constitutional body","Statutory body","Executive body","Quasi-judicial body"],"Statutory bodies come from Acts of Parliament; executive bodies from government resolutions.","p"],
["C1","Articles 148 to 151 of the Constitution deal with the:",["Comptroller and Auditor General","Finance Commission","Election Commission","Attorney General"],"148 appointment, 149 duties, 150 accounts, 151 reports.","p"],
["C1","Which amendment added Article 338A for the Scheduled Tribes commission?",["89th Amendment","86th Amendment","73rd Amendment","102nd Amendment"],"Passed in 2003.","p"],
["C1","Which of these is NOT a constitutional body?",["NITI Aayog","Finance Commission","Election Commission","GST Council"],"NITI Aayog was made by a Cabinet resolution in 2015.","p"],
["C2","Which Article mandates the Election Commission to conduct elections to Parliament and the State Legislatures?",["324","280","356","315"],"Article 324 vests superintendence, direction and control of elections in the ECI.","p","","","SSC CHSL · 16 Oct 2020 (Shift 1)"],
["C2","The Election Commission of India is NOT concerned with which of these elections?",["Panchayats","President","Parliament","State Legislatures"],"Panchayat and municipal polls are held by State Election Commissions.","p","","","SSC CHSL · 13 Mar 2018 (Shift 3)"],
["C2","Elections to the office of the Vice-President are conducted by the:",["Election Commission of India","Lok Sabha Secretariat","Rajya Sabha Chairman","Ministry of Law and Justice"],"Article 324 covers the President's and Vice-President's elections too.","p"],
["C2","The term of the Chief Election Commissioner is:",["6 years or until age 65","5 years or until age 65","6 years or until age 62","5 years or until age 70"],"The same as the CAG and UPSC members.","p"],
["C2","An Election Commissioner (other than the CEC) can be removed by the President only on the recommendation of the:",["Chief Election Commissioner","Prime Minister","Chief Justice of India","Lok Sabha Speaker"],"The CEC himself is removed like a Supreme Court judge.",""],
["C2","Under the 2023 Act, the panel that recommends the CEC and ECs is made of:",["PM, Leader of Opposition in Lok Sabha and a Cabinet Minister","PM, Chief Justice of India and Leader of Opposition","President, Vice-President and PM","PM, Lok Sabha Speaker and Home Minister"],"The Cabinet Minister is named by the PM.",""],
["C2","National Voters' Day is observed on:",["25 January","26 November","24 January","15 March"],"The ECI was set up on 25 January 1950.","p"],
["C2","Which Chief Election Commissioner introduced voter ID cards (EPIC)?",["T. N. Seshan","Sukumar Sen","M. S. Gill","J. M. Lyngdoh"],"In 1993.","p"],
["C3","Members of a State Public Service Commission are appointed by the:",["Governor","President","Chief Minister","Chief Justice of the High Court"],"But only the President can remove them.","p"],
["C3","Members of a State Public Service Commission can be removed by the:",["President","Governor","State legislature","Chief Minister"],"After a Supreme Court inquiry for misbehaviour.","p"],
["C3","A member of a State PSC holds office for 6 years or until the age of:",["62","65","60","70"],"UPSC members: until 65.","p"],
["C3","The UPSC presents its annual report to the:",["President","Prime Minister","Parliament directly","Union Home Minister"],"The President lays it before Parliament.",""],
["C3","A Joint State Public Service Commission is created by:",["A law of Parliament","The President's order","An amendment to the Constitution","The Governors of the states"],"It is a statutory, not a constitutional, body.",""],
["C3","The first Public Service Commission of India was set up in 1926 on the advice of the:",["Lee Commission","Simon Commission","Sarkaria Commission","Hunter Commission"],"Sir Ross Barker was its chairman.",""],
["C4","The Comptroller and Auditor General of India can be removed by the President on the same grounds and in the same manner as a:",["Judge of the Supreme Court","Judge of a High Court","Chief Election Commissioner's deputy","Union Cabinet Minister"],"Proved misbehaviour or incapacity, by special majority in both Houses.","p","","","SSC CGL · 12 Aug 2017 (Shift 2)"],
["C4","Which Article mentions the Comptroller and Auditor General of India?",["Article 148","Article 76","Article 280","Article 324"],"Articles 148–151 deal with the CAG.","p","","","SSC CGL · 24 Sep 2024 (Shift 2)"],
["C4","The Finance Commission is established under which Article of the Constitution?",["Article 280","Article 148","Article 263","Article 312"],"Set up by the President every five years.","p","","","SSC CGL · 22 Sep 2025 (Shift 1)"],
["C4","Which of the following is constituted under Article 280 of the Constitution?",["Finance Commission","Election Commission","Inter-State Council","GST Council"],"A chairman and four members.","p","","","SSC CGL Tier-II · 2 Mar 2023"],
["C4","The Finance Commission consists of a chairman and how many other members?",["Four","Three","Five","Six"],"Qualifications are set by the Finance Commission (Miscellaneous Provisions) Act, 1951.","p"],
["C4","The CAG's audit reports on the accounts of the Union are submitted to the:",["President","Prime Minister","Lok Sabha Speaker","Union Finance Minister"],"Article 151; the President lays them before Parliament.","p"],
["C4","The CAG is called the 'friend, philosopher and guide' of which committee?",["Public Accounts Committee","Estimates Committee","Business Advisory Committee","Committee on Public Undertakings"],"The PAC examines the CAG's reports.","p"],
["C4","Which of these is NOT a member of the GST Council?",["RBI Governor","Union Finance Minister","Union Minister of State for Finance","A state finance minister"],"Article 279A: the Union FM (chair), the MoS for Finance and each state's finance minister.","p"],
["C4","In the GST Council, the Centre's votes carry what share of the total weight?",["One-third","Half","Two-thirds","One-fourth"],"All the states together carry two-thirds.",""],
["C5","Article 76 of the Constitution of India deals with the office of the:",["Attorney General of India","Comptroller and Auditor General","Advocate General","Solicitor General"],"The highest law officer of the Union.","p","","","SSC CPO · 11 Nov 2022 (Shift 1)"],
["C5","Which Article of the Indian Constitution deals with the appointment and duties of the Attorney General of India?",["Article 76","Article 74","Article 165","Article 148"],"Article 165 is the state Advocate General.","p","","","SSC MTS · 28 Oct 2024 (Shift 2)"],
["C5","Which statement about the Attorney General of India is NOT correct?",["The Attorney General is appointed by the Prime Minister","The Attorney General holds office during the President's pleasure","The Attorney General must be qualified to be a Supreme Court judge","The Attorney General may speak in Parliament"],"The President appoints the AG.","p","","","SSC Selection Post 2024 · 20 Jun 2024 (Shift 4)"],
["C5","The Advocate General of a state is appointed under which Article?",["Article 165","Article 76","Article 163","Article 177"],"By the Governor.","p"],
["C5","The Attorney General may take private cases, but must not advise or appear against the:",["Government of India","Private companies","Foreign citizens","Trade unions"],"The AG is not a full-time government servant.",""],
["C5","The term of office of the Attorney General is:",["Not fixed by the Constitution","5 years","6 years or age 65","Until age 62"],"The AG holds office during the President's pleasure.","p"],
["C6","The National Commission for Backward Classes got constitutional status by the:",["102nd Amendment","101st Amendment","103rd Amendment","89th Amendment"],"Article 338B, 2018.","p"],
["C6","Article 350B provides for a:",["Special Officer for Linguistic Minorities","National Commission for Minorities","Official Language Commission","Commissioner for Scheduled Tribes"],"Added by the 7th Amendment, 1956.",""],
["C6","Under Article 263, who can set up an Inter-State Council?",["President","Parliament","Prime Minister","Chief Justice of India"],"Done by a Presidential order in 1990; the PM chairs it.","p"],
["C6","The Inter-State Council was set up on the recommendation of the:",["Sarkaria Commission","Punchhi Commission","Rajamannar Committee","Mandal Commission"],"The Sarkaria Commission reported in 1988.","p"],
["C6","The chairperson and members of the National Commission for Scheduled Castes are appointed by the:",["President","Prime Minister","Parliament","Union Minister for Social Justice"],"By warrant under his hand and seal.",""],
["C6","Which of these was a statutory body before it became a constitutional body?",["National Commission for Backward Classes","Election Commission","Union Public Service Commission","Finance Commission"],"NCBC Act 1993 → 102nd Amendment 2018.",""]
);

LASTMOMENT.push(
{t:"Body → Article", era:["cb"], rows:[["Election Commission","324"],["UPSC","315"],["Finance Commission","280"],["CAG","148"],["Attorney General","76"],["Advocate General","165"],["NCSC / NCST / NCBC","338 / 338A / 338B"],["GST Council","279A"],["Inter-State Council","263"],["Linguistic minorities officer","350B"]]},
{t:"Firsts", era:["cb"], rows:[["CEC","Sukumar Sen"],["CAG","V. Narahari Rao"],["Attorney General","M. C. Setalvad"],["Finance Commission","K. C. Neogy"],["NHRC","Ranganath Misra"],["CIC","Wajahat Habibullah"],["Lokpal","P. C. Ghose"],["CVC","N. Srinivasa Rau"]]}
);
TILES.push(["324","Election Commission","cb"],["280","Finance Commission","cb"],["148","CAG","cb"],["76","Attorney General","cb"],["1993","ECI made three-member","cb"],["2018","NCBC constitutional","cb"]);
