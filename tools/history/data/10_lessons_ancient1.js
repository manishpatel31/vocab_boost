/* ============================================================
   GROUPS — History is bifurcated into eras; every lesson belongs to one.
   ============================================================ */
const GROUPS = [
  {id:"anc", name:"Ancient India",  hi:"प्राचीन भारत",      note:"Stone Age to Harsha · ~6–8 marks of GS in CGL Tier-1"},
  {id:"med", name:"Medieval India", hi:"मध्यकालीन भारत",    note:"Rajputs to the Marathas · Sultanate + Mughals dominate"},
  {id:"mod", name:"Modern India",   hi:"आधुनिक भारत",       note:"Plassey to 1947 · the single heaviest slice of History"},
  {id:"art", name:"Art & Culture",  hi:"कला एवं संस्कृति",   note:"Dances, music, architecture, painting · 1–2 sure questions"},
  {id:"wld", name:"World & Misc",   hi:"विश्व इतिहास · विविध", note:"Revolutions, wars, travellers, titles and books"}
];

/* ============================================================
   LESSONS
   heat 3 = asked in almost every shift · 2 = asked often · 1 = occasional
   ============================================================ */
const LESSONS = [
/* ---------------------------------------------------------- ANCIENT ---------------------------------------------------------- */
{id:"L1", g:"anc", heat:2, title:"Sources & the Stone Age", hi:"इतिहास के स्रोत · पाषाण काल", blocks:[
  {k:"hot", h:"One question most years, almost always from the <b>same three things</b>: how history is divided, which site gave the first evidence of something (fire, agriculture, burial), and which source is literary vs archaeological. Learn the <i>firsts</i> — SSC asks \"earliest evidence of X was found at …\"."},
  {k:"p", h:"History is studied from <b>sources</b>. <b>Archaeological</b> sources are things you dig up or read off stone — inscriptions, coins, monuments, pottery. <b>Literary</b> sources are written works — the Vedas, Puranas, Sangam texts, and accounts of foreign travellers. Anything before writing is <b>prehistory</b>; the phase with writing we cannot yet read (Harappan) is <b>proto-history</b>; once we can read the script, it is <b>history</b>."},
  {k:"facts", title:"The three words SSC loves", rows:[
    ["Prehistory","No writing at all — Stone Age"],
    ["Proto-history","Writing exists but is undeciphered — Harappan"],
    ["History","Writing exists and is readable — from the Vedic/Mahajanapada age on"],
    ["Epigraphy","Study of inscriptions"],
    ["Numismatics","Study of coins"],
    ["Palaeography","Study of old scripts / writing"],
    ["Archaeology","Study of material remains by excavation"]
  ]},
  {k:"table", title:"Stone Age at a glance", head:["Age","Rough date","Tools","Life"], rows:[
    ["Palaeolithic (Old Stone)","~2 mya – 12,000 BCE","Hand-axe, cleaver, quartzite","Hunting &amp; gathering; nomadic"],
    ["Mesolithic (Middle Stone)","12,000 – 10,000 BCE","Microliths (tiny blades)","Hunting + first animal taming (dog)"],
    ["Neolithic (New Stone)","10,000 – 2,500 BCE","Polished, ground tools; pottery","Farming, herding, settled villages"],
    ["Chalcolithic (Stone–Copper)","2,500 – 700 BCE","Stone + copper","Villages, painted pottery"]
  ]},
  {k:"facts", title:"Firsts — pure marks", rows:[
    ["Earliest evidence of fire","Kurnool caves (Andhra Pradesh)"],
    ["Earliest evidence of agriculture","Lahuradewa (UP) — rice; Mehrgarh (now Pakistan) — wheat/barley"],
    ["Earliest human burial","Bhimbetka region / Mesolithic sites; dog buried with human at Burzahom (Kashmir)"],
    ["Rock paintings","Bhimbetka, MP — UNESCO site, discovered 1957 by V. S. Wakankar"],
    ["First Palaeolithic tool found in India","Pallavaram (Chennai), 1863, by Robert Bruce Foote"],
    ["Pit dwellings","Burzahom, Kashmir"],
    ["Ash mounds","Sanganakallu / Piklihal, Karnataka"],
    ["Oldest Neolithic site (India)","Mehrgarh (Balochistan) — also earliest farming"]
  ]},
  {k:"trick", h:"<b>Age order</b> — <span class=\"mn\">Pa-Me-Ne-Cha</span> = Palaeolithic → Mesolithic → Neolithic → Chalcolithic. Tool size <i>shrinks</i> then life <i>settles</i>: big hand-axe → tiny microlith → polished axe + pot.<br><b>Bruce Foote</b> gave the first tool at <b>Pallavaram</b> — both start with P."},
  {k:"trap", h:"Bhimbetka is <b>rock paintings</b>, not the oldest farming. The oldest <b>farming</b> evidence is Mehrgarh (wheat/barley) and Lahuradewa (rice). And the <b>first metal</b> used by humans was <b>copper</b>, not iron."},
  {k:"facts", title:"Who wrote what (literary sources)", rows:[
    ["Arthashastra","Kautilya / Chanakya — Mauryan statecraft"],
    ["Indica","Megasthenes — Greek envoy at Chandragupta Maurya's court"],
    ["Mudrarakshasa","Vishakhadatta — on Chandragupta's rise"],
    ["Rajatarangini","Kalhana — history of Kashmir"],
    ["Harshacharita","Banabhatta — on Harshavardhana"],
    ["Ashtadhyayi","Panini — Sanskrit grammar"],
    ["Mahabhashya","Patanjali"],
    ["Si-Yu-Ki","Hiuen Tsang (Xuanzang) — \"Records of the Western World\""]
  ]}
], sum:[
  "Prehistory = no writing · Proto-history = undeciphered writing (Harappa) · History = readable writing.",
  "Order: Palaeolithic → Mesolithic → Neolithic → Chalcolithic (Pa-Me-Ne-Cha).",
  "Fire → Kurnool caves. Rice farming → Lahuradewa. Wheat/barley + oldest Neolithic → Mehrgarh. Rock art → Bhimbetka (Wakankar, 1957).",
  "First Palaeolithic tool in India: Pallavaram, 1863, Robert Bruce Foote.",
  "Epigraphy = inscriptions · Numismatics = coins · Palaeography = scripts."
]},

{id:"L2", g:"anc", heat:3, title:"Indus Valley Civilisation", hi:"सिंधु घाटी सभ्यता", blocks:[
  {k:"hot", h:"<b>The single most asked ancient topic.</b> Expect 1–2 questions every CGL shift: site ↔ river, site ↔ discovery (dockyard, great bath, ploughed field, stadium), who excavated it, and the \"which of these is in India / Pakistan\" trap. Memorise the site table cold."},
  {k:"p", h:"Also called the <b>Harappan Civilisation</b> (after the first site found) and the <b>Bronze Age</b> civilisation of India. Discovered in <b>1921</b> by <b>Daya Ram Sahni</b> at Harappa; Mohenjodaro found <b>1922</b> by <b>R. D. Banerji</b>. Mature phase <b>2600–1900 BCE</b>. It belonged to the <b>Bronze Age</b> — copper and bronze were known, <b>iron was not</b>."},
  {k:"table", title:"Site ↔ river ↔ what was found (learn this row by row)", head:["Site","River / place","Famous for"], rows:[
    ["Harappa","Ravi · Pakistan","First site found (1921, Daya Ram Sahni); granaries, coffin burial, R-37 cemetery"],
    ["Mohenjodaro","Indus · Pakistan","<b>Great Bath</b>, Great Granary (largest building), bronze Dancing Girl, Pashupati seal, bearded priest; \"Mound of the Dead\""],
    ["Lothal","Bhogavo · Gujarat","<b>Dockyard</b> — \"Manchester of the Indus\"; rice husk, fire altars, double burial"],
    ["Dholavira","Khadir island · Gujarat","Water reservoirs, <b>stadium</b>, Harappan signboard, three-part town; UNESCO site"],
    ["Kalibangan","Ghaggar · Rajasthan","<b>Ploughed field</b> (earliest), fire altars, camel bones; \"black bangles\""],
    ["Rakhigarhi","Ghaggar · Haryana","<b>Largest Harappan site in India</b>"],
    ["Banawali","Haryana","Toy plough, barley, lacks the usual grid"],
    ["Chanhudaro","Sindh · Pakistan","<b>Bead-making</b> factory; only site without a citadel; cat chased by dog footprints"],
    ["Surkotada","Gujarat","First true <b>horse bones</b>"],
    ["Ropar / Rupnagar","Sutlej · Punjab","First site excavated after Independence; dog buried with human"],
    ["Alamgirpur","Hindon · UP","<b>Easternmost</b> site"],
    ["Sutkagendor","Dasht · Pakistan","<b>Westernmost</b> site"],
    ["Daimabad","Pravara · Maharashtra","<b>Southernmost</b> site; bronze chariot"],
    ["Manda","Chenab · J&amp;K","<b>Northernmost</b> site"]
  ]},
  {k:"trick", h:"<b>Corners of the Harappan map</b> — <span class=\"mn\">MAD-S</span>: <b>M</b>anda = North, <b>A</b>lamgirpur = East, <b>D</b>aimabad = South, <b>S</b>utkagendor = West.<br><b>Lothal = dock</b> (both have an \"L/o\" boat feel: <i>Lothal has the Lo-ading dock</i>). <b>Dholavira = \"Dho\" = water</b> → reservoirs. <b>Kalibangan = Kal (plough) + bangan</b> → ploughed field."},
  {k:"facts", title:"Town planning & society", rows:[
    ["Layout","<b>Grid pattern</b>, streets cutting at right angles; citadel (west, upper) + lower town (east)"],
    ["Bricks","Burnt mud bricks in ratio <b>4:2:1</b>, laid in English bond"],
    ["Drainage","Covered underground drains with manholes — the civilisation's hallmark"],
    ["Weights","Binary and decimal: 1, 2, 4, 8, 16, 32 … (16 and its multiples); chert cubes"],
    ["Script","<b>Boustrophedon</b> — right to left, then left to right; pictographic; still undeciphered"],
    ["Seals","Mostly <b>steatite</b>; commonest animal on seals = <b>humped bull / unicorn</b>; <b>no horse</b> on seals"],
    ["Metals known","Copper, bronze, gold, silver, lead, tin — <b>no iron</b>"],
    ["Crops","Wheat, barley, cotton (first in the world — Greeks called it <i>Sindon</i>), peas; rice only at Lothal &amp; Rangpur"],
    ["Animals","Bull, buffalo, elephant, rhino, dog, cat — <b>lion and horse absent</b> from seals"],
    ["Worship","Mother Goddess, Pashupati (proto-Shiva), pipal tree, humped bull; <b>no temple found</b>"],
    ["Great Bath","Mohenjodaro — 11.88 × 7.01 m, 2.43 m deep; bitumen-lined"],
    ["Port towns","Lothal, Sutkagendor, Balakot, Allahdino, Kuntasi, Rangpur"]
  ]},
  {k:"trap", h:"<b>Horse</b>: bones at Surkotada, but <b>no horse on any seal</b> — a classic trick option. <b>Iron was unknown</b> (it is a Bronze Age culture). <b>No temple</b> has been found anywhere. The <b>largest site overall</b> is Mohenjodaro; the <b>largest in India</b> is Rakhigarhi."},
  {k:"tl", title:"Who found what", rows:[
    ["1921","Harappa — Daya Ram Sahni (under John Marshall, ASI head)"],
    ["1922","Mohenjodaro — R. D. Banerji"],
    ["1931","Chanhudaro — N. G. Majumdar"],
    ["1953","Kalibangan — A. Ghosh; Lothal — S. R. Rao (1955)"],
    ["1967–68","Dholavira — J. P. Joshi; excavated by R. S. Bisht (1990)"],
    ["1963","Rakhigarhi — Suraj Bhan"]
  ]},
  {k:"p", h:"<b>Decline (1900 BCE)</b> — no single accepted reason. Theories: Aryan invasion (Wheeler), floods (Marshall, S. R. Rao), drying of the Ghaggar-Hakra, earthquake (Dales), deforestation and ecological change (Fairservis)."}
], sum:[
  "Harappa 1921 (Daya Ram Sahni) · Mohenjodaro 1922 (R. D. Banerji) · ASI head John Marshall. Mature phase 2600–1900 BCE.",
  "Great Bath + Dancing Girl + Pashupati seal = Mohenjodaro. Dockyard = Lothal. Reservoirs + stadium = Dholavira. Ploughed field = Kalibangan. Bead factory = Chanhudaro. Horse bones = Surkotada.",
  "Corners MAD-S: Manda N, Alamgirpur E, Daimabad S, Sutkagendor W. Largest site = Mohenjodaro; largest in India = Rakhigarhi.",
  "Bricks 4:2:1 · grid streets · covered drains · weights in multiples of 16 · boustrophedon script, undeciphered.",
  "Knew copper/bronze, first cotton growers; did NOT know iron; no horse on seals; no temple found."
]},

{id:"L3", g:"anc", heat:3, title:"Vedic Age", hi:"वैदिक काल", blocks:[
  {k:"hot", h:"Asked every year: which Veda has what, the four <b>Vedangas/Upavedas</b>, \"Satyameva Jayate\" and other mottos' source, river names (Sindhu most mentioned, Saraswati most holy), and Early vs Later Vedic differences."},
  {k:"p", h:"<b>Early (Rig) Vedic 1500–1000 BCE</b>, <b>Later Vedic 1000–600 BCE</b>. The Aryans' home is debated — Max Müller said Central Asia, Bal Gangadhar Tilak said the Arctic, Dayanand Saraswati said Tibet, A. C. Das said the Sapta-Sindhu region itself."},
  {k:"table", title:"The four Vedas — one line each", head:["Veda","What it is","Keys"], rows:[
    ["<b>Rigveda</b>","1,028 hymns in 10 mandalas; oldest text in the world still in use","Mandalas II–VII oldest; IX = Soma; X = <b>Purusha Sukta</b> (varna origin) and <b>Nadi Sukta</b> (rivers); <b>Gayatri Mantra</b> in III. Priest: <b>Hotri</b>"],
    ["<b>Yajurveda</b>","Rituals — how to perform the sacrifice; prose + verse","Shukla (white) &amp; Krishna (black) recensions. Priest: <b>Adhvaryu</b>"],
    ["<b>Samaveda</b>","Melodies for the hymns — <b>root of Indian music</b>","Priest: <b>Udgatri</b>"],
    ["<b>Atharvaveda</b>","Charms, spells, medicine, magic — the \"people's Veda\"","Latest; also called Brahmaveda. Priest: <b>Brahma</b>"]
  ]},
  {k:"trick", h:"<b>Priest ↔ Veda</b> — <span class=\"mn\">HAUB</span> in Veda order R-Y-S-A: <b>H</b>otri (Rig), <b>A</b>dhvaryu (Yajur), <b>U</b>dgatri (Sama), <b>B</b>rahma (Atharva).<br><b>Sa</b>maveda → <b>Sa</b>ngeet (music). <b>Atharva</b> → <b>a</b>ushadhi (medicine/magic)."},
  {k:"facts", title:"Mottos and where they come from", rows:[
    ["Satyameva Jayate (India)","<b>Mundaka Upanishad</b>"],
    ["Yogakshema Samriddhi (LIC)","—; LIC motto <i>Yogakshemam Vahamyaham</i> — Bhagavad Gita"],
    ["Shramev Jayate","Labour Ministry"],
    ["Dhyeyo Mahadhyeyah / \"Sarve Bhavantu Sukhinah\"","Upanishads"],
    ["Asato Ma Sadgamaya","Brihadaranyaka Upanishad"],
    ["Vasudhaiva Kutumbakam","Maha Upanishad"],
    ["\"Charaiveti\" (keep moving)","Aitareya Brahmana"]
  ]},
  {k:"facts", title:"Vedic literature family", rows:[
    ["Brahmanas","Prose explanations of the rituals of each Veda"],
    ["Aranyakas","\"Forest books\" — philosophy of sacrifice"],
    ["Upanishads","Philosophy; 108 in all, <b>13 principal</b>; source of \"Satyameva Jayate\""],
    ["Vedangas (6)","Shiksha, Kalpa, Vyakarana, Nirukta, Chhanda, Jyotisha"],
    ["Upavedas (4)","Ayurveda (medicine), Dhanurveda (archery), Gandharvaveda (music), Shilpaveda/Sthapatyaveda (architecture)"],
    ["Six schools (Shad-darshana)","Samkhya (Kapila), Yoga (Patanjali), Nyaya (Gautama), Vaisheshika (Kanada), Mimamsa (Jaimini), Vedanta (Badarayana/Shankara)"],
    ["Epics","Ramayana (Valmiki) · Mahabharata (Ved Vyasa) — longest poem in the world"]
  ]},
  {k:"table", title:"Rivers in the Rigveda", head:["Vedic name","Modern name"], rows:[
    ["Sindhu","Indus — <b>most mentioned</b>"],
    ["Saraswati","Ghaggar-Hakra — <b>holiest / Naditama</b>"],
    ["Vitasta","Jhelum"],["Askini / Chandrabhaga","Chenab"],["Parushni / Iravati","Ravi"],
    ["Vipasha","Beas"],["Shutudri","Sutlej"],["Drishadvati","Chautang / Ghaggar branch"],["Kubha","Kabul"],["Suvastu","Swat"]
  ]},
  {k:"trick", h:"<b>Five Punjab rivers, west → east</b> — <span class=\"mn\">Ji-Che-Ra-Be-Sa</span> (Jhelum, Chenab, Ravi, Beas, Sutlej) and their Vedic names in the same order: <span class=\"mn\">Vi-As-Pa-Vi-Shu</span> (Vitasta, Askini, Parushni, Vipasha, Shutudri)."},
  {k:"table", title:"Early vs Later Vedic — the comparison SSC asks", head:["Point","Early (Rig) Vedic","Later Vedic"], rows:[
    ["Area","Sapta-Sindhu, Punjab–Haryana","Doab — Kuru, Panchala, Kosala, Videha; eastward"],
    ["Economy","Pastoral; cattle = wealth (<i>gavishti</i> = war for cows)","Agriculture dominant; iron (<i>shyama/krishna ayas</i>) ploughs"],
    ["Chief god","<b>Indra</b> (250 hymns), then Agni (200), Varuna","<b>Prajapati</b>, then Rudra and Vishnu rise; Indra, Agni fall"],
    ["Politics","Tribal chief (<i>rajan</i>); assemblies <b>Sabha, Samiti, Vidatha, Gana</b>","Large kingdoms; big sacrifices — Rajasuya, Ashvamedha, Vajapeya; Sabha &amp; Samiti decline, Vidatha vanishes"],
    ["Society","Varna by occupation, flexible; women attended Sabha","Rigid 4 varnas; <b>four ashramas</b> appear; women's position falls"],
    ["Pottery","Ochre Coloured Pottery","<b>Painted Grey Ware</b> then Northern Black Polished Ware"]
  ]},
  {k:"trap", h:"<b>Indra</b> is the Rigveda's chief god — Vishnu and Shiva become major only later. <b>Vidatha</b> is the <i>oldest</i> assembly and the only one where women took part; it is the one that <b>disappears</b> in the Later Vedic age. The Gayatri Mantra is in Mandala <b>III</b> (dedicated to Savitri/Savitra), not Mandala I."}
], sum:[
  "Rigveda: 1,028 hymns, 10 mandalas; Gayatri Mantra in Mandala III; Purusha Sukta (varna) and Nadi Sukta in Mandala X.",
  "Priests H-A-U-B: Hotri (Rig), Adhvaryu (Yajur), Udgatri (Sama), Brahma (Atharva). Samaveda = music; Atharvaveda = medicine/magic.",
  "Satyameva Jayate → Mundaka Upanishad. 108 Upanishads, 13 principal.",
  "Sindhu = most mentioned river; Saraswati = holiest (Naditama). Vedic names Vi-As-Pa-Vi-Shu = Jhelum, Chenab, Ravi, Beas, Sutlej.",
  "Early Vedic: Indra, cattle wealth, Sabha–Samiti–Vidatha. Later Vedic: Prajapati, iron ploughs, big sacrifices, Vidatha gone, 4 ashramas."
]},

{id:"L4", g:"anc", heat:3, title:"Mahajanapadas, Buddhism & Jainism", hi:"महाजनपद · बौद्ध एवं जैन धर्म", blocks:[
  {k:"hot", h:"Two or three questions a shift between the two religions: Buddhist councils (year–place–king–president), the Four Noble Truths, Jain Tirthankaras and their symbols, Mahavira's five vows, and which text belongs to which religion."},
  {k:"facts", title:"16 Mahajanapadas — only what is asked", rows:[
    ["Source","<b>Anguttara Nikaya</b> (Buddhist) lists 16; Jain <i>Bhagavati Sutra</i> also lists them"],
    ["The four that fought for supremacy","Magadha, Kosala, Avanti, Vatsa"],
    ["Winner","<b>Magadha</b> — iron ore at Rajgir, elephants, two capitals (Rajgriha then Pataliputra)"],
    ["Only republics (gana-sangha)","<b>Vajji</b> (Vaishali) and <b>Malla</b>"],
    ["Dynasties of Magadha in order","Haryanka → Shishunaga → Nanda → Maurya"],
    ["Haryanka","Bimbisara (capital Rajgriha; contemporary of Buddha &amp; Mahavira) → Ajatashatru (founded Pataliputra's fort) → Udayin (shifted capital to <b>Pataliputra</b>)"],
    ["Shishunaga","Shishunaga destroyed Avanti; Kalashoka held the <b>2nd Buddhist Council</b>"],
    ["Nanda","Mahapadma Nanda \"Ugrasena\"; last ruler <b>Dhanananda</b>, beaten by Chandragupta Maurya"]
  ]},
  {k:"table", title:"Buddhism vs Jainism — the compare question", head:["Point","Buddhism","Jainism"], rows:[
    ["Founder","<b>Gautama Buddha</b> (563–483 BCE)","<b>Vardhamana Mahavira</b> — 24th Tirthankara (540–468 BCE)"],
    ["Born at","<b>Lumbini</b> (Nepal); mother Mahamaya, father Suddhodana (Shakya clan)","<b>Kundagrama</b>, Vaishali; father Siddhartha, mother Trishala (Jnatrika clan)"],
    ["Enlightenment","<b>Bodh Gaya</b> under a pipal tree, age 35 — \"Nirvana/Bodhi\"","<b>Jrimbhikagrama</b> on the Rijupalika river, age 42 — \"Kaivalya\""],
    ["First sermon","<b>Sarnath</b> (Deer Park) — <i>Dharmachakra Pravartana</i>","Preached in <b>Prakrit</b> (Ardha-Magadhi)"],
    ["Death","<b>Kushinagar</b> (UP), age 80 — <i>Mahaparinirvana</i>","<b>Pavapuri</b> (Bihar), age 72"],
    ["Language","<b>Pali</b>","<b>Prakrit</b>"],
    ["Goal","Nirvana — end suffering, Middle Path","Kaivalya — free the soul; extreme non-violence"],
    ["Sects","<b>Mahayana</b> (idol worship, Sanskrit, Bodhisattva) · <b>Hinayana/Theravada</b> (Pali) · Vajrayana (Tantric, Tibet)","<b>Digambara</b> (naked, Bhadrabahu) · <b>Svetambara</b> (white-clad, Sthulabhadra)"],
    ["Key texts","<b>Tripitaka</b>: Vinaya, Sutta, Abhidhamma (all in Pali); Jatakas; Milindapanho","<b>Agamas / 12 Angas</b>; Kalpasutra (Bhadrabahu); Acharanga Sutra"],
    ["Royal patrons","Bimbisara, Ajatashatru, <b>Ashoka</b>, Kanishka, Harsha","Bimbisara, <b>Chandragupta Maurya</b>, Kharavela, Amoghavarsha, Kumarapala"]
  ]},
  {k:"facts", title:"Buddhism — the doctrine", rows:[
    ["Four Noble Truths","(1) <i>Dukkha</i> — there is suffering (2) <i>Dukkha Samudaya</i> — it has a cause, desire (3) <i>Dukkha Nirodha</i> — it can be ended (4) <i>Dukkha Nirodha Marga</i> — the Eightfold Path ends it"],
    ["Eightfold Path (Ashtangika Marga)","Right view, intention, speech, action, livelihood, effort, mindfulness, concentration"],
    ["Triratna","<b>Buddha, Dhamma, Sangha</b>"],
    ["Five symbols of Buddha's life","Lotus &amp; bull = birth · <b>Horse = renunciation</b> (Mahabhinishkramana) · <b>Bodhi tree = enlightenment</b> · <b>Wheel = first sermon</b> · <b>Stupa = death</b>"],
    ["First disciples","Sariputta &amp; Moggallana; first woman: <b>Mahaprajapati Gotami</b> (his aunt), through Ananda"],
    ["Teachers before enlightenment","Alara Kalama, Ramaputta Udraka"],
    ["Horse / charioteer","Horse <b>Kanthaka</b>; charioteer <b>Channa</b>"]
  ]},
  {k:"table", title:"Four Buddhist Councils — year, place, king, president", head:["#","Year","Place","King","President / result"], rows:[
    ["1st","483 BCE","<b>Rajgriha</b> (Sattapanni cave)","Ajatashatru","<b>Mahakassapa</b> — Vinaya &amp; Sutta Pitaka compiled"],
    ["2nd","383 BCE","<b>Vaishali</b>","Kalashoka","Sabakami — split into Sthaviravadin &amp; Mahasanghika"],
    ["3rd","250 BCE","<b>Pataliputra</b>","<b>Ashoka</b>","<b>Moggaliputta Tissa</b> — Abhidhamma Pitaka added; missions sent abroad"],
    ["4th","~72 CE","<b>Kundalvana, Kashmir</b>","<b>Kanishka</b>","<b>Vasumitra</b> (vice: Ashvaghosha) — final split into Mahayana &amp; Hinayana; Sanskrit adopted"]
  ]},
  {k:"trick", h:"<b>Councils</b> — <span class=\"mn\">Ra-Vai-Pa-Ka</span> (Rajgriha, Vaishali, Pataliputra, Kashmir) under <span class=\"mn\">A-Ka-A-Ka</span> (Ajatashatru, Kalashoka, Ashoka, Kanishka).<br><b>Presidents</b>: <span class=\"mn\">Ma-Sa-Mo-Va</span> — Mahakassapa, Sabakami, Moggaliputta Tissa, Vasumitra."},
  {k:"facts", title:"Jainism — the doctrine", rows:[
    ["Five vows","<b>Ahimsa</b> (non-violence), <b>Satya</b> (truth), <b>Asteya</b> (non-stealing), <b>Aparigraha</b> (non-possession), <b>Brahmacharya</b> (celibacy) — the 5th added by <b>Mahavira</b>; first four by Parshvanatha"],
    ["Three jewels (Triratna)","Right faith, right knowledge, right conduct"],
    ["Core ideas","<b>Syadvada / Anekantavada</b> — many-sidedness of truth; <b>Kaivalya</b>; <b>Sallekhana</b> (fast unto death)"],
    ["1st Tirthankara","<b>Rishabhanatha / Adinath</b> — symbol bull; mentioned in the Rigveda"],
    ["23rd Tirthankara","<b>Parshvanatha</b> — symbol snake"],
    ["24th Tirthankara","<b>Mahavira</b> — symbol <b>lion</b>"],
    ["22nd Tirthankara","Neminatha — symbol conch"],
    ["Jain councils","1st: Pataliputra (~300 BCE, Chandragupta Maurya, Sthulabhadra) → Digambara/Svetambara split. 2nd: <b>Valabhi</b> (512 CE, Devardhi Kshamasramana) — Agamas written down"],
    ["Mahavira's first disciple","Jamali (also his son-in-law); 11 Ganadharas"]
  ]},
  {k:"trap", h:"Jainism was <b>not founded</b> by Mahavira — he is the <b>24th</b> Tirthankara and a <i>reformer</i>; Rishabhanatha was the first. Buddha attained enlightenment at <b>Bodh Gaya</b> but gave his <b>first sermon at Sarnath</b> — don't swap them. Buddha was born at <b>Lumbini</b>, died at <b>Kushinagar</b>."},
  {k:"facts", title:"Other sects of the time", rows:[
    ["Ajivika","<b>Makkhali Gosala</b> — strict fatalism (niyati)"],
    ["Charvaka / Lokayata","Materialism — <b>Brihaspati</b>; \"eat, drink, be merry\""],
    ["Ajnana","Sanjaya Belatthiputta — agnosticism"],
    ["Akriyavada","Purana Kassapa"]
  ]}
], sum:[
  "Buddha: born Lumbini, enlightened Bodh Gaya, first sermon Sarnath, died Kushinagar. Language Pali; Tripitaka = Vinaya + Sutta + Abhidhamma.",
  "Four Noble Truths + Eightfold Path + Triratna (Buddha, Dhamma, Sangha). Symbols: horse = renunciation, bodhi tree = enlightenment, wheel = first sermon, stupa = death.",
  "Councils Ra-Vai-Pa-Ka under Ajatashatru, Kalashoka, Ashoka, Kanishka; presidents Mahakassapa, Sabakami, Moggaliputta Tissa, Vasumitra. 4th = Mahayana–Hinayana split.",
  "Mahavira = 24th Tirthankara (symbol lion), born Kundagrama, died Pavapuri; language Prakrit; added the 5th vow Brahmacharya.",
  "Magadha dynasties: Haryanka → Shishunaga → Nanda → Maurya. Vajji and Malla were the republics."
]}
];
