/* ============================================================
   Chemistry Lab — the "lab" tab of study-chemistry.html (put in the page by tools/chemistry/build.js).
   Learn by playing: an interactive periodic table, "Find it!" on the table, a memory match of
   common names and formulas, and 60-second quiz games built from small decks of pairs.
   Runs after the engine has booted, so it uses the engine's helpers ($, esc, shuffle, S, save).
   Scores live in the app's own saved state (S.lab), so they sync with the rest of your progress.
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
const LAB_DECKS = [
  { id: "sym", ico: "⚡", title: "Symbol Sprint", sub: "Element ↔ symbol, against the clock", lesson: "K4", q: "", make: () => labSymbolDeck() },
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
function labSymbolDeck(){
  const keep = LAB_EL.filter(e => e.z <= 56 || [74,76,78,79,80,82,83,86,88,90,92,94].includes(e.z));
  return keep.map(e => Math.random() < .5 ? { p: `Symbol of ${e.n}`, a: e.s, pool: "sym", e } : { p: `Element with symbol ${e.s}`, a: e.n, pool: "name", e });
}
const LAB_RANKS = [[0,"Lab assistant","🧪"],[60,"Junior chemist","⚗️"],[200,"Chemist","🔬"],[450,"Senior chemist","🧑‍🔬"],[900,"Nobel nominee","🏅"]];

/* ---------- state ---------- */
function labS(){ S.lab = S.lab || { best:{}, xp:0, plays:0, find:null, match:null }; S.lab.best = S.lab.best || {}; return S.lab; }
function labRank(xp){ let r = LAB_RANKS[0]; LAB_RANKS.forEach(x => { if (xp >= x[0]) r = x; }); const nx = LAB_RANKS.find(x => x[0] > xp); return { r, nx }; }
let LAB = { view: "home", sel: null, cat: null, timer: null };
function leaveLab(){ labStop(); LAB.view = "home"; }
function labStop(){ if (LAB.timer) { clearInterval(LAB.timer); LAB.timer = null; } }

function labStyle(){
  if (document.getElementById("labcss")) return;
  const st = document.createElement("style"); st.id = "labcss";
  st.textContent = `
.lab-hero{display:flex;gap:14px;align-items:center;justify-content:space-between;flex-wrap:wrap}
.lab-rank{display:flex;align-items:center;gap:10px;background:var(--accent-bg);border-radius:14px;padding:10px 14px}
.lab-rank b{display:block;font-size:15px}.lab-rank small{color:var(--ink2);font-size:12px}
.lab-rank .ic{font-size:26px}
.lab-xpbar{height:6px;border-radius:9px;background:var(--rule);margin-top:6px;overflow:hidden;min-width:140px}.lab-xpbar i{display:block;height:100%;background:var(--accent)}
.lab-games{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:10px}
.lab-g{display:flex;flex-direction:column;gap:6px;text-align:left;background:var(--sheet);border:1px solid var(--rule);border-radius:14px;padding:14px;cursor:pointer;font:inherit;color:var(--ink);transition:transform .12s ease,border-color .12s ease}
.lab-g:hover{transform:translateY(-2px);border-color:var(--blue)}
.lab-g .t{display:flex;align-items:center;gap:10px}.lab-g .t span{font-size:26px}.lab-g b{font-size:16px}
.lab-g small{color:var(--ink2)}.lab-g .best{font-family:var(--f-num);font-size:12px;color:var(--accent)}
.lab-g.wide{grid-column:1/-1;background:linear-gradient(135deg,var(--blue-bg),var(--sheet))}
.pt-wrap{overflow-x:auto;padding-bottom:6px;-webkit-overflow-scrolling:touch}
.pt{display:grid;grid-template-columns:repeat(18,minmax(34px,1fr));gap:3px;min-width:640px}
.pt .el{position:relative;aspect-ratio:1/1.05;border-radius:6px;border:1px solid transparent;background:color-mix(in srgb,var(--c) 26%,var(--sheet));color:var(--ink);font:inherit;cursor:pointer;padding:2px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.05;transition:transform .1s ease,box-shadow .1s ease}
.pt .el:hover,.pt .el:focus-visible{transform:scale(1.12);z-index:2;box-shadow:0 4px 14px rgba(0,0,0,.18);outline:none}
.pt .el small{font-size:8.5px;opacity:.75;font-family:var(--f-num)}
.pt .el b{font-size:14px}
.pt .el.dim{opacity:.18}
.pt .el.sel{border-color:var(--ink);box-shadow:0 0 0 2px var(--ink)}
.pt .el.ok{background:var(--good);color:#fff}.pt .el.no{animation:labshake .35s}.pt .el.show{box-shadow:0 0 0 3px var(--bad)}
.pt .gap{grid-column:span 1}
.pt .fnote{font-size:9px;display:flex;align-items:center;justify-content:center;color:var(--ink2);border:1px dashed var(--rule);border-radius:6px}
.pt .frow{height:8px;grid-column:1/-1}
@keyframes labshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
.pt-legend{display:flex;flex-wrap:wrap;gap:6px}
.pt-legend button{border:1px solid var(--rule);background:color-mix(in srgb,var(--c) 22%,var(--sheet));color:var(--ink);border-radius:99px;padding:4px 10px;font:inherit;font-size:12.5px;cursor:pointer}
.pt-legend button[aria-pressed="true"]{border-color:var(--ink);font-weight:700}
.el-card{display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start}
.el-big{width:92px;height:100px;border-radius:12px;background:color-mix(in srgb,var(--c) 34%,var(--sheet));display:flex;flex-direction:column;align-items:center;justify-content:center}
.el-big b{font-size:36px;font-family:var(--f-display)}.el-big small{font-family:var(--f-num);font-size:12px}
.el-card dl{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;margin:6px 0 0;font-size:14px}.el-card dt{color:var(--ink2)}.el-card dd{margin:0}
.lab-play{max-width:640px;margin:0 auto;width:100%}
.lab-hud{display:flex;align-items:center;gap:12px;justify-content:space-between}
.lab-hud .sc{font-family:var(--f-num);font-size:22px;font-weight:700}
.lab-combo{font-weight:700;color:var(--accent);min-height:22px}
.lab-time{height:8px;border-radius:9px;background:var(--rule);overflow:hidden}.lab-time i{display:block;height:100%;background:var(--blue);transition:width 1s linear}
.lab-time.low i{background:var(--bad)}
.lab-q{font-family:var(--f-display);font-size:clamp(22px,5vw,30px);text-align:center;padding:18px 8px 6px;min-height:84px;display:flex;align-items:center;justify-content:center}
.lab-opts{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.lab-opts.three{grid-template-columns:1fr 1fr 1fr}
.lab-opts button{min-height:64px;border-radius:14px;border:1px solid var(--rule);background:var(--sheet);color:var(--ink);font:inherit;font-size:17px;font-weight:600;cursor:pointer;padding:8px;transition:transform .08s ease}
.lab-opts button:active{transform:scale(.97)}
.lab-opts button.ok{background:var(--good);border-color:var(--good);color:#fff}
.lab-opts button.no{background:var(--bad);border-color:var(--bad);color:#fff}
.lab-flash{text-align:center;min-height:22px;font-size:14px;color:var(--ink2)}
.lab-res{text-align:center}.lab-res .big{font-size:56px;font-family:var(--f-display);line-height:1}
.lab-miss{display:grid;gap:6px}.lab-miss div{display:flex;justify-content:space-between;gap:10px;border-bottom:1px dashed var(--rule);padding:6px 0;font-size:14px}
.lab-miss b{color:var(--good)}
.mm{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.mm button{min-height:78px;border-radius:12px;border:1px solid var(--rule);background:var(--blue);color:var(--on-blue);font:inherit;font-weight:600;cursor:pointer;padding:6px;font-size:14px;transition:transform .25s ease}
.mm button.up{background:var(--sheet);color:var(--ink)}
.mm button.done{background:var(--good-bg);color:var(--ink);border-color:var(--good);cursor:default}
.lab-pairs{display:grid;gap:4px}.lab-pairs div{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:6px 0;border-bottom:1px dashed var(--rule);font-size:14px}
.lab-pop{animation:labpop .35s ease}
@keyframes labpop{0%{transform:scale(.8);opacity:.4}100%{transform:scale(1);opacity:1}}
@media (max-width:520px){.mm{grid-template-columns:repeat(3,1fr)}.lab-opts button{font-size:15.5px;min-height:58px}}
@media (prefers-reduced-motion:reduce){.lab-g,.pt .el,.lab-opts button,.mm button{transition:none}.lab-pop,.pt .el.no{animation:none}}
`;
  document.head.appendChild(st);
}

/* ---------- home ---------- */
function renderLab(){
  labStyle(); labStop();
  const L = labS();
  if (LAB.view === "table") return labTable();
  const { r, nx } = labRank(L.xp || 0);
  const pct = nx ? Math.round(((L.xp || 0) - r[0]) * 100 / (nx[0] - r[0])) : 100;
  const card = d => `<button type="button" class="lab-g" data-lab-play="${d.id}"><span class="t"><span aria-hidden="true">${d.ico}</span><b>${esc(d.title)}</b></span><small>${esc(d.sub)}</small><span class="best">${L.best[d.id] ? "Best: " + L.best[d.id] : "Not played yet"}</span></button>`;
  $("#app").innerHTML = `<section class="view stack">
    <div class="lab-hero"><div><span class="eyebrow">Learn by playing</span><h1>Chemistry Lab</h1><p class="muted" style="margin:0">Quick games for the facts that win marks. Every right answer earns XP.</p></div>
      <div class="lab-rank"><span class="ic" aria-hidden="true">${r[2]}</span><div><b>${r[1]}</b><small>${L.xp || 0} XP${nx ? ` · ${nx[0] - (L.xp || 0)} to ${nx[1]}` : " · top rank!"}</small><div class="lab-xpbar"><i style="width:${pct}%"></i></div></div></div></div>
    <div class="lab-games">
      <button type="button" class="lab-g wide" data-lab-go="table"><span class="t"><span aria-hidden="true">🧪</span><b>Periodic table explorer</b></span><small>All 118 elements — tap one for its card and the facts papers ask. Play <b>Find it!</b>: spot 10 elements on the table as fast as you can.</small><span class="best">${L.find ? "Best Find it! time: " + L.find + " s" : "Find it! not played yet"}</span></button>
      ${LAB_DECKS.map(card).join("")}
      <button type="button" class="lab-g" data-lab-go="match"><span class="t"><span aria-hidden="true">🃏</span><b>Memory Match</b></span><small>Flip cards — pair each common name with its formula</small><span class="best">${L.match ? "Best: " + L.match + " moves" : "Not played yet"}</span></button>
    </div>
    <div class="block"><h3>How to use the Lab</h3><p class="muted" style="margin:0">Read a lesson first, then play its game until you can answer in about three seconds — that is the speed the exam needs. Each game lasts 60 seconds: right answers in a row build a combo for bonus points. Tap <b>See all pairs</b> on a game to revise its list.</p></div>
  </section>`;
  $("#app").querySelectorAll("[data-lab-play]").forEach(b => b.onclick = () => labIntro(b.dataset.labPlay));
  $("#app").querySelectorAll("[data-lab-go]").forEach(b => b.onclick = () => { if (b.dataset.labGo === "table") { LAB.view = "table"; LAB.find = null; labTable(); } else labMatch(); });
}
const labBack = () => `<div class="lhead"><button class="back" type="button" data-lab-home>‹ Lab</button></div>`;
function labBindHome(){ $("#app").querySelectorAll("[data-lab-home]").forEach(b => b.onclick = () => { labStop(); LAB.view = "home"; renderLab(); window.scrollTo(0,0); }); }

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

/* ---------- quiz games (60 seconds) ---------- */
function labDeck(id){
  const d = LAB_DECKS.find(x => x.id === id);
  const items = d.make ? d.make() : d.pairs.map(p => ({ p: d.q ? `${d.q} ${p[0]}` : p[0], a: p[1], note: p[2] || "", raw: p[0] }));
  return { d, items };
}
function labIntro(id){
  const { d } = labDeck(id), L = labS();
  const list = d.make ? LAB_EL.filter(e => e.z <= 56 || [74,76,78,79,80,82,83,86,88,90,92,94].includes(e.z)).map(e => [e.n, e.s]) : d.pairs;
  $("#app").innerHTML = `<section class="view stack lab-play">${labBack()}
    <div class="block stack lab-pop" style="text-align:center"><div style="font-size:46px" aria-hidden="true">${d.ico}</div><h1 style="margin:0">${esc(d.title)}</h1><p class="muted" style="margin:0">${esc(d.sub)} · 60 seconds · combos for answers in a row</p>
      <p style="margin:0">${L.best[d.id] ? "Your best: <b>" + L.best[d.id] + "</b>" : "First go — no pressure."}</p>
      <div class="row" style="justify-content:center"><button class="btn pri" type="button" id="labgo">▶ Start</button><button class="btn" type="button" id="labpairs">See all pairs</button>${d.lesson ? `<button class="btn ghost" type="button" id="lablesson">Read the lesson</button>` : ""}</div></div>
    <div id="labpairlist"></div></section>`;
  labBindHome();
  $("#labgo").onclick = () => labRun(id);
  $("#labpairs").onclick = () => { $("#labpairlist").innerHTML = `<div class="block"><h3>${list.length} pairs to know</h3><div class="lab-pairs">${list.map(p => `<div><span>${esc(p[0])}</span><b>${esc(p[1])}</b></div>`).join("")}</div></div>`; };
  const lb = $("#lablesson"); if (lb) lb.onclick = () => openLesson(d.lesson, "learn");
}
let LG = null;
function labRun(id){
  labStop();
  const { d, items } = labDeck(id);
  LG = { d, items: shuffle(items), i: 0, score: 0, right: 0, tried: 0, combo: 0, maxc: 0, left: 60, miss: [], lock: false };
  $("#app").innerHTML = `<section class="view stack lab-play">
    <div class="lab-hud"><button class="back" type="button" id="labquit">✕ Stop</button><span class="lab-combo" id="labcombo"></span><span class="sc" id="labscore">0</span></div>
    <div class="lab-time" id="labtime"><i style="width:100%"></i></div>
    <div class="lab-q" id="labq" aria-live="polite"></div>
    <div class="lab-opts" id="labopts"></div>
    <div class="lab-flash" id="labflash"></div></section>`;
  $("#labquit").onclick = () => { labStop(); labOver(); };
  labNext();
  LAB.timer = setInterval(() => {
    LG.left--; const t = $("#labtime"); if (!t) { labStop(); return; }
    t.firstElementChild.style.width = (LG.left / 60 * 100) + "%"; t.classList.toggle("low", LG.left <= 10);
    if (LG.left <= 0) { labStop(); labOver(); }
  }, 1000);
}
function labOptions(it){
  const d = LG.d;
  if (d.opts) return d.opts.slice();
  let pool;
  if (it.pool === "sym" || it.pool === "name") {
    const all = LAB_EL.filter(e => e.z <= 94), key = it.pool === "sym" ? "s" : "n";
    const near = all.filter(e => e[key] !== it.a && (e.s[0] === it.e.s[0] || e.n[0] === it.e.n[0])).map(e => e[key]);
    pool = shuffle(near).slice(0, 3);
    if (pool.length < 3) pool = pool.concat(shuffle(all.map(e => e[key]).filter(x => x !== it.a && !pool.includes(x))).slice(0, 3 - pool.length));
  } else {
    const answers = [...new Set(LG.items.map(x => x.a))].filter(a => a !== it.a);
    pool = shuffle(answers).slice(0, 3);
  }
  return shuffle([it.a].concat(pool));
}
function labNext(){
  if (LG.i >= LG.items.length) { LG.items = shuffle(LG.items); LG.i = 0; }
  const it = LG.items[LG.i], opts = labOptions(it);
  LG.cur = it; LG.lock = false;
  const q = $("#labq"); q.innerHTML = `<span class="lab-pop">${esc(it.p)}</span>`;
  const box = $("#labopts"); box.className = "lab-opts" + (opts.length === 3 ? " three" : "");
  box.innerHTML = opts.map(o => `<button type="button" data-o="${esc(o)}">${esc(o)}</button>`).join("");
  box.querySelectorAll("button").forEach(b => b.onclick = () => labPick(b));
}
function labPick(b){
  if (LG.lock) return; LG.lock = true;
  const it = LG.cur, ok = b.dataset.o === it.a;
  LG.tried++;
  if (ok) {
    LG.right++; LG.combo++; LG.maxc = Math.max(LG.maxc, LG.combo);
    const gain = 10 + Math.min(LG.combo - 1, 5) * 2;
    LG.score += gain; b.classList.add("ok");
    $("#labflash").textContent = it.note ? it.note : "+" + gain;
  } else {
    LG.combo = 0; b.classList.add("no");
    $("#labopts").querySelectorAll("button").forEach(x => { if (x.dataset.o === it.a) x.classList.add("ok"); });
    LG.miss.push(it); $("#labflash").textContent = (it.note ? it.note + " · " : "") + "Answer: " + it.a;
  }
  $("#labscore").textContent = LG.score;
  $("#labcombo").textContent = LG.combo >= 2 ? "🔥 ×" + LG.combo : "";
  LG.i++;
  setTimeout(() => { if (LAB.timer && $("#labopts")) labNext(); }, ok ? 450 : 1200);
}
function labOver(){
  const L = labS(), id = LG.d.id, best = !L.best[id] || LG.score > L.best[id];
  if (best && LG.score > 0) L.best[id] = LG.score;
  L.xp = (L.xp || 0) + LG.right; L.plays = (L.plays || 0) + 1; save();
  const acc = LG.tried ? Math.round(LG.right * 100 / LG.tried) : 0, seen = new Set();
  const miss = LG.miss.filter(m => { if (seen.has(m.p)) return false; seen.add(m.p); return true; });
  const { r } = labRank(L.xp);
  $("#app").innerHTML = `<section class="view stack lab-play">${labBack()}
    <div class="block lab-res lab-pop"><span class="eyebrow">${esc(LG.d.title)}</span><div class="big">${LG.score}</div>
      <p>${best && LG.score > 0 ? "🎉 New best!" : "Best: " + (L.best[id] || 0)} · ${LG.right}/${LG.tried} right (${acc}%) · longest combo ${LG.maxc} · +${LG.right} XP</p>
      <p class="muted" style="margin:0">${r[2]} ${r[1]} · ${L.xp} XP</p>
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn pri" type="button" id="again">Play again</button><button class="btn" type="button" data-lab-home>More games</button></div></div>
    ${miss.length ? `<div class="block"><h3>Fix these ${miss.length}</h3><div class="lab-miss">${miss.map(m => `<div><span>${esc(m.p)}</span><b>${esc(m.a)}</b></div>`).join("")}</div></div>` : (LG.tried ? `<div class="block"><p style="margin:0">💯 No mistakes — try to beat your score.</p></div>` : "")}
  </section>`;
  labBindHome();
  $("#again").onclick = () => labRun(id);
}

/* ---------- memory match ---------- */
function labMatch(){
  labStop();
  const pairs = shuffle(LAB_DECKS.find(d => d.id === "formula").pairs).slice(0, 6);
  const cards = shuffle(pairs.flatMap((p, i) => [{ k: i, t: p[0] }, { k: i, t: p[1] }]));
  const M = { cards, up: [], done: new Set(), moves: 0, t0: Date.now() };
  const draw = () => {
    $("#app").innerHTML = `<section class="view stack lab-play">${labBack()}
      <div class="lab-hud"><div><span class="eyebrow">Memory Match</span><h2 style="margin:4px 0 0">Pair each name with its formula</h2></div><span class="sc">${M.moves} moves</span></div>
      <div class="mm">${M.cards.map((c, i) => `<button type="button" data-i="${i}" class="${M.done.has(c.k) ? "done" : M.up.includes(i) ? "up" : ""}" aria-label="${M.done.has(c.k) || M.up.includes(i) ? esc(c.t) : "Hidden card " + (i + 1)}">${M.done.has(c.k) || M.up.includes(i) ? esc(c.t) : "?"}</button>`).join("")}</div></section>`;
    labBindHome();
    $("#app").querySelectorAll(".mm button").forEach(b => b.onclick = () => flip(+b.dataset.i));
  };
  const flip = i => {
    if (M.up.length === 2 || M.up.includes(i) || M.done.has(M.cards[i].k)) return;
    M.up.push(i); draw();
    if (M.up.length === 2) {
      M.moves++;
      const [a, b] = M.up;
      if (M.cards[a].k === M.cards[b].k) { M.done.add(M.cards[a].k); M.up = []; setTimeout(() => { draw(); if (M.done.size === 6) done(); }, 250); }
      else setTimeout(() => { M.up = []; draw(); }, 900);
    }
  };
  const done = () => {
    const L = labS(), best = !L.match || M.moves < L.match; if (best) L.match = M.moves;
    L.xp = (L.xp || 0) + 12; L.plays = (L.plays || 0) + 1; save();
    $("#app").innerHTML = `<section class="view stack lab-play">${labBack()}<div class="block lab-res lab-pop"><span class="eyebrow">Memory Match</span><div class="big">${M.moves}</div>
      <p>moves · ${Math.round((Date.now() - M.t0) / 1000)} s · ${best ? "🎉 New best!" : "Best: " + L.match + " moves"} · +12 XP</p>
      <div class="lab-pairs" style="text-align:left">${pairs.map(p => `<div><span>${esc(p[0])}</span><b>${esc(p[1])}</b></div>`).join("")}</div>
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn pri" type="button" id="again">New cards</button><button class="btn" type="button" data-lab-home>More games</button></div></div></section>`;
    labBindHome(); $("#again").onclick = labMatch;
  };
  draw(); window.scrollTo(0, 0);
}
