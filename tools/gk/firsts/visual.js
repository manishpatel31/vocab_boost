/* Firsts, Superlatives & National Symbols — the emblem and the living symbols in pictures, first women in pictures, India's
   record bridges and tunnels and the nickname cities on numbered maps, and the world's record structures on a world map
   (drawn by study-visual.js). place(), rows() and KIT come from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];

// F1 — the emblem and where it comes from
place("F1", "The State Emblem", { k: "photos", title: "From Sarnath to the emblem", items: [
  P("Lion_Capital_of_Ashoka", "Lion Capital of Ashoka", "Sarnath, about 250 BCE"), P("State_Emblem_of_India", "State Emblem of India", "Adopted 26 January 1950"),
  P("Pingali_Venkayya", "Pingali Venkayya", "His design led to the tricolour"), P("Rabindranath_Tagore", "Rabindranath Tagore", "Jana Gana Mana"),
  P("Bankim_Chandra_Chattopadhyay", "Bankim Chandra Chattopadhyay", "Vande Mataram"), P("Meghnad_Saha", "Meghnad Saha", "Calendar Reform Committee")] });

// F2 — the living symbols
place("F2", "National symbols from nature", { k: "photos", title: "The living symbols in pictures", items: [
  P("Bengal_tiger", "Tiger", "National animal"), P("Indian_peafowl", "Indian peafowl", "National bird (1963)"), P("Nelumbo_nucifera", "Lotus", "National flower"),
  P("Ficus_benghalensis", "Banyan", "National tree"), P("Mango", "Mango", "National fruit"), P("Ganges", "Ganga", "National river (2008)"),
  P("South_Asian_river_dolphin", "Ganges river dolphin", "National aquatic animal (2009)"), P("Indian_elephant", "Indian elephant", "National heritage animal (2010)"),
  P("Lactobacillus_delbrueckii_subsp._bulgaricus", "Lactobacillus", "National microbe (2012)")] });

// F4 — first women in pictures
place("F4", "First women", KIT.photos("First women in pictures", rows("F4", "First women").filter(r => /Indira|Pratibha|Sarojini|Sucheta|Amrit Kaur|Vijaya|Fathima|Kiran|Bachendri|Kalpana|Malleswari|Sindhu/.test(r[1])).map(r => [r[1], r[0].replace(/^The first /, "First ")]),
  { n: 12, wiki: r => ({ "M. Fathima Beevi": "Fathima Beevi", "P. V. Sindhu": "P. V. Sindhu" })[r[0]] || r[0] }));

// F7 — India's record bridges, tunnels and roads on the map
const AT7 = {
  "Atal Setu": [72.95, 18.95], "Bhupen Hazarika Setu": [95.62, 27.78], "Bogibeel Bridge": [94.8, 27.42], "Vembanad Rail Bridge": [76.25, 9.99],
  "Chenab Bridge": [74.88, 33.15], "Anji Khad Bridge": [74.95, 33.05], "T-50": [75.2, 33.3], "Tunnel 8": [78.6, 30.15],
  "Dr Syama Prasad Mookerjee": [75.27, 33.03], "Atal Tunnel": [77.15, 32.4], "Zojila Tunnel": [75.5, 34.27], "NH-44": [77.6, 22.5],
  "Delhi–Mumbai Expressway": [75.0, 24.5], "Samruddhi Mahamarg": [76.8, 20.0]
};
const R7 = rows("F7", "Bridges, tunnels and roads");
const at7 = h => { const k = Object.keys(AT7).find(k => h.startsWith(k)); if (!k) fail("firsts: no place for " + h); return AT7[k]; };
place("F7", "Bridges, tunnels and roads", { k: "mapfig", title: "India's record bridges, tunnels and roads",
  pins: R7.map((r, i) => [String(i + 1), at7(r[1])[0], at7(r[1])[1], r[0] + " — " + r[1], "n"]),
  facts: R7.map((r, i) => [`${i + 1} · ${r[0]}`, r[1]]),
  cap: "Numbers match the list. Pins for NH-44 and the expressways mark a point on the route. Kashmir's cluster is easier to read with ＋ or ⛶." });
const AT7B = { "Statue of Unity": [73.72, 21.84], "Narendra Modi Stadium": [72.6, 23.09], "Buland Darwaza": [77.66, 27.09], "Gol Gumbaz": [75.74, 16.83],
  "Qutub Minar": [77.19, 28.52], "Indian Museum": [88.35, 22.56], "National Library": [88.33, 22.53], "Hikkim": [78.07, 32.25], "Kushok Bakula": [77.55, 34.14], "Indira Gandhi International": [77.1, 28.56] };
const R7B = rows("F7", "Buildings and places");
place("F7", "Buildings and places", { k: "mapfig", title: "Where the record buildings stand",
  pins: R7B.map((r, i) => { const k = Object.keys(AT7B).find(k => r[1].startsWith(k)); if (!k) fail("firsts: no place for " + r[1]); return [String(i + 1), AT7B[k][0], AT7B[k][1], r[1], "n"]; }),
  facts: R7B.map((r, i) => [`${i + 1} · ${r[1]}`, r[0]]), cap: "Numbers match the list; the two Kolkata records sit together." });

// F8 — the world's record structures
const AT8 = { "Burj Khalifa": [55.27, 25.2], "Danyang": [120.5, 31.8], "Hong Kong": [113.75, 22.3], "Huajiang": [105.6, 25.7], "Gotthard": [8.8, 46.6],
  "Lærdal": [7.4, 61.05], "Trans-Siberian": [104.3, 52.3], "Great Wall": [116.57, 40.43], "Grand Canal": [118.0, 34.0], "Angkor": [103.87, 13.41],
  "Hartsfield": [-84.43, 33.64], "Grand Central": [-73.98, 40.75] };
const R8 = rows("F8", "Built by people");
place("F8", "Built by people", { k: "worldfig", title: "The world's record structures", minw: 640,
  pins: R8.map((r, i) => { const k = Object.keys(AT8).find(k => r[1].startsWith(k)); if (!k) fail("firsts: no place for " + r[1]); return [String(i + 1), AT8[k][0], AT8[k][1], r[1], "n"]; }),
  legend: R8.map((r, i) => [`${i + 1} ${r[1]}`, r[0].replace(/^the /, "")]), cap: "China holds the bridge and canal records; the Alps and Norway the tunnel records." },
  { k: "photos", title: "In pictures", items: [P("Burj_Khalifa", "Burj Khalifa", "828 m"), P("Danyang–Kunshan_Grand_Bridge", "Danyang–Kunshan", "164.8 km"),
    P("Huajiang_Grand_Canyon_Bridge", "Huajiang Grand Canyon Bridge", "2025"), P("Gotthard_Base_Tunnel", "Gotthard Base Tunnel", "57 km"),
    P("Great_Wall_of_China", "Great Wall of China", "Longest structure"), P("Angkor_Wat", "Angkor Wat", "Largest religious monument")] });
place("F8", "Living things", KIT.photos("Record-breakers of nature", rows("F8", "Living things").map(r => [r[1], r[0].replace(/^the /, "")]),
  { n: 11, wiki: r => ({ "Coast redwoods": "Sequoia sempervirens", "African bush elephant": "African bush elephant" })[r[0]] || r[0] }));

// F9 — the nickname cities
const AT9 = { "Jaipur": [75.79, 26.91], "Jodhpur": [73.02, 26.24], "Jaisalmer": [70.91, 26.92], "Udaipur": [73.71, 24.58], "Kolkata": [88.36, 22.57],
  "Lucknow": [80.95, 26.85], "Hyderabad": [78.48, 17.39], "Bhubaneswar": [85.82, 20.3], "Mumbai": [72.88, 19.08], "Kochi": [76.27, 9.93],
  "Alappuzha": [76.34, 9.5], "Nagpur": [79.09, 21.15], "Pune": [73.86, 18.52], "Visakhapatnam": [83.22, 17.69], "Madurai": [78.12, 9.93],
  "Varanasi": [83.0, 25.32], "Khajjiar": [76.06, 32.55] };
const R9 = rows("F9", "Nicknames of Indian cities");
place("F9", "Nicknames of Indian cities", { k: "mapfig", title: "The nickname cities on the map",
  pins: R9.map((r, i) => { const k = Object.keys(AT9).find(k => r[1].startsWith(k)); if (!k) fail("firsts: no place for " + r[1]); return [String(i + 1), AT9[k][0], AT9[k][1], r[0] + " — " + r[1], "n"]; }),
  facts: R9.map((r, i) => [`${i + 1} · ${r[0]}`, r[1]]), cap: "Numbers match the list. Rajasthan alone has the Pink, Blue, Sun, Golden and Lake cities." });

VISUAL = { mode: "world", VIS: { key: "firsts_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
