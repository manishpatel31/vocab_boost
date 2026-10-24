/* Science & Technology in India — biotechnology and health technology (ST5) and the national missions in new technology (ST6).
   Status checked October 2026. CRISPR and sequencing basics are in Space & ISRO (L16); Samudrayaan in detail in Space (L15). */
const ST5A = [
  ["Covaxin","Bharat Biotech","India's first home-grown COVID-19 vaccine (with ICMR-NIV); an inactivated (killed) virus vaccine.",""],
  ["Covishield","Serum Institute of India","The Oxford–AstraZeneca vaccine made in Pune; a viral-vector vaccine.",""],
  ["ZyCoV-D","Zydus (Cadila)","The world's first DNA vaccine for humans, against COVID-19 (2021); given without a needle.",""],
  ["Corbevax","Biological E","A protein-subunit COVID-19 vaccine from Hyderabad.",""],
  ["GEMCOVAC","Gennova Biopharmaceuticals","India's first mRNA vaccine (2022), from Pune.",""],
  ["iNCOVACC","Bharat Biotech","India's first nasal COVID-19 vaccine (2022–23).",""],
  ["Cervavac","Serum Institute of India","India's first home-grown HPV vaccine against cervical cancer (2022), backed by DBT–BIRAC.",""],
  ["Rotavac","Bharat Biotech","India's first home-grown rotavirus (diarrhoea) vaccine (2015).",""],
  ["Pneumosil","Serum Institute of India","India's first home-grown pneumococcal (pneumonia) vaccine (2020).",""]
];
const ST5B = [
  ["NexCAR19","ImmunoACT (IIT Bombay) with Tata Memorial Centre","India's first home-grown CAR-T cell therapy for blood cancers; approved October 2023.",""],
  ["the first human gene-therapy trial for haemophilia A in India","CMC Vellore","Announced in 2024; a lentiviral vector adds the Factor VIII gene to the patient's own stem cells.",""],
  ["BIRSA 101","CSIR-IGIB","India's first home-grown CRISPR gene therapy, for sickle cell disease (November 2025); named after Birsa Munda.",""],
  ["DRR Dhan 100 (Kamala)","ICAR-Indian Institute of Rice Research, Hyderabad","Genome-edited rice released in May 2025; ripens about 20 days earlier and yields more.",""],
  ["Pusa DST Rice 1","ICAR-Indian Agricultural Research Institute, New Delhi","Genome-edited rice for salty and alkaline soils (May 2025).",""],
  ["Nafithromycin (Miqnaf)","Wockhardt, with BIRAC","India's first home-grown antibiotic (November 2024), for drug-resistant pneumonia.",""],
  ["GM mustard DMH-11","Deepak Pental's team, University of Delhi","Dhara Mustard Hybrid-11; GEAC cleared its release in October 2022; the case is in the Supreme Court.",""],
  ["Bt cotton","Mahyco with Monsanto","Approved in 2002 — still the only GM crop grown commercially in India.",""]
];

LESSONS.push(
{id:"ST5", heat:2, title:"Biotechnology and health technology", hi:"जैव प्रौद्योगिकी और स्वास्थ्य प्रौद्योगिकी", blocks:[
  {k:"hot", h:"Asked: <b>Bt cotton</b> (the only GM crop grown), <b>GM mustard DMH-11</b> and the <b>GEAC</b>, the <b>Genome India</b> project, which company made which <b>vaccine</b> (Covaxin, ZyCoV-D, Cervavac), and India's firsts in <b>gene and cell therapy</b> — NexCAR19, BIRSA 101 — and <b>genome-edited rice</b>."},
  {k:"story", h:"<p>In <b>2002</b> India allowed its first genetically modified crop: <b>Bt cotton</b>, carrying a gene from the soil bacterium <i>Bacillus thuringiensis</i> that kills the bollworm. It is still the only GM crop farmers may grow. <b>Bt brinjal</b> was cleared by the regulator, the <b>GEAC</b>, in 2009 but put on hold in 2010; <b>GM mustard DMH-11</b>, bred at Delhi University, was cleared in 2022 and is stuck in the Supreme Court.</p><p>The pandemic turned India into a vaccine lab. Bharat Biotech made <b>Covaxin</b>, Zydus made <b>ZyCoV-D</b> — the world's first DNA vaccine for people — and Gennova made India's first <b>mRNA</b> vaccine. Then came the cures: the first home-grown <b>CAR-T</b> cancer therapy (2023), a <b>haemophilia</b> gene-therapy trial at CMC Vellore (2024), and <b>BIRSA 101</b>, a CRISPR therapy for sickle cell disease (2025). In 2025 India also released the first <b>genome-edited rice</b> and the data of the <b>Genome India</b> project — 10,000 Indian genomes.</p>", key:"Bt cotton 2002 is the only GM crop · GEAC is under the Environment Ministry · ZyCoV-D DNA, GEMCOVAC mRNA, Covaxin inactivated · BIRSA 101 CRISPR (2025)."},
  {k:"table", title:"Vaccines made in India", head:["Vaccine","Maker","Remember"], rows: ST5A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Firsts in gene therapy, medicine and crops", head:["Breakthrough","Developed by","Remember"], rows: ST5B.map(r => [r[0].replace(/^the first/, "First"), r[1], r[2]])},
  {k:"facts", title:"GM crops and the GEAC", rows:[
    ["GEAC","Genetic Engineering Appraisal Committee — under the Ministry of Environment, Forest and Climate Change; works under the 1989 Rules of the Environment (Protection) Act, 1986"],
    ["Bt cotton","Approved in 2002; the only GM crop grown commercially in India (as of 2026)"],
    ["Bt brinjal","Cleared by GEAC in 2009; the government put a moratorium on it in February 2010 (it is grown in Bangladesh)"],
    ["GM mustard DMH-11","Made with the barnase–barstar system; GEAC approved its environmental release in October 2022; in July 2024 the Supreme Court gave a split verdict and asked the Centre to frame a national policy on GM crops"],
    ["Genome-edited plants","Edits that add no foreign DNA (SDN-1 and SDN-2) were freed from the GM rules in 2022 — which let the 2025 rice varieties through"]]},
  {k:"facts", title:"Big biotech programmes", rows:[
    ["Genome India","DBT project begun in 2020; about 10,000 genomes from dozens of Indian population groups; data released on 9 January 2025"],
    ["Indian Biological Data Centre (IBDC)","Faridabad, Haryana — India's first national store for life-science data; holds the Genome India data"],
    ["IndiGen (2019)","CSIR's earlier project that sequenced about 1,000 Indian genomes"],
    ["BioE3 Policy (August 2024)","Biotechnology for Economy, Environment and Employment — biomanufacturing hubs and biofoundries"],
    ["HPV vaccination (28 February 2026)","Free nationwide drive for 14-year-old girls launched at Ajmer; uses one dose of Gardasil-4"]]},
  {k:"trick", h:"Vaccine types by letter — <b>“Co-In, Zy-DNA, Gem-mRNA, Corbe-Protein, Covi-Vector”</b>: Covaxin inactivated, ZyCoV-D DNA, GEMCOVAC mRNA, Corbevax protein, Covishield viral vector."},
  {k:"trap", h:"<b>GEAC</b> belongs to the <b>Environment</b> Ministry, not the Department of Biotechnology. <b>Cervavac</b> is India's own HPV vaccine, but the 2026 national drive uses <b>Gardasil-4</b>. <b>Covishield</b> was made by the Serum Institute but designed at Oxford; <b>Covaxin</b> is the fully Indian one. Genome-edited rice is <b>not</b> GM rice — no foreign gene is added."},
  {k:"link", h:"What a gene, DNA and CRISPR are — and genome sequencing and DNA barcoding — are in <a href=\"study-space.html?lesson=L16\">Space &amp; ISRO</a> (L16) and <a href=\"study-biology.html?lesson=L23\">Biology</a> (L23). The pioneers of vaccines and antibiotics (Jenner, Pasteur, Fleming) are in <a href=\"study-inventions.html?lesson=I5\">Inventions &amp; Discoveries</a>."}
], sum:["Bt cotton (2002) is India's only commercially grown GM crop; Bt brinjal is on hold since 2010.","GM mustard DMH-11 (Delhi University) was cleared by GEAC in 2022; the Supreme Court split in 2024.","GEAC is under the Ministry of Environment, Forest and Climate Change.","Covaxin — Bharat Biotech; ZyCoV-D — Zydus (first DNA vaccine); GEMCOVAC — Gennova (first mRNA); Cervavac — Serum Institute (HPV).","NexCAR19 (2023) first Indian CAR-T; BIRSA 101 (2025) first Indian CRISPR therapy, for sickle cell; haemophilia gene therapy at CMC Vellore.","Genome India: 10,000 genomes, data out January 2025 at IBDC Faridabad; genome-edited rice DRR Dhan 100 and Pusa DST Rice 1 (May 2025)."]},

{id:"ST6", heat:2, title:"National missions in new technology", hi:"नई प्रौद्योगिकी के राष्ट्रीय मिशन", blocks:[
  {k:"hot", h:"Asked: the year, money and ministry of each mission — <b>Quantum</b> (2023, ₹6,003 crore, DST), <b>Semiconductor</b> (2021, ₹76,000 crore, MeitY), <b>IndiaAI</b> (2024, ₹10,372 crore), <b>Green Hydrogen</b> (2023, 5 MMT by 2030), <b>Supercomputing</b> (2015, PARAM), <b>NM-ICPS</b> (2018) — and where the first <b>chip fab</b> is coming up (Dholera)."},
  {k:"story", h:"<p>Since 2015 India has bet on a string of 'missions' — each with a fixed sum of money, a ministry in charge and a target. The <b>National Supercomputing Mission</b> (2015) builds PARAM machines with C-DAC. The <b>India Semiconductor Mission</b> (2021) pays half the cost of chip plants; Micron's assembly unit at Sanand came first, and the Tata–PSMC fab at <b>Dholera</b> in Gujarat is to be India's first commercial chip factory.</p><p>In 2023 came the <b>National Green Hydrogen Mission</b> (5 million tonnes a year by 2030) and the <b>National Quantum Mission</b>, with four hubs at IISc and three IITs. The <b>IndiaAI Mission</b> (2024) buys GPUs that start-ups can rent cheaply and backs Indian AI models. Under the sea, the <b>Deep Ocean Mission</b> (2021) is building <b>Matsya-6000</b> to carry three people 6,000 metres down.</p>", key:"Supercomputing 2015 · NM-ICPS 2018 · Deep Ocean and Semiconductor 2021 · Green Hydrogen and Quantum 2023 · IndiaAI 2024 · Nuclear Energy 2025."},
  {k:"table", title:"Missions and when they began", head:["Mission","Approved","Money and aim"], rows:[
    ["National Supercomputing Mission","2015","₹4,500 crore; build and install PARAM supercomputers"],
    ["National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS)","2018","₹3,660 crore; 25 Technology Innovation Hubs; extended to December 2027"],
    ["Deep Ocean Mission","2021","₹4,077 crore; Samudrayaan (Matsya-6000), deep-sea minerals"],
    ["India Semiconductor Mission","2021","₹76,000 crore for chip fabs, packaging units and design"],
    ["National Green Hydrogen Mission","2023","₹19,744 crore; 5 million tonnes of green hydrogen a year by 2030"],
    ["National Quantum Mission","2023","₹6,003.65 crore (2023-24 to 2030-31); four thematic hubs"],
    ["IndiaAI Mission","2024","₹10,371.92 crore; GPUs, Indian AI models, datasets"],
    ["Nuclear Energy Mission","2025","₹20,000 crore for small modular reactors; 100 GW by 2047"],
    ["Nano Mission","2007","DST's mission for nanoscience and nanotechnology"]]},
  {k:"table", title:"Which ministry runs it", head:["Mission","Ministry or department","Run with"], rows:[
    ["National Supercomputing Mission","DST and MeitY together","C-DAC, Pune and IISc, Bengaluru"],
    ["NM-ICPS","Department of Science and Technology","25 hubs in IITs, IISc and other institutes"],
    ["National Quantum Mission","Department of Science and Technology","Four T-Hubs"],
    ["Deep Ocean Mission","Ministry of Earth Sciences","NIOT, Chennai"],
    ["India Semiconductor Mission","Ministry of Electronics and IT","Semi-Conductor Laboratory, Mohali"],
    ["IndiaAI Mission","Ministry of Electronics and IT","IndiaAI Independent Business Division"],
    ["National Green Hydrogen Mission","Ministry of New and Renewable Energy","SIGHT incentives; port hubs"],
    ["Nuclear Energy Mission","Department of Atomic Energy","BARC and NPCIL, with private partners"]]},
  {k:"facts", title:"Quantum and AI (as of October 2026)", rows:[
    ["Quantum T-Hubs","IISc Bengaluru — computing; IIT Madras with C-DOT — communication; IIT Bombay — sensing and metrology; IIT Delhi — materials and devices"],
    ["Quantum targets","Computers of 50–1,000 physical qubits in eight years; satellite quantum communication over 2,000 km"],
    ["QpiAI-Indus (April 2025)","A 25-qubit machine from a Bengaluru start-up — India's first full-stack quantum computer"],
    ["IndiaAI compute","More than 38,000 GPUs offered to start-ups and researchers at low hourly rates"],
    ["Indian AI models","Shown at the India AI Impact Summit, Bharat Mandapam, February 2026 — Sarvam's models and BharatGen's Param2"]]},
  {k:"facts", title:"Chips, supercomputers and hydrogen (as of October 2026)", rows:[
    ["Chip projects","12 approved by May 2026 (about ₹1.64 lakh crore); the first was Micron's assembly and test unit at Sanand (2023)"],
    ["First commercial fab","Tata Electronics with PSMC of Taiwan at Dholera, Gujarat — target about 2028"],
    ["Packaging units","Tata at Jagiroad (Assam); CG Power–Renesas and Kaynes at Sanand; HCL–Foxconn near Jewar (Uttar Pradesh)"],
    ["Semiconductor Mission 2.0","Announced in the Budget 2026-27; equipment, materials and Indian chip design"],
    ["Supercomputers","40 systems of about 68 petaflops under the mission (September 2026); PARAM Shivay at IIT (BHU) was the first built in India under it (2019)"],
    ["PARAM Rudra","Three systems dedicated in September 2024 at Pune, Delhi and Kolkata; another at IIT Bombay (January 2026)"],
    ["Weather supercomputers","Arka (IITM Pune) and Arunika (NCMRWF Noida), 2024"],
    ["Green hydrogen hubs","Deendayal (Kandla), Paradip and V.O. Chidambaranar (Tuticorin) ports, recognised in 2025"],
    ["SIGHT","Strategic Interventions for Green Hydrogen Transition — ₹17,490 crore of the mission's money for electrolysers and green hydrogen"]]},
  {k:"trick", h:"Mission years as a staircase — <b>“15 Super, 18 Cyber, 21 Ocean & Chips, 23 Hydrogen & Quantum, 24 AI, 25 Nuclear”</b>. Money: Chips <b>76</b> thousand crore, Hydrogen <b>19.7</b>, AI <b>10.4</b>, Quantum <b>6</b>."},
  {k:"trap", h:"The <b>Quantum</b> Mission is run by <b>DST</b>, but <b>IndiaAI</b> and <b>Semiconductor</b> by <b>MeitY</b>; <b>Green Hydrogen</b> by <b>MNRE</b>, not the Petroleum Ministry. <b>Micron</b>'s Sanand plant packs and tests memory chips — it is not a fab; the first fab is <b>Dholera</b>. The <b>Deep Ocean Mission</b> is MoES's, not ISRO's."},
  {k:"link", h:"Samudrayaan and Matsya-6000 in detail, and ISRO's Vikram 3201 chip, are in <a href=\"study-space.html?lesson=L15\">Space &amp; ISRO</a> (L15). Green hydrogen colours and the scheme money are in <a href=\"study-govt-schemes.html?lesson=L12\">Government Schemes</a> (L12); PARAM 8000 and the history of computers in <a href=\"study-computer.html\">Computer Knowledge</a>; the 2026 chip and AI news month by month in <a href=\"study-current-affairs.html\">Current Affairs 2026</a>."}
], sum:["National Supercomputing Mission 2015 (DST + MeitY, C-DAC): 40 systems, about 68 PF by September 2026.","NM-ICPS 2018: ₹3,660 crore, 25 Technology Innovation Hubs (DST).","India Semiconductor Mission 2021: ₹76,000 crore; first fab Tata–PSMC at Dholera; Micron's ATMP at Sanand came first.","National Green Hydrogen Mission (MNRE, January 2023): ₹19,744 crore, 5 MMT a year by 2030; hubs at Kandla, Paradip, Tuticorin.","National Quantum Mission (DST, April 2023): ₹6,003.65 crore; hubs at IISc and IITs Madras, Bombay, Delhi.","IndiaAI Mission (MeitY, March 2024): ₹10,371.92 crore; 38,000+ GPUs. Deep Ocean Mission (MoES, 2021): Matsya-6000."]}
);

pairQs("ST5", ST5A, { q: t => `Which company makes the ${t} vaccine?`, extra: ["Indian Immunologicals", "Panacea Biotec"] });
pairQs("ST5", ST5B.filter(r => !/haemophilia|DMH-11/.test(r[0])), { q: t => `Who developed ${t}?` });
const ST6T = LESSONS.find(l => l.id === "ST6").blocks.filter(b => b.k === "table");
pairQs("ST6", ST6T[0].rows, { q: t => `In which year was the ${t} approved or launched?`, extra: ["2019"] });
pairQs("ST6", ST6T[1].rows.filter(r => !/Supercomputing/.test(r[0])), { q: t => `Which ministry or department runs the ${t}?` });

QB.push(
["ST5","Which is the only genetically modified crop grown commercially in India (as of 2026)?",["Bt cotton","Bt brinjal","GM mustard","Golden rice"],"Bt cotton was approved in 2002; Bt brinjal is on hold and GM mustard is before the Supreme Court.",""],
["ST5","Bt cotton carries a gene taken from a:",["Soil bacterium","Virus","Fungus","Wild cotton plant"],"The gene comes from Bacillus thuringiensis, a soil bacterium whose protein kills bollworms.",""],
["ST5","India's regulator for releasing genetically modified organisms, the GEAC, works under which ministry?",["Environment, Forest and Climate Change","Science and Technology","Agriculture and Farmers Welfare","Health and Family Welfare"],"The Genetic Engineering Appraisal Committee works under the Environment Ministry.",""],
["ST5","What does GEAC stand for?",["Genetic Engineering Appraisal Committee","Genome Editing Approval Council","Genetic Engineering Advisory Commission","Gene Environment Assessment Committee"],"It appraises GM crops and organisms for release into the environment.",""],
["ST5","In which year did the government put Bt brinjal on hold (a moratorium)?",["2010","2002","2016","2022"],"GEAC cleared it in 2009, but the government stopped its release in February 2010.",""],
["ST5","GM mustard DMH-11 was developed at:",["University of Delhi","IARI, New Delhi","Punjab Agricultural University","CSIR-NBRI, Lucknow"],"Deepak Pental's team at Delhi University's Centre for Genetic Manipulation of Crop Plants developed it.",""],
["ST5","DMH-11 in 'GM mustard DMH-11' stands for:",["Dhara Mustard Hybrid-11","Delhi Mustard Hybrid-11","Disease-resistant Mustard Hybrid-11","Double Modified Hybrid-11"],"It is a hybrid made using the barnase–barstar genes.",""],
["ST5","What did the Supreme Court do in the GM mustard case in July 2024?",["Gave a split verdict and asked the Centre to frame a national GM crop policy","Allowed GM mustard all over India","Banned all GM crops including Bt cotton","Sent the case to the National Green Tribunal"],"The two judges differed on the approval, but both asked for a national policy on GM crops.",""],
["ST5","ZyCoV-D is remembered as the world's first:",["DNA vaccine for humans","mRNA vaccine","Nasal vaccine","Vaccine against malaria"],"Zydus's ZyCoV-D (2021) was the first DNA vaccine approved for people; it is given needle-free.",""],
["ST5","India's first mRNA vaccine was:",["GEMCOVAC","Covaxin","Corbevax","ZyCoV-D"],"Gennova of Pune made GEMCOVAC, approved in 2022.",""],
["ST5","Covaxin was developed by Bharat Biotech together with:",["ICMR's National Institute of Virology","Oxford University","Serum Institute of India","CSIR-CCMB"],"ICMR-NIV, Pune, supplied the virus strain.",""],
["ST5","What kind of vaccine is Covaxin?",["Inactivated (killed) virus","mRNA","DNA","Viral vector"],"It uses whole virus that has been killed, so it cannot cause disease.",""],
["ST5","Cervavac protects against:",["Cervical cancer caused by HPV","Tuberculosis","Dengue","Rotavirus diarrhoea"],"It is India's first home-grown quadrivalent HPV vaccine (Serum Institute, 2022).",""],
["ST5","India's nationwide free HPV vaccination drive for 14-year-old girls was launched on 28 February 2026 at:",["Ajmer","New Delhi","Pune","Varanasi"],"The PM launched it at Ajmer, Rajasthan; it uses one dose of Gardasil-4.",""],
["ST5","NexCAR19, approved in 2023, is India's first home-grown:",["CAR-T cell therapy for blood cancer","Gene therapy for haemophilia","CRISPR therapy for sickle cell","mRNA cancer vaccine"],"It was developed by ImmunoACT, an IIT Bombay company, with Tata Memorial Centre.",""],
["ST5","BIRSA 101, launched in November 2025, is a CRISPR-based therapy for:",["Sickle cell disease","Haemophilia A","Thalassaemia","Leukaemia"],"CSIR-IGIB developed it; it is named after Bhagwan Birsa Munda.",""],
["ST5","India's first human gene-therapy trial for haemophilia A was carried out at:",["CMC Vellore","AIIMS New Delhi","PGIMER Chandigarh","Tata Memorial Centre, Mumbai"],"The trial, announced in 2024, used a lentiviral vector to add the Factor VIII gene.",""],
["ST5","India released its first genome-edited rice varieties in:",["May 2025","January 2023","August 2024","October 2022"],"DRR Dhan 100 (Kamala) and Pusa DST Rice 1 were released on 4 May 2025.",""],
["ST5","Why do genome-edited crops like DRR Dhan 100 fall outside India's GM rules?",["No foreign DNA is added to them","They are grown only in laboratories","They are imported from abroad","They are not food crops"],"Since 2022, SDN-1 and SDN-2 edits, which add no foreign gene, are exempt from GM rules.",""],
["ST5","The Genome India project, which released data of 10,000 genomes in January 2025, is run by:",["Department of Biotechnology","ICMR","CSIR","Ministry of Earth Sciences"],"DBT began it in 2020 with institutes across the country.",""],
["ST5","Where is the Indian Biological Data Centre, which stores the Genome India data?",["Faridabad","Hyderabad","Pune","Bengaluru"],"IBDC at Faridabad (Haryana) is India's first national store for life-science data.",""],
["ST5","Nafithromycin, India's first home-grown antibiotic (2024), treats:",["Drug-resistant pneumonia","Tuberculosis","Malaria","Typhoid"],"Wockhardt developed it with BIRAC support, for community-acquired bacterial pneumonia.",""],
["ST5","The BioE3 policy approved in August 2024 stands for Biotechnology for:",["Economy, Environment and Employment","Energy, Education and Equality","Exports, Enterprise and Efficiency","Ecology, Evolution and Ethics"],"It backs biomanufacturing hubs and biofoundries.",""],

["ST6","The National Quantum Mission was approved in 2023 with an outlay of about:",["₹6,003 crore","₹76,000 crore","₹19,744 crore","₹10,372 crore"],"₹6,003.65 crore for 2023-24 to 2030-31, run by DST.",""],
["ST6","Which department runs the National Quantum Mission?",["Department of Science and Technology","Ministry of Electronics and IT","Department of Telecommunications","Department of Space"],"DST is the nodal department.",""],
["ST6","Under the National Quantum Mission, the hub for quantum computing is at:",["IISc Bengaluru","IIT Madras","IIT Bombay","IIT Delhi"],"IIT Madras (with C-DOT) has communication, IIT Bombay sensing and metrology, IIT Delhi materials and devices.",""],
["ST6","The National Quantum Mission's hub for quantum communication is at IIT Madras, together with:",["C-DOT","ISRO","BSNL","DRDO"],"The Centre for Development of Telematics is its partner.",""],
["ST6","QpiAI-Indus, launched in April 2025 as India's first full-stack quantum computer, has how many qubits?",["25","7","50","128"],"QpiAI, a Bengaluru start-up, built it; it plans 128 qubits next.",""],
["ST6","The India Semiconductor Mission (2021) began with an outlay of:",["₹76,000 crore","₹20,000 crore","₹1.27 lakh crore","₹4,500 crore"],"The Semicon India programme pays a large share of the cost of fabs and packaging units.",""],
["ST6","India's first commercial semiconductor fab is being built at Dholera by Tata Electronics with a partner from:",["Taiwan","USA","Japan","South Korea"],"The partner is PSMC (Powerchip Semiconductor Manufacturing Corporation) of Taiwan.",""],
["ST6","Micron's semiconductor unit at Sanand, the first approved under the mission, is a:",["Assembly, testing and packaging unit for memory chips","Full chip fab making processors","Solar cell factory","Chip design centre only"],"It packs and tests memory chips (ATMP); it does not make wafers.",""],
["ST6","The IndiaAI Mission (March 2024) has an outlay of about:",["₹10,372 crore","₹6,003 crore","₹76,000 crore","₹2,000 crore"],"₹10,371.92 crore over five years, run by MeitY.",""],
["ST6","What is the National Green Hydrogen Mission's production target?",["5 million tonnes a year by 2030","1 million tonnes a year by 2025","50 million tonnes a year by 2047","500 GW by 2030"],"It also aims to cut fossil-fuel imports and create electrolyser industries.",""],
["ST6","Which ministry runs the National Green Hydrogen Mission?",["Ministry of New and Renewable Energy","Ministry of Petroleum and Natural Gas","Ministry of Power","Ministry of Science and Technology"],"MNRE is the nodal ministry.",""],
["ST6","Which of these ports is NOT one of the three recognised as green hydrogen hubs in 2025?",["Jawaharlal Nehru Port","Deendayal (Kandla)","Paradip","V.O. Chidambaranar (Tuticorin)"],"The three hubs are Kandla, Paradip and Tuticorin.",""],
["ST6","The National Supercomputing Mission is carried out by C-DAC and:",["IISc Bengaluru","IIT Kharagpur","ISRO","BARC"],"C-DAC, Pune, and IISc, Bengaluru, carry out the mission for DST and MeitY.",""],
["ST6","Which was the first supercomputer built in India under the National Supercomputing Mission (2019)?",["PARAM Shivay","PARAM 8000","PARAM Rudra","AIRAWAT"],"PARAM Shivay was installed at IIT (BHU), Varanasi.",""],
["ST6","In September 2024 three PARAM Rudra supercomputers were dedicated at Pune, Delhi and:",["Kolkata","Chennai","Bengaluru","Hyderabad"],"Pune (GMRT), Delhi (IUAC) and Kolkata (S. N. Bose Centre).",""],
["ST6","Arka and Arunika, dedicated in 2024, are supercomputers for:",["Weather and climate forecasting","Space launches","Nuclear research","Banking"],"They are at IITM Pune and NCMRWF Noida.",""],
["ST6","How many supercomputers had the National Supercomputing Mission deployed by September 2026?",["40","10","100","4"],"About 40 systems with a combined capacity of about 68 petaflops.",""],
["ST6","How many Technology Innovation Hubs has the NM-ICPS set up?",["25","4","12","50"],"The hubs work on AI, robotics, data, quantum and other cyber-physical technologies.",""],
["ST6","SIGHT, the main money of the Green Hydrogen Mission, stands for:",["Strategic Interventions for Green Hydrogen Transition","Scheme for Indian Green Hydrogen Technology","Support for Industry in Green Hydrogen Trade","Solar Integrated Green Hydrogen Targets"],"About ₹17,490 crore for electrolysers and green hydrogen production.",""],
["ST6","Which mission has the goal of carrying three people 6,000 metres under the sea?",["Deep Ocean Mission","National Quantum Mission","Blue Economy Mission","Gaganyaan"],"Its submersible Matsya-6000 is being built by NIOT, Chennai.",""]
);
