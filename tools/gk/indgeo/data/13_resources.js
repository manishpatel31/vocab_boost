/* Part 4 · G11 minerals and mines; G12 energy and power plants (as of October 2026). */
const G11M = [
  ["Iron ore","Odisha","Over half of India's output; Keonjhar, Sundargarh.","p"],
  ["Bauxite","Odisha","Panchpatmali (NALCO), Koraput.","p"],
  ["Chromite","Odisha","Almost all of it, from the Sukinda valley.","p"],
  ["Gold","Karnataka","Hutti mines; Kolar Gold Fields closed in 2001.","p"],
  ["Silver","Rajasthan","From the zinc–lead ores of Zawar and Rampura Agucha.","p"],
  ["Lead and zinc","Rajasthan","Hindustan Zinc; Rampura Agucha is one of the world's biggest zinc mines.","p"],
  ["Gypsum","Rajasthan","",""],
  ["Diamond","Madhya Pradesh","India's only producing diamond mine — Majhgawan, Panna.","p"],
];
const G11N = [
  ["Jharia","Coal","Jharkhand","p"],
  ["Bokaro","Coal","Jharkhand",""],
  ["Raniganj","Coal","West Bengal","p"],
  ["Korba","Coal","Chhattisgarh","p"],
  ["Talcher","Coal","Odisha",""],
  ["Singareni","Coal","Telangana",""],
  ["Makum","Coal","Assam",""],
  ["Neyveli","Lignite","Tamil Nadu","p"],
  ["Bailadila","Iron ore","Chhattisgarh","p"],
  ["Kudremukh","Iron ore","Karnataka","p"],
  ["Bellary","Iron ore","Karnataka",""],
  ["Noamundi","Iron ore","Jharkhand",""],
  ["Keonjhar (Joda–Barbil)","Iron ore","Odisha",""],
  ["Balaghat","Manganese","Madhya Pradesh","p"],
  ["Malanjkhand","Copper","Madhya Pradesh","p"],
  ["Khetri","Copper","Rajasthan","p"],
  ["Mosabani (Singhbhum)","Copper","Jharkhand",""],
  ["Hutti","Gold","Karnataka","p"],
  ["Kolar","Gold","Karnataka","p"],
  ["Zawar","Zinc and lead","Rajasthan","p"],
  ["Rampura Agucha","Zinc and lead","Rajasthan",""],
  ["Majhgawan (Panna)","Diamond","Madhya Pradesh","p"],
  ["Jaduguda","Uranium","Jharkhand","p"],
  ["Tummalapalle","Uranium","Andhra Pradesh",""],
  ["Sukinda","Chromite","Odisha",""],
  ["Panchpatmali","Bauxite","Odisha",""],
  ["Lohardaga","Bauxite","Jharkhand",""],
  ["Koderma","Mica","Jharkhand","p"],
  ["Makrana","Marble","Rajasthan","p"],
  ["Digboi","Petroleum","Assam","p"],
  ["Ankleshwar","Petroleum","Gujarat",""],
  ["Mumbai High","Petroleum","Offshore Maharashtra","p"],
  ["Barmer (Mangala)","Petroleum","Rajasthan",""],
  ["Salal-Haimana (Reasi)","Lithium","Jammu and Kashmir",""]
];
const G12P = [
  ["Tarapur","Maharashtra","Nuclear","India's first nuclear power station (1969).","p"],
  ["Rawatbhata","Rajasthan","Nuclear","Rajasthan Atomic Power Station, on the Chambal.","p"],
  ["Kalpakkam","Tamil Nadu","Nuclear","Madras Atomic Power Station; fast breeder reactor.","p"],
  ["Narora","Uttar Pradesh","Nuclear","On the Ganga.","p"],
  ["Kakrapar","Gujarat","Nuclear","On the Tapi; first 700 MW Indian reactor (2021).","p"],
  ["Kaiga","Karnataka","Nuclear","","p"],
  ["Kudankulam","Tamil Nadu","Nuclear","India's largest nuclear plant, built with Russia.","p"],
  ["Gorakhpur (Fatehabad)","Haryana","Nuclear","Under construction.",""],
  ["Jaitapur","Maharashtra","Nuclear","Planned — would be India's largest.",""],
  ["Vindhyachal","Madhya Pradesh","Thermal (coal)","India's largest thermal power station (NTPC).","p"],
  ["Mundra","Gujarat","Thermal (coal)","Large private coal plants on the coast.",""],
  ["Sasan","Madhya Pradesh","Thermal (coal)","Ultra Mega Power Project.",""],
  ["Korba","Chhattisgarh","Thermal (coal)","'Power capital' of Chhattisgarh.","p"],
  ["Talcher (Kaniha)","Odisha","Thermal (coal)","",""],
  ["Ramagundam","Telangana","Thermal (coal)","",""],
  ["Singrauli (Shaktinagar)","Uttar Pradesh","Thermal (coal)","NTPC's first plant.",""],
  ["Farakka","West Bengal","Thermal (coal)","",""],
  ["Kahalgaon","Bihar","Thermal (coal)","",""],
  ["Neyveli","Tamil Nadu","Thermal (coal)","Runs on lignite.",""],
  ["Sidrapong","West Bengal","Hydro","India's first hydro power station (1897, Darjeeling).","p"],
  ["Shivanasamudra","Karnataka","Hydro","1902 — one of Asia's first.","p"],
  ["Nathpa Jhakri","Himachal Pradesh","Hydro","On the Sutlej.",""],
  ["Tehri","Uttarakhand","Hydro","",""],
  ["Koyna","Maharashtra","Hydro","",""],
  ["Salal","Jammu and Kashmir","Hydro","",""],
  ["Dibang","Arunachal Pradesh","Hydro","Under construction — will be India's tallest dam.",""],
  ["Bhadla","Rajasthan","Solar","One of the world's largest solar parks (Jodhpur).","p"],
  ["Pavagada (Shakti Sthala)","Karnataka","Solar","","p"],
  ["Kurnool","Andhra Pradesh","Solar","",""],
  ["Rewa","Madhya Pradesh","Solar","Powers the Delhi Metro.","p"],
  ["Kamuthi","Tamil Nadu","Solar","",""],
  ["Charanka","Gujarat","Solar","",""],
  ["Khavda","Gujarat","Solar–wind hybrid","World's largest renewable energy park (planned 30 GW), Kutch.","p"],
  ["Muppandal","Tamil Nadu","Wind","One of India's largest wind farms.","p"],
  ["Puga valley","Ladakh","Geothermal","India's first geothermal project.",""]
];

LESSONS.push(
{id:"G11", heat:2, title:"Minerals and mines", hi:"खनिज और खदानें", blocks:[
  {k:"hot", h:"Most asked: the <b>leading state</b> for a mineral (iron ore, bauxite, chromite — Odisha; gold — Karnataka; zinc, silver — Rajasthan; diamond — MP) and <b>where a mine is</b> (Jharia, Khetri, Malanjkhand, Kudremukh, Bailadila, Jaduguda, Digboi)."},
  {k:"story", h:"<p>Most of India's minerals lie in the old rocks of the <b>Peninsular Plateau</b>, above all the <b>Chotanagpur belt</b> of Jharkhand, Odisha and Chhattisgarh. <b>Odisha</b> leads in iron ore, bauxite and chromite; <b>Jharkhand</b> holds the coking coal of <b>Jharia</b> and the uranium of <b>Jaduguda</b>. <b>Rajasthan</b> is the 'museum of minerals' — zinc, lead and silver at <b>Zawar</b>, copper at <b>Khetri</b>, marble at <b>Makrana</b>, gypsum.</p><p><b>Karnataka</b> mines gold at <b>Hutti</b> (Kolar closed in 2001); <b>Madhya Pradesh</b> has India's only working diamond mine at <b>Panna</b> and the big copper mine at <b>Malanjkhand</b>. Oil was first struck at <b>Digboi</b> in Assam; <b>Mumbai High</b> offshore is the largest field. In 2023 India announced its first large <b>lithium</b> find in <b>Reasi, Jammu and Kashmir</b>.</p>", key:"Odisha — iron ore, bauxite, chromite; Karnataka — gold; Rajasthan — zinc, lead, silver, gypsum; MP — diamond; Jharia — coking coal; Jaduguda — uranium; Digboi — oldest oil."},
  {k:"table", title:"Leading producing state", head:["Mineral","Leading state","Note"], rows: G11M.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Famous mines", head:["Mine / field","Mineral","State"], rows: G11N.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Good to know", rows:[
    ["Oldest coalfield","Raniganj, West Bengal (1774)"],
    ["Oldest oil field and refinery","Digboi, Assam (refinery 1901)"],
    ["Largest oil field","Mumbai High (offshore)"],
    ["Coal types by quality","Anthracite > Bituminous > Lignite > Peat"],
    ["Mineral heartland","Chotanagpur plateau (Jharkhand–Odisha–Chhattisgarh belt)"]
  ]},
  {k:"trick", h:"<b>“Odisha's IBC”</b> — Iron, Bauxite, Chromite. <b>“Rajasthan ZiLS-G”</b> — Zinc, Lead, Silver, Gypsum. <b>“K for Karat”</b> — Karnataka for gold."},
  {k:"trap", h:"<b>Kolar</b> gold fields are closed; <b>Hutti</b> works now. <b>Khetri</b> (copper) is in Rajasthan, <b>Malanjkhand</b> (copper) in MP. <b>Neyveli</b> is lignite, not coal. <b>Kudremukh</b> (iron) is in Karnataka, <b>Bailadila</b> (iron) in Chhattisgarh."}
], sum:["Odisha leads in iron ore, bauxite and chromite.","Rajasthan leads in zinc, lead, silver and gypsum; Khetri (copper), Zawar (zinc), Makrana (marble).","Karnataka leads in gold (Hutti); Madhya Pradesh has the only diamond mine (Panna) and Malanjkhand copper.","Jharia — coking coal; Jaduguda — uranium (both Jharkhand); Neyveli — lignite (Tamil Nadu).","Digboi (Assam) is the oldest oil field; lithium was found at Reasi, J&K, in 2023."]},

{id:"G12", heat:2, title:"Energy and power plants", hi:"ऊर्जा और बिजली संयंत्र", blocks:[
  {k:"hot", h:"Asked often: <b>which state a power plant is in</b> — Tarapur, Kudankulam, Narora, Kaiga, Rawatbhata (nuclear); Vindhyachal, Korba (thermal); Bhadla, Pavagada, Rewa (solar); Muppandal (wind)."},
  {k:"story", h:"<p>Coal still gives India most of its electricity, from giant plants like <b>Vindhyachal</b> (MP), the country's largest. Water came first, though: India's first hydro station ran at <b>Sidrapong</b> near Darjeeling in <b>1897</b>, and <b>Shivanasamudra</b> on the Kaveri followed in 1902.</p><p>India's nuclear story began at <b>Tarapur</b> (Maharashtra) in <b>1969</b>; today there are plants at Rawatbhata, Kalpakkam, Narora, Kakrapar, Kaiga and <b>Kudankulam</b> — the largest. The new power is the sun and wind: <b>Bhadla</b> in Rajasthan, <b>Pavagada</b> in Karnataka and <b>Rewa</b> in MP are huge solar parks, <b>Khavda</b> in Kutch is the world's largest renewable park, and <b>Muppandal</b> in Tamil Nadu is a giant wind farm. In mid-2025 India reached <b>half its installed power capacity from non-fossil sources</b>.</p>", key:"First nuclear Tarapur (1969); largest nuclear Kudankulam; largest thermal Vindhyachal; first hydro Sidrapong (1897); solar Bhadla, Pavagada, Rewa; wind Muppandal."},
  {k:"table", title:"Power plants", head:["Plant","State / UT","Type"], rows: G12P.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Energy facts (as of 2025–26)", rows:[
    ["Main source of electricity","Coal (thermal) — still the largest share of generation"],
    ["Non-fossil share of installed capacity","About 50%, reached in mid-2025"],
    ["Target","500 GW of non-fossil capacity by 2030"],
    ["Three-stage nuclear programme","Planned by Homi J. Bhabha — ends with thorium"],
    ["International Solar Alliance","Launched 2015; headquarters Gurugram"],
    ["Largest power company","NTPC (set up 1975)"]
  ]},
  {k:"trick", h:"Nuclear plants, in a ring round India: <b>“Ta-Ra-Ka-Na-Ka-Ka-Ku”</b> — Tarapur, Rawatbhata, Kalpakkam, Narora, Kakrapar, Kaiga, Kudankulam. Two in Tamil Nadu (<b>K</b>alpakkam, <b>K</b>udankulam)."},
  {k:"trap", h:"<b>Narora</b> is in UP, <b>Kakrapar</b> in Gujarat, <b>Kaiga</b> in Karnataka — they sound alike. <b>Rawatbhata</b> is the Rajasthan atomic plant (Kota). <b>Bhadla</b> (solar) is in Rajasthan, <b>Pavagada</b> in Karnataka."}
], sum:["Tarapur (Maharashtra, 1969) was India's first nuclear power station; Kudankulam (Tamil Nadu) is the largest.","Other nuclear plants: Rawatbhata (Rajasthan), Kalpakkam (TN), Narora (UP), Kakrapar (Gujarat), Kaiga (Karnataka).","Vindhyachal (MP) is the largest thermal power station; Korba is Chhattisgarh's power hub.","Sidrapong (1897, Darjeeling) was India's first hydro station.","Solar: Bhadla (Rajasthan), Pavagada (Karnataka), Rewa (MP); wind: Muppandal (TN); Khavda (Gujarat) is the largest renewable park."]}
);

pairQs("G11", G11M, { q: t => `Which state is India's leading producer of ${t.toLowerCase()}?`, rq: a => `${a} is India's leading producer of:` });
pairQs("G11", G11N, { q: t => `${t} is famous for which mineral?`, rq: a => `Which mine or field is known for ${a.toLowerCase()}?` });
pairQs("G12", G12P.map(r => [r[0], r[1], r[3] ? `${r[0]} — ${r[1]}. ${r[3]}` : "", r[4]]), { q: t => `The ${t} power plant is in:`, rq: a => `Which of these power plants is in ${a}?` });

QB.push(
["G11","Which state is the leading producer of iron ore, bauxite and chromite?",["Odisha","Jharkhand","Chhattisgarh","Karnataka"],"Odisha leads in all three.","p"],
["G11","India's only working diamond mine is at:",["Panna","Golconda","Kolar","Bellary"],"Majhgawan, Madhya Pradesh.","p"],
["G11","Where was India's first large lithium deposit found (2023)?",["Reasi, Jammu and Kashmir","Barmer, Rajasthan","Koderma, Jharkhand","Bellary, Karnataka"],"About 5.9 million tonnes (inferred).","p"],
["G11","Which is India's oldest oil field?",["Digboi","Mumbai High","Ankleshwar","Barmer"],"Assam; refinery from 1901.","p"],
["G11","Which coal has the highest carbon content?",["Anthracite","Bituminous","Lignite","Peat"],"Mostly found in Jammu and Kashmir in India.","p"],
["G11","Which plateau is the richest in minerals?",["Chotanagpur","Malwa","Deccan lava","Marwar"],"Jharkhand and neighbouring states.",""],
["G12","India's first nuclear power station is:",["Tarapur","Rawatbhata","Kalpakkam","Narora"],"Maharashtra, 1969.","p"],
["G12","Which is India's largest nuclear power plant?",["Kudankulam","Tarapur","Kaiga","Kakrapar"],"Tamil Nadu, built with Russian help.","p"],
["G12","India's first hydro-electric power station was set up in 1897 at:",["Sidrapong (Darjeeling)","Shivanasamudra","Bhakra","Pykara"],"West Bengal.","p"],
["G12","The headquarters of the International Solar Alliance is at:",["Gurugram","New Delhi","Bengaluru","Paris"],"Launched by India and France in 2015.","p"],
["G12","India's three-stage nuclear power programme finally aims to use:",["Thorium","Uranium only","Plutonium only","Coal"],"Planned by Homi J. Bhabha; India has large thorium reserves.","p"],
["G12","Which source still gives India the largest share of its electricity?",["Coal","Hydro","Solar","Nuclear"],"Thermal power dominates generation.","p"]
);

LASTMOMENT.push(
{t:"Minerals and mines", era:["ig"], rows:[["Iron, bauxite, chromite","Odisha"],["Gold","Karnataka (Hutti)"],["Zinc, lead, silver","Rajasthan"],["Diamond","Panna, MP"],["Coking coal","Jharia"],["Uranium","Jaduguda"],["Copper","Khetri, Malanjkhand"],["Oldest oil","Digboi"]]},
{t:"Power plants", era:["ig"], rows:[["Tarapur","First nuclear, 1969"],["Kudankulam","Largest nuclear, TN"],["Narora","UP"],["Kaiga","Karnataka"],["Vindhyachal","Largest thermal, MP"],["Sidrapong","First hydro, 1897"],["Bhadla","Solar, Rajasthan"],["Muppandal","Wind, TN"]]}
);
TILES.push(["1969","Tarapur, first nuclear plant","ig"],["1897","Sidrapong hydro station","ig"],["1774","Raniganj coal mining","ig"],["2023","Lithium found in Reasi","ig"],["2015","International Solar Alliance","ig"]);
