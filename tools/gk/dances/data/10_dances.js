/* Part 1 · L1 texts and terms; L2 the eight classical dances, their states and roots; L3 features, costume and music. */
const L1T = [
  ["Nritta","Pure dance — rhythm and steps with no story or meaning","Shown in items like the alarippu and jatiswaram of Bharatanatyam.","p"],
  ["Nritya","Expressive dance — steps with gestures and facial expression that carry meaning","Combines nritta with abhinaya.","p"],
  ["Natya","Dance-drama — a full story told with dance, speech and acting","Kathakali is the classic example.","p"],
  ["Tandava","Vigorous, masculine style of dance linked with Shiva","Shiva as Nataraja performs the cosmic tandava.","p"],
  ["Lasya","Graceful, feminine style of dance linked with Parvati","Mohiniyattam is almost wholly lasya.","p"],
  ["Mudra (hasta)","A symbolic hand gesture","Single-hand gestures are asamyukta; two-hand gestures are samyukta.","p"],
  ["Abhinaya","The art of expression — conveying meaning to the audience","Natya Shastra gives four kinds: angika, vachika, aharya and sattvika.","p"],
  ["Angika abhinaya","Expression through the body, limbs and gestures","",""],
  ["Vachika abhinaya","Expression through speech, song and recitation","",""],
  ["Aharya abhinaya","Expression through costume, make-up and jewellery","Kathakali's make-up is the best-known aharya.",""],
  ["Sattvika abhinaya","Expression of inner feelings — tears, trembling, sweat","",""],
  ["Rasa","The emotional flavour the audience enjoys","The Natya Shastra lists eight; shanta (peace) was added later as the ninth.","p"],
  ["Bhava","The emotion or mood shown by the performer","Bhava produces rasa.",""],
  ["Bols","Spoken rhythmic syllables recited before or during footwork","Typical of Kathak.",""]
];
const L1X = [
  ["Natya Shastra","Bharata Muni","The oldest Indian text on drama, dance and music; called the 'fifth Veda'.","p|SSC Stenographer · 17 Nov 2022 (Shift 2)"],
  ["Abhinaya Darpana","Nandikeshvara","'The Mirror of Gesture' — the main handbook of mudras for Bharatanatyam.","p"],
  ["Sangita Ratnakara","Sarangadeva","13th-century text on music and dance.",""],
  ["Gita Govinda","Jayadeva","12th-century poem of Radha and Krishna; its ashtapadis are danced in Odissi.","p"],
  ["Silappatikaram","Ilango Adigal","Tamil epic with early descriptions of dance (Madhavi, the dancer).",""],
  ["Abhinaya Chandrika","Maheshwar Mahapatra","An Odia text on Odissi technique.",""]
];
const L2S = [
  ["Bharatanatyam","Tamil Nadu","","p"],
  ["Kathak","Uttar Pradesh","The only classical dance of north India; grew in the courts of Lucknow and Jaipur.","p"],
  ["Kathakali","Kerala","","p|SSC MTS · 10 May 2023 (Shift 2)"],
  ["Mohiniyattam","Kerala","Kerala's second classical dance — the 'dance of the enchantress'.","p"],
  ["Kuchipudi","Andhra Pradesh","Named after Kuchipudi village in Krishna district.","p"],
  ["Odissi","Odisha","","p"],
  ["Manipuri","Manipur","","p"],
  ["Sattriya","Assam","Recognised by the Sangeet Natak Akademi in 2000 — the newest of the eight.","p|SSC MTS · 6 Jul 2022 (Shift 1)"],
  ["Chhau","Odisha, Jharkhand and West Bengal","In the Ministry of Culture's list (making 9), not in the Sangeet Natak Akademi's eight.","p"]
];
const L2R = [
  ["Bharatanatyam","Sadir (dasi attam) of the temple dancers","Renamed Bharatanatyam in the 1930s by E. Krishna Iyer and Rukmini Devi Arundale.","p"],
  ["Kathak","The kathakars — wandering storytellers of north India","'Katha kahe so kathak kahave' — the one who tells a story is a kathak.","p"],
  ["Kathakali","Ramanattam and Krishnanattam of Kerala's courts","Took shape in the 17th century.",""],
  ["Odissi","The Mahari temple dancers and Gotipua boy dancers","Oldest evidence in the Udayagiri caves near Bhubaneswar.","p"],
  ["Manipuri","Lai Haraoba, the festival of the forest gods","Ras Lila was added under King Bhagyachandra (18th century).","p"],
  ["Sattriya","The sattras (Vaishnava monasteries) founded by Sankaradeva","Sankaradeva created it in the 15th century with his Ankiya Naat plays.","p"],
  ["Kuchipudi","Bhagavata Mela dance-dramas performed by Brahmin men","Siddhendra Yogi gave it its form in the 17th century.","p"],
  ["Mohiniyattam","Devadasi dance revived at Kerala Kalamandalam","Patronised by Maharaja Swathi Thirunal; revived by the poet Vallathol in the 1930s.",""]
];
const L3F = [
  ["Tribhanga — the body bent in three places","Odissi","Head, torso and hips bent in opposite directions.","p"],
  ["Chauka — the square, Jagannath stance","Odissi","",""],
  ["Mangalacharan opens; moksha closes the recital","Odissi","",""],
  ["Araimandi — the half-sitting stance","Bharatanatyam","",""],
  ["Margam — alarippu, jatiswaram, varnam, padam, tillana","Bharatanatyam","The varnam is the centrepiece.","p"],
  ["Adavus — basic units of steps","Bharatanatyam","",""],
  ["Tarangam — dancing on the rim of a brass plate","Kuchipudi","Often with a pot of water on the head.","p"],
  ["Bhama Kalapam — the story of Satyabhama","Kuchipudi","Composed by Siddhendra Yogi.","p"],
  ["Chakkar — fast spins","Kathak","",""],
  ["Tatkar — rhythmic footwork with ankle bells","Kathak","",""],
  ["Gharanas of Lucknow, Jaipur and Banaras","Kathak","","p"],
  ["Thumri and tarana sung for the abhinaya","Kathak","",""],
  ["Green face make-up and huge headdresses; all-night performance","Kathakali","","p"],
  ["Eye movements trained to show emotions; language Manipravalam","Kathakali","Manipravalam — Malayalam mixed with Sanskrit.","p"],
  ["Swaying, rocking movement (andolika) in a white-and-gold saree","Mohiniyattam","Hair tied in a bun on the left side.","p"],
  ["Ras Lila of Krishna and the gopis","Manipuri","","p"],
  ["Pung cholom — dancers playing drums while leaping","Manipuri","",""],
  ["No ankle bells; soft, rounded movements and a stiff cylindrical skirt (potloi)","Manipuri","",""],
  ["Performed by monks (bhokots) in the sattras of Majuli island","Sattriya","",""],
  ["Mati akhora — basic body exercises","Sattriya","",""],
  ["Masks (in Seraikela and Purulia styles) and martial movements","Chhau","Mayurbhanj Chhau is danced without masks.","p"]
];
const L3K = [
  ["Pacha (green)","Noble heroes — kings and gods like Krishna and Arjuna","",""],
  ["Kathi (green with red marks)","Arrogant, villainous heroes like Ravana","",""],
  ["Thadi (bearded — red, white or black)","Wicked or superhuman characters (red beard: evil; white beard: Hanuman)","",""],
  ["Kari (black)","Demonesses and forest dwellers","",""],
  ["Minukku (soft yellow-orange)","Women and sages — gentle characters","",""]
];

LESSONS.push(
{id:"L1", heat:2, title:"Texts and terms of classical dance", hi:"शास्त्रीय नृत्य के ग्रंथ और शब्द", blocks:[
  {k:"hot", h:"Asked again and again: <b>who wrote the Natya Shastra</b> (Bharata Muni), the <b>Abhinaya Darpana</b> (Nandikeshvara), the meaning of <b>mudra</b>, <b>nritta / nritya / natya</b>, and <b>tandava vs lasya</b>."},
  {k:"story", h:"<p>Every Indian classical dance traces itself to one book: the <b>Natya Shastra</b> of <b>Bharata Muni</b>, written roughly 2,000 years ago. It covers drama, dance and music, and was so respected it was called the <b>fifth Veda</b>. Later, <b>Nandikeshvara</b> wrote the <b>Abhinaya Darpana</b> ('mirror of gesture'), still the handbook of hand gestures for Bharatanatyam dancers.</p><p>These texts split dance into three: <b>nritta</b> (pure rhythm), <b>nritya</b> (expression with meaning) and <b>natya</b> (drama). Expression — <b>abhinaya</b> — comes through the body, voice, costume and inner feeling, and its goal is <b>rasa</b>, the mood the audience tastes. Dance itself has two moods: Shiva's vigorous <b>tandava</b> and Parvati's graceful <b>lasya</b>.</p>", key:"Natya Shastra — Bharata Muni; Abhinaya Darpana — Nandikeshvara; nritta pure, nritya expressive, natya drama; tandava Shiva, lasya Parvati."},
  {k:"facts", title:"Classical dance in numbers (as of 2026)", rows:[
    ["Recognised by the Sangeet Natak Akademi","8 — Bharatanatyam, Kathak, Kathakali, Kuchipudi, Odissi, Manipuri, Mohiniyattam, Sattriya"],
    ["Ministry of Culture's list","9 — the eight plus Chhau"],
    ["Newest addition (SNA)","Sattriya, in 2000"],
    ["Kinds of abhinaya","4 — angika, vachika, aharya, sattvika"],
    ["Rasas","8 in the Natya Shastra; 9 (navarasa) with shanta added later"],
    ["States with two classical dances","Kerala — Kathakali and Mohiniyattam"]
  ]},
  {k:"table", title:"Key terms", head:["Term","Meaning","Note"], rows: L1T.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Texts and their authors", head:["Text","Author","Note"], rows: L1X.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Pure → Expressive → Drama”</b> follows the alphabet of the endings: nri<b>tta</b> (just steps), nri<b>tya</b> (steps + feeling), na<b>tya</b> (full play). <b>T</b>andava = <b>T</b>hunder (Shiva); <b>L</b>asya = <b>L</b>ovely (Parvati)."},
  {k:"trap", h:"The <b>Natya Shastra</b> is by <b>Bharata</b>, not Bharavi or Bhasa. The <b>Abhinaya Darpana</b> is by <b>Nandikeshvara</b>, not Bharata. A <b>mudra</b> is a hand gesture; <b>bhava</b> is the emotion shown and <b>rasa</b> the mood felt."}
], sum:["The Natya Shastra by Bharata Muni is the root text of Indian dance, drama and music — the 'fifth Veda'.","The Abhinaya Darpana by Nandikeshvara is the main handbook of mudras.","Nritta is pure dance, nritya is expressive dance, natya is dance-drama.","Tandava is vigorous (Shiva); lasya is graceful (Parvati).","The Sangeet Natak Akademi recognises 8 classical dances; the Ministry of Culture lists 9 with Chhau."]},

{id:"L2", heat:3, title:"The eight classical dances and their states", hi:"आठ शास्त्रीय नृत्य और उनके राज्य", blocks:[
  {k:"hot", h:"The single commonest question: <b>“X is a classical dance of which state?”</b> Also asked: which dance is the <b>newest</b> (Sattriya, 2000), which state has <b>two</b> (Kerala), and which dance grew out of <b>Sadir</b> or the <b>Gotipua</b> boys."},
  {k:"story", h:"<p>Picture a map of India with eight lights. In the south, <b>Tamil Nadu</b> gives <b>Bharatanatyam</b>, <b>Andhra Pradesh</b> gives <b>Kuchipudi</b>, and <b>Kerala</b> gives two — the dance-drama <b>Kathakali</b> and the gentle <b>Mohiniyattam</b>. In the north, <b>Kathak</b> of <b>Uttar Pradesh</b> is the only classical dance, born from storytellers and polished in the Mughal and Lucknow courts.</p><p>In the east, <b>Odissi</b> (Odisha) is carved on the walls of Konark, <b>Manipuri</b> (Manipur) dances Krishna's Ras Lila, and <b>Sattriya</b> (Assam), created by the saint <b>Sankaradeva</b> in the 15th century, became the eighth in <b>2000</b>. The Ministry of Culture also counts <b>Chhau</b>, the masked martial dance of Odisha, Jharkhand and West Bengal.</p>", key:"Tamil Nadu — Bharatanatyam; AP — Kuchipudi; Kerala — Kathakali + Mohiniyattam; UP — Kathak; Odisha — Odissi; Manipur — Manipuri; Assam — Sattriya."},
  {k:"table", title:"Dance ↔ state", head:["Dance","State","Note"], rows: L2S.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Where each dance came from", head:["Dance","Grew out of","Note"], rows: L2R.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"South to north-east in one line — <b>“Bharat Kuchh Kathakali Mohini; Kathak Odissi Manipuri Sattriya”</b>: TN, AP, Kerala, Kerala; UP, Odisha, Manipur, Assam. Kerala is the only state with <b>two</b>."},
  {k:"trap", h:"<b>Kuchipudi</b> is from <b>Andhra Pradesh</b>, not Karnataka or Tamil Nadu. <b>Sattriya</b> is classical; <b>Bihu</b> (also Assam) is folk. <b>Chhau</b> is in the Ministry of Culture's list but <b>not</b> one of the Sangeet Natak Akademi's eight."}
], sum:["Bharatanatyam — Tamil Nadu; Kuchipudi — Andhra Pradesh.","Kathakali and Mohiniyattam — Kerala, the only state with two classical dances.","Kathak — Uttar Pradesh, the only classical dance of north India.","Odissi — Odisha; Manipuri — Manipur; Sattriya — Assam (recognised in 2000).","Chhau (Odisha, Jharkhand, West Bengal) is the ninth in the Ministry of Culture's list."]},

{id:"L3", heat:3, title:"Features, costume and music", hi:"विशेषताएँ, वेशभूषा और संगीत", blocks:[
  {k:"hot", h:"SSC loves a <b>feature → dance</b> question: tribhanga (Odissi), tarangam on a brass plate (Kuchipudi), chakkars (Kathak), green make-up (Kathakali), Ras Lila (Manipuri), monasteries of Majuli (Sattriya)."},
  {k:"story", h:"<p>Each dance has a signature you can spot in a second. An <b>Odissi</b> dancer stands in the <b>tribhanga</b>, bent in three places like a temple statue. A <b>Bharatanatyam</b> dancer sinks into <b>araimandi</b>, knees out. A <b>Kuchipudi</b> dancer balances on the rim of a <b>brass plate</b>. A <b>Kathak</b> dancer whirls in <b>chakkars</b> while ankle bells ring out the <b>tatkar</b>.</p><p>Kerala's <b>Kathakali</b> actors wear <b>green faces</b> and giant crowns, and tell epics all night to the <b>chenda</b> drum. <b>Mohiniyattam</b> sways like palm trees in a white-and-gold saree. <b>Manipuri</b> dancers wear no ankle bells and a stiff round skirt, and <b>Sattriya</b> was danced for centuries only by monks in Assam's sattras.</p>", key:"Tribhanga — Odissi; araimandi — Bharatanatyam; brass plate — Kuchipudi; chakkar — Kathak; green face — Kathakali; no bells — Manipuri."},
  {k:"facts", title:"Music behind each dance", rows:[
    ["Carnatic music","Bharatanatyam, Kuchipudi, Mohiniyattam"],
    ["Sopana style (Kerala)","Kathakali — with chenda, maddalam, chengila and elathalam"],
    ["Hindustani music","Kathak — tabla, pakhawaj, sarangi"],
    ["Odissi music","Odissi — mardala drum; Gita Govinda songs"],
    ["Manipuri sankirtana","Manipuri — pung (drum) and kartal"],
    ["Borgeet","Sattriya — khol drum, cymbals and flute; songs of Sankaradeva"],
    ["Bharatanatyam's conductor","The nattuvanar, who keeps time with small cymbals"]
  ]},
  {k:"table", title:"Spot the dance", head:["Feature","Dance","Note"], rows: L3F.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"Kathakali make-up (vesham)", head:["Make-up","Character type","Note"], rows: L3K.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Three bends, square stand — Odissi”</b> (tribhanga, chauka). <b>“Plate and pot — Kuchipudi”</b>. <b>“Spin and stamp — Kathak”</b>. <b>“Green and grand — Kathakali”</b>. <b>“No bells, round skirt — Manipuri”</b>."},
  {k:"trap", h:"<b>Kathakali</b> was traditionally danced only by <b>men</b> (women's roles too); <b>Mohiniyattam</b> by women. <b>Manipuri</b> uses <b>no</b> ghungroo. The <b>tribhanga</b> is Odissi, not Bharatanatyam. <b>Pacha</b> (green) means a <b>hero</b>, <b>kathi</b> a villain."}
], sum:["Odissi — tribhanga and chauka; Bharatanatyam — araimandi and the margam ending in tillana.","Kuchipudi — tarangam on a brass plate; Kathak — chakkars, tatkar and gharanas.","Kathakali — green make-up, chenda drum, Manipravalam songs, traditionally all men.","Mohiniyattam — swaying lasya in a white-and-gold saree; Manipuri — Ras Lila, no ankle bells.","Sattriya — monks of the Majuli sattras, borgeet songs; Chhau — masks and martial moves."]}
);

pairQs("L1", L1T, { q: t => `In classical dance, what does '${t}' mean?`, rq: a => `Which term means: ${a.charAt(0).toLowerCase() + a.slice(1)}?` });
pairQs("L1", L1X, { q: t => `Who wrote the ${t}?`, rq: a => `Which text was written by ${a}?` });
pairQs("L2", L2S, { q: t => `${t} is a classical dance of which state?`, rq: a => `Which classical dance belongs to ${a}?` });
pairQs("L2", L2R, { q: t => `${t} grew out of:`, rq: a => `Which classical dance grew out of ${a.replace(/^The /, "the ")}?` });
pairQs("L3", L3F, { q: t => `${t} — which dance?` });
pairQs("L3", L3K, { q: t => `In Kathakali, the '${t}' make-up is used for:`, rq: a => `Which Kathakali make-up is used for: ${a.charAt(0).toLowerCase() + a.slice(1)}?` });

QB.push(
["L1","'Abhinaya Darpana', the title of Nandikeshvara's text, means:",["The Mirror of Gesture","The Lamp of Dance","The Ocean of Music","The Garland of Rasas"],"Darpana = mirror.",""],
["L1","How many rasas does the Natya Shastra itself describe?",["Eight","Nine","Six","Twelve"],"Shanta was added later, making nine.",""],
["L2","Kuchipudi takes its name from a village in which district of Andhra Pradesh?",["Krishna","Guntur","Chittoor","Kurnool"],"Kuchipudi village is near Machilipatnam.","p"],
["L2","The earliest sculptural evidence of Odissi is found in the:",["Udayagiri caves","Ajanta caves","Elephanta caves","Badami caves"],"Near Bhubaneswar, from about the 2nd century BCE.",""],
["L3","Mohiniyattam dancers tie their hair in a bun on which side of the head?",["Left","Right","Top","Back, hanging loose"],"Decorated with jasmine flowers.",""],
["L3","Which drum mainly accompanies Odissi?",["Mardala","Chenda","Pung","Khol"],"The mardala is Odisha's barrel drum.",""],
["L3","Which of these classical dances is set to Hindustani (north Indian) music?",["Kathak","Bharatanatyam","Kuchipudi","Mohiniyattam"],"The other three use Carnatic music.","p"],
["L1","How many classical dances are recognised by the Sangeet Natak Akademi?",["Eight","Six","Nine","Eleven"],"Bharatanatyam, Kathak, Kathakali, Kuchipudi, Odissi, Manipuri, Mohiniyattam, Sattriya.","p"],
["L1","Which dance is in the Ministry of Culture's list of classical dances but not in the Sangeet Natak Akademi's eight?",["Chhau","Yakshagana","Bihu","Garba"],"That makes nine in the Ministry's list.","p"],
["L1","The Natya Shastra is often called the:",["Fifth Veda","Sixth Upanishad","Second Purana","Fourth Smriti"],"It was meant to be a Veda open to everyone.",""],
["L1","Which of these is NOT one of the four kinds of abhinaya?",["Mudrika","Angika","Aharya","Sattvika"],"The four are angika, vachika, aharya and sattvika.","p"],
["L1","The ninth rasa, added after the Natya Shastra's eight, is:",["Shanta (peace)","Shringara (love)","Veera (heroism)","Karuna (compassion)"],"Hence navarasa — nine rasas.",""],
["L1","Hand gestures made with both hands together are called:",["Samyukta hastas","Asamyukta hastas","Adavus","Bols"],"Single-hand gestures are asamyukta.",""],
["L2","Which dance was the latest to be recognised as classical by the Sangeet Natak Akademi?",["Sattriya","Mohiniyattam","Manipuri","Kuchipudi"],"Recognised on 15 November 2000.","p"],
["L2","Which state has two classical dances in the Sangeet Natak Akademi's list?",["Kerala","Tamil Nadu","Odisha","Assam"],"Kathakali and Mohiniyattam.","p"],
["L2","Who created the Sattriya dance in the 15th century?",["Srimanta Sankaradeva","Siddhendra Yogi","Jayadeva","Chaitanya Mahaprabhu"],"As part of his Vaishnava movement in Assam.","p"],
["L2","Who gave Kuchipudi its form in the 17th century?",["Siddhendra Yogi","Sankaradeva","Swathi Thirunal","Vallathol Narayana Menon"],"He composed the Bhama Kalapam.","p"],
["L2","Which is the only classical dance that belongs to north India?",["Kathak","Odissi","Manipuri","Sattriya"],"From Uttar Pradesh.",""],
["L2","The Chhau dance has three styles — Seraikela, Purulia and:",["Mayurbhanj","Puri","Ranchi","Malda"],"Seraikela (Jharkhand), Purulia (West Bengal), Mayurbhanj (Odisha).","p"],
["L2","Chhau was put on UNESCO's list of the Intangible Cultural Heritage of Humanity in:",["2010","2001","2016","2005"],"Along with Kalbelia and Mudiyettu.",""],
["L3","In which language are Kathakali songs traditionally sung?",["Manipravalam (Sanskritised Malayalam)","Tamil","Pali","Kannada"],"Malayalam mixed with Sanskrit.","p"],
["L3","Which drum is the main percussion of Kathakali?",["Chenda","Mridangam","Pung","Khol"],"Played with sticks, along with the maddalam.",""],
["L3","Which classical dance is performed WITHOUT ankle bells (ghungroo)?",["Manipuri","Kathak","Bharatanatyam","Odissi"],"Manipuri movements are soft and rounded.","p"],
["L3","Traditionally, all roles in Kathakali — including women's — were played by:",["Men","Women","Children","Temple priests only"],"Women began learning it only in the 20th century.",""],
["L3","Which is the final, fast pure-dance item of a Bharatanatyam recital?",["Tillana","Alarippu","Varnam","Padam"],"The alarippu opens; the varnam is the centrepiece.",""],
["L3","Who conducts a Bharatanatyam performance with small cymbals?",["The nattuvanar","The bhagavatar","The sutradhar","The gayan"],"Nattuvangam = the cymbal rhythm.",""],
["L3","The khol drum and borgeet songs accompany which dance?",["Sattriya","Odissi","Mohiniyattam","Kuchipudi"],"Borgeets were composed by Sankaradeva and Madhavadeva.",""]
);

LASTMOMENT.push(
{t:"Dance ↔ state", era:["cd"], rows:[["Bharatanatyam","Tamil Nadu"],["Kuchipudi","Andhra Pradesh"],["Kathakali, Mohiniyattam","Kerala"],["Kathak","Uttar Pradesh"],["Odissi","Odisha"],["Manipuri","Manipur"],["Sattriya","Assam (2000)"],["Chhau","Odisha, Jharkhand, WB"]]},
{t:"Texts and terms", era:["cd"], rows:[["Natya Shastra","Bharata Muni"],["Abhinaya Darpana","Nandikeshvara"],["Gita Govinda","Jayadeva"],["Nritta","Pure dance"],["Nritya","Expressive dance"],["Natya","Dance-drama"],["Tandava / lasya","Shiva / Parvati"],["Mudra","Hand gesture"]]},
{t:"Spot the dance", era:["cd"], rows:[["Tribhanga","Odissi"],["Araimandi","Bharatanatyam"],["Brass plate","Kuchipudi"],["Chakkar","Kathak"],["Green face","Kathakali"],["No ghungroo","Manipuri"],["Majuli monks","Sattriya"],["Masks","Chhau"]]}
);
TILES.push(["8","Classical dances (SNA)","cd"],["9","With Chhau (Ministry of Culture)","cd"],["2000","Sattriya recognised","cd"],["4","Kinds of abhinaya","cd"]);
