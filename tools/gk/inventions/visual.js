/* Inventions & Discoveries — the inventions and discoveries on timelines (years read from the lessons' notes), inventors,
   discoverers, instruments and scientists in pictures, units with their namesakes, and a map of the Indian scientists'
   home states (drawn by study-visual.js). place(), rows() and KIT come from applyVisual in tools/workbook/lib.js. */
const yr = s => { const m = String(s).match(/\b(1[0-9]{3}|20[0-2][0-9])\b/); return m ? +m[1] : 0; };
const cap1 = s => s.charAt(0).toUpperCase() + s.slice(1);
const tl = (L, t, title, cap) => ({ k: "tlfig", title, rows: rows(L, t).map(r => [yr(r[2]) || yr(r[0]), cap1(r[0].replace(/ \(.*\)$/, "")) + " — " + r[1], ""]).filter(r => r[0]).sort((a, b) => a[0] - b[0]), cap });

// I1–I2 — inventions on timelines, inventors in pictures
place("I1", "Machines and transport", tl("I1", "Machines and transport", "Machines and transport in time", "From Watt's steam engine (1769) to the Wright brothers' first powered flight (17 December 1903)."),
  KIT.photos("Inventors in pictures", rows("I1", "Machines and transport").slice(0, 10).map(r => [r[1], cap1(r[0].replace(/ \(.*\)$/, ""))]), { wiki: r => ({ "Wright brothers": "Wright brothers" })[r[0]] || r[0] }));
place("I1", "Everyday objects", tl("I1", "Everyday objects", "Everyday inventions in time"));
place("I2", "Communication, electricity", tl("I2", "Communication, electricity", "Communication, electricity and computing in time", "Morse's telegraph (1844), Bell's telephone (1876), Edison's bulb (1879), Marconi's radio (1895), Baird's television (1926)…"),
  KIT.photos("Who connected the world", rows("I2", "Communication, electricity").slice(0, 12).map(r => [r[1], cap1(r[0].replace(/ \(.*\)$/, ""))]), { wiki: r => ({ "Lumiere brothers": "Auguste and Louis Lumière" })[r[0]] || r[0] }));

// I3–I5 — discoveries in time
place("I3", "Physics and space", tl("I3", "Physics and space", "Discoveries in physics and space"));
place("I3", "Chemistry and the elements", tl("I3", "Chemistry and the elements", "Discoveries in chemistry"));
place("I4", "Discoveries in biology", tl("I4", "Discoveries in biology", "Discoveries in biology", "From Hooke's cork cells (1665) to the double helix (1953) and Dolly the sheep (1996)."),
  KIT.photos("Discoverers in pictures", [["Robert Hooke", "Cells, 1665"], ["Antonie van Leeuwenhoek", "Living cells, bacteria"], ["Robert Brown (botanist, born 1773)", "Nucleus, 1831"], ["Gregor Mendel", "Laws of heredity"], ["Karl Landsteiner", "Blood groups"], ["Rosalind Franklin", "DNA X-ray photo"]],
    { name: r => r[0].replace(/ \(.*\)$/, "") }));
place("I5", "Vaccines, medicines", tl("I5", "Vaccines, medicines", "Medicine in time", "Jenner's smallpox vaccine (1796), Pasteur's rabies vaccine (1885), Fleming's penicillin (1928), Salk's polio vaccine (1955)."),
  KIT.photos("Medicine's pioneers", [["Edward Jenner", "Smallpox vaccine"], ["Louis Pasteur", "Rabies vaccine, pasteurisation"], ["Alexander Fleming", "Penicillin"], ["Jonas Salk", "Polio vaccine (injected)"], ["Robert Koch", "TB and cholera germs"], ["Ronald Ross", "Malaria and the mosquito"]]));

// I7 — units and their namesakes
place("I7", "SI units", { k: "cards", title: "Units and their namesakes", rows: rows("I7", "SI units").map(r => [r[0], r[1], r[2].replace(/\. .*$|\.$/, ""), "📏"]) });

// I8 — instruments in pictures
place("I8", "Instruments and what", KIT.photos("Instruments in pictures", rows("I8", "Instruments and").filter(r => /Barometer|Hygrometer|Seismograph|Anemometer|Galvanometer|Lactometer|Hydrometer|Odometer|Sphygmomanometer|Stethoscope|Altimeter|Thermometer/.test(r[0])).map(r => [r[0], r[1]]), { n: 12 }));

// I9 — Indian scientists in pictures
place("I9", "Indian scientists", KIT.photos("Indian scientists in pictures", rows("I9", "Indian scientists").map(r => [r[0], r[1].replace(/ \(.*\)$/, "")]), { n: 16, wiki: r => ({ "Jagadish Chandra Bose": "Jagadish Chandra Bose" })[r[0]] || r[0] }));

// I10 — ancient scholars; 'father of' titles
place("I10", "Ancient Indian scholars", KIT.photos("Ancient scholars in pictures", rows("I10", "Ancient").map(r => [r[0], r[1]]), { wiki: r => ({ "Bhaskaracharya (Bhaskara II)": "Bhāskara II" })[r[0]] || r[0], name: r => r[0].replace(/ \(.*\)$/, "") }));
place("I10", "'Father of", { k: "cards", title: "'Father of …' at a glance", rows: rows("I10", "'Father of").map(r => [r[1], r[0], r[2].replace(/\.$/, ""), "👤"]) });

VISUAL = { mode: true, VIS: { key: "inventions_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
