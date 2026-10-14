/* Part 2 · I3 physics, chemistry and space; I4 biology; I5 medicine, vaccines and vitamins; I6 laws and principles. */
const I3 = [
  ["electron","J. J. Thomson","1897, from cathode rays; Nobel Prize 1906.","p"],
  ["neutron","James Chadwick","1932; Nobel Prize 1935.","p|SSC CGL · 3 Mar 2020 (Shift 1)"],
  ["atomic nucleus","Ernest Rutherford","1911, by the gold-foil experiment. He also identified the proton (1917–19).","p"],
  ["positron (the first antiparticle)","Carl Anderson","1932, in cosmic rays.",""],
  ["X-rays","Wilhelm Röntgen","1895, Germany; the first Nobel Prize in Physics (1901).","p"],
  ["radioactivity","Henri Becquerel","1896, from uranium salts.","p"],
  ["radium and polonium","Marie and Pierre Curie","1898. Marie Curie won Nobels in both Physics (1903) and Chemistry (1911).","p"],
  ["quantum theory","Max Planck","1900 — energy comes in packets (quanta).","p"],
  ["theory of relativity","Albert Einstein","Special relativity 1905, general relativity 1915.","p"],
  ["nuclear fission","Otto Hahn and Fritz Strassmann","1938, Germany — the basis of nuclear power and the atom bomb.",""],
  ["Higgs boson (predicted)","Peter Higgs","Predicted in 1964; found at CERN in 2012; Nobel Prize 2013.","p"],
  ["heliocentric (Sun-centred) model","Nicolaus Copernicus","Published in 1543.","p"],
  ["moons of Jupiter","Galileo Galilei","1610, with his telescope.",""],
  ["planet Uranus","William Herschel","1781 — the first planet found with a telescope.",""],
  ["expanding universe","Edwin Hubble","1929 — galaxies are moving away from us.",""]
];
const I3B = [
  ["hydrogen","Henry Cavendish","1766 — he called it 'inflammable air'.","p"],
  ["oxygen","Joseph Priestley","1774. Carl Scheele found it independently; Lavoisier named it.","p"],
  ["nitrogen","Daniel Rutherford","1772 — not Ernest Rutherford.","p"],
  ["chlorine","Carl Wilhelm Scheele","1774.",""],
  ["atomic theory (modern)","John Dalton","1808 — matter is made of atoms.","p"],
  ["periodic table (by atomic mass)","Dmitri Mendeleev","1869; left gaps for elements not yet found.","p"],
  ["modern periodic law (by atomic number)","Henry Moseley","1913.","p"],
  ["ring structure of benzene","August Kekulé","1865.",""],
  ["isotopes (the idea and the name)","Frederick Soddy","1913.",""],
  ["law of conservation of mass","Antoine Lavoisier","1789 — the 'Father of Modern Chemistry'.","p"]
];
const I4 = [
  ["cell (in cork)","Robert Hooke","1665, in his book Micrographia.","p"],
  ["cell nucleus","Robert Brown","1831, in orchid cells.","p"],
  ["cell theory","Schleiden and Schwann","1838–39: all living things are made of cells.","p"],
  ["bacteria and protozoa (first seen)","Antonie van Leeuwenhoek","1670s, with his own microscopes.","p"],
  ["circulation of blood","William Harvey","1628, England.","p"],
  ["ABO blood groups","Karl Landsteiner","1900–01; Nobel Prize 1930.","p|SSC MTS · 4 Oct 2017 (Shift 2)"],
  ["Rh factor in blood","Landsteiner and Wiener","1940, from studies on rhesus monkeys.","p"],
  ["AB blood group","Decastello and Sturli","1902.",""],
  ["DNA double helix","Watson and Crick","1953, using Rosalind Franklin's X-ray photographs; Nobel Prize 1962.","p"],
  ["DNA (first isolated, as 'nuclein')","Friedrich Miescher","1869.",""],
  ["laws of inheritance","Gregor Mendel","1866, with pea plants — the 'Father of Genetics'.","p"],
  ["evolution by natural selection","Charles Darwin","On the Origin of Species, 1859.","p"],
  ["inheritance of acquired characters","Jean-Baptiste Lamarck","1809 — 'use and disuse' (the giraffe's neck).","p"],
  ["mutation theory","Hugo de Vries","1901, with evening primrose.",""],
  ["binomial nomenclature (two-part names)","Carl Linnaeus","1753 — e.g. Homo sapiens.","p"],
  ["role of light in photosynthesis","Jan Ingenhousz","1779.",""],
  ["Golgi apparatus","Camillo Golgi","1898.",""],
  ["ribosome","George Palade","1955; Nobel Prize 1974.",""],
  ["lysosome","Christian de Duve","1955.",""],
  ["virus (tobacco mosaic)","Dmitri Ivanovsky","1892.",""],
  ["the word 'gene'","Wilhelm Johannsen","1909.",""]
];
const I5 = [
  ["smallpox vaccine","Edward Jenner","1796, using cowpox — the first vaccine.","p"],
  ["rabies vaccine","Louis Pasteur","1885. Pasteur also gave pasteurisation and the germ theory.","p"],
  ["injected (killed) polio vaccine","Jonas Salk","Released in 1955.","p"],
  ["oral polio vaccine","Albert Sabin","1960s — the drops used in India's Pulse Polio drive.","p"],
  ["BCG vaccine against tuberculosis","Calmette and Guérin","1921, France.",""],
  ["penicillin","Alexander Fleming","1928 — the first antibiotic.","p|SSC CPO · 16 Mar 2019 (Shift 2)"],
  ["streptomycin (first drug for TB)","Selman Waksman","1943.",""],
  ["insulin","Banting and Best","1921, Toronto — for diabetes.","p"],
  ["tuberculosis bacterium","Robert Koch","1882 (also the cholera bacterium, 1883).","p"],
  ["malaria parasite in mosquitoes","Ronald Ross","1897, in Secunderabad; Nobel Prize 1902.","p"],
  ["malaria parasite in human blood","Alphonse Laveran","1880, Algeria.",""],
  ["leprosy bacterium","Gerhard Hansen","1873 — leprosy is also called Hansen's disease.",""],
  ["antiseptic surgery (carbolic acid)","Joseph Lister","1867.","p"],
  ["chloroform as an anaesthetic","James Young Simpson","1847.",""],
  ["the word 'vitamine'","Casimir Funk","1912.","p"],
  ["aspirin (pure, stable form)","Felix Hoffmann","1897, at Bayer.",""],
  ["homeopathy","Samuel Hahnemann","1796, Germany.","p"],
  ["CT scan","Godfrey Hounsfield","1971; Nobel Prize 1979.",""]
];
const I5V = [
  ["Vitamin A","Night blindness","Retinol; found in carrots, milk, fish oil.","p"],
  ["Vitamin B1 (thiamine)","Beriberi","",""],
  ["Vitamin B3 (niacin)","Pellagra","",""],
  ["Vitamin B12 (cobalamin)","Pernicious anaemia","Contains cobalt.","p"],
  ["Vitamin C (ascorbic acid)","Scurvy","Bleeding gums; citrus fruits and amla prevent it.","p"],
  ["Vitamin D (calciferol)","Rickets","Made in the skin by sunlight.","p"],
  ["Vitamin K","Blood does not clot properly","Needed for blood clotting.","p"]
];
const I5F = [
  ["first human heart transplant (Christiaan Barnard, Cape Town)","1967",""],
  ["first test-tube baby, Louise Brown (UK)","1978","India's first, Durga (Kanupriya Agarwal), was born in Kolkata the same year (Dr Subhash Mukhopadhyay)."],
  ["WHO declares smallpox eradicated","1980",""],
  ["India's first heart transplant (AIIMS, Dr P. Venugopal)","1994",""],
  ["Dolly the sheep, first cloned mammal, born","1996","Roslin Institute, Scotland."],
  ["Human Genome Project completed","2003",""],
  ["India certified polio-free by WHO","2014","On 27 March 2014."]
];
const I6 = [
  ["Three laws of motion and universal gravitation","Isaac Newton","Principia, 1687.","p"],
  ["Planets move in ellipses with the Sun at one focus","Johannes Kepler","Three laws, 1609–1619.","p"],
  ["A body in a fluid loses weight equal to the fluid it displaces (buoyancy)","Archimedes","The 'Eureka' story.","p"],
  ["Pressure on an enclosed fluid is passed equally in all directions","Blaise Pascal","Basis of the hydraulic press and brakes.","p"],
  ["At constant temperature, a gas's pressure × volume is constant","Robert Boyle","1662.","p"],
  ["At constant pressure, a gas's volume is proportional to its temperature","Jacques Charles","1787.","p"],
  ["Equal volumes of gases at the same conditions hold equal numbers of molecules","Amedeo Avogadro","1811.","p"],
  ["Current is proportional to voltage (V = IR)","Georg Ohm","1827.","p"],
  ["Stress is proportional to strain, within the elastic limit","Robert Hooke","1678.","p"],
  ["A changing magnetic field produces a current (electromagnetic induction)","Michael Faraday","1831.","p"],
  ["The induced current opposes the change that causes it","Heinrich Lenz","1834.",""],
  ["Force between two charges ∝ product of charges ÷ distance²","Charles-Augustin de Coulomb","1785.","p"],
  ["Where a fluid flows faster its pressure is lower","Daniel Bernoulli","1738 — explains the lift on aircraft wings.","p"],
  ["The pitch of a sound changes when the source moves (apparent frequency)","Christian Doppler","1842 — the Doppler effect.","p"],
  ["Position and momentum cannot both be known exactly (uncertainty principle)","Werner Heisenberg","1927.","p"],
  ["No two electrons in an atom have the same four quantum numbers","Wolfgang Pauli","1925 — the exclusion principle.",""],
  ["Mass and energy are equivalent (E = mc²)","Albert Einstein","1905.","p"],
  ["Total pressure of a gas mixture = sum of partial pressures","John Dalton","1801.",""],
  ["Rate of diffusion of a gas ∝ 1 ÷ √density","Thomas Graham","1848.",""],
  ["Heat produced by a current H = I²Rt","James Prescott Joule","1841.",""],
  ["A system in equilibrium shifts to undo a change put on it","Henry Le Chatelier","1884.",""],
  ["Light is a wave; every point on a wavefront is a new source","Christiaan Huygens","1678.",""],
  ["Light is an electromagnetic wave","James Clerk Maxwell","1865.",""],
  ["All bodies fall with the same acceleration (ignoring air)","Galileo Galilei","Late 1500s.","p"]
];

LESSONS.push(
{id:"I3", heat:3, title:"Discoveries in physics, chemistry and space", hi:"भौतिकी, रसायन और अंतरिक्ष की खोजें", blocks:[
  {k:"hot", h:"Top questions: who discovered the <b>electron (Thomson)</b>, <b>proton/nucleus (Rutherford)</b>, <b>neutron (Chadwick)</b>, <b>X-rays (Röntgen)</b>, <b>radioactivity (Becquerel)</b>, <b>radium (the Curies)</b>; who made the <b>periodic table (Mendeleev)</b>; who found <b>oxygen (Priestley)</b> and <b>hydrogen (Cavendish)</b>."},
  {k:"story", h:"<p>In 1895 <b>Röntgen</b> saw a screen glow across his lab — <b>X-rays</b>. A year later <b>Becquerel</b> found uranium giving off rays by itself (<b>radioactivity</b>), and the <b>Curies</b> found radium and polonium. Then the atom was opened up: <b>Thomson</b> found the electron (1897), <b>Rutherford</b> the nucleus (1911) and the proton, <b>Chadwick</b> the neutron (1932). <b>Planck</b> and <b>Einstein</b> rebuilt physics with quantum theory and relativity.</p><p>Chemistry had its own hunters. <b>Cavendish</b> found hydrogen, <b>Daniel Rutherford</b> nitrogen, <b>Priestley</b> oxygen. <b>Dalton</b> said all matter is atoms, and <b>Mendeleev</b> arranged the elements in a table in 1869. Looking up, <b>Copernicus</b> put the Sun at the centre, <b>Galileo</b> saw Jupiter's moons and <b>Hubble</b> found the universe is expanding.</p>", key:"Electron — Thomson; nucleus, proton — Rutherford; neutron — Chadwick; X-rays — Röntgen; radioactivity — Becquerel; periodic table — Mendeleev."},
  {k:"table", title:"Physics and space", head:["Discovery","Discovered by","Note"], rows: I3.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Chemistry and the elements", head:["Discovery","Discovered by","Note"], rows: I3B.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Particles in order of discovery — <b>“E-P-N: Every Physicist Nods”</b>: <b>E</b>lectron (Thomson 1897) → <b>P</b>roton (Rutherford) → <b>N</b>eutron (Chadwick 1932). And <b>“Chadwick = Chargeless”</b>."},
  {k:"trap", h:"<b>Nitrogen</b> was found by <b>Daniel</b> Rutherford; the nucleus by <b>Ernest</b> Rutherford. <b>Mendeleev</b> arranged by atomic <i>mass</i>; <b>Moseley</b>'s modern law uses atomic <i>number</i>. <b>Becquerel</b> found radioactivity; the <b>Curies</b> found radium."}
], sum:["J. J. Thomson — electron (1897); Rutherford — nucleus (1911) and proton; Chadwick — neutron (1932).","Röntgen — X-rays (1895); Becquerel — radioactivity (1896); the Curies — radium and polonium (1898).","Planck — quantum theory (1900); Einstein — relativity (1905, 1915).","Cavendish — hydrogen; Priestley — oxygen; Daniel Rutherford — nitrogen; Dalton — atomic theory.","Mendeleev — periodic table (1869); Moseley — modern periodic law by atomic number."]},

{id:"I4", heat:3, title:"Discoveries in biology: cells, blood and genes", hi:"जीव विज्ञान की खोजें: कोशिका, रक्त और जीन", blocks:[
  {k:"hot", h:"Asked again and again: <b>cell (Robert Hooke, 1665)</b>, <b>nucleus (Robert Brown)</b>, <b>blood groups (Landsteiner)</b>, <b>blood circulation (Harvey)</b>, <b>DNA double helix (Watson and Crick)</b>, <b>laws of inheritance (Mendel)</b> and <b>evolution (Darwin)</b>."},
  {k:"story", h:"<p>In 1665 <b>Robert Hooke</b> looked at a thin slice of cork and saw tiny boxes — he called them <b>cells</b>. <b>Leeuwenhoek</b> saw living bacteria in a drop of water, <b>Robert Brown</b> found the nucleus, and <b>Schleiden and Schwann</b> said every living thing is made of cells. Earlier, <b>William Harvey</b> had shown that the heart pumps blood round the body. In 1900–01 <b>Karl Landsteiner</b> found the A, B and O blood groups, which made safe transfusions possible.</p><p>How do children resemble parents? <b>Gregor Mendel</b>, a monk, found the answer with pea plants (1866). <b>Darwin</b> explained how species change by natural selection (1859). In 1953 <b>Watson and Crick</b>, using <b>Rosalind Franklin</b>'s X-ray photographs, showed DNA is a <b>double helix</b>.</p>", key:"Cell — Hooke; nucleus — Brown; circulation — Harvey; blood groups — Landsteiner; heredity — Mendel; evolution — Darwin; DNA helix — Watson and Crick."},
  {k:"table", title:"Discoveries in biology", head:["Discovery","Discovered by","Note"], rows: I4.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Blood groups in brief", rows:[
    ["Universal donor","O negative (O)"],
    ["Universal recipient","AB positive (AB)"],
    ["Rh factor named after","The rhesus monkey"],
    ["Groups found by Landsteiner","A, B and O (1900–01); AB by Decastello and Sturli (1902)"],
    ["World Blood Donor Day","14 June — Landsteiner's birthday"]
  ]},
  {k:"trick", h:"<b>“Hooke Hooked the Cell, Brown Browsed the Nucleus”</b>. <b>“Land-steiner gave blood its Land (groups)”</b>. <b>“Watson-Crick: Twisted Twins”</b> for the double helix."},
  {k:"trap", h:"Hooke saw <b>dead</b> cork cells; <b>Leeuwenhoek</b> first saw <b>living</b> cells and bacteria. <b>Darwin</b> = natural selection; <b>Lamarck</b> = use and disuse. The <b>Rh</b> factor was found by Landsteiner <i>with Wiener</i> in 1940."}
], sum:["Robert Hooke — cell (1665); Robert Brown — nucleus (1831); Schleiden and Schwann — cell theory.","Leeuwenhoek — first to see bacteria; Harvey — circulation of blood (1628).","Landsteiner — ABO blood groups (1900–01) and Rh factor with Wiener (1940).","Mendel — laws of inheritance (1866); Darwin — natural selection (1859); Lamarck — use and disuse.","Watson and Crick — DNA double helix (1953); Linnaeus — binomial nomenclature."]},

{id:"I5", heat:3, title:"Medicine: vaccines, antibiotics and vitamins", hi:"चिकित्सा: टीके, एंटीबायोटिक और विटामिन", blocks:[
  {k:"hot", h:"Favourites: <b>smallpox vaccine (Jenner)</b>, <b>rabies vaccine (Pasteur)</b>, <b>polio vaccines (Salk, Sabin)</b>, <b>penicillin (Fleming, 1928)</b>, <b>insulin (Banting and Best)</b>, <b>TB bacterium (Koch)</b>, <b>malaria in mosquitoes (Ronald Ross)</b> — and <b>which vitamin's lack causes which disease</b>."},
  {k:"story", h:"<p>In 1796 <b>Edward Jenner</b> noticed milkmaids who caught cowpox never got smallpox — the first <b>vaccine</b>. <b>Louis Pasteur</b> proved germs cause disease and made the rabies vaccine (1885); <b>Robert Koch</b> found the germs of TB and cholera. In Secunderabad, <b>Ronald Ross</b> showed mosquitoes carry malaria (1897). In 1928 <b>Alexander Fleming</b> saw mould killing bacteria on a dish — <b>penicillin</b>, the first antibiotic. <b>Banting and Best</b> found insulin (1921), saving diabetics.</p><p><b>Casimir Funk</b> gave the name 'vitamine' (1912) to food factors whose lack causes disease: scurvy (C), rickets (D), night blindness (A), beriberi (B1). Medicine's firsts followed — a heart transplant (1967), a test-tube baby (1978), a cloned sheep (1996).</p>", key:"Jenner — smallpox vaccine; Pasteur — rabies; Salk/Sabin — polio; Fleming — penicillin; Banting and Best — insulin; Koch — TB; Ross — malaria."},
  {k:"table", title:"Vaccines, medicines and germs", head:["Discovery","Discovered by","Note"], rows: I5.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Vitamins and deficiency diseases", head:["Vitamin","Lack causes","Note"], rows: I5V.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Medical firsts", head:["First","Year","Note"], rows: I5F},
  {k:"trick", h:"<b>“Jenner's Cow, Pasteur's Dog”</b> — smallpox vaccine from cowpox, rabies vaccine (dog bite). Vitamins: <b>A</b> for <b>A</b>ankh (eyes), <b>C</b> for <b>C</b>itrus/scurvy, <b>D</b> for <b>D</b>aylight/rickets, <b>K</b> for <b>K</b>lotting."},
  {k:"trap", h:"<b>Salk</b> = injected polio vaccine; <b>Sabin</b> = oral drops. <b>Ross</b> found malaria in <b>mosquitoes</b>; <b>Laveran</b> found the parasite in <b>human blood</b>. Fleming found penicillin; <b>Waksman</b> found streptomycin."}
], sum:["Jenner — smallpox vaccine (1796); Pasteur — rabies vaccine (1885); Salk and Sabin — polio vaccines.","Fleming — penicillin (1928); Waksman — streptomycin; Banting and Best — insulin (1921).","Koch — TB bacterium; Ross — malaria in mosquitoes (1897); Hansen — leprosy bacterium.","Lack of vitamin A — night blindness; B1 — beriberi; C — scurvy; D — rickets; K — poor clotting.","Heart transplant 1967; test-tube baby 1978; Dolly 1996; India polio-free 2014."]},

{id:"I6", heat:3, title:"Laws and principles, and who gave them", hi:"नियम और सिद्धांत तथा उनके प्रतिपादक", blocks:[
  {k:"hot", h:"SSC often describes a law and asks who gave it: <b>Newton</b> (motion, gravitation), <b>Archimedes</b> (buoyancy), <b>Pascal</b> (fluid pressure), <b>Boyle</b> and <b>Charles</b> (gases), <b>Ohm</b> (current), <b>Faraday</b> (induction), <b>Bernoulli</b> (flow), <b>Heisenberg</b> (uncertainty)."},
  {k:"story", h:"<p>Many laws came from one sharp idea. <b>Archimedes</b> saw the water rise in his bath and shouted 'Eureka!' — buoyancy. <b>Galileo</b> said all bodies fall alike; <b>Kepler</b> showed planets move in ellipses; <b>Newton</b> joined it all with three laws of motion and gravity (1687). <b>Pascal</b> explained hydraulic lifts, <b>Boyle</b> and <b>Charles</b> the behaviour of gases, and <b>Bernoulli</b> why a fast flow means low pressure.</p><p>Electricity got its rules from <b>Coulomb</b> (force between charges), <b>Ohm</b> (V = IR), <b>Faraday</b> (induction) and <b>Lenz</b>. In the 20th century, <b>Einstein</b> gave E = mc², <b>Heisenberg</b> the uncertainty principle and <b>Pauli</b> the exclusion principle.</p>", key:"Newton — motion; Kepler — planets; Archimedes — buoyancy; Pascal — fluid pressure; Boyle — P×V; Charles — V∝T; Ohm — V=IR; Faraday — induction."},
  {k:"table", title:"Laws and principles", head:["Law / principle","Given by","Note"], rows: I6.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Gas laws — <b>“Boyle Presses, Charles Heats”</b>: Boyle keeps <b>temperature</b> fixed (P × V constant); Charles keeps <b>pressure</b> fixed (V ∝ T). <b>“Lenz Resists”</b> — the induced current opposes its cause."},
  {k:"trap", h:"<b>Pascal</b> = pressure in enclosed fluids (hydraulic press); <b>Bernoulli</b> = flowing fluids (aircraft lift); <b>Archimedes</b> = floating. <b>Faraday</b> discovered induction; <b>Lenz</b> gave its direction."}
], sum:["Newton — laws of motion and gravitation (1687); Kepler — laws of planetary motion.","Archimedes — buoyancy; Pascal — pressure in enclosed fluids; Bernoulli — pressure in flowing fluids.","Boyle — P × V constant; Charles — V ∝ T; Avogadro — equal volumes, equal molecules.","Ohm — V = IR; Coulomb — force between charges; Faraday — electromagnetic induction; Lenz — its direction.","Einstein — E = mc²; Heisenberg — uncertainty principle; Pauli — exclusion principle; Doppler — apparent frequency."]}
);

pairQs("I3", I3, { q: t => `Who discovered (or proposed) the ${t}?`, rq: a => `${a} is known for which discovery?` });
pairQs("I3", I3B, { q: t => `The ${t} is credited to:` });
pairQs("I4", I4, { q: t => `Who discovered (or proposed) the ${t}?`, rq: a => `${a} is known for discovering the:` });
pairQs("I5", I5, { q: t => `The ${t} is credited to:` });
pairQs("I5", I5V, { q: t => `Deficiency of ${t} causes:`, rq: a => `${a} is caused by the lack of:`, extra: ["Goitre"] });
pairQs("I5", I5F, { q: t => `In which year: ${t}?` });
pairQs("I6", I6, { q: t => `Who gave this law or principle: “${t}”?` });

QB.push(
["I3","Which was the first subatomic particle to be discovered?",["Electron","Proton","Neutron","Positron"],"J. J. Thomson, 1897.","p"],
["I3","The neutron carries:",["No charge","A positive charge","A negative charge","Half the charge of an electron"],"That is why it was found last (1932).","p"],
["I3","Who is the only person to win Nobel Prizes in two different sciences?",["Marie Curie","Linus Pauling","Albert Einstein","Ernest Rutherford"],"Physics 1903 and Chemistry 1911. (Pauling's second Nobel was for Peace.)","p"],
["I3","The first Nobel Prize in Physics (1901) went to the discoverer of:",["X-rays","The electron","Radioactivity","The neutron"],"Wilhelm Röntgen.",""],
["I3","Einstein received the 1921 Nobel Prize in Physics for explaining the:",["Photoelectric effect","Theory of relativity","Mass–energy equation","Brownian motion"],"Not for relativity, as many think.","p"],
["I3","Rutherford's gold-foil experiment showed that an atom has:",["A small, dense, positive nucleus","No empty space","Electrons stuck in a positive pudding","Neutrons in orbits"],"1911 — most of the atom is empty space.",""],
["I4","Who is known as the 'Father of Genetics'?",["Gregor Mendel","Charles Darwin","Hugo de Vries","Thomas Hunt Morgan"],"For his pea-plant experiments (1866).","p"],
["I4","Whose X-ray photographs of DNA helped Watson and Crick?",["Rosalind Franklin","Marie Curie","Barbara McClintock","Dorothy Hodgkin"],"Her 'Photo 51' showed the helix shape.",""],
["I4","Which blood group is called the universal donor?",["O","AB","A","B"],"O negative can be given in emergencies to most people.","p"],
["I4","Darwin's book 'On the Origin of Species' was published in:",["1859","1809","1901","1953"],"It set out evolution by natural selection.","p"],
["I4","Robert Hooke first saw cells in a slice of:",["Cork","Onion peel","Human cheek","Leaf"],"Described in Micrographia, 1665.","p"],
["I5","Penicillin was discovered from a:",["Fungus (mould)","Bacterium","Virus","Plant root"],"Penicillium notatum.","p"],
["I5","Which disease was the first to be eradicated worldwide?",["Smallpox","Polio","Plague","Measles"],"WHO declared it in 1980.","p"],
["I5","Ronald Ross proved the malaria–mosquito link while working in:",["Secunderabad","Kolkata","Mumbai","Chennai"],"1897. He won the 1902 Nobel Prize in Medicine.","p"],
["I5","Which vitamin is made in our skin in sunlight?",["Vitamin D","Vitamin C","Vitamin A","Vitamin K"],"Its lack causes rickets in children.","p"],
["I5","Vitamin B12 contains which metal?",["Cobalt","Iron","Magnesium","Zinc"],"Cobalamin.","p"],
["I5","Who was the first to perform a human heart transplant?",["Christiaan Barnard","P. Venugopal","Joseph Lister","Robert Edwards"],"Cape Town, South Africa, 1967.","p"],
["I6","Newton's laws of motion were published in his book:",["Principia (1687)","Micrographia (1665)","Opticks (1704)","Dialogue (1632)"],"Philosophiae Naturalis Principia Mathematica.","p"],
["I6","A hydraulic lift works on:",["Pascal's law","Bernoulli's principle","Archimedes' principle","Hooke's law"],"Pressure passes equally through an enclosed liquid.","p"],
["I6","An aeroplane wing gets lift mainly because of:",["Bernoulli's principle","Pascal's law","Newton's law of gravitation","Charles's law"],"Faster air above the wing means lower pressure.","p"],
["I6","A ship floats because of:",["Archimedes' principle","Ohm's law","Pascal's law","Kepler's law"],"It displaces water weighing as much as itself.","p"],
["I6","Inertia is described by Newton's:",["First law of motion","Second law of motion","Third law of motion","Law of gravitation"],"A body stays at rest or in uniform motion unless a force acts.","p"],
["I6","'Every action has an equal and opposite reaction' is Newton's:",["Third law of motion","First law of motion","Second law of motion","Law of cooling"],"Rockets and recoil of a gun work by it.","p"]
);

LASTMOMENT.push(
{t:"Atoms and rays", era:["iv"], rows:[["Electron","J. J. Thomson"],["Nucleus, proton","Rutherford"],["Neutron","Chadwick"],["X-rays","Röntgen"],["Radioactivity","Becquerel"],["Radium","The Curies"],["Periodic table","Mendeleev"],["Oxygen","Priestley"]]},
{t:"Life and medicine", era:["iv"], rows:[["Cell","Robert Hooke"],["Blood groups","Landsteiner"],["DNA helix","Watson and Crick"],["Heredity","Mendel"],["Smallpox vaccine","Jenner"],["Penicillin","Fleming"],["Insulin","Banting and Best"],["Malaria–mosquito","Ronald Ross"]]},
{t:"Laws", era:["iv"], rows:[["Motion, gravity","Newton"],["Buoyancy","Archimedes"],["Fluid pressure","Pascal"],["P × V constant","Boyle"],["V = IR","Ohm"],["Induction","Faraday"],["Fast flow, low pressure","Bernoulli"],["Uncertainty","Heisenberg"]]}
);
TILES.push(["1897","Electron found","iv"],["1928","Penicillin found","iv"],["1953","DNA double helix","iv"],["1687","Newton's Principia","iv"]);
