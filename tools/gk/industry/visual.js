/* Industries & Transport — plants, refineries, factories and ports on numbered India maps, waterways and pipelines drawn
   where they run, milestone timelines and photos (drawn by study-visual.js). Places are approximate.
   place(), rows(), fail and KIT come from applyVisual in tools/workbook/lib.js. */
// look a row up by a name that its column starts with
const pick = (R, AT, col) => { const at = {};
  R.forEach(r => { const v = String(r[col || 0]), k = Object.keys(AT).find(k => v.startsWith(k)); if (!k) fail("industry: no place for " + v); at[r[0]] = AT[k]; });
  return at; };
const line = (pts, color, label, at, dash) => `<path d="${KIT.path(pts)}" fill="none" stroke="${color}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" ${dash ? 'stroke-dasharray="7 4"' : ""} style="vector-effect:non-scaling-stroke"/>` +
  `<path d="${KIT.path(pts)}" fill="none" stroke="#fff" stroke-width="1.1" stroke-dasharray="2 8" style="animation:rvflow 1.4s linear infinite;vector-effect:non-scaling-stroke"/>` +
  (label ? (([x, y]) => `<text x="${x}" y="${y}" font-size="11" font-weight="700" style="fill:${color};paint-order:stroke;stroke:var(--sheet);stroke-width:3px">${label}</text>`)(KIT.proj(at[0], at[1])) : "");

// T1 — steel plants
const STEEL = { "Tata Steel": [86.2, 22.8], "Bhilai": [81.38, 21.21], "Rourkela": [84.85, 22.25], "Durgapur": [87.3, 23.55], "Bokaro": [86.15, 23.67], "IISCO": [86.93, 23.66],
  "Visvesvaraya": [75.72, 13.84], "Visakhapatnam": [83.2, 17.62], "Salem": [78.15, 11.7], "JSW": [76.66, 15.18], "Nagarnar": [82.17, 19.18], "Kalinganagar": [86.0, 20.95], "Hazira": [72.65, 21.1] };
const SP = rows("T1", "Steel plants");
place("T1", "Steel plants", KIT.numbered("Steel plants on the map", SP, pick(SP, STEEL), { cap: "Most plants sit on the Chota Nagpur plateau, close to its iron ore and coal. Use ＋ or ⛶ to zoom in on the cluster." }));
place("T1", "Foreign help", { k: "cards", title: "Who helped build the public-sector plants", rows: rows("T1", "Foreign help").map(r => [r[0], r[1], r[2] || ""]) });

// T2 — textile towns
const TOWN = { "Tiruppur": [77.34, 11.11], "Ludhiana": [75.86, 30.9], "Panipat": [76.97, 29.39], "Surat": [72.83, 21.17], "Bhagalpur": [87.0, 25.24], "Kanchipuram": [79.7, 12.83],
  "Varanasi": [83.0, 25.32], "Bhiwandi": [73.06, 19.3], "Pochampally": [78.98, 17.35], "Chanderi": [78.14, 24.72], "Sualkuchi": [91.57, 26.17] };
const TT = rows("T2", "Textile towns");
place("T2", "Textile towns", KIT.numbered("Textile towns on the map", TT, pick(TT, TOWN), { key: r => [r[0].match(/\((.*)\)/)?.[1], r[1]].filter(Boolean).join(" · ") }),
  KIT.photos("Weaves in pictures", [["Kanchipuram silk sari", "Tamil Nadu"], ["Banarasi sari", "Uttar Pradesh"], ["Pochampally Saree", "Telangana · ikat"], ["Chanderi sari", "Madhya Pradesh"], ["Muga silk", "Assam"]],
    { name: r => r[0].replace(/ (silk )?sari$| Saree$/i, "") }));

// T3 — refineries and oil fields
const REF = { "Digboi": [95.62, 27.39], "Guwahati": [91.8, 26.18], "Bongaigaon": [90.56, 26.48], "Numaligarh": [93.75, 26.63], "Barauni": [86.0, 25.47], "Koyali": [73.12, 22.37],
  "Jamnagar": [69.95, 22.35], "Vadinar": [69.72, 22.42], "Mathura": [77.67, 27.45], "Panipat": [76.97, 29.39], "Bathinda": [74.95, 30.2], "Bina": [78.2, 24.18], "Haldia": [88.06, 22.03],
  "Paradip": [86.6, 20.26], "Kochi": [76.37, 9.97], "Mangaluru": [74.85, 12.95], "Visakhapatnam": [83.25, 17.69], "Manali": [80.26, 13.17] };
const RF = rows("T3", "Oil refineries");
place("T3", "Oil refineries", KIT.numbered("Oil refineries on the map", RF, pick(RF, REF), { cap: "Four refineries cluster in Assam near the old oil fields; the giant coastal ones (Jamnagar, Vadinar) work on imported crude." }));
const FIELD = { "Mumbai High": [71.3, 19.4], "Ankleshwar": [73.0, 21.6], "Naharkatiya": [95.33, 27.28], "Mangala": [71.4, 25.9], "Krishna-Godavari": [82.3, 16.3] };
const OF = rows("T3", "Oil and gas fields");
place("T3", "Oil and gas fields", KIT.numbered("Oil and gas fields", OF, pick(OF, FIELD), { key: r => r[1] + (r[2] ? " — " + r[2] : "") }));

// T4 — factories and city nicknames
const CITYAT = { "Bengaluru": [77.59, 12.97], "Nashik": [73.79, 20.0], "Koraput": [82.71, 18.81], "Tumakuru": [77.1, 13.34], "Vadodara": [73.18, 22.31], "Kochi": [76.27, 9.93], "Mumbai": [72.88, 19.08],
  "Kolkata": [88.36, 22.57], "Visakhapatnam": [83.22, 17.69], "Vasco": [73.82, 15.4], "Gurugram": [77.03, 28.46], "Sanand": [72.38, 22.99], "Ranchi": [85.31, 23.34], "Ahmedabad": [72.57, 23.02],
  "Coimbatore": [76.96, 11.02], "Kanpur": [80.33, 26.45], "Jamshedpur": [86.2, 22.8], "Chennai": [80.27, 13.08], "Surat": [72.83, 21.17], "Dhanbad": [86.43, 23.8], "Moradabad": [78.77, 28.84],
  "Aligarh": [78.08, 27.88], "Firozabad": [78.4, 27.15], "Bhadohi": [82.57, 25.4], "Mysuru": [76.64, 12.3], "Tiruppur": [77.34, 11.11], "Dibrugarh": [94.91, 27.47] };
const WM = rows("T4", "Where is it made");
place("T4", "Where is it made", KIT.numbered("Where it is made", WM, pick(WM, CITYAT, 1), { key: r => r[1] }));
const NK = rows("T4", "Industrial nicknames");
place("T4", "Industrial nicknames", KIT.numbered("City nicknames on the map", NK, pick(NK, CITYAT, 1), { key: r => r[1], cap: "The nickname's number sits on its city. Kanpur and Ahmedabad both earned 'Manchester' for their cotton mills." }));

// T5 — railway zones and factories
const HQ = { "New Delhi": [77.21, 28.64], "Gorakhpur": [83.37, 26.76], "Maligaon": [91.69, 26.16], "Kolkata": [88.36, 22.57], "Mumbai": [72.84, 18.94], "Chennai": [80.27, 13.08],
  "Secunderabad": [78.5, 17.44], "Hubballi": [75.12, 15.36], "Jaipur": [75.79, 26.91], "Jabalpur": [79.94, 23.18], "Prayagraj": [81.85, 25.44], "Bilaspur": [82.14, 22.08],
  "Bhubaneswar": [85.82, 20.3], "Hajipur": [85.21, 25.69] };
const ZN = rows("T5", "Railway zones");
place("T5", "Railway zones", KIT.numbered("Zonal headquarters", ZN, pick(ZN, HQ, 1), { key: r => r[1], cap: "Kolkata hosts three zones (Eastern, South Eastern and Metro) and Mumbai two (Central and Western)." }));
const FAC = { "Chennai": [80.22, 13.1], "Chittaranjan": [86.87, 23.87], "Varanasi": [83.0, 25.32], "Kapurthala": [75.38, 31.38], "Raebareli": [81.24, 26.23], "Patiala": [76.39, 30.34],
  "Yelahanka": [77.6, 13.1], "Bela": [84.97, 25.95], "Madhepura": [86.79, 25.92] };
const RFX = rows("T5", "Railway factories");
place("T5", "Railway factories", KIT.numbered("Railway factories", RFX, pick(RFX, FAC, 1), { key: r => r[1] }),
  KIT.photos("Trains in pictures", [["Vande Bharat Express", "Built at ICF, Chennai"], ["WAG-12", "Madhepura · 12,000 hp"], ["Rajdhani Express", "1969"], ["Shatabdi Express", "1988"]]));

// T6 — milestones on a timeline, records and mountain railways
place("T6", "Railway milestones", { k: "tlfig", title: "Railway milestones", rows: rows("T6", "Railway milestones").map(r => [parseInt(r[1], 10), r[0], ""]).filter(r => r[0]),
  cap: "From the first goods train (1851) and the first passenger train (16 April 1853) to the underwater metro in Kolkata." });
place("T6", "Mountain railways", KIT.photos("Mountain railways in pictures", rows("T6", "Mountain railways")),
  { k: "mapfig", title: "Where the mountain railways run", pins: [["Darjeeling", 88.26, 27.04, "DHR · UNESCO 1999"], ["Ooty", 76.7, 11.41, "Nilgiri · UNESCO 2005"], ["Shimla", 77.17, 31.1, "Kalka–Shimla · UNESCO 2008", "l"],
    ["Matheran", 73.27, 18.99, "", "l"], ["Kangra", 76.27, 32.1, ""]], cap: "The first three are one UNESCO World Heritage site: the Mountain Railways of India." });
place("T6", "Railway records", KIT.photos("Records in pictures", [["Chenab Rail Bridge", "World's highest railway arch bridge"], ["New Pamban Bridge", "First vertical-lift sea bridge"], ["Bogibeel Bridge", "Longest rail-cum-road bridge"],
  ["Ghum railway station", "Highest station"], ["Fairy Queen (locomotive)", "Oldest working steam engine"], ["Kochi Water Metro", "First water metro"]], { name: r => r[0].replace(/ \(.*\)$/, "") }));

// T7 — the long roads drawn on the map, tunnels and bridges in pictures
const NH44 = [[74.8, 34.08], [75.0, 32.7], [75.86, 30.9], [77.2, 28.6], [77.7, 27.2], [78.2, 26.2], [79.1, 21.15], [78.5, 17.4], [77.6, 14.7], [77.59, 12.97], [78.15, 11.65], [77.7, 9.9], [77.54, 8.08]];
const EW = [[69.6, 21.64], [73.2, 22.3], [75.8, 25.2], [78.2, 25.45], [80.33, 26.45], [83.37, 26.76], [86.0, 26.2], [88.43, 26.71], [91.75, 26.18], [92.8, 24.83]];
const GQ = [[77.21, 28.64], [72.88, 19.08], [77.59, 12.97], [80.27, 13.08], [85.82, 20.3], [88.36, 22.57], [77.21, 28.64]];
place("T7", "From where to where", { k: "mapfig", title: "India's great road corridors",
  under: line(GQ, "#d4a017", "Golden Quadrilateral", [79.5, 23.5], true) + line(NH44, "#c0392b", "NH-44", [76.0, 20.5]) + line(EW, "#2f6db5", "East–West Corridor", [80.5, 27.8]),
  pins: [["Srinagar", 74.8, 34.08, "NH-44 starts"], ["Kanyakumari", 77.54, 8.08, "NH-44 ends", "l"], ["Porbandar", 69.6, 21.64, "", "l"], ["Silchar", 92.8, 24.83, ""]],
  cap: "Red: NH-44, the longest highway (Srinagar–Kanyakumari). Blue: the East–West Corridor (Porbandar–Silchar). Gold dashes: the Golden Quadrilateral joining Delhi, Mumbai, Chennai and Kolkata. Routes simplified." });
place("T7", "Tunnels, bridges", KIT.photos("Tunnels and bridges in pictures", [["Atal Tunnel", "Himachal · 9.02 km"], ["Bogibeel Bridge", "Assam"], ["Bhupen Hazarika Setu", "Assam"], ["Atal Setu", "Mumbai Trans Harbour Link"],
  ["Mahatma Gandhi Setu", "Patna, Bihar"], ["Sudarshan Setu", "Gujarat"], ["Sela Tunnel", "Arunachal Pradesh"], ["Umling La", "Ladakh · highest motorable road"]]));

// T8 — seaports
const PORT = { "Syama Prasad": [88.3, 22.55], "Paradip": [86.67, 20.27], "Visakhapatnam": [83.29, 17.69], "Kamarajar": [80.33, 13.26], "V. O.": [78.18, 8.76], "Cochin": [76.27, 9.96],
  "New Mangalore": [74.81, 12.92], "Mormugao": [73.8, 15.41], "Mumbai": [72.84, 18.94], "Deendayal": [70.22, 23.03], "Port Blair": [92.73, 11.67], "Vizhinjam": [76.99, 8.38],
  "Mundra": [69.72, 22.74], "Vadhavan": [72.68, 19.95], "Dhamra": [86.97, 20.8], "Krishnapatnam": [80.12, 14.25] };
const PT = rows("T8", "Ports and");
place("T8", "Ports and", KIT.numbered("Seaports on the coast", PT, pick(PT, PORT), { key: r => r[1], cap: "Kolkata is the only riverine major port; Kandla (Deendayal) is a tidal port; Vizhinjam is India's first deep-water transshipment port." }));

// T9 — airports
const AIR = { "Delhi": [77.1, 28.56], "Mumbai": [72.87, 19.09], "Bengaluru": [77.71, 13.2], "Hyderabad": [78.43, 17.24], "Kolkata": [88.45, 22.65], "Ahmedabad": [72.63, 23.07],
  "Lucknow": [80.89, 26.76], "Guwahati": [91.59, 26.11], "Bhubaneswar": [85.82, 20.25], "Amritsar": [74.8, 31.71], "Indore": [75.8, 22.72], "Bhopal": [77.34, 23.29], "Patna": [85.09, 25.59],
  "Ranchi": [85.32, 23.31], "Nagpur": [79.05, 21.09], "Raipur": [81.74, 21.18], "Sri Vijaya Puram": [92.73, 11.64], "Ayodhya": [82.2, 26.8], "North Goa": [73.87, 15.74], "Leh": [77.55, 34.14], "Kochi": [76.39, 10.15] };
const AP = rows("T9", "Airports and");
place("T9", "Airports and", KIT.numbered("Airports and their cities", AP, pick(AP, AIR, 1), { key: r => r[1] + " — " + r[0].replace(/ (International )?Airport$/, ""), cap: "Each number is a city's airport, named after a leader or a local figure." }));

// T10 — national waterways and pipelines drawn on the map
const NW = [[[81.85, 25.44], [83.0, 25.3], [85.1, 25.6], [87.0, 25.25], [87.9, 24.8], [88.3, 22.6], [88.06, 22.03]], [[95.67, 27.83], [94.9, 27.48], [94.2, 26.8], [92.8, 26.6], [91.75, 26.18], [89.98, 26.02]],
  [[76.6, 8.89], [76.33, 9.5], [76.27, 9.97], [76.2, 10.2]], [[82.24, 16.93], [81.1, 16.3], [80.3, 15.2], [80.27, 13.08], [79.83, 11.93]], [[85.23, 20.95], [86.3, 20.7], [86.9, 20.8], [87.98, 21.83]]];
place("T10", "The first five", { k: "mapfig", title: "The first five National Waterways",
  under: NW.map((p, i) => line(p, "#2f6db5", "NW-" + (i + 1), [p[0][0] + (i === 1 ? -2.5 : 0.3), p[0][1] + (i === 0 ? 0.9 : i === 2 ? -0.8 : 0.6)])).join(""),
  pins: [["Prayagraj", 81.85, 25.44, "", "l"], ["Haldia", 88.06, 22.03, ""], ["Dhubri", 89.98, 26.02, "", "l"], ["Sadiya", 95.67, 27.83, ""]],
  cap: "NW-1 Ganga (Prayagraj–Haldia), NW-2 Brahmaputra (Sadiya–Dhubri), NW-3 West Coast Canal (Kollam–Kottapuram), NW-4 Kakinada–Puducherry, NW-5 the Odisha–Bengal canals and rivers. The first multimodal terminal opened at Varanasi on NW-1 (2018). Courses simplified." });
const PIPE = [[[[72.65, 21.1], [75.0, 23.2], [77.3, 24.6], [79.5, 25.8], [81.6, 26.45]], "#c0392b", "HBJ (gas)", [75.0, 24.6]], [[[95.33, 27.28], [91.8, 26.18], [88.4, 26.6], [86.0, 25.47]], "#7a4a22", "Naharkatiya–Barauni (crude)", [88.6, 28.9]],
  [[[69.6, 22.32], [72.05, 23.12], [74.6, 24.9], [77.67, 27.45]], "#7a4a22", "Salaya–Mathura (crude)", [69.0, 26.5]], [[[70.05, 22.47], [72.6, 25.5], [75.8, 27.5], [77.29, 28.75]], "#2f8f4e", "Jamnagar–Loni (LPG)", [70.5, 29.2]],
  [[[71.3, 19.4], [72.94, 18.88]], "#7a4a22", "Mumbai High–Uran", [69.2, 18.6]], [[[84.92, 26.65], [85.0, 27.15]], "#2f6db5", "Motihari–Amlekhganj", [79.6, 28.0]], [[[88.43, 26.71], [88.95, 25.6]], "#2f6db5", "India–Bangladesh", [89.3, 25.3]]];
place("T10", "Pipelines", { k: "mapfig", title: "Pipelines across India", under: PIPE.map(p => line(p[0], p[1], p[2], p[3], true)).join(""),
  cap: "Red: natural gas. Brown: crude oil. Green: LPG. Blue: petrol and diesel to Nepal and Bangladesh. Routes simplified." });

const ALL = SP.map(r => [r[0], r[1], "Steel plant", r[2] || "Steel plant", "T1"]).concat(RF.map(r => [r[0], r[1], "Refinery", r[2] || "Refinery", "T3"]), PT.map(r => [r[0], r[1], "Port", r[2] || "Port", "T8"]))
  .filter(r => KIT.code(r[1]));
place("T1", "start", { k: "indiamap", title: "Tap a state — its steel plants, refineries and ports", cap: "Built from the lessons' tables. Revise has a Map quiz on the same list." });
VISUAL = { mode: true, VIS: { key: "industry_photos_v1", word: "place", words: "plants, refineries and ports", search: "", quiz: "plant or port", ask: "Which state —", rows: ALL, tabs: [["vmap", "Map quiz"], ["vphotos", "Photo quiz"]] } };
