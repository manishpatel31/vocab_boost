/* Science & Technology in India Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js. */
const ST_DECKS = [
  { id: "bodies", ico: "🏛️", title: "Who runs it", sub: "DST, CSIR, DAE, ICMR, DRDO…", lesson: "ST1", q: "Who does this work under:", pairs: labRows("ST1", 0) },
  { id: "csir", ico: "🧪", title: "CSIR lab → city", sub: "NAL, IICT, CBRI, NML…", lesson: "ST2", q: "Which city has CSIR's", rq: "Which CSIR lab is in", pairs: labRows("ST2", 0) },
  { id: "nucbody", ico: "⚛️", title: "Nuclear bodies", sub: "BARC, NPCIL, BHAVINI, AERB…", lesson: "ST3", q: "What does this body do:", pairs: labRows("ST3", 0) },
  { id: "plants", ico: "🏭", title: "Nuclear plant → state", sub: "Tarapur to Kudankulam", lesson: "ST4", q: "In which state is", pairs: labRows("ST4", 0).concat(labRows("ST4", 1)) },
  { id: "partners", ico: "🤝", title: "Plant → partner", sub: "USA, Canada, Russia, France", lesson: "ST4", q: "Which country partnered", pairs: labRows("ST4", 2) },
  { id: "vaccines", ico: "💉", title: "Vaccine → maker", sub: "Covaxin, ZyCoV-D, Cervavac…", lesson: "ST5", q: "Who makes", pairs: labRows("ST5", 0) },
  { id: "firsts", ico: "🧬", title: "Biotech firsts", sub: "NexCAR19, BIRSA 101, Kamala rice…", lesson: "ST5", q: "Who developed", pairs: labRows("ST5", 1) },
  { id: "missions", ico: "🚀", title: "Mission → year", sub: "Quantum, chips, AI, hydrogen…", lesson: "ST6", q: "Approved in which year:", pairs: labRows("ST6", 0) },
  { id: "ministry", ico: "🗂️", title: "Mission → ministry", sub: "DST, MeitY, MNRE, MoES", lesson: "ST6", q: "Which ministry runs the", pairs: labRows("ST6", 1) },
  { id: "digital", ico: "📱", title: "Platform → year", sub: "Aadhaar, UPI, ONDC, Bhashini…", lesson: "ST7", q: "Launched in which year:", pairs: labRows("ST7", 0) },
  { id: "laws", ico: "⚖️", title: "Digital laws → year", sub: "IT Act, CERT-In, DPDP…", lesson: "ST7", q: "Which year:", pairs: labRows("ST7", 1) },
  { id: "stations", ico: "🧊", title: "Polar stations", sub: "Maitri, Bharati, Himadri…", lesson: "ST8", q: "Where is", rq: "Which station is at", pairs: labRows("ST8", 0) },
  { id: "earth", ico: "🌊", title: "Earth-science bodies", sub: "IMD, NCPOR, INCOIS, NIOT…", lesson: "ST8", q: "Which city has the", pairs: labRows("ST8", 1) },
  { id: "prizes", ico: "🏅", title: "Prize → given by", sub: "Infosys, Kalinga, Fields, Abel…", lesson: "ST9", q: "Who gives the", pairs: labRows("ST9", 1) },
  { id: "people", ico: "👩‍🔬", title: "Scientist → field", sub: "Narlikar, Kang, Kalaiselvi…", lesson: "ST9", q: "Which field is linked to", pairs: labRows("ST9", 2) },
  { id: "fullform", ico: "🔤", title: "Full forms", sub: "LED, LiDAR, NavIC, RFID…", lesson: "ST10", q: "Full form of", rq: "Short form of", pairs: labRows("ST10", 0) },
  { id: "terms", ico: "💡", title: "Term → meaning", sub: "Graphene, qubit, 3D printing…", lesson: "ST10", q: "What is", rq: "Which term means", pairs: labRows("ST10", 1) }
];
const LAB_CONF = {
  title: "Science Lab", blurb: "Match the body, the mission, the plant and the term — sixty seconds a deck. Every right answer earns XP.",
  ranks: [[0,"Lab Assistant","🧫"],[60,"Research Scholar","📓"],[200,"Scientist","🔬"],[450,"Senior Scientist","🧬"],[900,"Director-General","🏛️"]],
  decks: ST_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Everything at once — the real exam feel", q: "", make: () => labMix(ST_DECKS), list: () => ST_DECKS.flatMap(d => d.pairs) }]),
  match: { deck: "fullform", title: "Pair each short form with its full form", sub: "Flip cards — LED, LiDAR, NavIC, RFID and more" }
};
