/* Defence — academies and commands on the map, ranks and medal ribbons, missile ranges, operations on a timeline,
   exercise partners on the world map, and photos (drawn by study-visual.js and study-world.js).
   place(lesson, where, ...blocks), rows(lesson, table title) and GEO come from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];
const yearOf = s => +((String(s).match(/\b(1[89]\d\d|20\d\d)\b/) || [0])[0]);

// F1 — mottos, and the academies on the map
const MOT = rows("F1", "Mottos");
const ICO = { "Indian Army": "🪖", "Indian Navy": "⚓", "Indian Air Force": "✈️", "Indian Coast Guard": "🛟", "Border Security Force": "🛡️", "National Security Guard": "🐈‍⬛", "Assam Rifles": "🏔️", "National Cadet Corps": "🎖️" };
place("F1", "Mottos", { k: "cards", title: "Mottos at a glance", rows: MOT.map(r => [r[1], r[0], r[2], ICO[r[0]] || "🎖️"]),
  cap: "The three services: Service Before Self (Army), Sham No Varunah (Navy), Nabhah Sparsham Deeptam (Air Force)." });
const AC = rows("F1", "Academies").map(r => [r[0], r[1].split(",")[0], r[2]]);
const ACITY = { "Dehradun": "Dehradun", "Khadakwasla": "Khadakwasla", "Chennai": "Chennai", "Ezhimala": "Ezhimala", "Dundigal": "Dundigal", "Wellington": "Wellington",
  "New Delhi": "New Delhi", "Secunderabad": "Secunderabad", "Gulmarg": "Gulmarg", "Vairengte": "Vairengte" };
const SHORT = n => n.replace("Indian Military Academy", "IMA").replace("National Defence Academy", "NDA").replace("Officers Training Academy", "OTA")
  .replace("Indian Naval Academy", "INA").replace("Air Force Academy", "AFA").replace("Defence Services Staff College", "DSSC").replace("National Defence College", "NDC")
  .replace("College of Defence Management", "CDM").replace("High Altitude Warfare School", "HAWS").replace("Counter Insurgency and Jungle Warfare School", "CIJWS")
  .replace("Rashtriya Indian Military College", "RIMC");
const byCity = {}; AC.forEach(r => { const c = ACITY[r[1]]; if (!c) fail("defence: no place for " + r[1]); (byCity[c] = byCity[c] || []).push(SHORT(r[0])); });
const LEFT = { "Khadakwasla": 1, "Gulmarg": 1, "Ezhimala": 1, "Dehradun": 1, "Dundigal": 1 };
place("F1", "Academies", { k: "mapfig", title: "Where officers are trained",
  pins: Object.entries(byCity).map(([c, l]) => { const [lo, la] = GEO.city(c); return [l.join(" · "), lo, la, c, LEFT[c] ? "l" : ""]; }),
  facts: AC.map(r => [SHORT(r[0]), r[1] + (r[2] ? " — " + r[2].replace(/\.$/, "") : "")]),
  cap: "NDA (Khadakwasla, Pune) trains cadets of all three services together — the first tri-service academy in the world. IMA and RIMC are both at Dehradun." });
place("F1", "story", { k: "photos", title: "In pictures", items: [
  P("National_Defence_Academy_(India)", "National Defence Academy", "Khadakwasla, Pune"), P("Indian_Military_Academy", "Indian Military Academy", "Dehradun, 1932"),
  P("Indian_Naval_Academy", "Indian Naval Academy", "Ezhimala, Kerala"), P("Air_Force_Academy_(India)", "Air Force Academy", "Dundigal"),
  P("Defence_Services_Staff_College", "DSSC", "Wellington, Tamil Nadu")] });

// F2 — the commands, numbered on one map
const CMD = rows("F2", "Commands and headquarters");
const svc = c => /\(Army\)|Army Training/.test(c) ? "Army" : /Naval/.test(c) ? "Navy" : /Air|IAF/.test(c) ? "Air Force" : "Tri-service";
place("F2", "Commands and headquarters", { k: "mapfig", title: "Every command on one map",
  pins: CMD.map((r, i) => { const [lo, la] = GEO.city(r[1]); return [String(i + 1), lo, la, r[0] + " — " + r[1], "n"]; }),
  facts: CMD.map((r, i) => [`${i + 1} · ${r[1]}`, `${r[0].replace(/ \((Army|IAF)\)/, "")} · ${svc(r[0])}`]),
  cap: "1–7 Army, 8–10 Navy, 11–17 Air Force, 18 the tri-service Andaman and Nicobar Command at Port Blair (2001). Southern Command, Pune, is the oldest Army command." },
  { k: "cards", title: "How many commands", rows: [["Army", "7 commands", "6 operational + Army Training Command (Shimla)", "🪖"], ["Navy", "3 commands", "Western (Mumbai), Eastern (Visakhapatnam), Southern (Kochi, training)", "⚓"],
    ["Air Force", "7 commands", "5 operational + Training (Bengaluru) and Maintenance (Nagpur)", "✈️"], ["Tri-service", "Andaman & Nicobar", "Port Blair — the only theatre command", "🏝️"]] });

// F3 — the rank ladder and the medal ribbons
const RK = rows("F3", "Equivalent ranks");
place("F3", "Equivalent ranks", { k: "info", title: "The rank ladder",
  html: `<div style="display:grid;gap:4px">` + `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;font:700 12px var(--f-body);color:var(--ink2);text-transform:uppercase;letter-spacing:.06em;padding:0 10px"><span>🪖 Army</span><span>⚓ Navy</span><span>✈️ Air Force</span></div>` +
    RK.map((r, i) => `<div class="anim-in" style="animation-delay:${i * 40}ms;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:8px 10px;border-radius:10px;background:color-mix(in srgb,var(--accent) ${Math.round(34 - i * 3.6)}%,var(--sheet));font-size:13.5px">${r.map(x => `<b>${x}</b>`).join("")}</div>`).join("") + `</div>`,
  cap: "Read across: a Colonel = a Navy Captain = a Group Captain. Careful — an Army Captain equals only a Navy Lieutenant." });
const RIB = { "Param Vir Chakra": "linear-gradient(90deg,#5b2a86 0 100%)", "Maha Vir Chakra": "linear-gradient(90deg,#f39a1e 0 50%,#fff 50% 100%)",
  "Vir Chakra": "linear-gradient(90deg,#f39a1e 0 50%,#1d2f6f 50% 100%)", "Ashoka Chakra": "linear-gradient(90deg,#1f7a3a 0 46%,#f39a1e 46% 54%,#1f7a3a 54% 100%)",
  "Kirti Chakra": "linear-gradient(90deg,#1f7a3a 0 30%,#f39a1e 30% 36%,#1f7a3a 36% 64%,#f39a1e 64% 70%,#1f7a3a 70% 100%)",
  "Shaurya Chakra": "linear-gradient(90deg,#1f7a3a 0 22%,#f39a1e 22% 27%,#1f7a3a 27% 47.5%,#f39a1e 47.5% 52.5%,#1f7a3a 52.5% 73%,#f39a1e 73% 78%,#1f7a3a 78% 100%)",
  "Param Vishisht Seva Medal": "linear-gradient(90deg,#d4a017 0 44%,#1d2f6f 44% 56%,#d4a017 56% 100%)" };
place("F3", "Gallantry and service awards", { k: "info", title: "The medal ribbons",
  html: `<div class="fam">${rows("F3", "Gallantry and service awards").map(r => `<div><span aria-hidden="true" style="display:block;height:30px;border-radius:4px;border:1px solid rgba(0,0,0,.15);background:${RIB[r[0]] || "var(--sunk)"}"></span><b>${r[0]}</b><span class="n">${r[1]}</span>${r[2] ? `<small>${r[2]}</small>` : ""}</div>`).join("")}</div>`,
  cap: "Wartime: Param Vir (purple), Maha Vir, Vir. Peacetime: Ashoka, Kirti, Shaurya — all on green, with one, two and three saffron stripes." });
place("F3", "Firsts and famous names", { k: "photos", title: "Firsts in pictures", items: [
  P("K._M._Cariappa", "K. M. Cariappa", "First Indian C-in-C · Field Marshal"), P("Sam_Manekshaw", "Sam Manekshaw", "First Field Marshal, 1973"), P("Arjan_Singh", "Arjan Singh", "Marshal of the IAF"),
  P("Bipin_Rawat", "Bipin Rawat", "First Chief of Defence Staff"), P("Somnath_Sharma", "Somnath Sharma", "First Param Vir Chakra"), P("Avani_Chaturvedi", "Avani Chaturvedi", "First women fighter pilots"),
  P("Tessy_Thomas", "Tessy Thomas", "Missile Woman of India"), P("Param_Vir_Chakra", "Param Vir Chakra", "Designed by Savitri Khanolkar")] });

// F4 — when the forces were raised, and who guards which border
place("F4", "Forces and when they were raised", { k: "tlfig", title: "When each force was raised",
  rows: rows("F4", "Forces and when they were raised").map(r => [+r[1], (r[0].match(/\(([^)]+)\)/) || [0, r[0]])[1], ""]),
  cap: "Assam Rifles (1835) is the oldest paramilitary force and the IB (1887) one of the oldest intelligence agencies; NIA (2009) is the newest here." });
place("F4", "Who guards which border", { k: "cards", title: "Border guards",
  rows: rows("F4", "Who guards which border").map(r => [r[0], r[1], r[2], { BSF: "🛡️", ITBP: "🏔️", SSB: "🌄", "Assam Rifles": "🌿" }[r[1]] || "🛡️"]),
  cap: "BSF: Pakistan and Bangladesh. ITBP: China. SSB: Nepal and Bhutan (the open borders). Assam Rifles: Myanmar." });

// F5 — missile ranges (the published, approximate figures) and the platforms in pictures
place("F5", "Weapons and platforms", { k: "bars", title: "How far the missiles reach (approx.)", unit: "km", left: 120, hi: 1,
  rows: [["Agni-V", 5000, "ICBM-class"], ["K-4", 3500, "from submarines"], ["Nirbhay", 1000, "cruise"], ["Pralay", 500, ""], ["BrahMos", 450, "supersonic cruise"],
    ["Prithvi-II", 350, ""], ["Rudram", 150, "anti-radiation"], ["Astra", 110, "air-to-air"], ["Akash", 30, "surface-to-air"], ["Trishul", 9, ""], ["Nag", 4, "anti-tank"]],
  cap: "Round figures from published reports; versions differ. The order is what exams test: Agni the longest, Nag the shortest." });
place("F5", "story", { k: "photos", title: "In pictures", items: [
  P("Agni-V", "Agni-V", "MIRV · Mission Divyastra"), P("BrahMos", "BrahMos", "Brahmaputra + Moskva"), P("HAL_Tejas", "Tejas", "Light Combat Aircraft"),
  P("INS_Vikrant_(2013)", "INS Vikrant", "First indigenous carrier, 2022"), P("INS_Arihant", "INS Arihant", "Nuclear submarine"), P("Dassault_Rafale", "Rafale", "From France, 2020"),
  P("HAL_Prachand", "Prachand", "Light Combat Helicopter"), P("Arjun_(tank)", "Arjun", "Main battle tank"), P("Pinaka_multi-barrel_rocket_launcher", "Pinaka", "Shiva's bow")] });

// F6 — operations on two timelines
const OPS = rows("F6", "Operations").map(r => [yearOf(r[0] + " " + r[1]), r[0].replace(/^Operation /, "").replace(/ \(\d+\)$/, ""), r[1].replace(/,? \(?\w* ?\d{4}\)?$/, "").replace(/, May$|, June$/, "")]).filter(r => r[0]);
place("F6", "Operations", { k: "tlfig", title: "Military operations", rows: OPS.filter(r => r[0] < 2010).map(r => [r[0], r[1], r[2].length > 34 ? r[2].slice(0, 32) + "…" : r[2]]),
  cap: "From Operation Polo (Hyderabad, 1948) to Black Tornado (26/11, 2008). Shakti is Pokhran-II (1998); Pokhran-I (1974) was 'Smiling Buddha'." },
  { k: "tlfig", title: "Rescue, relief and recent operations", rows: OPS.filter(r => r[0] >= 2010).map(r => [r[0], r[1], r[2].length > 34 ? r[2].slice(0, 32) + "…" : r[2]]),
  cap: "Evacuations are named after rivers and gods — Ganga (Ukraine), Kaveri (Sudan), Ajay (Israel), Sindhu (Iran)." });

// F7–F9 — exercise partners on the world map, one pin per country
const worldOf = (list, title, cap) => { const by = {}; list.forEach(([ex, c]) => { (by[c] = by[c] || []).push(ex); });
  const E = Object.entries(by), pins = E.map(([c, ex], i) => { const [lo, la] = GEO.country(c); return [String(i + 1), lo, la, c + ": " + ex.join(", "), "n"]; });
  return { k: "worldfig", title, pins, mark: E.map(([c]) => GEO.country(c)[2]).filter(Boolean), legend: E.map(([c, ex], i) => [`${i + 1} ${c}`, ex.join(" · ")]), cap, minw: 700 }; };
place("F7", "Army exercises and partners", worldOf(rows("F7", "Army exercises and partners").map(r => [r[0], r[1]]), "Army exercise partners on the map",
  "Neighbours have one each — Surya Kiran (Nepal), Sampriti (Bangladesh), Mitra Shakti (Sri Lanka). The USA has two: Yudh Abhyas and Vajra Prahar."));
place("F8", "Air exercises", worldOf(rows("F8", "Naval exercises").map(r => [r[0], r[1]]).concat(rows("F8", "Air exercises").map(r => [r[0], r[1]])), "Naval and air exercise partners",
  "France: Varuna (navy) and Garuda (air). UK: Konkan and Indradhanush. Japan: JIMEX, Shinyuu Maitri and Veer Guardian."));
const MUL = [["Malabar", 135, 20, "India · USA · Japan · Australia (Quad)"], ["RIMPAC", -157.8, 21.3, "Hawaii, USA"], ["Red Flag", -147.7, 64.8, "Alaska / Nevada, USA"],
  ["Pitch Black", 130.8, -12.5, "Darwin, Australia"], ["MILAN", 83.22, 17.69, "Visakhapatnam, India"], ["Tarang Shakti", 77.2, 26, "India, 2024"], ["Bright Star", 31.2, 30, "Egypt"],
  ["Desert Flag", 54.4, 24.3, "UAE"], ["Blue Flag", 34.9, 31.2, "Israel"], ["Zapad", 37.6, 55.7, "Russia"], ["Sea Dragon", 144.8, 13.4, "Guam (USA)"], ["Cope Thunder", 121, 15, "Philippines"]];
place("F9", "Multilateral", { k: "worldfig", title: "Where the big multilateral exercises are held", minw: 700,
  pins: MUL.map((m, i) => [String(i + 1), m[1], m[2], m[0] + " — " + m[3], "n"]), legend: MUL.map((m, i) => [`${i + 1} ${m[0]}`, m[3]]),
  cap: "RIMPAC (Hawaii) is the world's largest maritime exercise; Malabar is the Quad's naval exercise; India hosts MILAN and Tarang Shakti." });
VISUAL = { mode: "world", VIS: { key: "defence_photos_v1", word: "defence", words: "defence", search: "", quiz: "picture", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
