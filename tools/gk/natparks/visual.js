/* National Parks of India — every park pinned on the map by region, a clickable state map with a Map quiz, a parks-per-state
   chart, animal photos and a World Heritage timeline (drawn by study-visual.js). Places are approximate park centres. */
const P = (w, n, c) => [w, n, c];
const AT = {
  "Hemis": [77.4, 33.85], "Dachigam": [75.0, 34.13], "Kishtwar": [75.9, 33.4], "Kazinag": [74.2, 34.2], "City Forest (Salim Ali)": [74.82, 34.1],
  "Great Himalayan": [77.6, 31.75], "Pin Valley": [78.0, 31.95], "Inderkilla": [77.25, 32.0], "Khirganga": [77.45, 31.95], "Simbalbara": [77.45, 30.45],
  "Kalesar": [77.5, 30.35], "Sultanpur": [76.89, 28.46], "Jim Corbett": [78.8, 29.55], "Rajaji": [78.15, 30.05], "Nanda Devi": [79.85, 30.4], "Valley of Flowers": [79.6, 30.72],
  "Gangotri": [79.0, 31.0], "Govind": [78.3, 31.1], "Dudhwa": [80.6, 28.5],
  "Ranthambore": [76.45, 26.0], "Sariska": [76.4, 27.3], "Keoladeo Ghana": [77.52, 27.17], "Desert": [70.6, 26.5], "Mukundra Hills": [75.9, 24.9], "Gir": [70.8, 21.15],
  "Velavadar (Blackbuck)": [72.05, 22.03], "Gulf of Kutch Marine": [69.9, 22.5], "Vansda": [73.4, 20.75], "Bhagwan Mahavir (Mollem)": [74.25, 15.35],
  "Sanjay Gandhi (Borivali)": [72.9, 19.22], "Tadoba": [79.35, 20.25], "Pench (Jawaharlal Nehru)": [79.2, 21.6], "Gugamal": [77.1, 21.4], "Chandoli": [73.85, 17.15], "Nawegaon": [80.15, 20.95],
  "Kanha": [80.6, 22.3], "Bandhavgarh": [81.0, 23.7], "Panna": [80.0, 24.7], "Pench (Indira Priyadarshini)": [79.3, 21.8], "Satpura": [78.2, 22.5], "Kuno": [77.35, 25.7],
  "Madhav": [77.85, 25.45], "Sanjay": [82.0, 23.85], "Van Vihar": [77.37, 23.23], "Fossil (Ghughua)": [80.8, 23.0], "Dinosaur Fossil": [74.8, 22.4],
  "Indravati": [80.7, 19.2], "Kanger Ghati (Kanger Valley)": [81.95, 18.85], "Guru Ghasidas": [82.3, 23.6],
  "Valmiki": [84.1, 27.3], "Betla": [84.2, 23.9], "Simlipal": [86.4, 21.8], "Bhitarkanika": [86.95, 20.7], "Sundarban": [88.9, 21.95], "Jaldapara": [89.3, 26.65],
  "Gorumara": [88.8, 26.7], "Buxa": [89.5, 26.7], "Neora Valley": [88.75, 27.05], "Singalila": [88.0, 27.15], "Khangchendzonga": [88.3, 27.65],
  "Kaziranga": [93.4, 26.6], "Manas": [91.0, 26.7], "Nameri": [92.8, 26.95], "Orang (Rajiv Gandhi)": [92.3, 26.55], "Dibru-Saikhowa": [95.4, 27.6], "Dihing Patkai": [95.5, 27.3],
  "Raimona": [89.95, 26.6], "Namdapha": [96.4, 27.5], "Mouling": [94.9, 28.6], "Keibul Lamjao": [93.85, 24.5], "Sirohi": [94.5, 25.1], "Nokrek": [90.3, 25.68],
  "Balphakram": [90.85, 25.35], "Phawngpui (Blue Mountain)": [93.0, 22.65], "Murlen": [93.3, 23.6], "Ntangki (Intanki)": [93.5, 25.6], "Clouded Leopard": [91.32, 23.66], "Bison (Rajbari)": [91.75, 23.4],
  "Bandipur": [76.55, 11.7], "Nagarhole (Rajiv Gandhi)": [76.15, 12.0], "Kudremukh": [75.25, 13.2], "Bannerghatta": [77.58, 12.8], "Anshi": [74.4, 15.0],
  "Periyar": [77.2, 9.5], "Eravikulam": [77.07, 10.15], "Silent Valley": [76.45, 11.08], "Anamudi Shola": [77.1, 10.25], "Mathikettan Shola": [77.25, 9.98], "Pambadum Shola": [77.2, 10.12],
  "Mudumalai": [76.6, 11.6], "Mukurthi": [76.5, 11.35], "Anamalai (Indira Gandhi)": [77.0, 10.4], "Gulf of Mannar Marine": [79.0, 9.15], "Guindy": [80.23, 13.0],
  "Papikonda": [81.6, 17.5], "Sri Venkateswara": [79.3, 13.6], "Rajiv Gandhi (Rameswaram)": [78.55, 14.73], "Kasu Brahmananda Reddy": [78.42, 17.42], "Mrugavani": [78.35, 17.37],
  "Mahavir Harina Vanasthali": [78.57, 17.33], "Mahatma Gandhi Marine (Wandoor)": [92.6, 11.6], "Rani Jhansi Marine": [93.03, 12.05], "Saddle Peak": [92.95, 13.15],
  "Mount Harriet (Mount Manipur)": [92.73, 11.72], "Campbell Bay": [93.9, 7.0], "Galathea Bay": [93.85, 6.85], "South Button Island": [93.02, 12.22], "Middle Button Island": [93.0, 12.27], "North Button Island": [92.98, 12.32]
};
const REG = { N2: ["The north", "90 30 175 170"], N3: ["The west", "20 190 230 265"], N4: ["The centre", "110 220 170 165"], N5: ["The east", "280 180 140 170"],
  N6: ["The north-east", "395 165 150 145"], N7: ["The south", "100 435 145 145"], N8: ["Andhra, Telangana and the islands", "175 385 320 240"] };
// each region: numbered pins (the parks are close together) with the key beside the map
Object.entries(REG).forEach(([L, [name, vb]]) => {
  const R = rows(L, "National parks of");
  R.forEach(r => { if (!AT[r[0]]) fail("natparks: no place for " + r[0]); });
  place(L, "story", { k: "mapfig", title: `${name}: every national park`, vb,
    pins: R.map((r, i) => [String(i + 1), AT[r[0]][0], AT[r[0]][1], r[0] + " — " + r[1], "n"]),
    facts: R.map((r, i) => [`${i + 1} · ${r[0]}`, r[1] + (r[2] ? " — " + r[2].replace(/\.$/, "") : "")]),
    cap: "Numbers match the list. Places are approximate park centres. Use ＋ or ⛶ to zoom in." });
});
// all parks, by state: the clickable map, a chart and the Map quiz use these rows
const ALL = ["N2", "N3", "N4", "N5", "N6", "N7", "N8"].flatMap(L => rows(L, "National parks of").map(r => [r[0], r[1], "National park", r[2] || "National park", L]));
place("N1", "Records", { k: "indiamap", title: "Tap a state to see its national parks", cap: "Every national park in this app, by state. Punjab, Delhi and Lakshadweep have none." },
  { k: "statechart", title: "National parks per state", cap: "Madhya Pradesh leads with 11, then the Andaman and Nicobar Islands (9)." });
place("N1", "story", { k: "mapfig", title: "The record-holders", pins: [["Corbett — first (1936)", 78.8, 29.55, "", "l"], ["Hemis — largest", 77.4, 33.85, ""], ["South Button — smallest", 93.02, 12.22, "", "l"],
  ["Keibul Lamjao — floating", 93.85, 24.5, ""], ["Kuno — cheetahs (2022)", 77.35, 25.7, "", "l"], ["Gir — lions", 70.8, 21.15, ""]], cap: "First, largest, smallest, floating — and the two big-cat homes." });
place("N9", "Animal", { k: "photos", title: "The animals in pictures", items: [
  P("Asiatic_lion", "Asiatic lion", "Gir"), P("Indian_rhinoceros", "One-horned rhino", "Kaziranga"), P("Snow_leopard", "Snow leopard", "Hemis"), P("Kashmir_stag", "Hangul", "Dachigam"),
  P("Eld's_deer", "Sangai", "Keibul Lamjao"), P("Barasingha", "Barasingha", "Kanha"), P("Nilgiri_tahr", "Nilgiri tahr", "Eravikulam"), P("Lion-tailed_macaque", "Lion-tailed macaque", "Silent Valley"),
  P("Saltwater_crocodile", "Saltwater crocodile", "Bhitarkanika"), P("Great_Indian_bustard", "Great Indian bustard", "Desert NP"), P("Wild_water_buffalo", "Wild water buffalo", "Indravati"),
  P("Golden_langur", "Golden langur", "Manas"), P("Cheetah", "Cheetah", "Kuno"), P("Red_panda", "Red panda", "Singalila"), P("Blackbuck", "Blackbuck", "Velavadar")] });
place("N10", "National parks on the World Heritage list", { k: "tlfig", title: "World Heritage parks, year by year",
  rows: rows("N10", "National parks on the World Heritage list").map(r => [+r[1], r[0], r[2].split(" — ")[0].replace(/\.$/, "")]), cap: "Kaziranga, Manas and Keoladeo were the first (1985); Khangchendzonga (2016) is the only mixed site." },
  { k: "photos", title: "In pictures", items: [P("Kaziranga_National_Park", "Kaziranga", "1985"), P("Keoladeo_National_Park", "Keoladeo", "1985"), P("Sundarbans_National_Park", "Sundarbans", "1987"),
    P("Valley_of_Flowers_National_Park", "Valley of Flowers", "2005"), P("Great_Himalayan_National_Park", "Great Himalayan", "2014"), P("Khangchendzonga_National_Park", "Khangchendzonga", "2016")] });
VISUAL = { mode: true, VIS: { key: "natparks_photos_v1", word: "national park", words: "national parks", search: "", quiz: "animal or park", ask: "In which state or UT is", rows: ALL,
  tabs: [["vmap", "Map quiz"], ["vphotos", "Photo quiz"]] } };
