/* UNESCO Heritage & Monuments — a numbered map of every World Heritage site, a clickable state map with a Map quiz,
   a sites-per-state chart, the year-by-year timeline and photo galleries (drawn by study-visual.js). Places are approximate. */
const P = (w, n, c) => [w, n, c];
const AT = {
  "Rock Shelters of Bhimbetka": [77.61, 22.94], "Dholavira: a Harappan City": [70.21, 23.89], "Buddhist Monuments at Sanchi": [77.74, 23.48],
  "Mahabodhi Temple Complex, Bodh Gaya": [84.99, 24.70], "Nalanda Mahavihara": [85.44, 25.14], "Ancient Buddhist Site of Sarnath": [83.02, 25.38],
  "Ajanta Caves": [75.70, 20.55], "Ellora Caves": [75.18, 20.03], "Elephanta Caves": [72.93, 18.96],
  "Group of Monuments at Mahabalipuram": [80.19, 12.62], "Sun Temple, Konark": [86.09, 19.89], "Khajuraho Group of Monuments": [79.93, 24.85],
  "Group of Monuments at Hampi": [76.46, 15.33], "Group of Monuments at Pattadakal": [75.82, 15.95], "Great Living Chola Temples": [79.13, 10.78],
  "Rani ki Vav, Patan": [72.10, 23.86], "Kakatiya Rudreshwara (Ramappa) Temple": [79.94, 18.26], "Sacred Ensembles of the Hoysalas": [75.86, 13.16],
  "Agra Fort": [78.02, 27.18], "Taj Mahal": [78.04, 27.17], "Fatehpur Sikri": [77.66, 27.09], "Humayun's Tomb": [77.25, 28.59],
  "Qutb Minar and its Monuments": [77.19, 28.52], "Red Fort Complex": [77.24, 28.66], "Champaner-Pavagadh Archaeological Park": [73.53, 22.49],
  "Hill Forts of Rajasthan": [74.65, 24.89], "Moidams – the Mound-Burial System of the Ahom Dynasty": [94.85, 26.94], "Maratha Military Landscapes of India": [73.44, 18.23],
  "Churches and Convents of Goa": [73.91, 15.50], "Chhatrapati Shivaji Terminus": [72.84, 18.94], "Jantar Mantar, Jaipur": [75.82, 26.92],
  "Capitol Complex, Chandigarh": [76.81, 30.76], "Historic City of Ahmedabad": [72.58, 23.02], "Victorian Gothic and Art Deco Ensembles of Mumbai": [72.83, 18.93],
  "Jaipur City": [75.82, 26.92], "Santiniketan": [87.68, 23.68],
  "Kaziranga National Park": [93.37, 26.58], "Manas Wildlife Sanctuary": [91.0, 26.7], "Keoladeo National Park": [77.52, 27.17], "Sundarbans National Park": [88.9, 21.95],
  "Nanda Devi and Valley of Flowers National Parks": [79.85, 30.4], "Great Himalayan National Park Conservation Area": [77.6, 31.75], "Khangchendzonga National Park": [88.3, 27.65],
  "Western Ghats": [76.3, 11.5]
};
const SITE_TABLES = { H2: "Ancient and Buddhist", H3: "The temple sites", H4: "Sultanate, Mughal", H5: "Colonial, modern", H6: "Natural sites" };
const NAMES = { H2: "Ancient and Buddhist sites", H3: "Temple sites", H4: "Sultanate, Mughal and fort sites", H5: "Colonial, modern and city sites", H6: "Natural and mixed sites" };
// each site group: numbered pins with the key beside the map
Object.entries(SITE_TABLES).forEach(([L, t]) => {
  const R = rows(L, t);
  R.forEach(r => { if (!AT[r[0]]) fail("heritage: no place for " + r[0]); });
  place(L, "story", { k: "mapfig", title: `${NAMES[L]} on the map`,
    pins: R.map((r, i) => [String(i + 1), AT[r[0]][0], AT[r[0]][1], r[0] + " — " + r[1] + ", " + r[2], "n"]),
    facts: R.map((r, i) => [`${i + 1} · ${r[0]}`, r[1] + ", " + r[2]]),
    cap: "Numbers match the list. Places are approximate; a site in several places is pinned at one of them." });
});
// all single-state sites: the clickable state map, the chart and the Map quiz use these rows
const ALL = Object.entries(SITE_TABLES).flatMap(([L, t]) => rows(L, t).filter(r => !/,| and /.test(r[1])).map(r => [r[0], r[1], "World Heritage site", r[2] + (r[3] ? " — " + r[3] : ""), L]));
place("H1", "Counts and firsts", { k: "indiamap", title: "Tap a state to see its World Heritage sites", cap: "Sites that lie in one state or UT. The Western Ghats, the Mountain Railways and the Maratha forts span several states and are not shown here." },
  { k: "statechart", title: "World Heritage sites per state (one-state sites only)", cap: "Maharashtra leads; add its share of the Maratha forts and the Western Ghats, and its lead grows." });
place("H1", "India's additions", { k: "tlfig", title: "India's sites since 2014, year by year", vertical: true,
  rows: rows("H1", "India's additions").filter(r => !/^Nothing/.test(r[1])).map(r => [+r[0], r[1].split(";")[0].replace(/\s*\(.*?\)\s*/g, " ").trim() + (r[1].includes(";") ? " and more" : ""), r[2] + " · total " + r[3]]),
  cap: "No site was added in 2015, 2020 or 2022." });
place("H2", "Ancient and Buddhist", { k: "photos", title: "In pictures", items: [P("Bhimbetka_rock_shelters", "Bhimbetka", "Madhya Pradesh · 2003"), P("Dholavira", "Dholavira", "Gujarat · 2021"),
  P("Sanchi", "Sanchi Stupa", "Madhya Pradesh · 1989"), P("Mahabodhi_Temple", "Mahabodhi Temple", "Bihar · 2002"), P("Nalanda", "Nalanda", "Bihar · 2016"),
  P("Dhamek_Stupa", "Dhamek Stupa, Sarnath", "Uttar Pradesh · 2026"), P("Ajanta_Caves", "Ajanta", "Maharashtra · 1983"), P("Kailasa_temple,_Ellora", "Kailasa, Ellora", "Maharashtra · 1983"),
  P("Elephanta_Caves", "Elephanta", "Maharashtra · 1987")] });
place("H3", "The temple sites", { k: "photos", title: "In pictures", items: [P("Shore_Temple", "Shore Temple", "Mahabalipuram · Pallava"), P("Konark_Sun_Temple", "Konark", "Odisha · Eastern Ganga"),
  P("Kandariya_Mahadeva_Temple", "Kandariya Mahadeva", "Khajuraho · Chandela"), P("Vijaya_Vitthala_Temple", "Vitthala temple", "Hampi · Vijayanagara"),
  P("Pattadakal", "Pattadakal", "Karnataka · Chalukya"), P("Brihadisvara_Temple,_Thanjavur", "Brihadisvara", "Thanjavur · Chola"),
  P("Rani_ki_vav", "Rani ki Vav", "Patan · Solanki"), P("Ramappa_Temple", "Ramappa", "Telangana · Kakatiya"), P("Chennakeshava_Temple,_Belur", "Chennakeshava, Belur", "Karnataka · Hoysala")] });
place("H4", "Sultanate, Mughal", { k: "photos", title: "In pictures", items: [P("Taj_Mahal", "Taj Mahal", "Agra · 1983"), P("Agra_Fort", "Agra Fort", "Agra · 1983"),
  P("Buland_Darwaza", "Buland Darwaza", "Fatehpur Sikri · 1986"), P("Humayun's_tomb", "Humayun's Tomb", "Delhi · 1993"), P("Qutb_Minar", "Qutb Minar", "Delhi · 1993"),
  P("Red_Fort", "Red Fort", "Delhi · 2007"), P("Chittor_Fort", "Chittorgarh", "Hill Forts · 2013"), P("Raigad_Fort", "Raigad", "Maratha forts · 2025"), P("Gingee_Fort", "Gingee", "Maratha forts · 2025")] });
place("H5", "Colonial, modern", { k: "photos", title: "In pictures", items: [P("Basilica_of_Bom_Jesus", "Bom Jesus", "Old Goa · 1986"), P("Chhatrapati_Shivaji_Terminus", "CST", "Mumbai · 2004"),
  P("Jantar_Mantar,_Jaipur", "Jantar Mantar", "Jaipur · 2010"), P("Capitol_Complex", "Capitol Complex", "Chandigarh · 2016"), P("Sidi_Saiyyed_Mosque", "Sidi Saiyyed jali", "Ahmedabad · 2017"),
  P("Rajabai_Clock_Tower", "Rajabai Tower", "Mumbai · 2018"), P("Hawa_Mahal", "Hawa Mahal", "Jaipur City · 2019"), P("Darjeeling_Himalayan_Railway", "Darjeeling railway", "1999")] });
place("H7", "Sultanate, Mughal and Deccan", { k: "photos", title: "Who built it — in pictures", items: [P("Charminar", "Charminar", "Muhammad Quli Qutb Shah"), P("Gol_Gumbaz", "Gol Gumbaz", "Muhammad Adil Shah"),
  P("Tomb_of_I'timād-ud-Daulah", "Itimad-ud-Daulah", "Nur Jahan"), P("Jama_Masjid,_Delhi", "Jama Masjid", "Shah Jahan"), P("Alai_Darwaza", "Alai Darwaza", "Alauddin Khalji"),
  P("Bara_Imambara", "Bara Imambara", "Asaf-ud-Daula"), P("Gateway_of_India", "Gateway of India", "George Wittet"), P("India_Gate", "India Gate", "Edwin Lutyens"),
  P("Victoria_Memorial,_Kolkata", "Victoria Memorial", "William Emerson")] });
VISUAL = { mode: true, VIS: { key: "heritage_photos_v1", word: "monument", words: "monuments", search: "", quiz: "monument", ask: "In which state or UT is", rows: ALL,
  tabs: [["vmap", "Map quiz"], ["vphotos", "Photo quiz"]] } };
