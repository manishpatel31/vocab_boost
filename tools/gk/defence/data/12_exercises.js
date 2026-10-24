/* Part 3 · Military exercises — F7 Army, F8 Navy and Air Force, F9 multilateral and the latest editions (as of October 2026). */
const F7 = [
  ["Yudh Abhyas","USA","India's longest-running army exercise with the US; 22nd edition in Uttarakhand, September 2026.","p"],
  ["Vajra Prahar","USA","Special forces exercise.",""],
  ["Mitra Shakti","Sri Lanka","","p"],
  ["Surya Kiran","Nepal","","p"],
  ["Sampriti","Bangladesh","","p"],
  ["Nomadic Elephant","Mongolia","17th edition at Ulaanbaatar, 2025.","p"],
  ["Maitree","Thailand","14th edition at Umroi, Meghalaya, 2025.","p"],
  ["Shakti","France","",""],
  ["Ajeya Warrior","United Kingdom","",""],
  ["Dharma Guardian","Japan","",""],
  ["Garuda Shakti","Indonesia","Special forces exercise.","p"],
  ["Harimau Shakti","Malaysia","",""],
  ["Lamitiye","Seychelles","",""],
  ["Ekuverin","Maldives","",""],
  ["Dustlik","Uzbekistan","",""],
  ["Khanjar","Kyrgyzstan","Special forces; 13th edition in Assam, 2026.",""],
  ["KAZIND","Kazakhstan","",""],
  ["Al Najah","Oman","",""],
  ["Desert Cyclone","UAE","First held in 2024.",""],
  ["AustraHind","Australia","",""],
  ["VINBAX","Vietnam","",""],
  ["Cyclone","Egypt","Special forces exercise.",""],
  ["Sada Tanseeq","Saudi Arabia","First held in 2024.",""],
  ["Bold Kurukshetra","Singapore","Armoured exercise; 14th edition at Jodhpur.",""],
  ["CINBAX","Cambodia","",""]
];
const F8N = [
  ["Varuna","France","","p"],
  ["Konkan","United Kingdom","",""],
  ["SIMBEX","Singapore","","p"],
  ["JIMEX","Japan","",""],
  ["AUSINDEX","Australia","",""],
  ["SLINEX","Sri Lanka","",""],
  ["Bongosagar","Bangladesh","",""],
  ["Samudra Shakti","Indonesia","",""],
  ["Zayed Talwar","UAE","",""],
  ["Naseem Al Bahr","Oman","",""],
  ["Al Mohed Al Hindi","Saudi Arabia","",""],
  ["Samudra Laksamana","Malaysia","",""]
];
const F8A = [
  ["Garuda","France","Air Force exercise — not to be confused with the Army's Garuda Shakti (Indonesia).","p"],
  ["Cope India","USA","","p"],
  ["Indradhanush","United Kingdom","",""],
  ["Shinyuu Maitri","Japan","",""],
  ["Veer Guardian","Japan","First fighter exercise with Japan, 2023.",""],
  ["Eastern Bridge","Oman","",""],
  ["Udara Shakti","Malaysia","",""],
  ["Siam Bharat","Thailand","",""],
  ["Avia Indra","Russia","",""]
];
const F9 = [
  ["Malabar","India, USA, Japan and Australia","Began in 1992 as an India–US naval exercise; all four Quad navies since 2020.","p"],
  ["INDRA","India and Russia (tri-service)","","p"],
  ["Tiger Triumph","India and USA (tri-service amphibious)","",""],
  ["MILAN","Many navies, hosted by India","Held at Visakhapatnam in 2024 and 2026.","p"],
  ["RIMPAC","Many navies, hosted by the USA (Hawaii)","Rim of the Pacific — the world's largest maritime exercise.","p"],
  ["Red Flag","Many air forces, hosted by the USA (Alaska / Nevada)","",""],
  ["Pitch Black","Many air forces, hosted by Australia","",""],
  ["Tarang Shakti","Many air forces, hosted by India","India's first multinational air exercise, 2024.","p"],
  ["Desert Knight","India, France and UAE (air)","",""],
  ["Bright Star","Many countries, hosted by Egypt","",""],
  ["Sea Dragon","Anti-submarine exercise led by the USA (Guam)","",""],
  ["Cope Thunder","USA and the Philippines","",""],
  ["Desert Flag","Many air forces, hosted by the UAE","",""],
  ["Blue Flag","Many air forces, hosted by Israel","",""],
  ["Zapad","Many countries, hosted by Russia","India took part in 2025.",""],
  ["TROPEX","Indian Navy's own theatre-level exercise","",""],
  ["Sea Vigil","India's coastal defence exercise","",""],
  ["Dosti","Coast guards of India, Maldives and Sri Lanka","",""]
];
const F9R = [
  ["Yudh Abhyas 2026 (22nd)","USA","Auli, Uttarakhand — September 2026.",""],
  ["Mountain Guardian 2026","UAE","Mountain warfare, Uttarakhand — October 2026.",""],
  ["Khanjar 2026 (13th)","Kyrgyzstan","Misamari, Assam — February 2026.",""],
  ["Dustlik 2026","Uzbekistan","7th edition, Gurumsaray Field Training Area, Namangan (Uzbekistan), 12–25 April 2026 (the 6th, in 2025, was in Pune).",""],
  ["Lamitiye 2026","Seychelles","Seychelles Defence Academy.",""],
  ["Yudh Abhyas 2025 (21st)","USA","Fort Wainwright, Alaska — September 2025.",""],
  ["Maitree 2025 (14th)","Thailand","Umroi, Meghalaya — September 2025.",""],
  ["Nomadic Elephant 2025 (17th)","Mongolia","Ulaanbaatar — 2025.",""]
];

LESSONS.push(
{id:"F7", heat:3, title:"Army exercises with other countries", hi:"अन्य देशों के साथ सैन्य अभ्यास", blocks:[
  {k:"hot", h:"The commonest defence question: <b>'Exercise X is held between India and which country?'</b> Top picks: <b>Yudh Abhyas</b> (USA), <b>Mitra Shakti</b> (Sri Lanka), <b>Surya Kiran</b> (Nepal), <b>Sampriti</b> (Bangladesh), <b>Nomadic Elephant</b> (Mongolia), <b>Garuda Shakti</b> (Indonesia), <b>Dharma Guardian</b> (Japan)."},
  {k:"story", h:"<p>Exercise names often hide a clue to the partner. <b>Nomadic Elephant</b> — the nomads of Mongolia. <b>Surya Kiran</b> — the sun rising over Nepal's Himalaya. <b>Dharma Guardian</b> — Japan's Buddhist heritage. <b>Harimau</b> means 'tiger' in Malay (Malaysia). <b>Dustlik</b> means 'friendship' in Uzbek. <b>Sampriti</b> (harmony) with neighbour Bangladesh.</p><p>The US partnership has two: <b>Yudh Abhyas</b> (regular army) and <b>Vajra Prahar</b> (special forces).</p>", key:"Use the name's language: Harimau (Malay — Malaysia), Dustlik (Uzbek), Nomadic (Mongolia)."},
  {k:"table", title:"Army exercises and partners", head:["Exercise","Partner country","Note"], rows: F7.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"South Asian neighbours — <b>“Sun in Nepal, Friendship in Sri Lanka, Harmony in Bangladesh”</b>: Surya Kiran, Mitra Shakti, Sampriti. Two '-Shakti' traps: <b>Garuda Shakti = Indonesia</b>, <b>Harimau Shakti = Malaysia</b>; plain <b>Shakti = France</b>."},
  {k:"trap", h:"<b>Garuda</b> (air, France) ≠ <b>Garuda Shakti</b> (army, Indonesia). <b>Shakti</b> (France) ≠ <b>Mitra Shakti</b> (Sri Lanka). <b>Ajeya Warrior</b> is with the UK; <b>Indradhanush</b> is the UK air exercise."}
], sum:["Yudh Abhyas and Vajra Prahar — USA; Shakti — France; Ajeya Warrior — UK.","Mitra Shakti — Sri Lanka; Surya Kiran — Nepal; Sampriti — Bangladesh; Ekuverin — Maldives.","Nomadic Elephant — Mongolia; Dharma Guardian — Japan; Maitree — Thailand; VINBAX — Vietnam.","Garuda Shakti — Indonesia; Harimau Shakti — Malaysia; Bold Kurukshetra — Singapore.","Dustlik — Uzbekistan; Khanjar — Kyrgyzstan; KAZIND — Kazakhstan; Al Najah — Oman; Cyclone — Egypt."]},

{id:"F8", heat:2, title:"Naval and air exercises", hi:"नौसैनिक और वायु अभ्यास", blocks:[
  {k:"hot", h:"Frequent: <b>Varuna</b> (France), <b>Konkan</b> (UK), <b>SIMBEX</b> (Singapore), <b>JIMEX</b> (Japan), <b>AUSINDEX</b> (Australia), <b>SLINEX</b> (Sri Lanka); air: <b>Garuda</b> (France), <b>Cope India</b> (USA), <b>Indradhanush</b> (UK)."},
  {k:"story", h:"<p>Many naval exercise names are simple abbreviations: <b>SIMBEX</b> = Singapore–India Maritime Bilateral Exercise, <b>JIMEX</b> = Japan–India, <b>SLINEX</b> = Sri Lanka–India, <b>AUSINDEX</b> = Australia–India. <b>Varuna</b>, the sea god, is with France; <b>Konkan</b>, India's west coast, with the UK.</p><p>In the air, <b>Garuda</b> (the eagle) flies with France, <b>Cope India</b> with the USA, and <b>Indradhanush</b> (rainbow) with the UK.</p>", key:"Read the abbreviation: SIMBEX Singapore, JIMEX Japan, SLINEX Sri Lanka, AUSINDEX Australia."},
  {k:"table", title:"Naval exercises", head:["Exercise","Partner","Note"], rows: F8N.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Air exercises", head:["Exercise","Partner","Note"], rows: F8A.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"France gets the gods: <b>Varuna (sea), Garuda (sky), Shakti (land)</b> — all three services with France have Hindu-myth names."},
  {k:"trap", h:"<b>Konkan</b> is with the UK, not with any Konkan state. <b>Zayed Talwar</b> is UAE; <b>Naseem Al Bahr</b> is Oman; <b>Al Mohed Al Hindi</b> is Saudi Arabia."}
], sum:["Naval: Varuna — France; Konkan — UK; SIMBEX — Singapore; JIMEX — Japan; AUSINDEX — Australia.","SLINEX — Sri Lanka; Bongosagar — Bangladesh; Samudra Shakti — Indonesia; Zayed Talwar — UAE.","Air: Garuda — France; Cope India — USA; Indradhanush — UK; Shinyuu Maitri and Veer Guardian — Japan.","Eastern Bridge — Oman; Udara Shakti — Malaysia; Avia Indra — Russia.","France has an exercise in all three services: Shakti, Varuna, Garuda."]},

{id:"F9", heat:3, title:"Multilateral exercises and the latest editions", hi:"बहुपक्षीय अभ्यास और नवीनतम संस्करण", blocks:[
  {k:"hot", h:"Asked often: <b>Malabar</b> (the Quad navies), <b>MILAN</b> (India-hosted), <b>RIMPAC</b>, <b>Red Flag</b>, <b>Pitch Black</b>, <b>Tarang Shakti</b> (India's first multinational air exercise) and where the <b>latest edition</b> of an exercise was held."},
  {k:"story", h:"<p>Some exercises bring many countries together. <b>Malabar</b> started in 1992 between India and the US and now includes all four <b>Quad</b> navies (with Japan and Australia). India hosts <b>MILAN</b> at Visakhapatnam, and in 2024 held <b>Tarang Shakti</b>, its first multinational air exercise. The US hosts <b>RIMPAC</b> near Hawaii and <b>Red Flag</b> in Alaska and Nevada; Australia hosts <b>Pitch Black</b>.</p><p>Current-affairs questions ask about the <b>latest edition</b> — its number, venue and month. Those change every year, so the table below is dated.</p>", key:"Malabar = Quad navies; MILAN = India hosts; Tarang Shakti = India's first multinational air exercise (2024)."},
  {k:"table", title:"Multilateral and India's own exercises", head:["Exercise","Who takes part","Note"], rows: F9.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Recent editions (as of October 2026)", head:["Edition","Partner","Where and when"], rows: F9R.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>MILAN</b> means 'meeting' — India meets many navies at Vizag. <b>Malabar</b> = India's Malabar coast, where it began."},
  {k:"trap", h:"<b>Malabar</b> is multilateral now, not just India–US. <b>TROPEX</b> and <b>Sea Vigil</b> are India's own exercises — there is no partner country. Edition numbers and venues change every year — check the latest before your exam."}
], sum:["Malabar began in 1992 (India–US) and now has the four Quad navies: India, USA, Japan, Australia.","INDRA is India's tri-service exercise with Russia; Tiger Triumph a tri-service amphibious one with the USA.","MILAN is hosted by India at Visakhapatnam; Tarang Shakti (2024) was India's first multinational air exercise.","RIMPAC (Hawaii) and Red Flag are US-hosted; Pitch Black is Australia's; Bright Star is Egypt's.","Latest: Yudh Abhyas 2026 (22nd) at Auli; Mountain Guardian 2026 with the UAE in Uttarakhand."]}
);

pairQs("F7", F7, { q: t => `Exercise '${t}' is held between India and:`, rq: a => `Which army exercise does India hold with ${a}?` });
pairQs("F8", F8N, { q: t => `The naval exercise '${t}' is held between India and:`, rq: a => `Which naval exercise does India hold with ${a}?` });
pairQs("F8", F8A, { q: t => `The air exercise '${t}' is held between India and:`, rq: a => `Which air exercise does India hold with ${a}?` });
pairQs("F9", F9, { q: t => `Who takes part in the exercise '${t}'?`, rq: a => `Which exercise involves: ${a}?` });
pairQs("F9", F9R, { q: t => `${t} was held between India and:` });

QB.push(
["F9","Which countries take part in the Malabar naval exercise?",["India, USA, Japan and Australia","India, Russia, China and Japan","India, UK, France and USA","India, Sri Lanka, Maldives and Bangladesh"],"The four Quad navies have all taken part since 2020.","p"],
["F9","India's first multinational air exercise, held in 2024, was:",["Tarang Shakti","Garuda","Cope India","Desert Knight"],"Hosted by the IAF with several partner air forces.","p"],
["F9","The multilateral naval exercise MILAN is hosted by:",["India","Singapore","USA","Australia"],"Its recent editions were held off Visakhapatnam.","p"],
["F7","Yudh Abhyas is a joint military exercise between India and:",["USA","UK","Russia","France"],"One of India's oldest regular army exercises with a foreign country.","p"],
["F8","Which country does India hold Air, Army and Naval exercises with that are named Garuda, Shakti and Varuna?",["France","Indonesia","Russia","USA"],"Garuda (air), Shakti (army), Varuna (navy).",""]
);

LASTMOMENT.push(
{t:"Army exercises", era:["df"], rows:[["Yudh Abhyas","USA"],["Mitra Shakti","Sri Lanka"],["Surya Kiran","Nepal"],["Sampriti","Bangladesh"],["Nomadic Elephant","Mongolia"],["Garuda Shakti","Indonesia"],["Dharma Guardian","Japan"],["Harimau Shakti","Malaysia"]]},
{t:"Navy and air", era:["df"], rows:[["Varuna","France (navy)"],["Garuda","France (air)"],["Konkan","UK (navy)"],["Indradhanush","UK (air)"],["SIMBEX","Singapore"],["JIMEX","Japan"],["Cope India","USA (air)"],["Malabar","Quad navies"]]}
);
TILES.push(["1992","First Malabar","df"],["2024","Tarang Shakti","df"],["22nd","Yudh Abhyas 2026","df"],["4","Quad navies in Malabar","df"]);
