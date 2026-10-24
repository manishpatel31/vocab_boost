/* Science & Technology in India — nuclear energy: the three stages, reactors and bodies (ST3); plants, partners, laws and Pokhran (ST4).
   Status checked October 2026: PFBR first criticality 6 April 2026; SHANTI Act 2025 in force; about 8,780 MW from 24 reactors. */
const ST3 = [
  ["Atomic Energy Commission (AEC)","Sets India's atomic energy policy","1948; Homi J. Bhabha was the first chairman.",""],
  ["Bhabha Atomic Research Centre (BARC)","Leads India's nuclear research from Trombay","Trombay, Mumbai; began in 1954 as AEET, renamed after Bhabha in 1967.",""],
  ["Indira Gandhi Centre for Atomic Research (IGCAR)","Researches fast breeder reactors at Kalpakkam","Kalpakkam, Tamil Nadu; set up in 1971.",""],
  ["Nuclear Power Corporation of India Ltd (NPCIL)","Builds and runs India's nuclear power stations (except the PFBR)","Mumbai; 1987. Runs every working power reactor except the fast breeder.",""],
  ["BHAVINI (Bharatiya Nabhikiya Vidyut Nigam)","Builds and runs the PFBR at Kalpakkam","Kalpakkam; 2003. Built the 500 MWe PFBR.",""],
  ["Atomic Energy Regulatory Board (AERB)","Checks nuclear and radiation safety","Mumbai; 1983. Became a statutory body under the SHANTI Act, 2025.",""],
  ["Uranium Corporation of India Ltd (UCIL)","Mines and processes uranium","1967; its first mine is at Jaduguda, Jharkhand.",""],
  ["Nuclear Fuel Complex (NFC)","Makes fuel bundles for reactors","Hyderabad; 1971.",""],
  ["IREL (India) Ltd","Mines beach sands for monazite, the ore of thorium","1950; mineral sands of Kerala, Tamil Nadu and Odisha.",""],
  ["Heavy Water Board","Makes heavy water for reactors","Plants at Kota, Tuticorin, Talcher, Manuguru, Hazira, Thal and Vadodara.",""],
  ["Raja Ramanna Centre for Advanced Technology (RRCAT)","Works on lasers and particle accelerators","Indore; 1984.",""]
];
const ST4A = [
  ["Tarapur","Maharashtra","India's first nuclear power station (1969); its two oldest units are boiling water reactors from the USA.",""],
  ["Rawatbhata (Rajasthan Atomic Power Station)","Rajasthan","Near Kota; unit 1 built with Canada (1973); 700 MWe units 7 (2025) and 8 (fuel loaded September 2026).",""],
  ["Kalpakkam (Madras Atomic Power Station)","Tamil Nadu","India's first fully home-built PHWRs (1984); also FBTR, KAMINI and the PFBR.",""],
  ["Narora","Uttar Pradesh","On the Ganga in Bulandshahr district; 1991.",""],
  ["Kakrapar","Gujarat","Near Surat; unit 3 was India's first home-grown 700 MWe PHWR (commercial in 2023).",""],
  ["Kaiga","Karnataka","Uttara Kannada; unit 1 ran non-stop for a world-record 962 days (2018).",""],
  ["Kudankulam","Tamil Nadu","India's largest — 1,000 MWe VVERs built with Russia; units 1–2 running, 3–6 being built.",""]
];
const ST4B = [
  ["Gorakhpur (Fatehabad)","Haryana","Four home-grown 700 MWe PHWRs being built — Haryana's first nuclear plant.",""],
  ["Mahi Banswara","Rajasthan","Four 700 MWe PHWRs; foundation stone 25 September 2025; a joint venture of NPCIL (51%) and NTPC (49%).",""],
  ["Chutka","Madhya Pradesh","Two 700 MWe PHWRs planned in Mandla district.",""],
  ["Jaitapur","Maharashtra","Six French EPRs (about 9,900 MWe) planned with EDF — would be the world's largest nuclear site.",""],
  ["Kovvada","Andhra Pradesh","Six US AP1000 reactors (Westinghouse) planned in Srikakulam district.",""]
];
const ST4C = [
  ["Tarapur units 1 and 2 (1969)","USA","Boiling water reactors supplied by General Electric."],
  ["Rawatbhata unit 1 (1973)","Canada","A CANDU-type heavy water reactor."],
  ["the CIRUS research reactor (1960)","Canada","Its plutonium was used for the 1974 test."],
  ["Kudankulam","Russia","VVER-1000 pressurised water reactors (Rosatom)."],
  ["Jaitapur (planned)","France","EDF's EPR design."],
  ["Kovvada (planned)","USA","Westinghouse AP1000 design."]
];

LESSONS.push(
{id:"ST3", heat:2, title:"Nuclear energy I: the three stages, reactors and bodies", hi:"परमाणु ऊर्जा I: त्रि-चरणीय कार्यक्रम, रिएक्टर और संस्थाएँ", blocks:[
  {k:"hot", h:"Asked: <b>Bhabha's three-stage programme</b> and why it ends with <b>thorium</b>, what <b>PHWR</b> and <b>FBR</b> mean, the <b>PFBR</b> at Kalpakkam, which body does what (<b>BARC, NPCIL, BHAVINI, AERB, UCIL</b>), and the research reactors <b>Apsara, CIRUS, Dhruva, KAMINI</b>."},
  {k:"story", h:"<p>India has little uranium but some of the world's largest reserves of <b>thorium</b>, in the monazite sands of the Kerala, Tamil Nadu and Odisha coasts. Thorium cannot run a reactor by itself, so in 1954 <b>Homi J. Bhabha</b> drew up a plan in three steps.</p><p><b>Stage 1</b>: burn natural uranium in <b>pressurised heavy water reactors</b> (PHWRs). They give power and leave behind <b>plutonium-239</b>. <b>Stage 2</b>: burn that plutonium in <b>fast breeder reactors</b>, which 'breed' more fuel than they use and, with a thorium blanket, turn thorium into <b>uranium-233</b>. <b>Stage 3</b>: run reactors on thorium and uranium-233 — power for centuries.</p><p>Stage 1 has run since the 1970s. Stage 2 began on <b>6 April 2026</b>, when the 500 MWe <b>Prototype Fast Breeder Reactor</b> at <b>Kalpakkam</b> reached first criticality — about sixteen years late. Stage 3 is still on the drawing board, in designs such as BARC's Advanced Heavy Water Reactor.</p>", key:"Uranium (PHWR) → plutonium (fast breeder) → thorium (stage 3). PFBR, Kalpakkam: first criticality 6 April 2026."},
  {k:"table", title:"The nuclear family: who does what", head:["Body","Job","Where and when"], rows: ST3.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"The three stages", head:["Stage","Reactor","Fuel → what it gives"], rows:[
    ["1","Pressurised heavy water reactor (PHWR)","Natural uranium → power and plutonium-239"],
    ["2","Fast breeder reactor (FBR)","Plutonium-239 with uranium; a thorium blanket → more fuel than it burns, and uranium-233"],
    ["3","Thorium-based reactors (e.g. the Advanced Heavy Water Reactor design)","Thorium-232 with uranium-233 → power from India's thorium"]]},
  {k:"table", title:"Reactor types", head:["Type","Full form","In India"], rows:[
    ["PHWR","Pressurised Heavy Water Reactor","The workhorse: natural uranium, heavy water as moderator and coolant; 220, 540 and 700 MWe units"],
    ["BWR","Boiling Water Reactor","Tarapur 1 and 2 (1969), from the USA — India's oldest working reactors"],
    ["VVER","Russian pressurised water reactor","Kudankulam, 1,000 MWe each; enriched uranium and ordinary water"],
    ["FBR","Fast Breeder Reactor","FBTR and PFBR at Kalpakkam; liquid sodium coolant and no moderator"],
    ["AHWR","Advanced Heavy Water Reactor","BARC's thorium design for stage 3"],
    ["BSR / SMR","Bharat Small Reactor / Small Modular Reactor","BSR: a 220 MWe PHWR for industry; BARC is designing the BSMR-200 and SMR-55"]]},
  {k:"table", title:"Research and test reactors", head:["Reactor","Year","Remember"], rows:[
    ["Apsara","1956","India's and Asia's first research reactor, at Trombay; rebuilt as Apsara-U (2018)"],
    ["CIRUS","1960","Built with Canada at Trombay"],
    ["Dhruva","1985","100 MW research reactor at BARC, fully Indian"],
    ["FBTR","1985","Fast Breeder Test Reactor, Kalpakkam — runs on plutonium-uranium carbide fuel"],
    ["KAMINI","1996","Kalpakkam — the world's only reactor running on uranium-233"],
    ["PFBR","2026","500 MWe Prototype Fast Breeder Reactor, Kalpakkam — first criticality 6 April 2026"]]},
  {k:"facts", title:"PFBR and the Nuclear Energy Mission (as of October 2026)", rows:[
    ["PFBR size and fuel","500 MWe; mixed uranium-plutonium oxide (MOX) fuel; cooled by liquid sodium"],
    ["Designed and built by","IGCAR designed it; BHAVINI built it (construction began 2004; first planned for 2010)"],
    ["Where it stands","First criticality 6 April 2026; low-power tests and power-raising come before commercial operation"],
    ["Elsewhere","Russia is the only other country running a commercial-scale fast breeder"],
    ["Nuclear Energy Mission","Budget 2025-26: ₹20,000 crore for small modular reactors, at least five working by 2033"],
    ["Long-term goal","100 GW of nuclear power by 2047 (about 8.8 GW today)"]]},
  {k:"trick", h:"<b>“U → Pu → Th”</b>: Stage 1 uses <b>U</b>ranium, Stage 2 <b>P</b>l<b>u</b>tonium, Stage 3 <b>Th</b>orium. Kalpakkam is the <b>“K for breeder”</b> town: FBTR, KAMINI, PFBR, IGCAR and BHAVINI are all there."},
  {k:"trap", h:"<b>NPCIL</b> runs the ordinary power reactors; the fast breeder belongs to <b>BHAVINI</b>. <b>AERB</b> is the safety regulator, not an operator. In a PHWR the fuel is <b>natural</b> uranium; Kudankulam's VVERs need <b>enriched</b> uranium. The PFBR is cooled by <b>liquid sodium</b>, not heavy water."},
  {k:"link", h:"Fission, fusion, half-life and the parts of a reactor (moderator, control rods, coolant) are in <a href=\"study-chemistry.html?lesson=K18\">Chemistry</a> (K18); Bhabha's life is in <a href=\"study-inventions.html?lesson=I9\">Inventions &amp; Discoveries</a>; BARC's and IGCAR's addresses in <a href=\"study-hq-founders.html?lesson=H4\">Headquarters &amp; Founders</a>."}
], sum:["Bhabha's three stages: PHWR on natural uranium → fast breeder on plutonium → thorium with uranium-233.","India has huge thorium (monazite sands) but little uranium — hence the plan.","The 500 MWe PFBR at Kalpakkam (BHAVINI) reached first criticality on 6 April 2026 — stage 2 has begun.","BARC researches, NPCIL runs power plants, BHAVINI the breeder, AERB regulates, UCIL mines uranium (Jaduguda).","Apsara 1956 (first in Asia), CIRUS 1960 (Canada), Dhruva 1985, FBTR 1985, KAMINI 1996 (uranium-233).","Nuclear Energy Mission (2025): ₹20,000 crore for SMRs; 100 GW by 2047."]},

{id:"ST4", heat:2, title:"Nuclear energy II: plants, partners, laws and Pokhran", hi:"परमाणु ऊर्जा II: संयंत्र, साझेदार, कानून और पोखरण", blocks:[
  {k:"hot", h:"Asked: a <b>plant and its state</b>, the <b>foreign partner</b> of Tarapur, Rawatbhata, Kudankulam, Jaitapur and Kovvada, <b>Pokhran 1974 and 1998</b> (code names, leaders), the <b>nuclear doctrine</b> (no first use), the <b>2008 deal</b>, and the new <b>SHANTI Act, 2025</b>."},
  {k:"story", h:"<p>On <b>18 May 1974</b>, under Indira Gandhi, scientists led by <b>Raja Ramanna</b> set off a 'peaceful nuclear explosion' in the desert at <b>Pokhran</b> — code-named <b>Smiling Buddha</b>. The world answered by forming the <b>Nuclear Suppliers Group</b> and cutting off help. Twenty-four years later, on <b>11 and 13 May 1998</b>, came five more tests — <b>Operation Shakti</b> — led by <b>A. P. J. Abdul Kalam</b> and <b>R. Chidambaram</b> under Prime Minister Vajpayee, and India declared itself a nuclear-weapon state. In 2003 it set out a doctrine of <b>no first use</b>.</p><p>The door reopened in <b>2008</b> with the India–US civil nuclear agreement and a waiver from the NSG. Russia's reactors rose at <b>Kudankulam</b>, while India built its own 700 MWe reactors at Kakrapar and Rawatbhata. In <b>December 2025</b> Parliament passed the <b>SHANTI Act</b>, which replaced the Atomic Energy Act of 1962 and the nuclear liability law of 2010 and, for the first time, let private Indian companies build and run nuclear plants.</p>", key:"Pokhran 1974 Smiling Buddha (Ramanna) · 1998 Shakti (Kalam, Chidambaram) · 2003 no first use · 2008 Indo-US deal · 2025 SHANTI Act."},
  {k:"table", title:"Nuclear power plants at work", head:["Plant","State","Remember"], rows: ST4A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"New and planned plants", head:["Plant","State","Remember"], rows: ST4B.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Foreign partners", head:["Plant or reactor","Partner country","Design"], rows: ST4C},
  {k:"tl", title:"India's nuclear road", rows:[
    ["1948","Atomic Energy Commission set up; Atomic Energy Act passed"],
    ["1956","Apsara, Asia's first research reactor, at Trombay"],
    ["1962","Atomic Energy Act, 1962 replaces the 1948 law"],
    ["1969","Tarapur — India's first nuclear power station"],
    ["1974","Pokhran-I, 'Smiling Buddha' (18 May)"],
    ["1998","Pokhran-II, 'Operation Shakti' (11 and 13 May)"],
    ["2003","Nuclear doctrine: no first use"],
    ["2008","India–US civil nuclear agreement; NSG waiver"],
    ["2010","Civil Liability for Nuclear Damage Act"],
    ["2025","SHANTI Act opens nuclear power to private Indian companies"],
    ["2026","PFBR first criticality (6 April) — stage 2 begins"]]},
  {k:"facts", title:"Pokhran and the doctrine", rows:[
    ["Pokhran-I","18 May 1974, 'Smiling Buddha'; PM Indira Gandhi; team led by Raja Ramanna; one device"],
    ["Pokhran-II","11 and 13 May 1998, 'Operation Shakti'; PM Vajpayee; A. P. J. Abdul Kalam (DRDO) and R. Chidambaram (DAE); five devices"],
    ["Where","Pokhran test range, Jaisalmer district, Rajasthan"],
    ["Nuclear doctrine (January 2003)","No first use; credible minimum deterrent; massive retaliation; no use against non-nuclear-weapon states"],
    ["Nuclear Command Authority","Political Council chaired by the Prime Minister; Executive Council chaired by the National Security Adviser; weapons handled by the Strategic Forces Command"],
    ["Treaties","India has not signed the NPT (1968) or the CTBT (1996); it is not in the NSG but joined the MTCR (2016), Wassenaar (2017) and Australia Group (2018)"]]},
  {k:"facts", title:"The laws, and where things stand (as of October 2026)", rows:[
    ["Atomic Energy Act, 1962","Kept nuclear power with the government only — repealed in 2025"],
    ["Civil Liability for Nuclear Damage Act, 2010","Made the operator liable and let it claim from suppliers — foreign suppliers stayed away; repealed in 2025"],
    ["SHANTI Act, 2025","Sustainable Harnessing and Advancement of Nuclear Energy for Transforming India — passed 17–18 December 2025; assent 20 December 2025"],
    ["What SHANTI changes","Private Indian companies may build and run plants under licence; AERB becomes statutory; liability caps by reactor size; enrichment, reprocessing and spent fuel stay with the government"],
    ["Capacity","24 reactors, about 8,780 MW (about 3% of electricity); about 22,380 MW expected by 2031–32"]]},
  {k:"trick", h:"Partners by letter — <b>“US Tara, Can Rawat, Rus Kudan, Fra Jaita, US Kovva”</b>. Plants in a ring: <b>Ta-Ra-Ka-Na-Ka-Ka-Ku</b> — Tarapur, Rawatbhata, Kalpakkam, Narora, Kakrapar, Kaiga, Kudankulam."},
  {k:"trap", h:"<b>Narora</b> is in Uttar Pradesh, <b>Kakrapar</b> in Gujarat and <b>Kaiga</b> in Karnataka. <b>Gorakhpur</b> nuclear plant is in <b>Haryana</b> (Fatehabad), not Uttar Pradesh. The 1974 test was led by <b>Raja Ramanna</b>; Kalam led the <b>1998</b> tests. SHANTI replaced the <b>1962</b> Act, not the 1948 one."},
  {k:"link", h:"Every power plant by state — thermal, hydro, solar and wind as well as nuclear — is in <a href=\"study-indian-geography.html?lesson=G12\">Indian Geography</a> (G12). Agni, Prithvi and the nuclear triad are in <a href=\"study-defence.html?lesson=F5\">Defence</a>; National Technology Day (11 May) in <a href=\"study-important-days.html?lesson=D2\">Important Days</a>."}
], sum:["Working plants: Tarapur (MH, 1969), Rawatbhata (RJ), Kalpakkam (TN), Narora (UP), Kakrapar (GJ), Kaiga (KA), Kudankulam (TN, largest).","Partners: Tarapur USA, Rawatbhata-1 and CIRUS Canada, Kudankulam Russia, Jaitapur France (planned), Kovvada USA (planned).","Pokhran-I 18 May 1974 'Smiling Buddha' (Raja Ramanna); Pokhran-II 11 and 13 May 1998 'Operation Shakti' (Kalam, Chidambaram).","Doctrine 2003: no first use; NCA's Political Council is chaired by the PM.","2008: India–US civil nuclear deal and NSG waiver; India is not in the NSG and has not signed the NPT or CTBT.","SHANTI Act 2025 replaced the Atomic Energy Act 1962 and the CLND Act 2010 and lets private Indian firms run plants."]}
);

pairQs("ST3", ST3, { q: t => `What is the main job of the ${t}?`, rq: a => `Which body ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("ST4", ST4A, { q: t => `In which state is the ${t} nuclear power plant?`, extra: ["Kerala", "Andhra Pradesh"] });
pairQs("ST4", ST4B, { q: t => `The ${t} nuclear project is in which state?`, extra: ["Gujarat", "Tamil Nadu", "Odisha"] });
pairQs("ST4", ST4C, { q: t => `Which country was (or is) the partner for ${t}?`, extra: ["Japan", "United Kingdom"] });

QB.push(
["ST3","Who drew up India's three-stage nuclear power programme?",["Homi J. Bhabha","Vikram Sarabhai","Raja Ramanna","M. R. Srinivasan"],"Bhabha set out the plan in the 1950s to make use of India's thorium.",""],
["ST3","Why does India's nuclear plan end with thorium?",["India has large thorium reserves but little uranium","Thorium is easier to enrich than uranium","Thorium reactors need no fuel at all","Thorium is the only fuel allowed by the NPT"],"Thorium in the coastal monazite sands is plentiful; uranium is scarce.",""],
["ST3","Which reactors make up stage 1 of India's nuclear programme?",["Pressurised heavy water reactors","Fast breeder reactors","Thorium-based reactors","Fusion reactors"],"PHWRs burn natural uranium and leave plutonium-239 for stage 2.",""],
["ST3","What is the main fuel of a stage-2 fast breeder reactor?",["Plutonium-239","Uranium-233","Thorium-232","Deuterium"],"The breeder burns plutonium made in stage 1 and breeds more fuel.",""],
["ST3","In stage 3, thorium is used together with:",["Uranium-233","Plutonium-239","Natural uranium only","Heavy hydrogen"],"Thorium-232 becomes uranium-233 in a breeder blanket; the pair fuel stage 3.",""],
["ST3","India's thorium comes mainly from:",["Monazite sands on the coast","Pitchblende in Jharkhand","Bauxite in Odisha","Salt pans in Gujarat"],"Monazite is found in the beach sands of Kerala, Tamil Nadu and Odisha.",""],
["ST3","When did the Prototype Fast Breeder Reactor at Kalpakkam reach first criticality?",["6 April 2026","15 August 2023","11 May 2010","18 May 2024"],"PFBR went critical on 6 April 2026, marking the start of stage 2.",""],
["ST3","The Prototype Fast Breeder Reactor is cooled by:",["Liquid sodium","Heavy water","Ordinary water","Carbon dioxide gas"],"Fast reactors use liquid sodium, which carries heat without slowing neutrons.",""],
["ST3","What is the electrical capacity of the PFBR?",["500 MWe","220 MWe","700 MWe","1,000 MWe"],"The prototype is 500 MWe; India's standard PHWRs are 700 MWe.",""],
["ST3","KAMINI at Kalpakkam is the world's only reactor running on:",["Uranium-233","Plutonium-239","Thorium-232","Enriched uranium-235"],"KAMINI (1996) uses uranium-233 made from thorium.",""],
["ST3","In a pressurised heavy water reactor, heavy water acts as:",["Both moderator and coolant","Fuel","Control rod","Radiation shield only"],"Heavy water slows neutrons (moderator) and carries heat away (coolant).",""],
["ST3","India's first uranium mine is at:",["Jaduguda","Tummalapalle","Kalpakkam","Rawatbhata"],"UCIL's Jaduguda mine in Jharkhand opened in 1967; Tummalapalle (Andhra Pradesh) is a newer one.",""],
["ST3","Which research reactor, built with Canada in 1960, supplied plutonium for the 1974 test?",["CIRUS","Apsara","Dhruva","KAMINI"],"CIRUS at Trombay was a Canada-India reactor; its plutonium was used at Pokhran in 1974.",""],
["ST3","How much did the Union Budget 2025-26 set aside for the Nuclear Energy Mission on small modular reactors?",["₹20,000 crore","₹2,000 crore","₹76,000 crore","₹6,003 crore"],"₹20,000 crore, with at least five home-grown SMRs to be working by 2033.",""],
["ST3","India's target for nuclear power capacity by 2047 is:",["100 GW","22 GW","500 GW","50 GW"],"The Nuclear Energy Mission aims for at least 100 GW by 2047.",""],

["ST4","India's first nuclear test, on 18 May 1974, was code-named:",["Smiling Buddha","Operation Shakti","Operation Vijay","Operation Meghdoot"],"Smiling Buddha was set off at Pokhran under Indira Gandhi.",""],
["ST4","Who led the scientific team for India's 1974 nuclear test?",["Raja Ramanna","A. P. J. Abdul Kalam","Homi J. Bhabha","Vikram Sarabhai"],"Raja Ramanna led the team; Bhabha had died in 1966.",""],
["ST4","The 1998 Pokhran tests were code-named:",["Operation Shakti","Smiling Buddha","Operation Trishul","Operation Parakram"],"Operation Shakti: five devices on 11 and 13 May 1998.",""],
["ST4","How many nuclear devices did India test in May 1998?",["Five","One","Three","Seven"],"Three on 11 May and two on 13 May 1998.",""],
["ST4","The Pokhran test range is in which district of Rajasthan?",["Jaisalmer","Barmer","Bikaner","Jodhpur"],"Pokhran lies in Jaisalmer district.",""],
["ST4","The core of India's nuclear doctrine (2003) is:",["No first use","First use if attacked by any weapon","Use only with UN approval","Nuclear sharing with allies"],"India will not use nuclear weapons first; retaliation to a first strike will be massive.",""],
["ST4","The Political Council of India's Nuclear Command Authority is chaired by the:",["Prime Minister","President","National Security Adviser","Chief of Defence Staff"],"The Executive Council is chaired by the National Security Adviser.",""],
["ST4","Which group was formed in 1974, partly in reaction to India's first nuclear test?",["Nuclear Suppliers Group","Missile Technology Control Regime","Wassenaar Arrangement","Australia Group"],"The NSG controls nuclear exports; India is still not a member.",""],
["ST4","The India–US civil nuclear agreement and the NSG waiver came in:",["2008","1998","2005","2014"],"The NSG gave India a waiver in September 2008, and the '123 Agreement' followed.",""],
["ST4","What does the SHANTI Act, 2025 stand for?",["Sustainable Harnessing and Advancement of Nuclear Energy for Transforming India","Safe Handling of Atomic and Nuclear Technology in India","Strategic Heavy-water and Nuclear Technology Initiative","Sustainable Hydrogen and Nuclear Transition for India"],"Parliament passed it on 17–18 December 2025.",""],
["ST4","Which two laws did the SHANTI Act, 2025 repeal?",["Atomic Energy Act, 1962 and Civil Liability for Nuclear Damage Act, 2010","Atomic Energy Act, 1948 and Electricity Act, 2003","Environment (Protection) Act, 1986 and Atomic Energy Act, 1962","Civil Liability for Nuclear Damage Act, 2010 and Mines Act, 1952"],"SHANTI brought nuclear law into one Act and replaced both older laws.",""],
["ST4","What big change does the SHANTI Act bring to nuclear power?",["Private Indian companies can build and run plants under licence","Foreign companies can own and run reactors on their own","Nuclear power is banned in coastal states","All reactors move from NPCIL to ISRO"],"Strategic work such as reprocessing and spent fuel stays with the government.",""],
["ST4","Under the SHANTI Act, which body became a statutory regulator?",["Atomic Energy Regulatory Board","Nuclear Power Corporation of India","Bhabha Atomic Research Centre","Heavy Water Board"],"AERB, set up in 1983 by an order, now has the backing of law.",""],
["ST4","Kudankulam's reactors are of which type?",["VVER (Russian pressurised water reactor)","PHWR","Fast breeder reactor","Boiling water reactor"],"Kudankulam uses 1,000 MWe VVERs built with Russia.",""],
["ST4","Which was India's first home-grown 700 MWe PHWR to enter commercial operation (2023)?",["Kakrapar unit 3","Rawatbhata unit 1","Tarapur unit 1","Kaiga unit 1"],"Kakrapar-3 in Gujarat led the new fleet of 700 MWe reactors.",""],
["ST4","Kaiga unit 1 set a world record in 2018 for:",["The longest non-stop run (962 days)","The largest reactor","The first thorium reactor","The fastest construction"],"It ran continuously for 962 days.",""],
["ST4","About how much nuclear power capacity did India have in 2026?",["About 8.8 GW","About 88 GW","About 2 GW","About 22 GW"],"About 8,780 MW from 24 reactors — roughly 3% of India's electricity.",""],
["ST4","The Mahi Banswara nuclear project is a joint venture of NPCIL and:",["NTPC","BHEL","Tata Power","Adani Power"],"NPCIL holds 51% and NTPC 49% through the joint venture ASHVINI.",""]
);
