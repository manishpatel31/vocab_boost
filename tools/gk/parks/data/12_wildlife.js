/* Part 3 · P8 animals and where to find them; conservation status and the state symbols SSC asks about. */
const P8 = [
  ["One-horned rhinoceros","Kaziranga (Assam)","Also Pobitora, Manas, Orang and Jaldapara.","p"],
  ["Asiatic lion","Gir (Gujarat)","The only wild population in the world.","p"],
  ["Sangai (brow-antlered deer)","Keibul Lamjao (Manipur)","Manipur's state animal.","p"],
  ["Hangul (Kashmir stag)","Dachigam (Jammu and Kashmir)","","p"],
  ["Barasingha (hard-ground swamp deer)","Kanha (Madhya Pradesh)","MP's state animal.","p"],
  ["Nilgiri tahr","Eravikulam (Kerala)","Tamil Nadu's state animal.","p"],
  ["Snow leopard","Hemis (Ladakh)","",""],
  ["Indian wild ass (khur)","Little Rann of Kutch (Gujarat)","","p"],
  ["Cheetah (reintroduced)","Kuno (Madhya Pradesh)","Brought from Namibia in 2022.","p"],
  ["Olive Ridley turtle","Gahirmatha (Odisha)","Mass nesting is called 'arribada'.","p"],
  ["Saltwater crocodile","Bhitarkanika (Odisha)","","p"],
  ["Great Indian bustard","Desert National Park (Rajasthan)","Critically endangered; Rajasthan's state bird.","p"],
  ["Lion-tailed macaque","Silent Valley (Kerala)","",""],
  ["Golden langur","Chakrashila (Assam)","",""],
  ["Hoolock gibbon","Hollongapar (Assam)","India's only ape.","p"],
  ["Red panda","Singalila (West Bengal)","Sikkim's state animal.",""],
  ["Gharial","National Chambal Sanctuary","","p"],
  ["Blackbuck","Velavadar (Gujarat)","",""],
  ["Siberian crane (winter visitor, now rare)","Keoladeo (Rajasthan)","",""],
  ["Demoiselle crane","Khichan (Rajasthan)","Called 'kurja' locally.",""],
  ["Sloth bear","Daroji (Karnataka)","",""],
  ["Indian giant squirrel","Bhimashankar (Maharashtra)","Maharashtra's state animal.",""],
  ["Pygmy hog","Manas (Assam)","The smallest wild pig.",""],
  ["Dugong (sea cow)","Gulf of Mannar (Tamil Nadu)","",""],
  ["Sarus crane","Sarsai Nawar (Uttar Pradesh)","The tallest flying bird; UP's state bird.",""],
  ["Wild water buffalo","Udanti-Sitanadi (Chhattisgarh)","Chhattisgarh's state animal.",""]
];
const P8I = [
  ["Great Indian bustard","Critically endangered","Fewer than 150 left; power lines are a major threat.","p"],
  ["Gharial","Critically endangered","",""],
  ["Pygmy hog","Endangered","",""],
  ["Bengal tiger","Endangered","","p"],
  ["Asiatic lion","Endangered","Moved from 'critically endangered' in 2008.",""],
  ["Asian elephant","Endangered","",""],
  ["Snow leopard","Vulnerable","Moved from 'endangered' in 2017.",""],
  ["One-horned rhinoceros","Vulnerable","","p"],
  ["Sloth bear","Vulnerable","",""],
  ["Blackbuck","Least concern","",""],
  ["Indian peafowl","Least concern","India's national bird.",""]
];

LESSONS.push(
{id:"P8", heat:3, title:"Animals and where to find them", hi:"वन्यजीव और उनके आवास", blocks:[
  {k:"hot", h:"A favourite question type: <b>“Which park is famous for X?”</b> Learn one park per animal — rhino–Kaziranga, lion–Gir, sangai–Keibul Lamjao, hangul–Dachigam, barasingha–Kanha, Nilgiri tahr–Eravikulam, Olive Ridley–Gahirmatha."},
  {k:"story", h:"<p>Many of India's rarest animals survive in just one place. The <b>Asiatic lion</b> lives wild only in <b>Gir</b>. The <b>sangai</b> deer dances on the floating meadows of <b>Keibul Lamjao</b>. The <b>hangul</b>, Kashmir's only red deer, clings on in <b>Dachigam</b>. In <b>Kanha</b>, rangers saved the <b>barasingha</b> from fewer than 70 animals.</p><p>Some come home after long journeys: <b>Olive Ridley</b> turtles return to <b>Gahirmatha</b> beach every winter, and <b>cheetahs</b> — extinct in India since 1952 — were brought from Namibia to <b>Kuno</b> in 2022. The <b>great Indian bustard</b> of the Thar Desert is now one of the world's rarest birds.</p>", key:"Lion — Gir; rhino — Kaziranga; sangai — Keibul Lamjao; hangul — Dachigam; barasingha — Kanha; tahr — Eravikulam; cheetah — Kuno."},
  {k:"table", title:"Animal ↔ park", head:["Animal","Best-known home","Note"], rows: P8.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"IUCN Red List status", head:["Animal","Status","Note"], rows: P8I.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>Endangered order</b> on the IUCN ladder: Least concern → Near threatened → <b>Vulnerable</b> → <b>Endangered</b> → <b>Critically endangered</b> → Extinct in the wild → Extinct. Tiger and lion are <b>Endangered</b>; rhino and snow leopard are only <b>Vulnerable</b>; bustard and gharial are <b>Critically endangered</b>."},
  {k:"trap", h:"The <b>golden langur</b> lives in Assam (and Bhutan), not the Western Ghats — the Western Ghats monkey is the <b>lion-tailed macaque</b>. The <b>cheetah</b> was declared extinct in India in <b>1952</b>."}
], sum:["Asiatic lion — Gir; one-horned rhino — Kaziranga; sangai — Keibul Lamjao; hangul — Dachigam.","Barasingha — Kanha; Nilgiri tahr — Eravikulam; snow leopard — Hemis.","Olive Ridley — Gahirmatha; saltwater crocodile — Bhitarkanika; gharial — Chambal.","Cheetahs were brought to Kuno in 2022 (extinct in India since 1952).","Great Indian bustard and gharial are critically endangered; tiger and lion endangered; rhino and snow leopard vulnerable."]}
);

pairQs("P8", P8, { q: t => `Where is the ${t} best known to live?`, rq: a => `${a} is famous for which animal?` });
pairQs("P8", P8I, { q: t => `The IUCN Red List status of the ${t} is:` });

QB.push(
["P8","Asiatic lions are found in the wild only in:",["Gir, Gujarat","Kuno, Madhya Pradesh","Sariska, Rajasthan","Kanha, Madhya Pradesh"],"About 890 lions (2025 count), all in the Gir landscape.","p"],
["P8","In which year was the cheetah declared extinct in India?",["1952","1947","1972","1960"],"Reintroduced at Kuno in 2022.","p"],
["P8","Mass nesting of Olive Ridley turtles is called:",["Arribada","Hatching run","Migration bloom","Turtle march"],"Spanish for 'arrival'.",""],
["P8","Which is India's national aquatic animal?",["Gangetic dolphin","Gharial","Dugong","Olive Ridley turtle"],"Declared in 2009.","p"]
);

LASTMOMENT.push(
{t:"Animal ↔ park", era:["pa"], rows:[["Rhino","Kaziranga"],["Lion","Gir"],["Sangai","Keibul Lamjao"],["Hangul","Dachigam"],["Barasingha","Kanha"],["Nilgiri tahr","Eravikulam"],["Olive Ridley","Gahirmatha"],["Cheetah","Kuno"]]}
);
TILES.push(["1952","Cheetah extinct in India","pa"],["2009","Dolphin made national aquatic animal","pa"]);
