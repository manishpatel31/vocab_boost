/* Science & Technology in India — science awards and scientists of today (ST9), everyday technology terms (ST10) and mixed revision (ST11).
   Checked October 2026: Rashtriya Vigyan Puraskar 2024 and 2025 lists; the 2026 list was not yet out. 2026 science Nobels had no Indian-origin winner. */
const ST9A = [
  ["Vigyan Ratna","Lifetime achievement in science","Up to 3 a year; 2024 — G. Padmanabhan; 2025 — Jayant Narlikar (posthumous).",""],
  ["Vigyan Shri","Distinguished work by a scientist","Up to 25 a year.",""],
  ["Vigyan Yuva–Shanti Swarup Bhatnagar","Young scientists up to 45 years of age","Up to 25 a year; carries on the name of the old Bhatnagar Prize.",""],
  ["Vigyan Team","Teams of three or more scientists","Up to 3 a year; 2024 — Team Chandrayaan-3; 2025 — CSIR Aroma Mission.",""]
];
const ST9B = [
  ["Infosys Prize","Infosys Science Foundation","Six fields; USD 100,000 each; for researchers under 40 since 2024.",""],
  ["Kalinga Prize","UNESCO","For making science popular; set up in 1952 with money from Biju Patnaik.",""],
  ["SASTRA Ramanujan Prize","SASTRA University, Thanjavur","For mathematicians aged 32 or under — the age at which Ramanujan died.",""],
  ["Fields Medal","International Mathematical Union","Indian-origin winners: Manjul Bhargava (2014) and Akshay Venkatesh (2018).",""],
  ["Abel Prize","Norwegian Academy of Science and Letters","S. R. Srinivasa Varadhan (2007) for probability theory.",""],
  ["Turing Award","Association for Computing Machinery (ACM)","Raj Reddy (1994) — the first winner of Asian origin; for artificial intelligence.",""]
];
const ST9C = [
  ["G. Padmanabhan","Biochemistry","First Vigyan Ratna (2024); known for work on the malaria parasite; former director of IISc."],
  ["Jayant Narlikar","Astrophysics","Hoyle–Narlikar theory of gravity; founded IUCAA, Pune; died May 2025; Vigyan Ratna 2025."],
  ["K. Kasturirangan","Space science","ISRO chairman 1994–2003; headed the committee that drafted the National Education Policy 2020; died April 2025."],
  ["R. Chidambaram","Nuclear physics","Key figure in the 1974 and 1998 tests; Principal Scientific Adviser 2001–2018; died January 2025."],
  ["M. R. Srinivasan","Nuclear engineering","Built India's nuclear power plants; former chairman of the Atomic Energy Commission; died May 2025."],
  ["N. Kalaiselvi","Electrochemistry","First woman Director-General of CSIR (2022); works on lithium-ion batteries."],
  ["Gagandeep Kang","Vaccines and gut infections","Helped develop Rotavac; first Indian woman elected a Fellow of the Royal Society (2019)."],
  ["C. N. R. Rao","Solid-state chemistry","Bharat Ratna 2014; a world leader in the chemistry of materials."]
];
const ST10A = [
  ["LED","Light-Emitting Diode","A semiconductor that glows when current flows; the UJALA scheme (2015) spread LED bulbs.",""],
  ["OLED","Organic Light-Emitting Diode","Each pixel makes its own light — thin, bendable screens.",""],
  ["LASER","Light Amplification by Stimulated Emission of Radiation","A narrow, single-colour, powerful beam of light.",""],
  ["LiDAR","Light Detection and Ranging","Measures distance with laser pulses — 3D maps, self-driving cars, Moon landers.",""],
  ["RADAR","Radio Detection and Ranging","Uses radio waves to find aircraft, ships and storms.",""],
  ["SONAR","Sound Navigation and Ranging","Uses sound waves under water.",""],
  ["GPS","Global Positioning System","The United States' satellite navigation system.",""],
  ["NavIC","Navigation with Indian Constellation","India's own regional navigation satellites (IRNSS); see the Space app.",""],
  ["GAGAN","GPS Aided GEO Augmented Navigation","Makes GPS accurate enough for aircraft landings — ISRO with the Airports Authority.",""],
  ["RFID","Radio-Frequency Identification","Tags read by radio waves — FASTag on cars.",""],
  ["NFC","Near-Field Communication","Tap-to-pay over a few centimetres.",""],
  ["Li-Fi","Light Fidelity","Sends data with flickering LED light instead of radio waves.",""],
  ["IoT","Internet of Things","Everyday devices with sensors linked to the internet.",""],
  ["UAV","Unmanned Aerial Vehicle","A drone — an aircraft with no pilot on board.",""],
  ["CCUS","Carbon Capture, Utilisation and Storage","Catching carbon dioxide from chimneys to use or bury it.",""],
  ["SAF","Sustainable Aviation Fuel","Jet fuel made from waste oils, crop waste or other non-fossil sources.",""],
  ["CBG","Compressed Biogas","Biogas from waste, cleaned and compressed like CNG; the SATAT scheme (2018).",""]
];
const ST10B = [
  ["Nanotechnology","Working with matter at a scale of 1 to 100 nanometres","One nanometre is a billionth of a metre; DST's Nano Mission began in 2007."],
  ["3D printing","Building an object layer by layer from a digital design","Also called additive manufacturing; India's first 3D-printed post office opened in Bengaluru in 2023."],
  ["Graphene","A sheet of carbon just one atom thick","Very strong and a very good conductor of heat and electricity."],
  ["Semiconductor","A material whose conductivity lies between a conductor's and an insulator's","Silicon chips are made from it."],
  ["Superconductor","A material with zero electrical resistance when cooled enough","Used in MRI magnets and particle accelerators."],
  ["Fuel cell","A device that turns hydrogen and oxygen into electricity, leaving only water","Powers hydrogen buses and cars."],
  ["Blockchain","A shared digital ledger that is very hard to alter","Copies are kept on many computers at once."],
  ["Deepfake","AI-made fake video or audio that looks real","Covered by the IT Rules amendment of 2026."],
  ["Qubit","The unit of a quantum computer, which can be 0 and 1 at the same time","The National Quantum Mission aims for 50–1,000 of them."],
  ["Green hydrogen","Hydrogen made by splitting water with renewable electricity","Grey hydrogen is made from natural gas without capturing the CO₂."],
  ["Ethanol blending","Mixing ethanol from sugarcane or grain into petrol","E20 means 20% ethanol in petrol."],
  ["Digital twin","A live virtual copy of a real machine, building or city","Kept up to date with data from sensors."]
];

LESSONS.push(
{id:"ST9", heat:1, title:"Science awards and scientists of today", hi:"विज्ञान पुरस्कार और आज के वैज्ञानिक", blocks:[
  {k:"hot", h:"Asked: the four <b>Rashtriya Vigyan Puraskar</b> awards and their limits, the first <b>Vigyan Ratna</b> (G. Padmanabhan, 2024) and the 2025 one (Jayant Narlikar), the <b>team awards</b>, the <b>Infosys Prize</b>, the <b>Kalinga Prize</b>, and Indian-origin winners of the <b>Fields, Abel and Turing</b> awards."},
  {k:"story", h:"<p>For decades the prize every young Indian scientist wanted was the <b>Shanti Swarup Bhatnagar Prize</b>, given by CSIR since <b>1958</b>. In 2023 the government cut down hundreds of science awards and put one national award in their place: the <b>Rashtriya Vigyan Puraskar</b>. It has four parts, like the Padma awards: <b>Vigyan Ratna</b> for a lifetime, <b>Vigyan Shri</b> for distinguished work, <b>Vigyan Yuva–Shanti Swarup Bhatnagar</b> for scientists up to 45, and <b>Vigyan Team</b> for groups.</p><p>The first awards were presented by President Droupadi Murmu on <b>22 August 2024</b> — 33 in all, with the first Vigyan Ratna to the biochemist <b>G. Padmanabhan</b> and the team award to <b>Chandrayaan-3</b>. In 2025 the Vigyan Ratna went, after his death, to the astrophysicist <b>Jayant Narlikar</b>, and the team award to CSIR's <b>Aroma Mission</b>. The same year India lost several giants: Narlikar, <b>K. Kasturirangan</b>, <b>R. Chidambaram</b> and <b>M. R. Srinivasan</b>.</p>", key:"RVP (from 2023, first given 2024): Vigyan Ratna, Shri, Yuva–SSB (up to 45), Team. Ratna 2024 Padmanabhan; 2025 Narlikar."},
  {k:"table", title:"Rashtriya Vigyan Puraskar: the four awards", head:["Award","For","Remember"], rows: ST9A.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"About the Rashtriya Vigyan Puraskar", rows:[
    ["Instituted","2023, when the government merged and cut down hundreds of science awards; first presented in 2024"],
    ["First ceremony","22 August 2024 at Rashtrapati Bhavan — 33 awards, presented by President Droupadi Murmu"],
    ["What winners get","A medal and a certificate (sanad)"],
    ["Fields","13 domains, from physics, chemistry and mathematics to atomic energy and space"],
    ["2025 list","Announced in October 2025: Vigyan Ratna Jayant Narlikar (posthumous), 8 Vigyan Shri, 14 Vigyan Yuva, team award to CSIR Aroma Mission"],
    ["Bhatnagar Prize","Given by CSIR from 1958 to scientists under 45; its name now lives on in Vigyan Yuva"]]},
  {k:"table", title:"Other science prizes", head:["Prize","Given by","Remember"], rows: ST9B.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Scientists of today and the recent past", head:["Scientist","Field","Remember"], rows: ST9C},
  {k:"facts", title:"Indian Nobel laureates in science", rows:[
    ["C. V. Raman","Physics 1930 — the only one who worked in India"],
    ["Har Gobind Khorana","Medicine 1968 (Indian-born, US citizen)"],
    ["Subrahmanyan Chandrasekhar","Physics 1983 (Indian-born, US citizen)"],
    ["Venkatraman Ramakrishnan","Chemistry 2009 — the most recent Indian-origin science laureate (as of the 2026 prizes)"]]},
  {k:"trick", h:"The four RVPs climb like a ladder — <b>Ratna (a life), Shri (a career), Yuva (under 45), Team (three or more)</b>. Limits: <b>3–25–25–3</b>."},
  {k:"trap", h:"The <b>Bhatnagar Prize</b> was not abolished in name — it became <b>Vigyan Yuva–Shanti Swarup Bhatnagar</b>. The <b>Kalinga Prize</b> is given by <b>UNESCO</b> for popularising science, not by Odisha. <b>Khorana</b> won for <b>Medicine</b>, not Chemistry; <b>Ramakrishnan</b> for Chemistry."},
  {k:"link", h:"Raman, the Boses, Bhabha, Sarabhai, Kalam, Khorana and the other classic scientists are in <a href=\"study-inventions.html?lesson=I9\">Inventions &amp; Discoveries</a> (I9). The Nobel Prize itself, with every Indian laureate, is in <a href=\"study-awards.html?lesson=A6\">Awards &amp; Honours</a> (A6); this year's prize winners month by month in <a href=\"study-current-affairs.html\">Current Affairs 2026</a>."}
], sum:["Rashtriya Vigyan Puraskar (instituted 2023, first given 22 August 2024): Vigyan Ratna, Vigyan Shri, Vigyan Yuva–SSB (up to 45), Vigyan Team.","Vigyan Ratna: G. Padmanabhan (2024), Jayant Narlikar (2025, posthumous). Team: Chandrayaan-3 (2024), CSIR Aroma Mission (2025).","The Bhatnagar Prize (CSIR, 1958) lives on as Vigyan Yuva–SSB.","Infosys Prize: six fields, USD 100,000, under 40. Kalinga Prize: UNESCO, 1952 (Biju Patnaik).","Fields: Manjul Bhargava (2014), Akshay Venkatesh (2018); Abel: S. R. S. Varadhan (2007); Turing: Raj Reddy (1994).","Died in 2025: Jayant Narlikar, K. Kasturirangan, R. Chidambaram, M. R. Srinivasan. N. Kalaiselvi is CSIR's first woman DG."]},

{id:"ST10", heat:2, title:"Everyday technology terms", hi:"रोज़मर्रा की प्रौद्योगिकी के शब्द", blocks:[
  {k:"hot", h:"Asked: full forms (<b>LED, LASER, LiDAR, RADAR, SONAR, GPS, NavIC, RFID</b>), one-line meanings (<b>nanotechnology, 3D printing, graphene, qubit</b>), <b>5G</b> (October 2022) and the <b>Bharat 6G Vision</b> (2023), and <b>biofuels</b> — E20, 2G ethanol, SAF."},
  {k:"story", h:"<p>Most technology words are short forms that tell you how the thing works. <b>RADAR</b> finds things with <b>radio</b> waves, <b>SONAR</b> with <b>sound</b> under water and <b>LiDAR</b> with <b>light</b> from a laser. <b>GPS</b> is America's navigation system; <b>NavIC</b> is India's own, covering India and about 1,500 km around it. An <b>LED</b> is a tiny semiconductor that glows; India's UJALA scheme put crores of LED bulbs in homes.</p><p>Mobile networks came in generations. India switched on <b>5G</b> on <b>1 October 2022</b>, one of the fastest roll-outs anywhere, and in March 2023 released the <b>Bharat 6G Vision</b>. In September 2025 BSNL launched a 4G network built entirely on Indian equipment. On the road, petrol now carries <b>20% ethanol (E20)</b> — a target India reached in 2025, five years before the original 2030 date.</p>", key:"RADAR radio, SONAR sound, LiDAR light · 5G 1 October 2022 · Bharat 6G Vision March 2023 · E20 reached in 2025."},
  {k:"table", title:"Full forms", head:["Short form","Full form","Remember"], rows: ST10A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Terms and their meaning", head:["Term","Meaning","Remember"], rows: ST10B},
  {k:"facts", title:"Mobile networks", rows:[
    ["5G in India","Launched 1 October 2022 at the India Mobile Congress, New Delhi"],
    ["5G test bed","Built by eight institutes led by IIT Madras"],
    ["Home-grown 4G","BSNL's 4G network on Indian equipment (C-DOT core, Tejas radios, TCS integration) launched at Jharsuguda, Odisha, on 27 September 2025"],
    ["Fifth country","With it India joined Denmark, Sweden, South Korea and China as makers of their own telecom stack (government's claim)"],
    ["Bharat 6G Vision","Released in March 2023 — aims to make India a front-line developer of 6G by 2030"],
    ["Bharat 6G Alliance","Formed in July 2023 by industry, academia and government to build 6G technology and patents"]]},
  {k:"facts", title:"Biofuels", rows:[
    ["Generations","1G — from sugarcane and grain; 2G — from crop waste and other non-food matter; 3G — from algae"],
    ["National Policy on Biofuels","2018; amended in 2022 to bring the E20 target forward from 2030 to 2025-26"],
    ["E20","20% ethanol in petrol — reached across India in 2025; higher blends are being studied (as of 2026)"],
    ["Panipat 2G ethanol plant","Indian Oil's plant that makes ethanol from rice straw; dedicated on 10 August 2022"],
    ["World Biofuel Day","10 August — Rudolf Diesel ran his engine on peanut oil in 1893"],
    ["Global Biofuels Alliance","Launched at the G20 summit in New Delhi, September 2023"],
    ["SAF","Indicative targets of 1% in international flights in 2027 and 2% in 2028"]]},
  {k:"trick", h:"<b>Ra</b>dio–<b>So</b>und–<b>Li</b>ght: <b>RA</b>DAR, <b>SO</b>NAR, <b>Li</b>DAR — the first letters tell you the wave. <b>Li-Fi</b> is Wi-Fi done with light."},
  {k:"trap", h:"<b>NavIC</b> is <b>regional</b>, not global like GPS. <b>GAGAN</b> is not a separate system — it corrects GPS for aircraft. <b>2G ethanol</b> means second-generation (crop waste), nothing to do with 2G phones. <b>Green</b> hydrogen uses renewable power; <b>grey</b> comes from natural gas."},
  {k:"link", h:"AI, machine learning, cloud computing (SaaS, PaaS, IaaS), blockchain, AR and VR are explained in <a href=\"study-computer-internet.html?lesson=C17\">Computer Knowledge</a> (C17). NavIC, GAGAN and how satellites navigate are in <a href=\"study-space.html?lesson=L8\">Space &amp; ISRO</a> (L8); semiconductors and the photoelectric effect in <a href=\"study-physics.html\">Physics</a>; fuels and combustion in <a href=\"study-chemistry.html?lesson=K14\">Chemistry</a> (K14)."}
], sum:["LED light-emitting diode; LASER light amplification by stimulated emission of radiation; LiDAR light detection and ranging.","RADAR uses radio waves, SONAR sound, LiDAR laser light. GPS is American; NavIC Indian and regional; GAGAN corrects GPS for aircraft.","Nanotechnology works at 1–100 nanometres; 3D printing builds layer by layer; graphene is one-atom-thick carbon; a qubit can be 0 and 1 at once.","5G launched 1 October 2022; Bharat 6G Vision March 2023; BSNL's home-grown 4G launched September 2025.","E20 (20% ethanol) reached in 2025; National Policy on Biofuels 2018 (amended 2022); Panipat 2G ethanol from rice straw (2022).","World Biofuel Day is 10 August; the Global Biofuels Alliance began at the G20 in New Delhi (2023)."]},

{id:"ST11", heat:2, title:"Mixed revision: science and technology in India", hi:"मिश्रित दोहराव: भारत में विज्ञान एवं प्रौद्योगिकी", blocks:[
  {k:"hot", h:"Exam papers mix these topics in one question: 'which pair is wrongly matched', 'which came first', 'which is NOT under ministry X'. This lesson trains exactly that, across all ten lessons."},
  {k:"story", h:"<p>Before the exam, hang every fact on one of three pegs. <b>Who</b> runs it — a ministry, a department or a council. <b>When</b> it began — a year. <b>Where</b> it is — a city, a state or a continent. Most science-and-technology questions in SSC are one of those three, dressed up as 'which pair is correct'.</p><p>Read the years below as a single story: CSIR in 1942 before independence, atomic energy in the 1950s, space in the 1960s and 70s, biotechnology in the 1980s, Digital India in 2015, and a rush of missions after 2020 — semiconductors, hydrogen, quantum, AI — ending with the SHANTI Act and the fast breeder of 2025–26.</p>", key:"Who runs it · when it began · where it is — three pegs for every fact."},
  {k:"facts", title:"Years in one place", rows:[
    ["1942","CSIR"],["1948 · 1954","Atomic Energy Commission · Department of Atomic Energy"],["1958","DRDO; Scientific Policy Resolution"],
    ["1971","DST"],["1974 · 1998","Pokhran-I (Smiling Buddha) · Pokhran-II (Operation Shakti)"],["1981–83","First Antarctic expedition; Dakshin Gangotri; Antarctic Treaty"],
    ["1986","DBT"],["1989","Maitri station"],["2002","Bt cotton approved"],["2006","Ministry of Earth Sciences"],["2008","Himadri (Arctic); India–US nuclear deal"],
    ["2010 · 2016","First Aadhaar · UPI"],["2012","Bharati station"],["2015","Digital India; DigiLocker; Supercomputing Mission"],["2018","NM-ICPS"],
    ["2021","India Semiconductor Mission; Deep Ocean Mission; ZyCoV-D"],["2022","5G; ONDC; Bhashini; Indian Antarctic Act"],
    ["2023","Quantum and Green Hydrogen Missions; ANRF Act; DPDP Act; Bharat 6G Vision"],["2024","IndiaAI Mission; first Rashtriya Vigyan Puraskar; BioE3"],
    ["2025","SHANTI Act; BIRSA 101; genome-edited rice; Genome India data; E20; DPDP Rules"],["2026","PFBR first criticality (6 April); national HPV drive (28 February)"]]},
  {k:"facts", title:"Numbers that change (as of October 2026)", rows:[
    ["Nuclear power","24 reactors, about 8,780 MW; target 100 GW by 2047"],
    ["Chip projects","12 approved (May 2026)"],
    ["Supercomputers","40 under the mission, about 68 petaflops (September 2026)"],
    ["GPUs under IndiaAI","More than 38,000"],
    ["UPI","24.07 billion transactions in September 2026; live in 11 foreign countries"],
    ["Aadhaar","More than 138 crore numbers (end-2024)"]]},
  {k:"trick", h:"For 'which is NOT under X' questions, remember the outsiders: <b>DAE and Space</b> report to the PM; <b>DRDO</b> to Defence; <b>ICMR</b> to Health; <b>ICAR</b> to Agriculture; <b>GEAC</b> to Environment; <b>Green Hydrogen</b> to MNRE; <b>AI and chips</b> to MeitY; <b>Quantum</b> to DST."},
  {k:"trap", h:"Watch the near-misses: <b>NCPOR Goa</b> vs <b>NIOT Chennai</b>; <b>Himadri</b> (Arctic) vs <b>Himansh</b> (Himalaya); <b>Covaxin</b> (Bharat Biotech) vs <b>Covishield</b> (Serum Institute); <b>Kakrapar</b> (Gujarat) vs <b>Kaiga</b> (Karnataka); <b>1962 Act</b> (repealed) vs <b>1948 Act</b> (the first)."}
], sum:["Who: DAE and Space under the PM; CSIR under DSIR; ICMR under Health; ICAR under Agriculture; GEAC under Environment.","When: CSIR 1942, DAE 1954, DRDO 1958, DST 1971, DBT 1986, MoES 2006; Digital India 2015.","Missions: Supercomputing 2015, NM-ICPS 2018, Semiconductor and Deep Ocean 2021, Quantum and Green Hydrogen 2023, IndiaAI 2024.","Nuclear: PFBR critical 6 April 2026; SHANTI Act 2025; Pokhran 1974 and 1998.","Poles: Dakshin Gangotri 1983, Maitri 1989, Himadri 2008, Bharati 2012; Indian Antarctic Act 2022.","Awards: Rashtriya Vigyan Puraskar from 2024 — Vigyan Ratna, Shri, Yuva–SSB, Team."]}
);

pairQs("ST9", ST9A, { q: t => `The ${t} award of the Rashtriya Vigyan Puraskar is given for:`, rq: a => `Which Rashtriya Vigyan Puraskar is given for: ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("ST9", ST9B, { q: t => `Who gives the ${t}?`, extra: ["Indian National Science Academy"] });
pairQs("ST10", ST10A, { q: t => `What is the full form of ${t}?` });
pairQs("ST10", ST10B, { q: t => `Which of these best describes "${t}"?` });

QB.push(
["ST9","The Rashtriya Vigyan Puraskar was first presented in:",["2024","2019","2023","2025"],"Instituted in 2023, the awards were first presented on 22 August 2024.",""],
["ST9","Who received the first Vigyan Ratna, in 2024?",["G. Padmanabhan","Jayant Narlikar","C. N. R. Rao","K. Kasturirangan"],"The biochemist and former IISc director was honoured for lifetime work, including on the malaria parasite.",""],
["ST9","Who was given the Vigyan Ratna in 2025, after his death?",["Jayant Narlikar","R. Chidambaram","M. R. Srinivasan","K. Kasturirangan"],"The astrophysicist died in May 2025; the award was announced in October 2025.",""],
["ST9","The Vigyan Team award of 2024 went to the team behind:",["Chandrayaan-3","Covaxin","Aditya-L1","The PFBR"],"Team Chandrayaan-3 of ISRO received it.",""],
["ST9","The Vigyan Team award of 2025 went to:",["CSIR Aroma Mission","Team Gaganyaan","Genome India","Team PFBR"],"The Aroma Mission brought lavender and other aromatic crops to farmers.",""],
["ST9","Up to what age can a scientist receive the Vigyan Yuva–Shanti Swarup Bhatnagar award?",["45","40","35","50"],"It is for young scientists up to 45 years of age.",""],
["ST9","At most how many Vigyan Ratna awards can be given in a year?",["3","1","5","25"],"Up to 3 Vigyan Ratna, 25 Vigyan Shri, 25 Vigyan Yuva and 3 Vigyan Team awards.",""],
["ST9","How many awards were presented at the first Rashtriya Vigyan Puraskar ceremony in 2024?",["33","13","50","100"],"President Droupadi Murmu presented 33 awards on 22 August 2024.",""],
["ST9","The Shanti Swarup Bhatnagar Prize was first given by CSIR in:",["1958","1942","1975","2001"],"From 1958 it honoured scientists under 45; its name now lives on in Vigyan Yuva.",""],
["ST9","In how many fields is the Infosys Prize given?",["Six","Four","Thirteen","Ten"],"Economics, engineering and computer science, humanities and social sciences, life sciences, mathematics and physical sciences.",""],
["ST9","Since 2024 the Infosys Prize goes to researchers under the age of:",["40","45","35","50"],"Each winner gets USD 100,000, a gold medal and a citation.",""],
["ST9","Which Indian-origin mathematician won the Fields Medal in 2014?",["Manjul Bhargava","Akshay Venkatesh","S. R. Srinivasa Varadhan","Srinivasa Ramanujan"],"Akshay Venkatesh followed in 2018.",""],
["ST9","S. R. Srinivasa Varadhan won which prize in 2007?",["Abel Prize","Fields Medal","Turing Award","Nobel Prize"],"He won the Abel Prize for his work on probability.",""],
["ST9","Who is the most recent Indian-origin winner of a Nobel Prize in a science (as of 2026)?",["Venkatraman Ramakrishnan","Har Gobind Khorana","Subrahmanyan Chandrasekhar","Abhijit Banerjee"],"Ramakrishnan won the Chemistry prize in 2009; Banerjee's 2019 prize was in Economics.",""],
["ST9","Jayant Narlikar founded which institute in Pune?",["Inter-University Centre for Astronomy and Astrophysics","National Centre for Radio Astrophysics","Indian Institute of Astrophysics","Physical Research Laboratory"],"He set up IUCAA in 1988.",""],
["ST9","Which former ISRO chairman headed the committee that drafted the National Education Policy 2020?",["K. Kasturirangan","G. Madhavan Nair","U. R. Rao","K. Sivan"],"Kasturirangan, ISRO chairman from 1994 to 2003, died in April 2025.",""],
["ST9","Who was the first woman Director-General of CSIR?",["N. Kalaiselvi","Tessy Thomas","Gagandeep Kang","Soumya Swaminathan"],"She took charge in 2022; she is an electrochemist who works on batteries.",""],
["ST9","Who was the first Indian woman elected a Fellow of the Royal Society (2019)?",["Gagandeep Kang","Asima Chatterjee","Anna Mani","Kamala Sohonie"],"Kang, a vaccine scientist, helped develop Rotavac.",""],
["ST9","Which scientist was Principal Scientific Adviser from 2001 to 2018 and played a key part in both Pokhran tests?",["R. Chidambaram","A. P. J. Abdul Kalam","Anil Kakodkar","Raja Ramanna"],"Chidambaram died in January 2025.",""],

["ST10","When was 5G launched in India?",["1 October 2022","15 August 2021","26 January 2023","1 July 2015"],"It was launched at the India Mobile Congress in New Delhi.",""],
["ST10","The Bharat 6G Vision document was released in:",["March 2023","October 2022","January 2025","August 2020"],"It aims to make India a front-line developer of 6G by 2030.",""],
["ST10","BSNL's 4G network built on Indian equipment was launched in September 2025 at:",["Jharsuguda, Odisha","Bengaluru, Karnataka","New Delhi","Gandhinagar, Gujarat"],"The core was built by C-DOT, the radios by Tejas Networks, and TCS joined them up.",""],
["ST10","The core network of BSNL's home-grown 4G was developed by:",["C-DOT","ISRO","DRDO","BEL"],"The Centre for Development of Telematics built the core; Tejas made the radios.",""],
["ST10","Which technology measures distance with pulses of laser light?",["LiDAR","SONAR","RADAR","GPS"],"LiDAR is used for 3D mapping, self-driving cars and Moon landers.",""],
["ST10","Which uses sound waves to find objects under water?",["SONAR","RADAR","LiDAR","NavIC"],"SONAR stands for Sound Navigation and Ranging.",""],
["ST10","How does NavIC differ from GPS?",["NavIC is a regional system covering India and nearby areas","NavIC is a global system run by Europe","NavIC uses no satellites","NavIC works only under water"],"GPS is American and global; NavIC is India's own regional system.",""],
["ST10","One nanometre is equal to:",["One billionth of a metre","One millionth of a metre","One thousandth of a metre","One trillionth of a metre"],"1 nm = 10⁻⁹ m; nanotechnology works at 1–100 nm.",""],
["ST10","India's first 3D-printed post office opened in 2023 in:",["Bengaluru","Chennai","Hyderabad","Pune"],"It was built at Cambridge Layout, Bengaluru.",""],
["ST10","'E20' fuel means petrol with:",["20% ethanol","20% electricity","20% hydrogen","20% diesel"],"India reached E20 in 2025.",""],
["ST10","India's E20 target was first set for 2030. When was it reached?",["2025","2022","2028","2030"],"The 2022 amendment to the biofuel policy brought the target forward, and it was met in 2025.",""],
["ST10","Second-generation (2G) ethanol is made from:",["Crop waste such as rice straw","Sugarcane juice","Maize grain","Algae"],"First-generation ethanol uses food crops; third-generation uses algae.",""],
["ST10","The Panipat 2G ethanol plant, dedicated in 2022, belongs to:",["Indian Oil","ONGC","Reliance Industries","Bharat Petroleum"],"It turns rice straw into ethanol, which also helps cut stubble burning.",""],
["ST10","World Biofuel Day is observed on:",["10 August","5 June","22 April","16 September"],"It recalls Rudolf Diesel running his engine on peanut oil in 1893.",""],
["ST10","The Global Biofuels Alliance was launched at:",["The G20 summit in New Delhi, 2023","COP28 in Dubai, 2023","The UN General Assembly, 2022","The BRICS summit in Kazan, 2024"],"India launched it with partners such as the USA and Brazil in September 2023.",""],
["ST10","India's National Policy on Biofuels was issued in:",["2018","2009","2022","2014"],"It was amended in 2022 to bring the E20 target forward.",""],
["ST10","Which scheme spread LED bulbs to Indian homes from 2015?",["UJALA","SAUBHAGYA","UDAY","KUSUM"],"UJALA — Unnat Jyoti by Affordable LEDs for All.",""],
["ST10","Li-Fi sends data using:",["Light","Radio waves","Sound waves","Copper wires"],"Li-Fi works by switching LED light on and off very fast.",""],

["ST11","Which pair is wrongly matched?",["Kaiga — Tamil Nadu","Narora — Uttar Pradesh","Kakrapar — Gujarat","Tarapur — Maharashtra"],"Kaiga is in Karnataka.",""],
["ST11","Which mission–ministry pair is correctly matched?",["National Green Hydrogen Mission — MNRE","National Quantum Mission — MeitY","IndiaAI Mission — DST","Deep Ocean Mission — Department of Space"],"Quantum is DST's, IndiaAI is MeitY's and the Deep Ocean Mission is MoES's.",""],
["ST11","Which of these was set up first?",["CSIR","Department of Atomic Energy","Department of Science and Technology","Department of Biotechnology"],"CSIR 1942, DAE 1954, DST 1971, DBT 1986.",""],
["ST11","Which of these was set up last?",["Ministry of Earth Sciences","Department of Biotechnology","Department of Science and Technology","DRDO"],"MoES came in 2006.",""],
["ST11","Which Indian research station is NOT in Antarctica?",["Himadri","Maitri","Bharati","Dakshin Gangotri"],"Himadri is in the Arctic, at Svalbard.",""],
["ST11","Which of these is NOT a vaccine developed or made in India?",["Comirnaty","Covaxin","ZyCoV-D","Corbevax"],"Comirnaty is the Pfizer–BioNTech mRNA vaccine.",""],
["ST11","Which of these is a private company's app, not a government digital platform?",["Paytm","DigiLocker","UMANG","CoWIN"],"Paytm is a private payments app; the others are run by the government.",""],
["ST11","Which of these laws is the most recent?",["SHANTI Act","Digital Personal Data Protection Act","Indian Antarctic Act","Telecommunications Act"],"SHANTI 2025; DPDP and Telecommunications 2023; Antarctic 2022.",""],
["ST11","Which of these does NOT work under the Ministry of Earth Sciences?",["BARC","IMD","INCOIS","NCPOR"],"BARC belongs to the Department of Atomic Energy.",""],
["ST11","Which of these is NOT a CSIR laboratory?",["BARC","NAL","IICT","CBRI"],"BARC is an atomic energy centre under DAE.",""],
["ST11","Which of these reactors is NOT at Kalpakkam?",["Dhruva","FBTR","KAMINI","PFBR"],"Dhruva is at BARC, Trombay.",""],
["ST11","Which statement about the PFBR is correct?",["It reached first criticality in April 2026","It is cooled by heavy water","It is run by NPCIL","It is at Tarapur"],"It is at Kalpakkam, cooled by liquid sodium and built by BHAVINI.",""],
["ST11","Which statement about the DPDP Act, 2023 is NOT correct?",["Its maximum penalty is ₹500 crore","It set up the Data Protection Board of India","It treats anyone under 18 as a child","Its rules were notified in 2025"],"The maximum penalty is ₹250 crore.",""],
["ST11","Which platform–year pair is wrong?",["ONDC — 2016","Aadhaar — 2010","UPI — 2016","Bhashini — 2022"],"ONDC's first pilot ran in 2022.",""],
["ST11","Bt cotton is a GM crop; DRR Dhan 100 is a:",["Genome-edited crop","GM crop","Hybrid made by cross-breeding only","Wild variety"],"Genome editing changes the plant's own genes without adding foreign DNA.",""],
["ST11","Which pair both date from 1958?",["DRDO and the Scientific Policy Resolution","CSIR and ICAR","DST and DBT","DAE and the Department of Space"],"DRDO was formed and Nehru's Scientific Policy Resolution adopted in 1958.",""],
["ST11","Which of these did NOT happen in 1983?",["Bharati station opened","India joined the Antarctic Treaty","The Technology Policy Statement was issued","The Atomic Energy Regulatory Board was set up"],"Bharati opened in 2012.",""],
["ST11","Which of these is chaired by the Prime Minister?",["The ANRF Governing Board","PM-STIAC","GEAC","AERB"],"PM-STIAC is chaired by the Principal Scientific Adviser.",""],
["ST11","A fast breeder reactor is so called because it:",["Makes more fissile fuel than it uses, with fast neutrons","Is built faster than other reactors","Breeds new isotopes of hydrogen","Runs only for a short time"],"Fast neutrons turn uranium-238 or thorium in the blanket into new fuel.",""],
["ST11","Which pair of scientist and field is correct?",["Jayant Narlikar — astrophysics","Gagandeep Kang — nuclear reactors","R. Chidambaram — vaccines","G. Padmanabhan — rockets"],"Kang works on vaccines, Chidambaram was a nuclear physicist and Padmanabhan a biochemist.",""],
["ST11","Which 'world first' belongs to India?",["The first DNA vaccine approved for humans","The first mRNA vaccine","The first CAR-T cell therapy","The first commercial fast breeder reactor"],"ZyCoV-D (2021) was the world's first DNA vaccine for people.",""],
["ST11","Which of these missions came first?",["National Supercomputing Mission","National Quantum Mission","IndiaAI Mission","National Green Hydrogen Mission"],"Supercomputing 2015; Quantum and Green Hydrogen 2023; IndiaAI 2024.",""],
["ST11","Which mission is NOT run by the Department of Science and Technology?",["IndiaAI Mission","National Quantum Mission","NM-ICPS","Nano Mission"],"IndiaAI is run by MeitY.",""],
["ST11","INCOIS is to tsunami warnings as IITM, Pune, is to:",["Monsoon research","Building submersibles","Running Antarctic stations","Launching satellites"],"NIOT builds submersibles, NCPOR runs polar stations and ISRO launches satellites.",""],
["ST11","Which city has both CSIR's CIMAP and CSIR's IITR?",["Lucknow","Chandigarh","Hyderabad","Kolkata"],"Lucknow also has CDRI and NBRI.",""]
);

LASTMOMENT.push(
{t:"Who runs it", era:["st"], rows:[["DAE · Space","Prime Minister"],["CSIR","DSIR (PM is President)"],["ICMR","Dept of Health Research"],["ICAR","DARE (Agriculture)"],["GEAC","Environment Ministry"],["Quantum · NM-ICPS","DST"],["IndiaAI · Chips","MeitY"],["Green Hydrogen","MNRE"]]},
{t:"Nuclear", era:["st"], rows:[["Three stages","Uranium → plutonium → thorium (Bhabha)"],["PFBR","Kalpakkam, critical 6 Apr 2026"],["Pokhran-I","18 May 1974, Smiling Buddha"],["Pokhran-II","11 & 13 May 1998, Shakti"],["SHANTI Act","Dec 2025 — private plants allowed"],["Partners","Tarapur USA · Kudankulam Russia · Jaitapur France"]]},
{t:"Biotech and digital", era:["st"], rows:[["Only GM crop","Bt cotton (2002)"],["ZyCoV-D","First DNA vaccine (Zydus)"],["BIRSA 101","CRISPR, sickle cell (2025)"],["First Aadhaar","Tembhli, 2010"],["DPDP Act","2023 · ₹250 crore"],["CERT-In","2004 · 6-hour rule"]]},
{t:"Poles and awards", era:["st"], rows:[["Dakshin Gangotri","1983 (closed 1990)"],["Maitri","1989"],["Himadri","2008, Svalbard"],["Bharati","2012"],["Vigyan Ratna 2024","G. Padmanabhan"],["Vigyan Ratna 2025","Jayant Narlikar"]]}
);
TILES.push(["1942","CSIR set up","st"],["6 Apr 2026","PFBR first criticality","st"],["8.8 GW","Nuclear capacity (2026)","st"],["100 GW","Nuclear goal for 2047","st"],["₹76,000 cr","Semiconductor Mission","st"],["5 MMT","Green hydrogen a year by 2030","st"],["24 bn","UPI transactions, Sept 2026","st"],["₹250 cr","Top DPDP penalty","st"]);
