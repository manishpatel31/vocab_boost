/* Part 1 · M1 the four classes of instruments (Natya Shastra); M2 string maestros; M3 wind and percussion maestros. */
const M1 = [
  ["Sitar","Tata (string)","Plucked; long neck with movable frets.","p"],
  ["Sarod","Tata (string)","Plucked; fretless metal fingerboard.","p"],
  ["Veena","Tata (string)","The Saraswati veena of Carnatic music.","p"],
  ["Santoor","Tata (string)","About 100 strings struck with light wooden mallets.","p"],
  ["Violin","Tata (string)","Bowed; a key accompanying instrument in Carnatic music.",""],
  ["Sarangi","Tata (string)","Bowed; said to have the sound of a hundred colours (sau rang).","p"],
  ["Tanpura","Tata (string)","Gives the steady drone behind a singer.",""],
  ["Ektara","Tata (string)","A one-string instrument of wandering singers like the Bauls.",""],
  ["Rabab","Tata (string)","Plucked; an ancestor of the sarod.",""],
  ["Bansuri (flute)","Sushira (wind)","A bamboo flute — Krishna's instrument.","p"],
  ["Shehnai","Sushira (wind)","Double-reed pipe played at weddings and temples.","p"],
  ["Nadaswaram","Sushira (wind)","The big temple pipe of Tamil Nadu.",""],
  ["Harmonium","Sushira (wind)","Free-reed keyboard pumped by hand; came from Europe in the 19th century.",""],
  ["Shankh (conch)","Sushira (wind)","",""],
  ["Pungi (been)","Sushira (wind)","The snake charmer's gourd pipe.",""],
  ["Tabla","Avanaddha (membrane drum)","A pair: the dayan (right) and bayan (left).","p"],
  ["Mridangam","Avanaddha (membrane drum)","The main drum of Carnatic music.","p"],
  ["Pakhawaj","Avanaddha (membrane drum)","Barrel drum that accompanies Dhrupad.",""],
  ["Dholak","Avanaddha (membrane drum)","",""],
  ["Damaru","Avanaddha (membrane drum)","Small hourglass drum linked with Shiva.",""],
  ["Chenda","Avanaddha (membrane drum)","Loud cylinder drum of Kerala.",""],
  ["Kanjira","Avanaddha (membrane drum)","A small frame drum with one jingle; Carnatic.",""],
  ["Nagara","Avanaddha (membrane drum)","Big kettledrum played with sticks.",""],
  ["Ghatam","Ghana (solid)","A clay pot played in Carnatic concerts.","p"],
  ["Jaltarang","Ghana (solid)","Porcelain bowls filled with water and struck.","p"],
  ["Manjira","Ghana (solid)","Small hand cymbals.",""],
  ["Kartal","Ghana (solid)","Wooden clappers with jingles.",""],
  ["Ghungroo","Ghana (solid)","Ankle bells worn by dancers.",""],
  ["Morchang","Ghana (solid)","A metal jaw harp of Rajasthan.",""]
];
const M1W = [
  ["Tata (string)","Chordophone","Sound from a vibrating string.",""],
  ["Sushira (wind)","Aerophone","Sound from vibrating air.",""],
  ["Avanaddha (membrane drum)","Membranophone","Sound from a stretched skin.",""],
  ["Ghana (solid)","Idiophone","Sound from the solid body itself.",""]
];
const M2 = [
  ["Ravi Shankar","Sitar","Taught George Harrison; Bharat Ratna 1999.","p|SSC MTS · 25 Jul 2022 (Shift 1)"],
  ["Vilayat Khan","Sitar","Imdadkhani (Etawah) gharana.","p"],
  ["Nikhil Banerjee","Sitar","Maihar gharana.",""],
  ["Anoushka Shankar","Sitar","Daughter of Ravi Shankar.",""],
  ["Shahid Parvez","Sitar","",""],
  ["Amjad Ali Khan","Sarod","Called 'Sarod Samrat'; Senia-Bangash gharana.","p|SSC MTS · 18 Jul 2022 (Shift 1)"],
  ["Ali Akbar Khan","Sarod","Son of Allauddin Khan; Maihar gharana.","p"],
  ["Allauddin Khan","Sarod","Founder of the Maihar gharana; guru of Ravi Shankar.","p"],
  ["Buddhadev Dasgupta","Sarod","",""],
  ["Shivkumar Sharma","Santoor","Brought the Kashmiri santoor to the classical stage.","p|SSC CGL · 11 Sep 2016 (Shift 2)"],
  ["Bhajan Sopori","Santoor","From Kashmir — the 'Saint of the Santoor'.",""],
  ["Rahul Sharma","Santoor","Son of Shivkumar Sharma.",""],
  ["Tarun Bhattacharya","Santoor","",""],
  ["L. Subramaniam","Violin","Carnatic and Western; Padma Vibhushan 2025.","p"],
  ["N. Rajam","Violin","Hindustani violinist; Padma Vibhushan 2026.","p"],
  ["Lalgudi Jayaraman","Violin","Carnatic.",""],
  ["M. S. Gopalakrishnan","Violin","",""],
  ["Kunnakudi Vaidyanathan","Violin","",""],
  ["Ram Narayan","Sarangi","Made the sarangi a solo concert instrument.","p"],
  ["Sultan Khan","Sarangi","",""],
  ["Asad Ali Khan","Rudra veena","A rare Dhrupad master of the rudra veena.","p"],
  ["Zia Mohiuddin Dagar","Rudra veena","",""],
  ["S. Balachander","Veena","Carnatic veena.",""],
  ["E. Gayathri","Veena","",""],
  ["Chitti Babu","Veena","",""],
  ["Vishwa Mohan Bhatt","Mohan veena","Invented it from a guitar; Grammy 1994.","p"],
  ["Annapurna Devi","Surbahar","Daughter of Allauddin Khan; bass sitar.",""],
  ["U. Srinivas","Mandolin","Brought the mandolin into Carnatic music.","p"],
  ["Brij Bhushan Kabra","Guitar","Slide guitar in Hindustani music; 'Call of the Valley' (1967).",""]
];
const M3 = [
  ["Bismillah Khan","Shehnai","Played at the Red Fort on 15 August 1947; Bharat Ratna 2001.","p|SSC MTS · 19 Jul 2022 (Shift 1)"],
  ["Ali Ahmad Hussain Khan","Shehnai","",""],
  ["Hariprasad Chaurasia","Flute","With Shivkumar Sharma he made the film-music duo Shiv–Hari.","p|SSC MTS · 20 Jul 2022 (Shift 3)"],
  ["Pannalal Ghosh","Flute","Made the bansuri a classical concert instrument.","p"],
  ["T. R. Mahalingam","Flute","Carnatic flute ('Mali').",""],
  ["N. Ramani","Flute","Carnatic.",""],
  ["Ronu Majumdar","Flute","",""],
  ["Rakesh Chaurasia","Flute","Nephew of Hariprasad Chaurasia; Grammy 2024.",""],
  ["Zakir Hussain","Tabla","Three Grammys in one night (2024); died December 2024.","p|SSC CHSL · 15 Mar 2023 (Shift 4)"],
  ["Alla Rakha","Tabla","Father of Zakir Hussain; Punjab gharana.","p"],
  ["Kishan Maharaj","Tabla","Benares gharana.",""],
  ["Samta Prasad","Tabla","Benares gharana.",""],
  ["Anindo Chatterjee","Tabla","",""],
  ["Palghat Mani Iyer","Mridangam","A legend of the Carnatic mridangam.","p"],
  ["Umayalpuram K. Sivaraman","Mridangam","",""],
  ["Karaikudi Mani","Mridangam","",""],
  ["Vikku Vinayakram","Ghatam","Took the ghatam to the world with Shakti.","p"],
  ["V. Selvaganesh","Kanjira","Son of Vikku Vinayakram; Grammy 2024 with Shakti.",""],
  ["Pagal Das","Pakhawaj","",""],
  ["Kadri Gopalnath","Saxophone","Played Carnatic music on the saxophone.","p"],
  ["T. N. Rajarathnam Pillai","Nadaswaram","",""],
  ["Sheikh Chinna Moulana","Nadaswaram","",""],
  ["Tulsidas Borkar","Harmonium","",""]
];

LESSONS.push(
{id:"M1", heat:2, title:"How instruments are classified", hi:"वाद्य यंत्रों का वर्गीकरण", blocks:[
  {k:"hot", h:"Asked often: <b>“Tabla / ghatam / shehnai belongs to which category?”</b> — the four classes of the <b>Natya Shastra</b>: <b>Tata</b> (string), <b>Sushira</b> (wind), <b>Avanaddha</b> (skin drum) and <b>Ghana</b> (solid)."},
  {k:"story", h:"<p>About two thousand years ago <b>Bharata Muni</b> wrote the <b>Natya Shastra</b>, a book on drama, dance and music. It sorts every instrument by <b>what vibrates</b>. If a <b>string</b> vibrates, it is <b>tata vadya</b> — sitar, veena, sarod, violin, even the santoor. If <b>air</b> vibrates, it is <b>sushira vadya</b> — flute, shehnai, nadaswaram.</p><p>If a <b>stretched skin</b> vibrates, it is <b>avanaddha vadya</b> — tabla, mridangam, dholak. If the <b>solid body itself</b> rings when struck, it is <b>ghana vadya</b> — ghatam, manjira, jaltarang. The modern Western system (Hornbostel–Sachs) uses the same four ideas: chordophone, aerophone, membranophone, idiophone.</p>", key:"String = tata; wind = sushira; skin drum = avanaddha; solid = ghana. Ask: what vibrates?"},
  {k:"table", title:"Instrument → class", head:["Instrument","Class","Note"], rows: M1.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"The four classes in Western terms", head:["Indian class","Western name","How it sounds"], rows: M1W.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“TSAG — Tie, Sing, Add, Gong”</b>: <b>T</b>ata = tied strings, <b>S</b>ushira = sing with breath, <b>A</b>vanaddha = add a skin, <b>G</b>hana = gong (solid)."},
  {k:"trap", h:"The <b>santoor</b> is struck with mallets but is <b>tata</b> (its strings vibrate). The <b>ghatam</b> is a pot drum but is <b>ghana</b> (no skin), while the <b>kanjira</b> has a skin, so it is <b>avanaddha</b>. The <b>jaltarang</b> uses water but is <b>ghana</b>, not wind."}
], sum:["The Natya Shastra of Bharata Muni sorts instruments into four classes.","Tata = string (sitar, veena, sarod, santoor, violin).","Sushira = wind (flute, shehnai, nadaswaram, harmonium).","Avanaddha = skin drum (tabla, mridangam, pakhawaj, dholak).","Ghana = solid (ghatam, jaltarang, manjira, kartal)."]},

{id:"M2", heat:3, title:"String maestros: sitar, sarod, santoor, violin", hi:"तंतु वाद्य के उस्ताद", blocks:[
  {k:"hot", h:"Among the commonest GK questions in SSC: <b>“X is associated with which instrument?”</b> Ravi Shankar–sitar, Amjad Ali Khan–sarod, Shivkumar Sharma–santoor and L. Subramaniam–violin come up again and again."},
  {k:"story", h:"<p>In 1918 <b>Allauddin Khan</b> settled in the little town of <b>Maihar</b> (Madhya Pradesh). His pupils changed Indian music: his son <b>Ali Akbar Khan</b> (sarod), his daughter <b>Annapurna Devi</b> (surbahar) and <b>Ravi Shankar</b> (sitar), who later taught the Beatle George Harrison and made the sitar famous worldwide. Ravi Shankar's great rival on the sitar was <b>Vilayat Khan</b>.</p><p>Other strings have their own heroes. <b>Amjad Ali Khan</b> is the 'Sarod Samrat'. <b>Shivkumar Sharma</b> took the Kashmiri <b>santoor</b> to concert halls. <b>Ram Narayan</b> made the <b>sarangi</b> a solo instrument. <b>L. Subramaniam</b> and <b>N. Rajam</b> play the <b>violin</b>, and <b>Vishwa Mohan Bhatt</b> invented the <b>Mohan veena</b>.</p>", key:"Sitar — Ravi Shankar, Vilayat Khan; sarod — Amjad Ali Khan, Ali Akbar Khan; santoor — Shivkumar Sharma; violin — L. Subramaniam, N. Rajam; sarangi — Ram Narayan."},
  {k:"table", title:"String maestros", head:["Maestro","Instrument","Remember"], rows: M2.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Ravi's Sitar, Amjad's Sarod, Shiv's Santoor”</b> — three S-instruments. <b>“Ram's Sarangi”</b> and <b>“Subramaniam's Strings”</b> (violin)."},
  {k:"trap", h:"<b>Amjad Ali Khan</b> plays the <b>sarod</b>, <b>Asad Ali Khan</b> the <b>rudra veena</b> — similar names. <b>N. Rajam</b> plays violin in the <b>Hindustani</b> style, though she is from the south. <b>Rahul Sharma</b> (santoor) is Shivkumar's son; <b>Rakesh Chaurasia</b> (flute) is Hariprasad's nephew."}
], sum:["Sitar: Ravi Shankar, Vilayat Khan, Nikhil Banerjee, Anoushka Shankar.","Sarod: Amjad Ali Khan, Ali Akbar Khan, Allauddin Khan.","Santoor: Shivkumar Sharma, Bhajan Sopori, Rahul Sharma.","Violin: L. Subramaniam, N. Rajam, Lalgudi Jayaraman; sarangi: Ram Narayan, Sultan Khan.","Mohan veena: Vishwa Mohan Bhatt; mandolin: U. Srinivas; rudra veena: Asad Ali Khan."]},

{id:"M3", heat:3, title:"Wind and percussion maestros", hi:"सुषिर और ताल वाद्य के उस्ताद", blocks:[
  {k:"hot", h:"Equally common: <b>Bismillah Khan–shehnai</b>, <b>Hariprasad Chaurasia–flute</b>, <b>Zakir Hussain–tabla</b>. Carnatic names also appear: Palghat Mani Iyer (mridangam), Vikku Vinayakram (ghatam), Kadri Gopalnath (saxophone)."},
  {k:"story", h:"<p>On the night of <b>15 August 1947</b>, <b>Bismillah Khan</b> of Varanasi played the <b>shehnai</b> at the Red Fort to welcome freedom. He took a wedding instrument to the concert stage and got the <b>Bharat Ratna in 2001</b>. <b>Pannalal Ghosh</b> did the same for the bamboo <b>flute</b>, and <b>Hariprasad Chaurasia</b> made it loved everywhere.</p><p>For rhythm, <b>Alla Rakha</b> and his son <b>Zakir Hussain</b> made the <b>tabla</b> a world instrument; Zakir won <b>three Grammys in one night in 2024</b> and died in December 2024. In the south, <b>Palghat Mani Iyer</b> ruled the <b>mridangam</b> and <b>Vikku Vinayakram</b> the <b>ghatam</b>, while <b>Kadri Gopalnath</b> played Carnatic music on a Western <b>saxophone</b>.</p>", key:"Shehnai — Bismillah Khan; flute — Hariprasad Chaurasia, Pannalal Ghosh; tabla — Zakir Hussain, Alla Rakha; mridangam — Palghat Mani Iyer; ghatam — Vikku Vinayakram."},
  {k:"table", title:"Wind and percussion maestros", head:["Maestro","Instrument","Remember"], rows: M3.map(r => [r[0], r[1], r[2]])},
  {k:"trick", h:"<b>“Bismillah blows, Hari whistles, Zakir taps”</b> — shehnai, flute, tabla. <b>“Vikku's pot”</b> = ghatam; <b>“Kadri's sax”</b>."},
  {k:"trap", h:"<b>Zakir Hussain</b> the tabla player is not the former President <b>Zakir Husain</b>. <b>Alla Rakha</b> is the tabla player; <b>A. R. Rahman</b> is a composer. The <b>nadaswaram</b> (Tamil Nadu) is a wind instrument like the shehnai, played with the <b>thavil</b> drum."}
], sum:["Shehnai: Bismillah Khan (Bharat Ratna 2001), Ali Ahmad Hussain Khan.","Flute: Hariprasad Chaurasia, Pannalal Ghosh, T. R. Mahalingam, N. Ramani.","Tabla: Zakir Hussain, Alla Rakha, Kishan Maharaj, Samta Prasad.","Mridangam: Palghat Mani Iyer, Umayalpuram K. Sivaraman; ghatam: Vikku Vinayakram.","Saxophone: Kadri Gopalnath; nadaswaram: T. N. Rajarathnam Pillai; pakhawaj: Pagal Das."]}
);

pairQs("M1", M1, { q: t => `The ${t[0].toLowerCase() + t.slice(1)} belongs to which class of instruments?` });
pairQs("M1", M1W, { q: t => `The Indian class ${t} matches which Western group?`, rq: a => `Which Indian class of instruments is called ${a} in the West?` });
pairQs("M2", M2, { q: t => `${t} is associated with which instrument?`, rq: a => `Who is famous for playing the ${a.toLowerCase()}?`, extra: ["Shehnai","Tabla","Flute"] });
pairQs("M3", M3, { q: t => `${t} is associated with which instrument?`, rq: a => `Who is famous for playing the ${a.toLowerCase()}?`, extra: ["Sitar","Sarod","Santoor"] });

QB.push(
["M1","The four-fold classification of Indian instruments comes from:",["Natya Shastra","Sangita Ratnakara","Gita Govinda","Ain-i-Akbari"],"Written by Bharata Muni.","p"],
["M1","Who wrote the Natya Shastra?",["Bharata Muni","Sarngadeva","Kalidasa","Amir Khusrau"],"The oldest Indian text on drama, dance and music.","p"],
["M1","Avanaddha vadya are instruments in which sound comes from:",["A stretched skin (membrane)","Strings","Blown air","A solid body"],"Tabla, mridangam, dholak.","p"],
["M1","Ghana vadya are:",["Solid instruments struck to make sound","Bowed string instruments","Wind instruments","Instruments with a skin"],"Ghatam, manjira, jaltarang.","p"],
["M1","Which of these is a sushira vadya?",["Nadaswaram","Mridangam","Veena","Ghatam"],"Sushira = wind.",""],
["M1","Which of these is NOT a string (tata) instrument?",["Pakhawaj","Sarangi","Santoor","Sarod"],"The pakhawaj is a skin drum (avanaddha).",""],
["M2","Who taught the sitar to Beatle George Harrison?",["Ravi Shankar","Vilayat Khan","Nikhil Banerjee","Ali Akbar Khan"],"In the 1960s.","p"],
["M2","Which musician is known as 'Sarod Samrat'?",["Amjad Ali Khan","Ali Akbar Khan","Buddhadev Dasgupta","Allauddin Khan"],"Amjad Ali Khan of the Bangash gharana is known as 'Sarod Samrat'.",""],
["M2","The Maihar gharana was founded by:",["Allauddin Khan","Ravi Shankar","Vilayat Khan","Amjad Ali Khan"],"At Maihar, Madhya Pradesh.","p"],
["M2","The santoor comes originally from which region?",["Kashmir","Rajasthan","Punjab","Bengal"],"Used in Sufiana music there.","p"],
["M2","The album 'Call of the Valley' (1967) was made by Shivkumar Sharma, Brij Bhushan Kabra and:",["Hariprasad Chaurasia","Zakir Hussain","Ravi Shankar","Bismillah Khan"],"'Call of the Valley' (1967) brought together Shivkumar Sharma (santoor), Brij Bhushan Kabra (guitar) and Hariprasad Chaurasia (flute).",""],
["M3","Who played the shehnai at the Red Fort on Independence Day 1947?",["Bismillah Khan","Ali Ahmad Hussain Khan","Ravi Shankar","Pannalal Ghosh"],"Bismillah Khan played the shehnai at the Red Fort on 15 August 1947.","p"],
["M3","The film-music duo 'Shiv–Hari' was made up of:",["Shivkumar Sharma and Hariprasad Chaurasia","Shiv Kumar and Hari Om","Shankar and Hariharan","Shivamani and Hariharan"],"They scored films like Silsila and Chandni.",""],
["M3","Zakir Hussain is the son of which tabla maestro?",["Alla Rakha","Kishan Maharaj","Samta Prasad","Anokhelal Mishra"],"Zakir Hussain was the son and disciple of tabla maestro Ustad Alla Rakha.","p"],
["M3","The nadaswaram is usually played together with which drum?",["Thavil","Tabla","Pakhawaj","Dhol"],"Both are temple instruments of Tamil Nadu.",""],
["M1","In a concert, the tanpura's job is to:",["Give a steady drone","Keep the rhythm cycle","Play the fast taan","Lead the melody"],"It is tuned to Sa and Pa (or Ma).",""],
["M2","Which sitar player is the daughter of Ravi Shankar?",["Anoushka Shankar","Annapurna Devi","N. Rajam","Sharan Rani"],"Annapurna Devi was Ravi Shankar's first wife.",""],
["M2","The name 'sarangi' is said to mean:",["A hundred colours","Seven strings","King of strings","Voice of the gods"],"From 'sau rang'.",""],
["M2","The surbahar is a bass version of the:",["Sitar","Sarod","Veena","Santoor"],"Played by Annapurna Devi.",""],
["M3","Tabla maestro Zakir Hussain died in:",["December 2024","March 2023","January 2025","August 2022"],"In San Francisco.","p"],
["M3","The shehnai is traditionally played at:",["Weddings and temples","Funerals only","War marches","Harvest dances only"],"Its sound is thought auspicious.",""],
["M3","Bismillah Khan belonged to which city?",["Varanasi","Lucknow","Gwalior","Patiala"],"He played on the ghats of the Ganga.","p"]
);

LASTMOMENT.push(
{t:"Four classes (Natya Shastra)", era:["mu"], rows:[["Tata — string","Sitar, veena, santoor"],["Sushira — wind","Flute, shehnai"],["Avanaddha — skin","Tabla, mridangam"],["Ghana — solid","Ghatam, jaltarang"]]},
{t:"Maestro ↔ instrument", era:["mu"], rows:[["Ravi Shankar, Vilayat Khan","Sitar"],["Amjad Ali Khan, Ali Akbar Khan","Sarod"],["Shivkumar Sharma","Santoor"],["L. Subramaniam, N. Rajam","Violin"],["Ram Narayan","Sarangi"],["Bismillah Khan","Shehnai"],["Hariprasad Chaurasia","Flute"],["Zakir Hussain, Alla Rakha","Tabla"]]}
);
TILES.push(["4","Classes of instruments","mu"],["1947","Bismillah Khan at the Red Fort","mu"],["1967","Call of the Valley","mu"],["2024","Zakir Hussain's 3 Grammys","mu"]);
