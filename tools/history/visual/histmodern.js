/* Modern India — European settlements and the battles that built the Company's rule, annexations, 1857's centres, reform
   movements, Gandhi's campaigns with the Dandi March drawn on the map, women and tribal heroes, revolutionaries and the INA,
   the land settlements coloured, the Acts on a timeline, integration after 1947 and portraits (drawn by study-visual.js).
   Places are approximate. place(), rows(), fail and KIT come from applyVisual in tools/workbook/lib.js. */
const at = (R, AT, col) => { const o = {}; R.forEach(r => { const v = String(r[col || 0]), k = Object.keys(AT).find(k => v.startsWith(k)); if (!k) fail("histmodern: no place for " + v); o[r[0]] = AT[k]; }); return o; };
const yr = s => parseInt(String(s).match(/\d{4}/) || [0], 10);

// L17 — the European settlements; the battles in Bengal and the Carnatic
const EU = [["Calicut", "Portuguese — Vasco da Gama lands, 1498"], ["Cochin", "Portuguese — first factory, 1500"], ["Goa", "Portuguese — taken 1510; freed 1961"], ["Masulipatnam", "Dutch, 1605; English, 1611"],
  ["Pulicat", "Dutch — Fort Geldria"], ["Surat", "English — first factory, 1613"], ["Madras", "English — Fort St George, 1639"], ["Bombay", "English — 1668"], ["Calcutta", "English — Fort William, 1690s"],
  ["Tranquebar", "Danish, 1620"], ["Serampore", "Danish"], ["Pondicherry", "French, 1674"], ["Chandernagore", "French"], ["Mahe", "French"], ["Karaikal", "French"]];
place("L17", "Who came when", KIT.numbered("Where the Europeans settled", EU, { Calicut: [75.78, 11.25], Cochin: [76.27, 9.93], Goa: [73.83, 15.49], Masulipatnam: [81.13, 16.17], Pulicat: [80.32, 13.42],
    Surat: [72.83, 21.17], Madras: [80.29, 13.08], Bombay: [72.84, 18.94], Calcutta: [88.36, 22.57], Tranquebar: [79.85, 11.03], Serampore: [88.34, 22.75], Pondicherry: [79.83, 11.93],
    Chandernagore: [88.37, 22.87], Mahe: [75.53, 11.7], Karaikal: [79.84, 10.92] }, { cap: "Order of arrival: Portuguese (1498), Dutch (1602), English (1600 charter, 1613 factory), Danish (1616), French (1664). Use ＋ or ⛶ for the Hooghly and Coromandel clusters." }));
place("L17", "Bengal: the two battles", KIT.numbered("The battles that built the Company's rule", [["Plassey", "23 June 1757 — Clive beat Siraj-ud-Daulah"], ["Bedara", "1759 — English beat the Dutch"],
    ["Wandiwash", "1760 — English beat the French (Third Carnatic War)"], ["Buxar", "1764 — Munro beat Mir Qasim, Shuja-ud-Daula and Shah Alam II"]],
  { Plassey: [88.25, 23.8], Bedara: [88.4, 22.95], Wandiwash: [79.6, 12.5], Buxar: [83.98, 25.57] }, { cap: "Plassey gave the Company Bengal's politics; Buxar and the Treaty of Allahabad (1765) gave it the Diwani of Bengal, Bihar and Odisha." }),
  KIT.photos("Plassey and after, in pictures", [["Vasco da Gama", "Calicut, 1498"], ["Fort St. George, Chennai", "Madras, 1639"], ["Robert Clive", "Plassey"], ["Siraj ud-Daulah", "Nawab of Bengal"], ["Mir Jafar", "The puppet Nawab"], ["Shuja-ud-Daula", "Buxar"]],
    { name: r => r[0].replace(/, Chennai$/, "") }));

// L18 — the Mysore and Sikh wars; Dalhousie's annexations
place("L18", "Anglo-Mysore Wars", KIT.numbered("Wars and annexations", [["Srirangapatna", "Tipu killed, 1799 — Fourth Anglo-Mysore War"], ["Sobraon", "1846 — First Anglo-Sikh War"], ["Chillianwala", "1849 — Second Anglo-Sikh War"],
    ["Satara", "Lapse, 1848 — the first"], ["Sambalpur", "Lapse, 1849"], ["Jhansi", "Lapse, 1853"], ["Nagpur", "Lapse, 1854"], ["Lucknow (Awadh)", "Annexed for 'misrule', 1856"]],
  { Srirangapatna: [76.69, 12.42], Sobraon: [74.86, 31.17], Chillianwala: [73.6, 32.65], Satara: [74.0, 17.68], Sambalpur: [83.97, 21.47], Jhansi: [78.57, 25.45], Nagpur: [79.09, 21.15], "Lucknow (Awadh)": [80.95, 26.85] },
  { cap: "Wellesley's Subsidiary Alliance (1798) and Dalhousie's Doctrine of Lapse (1848–56) brought state after state under the Company." }),
  KIT.photos("Rulers who fought the Company", [["Hyder Ali", "Mysore"], ["Tipu Sultan", "The Tiger of Mysore"], ["Tipu's Tiger", "His mechanical toy"], ["Ranjit Singh", "The Lion of Punjab"]]));

// L19 — portraits of the Governors-General and Viceroys
place("L19", "Governors of Bengal", KIT.photos("Governors-General in pictures", [["Warren Hastings", "First GG of Bengal, 1773"], ["Charles Cornwallis, 1st Marquess Cornwallis", "Permanent Settlement"],
  ["Richard Wellesley, 1st Marquess Wellesley", "Subsidiary Alliance"], ["Lord William Bentinck", "First GG of India; sati abolished"], ["James Broun-Ramsay, 1st Marquess of Dalhousie", "Doctrine of Lapse; railways"], ["Charles Canning, 1st Earl Canning", "Last GG, first Viceroy"]],
  { name: r => r[0].replace(/^Charles |^Richard |^James Broun-Ramsay, /, "").replace(/, 1st .*$|^Lord /, "").replace(/^Cornwallis.*/, "Cornwallis") }));
place("L19", "Viceroys", KIT.photos("Viceroys in pictures", [["George Robinson, 1st Marquess of Ripon", "Local self-government"], ["George Curzon, 1st Marquess Curzon of Kedleston", "Partition of Bengal, 1905"],
  ["Charles Hardinge, 1st Baron Hardinge of Penshurst", "Capital to Delhi, 1911"], ["Lord Irwin", "Gandhi–Irwin Pact"], ["Louis Mountbatten, 1st Earl Mountbatten of Burma", "Last Viceroy"]],
  { name: r => ({ "George Robinson, 1st Marquess of Ripon": "Lord Ripon", "George Curzon, 1st Marquess Curzon of Kedleston": "Lord Curzon", "Charles Hardinge, 1st Baron Hardinge of Penshurst": "Lord Hardinge", "Louis Mountbatten, 1st Earl Mountbatten of Burma": "Lord Mountbatten" })[r[0]] || r[0] }));

// L20 — the centres of 1857; the leaders
const C57 = { "Delhi": [77.21, 28.65], "Kanpur": [80.33, 26.45], "Lucknow": [80.95, 26.85], "Jhansi": [78.57, 25.45], "Bareilly": [79.43, 28.37], "Arrah": [84.66, 25.56], "Faizabad": [82.15, 26.78],
  "Allahabad": [81.85, 25.44], "Mathura": [77.67, 27.49], "Assam": [91.75, 26.18] };
const RV = rows("L20", "Centre");
place("L20", "Centre", Object.assign(KIT.numbered("Centres of the Revolt of 1857", RV, at(RV, C57), { key: r => r[1] + " · put down by " + r[2] }),
  { under: KIT.arrow([[77.7, 29.0], [77.35, 28.75]], "#c0392b", "Meerut, 10 May 1857", [77.9, 29.4]), cap: "It began at Meerut on 10 May 1857 (Mangal Pandey's protest at Barrackpore came in March). The rebels marched to Delhi and proclaimed Bahadur Shah II emperor." }),
  KIT.photos("The leaders of 1857", [["Mangal Pandey", "Barrackpore"], ["Bahadur Shah Zafar", "Delhi"], ["Rani of Jhansi", "Jhansi"], ["Tantia Tope", "Kanpur, Gwalior"], ["Begum Hazrat Mahal", "Lucknow"], ["Kunwar Singh", "Arrah"], ["Nana Sahib", "Kanpur"]]));

// L21 — reform movements by city; the reformers
const RF = { "Calcutta": [88.36, 22.57], "Belur": [88.35, 22.63], "Bombay": [72.88, 19.08], "New York": [74.5, 9.6], "Pune": [73.86, 18.52], "Aligarh": [78.08, 27.88], "Deoband": [77.68, 29.69], "Qadian": [75.38, 31.82],
  "Amritsar": [74.87, 31.63], "Tamil Nadu": [78.7, 11.0], "Kerala": [76.3, 10.0], "Hindu College": [88.37, 22.58], "Lahore": [74.35, 31.55], "Agra": [78.0, 27.18] };
const RO = rows("L21", "Organisation").map(r => [r[0], r[1], r[2].replace(/^\d{4}s?(–\d{2}s)? · /, "").replace(/[;,].*$/, "").replace(/ \(.*\)$/, "").trim(), yr(r[2])]).filter(r => Object.keys(RF).some(k => r[2].startsWith(k)));
const byCity = {}; RO.forEach(r => { const c = Object.keys(RF).find(k => r[2].startsWith(k)); c !== "New York" && (byCity[c] = byCity[c] || []).push(r); });
place("L21", "Organisation", { k: "mapfig", title: "Where the reform movements began",
  pins: Object.entries(byCity).map(([c, l], i) => [String(i + 1), RF[c][0], RF[c][1], l.map(r => r[0]).join(", "), "n"]),
  facts: Object.entries(byCity).map(([c, l], i) => [`${i + 1} · ${c}`, l.map(r => `${r[0]} (${r[3] || "—"})`).join("; ")]),
  cap: "Calcutta and Bombay led the way. The Theosophical Society began in New York (1875) and moved to Adyar, Madras." });
place("L21", "Reformers", KIT.photos("Reformers in pictures", [["Ram Mohan Roy", "Brahmo Samaj"], ["Ishwar Chandra Vidyasagar", "Widow remarriage"], ["Dayananda Saraswati", "Arya Samaj"], ["Swami Vivekananda", "Ramakrishna Mission"],
  ["Jyotirao Phule", "Satyashodhak Samaj"], ["Savitribai Phule", "First girls' school"], ["Syed Ahmad Khan", "Aligarh"], ["Narayana Guru", "SNDP"], ["Periyar E. V. Ramasamy", "Self-Respect"]], { name: r => r[0].replace(/^Periyar E\. V\. Ramasamy$/, "Periyar") }));

// L31 — newspapers on a timeline
place("L31", "Newspaper", { k: "tlfig", title: "Newspapers of the national movement", rows: rows("L31", "Newspaper").map(r => [yr(r[2]), r[0] + " — " + r[1].replace(/ \(.*\)$/, ""), ""]).filter(r => r[0]),
  cap: "From Hicky's Bengal Gazette (1780) to Gandhi's Harijan (1933). Tilak's Kesari was in Marathi; Azad's Al-Hilal in Urdu." });

// L22 — the leaders
place("L22", "Moderates vs Extremists", KIT.photos("Moderates and Extremists", [["Dadabhai Naoroji", "Grand Old Man · drain theory"], ["Gopal Krishna Gokhale", "Gandhi's political guru"], ["Surendranath Banerjee", "Moderate"],
  ["Bal Gangadhar Tilak", "Swaraj is my birthright"], ["Lala Lajpat Rai", "Punjab Kesari"], ["Bipin Chandra Pal", "Bengal"], ["Allan Octavian Hume", "Founder, 1885"], ["Annie Besant", "Home Rule, 1916"]]));

// L23 — Gandhi's campaigns, with the Dandi March drawn
const GA = [["Porbandar", "Born 2 Oct 1869"], ["Champaran", "1917 — first satyagraha in India (indigo)"], ["Ahmedabad", "1918 — mill strike; Sabarmati Ashram"], ["Kheda", "1918 — revenue satyagraha"],
  ["Amritsar", "1919 — Jallianwala Bagh, 13 April"], ["Chauri Chaura", "1922 — violence ends Non-Cooperation"], ["Bardoli", "1928 — Patel's satyagraha"], ["Dandi", "1930 — Salt March, 12 March–6 April"], ["Wardha (Sevagram)", "Ashram from 1936"]];
place("L23", "Gandhi's movements", Object.assign(KIT.numbered("Gandhi's campaigns on the map", GA, { Porbandar: [69.6, 21.64], Champaran: [84.8, 26.9], Ahmedabad: [72.58, 23.06], Kheda: [72.69, 22.75], Amritsar: [74.87, 31.62],
    "Chauri Chaura": [83.6, 26.65], Bardoli: [73.11, 21.12], Dandi: [72.8, 20.89], "Wardha (Sevagram)": [78.6, 20.73] }),
  { under: KIT.arrow([[72.58, 23.0], [72.9, 22.4], [73.0, 21.8], [72.95, 21.3], [72.8, 20.95]], "#c69214", "Dandi March · 385 km", [74.2, 21.6]), cap: "The Dandi March (gold arrow) walked 385 km from Sabarmati to Dandi in 24 days with 78 followers to break the salt law." }),
  KIT.photos("Gandhi's struggle in pictures", [["Salt March", "1930"], ["Sabarmati Ashram", "Ahmedabad"], ["Jallianwala Bagh", "Amritsar, 1919"], ["Sevagram", "Wardha"], ["Gandhi–Irwin Pact", "March 1931"]]));

// L32 — women and tribal heroes on the map, in pictures
const WP = { "Rani Velu Nachiyar": [78.53, 9.85], "Kittur Rani Chennamma": [74.8, 15.6], "Rani Avantibai": [80.7, 23.0], "Jhalkari Bai": [78.57, 25.45], "Bhikaji Cama": [72.84, 18.94], "Sarojini Naidu": [78.49, 17.39],
  "Kasturba Gandhi": [69.6, 21.64], "Aruna Asaf Ali": [77.21, 28.61], "Usha Mehta": [72.9, 19.1], "Matangini Hazra": [87.92, 22.28], "Kanaklata Barua": [93.4, 26.75], "Sucheta Kripalani": [80.95, 26.85],
  "Kamaladevi Chattopadhyay": [74.86, 12.91], "Pritilata Waddedar": [91.83, 22.36], "Kalpana Dutta": [91.9, 22.45], "Bina Das": [88.36, 22.57], "Rani Gaidinliu": [93.94, 25.0] };
const WR = rows("L32", "Women of");
place("L32", "Women of", KIT.numbered("Women of the struggle", WR, at(WR, WP), { key: r => r[1] + " — " + r[2].replace(/;.*$/, ""), cap: "Chittagong (Pritilata, Kalpana Dutta) is now in Bangladesh. Bhikaji Cama unfurled an Indian flag at Stuttgart in 1907." }),
  KIT.photos("Women of the struggle in pictures", [["Velu Nachiyar", "Sivaganga"], ["Kittur Chennamma", "Kittur"], ["Bhikaji Cama", "Stuttgart, 1907"], ["Sarojini Naidu", "Nightingale of India"], ["Aruna Asaf Ali", "Quit India, 1942"],
    ["Matangini Hazra", "Tamluk"], ["Kanaklata Barua", "Gohpur"], ["Rani Gaidinliu", "Naga hills"], ["Pritilata Waddedar", "Chittagong"]]));
const TP = { "Tilka Manjhi": [87.0, 25.24], "Tirot Sing": [91.6, 25.5], "U Kiang Nongbah": [92.2, 25.45], "Veer Narayan Singh": [82.5, 21.5], "Alluri Sitarama Raju": [81.8, 17.6], "V. O. Chidambaram Pillai": [78.13, 8.79],
  "Subramania Bharati": [77.7, 9.1], "Vanchinathan": [77.7, 8.73], "Tirupur Kumaran": [77.34, 11.11] };
const TR = rows("L32", "Tribal");
place("L32", "Tribal", KIT.numbered("Tribal and regional heroes", TR, at(TR, TP), { key: r => r[1] }));

// L24 — revolutionaries and the INA
place("L24", "Revolutionary movement", KIT.numbered("Revolutionaries on the map", [["Muzaffarpur", "1908 — Khudiram Bose"], ["Alipore", "1908 — conspiracy case"], ["Kakori", "1925 — train robbery"], ["Lahore", "1928–31 — Saunders; Bhagat Singh hanged"],
    ["Delhi", "1929 — Assembly bomb"], ["Allahabad", "1931 — Azad at Alfred Park"], ["Chittagong", "1930 — armoury raid, Surya Sen"], ["Nasik", "1904 — Abhinav Bharat"], ["Port Blair", "Cellular Jail — Kala Pani"]],
  { Muzaffarpur: [85.39, 26.12], Alipore: [88.33, 22.53], Kakori: [80.79, 26.87], Lahore: [74.35, 31.55], Delhi: [77.21, 28.61], Allahabad: [81.85, 25.44], Chittagong: [91.83, 22.36], Nasik: [73.79, 20.0], "Port Blair": [92.73, 11.62] }),
  KIT.photos("Revolutionaries in pictures", [["Bhagat Singh", "Hanged 23 March 1931"], ["Chandra Shekhar Azad", "HSRA"], ["Ram Prasad Bismil", "Kakori"], ["Ashfaqulla Khan", "Kakori"], ["Khudiram Bose", "Muzaffarpur"], ["Surya Sen", "Chittagong"], ["Cellular Jail", "Port Blair"]]));
place("L24", "Subhas Chandra Bose", { k: "mapfig", title: "The INA reaches India",
  pins: [["Moirang", 93.77, 24.5, "INA flag, 14 April 1944"], ["Imphal", 93.94, 24.82, "1944 campaign", "l"], ["Kohima", 94.11, 25.67, "1944"], ["Port Blair", 92.73, 11.62, "Bose hoists the tricolour, 30 Dec 1943"]],
  under: KIT.arrow([[96.2, 22.0], [95.0, 23.5], [94.1, 24.4]], "#c0392b", "from Burma", [94.6, 21.6]),
  cap: "The INA marched with the Japanese army from Burma towards Imphal and Kohima in 1944; Bose's Azad Hind government named the Andamans 'Shaheed' and Nicobar 'Swaraj'." },
  KIT.photos("Netaji and the INA", [["Subhas Chandra Bose", "Netaji"], ["Indian National Army", "Azad Hind Fauj"], ["Rash Behari Bose", "Handed over the INA"], ["Lakshmi Sahgal", "Rani of Jhansi Regiment"]]));

// L25 — the Acts on a timeline; the land settlements coloured
place("L25", "Acts 1773", { k: "tlfig", title: "Constitutional Acts, 1773–1947", rows: rows("L25", "Acts").map(r => [yr(r[1]), r[0], ""]).filter(r => r[0]),
  cap: "Regulating Act (1773) to the Indian Independence Act (1947): each Act added a step towards self-government." });
const LS = { "Permanent (Zamindari)": ["#c0503a", "WB BR JH OD"], "Ryotwari": ["#2f6db5", "TN AP KA MH GJ AS KL TG"], "Mahalwari": ["#2f8f4e", "UP PB HR MP DL"] };
const lf = {}; Object.values(LS).forEach(([c, ids]) => ids.split(" ").forEach(id => { lf[id] = c; }));
place("L25", "Land revenue", { k: "mapfig", title: "Three land settlements, roughly by today's states", fill: lf, legend: Object.entries(LS).map(([n, [c]]) => [c, n]),
  cap: "Permanent Settlement (Cornwallis, 1793) — Bengal, Bihar, Odisha; Ryotwari (Munro, 1820) — Madras, Bombay, Assam; Mahalwari (Holt Mackenzie, 1822) — the North-West Provinces, Punjab, Central India. Approximate." });

// L33 — integrating the states
const HO = rows("L33", "The holdouts");
place("L33", "The holdouts", KIT.numbered("The holdouts and the later additions", HO, at(HO, { "Junagadh": [70.46, 21.52], "Hyderabad": [78.49, 17.39], "Jammu": [74.8, 34.08], "Dadra": [73.0, 20.27], "Pondicherry": [79.81, 11.94],
    "Goa": [73.83, 15.49], "Sikkim": [88.61, 27.33] }), { key: r => r[2] }),
  KIT.photos("The integrators", [["Vallabhbhai Patel", "Iron Man of India"], ["V. P. Menon", "Secretary, States Ministry"], ["Statue of Unity", "Kevadia, Gujarat"]]));

VISUAL = { mode: true, VIS: { key: "histmodern_photos_v1", word: "person", words: "people and places", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
