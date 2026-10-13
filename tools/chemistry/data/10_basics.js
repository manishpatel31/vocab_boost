/* Part 1 · Basics of chemistry — K1 to K5: matter, mixtures, the atom, the periodic table, bonding and the mole. */
LESSONS.push(
{id:"K1", g:"chem", heat:2, title:"Matter and its states", hi:"पदार्थ और उसकी अवस्थाएँ", blocks:[
  {k:"hot", h:"Easy marks that come round every year: <b>sublimation examples</b> (camphor, naphthalene, dry ice), <b>which state diffuses fastest</b>, <b>latent heat</b>, the <b>fourth and fifth states</b> (plasma, Bose–Einstein condensate) and <b>evaporation causes cooling</b>."},
  {k:"story", h:"<p>Everything around you — the water you drink, the air you breathe, the chair you sit on — is <b>matter</b>: anything that has mass and takes up space. Matter is made of tiny particles that are always moving and that pull on each other.</p><p>Picture a crowded <b>school assembly</b>. When everyone stands in neat rows holding hands, that is a <b>solid</b>: fixed shape, particles only shiver in place. When the bell rings and children walk around the ground but stay close, that is a <b>liquid</b>: it flows and takes the shape of its container but keeps its volume. When school is over and everyone runs off in every direction, that is a <b>gas</b>: no fixed shape or volume, and particles far apart.</p><p>Heat gives particles energy to break free (melting, boiling); taking heat away lets them settle down again (condensing, freezing). Some solids skip the liquid stage and turn straight into gas — that is <b>sublimation</b>, which is why mothballs slowly vanish in your cupboard.</p>", key:"Solid → liquid → gas: particles get more energy, more space and weaker pull between them."},
  {k:"table", title:"Three common states compared", head:["Property","Solid","Liquid","Gas"], rows:[
    ["Shape","Fixed","Takes the container's shape","No fixed shape"],
    ["Volume","Fixed","Fixed","Fills the whole container"],
    ["Space between particles","Least","More","Most"],
    ["Force of attraction","Strongest","Weaker","Weakest"],
    ["Compressibility","Almost none","Very little","Highly compressible (hence LPG, CNG cylinders)"],
    ["Diffusion","Slowest","Faster","Fastest (smell of incense spreads)"]
  ]},
  {k:"table", title:"Changes of state", head:["Change","From → to","Name of the point / example"], rows:[
    ["Melting / fusion","Solid → liquid","Melting point; ice melts at 0 °C (273 K)"],
    ["Boiling / vaporisation","Liquid → gas (throughout the liquid)","Boiling point; water boils at 100 °C (373 K) at sea level"],
    ["Evaporation","Liquid → gas (at the surface, below boiling point)","Wet clothes dry; it causes cooling"],
    ["Condensation","Gas → liquid","Water drops on a cold glass"],
    ["Freezing / solidification","Liquid → solid","Water freezes at 0 °C"],
    ["Sublimation","Solid → gas directly","Camphor, naphthalene (mothballs), iodine, ammonium chloride, dry ice (solid CO₂)"],
    ["Deposition","Gas → solid directly","Frost forming on a cold night"]
  ]},
  {k:"facts", title:"Points the papers like", rows:[
    ["Latent heat","Heat taken in to change state without any rise in temperature — that is why ice stays at 0 °C while melting"],
    ["Latent heat of vaporisation of water","About 2260 kJ/kg — steam at 100 °C burns more than water at 100 °C"],
    ["Evaporation increases with","Higher temperature, larger surface area, wind, lower humidity"],
    ["Why a matka (earthen pot) cools water","Water seeps out through pores and evaporates, taking heat away"],
    ["Pressure and boiling point","Low pressure lowers boiling point (hills: food cooks slowly); a pressure cooker raises it"],
    ["Effect of impurities","Salt raises the boiling point and lowers the freezing point of water (salt on icy roads)"],
    ["Fourth state of matter","Plasma — ionised gas; in the Sun, stars, lightning, neon signs"],
    ["Fifth state","Bose–Einstein Condensate (BEC) — matter cooled close to absolute zero; predicted by S. N. Bose and Einstein"],
    ["Absolute zero","0 K = −273.15 °C; K = °C + 273"],
    ["Dry ice","Solid carbon dioxide; sublimes at −78.5 °C; used to keep things frozen and for stage fog"]
  ]},
  {k:"trick", h:"Kelvin from Celsius — just <b>add 273</b>. Room temperature 25 °C = 298 K. <span class='mn'>Mothball, Camphor, Iodine, Dry ice</span> — <b>“My Cat Ignores Dogs”</b> = the sublimation four."},
  {k:"trap", h:"<b>Evaporation</b> happens at any temperature and only at the surface; <b>boiling</b> happens at a fixed temperature and throughout the liquid. <b>Plasma</b> is the 4th state, <b>BEC</b> the 5th — S. N. Bose is Indian. Steam burns are worse than boiling-water burns because of <b>latent heat</b>, not because steam is hotter."}
], sum:["Matter has mass and volume; solids keep shape and volume, liquids keep volume only, gases neither.","Diffusion and compressibility are greatest in gases and least in solids.","Sublimation turns a solid straight into gas: camphor, naphthalene, iodine, ammonium chloride, dry ice.","Evaporation causes cooling and happens at the surface below the boiling point; latent heat changes state without changing temperature.","Plasma is the fourth state of matter and the Bose–Einstein Condensate the fifth; K = °C + 273."]},

{id:"K2", g:"chem", heat:2, title:"Elements, compounds and mixtures", hi:"तत्व, यौगिक और मिश्रण", blocks:[
  {k:"hot", h:"Expect one question on <b>which separation method suits which mixture</b> (chromatography for dyes, fractional distillation for air or crude oil, centrifugation for cream), and one on <b>compound vs mixture</b> or <b>true solution, colloid, suspension</b>."},
  {k:"story", h:"<p>Think of a <b>kitchen</b>. <b>Salt</b> and <b>sugar</b> each have a fixed make-up — they are <b>pure substances</b>. Mix salt into water and you get <b>salt water</b>: you can taste both, change how much salt you add, and get the salt back by boiling off the water. That is a <b>mixture</b>.</p><p>Now think of water itself. It is made of hydrogen and oxygen, but it is nothing like either — hydrogen burns, oxygen helps burning, yet water puts fire out. When elements join chemically in a <b>fixed ratio</b> and get brand-new properties, you have a <b>compound</b>.</p><p>An <b>element</b> is the simplest pure substance, made of only one kind of atom — like gold, oxygen or carbon. To pull mixtures apart, chemists use the difference between the parts: size (filtering), boiling point (distillation), weight (centrifuging), or how fast they travel on paper (chromatography).</p>", key:"Element = one kind of atom; compound = elements joined in a fixed ratio with new properties; mixture = parts just mixed, in any ratio, keeping their own properties."},
  {k:"table", title:"Compound vs mixture", head:["Point","Compound","Mixture"], rows:[
    ["Ratio of parts","Fixed (water is always H : O = 1 : 8 by mass)","Any ratio"],
    ["Properties","New — unlike its elements","Parts keep their own properties"],
    ["Separation","Only by chemical means","By physical means (filtering, distilling, magnet…)"],
    ["Energy change when formed","Usually heat given out or taken in","Usually none"],
    ["Examples","Water, salt (NaCl), carbon dioxide, sugar","Air, brass, sea water, soil, milk, petrol"]
  ]},
  {k:"table", title:"True solution, colloid and suspension", head:["Point","True solution","Colloid","Suspension"], rows:[
    ["Particle size","Below 1 nm","1–1000 nm","Above 1000 nm"],
    ["Looks","Clear, see-through","Looks uniform but is not","Cloudy; settles on standing"],
    ["Tyndall effect (scatters a beam)","No","Yes","May show"],
    ["Passes through filter paper","Yes","Yes","No"],
    ["Examples","Salt or sugar in water, air","Milk, blood, ink, fog, smoke, butter, jelly, cheese","Chalk in water, muddy water, sand in water"]
  ]},
  {k:"table", title:"Separating mixtures", head:["Method","Works on","Example"], rows:[
    ["Filtration","Insoluble solid from a liquid","Tea leaves from tea, sand from water"],
    ["Evaporation","Dissolved solid from a liquid","Salt from sea water"],
    ["Crystallisation","Pure crystals from a solution (better than evaporation)","Purifying alum, copper sulphate; salt pans"],
    ["Simple distillation","Two liquids with very different boiling points, or a liquid from a solid","Pure water from sea water"],
    ["Fractional distillation","Liquids whose boiling points are close (less than 25 °C apart)","Crude oil into petrol, diesel…; gases of air (oxygen, nitrogen, argon)"],
    ["Separating funnel","Two liquids that do not mix","Oil and water; kerosene and water"],
    ["Centrifugation","Fine particles spun out by fast rotation","Cream from milk (butter), blood tests, washing-machine dryer"],
    ["Chromatography","Different dissolved substances moving at different speeds","Colours in ink or dyes, drugs from blood, pigments of leaves"],
    ["Sublimation","A solid that sublimes from one that does not","Ammonium chloride or camphor from salt"],
    ["Magnetic separation","Magnetic from non-magnetic","Iron filings from sulphur or sand"],
    ["Sedimentation and decantation","Heavy solid settles; liquid poured off","Muddy water left to settle"],
    ["Loading","Alum added to make mud settle faster","Cleaning river water"],
    ["Winnowing, threshing, sieving","Farm and kitchen methods","Husk from grain; stones from flour"]
  ]},
  {k:"facts", title:"Quick facts", rows:[
    ["Homogeneous mixture","Same throughout — air, salt solution, brass, vinegar"],
    ["Heterogeneous mixture","Parts can be seen — soil, sand in water, oil in water, fruit salad"],
    ["Alloys","Mixtures, not compounds — e.g. brass (Cu + Zn), bronze (Cu + Sn)"],
    ["Tyndall effect","Scattering of light by colloid particles — sunbeams in a dusty room, headlights in fog"],
    ["Air","A mixture; nitrogen about 78%, oxygen about 21%, argon about 0.93%, CO₂ about 0.04%"],
    ["Emulsion","Colloid of liquid in liquid — milk, mayonnaise, cold cream"],
    ["Gel","Liquid in solid — jelly, cheese, butter"],
    ["Aerosol","Liquid or solid in gas — fog, mist, cloud (liquid); smoke, dust (solid)"],
    ["Foam","Gas in liquid — shaving cream, soap lather; gas in solid — sponge, pumice"]
  ]},
  {k:"trick", h:"Chromatography — <b>“Chroma” = colour</b>: whenever the question says <i>dye, ink, pigment, colour</i>, pick chromatography. Spinning milk for cream? <b>Centri</b>fugation goes round the <b>centre</b>."},
  {k:"trap", h:"<b>Air, brass, steel and sea water are mixtures</b>, not compounds. <b>Milk is a colloid</b> (emulsion), not a true solution. Crude oil and air are separated by <b>fractional</b> distillation, not simple distillation. Butter is a gel; milk is an emulsion."}
], sum:["An element has one kind of atom; a compound has elements in a fixed ratio with new properties; a mixture keeps its parts' properties in any ratio.","True solutions are below 1 nm and clear; colloids (milk, blood, fog, smoke) show the Tyndall effect; suspensions settle.","Chromatography separates dyes and inks; centrifugation separates cream from milk.","Fractional distillation separates crude oil and the gases of air; a separating funnel separates oil and water.","Air, alloys and sea water are mixtures; water, salt and carbon dioxide are compounds."]},

{id:"K3", g:"chem", heat:3, title:"Structure of the atom", hi:"परमाणु की संरचना", blocks:[
  {k:"hot", h:"Almost every shift has one: <b>who discovered the electron / proton / neutron / nucleus</b>, <b>isotopes vs isobars</b>, <b>electronic configuration</b> (2, 8, 8…), <b>valency</b>, or the <b>charge and mass of sub-atomic particles</b>."},
  {k:"story", h:"<p>About 2,500 years ago the Indian sage <b>Maharishi Kanad</b> said matter is made of tiny indivisible particles he called <i>parmanu</i>. In 1808 <b>John Dalton</b> made this a science: atoms are tiny, cannot be split, and atoms of one element are all alike.</p><p>Then the cracks appeared. In 1897 <b>J. J. Thomson</b> found tiny negative particles — <b>electrons</b> — and pictured the atom as a <b>plum pudding</b> (or a watermelon): a ball of positive charge with electrons stuck in it like seeds. In 1911 <b>Ernest Rutherford</b> fired alpha particles at a very thin gold foil. Most went straight through, but a few bounced right back — as if a bullet had hit a tiny steel ball hidden in cotton wool. The atom, he said, is mostly <b>empty space</b> with a tiny, heavy, positive <b>nucleus</b> at the centre.</p><p><b>Niels Bohr</b> (1913) then said electrons move in fixed <b>shells</b> or energy levels (K, L, M, N) and do not lose energy while there. Finally, <b>James Chadwick</b> (1932) found the <b>neutron</b>, the uncharged particle in the nucleus. That completed today's picture: protons and neutrons in the nucleus, electrons in shells around it.</p>", key:"Electron — Thomson; nucleus — Rutherford (gold foil); shells — Bohr; neutron — Chadwick; proton — Goldstein's canal rays / Rutherford."},
  {k:"table", title:"The three sub-atomic particles", head:["Particle","Symbol","Charge","Relative mass","Where","Discovered by"], rows:[
    ["Electron","e⁻","−1 (−1.6 × 10⁻¹⁹ C)","1/1836 of a proton (about 9.1 × 10⁻³¹ kg)","Shells around the nucleus","J. J. Thomson, 1897 (cathode rays)"],
    ["Proton","p⁺","+1","1 u (about 1.672 × 10⁻²⁷ kg)","Nucleus","E. Goldstein's canal (anode) rays, 1886; named by Rutherford"],
    ["Neutron","n","0 (no charge)","About 1 u — slightly heavier than a proton","Nucleus (absent in ordinary hydrogen)","James Chadwick, 1932"]
  ]},
  {k:"tl", title:"Atomic models, in order", rows:[
    ["c. 600 BCE","Maharishi Kanad — parmanu, the smallest particle of matter"],
    ["1808","John Dalton's atomic theory — atoms indivisible"],
    ["1897","J. J. Thomson discovers the electron; 'plum pudding' model"],
    ["1911","Rutherford's gold-foil (alpha scattering) experiment — nuclear model"],
    ["1913","Niels Bohr — electrons in fixed orbits (shells)"],
    ["1926","Schrödinger — quantum mechanical (orbital) model"],
    ["1932","James Chadwick discovers the neutron"]
  ]},
  {k:"facts", title:"Numbers and terms", rows:[
    ["Atomic number (Z)","Number of protons (= electrons in a neutral atom); it decides the element"],
    ["Mass number (A)","Protons + neutrons; neutrons = A − Z"],
    ["Electrons a shell can hold","2n²: K = 2, L = 8, M = 18, N = 32"],
    ["Outermost shell","Holds at most 8 electrons (octet)"],
    ["Valence electrons","Electrons in the outermost shell; they decide chemical behaviour"],
    ["Valency","Combining capacity — electrons an atom gives, takes or shares to complete its octet"],
    ["Sodium (Z = 11)","2, 8, 1 → valency 1"],
    ["Chlorine (Z = 17)","2, 8, 7 → valency 1"],
    ["Calcium (Z = 20)","2, 8, 8, 2 → valency 2"],
    ["Size of the nucleus","About 10⁻¹⁵ m; the atom is about 10⁻¹⁰ m (100,000 times bigger)"],
    ["Quantum numbers","Principal (n), azimuthal (l), magnetic (m), spin (s)"],
    ["Rules of filling","Aufbau (lowest energy first), Pauli exclusion (no two electrons with the same four quantum numbers), Hund's rule (fill singly first)"]
  ]},
  {k:"table", title:"Isotopes, isobars and isotones", head:["Term","Same","Different","Example"], rows:[
    ["Isotopes","Atomic number (protons)","Mass number (neutrons)","Protium ¹H, deuterium ²H, tritium ³H; C-12, C-14; Cl-35, Cl-37"],
    ["Isobars","Mass number","Atomic number","Argon-40 and calcium-40"],
    ["Isotones","Number of neutrons","Protons and mass number","Carbon-14 and oxygen-16 (8 neutrons each)"],
    ["Isoelectronic","Number of electrons","Element","Na⁺, Mg²⁺, Ne, F⁻, O²⁻ (10 electrons each)"]
  ]},
  {k:"facts", title:"Isotopes at work", rows:[
    ["Tritium (³H)","The only radioactive isotope of hydrogen"],
    ["Deuterium","Heavy hydrogen; D₂O is heavy water, used as a moderator in nuclear reactors"],
    ["Carbon-14","Radiocarbon dating of fossils and old wood (half-life about 5730 years)"],
    ["Cobalt-60","Cancer treatment (radiotherapy)"],
    ["Iodine-131","Thyroid treatment and tests"],
    ["Uranium-235","Fuel in nuclear reactors and the atom bomb"],
    ["Sodium-24","Finding blood clots and blockages"],
    ["Phosphorus-32","Leukaemia treatment, plant studies"]
  ]},
  {k:"trick", h:"Discoverers in one line — <b>“Tom Eats, Rutherford Nuts, Chadwick Nibbles, Goldstein Pops”</b>: Thomson–Electron, Rutherford–Nucleus, Chadwick–Neutron, Goldstein–Proton (canal rays). Shell capacity <b>2-8-18-32</b> = 2n²."},
  {k:"trap", h:"<b>Isotopes</b> have the same <b>atomic</b> number; <b>isobars</b> have the same <b>mass</b> number (<i>bar = mass, like a barbell</i>). The <b>neutron</b> is slightly <i>heavier</i> than the proton. Ordinary hydrogen (protium) has <b>no neutron</b>. The gold-foil experiment proved the <b>nucleus</b>, not the electron."}
], sum:["Thomson found the electron (1897), Rutherford the nucleus by the gold-foil experiment (1911), Chadwick the neutron (1932); Bohr gave shells (1913).","Atomic number = protons; mass number = protons + neutrons.","Shells hold 2n² electrons: 2, 8, 18, 32; the outermost holds at most 8.","Isotopes share atomic number (C-12, C-14); isobars share mass number (Ar-40, Ca-40); isotones share neutrons.","Carbon-14 dates fossils, cobalt-60 treats cancer, iodine-131 treats the thyroid, tritium is radioactive hydrogen."]},

{id:"K4", g:"chem", heat:3, title:"The periodic table", hi:"आवर्त सारणी", blocks:[
  {k:"hot", h:"A sure topic: <b>who made which table</b> (Döbereiner's triads, Newlands' octaves, Mendeleev, Moseley), <b>periods and groups</b>, <b>trends</b> (atomic size, metallic character, electronegativity) and the <b>families</b> — alkali metals, halogens, noble gases."},
  {k:"story", h:"<p>By the 1860s about 63 elements were known and chemists wanted to arrange them like books in a library. <b>Döbereiner</b> grouped them in threes (<b>triads</b>), <b>Newlands</b> noticed every eighth element was like the first, like the notes of music (<b>law of octaves</b>).</p><p>In 1869 the Russian chemist <b>Dmitri Mendeleev</b> arranged elements by <b>atomic mass</b> and boldly left <b>gaps</b> for elements not yet found — and even predicted their properties. When gallium and germanium were discovered and matched his guesses, the world was convinced. He is called the <b>father of the periodic table</b>.</p><p>One problem remained: a few elements sat in the wrong order by mass. In 1913 <b>Henry Moseley</b> showed the real key is the <b>atomic number</b>. Today's <b>modern periodic table</b> lists 118 elements by atomic number in <b>7 periods</b> (rows) and <b>18 groups</b> (columns). Elements in one group behave alike because they have the same number of outer electrons — like members of one family.</p>", key:"Mendeleev arranged by atomic mass; the modern table (Moseley) by atomic number — 7 periods, 18 groups, 118 elements."},
  {k:"tl", title:"How the table grew", rows:[
    ["1817–1829","Döbereiner's triads — e.g. Li, Na, K; the middle mass is about the average of the other two"],
    ["1864","Newlands' law of octaves — every 8th element like the 1st (worked only up to calcium)"],
    ["1869","Mendeleev's periodic law — properties repeat with atomic mass; left gaps for eka-aluminium (gallium) and eka-silicon (germanium)"],
    ["1894–1898","Noble gases found (Ramsay, Rayleigh) — a whole new group added"],
    ["1913","Moseley — atomic number is the basis (modern periodic law)"],
    ["2016","Last four names confirmed: nihonium (113), moscovium (115), tennessine (117), oganesson (118)"]
  ]},
  {k:"facts", title:"Layout of the modern table", rows:[
    ["Periods (rows)","7; period number = number of shells"],
    ["Groups (columns)","18; for groups 1–2 the group number = valence electrons; for 13–18 it is valence electrons + 10"],
    ["Shortest period","1st — only 2 elements (H, He)"],
    ["Longest period","6th and 7th — 32 elements each"],
    ["s-block","Groups 1–2 (and helium)"],
    ["p-block","Groups 13–18"],
    ["d-block","Groups 3–12 — transition metals"],
    ["f-block","Lanthanides (57–71) and actinides (89–103), kept at the bottom"],
    ["Metals","Left and centre (about 80% of all elements)"],
    ["Metalloids","Along the zig-zag line — boron, silicon, germanium, arsenic, antimony, tellurium"],
    ["Liquid elements at room temperature","Mercury (metal) and bromine (non-metal)"],
    ["Elements that melt in your hand","Gallium (about 30 °C) and caesium (about 28 °C)"]
  ]},
  {k:"table", title:"Trends you must know", head:["Property","Across a period (left → right)","Down a group (top → bottom)"], rows:[
    ["Atomic size (radius)","Decreases","Increases"],
    ["Metallic character","Decreases","Increases"],
    ["Non-metallic character","Increases","Decreases"],
    ["Ionisation energy","Increases","Decreases"],
    ["Electronegativity","Increases","Decreases"],
    ["Valency","Rises 1 → 4, then falls to 0","Stays the same"]
  ]},
  {k:"table", title:"Famous families", head:["Group","Family","Members","What to remember"], rows:[
    ["1","Alkali metals","Li, Na, K, Rb, Cs, Fr","Soft, very reactive, kept in kerosene; form strong alkalis with water"],
    ["2","Alkaline earth metals","Be, Mg, Ca, Sr, Ba, Ra","Valency 2; found in the earth's crust as compounds"],
    ["15","Pnictogens (nitrogen family)","N, P, As, Sb, Bi","Valency 3 or 5"],
    ["16","Chalcogens (oxygen family)","O, S, Se, Te, Po","'Ore-formers'"],
    ["17","Halogens","F, Cl, Br, I, At","'Salt-formers'; 7 valence electrons; fluorine is the most reactive and most electronegative element"],
    ["18","Noble (inert) gases","He, Ne, Ar, Kr, Xe, Rn","Full outer shell, hardly react, valency 0; radon is radioactive"]
  ]},
  {k:"facts", title:"Record holders", rows:[
    ["Lightest element","Hydrogen"],
    ["Most abundant element in the universe","Hydrogen; then helium"],
    ["Most abundant in the earth's crust","Oxygen; then silicon, then aluminium (most abundant metal)"],
    ["Most abundant in the atmosphere","Nitrogen"],
    ["Most abundant in the human body","Oxygen (by mass); then carbon"],
    ["Most electronegative","Fluorine"],
    ["Most electropositive (stable)","Caesium"],
    ["Largest atom (common lists)","Caesium / francium"],
    ["Hardest natural substance","Diamond (carbon)"],
    ["Densest element","Osmium"],
    ["Highest melting point metal","Tungsten (about 3422 °C) — used in bulb filaments"],
    ["Best conductor of electricity","Silver; then copper"],
    ["Lightest metal","Lithium"],
    ["Element with the most compounds","Carbon"]
  ]},
  {k:"trick", h:"Alkali metals: <b>“Little Naughty Kids Rub Cat's Fur”</b> = Li Na K Rb Cs Fr. Halogens: <b>“Fat Cats Bring Itchy Attitude”</b> = F Cl Br I At. Noble gases: <b>“He Never Arrived; Kriti eXpected Rahul”</b> = He Ne Ar Kr Xe Rn."},
  {k:"trap", h:"<b>Mendeleev</b> used atomic <b>mass</b>; <b>Moseley</b> (modern law) used atomic <b>number</b>. Size <b>decreases</b> across a period (more protons pull harder) but <b>increases</b> down a group. Hydrogen is placed in group 1 but is a <b>non-metal</b>. The most abundant element in the crust is <b>oxygen</b>; the most abundant <b>metal</b> is <b>aluminium</b>, not iron."}
], sum:["Döbereiner made triads, Newlands the law of octaves, Mendeleev (father of the periodic table) arranged by atomic mass, Moseley by atomic number.","The modern table has 118 elements, 7 periods and 18 groups; period number = number of shells.","Across a period atomic size falls and electronegativity rises; down a group size and metallic character rise.","Group 1 alkali metals, group 17 halogens (fluorine most electronegative), group 18 noble gases.","Mercury and bromine are liquid at room temperature; oxygen is the most abundant element in the crust and aluminium the most abundant metal."]},

{id:"K5", g:"chem", heat:2, title:"Chemical bonding and the mole", hi:"रासायनिक बंधन और मोल", blocks:[
  {k:"hot", h:"Look for <b>ionic vs covalent</b> examples, the <b>hydrogen bond</b> (why ice floats, why water boils high), <b>Avogadro's number</b>, <b>molar mass</b>, <b>22.4 L at STP</b>, and simple <b>number of atoms / molecules</b> calculations."},
  {k:"story", h:"<p>Atoms want what noble gases already have: a full outer shell of eight electrons (the <b>octet</b>). They get it in two main ways.</p><p><b>Giving and taking</b>: sodium has one spare electron and chlorine needs one. Sodium hands it over, becomes Na⁺, chlorine becomes Cl⁻, and the opposite charges hold them tight — an <b>ionic (electrovalent) bond</b>, like a shopkeeper and a buyer exchanging money. Ionic compounds are hard crystals with high melting points that conduct electricity when melted or dissolved.</p><p><b>Sharing</b>: two chlorine atoms each need one electron, so they share a pair — a <b>covalent bond</b>, like two friends sharing an umbrella. Covalent substances (water, methane, sugar) usually melt and boil low and do not conduct.</p><p>Chemists count atoms in <b>moles</b>, just as a shop counts bananas in dozens. One mole is <b>6.022 × 10²³</b> particles (<b>Avogadro's number</b>), and one mole of any gas fills <b>22.4 litres</b> at STP.</p>", key:"Ionic = transfer of electrons (metal + non-metal); covalent = sharing (non-metals); 1 mole = 6.022 × 10²³ particles = molar mass in grams = 22.4 L of gas at STP."},
  {k:"table", title:"Ionic vs covalent compounds", head:["Point","Ionic","Covalent"], rows:[
    ["Formed by","Transfer of electrons","Sharing of electrons"],
    ["Usually between","Metal and non-metal","Non-metals"],
    ["State","Hard crystalline solids","Gases, liquids or soft solids"],
    ["Melting / boiling point","High","Low"],
    ["Electricity","Conduct when molten or dissolved in water","Usually do not conduct (graphite is an exception)"],
    ["Dissolves in","Water","Organic solvents (kerosene, petrol)"],
    ["Examples","NaCl, MgO, CaCl₂, KBr","H₂, Cl₂, H₂O, CH₄, NH₃, CO₂, sugar"]
  ]},
  {k:"facts", title:"Other bonds and molecule shapes", rows:[
    ["Single, double, triple bond","H–H, O=O, N≡N (the triple bond makes N₂ very stable)"],
    ["Coordinate (dative) bond","Both shared electrons come from one atom — e.g. in NH₄⁺, H₃O⁺"],
    ["Metallic bond","Positive ions in a 'sea' of free electrons — why metals conduct and can be drawn into wires"],
    ["Hydrogen bond","Weak pull between H and F, O or N of another molecule — high boiling point of water, ice floats (open structure), DNA's two strands"],
    ["Van der Waals forces","Weakest attraction between molecules"],
    ["Shapes","CO₂ linear (180°); H₂O bent (104.5°); NH₃ pyramidal (107°); CH₄ tetrahedral (109.5°)"],
    ["Polar molecule","Uneven sharing — water, ammonia, HCl"],
    ["Non-polar","Even sharing — H₂, O₂, CH₄, CO₂"]
  ]},
  {k:"facts", title:"The mole and the gas laws of combination", rows:[
    ["Avogadro's number (Nₐ)","6.022 × 10²³ per mole"],
    ["1 mole","Molar mass in grams — 18 g water, 44 g CO₂, 58.5 g NaCl, 12 g carbon-12"],
    ["Molar volume","22.4 L for 1 mole of any gas at STP (0 °C, 1 atm)"],
    ["Atomic mass unit (u)","1/12 of the mass of one carbon-12 atom"],
    ["Molar masses to remember","H₂O 18, CO₂ 44, NH₃ 17, CH₄ 16, O₂ 32, N₂ 28, NaCl 58.5, CaCO₃ 100, H₂SO₄ 98, glucose 180"],
    ["Law of conservation of mass","Lavoisier — mass is neither created nor destroyed in a reaction"],
    ["Law of definite (constant) proportions","Proust — a compound always has elements in the same mass ratio"],
    ["Law of multiple proportions","Dalton — e.g. CO and CO₂"],
    ["Avogadro's law","Equal volumes of gases at the same temperature and pressure hold equal numbers of molecules"],
    ["Gay-Lussac's law of gaseous volumes","Gases react in simple whole-number ratios by volume"]
  ]},
  {k:"ex", h:"How many molecules in 36 g of water? Molar mass of H₂O = 18 g, so 36 g = 2 moles = 2 × 6.022 × 10²³ = <b>1.2044 × 10²⁴ molecules</b>. And 2 moles of oxygen gas at STP fill 2 × 22.4 = <b>44.8 L</b>."},
  {k:"trick", h:"<b>“Ionic = I Own it”</b> — one atom takes the electron for itself; <b>“Co-valent = Co-operate”</b> — they share. Molar volume <b>22.4</b> — think of <b>22.4 carat</b> gold."},
  {k:"trap", h:"Ice floats because hydrogen bonds hold molecules in an <b>open cage</b>, making ice <b>less dense</b> than water — it is not because of air in it. Water is densest at <b>4 °C</b>. Ionic solids do <b>not</b> conduct when solid, only when molten or dissolved. Graphite is covalent but <b>conducts</b>."}
], sum:["Ionic bonds form by transfer of electrons (NaCl, MgO); covalent bonds by sharing (H₂O, CH₄, NH₃).","Ionic compounds melt high and conduct when molten or dissolved; covalent ones melt low and usually do not conduct.","Hydrogen bonding makes water boil high and ice float; water is densest at 4 °C.","One mole = 6.022 × 10²³ particles = molar mass in grams = 22.4 L of gas at STP.","Lavoisier gave conservation of mass, Proust definite proportions, Dalton multiple proportions."]}
);

QB.push(
/* K1 */
["K1","Which of these changes directly from solid to gas on heating?",["Camphor","Sodium chloride","Ice","Wax"],"Camphor sublimes. So do naphthalene, iodine, ammonium chloride and dry ice. Ice and wax melt first.","p"],
["K1","The process in which a solid turns into a gas without becoming a liquid is called:",["Sublimation","Evaporation","Condensation","Fusion"],"Sublimation: solid → gas directly. The reverse (gas → solid) is deposition.","p"],
["K1","Dry ice is the solid form of:",["Carbon dioxide","Water","Nitrogen","Ammonia"],"Dry ice is solid CO₂. It sublimes at about −78.5 °C, leaving no liquid behind — hence 'dry'.","p"],
["K1","In which state of matter is diffusion fastest?",["Gas","Liquid","Solid","It is the same in all"],"Gas particles move fastest and have the most space, so a smell spreads through a room quickly.",""],
["K1","Plasma is known as the ______ state of matter.",["Fourth","Third","Fifth","Second"],"Solid, liquid, gas are the first three; plasma (ionised gas, as in the Sun and lightning) is the fourth; BEC the fifth.","p"],
["K1","The Bose–Einstein Condensate is formed by cooling matter to:",["Near absolute zero","The boiling point of water","Room temperature","The melting point of ice"],"BEC forms at temperatures within a fraction of a degree of 0 K. It was predicted by S. N. Bose and Albert Einstein.","p"],
["K1","Why does an earthen pot (matka) keep water cool in summer?",["Water seeping through its pores evaporates and takes away heat","Clay absorbs heat from water","Clay is a good conductor of heat","Water reacts with clay"],"Evaporation takes latent heat from the remaining water, so it cools. Evaporation always causes cooling.","p"],
["K1","Steam at 100 °C causes more severe burns than boiling water at 100 °C because steam has:",["Extra latent heat of vaporisation","A higher temperature","Lower density","More oxygen"],"When steam condenses on skin it gives out its latent heat (about 2260 kJ/kg) as well as the heat of hot water.","p"],
["K1","The temperature 27 °C on the Kelvin scale is:",["300 K","273 K","246 K","327 K"],"K = °C + 273, so 27 + 273 = 300 K.",""],
["K1","Absolute zero on the Celsius scale is about:",["−273 °C","0 °C","−100 °C","−460 °C"],"0 K = −273.15 °C. Nothing can be colder.",""],
["K1","Food takes longer to cook at high altitudes because:",["Water boils at a lower temperature where air pressure is low","Water boils at a higher temperature","There is less oxygen to burn the fuel","The flame is colder"],"Lower air pressure lowers the boiling point of water, so the water is not hot enough to cook quickly. A pressure cooker raises the boiling point.","p"],
["K1","Adding common salt to water:",["Raises its boiling point and lowers its freezing point","Lowers both boiling and freezing points","Raises both","Has no effect on either"],"Dissolved impurities raise the boiling point and depress the freezing point — salt is spread on icy roads for this reason.",""],
["K1","The heat absorbed when a solid changes into a liquid at its melting point, without a rise in temperature, is called:",["Latent heat of fusion","Specific heat","Latent heat of vaporisation","Heat of combustion"],"Latent heat of fusion for ice is about 334 kJ/kg; during melting the temperature stays at 0 °C.",""],
["K1","Which of these does NOT increase the rate of evaporation?",["Higher humidity","Higher temperature","Larger surface area","Faster wind"],"Humid air already holds a lot of water vapour, so evaporation slows down.",""],
["K1","Gases are easy to compress because:",["The space between their particles is large","Their particles are very heavy","Their particles attract strongly","They have a fixed volume"],"Large gaps between gas particles let them be squeezed together — that is why LPG and CNG can be stored in cylinders.",""],
["K1","Which of these is NOT an example of sublimation?",["Melting of butter","Naphthalene balls disappearing","Iodine turning to violet vapour","Ammonium chloride on heating"],"Butter melts into a liquid. The other three go straight from solid to vapour.",""],
["K1","Water drops forming on the outside of a glass of ice-cold water is due to:",["Condensation","Evaporation","Sublimation","Melting"],"Water vapour in the air cools on touching the cold glass and condenses into droplets.",""],
["K1","Plasma, the fourth state of matter, is found in:",["The Sun and stars","Ice","Common salt","Mercury"],"Plasma is a hot ionised gas — in the Sun, stars, lightning, neon and fluorescent tubes.",""],
["K1","The boiling point of water at normal atmospheric pressure is:",["373 K","273 K","100 K","473 K"],"100 °C = 373 K. The melting point of ice is 273 K.",""],
["K1","The Indian scientist after whom 'bosons' are named is:",["Satyendra Nath Bose","C. V. Raman","Homi J. Bhabha","Meghnad Saha"],"S. N. Bose worked with Einstein on Bose–Einstein statistics; particles that follow them are called bosons.","p"],

/* K2 */
["K2","Which of the following is a compound?",["Water","Air","Brass","Sea water"],"Water (H₂O) has hydrogen and oxygen in a fixed ratio with new properties. Air, brass and sea water are mixtures.","p"],
["K2","Air is a:",["Mixture","Compound","Element","Pure substance"],"Air is a mixture of nitrogen, oxygen, argon, CO₂ and other gases in varying amounts.","p"],
["K2","Brass is an example of a:",["Homogeneous mixture","Compound","Element","Heterogeneous mixture"],"Brass is an alloy of copper and zinc — a homogeneous mixture (solid solution), not a compound.","p"],
["K2","Which method is used to separate the different coloured dyes in an ink?",["Chromatography","Distillation","Filtration","Centrifugation"],"Chromatography separates dissolved substances that move at different speeds on paper or a column.","p"],
["K2","Cream is separated from milk by:",["Centrifugation","Filtration","Sublimation","Chromatography"],"Spinning milk fast throws the heavier part outward and lighter cream collects at the centre.","p"],
["K2","The gases of air (nitrogen, oxygen, argon) are separated by:",["Fractional distillation of liquid air","Filtration","Chromatography","Sublimation"],"Air is liquefied and then warmed; gases boil off at different temperatures (nitrogen −196 °C, argon −186 °C, oxygen −183 °C).","p"],
["K2","Petrol, diesel and kerosene are obtained from crude oil by:",["Fractional distillation","Simple distillation","Crystallisation","Sedimentation"],"Crude oil (petroleum) is heated in a fractionating column and its fractions are drawn off by boiling range.","p"],
["K2","Which of these is a colloid?",["Milk","Salt solution","Sugar solution","Muddy water"],"Milk is an emulsion — fat droplets spread through water. Salt and sugar solutions are true solutions; muddy water is a suspension.","p"],
["K2","The scattering of a beam of light by colloidal particles is called the:",["Tyndall effect","Raman effect","Photoelectric effect","Doppler effect"],"Sunbeams in a dusty room or headlights in fog show the Tyndall effect.","p"],
["K2","A mixture of oil and water can be separated using a:",["Separating funnel","Sieve","Magnet","Centrifuge only"],"Oil and water do not mix; the heavier water is drained from the bottom of the funnel.",""],
["K2","Ammonium chloride can be separated from common salt by:",["Sublimation","Filtration","Evaporation","Chromatography"],"On heating, ammonium chloride sublimes and can be collected; salt stays behind.",""],
["K2","Iron filings mixed with sulphur powder can be separated with a:",["Magnet","Filter paper","Separating funnel","Centrifuge"],"Iron is magnetic, sulphur is not. If heated together they form iron sulphide, a compound that cannot be separated by a magnet.",""],
["K2","Alum is added to muddy water to:",["Make the mud particles settle faster","Kill germs","Make it taste better","Remove dissolved salts"],"This is loading: alum makes fine particles clump together and settle.",""],
["K2","Which of the following is a heterogeneous mixture?",["Sand in water","Sugar solution","Air","Brass"],"Sand and water can be seen separately and settle apart. The other three are uniform throughout.",""],
["K2","Fog is an example of a colloid in which:",["A liquid is dispersed in a gas","A gas is dispersed in a liquid","A solid is dispersed in a gas","A solid is dispersed in a liquid"],"Fog, mist and clouds are liquid-in-gas aerosols. Smoke is solid-in-gas.",""],
["K2","Which of these is an emulsion?",["Milk","Smoke","Jelly","Pumice stone"],"An emulsion is a liquid dispersed in another liquid. Smoke is an aerosol, jelly a gel, pumice a solid foam.",""],
["K2","Particles in a true solution are smaller than about:",["1 nanometre","1 millimetre","1 micrometre","1 centimetre"],"True solution particles are below 1 nm; colloids are 1–1000 nm; suspensions larger.",""],
["K2","Pure crystals of copper sulphate are best obtained from its impure sample by:",["Crystallisation","Evaporation to dryness","Filtration","Sublimation"],"Crystallisation leaves soluble impurities in the solution; evaporating to dryness would leave them in the solid.",""],
["K2","Which of the following is NOT a mixture?",["Distilled water","Soil","Petrol","Steel"],"Distilled water is pure H₂O, a compound. Soil, petrol and steel are mixtures.",""],
["K2","Approximately what percentage of air is nitrogen?",["78%","21%","1%","50%"],"Air: nitrogen about 78%, oxygen about 21%, argon about 0.93%, carbon dioxide about 0.04%.","p"],
["K2","Blood is an example of a:",["Colloid","True solution","Suspension that settles in minutes","Pure substance"],"Blood plasma carries proteins and cells in colloidal form; it shows the Tyndall effect.",""],
["K2","Which property does a compound have that a mixture does not?",["A fixed ratio of its parts by mass","Its parts keep their own properties","It can be separated by physical methods","Its parts can be present in any amount"],"A compound always has the same ratio (law of definite proportions); a mixture does not.",""],

/* K3 */
["K3","Who discovered the electron?",["J. J. Thomson","Ernest Rutherford","James Chadwick","Niels Bohr"],"Thomson found the electron in 1897 using cathode rays.","p"],
["K3","The neutron was discovered by:",["James Chadwick","J. J. Thomson","E. Goldstein","Ernest Rutherford"],"Chadwick discovered the neutron in 1932 and got the Nobel Prize in Physics in 1935.","p"],
["K3","Rutherford's gold foil (alpha particle scattering) experiment led to the discovery of the:",["Atomic nucleus","Electron","Neutron","Isotopes"],"Most alpha particles passed through but a few bounced back, showing a tiny, heavy, positive nucleus with mostly empty space around it.","p"],
["K3","Which sub-atomic particle has no charge?",["Neutron","Proton","Electron","Positron"],"Neutrons are neutral; protons are positive; electrons negative.","p"],
["K3","The 'plum pudding' model of the atom was given by:",["J. J. Thomson","Niels Bohr","John Dalton","Ernest Rutherford"],"Thomson pictured a sphere of positive charge with electrons embedded like plums (or watermelon seeds).","p"],
["K3","The idea that electrons revolve in fixed orbits (shells) without losing energy was given by:",["Niels Bohr","Ernest Rutherford","J. J. Thomson","Dalton"],"Bohr's model (1913) explained the stability of the atom and the line spectrum of hydrogen.",""],
["K3","The atomic number of an element is equal to the number of:",["Protons in its nucleus","Neutrons in its nucleus","Protons plus neutrons","Shells in its atom"],"Atomic number Z = protons (and = electrons in a neutral atom). It identifies the element.","p"],
["K3","An atom has 17 protons and 18 neutrons. Its mass number is:",["35","17","18","1"],"Mass number = protons + neutrons = 17 + 18 = 35 (this is chlorine-35).",""],
["K3","Atoms of the same element with different mass numbers are called:",["Isotopes","Isobars","Isotones","Allotropes"],"Isotopes have the same atomic number but different numbers of neutrons — e.g. C-12 and C-14.","p"],
["K3","Argon-40 and calcium-40 are examples of:",["Isobars","Isotopes","Isotones","Allotropes"],"Isobars have the same mass number (40) but different atomic numbers (18 and 20).","p"],
["K3","Which isotope of hydrogen is radioactive?",["Tritium","Protium","Deuterium","All three"],"Tritium (³H) has 1 proton and 2 neutrons and is radioactive. Protium and deuterium are stable.","p"],
["K3","Which isotope is used to find the age of fossils?",["Carbon-14","Cobalt-60","Iodine-131","Uranium-235"],"Radiocarbon dating uses carbon-14, with a half-life of about 5730 years.","p"],
["K3","Cobalt-60 is used in:",["Treatment of cancer","Dating of rocks","Making atom bombs","Treating goitre"],"Gamma rays from cobalt-60 kill cancer cells (radiotherapy). Iodine-131 is used for the thyroid.",""],
["K3","The maximum number of electrons the M shell (n = 3) can hold is:",["18","8","32","2"],"Capacity = 2n² = 2 × 3² = 18.","p"],
["K3","The electronic configuration of sodium (atomic number 11) is:",["2, 8, 1","2, 8, 2","2, 9","2, 1, 8"],"K shell 2, L shell 8, M shell 1. The single outer electron makes sodium very reactive with valency 1.","p"],
["K3","The valency of an element with electronic configuration 2, 8, 6 is:",["2","6","8","4"],"It needs 2 more electrons to complete its octet, so valency = 2. This is sulphur.",""],
["K3","The mass of an electron is about ______ of the mass of a proton.",["1/1836","1/18","1836 times","Equal to"],"An electron is about 1836 times lighter than a proton.",""],
["K3","Canal rays (anode rays), which led to the discovery of the proton, were discovered by:",["E. Goldstein","J. J. Thomson","Chadwick","Becquerel"],"Goldstein observed canal rays in 1886; the proton was later identified and named by Rutherford.",""],
["K3","The Indian sage who first said matter is made of tiny particles called 'parmanu' was:",["Maharishi Kanad","Aryabhata","Charaka","Nagarjuna"],"Kanad, founder of the Vaisheshika school, proposed the idea of parmanu long before Dalton.","p"],
["K3","Carbon-14 and nitrogen-14 are examples of:",["Isobars","Isotopes","Isotones","Isomers"],"Both have mass number 14 but atomic numbers 6 and 7.",""],
["K3","Na⁺, Mg²⁺ and F⁻ are isoelectronic because they all have:",["10 electrons","10 protons","11 electrons","The same mass"],"Each has 10 electrons — the same as neon.",""],
["K3","The principle that no two electrons in an atom can have the same set of four quantum numbers is:",["Pauli's exclusion principle","Hund's rule","Aufbau principle","Heisenberg's uncertainty principle"],"Pauli's exclusion principle limits each orbital to two electrons of opposite spin.",""],
["K3","Which particle is found in the nucleus of every atom except ordinary hydrogen?",["Neutron","Proton","Electron","Positron"],"Protium (¹H) has one proton and no neutron.",""],
["K3","Heavy water, used as a moderator in nuclear reactors, is:",["D₂O","H₂O₂","T₂O","H₂O with dissolved salts"],"Heavy water is deuterium oxide, D₂O; it slows down neutrons.","p"],

/* K4 */
["K4","Who is known as the father of the periodic table?",["Dmitri Mendeleev","Henry Moseley","John Newlands","J. W. Döbereiner"],"Mendeleev published his periodic table in 1869 and left gaps for undiscovered elements.","p"],
["K4","The modern periodic table is based on:",["Atomic number","Atomic mass","Number of neutrons","Density"],"Moseley showed in 1913 that properties repeat with atomic number — the modern periodic law.","p"],
["K4","Mendeleev arranged the elements in order of increasing:",["Atomic mass","Atomic number","Valency","Electronegativity"],"Mendeleev's periodic law was based on atomic mass; Moseley later changed the basis to atomic number.","p"],
["K4","The 'law of octaves' was given by:",["John Newlands","Dmitri Mendeleev","Döbereiner","Lothar Meyer"],"Newlands (1864) noticed every eighth element resembled the first, like notes of music.","p"],
["K4","Döbereiner grouped elements in sets of:",["Three","Eight","Seven","Two"],"His triads (e.g. Li, Na, K) had the middle element's mass close to the average of the other two.",""],
["K4","How many periods are there in the modern periodic table?",["7","18","8","9"],"There are 7 periods (rows) and 18 groups (columns).","p"],
["K4","How many groups are there in the modern periodic table?",["18","7","8","16"],"18 vertical columns, numbered 1 to 18.","p"],
["K4","Which is the most electronegative element?",["Fluorine","Oxygen","Chlorine","Nitrogen"],"Fluorine has the highest electronegativity (about 4.0 on the Pauling scale).","p"],
["K4","On moving from left to right across a period, the atomic size:",["Decreases","Increases","Stays the same","First increases then decreases"],"More protons pull the electrons in the same shell closer, so atoms get smaller.","p"],
["K4","On moving down a group, metallic character:",["Increases","Decreases","Stays the same","Becomes zero"],"Larger atoms lose electrons more easily, so they are more metallic.",""],
["K4","Group 17 elements are called:",["Halogens","Noble gases","Alkali metals","Chalcogens"],"Halogen means 'salt-former' — F, Cl, Br, I, At.","p"],
["K4","Group 18 elements are known as:",["Noble gases","Halogens","Alkaline earth metals","Transition metals"],"Helium, neon, argon, krypton, xenon, radon and oganesson have full outer shells and are very unreactive.","p"],
["K4","Which of the following is an alkali metal?",["Potassium","Calcium","Magnesium","Aluminium"],"Group 1: Li, Na, K, Rb, Cs, Fr. Calcium and magnesium are alkaline earth metals.","p"],
["K4","Which metal is liquid at room temperature?",["Mercury","Gallium","Sodium","Lead"],"Mercury is the only metal that is liquid at room temperature; bromine is the liquid non-metal.","p"],
["K4","Which non-metal is a liquid at room temperature?",["Bromine","Iodine","Chlorine","Phosphorus"],"Bromine is a red-brown liquid. Chlorine is a gas and iodine a solid.","p"],
["K4","The most abundant element in the earth's crust is:",["Oxygen","Silicon","Aluminium","Iron"],"Oxygen (about 46%), then silicon, then aluminium (the most abundant metal), then iron.","p"],
["K4","The most abundant metal in the earth's crust is:",["Aluminium","Iron","Calcium","Sodium"],"Aluminium is about 8% of the crust, ahead of iron (about 5%).","p"],
["K4","Elements in the same group have the same number of:",["Valence electrons","Shells","Neutrons","Protons"],"That is why members of a group behave alike.",""],
["K4","Transition elements belong to the:",["d-block","s-block","p-block","f-block"],"Groups 3 to 12 form the d-block.",""],
["K4","Lanthanides and actinides belong to the:",["f-block","d-block","p-block","s-block"],"They are the inner transition elements, placed in two rows at the bottom of the table.",""],
["K4","Which of the following is a metalloid?",["Silicon","Sodium","Sulphur","Calcium"],"Metalloids — boron, silicon, germanium, arsenic, antimony, tellurium — show properties of both metals and non-metals.","p"],
["K4","The element with atomic number 1, placed in group 1 but a non-metal, is:",["Hydrogen","Helium","Lithium","Sodium"],"Hydrogen has one electron like the alkali metals but is a non-metal gas.",""],
["K4","Which element has the highest melting point among metals and is used in bulb filaments?",["Tungsten","Iron","Copper","Nichrome"],"Tungsten melts at about 3422 °C. Nichrome is an alloy used in heater coils.","p"],
["K4","Which metal can melt in the palm of your hand?",["Gallium","Iron","Lead","Tin"],"Gallium melts at about 29.8 °C, below body temperature.",""],
["K4","The densest naturally occurring element is:",["Osmium","Gold","Lead","Mercury"],"Osmium (about 22.6 g/cm³) is slightly denser than iridium.",""],
["K4","Ionisation energy generally ______ down a group.",["Decreases","Increases","Remains constant","Doubles"],"The outer electron is farther from the nucleus and more shielded, so it is easier to remove.",""],
["K4","Gallium and germanium were predicted by Mendeleev as:",["Eka-aluminium and eka-silicon","Eka-boron and eka-carbon","Eka-silicon and eka-aluminium","Eka-iodine and eka-manganese"],"Their later discovery, matching his predictions, made his table famous.",""],
["K4","The number of elements in the modern periodic table is:",["118","103","92","108"],"118 elements are known; the last four (113, 115, 117, 118) were named in 2016.",""],

/* K5 */
["K5","Sodium chloride is formed by:",["Ionic bond","Covalent bond","Metallic bond","Hydrogen bond"],"Sodium gives one electron to chlorine, forming Na⁺ and Cl⁻ held by electrostatic attraction.","p"],
["K5","A covalent bond is formed by:",["Sharing of electrons","Transfer of electrons","Sharing of protons","Transfer of neutrons"],"Non-metal atoms share electron pairs to complete their octets.","p"],
["K5","Which of these compounds is covalent?",["Methane (CH₄)","Sodium chloride","Magnesium oxide","Potassium bromide"],"Methane is formed by sharing electrons between carbon and hydrogen; the others are ionic.","p"],
["K5","The value of Avogadro's number is:",["6.022 × 10²³","6.022 × 10²²","3 × 10⁸","1.6 × 10⁻¹⁹"],"One mole of anything contains 6.022 × 10²³ particles.","p"],
["K5","The volume occupied by one mole of any gas at STP is:",["22.4 L","11.2 L","1 L","44.8 L"],"Molar volume at 0 °C and 1 atm is 22.4 litres.","p"],
["K5","Ice floats on water because:",["It is less dense than water due to hydrogen bonding","It contains trapped air","It is lighter in mass","Water pushes it with an electric force"],"Hydrogen bonds hold water molecules in an open cage in ice, so it is about 9% less dense than liquid water.","p"],
["K5","Water has the maximum density at:",["4 °C","0 °C","100 °C","−4 °C"],"This is why lakes freeze from the top and fish survive below.","p"],
["K5","The unusually high boiling point of water is due to:",["Hydrogen bonding","Ionic bonding","Metallic bonding","Its small molar mass"],"Hydrogen bonds between molecules must be broken before water can boil.",""],
["K5","How many moles are present in 88 g of carbon dioxide?",["2","1","4","0.5"],"Molar mass of CO₂ = 12 + 32 = 44 g; 88 ÷ 44 = 2 moles.",""],
["K5","The molar mass of water (H₂O) is:",["18 g/mol","16 g/mol","10 g/mol","20 g/mol"],"2 × 1 + 16 = 18 g/mol.",""],
["K5","The nitrogen molecule (N₂) has a:",["Triple bond","Single bond","Double bond","Ionic bond"],"N≡N — the triple bond makes nitrogen very unreactive.",""],
["K5","Ionic compounds conduct electricity:",["In molten state or in water solution","Only in solid state","Never","Only as gases"],"Their ions are fixed in the solid crystal but free to move when melted or dissolved.","p"],
["K5","Which law states that mass can neither be created nor destroyed in a chemical reaction?",["Law of conservation of mass","Law of definite proportions","Law of multiple proportions","Avogadro's law"],"Given by Antoine Lavoisier, the father of modern chemistry.","p"],
["K5","Who is called the father of modern chemistry?",["Antoine Lavoisier","John Dalton","Robert Boyle","Dmitri Mendeleev"],"Lavoisier established conservation of mass and named oxygen and hydrogen.","p"],
["K5","The law of definite (constant) proportions was given by:",["Joseph Proust","John Dalton","Lavoisier","Gay-Lussac"],"Proust: a compound always contains the same elements in the same proportion by mass.",""],
["K5","The shape of the methane molecule is:",["Tetrahedral","Linear","Bent","Pyramidal"],"Four C–H bonds point to the corners of a tetrahedron at 109.5°.",""],
["K5","The shape of the carbon dioxide molecule is:",["Linear","Bent","Tetrahedral","Pyramidal"],"O=C=O with a bond angle of 180°, so CO₂ is non-polar even though each bond is polar.",""],
["K5","The bond in which both electrons of the shared pair come from the same atom is a:",["Coordinate bond","Ionic bond","Metallic bond","Hydrogen bond"],"Also called a dative bond — e.g. in the ammonium ion NH₄⁺.",""],
["K5","The 'sea of electrons' model explains the bonding in:",["Metals","Ionic solids","Noble gases","Covalent gases"],"Free electrons let metals conduct electricity and heat.",""],
["K5","Equal volumes of all gases at the same temperature and pressure contain an equal number of molecules. This is:",["Avogadro's law","Boyle's law","Charles's law","Graham's law"],"Amedeo Avogadro, 1811.","p"],
["K5","How many molecules are there in 18 g of water?",["6.022 × 10²³","3.011 × 10²³","1.2 × 10²⁴","18 × 10²³"],"18 g of water is 1 mole, so it has Avogadro's number of molecules.",""],
["K5","Which of these is a polar molecule?",["Water","Methane","Carbon dioxide","Hydrogen"],"Water is bent, so its bond polarities do not cancel. The others are non-polar.",""],
["K5","Graphite conducts electricity even though it is covalent because:",["Each carbon has one free electron","It is a metal","It has ions","It contains iron impurities"],"Each carbon bonds to three others, leaving one electron free to move between layers.",""]
);

LASTMOMENT.push(
{t:"States of matter", era:["chem"], rows:[["Sublimation","Camphor, naphthalene, iodine, NH₄Cl, dry ice"],["Dry ice","Solid CO₂"],["4th / 5th state","Plasma / Bose–Einstein Condensate"],["K from °C","Add 273"],["Evaporation","Causes cooling; surface only"],["Steam burns more","Latent heat of vaporisation"],["Hills","Lower pressure → lower boiling point"],["Diffusion fastest","Gases"]]},
{t:"Separation methods", era:["chem"], rows:[["Dyes in ink","Chromatography"],["Cream from milk","Centrifugation"],["Crude oil, liquid air","Fractional distillation"],["Oil and water","Separating funnel"],["NH₄Cl from salt","Sublimation"],["Iron from sand","Magnet"],["Mud settling","Loading with alum"],["Pure crystals","Crystallisation"]]},
{t:"Colloids", era:["chem"], rows:[["Milk, mayonnaise","Emulsion (liquid in liquid)"],["Fog, mist, cloud","Aerosol (liquid in gas)"],["Smoke, dust","Aerosol (solid in gas)"],["Jelly, cheese, butter","Gel (liquid in solid)"],["Shaving cream","Foam (gas in liquid)"],["Pumice, sponge","Solid foam"],["Beam scattered","Tyndall effect"],["Size","1–1000 nm"]]},
{t:"Atom — who found what", era:["chem"], rows:[["Electron","J. J. Thomson, 1897"],["Nucleus","Rutherford, gold foil, 1911"],["Neutron","Chadwick, 1932"],["Proton","Goldstein's canal rays / Rutherford"],["Orbits / shells","Niels Bohr, 1913"],["Atomic theory","Dalton, 1808"],["Parmanu","Maharishi Kanad"],["Plum pudding","Thomson"]]},
{t:"Isotopes and uses", era:["chem"], rows:[["Same Z, different A","Isotopes"],["Same A, different Z","Isobars (Ar-40, Ca-40)"],["Same neutrons","Isotones (C-14, O-16)"],["Radioactive hydrogen","Tritium"],["Fossil dating","Carbon-14"],["Cancer","Cobalt-60"],["Thyroid","Iodine-131"],["Moderator","Heavy water D₂O"]]},
{t:"Periodic table", era:["chem"], rows:[["Father","Mendeleev (atomic mass, 1869)"],["Modern law","Moseley (atomic number)"],["Octaves","Newlands"],["Triads","Döbereiner"],["Periods / groups","7 / 18"],["Most electronegative","Fluorine"],["Liquid metal / non-metal","Mercury / bromine"],["Crust: element / metal","Oxygen / aluminium"]]},
{t:"Bonding and mole", era:["chem"], rows:[["NaCl, MgO","Ionic (transfer)"],["H₂O, CH₄, NH₃","Covalent (sharing)"],["Avogadro's number","6.022 × 10²³"],["Molar volume at STP","22.4 L"],["Ice floats","Hydrogen bonding, open cage"],["Water densest","4 °C"],["Conservation of mass","Lavoisier"],["Definite proportions","Proust"]]}
);

TILES.push(
["273","Add to °C to get kelvin","chem"],
["−78.5 °C","Dry ice sublimes","chem"],
["5th","State: Bose–Einstein Condensate","chem"],
["78%","Nitrogen in air","chem"],
["21%","Oxygen in air","chem"],
["1–1000 nm","Size of colloid particles","chem"],
["1897","Electron found (Thomson)","chem"],
["1911","Nucleus found (Rutherford)","chem"],
["1932","Neutron found (Chadwick)","chem"],
["2n²","Electrons a shell can hold","chem"],
["1/1836","Electron mass vs proton","chem"],
["5730 yr","Half-life of carbon-14","chem"],
["1869","Mendeleev's periodic table","chem"],
["118","Elements known","chem"],
["7 × 18","Periods × groups","chem"],
["4 °C","Water is densest","chem"],
["6.022 × 10²³","Avogadro's number","chem"],
["22.4 L","Molar volume at STP","chem"],
["3422 °C","Tungsten melts","chem"],
["~30 °C","Gallium melts","chem"]
);
