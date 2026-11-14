/* Appointments — the people in the top posts, the service chiefs, the regulators and the firsts in pictures, the CDS line in
   time (drawn by study-visual.js). place(), rows() and KIT come from tools/workbook/apply-hand.js. */
const name = s => String(s).replace(/^(Gen|Adm|Air Chief Marshal|Lt Gen|Vice Adm|Dr|Justice)\.? /g, "").replace(/ \(.*\)$| — .*$/, "").trim();
const pics = (L, t, title, f) => KIT.photos(title, rows(L, t).filter(r => r[1] && !/vacant|—/.test(r[1])).map(r => [name(r[1]), r[0]]).filter(f || (() => true)), { n: 12 });

place("L5", "Who runs the government", pics("L5", "Who runs the government", "Who runs the government"));
place("L6", "Service chiefs", pics("L6", "Service chiefs", "The service chiefs"));
place("L8", "Regulators", KIT.photos("Money regulators", rows("L8", "Regulators").map(r => [name(r[1].replace(/^Governor |^Chairman |^Chairperson /, "")), r[0]]).filter(r => !/,|Deputy/.test(r[1]) && !/,/.test(r[0])), { n: 8 }));
place("L12", "International organisations", pics("L12", "International organisations", "Heads of world bodies"));
place("L13", "First women", KIT.photos("Firsts in pictures", rows("L13", "First women").map(r => [name(r[1]), r[0]]), { n: 12 }));

// ---- memory tricks for the lessons that had none ----
place("L8", "Regulators", { k: "trick", h: "<b>R – S – I – P, in order of age</b>: <b>R</b>BI 1935 → <b>S</b>EBI 1992 → <b>I</b>RDAI 1999 → <b>P</b>FRDA 2013 (the years they got statutory status; RBI was nationalised in 1949). SEBI has two dates: set up in 1988, given its Act in 1992. Money market and banks → RBI; shares → SEBI; insurance → IRDAI; pensions → PFRDA." });

// ---- added: the three kinds of bodies ----
place("L1", "Three kinds of bodies", { k: "cards", title: "Three kinds of bodies: who made it?", rows: rows("L1", "Three kinds of bodies").map((r, i) => [r[0], "made by: " + r[1].toLowerCase(), r[2].split(", ").slice(0, 5).join(" · "), ["📜", "⚖️", "🏛️"][i] || ""]) });

VISUAL = { mode: true, VIS: { key: "appointments_photos_v1", word: "person", words: "people", search: "", quiz: "person", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
