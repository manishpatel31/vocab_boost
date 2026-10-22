/* Classical Dances & Dancers — photos, maps, the Kathakali colour code and a timeline (drawn by study-visual.js).
   place(lesson, where, ...blocks) and rows(lesson, table title) come from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];
place("L1", "story", { k: "photos", title: "In pictures", items: [
  P("Natya_Shastra", "Natya Shastra", "Bharata Muni's text on drama, dance and music"), P("Mudra", "Mudras", "Hand gestures — the alphabet of abhinaya"),
  P("Abhinaya", "Abhinaya", "Expression: angika, vachika, aharya, sattvika")] });

place("L2", "story", { k: "photos", title: "The nine dances in pictures", items: [
  P("Bharatanatyam", "Bharatanatyam", "Tamil Nadu"), P("Kathak", "Kathak", "Uttar Pradesh"), P("Kathakali", "Kathakali", "Kerala"),
  P("Mohiniyattam", "Mohiniyattam", "Kerala"), P("Kuchipudi", "Kuchipudi", "Andhra Pradesh"), P("Odissi", "Odissi", "Odisha"),
  P("Manipuri_dance", "Manipuri", "Manipur"), P("Sattriya", "Sattriya", "Assam"), P("Chhau_dance", "Chhau", "Odisha, Jharkhand, West Bengal")] });
place("L2", "Dance ↔ state", { k: "mapfig", title: "Where each classical dance grew up",
  pins: [["Bharatanatyam", 79.14, 10.79, "Tamil Nadu · Thanjavur"], ["Kathak", 80.95, 26.85, "Uttar Pradesh · Lucknow"],
    ["Kathakali", 76.29, 10.74, "Kerala", "l"], ["Mohiniyattam", 76.95, 8.52, "Kerala", "l"], ["Kuchipudi", 80.95, 16.27, "Andhra Pradesh"],
    ["Odissi", 85.82, 20.29, "Odisha"], ["Chhau", 86.0, 22.9, "Odisha · Jharkhand · WB"], ["Manipuri", 93.94, 24.81, "Manipur", "l"], ["Sattriya", 94.22, 26.95, "Assam · Majuli", "l"]],
  facts: [["Sangeet Natak Akademi", "8 classical dances"], ["Ministry of Culture", "9 — adds Chhau"], ["Kerala", "two: Kathakali, Mohiniyattam"],
    ["North India", "only Kathak"], ["Newest", "Sattriya (recognised 2000)"]],
  cap: "Each pin marks the place a dance grew up in: a temple town, a court or a monastery." });

// the Kathakali make-up colours, as swatches
const SW = { "Pacha": ["#2f8f4e"], "Kathi": ["#2f8f4e", "#c0392b"], "Thadi": ["#c0392b", "#f4f1ea", "#222"], "Kari": ["#1d1d1d"], "Minukku": ["#f2b45a"] };
const mk = rows("L3", "Kathakali make-up");
place("L3", "Kathakali make-up", { k: "info", title: "Kathakali colour code at a glance",
  html: '<div class="fam">' + mk.map(r => { const key = r[0].split(" ")[0], c = SW[key] || ["#999"];
    return `<div><span class="ic" aria-hidden="true" style="display:flex;gap:4px">${c.map(x => `<i style="display:inline-block;width:26px;height:26px;border-radius:50%;background:${x};border:1px solid rgba(0,0,0,.2)"></i>`).join("")}</span><b>${r[0]}</b><small>${r[1]}</small></div>`; }).join("") + "</div>",
  cap: "Green is noble, green with red is proud and villainous, red beard is evil, black is the forest and the demonic, soft yellow is women and sages." });

place("L4", "story", { k: "photos", title: "Dancers in pictures", items: [
  P("Rukmini_Devi_Arundale", "Rukmini Devi Arundale", "Bharatanatyam · Kalakshetra (1936)"), P("T._Balasaraswati", "T. Balasaraswati", "Bharatanatyam"),
  P("Yamini_Krishnamurthy", "Yamini Krishnamurthy", "Bharatanatyam and Kuchipudi"), P("Padma_Subrahmanyam", "Padma Subrahmanyam", "Bharatanatyam · Padma Vibhushan 2024"),
  P("Vempati_Chinna_Satyam", "Vempati Chinna Satyam", "Kuchipudi"), P("Kalamandalam_Kalyanikutty_Amma", "Kalamandalam Kalyanikutty Amma", "Mohiniyattam"),
  P("Mallika_Sarabhai", "Mallika Sarabhai", "Kuchipudi and Bharatanatyam"), P("Vyjayanthimala", "Vyjayanthimala", "Bharatanatyam and films")] });
place("L5", "story", { k: "photos", title: "Dancers in pictures", items: [
  P("Birju_Maharaj", "Pandit Birju Maharaj", "Kathak · Lucknow gharana"), P("Sitara_Devi", "Sitara Devi", "Kathak · 'Nritya Samragini'"),
  P("Kumudini_Lakhia", "Kumudini Lakhia", "Kathak · Kadamb"), P("Shovana_Narayan", "Shovana Narayan", "Kathak"),
  P("Kelucharan_Mohapatra", "Kelucharan Mohapatra", "Odissi"), P("Sanjukta_Panigrahi", "Sanjukta Panigrahi", "Odissi"),
  P("Sonal_Mansingh", "Sonal Mansingh", "Bharatanatyam and Odissi"), P("Guru_Bipin_Singh", "Guru Bipin Singh", "Manipuri")] });

place("L6", "Institutions", { k: "mapfig", title: "Dance schools on the map",
  pins: [["Kalakshetra · Kuchipudi Art Academy", 80.27, 13.0, "Chennai"], ["Kerala Kalamandalam", 76.29, 10.74, "Cheruthuruthy", "l"],
    ["Nrityagram", 77.48, 13.13, "near Bengaluru", "l"], ["Darpana · Kadamb", 72.57, 23.02, "Ahmedabad"], ["Kathak Kendra · SNA", 77.21, 28.61, "New Delhi", "l"],
    ["Uday Shankar centre", 79.66, 29.6, "Almora"], ["Srjan", 85.82, 20.29, "Bhubaneswar"], ["Visva-Bharati", 87.68, 23.68, "Santiniketan"],
    ["JN Manipuri Dance Academy", 93.94, 24.81, "Imphal", "l"]],
  cap: "Founders to remember: Rukmini Devi (Kalakshetra), Vallathol (Kalamandalam), Mrinalini Sarabhai (Darpana), Kumudini Lakhia (Kadamb), Protima Bedi (Nrityagram)." });
place("L6", "story", { k: "photos", title: "In pictures", items: [
  P("Uday_Shankar", "Uday Shankar", "Modern Indian dance; Almora centre"), P("Mrinalini_Sarabhai", "Mrinalini Sarabhai", "Darpana Academy, Ahmedabad"),
  P("Protima_Bedi", "Protima Bedi", "Nrityagram (1990)"), P("Kerala_Kalamandalam", "Kerala Kalamandalam", "Cheruthuruthy, 1930")] });

place("L7", "Festival ↔ state", { k: "mapfig", title: "Dance festivals on the map",
  pins: [["Khajuraho", 79.93, 24.85, "MP · February"], ["Konark · Mukteswar", 86.0, 20.0, "Odisha"], ["Mamallapuram", 80.19, 12.62, "Tamil Nadu"],
    ["Natyanjali", 79.69, 11.4, "Chidambaram", "l"], ["Elephanta", 72.93, 18.96, "Mumbai", "l"], ["Ellora–Ajanta", 75.18, 20.03, "Maharashtra"],
    ["Modhera", 72.13, 23.58, "Gujarat", "l"], ["Nishagandhi", 76.95, 8.52, "Thiruvananthapuram", "l"], ["Pattadakal · Hampi", 76.0, 15.6, "Karnataka", "l"],
    ["Rajgir", 85.42, 25.03, "Bihar"], ["Bhoramdeo", 81.12, 22.13, "Chhattisgarh"], ["Taj Mahotsav", 78.01, 27.18, "Agra", "l"], ["Sangai", 93.94, 24.81, "Manipur", "l"]],
  cap: "Most festivals are held against a famous monument: the Khajuraho temples, the Sun Temples of Konark and Modhera, Arjuna's Penance at Mamallapuram." });
place("L7", "story", { k: "photos", title: "The stages", items: [
  P("Khajuraho_Group_of_Monuments", "Khajuraho temples", "Khajuraho Dance Festival"), P("Konark_Sun_Temple", "Konark Sun Temple", "Konark Dance Festival"),
  P("Shore_Temple", "Shore Temple, Mamallapuram", "Mamallapuram Dance Festival"), P("Thillai_Nataraja_Temple,_Chidambaram", "Nataraja temple, Chidambaram", "Natyanjali"),
  P("Sun_Temple,_Modhera", "Modhera Sun Temple", "Uttarardh Mahotsav"), P("Elephanta_Caves", "Elephanta Caves", "Elephanta Festival")] });

const pv = rows("L8", "Padma Vibhushan");
place("L8", "Padma Vibhushan", { k: "tlfig", title: "Padma Vibhushan to dancers, year by year",
  rows: pv.map(r => [+r[1], r[0].replace(/^Pandit /, ""), r[2].replace(/\.$/, "")]),
  cap: "The first dancer to receive it was T. Balasaraswati (1977); 2024 had two, Padma Subrahmanyam and Vyjayanthimala." });

// the Map quiz and the clickable map use these rows: [name, state, extra, note, lesson]
const quizRows = rows("L2", "Dance ↔ state").filter(r => !/,| and /.test(r[1])).map(r => [r[0], r[1], "Classical", r[2] || "Classical dance", "L2"])
  .concat(rows("L9", "Famous folk").map(r => [r[0], r[1], "Folk", r[2] || "Folk dance", "L9"]))
  .concat(rows("L7", "Festival ↔ state").map(r => [r[0], r[1], "Festival", r[2] || "Dance festival", "L7"]));
place("L9", "story", { k: "indiamap", title: "Classical, folk and festival map", cap: "Tap a state: its classical dance, folk dances and dance festivals in this app." });
VISUAL = { mode: true, VIS: { key: "classical_photos_v1", word: "dance", words: "dances", ask: "Which state does this belong to:", rows: quizRows,
  tabs: [["vphotos", "Photo quiz"], ["vmap", "Map quiz"]] } };
