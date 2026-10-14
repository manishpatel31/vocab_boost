/* Part 3 · T7 roads, tunnels and bridges; T8 seaports; T9 airports and aviation; T10 inland waterways and pipelines (as of October 2026). */
const T7 = [
  ["Atal Tunnel (Rohtang)","Himachal Pradesh","9.02 km; opened October 2020 — the world's longest highway tunnel above 10,000 feet.","p"],
  ["Dr Syama Prasad Mookerjee Tunnel (Chenani–Nashri)","Jammu and Kashmir","About 9.3 km; opened 2017.","p"],
  ["Sonamarg (Z-Morh) Tunnel","Jammu and Kashmir","Opened January 2025 — keeps Sonamarg open all year.",""],
  ["Sela Tunnel","Arunachal Pradesh","Opened March 2024 — on the road to Tawang.","p"],
  ["Bhupen Hazarika Setu (Dhola–Sadiya Bridge)","Assam","Over the Lohit, about 9.15 km, opened 2017.","p"],
  ["Bogibeel Bridge","Assam","Rail-cum-road bridge over the Brahmaputra, 2018.","p"],
  ["Atal Setu (Mumbai Trans Harbour Link)","Maharashtra","About 21.8 km — India's longest sea bridge, opened January 2024.","p"],
  ["Mahatma Gandhi Setu","Bihar","Over the Ganga between Patna and Hajipur (1982).","p"],
  ["Sudarshan Setu (Okha–Beyt Dwarka)","Gujarat","India's longest cable-stayed bridge, opened February 2024.","p"],
  ["Samruddhi Mahamarg (Mumbai–Nagpur Expressway)","Maharashtra","",""],
  ["Purvanchal Expressway","Uttar Pradesh","Lucknow to Ghazipur.",""],
  ["Umling La road (world's highest motorable road)","Ladakh","Built by the BRO at about 19,000 feet.","p"]
];
const T7R = [
  ["NH-44 (India's longest national highway)","Srinagar to Kanyakumari","Runs north–south through 11 states and UTs; it was old NH-7 in the south.","p"],
  ["East–West Corridor","Porbandar to Silchar","Part of the NHDP.","p"],
  ["Yamuna Expressway","Greater Noida to Agra","",""],
  ["Bundelkhand Expressway","Chitrakoot to Etawah","",""],
  ["Atal Tunnel route","Manali to Lahaul-Spiti","",""],
  ["Atal Setu route","Sewri to Nhava Sheva","",""]
];
const T8 = [
  ["Syama Prasad Mookerjee Port (Kolkata, with Haldia)","West Bengal","India's only riverine major port, on the Hooghly.","p"],
  ["Paradip Port","Odisha","","p"],
  ["Visakhapatnam Port","Andhra Pradesh","India's deepest land-locked, protected harbour.","p"],
  ["Kamarajar Port (Ennore)","Tamil Nadu","India's first corporatised major port.","p"],
  ["V. O. Chidambaranar Port (Tuticorin)","Tamil Nadu","",""],
  ["Cochin Port","Kerala","On Willingdon Island.","p"],
  ["New Mangalore Port","Karnataka","Exports Kudremukh iron ore.","p"],
  ["Mormugao Port","Goa","Mainly iron-ore exports.","p"],
  ["Mumbai Port","Maharashtra","A natural harbour.","p"],
  ["Deendayal Port (Kandla)","Gujarat","A tidal port in the Gulf of Kutch.","p|SSC MTS · 9 Aug 2019 (Shift 2)"],
  ["Port Blair Port (Sri Vijaya Puram)","Andaman and Nicobar Islands","Became a major port in 2010.",""],
  ["Vizhinjam International Seaport","Kerala","India's first deep-water container transshipment port, opened May 2025.","p"],
  ["Mundra Port","Gujarat","India's largest private port (Adani).","p"],
  ["Vadhavan Port (under construction)","Maharashtra","Approved in 2024 as a new major port.",""],
  ["Dhamra Port","Odisha","",""],
  ["Krishnapatnam Port","Andhra Pradesh","",""]
];
const T8F = [
  ["India's only riverine major port","Kolkata","On the Hooghly, about 200 km from the sea.","p"],
  ["A tidal port in the Gulf of Kutch","Deendayal (Kandla)","Built after Partition, when Karachi went to Pakistan.","p"],
  ["Deepest land-locked and protected harbour","Visakhapatnam","",""],
  ["First corporatised major port","Kamarajar (Ennore)","",""],
  ["Called the 'Queen of the Arabian Sea'","Kochi","",""],
  ["Exports iron ore from Kudremukh","New Mangalore","",""],
  ["Largest container port among the major ports","Jawaharlal Nehru Port (Nhava Sheva)","Navi Mumbai.","p"]
];
const T9 = [
  ["Indira Gandhi International Airport","Delhi","India's busiest airport.","p"],
  ["Chhatrapati Shivaji Maharaj International Airport","Mumbai","","p"],
  ["Kempegowda International Airport","Bengaluru","","p"],
  ["Rajiv Gandhi International Airport","Hyderabad","","p"],
  ["Netaji Subhas Chandra Bose International Airport","Kolkata","","p"],
  ["Sardar Vallabhbhai Patel International Airport","Ahmedabad","","p"],
  ["Chaudhary Charan Singh International Airport","Lucknow","",""],
  ["Lokpriya Gopinath Bordoloi International Airport","Guwahati","","p"],
  ["Biju Patnaik International Airport","Bhubaneswar","",""],
  ["Sri Guru Ram Dass Jee International Airport","Amritsar","",""],
  ["Devi Ahilyabai Holkar Airport","Indore","",""],
  ["Raja Bhoj Airport","Bhopal","",""],
  ["Jay Prakash Narayan Airport","Patna","",""],
  ["Birsa Munda Airport","Ranchi","",""],
  ["Dr Babasaheb Ambedkar International Airport","Nagpur","",""],
  ["Swami Vivekananda Airport","Raipur","",""],
  ["Veer Savarkar International Airport","Sri Vijaya Puram (Port Blair)","",""],
  ["Maharishi Valmiki International Airport","Ayodhya","Opened December 2023.","p"],
  ["Manohar International Airport (Mopa)","North Goa","Opened December 2022.",""],
  ["Kushok Bakula Rimpochee Airport","Leh","One of the world's highest commercial airports.",""],
  ["Cochin International Airport","Kochi","World's first fully solar-powered airport (2015).","p"]
];
const T10 = [
  ["National Waterway 1 (NW-1)","Prayagraj to Haldia","Ganga–Bhagirathi–Hooghly, about 1,620 km — India's longest; declared 1986.","p"],
  ["National Waterway 2 (NW-2)","Sadiya to Dhubri","Brahmaputra, about 891 km; declared 1988.","p"],
  ["National Waterway 3 (NW-3)","Kollam to Kottapuram","West Coast Canal in Kerala; declared 1993 (later extended to Kozhikode).","p"],
  ["National Waterway 4 (NW-4)","Kakinada to Puducherry","Krishna and Godavari rivers with canals; declared 2008.","p"],
  ["National Waterway 5 (NW-5)","East Coast Canal with the Brahmani and Mahanadi delta","Odisha and West Bengal; declared 2008.","p"]
];
const T10P = [
  ["Hazira–Bijaipur–Jagdishpur (HBJ / HVJ) pipeline","Natural gas","Gujarat to Uttar Pradesh, run by GAIL — India's first big cross-country gas pipeline.","p"],
  ["Naharkatiya–Nunmati–Barauni pipeline","Crude oil","India's first long crude-oil pipeline, Assam to Bihar (Oil India).","p"],
  ["Salaya–Mathura pipeline","Crude oil","Gujarat coast to Mathura refinery (IOCL).",""],
  ["Jamnagar–Loni pipeline","LPG","A long LPG pipeline run by GAIL.",""],
  ["Motihari–Amlekhganj pipeline","Diesel and petrol","India–Nepal, 2019 — South Asia's first cross-border petroleum pipeline.","p"],
  ["India–Bangladesh Friendship Pipeline","Diesel (high-speed diesel)","Siliguri to Parbatipur, opened March 2023.",""],
  ["Mumbai High–Uran pipeline","Crude oil and natural gas","Undersea, from the offshore field to the coast.",""]
];

LESSONS.push(
{id:"T7", heat:3, title:"Roads, tunnels and bridges", hi:"सड़कें, सुरंगें और पुल", blocks:[
  {k:"hot", h:"Asked often: <b>NH-44 is the longest highway</b> (Srinagar–Kanyakumari); the <b>Golden Quadrilateral</b> joins Delhi–Mumbai–Chennai–Kolkata; the <b>Atal Tunnel</b> joins Manali to Lahaul-Spiti; <b>Atal Setu</b> is the longest sea bridge; <b>Bharatmala</b> (2017) is the big highway plan."},
  {k:"story", h:"<p>In 1999–2001 the <b>National Highways Development Project</b> began with the <b>Golden Quadrilateral</b> — about 5,800 km of four- and six-lane highways joining <b>Delhi, Mumbai, Chennai and Kolkata</b> — and the <b>North–South</b> (Srinagar–Kanyakumari) and <b>East–West</b> (Porbandar–Silchar) corridors. The longest highway today is <b>NH-44</b>, from <b>Srinagar to Kanyakumari</b>. In 2017 came <b>Bharatmala Pariyojana</b> for economic corridors and border roads.</p><p>The <b>Border Roads Organisation</b> (BRO) cut roads through the mountains: the <b>Atal Tunnel</b> under Rohtang (2020) joins <b>Manali to Lahaul-Spiti</b>, the <b>Sela Tunnel</b> (2024) leads to Tawang, and <b>Umling La</b> in Ladakh is the world's highest motorable road. Big bridges include <b>Bhupen Hazarika Setu</b> and <b>Bogibeel</b> in Assam, and <b>Atal Setu</b>, India's longest sea bridge, in Mumbai.</p>", key:"NH-44 Srinagar–Kanyakumari; GQ Delhi–Mumbai–Chennai–Kolkata; Atal Tunnel Manali–Lahaul-Spiti (HP); Atal Setu Mumbai; Bharatmala 2017."},
  {k:"table", title:"Tunnels, bridges and expressways — which state?", head:["Road / tunnel / bridge","State / UT","Remember"], rows: T7.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"From where to where?", head:["Road","Runs","Note"], rows: T7R.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Road facts (as of 2025–26)", rows:[
    ["Golden Quadrilateral","Delhi–Mumbai–Chennai–Kolkata, about 5,846 km; phase 1 of the NHDP"],
    ["NHAI","National Highways Authority of India — Act of 1988, working since 1995"],
    ["Bharatmala Pariyojana","Approved in 2017; economic corridors, border and coastal roads"],
    ["PMGSY","Pradhan Mantri Gram Sadak Yojana, started 25 December 2000 — village roads"],
    ["Border Roads Organisation","Set up in 1960; built the Atal and Sela tunnels and Umling La road"],
    ["FASTag","Made compulsory at toll plazas in February 2021"],
    ["Road network","India has the world's second-largest road network (after the USA)"]
  ]},
  {k:"trick", h:"<b>“44 goes from Snow to Sea”</b> — Srinagar (snow) to Kanyakumari (sea). Golden Quadrilateral = the four old metros: <b>“D-M-C-K”</b>, <b>“Do Make Chai, Kaka”</b>. <b>Atal</b> has two: <b>Atal Tunnel</b> (Himachal) and <b>Atal Setu</b> (Mumbai)."},
  {k:"trap", h:"<b>Atal Tunnel</b> is in Himachal Pradesh, not J&K — <b>Chenani–Nashri</b> and <b>Sonamarg</b> are the J&K tunnels. <b>Bhupen Hazarika Setu</b> is over the <b>Lohit</b>; <b>Bogibeel</b> is over the <b>Brahmaputra</b>. <b>Mahatma Gandhi Setu</b> is in Patna, Bihar."}
], sum:["NH-44 (Srinagar–Kanyakumari) is India's longest national highway.","Golden Quadrilateral joins Delhi, Mumbai, Chennai and Kolkata; East–West corridor Porbandar to Silchar.","Atal Tunnel (HP, 2020) joins Manali and Lahaul-Spiti; Sela Tunnel (Arunachal, 2024); Chenani–Nashri (J&K, 2017).","Atal Setu (Mumbai, 2024) is India's longest sea bridge; Sudarshan Setu (Gujarat) its longest cable-stayed bridge.","Bharatmala 2017; PMGSY 2000; BRO 1960; Umling La (Ladakh) is the world's highest motorable road."]},

{id:"T8", heat:3, title:"Seaports", hi:"बंदरगाह", blocks:[
  {k:"hot", h:"India has <b>13 major ports</b> (as of 2026). Questions ask the <b>state</b> of a port and its special feature: <b>Kandla/Deendayal</b> (tidal), <b>Kolkata</b> (only riverine), <b>Visakhapatnam</b> (deepest land-locked), <b>Mumbai</b> (natural harbour), and the new <b>Vizhinjam</b> (Kerala) transshipment port."},
  {k:"story", h:"<p>India's coast is about 7,500 km long. On the <b>east</b> coast stand <b>Kolkata–Haldia</b> (on the Hooghly, the only river port), <b>Paradip</b>, <b>Visakhapatnam</b>, <b>Kamarajar (Ennore)</b>, <b>Chennai</b> and <b>V. O. Chidambaranar (Tuticorin)</b>. On the <b>west</b> coast are <b>Cochin</b>, <b>New Mangalore</b>, <b>Mormugao</b>, <b>Mumbai</b>, <b>Jawaharlal Nehru Port (Nhava Sheva)</b> and <b>Deendayal (Kandla)</b>. <b>Port Blair</b> became the 13th major port in 2010.</p><p><b>Kandla</b> was built after Partition to replace Karachi; it is a <b>tidal port</b>, renamed <b>Deendayal Port</b> in 2017. In May 2025 <b>Vizhinjam</b> near Thiruvananthapuram opened as India's first deep-water <b>transshipment</b> port, and a new major port at <b>Vadhavan</b> (Maharashtra) is being built.</p>", key:"13 major ports: 6 east + 6 west + Port Blair; Kandla = Deendayal (tidal); Kolkata only riverine; Vizhinjam 2025 transshipment."},
  {k:"table", title:"Ports and their states", head:["Port","State / UT","Remember"], rows: T8.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Which port is it?", head:["Clue","Port","Note"], rows: T8F.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Port facts (as of 2026)", rows:[
    ["Major ports","13 — under the Major Port Authorities Act, 2021"],
    ["East coast major ports","Kolkata, Paradip, Visakhapatnam, Kamarajar, Chennai, V. O. Chidambaranar"],
    ["West coast major ports","Cochin, New Mangalore, Mormugao, Mumbai, Jawaharlal Nehru, Deendayal"],
    ["Renamed","Kandla → Deendayal (2017); Kolkata → Syama Prasad Mookerjee (2020); Tuticorin → V. O. Chidambaranar (2011)"],
    ["Port Blair","Renamed Sri Vijaya Puram in 2024"],
    ["Sagarmala","Port-led development plan, approved in 2015"],
    ["Maritime India Vision","Plan for ports to 2030 (2021)"]
  ]},
  {k:"trick", h:"West coast top to bottom: <b>“Kids Must Join Mom's Nice Cake”</b> — Kandla, Mumbai, JNPT, Mormugao, New Mangalore, Cochin. East coast bottom to top: <b>“Tea, Coffee, Kamarajar's Vada Pao Kolkata”</b> — Tuticorin, Chennai, Kamarajar, Vizag, Paradip, Kolkata."},
  {k:"trap", h:"<b>Vizhinjam</b> is in <b>Kerala</b> (near Thiruvananthapuram), not Andhra. <b>Mundra</b> is a big private port, not a major port. <b>Kamarajar</b> (Ennore) and <b>Chennai</b> are two different major ports in the same city region."}
], sum:["India has 13 major ports: six on each coast plus Port Blair.","Deendayal (Kandla), Gujarat, is a tidal port; Kolkata is the only riverine major port.","Visakhapatnam has the deepest land-locked harbour; Mumbai is a natural harbour; Kamarajar was the first corporatised port.","Mormugao (Goa) and New Mangalore export iron ore; Paradip is in Odisha.","Vizhinjam (Kerala, 2025) is India's first deep-water transshipment port; Vadhavan (Maharashtra) is coming up."]},

{id:"T9", heat:2, title:"Airports and aviation", hi:"हवाई अड्डे और विमानन", blocks:[
  {k:"hot", h:"Airport names are a favourite: <b>“Lokpriya Gopinath Bordoloi Airport is in …?”</b> (Guwahati), <b>Biju Patnaik</b> (Bhubaneswar), <b>Birsa Munda</b> (Ranchi). Also firsts: <b>J. R. D. Tata's first flight (1932)</b>, <b>Cochin's solar airport</b>, <b>UDAN</b>."},
  {k:"story", h:"<p>Indian civil aviation began on <b>15 October 1932</b>, when <b>J. R. D. Tata</b> flew mail from <b>Karachi to Bombay</b> — the start of Tata Airlines, later <b>Air India</b>. Today the <b>Airports Authority of India</b> (1995) runs most airports, and <b>Indira Gandhi International (Delhi)</b> is the busiest.</p><p>Most airports are named after great Indians of their state: <b>Kempegowda</b> (Bengaluru's founder), <b>Lokpriya Gopinath Bordoloi</b> (Assam's first chief minister), <b>Biju Patnaik</b>, <b>Birsa Munda</b>, <b>Raja Bhoj</b>, <b>Devi Ahilyabai Holkar</b>. <b>Cochin</b> became the world's first fully <b>solar-powered</b> airport in 2015, and the <b>UDAN</b> scheme (first flight 2017, Shimla–Delhi) brought flights to small towns.</p>", key:"JRD Tata 1932 Karachi–Bombay; AAI 1995; Delhi IGI busiest; Cochin first solar airport; UDAN 2017."},
  {k:"table", title:"Airports and their cities", head:["Airport","City","Remember"], rows: T9.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Aviation facts (as of 2026)", rows:[
    ["First commercial flight","J. R. D. Tata, Karachi to Bombay (Juhu), 15 October 1932"],
    ["Air India","Nationalised 1953; returned to the Tata group in January 2022"],
    ["Airports Authority of India","Set up in 1995; HQ New Delhi"],
    ["DGCA","Directorate General of Civil Aviation — the safety regulator"],
    ["UDAN","Ude Desh ka Aam Nagrik — regional flights; first flight Shimla–Delhi, April 2017"],
    ["Highest airfield","Daulat Beg Oldie (Ladakh) — an Air Force landing ground"],
    ["New airports","Mopa (Goa, 2022), Ayodhya (2023), Navi Mumbai (inaugurated October 2025)"]
  ]},
  {k:"trick", h:"<b>“Gopinath Guards Guwahati, Biju Builds Bhubaneswar, Birsa Rules Ranchi”</b>. Two Rajas: <b>Raja Bhoj — Bhopal</b>, <b>Devi Ahilyabai — Indore</b> (both MP)."},
  {k:"trap", h:"<b>Chaudhary Charan Singh</b> airport is in <b>Lucknow</b>, not Meerut. <b>Jay Prakash Narayan</b> airport is Patna; <b>Birsa Munda</b> is Ranchi. Goa has two airports — <b>Dabolim</b> and <b>Mopa (Manohar)</b>."}
], sum:["J. R. D. Tata flew India's first commercial flight, Karachi–Bombay, on 15 October 1932.","Indira Gandhi International (Delhi) is India's busiest airport; AAI was set up in 1995.","Lokpriya Gopinath Bordoloi — Guwahati; Biju Patnaik — Bhubaneswar; Birsa Munda — Ranchi; Jay Prakash Narayan — Patna.","Raja Bhoj — Bhopal; Devi Ahilyabai Holkar — Indore; Chaudhary Charan Singh — Lucknow; Kempegowda — Bengaluru.","Cochin is the world's first fully solar-powered airport (2015); UDAN's first flight was Shimla–Delhi (2017)."]},

{id:"T10", heat:2, title:"Inland waterways and pipelines", hi:"अंतर्देशीय जलमार्ग और पाइपलाइन", blocks:[
  {k:"hot", h:"Learn the five old National Waterways: <b>NW-1</b> Ganga (Prayagraj–Haldia, longest), <b>NW-2</b> Brahmaputra (Sadiya–Dhubri), <b>NW-3</b> West Coast Canal (Kerala), <b>NW-4</b> Krishna–Godavari, <b>NW-5</b> Brahmani–Mahanadi. For pipelines: <b>HBJ</b> carries <b>gas</b>."},
  {k:"story", h:"<p>The <b>Inland Waterways Authority of India</b> (IWAI, 1986, HQ <b>Noida</b>) looks after river transport. <b>NW-1</b> on the Ganga–Bhagirathi–Hooghly, from <b>Prayagraj to Haldia</b> (about 1,620 km), is the longest; <b>NW-2</b> runs on the Brahmaputra from <b>Sadiya to Dhubri</b>. The <b>National Waterways Act, 2016</b> added 106 new waterways, making <b>111</b> in all.</p><p>Oil and gas also travel by <b>pipeline</b>. The <b>Hazira–Bijaipur–Jagdishpur (HBJ)</b> line, run by <b>GAIL</b>, carries natural gas from Gujarat to Uttar Pradesh. India's first long crude-oil pipeline joined <b>Naharkatiya</b> (Assam) to <b>Barauni</b> (Bihar). Across borders, the <b>Motihari–Amlekhganj</b> pipeline (2019) feeds Nepal and the <b>Friendship Pipeline</b> (2023) feeds Bangladesh.</p>", key:"NW-1 Prayagraj–Haldia (longest); NW-2 Sadiya–Dhubri; 111 NWs (2016 Act); IWAI Noida; HBJ = gas (GAIL)."},
  {k:"table", title:"The first five National Waterways", head:["Waterway","Route","Note"], rows: T10.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Pipelines and what they carry", head:["Pipeline","Carries","Note"], rows: T10P.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"Waterway facts (as of 2026)", rows:[
    ["IWAI","Inland Waterways Authority of India, set up 1986; HQ Noida"],
    ["National Waterways","111 under the National Waterways Act, 2016 (5 old + 106 new)"],
    ["First multimodal terminal on NW-1","Varanasi (2018); others at Sahibganj and Haldia"],
    ["Jal Marg Vikas Project","Upgrading NW-1 with World Bank help"],
    ["Ganga Vilas","River cruise from Varanasi to Dibrugarh, flagged off January 2023"],
    ["Kochi Water Metro","India's first water metro (2023)"]
  ]},
  {k:"trick", h:"<b>1-2-3-4-5 = Ganga, Brahmaputra, Kerala canal, Krishna–Godavari, Odisha canal</b> — <b>“Good Boys Keep Knowledge Open”</b>. <b>HBJ = Hot Breath of Jas (gas)</b>."},
  {k:"trap", h:"<b>NW-1</b> ends at <b>Haldia</b>, not Kolkata or Farakka. <b>NW-2</b> is the Brahmaputra (Sadiya–Dhubri), not the Barak. The <b>HBJ</b> pipeline carries <b>natural gas</b>, not crude oil."}
], sum:["NW-1: Ganga–Bhagirathi–Hooghly, Prayagraj to Haldia, about 1,620 km — the longest.","NW-2: Brahmaputra, Sadiya to Dhubri; NW-3: West Coast Canal, Kerala.","NW-4: Krishna–Godavari (Kakinada–Puducherry); NW-5: Brahmani, Mahanadi delta and East Coast Canal.","The 2016 Act made 111 National Waterways; IWAI (1986) is at Noida.","HBJ pipeline (GAIL) carries natural gas; Naharkatiya–Barauni was the first long crude pipeline."]}
);

pairQs("T7", T7, { q: t => `${t} is in which state/UT?`, rq: a => `Which of these roads, tunnels or bridges is in ${a}?` });
pairQs("T7", T7R, { q: t => `${t} — from where to where?`, rq: a => `Which road runs from ${a}?` });
pairQs("T8", T8, { q: t => `${t} is in which state/UT?`, rq: a => `Which port is in ${a}?` });
pairQs("T8", T8F, { q: t => `Which port fits the clue: ${t}?`, rq: a => `${a} port is known as/for:` });
pairQs("T9", T9, { q: t => `${t} is in which city?`, rq: a => `Which airport serves ${a}?` });
pairQs("T10", T10, { q: t => `${t} runs from:`, rq: a => `Which National Waterway is this: ${a}?` });
pairQs("T10", T10P, { q: t => `The ${t} carries:` });

QB.push(
["T7","Atal Tunnel connects which two places?",["Manali and Lahaul-Spiti","Srinagar and Leh","Jammu and Srinagar","Shimla and Kullu"],"Under the Rohtang Pass, Himachal Pradesh; opened 2020.","p","","","SSC CPO · 3 Oct 2023 (Shift 1)"],
["T7","The Golden Quadrilateral super highways connect Delhi, ____, Chennai and Mumbai.",["Kolkata","Nagpur","Jhansi","Dehradun"],"Phase 1 of the National Highways Development Project.","p","","","SSC GD · 24 Jan 2023 (Shift 1)"],
["T7","Which is the longest national highway in India?",["NH-44","NH-48","NH-27","NH-19"],"Srinagar to Kanyakumari.","p","","","SSC MTS · 21 Jul 2022 (Shift 1)"],
["T7","Bharatmala Pariyojana, approved in 2017, is about:",["Highways and economic corridors","Port development","Inland waterways","Regional airports"],"Sagarmala is for ports.","p"],
["T7","Sagarmala project is related to:",["Port-led development","Highway building","River linking","Rural electrification"],"Approved in 2015.","p"],
["T7","The Atal Tunnel was built by the:",["Border Roads Organisation","NHAI","Indian Railways","Konkan Railway Corporation"],"Opened on 3 October 2020.",""],
["T7","Pradhan Mantri Gram Sadak Yojana (PMGSY) was launched in:",["2000","1995","2005","2014"],"On 25 December 2000, for all-weather village roads.",""],
["T7","India's longest sea bridge, Atal Setu, links Mumbai with:",["Navi Mumbai (Nhava Sheva)","Thane","Alibag","Pune"],"Mumbai Trans Harbour Link, January 2024.","p"],
["T8","Deendayal Port is a ____ port located in Kandla, Gujarat.",["tidal","new","temporary","small"],"Ships wait for high tide in the Gulf of Kutch.","p","","","SSC GD · 9 Feb 2023 (Shift 3)"],
["T8","Which of the following is a tidal port?",["Kandla","Visakhapatnam","Chennai","Mormugao"],"Kandla (Deendayal) in the Gulf of Kutch.","p","","","SSC MTS · 7 Oct 2021 (Shift 1)"],
["T8","How many major ports does India have (as of 2026)?",["13","12","11","15"],"Six on each coast plus Port Blair; Vadhavan is being built.","p"],
["T8","Kandla Port was renamed in 2017 as:",["Deendayal Port","Syama Prasad Mookerjee Port","V. O. Chidambaranar Port","Kamarajar Port"],"After Pandit Deendayal Upadhyaya.","p"],
["T8","Vizhinjam International Seaport is near which city?",["Thiruvananthapuram","Visakhapatnam","Kochi","Chennai"],"Kerala; opened in May 2025.","p"],
["T8","Which port was built after Partition to replace Karachi?",["Kandla","Mumbai","Mormugao","Cochin"],"In the Gulf of Kutch, Gujarat.",""],
["T9","India's first commercial flight, flown by J. R. D. Tata in 1932, was from Karachi to:",["Bombay","Delhi","Calcutta","Madras"],"15 October 1932.","p"],
["T9","Which is the world's first fully solar-powered airport?",["Cochin International Airport","Kempegowda International Airport","Indira Gandhi International Airport","Rajiv Gandhi International Airport"],"Since 2015.","p"],
["T9","The UDAN regional connectivity scheme's first flight (2017) was between:",["Shimla and Delhi","Ayodhya and Delhi","Leh and Srinagar","Mysuru and Chennai"],"UDAN = Ude Desh ka Aam Nagrik.",""],
["T9","The Airports Authority of India was set up in:",["1995","1953","1972","2004"],"HQ New Delhi.",""],
["T9","Air India returned to the Tata group in:",["2022","2018","2020","2024"],"January 2022.","p"],
["T10","National Waterway 1 runs between:",["Prayagraj and Haldia","Sadiya and Dhubri","Kollam and Kottapuram","Kakinada and Puducherry"],"On the Ganga–Bhagirathi–Hooghly, about 1,620 km.","p"],
["T10","The headquarters of the Inland Waterways Authority of India is at:",["Noida","Kolkata","Patna","Guwahati"],"Set up in 1986.","p"],
["T10","How many National Waterways were declared under the National Waterways Act, 2016?",["111","106","101","120"],"5 existing plus 106 new.","p"],
["T10","The HBJ pipeline is run by:",["GAIL","ONGC","Indian Oil","Oil India"],"Hazira–Bijaipur–Jagdishpur.","p"],
["T10","National Waterway 2 is on which river?",["Brahmaputra","Ganga","Barak","Godavari"],"Sadiya to Dhubri, Assam.","p"]
);

LASTMOMENT.push(
{t:"Roads and tunnels", era:["it"], rows:[["NH-44","Srinagar–Kanyakumari"],["Golden Quadrilateral","Delhi–Mumbai–Chennai–Kolkata"],["East–West","Porbandar–Silchar"],["Atal Tunnel","Manali–Lahaul-Spiti (HP)"],["Sela Tunnel","Arunachal"],["Atal Setu","Mumbai sea bridge"],["Bharatmala","2017"],["Umling La","Ladakh"]]},
{t:"Ports", era:["it"], rows:[["Major ports","13"],["Tidal","Deendayal (Kandla)"],["Riverine","Kolkata"],["Deepest harbour","Visakhapatnam"],["First corporatised","Kamarajar (Ennore)"],["Transshipment","Vizhinjam (Kerala)"],["Paradip","Odisha"],["Mormugao","Goa"]]},
{t:"Waterways", era:["it"], rows:[["NW-1","Prayagraj–Haldia (Ganga)"],["NW-2","Sadiya–Dhubri (Brahmaputra)"],["NW-3","Kollam–Kottapuram (Kerala)"],["NW-4","Krishna–Godavari"],["NW-5","Brahmani–Mahanadi"],["Total","111 (2016 Act)"],["IWAI","Noida, 1986"],["HBJ","Gas, GAIL"]]}
);
TILES.push(["NH-44","Longest highway","it"],["13","Major ports","it"],["111","National Waterways","it"],["1932","First flight, JRD Tata","it"],["2020","Atal Tunnel","it"]);
