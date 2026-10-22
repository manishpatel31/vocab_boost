/* Music & Musical Instruments — photos, the four classes of instruments, a raga clock, the gharana map, timelines and the folk-instrument map
   (drawn by study-visual.js). place(lesson, where, ...blocks) and rows(lesson, table title) come from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];

// M1 — the four classes, as cards with a drawn icon and every instrument of the class
const cls = rows("M1", "Instrument → class");
const ICON = {
  Tata: '<path d="M6 30 L34 10" stroke-width="3"/><path d="M8 33 L37 13 M4 27 L32 7" stroke-width="1.2"/><circle cx="9" cy="31" r="6" fill="none" stroke-width="2"/>',
  Sushira: '<rect x="4" y="17" width="32" height="7" rx="3.5" fill="none" stroke-width="2.4"/><circle cx="14" cy="20.5" r="1.6"/><circle cx="20" cy="20.5" r="1.6"/><circle cx="26" cy="20.5" r="1.6"/><path d="M36 14 q4 6 0 13" fill="none" stroke-width="1.6"/>',
  Avanaddha: '<ellipse cx="20" cy="12" rx="13" ry="4.5" fill="none" stroke-width="2.4"/><path d="M7 12 v16 q13 8 26 0 v-16" fill="none" stroke-width="2.4"/><path d="M12 15 l4 13 M28 15 l-4 13" stroke-width="1.2"/>',
  Ghana: '<ellipse cx="13" cy="22" rx="9" ry="3.5" fill="none" stroke-width="2.4"/><ellipse cx="27" cy="16" rx="9" ry="3.5" fill="none" stroke-width="2.4"/><path d="M13 18.5 v-4 M27 12.5 v-4" stroke-width="2"/><path d="M33 26 l4 3 M30 29 l2 4" stroke-width="1.4"/>' };
const WEST = Object.fromEntries(rows("M1", "The four classes").map(r => [r[0].split(" ")[0], [r[1], r[2]]]));
place("M1", "Instrument → class", { k: "info", title: "The four classes at a glance",
  html: '<div class="fam">' + ["Tata", "Sushira", "Avanaddha", "Ghana"].map(c => { const list = cls.filter(r => r[1].startsWith(c)), w = WEST[c] || ["", ""];
    return `<div><span class="ic" aria-hidden="true"><svg viewBox="0 0 40 40" width="40" height="40" fill="var(--accent)" stroke="var(--accent)" stroke-linecap="round">${ICON[c]}</svg></span>` +
      `<b>${c}</b><span class="n">${list.length} in this lesson · ${w[0]}</span><small>${w[1]}</small><small><b style="font-size:12.5px">${list.map(r => r[0].replace(/ \(.*\)$/, "")).join(" · ")}</b></small></div>`; }).join("") + "</div>",
  cap: "From the Natya Shastra: Tata is string, Sushira is breath, Avanaddha is a covered (skin) drum and Ghana is a solid body that is struck." });
place("M1", "story", { k: "photos", title: "Instruments in pictures", items: [
  P("Sitar", "Sitar", "Tata · plucked"), P("Sarod", "Sarod", "Tata · fretless"), P("Santoor", "Santoor", "Tata · struck with mallets"), P("Sarangi", "Sarangi", "Tata · bowed"),
  P("Saraswati_veena", "Saraswati veena", "Tata · Carnatic"), P("Bansuri", "Bansuri", "Sushira · bamboo flute"), P("Shehnai", "Shehnai", "Sushira · double reed"),
  P("Nadaswaram", "Nadaswaram", "Sushira · temple pipe"), P("Tabla", "Tabla", "Avanaddha · dayan and bayan"), P("Mridangam", "Mridangam", "Avanaddha · Carnatic drum"),
  P("Pakhawaj", "Pakhawaj", "Avanaddha · Dhrupad"), P("Ghatam", "Ghatam", "Ghana · clay pot"), P("Jal_tarang", "Jaltarang", "Ghana · bowls of water"), P("Manjira", "Manjira", "Ghana · cymbals")] });

// M2 / M3 — the maestros
place("M2", "story", { k: "photos", title: "String maestros in pictures", items: [
  P("Ravi_Shankar", "Ravi Shankar", "Sitar · Bharat Ratna 1999"), P("Vilayat_Khan", "Vilayat Khan", "Sitar · Imdadkhani"), P("Amjad_Ali_Khan", "Amjad Ali Khan", "Sarod · 'Sarod Samrat'"),
  P("Ali_Akbar_Khan", "Ali Akbar Khan", "Sarod · Maihar"), P("Allauddin_Khan", "Allauddin Khan", "Sarod · founder of Maihar"), P("Shivkumar_Sharma", "Shivkumar Sharma", "Santoor"),
  P("L._Subramaniam", "L. Subramaniam", "Violin"), P("N._Rajam", "N. Rajam", "Hindustani violin"), P("Ram_Narayan", "Ram Narayan", "Sarangi"),
  P("Vishwa_Mohan_Bhatt", "Vishwa Mohan Bhatt", "Mohan veena · Grammy 1994"), P("Annapurna_Devi", "Annapurna Devi", "Surbahar"), P("U._Srinivas", "U. Srinivas", "Mandolin")] });
place("M3", "story", { k: "photos", title: "Wind and percussion maestros in pictures", items: [
  P("Bismillah_Khan", "Bismillah Khan", "Shehnai · Bharat Ratna 2001"), P("Hariprasad_Chaurasia", "Hariprasad Chaurasia", "Flute"), P("Pannalal_Ghosh", "Pannalal Ghosh", "Flute"),
  P("Zakir_Hussain_(musician)", "Zakir Hussain", "Tabla"), P("Alla_Rakha", "Alla Rakha", "Tabla · Punjab gharana"), P("Kishan_Maharaj", "Kishan Maharaj", "Tabla · Benares"),
  P("Palghat_Mani_Iyer", "Palghat Mani Iyer", "Mridangam"), P("Vikku_Vinayakram", "Vikku Vinayakram", "Ghatam"), P("Kadri_Gopalnath", "Kadri Gopalnath", "Saxophone")] });

// M3 — how many maestros per instrument
const tally = (t, L) => { const n = {}; rows(L, t).forEach(r => { n[r[1]] = (n[r[1]] || 0) + 1; }); return Object.entries(n); };
place("M3", "Wind and percussion maestros", { k: "bars", title: "Maestros in this app, by instrument", unit: "",
  rows: tally("String maestros", "M2").concat(tally("Wind and percussion maestros", "M3")).filter(r => r[1] > 1).map(r => [r[0], r[1], ""]), hi: 4,
  cap: "The sitar, the violin, the tabla and the flute have the most names to learn — start revision with them." });

// M4 — a timeline of the great names
place("M4", "Who's who", { k: "tlfig", title: "From Jayadeva to Bhatkhande",
  rows: [[1170, "Jayadeva", "Gita Govinda"], [1230, "Sarngadeva", "Sangita Ratnakara"], [1300, "Amir Khusrau", "father of qawwali"], [1500, "Man Singh Tomar", "Dhrupad, Gwalior"],
    [1530, "Purandara Dasa", "father of Carnatic"], [1570, "Tansen", "Akbar's court"], [1660, "Venkatamakhin", "72 melakartas"], [1730, "Sadarang", "the khayal"],
    [1790, "Carnatic Trinity", "Tyagaraja · Dikshitar · Syama Sastri"], [1835, "Swathi Thirunal", "Travancore"], [1901, "Paluskar", "Gandharva Mahavidyalaya"], [1930, "Bhatkhande", "10 thaats"]],
  cap: "Years are approximate (the century is what exams ask). Medieval texts first, then Tansen in the Mughal court, the Trinity around 1800, and the modern teachers." });
place("M4", "story", { k: "photos", title: "In pictures", items: [
  P("Tansen", "Tansen", "Akbar's court"), P("Amir_Khusrau", "Amir Khusrau", "Tuti-e-Hind"), P("Tyagaraja", "Tyagaraja", "Carnatic Trinity · Telugu"),
  P("Purandara_Dasa", "Purandara Dasa", "Father of Carnatic music"), P("Vishnu_Narayan_Bhatkhande", "V. N. Bhatkhande", "Ten thaats"), P("Swathi_Thirunal_Rama_Varma", "Swathi Thirunal", "Travancore")] });

// M5 — gharanas: numbered pins (the north is too crowded for names) and the key beside the map
const GH = [["Kirana", 77.2, 29.4, "Kairana, UP · Abdul Karim Khan, Bhimsen Joshi"], ["Patiala", 76.4, 30.34, "Punjab · Bade Ghulam Ali Khan"],
  ["Rampur-Sahaswan", 79.03, 28.8, "UP · Rashid Khan"], ["Mewati", 77.0, 28.0, "Mewat · Pandit Jasraj"], ["Jaipur-Atrauli", 75.8, 26.9, "Rajasthan · Alladiya Khan, Kishori Amonkar"],
  ["Agra", 78.0, 27.2, "UP · Faiyaz Khan"], ["Imdadkhani (Etawah)", 79.02, 26.78, "UP · Vilayat Khan"], ["Gwalior", 78.18, 26.22, "MP · the oldest khayal gharana"],
  ["Benares", 82.97, 25.32, "UP · Girija Devi, Kishan Maharaj"], ["Maihar", 80.76, 24.27, "MP · Allauddin Khan, Ravi Shankar"], ["Indore", 75.86, 22.72, "MP · Amir Khan"]];
place("M5", "Musicians and their gharanas", { k: "mapfig", title: "Where the gharanas are named from",
  pins: GH.map((g, i) => [String(i + 1), g[1], g[2], g[0] + " — " + g[3], "n"]), vb: "60 90 320 240",
  facts: GH.map((g, i) => [`${i + 1} · ${g[0]}`, g[3]]),
  cap: "A gharana is named after the town its founder came from. Most cluster between Delhi, Agra and Gwalior — the old Mughal and Gwalior courts." });

// M6 — the raga clock and the seven notes
const RT = rows("M6", "Ragas and their time");
const AT = { "Early morning (dawn)": 6, "Late morning": 10, "Afternoon": 14, "Sunset (dusk)": 18, "Evening (early night)": 21, "Late night": 0 };
const clock = (() => { const cx = 230, cy = 160, R = 108, pt = (h, r) => { const a = ((h - 12) / 24) * 2 * Math.PI - Math.PI / 2;  /* noon at the top */ return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
  let s = `<svg class="dg" viewBox="0 0 460 320" role="img" aria-label="Ragas round the clock"><circle cx="${cx}" cy="${cy}" r="${R}" class="card"/>` +
    `<path d="M${cx} ${cy - R} A${R} ${R} 0 0 1 ${cx} ${cy + R} Z" class="s2" transform="rotate(-90 ${cx} ${cy})" opacity=".7"/>` +
    `<path d="M${cx} ${cy - R} A${R} ${R} 0 0 1 ${cx} ${cy + R} Z" class="s3" transform="rotate(90 ${cx} ${cy})" opacity=".7"/>`;
  for (let h = 0; h < 24; h += 3) { const [x1, y1] = pt(h, R - 6), [x2, y2] = pt(h, R), [tx, ty] = pt(h, R - 18);
    s += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="grid"/><text x="${tx.toFixed(1)}" y="${(ty + 4).toFixed(1)}" text-anchor="middle" font-size="10" class="mut">${h === 0 ? "12am" : h === 12 ? "noon" : h < 12 ? h + "am" : h - 12 + "pm"}</text>`; }
  s += `<text x="${cx}" y="${cy - 30}" text-anchor="middle" font-size="12" class="mut">☀ day</text><text x="${cx}" y="${cy + 40}" text-anchor="middle" font-size="12" class="mut">☾ night</text>`;
  Object.entries(AT).forEach(([t, h]) => { const names = RT.filter(r => r[1] === t).map(r => r[0]); if (!names.length) return;
    const [dx, dy] = pt(h, R), [lx, ly] = pt(h, R + 16), anc = Math.abs(lx - cx) < 20 ? "middle" : lx > cx ? "start" : "end";
    s += `<circle cx="${dx.toFixed(1)}" cy="${dy.toFixed(1)}" r="5" class="acc"/>` + names.map((n, i) =>
      `<text x="${lx.toFixed(1)}" y="${(ly + (dy < cy ? -12 * (names.length - 1 - i) : 12 * i) + 4).toFixed(1)}" text-anchor="${anc}" font-size="11.5" class="b">${n}</text>`).join(""); });
  return s + `</svg>`; })();
const SEA = RT.filter(r => !(r[1] in AT));
place("M6", "Ragas and their time", { k: "info", title: "Ragas round the clock",
  html: `<div class="map-wrap" style="align-items:center"><div style="max-width:460px;margin:0 auto;width:100%">${clock}</div>` +
    `<div class="fam" style="grid-template-columns:1fr">${[...new Set(SEA.map(r => r[1]))].map(t => `<div><span class="ic" aria-hidden="true">${/rain|Monsoon/.test(t) ? "🌧️" : "🌸"}</span><b>${t}</b><small>${SEA.filter(r => r[1] === t).map(r => r[0] + (r[2] ? " — " + r[2] : "")).join("<br>")}</small></div>`).join("")}</div></div>`,
  cap: "Hindustani ragas have a time of day (the samay). Dawn: Bhairav. Evening: Yaman. Late night: Darbari and Malkauns. The Malhar ragas are for the rains." });
const SW = rows("M6", "The seven notes");
place("M6", "The seven notes", { k: "info", title: "The sapta swara as a staircase",
  html: `<svg class="dg" viewBox="0 0 680 210" role="img" aria-label="The seven notes rising">` + SW.map((r, i) => { const x = 14 + i * 94, y = 120 - i * 15;
    return `<rect x="${x}" y="${y - 30}" width="84" height="${234 - y}" rx="8" class="${i % 2 ? "bbg" : "abg"}"/><text x="${x + 42}" y="${y}" text-anchor="middle" font-size="22" class="b">${r[0]}</text>` +
      `<text x="${x + 42}" y="${y + 20}" text-anchor="middle" font-size="11.5" class="mut">${String(r[1]).replace(/<[^>]+>/g, "").split(/[ (—,]/)[0]}</text>`; }).join("") + `</svg>`,
  cap: "Sa Re Ga Ma Pa Dha Ni — Sa and Pa are the fixed notes (achal swara); the other five can be flat or sharp." });
place("M6", "story", { k: "photos", title: "In pictures", items: [P("Tanpura", "Tanpura", "The drone behind every raga"), P("Harmonium", "Harmonium", "Free-reed keyboard"), P("Tala_(music)", "Tala", "The cycle of beats")] });

// M7 — singers
place("M7", "story", { k: "photos", title: "Singers in pictures", items: [
  P("M._S._Subbulakshmi", "M. S. Subbulakshmi", "Carnatic · Bharat Ratna 1998"), P("Bhimsen_Joshi", "Bhimsen Joshi", "Kirana gharana"), P("Kishori_Amonkar", "Kishori Amonkar", "Jaipur-Atrauli"),
  P("Pandit_Jasraj", "Pandit Jasraj", "Mewati"), P("Girija_Devi", "Girija Devi", "Queen of thumri"), P("Kumar_Gandharva", "Kumar Gandharva", "Dewas, MP"),
  P("M._Balamuralikrishna", "M. Balamuralikrishna", "Carnatic"), P("Begum_Akhtar", "Begum Akhtar", "Mallika-e-Ghazal"), P("Lata_Mangeshkar", "Lata Mangeshkar", "Nightingale of India"),
  P("Bhupen_Hazarika", "Bhupen Hazarika", "Sudhakantha"), P("Teejan_Bai", "Teejan Bai", "Pandavani"), P("Sharda_Sinha", "Sharda Sinha", "Chhath songs")] });

// M8 — two timelines
place("M8", "Bharat Ratna musicians", { k: "tlfig", title: "Bharat Ratna to musicians",
  rows: rows("M8", "Bharat Ratna musicians").map(r => [+r[1], r[0], r[2].replace(/\.$/, "")]),
  cap: "Six musicians: M. S. Subbulakshmi was the first (1998); 2001 had two, Lata Mangeshkar and Bismillah Khan." });
place("M8", "Indian Grammy winners", { k: "tlfig", title: "Indian Grammy winners, year by year",
  rows: rows("M8", "Indian Grammy winners").map(r => [+((r[1] + " " + r[2]).match(/\b(19|20)\d\d\b/) || [0])[0], r[0], r[1].replace(/ \(.*\)$/, "").replace(/, incl\..*$/, "")]).filter(r => r[0]),
  cap: "Ravi Shankar's 'West Meets East' won the first, at the 1968 ceremony; 2024 brought Grammys for Shakti (Shankar Mahadevan, Zakir Hussain) and for 'Pashto'." });

// M9 — folk instruments: photos, and the clickable map (with the map quiz) uses these rows
const FOLK = rows("M9", "Folk instruments and their states");
place("M9", "story", { k: "photos", title: "Folk instruments in pictures", items: [
  P("Ravanahatha", "Ravanahatha", "Rajasthan"), P("Kamaicha", "Kamaicha", "Rajasthan"), P("Tumbi", "Tumbi", "Punjab"), P("Pena_(musical_instrument)", "Pena", "Manipur"),
  P("Chenda", "Chenda", "Kerala"), P("Edakka", "Edakka", "Kerala"), P("Thavil", "Thavil", "Tamil Nadu"), P("Pepa_(musical_instrument)", "Pepa", "Assam"),
  P("Gogona", "Gogona", "Assam"), P("Ghumot", "Ghumot", "Goa"), P("Ektara", "Ektara", "West Bengal")] });
place("M9", "Folk instruments", { k: "indiamap", title: "Folk instruments on the map", cap: "Tap a state to see its folk instruments. Rajasthan and Kerala have the most." });
VISUAL = { mode: true, VIS: { key: "music_photos_v1", word: "instrument", words: "folk instruments", ask: "Which state does this folk instrument belong to:",
  rows: FOLK.map(r => [r[0], r[1], "Folk instrument", r[2] || "Folk instrument", "M9"]),
  tabs: [["vphotos", "Photo quiz"], ["vmap", "Map quiz"]] } };
