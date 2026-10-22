/* Awards & Honours — the Bharat Ratna medal, the order of the civilian awards, timelines, firsts, nicknames and photos (drawn by study-visual.js).
   place(lesson, where, ...blocks) and rows(lesson, table title) come from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];
const wiki = n => n.replace(/ \(.*\)$/, "").replace(/ /g, "_");
const yearOf = s => +((String(s).match(/\b(1[89]\d\d|20\d\d)\b/) || [0])[0]);

// A1 — the medal, drawn, beside its facts; firsts as cards; recipients in pictures
const medal = `<svg class="dg" viewBox="0 0 220 280" role="img" aria-label="The Bharat Ratna medallion: a peepal leaf with the sun">
  <defs><linearGradient id="brz" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e7b46a"/><stop offset=".55" stop-color="#b9772f"/><stop offset="1" stop-color="#7a4a1c"/></linearGradient></defs>
  <path d="M110 18 C160 26 200 72 194 130 C189 182 150 214 116 236 Q112 252 110 270 Q108 252 104 236 C70 214 31 182 26 130 C20 72 60 26 110 18 Z" fill="url(#brz)" stroke="#6b3f15" stroke-width="2"/>
  <path d="M110 40 V232" stroke="#8a5a26" stroke-width="1.6" opacity=".6"/>
  ${[0, 1, 2, 3, 4].map(i => `<path d="M110 ${78 + i * 30} Q${150 - i * 4} ${66 + i * 30} ${176 - i * 10} ${84 + i * 32} M110 ${78 + i * 30} Q${70 + i * 4} ${66 + i * 30} ${44 + i * 10} ${84 + i * 32}" stroke="#8a5a26" stroke-width="1" fill="none" opacity=".45"/>`).join("")}
  <g transform="translate(110 104)">${Array.from({ length: 16 }, (_, i) => `<line x1="0" y1="-22" x2="0" y2="-32" transform="rotate(${i * 22.5})" stroke="#fbe7b0" stroke-width="2.4" stroke-linecap="round"/>`).join("")}
    <circle r="17" fill="#fbe7b0" stroke="#8a5a26" stroke-width="1.5"/></g>
  <text x="110" y="168" text-anchor="middle" font-size="21" font-weight="700" style="fill:#fff4d6" font-family="'Noto Sans Devanagari', 'Tiro Devanagari Hindi', sans-serif">भारत रत्न</text></svg>`;
place("A1", "About the award", { k: "info", title: "The medallion",
  html: `<div class="map-wrap" style="align-items:center"><div style="max-width:220px;margin:0 auto;width:100%">${medal}</div>` +
    `<dl class="facts" style="margin:0">${rows("A1", "About the award").map(r => `<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join("")}</dl></div>`,
  cap: "A bronze peepal leaf, with the sun on the front and 'Bharat Ratna' in Devanagari; the back carries the State Emblem and 'Satyameva Jayate'. No money comes with it." });
const BR = rows("A1", "Recipients to remember");
const FIRST = BR.filter(r => /first|youngest|oldest/i.test(r[2]) && !/^Among the first three/.test(r[2]));
place("A1", "Recipients to remember", { k: "cards", title: "Firsts of the Bharat Ratna",
  rows: FIRST.map(r => [r[0], r[1], r[2].replace(/\.$/, ""), /woman/.test(r[2]) ? "👩" : /posthumous/i.test(r[2]) ? "🕯️" : /non-Indian|naturalised/.test(r[2]) ? "🌍" : /sportsper|youngest/i.test(r[2]) ? "🏏" : /musician/.test(r[2]) ? "🎵" : /actor/.test(r[2]) ? "🎬" : /industrialist/.test(r[2]) ? "🏭" : /oldest/.test(r[2]) ? "🎂" : "⭐"]),
  cap: "The first three (1954): C. Rajagopalachari, S. Radhakrishnan and C. V. Raman. Khan Abdul Ghaffar Khan (1987) and Nelson Mandela (1990) are the two non-Indians." },
  { k: "bars", title: "Recipients in this list, by decade", sort: false, left: 90,
    rows: (() => { const n = {}; BR.forEach(r => { const d = Math.floor(+r[1] / 10) * 10; n[d] = (n[d] || 0) + 1; }); return Object.entries(n).map(([d, c]) => [d + "s", c, ""]); })(), mark: "2020s",
    cap: "2024 alone had five — the most in one year." });
place("A1", "story", { k: "photos", title: "Recipients in pictures", items: [
  P("C._Rajagopalachari", "C. Rajagopalachari", "1954 · among the first three"), P("Sarvepalli_Radhakrishnan", "S. Radhakrishnan", "1954"), P("C._V._Raman", "C. V. Raman", "1954"),
  P("Indira_Gandhi", "Indira Gandhi", "1971 · first woman"), P("Mother_Teresa", "Mother Teresa", "1980"), P("Abdul_Ghaffar_Khan", "Khan Abdul Ghaffar Khan", "1987 · first non-Indian"),
  P("Nelson_Mandela", "Nelson Mandela", "1990"), P("J._R._D._Tata", "J. R. D. Tata", "1992 · first industrialist"), P("Sachin_Tendulkar", "Sachin Tendulkar", "2014 · youngest"),
  P("Karpoori_Thakur", "Karpoori Thakur", "2024"), P("M._S._Swaminathan", "M. S. Swaminathan", "2024"), P("L._K._Advani", "L. K. Advani", "2024")] });

// A2 — the order of the civilian awards, as a pyramid
const pyr = `<svg class="dg" viewBox="0 0 680 250" role="img" aria-label="The order of India's civilian awards">` +
  [["Bharat Ratna", "highest civilian award · at most 3 a year", "s2"], ["Padma Vibhushan", "exceptional and distinguished service · 5 in 2026", "s4"],
   ["Padma Bhushan", "distinguished service of a high order · 13 in 2026", "s3"], ["Padma Shri", "distinguished service · 113 in 2026", "s1"]].map(([t, n, c], i) => {
    const w0 = 120 + i * 120, w1 = 120 + (i + 1) * 120, y = 10 + i * 58;
    return `<path d="M${340 - w0 / 2} ${y} L${340 + w0 / 2} ${y} L${340 + w1 / 2} ${y + 54} L${340 - w1 / 2} ${y + 54} Z" class="${c}" stroke="var(--rule)"/>` +
      `<text x="340" y="${y + 24}" text-anchor="middle" font-size="15" class="b">${t}</text><text x="340" y="${y + 42}" text-anchor="middle" font-size="11" class="mut">${n}</text>`; }).join("") + `</svg>`;
place("A2", "About the Padma awards", { k: "info", title: "The order, top to bottom", html: `<figure class="fig wide" style="--minw:520px;margin:0">${pyr}</figure>`,
  cap: "Bharat Ratna, then Padma Vibhushan > Padma Bhushan > Padma Shri. All are announced on the eve of Republic Day and presented by the President." });
place("A2", "Padma Vibhushan", { k: "photos", title: "Padma Vibhushan, recent years", items: rows("A2", "Padma Vibhushan").slice(0, 12).map(r => P(wiki(r[0]), r[0], r[1] + " · " + r[2].replace(/\.$/, ""))) });

// A3 — literary firsts on a timeline
place("A3", "Winners to remember", { k: "tlfig", title: "Literary firsts and milestones",
  rows: rows("A3", "Winners to remember").filter(r => !/Sahitya Akademi Award 2025/.test(r[1])).map(r => [yearOf(r[1]), r[0], r[1].replace(/ \(\d{4}( and \d{4})?\)/, "").replace(/\(\d{4}\), /, "")]).filter(r => r[0]),
  cap: "The first Jnanpith went to G. Sankara Kurup (Malayalam, 1965); Ashapoorna Devi was the first woman (1976); Amitav Ghosh the first in English (2018)." });
place("A3", "story", { k: "photos", title: "Writers in pictures", items: [
  P("G._Sankara_Kurup", "G. Sankara Kurup", "First Jnanpith, 1965"), P("Ashapoorna_Devi", "Ashapoorna Devi", "First woman, Jnanpith"), P("Sumitranandan_Pant", "Sumitranandan Pant", "First Hindi Jnanpith"),
  P("Amitav_Ghosh", "Amitav Ghosh", "First English Jnanpith"), P("Gulzar", "Gulzar", "58th Jnanpith"), P("Vinod_Kumar_Shukla", "Vinod Kumar Shukla", "59th Jnanpith"),
  P("Amrita_Pritam", "Amrita Pritam", "First woman, Sahitya Akademi"), P("Jhumpa_Lahiri", "Jhumpa Lahiri", "Pulitzer 2000")] });

// A4 — Dadasaheb Phalke on a timeline, the winners in pictures
const DP = rows("A4", "Dadasaheb Phalke Award winners");
place("A4", "Dadasaheb Phalke Award winners", { k: "tlfig", title: "Dadasaheb Phalke Award, from Devika Rani to Mohanlal",
  rows: DP.map(r => [yearOf(r[1]), r[0], /posthumous/.test(r[1]) ? "posthumous" : (r[1].match(/\((\d+\w+)\)/) || ["", ""])[1]]),
  cap: "Devika Rani was the first (1969, the centenary of Phalke's birth). The years are the award years, often presented later." },
  { k: "photos", title: "Phalke winners in pictures", items: DP.map(r => P(wiki(r[0]), r[0], String(yearOf(r[1])))) });

// A5 — the sports awards as cards, the winners in pictures
place("A5", "The awards", { k: "cards", title: "Who gets which sports award",
  rows: rows("A5", "The awards").slice(0, 7).map(r => [r[0], r[1], r[2].split(";")[0].replace(/\.$/, ""), /Khel Ratna/.test(r[0]) ? "🏆" : /Dronacharya/.test(r[0]) ? "🧑‍🏫" : /Arjuna/.test(r[0]) ? "🏹" : /Tenzing/.test(r[0]) ? "🏔️" : /Azad/.test(r[0]) ? "🎓" : "🏅"]) });
place("A5", "Recent winners", { k: "photos", title: "Winners in pictures", items: [
  P("Viswanathan_Anand", "Viswanathan Anand", "First Khel Ratna"), P("Neeraj_Chopra", "Neeraj Chopra", "Khel Ratna 2021"), P("Manu_Bhaker", "Manu Bhaker", "Khel Ratna 2024"),
  P("Gukesh_Dommaraju", "D. Gukesh", "Khel Ratna 2024"), P("Harmanpreet_Singh", "Harmanpreet Singh", "Khel Ratna 2024"), P("Sharath_Kamal", "Sharath Kamal", "Khel Ratna 2022")] });

// A6 — Nobel: the laureates on a timeline, by field, in pictures
const NB = rows("A6", "Indians and India-linked laureates").map(r => [yearOf(r[1]), r[0], r[1].split(",")[0]]);
place("A6", "Indians and India-linked laureates", { k: "tlfig", title: "Indian and India-linked Nobel laureates", rows: NB,
  cap: "Ronald Ross (1902) and Kipling (1907) were born in India; Tagore (1913) was the first Indian and the first Asian laureate; Raman (1930) the first Asian in science." },
  { k: "bars", title: "By field", left: 110, hi: 2, rows: (() => { const n = {}; NB.forEach(r => { n[r[2]] = (n[r[2]] || 0) + 1; }); return Object.entries(n).map(([f, c]) => [f, c, NB.filter(r => r[2] === f).map(r => r[1].split(" ").pop()).join(", ")]); })() });
place("A6", "story", { k: "photos", title: "Laureates in pictures", items: NB.map(r => P(wiki(r[1]), r[1], r[2] + ", " + r[0])) });

// A7 — the nicknames, and the Magsaysay timeline
place("A7", "Awards and their nicknames", { k: "cards", title: "Know the award by its nickname",
  rows: rows("A7", "Awards and their nicknames").filter(r => /Nobel|Oscar/i.test(r[1])).map(r => [r[1], r[0], r[2], "🏅"]) });
place("A7", "Indians and the Magsaysay", { k: "tlfig", title: "Indians and the Magsaysay Award",
  rows: rows("A7", "Indians and the Magsaysay").map(r => [yearOf(r[1]), r[0], (r[2] || "").split(";")[0].replace(/\.$/, "").slice(0, 34)]),
  cap: "Vinoba Bhave (1958) was the first Indian winner." });

// A8 — this year's Nobels as cards
const ICON = { Physics: "⚛️", Chemistry: "🧪", Medicine: "🩺", Literature: "📖", Peace: "🕊️", Economics: "📈" };
place("A8", "Nobel Prizes 2025 and 2026", { k: "cards", title: "The Nobel Prizes of 2026",
  rows: rows("A8", "Nobel Prizes 2025 and 2026").filter(r => /2026/.test(r[0])).map(r => [r[1], r[0], r[2], ICON[r[0].split(" ")[0]] || "🏅"]),
  cap: "Announced in October; presented on 10 December — Peace in Oslo, the rest in Stockholm." });
VISUAL = { mode: true, VIS: { key: "awards_photos_v1", word: "award", words: "awards", search: "", quiz: "person", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
