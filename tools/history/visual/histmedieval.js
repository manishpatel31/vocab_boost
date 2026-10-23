/* Medieval India — the invaders' routes, the Sultanate and Mughal dynasties as time bars, the Deccan kingdoms, Bhakti saints
   and Mughal battles on the map, the Grand Trunk Road, Maratha forts and photos of the monuments (drawn by study-visual.js).
   Places are approximate. place(), rows(), fail and KIT come from applyVisual in tools/workbook/lib.js. */
const fig = (t, svg, cap, w) => ({ k: "info", title: t, html: `<figure class="fig wide" style="--minw:${w || 560}px;margin:0">${svg}</figure>`, cap });
const pins = (L, side) => L.map(([n, lo, la, note]) => [n, lo, la, note || "", (side || {})[n] || ""]);
// time bars: rows [name, from, to, colour, note?] on an axis from a to b
const gantt = (label, R, a, b, step) => { const W = 680, L = 150, H = 26, sx = y => L + (y - a) / (b - a) * (W - L - 20), h = R.length * (H + 8) + 50;
  const ticks = []; for (let y = Math.ceil(a / step) * step; y <= b; y += step) ticks.push(y);
  return `<svg class="dg" viewBox="0 0 ${W} ${h}" role="img" aria-label="${label}">${ticks.map(y => `<line x1="${sx(y)}" y1="20" x2="${sx(y)}" y2="${h - 22}" class="grid"/><text x="${sx(y)}" y="${h - 6}" text-anchor="middle" font-size="10.5" class="mut">${y}</text>`).join("")}
    ${R.map(([n, f, t, c, note], i) => { const y = 24 + i * (H + 8); return `<text x="${L - 8}" y="${y + 17}" text-anchor="end" font-size="12.5" class="b">${n}</text><rect x="${sx(f)}" y="${y}" width="${Math.max(3, sx(t) - sx(f))}" height="${H}" rx="6" fill="${c}" class="anim-in" style="animation-delay:${i * 90}ms"/>` +
      (sx(t) - sx(f) > 74 ? `<text x="${sx(f) + 6}" y="${y + 17}" font-size="10.5" style="fill:#fff;font-weight:700">${f}–${t}${note ? " · " + note : ""}</text>`
        : `<text x="${sx(t) + 5}" y="${y + 17}" font-size="10.5" class="mut">${f}–${t}${note ? " · " + note : ""}</text>`); }).join("")}</svg>`; };

// L9 — how the invaders came
place("L9", "How the Turks came in", { k: "mapfig", title: "The invaders' routes",
  under: KIT.arrow([[67.4, 24.7], [68.4, 26.5], [70.2, 28.6], [71.47, 30.2]], "#2f8f4e", "Qasim 712", [65.4, 28.0]) + KIT.arrow([[68.4, 33.55], [70.5, 30.5], [71.5, 27], [70.4, 21.2]], "#c0392b", "Mahmud → Somnath 1025", [72.0, 24.0]) +
    KIT.arrow([[68.4, 33.4], [72.5, 31.8], [76.4, 30.0]], "#7d4fb5", "Ghori → Tarain", [69.6, 35.2]),
  pins: pins([["Ghazni", 68.42, 33.55, ""], ["Somnath", 70.4, 20.89, "sacked 1025"], ["Tarain", 76.7, 29.8, "1191, 1192"], ["Debal", 67.4, 24.7, "Sindh, 712"], ["Multan", 71.47, 30.2, ""]],
    { Ghazni: "l", Somnath: "l", Debal: "l", Multan: "l" }),
  cap: "Muhammad bin Qasim took Sindh by sea and river (712); Mahmud of Ghazni raided 17 times and sacked Somnath (1025); Muhammad Ghori lost the first battle of Tarain (1191) and won the second (1192)." });

// L10–L11 — the five Sultanate dynasties; the monuments
const SD = rows("L10", "Five dynasties").map((r, i) => { const [f, t] = r[1].split("–").map(Number); return [r[0].replace(/ \/.*$/, ""), f, t, ["#c0503a", "#c69214", "#2f8f4e", "#2f6db5", "#7d4fb5"][i]]; });
place("L10", "Five dynasties", fig("The Delhi Sultanate, 1206–1526", gantt("Five dynasties of the Delhi Sultanate", SD, 1200, 1530, 50), "Slave → Khalji → Tughlaq → Sayyid → Lodi. The Tughlaqs ruled longest (94 years); the Khaljis and Sayyids were short. Ended at First Panipat, 1526."),
  KIT.photos("Sultanate monuments", [["Qutb Minar", "Aibak began it, Iltutmish finished it"], ["Alai Darwaza", "Alauddin Khalji · first true arch dome"], ["Quwwat-ul-Islam Mosque", "Aibak"], ["Tomb of Iltutmish", "Delhi"],
    ["Tughlaqabad Fort", "Ghiyas-ud-din Tughlaq"], ["Firoz Shah Kotla", "Firoz Shah Tughlaq"], ["Lodi Gardens", "Lodi tombs"], ["Hauz Khas Complex", "Alauddin's tank"]]));
place("L11", "Tughlaq dynasty", { k: "mapfig", title: "Muhammad bin Tughlaq moves the capital", vb: "60 60 300 360",
  under: KIT.arrow([[77.21, 28.61], [77.6, 25.5], [76.5, 22.5], [75.25, 20.1]], "#c0392b", "1327 →", [77.8, 24]) + KIT.arrow([[75.25, 19.9], [75.9, 22.6], [76.9, 25.6], [77.1, 28.3]], "#2f6db5", "← back", [74.0, 24.5]),
  pins: pins([["Delhi", 77.21, 28.61, ""], ["Daulatabad (Devagiri)", 75.21, 19.94, "", ""]]), cap: "In 1327 he shifted the capital from Delhi to Daulatabad, about 1,100 km south, and then back again. He also tried token copper currency (1329–30)." });

// L12 — Vijayanagara, the Bahmanis and the Deccan sultanates; the regional kingdoms
const DC = [["Hampi", "Vijayanagara capital, 1336–1646"], ["Gulbarga", "Bahmani — first capital (1347)"], ["Bidar", "Bahmani — later capital; then Barid Shahi"], ["Bijapur", "Adil Shahi"],
  ["Golconda", "Qutb Shahi"], ["Ahmadnagar", "Nizam Shahi"], ["Ellichpur", "Imad Shahi (Berar)"], ["Talikota", "Battle, 1565 — Vijayanagara falls"]];
place("L12", "Vijayanagara", KIT.numbered("The Deccan in the 1500s", DC, { Hampi: [76.46, 15.33], Gulbarga: [76.83, 17.33], Bidar: [77.52, 17.91], Bijapur: [75.71, 16.83], Golconda: [78.4, 17.38],
    Ahmadnagar: [74.74, 19.09], Ellichpur: [77.51, 21.26], Talikota: [76.32, 16.47] }, { vb: "60 280 220 200",
    cap: "The Bahmani kingdom broke into five Deccan sultanates (Bijapur, Golconda, Ahmadnagar, Berar, Bidar). Four of them crushed Vijayanagara at Talikota (1565)." }),
  KIT.photos("Deccan monuments", [["Virupaksha Temple, Hampi", "Vijayanagara"], ["Vittala Temple", "The stone chariot"], ["Gol Gumbaz", "Bijapur"], ["Golconda Fort", "Qutb Shahi"], ["Charminar", "Hyderabad, 1591"], ["Mahmud Gawan Madrasa", "Bidar"]],
    { name: r => r[0].replace(/, Hampi$/, "") }));
const RK = { "Malwa": [75.4, 22.35, "Mandu"], "Gujarat": [72.57, 23.02, "Ahmedabad"], "Jaunpur": [82.68, 25.75, "Jaunpur"], "Bengal": [88.13, 24.87, "Gaur"], "Kashmir": [74.8, 34.08, "Srinagar"],
  "Mewar": [74.65, 24.88, "Chittor"], "Marwar": [73.02, 26.24, "Jodhpur"], "Amber": [75.85, 26.99, "Amber"] };
const RKR = rows("L12", "Other regional").filter(r => RK[r[0].replace(/ \(.*\)$/, "")]);
place("L12", "Other regional", KIT.numbered("Regional kingdoms", RKR, Object.fromEntries(RKR.map(r => [r[0], RK[r[0].replace(/ \(.*\)$/, "")]])), { key: r => RK[r[0].replace(/ \(.*\)$/, "")][2] + " — " + r[1] }));

// L13 — the Bhakti saints on the map; Sufi shrines
const SA = { "Shankaracharya": [76.44, 10.17], "Ramanuja": [79.95, 12.97], "Madhvacharya": [74.75, 13.34], "Ramananda": [81.85, 25.44], "Kabir": [83.0, 25.32], "Guru Nanak": [73.69, 31.45],
  "Chaitanya": [88.37, 23.41], "Mirabai": [74.04, 26.65], "Surdas": [77.67, 27.49], "Tulsidas": [82.2, 26.8], "Namdev": [75.33, 17.68], "Jnaneshwar": [73.9, 18.68], "Basava": [76.95, 17.87],
  "Ravidas": [83.15, 25.15], "Dadu Dayal": [75.0, 26.6], "Andal": [77.62, 9.51], "Akka Mahadevi": [75.27, 14.33] };
const BK = rows("L13", "Bhakti saints").map(r => [r[0].replace(/ \(.*\)$/, ""), r[1], r[2]]).filter(r => Object.keys(SA).some(k => r[0].startsWith(k)));
place("L13", "Bhakti saints", KIT.numbered("Bhakti saints and where they lived", BK, Object.fromEntries(BK.map(r => [r[0], SA[Object.keys(SA).find(k => r[0].startsWith(k))]])), { key: r => r[1] }),
  KIT.photos("Saints and shrines in pictures", [["Kabir", "Banaras"], ["Mirabai", "Mewar"], ["Tulsidas", "Ramcharitmanas"], ["Ajmer Sharif Dargah", "Moinuddin Chishti"], ["Nizamuddin Dargah", "Delhi"], ["Tomb of Salim Chishti", "Fatehpur Sikri"]]));

// L14 — Mughal emperors in time; the battles on the map; the monuments; the Grand Trunk Road
const MG = [["Babur", 1526, 1530, "#c0503a"], ["Humayun", 1530, 1540, "#c69214"], ["Sher Shah (Suri)", 1540, 1545, "#7a7a7a"], ["Humayun", 1555, 1556, "#c69214"], ["Akbar", 1556, 1605, "#2f8f4e"],
  ["Jahangir", 1605, 1627, "#2f6db5"], ["Shah Jahan", 1628, 1658, "#7d4fb5"], ["Aurangzeb", 1658, 1707, "#1f6b3a"]];
place("L14", "Every Mughal battle", fig("The great Mughals, 1526–1707", gantt("Mughal emperors", MG, 1520, 1710, 20), "Babur founded the empire; Sher Shah broke it for fifteen years (Suri interlude); Akbar (49 years) and Aurangzeb (49 years) ruled longest."));
const BT = { "First Panipat": [76.97, 29.39], "Khanwa": [77.53, 27.03], "Chanderi": [78.14, 24.72], "Ghaghra": [84.2, 25.75], "Chausa": [83.9, 25.52], "Kannauj": [79.92, 27.05], "Second Panipat": [76.75, 29.55],
  "Talikota": [76.32, 16.47], "Haldighati": [73.69, 24.89], "Samugarh": [78.1, 27.2], "Karnal": [76.99, 29.69], "Third Panipat": [77.2, 29.25] };
const BR = rows("L14", "Every Mughal battle").map(r => [r[1], r[0], r[2]]).filter(r => Object.keys(BT).some(k => r[0].startsWith(k)));
place("L14", "Every Mughal battle", KIT.numbered("The battles on the map", BR, Object.fromEntries(BR.map(r => [r[0], BT[Object.keys(BT).find(k => r[0].startsWith(k))]])), { key: r => r[1] + " — " + r[2].replace(/ — .*$/, ""), vb: "40 60 380 400",
  cap: "Panipat saw three decisive battles (1526, 1556, 1761). Use ＋ or ⛶ to separate them." }));
place("L14", "Sher Shah", { k: "mapfig", title: "Sher Shah's Grand Trunk Road",
  under: `<path d="${KIT.path([[90.6, 23.65], [88.36, 22.57], [86.5, 23.8], [84.6, 24.8], [83.0, 25.32], [81.85, 25.44], [80.33, 26.45], [78.0, 27.18], [77.21, 28.61], [76.97, 29.39], [75.86, 30.9], [74.35, 31.55], [73.05, 33.6], [71.57, 34.01]])}" fill="none" stroke="#c69214" stroke-width="5" stroke-linecap="round" opacity=".85" style="vector-effect:non-scaling-stroke"/>`,
  pins: pins([["Sonargaon", 90.6, 23.65, "Bengal"], ["Agra", 78.0, 27.18, ""], ["Delhi", 77.21, 28.61, "", "l"], ["Lahore", 74.35, 31.55, ""], ["Peshawar", 71.57, 34.01, "towards Kabul"]], { Delhi: "l", Peshawar: "l" }),
  cap: "Sher Shah rebuilt the Sadak-e-Azam from Sonargaon to the Indus, with sarais every few miles. It also introduced the silver rupiya. Route simplified." },
  KIT.photos("Mughal monuments", [["Humayun's Tomb", "Delhi · Hamida Banu Begum"], ["Buland Darwaza", "Fatehpur Sikri · Akbar"], ["Tomb of I'timād-ud-Daulah", "Agra · Nur Jahan"], ["Taj Mahal", "Agra · Shah Jahan"],
    ["Red Fort", "Delhi · Shah Jahan"], ["Jama Masjid, Delhi", "Shah Jahan"], ["Bibi Ka Maqbara", "Aurangabad · Aurangzeb's son"], ["Sher Shah Suri's Tomb", "Sasaram"]], { name: r => r[0].replace(/, Delhi$/, "") }));

// L15 — the travellers and Mughal painting
const FL = { England: "🇬🇧", France: "🇫🇷", Italy: "🇮🇹", Portugal: "🇵🇹" };
place("L15", "European travellers", { k: "cards", title: "Travellers at the Mughal court", rows: rows("L15", "European travellers").map(r => [r[0], r[2].replace(/ — .*$/, ""), r[1], FL[r[1]] || "🧭"]) },
  KIT.photos("Mughal painting", [["Hamzanama", "Akbar's atelier"], ["Akbarnama", "Abul Fazl"], ["Ustad Mansur", "Jahangir's painter of birds"], ["Padshahnama", "Shah Jahan"]]));

// L16 — Shivaji's forts; the Sikh Gurus in time
const SF = [["Shivneri", "Birthplace (1630)"], ["Torna", "First fort taken (1646)"], ["Sinhagad", "Tanaji Malusare's fight (1670)"], ["Pune", "Shivaji's home town"], ["Purandar", "Treaty with Jai Singh (1665)"],
  ["Raigad", "Capital; crowned Chhatrapati (1674)"], ["Pratapgad", "Afzal Khan killed (1659)"], ["Panhala", "Siddi Jauhar's siege (1660)"]];
place("L16", "Shivaji", KIT.numbered("Shivaji's forts", SF, { Shivneri: [73.86, 19.2], Torna: [73.62, 18.28], Sinhagad: [73.76, 18.37], Pune: [73.86, 18.52], Purandar: [74.0, 18.28], Raigad: [73.44, 18.23],
    Pratapgad: [73.58, 17.94], Panhala: [74.11, 16.81] }, { vb: "70 335 80 90", cap: "The Sahyadri forts around Pune. Use ＋ or ⛶ for a closer look." }),
  KIT.photos("The Marathas in pictures", [["Raigad Fort", "Capital"], ["Shivneri", "Birthplace"], ["Pratapgad", "Afzal Khan episode"], ["Shaniwar Wada", "The Peshwas' seat, Pune"]]));
const GU = [["Nanak", 1469, 1539], ["Angad", 1539, 1552], ["Amar Das", 1552, 1574], ["Ram Das", 1574, 1581], ["Arjan", 1581, 1606], ["Hargobind", 1606, 1644], ["Har Rai", 1644, 1661], ["Har Krishan", 1661, 1664],
  ["Tegh Bahadur", 1665, 1675], ["Gobind Singh", 1675, 1708]].map(([n, a, b], i) => ["Guru " + n, a, b, i % 2 ? "#2f6db5" : "#d4a017"]);
place("L16", "The ten Sikh Gurus", fig("The ten Sikh Gurus, 1469–1708", gantt("The ten Sikh Gurus", GU, 1460, 1710, 25), "Guru Arjan compiled the Adi Granth (1604) and was executed under Jahangir; Guru Gobind Singh founded the Khalsa (1699) and named the Granth the eternal Guru."),
  KIT.photos("Sikh shrines", [["Golden Temple", "Amritsar · Guru Arjan"], ["Takht Sri Keshgarh Sahib", "Anandpur Sahib · the Khalsa"], ["Gurdwara Janam Asthan", "Nankana Sahib"], ["Akal Takht", "Guru Hargobind"]]));

VISUAL = { mode: true, VIS: { key: "histmedieval_photos_v1", word: "place", words: "places", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
