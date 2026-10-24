/* Science & Technology in India — nuclear plants and CSIR labs on the map, a polar-stations timeline and photo galleries
   (drawn by study-visual.js). Places are approximate. */
const P = (w, n, c) => [w, n, c];
const NUC = {
  "Tarapur": [72.66, 19.83], "Rawatbhata (Rajasthan Atomic Power Station)": [75.61, 24.88], "Kalpakkam (Madras Atomic Power Station)": [80.17, 12.56],
  "Narora": [78.38, 28.16], "Kakrapar": [73.35, 21.24], "Kaiga": [74.44, 14.86], "Kudankulam": [77.71, 8.17],
  "Gorakhpur (Fatehabad)": [75.58, 29.48], "Mahi Banswara": [74.44, 23.55], "Chutka": [80.4, 22.6], "Jaitapur": [73.35, 16.6], "Kovvada": [83.66, 18.05]
};
const WORK = rows("ST4", "Nuclear power plants at work"), PLAN = rows("ST4", "New and planned plants");
[...WORK, ...PLAN].forEach(r => { if (!NUC[r[0]]) fail("scitech: no place for " + r[0]); });
place("ST4", "New and planned plants", { k: "mapfig", title: "Nuclear power: working plants and new ones",
  pins: WORK.map((r, i) => [String(i + 1), NUC[r[0]][0], NUC[r[0]][1], r[0] + " — " + r[1], "n"])
    .concat(PLAN.map((r, i) => [String(WORK.length + i + 1), NUC[r[0]][0], NUC[r[0]][1], r[0] + " — " + r[1] + " (new or planned)", "n"])),
  facts: WORK.map((r, i) => [`${i + 1} · ${r[0]}`, r[1] + " — working"]).concat(PLAN.map((r, i) => [`${WORK.length + i + 1} · ${r[0]}`, r[1] + " — new or planned"])),
  cap: "1–7 are working; 8–12 are being built or planned. Most sit on a coast or a big river, for cooling water." });

const LAB = {
  "Bengaluru": [77.6, 12.97], "Chandigarh": [76.78, 30.73], "Hyderabad": [78.48, 17.4], "New Delhi": [77.2, 28.6], "Roorkee": [77.89, 29.87],
  "Dehradun": [78.03, 30.32], "Palampur": [76.53, 32.11], "Jammu": [74.86, 32.73], "Lucknow": [80.95, 26.85], "Jamshedpur": [86.2, 22.8],
  "Durgapur": [87.32, 23.55], "Dhanbad": [86.43, 23.8], "Kolkata": [88.36, 22.57], "Bhavnagar": [72.15, 21.76], "Karaikudi": [78.78, 10.07],
  "Chennai": [80.27, 13.08], "Thiruvananthapuram": [76.95, 8.52], "Jorhat": [94.2, 26.75], "Bhopal": [77.41, 23.26]
};
const CS = rows("ST2", "CSIR labs and their cities"), CITIES = [...new Set(CS.map(r => r[1]))];
CITIES.forEach(c => { if (!LAB[c]) fail("scitech: no place for " + c); });
place("ST2", "CSIR labs and their cities", { k: "mapfig", title: "CSIR labs in this lesson, city by city",
  pins: CITIES.map((c, i) => [String(i + 1), LAB[c][0], LAB[c][1], c, "n"]),
  facts: CITIES.map((c, i) => [`${i + 1} · ${c}`, CS.filter(r => r[1] === c).map(r => r[0].replace(/^.*\((\w+)\)$/, "$1")).join(", ")]),
  cap: "Numbers match the list. Labs sit near their work: metals in Jamshedpur, coal in Dhanbad, salt on the Gujarat coast." });

place("ST8", "India's research stations", { k: "tlfig", title: "India's polar and Himalayan stations",
  rows: [[1983, "Dakshin Gangotri", "Antarctica — closed 1990"], [1989, "Maitri", "Antarctica"], [2008, "Himadri", "Arctic (Svalbard)"], [2012, "Bharati", "Antarctica"],
    [2014, "IndARC", "Arctic, under water"], [2016, "Himansh", "Himalaya (Spiti)"]], cap: "Maitri II, to replace Maitri, is targeted for about 2029." },
  { k: "photos", title: "The stations in pictures", items: [P("Dakshin_Gangotri", "Dakshin Gangotri", "1983"), P("Maitri_(research_station)", "Maitri", "1989"),
    P("Bharati_(research_station)", "Bharati", "2012"), P("Himadri_Station", "Himadri", "2008, Svalbard")] });

place("ST9", "Scientists of today", { k: "photos", title: "Faces to know", items: [
  P("Jayant_Narlikar", "Jayant Narlikar", "Vigyan Ratna 2025"), P("K._Kasturirangan", "K. Kasturirangan", "ISRO chairman, NEP 2020"),
  P("Rajagopala_Chidambaram", "R. Chidambaram", "Pokhran, PSA 2001–18"), P("C._N._R._Rao", "C. N. R. Rao", "Bharat Ratna 2014"),
  P("Gagandeep_Kang", "Gagandeep Kang", "Rotavac; FRS 2019"), P("Venkatraman_Ramakrishnan", "Venki Ramakrishnan", "Nobel Chemistry 2009"),
  P("Manjul_Bhargava", "Manjul Bhargava", "Fields Medal 2014"), P("Homi_J._Bhabha", "Homi J. Bhabha", "Three-stage plan")] });

VISUAL = { mode: true, VIS: { key: "scitech_photos_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
