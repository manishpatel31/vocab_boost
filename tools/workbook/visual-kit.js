// Small helpers for the apps' visual.js files (passed in as KIT by applyVisual). They return blocks for study-visual.js.
const K = 20 * Math.cos(22 * Math.PI / 180);
/** India-map projection (the same as MAP_PROJ in study-visual.js). */
const proj = (lon, lat) => [+((lon - 68) * K).toFixed(1), +((37.4 - lat) * 20).toFixed(1)];
/** An SVG path through [lon, lat] points, in India-map units. */
const path = pts => 'M' + pts.map(p => proj(p[0], p[1]).join(',')).join('L');
/** A line of latitude or longitude across the map, with a label. */
const latLine = (lat, label, cls) => { const [, y] = proj(70, lat);
  return `<line x1="0" y1="${y}" x2="560" y2="${y}" stroke="${cls || '#c0392b'}" stroke-width="1.4" stroke-dasharray="6 4" style="vector-effect:non-scaling-stroke"/>` +
    `<text x="6" y="${y - 4}" font-size="11" font-weight="700" style="fill:${cls || '#c0392b'};paint-order:stroke;stroke:var(--sheet);stroke-width:3px">${label}</text>`; };
const lonLine = (lon, label, cls) => { const [x] = proj(lon, 20);
  return `<line x1="${x}" y1="0" x2="${x}" y2="630" stroke="${cls || '#2f6db5'}" stroke-width="1.4" stroke-dasharray="6 4" style="vector-effect:non-scaling-stroke"/>` +
    `<text x="${x + 4}" y="620" font-size="11" font-weight="700" style="fill:${cls || '#2f6db5'};paint-order:stroke;stroke:var(--sheet);stroke-width:3px">${label}</text>`; };
/** An arrow along [lon, lat] points (for winds and currents); the CSS animation makes it flow. */
const arrow = (pts, color, label, at) => { const d = path(pts), id = 'ah' + Math.abs(hashStr(d + color)).toString(36);
  const [lx, ly] = at ? proj(at[0], at[1]) : proj(pts[Math.floor(pts.length / 2)][0], pts[Math.floor(pts.length / 2)][1]);
  return `<defs><marker id="${id}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="${color}"/></marker></defs>` +
    `<path d="${d}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" opacity=".75" marker-end="url(#${id})" style="vector-effect:non-scaling-stroke"/>` +
    `<path d="${d}" fill="none" stroke="#fff" stroke-width="1.4" stroke-dasharray="2 8" class="rvf" style="animation:rvflow 1.2s linear infinite;vector-effect:non-scaling-stroke"/>` +
    (label ? `<text x="${lx}" y="${ly}" font-size="12" font-weight="700" style="fill:${color};paint-order:stroke;stroke:var(--sheet);stroke-width:3px">${label}</text>` : ''); };
function hashStr(s){ let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return h; }
/** A map of numbered pins with the key beside it. rows: [name, …]; at: name → [lon, lat]; key(r) → text for the key. */
function numbered(title, rows, at, o){
  o = o || {}; const miss = rows.filter(r => !at[r[0]]); if (miss.length) throw new Error('visual-kit: no place for ' + miss.map(r => r[0]).join(', '));
  return { k: 'mapfig', title, vb: o.vb, under: o.under,
    pins: rows.map((r, i) => [String(i + 1), at[r[0]][0], at[r[0]][1], r[0], 'n']),
    facts: rows.map((r, i) => [`${i + 1} · ${r[0]}`, o.key ? o.key(r) : [r[1], r[2]].filter(Boolean).join(' — ').replace(/\.$/, '')]),
    cap: o.cap || 'Numbers match the list. Places are approximate. Use ＋ or ⛶ to zoom in.' };
}
/** A photo gallery from table rows: the first column is the Wikipedia title (or o.wiki maps it), o.cap(r) the caption. */
function photos(title, rows, o){
  o = o || {};
  return { k: 'photos', title, items: rows.slice(0, o.n || 12).map(r => [(o.wiki ? o.wiki(r) : r[0]).replace(/ \(.*\)$/, '').replace(/ /g, '_'), o.name ? o.name(r) : r[0].replace(/ \(.*\)$/, ''), o.cap ? o.cap(r) : (r[1] || '')]) };
}
/** World-map projection (the same as WORLD_PROJ in study-world.js) and an animated arrow on it. */
const wproj = (lon, lat) => [+(((lon < -168.5 ? lon + 360 : lon) + 168.5) * 2.7777778).toFixed(1), +((84 - lat) * 2.7777778).toFixed(1)];
const warrow = (pts, color, label, at) => { const d = 'M' + pts.map(p => wproj(p[0], p[1]).join(',')).join('L'), id = 'wa' + Math.abs(hashStr(d + color)).toString(36);
  const [lx, ly] = at ? wproj(at[0], at[1]) : wproj(pts[Math.floor(pts.length / 2)][0], pts[Math.floor(pts.length / 2)][1]);
  return `<defs><marker id="${id}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="${color}"/></marker></defs>` +
    `<path d="${d}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" opacity=".85" marker-end="url(#${id})" style="vector-effect:non-scaling-stroke"/>` +
    `<path d="${d}" fill="none" stroke="#fff" stroke-width="1" stroke-dasharray="2 7" style="animation:rvflow 1.2s linear infinite;vector-effect:non-scaling-stroke"/>` +
    (label ? `<text x="${lx}" y="${ly}" font-size="8.5" font-weight="700" style="fill:${color};paint-order:stroke;stroke:var(--sheet);stroke-width:2.5px">${label}</text>` : ''); };
module.exports = { proj, path, latLine, lonLine, arrow, numbered, photos, wproj, warrow };
