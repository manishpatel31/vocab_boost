/* Agriculture — the crop calendar, leading states on the map, crop and breed photos, the colours of the revolutions, river
   projects on the river map and a scheme timeline (drawn by study-visual.js with study-rivers.js). place(), rows(), KIT from applyVisual. */
const P = (w, n, c) => [w, n, c];
const fig = (t, svg, cap, w) => ({ k: "info", title: t, html: `<figure class="fig wide" style="--minw:${w || 560}px;margin:0">${svg}</figure>`, cap });

// R1 — the crop calendar: sowing to harvest across the year
const M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const SEA = [["Kharif", 5.5, 10.3, "#2f8f4e", "Sown with the monsoon (June–July), harvested September–October", "Rice, maize, jowar, bajra, cotton, jute, groundnut, soybean"],
  ["Rabi", 9.5, 15.5, "#c69214", "Sown October–December, harvested March–April", "Wheat, barley, gram, mustard, peas, masoor"],
  ["Zaid", 2.5, 6.0, "#c0503a", "The short summer season between rabi and kharif", "Watermelon, muskmelon, cucumber, fodder"]];
const cal = `<svg class="dg" viewBox="0 0 680 230" role="img" aria-label="Kharif, rabi and zaid across the year">
  ${M.map((m, i) => `<text x="${110 + i * 47 + 23}" y="20" text-anchor="middle" font-size="11.5" class="mut">${m}</text><line x1="${110 + i * 47}" y1="28" x2="${110 + i * 47}" y2="200" class="grid"/>`).join("")}
  ${SEA.map(([n, a, b, c, t, ex], i) => { const y = 40 + i * 55, seg = (s, e) => `<rect x="${110 + s * 47}" y="${y}" width="${(e - s) * 47}" height="30" rx="8" fill="${c}" class="anim-in" style="animation-delay:${i * 150}ms"/>`;
    return `<text x="100" y="${y + 20}" text-anchor="end" font-size="14" class="b" style="fill:${c}">${n}</text>` + (b > 12 ? seg(a, 12) + seg(0, b - 12) : seg(a, b)) +
      `<text x="${110 + (b > 12 ? 0 : a) * 47 + 8}" y="${y + 45}" font-size="10.5" class="mut">${ex}</text>`; }).join("")}
  <text x="110" y="222" font-size="11" class="mut">Bars run from sowing to harvest.</text></svg>`;
place("R1", "The three seasons", fig("The crop calendar", cal, "Kharif rides the south-west monsoon; rabi grows through the cool winter on stored moisture and irrigation; zaid fills the short summer gap."));

// R2–R4 — leading states, and the crops in pictures
place("R2", "Leading state", KIT.stateMap("Which state leads in food crops", rows("R2", "Leading state"), { cap: "2023–24 estimates. Uttar Pradesh leads in wheat; Rajasthan in bajra and barley; Madhya Pradesh in gram and pulses." }));
place("R3", "Leading state", KIT.stateMap("Which state leads in cash and fibre crops", rows("R3", "Leading state"), { max: 3, cap: "2023–24 estimates. Gujarat leads in cotton, groundnut and castor; West Bengal in jute; UP in sugarcane." }));
place("R4", "Leading state", KIT.stateMap("Which state leads in plantation crops, spices and fruit", rows("R4", "Leading state"), { max: 3, cap: "2023–24 estimates. Assam — tea; Karnataka — coffee; Kerala — rubber and cardamom; J&K — saffron and apples; Maharashtra — onion, grapes and cashew." }));
place("R2", "What each crop needs", KIT.photos("Food crops in pictures", [["Rice", "Kharif · 100+ cm rain"], ["Wheat", "Rabi · cool, then warm and dry"], ["Maize", "Kharif"], ["Sorghum", "Jowar"], ["Pearl millet", "Bajra"], ["Finger millet", "Ragi"], ["Chickpea", "Gram (chana)"], ["Pigeon pea", "Arhar (tur)"]]));
place("R3", "Where each fibre", KIT.photos("Cash crops in pictures", [["Sugarcane", "UP leads"], ["Cotton", "Gujarat leads · black soil"], ["Jute", "West Bengal · the golden fibre"], ["Peanut", "Groundnut — Gujarat"], ["Mustard plant", "Rajasthan"], ["Soybean", "Madhya Pradesh"]]));
place("R4", "Famous nicknames", KIT.photos("Plantation crops and spices in pictures", [["Tea", "Assam"], ["Coffee", "Karnataka"], ["Natural rubber", "Kerala"], ["Elettaria cardamomum", "Cardamom — Kerala"], ["Saffron", "Kashmir"], ["Black pepper", "Kerala"], ["Cashew", "Maharashtra"], ["Coconut", "Kerala"]], { name: r => ({ "Elettaria cardamomum": "Cardamom", "Natural rubber": "Rubber" })[r[0]] || r[0] }));

// R5 — shifting cultivation's local names
place("R5", "Shifting cultivation in India", { k: "mapfig", title: "Shifting cultivation has a different name in each region",
  marks: [["NL", "Jhum", 0, -6], ["MZ", "Jhum"], ["AP", "Podu · Penda"], ["MP", "Bewar · Dahiya"], ["OD", "Pama Dabi · Koman · Bringa"], ["KL", "Kumari", -10, 0], ["RJ", "Valre · Waltre", 10, 40], ["UT", "Khil"], ["JH", "Kuruwa"]],
  cap: "Slash-and-burn farming: a patch of forest is cleared and burnt, farmed for a few years and left to recover. Jhum is the north-east's name for it." });

// R6 — the coloured revolutions as swatches
const COL = { Green: "#2f8f4e", White: "#f4f1ea", Blue: "#2f6db5", Yellow: "#f2c14e", Pink: "#e88aa6", Golden: "#d4a017", "Golden Fibre": "#c9a35a", Silver: "#c0c0c0", "Silver Fibre": "#d9d9d9", Round: "#a9805a",
  Grey: "#8a8a8a", Red: "#c0392b", Black: "#222", Brown: "#7a4a22", Sweet: "#f6b73c", Purple: "#7d4fb5", Evergreen: "#1f6b3a" };
place("R6", "Revolution", { k: "info", title: "The revolutions by colour", html: '<div class="fam">' + rows("R6", "Revolution").map(r => { const k = r[0].replace(/ Revolution$/, "");
  return `<div><span aria-hidden="true" style="display:block;height:24px;border-radius:6px;background:${COL[k] || "#999"};border:1px solid rgba(0,0,0,.15)"></span><b>${r[0]}</b><small>${r[1]}</small></div>`; }).join("") + "</div>",
  cap: "Green — foodgrains (M. S. Swaminathan); White — milk (Verghese Kurien, Operation Flood); Blue — fish; Yellow — oilseeds; Golden fibre — jute; Silver — eggs; Round — potato." });

// R7 — river projects on the live river map
place("R7", "Project", { k: "rivermap", title: "The rivers behind the big projects", hl: ["Sutlej", "Beas", "Mahanadi", "Krishna", "Narmada", "Tapi", "Kaveri", "Godavari", "Damodar", "Kosi", "Chambal", "Tungabhadra"],
  pins: [["Bhakra", 76.43, 31.41, "", "l"], ["Hirakud", 83.87, 21.52, ""], ["Nagarjuna Sagar", 79.31, 16.57, ""], ["Sardar Sarovar", 73.75, 21.83, "", "l"], ["DVC", 86.8, 23.7, ""], ["Kosi barrage", 86.95, 26.5, ""],
    ["Gandhi Sagar", 75.55, 24.7, "", "l"], ["Tungabhadra", 76.33, 15.27, "", "l"]], cap: "Multipurpose river valley projects: irrigation, power and flood control." });

// R8 — breeds on the map and in pictures
place("R8", "Indian breeds", KIT.stateMap("Indian breeds by home state", rows("R8", "Indian breeds"), { max: 3, cap: "Gir and Kankrej (Gujarat), Sahiwal (Punjab), Ongole (Andhra), Murrah buffalo (Haryana), Jamunapari goat (UP)…" }),
  KIT.photos("Breeds in pictures", [["Gir cattle", "Gujarat"], ["Sahiwal cattle", "Punjab"], ["Tharparkar cattle", "Rajasthan"], ["Ongole cattle", "Andhra Pradesh"], ["Murrah buffalo", "Haryana"], ["Jamunapari goat", "Uttar Pradesh"], ["Kadaknath", "Madhya Pradesh"], ["Changthangi", "Ladakh"]], { name: r => r[0].replace(/ cattle$/, "") }));

// R10 — schemes on a timeline
place("R10", "When each scheme began", { k: "tlfig", title: "Farm schemes, year by year", rows: rows("R10", "When each scheme began").map(r => [+r[1], r[0].replace(/ \(.*\)$/, ""), ""]),
  cap: "From the Kisan Credit Card (1998) to PM-KISAN (2019) and the Agriculture Infrastructure Fund (2020)." });

const ALL = rows("R2", "Leading state").concat(rows("R3", "Leading state"), rows("R4", "Leading state")).filter(r => KIT.code(r[1])).map(r => [r[0], r[1], "Leading state", r[2] || "Leading state", "R2"])
  .concat(rows("R8", "Indian breeds").filter(r => KIT.code(r[1])).map(r => [r[0], r[1], "Breed", r[2] || "Breed", "R8"]));
place("R1", "Which season", { k: "indiamap", title: "Tap a state — the crops it leads in and its breeds", cap: "Built from the lessons' tables. Revise has a Map quiz on the same list." });
VISUAL = { mode: "rivers", VIS: { key: "agri_photos_v1", word: "crop", words: "crops and breeds", search: "", quiz: "crop or breed", ask: "Which state —", rows: ALL, tabs: [["vmap", "Map quiz"], ["vphotos", "Photo quiz"]] } };
