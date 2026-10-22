/* Important Days — a calendar for each lesson, the whole year at a glance, a month chart and photos (drawn by study-visual.js).
   place(lesson, where, ...blocks) and rows(lesson, table title) come from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];
const MON = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
// "12 January" → [1, 12]; moving dates ("Last Sunday of January") have no fixed day and stay off the calendar
const fixed = s => { const m = String(s).match(/^(\d{1,2}) ([A-Za-z]+)$/); if (!m) return null; const mo = MON.indexOf(m[2].toLowerCase()); return mo < 0 ? null : [mo + 1, +m[1]]; };
const cal = (L, title, cap) => { const r = rows(L, "Days and dates").map(r => [fixed(r[1]), r[0]]).filter(x => x[0]).map(([d, n]) => [d[0], d[1], n]);
  place(L, "Days and dates", { k: "calendar", title, rows: r, cap }); return r; };

const ALL = [];
ALL.push(...cal("D1", "The year of birthdays", "Tap a month to see its days. January is busiest: Vivekananda (12), Netaji (23), and Gandhi's death anniversary (30)."));
ALL.push(...cal("D2", "Days for causes, month by month", "Tap a month. Many began recently — Startup Day (2022), Girl Child Day (2008), Voters' Day (2011)."));
ALL.push(...cal("D3", "Armed forces days", "Army Day (15 January), Air Force Day (8 October), Navy Day (4 December) — the three to know first."));
ALL.push(...cal("D4", "World days, January to April", "Tap a month to see its world days."));
ALL.push(...cal("D5", "World days, May to August", "Tap a month to see its world days."));
ALL.push(...cal("D6", "World days, September to December", "Tap a month to see its world days."));
ALL.push(...cal("D7", "Health days", "World Health Day is 7 April, the day the WHO was founded (1948)."));
ALL.push(...cal("D8", "Environment and nature days", "World Environment Day is 5 June (Stockholm, 1972); Earth Day is 22 April."));

place("D1", "Whom each day honours", { k: "photos", title: "Whom the days honour", items: [
  P("Swami_Vivekananda", "Swami Vivekananda", "National Youth Day · 12 January"), P("Subhas_Chandra_Bose", "Subhas Chandra Bose", "Parakram Diwas · 23 January"),
  P("Sarojini_Naidu", "Sarojini Naidu", "National Women's Day · 13 February"), P("Sardar_Vallabhbhai_Patel", "Sardar Patel", "Rashtriya Ekta Diwas · 31 October"),
  P("Sarvepalli_Radhakrishnan", "S. Radhakrishnan", "Teachers' Day · 5 September"), P("Jawaharlal_Nehru", "Jawaharlal Nehru", "Children's Day · 14 November"),
  P("Major_Dhyan_Chand", "Dhyan Chand", "National Sports Day · 29 August"), P("Abul_Kalam_Azad", "Maulana Azad", "National Education Day · 11 November"),
  P("Srinivasa_Ramanujan", "Srinivasa Ramanujan", "National Mathematics Day · 22 December"), P("Chaudhary_Charan_Singh", "Charan Singh", "Kisan Diwas · 23 December"),
  P("M._Visvesvaraya", "M. Visvesvaraya", "Engineers' Day · 15 September"), P("Atal_Bihari_Vajpayee", "Atal Bihari Vajpayee", "Good Governance Day · 25 December"),
  P("B._R._Ambedkar", "B. R. Ambedkar", "Ambedkar Jayanti · 14 April"), P("Birsa_Munda", "Birsa Munda", "Janjatiya Gaurav Divas · 15 November")] });

place("D3", "story", { k: "cards", title: "The three services' days", rows: [
  ["Army Day", "15 January", "1949: K. M. Cariappa became the first Indian Commander-in-Chief", "🪖"],
  ["Air Force Day", "8 October", "1932: the Indian Air Force was set up", "✈️"],
  ["Navy Day", "4 December", "1971: Operation Trident, the attack on Karachi harbour", "⚓"]] });

// the whole year, from every lesson, and a chart of how the days fall
const N = Array(12).fill(0); ALL.forEach(r => N[r[0] - 1]++);
place("D9", "start", { k: "calendar", title: "The whole year at a glance", rows: ALL,
  cap: "Every fixed-date day in this app on one calendar. Tap a month for the list — a quick revision before the exam." },
  { k: "bars", title: "Days in each month", sort: false, left: 110, mark: MON[N.indexOf(Math.max(...N))].replace(/^./, c => c.toUpperCase()), rows: MON.map((m, i) => [m[0].toUpperCase() + m.slice(1), N[i], ""]),
    cap: `The busiest month is ${MON[N.indexOf(Math.max(...N))].replace(/^./, c => c.toUpperCase())} with ${Math.max(...N)} days; learn it first.` });
place("D9", "UN international years", { k: "tlfig", title: "UN international years",
  rows: rows("D9", "UN international years").map(r => [+String(r[1]).match(/\d{4}/)[0], r[0].replace(/^International Year of /, "").replace(/^(.)/, c => c.toUpperCase()), (r[2] || "").split(";")[0].replace(/\.$/, "")]),
  cap: "2023 was the International Year of Millets, proposed by India." });
VISUAL = { mode: true, VIS: { key: "days_photos_v1", word: "day", words: "days", search: "", quiz: "person", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
