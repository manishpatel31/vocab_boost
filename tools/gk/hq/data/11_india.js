/* Part 2 · H4 space, atomic and science institutes; H5 farm, health research and commodity boards; H6 banks and financial bodies (as of October 2026). */
const H4 = [
  ["ISRO (Indian Space Research Organisation)","Bengaluru","Founded 15 August 1969; HQ Antariksh Bhavan.","p"],
  ["Vikram Sarabhai Space Centre","Thiruvananthapuram","ISRO's lead centre for launch vehicles; grew from the Thumba rocket station (1963).","p"],
  ["Satish Dhawan Space Centre (launch site)","Sriharikota","India's spaceport, in Andhra Pradesh.","p"],
  ["Space Applications Centre","Ahmedabad","Builds satellite payloads.",""],
  ["Physical Research Laboratory","Ahmedabad","Founded 1947 by Vikram Sarabhai — 'cradle of space science in India'.","p"],
  ["National Remote Sensing Centre","Hyderabad","",""],
  ["ISRO Propulsion Complex","Mahendragiri","Tamil Nadu; tests rocket engines.",""],
  ["Bhabha Atomic Research Centre (BARC)","Mumbai","At Trombay; set up 1954, renamed after Homi Bhabha in 1967.","p"],
  ["Indira Gandhi Centre for Atomic Research","Kalpakkam","Tamil Nadu; fast breeder reactors.","p"],
  ["DRDO","New Delhi","1958.",""],
  ["Indian Institute of Science","Bengaluru","1909, founded with help from Jamsetji Tata.","p"],
];
const H4S = [
  ["CSIR (Council of Scientific and Industrial Research)","New Delhi","1942; runs about 37 national labs.","p"],
  ["National Physical Laboratory","New Delhi","Keeps Indian Standard Time.","p"],
  ["National Chemical Laboratory","Pune","",""],
  ["Indian Institute of Tropical Meteorology","Pune","Monsoon research.","p"],
  ["Centre for Cellular and Molecular Biology","Hyderabad","",""],
  ["National Geophysical Research Institute","Hyderabad","",""],
  ["Central Drug Research Institute","Lucknow","","p"],
  ["National Botanical Research Institute","Lucknow","",""],
  ["Central Food Technological Research Institute","Mysuru","","p"],
  ["Central Leather Research Institute","Chennai","",""],
  ["National Environmental Engineering Research Institute","Nagpur","",""],
  ["Central Electronics Engineering Research Institute","Pilani","",""],
  ["National Institute of Oceanography","Dona Paula (Goa)","1966.","p"],
  ["National Centre for Polar and Ocean Research","Vasco da Gama (Goa)","Runs India's Antarctic and Arctic stations.",""],
  ["India Meteorological Department","New Delhi","1875; HQ Mausam Bhawan.","p"],
  ["Survey of India","Dehradun","1767 — India's oldest scientific department.","p|SSC CHSL · 15 Nov 2015 (Evening)"],
  ["Geological Survey of India","Kolkata","1851.","p"],
  ["Zoological Survey of India","Kolkata","1916.","p"],
  ["Botanical Survey of India","Kolkata","1890.","p"],
  ["Forest Research Institute","Dehradun","1906.","p"],
  ["Wildlife Institute of India","Dehradun","","p"]
];
const H5 = [
  ["ICAR (Indian Council of Agricultural Research)","New Delhi","1929.","p"],
  ["Indian Agricultural Research Institute (Pusa Institute)","New Delhi","Started at Pusa, Bihar (1905); moved to Delhi after the 1934 earthquake.","p"],
  ["ICMR (Indian Council of Medical Research)","New Delhi","1911 — one of the oldest medical research bodies in the world.","p"],
  ["National Dairy Research Institute","Karnal","Haryana.","p"],
  ["Central Soil Salinity Research Institute","Karnal","",""],
  ["Central Arid Zone Research Institute","Jodhpur","",""],
  ["Central Potato Research Institute","Shimla","","p"],
  ["Indian Institute of Sugarcane Research","Lucknow","",""],
  ["Sugarcane Breeding Institute","Coimbatore","",""],
  ["National Rice Research Institute","Cuttack","1946 (Central Rice Research Institute).","p"],
  ["Central Institute for Cotton Research","Nagpur","",""],
  ["Indian Institute of Pulses Research","Kanpur","",""],
  ["Indian Institute of Vegetable Research","Varanasi","",""],
  ["Indian Institute of Spices Research","Kozhikode","",""],
  ["Central Plantation Crops Research Institute","Kasaragod","Coconut, arecanut, cocoa.",""],
  ["Central Marine Fisheries Research Institute","Kochi","",""],
  ["National Research Centre on Camel","Bikaner","",""],
  ["Central Institute for Research on Buffaloes","Hisar","",""],
  ["Indian Veterinary Research Institute","Izatnagar (Bareilly)","1889.",""],
  ["National Institute of Virology","Pune","ICMR lab; isolated India's first COVID-19 virus sample.","p"],
];
const H5B = [
  ["Tea Board","Kolkata","1954.","p"],
  ["Coffee Board","Bengaluru","1942.","p"],
  ["Rubber Board","Kottayam","1947.","p"],
  ["Spices Board","Kochi","1987.","p"],
  ["Coir Board","Kochi","1953.",""],
  ["Central Silk Board","Bengaluru","1948.","p"],
  ["National Jute Board","Kolkata","",""],
  ["Tobacco Board","Guntur","",""],
  ["National Dairy Development Board","Anand","1965; Verghese Kurien was its first chairman.","p"],
  ["MPEDA (Marine Products Export Development Authority)","Kochi","",""],
  ["APEDA (Agricultural and Processed Food Products Export Development Authority)","New Delhi","",""],
  ["NAFED","New Delhi","Farmers' co-operative marketing federation, 1958.",""]
];
const H6 = [
  ["Reserve Bank of India","Mumbai","Set up 1 April 1935 in Calcutta; moved to Bombay in 1937.","p"],
  ["SEBI","Mumbai","1988; statutory powers in 1992.","p"],
  ["NABARD","Mumbai","1982.","p"],
  ["EXIM Bank","Mumbai","1982.",""],
  ["SIDBI","Lucknow","1990 — the only one of these based in Lucknow.","p"],
  ["National Housing Bank","New Delhi","1988.",""],
  ["IRDAI (insurance regulator)","Hyderabad","1999.","p"],
  ["PFRDA (pension regulator)","New Delhi","2003.",""],
  ["National Payments Corporation of India (UPI, RuPay)","Mumbai","2008.","p"],
  ["Life Insurance Corporation of India","Mumbai","1956.","p"],
  ["Bureau of Indian Standards","New Delhi","1986 (as ISI in 1947).",""]
];
const H6B = [
  ["State Bank of India","Mumbai","1955 (from the Imperial Bank of India).","p"],
  ["Punjab National Bank","New Delhi","Founded 1894 in Lahore — first Indian bank run with Indian capital alone.","p"],
  ["Bank of Baroda","Vadodara","1908, Maharaja Sayajirao Gaekwad III.","p"],
  ["Canara Bank","Bengaluru","1906, Mangaluru.","p"],
  ["Indian Bank","Chennai","1907.",""],
  ["Indian Overseas Bank","Chennai","1937.",""],
  ["UCO Bank","Kolkata","1943.","p"],
  ["Bank of Maharashtra","Pune","1935.",""],
  ["Union Bank of India","Mumbai","1919, inaugurated by Mahatma Gandhi.",""],
  ["Punjab & Sind Bank","New Delhi","1908.",""],
  ["Bank of India","Mumbai","1906.",""],
  ["Central Bank of India","Mumbai","1911 — the first fully Indian-owned commercial bank.",""]
];

LESSONS.push(
{id:"H4", heat:3, title:"Space, atomic and science institutes", hi:"अंतरिक्ष, परमाणु और विज्ञान संस्थान", blocks:[
  {k:"hot", h:"Most asked: <b>ISRO — Bengaluru</b>, <b>BARC — Mumbai (Trombay)</b>, <b>Survey of India — Dehradun</b>, <b>ZSI, BSI and GSI — Kolkata</b>, <b>NIO — Goa</b>, <b>IMD — New Delhi</b>, <b>CFTRI — Mysuru</b>, <b>Sriharikota</b> for launches."},
  {k:"story", h:"<p>India's space story begins in a church at <b>Thumba</b> near Thiruvananthapuram, where the first rocket rose in 1963. <b>Vikram Sarabhai</b> had founded the <b>Physical Research Laboratory</b> in Ahmedabad in 1947, and <b>ISRO</b> followed in 1969 with its home in <b>Bengaluru</b>. Rockets are built at the <b>Vikram Sarabhai Space Centre</b> and launched from <b>Sriharikota</b>. Homi Bhabha's atomic research centre (<b>BARC</b>) stands at <b>Trombay</b>, Mumbai.</p><p>Older still are the great surveys. The <b>Survey of India</b> (1767, Dehradun) mapped the land; the <b>Geological</b> (1851), <b>Botanical</b> (1890) and <b>Zoological</b> (1916) surveys all sit in <b>Kolkata</b>. Weather comes from the <b>IMD</b> in New Delhi, and the sea is studied at the <b>National Institute of Oceanography</b> in Goa.</p>", key:"ISRO — Bengaluru; VSSC — Thiruvananthapuram; launches — Sriharikota; BARC — Mumbai; Survey of India — Dehradun; GSI, ZSI, BSI — Kolkata."},
  {k:"table", title:"Space, atomic and science centres", head:["Institute","Located in","Note"], rows: H4.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"CSIR labs, surveys and earth-science bodies", head:["Institute","Headquarters","Note"], rows: H4S.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Kolkata keeps the three G-Z-B surveys”</b> — Geological, Zoological, Botanical. <b>“Dehradun draws maps and trees”</b> — Survey of India, Forest Research Institute, Wildlife Institute. <b>“Lucknow cures with plants”</b> — CDRI (drugs), NBRI (botany)."},
  {k:"trap", h:"<b>ISRO</b> is in Bengaluru, but rockets fly from <b>Sriharikota</b> (Andhra Pradesh) and are designed in <b>Thiruvananthapuram</b>. <b>BARC</b> is in Mumbai; the fast-breeder centre is at <b>Kalpakkam</b>. <b>CFTRI</b> (food) is in Mysuru, not Bengaluru. The <b>Survey of India</b> is in Dehradun, not Kolkata."}
], sum:["ISRO — Bengaluru (1969); VSSC — Thiruvananthapuram; SDSC — Sriharikota; SAC and PRL — Ahmedabad.","BARC — Trombay, Mumbai; IGCAR — Kalpakkam; IISc — Bengaluru.","CSIR, NPL and IMD — New Delhi; NCL and IITM — Pune; CFTRI — Mysuru; CDRI — Lucknow.","Survey of India, FRI and WII — Dehradun; GSI, ZSI and BSI — Kolkata.","NIO — Dona Paula, Goa; NCPOR — Vasco da Gama, Goa."]},

{id:"H5", heat:2, title:"Farm and health research, commodity boards", hi:"कृषि व स्वास्थ्य अनुसंधान, वस्तु बोर्ड", blocks:[
  {k:"hot", h:"Pair the crop with its city: <b>potato — Shimla</b>, <b>rice — Cuttack</b>, <b>dairy — Karnal</b>, <b>camel — Bikaner</b>, <b>spices — Kozhikode</b>, <b>sugarcane — Lucknow / Coimbatore</b>. Boards: <b>Tea — Kolkata</b>, <b>Coffee — Bengaluru</b>, <b>Rubber — Kottayam</b>, <b>Spices and Coir — Kochi</b>."},
  {k:"story", h:"<p>Farm science in India is run by the <b>ICAR</b> from New Delhi. Its institutes sit where the crop grows: <b>potatoes</b> in the hills at <b>Shimla</b>, <b>rice</b> on the Mahanadi delta at <b>Cuttack</b>, <b>dairy</b> at <b>Karnal</b>, <b>camels</b> in the desert at <b>Bikaner</b>, <b>spices</b> on the Malabar coast at <b>Kozhikode</b> and <b>coconut</b> at <b>Kasaragod</b>. Medical research is led by the <b>ICMR</b> (1911), whose <b>National Institute of Virology</b> is in Pune.</p><p>The commodity boards follow the same logic. <b>Tea</b> is run from <b>Kolkata</b> (Assam and Darjeeling), <b>coffee</b> and <b>silk</b> from <b>Bengaluru</b>, <b>rubber</b> from <b>Kottayam</b>, and <b>spices</b> and <b>coir</b> from <b>Kochi</b>. Milk's <b>NDDB</b> is at <b>Anand</b>, the home of Amul.</p>", key:"Potato — Shimla; rice — Cuttack; dairy — Karnal; camel — Bikaner; tea — Kolkata; coffee — Bengaluru; rubber — Kottayam; spices — Kochi; NDDB — Anand."},
  {k:"table", title:"Farm and health research institutes", head:["Institute","Headquarters","Note"], rows: H5.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Commodity boards", head:["Board","Headquarters","Note"], rows: H5B.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Kerala boards: <b>“Kottayam Rubs, Kochi Spices and Coirs”</b> — Rubber Board Kottayam; Spices, Coir and MPEDA Kochi. <b>“Coffee and Silk drink in Bengaluru, Tea and Jute in Kolkata.”</b>"},
  {k:"trap", h:"The <b>Spices Board</b> is in <b>Kochi</b>, but the <b>Indian Institute of Spices Research</b> is in <b>Kozhikode</b>. <b>Sugarcane</b> has two: the research institute in <b>Lucknow</b> and the breeding institute in <b>Coimbatore</b>. The <b>Tobacco Board</b> is in Guntur."}
], sum:["ICAR, IARI (Pusa) and ICMR — New Delhi.","NDRI — Karnal; CPRI — Shimla; NRRI — Cuttack; CAZRI — Jodhpur; camel centre — Bikaner.","IISR (spices) — Kozhikode; CPCRI — Kasaragod; CMFRI — Kochi; NIV — Pune.","Tea Board and Jute Board — Kolkata; Coffee Board and Silk Board — Bengaluru.","Rubber Board — Kottayam; Spices Board, Coir Board, MPEDA — Kochi; NDDB — Anand."]},

{id:"H6", heat:3, title:"Banks and financial bodies", hi:"बैंक और वित्तीय संस्थान", blocks:[
  {k:"hot", h:"Banking-awareness classics: <b>RBI, SEBI, NABARD, EXIM, NPCI, LIC — Mumbai</b>; <b>SIDBI — Lucknow</b>; <b>IRDAI — Hyderabad</b>; <b>Bank of Baroda — Vadodara</b>; <b>Canara Bank — Bengaluru</b>; <b>PNB — New Delhi</b>; <b>UCO — Kolkata</b>."},
  {k:"story", h:"<p>Most of India's money lives in <b>Mumbai</b>. The <b>Reserve Bank</b> opened in Calcutta in 1935 but moved to Bombay in 1937, and the market regulator <b>SEBI</b>, the farm bank <b>NABARD</b>, the <b>EXIM Bank</b>, <b>LIC</b> and the UPI-maker <b>NPCI</b> are all there too. Two regulators break the rule: small industry's <b>SIDBI</b> is in <b>Lucknow</b>, and the insurance regulator <b>IRDAI</b> is in <b>Hyderabad</b>.</p><p>Each public sector bank carries its birthplace: <b>Bank of Baroda</b> in Vadodara (the old Baroda state), <b>Canara Bank</b> in Bengaluru, <b>Indian Bank</b> and <b>Indian Overseas Bank</b> in Chennai, <b>UCO Bank</b> in Kolkata, <b>Bank of Maharashtra</b> in Pune, and <b>Punjab National Bank</b> — founded in Lahore — now in New Delhi.</p>", key:"Mumbai = RBI, SEBI, NABARD, EXIM, NPCI, LIC, SBI; Lucknow = SIDBI; Hyderabad = IRDAI; Vadodara = BoB; Chennai = Indian Bank, IOB."},
  {k:"table", title:"Regulators and financial institutions", head:["Body","Headquarters","Note"], rows: H6.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Public sector banks", head:["Bank","Headquarters","Note"], rows: H6B.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Small lions live in Lucknow”</b> — SIDBI (small industries). <b>“Insure in Hyderabad”</b> — IRDAI. The two Chennai banks both start with <b>“Indian”</b> — Indian Bank and Indian Overseas Bank."},
  {k:"trap", h:"<b>SIDBI</b> is in <b>Lucknow</b>, not Mumbai. <b>IRDAI</b> moved to <b>Hyderabad</b>; the pension regulator <b>PFRDA</b> is in New Delhi. The RBI's <b>first</b> office was in <b>Calcutta</b> (1935). <b>PNB</b> was founded in <b>Lahore</b>."}
], sum:["RBI (1935), SEBI, NABARD, EXIM Bank, NPCI and LIC — Mumbai.","SIDBI — Lucknow; IRDAI — Hyderabad; PFRDA and National Housing Bank — New Delhi.","SBI, Bank of India, Central Bank, Union Bank — Mumbai; PNB, Punjab & Sind — New Delhi.","Bank of Baroda — Vadodara; Canara Bank — Bengaluru; Bank of Maharashtra — Pune.","Indian Bank and Indian Overseas Bank — Chennai; UCO Bank — Kolkata."]}
);

pairQs("H4", H4, { q: t => `${t} is located in:`, rq: a => `Which space or science centre is located in ${a}?` });
pairQs("H4", H4S, { q: t => `The ${t} is headquartered in:` });
pairQs("H5", H5, { q: t => `Where is the ${t} located?` });
pairQs("H5", H5B, { q: t => `The headquarters of the ${t} is in:` });
pairQs("H6", H6, { q: t => `Where is the headquarters of ${t.startsWith("National") || t.startsWith("Life") || t.startsWith("Bureau") || t.startsWith("Reserve") ? "the " + t : t}?`, rq: a => `Which of these bodies is headquartered in ${a}?`, extra: ["Kolkata","Chennai"] });
pairQs("H6", H6B, { q: t => `The head office of ${t} is in:`, rq: a => `Which public sector bank has its head office in ${a}?` });

QB.push(
["H4","India's first rocket was launched in 1963 from:",["Thumba","Sriharikota","Chandipur","Balasore"],"Thumba Equatorial Rocket Launching Station, near Thiruvananthapuram.","p"],
["H4","ISRO was founded in the year:",["1969","1962","1972","1975"],"On 15 August 1969; INCOSPAR (1962) came before it.","p"],
["H4","Which laboratory keeps Indian Standard Time?",["National Physical Laboratory, New Delhi","IMD, New Delhi","PRL, Ahmedabad","IISc, Bengaluru"],"CSIR-NPL maintains IST.","p"],
["H4","Which is India's oldest scientific department (1767)?",["Survey of India","Geological Survey of India","India Meteorological Department","Botanical Survey of India"],"Headquartered in Dehradun.","p"],
["H4","The Physical Research Laboratory in Ahmedabad was founded by:",["Vikram Sarabhai","Homi J. Bhabha","C. V. Raman","Satish Dhawan"],"In 1947 — the 'cradle of space sciences in India'.","p"],
["H5","Which body is the apex organisation for medical research in India?",["ICMR","ICAR","CSIR","AIIMS"],"Set up in 1911 as the Indian Research Fund Association.",""],
["H5","Which board is headquartered in Kottayam, Kerala?",["Rubber Board","Spices Board","Coir Board","Coffee Board"],"Kerala grows most of India's natural rubber.",""],
["H5","Who was the first chairman of the National Dairy Development Board?",["Verghese Kurien","Tribhuvandas Patel","M. S. Swaminathan","Lal Bahadur Shastri"],"The 'Father of the White Revolution'.","p"],
["H6","When the RBI opened in 1935, its central office was in:",["Calcutta","Bombay","Delhi","Madras"],"It moved to Bombay in 1937.","p"],
["H6","Which was the first bank in India run entirely with Indian capital?",["Punjab National Bank","State Bank of India","Bank of Baroda","Allahabad Bank"],"Founded in Lahore in 1894.",""],
["H6","The State Bank of India was formed in 1955 from the:",["Imperial Bank of India","Bank of Bengal","Reserve Bank of India","Central Bank of India"],"On the recommendation of the Gorwala Committee.","p"]
);

LASTMOMENT.push(
{t:"Science HQs", era:["hq"], rows:[["ISRO","Bengaluru"],["VSSC","Thiruvananthapuram"],["Launch site","Sriharikota"],["BARC","Trombay, Mumbai"],["Survey of India","Dehradun"],["GSI, ZSI, BSI","Kolkata"],["NIO","Goa"],["IMD, NPL","New Delhi"]]},
{t:"Farm and boards", era:["hq"], rows:[["Potato","Shimla"],["Rice","Cuttack"],["Dairy","Karnal"],["Camel","Bikaner"],["Tea Board","Kolkata"],["Coffee Board","Bengaluru"],["Rubber Board","Kottayam"],["Spices, Coir","Kochi"]]},
{t:"Money HQs", era:["hq"], rows:[["RBI, SEBI, NABARD","Mumbai"],["SIDBI","Lucknow"],["IRDAI","Hyderabad"],["PFRDA","New Delhi"],["Bank of Baroda","Vadodara"],["Canara Bank","Bengaluru"],["Indian Bank, IOB","Chennai"],["UCO Bank","Kolkata"]]}
);
TILES.push(["1767","Survey of India","hq"],["1969","ISRO founded","hq"],["1935","RBI set up","hq"],["1911","ICMR (as IRFA)","hq"]);
