/* Science & Technology in India — Digital India and digital public infrastructure (ST7); polar, ocean and earth science (ST8).
   Counts are "as of" the date given. IT Act sections are in Computer Knowledge (C22); UPI's payment side in Banking (N7). */
const ST7A = [
  ["Aadhaar","2010","A 12-digit identity number linked to fingerprints, iris and face; issued by UIDAI.",""],
  ["DigiLocker","2015","A cloud locker for official documents; papers kept in it are legally valid.",""],
  ["UPI","2016","Instant bank-to-bank payments from a phone; built by NPCI.",""],
  ["UMANG","2017","One app for central, state and local government services.",""],
  ["ABHA (Ayushman Bharat Health Account)","2021","A 14-digit health ID under the Ayushman Bharat Digital Mission.",""],
  ["CoWIN","2021","Booked and recorded COVID-19 vaccinations and gave certificates with a QR code.",""],
  ["ONDC","2022","Open Network for Digital Commerce — any buyer app can reach any seller on the network.",""],
  ["Bhashini","2022","AI tools to translate and speak in Indian languages.",""],
  ["U-WIN","2024","A digital record of routine vaccinations for children and pregnant women.",""]
];
const ST7B = [
  ["Information Technology Act","2000","Made e-records and digital signatures legal and defined cyber crimes (see Computer Knowledge).",""],
  ["CERT-In","2004","National agency that handles cyber attacks; under Section 70B of the IT Act; incidents must be reported within 6 hours.",""],
  ["NCIIPC","2014","Protects critical information infrastructure such as power grids and banks; part of NTRO (Section 70A).",""],
  ["IT (Intermediary Guidelines and Digital Media Ethics Code) Rules","2021","Duties of social media, digital news and OTT platforms; an amendment of February 2026 covers AI-made 'synthetic' content.",""],
  ["Digital Personal Data Protection Act","2023","India's personal data law; a Data Protection Board; penalties up to ₹250 crore.",""],
  ["Telecommunications Act","2023","Replaced the Indian Telegraph Act of 1885.",""],
  ["DPDP Rules","2025","Notified on 14 November 2025; fully in force after 18 months (by May 2027).",""]
];
const ST8A = [
  ["Dakshin Gangotri","An ice shelf in Queen Maud Land, Antarctica","India's first Antarctic station (1983–84); buried in ice and closed in 1990; now a supply base.",""],
  ["Maitri","Schirmacher Oasis, Antarctica","Built in 1989; Maitri II, a greener replacement, is planned for about 2029.",""],
  ["Bharati","Larsemann Hills, Antarctica","Opened in 2012; built from 134 shipping containers.",""],
  ["Himadri","Ny-Ålesund, Svalbard (Norway), in the Arctic","India's first Arctic research station (2008).",""],
  ["IndARC","Kongsfjorden, Svalbard","India's first underwater observatory in the Arctic (2014).",""],
  ["Himansh","Chandra basin, Spiti (Himachal Pradesh)","A high-altitude station for studying Himalayan glaciers (2016).",""]
];
const ST8B = [
  ["India Meteorological Department (IMD)","New Delhi","Weather forecasts and warnings; set up in 1875.",""],
  ["National Centre for Polar and Ocean Research (NCPOR)","Vasco da Gama, Goa","Runs the Antarctic and Arctic stations; named NCAOR from 1998 to 2018.",""],
  ["Indian National Centre for Ocean Information Services (INCOIS)","Hyderabad","Ocean forecasts, fishing-zone advisories and the tsunami warning centre (2007).",""],
  ["National Institute of Ocean Technology (NIOT)","Chennai","Ocean technology; building the Matsya-6000 submersible.",""],
  ["Indian Institute of Tropical Meteorology (IITM)","Pune","Monsoon research; runs the 6 km Bharat Forecast System (2025).",""],
  ["National Centre for Medium Range Weather Forecasting (NCMRWF)","Noida","Weather forecasts several days ahead.",""],
  ["National Centre for Earth Science Studies (NCESS)","Thiruvananthapuram","Earth system science — coasts, land and natural hazards.",""]
];

LESSONS.push(
{id:"ST7", heat:2, title:"Digital India and digital public infrastructure", hi:"डिजिटल इंडिया और डिजिटल सार्वजनिक अवसंरचना", blocks:[
  {k:"hot", h:"Asked: the year each platform began (<b>Aadhaar 2010, DigiLocker 2015, UPI 2016, CoWIN 2021, ONDC and Bhashini 2022</b>), who runs it, the <b>DPDP Act, 2023</b> (Data Protection Board, ₹250 crore), the <b>IT Rules, 2021</b>, <b>CERT-In</b> (2004, six-hour rule), and the latest <b>UPI</b> numbers."},
  {k:"story", h:"<p>Most countries let private companies build their digital roads. India built public ones that anyone may use, now called <b>digital public infrastructure</b> or the <b>India Stack</b>. The first layer is identity: <b>Aadhaar</b>, whose first number was given on 29 September 2010 to Ranjana Sonawane of <b>Tembhli</b> village in Nandurbar, Maharashtra. Then payments: <b>UPI</b> (2016) lets any bank app pay any other. Then data: <b>DigiLocker</b> (2015) keeps your certificates, and consent tools let you share them.</p><p>On top came platforms for health (<b>CoWIN</b> for COVID vaccines, <b>ABHA</b> health IDs), trade (<b>ONDC</b>, an open network rather than one big shop) and language (<b>Bhashini</b>, AI translation). With so much data online, India passed the <b>Digital Personal Data Protection Act</b> in 2023; its rules were notified in November 2025.</p>", key:"Identity (Aadhaar 2010) → payments (UPI 2016) → data (DigiLocker 2015) → platforms (CoWIN, ONDC, Bhashini) → protection (DPDP Act 2023)."},
  {k:"table", title:"Platforms and when they began", head:["Platform","Began","What it does"], rows: ST7A.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Aadhaar and UPI in numbers", rows:[
    ["UIDAI","Set up in 2009 (first chairman Nandan Nilekani); a statutory body under MeitY since the Aadhaar Act, 2016"],
    ["First Aadhaar","29 September 2010, Tembhli village, Nandurbar district, Maharashtra"],
    ["Aadhaar numbers issued","More than 138 crore (end of 2024)"],
    ["Supreme Court, 2018","Upheld Aadhaar (Puttaswamy case) but limited its use by private companies; the 2017 ruling had made privacy a fundamental right"],
    ["UPI, September 2026","24.07 billion transactions worth ₹29.37 lakh crore; record month August 2026 (24.51 billion)"],
    ["UPI abroad","Live in 11 foreign countries (August 2026), including Bhutan, Nepal, Singapore, the UAE, France, Sri Lanka, Mauritius, Qatar, Cambodia, Greece and the Maldives"]]},
  {k:"table", title:"Laws and watchdogs", head:["Law or body","Year","What it does"], rows: ST7B.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Words of the DPDP Act, 2023", rows:[
    ["Data Principal","The person the data is about"],
    ["Data Fiduciary","The company or body that decides why and how the data is used"],
    ["Consent Manager","A registered platform through which a person gives, manages or withdraws consent"],
    ["Significant Data Fiduciary","A large data handler with extra duties, such as a data protection officer and audits"],
    ["Children","Anyone under 18; their data needs verifiable consent of a parent"],
    ["Penalty","Up to ₹250 crore for failing to protect data; assent 11 August 2023"]]},
  {k:"facts", title:"Who runs what", rows:[
    ["Digital India","Launched 1 July 2015; Ministry of Electronics and Information Technology (MeitY)"],
    ["UPI","National Payments Corporation of India (NPCI), set up by the RBI and Indian Banks' Association"],
    ["ONDC","Set up by DPIIT (Ministry of Commerce and Industry) in December 2021; first pilot in five cities, April 2022"],
    ["Bhashini","MeitY's National Language Translation Mission; launched 4 July 2022 at Gandhinagar"],
    ["CoWIN and U-WIN","Ministry of Health and Family Welfare"],
    ["JAM trinity","Jan Dhan accounts, Aadhaar and Mobile phones — the base for direct benefit transfers"]]},
  {k:"trick", h:"Launch years as a ladder — <b>“10 Aadhaar, 15 Locker, 16 UPI, 17 UMANG, 21 CoWIN, 22 ONDC-Bhashini, 23 DPDP”</b>. ID digits: <b>Aadhaar 12, ABHA 14</b>."},
  {k:"trap", h:"<b>ONDC</b> is an open <b>network</b> run under <b>DPIIT</b>, not an app and not run by NPCI. <b>CERT-In</b> is under <b>MeitY</b> (Section 70B); <b>NCIIPC</b> is part of <b>NTRO</b> (Section 70A). The DPDP Act's board is the <b>Data Protection Board of India</b>, and the maximum penalty is <b>₹250 crore</b>, not ₹500 crore. UPI is built by <b>NPCI</b>, not the RBI."},
  {k:"link", h:"IT Act sections (66, 66A–66F, 67) and the 1930 cyber helpline are in <a href=\"study-computer-internet.html?lesson=C22\">Computer Knowledge</a> (C22). NEFT, RTGS, IMPS, RuPay and how UPI fits with them are in <a href=\"study-banking.html?lesson=N7\">Banking</a> (N7); UMANG and GeM in <a href=\"study-govt-schemes.html?lesson=L12\">Government Schemes</a>."}
], sum:["Aadhaar: UIDAI 2009, first number 29 September 2010 at Tembhli (Nandurbar, Maharashtra); Aadhaar Act 2016; over 138 crore issued.","DigiLocker 2015, UPI 2016 (NPCI), UMANG 2017, CoWIN and ABHA 2021, ONDC and Bhashini 2022, U-WIN 2024.","UPI in September 2026: 24.07 billion transactions (₹29.37 lakh crore); live in 11 foreign countries.","DPDP Act 2023: Data Principal, Data Fiduciary, Consent Manager, Data Protection Board; penalty up to ₹250 crore; rules notified 14 November 2025.","IT Rules 2021 govern social media and OTT; a 2026 amendment covers AI-made content.","CERT-In (2004, Section 70B) — report incidents within 6 hours; NCIIPC (NTRO) guards critical infrastructure."]},

{id:"ST8", heat:2, title:"Polar, ocean and earth science", hi:"ध्रुवीय, महासागर और पृथ्वी विज्ञान", blocks:[
  {k:"hot", h:"Asked: India's stations — <b>Dakshin Gangotri</b> (1983), <b>Maitri</b> (1989), <b>Bharati</b> (2012) in Antarctica and <b>Himadri</b> (2008) in the Arctic — the <b>first expedition</b> (1981–82), <b>NCPOR</b> Goa, the <b>Indian Antarctic Act, 2022</b>, <b>IMD</b>'s colour warnings, and <b>INCOIS</b>' tsunami warning centre."},
  {k:"story", h:"<p>In December 1981 a team led by <b>S. Z. Qasim</b> sailed from Goa and landed in Antarctica on 9 January 1982 — India's <b>first expedition</b>. Two years later India built <b>Dakshin Gangotri</b> on the ice shelf; snow slowly buried it, and in 1990 it was closed. Its successor, <b>Maitri</b> (1989), stands on rock in the <b>Schirmacher Oasis</b>, and <b>Bharati</b> (2012), made of shipping containers, sits in the <b>Larsemann Hills</b>. In the far north, <b>Himadri</b> (2008) is India's Arctic station at <b>Ny-Ålesund</b> on Norway's Svalbard islands.</p><p>All of them are run by the <b>National Centre for Polar and Ocean Research</b> in Goa, under the Ministry of Earth Sciences. In 2022 Parliament passed the <b>Indian Antarctic Act</b>, so Indian law now applies to Indian expeditions there. Closer to home, <b>IMD</b> gives colour-coded warnings and <b>INCOIS</b> in Hyderabad runs the tsunami warning centre set up after the 2004 tsunami.</p>", key:"Dakshin Gangotri 1983 (closed 1990) · Maitri 1989 · Bharati 2012 · Himadri 2008 (Svalbard) · NCPOR Goa · Indian Antarctic Act 2022."},
  {k:"table", title:"India's research stations", head:["Station","Where","Remember"], rows: ST8A.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Antarctica and the Arctic", rows:[
    ["First expedition","Left Goa in December 1981, led by S. Z. Qasim; landed on 9 January 1982"],
    ["Antarctic Treaty","India joined in 1983 and became a consultative member the same year"],
    ["Indian Antarctic Act, 2022","India's first law on Antarctica (passed August 2022); permits for every Indian expedition; bans mining; a Committee on Antarctic Governance and Environmental Protection, chaired by the MoES Secretary"],
    ["ATCM 2024","India hosted the 46th Antarctic Treaty Consultative Meeting at Kochi, May 2024"],
    ["Svalbard Treaty","Signed by British India in 1920 — the basis for India's Arctic station"],
    ["Arctic Council","India has been an observer since 2013"],
    ["Arctic Policy","'India and the Arctic: building a partnership for sustainable development', March 2022 — six pillars"],
    ["Maitri II","A new green station to replace Maitri; completion targeted for about January 2029"]]},
  {k:"table", title:"Earth-science bodies of MoES", head:["Body","City","Job"], rows: ST8B.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Warnings and weather", rows:[
    ["IMD colour codes","Green — no action; Yellow — be aware; Orange — be prepared; Red — take action"],
    ["Tsunami warnings","Indian Tsunami Early Warning Centre at INCOIS, Hyderabad (2007) — also warns other Indian Ocean countries"],
    ["Cyclone names","Chosen in turn from lists of the 13 countries of the WMO/ESCAP Panel on Tropical Cyclones"],
    ["Mission Mausam (September 2024)","₹2,000 crore to make India 'weather-ready' — by IMD, IITM and NCMRWF"],
    ["Apps","Mausam (weather), Meghdoot (farm advisories), Damini (lightning alerts)"],
    ["PRITHVI scheme (2024)","MoES umbrella scheme joining five schemes on atmosphere, ocean, polar, seismology and outreach"]]},
  {k:"trick", h:"Stations in order — <b>“Dakshin–Maitri–Himadri–Bharati”: 83, 89, 08, 12</b>. South (Dakshin) first, Friendship (Maitri) next, Snow-home (Himadri) in the north, Bharati last."},
  {k:"trap", h:"<b>Himadri</b> is in the <b>Arctic</b> (Svalbard, Norway), not Antarctica. <b>Dakshin Gangotri</b> is no longer a research station. <b>NCPOR</b> is in <b>Goa</b> (Vasco da Gama), but <b>NIOT</b> (ocean technology) is in <b>Chennai</b> and <b>INCOIS</b> in <b>Hyderabad</b>. A <b>red</b> alert means take action; <b>orange</b> means be prepared."},
  {k:"link", h:"Samudrayaan and Matsya-6000 are in <a href=\"study-space.html?lesson=L15\">Space &amp; ISRO</a> (L15); the monsoon itself in <a href=\"study-indian-geography.html?lesson=G9\">Indian Geography</a> (G9); cyclones, El Niño and earthquakes in <a href=\"study-physical-geography.html\">Physical Geography</a>; NIO and NCPOR addresses in <a href=\"study-hq-founders.html?lesson=H4\">Headquarters &amp; Founders</a>."}
], sum:["Antarctic stations: Dakshin Gangotri (1983–84, closed 1990), Maitri (1989, Schirmacher Oasis), Bharati (2012, Larsemann Hills).","Arctic: Himadri (2008) at Ny-Ålesund, Svalbard; IndARC underwater observatory (2014). Himalaya: Himansh (2016).","First expedition 1981–82 led by S. Z. Qasim; India joined the Antarctic Treaty in 1983.","Indian Antarctic Act 2022; India hosted the 46th ATCM at Kochi in 2024; Arctic Policy 2022; Arctic Council observer since 2013.","NCPOR Goa runs the polar work; INCOIS Hyderabad runs the tsunami centre (2007); NIOT Chennai; IITM Pune; IMD New Delhi (1875).","Mission Mausam (2024): ₹2,000 crore. IMD red = take action, orange = be prepared."]}
);

pairQs("ST7", ST7A, { q: t => `In which year was ${t} launched?`, extra: ["2019"] });
pairQs("ST7", ST7B.filter(r => /^(Information|NCIIPC|IT \(|Telecom)/.test(r[0])), { q: t => `Which year goes with the ${t}?`, extra: ["2008"] });
pairQs("ST8", ST8A, { q: t => `Where is India's ${t} station?`, rq: a => `Which Indian station is located here: ${a}?` });
pairQs("ST8", ST8B, { q: t => `Where is the ${t} based?`, extra: ["Bengaluru", "Kolkata"] });

QB.push(
["ST7","India's first Aadhaar number was issued in 2010 at Tembhli village in which state?",["Maharashtra","Karnataka","Rajasthan","Andhra Pradesh"],"It was given on 29 September 2010 in Nandurbar district, Maharashtra.",""],
["ST7","Who was the first chairman of UIDAI?",["Nandan Nilekani","Raghuram Rajan","Sam Pitroda","N. R. Narayana Murthy"],"Nilekani led UIDAI from 2009.",""],
["ST7","How many digits does an Aadhaar number have?",["12","10","14","16"],"Aadhaar has 12 digits; an ABHA health ID has 14.",""],
["ST7","UIDAI got statutory status under the Aadhaar Act of:",["2016","2010","2009","2018"],"The Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act came in 2016.",""],
["ST7","UIDAI works under which ministry?",["Electronics and Information Technology","Home Affairs","Finance","Rural Development"],"UIDAI is a statutory body under MeitY.",""],
["ST7","How many Aadhaar numbers had been issued by the end of 2024?",["More than 138 crore","About 50 crore","About 90 crore","More than 200 crore"],"MeitY's year-end review put it above 138.34 crore.",""],
["ST7","ONDC was set up by which department?",["DPIIT (Ministry of Commerce and Industry)","MeitY","Department of Financial Services","NITI Aayog"],"ONDC is a not-for-profit company promoted by the Department for Promotion of Industry and Internal Trade.",""],
["ST7","What is ONDC?",["An open network that lets any buyer app reach any seller","A government shopping app","A payment system run by NPCI","A digital currency"],"It works like UPI for e-commerce: platforms plug into a shared network.",""],
["ST7","Bhashini is part of which mission?",["National Language Translation Mission","National e-Governance Plan","Digital Literacy Mission","IndiaAI Mission"],"MeitY's National Language Translation Mission runs it.",""],
["ST7","Which platform keeps records of routine vaccinations of children and pregnant women?",["U-WIN","CoWIN","ABHA","UMANG"],"U-WIN (2024) carries forward the CoWIN model to routine immunisation.",""],
["ST7","CERT-In was set up in:",["2004","2000","2008","2014"],"It was set up in 2004 and given legal backing under Section 70B in the 2008 amendment.",""],
["ST7","Under CERT-In's 2022 directions, a cyber incident must be reported within:",["6 hours","24 hours","72 hours","1 hour"],"Companies must report notable cyber incidents to CERT-In within six hours.",""],
["ST7","NCIIPC, which protects critical information infrastructure, is part of:",["National Technical Research Organisation","CERT-In","Intelligence Bureau","DRDO"],"NCIIPC works under Section 70A of the IT Act and is part of NTRO.",""],
["ST7","In which year was the Digital Personal Data Protection Act passed?",["2023","2019","2021","2025"],"It received the President's assent on 11 August 2023.",""],
["ST7","Under the DPDP Act, the 'Data Fiduciary' is:",["The company or body that decides why and how personal data is used","The person whom the data is about","The officer who hears complaints","A platform that stores consent"],"The person whom the data is about is the 'Data Principal'.",""],
["ST7","The maximum penalty under the DPDP Act, 2023 is:",["₹250 crore","₹50 crore","₹500 crore","₹25 crore"],"Up to ₹250 crore for a failure to take reasonable security safeguards.",""],
["ST7","Which body decides complaints under the DPDP Act?",["Data Protection Board of India","CERT-In","Telecom Regulatory Authority of India","Central Information Commission"],"The Data Protection Board works as a digital office.",""],
["ST7","Under the DPDP Act, a 'child' is anyone below the age of:",["18","13","16","21"],"Processing a child's data needs verifiable consent of a parent or guardian.",""],
["ST7","When were the Digital Personal Data Protection Rules notified?",["14 November 2025","11 August 2023","1 July 2015","20 February 2026"],"They come into force in phases over 18 months.",""],
["ST7","The February 2026 amendment to the IT Rules deals mainly with:",["AI-generated (synthetic) content such as deepfakes","Online gaming taxes","Cryptocurrency trading","Satellite internet licences"],"It brought 'synthetically generated information' under the rules, with labelling and faster takedowns.",""],
["ST7","The Telecommunications Act, 2023 replaced the Indian Telegraph Act of:",["1885","1933","1950","1997"],"The 138-year-old Telegraph Act was replaced in December 2023.",""],
["ST7","In September 2026, UPI handled about how many transactions?",["24 billion","2.4 billion","240 billion","10 billion"],"24.07 billion transactions worth ₹29.37 lakh crore.",""],
["ST7","In how many foreign countries was UPI live in August 2026?",["11","3","25","7"],"Including Bhutan, Nepal, Singapore, the UAE, France and, from 2026, Cambodia, Greece and the Maldives.",""],
["ST7","In the JAM trinity, the 'J' stands for:",["Jan Dhan accounts","Jeevan Pramaan","Jal Jeevan","Judicial records"],"JAM is Jan Dhan, Aadhaar and Mobile.",""],
["ST7","The Digital India programme was launched on:",["1 July 2015","15 August 2014","26 January 2016","2 October 2014"],"It was launched on 1 July 2015; DigiLocker was opened the same day.",""],

["ST8","Who led India's first expedition to Antarctica (1981–82)?",["S. Z. Qasim","Homi J. Bhabha","Vikram Sarabhai","Raja Ramanna"],"The team left Goa in December 1981 and landed on 9 January 1982.",""],
["ST8","India's first Antarctic research station was:",["Dakshin Gangotri","Maitri","Bharati","Himadri"],"Built in 1983–84; it was buried in ice and closed in 1990.",""],
["ST8","Which Indian station is in the Arctic?",["Himadri","Maitri","Bharati","Dakshin Gangotri"],"Himadri (2008) is at Ny-Ålesund on Norway's Svalbard islands.",""],
["ST8","India's Antarctic station Bharati was built from:",["Shipping containers","Ice blocks","Bamboo","Stone"],"It is made of 134 shipping containers and opened in 2012.",""],
["ST8","India's Antarctic and Arctic stations are run by:",["National Centre for Polar and Ocean Research","ISRO","Indian Navy","Survey of India"],"NCPOR, Goa, under the Ministry of Earth Sciences.",""],
["ST8","In which year did Parliament pass the Indian Antarctic Act?",["2022","2019","2024","2015"],"It became India's first law on Antarctica in August 2022.",""],
["ST8","India joined the Antarctic Treaty in:",["1983","1959","1991","2002"],"It became a consultative member the same year.",""],
["ST8","Which Indian city hosted the 46th Antarctic Treaty Consultative Meeting in May 2024?",["Kochi","Goa","Chennai","Visakhapatnam"],"India hosted it at Kochi, Kerala.",""],
["ST8","India has been an observer in the Arctic Council since:",["2013","2008","1998","2022"],"India became an observer in 2013 and released its Arctic Policy in 2022.",""],
["ST8","India's right to have a station in Svalbard rests on a treaty signed in:",["1920","1959","1983","2008"],"British India signed the Svalbard Treaty in 1920.",""],
["ST8","The Indian Tsunami Early Warning Centre is run by:",["INCOIS, Hyderabad","IMD, New Delhi","NIOT, Chennai","NCPOR, Goa"],"It began in 2007, after the 2004 tsunami.",""],
["ST8","An IMD 'orange' alert means:",["Be prepared","No action needed","Take action","Be aware"],"Green — no action; yellow — be aware; orange — be prepared; red — take action.",""],
["ST8","Mission Mausam, approved in September 2024, has an outlay of:",["₹2,000 crore","₹20,000 crore","₹200 crore","₹4,077 crore"],"It aims to make India 'weather-ready' and 'climate-smart'.",""],
["ST8","The Damini app gives alerts about:",["Lightning","Earthquakes","Floods","Heatwaves"],"IITM Pune's Damini app warns of lightning strikes nearby.",""],
["ST8","The India Meteorological Department was set up in:",["1875","1905","1947","1857"],"IMD is one of India's oldest scientific departments.",""],
["ST8","Maitri II is being planned to replace which station?",["Maitri","Bharati","Himadri","Dakshin Gangotri"],"Maitri (1989) has outlived its design life; Maitri II is targeted for about 2029.",""]
);
