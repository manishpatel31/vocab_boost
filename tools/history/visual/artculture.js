/* Art & Culture — temple and stupa diagrams, cave and painting maps, the World Heritage map and charts, scripts and photos
   (drawn by study-visual.js). place(lesson, where, ...blocks) and rows(lesson, table title) come from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];
const lab = (x, y, tx, ty, t, anc) => `<line x1="${x}" y1="${y}" x2="${tx}" y2="${ty}" class="grid"/><text x="${tx + (anc === "end" ? -3 : anc === "middle" ? 0 : 3)}" y="${ty + 4}" text-anchor="${anc || "start"}" font-size="11" class="mut">${t}</text>`;

// L26 — dance and music
place("L26", "story", { k: "photos", title: "In pictures", items: [
  P("Bharatanatyam", "Bharatanatyam", "Tamil Nadu"), P("Kathak", "Kathak", "Uttar Pradesh"), P("Kathakali", "Kathakali", "Kerala"), P("Odissi", "Odissi", "Odisha"),
  P("Manipuri_dance", "Manipuri", "Manipur"), P("Sattriya", "Sattriya", "Assam"), P("Tansen", "Tansen", "Akbar's court"), P("M._S._Subbulakshmi", "M. S. Subbulakshmi", "Carnatic")] });
place("L26", "Eight classical dances", { k: "mapfig", title: "The classical dances on the map",
  pins: [["Bharatanatyam", 79.14, 10.79, "Tamil Nadu"], ["Kathak", 80.95, 26.85, "Uttar Pradesh"], ["Kathakali", 76.29, 10.74, "Kerala", "l"],
    ["Mohiniyattam", 76.95, 8.52, "Kerala", "l"], ["Kuchipudi", 80.95, 16.27, "Andhra Pradesh"], ["Odissi", 85.82, 20.29, "Odisha"],
    ["Manipuri", 93.94, 24.81, "Manipur", "l"], ["Sattriya", 94.22, 26.95, "Assam", "l"]],
  cap: "Two from Kerala, one each from six other states; only Kathak is from the north." });

// L27 — the three temple styles, drawn
const temples = `<svg class="dg" viewBox="0 0 710 300" role="img" aria-label="Nagara, Dravida and Vesara temples compared">
  <line x1="6" y1="250" x2="704" y2="250" class="grid"/>
  <rect x="22" y="238" width="176" height="12" class="abg"/><rect x="30" y="204" width="56" height="34" class="abg"/><path d="M26 204 L58 182 L90 204 Z" class="abg"/>
  <rect x="92" y="190" width="80" height="48" class="abg"/><path d="M92 190 C92 122 112 82 125 74 L139 74 C152 82 172 122 172 190 Z" class="abg"/>
  <path d="M102 180 C104 130 116 96 128 84 M162 180 C160 130 148 96 136 84" class="grid" fill="none"/>
  <ellipse cx="132" cy="69" rx="17" ry="6" class="abg"/><path d="M127 63 Q132 46 137 63 Z" class="acc"/>
  ${lab(128, 54, 84, 44, "Kalasha", "end")}${lab(115, 69, 84, 70, "Amalaka", "end")}${lab(98, 130, 84, 112, "Shikhara", "end")}<text x="132" y="222" text-anchor="middle" font-size="10.5" class="mut">Garbhagriha</text>${lab(58, 192, 40, 160, "Mandapa", "middle")}
  <text x="110" y="276" text-anchor="middle" font-size="15" class="b">Nagara</text><text x="110" y="292" text-anchor="middle" font-size="11" class="mut">North · no boundary wall</text>

  <rect x="236" y="230" width="218" height="20" class="bbg"/>
  <path d="M250 230 L262 128 L296 128 L308 230 Z" class="bbg"/><rect x="258" y="116" width="42" height="12" rx="6" class="bbg"/>
  <path d="M254 200 H304 M257 175 H301 M260 150 H298" class="grid"/>
  <rect x="336" y="182" width="104" height="48" class="bbg"/>${[0, 1, 2, 3, 4].map(i => `<rect x="${342 + i * 8}" y="${164 - i * 17}" width="${92 - i * 16}" height="18" class="bbg"/>`).join("")}
  <path d="M374 96 Q388 70 402 96 Z" class="bbg"/><path d="M384 72 Q388 58 392 72 Z" class="acc"/>
  ${lab(279, 116, 252, 92, "Gopuram (gateway)", "middle")}${lab(392, 82, 430, 70, "Stupika")}${lab(426, 140, 446, 122, "Vimana")}<text x="395" y="244" text-anchor="middle" font-size="10" class="mut">Boundary wall</text>
  <text x="345" y="276" text-anchor="middle" font-size="15" class="b">Dravida</text><text x="345" y="292" text-anchor="middle" font-size="11" class="mut">South · stepped pyramid, gateways</text>

  <path d="M486 250 L494 238 L502 250 L510 238 L518 250 L526 238 L534 250 L542 238 L550 250 L558 238 L566 250 L574 238 L582 250 L590 238 L598 250 L606 238 L614 250" class="gbg"/>
  <rect x="504" y="194" width="92" height="44" class="gbg"/>
  <path d="M504 194 C506 150 524 116 540 108 L560 108 C576 116 594 150 596 194 Z" class="gbg"/>
  <path d="M508 176 H592 M514 158 H586 M522 140 H578 M532 124 H568" class="grid"/>
  <ellipse cx="550" cy="104" rx="16" ry="5" class="gbg"/><path d="M545 99 Q550 84 555 99 Z" class="acc"/>
  <path d="M655 186 L661 200 L676 198 L667 210 L676 222 L661 220 L655 234 L649 220 L634 222 L643 210 L634 198 L649 200 Z" class="gbg"/>
  ${lab(588, 160, 606, 150, "Tiers of the south")}${lab(574, 126, 592, 104, "Curve of the north")}<text x="655" y="178" text-anchor="middle" font-size="11" class="mut">Star plan</text>
  <text x="560" y="276" text-anchor="middle" font-size="15" class="b">Vesara</text><text x="560" y="292" text-anchor="middle" font-size="11" class="mut">Deccan · a mix (Chalukya, Hoysala)</text></svg>`;
place("L27", "Three temple styles", { k: "info", title: "The three temple styles, side by side",
  html: `<figure class="fig wide" style="--minw:600px;margin:0">${temples}</figure>`,
  cap: "Nagara: a curved tower crowned by an amalaka. Dravida: a stepped pyramid (vimana), tall gopurams and a wall. Vesara: the curve of the north on the tiers of the south, often on a star-shaped plan." });

const stupa = `<svg class="dg" viewBox="0 0 680 280" role="img" aria-label="The parts of a stupa">
  <line x1="40" y1="250" x2="660" y2="250" class="grid"/>
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="${112 + i * 11}" y="222" width="5" height="28" class="bbg"/><rect x="${488 + i * 11}" y="222" width="5" height="28" class="bbg"/>`).join("")}
  <path d="M108 228 H200 M108 238 H200 M480 228 H572 M480 238 H572" class="acs" stroke-width="2"/>
  <rect x="200" y="205" width="280" height="45" class="abg"/><path d="M200 205 H480" class="acs" stroke-width="2.5"/>
  <path d="M215 205 A125 120 0 0 1 465 205 Z" class="abg"/>
  <rect x="320" y="70" width="40" height="18" class="bbg"/><line x1="340" y1="70" x2="340" y2="20" class="acs" stroke-width="2.5"/>
  <ellipse cx="340" cy="52" rx="24" ry="4" class="acc"/><ellipse cx="340" cy="38" rx="17" ry="3.5" class="acc"/><ellipse cx="340" cy="26" rx="10" ry="3" class="acc"/>
  <rect x="586" y="150" width="9" height="100" class="bbg"/><rect x="626" y="150" width="9" height="100" class="bbg"/>
  <rect x="574" y="146" width="74" height="7" class="acc"/><rect x="578" y="162" width="66" height="7" class="acc"/><rect x="582" y="178" width="58" height="7" class="acc"/>
  ${lab(318, 38, 220, 34, "Chhatra (umbrellas)", "end")}${lab(340, 62, 220, 58, "Yashti (mast)", "end")}${lab(320, 80, 220, 82, "Harmika (railed box)", "end")}
  ${lab(260, 140, 160, 130, "Anda (the dome)", "end")}${lab(220, 205, 160, 180, "Pradakshina patha", "end")}<text x="340" y="232" text-anchor="middle" font-size="11" class="mut">Medhi (drum)</text>
  ${lab(530, 228, 520, 196, "Vedika (railing)", "middle")}${lab(610, 146, 610, 116, "Torana (gateway)", "middle")}</svg>`;
place("L27", "Stupas", { k: "info", title: "The parts of a stupa (Sanchi)",
  html: `<figure class="fig wide" style="--minw:560px;margin:0">${stupa}</figure>`,
  cap: "Bottom to top: medhi, anda, harmika, yashti, chhatra. The vedika (railing) and the four toranas (gateways) at Sanchi were added by the Sungas and Satavahanas." });
place("L27", "Cave architecture", { k: "mapfig", title: "The caves on the map",
  pins: [["Ajanta", 75.7, 20.55, "Buddhist · paintings"], ["Ellora", 75.18, 20.03, "Buddhist · Hindu · Jain", "l"], ["Elephanta", 72.93, 18.96, "Shaivite · Trimurti", "l"],
    ["Karla · Bhaja · Kanheri", 73.48, 18.78, "Buddhist chaityas"], ["Bagh", 74.83, 22.33, "MP · paintings", "l"], ["Udayagiri–Khandagiri", 85.78, 20.26, "Jain · Kharavela"],
    ["Barabar", 85.06, 25.0, "Mauryan · the oldest"], ["Badami", 75.68, 15.92, "Chalukyan", "l"], ["Sittanavasal", 78.72, 10.45, "Jain paintings"]],
  cap: "Most of the rock-cut caves are in Maharashtra, cut into the Deccan basalt of the Western Ghats. The oldest, Barabar, are Mauryan." });
place("L27", "story", { k: "photos", title: "In pictures", items: [
  P("Kandariya_Mahadeva_Temple", "Kandariya Mahadeva", "Nagara · Khajuraho"), P("Lingaraja_Temple", "Lingaraja", "Nagara · Bhubaneswar"),
  P("Brihadisvara_Temple,_Thanjavur", "Brihadeeswarar", "Dravida · Thanjavur"), P("Meenakshi_Temple", "Meenakshi temple", "Dravida · Madurai (gopurams)"),
  P("Chennakeshava_Temple,_Belur", "Chennakeshava, Belur", "Vesara · Hoysala"), P("Sanchi", "Great Stupa, Sanchi", "Begun by Ashoka"),
  P("Kailasa_temple,_Ellora", "Kailasa, Ellora", "Cave 16 · one rock"), P("Elephanta_Caves", "Elephanta", "Trimurti"),
  P("Qutb_Minar", "Qutub Minar", "Delhi Sultanate"), P("Humayun's_Tomb", "Humayun's Tomb", "First garden tomb"), P("Gol_Gumbaz", "Gol Gumbaz", "Bijapur"), P("Victoria_Memorial,_Kolkata", "Victoria Memorial", "Colonial")] });

// L35 — World Heritage: the clickable map and quiz (one row per state), charts and photos
const WHS = rows("L35", "India's 44");
const sitesByState = WHS.flatMap(r => r[1].split(/, /).map(st => [r[0].replace(/ \(.*\)$/, ""), st, r[3], r[2], "L35"]));
place("L35", "India's 44", { k: "indiamap", title: "World Heritage Sites on the map", cap: "Tap a state to see its World Heritage Sites. A site that spans states (the Western Ghats, the mountain railways, the Maratha forts) is listed in each." },
  { k: "statechart", title: "Sites per state", cap: "Maharashtra leads, then Rajasthan, Gujarat, Karnataka, Madhya Pradesh and Uttar Pradesh. Sites that span states count once for each." });
const DEC = {}; WHS.forEach(r => { const d = Math.floor(parseInt(r[2], 10) / 10) * 10; DEC[d] = (DEC[d] || 0) + 1; });
const TYPES = ["Cultural", "Natural", "Mixed"].map(t => [t, WHS.filter(r => r[3] === t).length]);
place("L35", "Key numbers", { k: "bars", title: "Sites inscribed, by decade", sort: false, rows: Object.entries(DEC).map(([d, n]) => [d + "s", n, ""]), hi: 1,
  cap: "The 1980s gave the most: the Ajanta, Ellora, Agra Fort and Taj Mahal batch of 1983 and the national parks of 1985." },
  { k: "info", title: "Cultural, natural, mixed", html: `<div class="fam">${TYPES.map(([t, n]) => `<div><span class="ic" aria-hidden="true">${t === "Cultural" ? "🏛️" : t === "Natural" ? "🌿" : "🏔️"}</span><b>${t}</b><span class="n" style="font-size:22px">${n}</span><small>${WHS.filter(r => r[3] === t).slice(0, t === "Cultural" ? 4 : 8).map(r => r[0].replace(/ \(.*\)$/, "")).join(" · ")}${t === "Cultural" ? " …" : ""}</small></div>`).join("")}</div>`,
    cap: "The only mixed site is Khangchendzonga (Sikkim, 2016); the newest are the Moidams of Assam (2024) and the Maratha Military Landscapes (2025)." });
place("L35", "story", { k: "photos", title: "In pictures", items: [
  P("Taj_Mahal", "Taj Mahal", "Uttar Pradesh · 1983"), P("Ajanta_Caves", "Ajanta Caves", "Maharashtra · 1983"), P("Konark_Sun_Temple", "Sun Temple, Konark", "Odisha · 1984"),
  P("Kaziranga_National_Park", "Kaziranga", "Assam · 1985 · natural"), P("Hampi", "Hampi", "Karnataka · 1986"), P("Rani_ki_vav", "Rani ki Vav", "Gujarat · 2014"),
  P("Dholavira", "Dholavira", "Gujarat · 2021"), P("Ramappa_Temple", "Ramappa Temple", "Telangana · 2021"), P("Moidams", "Moidams, Charaideo", "Assam · 2024"),
  P("Khangchendzonga_National_Park", "Khangchendzonga", "Sikkim · the mixed site"), P("Jantar_Mantar,_Jaipur", "Jantar Mantar", "Jaipur · 2010"), P("Santiniketan", "Santiniketan", "West Bengal · 2023")] });

// L28 — paintings on the map and in pictures
place("L28", "Folk & tribal paintings", { k: "mapfig", title: "Folk paintings on the map",
  marks: [["BR", "Madhubani · Manjusha"], ["MH", "Warli"], ["OD", "Pattachitra · Saura", 6, 6], ["AP", "Kalamkari", 0, 8], ["RJ", "Phad"], ["GJ", "Pithora", 6, 0],
    ["MP", "Gond · Bhil"], ["SK", "Thangka", 0, -8], ["LA", "Thangka"], ["TG", "Cheriyal"], ["WB", "Kalighat", 8, 12], ["UT", "Aipan", 6, 0]],
  cap: "Madhubani (Bihar), Warli (Maharashtra), Pattachitra (Odisha), Kalamkari (Andhra Pradesh), Phad (Rajasthan) and Gond (MP) are the six asked most." });
place("L28", "story", { k: "photos", title: "Paintings in pictures", items: [
  P("Madhubani_art", "Madhubani", "Bihar"), P("Warli_painting", "Warli", "Maharashtra"), P("Pattachitra", "Pattachitra", "Odisha"), P("Kalamkari", "Kalamkari", "Andhra Pradesh"),
  P("Phad_painting", "Phad", "Rajasthan"), P("Gond_art", "Gond", "Madhya Pradesh"), P("Thangka", "Thangka", "Sikkim · Ladakh"), P("Kalighat_painting", "Kalighat", "West Bengal"),
  P("Cheriyal_scrolls", "Cheriyal scroll", "Telangana"), P("Pithora_painting", "Pithora", "Gujarat · MP"), P("Bani_Thani", "Bani Thani", "Kishangarh school"), P("Kathputli_(puppetry)", "Kathputli", "Rajasthan puppets")] });

// L34 — scripts as cards, and writers in pictures
place("L34", "Scripts", { k: "info", title: "Scripts at a glance",
  html: '<div class="fam">' + rows("L34", "Scripts").map(r => { const rtl = /Right to left/.test(r[1]), und = /undeciphered/i.test(r[2]);
    return `<div><span class="ic" aria-hidden="true">${und ? "❓" : rtl ? "⬅️" : "➡️"}</span><b>${r[0]}</b><span class="n">${r[1].replace(/^(Left to right|Right to left); ?/, m => m.replace(/; ?$/, "") + " · ")}</span><small>${r[2]}</small></div>`; }).join("") + "</div>",
  cap: "Only Kharosthi runs right to left (it grew from Aramaic). Brahmi is the mother of most Indian scripts; James Prinsep read it in 1837." });
place("L34", "story", { k: "photos", title: "In pictures", items: [
  P("Kalidasa", "Kalidasa", "Abhijnanashakuntalam"), P("Rabindranath_Tagore", "Rabindranath Tagore", "Gitanjali · Nobel 1913"), P("Bankim_Chandra_Chattopadhyay", "Bankim Chandra", "Anandamath"),
  P("Premchand", "Premchand", "Godaan"), P("Edicts_of_Ashoka", "Ashoka's edicts", "Brahmi script"), P("Brahmi_script", "Brahmi script", "Read by James Prinsep")] });

VISUAL = { mode: true, VIS: { key: "artculture_photos_v1", word: "site", words: "World Heritage Sites", ask: "Which state is this World Heritage Site in:", rows: sitesByState,
  tabs: [["vphotos", "Photo quiz"], ["vmap", "Map quiz"]] } };
