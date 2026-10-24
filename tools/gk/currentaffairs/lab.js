/* Current Affairs Lab — decks built from the lesson tables (labRows), played by tools/workbook/games.js.
   Nothing here names a month: every table of every lesson is read, so a new month file is picked up by itself.
   - one deck per kind of news (Sports, Appointments …), gathering that table from every month, newest first;
   - one deck per month, with all of that month's tables;
   - a Grand Mix.
   The "Sources" tables are left out. A deck needs at least four different answers to give four options; smaller
   decks are dropped, and with no deck at all the Lab simply shows no games. */
const CA_KINDS = [
  ["National", "🇮🇳"], ["International", "🌍"], ["Economy and banking", "💹"], ["Science, space and defence", "🚀"],
  ["Sports", "🏅"], ["Awards and honours", "🏆"], ["Appointments", "🪪"], ["Places and persons in news", "📍"], ["Obituaries", "🕯️"]
];
const CA_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const caNum = id => +String(id).replace(/\D/g, "");
const caLessons = LESSONS.slice().sort((a, b) => caNum(b.id) - caNum(a.id));          // newest month first
const caStrip = s => String(s == null ? "" : s).replace(/<[^>]+>/g, "").trim();
const caTables = l => l.blocks.filter(b => b.k === "table").map((t, n) => ({ title: caStrip(t.title), n }))
  .filter(t => !/^Sources/i.test(t.title));
const caKind = title => (CA_KINDS.find(k => title.toLowerCase().startsWith(k[0].toLowerCase())) || [title])[0];
const caOk = d => new Set(d.pairs.map(p => p[1])).size >= 4;
const caSlug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const CA_KIND_DECKS = CA_KINDS.map(([kind, ico]) => {
  const from = caLessons.filter(l => caTables(l).some(t => caKind(t.title) === kind));
  const pairs = from.flatMap(l => caTables(l).filter(t => caKind(t.title) === kind).flatMap(t => labRows(l.id, t.n)));
  const months = from.map(l => CA_MONTHS[caNum(l.id) - 1]).filter(Boolean);
  return { id: "k-" + caSlug(kind), ico, title: kind, sub: months.length ? months.slice(0, 3).join(", ") + (months.length > 3 ? " and earlier" : "") : "",
    lesson: from.length ? from[0].id : undefined, q: "", pairs };
}).filter(caOk);
const CA_MONTH_DECKS = caLessons.map(l => ({
  id: "m-" + l.id, ico: "🗓️", title: (CA_MONTHS[caNum(l.id) - 1] || l.id) + " 2026", sub: "The whole month — every table", lesson: l.id, q: "",
  pairs: caTables(l).flatMap(t => labRows(l.id, t.n))
})).filter(caOk);
const CA_DECKS = CA_KIND_DECKS.concat(CA_MONTH_DECKS);
const CA_MIX = CA_KIND_DECKS.length ? CA_KIND_DECKS : CA_MONTH_DECKS;      // the kind decks already hold every row once
const caMatch = ["k-appointments", "k-awards-and-honours", "k-sports"].map(id => CA_DECKS.find(d => d.id === id))
  .find(d => d && d.pairs.filter((p, i, a) => a.filter(x => x[1] === p[1]).length === 1).length >= 6);
const LAB_CONF = {
  title: "News Lab", blurb: "Sixty seconds of the year's news at a time — who, where, what and when. Every right answer earns XP.",
  ranks: [[0,"Reader","📰"],[60,"Reporter","🗞️"],[200,"Correspondent","🎙️"],[450,"Editor","✒️"],[900,"Editor-in-Chief","🏛️"]],
  decks: CA_DECKS.length ? CA_DECKS.concat([{ id: "mix", ico: "🎲", title: "Grand Mix", sub: "Every month at once — the real exam feel", q: "", make: () => labMix(CA_MIX), list: () => CA_MIX.flatMap(d => d.pairs) }]) : [],
  match: caMatch ? { deck: caMatch.id, title: "Pair each " + caMatch.title.toLowerCase() + " item with its fact", sub: "Flip cards — " + caMatch.title.toLowerCase() + " from the latest months" } : undefined
};
