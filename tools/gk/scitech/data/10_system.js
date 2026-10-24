/* Science & Technology in India — Part 1: who runs Indian science (ST1) and the CSIR labs, policies, ANRF and science days (ST2).
   Facts dated "as of October 2026" where they can change. Institute headquarters already in Headquarters & Founders (H4, H5) are linked, not repeated. */
const ST1 = [
  ["Department of Science and Technology (DST)","Ministry of Science and Technology","Set up in May 1971; funds research and runs missions such as Quantum and NM-ICPS.",""],
  ["Department of Biotechnology (DBT)","Ministry of Science and Technology","1986; grew out of the National Biotechnology Board (1982). Runs BIRAC and Genome India.",""],
  ["Department of Scientific and Industrial Research (DSIR)","Ministry of Science and Technology","1985; CSIR works under it.",""],
  ["Council of Scientific and Industrial Research (CSIR)","Department of Scientific and Industrial Research","1942; the Prime Minister is its President; about 37 national labs.",""],
  ["Department of Atomic Energy (DAE)","The Prime Minister directly","3 August 1954; BARC, NPCIL and the nuclear plants.",""],
  ["Department of Space (DoS)","The Prime Minister directly","1972; ISRO works under it (see the Space app).",""],
  ["India Meteorological Department (IMD)","Ministry of Earth Sciences","1875; the ministry itself was formed in 2006.",""],
  ["Indian Council of Medical Research (ICMR)","Department of Health Research","1911 as the Indian Research Fund Association; renamed ICMR in 1949.",""],
  ["Indian Council of Agricultural Research (ICAR)","Department of Agricultural Research and Education","16 July 1929, as the Imperial Council of Agricultural Research.",""],
  ["Defence Research and Development Organisation (DRDO)","Ministry of Defence","1958; its chairman is also Secretary, Department of Defence R&D.",""]
];
const ST2 = [
  ["National Aerospace Laboratories (NAL)","Bengaluru","Civil aircraft — the Hansa trainer and the Saras transport plane.",""],
  ["Central Scientific Instruments Organisation (CSIO)","Chandigarh","Scientific and medical instruments.",""],
  ["Institute of Microbial Technology (IMTECH)","Chandigarh","Microbes; keeps a national collection of microbe cultures.",""],
  ["Indian Institute of Chemical Technology (IICT)","Hyderabad","Chemical technology, drugs and pesticides.",""],
  ["Institute of Genomics and Integrative Biology (IGIB)","New Delhi","Genomics; developed the CRISPR therapy BIRSA 101 (2025).",""],
  ["Central Road Research Institute (CRRI)","New Delhi","Roads and traffic.",""],
  ["Central Building Research Institute (CBRI)","Roorkee","Buildings and earthquake-safe design.",""],
  ["Indian Institute of Petroleum (IIP)","Dehradun","Petroleum, fuels and biofuels.",""],
  ["Institute of Himalayan Bioresource Technology (IHBT)","Palampur","Himalayan plants, tea and flowers.",""],
  ["Indian Institute of Integrative Medicine (IIIM)","Jammu","Drugs from plants; lavender farming in J&K (the 'Purple Revolution').",""],
  ["Central Institute of Medicinal and Aromatic Plants (CIMAP)","Lucknow","Medicinal and aromatic plants; leads the Aroma Mission.",""],
  ["Indian Institute of Toxicology Research (IITR)","Lucknow","Safety of chemicals, food and the environment.",""],
  ["National Metallurgical Laboratory (NML)","Jamshedpur","Metals and alloys — in the Steel City.",""],
  ["Central Mechanical Engineering Research Institute (CMERI)","Durgapur","Machines, small tractors and robots.",""],
  ["Central Institute of Mining and Fuel Research (CIMFR)","Dhanbad","Mining safety and coal.",""],
  ["Central Glass and Ceramic Research Institute (CGCRI)","Kolkata","Glass, ceramics and optical fibres.",""],
  ["Central Salt and Marine Chemicals Research Institute (CSMCRI)","Bhavnagar","Salt, seaweed and desalination on the Gujarat coast.",""],
  ["Central Electrochemical Research Institute (CECRI)","Karaikudi","Electrochemistry and batteries.",""],
  ["Structural Engineering Research Centre (SERC)","Chennai","Bridges, towers and big structures.",""],
  ["National Institute for Interdisciplinary Science and Technology (NIIST)","Thiruvananthapuram","Materials and agro-processing.",""],
  ["North East Institute of Science and Technology (NEIST)","Jorhat","Science for the north-east; earlier the Regional Research Laboratory.",""],
  ["Advanced Materials and Processes Research Institute (AMPRI)","Bhopal","New materials such as composites and foams.",""]
];

LESSONS.push(
{id:"ST1", heat:2, title:"Who runs Indian science: departments and councils", hi:"भारतीय विज्ञान कौन चलाता है: विभाग और परिषदें", blocks:[
  {k:"hot", h:"Asked often: the year each body began (<b>CSIR 1942, DAE 1954, DRDO 1958, DST 1971, DBT 1986, MoES 2006</b>), which bodies sit <b>directly under the Prime Minister</b> (atomic energy and space), the old names of <b>ICMR</b> (1911) and <b>ICAR</b> (1929), and who heads <b>CSIR</b>."},
  {k:"story", h:"<p>Think of Indian science as a house with many rooms. The <b>Ministry of Science and Technology</b> holds three of them: the <b>Department of Science and Technology</b> (1971), which pays for research in universities and runs the big missions; the <b>Department of Biotechnology</b> (1986); and the <b>Department of Scientific and Industrial Research</b> (1985), under which the giant <b>CSIR</b> and its national labs work. CSIR is older than independent India — it began in 1942, and its first Director-General was <b>Shanti Swarup Bhatnagar</b>.</p><p>Two rooms are kept right next to the Prime Minister: <b>atomic energy</b> (DAE, 1954) and <b>space</b> (DoS, 1972), because they are strategic. Weather, oceans and the poles have their own <b>Ministry of Earth Sciences</b> (2006). Medicine and farming have councils of their own — <b>ICMR</b> and <b>ICAR</b> — and defence research belongs to <b>DRDO</b> under the Defence Ministry.</p>", key:"Three departments in the S&T ministry (DST, DBT, DSIR); two under the PM (atom, space); councils for medicine (ICMR), farming (ICAR) and industry (CSIR)."},
  {k:"table", title:"Who runs what", head:["Body","Works under","Remember"], rows: ST1.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"The people at the top", rows:[
    ["President of CSIR","The Prime Minister (CSIR's Director-General runs it day to day)"],
    ["First Director-General of CSIR","Shanti Swarup Bhatnagar"],
    ["First chairman, Atomic Energy Commission (1948)","Homi J. Bhabha"],
    ["Principal Scientific Adviser (post from 1999)","First: A. P. J. Abdul Kalam; then R. Chidambaram, K. VijayRaghavan and Ajay K. Sood (since 2022, as of 2026)"],
    ["PM-STIAC (2018)","Prime Minister's Science, Technology and Innovation Advisory Council — chaired by the Principal Scientific Adviser"],
    ["Ministers","Science and Technology and Earth Sciences have a Minister of State (Independent Charge) — Dr Jitendra Singh (as of 2026)"],
    ["BIRAC (2012)","Biotechnology Industry Research Assistance Council — DBT's not-for-profit company for biotech start-ups"],
    ["Vigyan Dhara (2024)","DST scheme that merged its three umbrella schemes into one"]]},
  {k:"trick", h:"<b>“Three in the ministry, two with the PM”</b> — DST, DBT, DSIR sit in the Ministry of Science and Technology; <b>Atom</b> (DAE) and <b>Space</b> (DoS) report straight to the Prime Minister. Years in a line: <b>42–54–58–71–86–06</b> = CSIR, DAE, DRDO, DST, DBT, MoES."},
  {k:"trap", h:"<b>CSIR</b> works under <b>DSIR</b>, not DST. <b>ICMR</b> is under the <b>Department of Health Research</b> (Health Ministry), not DBT; <b>ICAR</b> is under <b>DARE</b> (Agriculture Ministry). <b>DRDO</b> belongs to the <b>Defence</b> Ministry, and <b>ISRO</b> to the Department of Space — neither is in the S&T ministry."},
  {k:"link", h:"Where each institute has its headquarters — CSIR, NPL, NCL, CCMB, IMD, ICAR's crop institutes and ICMR's NIV — is in <a href=\"study-hq-founders.html?lesson=H4\">Headquarters &amp; Founders</a> (H4, H5). ISRO's centres and the Department of Space are in <a href=\"study-space.html\">Space &amp; ISRO</a> (L5); DRDO's missiles are in <a href=\"study-defence.html?lesson=F5\">Defence</a>."}
], sum:["The Ministry of Science and Technology has three departments: DST (1971), DBT (1986) and DSIR (1985).","CSIR (1942) works under DSIR; the Prime Minister is its President; its first DG was S. S. Bhatnagar.","DAE (1954) and the Department of Space (1972) work directly under the Prime Minister.","Ministry of Earth Sciences (2006) runs IMD, NCPOR, INCOIS and NIOT.","ICMR (1911, Department of Health Research); ICAR (1929, DARE); DRDO (1958, Ministry of Defence).","The first Principal Scientific Adviser (1999) was A. P. J. Abdul Kalam; PM-STIAC is chaired by the PSA."]},

{id:"ST2", heat:2, title:"CSIR labs, science policies, ANRF and science days", hi:"सीएसआईआर प्रयोगशालाएँ, विज्ञान नीतियाँ, एएनआरएफ और विज्ञान दिवस", blocks:[
  {k:"hot", h:"Asked: a <b>CSIR lab and its city</b>, the <b>Scientific Policy Resolution (1958)</b> and the later policies, the <b>Anusandhan National Research Foundation</b> (2023) and its money, and <b>National Science Day</b> (28 February, the Raman effect)."},
  {k:"story", h:"<p>CSIR's labs are spread across the country, and each sits where its work makes sense: metals in <b>Jamshedpur</b>, the Steel City; mining and coal in <b>Dhanbad</b>; salt and seaweed on the coast at <b>Bhavnagar</b>; Himalayan plants at <b>Palampur</b>; aircraft at <b>Bengaluru</b>, where the Hansa and Saras planes were designed.</p><p>The rules for science came in steps. Nehru's <b>Scientific Policy Resolution</b> of <b>1958</b> promised to build science into the nation; the <b>Technology Policy Statement</b> followed in 1983, the <b>S&amp;T Policy</b> in 2003 and the <b>Science, Technology and Innovation Policy</b> in 2013. In <b>2023</b> Parliament passed the <b>Anusandhan National Research Foundation (ANRF) Act</b>, which set up one big funder for research in universities and colleges, chaired by the Prime Minister, in place of the old Science and Engineering Research Board.</p>", key:"Lab cities follow the work (metals Jamshedpur, coal Dhanbad, salt Bhavnagar); policies 1958, 1983, 2003, 2013; ANRF 2023."},
  {k:"table", title:"CSIR labs and their cities", head:["Lab","City","Known for"], rows: ST2.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"India's science policies", head:["Policy","Year","Prime Minister"], rows:[
    ["Scientific Policy Resolution","1958","Jawaharlal Nehru"],
    ["Technology Policy Statement","1983","Indira Gandhi"],
    ["Science and Technology Policy","2003","Atal Bihari Vajpayee"],
    ["Science, Technology and Innovation Policy","2013","Manmohan Singh — released at the 100th Indian Science Congress, Kolkata"],
    ["Draft Science, Technology and Innovation Policy (STIP)","2020","Draft put out for comment in December 2020"]]},
  {k:"facts", title:"ANRF and the research fund", rows:[
    ["Law","Anusandhan National Research Foundation Act, 2023 (passed August 2023; in force February 2024)"],
    ["Replaced","The Science and Engineering Research Board (SERB, 2008)"],
    ["Board","The Prime Minister is President; the Ministers of Science and Technology and of Education are Vice-Presidents"],
    ["Department","DST is its administrative department"],
    ["Money","₹50,000 crore over five years (2023–28) — about ₹14,000 crore from the government, the rest from industry and other non-government sources"],
    ["RDI scheme (2025)","A ₹1 lakh crore Research, Development and Innovation fund for long-term, low-cost loans to private R&D, held through a special fund under ANRF"]]},
  {k:"table", title:"Science days", head:["Day","Date","Why this date"], rows:[
    ["National Science Day","28 February","C. V. Raman announced the Raman effect in 1928; first observed in 1987"],
    ["National Technology Day","11 May","Pokhran-II tests, 1998"],
    ["National Space Day","23 August","Chandrayaan-3 landed on the Moon, 2023"],
    ["National Mathematics Day","22 December","Birthday of Srinivasa Ramanujan"],
    ["Engineers' Day","15 September","Birthday of M. Visvesvaraya"]]},
  {k:"facts", title:"Old academies, still asked", rows:[
    ["Indian Science Congress Association","1914; first session in Kolkata (then Calcutta)"],
    ["Indian Academy of Sciences, Bengaluru","Founded by C. V. Raman in 1934"],
    ["Indian National Science Academy (INSA), New Delhi","Founded in 1935 as the National Institute of Sciences of India"],
    ["National Science Day 2026 theme","'Women in Science: Catalysing Viksit Bharat'"]]},
  {k:"trick", h:"Policy years — <b>“58, 83, 03, 13”</b>: each a generation apart, Nehru → Indira → Vajpayee → Manmohan. ANRF = <b>A</b>ct 20<b>23</b>, money <b>50</b>,000 crore, chaired by the <b>PM</b>."},
  {k:"trap", h:"National Science Day (<b>28 February</b>) marks the <b>discovery</b> of the Raman effect, not Raman's birthday (7 November). <b>National Technology Day</b> is 11 May. Two CSIR labs are in <b>Chandigarh</b> (CSIO, IMTECH) and two in <b>Lucknow</b> (CIMAP, IITR) — and more Lucknow labs are in the HQ app."},
  {k:"link", h:"The older CSIR labs — NPL and the National Chemical Laboratory, CCMB, NGRI, CDRI, NBRI, CFTRI, CLRI, NEERI, CEERI and NIO — are in <a href=\"study-hq-founders.html?lesson=H4\">Headquarters &amp; Founders</a>. All the days of the year are in <a href=\"study-important-days.html?lesson=D2\">Important Days</a>; Raman and Bhatnagar themselves are in <a href=\"study-inventions.html?lesson=I9\">Inventions &amp; Discoveries</a>."}
], sum:["CSIR labs by city: NAL Bengaluru, IICT Hyderabad, IGIB Delhi, CBRI Roorkee, IIP Dehradun, IHBT Palampur, IIIM Jammu.","CIMAP and IITR Lucknow, NML Jamshedpur, CMERI Durgapur, CIMFR Dhanbad, CSMCRI Bhavnagar, CECRI Karaikudi, SERC Chennai.","Policies: Scientific Policy Resolution 1958, Technology Policy Statement 1983, S&T Policy 2003, STI Policy 2013, draft STIP 2020.","ANRF Act 2023 replaced SERB; the PM chairs its board; ₹50,000 crore over five years; DST is its department.","A ₹1 lakh crore RDI fund (2025) lends to private research through ANRF.","National Science Day is 28 February (Raman effect, 1928); 2026 theme: Women in Science."]}
);

pairQs("ST1", ST1.filter(r => !/Scientific and Industrial Research/.test(r[0])), { q: t => `Under which ministry, department or office does the ${t} work?` });
pairQs("ST2", ST2, { q: t => `CSIR's ${t} is in which city?`, extra: ["Pune", "Mysuru"] });

QB.push(
["ST1","The Department of Science and Technology (DST) was set up in:",["1971","1986","1958","1942"],"DST was created in May 1971; DBT came in 1986 and DRDO in 1958.",""],
["ST1","The Department of Biotechnology (DBT) was set up in:",["1986","1971","1991","2006"],"DBT began in 1986, growing out of the National Biotechnology Board of 1982.",""],
["ST1","The Council of Scientific and Industrial Research (CSIR) was established in:",["1942","1947","1958","1971"],"CSIR was set up in 1942, five years before independence.",""],
["ST1","Who is the President of CSIR?",["The Prime Minister","The President of India","The Minister of Science and Technology","The Principal Scientific Adviser"],"The Prime Minister is CSIR's ex-officio President; its Director-General runs it day to day.",""],
["ST1","Who was the first Director-General of CSIR?",["Shanti Swarup Bhatnagar","Homi J. Bhabha","C. V. Raman","Meghnad Saha"],"Bhatnagar led CSIR from its start; the country's young-scientist award still carries his name.",""],
["ST1","Which two departments work directly under the Prime Minister?",["Atomic Energy and Space","Science and Technology and Biotechnology","Health Research and Biotechnology","Earth Sciences and Scientific and Industrial Research"],"Because they are strategic, DAE (1954) and the Department of Space (1972) report straight to the PM.",""],
["ST1","The Ministry of Earth Sciences was formed in:",["2006","1981","1971","2014"],"It was formed in 2006; the Department of Ocean Development (1981) was one of its roots.",""],
["ST1","The Indian Council of Medical Research began in 1911 under which name?",["Indian Research Fund Association","Imperial Medical Research Board","Indian Medical Service Council","All-India Institute of Hygiene"],"It was renamed the Indian Council of Medical Research in 1949.",""],
["ST1","In which year was the Indian Council of Agricultural Research set up?",["1929","1911","1947","1965"],"ICAR was set up on 16 July 1929 as the Imperial Council of Agricultural Research.",""],
["ST1","ICAR was set up on the advice of which body?",["Royal Commission on Agriculture","Famine Commission","Planning Commission","Sarkaria Commission"],"The Royal Commission on Agriculture (report 1928) recommended a central council for farm research.",""],
["ST1","DRDO was formed in:",["1958","1962","1947","1971"],"DRDO was formed in 1958 by joining the Defence Science Organisation with Army technical establishments.",""],
["ST1","Which of these is NOT a department of the Ministry of Science and Technology?",["Department of Atomic Energy","Department of Science and Technology","Department of Biotechnology","Department of Scientific and Industrial Research"],"The Department of Atomic Energy works directly under the Prime Minister.",""],
["ST1","The Department of Atomic Energy was set up on 3 August of which year?",["1954","1948","1962","1974"],"The Atomic Energy Commission came first, in 1948; DAE followed in 1954.",""],
["ST1","Who was the first chairman of India's Atomic Energy Commission (1948)?",["Homi J. Bhabha","Vikram Sarabhai","Raja Ramanna","Meghnad Saha"],"Homi J. Bhabha was its first chairman; he also founded TIFR (1945).",""],
["ST1","Who was the first Principal Scientific Adviser to the Government of India (1999)?",["A. P. J. Abdul Kalam","R. Chidambaram","K. VijayRaghavan","Ajay K. Sood"],"The post was created in 1999 with Kalam; Chidambaram followed in 2001.",""],
["ST1","The Prime Minister's Science, Technology and Innovation Advisory Council (PM-STIAC) is chaired by:",["The Principal Scientific Adviser","The Prime Minister","The Cabinet Secretary","The Vice-Chairman of NITI Aayog"],"PM-STIAC (2018) is chaired by the Principal Scientific Adviser and advises the PM.",""],
["ST1","BIRAC, which helps biotech start-ups, was set up by:",["Department of Biotechnology","Department of Science and Technology","CSIR","ICMR"],"BIRAC (2012) is a not-for-profit company of the Department of Biotechnology.",""],
["ST1","The Vigyan Dhara scheme (2024) merged the umbrella schemes of which department?",["Department of Science and Technology","Department of Biotechnology","Department of Space","Ministry of Earth Sciences"],"Vigyan Dhara merged DST's three umbrella schemes into one.",""],
["ST1","The National Biotechnology Board (1982) later became the:",["Department of Biotechnology","Biotechnology Industry Research Assistance Council","Indian Council of Medical Research","National Institute of Immunology"],"It became the Department of Biotechnology in 1986.",""],
["ST1","Which ministry is the Indian Council of Agricultural Research part of?",["Ministry of Agriculture and Farmers Welfare","Ministry of Science and Technology","Ministry of Rural Development","Ministry of Earth Sciences"],"ICAR is under the Department of Agricultural Research and Education in the Agriculture Ministry.",""],
["ST1","Which body is India's apex body for medical research?",["ICMR","CSIR","ICAR","DRDO"],"ICMR, under the Department of Health Research, is the apex body for biomedical research.",""],

["ST2","India's first science policy, the Scientific Policy Resolution, was adopted in:",["1958","1947","1968","1983"],"Nehru's government adopted it in 1958; the Technology Policy Statement came in 1983.",""],
["ST2","The Technology Policy Statement was issued in:",["1983","1958","2003","1971"],"It was issued under Indira Gandhi in 1983.",""],
["ST2","India's Science and Technology Policy of 2003 came under which Prime Minister?",["Atal Bihari Vajpayee","Manmohan Singh","P. V. Narasimha Rao","Narendra Modi"],"The S&T Policy 2003 was announced while Vajpayee was Prime Minister.",""],
["ST2","The Science, Technology and Innovation Policy 2013 was released at the Indian Science Congress in:",["Kolkata","Bengaluru","Mumbai","Tirupati"],"It was released at the 100th session of the Indian Science Congress, Kolkata, in January 2013.",""],
["ST2","The Anusandhan National Research Foundation was set up under an Act of:",["2023","2020","2019","2025"],"Parliament passed the ANRF Act in August 2023; it came into force in February 2024.",""],
["ST2","Which body did the Anusandhan National Research Foundation replace?",["Science and Engineering Research Board","University Grants Commission","Indian National Science Academy","Council of Scientific and Industrial Research"],"The ANRF Act repealed the SERB Act, 2008, and took over SERB's work.",""],
["ST2","Who is the President of the Governing Board of the Anusandhan National Research Foundation?",["The Prime Minister","The Minister of Education","The President of India","The Principal Scientific Adviser"],"The PM is President; the Ministers of S&T and Education are Vice-Presidents.",""],
["ST2","The ANRF is expected to spend about how much over its first five years (2023–28)?",["₹50,000 crore","₹5,000 crore","₹1 lakh crore","₹10,000 crore"],"About ₹14,000 crore from the government and the rest from non-government sources.",""],
["ST2","The Research, Development and Innovation (RDI) scheme approved in 2025 sets up a fund of:",["₹1 lakh crore","₹50,000 crore","₹10,000 crore","₹2 lakh crore"],"It gives long-term, low-cost finance to private R&D, through a special fund under ANRF.",""],
["ST2","National Science Day (28 February) marks:",["The announcement of the Raman effect","C. V. Raman's birthday","The founding of CSIR","India's first nuclear test"],"Raman announced the effect on 28 February 1928; the day has been observed since 1987.",""],
["ST2","What was the theme of National Science Day 2026?",["Women in Science: Catalysing Viksit Bharat","Science for a Sustainable Future","Global Science for Global Wellbeing","Indigenous Technologies for Viksit Bharat"],"The 2026 theme put women scientists at the centre of the 'Viksit Bharat' goal.",""],
["ST2","Which CSIR lab designed the Saras light transport aircraft?",["National Aerospace Laboratories","Central Mechanical Engineering Research Institute","Central Scientific Instruments Organisation","Structural Engineering Research Centre"],"NAL, Bengaluru, designed the Hansa trainer and the Saras transport aircraft.",""],
["ST2","The 'Purple Revolution' in Jammu and Kashmir is linked to the farming of:",["Lavender","Saffron","Purple rice","Brinjal"],"CSIR's Aroma Mission helped farmers in J&K grow lavender for its oil.",""],
["ST2","The Indian Science Congress Association held its first session in Kolkata in:",["1914","1911","1929","1947"],"It was founded in 1914; the first session met in Calcutta that year.",""],
["ST2","Who founded the Indian Academy of Sciences in Bengaluru in 1934?",["C. V. Raman","Homi J. Bhabha","Meghnad Saha","Jagadish Chandra Bose"],"Raman founded it in 1934 while at the Indian Institute of Science.",""],
["ST2","Which CSIR lab in Kolkata works on glass, ceramics and optical fibres?",["Central Glass and Ceramic Research Institute","Indian Institute of Chemical Technology","Central Building Research Institute","National Metallurgical Laboratory"],"CGCRI is in Kolkata.",""]
);
