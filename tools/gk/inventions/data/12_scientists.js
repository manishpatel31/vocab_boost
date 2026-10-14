/* Part 3 · I7 units named after scientists; I8 instruments; I9 modern Indian scientists; I10 ancient Indian science and 'father of' titles. */
const I7 = [
  ["newton","Force","Isaac Newton. 1 N = 1 kg·m/s².","p"],
  ["joule","Work or energy","James Prescott Joule.","p"],
  ["watt","Power","James Watt. 1 W = 1 joule per second.","p"],
  ["pascal","Pressure","Blaise Pascal. 1 Pa = 1 N/m².","p"],
  ["ampere","Electric current","André-Marie Ampère — one of the seven SI base units.","p"],
  ["volt","Potential difference","Alessandro Volta.","p"],
  ["ohm","Electrical resistance","Georg Ohm; symbol Ω.","p"],
  ["coulomb","Electric charge","Charles-Augustin de Coulomb.","p"],
  ["hertz","Frequency","Heinrich Hertz; 1 Hz = one cycle per second.","p"],
  ["kelvin","Thermodynamic temperature","Lord Kelvin — an SI base unit; 0 K is absolute zero (−273.15 °C).","p"],
  ["tesla","Magnetic flux density","Nikola Tesla.","p"],
  ["weber","Magnetic flux","Wilhelm Weber.",""],
  ["henry","Inductance","Joseph Henry.",""],
  ["farad","Capacitance","Michael Faraday.","p"],
  ["siemens","Electrical conductance","Werner von Siemens — the old name was 'mho'.",""],
  ["becquerel","Radioactivity (activity)","Henri Becquerel.","p"],
  ["gray","Absorbed dose of radiation","Louis Harold Gray.",""],
  ["sievert","Equivalent dose of radiation","Rolf Sievert.",""]
];
const I8 = [
  ["Barometer","Atmospheric pressure","A sudden fall warns of a storm.","p"],
  ["Hygrometer","Relative humidity","","p|SSC Selection Post 2021 · 9 Feb 2022 (Shift 1)"],
  ["Seismograph","Earthquake waves","Its record is a seismogram.","p|SSC CGL 2023 · 17 Jul 2023 (Shift 2)"],
  ["Anemometer","Wind speed","",""],
  ["Ammeter","Electric current","Connected in series.","p"],
  ["Voltmeter","Potential difference","Connected in parallel.","p"],
  ["Galvanometer","Presence and direction of a small current","",""],
  ["Lactometer","Purity (density) of milk","","p|SSC JE EE · 10 Dec 2020"],
  ["Hydrometer","Relative density of liquids","","p|SSC CHSL · 15 Mar 2022 (Shift 2)"],
  ["Odometer","Distance travelled by a vehicle","",""],
  ["Speedometer","Speed of a vehicle","",""],
  ["Altimeter","Height above sea level","Used in aircraft.","p"],
  ["Manometer","Pressure of gases","",""],
  ["Pyrometer","Very high temperatures","For furnaces — even from a distance.","p"],
  ["Sphygmomanometer","Blood pressure","","p"],
  ["Tachometer","Rotational speed (rpm) of an engine","",""],
  ["Audiometer","Sharpness of hearing","",""],
  ["Fathometer (echo sounder)","Depth of the sea","Uses sound echoes (sonar).","p"],
  ["Rain gauge (udometer)","Rainfall","",""],
  ["Calorimeter","Quantity of heat","",""],
  ["Geiger counter","Radioactive radiation","",""],
  ["Sextant","Angle of the Sun or a star above the horizon","Used in navigation.",""],
  ["Crescograph","Growth of plants","Invented by J. C. Bose.","p"]
];
const I8B = [
  ["mercury barometer","Evangelista Torricelli","1643, Italy.","p"],
  ["mercury thermometer","Daniel Gabriel Fahrenheit","1714; he also made the Fahrenheit scale.","p"],
  ["stethoscope","René Laennec","1816, France.","p"],
  ["sphygmomanometer (cuff type)","Scipione Riva-Rocci","1896, Italy.",""],
  ["electrocardiograph (ECG)","Willem Einthoven","1903; Nobel Prize 1924.","p"],
  ["electron microscope","Ernst Ruska and Max Knoll","1931, Germany.",""],
  ["Geiger counter","Hans Geiger","1908; improved with Walther Müller in 1928.",""],
  ["cyclotron","Ernest Lawrence","1932, USA.",""],
  ["modern seismograph","John Milne","1880, in Japan.",""],
  ["Richter scale","Charles Richter","1935 — a scale, not an instrument.","p"],
  ["crescograph","Jagadish Chandra Bose","Early 1900s — measures tiny plant growth.","p"],
  ["pendulum clock","Christiaan Huygens","1656.",""],
  ["astronomical telescope (first used on the sky)","Galileo Galilei","1609. Hans Lippershey had made a spyglass in 1608.","p"]
];
const I9 = [
  ["C. V. Raman","Scattering of light (Raman effect)","Found on 28 February 1928 (National Science Day); Nobel Prize in Physics 1930.","p"],
  ["Jagadish Chandra Bose","Crescograph and response of plants to stimuli","Also a radio and microwave pioneer.","p"],
  ["Satyendra Nath Bose","Bose–Einstein statistics","Particles called bosons are named after him.","p"],
  ["Srinivasa Ramanujan","Number theory and infinite series","1729 is the Hardy–Ramanujan number; 22 December is National Mathematics Day.","p"],
  ["Homi J. Bhabha","India's nuclear programme","Founded TIFR (1945); first chairman of the Atomic Energy Commission (1948).","p"],
  ["Vikram Sarabhai","India's space programme","Founded PRL (1947) and INCOSPAR (1962), which became ISRO in 1969.","p"],
  ["A. P. J. Abdul Kalam","SLV-3 rocket and the Agni and Prithvi missiles","'Missile Man of India'; 11th President (2002–07); Bharat Ratna 1997.","p"],
  ["Meghnad Saha","Thermal ionisation equation in astrophysics","The Saha equation (1920); founded the Saha Institute of Nuclear Physics.","p"],
  ["Har Gobind Khorana","Cracking the genetic code","Nobel Prize in Medicine 1968; made the first artificial gene.","p"],
  ["Subrahmanyan Chandrasekhar","Maximum mass of a white dwarf star","The Chandrasekhar limit, about 1.44 Suns; Nobel Prize in Physics 1983.","p"],
  ["Venkatraman Ramakrishnan","Structure of the ribosome","Nobel Prize in Chemistry 2009.","p"],
  ["Prafulla Chandra Ray","Mercurous nitrite and Bengal Chemicals","Found mercurous nitrite in 1896; founded Bengal Chemicals.","p"],
  ["P. C. Mahalanobis","Indian Statistical Institute and the Mahalanobis distance","His birthday, 29 June, is Statistics Day.","p"],
  ["M. S. Swaminathan","High-yielding wheat of the Green Revolution","Bharat Ratna 2024.","p"],
  ["Verghese Kurien","Operation Flood and Amul","His birthday, 26 November, is National Milk Day.","p"],
  ["Birbal Sahni","Palaeobotany (study of plant fossils)","Institute of Palaeosciences in Lucknow is named after him.","p"],
  ["Salim Ali","Ornithology (study of birds)","The 'Birdman of India'.","p"],
  ["M. Visvesvaraya","Krishna Raja Sagara dam","Engineer; his birthday, 15 September, is Engineers' Day; Bharat Ratna 1955.","p"],
  ["Shanti Swarup Bhatnagar","First Director-General of CSIR","India's top science prize is named after him.","p"],
  ["E. K. Janaki Ammal","Sugarcane hybrids and plant chromosomes","Co-wrote the Chromosome Atlas of Cultivated Plants (1945).",""],
  ["Anna Mani","Indian weather instruments","Called the 'Weather Woman of India'.",""],
  ["Anandibai Joshi","First Indian woman with a degree in Western medicine","Graduated in 1886 in Pennsylvania, USA.","p"],
];
const I10 = [
  ["Aryabhata","Aryabhatiya","499 CE: the Earth turns on its axis; π ≈ 3.1416. India's first satellite (1975) is named after him.","p"],
  ["Brahmagupta","Brahmasphutasiddhanta","628 CE: first rules for working with zero.","p"],
  ["Bhaskaracharya (Bhaskara II)","Lilavati","1150 CE; part of his Siddhanta Shiromani.","p"],
  ["Varahamihira","Pancha Siddhantika","Also Brihat Samhita — one of the 'nine gems' at Ujjain.","p"],
  ["Sushruta","Sushruta Samhita","Surgery, including nose reconstruction (rhinoplasty).","p"],
  ["Charaka","Charaka Samhita","The great text of Ayurvedic medicine.","p"],
  ["Kanada","Vaisheshika Sutra","The idea of 'paramanu' — the atom.","p"],
  ["Baudhayana","Baudhayana Sulba Sutra","States the rule we now call the Pythagoras theorem.","p"],
  ["Patanjali","Yoga Sutra","",""],
  ["Vagbhata","Ashtanga Hridaya","Ayurveda.",""],
  ["Pingala","Chandahshastra","Prosody; uses a binary-like system.",""]
];
const I10F = [
  ["Father of Medicine","Hippocrates","Ancient Greece.","p"],
  ["Father of Surgery","Sushruta","","p"],
  ["Father of Biology","Aristotle","Also called the Father of Zoology.","p"],
  ["Father of Botany","Theophrastus","","p"],
  ["Father of Genetics","Gregor Mendel","","p"],
  ["Father of Taxonomy","Carl Linnaeus","","p"],
  ["Father of Microbiology","Antonie van Leeuwenhoek","","p"],
  ["Father of Modern Chemistry","Antoine Lavoisier","","p"],
  ["Father of Nuclear Physics","Ernest Rutherford","","p"],
  ["Father of the Computer","Charles Babbage","","p"],
  ["Father of India's Nuclear Programme","Homi J. Bhabha","","p"],
  ["Father of India's Space Programme","Vikram Sarabhai","","p"],
  ["Father of the Green Revolution in India","M. S. Swaminathan","Norman Borlaug is the father of the world Green Revolution.","p"],
  ["Father of the White Revolution","Verghese Kurien","","p"],
  ["Father of Indian Statistics","P. C. Mahalanobis","",""],
  ["Father of Modern Indian Chemistry","Prafulla Chandra Ray","",""],
  ["Missile Man of India","A. P. J. Abdul Kalam","","p"],
  ["Metro Man of India","E. Sreedharan","Built the Konkan Railway and Delhi Metro.","p"],
  ["Birdman of India","Salim Ali","","p"]
];

LESSONS.push(
{id:"I7", heat:3, title:"Units named after scientists", hi:"वैज्ञानिकों के नाम पर मात्रक", blocks:[
  {k:"hot", h:"Two questions come every year: <b>“X is the SI unit of what?”</b> and <b>“What is the SI unit of Y?”</b>. Watch the electrical and magnetic ones — <b>tesla, weber, henry, farad, siemens</b> — and the radiation ones — <b>becquerel, gray, sievert</b>."},
  {k:"story", h:"<p>Science honours its heroes by naming units after them. <b>Newton</b> gives force, <b>Joule</b> energy, <b>Watt</b> power and <b>Pascal</b> pressure. Electricity is a hall of fame: <b>Ampère</b> (current), <b>Volta</b> (voltage), <b>Ohm</b> (resistance), <b>Coulomb</b> (charge), <b>Faraday</b> (the farad, capacitance), <b>Henry</b> (inductance) and <b>Siemens</b> (conductance).</p><p>Magnetism has <b>Tesla</b> and <b>Weber</b>; waves have <b>Hertz</b>; temperature has <b>Kelvin</b>. Radiation has three: <b>Becquerel</b> (how radioactive a source is), <b>Gray</b> (dose absorbed) and <b>Sievert</b> (effect on the body). Note: unit names are written in small letters (newton), symbols in capitals (N).</p>", key:"newton — force; joule — energy; watt — power; pascal — pressure; ampere — current; volt — p.d.; ohm — resistance; tesla — flux density; weber — flux."},
  {k:"table", title:"SI units named after scientists", head:["Unit","Measures","Named after"], rows: I7.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"The seven SI base units", rows:[
    ["Length","metre (m)"],["Mass","kilogram (kg)"],["Time","second (s)"],["Electric current","ampere (A)"],
    ["Temperature","kelvin (K)"],["Amount of substance","mole (mol)"],["Luminous intensity","candela (cd)"]
  ]},
  {k:"trick", h:"Magnetism pair — <b>“Weber is the Whole flux, Tesla is per square metre”</b> (1 T = 1 Wb/m²). Radiation trio — <b>“B-G-S: Bomb, Gulp, Sick”</b>: Becquerel (the source), Gray (dose gulped), Sievert (how sick it makes you)."},
  {k:"trap", h:"<b>Kelvin</b> and <b>ampere</b> are <i>base</i> units; most others here are derived. <b>Farad</b> (capacitance) is named after Faraday. The <b>ångström</b> (10⁻¹⁰ m) and <b>curie</b> are named after scientists but are not SI units."}
], sum:["newton — force; joule — energy; watt — power; pascal — pressure.","ampere — current; volt — potential difference; ohm — resistance; coulomb — charge.","hertz — frequency; kelvin — temperature; tesla — magnetic flux density; weber — magnetic flux.","henry — inductance; farad — capacitance; siemens — conductance.","becquerel — radioactivity; gray — absorbed dose; sievert — equivalent dose."]},

{id:"I8", heat:3, title:"Scientific instruments and what they measure", hi:"वैज्ञानिक उपकरण और उनका उपयोग", blocks:[
  {k:"hot", h:"One of the commonest GK questions: <b>“A hygrometer measures …?”</b> Learn the pairs: <b>barometer–air pressure</b>, <b>hygrometer–humidity</b>, <b>seismograph–earthquakes</b>, <b>anemometer–wind speed</b>, <b>lactometer–milk</b>, <b>hydrometer–density of liquids</b>, <b>sphygmomanometer–blood pressure</b>, <b>fathometer–sea depth</b>."},
  {k:"story", h:"<p>Think of a weather station: a <b>barometer</b> reads air pressure, a <b>hygrometer</b> humidity, an <b>anemometer</b> wind speed and a <b>rain gauge</b> rainfall. On a ship, a <b>fathometer</b> sends sound down to find the depth, and a <b>sextant</b> finds the Sun's angle. In a plane, the <b>altimeter</b> shows height; in a car, the <b>speedometer</b> shows speed and the <b>odometer</b> distance.</p><p>A doctor uses a <b>stethoscope</b>, a <b>sphygmomanometer</b> for blood pressure and an <b>audiometer</b> for hearing. A dairy checks milk with a <b>lactometer</b>; a steel plant reads furnace heat with a <b>pyrometer</b>; a seismic station records quakes on a <b>seismograph</b>. In a lab, the <b>ammeter</b> reads current and the <b>voltmeter</b> voltage.</p>", key:"Baro — pressure; hygro — humidity; seismo — quakes; anemo — wind; lacto — milk; hydro — liquid density; pyro — high heat; sphygmo — blood pressure."},
  {k:"table", title:"Instruments and what they measure", head:["Instrument","Measures","Note"], rows: I8.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Who invented the instrument", head:["Instrument","Inventor","Note"], rows: I8B.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Greek roots do the work: <b>baro</b> = weight/pressure, <b>hygro</b> = wet, <b>anemo</b> = wind, <b>seismo</b> = shake, <b>pyro</b> = fire, <b>lacto</b> = milk, <b>hydro</b> = water, <b>alti</b> = height, <b>sphygmo</b> = pulse, <b>fatho</b>m = depth."},
  {k:"trap", h:"<b>Hydrometer</b> = density of any liquid; <b>hygrometer</b> = humidity of air. <b>Ammeter</b> in series, <b>voltmeter</b> in parallel. The <b>Richter scale</b> is a scale, not an instrument — the instrument is the <b>seismograph</b>. <b>Odometer</b> = distance, <b>speedometer</b> = speed."}
], sum:["Barometer — air pressure (Torricelli); hygrometer — humidity; anemometer — wind speed; rain gauge — rainfall.","Seismograph — earthquakes; fathometer — sea depth; altimeter — height; sextant — angle of the Sun.","Lactometer — milk; hydrometer — density of liquids; pyrometer — very high temperatures.","Sphygmomanometer — blood pressure; stethoscope — Laennec; ECG — Einthoven; audiometer — hearing.","Ammeter — current (series); voltmeter — potential difference (parallel); galvanometer — small currents."]},

{id:"I9", heat:3, title:"Modern Indian scientists", hi:"आधुनिक भारतीय वैज्ञानिक", blocks:[
  {k:"hot", h:"Asked in nearly every exam season: <b>Raman effect (1928, Nobel 1930)</b>, <b>J. C. Bose and the crescograph</b>, <b>S. N. Bose and bosons</b>, <b>Ramanujan and 1729</b>, <b>Bhabha (nuclear)</b>, <b>Sarabhai (space)</b>, <b>Kalam (missiles)</b>, <b>Khorana (genetic code)</b>, <b>Chandrasekhar limit</b>. Also the days named after them."},
  {k:"story", h:"<p>In Kolkata in 1928, <b>C. V. Raman</b> showed that light changes colour slightly when scattered by molecules — the <b>Raman effect</b>, India's first science Nobel (1930). In the same city <b>J. C. Bose</b> proved plants respond to stimuli with his <b>crescograph</b>, and <b>S. N. Bose</b> wrote the statistics that gave the world the word '<b>boson</b>'. <b>Ramanujan</b>, with almost no formal training, filled notebooks with formulas that still amaze mathematicians. <b>Meghnad Saha</b> explained the light of stars.</p><p>After 1947, <b>Homi Bhabha</b> built India's atomic programme and <b>Vikram Sarabhai</b> its space programme; <b>Kalam</b> turned rockets into the SLV-3 and Agni. Abroad, <b>Khorana</b> cracked the genetic code, <b>Chandrasekhar</b> found the mass limit of white dwarfs, and <b>Venki Ramakrishnan</b> mapped the ribosome.</p>", key:"Raman — scattering of light (1928); J. C. Bose — plants and crescograph; S. N. Bose — bosons; Bhabha — nuclear; Sarabhai — space; Kalam — missiles."},
  {k:"table", title:"Indian scientists and their work", head:["Scientist","Known for","Note"], rows: I9.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Days and Nobels to remember", rows:[
    ["National Science Day","28 February — Raman effect announced (1928)"],
    ["National Technology Day","11 May — Pokhran-II tests (1998)"],
    ["National Statistics Day","29 June — Mahalanobis's birthday"],
    ["Engineers' Day","15 September — Visvesvaraya's birthday"],
    ["National Mathematics Day","22 December — Ramanujan's birthday"],
    ["Indian-origin science Nobels","Raman (Physics 1930), Khorana (Medicine 1968), Chandrasekhar (Physics 1983), Ramakrishnan (Chemistry 2009)"]
  ]},
  {k:"trick", h:"Two Boses: <b>J</b>. C. Bose — <b>J</b>ungle (plants); <b>S</b>. N. Bose — <b>S</b>tatistics (bosons). Two fathers: <b>Bh</b>abha — <b>B</b>omb/atom; <b>S</b>arabhai — <b>S</b>pace."},
  {k:"trap", h:"Only <b>C. V. Raman</b> won his Nobel as an Indian citizen working in India; Khorana, Chandrasekhar and Ramakrishnan worked abroad. <b>Chandrasekhar</b> (white dwarfs) is not <b>Chandrashekhar Azad</b>. <b>Kalam</b> is the Missile Man, not the father of the space programme (Sarabhai)."}
], sum:["C. V. Raman — Raman effect, 28 February 1928; Nobel Prize in Physics 1930.","J. C. Bose — crescograph and plant response; S. N. Bose — Bose–Einstein statistics, bosons.","Ramanujan — number theory, 1729; Mahalanobis — ISI and statistics; Saha — ionisation equation.","Bhabha — nuclear programme; Sarabhai — space programme; Kalam — Missile Man (SLV-3, Agni).","Khorana — genetic code (1968); Chandrasekhar — white-dwarf limit (1983); Ramakrishnan — ribosome (2009)."]},

{id:"I10", heat:2, title:"Ancient Indian science and 'father of' titles", hi:"प्राचीन भारतीय विज्ञान और 'जनक' उपाधियाँ", blocks:[
  {k:"hot", h:"Two kinds of questions: <b>scholar → book</b> (Aryabhata – Aryabhatiya, Sushruta – Sushruta Samhita, Charaka – Charaka Samhita, Bhaskara – Lilavati) and <b>“Who is called the father of …?”</b> (medicine – Hippocrates, surgery – Sushruta, genetics – Mendel, computer – Babbage)."},
  {k:"story", h:"<p>Long before modern labs, Indian scholars wrote science in Sanskrit verse. <b>Aryabhata</b> (born 476 CE) said in the <b>Aryabhatiya</b> that the Earth turns on its axis and gave π as 3.1416. <b>Brahmagupta</b> wrote rules for zero; <b>Bhaskaracharya</b>'s <b>Lilavati</b> taught arithmetic through puzzles. <b>Varahamihira</b> wrote on astronomy. In medicine, <b>Charaka</b> wrote the Charaka Samhita and <b>Sushruta</b> described over 300 operations, even nose repair, in the Sushruta Samhita. <b>Kanada</b> imagined the atom (paramanu).</p><p>Every field honours a founder with the title 'father'. Medicine has <b>Hippocrates</b>, biology <b>Aristotle</b>, genetics <b>Mendel</b>, chemistry <b>Lavoisier</b>, computers <b>Babbage</b>. India's own: <b>Bhabha</b> (nuclear), <b>Sarabhai</b> (space), <b>Swaminathan</b> (Green Revolution), <b>Kurien</b> (White Revolution).</p>", key:"Aryabhata — Aryabhatiya; Brahmagupta — zero; Bhaskara — Lilavati; Sushruta — surgery; Charaka — medicine; Kanada — atom."},
  {k:"table", title:"Ancient Indian scholars and their works", head:["Scholar","Famous work","Note"], rows: I10.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"'Father of …' and other titles", head:["Title","Person","Note"], rows: I10F.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Su-Surgery, Cha-Chikitsa”</b> — Sushruta for surgery, Charaka for medicine. <b>“Bhaskara's daughter Lilavati”</b> — the book is said to be named after his daughter."},
  {k:"trap", h:"<b>Aryabhata</b> wrote the Aryabhatiya; <b>Brahmagupta</b> gave the rules for zero. <b>Father of Medicine</b> = Hippocrates, but <b>Father of Surgery</b> = Sushruta. World Green Revolution = <b>Norman Borlaug</b>; India's = <b>M. S. Swaminathan</b>."}
], sum:["Aryabhata — Aryabhatiya (499 CE), Earth's rotation, π ≈ 3.1416; Brahmagupta — rules for zero.","Bhaskaracharya — Lilavati; Varahamihira — Pancha Siddhantika and Brihat Samhita.","Sushruta — Sushruta Samhita (surgery); Charaka — Charaka Samhita (medicine); Kanada — atom.","Fathers: medicine Hippocrates, biology Aristotle, genetics Mendel, taxonomy Linnaeus, computer Babbage.","India: Bhabha nuclear, Sarabhai space, Swaminathan Green Revolution, Kurien White Revolution, Kalam Missile Man."]}
);

pairQs("I7", I7, { q: t => `The SI unit '${t}' measures:`, rq: a => `What is the SI unit of ${a.toLowerCase()}?` });
pairQs("I8", I8, { q: t => `${/^[AEIOU]/.test(t) ? 'An' : 'A'} ${t.toLowerCase()} is used to measure:`, rq: a => `Which instrument measures ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("I8", I8B, { q: t => `Who invented the ${t}?` });
pairQs("I9", I9, { q: t => `${t} is best known for:`, rq: a => `Which Indian scientist is known for: ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("I10", I10, { q: t => `Which famous work was written by ${t}?`, rq: a => `Who wrote the ${a}?` });
pairQs("I10", I10F, { q: t => `Who is called the '${t}'?`, rq: a => `${a} is known by which title?` });

QB.push(
["I7","Which of these is an SI base unit?",["Kelvin","Newton","Joule","Pascal"],"The seven base units: metre, kilogram, second, ampere, kelvin, mole, candela.","p"],
["I7","One ångström is equal to:",["10⁻¹⁰ metre","10⁻⁹ metre","10⁻¹² metre","10⁻⁶ metre"],"Named after Anders Ångström; used for atomic sizes and wavelengths.","p"],
["I7","The 'curie' is an older unit of:",["Radioactivity","Pressure","Magnetic field","Luminous intensity"],"1 curie = 3.7 × 10¹⁰ becquerel.",""],
["I7","One watt is equal to one:",["Joule per second","Newton per metre","Volt per ampere","Coulomb per second"],"Power is the rate of doing work.","p"],
["I7","Which unit is named after Michael Faraday?",["Farad","Henry","Weber","Siemens"],"The farad measures capacitance.",""],
["I8","The Richter scale measures the:",["Magnitude of an earthquake","Speed of wind","Intensity of sound","Depth of the sea"],"Made by Charles Richter in 1935; read from a seismograph.","p"],
["I8","An ammeter is connected in a circuit:",["In series","In parallel","Across the battery only","Anywhere, it makes no difference"],"So that the whole current flows through it.","p"],
["I8","Which instrument converts sound into an electrical signal?",["Microphone","Loudspeaker","Galvanometer","Ammeter"],"A loudspeaker does the reverse.",""],
["I8","SONAR, used to find objects under water, works with:",["Sound waves","Radio waves","Light waves","X-rays"],"Sound Navigation and Ranging.","p"],
["I9","In 1928, who discovered that light changes wavelength when scattered by molecules?",["C. V. Raman","J. C. Bose","Meghnad Saha","S. N. Bose"],"The Raman effect; Nobel Prize in Physics 1930.","p","","","SSC CHSL 2021 · 10 Jun 2022 (Shift 3)"],
["I9","National Science Day (28 February) marks the discovery of the:",["Raman effect","Chandrasekhar limit","Bose–Einstein statistics","Saha equation"],"Announced on 28 February 1928.","p"],
["I9","The number 1729 is linked with which mathematician?",["Srinivasa Ramanujan","Aryabhata","P. C. Mahalanobis","Harish-Chandra"],"The smallest number that is the sum of two cubes in two ways.","p"],
["I9","Who was India's first Nobel laureate in science?",["C. V. Raman","Har Gobind Khorana","S. Chandrasekhar","J. C. Bose"],"Physics, 1930.","p"],
["I9","ISRO was set up in the year:",["1969","1962","1947","1975"],"It grew out of INCOSPAR (1962), set up under Vikram Sarabhai.","p"],
["I10","India's first satellite, launched in 1975, was named after:",["Aryabhata","Bhaskara","Varahamihira","Brahmagupta"],"Launched from the Soviet Union on 19 April 1975.","p"],
["I10","Who first stated that the Earth rotates on its own axis, in ancient India?",["Aryabhata","Charaka","Kanada","Patanjali"],"In the Aryabhatiya.","p"],
["I10","Who is known as the father of the world's Green Revolution?",["Norman Borlaug","M. S. Swaminathan","Verghese Kurien","Gregor Mendel"],"Nobel Peace Prize 1970.","p"],
["I10","The idea of the atom (paramanu) in ancient India is linked with:",["Kanada","Sushruta","Aryabhata","Charaka"],"In the Vaisheshika school.","p"]
);

LASTMOMENT.push(
{t:"Units", era:["iv"], rows:[["newton","Force"],["joule","Energy"],["watt","Power"],["pascal","Pressure"],["ohm","Resistance"],["tesla","Flux density"],["weber","Magnetic flux"],["becquerel","Radioactivity"]]},
{t:"Instruments", era:["iv"], rows:[["Barometer","Air pressure"],["Hygrometer","Humidity"],["Seismograph","Earthquakes"],["Anemometer","Wind speed"],["Lactometer","Milk"],["Hydrometer","Liquid density"],["Pyrometer","High heat"],["Sphygmomanometer","Blood pressure"]]},
{t:"Indian scientists", era:["iv"], rows:[["Raman","Scattering of light"],["J. C. Bose","Crescograph"],["S. N. Bose","Bosons"],["Bhabha","Nuclear"],["Sarabhai","Space"],["Kalam","Missiles"],["Khorana","Genetic code"],["Aryabhata","Aryabhatiya"]]}
);
TILES.push(["1928","Raman effect","iv"],["1930","Raman's Nobel","iv"],["1729","Ramanujan's number","iv"],["1975","Aryabhata satellite","iv"]);
