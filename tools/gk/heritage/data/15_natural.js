/* H6 — Natural and mixed sites, kept short: the National Parks app has the parks themselves (lesson N10). */
const H6S = [
  ["Kaziranga National Park","Assam","1985","Two-thirds of the world's one-horned rhinoceroses; on the Brahmaputra floodplain."],
  ["Manas Wildlife Sanctuary","Assam","1985","On the Bhutan border; pygmy hog and golden langur; on the danger list 1992–2011."],
  ["Keoladeo National Park","Rajasthan","1985","The Bharatpur wetland, once a maharaja's duck-shooting reserve; once the winter home of the Siberian crane."],
  ["Sundarbans National Park","West Bengal","1987","The largest mangrove forest; tigers that swim; Bangladesh's part is a separate site."],
  ["Nanda Devi and Valley of Flowers National Parks","Uttarakhand","1988","Chamoli district; Valley of Flowers added in 2005."],
  ["Great Himalayan National Park Conservation Area","Himachal Pradesh","2014","Kullu district; the western Himalaya's high forests and meadows."],
  ["Khangchendzonga National Park","Sikkim","2016","India's only mixed site; sacred to the Lepcha and to Buddhists."]
];

LESSONS.push(
{id:"H6", heat:2, title:"Natural and mixed sites", hi:"प्राकृतिक और मिश्रित स्थल", blocks:[
  {k:"hot", h:"Most asked: the <b>seven natural sites</b> and their states, the <b>only mixed site</b> (Khangchendzonga), the <b>Western Ghats</b> (four states), and <b>Manas</b> on the danger list."},
  {k:"story", h:"<p>India's natural sites trace a line across the country: rhinos and wild buffalo in <b>Assam</b> (Kaziranga, Manas, both 1985), birds in a Rajasthan wetland (<b>Keoladeo</b>, 1985), tigers in the mangroves of <b>Bengal</b> (Sundarbans, 1987), the high peaks and meadows of <b>Uttarakhand</b> (Nanda Devi 1988, Valley of Flowers 2005) and <b>Himachal</b> (Great Himalayan, 2014), and the long green wall of the <b>Western Ghats</b> (2012).</p><p>One site is valued for both nature and culture: <b>Khangchendzonga</b> in Sikkim (2016), where the mountain is a god for the Lepcha people and its valleys are sacred hidden lands for Buddhists.</p>", key:"Seven natural sites + one mixed (Khangchendzonga) · Western Ghats in four states · Manas once in danger."},
  {k:"table", title:"Natural sites and the mixed site", head:["Site","State","Year","Remember"], rows: H6S.map(r => ["<b>" + r[0] + "</b>", r[1], r[2], r[3]]).concat([["<b>Western Ghats</b>","Kerala, Karnataka, Tamil Nadu, Maharashtra","2012","39 component parts — national parks, sanctuaries and reserve forests; a biodiversity hotspot."]])},
  {k:"facts", title:"Points the National Parks app does not stress", rows:[
    ["Western Ghats","Older than the Himalayas; 39 parts in <b>four</b> states (Goa is not one of them); listed for biodiversity (criteria ix and x)"],
    ["Manas","UNESCO lists it as a <b>Wildlife Sanctuary</b>; it was on the List of World Heritage in Danger from 1992 to 2011, after damage during unrest"],
    ["Sundarbans","India's site is the Sundarbans National Park (1987); <b>Bangladesh's</b> Sundarbans is a separate site (1997)"],
    ["Khangchendzonga","Mixed site — natural (criteria vii and x) and cultural (iii and vi); the world's third-highest peak"],
    ["Other UNESCO lists","India has <b>13</b> biosphere reserves in UNESCO's World Network of Biosphere Reserves (Man and the Biosphere); the latest is the <b>Cold Desert</b> reserve, Himachal Pradesh (September 2025). Ramsar wetlands come under a separate treaty, the Ramsar Convention"]]},
  {k:"trick", h:"The 1985 trio is <b>“K-M-K”</b> — Kaziranga, Manas, Keoladeo. Everything natural ends with the <b>Himalaya</b> (Great Himalayan 2014) and the one <b>mixed</b> site in Sikkim (2016)."},
  {k:"trap", h:"The only mixed site is <b>Khangchendzonga</b>, not Nanda Devi. <b>Keoladeo</b> is in <b>Rajasthan</b>, not Gujarat. The <b>Valley of Flowers</b> joined in <b>2005</b>, not 1988. A biosphere reserve on UNESCO's network is <b>not</b> a World Heritage site."},
  {k:"link", h:"Each of these parks — its animals, its records and its map — is covered in the World Heritage lesson (N10) of <a href=\"study-national-parks.html\">National Parks of India</a>."}
], sum:["Seven natural sites: Kaziranga, Manas, Keoladeo (1985); Sundarbans (1987); Nanda Devi and Valley of Flowers (1988, 2005); Western Ghats (2012); Great Himalayan NP (2014).","One mixed site: Khangchendzonga, Sikkim (2016).","The Western Ghats site has 39 parts in Kerala, Karnataka, Tamil Nadu and Maharashtra.","Manas was on the danger list from 1992 to 2011.","India has 13 UNESCO biosphere reserves; the latest is the Cold Desert (2025)."]}
);

pairQs("H6", H6S.map(r => [r[0], r[1], r[3], ""]), { q: t => `In which state is the natural or mixed World Heritage site “${t}”?`, e: r => `${r[0]} is in ${r[1]}. ${r[2]}`, extra: ["Gujarat","Kerala"] });

QB.push(
["H6","Which Indian natural site was on the List of World Heritage in Danger from 1992 to 2011?",["Manas","Kaziranga","Keoladeo","Sundarbans"],"Manas was put on the danger list after damage during unrest, and taken off in 2011 after recovery.",""],
["H6","The Western Ghats World Heritage site is spread over how many states?",["Four","Three","Five","Six"],"Kerala, Karnataka, Tamil Nadu and Maharashtra.",""],
["H6","Which state is NOT part of the Western Ghats World Heritage site?",["Goa","Kerala","Karnataka","Maharashtra"],"Goa lies on the Ghats, but none of the 39 listed parts is in Goa.",""],
["H6","About how many component parts make up the Western Ghats World Heritage site?",["39","7","12","100"],"Thirty-nine parks, sanctuaries and forests were listed together in 2012.",""],
["H6","In which year was the Western Ghats inscribed on the World Heritage list?",["2012","2014","2008","1988"],"It was inscribed in 2012 for its biodiversity; the Great Himalayan NP followed in 2014.",""],
["H6","Khangchendzonga is a mixed site because:",["It has great natural value and is sacred to the local peoples","It lies in two countries","It has both forts and temples","It has both forest and desert"],"It meets natural criteria and cultural ones, for the Lepcha and Buddhist beliefs tied to the mountain.",""],
["H6","How does the Bangladesh part of the Sundarbans stand on the World Heritage list?",["It is a separate site, listed by Bangladesh in 1997","It is part of India's 1987 site","It is not on the list","It was joined to India's site in 2016"],"India's Sundarbans National Park (1987) and Bangladesh's Sundarbans (1997) are two separate sites.",""],
["H6","The Great Himalayan National Park lies in which district of Himachal Pradesh?",["Kullu","Kinnaur","Chamba","Lahaul and Spiti"],"It is in Kullu district, around the Tirthan, Sainj and Parvati valleys.",""],
["H6","Nanda Devi National Park and the Valley of Flowers are both in which district of Uttarakhand?",["Chamoli","Pithoragarh","Uttarkashi","Tehri Garhwal"],"Both parks lie in Chamoli district.",""],
["H6","In which year was the Valley of Flowers added to the Nanda Devi World Heritage site?",["2005","1988","2012","1999"],"Nanda Devi was listed in 1988; the extension came in 2005.",""],
["H6","UNESCO's World Network of Biosphere Reserves added which Indian reserve in September 2025?",["Cold Desert, Himachal Pradesh","Panna, Madhya Pradesh","Great Rann of Kutch, Gujarat","Nilgiri, Tamil Nadu"],"The Cold Desert reserve in Lahaul and Spiti became India's 13th on the network. Nilgiri was the first (2000) and Panna joined in 2020.",""],
["H6","The UNESCO programme under which biosphere reserves are listed is:",["Man and the Biosphere","World Heritage Convention","Ramsar Convention","Memory of the World"],"Biosphere reserves belong to the Man and the Biosphere (MAB) programme, not the World Heritage list.",""],
["H6","Which bird, once Keoladeo's most famous winter visitor, no longer reaches the park?",["Siberian crane","Sarus crane","Great Indian bustard","Greater flamingo"],"The western flock of Siberian cranes stopped arriving after the early 2000s.",""],
["H6","How many of India's World Heritage sites are natural (not counting the mixed one)?",["7","8","6","9"],"Seven natural sites, plus Khangchendzonga, which is mixed.",""],
["H6","UNESCO lists which Assam site as a 'Wildlife Sanctuary' rather than a national park?",["Manas","Kaziranga","Orang","Nameri"],"The site's name is Manas Wildlife Sanctuary, though Manas is also a national park and tiger reserve.",""],
["H6","Which was India's most recent natural World Heritage site, inscribed in 2014?",["Great Himalayan National Park","Western Ghats","Khangchendzonga National Park","Valley of Flowers"],"The Great Himalayan NP (2014) is the latest purely natural site; Khangchendzonga (2016) is mixed.",""]
);
LASTMOMENT.push({t:"Natural and mixed", era:["hm"], rows:[["1985","Kaziranga, Manas, Keoladeo"],["1987","Sundarbans"],["1988 / 2005","Nanda Devi / Valley of Flowers"],["2012","Western Ghats — four states"],["2014","Great Himalayan NP"],["2016","Khangchendzonga — mixed"]]});
