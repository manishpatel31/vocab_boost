/* National Parks of India — every national park, region by region (as of October 2026). India has about 106 national parks;
   counts differ a little between lists because of new notifications, mergers and renamings. */
const N1 = [
  ["The first national park","Jim Corbett (Uttarakhand)","Set up in 1936 as Hailey National Park; renamed Ramganga, then Corbett (1957).","p"],
  ["The largest national park","Hemis (Ladakh)","About 4,400 sq km — home of the snow leopard.","p"],
  ["The smallest national park","South Button Island (Andaman and Nicobar)","Less than 1 sq km.","p"],
  ["The state with the most national parks","Madhya Pradesh","Eleven — with the Andaman and Nicobar Islands (nine) close behind.","p"],
  ["The only floating national park","Keibul Lamjao (Manipur)","On the phumdis of Loktak Lake — home of the sangai deer.","p"],
  ["Where cheetahs came back to India","Kuno (Madhya Pradesh)","Project Cheetah, 17 September 2022 — cheetahs from Namibia.","p"],
  ["The only home of the wild Asiatic lion","Gir (Gujarat)","",""],
  ["The largest mangrove national park","Sundarban (West Bengal)","Also a tiger reserve and World Heritage site.",""]
];
const N2 = [
  ["Hemis","Ladakh","The largest national park; snow leopard.","p"],
  ["Dachigam","Jammu and Kashmir","Hangul (Kashmir stag).","p"],
  ["Kishtwar","Jammu and Kashmir","A high-altitude park.",""],
  ["Kazinag","Jammu and Kashmir","Markhor.",""],
  ["City Forest (Salim Ali)","Jammu and Kashmir","In Srinagar.",""],
  ["Great Himalayan","Himachal Pradesh","World Heritage site (2014); Kullu.","p"],
  ["Pin Valley","Himachal Pradesh","Cold desert in Lahaul and Spiti; ibex, snow leopard.","p"],
  ["Inderkilla","Himachal Pradesh","Kullu.",""],
  ["Khirganga","Himachal Pradesh","Kullu.",""],
  ["Simbalbara","Himachal Pradesh","Sirmaur; renamed Sher Jang National Park.",""],
  ["Kalesar","Haryana","Yamunanagar, in the Shivaliks.",""],
  ["Sultanpur","Haryana","A bird park near Gurugram; Ramsar site.","p"],
  ["Jim Corbett","Uttarakhand","India's first national park; on the Ramganga.","p"],
  ["Rajaji","Uttarakhand","Elephants; near Haridwar.","p"],
  ["Nanda Devi","Uttarakhand","World Heritage site with the Valley of Flowers.","p"],
  ["Valley of Flowers","Uttarakhand","Alpine meadows; World Heritage site.","p"],
  ["Gangotri","Uttarakhand","",""],
  ["Govind","Uttarakhand","Uttarkashi.",""],
  ["Dudhwa","Uttar Pradesh","Swamp deer (barasingha), rhinos reintroduced; Lakhimpur Kheri.","p"]
];
const N3 = [
  ["Ranthambore","Rajasthan","Tigers among old ruins; Sawai Madhopur.","p"],
  ["Sariska","Rajasthan","Tigers relocated after they were wiped out (2004–05); Alwar.","p"],
  ["Keoladeo Ghana","Rajasthan","Bharatpur bird sanctuary; World Heritage site and Ramsar site.","p"],
  ["Desert","Rajasthan","Great Indian bustard; Jaisalmer and Barmer.","p"],
  ["Mukundra Hills","Rajasthan","Kota.",""],
  ["Gir","Gujarat","Asiatic lions.","p"],
  ["Velavadar (Blackbuck)","Gujarat","Blackbuck; Bhavnagar.","p"],
  ["Gulf of Kutch Marine","Gujarat","India's first marine national park (1982), Jamnagar.","p"],
  ["Vansda","Gujarat","Navsari.",""],
  ["Bhagwan Mahavir (Mollem)","Goa","On the Western Ghats; Dudhsagar Falls.","p"],
  ["Sanjay Gandhi (Borivali)","Maharashtra","Inside Mumbai; the Kanheri Caves.","p"],
  ["Tadoba","Maharashtra","Tadoba-Andhari Tiger Reserve; Chandrapur.","p"],
  ["Pench (Jawaharlal Nehru)","Maharashtra","Nagpur — the Maharashtra side of Pench.",""],
  ["Gugamal","Maharashtra","Melghat Tiger Reserve.",""],
  ["Chandoli","Maharashtra","Sahyadri Tiger Reserve.",""],
  ["Nawegaon","Maharashtra","Gondia.",""]
];
const N4 = [
  ["Kanha","Madhya Pradesh","Hard-ground barasingha; the setting of The Jungle Book.","p"],
  ["Bandhavgarh","Madhya Pradesh","A high density of tigers; Umaria.","p"],
  ["Panna","Madhya Pradesh","Tigers brought back; on the Ken; biosphere reserve.","p"],
  ["Pench (Indira Priyadarshini)","Madhya Pradesh","Seoni — The Jungle Book country.","p"],
  ["Satpura","Madhya Pradesh","Pachmarhi.",""],
  ["Kuno","Madhya Pradesh","Project Cheetah (2022).","p"],
  ["Madhav","Madhya Pradesh","Shivpuri; became a tiger reserve in 2025.",""],
  ["Sanjay","Madhya Pradesh","Sidhi.",""],
  ["Van Vihar","Madhya Pradesh","In Bhopal.",""],
  ["Fossil (Ghughua)","Madhya Pradesh","Plant fossils; Dindori.",""],
  ["Dinosaur Fossil","Madhya Pradesh","Dinosaur eggs; Dhar.",""],
  ["Indravati","Chhattisgarh","Wild buffalo; Bijapur.","p"],
  ["Kanger Ghati (Kanger Valley)","Chhattisgarh","Limestone caves; Bastar.","p"],
  ["Guru Ghasidas","Chhattisgarh","Koriya; now in the Guru Ghasidas–Tamor Pingla Tiger Reserve.",""]
];
const N5 = [
  ["Valmiki","Bihar","Bihar's only national park and tiger reserve; West Champaran.","p"],
  ["Betla","Jharkhand","Jharkhand's only national park; Palamau.","p"],
  ["Simlipal","Odisha","Tigers; Mayurbhanj; also a biosphere reserve.","p"],
  ["Bhitarkanika","Odisha","Saltwater crocodiles and mangroves.","p"],
  ["Sundarban","West Bengal","Mangroves and tigers; World Heritage site.","p"],
  ["Jaldapara","West Bengal","One-horned rhinos; Alipurduar.","p"],
  ["Gorumara","West Bengal","Rhinos; the Dooars.",""],
  ["Buxa","West Bengal","Tiger reserve; Alipurduar.",""],
  ["Neora Valley","West Bengal","Red panda; Kalimpong.",""],
  ["Singalila","West Bengal","Red panda; Darjeeling.","p"],
  ["Khangchendzonga","Sikkim","India's only mixed World Heritage site (2016).","p"]
];
const N6 = [
  ["Kaziranga","Assam","One-horned rhinos; World Heritage site.","p"],
  ["Manas","Assam","World Heritage site; golden langur, pygmy hog.","p"],
  ["Nameri","Assam","White-winged wood duck.",""],
  ["Orang (Rajiv Gandhi)","Assam","'Mini Kaziranga'.",""],
  ["Dibru-Saikhowa","Assam","Feral horses; also a biosphere reserve.","p"],
  ["Dihing Patkai","Assam","Notified 2021.",""],
  ["Raimona","Assam","Notified 2021.",""],
  ["Namdapha","Arunachal Pradesh","Four big cats: tiger, leopard, clouded and snow leopard.","p"],
  ["Mouling","Arunachal Pradesh","",""],
  ["Keibul Lamjao","Manipur","The floating park; sangai deer.","p"],
  ["Sirohi","Manipur","Shirui lily.",""],
  ["Nokrek","Meghalaya","Wild citrus; biosphere reserve.","p"],
  ["Balphakram","Meghalaya","'Land of perpetual winds'.",""],
  ["Phawngpui (Blue Mountain)","Mizoram","",""],
  ["Murlen","Mizoram","",""],
  ["Ntangki (Intanki)","Nagaland","Nagaland's only national park.",""],
  ["Clouded Leopard","Tripura","Inside Sepahijala.",""],
  ["Bison (Rajbari)","Tripura","",""]
];
const N7 = [
  ["Bandipur","Karnataka","Tigers and elephants; part of the Nilgiri Biosphere Reserve.","p"],
  ["Nagarhole (Rajiv Gandhi)","Karnataka","Tigers and elephants.","p"],
  ["Kudremukh","Karnataka","'Horse face' peak; shola grasslands.",""],
  ["Bannerghatta","Karnataka","Near Bengaluru; India's first butterfly park.",""],
  ["Anshi","Karnataka","Part of the Kali Tiger Reserve.",""],
  ["Periyar","Kerala","Elephants; a tiger reserve on the Periyar lake.","p"],
  ["Eravikulam","Kerala","Nilgiri tahr; Neelakurinji blooms.","p"],
  ["Silent Valley","Kerala","Lion-tailed macaque; saved by a famous campaign.","p"],
  ["Anamudi Shola","Kerala","",""],
  ["Mathikettan Shola","Kerala","",""],
  ["Pambadum Shola","Kerala","",""],
  ["Mudumalai","Tamil Nadu","Elephants and tigers; Nilgiris.","p"],
  ["Mukurthi","Tamil Nadu","Nilgiri tahr; Nilgiris.",""],
  ["Anamalai (Indira Gandhi)","Tamil Nadu","Lion-tailed macaque; Coimbatore.",""],
  ["Gulf of Mannar Marine","Tamil Nadu","Corals and dugongs; India's first marine biosphere reserve.","p"],
  ["Guindy","Tamil Nadu","Inside Chennai; blackbuck.","p"]
];
const N8 = [
  ["Papikonda","Andhra Pradesh","On the Godavari gorge.",""],
  ["Sri Venkateswara","Andhra Pradesh","Tirupati.",""],
  ["Rajiv Gandhi (Rameswaram)","Andhra Pradesh","Kadapa.",""],
  ["Kasu Brahmananda Reddy","Telangana","Inside Hyderabad.",""],
  ["Mrugavani","Telangana","Hyderabad.",""],
  ["Mahavir Harina Vanasthali","Telangana","Deer park near Hyderabad.",""],
  ["Mahatma Gandhi Marine (Wandoor)","Andaman and Nicobar Islands","Coral reefs near Sri Vijaya Puram.","p"],
  ["Rani Jhansi Marine","Andaman and Nicobar Islands","Ritchie's Archipelago.",""],
  ["Saddle Peak","Andaman and Nicobar Islands","The highest point of the islands.",""],
  ["Mount Harriet (Mount Manipur)","Andaman and Nicobar Islands","Renamed Mount Manipur National Park in 2021.",""],
  ["Campbell Bay","Andaman and Nicobar Islands","Great Nicobar.",""],
  ["Galathea Bay","Andaman and Nicobar Islands","Great Nicobar; leatherback turtles.",""],
  ["South Button Island","Andaman and Nicobar Islands","India's smallest national park.","p"],
  ["Middle Button Island","Andaman and Nicobar Islands","",""],
  ["North Button Island","Andaman and Nicobar Islands","",""]
];
const N9 = [
  ["Asiatic lion","Gir","Gujarat — the only wild population.","p"],
  ["one-horned rhinoceros","Kaziranga","Also Manas, Orang, Jaldapara, Gorumara.","p"],
  ["snow leopard","Hemis","",""],
  ["hangul (Kashmir stag)","Dachigam","","p"],
  ["sangai (brow-antlered deer)","Keibul Lamjao","Manipur's state animal.","p"],
  ["hard-ground barasingha","Kanha","Madhya Pradesh's state animal.","p"],
  ["Nilgiri tahr","Eravikulam","","p"],
  ["Lion-tailed macaque","Silent Valley","",""],
  ["saltwater crocodile","Bhitarkanika","","p"],
  ["great Indian bustard","Desert","Rajasthan's state bird.","p"],
  ["blackbuck","Velavadar (Blackbuck)","",""],
  ["wild water buffalo","Indravati","Chhattisgarh's state animal.",""],
  ["golden langur","Manas","",""],
  ["cheetah","Kuno","Brought from Namibia and South Africa (2022–23).","p"],
  ["red panda","Singalila","Also Neora Valley.",""],
  ["migratory birds (once the Siberian crane)","Keoladeo Ghana","",""],
  ["dugong and its coral reefs","Gulf of Mannar Marine","",""]
];
const N10 = [
  ["Kaziranga","1985","Assam — natural World Heritage site.","p"],
  ["Manas","1985","Assam.",""],
  ["Keoladeo Ghana","1985","Rajasthan.","p"],
  ["Sundarban","1987","West Bengal.",""],
  ["Nanda Devi and Valley of Flowers","1988","Valley of Flowers added 2005.",""],
  ["Great Himalayan","2014","Himachal Pradesh.",""],
  ["Khangchendzonga","2016","Sikkim — India's only mixed (natural and cultural) site.","p"]
];

LESSONS.push(
{id:"N1", heat:3, title:"National parks: the basics and the records", hi:"राष्ट्रीय उद्यान: मूल बातें और रिकॉर्ड", blocks:[
  {k:"hot", h:"Most asked: the <b>first</b> national park (Hailey, now Corbett, 1936), the <b>largest</b> (Hemis) and <b>smallest</b> (South Button Island), the state with the <b>most</b> (Madhya Pradesh), the <b>floating</b> park (Keibul Lamjao), and the difference between a <b>national park and a sanctuary</b>."},
  {k:"story", h:"<p>A <b>national park</b> is the strictest kind of protected area under the <b>Wildlife (Protection) Act, 1972</b>. No grazing, no private rights, no human activity except tourism and research is allowed inside. A <b>wildlife sanctuary</b> is gentler: some local use goes on. A state government declares both; only the state legislature (with the National Board for Wildlife's advice) can change a national park's boundary.</p><p>India's first national park was <b>Hailey National Park</b> (1936), in the Kumaon hills — today's <b>Jim Corbett</b>. India now has about <b>106</b> national parks, covering a little over 1% of its land. <b>Madhya Pradesh</b> has the most.</p>"},
  {k:"table", title:"Records", head:["Record","Park","Note"], rows: N1.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"National park, sanctuary, tiger reserve", head:["","National park","Wildlife sanctuary"], rows:[
    ["Law","Wildlife (Protection) Act, 1972 (Section 35)","Wildlife (Protection) Act, 1972 (Section 18)"],
    ["Human activity","None allowed — no grazing, no private rights","Some allowed if it does not harm wildlife"],
    ["Boundaries","Changed only by the state legislature","Changed by the state government"],
    ["About how many","About 106","About 570"],
    ["Tiger reserve?","A tiger reserve is a separate label (NTCA) — its core is often a national park","Same"]]},
  {k:"trick", h:"Records in one breath — <b>“First Corbett, Big Hemis, Tiny Button, Most MP, Floating Manipur”</b>."},
  {k:"trap", h:"The <b>largest</b> national park is <b>Hemis</b>, but the largest <b>tiger reserve</b> is Nagarjunasagar-Srisailam and the largest <b>biosphere reserve</b> is the Great Rann of Kutch. Corbett was first called <b>Hailey</b>, then Ramganga."}
], sum:["National parks are declared under the Wildlife (Protection) Act, 1972 — no human activity inside.","First: Hailey (1936), now Jim Corbett. Largest: Hemis (Ladakh). Smallest: South Button Island.","Madhya Pradesh has the most national parks (11); the Andaman and Nicobar Islands have 9.","Keibul Lamjao (Manipur) floats on Loktak Lake; Kuno brought cheetahs back (2022).","India has about 106 national parks."]},

{id:"N2", heat:3, title:"The north: J&K, Ladakh, Himachal, Haryana, Uttarakhand, UP", hi:"उत्तर भारत के राष्ट्रीय उद्यान", blocks:[
  {k:"hot", h:"Most asked: <b>Hemis</b> (Ladakh), <b>Dachigam</b> (hangul), <b>Great Himalayan</b> and <b>Pin Valley</b> (Himachal), <b>Corbett, Rajaji, Nanda Devi, Valley of Flowers</b> (Uttarakhand) and <b>Dudhwa</b> (UP)."},
  {k:"story", h:"<p>The northern parks climb from the Terai grasslands to the high Himalaya. <b>Dudhwa</b> on the Nepal border has swamp deer and rhinos; <b>Corbett</b> and <b>Rajaji</b> in the Shivalik foothills have tigers and elephants. Higher up, <b>Nanda Devi</b> and the <b>Valley of Flowers</b> form a World Heritage site; <b>Great Himalayan</b> in Kullu is another.</p><p>Beyond the main range lie cold deserts: <b>Pin Valley</b> in Spiti and <b>Hemis</b> in Ladakh — India's largest national park and the best place to see the <b>snow leopard</b>. In the Kashmir valley, <b>Dachigam</b> protects the last <b>hangul</b>.</p>"},
  {k:"table", title:"National parks of the north", head:["Park","State / UT","Remember"], rows: N2.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Uttarakhand's six — <b>“Corbett Raja Nanda Flowers Gango Govind”</b>: Corbett, Rajaji, Nanda Devi, Valley of Flowers, Gangotri, Govind."},
  {k:"trap", h:"<b>Punjab</b> and <b>Delhi</b> have no national park. <b>Sultanpur</b> (a bird park) is in <b>Haryana</b>, not Uttar Pradesh. <b>Hemis</b> is now in the UT of <b>Ladakh</b>, not Jammu and Kashmir."}
], sum:["Hemis (Ladakh) is the largest national park — snow leopards.","Dachigam (J&K) protects the hangul.","Himachal: Great Himalayan (World Heritage 2014), Pin Valley (cold desert), Inderkilla, Khirganga, Simbalbara.","Uttarakhand: Corbett, Rajaji, Nanda Devi, Valley of Flowers, Gangotri, Govind.","Haryana: Sultanpur and Kalesar; Uttar Pradesh: Dudhwa."]},

{id:"N3", heat:3, title:"The west: Rajasthan, Gujarat, Goa, Maharashtra", hi:"पश्चिम भारत के राष्ट्रीय उद्यान", blocks:[
  {k:"hot", h:"Most asked: <b>Ranthambore, Sariska, Keoladeo, Desert</b> (Rajasthan), <b>Gir</b> and the <b>Marine National Park</b> (Gujarat), <b>Sanjay Gandhi</b> in Mumbai and <b>Tadoba</b>."},
  {k:"story", h:"<p>Rajasthan's parks range from dry forest to desert: <b>Ranthambore</b> and <b>Sariska</b> for tigers, <b>Keoladeo</b> at Bharatpur for birds, and the <b>Desert National Park</b> near Jaisalmer, the last stronghold of the <b>great Indian bustard</b>.</p><p>Gujarat has <b>Gir</b>, the only wild home of the <b>Asiatic lion</b>, <b>Velavadar</b> for blackbuck and India's first <b>marine national park</b> in the Gulf of Kutch. In Maharashtra, <b>Sanjay Gandhi National Park</b> sits inside Mumbai, and <b>Tadoba</b> is the state's best-known tiger reserve.</p>"},
  {k:"table", title:"National parks of the west", head:["Park","State / UT","Remember"], rows: N3.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Rajasthan's five — <b>“Ran-Sar-Keo-Des-Muk”</b>: Ranthambore, Sariska, Keoladeo, Desert, Mukundra Hills."},
  {k:"trap", h:"<b>Keoladeo</b> is a <b>national park</b> (and World Heritage site), though people call it the Bharatpur Bird Sanctuary. <b>Pench</b> is split between Madhya Pradesh and Maharashtra — each side is a separate national park."}
], sum:["Rajasthan: Ranthambore, Sariska, Keoladeo (Bharatpur), Desert (great Indian bustard), Mukundra Hills.","Gujarat: Gir (Asiatic lion), Velavadar (blackbuck), Gulf of Kutch Marine (first marine NP, 1982), Vansda.","Goa: Bhagwan Mahavir (Mollem).","Maharashtra: Sanjay Gandhi (Mumbai), Tadoba, Pench, Gugamal, Chandoli, Nawegaon."]},

{id:"N4", heat:3, title:"The centre: Madhya Pradesh and Chhattisgarh", hi:"मध्य भारत के राष्ट्रीय उद्यान", blocks:[
  {k:"hot", h:"Most asked: <b>Kanha</b> (barasingha), <b>Bandhavgarh</b>, <b>Panna</b>, <b>Pench</b>, <b>Kuno</b> (cheetahs) and <b>Madhya Pradesh having the most national parks</b>; in Chhattisgarh, <b>Indravati</b> (wild buffalo) and <b>Kanger Ghati</b> (caves)."},
  {k:"story", h:"<p><b>Madhya Pradesh</b> is the 'Tiger State' and has the most national parks — eleven. <b>Kanha</b> saved the hard-ground <b>barasingha</b> from extinction; <b>Bandhavgarh</b> has one of the highest densities of tigers; <b>Panna</b> lost all its tigers and then brought them back. In 2022 <b>Kuno</b> became the home of India's reintroduced <b>cheetahs</b>.</p><p>MP also has two unusual parks: the <b>Fossil National Park</b> at Ghughua with plant fossils, and the <b>Dinosaur Fossil National Park</b> in Dhar with dinosaur eggs. <b>Chhattisgarh</b>'s <b>Indravati</b> protects the wild water buffalo.</p>"},
  {k:"table", title:"National parks of Madhya Pradesh and Chhattisgarh", head:["Park","State / UT","Remember"], rows: N4.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"MP's big tiger four — <b>“Kanha Bandh Panna Pench”</b>. Add <b>Kuno</b> for cheetahs and <b>Satpura</b> for Pachmarhi."},
  {k:"trap", h:"<b>Kuno</b> is in <b>Madhya Pradesh</b>, not Rajasthan. The second cheetah home (2025) is <b>Gandhi Sagar</b> Wildlife Sanctuary, also in MP — a sanctuary, not a national park."}
], sum:["Madhya Pradesh has the most national parks: Kanha, Bandhavgarh, Panna, Pench, Satpura, Kuno, Madhav, Sanjay, Van Vihar, and two fossil parks.","Kanha — barasingha; Kuno — cheetahs (2022).","Chhattisgarh: Indravati (wild buffalo), Kanger Ghati (caves), Guru Ghasidas."]},

{id:"N5", heat:3, title:"The east: Bihar, Jharkhand, Odisha, West Bengal, Sikkim", hi:"पूर्वी भारत के राष्ट्रीय उद्यान", blocks:[
  {k:"hot", h:"Most asked: <b>Valmiki</b> (Bihar's only), <b>Betla</b> (Jharkhand's only), <b>Simlipal</b> and <b>Bhitarkanika</b> (Odisha), <b>Sundarban</b>, <b>Jaldapara</b> and <b>Singalila</b> (West Bengal), and <b>Khangchendzonga</b> (Sikkim)."},
  {k:"story", h:"<p><b>West Bengal</b> runs from the mangroves of the <b>Sundarbans</b> to the snows of <b>Singalila</b>, where red pandas live on the Nepal border. In between, the Dooars parks — <b>Jaldapara</b> and <b>Gorumara</b> — have one-horned rhinos.</p><p><b>Odisha</b> has <b>Simlipal</b> (tigers, waterfalls) and <b>Bhitarkanika</b>, home of the saltwater crocodile. <b>Sikkim</b>'s <b>Khangchendzonga</b> is India's only <b>mixed</b> World Heritage site. Bihar and Jharkhand each have just one: <b>Valmiki</b> and <b>Betla</b>.</p>"},
  {k:"table", title:"National parks of the east", head:["Park","State / UT","Remember"], rows: N5.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"One-park states of the east — <b>“Valmiki Bihar, Betla Jharkhand”</b> — like a pair of rhymes."},
  {k:"trap", h:"<b>Bhitarkanika</b> (Odisha) is for <b>saltwater crocodiles</b>; the <b>Sundarbans</b> (West Bengal) is for tigers in mangroves — both have mangroves. <b>Khangchendzonga</b> is a <b>mixed</b> site, not purely natural."}
], sum:["Bihar: Valmiki; Jharkhand: Betla — one each.","Odisha: Simlipal (tigers), Bhitarkanika (saltwater crocodiles).","West Bengal: Sundarban, Jaldapara, Gorumara, Buxa, Neora Valley, Singalila (red panda).","Sikkim: Khangchendzonga — India's only mixed World Heritage site (2016)."]},

{id:"N6", heat:3, title:"The north-east", hi:"पूर्वोत्तर भारत के राष्ट्रीय उद्यान", blocks:[
  {k:"hot", h:"Most asked: <b>Kaziranga</b> and <b>Manas</b> (Assam), <b>Keibul Lamjao</b> (floating, sangai), <b>Namdapha</b> (four big cats), <b>Nokrek</b> and <b>Balphakram</b> (Meghalaya), and Assam's two new parks of 2021."},
  {k:"story", h:"<p><b>Assam</b> has seven national parks. <b>Kaziranga</b> holds about two-thirds of the world's <b>one-horned rhinos</b>; <b>Manas</b>, on the Bhutan border, has golden langurs and the tiny pygmy hog. <b>Dihing Patkai</b> and <b>Raimona</b> became national parks in 2021.</p><p>In Arunachal, <b>Namdapha</b> is the only park with <b>four big cats</b> — tiger, leopard, clouded leopard and snow leopard. Manipur's <b>Keibul Lamjao</b> floats on mats of vegetation (phumdis) on Loktak Lake and is the last home of the <b>sangai</b> deer.</p>"},
  {k:"table", title:"National parks of the north-east", head:["Park","State / UT","Remember"], rows: N6.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Assam's seven — <b>“Kazi Manas Nameri Orang Dibru Dihing Raimona”</b>."},
  {k:"trap", h:"<b>Keibul Lamjao</b> is in <b>Manipur</b> (on Loktak Lake), not Assam. <b>Nokrek</b> is a national park <i>and</i> a biosphere reserve in Meghalaya. <b>Ntangki</b> is Nagaland's only national park."}
], sum:["Assam: Kaziranga (rhino), Manas (World Heritage), Nameri, Orang, Dibru-Saikhowa, Dihing Patkai and Raimona (2021).","Arunachal: Namdapha (four big cats), Mouling.","Manipur: Keibul Lamjao (floating, sangai), Sirohi.","Meghalaya: Nokrek, Balphakram; Mizoram: Phawngpui, Murlen; Nagaland: Ntangki; Tripura: Clouded Leopard, Bison."]},

{id:"N7", heat:3, title:"The south: Karnataka, Kerala, Tamil Nadu", hi:"दक्षिण भारत के राष्ट्रीय उद्यान", blocks:[
  {k:"hot", h:"Most asked: <b>Bandipur, Nagarhole</b> (Karnataka), <b>Periyar, Eravikulam, Silent Valley</b> (Kerala), <b>Mudumalai</b> and the <b>Gulf of Mannar</b> (Tamil Nadu) — and which animal each protects."},
  {k:"story", h:"<p>Where Karnataka, Kerala and Tamil Nadu meet, <b>Bandipur</b>, <b>Nagarhole</b> and <b>Mudumalai</b> form one great forest, part of the <b>Nilgiri Biosphere Reserve</b> — the best place in the world to see Asian elephants. Kerala's <b>Silent Valley</b> was saved from a dam in the 1980s and protects the <b>lion-tailed macaque</b>; <b>Eravikulam</b> protects the <b>Nilgiri tahr</b>.</p><p>Off Tamil Nadu, the <b>Gulf of Mannar Marine National Park</b> protects coral reefs and dugongs; <b>Guindy</b> sits inside Chennai.</p>"},
  {k:"table", title:"National parks of the south", head:["Park","State / UT","Remember"], rows: N7.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"The tri-junction trio — <b>“Bandipur–Nagarhole–Mudumalai”</b> (Karnataka, Karnataka, Tamil Nadu) plus Wayanad (Kerala, a sanctuary) — one forest, four names."},
  {k:"trap", h:"<b>Periyar</b> is in <b>Kerala</b>, though the Periyar lake's dam (Mullaperiyar) is run by Tamil Nadu. <b>Anamalai</b> (Tamil Nadu) is also called <b>Indira Gandhi</b> National Park; <b>Nagarhole</b> is also <b>Rajiv Gandhi</b> National Park."}
], sum:["Karnataka: Bandipur, Nagarhole, Kudremukh, Bannerghatta, Anshi.","Kerala: Periyar, Eravikulam (Nilgiri tahr), Silent Valley (lion-tailed macaque) and three sholas.","Tamil Nadu: Mudumalai, Mukurthi, Anamalai, Gulf of Mannar Marine, Guindy (Chennai).","Bandipur–Nagarhole–Mudumalai lie in the Nilgiri Biosphere Reserve."]},

{id:"N8", heat:2, title:"Andhra Pradesh, Telangana and the islands", hi:"आंध्र, तेलंगाना और द्वीप", blocks:[
  {k:"hot", h:"Most asked: the <b>Andaman and Nicobar parks</b> (smallest — South Button; marine parks — Mahatma Gandhi and Rani Jhansi; Saddle Peak), and Hyderabad's three city parks."},
  {k:"story", h:"<p>The <b>Andaman and Nicobar Islands</b> have nine national parks — more than any state except Madhya Pradesh. Two are <b>marine</b> parks of coral reefs (<b>Mahatma Gandhi</b> at Wandoor and <b>Rani Jhansi</b>), three are tiny islands (the <b>Button</b> islands, including India's smallest park), and <b>Campbell Bay</b> and <b>Galathea Bay</b> guard the rainforest of Great Nicobar.</p><p>Telangana's three national parks are all in or around <b>Hyderabad</b>. Andhra Pradesh has <b>Papikonda</b> on the Godavari gorge and <b>Sri Venkateswara</b> near Tirupati.</p>"},
  {k:"table", title:"National parks of AP, Telangana and the islands", head:["Park","State / UT","Remember"], rows: N8.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"The Andamans' nine — <b>“3 Buttons, 2 Marines, 2 Bays, Saddle and Harriet”</b>."},
  {k:"trap", h:"<b>Mount Harriet</b> was renamed <b>Mount Manipur</b> National Park in 2021. <b>Lakshadweep</b> has no national park. The capital Port Blair is now <b>Sri Vijaya Puram</b>."}
], sum:["A&N Islands: 9 national parks — South, Middle and North Button; Mahatma Gandhi and Rani Jhansi Marine; Campbell Bay, Galathea Bay; Saddle Peak; Mount Harriet (Mount Manipur).","Telangana: Kasu Brahmananda Reddy, Mrugavani, Mahavir Harina Vanasthali — all around Hyderabad.","Andhra Pradesh: Papikonda, Sri Venkateswara, Rajiv Gandhi (Rameswaram)."]},

{id:"N9", heat:3, title:"Animals and their parks", hi:"जीव और उनके उद्यान", blocks:[
  {k:"hot", h:"Most asked: <b>animal → park</b> — lion–Gir, rhino–Kaziranga, hangul–Dachigam, sangai–Keibul Lamjao, barasingha–Kanha, Nilgiri tahr–Eravikulam, saltwater crocodile–Bhitarkanika, great Indian bustard–Desert, cheetah–Kuno."},
  {k:"story", h:"<p>Many parks exist to save one animal. The <b>Asiatic lion</b> survives only in and around <b>Gir</b>; the <b>hangul</b> only in <b>Dachigam</b>; the <b>sangai</b> only on the floating meadows of <b>Keibul Lamjao</b>. <b>Kanha</b> brought the hard-ground <b>barasingha</b> back from about 66 animals in 1970.</p><p>Learn these as pairs — exams give the animal and ask for the park, or the other way round.</p>"},
  {k:"table", title:"Animal → park", head:["Animal","Park","Note"], rows: N9.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"Endemic pairs — <b>“Lion Gir, Hangul Dachi, Sangai Keibul, Tahr Eravi”</b>: one animal, one place."},
  {k:"trap", h:"<b>Rhinos</b> live in several parks (Kaziranga, Manas, Orang, Jaldapara, Gorumara, Dudhwa) — but the answer for 'best known' is <b>Kaziranga</b>. The <b>cheetah</b> came back to <b>Kuno</b>, not Gir."}
], sum:["Lion — Gir; rhino — Kaziranga; snow leopard — Hemis; hangul — Dachigam; sangai — Keibul Lamjao.","Barasingha — Kanha; Nilgiri tahr — Eravikulam; lion-tailed macaque — Silent Valley.","Saltwater crocodile — Bhitarkanika; great Indian bustard — Desert NP; wild buffalo — Indravati.","Cheetah — Kuno (2022); red panda — Singalila."]},

{id:"N10", heat:2, title:"World Heritage parks and parks in the news", hi:"विश्व धरोहर उद्यान और समाचार", blocks:[
  {k:"hot", h:"Most asked: which national parks are <b>natural World Heritage sites</b> and when, <b>Project Cheetah</b> (Kuno 2022), new and renamed parks (Dihing Patkai, Raimona, Mount Manipur), and tiger reserves that are also national parks."},
  {k:"story", h:"<p>Seven of India's natural (or mixed) World Heritage sites are national parks: <b>Kaziranga, Manas and Keoladeo</b> (1985), the <b>Sundarbans</b> (1987), <b>Nanda Devi</b> (1988, with the Valley of Flowers added in 2005), the <b>Great Himalayan</b> (2014) and <b>Khangchendzonga</b> (2016, mixed). The eighth natural site, the <b>Western Ghats</b>, is a chain of many parks and sanctuaries.</p><p><b>Project Cheetah</b> brought eight cheetahs from Namibia to <b>Kuno</b> on 17 September 2022, and twelve more from South Africa in 2023. Assam added <b>Dihing Patkai</b> and <b>Raimona</b> in 2021.</p>"},
  {k:"table", title:"National parks on the World Heritage list", head:["Park","Year listed","Note"], rows: N10.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"In the news", rows:[
    ["Project Cheetah","Kuno, 17 September 2022 (from Namibia); more from South Africa, February 2023"],
    ["Second cheetah home","Gandhi Sagar Wildlife Sanctuary, MP (2025)"],
    ["New national parks","Dihing Patkai and Raimona, Assam (2021)"],
    ["Renamed","Mount Harriet → Mount Manipur (2021); Orang → Rajiv Gandhi Orang"],
    ["Madhav (MP)","Declared a tiger reserve in 2025"]]},
  {k:"trick", h:"The 1985 trio — <b>“K-M-K”</b>: <b>K</b>aziranga, <b>M</b>anas, <b>K</b>eoladeo. Then Sundarbans 1987, Nanda Devi 1988, Great Himalayan 2014, Khangchendzonga 2016."},
  {k:"trap", h:"<b>Khangchendzonga</b> is <b>mixed</b> (natural and cultural) — the only one in India. The <b>Valley of Flowers</b> was added to Nanda Devi in <b>2005</b>, not 1988."}
], sum:["Natural World Heritage parks: Kaziranga, Manas, Keoladeo (1985); Sundarbans (1987); Nanda Devi (1988) and Valley of Flowers (2005); Great Himalayan (2014); Khangchendzonga (2016, mixed).","Project Cheetah: Kuno, 17 September 2022.","Dihing Patkai and Raimona became national parks in 2021; Mount Harriet is now Mount Manipur."]}
);

pairQs("N1", N1, { q: t => `Which is ${t.charAt(0).toLowerCase() + t.slice(1)}?`, rq: a => `What is ${a} known for?` });
["N2","N3","N4","N5","N6","N7","N8"].forEach((l, i) => pairQs(l, [N2,N3,N4,N5,N6,N7,N8][i], { q: t => `In which state or UT is ${t} National Park?`, rq: a => `Which of these national parks is in ${a}?`,
  extra: ["Punjab","Delhi","Lakshadweep","Goa","Kerala","Assam","Bihar"].filter(x => ![N2,N3,N4,N5,N6,N7,N8][i].some(r => r[1] === x)) }));
pairQs("N9", N9, { q: t => `Which national park is best known for the ${t}?`, rq: a => `${a} National Park is best known for which animal?` });
pairQs("N10", N10, { q: t => `When did ${t} join the World Heritage list?`, extra: ["1992","2002"] });

QB.push(
["N1","National parks are declared under which law?",["Wildlife (Protection) Act, 1972","Forest Conservation Act, 1980","Environment (Protection) Act, 1986","Biological Diversity Act, 2002"],"","p"],
["N1","Corbett National Park was first named:",["Hailey National Park","Ramganga National Park","Kumaon National Park","Nainital National Park"],"1936; renamed Ramganga in 1954 and Corbett in 1957.","p"],
["N1","About how many national parks does India have (as of 2026)?",["About 106","About 56","About 570","About 18"],"About 570 is the number of wildlife sanctuaries.","p"],
["N1","In which kind of protected area is no human activity — not even grazing — allowed?",["National park","Wildlife sanctuary","Community reserve","Conservation reserve"],"",""],
["N2","Which state or UT has no national park?",["Punjab","Haryana","Uttar Pradesh","Himachal Pradesh"],"Delhi and Lakshadweep have none either.","p"],
["N2","Which national park is famous for the hangul?",["Dachigam","Hemis","Kishtwar","Great Himalayan"],"",""],
["N3","India's first marine national park (1982) is in the:",["Gulf of Kutch","Gulf of Mannar","Andaman Islands","Gulf of Khambhat"],"","p"],
["N4","How many national parks does Madhya Pradesh have?",["11","9","7","6"],"The most of any state.",""],
["N4","Which national park in MP has dinosaur eggs?",["Dinosaur Fossil National Park, Dhar","Fossil National Park, Ghughua","Kanha","Satpura"],"",""],
["N5","Which is the only national park in Bihar?",["Valmiki","Betla","Simlipal","Dudhwa"],"Also Bihar's only tiger reserve.","p"],
["N6","Which park has four big cats — tiger, leopard, clouded leopard and snow leopard?",["Namdapha","Kaziranga","Manas","Hemis"],"In Arunachal Pradesh.","p"],
["N6","Which two Assam parks became national parks in 2021?",["Dihing Patkai and Raimona","Nameri and Orang","Manas and Kaziranga","Dibru-Saikhowa and Nameri"],"",""],
["N7","The Nilgiri Biosphere Reserve includes which national parks?",["Bandipur, Nagarhole and Mudumalai","Periyar and Eravikulam","Kudremukh and Anshi","Gulf of Mannar and Guindy"],"Plus Silent Valley and Mukurthi.",""],
["N8","How many national parks are in the Andaman and Nicobar Islands?",["9","3","6","11"],"",""],
["N9","Kanha National Park saved which animal from extinction?",["Hard-ground barasingha","Sangai","Hangul","Wild buffalo"],"From about 66 animals in 1970.","p"],
["N10","Under Project Cheetah, the first cheetahs arrived at Kuno from:",["Namibia","South Africa","Kenya","Iran"],"17 September 2022.","p"],
["N10","Which is India's only mixed World Heritage site?",["Khangchendzonga","Kaziranga","Sundarbans","Great Himalayan"],"","p"],
["N10","Which three national parks became India's first natural World Heritage sites in 1985?",["Kaziranga, Manas and Keoladeo","Kaziranga, Sundarbans and Gir","Corbett, Kanha and Manas","Nanda Devi, Keoladeo and Sundarbans"],"","p"],
["N10","The Valley of Flowers was added to the Nanda Devi World Heritage site in:",["2005","1988","2014","2016"],"",""],
["N10","In 2025 cheetahs were also moved to which protected area in Madhya Pradesh?",["Gandhi Sagar Wildlife Sanctuary","Kanha National Park","Panna National Park","Madhav National Park"],"","p"],
["N10","Mount Harriet National Park was renamed in 2021 as:",["Mount Manipur National Park","Mount Sri Vijaya National Park","Netaji Subhas National Park","Saddle Peak National Park"],"",""],
["N10","Which Madhya Pradesh national park was declared a tiger reserve in 2025?",["Madhav","Kuno","Van Vihar","Sanjay"],"","p"]
);
LASTMOMENT.push(
{t:"Records", era:["np"], rows:[["First","Hailey 1936 → Corbett"],["Largest","Hemis (Ladakh)"],["Smallest","South Button Island"],["Most parks","Madhya Pradesh (11)"],["Floating","Keibul Lamjao"],["Cheetahs","Kuno (2022)"]]},
{t:"Animal → park", era:["np"], rows:[["Lion","Gir"],["Rhino","Kaziranga"],["Hangul","Dachigam"],["Sangai","Keibul Lamjao"],["Barasingha","Kanha"],["Nilgiri tahr","Eravikulam"],["Saltwater croc","Bhitarkanika"]]}
);
TILES.push(["106","National parks (about)","np"],["1936","First park — Hailey (Corbett)","np"],["11","Madhya Pradesh's parks","np"],["9","Andaman and Nicobar parks","np"],["2022","Cheetahs back at Kuno","np"]);
