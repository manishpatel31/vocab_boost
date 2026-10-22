/* Books & Authors — author photos, bookshelves, newspaper mastheads, pen-name cards and prize timelines (drawn by study-visual.js).
   place(lesson, where, ...blocks) and rows(lesson, table title) come from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];
const wiki = n => n.replace(/ \(.*\)$/, "").replace(/ /g, "_");
// one photo per author (the first book of each), from the lesson's own table
const authors = (L, title, n, skip) => { const seen = new Set(); return rows(L, title).filter(r => { const a = r[1].replace(/ \(.*\)$/, "");
  if (seen.has(a) || (skip || []).includes(a)) return false; seen.add(a); return true; }).slice(0, n).map(r => P(wiki(r[1]), r[1].replace(/ \(.*\)$/, ""), r[0])); };

place("B1", "story", { k: "photos", title: "The classics in pictures", items: [
  P("Arthashastra", "Arthashastra", "Kautilya"), P("Abhijnanashakuntalam", "Abhijnanashakuntalam", "Kalidasa"), P("Panchatantra", "Panchatantra", "Vishnu Sharma"),
  P("Ashtadhyayi", "Ashtadhyayi", "Panini"), P("Aryabhatiya", "Aryabhatiya", "Aryabhata"), P("Sushruta_Samhita", "Sushruta Samhita", "Sushruta"),
  P("Tirukkural", "Tirukkural", "Tiruvalluvar"), P("Gita_Govinda", "Gita Govinda", "Jayadeva"), P("Xuanzang", "Hiuen Tsang", "Si-Yu-Ki")] });
place("B1", "Books and authors", { k: "cards", title: "Sort them by subject", rows: [
  ["Statecraft", "Arthashastra · Kautilya", "Also Megasthenes' Indica, a Greek view of Mauryan India", "👑"],
  ["Grammar and words", "Ashtadhyayi · Panini", "Amarakosha (Amarasimha), Yoga Sutras (Patanjali)", "🔤"],
  ["Drama and poetry", "Kalidasa", "Shakuntalam, Meghadutam; Bhasa, Sudraka, Vishakhadatta, Jayadeva", "🎭"],
  ["Science and medicine", "Aryabhata · Varahamihira", "Lilavati (Bhaskara II), Charaka and Sushruta Samhita", "🔭"],
  ["Stories", "Panchatantra · Vishnu Sharma", "Hitopadesha, Kathasaritsagara", "🦊"],
  ["History and travel", "Rajatarangini · Kalhana", "Harshacharita (Banabhatta); Fa-Hien and Hiuen Tsang", "🧭"],
  ["Tamil Sangam", "Tirukkural · Tiruvalluvar", "Silappatikaram and Manimekalai, the twin epics", "🌺"]] });

place("B2", "story", { k: "photos", title: "In pictures", items: [
  P("Babur", "Babur", "Baburnama"), P("Abu'l-Fazl_ibn_Mubarak", "Abul Fazl", "Akbarnama"), P("Jahangir", "Jahangir", "Tuzuk-i-Jahangiri"),
  P("Al-Biruni", "Al-Biruni", "Kitab-ul-Hind"), P("Ibn_Battuta", "Ibn Battuta", "Rihla"), P("Amir_Khusrau", "Amir Khusrau", "Khazain-ul-Futuh"),
  P("Tulsidas", "Tulsidas", "Ramcharitmanas"), P("Kabir", "Kabir", "Bijak"), P("Dara_Shikoh", "Dara Shikoh", "Majma-ul-Bahrain"), P("Krishnadevaraya", "Krishnadevaraya", "Amuktamalyada")] });
place("B2", "Books and authors", { k: "shelf", title: "The Mughal shelf", hue: 30,
  rows: rows("B2", "Books and authors").filter(r => /Babur|Gulbadan|Abul Fazl|Badauni|Jahangir|Lahori|Dara/.test(r[1])).map(r => [r[0].replace(/ \(.*\)$/, ""), r[1], ""]),
  cap: "In order: Babur wrote his own memoir; his daughter Gulbadan wrote Humayun's; Abul Fazl and Badauni wrote Akbar's reign (one praising, one critical); Jahangir wrote his own; Lahori wrote Shah Jahan's." });

// B3 — newspapers as mastheads, on a timeline
const NP = rows("B3", "Newspapers and journals");
place("B3", "Newspapers and journals", { k: "info", title: "Mastheads of the freedom struggle",
  html: `<div class="fam">${NP.map(r => `<div style="background:var(--sheet);border-top:4px double var(--ink)"><b style="font:800 19px/1.15 var(--f-display,Georgia,serif);letter-spacing:.01em">${r[0]}</b><span class="n">${r[1]}</span><small>${r[2]}</small></div>`).join("")}</div>`,
  cap: "Pair the paper with its founder: Kesari–Tilak, Al-Hilal–Azad, Mooknayak–Ambedkar, Sambad Kaumudi–Ram Mohan Roy, New India–Annie Besant." },
  { k: "tlfig", title: "When they started", rows: [[1780, "Bengal Gazette", "Hicky · the first"], [1821, "Sambad Kaumudi", "Ram Mohan Roy"], [1851, "Rast Goftar", "Dadabhai Naoroji"],
    [1853, "Hindu Patriot", "H. C. Mukherjee"], [1868, "Amrita Bazar Patrika", "the Ghosh brothers"], [1881, "Kesari", "Tilak"], [1903, "Indian Opinion", "Gandhi, South Africa"],
    [1912, "Al-Hilal", "Azad"], [1913, "Ghadar", "San Francisco"], [1914, "New India", "Annie Besant"], [1919, "Young India", "Gandhi takes over"], [1920, "Mooknayak", "Ambedkar"], [1938, "National Herald", "Nehru"]],
  cap: "From Hicky's Bengal Gazette (1780) to Nehru's National Herald (1938)." });
place("B3", "story", { k: "photos", title: "In pictures", items: [
  P("Hicky's_Bengal_Gazette", "Hicky's Bengal Gazette", "India's first newspaper, 1780"), P("Bal_Gangadhar_Tilak", "Bal Gangadhar Tilak", "Kesari · Mahratta"),
  P("Abul_Kalam_Azad", "Maulana Azad", "Al-Hilal"), P("Annie_Besant", "Annie Besant", "New India"), P("B._R._Ambedkar", "B. R. Ambedkar", "Mooknayak"),
  P("Ram_Mohan_Roy", "Raja Ram Mohan Roy", "Sambad Kaumudi"), P("Mahatma_Gandhi", "Mahatma Gandhi", "Young India · Harijan"), P("Jawaharlal_Nehru", "Jawaharlal Nehru", "The Discovery of India")] });

// B4 — pen names
place("B4", "Pen names", { k: "info", title: "Pen name → real name",
  html: `<div class="fam">${rows("B4", "Pen names").map(r => `<div><small style="text-transform:uppercase;letter-spacing:.08em;font-size:10.5px">known as</small><b style="font:700 20px/1.1 var(--f-display,Georgia,serif);color:var(--accent)">${r[0]}</b><small>${r[1]}${r[2] ? " · " + r[2] : ""}</small></div>`).join("")}</div>`,
  cap: "The four asked most: Premchand (Dhanpat Rai), Nirala (Suryakant Tripathi), Dinkar (Ramdhari Singh) and Gulzar (Sampooran Singh Kalra)." });
place("B4", "story", { k: "photos", title: "Writers in pictures", items: [
  P("Premchand", "Premchand", "Godan"), P("Jaishankar_Prasad", "Jaishankar Prasad", "Kamayani"), P("Suryakant_Tripathi_'Nirala'", "Nirala", "Saroj Smriti"),
  P("Ramdhari_Singh_Dinkar", "Dinkar", "Rashmirathi"), P("Mahadevi_Varma", "Mahadevi Varma", "Yama"), P("Gulzar", "Gulzar", "Lyricist and poet"),
  P("Kuvempu", "Kuvempu", "Kannada"), P("Ghalib", "Mirza Ghalib", "Urdu ghazals")] });

// B5 — the Booker shelf and the Indian Booker timeline
place("B5", "Books and authors", { k: "shelf", title: "The prize shelf", hue: 200,
  rows: rows("B5", "Books and authors").filter(r => /Booker|Pulitzer|Nobel|Jnanpith/.test(r[2])).map(r => [r[0], r[1], ((r[2].match(/Booker|Pulitzer|Nobel|Jnanpith/) || [""])[0])]),
  cap: "The badge shows the prize the book or its writer is remembered for." },
  { k: "tlfig", title: "Booker winners of Indian origin", rows: [[1971, "V. S. Naipaul", "In a Free State"], [1981, "Salman Rushdie", "Midnight's Children"], [1997, "Arundhati Roy", "The God of Small Things"],
    [2006, "Kiran Desai", "The Inheritance of Loss"], [2008, "Aravind Adiga", "The White Tiger"], [2022, "Geetanjali Shree", "Tomb of Sand · International Booker"], [2025, "Banu Mushtaq", "Heart Lamp · International Booker"]],
  cap: "Five Booker Prizes (1971–2008), then two International Bookers for translated books: Hindi (2022) and Kannada (2025)." });
place("B5", "story", { k: "photos", title: "Writers in pictures", items: authors("B5", "Books and authors", 12) });

place("B6", "story", { k: "photos", title: "Who wrote them", items: authors("B6", "Books and authors", 12, ["Adolf Hitler", "Pervez Musharraf"]) });
place("B7", "story", { k: "photos", title: "Who wrote them", items: authors("B7", "Books and authors", 12) });
place("B7", "Books and authors", { k: "shelf", title: "The sports shelf", hue: 120, rows: rows("B7", "Books and authors").slice(0, 14).map(r => [r[0], r[1], ""]),
  cap: "Match the title to the player: the titles often hint at the career — 281 and Beyond (Laxman's 281), The Race of My Life (Milkha), Golden Girl (P. T. Usha)." });
place("B8", "story", { k: "photos", title: "Writers and thinkers in pictures", items: authors("B8", "Books and authors", 16) });
place("B8", "Books and authors", { k: "cards", title: "Thinkers and their one big book", rows: [
  ["Karl Marx", "Das Kapital", "Communism", "⚒️"], ["Adam Smith", "The Wealth of Nations", "Father of economics", "💰"], ["Charles Darwin", "On the Origin of Species", "Evolution", "🐢"],
  ["Niccolò Machiavelli", "The Prince", "Power politics", "🦁"], ["Plato", "The Republic", "The ideal state", "🏛️"], ["Rousseau", "The Social Contract", "'Man is born free'", "📜"],
  ["Thomas Hobbes", "Leviathan", "The strong state", "🐋"], ["J. M. Keynes", "The General Theory", "Government spending", "📈"], ["Rachel Carson", "Silent Spring", "The environment", "🌱"]] });

const B9 = rows("B9", "Books and authors");
place("B9", "Books and authors", { k: "tlfig", title: "The Booker and the International Booker, 2022–2026",
  rows: B9.filter(r => /Booker/.test(r[2])).map(r => [+r[2].match(/20\d\d/)[0], r[1], r[0] + (/International/.test(r[2]) ? " · Intl" : "")]),
  cap: "International Booker: Tomb of Sand (2022, Hindi) and Heart Lamp (2025, Kannada) are the two Indian wins. The Booker itself: Karunatilaka (2022), Lynch, Harvey, Szalay." },
  { k: "shelf", title: "On the new-books table", hue: 280, rows: B9.map(r => [r[0].replace(/ \(.*\)$/, ""), r[1], (r[2].match(/International Booker|Booker|Sahitya Akademi/) || [""])[0].replace("International Booker", "Intl Booker").replace("Sahitya Akademi", "Akademi")]) });
place("B9", "story", { k: "photos", title: "In pictures", items: [
  P("Banu_Mushtaq", "Banu Mushtaq", "Heart Lamp · 2025"), P("Geetanjali_Shree", "Geetanjali Shree", "Tomb of Sand · 2022"), P("Samantha_Harvey", "Samantha Harvey", "Orbital · 2024"),
  P("Paul_Lynch_(writer)", "Paul Lynch", "Prophet Song · 2023"), P("Shehan_Karunatilaka", "Shehan Karunatilaka", "Seven Moons · 2022"), P("Salman_Rushdie", "Salman Rushdie", "Knife · 2024"),
  P("S._Jaishankar", "S. Jaishankar", "Why Bharat Matters"), P("Arundhati_Roy", "Arundhati Roy", "Mother Mary Comes to Me")] });
VISUAL = { mode: true, VIS: { key: "books_photos_v1", word: "author", words: "authors", search: "", quiz: "book or writer", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
