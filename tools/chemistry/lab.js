/* ============================================================
   Chemistry Lab — the "lab" tab of study-chemistry.html (put in the page by tools/chemistry/build.js).
   The periodic table, "Find it!" and the chemistry decks. The games themselves (60-second quizzes,
   Memory Match, XP) are the shared tools/workbook/games.js, which reads LAB_CONF below.
   ============================================================ */

/* ---------- elements: Z, symbol, name, standard atomic mass, category ---------- */
const LAB_CATS = {
  am: ["Alkali metal", "#E0614A"], ae: ["Alkaline earth metal", "#E8A03A"], tm: ["Transition metal", "#D8B53C"],
  pt: ["Post-transition metal", "#7FA8A0"], md: ["Metalloid", "#62A86B"], nm: ["Reactive non-metal", "#3E9BD4"],
  hl: ["Halogen", "#22B3B8"], ng: ["Noble gas", "#8B6FD6"], la: ["Lanthanide", "#D46FA8"], ac: ["Actinide", "#C85A7C"],
  un: ["Unknown properties", "#9A9A9A"]
};
const LAB_EL = `1 H Hydrogen 1.008 nm|2 He Helium 4.003 ng|3 Li Lithium 6.94 am|4 Be Beryllium 9.012 ae|5 B Boron 10.81 md|6 C Carbon 12.011 nm|7 N Nitrogen 14.007 nm|8 O Oxygen 15.999 nm|9 F Fluorine 18.998 hl|10 Ne Neon 20.180 ng|11 Na Sodium 22.990 am|12 Mg Magnesium 24.305 ae|13 Al Aluminium 26.982 pt|14 Si Silicon 28.085 md|15 P Phosphorus 30.974 nm|16 S Sulphur 32.06 nm|17 Cl Chlorine 35.45 hl|18 Ar Argon 39.948 ng|19 K Potassium 39.098 am|20 Ca Calcium 40.078 ae|21 Sc Scandium 44.956 tm|22 Ti Titanium 47.867 tm|23 V Vanadium 50.942 tm|24 Cr Chromium 51.996 tm|25 Mn Manganese 54.938 tm|26 Fe Iron 55.845 tm|27 Co Cobalt 58.933 tm|28 Ni Nickel 58.693 tm|29 Cu Copper 63.546 tm|30 Zn Zinc 65.38 tm|31 Ga Gallium 69.723 pt|32 Ge Germanium 72.630 md|33 As Arsenic 74.922 md|34 Se Selenium 78.971 nm|35 Br Bromine 79.904 hl|36 Kr Krypton 83.798 ng|37 Rb Rubidium 85.468 am|38 Sr Strontium 87.62 ae|39 Y Yttrium 88.906 tm|40 Zr Zirconium 91.224 tm|41 Nb Niobium 92.906 tm|42 Mo Molybdenum 95.95 tm|43 Tc Technetium (98) tm|44 Ru Ruthenium 101.07 tm|45 Rh Rhodium 102.91 tm|46 Pd Palladium 106.42 tm|47 Ag Silver 107.87 tm|48 Cd Cadmium 112.41 tm|49 In Indium 114.82 pt|50 Sn Tin 118.71 pt|51 Sb Antimony 121.76 md|52 Te Tellurium 127.60 md|53 I Iodine 126.90 hl|54 Xe Xenon 131.29 ng|55 Cs Caesium 132.91 am|56 Ba Barium 137.33 ae|57 La Lanthanum 138.91 la|58 Ce Cerium 140.12 la|59 Pr Praseodymium 140.91 la|60 Nd Neodymium 144.24 la|61 Pm Promethium (145) la|62 Sm Samarium 150.36 la|63 Eu Europium 151.96 la|64 Gd Gadolinium 157.25 la|65 Tb Terbium 158.93 la|66 Dy Dysprosium 162.50 la|67 Ho Holmium 164.93 la|68 Er Erbium 167.26 la|69 Tm Thulium 168.93 la|70 Yb Ytterbium 173.05 la|71 Lu Lutetium 174.97 la|72 Hf Hafnium 178.49 tm|73 Ta Tantalum 180.95 tm|74 W Tungsten 183.84 tm|75 Re Rhenium 186.21 tm|76 Os Osmium 190.23 tm|77 Ir Iridium 192.22 tm|78 Pt Platinum 195.08 tm|79 Au Gold 196.97 tm|80 Hg Mercury 200.59 tm|81 Tl Thallium 204.38 pt|82 Pb Lead 207.2 pt|83 Bi Bismuth 208.98 pt|84 Po Polonium (209) pt|85 At Astatine (210) hl|86 Rn Radon (222) ng|87 Fr Francium (223) am|88 Ra Radium (226) ae|89 Ac Actinium (227) ac|90 Th Thorium 232.04 ac|91 Pa Protactinium 231.04 ac|92 U Uranium 238.03 ac|93 Np Neptunium (237) ac|94 Pu Plutonium (244) ac|95 Am Americium (243) ac|96 Cm Curium (247) ac|97 Bk Berkelium (247) ac|98 Cf Californium (251) ac|99 Es Einsteinium (252) ac|100 Fm Fermium (257) ac|101 Md Mendelevium (258) ac|102 No Nobelium (259) ac|103 Lr Lawrencium (266) ac|104 Rf Rutherfordium (267) tm|105 Db Dubnium (268) tm|106 Sg Seaborgium (269) tm|107 Bh Bohrium (270) tm|108 Hs Hassium (277) tm|109 Mt Meitnerium (278) un|110 Ds Darmstadtium (281) un|111 Rg Roentgenium (282) un|112 Cn Copernicium (285) un|113 Nh Nihonium (286) un|114 Fl Flerovium (289) un|115 Mc Moscovium (290) un|116 Lv Livermorium (293) un|117 Ts Tennessine (294) un|118 Og Oganesson (294) un`
  .split("|").map(s => { const p = s.split(" "); return { z: +p[0], s: p[1], n: p[2], m: p[3], c: p[4] }; });
/* where each element sits: period (row), group (column); f-block elements go to rows 9 and 10 */
(function(){
  const starts = [1, 3, 11, 19, 37, 55, 87], ends = [2, 10, 18, 36, 54, 86, 118];
  LAB_EL.forEach(e => {
    const per = starts.findIndex((s, i) => e.z >= s && e.z <= ends[i]) + 1, off = e.z - starts[per - 1];
    e.p = per;
    if (per === 1) e.g = e.z === 1 ? 1 : 18;
    else if (per <= 3) e.g = off < 2 ? off + 1 : off + 11;
    else if (per <= 5) e.g = off + 1;
    else if (off < 2) e.g = off + 1;
    else if (off < 17) { e.f = true; e.row = per === 6 ? 9 : 10; e.col = off + 1; }   // La–Lu, Ac–Lr
    else e.g = off - 13;                                                          // Hf / Rf onwards: group 4…18
    e.state = ["H","He","N","O","F","Ne","Cl","Ar","Kr","Xe","Rn"].includes(e.s) ? "Gas" : ["Br","Hg"].includes(e.s) ? "Liquid" : e.z > 103 ? "Unknown (made in labs, lasts seconds)" : "Solid";
    e.block = e.f ? "f" : (e.g <= 2 || e.z === 2) ? "s" : e.g >= 13 ? "p" : "d";
  });
})();
const LAB_EZ = z => LAB_EL[z - 1];
/* what the papers like about an element */
const LAB_NOTE = {
  H: "Lightest element and most abundant in the universe; discovered by Cavendish (1766). Three isotopes: protium, deuterium, tritium (radioactive).",
  He: "Second lightest; fills balloons (non-flammable); with oxygen for deep-sea divers; liquid helium cools MRI magnets. First found in the Sun's spectrum.",
  Li: "Lightest metal (floats on water); in rechargeable lithium-ion batteries.",
  Be: "Very light, strong metal used in aerospace; its dust is toxic.",
  B: "A metalloid; borax and boric acid (antiseptic); boron rods control nuclear reactors.",
  C: "Valency 4; forms the most compounds. Allotropes: diamond (hardest), graphite (conducts), fullerene C₆₀, graphene.",
  N: "78% of air; discovered by Daniel Rutherford (1772). Liquid N₂ boils at −196 °C. Packed in chip bags.",
  O: "Most abundant element in the earth's crust and the human body; discovered by Priestley and Scheele; named by Lavoisier. Ozone (O₃) is an allotrope.",
  F: "Most electronegative and most reactive element; fluoride in toothpaste; excess causes fluorosis.",
  Ne: "Glows red-orange in advertisement signs.",
  Na: "Symbol from Latin 'natrium'. Soft, cut with a knife, kept in kerosene; reacts violently with water.",
  Mg: "Burns with a dazzling white light (flash bulbs, fireworks); at the centre of chlorophyll.",
  Al: "Most abundant metal in the earth's crust; ore bauxite; extracted by electrolysis (Hall–Héroult).",
  Si: "Second most abundant element in the crust; computer chips and solar cells; sand is SiO₂.",
  P: "White phosphorus is kept in water (catches fire in air); red phosphorus is on matchboxes.",
  S: "Vulcanises rubber; in gunpowder; makes sulphuric acid, the king of chemicals.",
  Cl: "Greenish-yellow gas discovered by Scheele; disinfects water; a World War I poison gas.",
  Ar: "Most abundant noble gas in air (~0.93%); filled in electric bulbs.",
  K: "Symbol from Latin 'kalium'. Most reactive common metal; kept in kerosene; potash fertiliser.",
  Ca: "Bones and teeth; limestone, marble, chalk (CaCO₃); quicklime CaO; slaked lime Ca(OH)₂.",
  Ti: "Strong, light, rust-free — aircraft, artificial joints; TiO₂ is a white pigment.",
  Cr: "Hardest metal; chromium plating; with nickel in stainless steel; chromium oxide colours glass green.",
  Mn: "Ore pyrolusite (MnO₂); KMnO₄ (pink) disinfects water.",
  Fe: "Symbol from Latin 'ferrum'. Ores haematite and magnetite; rust is Fe₂O₃·xH₂O; in haemoglobin.",
  Co: "Cobalt-60 treats cancer; cobalt oxide makes glass blue; in vitamin B12.",
  Ni: "Catalyst for hydrogenating oils (vanaspati); in stainless steel, nichrome and German silver.",
  Cu: "Symbol from Latin 'cuprum'. Electric wires; brass (with Zn) and bronze (with Sn); turns green in moist air.",
  Zn: "Galvanising iron; brass; ore zinc blende (ZnS) and calamine.",
  Ga: "Melts in your hand (~30 °C); predicted by Mendeleev as eka-aluminium.",
  Ge: "Semiconductor; predicted by Mendeleev as eka-silicon.",
  As: "A metalloid; arsenic in groundwater causes black foot disease.",
  Br: "The only non-metal that is liquid at room temperature (red-brown).",
  Kr: "Used in flash lamps and high-efficiency lamps.",
  Sr: "Gives fireworks a crimson-red colour.",
  Tc: "First artificially made element (1937).",
  Ag: "Symbol from Latin 'argentum'. Best conductor of electricity; AgNO₃ is election ink; AgI seeds clouds; AgBr in photography.",
  Cd: "Control rods in nuclear reactors; cadmium causes Itai-itai disease.",
  Sn: "Symbol from Latin 'stannum'. Tinning food cans; bronze and solder; ore cassiterite.",
  Sb: "Symbol from Latin 'stibium'. In type metal and matchsticks (antimony trisulphide).",
  I: "Shiny non-metal; sublimes to violet vapour; iodised salt prevents goitre; tincture of iodine.",
  Xe: "Car headlamps and photographic flash; also an anaesthetic.",
  Cs: "Most electropositive stable element; melts near 28 °C; atomic clocks.",
  Ba: "Gives fireworks a green colour; barium meal for X-rays of the gut.",
  W: "Symbol from 'wolfram'. Highest melting point of all metals (~3422 °C) — bulb filaments.",
  Os: "Densest element.",
  Pt: "A noble metal; catalyst in catalytic converters; with gold dissolves only in aqua regia.",
  Au: "Symbol from Latin 'aurum'. Most malleable and ductile metal; 24 carat = pure; dissolves in aqua regia.",
  Hg: "Symbol from Latin 'hydrargyrum'. The only metal liquid at room temperature; thermometers; ore cinnabar; Minamata disease.",
  Pb: "Symbol from Latin 'plumbum'. Storage batteries, solder, radiation shields; ore galena; lead poisoning is plumbism.",
  Bi: "In low-melting alloys (rose metal) and fuses.",
  Po: "Discovered by the Curies; named after Poland.",
  Rn: "Radioactive noble gas.",
  Fr: "Rarest, most unstable alkali metal.",
  Ra: "Discovered by the Curies (1898) in pitchblende; glows in the dark.",
  Th: "India has large reserves in monazite sand (Kerala) — key to its three-stage nuclear programme.",
  U: "Uranium-235 fuels nuclear reactors and the Hiroshima bomb; ore pitchblende.",
  Pu: "Plutonium-239 — the Nagasaki bomb and fast breeder reactors.",
  Es: "Named after Albert Einstein.", Md: "Named after Dmitri Mendeleev.", No: "Named after Alfred Nobel.", Cm: "Named after Marie and Pierre Curie.",
  Nh: "Nihonium — named after Japan (Nihon); confirmed 2016.", Og: "Oganesson — the heaviest known element (118), named after Yuri Oganessian."
};

/* ---------- decks for the quiz games: [prompt, answer, note] ---------- */
const CHEM_DECKS = [
  { id: "sym", ico: "⚡", title: "Symbol Sprint", sub: "Element ↔ symbol, against the clock", lesson: "K4", q: "", make: () => labSymbolDeck(), list: () => labSymPool().map(e => [e.n, e.s]), options: it => labSymOptions(it) },
  { id: "formula", ico: "🧂", title: "Formula Fixer", sub: "Common name → chemical formula", lesson: "K9", q: "Formula of", pairs: [
    ["Baking soda","NaHCO₃"],["Washing soda","Na₂CO₃·10H₂O"],["Bleaching powder","CaOCl₂"],["Plaster of Paris","CaSO₄·½H₂O"],["Gypsum","CaSO₄·2H₂O"],["Common salt","NaCl"],["Caustic soda","NaOH"],["Caustic potash","KOH"],["Quicklime","CaO"],["Slaked lime","Ca(OH)₂"],["Limestone / marble","CaCO₃"],["Blue vitriol","CuSO₄·5H₂O"],["Green vitriol","FeSO₄·7H₂O"],["White vitriol","ZnSO₄·7H₂O"],["Epsom salt","MgSO₄·7H₂O"],["Glauber's salt","Na₂SO₄·10H₂O"],["Laughing gas","N₂O"],["Marsh gas","CH₄"],["Heavy water","D₂O"],["Lunar caustic (election ink)","AgNO₃"],["Sal ammoniac","NH₄Cl"],["Saltpetre","KNO₃"],["Chile saltpetre","NaNO₃"],["Hypo","Na₂S₂O₃·5H₂O"],["Oil of vitriol","H₂SO₄"],["Muriatic acid","HCl"],["Aqua fortis","HNO₃"],["Milk of magnesia","Mg(OH)₂"],["Borax","Na₂B₄O₇·10H₂O"],["Red lead","Pb₃O₄"],["Calomel","Hg₂Cl₂"],["Philosopher's wool","ZnO"],["Hydrogen peroxide","H₂O₂"],["Potassium permanganate","KMnO₄"],["Silver iodide (cloud seeding)","AgI"]
  ] },
  { id: "acid", ico: "🍋", title: "Sour Detective", sub: "Which acid hides in it?", lesson: "K7", q: "Acid in", pairs: [
    ["Vinegar","Acetic acid"],["Lemon","Citric acid"],["Orange","Citric acid"],["Tamarind","Tartaric acid"],["Grapes","Tartaric acid"],["Tomato","Oxalic acid"],["Spinach","Oxalic acid"],["Curd","Lactic acid"],["Sour milk","Lactic acid"],["Apple","Malic acid"],["Ant sting","Formic acid"],["Nettle leaf sting","Formic acid"],["Amla","Ascorbic acid"],["Tea","Tannic acid"],["Stomach (gastric juice)","Hydrochloric acid"],["Urine","Uric acid"],["Soft drinks","Carbonic acid"],["Rancid butter","Butyric acid"]
  ] },
  { id: "ph", ico: "🌡️", title: "Acid or Base?", sub: "Place it on the pH scale", lesson: "K7", q: "", opts: ["Acidic","Neutral","Basic"], pairs: [
    ["Lemon juice","Acidic","pH about 2–2.5"],["Vinegar","Acidic","pH about 2.5–3"],["Gastric juice","Acidic","pH about 1.5–2"],["Soft drink","Acidic","pH about 3"],["Tomato juice","Acidic","pH about 4"],["Black coffee","Acidic","pH about 5"],["Acid rain","Acidic","pH below 5.6"],["Curd","Acidic","pH about 4.5"],["Milk","Acidic","pH about 6.5–6.8 — slightly acidic"],["Pure water","Neutral","pH 7"],["Common salt solution","Neutral","pH 7 — salt of a strong acid and strong base"],["Sugar solution","Neutral","pH 7"],["Human blood","Basic","pH about 7.4 — slightly basic"],["Sea water","Basic","pH about 8"],["Baking soda solution","Basic","pH about 8.3"],["Toothpaste","Basic","pH about 9 — it fights mouth acid"],["Soap solution","Basic","pH about 10"],["Milk of magnesia","Basic","pH about 10"],["Household ammonia","Basic","pH about 11"],["Lime water","Basic","pH about 12"],["Caustic soda solution","Basic","pH about 13–14"]
  ] },
  { id: "ore", ico: "⛏️", title: "Ore Hunter", sub: "Which metal comes from this ore?", lesson: "K10", q: "Metal from", pairs: [
    ["Bauxite","Aluminium"],["Cryolite","Aluminium"],["Haematite","Iron"],["Magnetite","Iron"],["Siderite","Iron"],["Iron pyrites ('fool's gold')","Iron"],["Galena","Lead"],["Cinnabar","Mercury"],["Cassiterite (tinstone)","Tin"],["Zinc blende","Zinc"],["Calamine","Zinc"],["Copper pyrites","Copper"],["Malachite","Copper"],["Argentite","Silver"],["Horn silver","Silver"],["Pitchblende","Uranium"],["Monazite sand","Thorium"],["Pyrolusite","Manganese"],["Chromite","Chromium"],["Magnesite","Magnesium"],["Sylvite","Potassium"],["Rock salt","Sodium"],["Fluorspar","Calcium"],["Ilmenite","Titanium"]
  ] },
  { id: "alloy", ico: "🔩", title: "Alloy Mixer", sub: "What is it made of?", lesson: "K10", q: "Made of", pairs: [
    ["Brass","Cu + Zn"],["Bronze","Cu + Sn"],["German silver","Cu + Zn + Ni"],["Solder","Pb + Sn"],["Stainless steel","Fe + Cr + Ni"],["Duralumin","Al + Cu + Mg + Mn"],["Magnalium","Al + Mg"],["Nichrome","Ni + Cr"],["Alnico","Al + Ni + Co"],["Invar","Fe + Ni"],["Gun metal","Cu + Sn + Zn"],["Type metal","Pb + Sb + Sn"],["Constantan","Cu + Ni"],["Amalgam","Hg + another metal"],["Electrum","Au + Ag"]
  ] },
  { id: "who", ico: "🧑‍🔬", title: "Who Found It?", sub: "Discoveries and their discoverers", lesson: "K18", q: "", pairs: [
    ["Electron","J. J. Thomson"],["Atomic nucleus (gold foil)","Ernest Rutherford"],["Neutron","James Chadwick"],["Canal rays (proton)","E. Goldstein"],["Electron shells (orbits)","Niels Bohr"],["Periodic table (1869)","Dmitri Mendeleev"],["Modern periodic law","Henry Moseley"],["Law of octaves","John Newlands"],["Triads","J. W. Döbereiner"],["Atomic theory (1808)","John Dalton"],["Radioactivity","Henri Becquerel"],["Radium and polonium","Marie & Pierre Curie"],["Hydrogen","Henry Cavendish"],["Oxygen","Joseph Priestley"],["Nitrogen","Daniel Rutherford"],["Chlorine","Carl Scheele"],["Noble gases","William Ramsay"],["Penicillin","Alexander Fleming"],["Dynamite","Alfred Nobel"],["Urea made in a lab","Friedrich Wöhler"],["Nylon","Wallace Carothers"],["Bakelite","Leo Baekeland"],["Vulcanised rubber","Charles Goodyear"],["Ammonia process","Fritz Haber"],["pH scale","S. P. L. Sørensen"],["Ring structure of benzene","August Kekulé"],["Conservation of mass","Antoine Lavoisier"],["Nuclear fission","Otto Hahn"],["Deuterium","Harold Urey"],["Portland cement","Joseph Aspdin"]
  ] },
  { id: "gas", ico: "🎈", title: "Gas Station", sub: "Name the gas from its job or sign", lesson: "K17", q: "", pairs: [
    ["Filled in electric bulbs","Argon"],["Glows in advertisement signs","Neon"],["Lifts balloons, safely","Helium"],["Car headlamps, camera flash","Xenon"],["The radioactive noble gas","Radon"],["Ripens fruit","Ethylene"],["Welding flame with oxygen","Acetylene"],["Main gas in LPG","Butane"],["Main gas in CNG and biogas","Methane"],["Packed in chip bags","Nitrogen"],["Turns lime water milky","Carbon dioxide"],["Smells of rotten eggs","Hydrogen sulphide"],["Bhopal tragedy, 1984","Methyl isocyanate"],["Laughing gas","Nitrous oxide"],["Added to LPG for its smell","Ethyl mercaptan"],["Thins the ozone layer","CFCs"],["Greenish-yellow, disinfects water","Chlorine"],["Burns with a pop","Hydrogen"],["Reddish-brown gas","Nitrogen dioxide"],["Poisons by binding haemoglobin","Carbon monoxide"]
  ] },
  { id: "med", ico: "💊", title: "Pharmacy Rush", sub: "Which class of medicine?", lesson: "K13", q: "", pairs: [
    ["Relieves pain","Analgesic"],["Brings down fever","Antipyretic"],["Kills bacteria","Antibiotic"],["Applied on wounds and skin","Antiseptic"],["Cleans floors and toilets","Disinfectant"],["Calms stress and anxiety","Tranquilliser"],["Neutralises stomach acid","Antacid"],["Controls allergy","Antihistamine"],["Treats malaria","Antimalarial"],["Causes loss of sensation","Anaesthetic"],["Penicillin","Antibiotic"],["Streptomycin","Antibiotic"],["Dettol","Antiseptic"],["Tincture of iodine","Antiseptic"],["1% phenol","Disinfectant"],["Milk of magnesia","Antacid"],["Quinine","Antimalarial"],["Cetirizine","Antihistamine"],["Diazepam","Tranquilliser"],["Chloroform","Anaesthetic"]
  ] }
];
/* names and symbols of the elements an exam can ask (1–56 and the famous heavy ones) */
function labSymPool(){ return LAB_EL.filter(e => e.z <= 56 || [74,76,78,79,80,82,83,86,88,90,92,94].includes(e.z)); }
function labSymbolDeck(){
  return labSymPool().map(e => Math.random() < .5 ? { p: `Symbol of ${e.n}`, a: e.s, pool: "sym", e } : { p: `Element with symbol ${e.s}`, a: e.n, pool: "name", e });
}
/* wrong options for Symbol Sprint: symbols (or names) that look alike — same first letter */
function labSymOptions(it){
  const all = LAB_EL.filter(e => e.z <= 94), key = it.pool === "sym" ? "s" : "n";
  const near = all.filter(e => e[key] !== it.a && (e.s[0] === it.e.s[0] || e.n[0] === it.e.n[0])).map(e => e[key]);
  let pool = shuffle(near).slice(0, 3);
  if (pool.length < 3) pool = pool.concat(shuffle(all.map(e => e[key]).filter(x => x !== it.a && !pool.includes(x))).slice(0, 3 - pool.length));
  return shuffle([it.a].concat(pool));
}
const LAB_CONF = {
  title: "Chemistry Lab", blurb: "Quick games for the facts that win marks. Every right answer earns XP.",
  ranks: [[0,"Lab assistant","🧪"],[60,"Junior chemist","⚗️"],[200,"Chemist","🔬"],[450,"Senior chemist","🧑‍🔬"],[900,"Nobel nominee","🏅"]],
  decks: CHEM_DECKS,
  match: { deck: "formula", title: "Pair each name with its formula", sub: "Flip cards — pair each common name with its formula" },
  specials: [{ id: "table", ico: "🧪", wide: true, title: "Periodic table explorer",
    sub: "All 118 elements — tap one for its card and the facts papers ask. Play <b>Find it!</b>: spot 10 elements on the table as fast as you can.",
    best: L => L.find ? "Best Find it! time: " + L.find + " s" : "Find it! not played yet", start: () => { LAB.find = null; }, open: () => labTable() }]
};

/* ---------- periodic table ---------- */
function labTable(){
  labStop();
  const cells = [];
  for (let per = 1; per <= 7; per++) for (let g = 1; g <= 18; g++) {
    const e = LAB_EL.find(x => !x.f && x.p === per && x.g === g);
    if (e) cells.push(labCell(e));
    else if (g === 3 && per >= 6) cells.push(`<span class="fnote">${per === 6 ? "57–71" : "89–103"}</span>`);
    else cells.push(`<span class="gap"></span>`);
  }
  cells.push(`<span class="frow"></span>`);
  [9, 10].forEach(row => { cells.push(`<span class="gap"></span><span class="gap"></span>`); LAB_EL.filter(e => e.row === row).forEach(e => cells.push(labCell(e))); cells.push(`<span class="gap"></span>`); });
  const F = LAB.find;
  const head = F ? `<div class="lab-hud"><div><span class="eyebrow">Find it! · ${F.i + 1} of 10</span><h2 style="margin:4px 0 0">Tap: <span class="lab-pop">${esc(LAB_EZ(F.list[F.i]).n)}</span></h2></div><div class="sc" id="labclock">0 s</div></div>`
    : `<div class="row between"><div><span class="eyebrow">118 elements · 7 periods · 18 groups</span><h1>Periodic table</h1></div><button class="btn pri" type="button" id="labfind">▶ Play Find it!</button></div>
       <div class="pt-legend" role="group" aria-label="Highlight a family">${Object.keys(LAB_CATS).map(k => `<button type="button" data-cat="${k}" style="--c:${LAB_CATS[k][1]}" aria-pressed="${LAB.cat === k}">${LAB_CATS[k][0]}</button>`).join("")}</div>`;
  $("#app").innerHTML = `<section class="view stack">${labBack()}${head}
    <div class="pt-wrap"><div class="pt" role="grid" aria-label="Periodic table">${cells.join("")}</div></div>
    <p class="muted" style="font-size:13px;margin:0">Scroll sideways on a phone. ${F ? "Wrong taps add 3 seconds." : "Tap any element for its card."}</p>
    <div id="elcard"></div></section>`;
  labBindHome();
  $("#app").querySelectorAll("[data-z]").forEach(b => b.onclick = () => labTap(+b.dataset.z, b));
  $("#app").querySelectorAll("[data-cat]").forEach(b => b.onclick = () => { LAB.cat = LAB.cat === b.dataset.cat ? null : b.dataset.cat; labTable(); });
  const fb = $("#labfind"); if (fb) fb.onclick = labFindStart;
  if (F) { F.t0 = F.t0 || Date.now(); LAB.timer = setInterval(() => { const c = $("#labclock"); if (c) c.textContent = labFindSecs() + " s"; }, 250); }
  else if (LAB.sel) labCard(LAB.sel);
}
function labCell(e){
  const dim = !LAB.find && LAB.cat && e.c !== LAB.cat;
  return `<button type="button" class="el${dim ? " dim" : ""}${!LAB.find && LAB.sel === e.z ? " sel" : ""}" data-z="${e.z}" style="--c:${LAB_CATS[e.c][1]}" aria-label="${LAB.find ? "Element " + e.z : esc(e.n)}"><small>${e.z}</small><b>${e.s}</b></button>`;
}
function labCard(z){
  const e = LAB_EZ(z), box = $("#elcard"); if (!box) return;
  box.innerHTML = `<div class="block el-card lab-pop"><div class="el-big" style="--c:${LAB_CATS[e.c][1]}"><small>${e.z}</small><b>${e.s}</b><small>${e.m}</small></div>
    <div><h2 style="margin:0">${esc(e.n)}</h2><dl>
      <dt>Family</dt><dd>${LAB_CATS[e.c][0]}</dd>
      <dt>Position</dt><dd>${e.f ? (e.row === 9 ? "Lanthanides" : "Actinides") + ", period " + e.p : "Group " + e.g + ", period " + e.p} · ${e.block}-block</dd>
      <dt>At room temp.</dt><dd>${e.state}</dd>
      <dt>Atomic mass</dt><dd>${e.m} u${e.m.startsWith("(") ? " (most stable isotope)" : ""}</dd>
      ${e.z <= 36 ? `<dt>Shells</dt><dd>${labShells(e.z)}</dd>` : ""}
    </dl>${LAB_NOTE[e.s] ? `<p style="margin:10px 0 0"><b>Exam fact:</b> ${LAB_NOTE[e.s]}</p>` : ""}</div></div>`;
}
/* electrons per shell for Z ≤ 36 (the 2, 8, 8, 2 pattern papers ask) */
function labShells(z){
  const caps = [2, 8, 8, 18], out = [];
  if (z <= 20) { let left = z; for (const c of caps.slice(0, 3)) { if (left <= 0) break; out.push(Math.min(c, left)); left -= c; } if (left > 0) out.push(left); return out.join(", "); }
  const map = { 21:"2, 8, 9, 2", 22:"2, 8, 10, 2", 23:"2, 8, 11, 2", 24:"2, 8, 13, 1", 25:"2, 8, 13, 2", 26:"2, 8, 14, 2", 27:"2, 8, 15, 2", 28:"2, 8, 16, 2", 29:"2, 8, 18, 1", 30:"2, 8, 18, 2" };
  return map[z] || ("2, 8, 18, " + (z - 28));
}
function labTap(z, btn){
  const F = LAB.find;
  if (!F) { LAB.sel = z; $("#app").querySelectorAll(".pt .el.sel").forEach(x => x.classList.remove("sel")); btn.classList.add("sel"); labCard(z); const c = $("#elcard"); if (c && window.innerWidth < 900) c.scrollIntoView({ behavior: "smooth", block: "nearest" }); return; }
  const want = F.list[F.i];
  if (z === want) {
    btn.classList.add("ok"); F.i++;
    if (F.i >= F.list.length) { labStop(); return setTimeout(labFindDone, 350); }
    setTimeout(labTable, 280);
  } else {
    F.pen += 3; btn.classList.remove("no"); void btn.offsetWidth; btn.classList.add("no");
    const right = $(`#app [data-z="${want}"]`); if (right) { right.classList.add("show"); setTimeout(() => right.classList.remove("show"), 700); }
  }
}
function labFindSecs(){ const F = LAB.find; return F ? Math.round((Date.now() - F.t0) / 1000) + F.pen : 0; }
function labFindStart(){
  // ten elements an exam might name — from the first 56 and the famous heavy ones
  const pool = LAB_EL.filter(e => e.z <= 56 || [74,78,79,80,82,86,88,92].includes(e.z)).map(e => e.z);
  LAB.find = { list: shuffle(pool).slice(0, 10), i: 0, pen: 0, t0: Date.now() };
  LAB.cat = null; LAB.sel = null; labTable(); window.scrollTo(0, 0);
}
function labFindDone(){
  const L = labS(), secs = labFindSecs(), best = !L.find || secs < L.find;
  if (best) L.find = secs; L.xp = (L.xp || 0) + 10; L.plays = (L.plays || 0) + 1; save();
  LAB.find = null;
  $("#app").innerHTML = `<section class="view stack lab-play">${labBack()}<div class="block lab-res lab-pop"><span class="eyebrow">Find it!</span><div class="big">${secs} s</div>
    <p>${best ? "🎉 New best time!" : "Best time: " + L.find + " s"} · +10 XP</p><div class="row" style="justify-content:center"><button class="btn pri" type="button" id="again">Play again</button><button class="btn" type="button" id="totable">Explore the table</button></div></div></section>`;
  labBindHome();
  $("#again").onclick = labFindStart; $("#totable").onclick = () => { LAB.view = "table"; labTable(); };
}
