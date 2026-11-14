/* Current Affairs — each month opens with a small chart of how many items it has under each heading
   (drawn by study-visual.js). place(), rows(), LESSONS and KIT come from applyVisual in tools/workbook/lib.js. */
const strip = x => String(x == null ? "" : x).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();
LESSONS.forEach(l => {
  const secs = l.blocks.filter(b => (b.rows || b.items) && b.title && !/^Sources/.test(strip(b.title))).map(b => [strip(b.title).split(" — ")[0].split(" (")[0], (b.rows || b.items).length, ""]);
  if (secs.length < 3) return;
  const total = secs.reduce((t, s) => t + s[1], 0);
  place(l.id, "start", { k: "bars", title: strip(l.title).replace(/ \(.*\)$/, "") + " at a glance: " + total + " items", unit: "items", left: 190, sort: false, hi: 0, mark: secs.slice().sort((a, b) => b[1] - a[1])[0][0], rows: secs });
});
VISUAL = { mode: true, VIS: { key: "currentaffairs_v1", word: "picture", words: "pictures", search: "", quiz: "photo", ask: "", rows: [], tabs: [] } };
