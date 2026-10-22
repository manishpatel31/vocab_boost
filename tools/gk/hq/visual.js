/* Headquarters & Founders — headquarters on the world and India maps, a chart of bank cities, founders in pictures and mottos as cards
   (drawn by study-visual.js and study-world.js). place(lesson, where, ...blocks), rows(lesson, table title) and GEO come from applyVisual. */
const P = (w, n, c) => [w, n, c];
const wiki = n => n.replace(/ \(.*\)$/, "").replace(/ /g, "_");
const short = n => { const m = n.match(/^([A-Z][A-Za-z&-]+) \(/); return m ? m[1] : n.replace(/ \(.*\)$/, ""); };   // "WHO (World Health Organization)" → "WHO"
// towns a few kilometres apart share one pin, or the numbers would sit on top of each other
const AREA = { "Cologny": "Geneva", "Mies": "Geneva", "Nyon": "Geneva", "Gland": "Geneva", "Aigle": "Lausanne", "Redmond": "Seattle", "Cupertino": "Bay Area",
  "Mountain View": "Bay Area", "Menlo Park": "Bay Area", "Santa Clara": "Bay Area", "Beaverton": "Seattle", "Izatnagar (Bareilly)": "Bareilly",
  "Dona Paula (Goa)": "Goa", "Vasco da Gama (Goa)": "Goa", "Secunderabad": "Hyderabad", "Noida": "Delhi NCR", "Gurugram": "Delhi NCR", "Ghaziabad": "Delhi NCR", "New Delhi": "Delhi NCR" };
const AT = { "Bay Area": [-122.05, 37.4], "Goa": [73.8, 15.4], "Delhi NCR": [77.21, 28.61] };
const where = c => AT[c] || GEO.city(c);
// group [body, city] rows by place: [[place, [labels]]], largest first
const group = list => { const g = {}; list.forEach(([b, c]) => { const a = AREA[c] || c; (g[a] = g[a] || []).push(b + (a !== c && !/^(New Delhi)$/.test(c) ? ` (${c.replace(/ \(.*\)$/, "")})` : "")); });
  return Object.entries(g).sort((x, y) => y[1].length - x[1].length); };
const EUROPE = ([lo, la]) => lo > -12 && lo < 30 && la > 36 && la < 58;
// a world map of headquarters: Europe gets a zoomed map of its own
const hqWorld = (L, after, list, title, cap) => {
  const G = group(list), out = G.filter(([c]) => !EUROPE(where(c))), eu = G.filter(([c]) => EUROPE(where(c)));
  const fig = (gs, t, vb, c, start) => ({ k: "worldfig", title: t, vb, minw: vb ? 520 : 700, cap: c,
    pins: gs.map(([p, b], i) => { const [lo, la] = where(p); return [String(start + i + 1), lo, la, p + ": " + b.join(", "), "n"]; }),
    legend: gs.map(([p, b], i) => [`${start + i + 1} ${p}`, b.join(" · ")]) });
  place(L, after, fig(out, title, null, eu.length ? "Europe is drawn larger on the next map." : cap, 0), ...(eu.length ? [fig(eu, title.replace(/on the world map|around the world/, "") + " — Europe", "432 68 122 68", cap, out.length)] : []));
};

// H1–H3 — world bodies
hqWorld("H1", "UN bodies", rows("H1", "UN bodies").map(r => [short(r[0]), r[1]]), "UN bodies around the world",
  "Geneva has the most UN offices; New York has the UN itself, UNICEF, UNDP and UN Women. The only main organ away from New York is the ICJ at The Hague.");
hqWorld("H2", "World bodies", rows("H2", "World bodies").map(r => [short(r[0]), r[1]]), "Money, trade and regional bodies around the world",
  "Washington: IMF and World Bank (Bretton Woods twins). Brussels: EU and NATO. Beijing: AIIB and SCO; Shanghai: the BRICS New Development Bank.");
hqWorld("H3", "World sports bodies", rows("H3", "World sports bodies").map(r => [short(r[0].replace(/ \((football|chess|table tennis|hockey|basketball|cycling|shooting|European football)\)$/, " – $1")), r[1]]),
  "Sports bodies around the world", "Lausanne is the Olympic capital: the IOC, FIDE, ITTF, FIH and the Court of Arbitration for Sport. The ICC is in Dubai.");
const indiaMap = (L, after, list, title, cap) => { const G = group(list);
  place(L, after, { k: "mapfig", title, cap, pins: G.map(([p, b], i) => { const [lo, la] = where(p); return [String(i + 1), lo, la, p + ": " + b.join(", "), "n"]; }),
    facts: G.map(([p, b], i) => [`${i + 1} · ${p}`, b.join(" · ")]) }); };
indiaMap("H3", "Indian sports bodies", rows("H3", "Indian sports bodies").map(r => [short(r[0]).replace("Board of Control for Cricket in India", "BCCI"), r[1]]), "Indian sports bodies on the map",
  "NIS Patiala trains coaches; LNIPE is at Gwalior; the National Sports University is at Imphal.");

// H4–H5 — institutes in India
indiaMap("H4", "Space, atomic", rows("H4", "Space, atomic").map(r => [short(r[0]), r[1].replace(/ \(.*\)$/, "")]), "Space and atomic centres on the map",
  "ISRO and IISc are in Bengaluru; rockets go up from Sriharikota; BARC is in Mumbai and IGCAR at Kalpakkam.");
indiaMap("H4", "CSIR labs", rows("H4", "CSIR labs").map(r => [short(r[0]), r[1]]), "CSIR labs and surveys on the map",
  "Dehradun: Survey of India, Forest Research Institute, Wildlife Institute. Kolkata: the Geological, Zoological and Botanical Surveys.");
indiaMap("H5", "Farm and health", rows("H5", "Farm and health").map(r => [short(r[0]), r[1]]), "Farm and health research on the map",
  "Match the crop to the place: rice — Cuttack, potato — Shimla, sugarcane — Lucknow and Coimbatore, spices — Kozhikode, camel — Bikaner.");
place("H5", "Commodity boards", { k: "mapfig", title: "Commodity boards on the map",
  pins: group(rows("H5", "Commodity boards").filter(r => r[1]).map(r => [short(r[0]).replace(/ Board$/, "").replace("National Dairy Development", "NDDB").replace("Central Silk", "Silk").replace("National Jute", "Jute"), r[1]]))
    .map(([p, b]) => { const [lo, la] = where(p); return [b.join(" · "), lo, la, p, ["Kochi", "Anand", "Delhi NCR"].includes(p) ? "l" : ""]; }),
  cap: "Kerala holds three: Spices, Coir and MPEDA at Kochi, and Rubber at Kottayam. Tea and Jute are at Kolkata; Coffee and Silk at Bengaluru; NDDB at Anand." });

// H6 — banks: which city
const BK = rows("H6", "Regulators").concat(rows("H6", "Public sector banks"));
const BC = {}; BK.forEach(r => { BC[r[1]] = (BC[r[1]] || 0) + 1; });
place("H6", "Public sector banks", { k: "bars", title: "Where the banks and regulators sit", left: 120, hi: 1,
  rows: Object.entries(BC).map(([c, n]) => [c, n, BK.filter(r => r[1] === c).map(r => short(r[0]).replace(/ of India$/, "")).slice(0, 3).join(", ") + (n > 3 ? "…" : "")]),
  cap: "Mumbai is India's financial capital: RBI, SEBI, NABARD, EXIM Bank, NPCI, LIC and five public sector banks. The odd ones out: SIDBI (Lucknow), IRDAI (Hyderabad), Bank of Baroda (Vadodara)." });

// H7–H8 — founders in pictures; company headquarters on the maps
place("H7", "story", { k: "photos", title: "Founders in pictures", items: [
  P("Jamsetji_Tata", "Jamsetji Tata", "Tata Group · 1868"), P("Dhirubhai_Ambani", "Dhirubhai Ambani", "Reliance"), P("N._R._Narayana_Murthy", "N. R. Narayana Murthy", "Infosys · 1981"),
  P("Azim_Premji", "Azim Premji", "Wipro"), P("Shiv_Nadar", "Shiv Nadar", "HCL · 1976"), P("Falguni_Nayar", "Falguni Nayar", "Nykaa · 2012"),
  P("Ritesh_Agarwal", "Ritesh Agarwal", "OYO · 2013"), P("Vijay_Shekhar_Sharma", "Vijay Shekhar Sharma", "Paytm"), P("Deepinder_Goyal", "Deepinder Goyal", "Zomato · 2008"),
  P("Ardeshir_Godrej", "Ardeshir Godrej", "Godrej · 1897"), P("Jamnalal_Bajaj", "Jamnalal Bajaj", "Bajaj · 1926"), P("Nithin_Kamath", "Nithin Kamath", "Zerodha · 2010")] });
indiaMap("H7", "Where is the company based", rows("H7", "Where is the company based").map(r => [r[0].replace(/ \(.*\)$/, ""), r[1]]), "Company headquarters in India",
  "Bengaluru is the start-up capital (Infosys, Flipkart, Swiggy, Zerodha, PhonePe); Delhi NCR has HCLTech, Paytm, Zomato and OYO.");
place("H8", "story", { k: "photos", title: "Founders in pictures", items: [
  P("Bill_Gates", "Bill Gates", "Microsoft · 1975"), P("Steve_Jobs", "Steve Jobs", "Apple"), P("Larry_Page", "Larry Page", "Google"), P("Jeff_Bezos", "Jeff Bezos", "Amazon"),
  P("Mark_Zuckerberg", "Mark Zuckerberg", "Facebook"), P("Elon_Musk", "Elon Musk", "SpaceX"), P("Jensen_Huang", "Jensen Huang", "Nvidia"), P("Jack_Ma", "Jack Ma", "Alibaba"),
  P("Jimmy_Wales", "Jimmy Wales", "Wikipedia"), P("Sabeer_Bhatia", "Sabeer Bhatia", "Hotmail"), P("Akio_Morita", "Akio Morita", "Sony"), P("Phil_Knight", "Phil Knight", "Nike")] });
hqWorld("H8", "Where is the company based", rows("H8", "Where is the company based").map(r => [r[0].replace(/ \(.*\)$/, ""), r[1]]), "Company headquarters around the world",
  "Silicon Valley (the Bay Area) holds Apple, Google, Meta and Nvidia; the Seattle area has Microsoft and Amazon.");

// H9 — reform bodies on the map, reformers in pictures
place("H9", "Organisation and founder", { k: "mapfig", title: "Where the reform bodies began",
  pins: [["Brahmo Samaj · Indian Association", 88.36, 22.57, "Calcutta", ""], ["INC · Prarthana · Arya Samaj", 72.88, 19.08, "Bombay", "l"],
    ["Satyashodhak · Servants of India", 73.86, 18.52, "Pune", "l"], ["Theosophical Society (Adyar)", 80.27, 13.08, "Madras"], ["Home Rule League (Tilak)", 74.5, 15.85, "Belgaum", "l"],
    ["MAO College", 78.08, 27.88, "Aligarh"], ["BHU", 82.97, 25.32, "Banaras"], ["Visva-Bharati", 87.68, 23.68, "Santiniketan", "l"], ["HSRA", 77.21, 28.61, "Delhi", "l"],
    ["Muslim League", 90.41, 23.81, "Dhaka (1906)"]],
  cap: "Calcutta and Bombay were the cradles of reform. Abroad: the East India Association (London, 1866), the Theosophical Society (New York, 1875) and the Ghadar Party (San Francisco, 1913)." });
place("H9", "story", { k: "photos", title: "Founders in pictures", items: [
  P("Ram_Mohan_Roy", "Raja Ram Mohan Roy", "Brahmo Samaj"), P("Dayananda_Saraswati", "Dayananda Saraswati", "Arya Samaj"), P("Jyotirao_Phule", "Jyotirao Phule", "Satyashodhak Samaj"),
  P("Swami_Vivekananda", "Swami Vivekananda", "Ramakrishna Mission"), P("Gopal_Krishna_Gokhale", "G. K. Gokhale", "Servants of India Society"), P("Allan_Octavian_Hume", "A. O. Hume", "Indian National Congress"),
  P("Syed_Ahmad_Khan", "Sir Syed Ahmad Khan", "Aligarh"), P("Annie_Besant", "Annie Besant", "Home Rule League"), P("Periyar_E._V._Ramasamy", "Periyar", "Self-Respect Movement"),
  P("Narayana_Guru", "Sree Narayana Guru", "SNDP Yogam"), P("Madan_Mohan_Malaviya", "Madan Mohan Malaviya", "BHU"), P("Abdul_Ghaffar_Khan", "Khan Abdul Ghaffar Khan", "Khudai Khidmatgar")] });

// H10 — mottos as cards
place("H10", "Mottos of Indian institutions", { k: "cards", title: "Mottos of Indian institutions",
  rows: rows("H10", "Mottos of Indian institutions").map(r => [r[1], r[0], r[2].split(" — ")[0].replace(/\.$/, ""), /Emblem/.test(r[0]) ? "🦁" : /Court/.test(r[0]) ? "⚖️" : /Lok Sabha/.test(r[0]) ? "🏛️" : /Police|CBI/.test(r[0]) ? "🚓" : /Radio|Doordarshan/.test(r[0]) ? "📻" : /LIC/.test(r[0]) ? "☂️" : "🎓"]) });
VISUAL = { mode: "world", VIS: { key: "hq_photos_v1", word: "founder", words: "founders", search: "", quiz: "person", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
