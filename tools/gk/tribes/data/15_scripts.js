/* T8: scripts — the ancient scripts, the scripts of today's languages, and the scripts made for tribal languages and their makers. */
const T8A = [
  ["Ol Chiki","Santhali","Made by Pandit Raghunath Murmu in 1925; its centenary was marked in 2025."],
  ["Meitei Mayek","Manipuri","Manipur's old script, pushed aside by the Bengali script in the 18th century and brought back into official use by a 2021 amendment of the state's language law."],
  ["Gurmukhi","Punjabi","Standardised by Guru Angad Dev, the second Sikh Guru; the Guru Granth Sahib is written in it."],
  ["Warang Citi","Ho","Devised by Lako Bodra for the Ho language of Jharkhand."],
  ["Sorang Sompeng","Sora","Created by Mangei Gomango in 1936 for the Sora (Saora) language of Odisha."],
  ["Tolong Siki","Kurukh","Devised by Dr Narayan Oraon in 1999 for the language of the Oraons."],
  ["Masaram Gondi","Gondi","Devised by Munshi Mangal Singh Masaram of Balaghat (about 1918)."],
  ["Tirhuta (Mithilakshar)","Maithili","The old script of Mithila; today Maithili is mostly written in Devanagari."],
  ["Takri","Dogri","A hill script of Jammu and Himachal once used for Dogri; Dogri now uses Devanagari."],
  ["Modi","Marathi","A fast, joined-up hand once used for Marathi records and letters; Devanagari replaced it."],
  ["Sharada","Kashmiri","Grew in Kashmir out of Gupta-period Brahmi; used for Kashmiri and Sanskrit."],
  ["Grantha","Sanskrit (in the Tamil country)","Used in the south to write Sanskrit; the Malayalam script grew from it."],
  ["Kharosthi","Gandhari Prakrit","Written right to left in the north-west; it came from the Aramaic script."],
  ["Lepcha (Rong)","Lepcha","The Lepchas' own script, used in Sikkim and Darjeeling."],
  ["Limbu (Sirijonga)","Limbu","Named after the Limbu king Sirijonga; used in Sikkim and eastern Nepal."]
];
const T8B = [
  ["Bodo","Devanagari","Adopted in 1975, after the movement for the Roman script."],
  ["Dogri","Devanagari","Once written in Takri."],
  ["Nepali","Devanagari",""],
  ["Maithili","Devanagari","Its old script is Tirhuta."],
  ["Konkani","Devanagari","The official script in Goa (1987), though Konkani is also written in Roman, Kannada and Malayalam letters."],
  ["Punjabi (in India)","Gurmukhi","In Pakistan, Punjabi is written in Shahmukhi, a Perso-Arabic script."],
  ["Urdu","Perso-Arabic (Nastaliq)","Written right to left."],
  ["Kashmiri","Perso-Arabic (Nastaliq)","Its old script was Sharada."],
  ["Santhali","Ol Chiki","Santhali has also been written in Roman, Bengali, Odia and Devanagari letters."],
  ["Manipuri","Meitei Mayek","Used together with the Bengali script under Manipur's 2021 law."],
  ["Khasi","Roman","The Welsh missionary Thomas Jones gave Khasi the Roman script in 1842."],
  ["Mizo","Roman","Missionaries wrote down Mizo in Roman letters in the 1890s."],
  ["Garo","Roman",""]
];

LESSONS.push(
{id:"T8", heat:2, title:"Scripts: from Brahmi to Ol Chiki", hi:"लिपियाँ: ब्राह्मी से ओल चिकी तक", blocks:[
  {k:"hot", h:"Asked most: <b>Brahmi</b> (mother script, read by <b>James Prinsep</b>), <b>Kharosthi</b> (right to left), <b>Devanagari</b> and its languages, <b>Gurmukhi</b> (Guru Angad Dev), <b>Ol Chiki</b> (Santhali, Raghunath Murmu, 1925), <b>Meitei Mayek</b> (Manipuri) and <b>Grantha</b> (Sanskrit in the south)."},
  {k:"story", h:"<p>Almost every Indian script is a grandchild of <b>Brahmi</b>, the script of most of Ashoka's edicts. Brahmi was forgotten for centuries until <b>James Prinsep</b> read it again in <b>1837</b>. In the far north-west, Ashoka's scribes used another script, <b>Kharosthi</b>, which came from Aramaic and ran from <b>right to left</b>.</p><p>Over a thousand years Brahmi branched. In the north it grew into the Gupta script, then <b>Siddham</b>, <b>Sharada</b> in Kashmir and <b>Nagari</b>, which became <b>Devanagari</b> — today the script of Hindi, Marathi, Nepali, Sanskrit, Konkani, Bodo, Dogri and Maithili. In the east it became the <b>Bengali–Assamese</b> and <b>Odia</b> scripts; in the Punjab, from Sharada and Landa, <b>Guru Angad Dev</b> shaped <b>Gurmukhi</b>. In the south came <b>Tamil</b>, the <b>Telugu–Kannada</b> script, and <b>Grantha</b>, made to write Sanskrit, from which <b>Malayalam</b> grew.</p><p>The twentieth century added new scripts for tribal languages. <b>Pandit Raghunath Murmu</b> made <b>Ol Chiki</b> for Santhali in <b>1925</b>; <b>Lako Bodra</b> made Warang Citi for Ho; <b>Mangei Gomango</b> made Sorang Sompeng for Sora; <b>Dr Narayan Oraon</b> made Tolong Siki for Kurukh. In Ol Chiki's centenary year the President released the <b>Constitution in Santhali</b>, on 25 December 2025.</p>", key:"Brahmi (Prinsep 1837) is the mother; Kharosthi runs right to left; Devanagari for Hindi and seven other scheduled languages; Gurmukhi — Guru Angad Dev; Grantha → Malayalam; Ol Chiki — Raghunath Murmu, 1925."},
  {k:"table", title:"Scripts and the languages they were made for", head:["Script","Language","Remember"], rows: T8A.map(r => [r[0], r[1], r[2]])},
  {k:"table", title:"The standard script of each language today", head:["Language","Script","Remember"], rows: T8B.map(r => [r[0], r[1], r[2]])},
  {k:"facts", title:"The ancient scripts", rows:[
    ["Indus script","On Harappan seals — still not deciphered"],
    ["Brahmi","Left to right; most of Ashoka's edicts; the ancestor of nearly all Indian scripts; read by James Prinsep in 1837"],
    ["Kharosthi","Right to left; from Aramaic; Ashoka's edicts at Shahbazgarhi and Mansehra (now in Pakistan)"],
    ["Ashoka's Kandahar edict","Written in Greek and Aramaic"],
    ["Tamil-Brahmi","The oldest Tamil writing, in caves and on pottery; the Tamil script grew from it"],
    ["Vatteluttu","A rounded old script of Tamil and early Malayalam"],
    ["Siddham and Nagari","The links between the Gupta script and Devanagari"]
  ]},
  {k:"facts", title:"Script facts to remember", rows:[
    ["Devanagari","The headline over the letters is the shirorekha; it is used for Hindi, Marathi, Nepali, Sanskrit, Konkani, Bodo, Dogri and Maithili — eight scheduled languages"],
    ["Gurmukhi","‘From the mouth of the Guru’ — standardised by Guru Angad Dev (16th century)"],
    ["Bengali–Assamese script","Shared by Bengali and Assamese (with a few different letters); Manipuri also used it for centuries"],
    ["Sindhi","Written in India in two scripts — Perso-Arabic and Devanagari"],
    ["Right-to-left scripts","Kharosthi in the past; Perso-Arabic (Urdu, Kashmiri, Sindhi) today"],
    ["Ol Chiki centenary","1925–2025; the Constitution in Santhali (Ol Chiki) was released at Rashtrapati Bhavan on 25 December 2025"],
    ["Gunjala Gondi","Another Gondi script, named after Gunjala village in Adilabad (Telangana), where old manuscripts were found"]
  ]},
  {k:"link", h:"The Kharosthi and Brahmi of the Ashokan inscriptions are also in <b>Ancient India</b>; <b>Art & Culture</b> (Literature, languages & scripts) has a short table of the classical scripts."},
  {k:"trick", h:"Tribal scripts and makers — <b>“Ol-Raghu, Warang-Lako, Sorang-Mangei, Tolong-Narayan”</b>.<br>Kharosthi = <b>K</b>eeps going backwards (right to left); Brahmi = <b>B</b>asic, the mother of all."},
  {k:"trap", h:"<b>Ol Chiki</b> is for <b>Santhali</b>, <b>Warang Citi</b> for <b>Ho</b> — both from Jharkhand, so they are swapped. <b>Gurmukhi</b> was standardised by <b>Guru Angad Dev</b>, not Guru Nanak. <b>Grantha</b> wrote <b>Sanskrit</b> in the south — it is not the Tamil script. <b>Bodo</b> uses <b>Devanagari</b>, though Bodo is a Tibeto-Burman language."}
], sum:["Brahmi: the mother of Indian scripts; Ashoka's edicts; read by James Prinsep (1837). Kharosthi: right to left, from Aramaic, north-west.","Devanagari: Hindi, Marathi, Nepali, Sanskrit, Konkani, Bodo, Dogri, Maithili. Gurmukhi: Punjabi (Guru Angad Dev).","Grantha: Sanskrit in the Tamil country, parent of the Malayalam script. Sharada: Kashmir. Tirhuta: Maithili. Modi: Marathi. Takri: Dogri.","Meitei Mayek: Manipuri (back in official use from 2021). Urdu and Kashmiri: Perso-Arabic. Sindhi: Perso-Arabic and Devanagari.","Ol Chiki (Santhali): Raghunath Murmu, 1925. Warang Citi (Ho): Lako Bodra. Sorang Sompeng (Sora): Mangei Gomango. Tolong Siki (Kurukh): Narayan Oraon.","Khasi, Mizo and Garo are written in the Roman script."]}
);

pairQs("T8", T8A, { q: t => `The ${t} script is (or was) chiefly used for which language?` });
pairQs("T8", T8B.filter(r => ["Bodo","Konkani","Punjabi (in India)","Kashmiri","Santhali","Manipuri","Khasi","Mizo"].includes(r[0])), { q: t => `What is the standard script for ${t} today?` });

QB.push(
["T8","Who first read (deciphered) the Brahmi script, in 1837?",["James Prinsep","William Jones","Alexander Cunningham","Max Müller"],"Prinsep's work let scholars read Ashoka's edicts again. William Jones founded the Asiatic Society; Cunningham founded the ASI.",""],
["T8","Unlike Brahmi, the Kharosthi script was written:",["From right to left","From top to bottom","From left to right","In both directions in alternate lines"],"Kharosthi came from Aramaic, which runs right to left; Brahmi runs left to right.",""],
["T8","Kharosthi grew out of which older script?",["Aramaic","Greek","Brahmi","Phoenician"],"It came with the Persian (Achaemenid) administration to the north-west.",""],
["T8","Ashoka's rock edicts at Shahbazgarhi and Mansehra are written in which script?",["Kharosthi","Brahmi","Greek","Sharada"],"These two edicts in today's north-west Pakistan use Kharosthi; most of Ashoka's other edicts use Brahmi.",""],
["T8","Ashoka's bilingual edict at Kandahar is in which two languages?",["Greek and Aramaic","Prakrit and Sanskrit","Greek and Prakrit","Aramaic and Persian"],"Kandahar, in today's Afghanistan, had Greek- and Aramaic-speaking subjects.",""],
["T8","The Malayalam script grew mainly from which script?",["Grantha","Sharada","Tamil-Brahmi only","Kadamba"],"Grantha, used for Sanskrit in the south, gave Malayalam the letters it needed for Sanskrit words.",""],
["T8","Which Sikh Guru standardised the Gurmukhi script?",["Guru Angad Dev","Guru Nanak Dev","Guru Arjan Dev","Guru Gobind Singh"],"Guru Angad Dev, the second Guru, gave Gurmukhi its form in the 16th century.",""],
["T8","Who created the Ol Chiki script?",["Pandit Raghunath Murmu","Lako Bodra","Mangei Gomango","Narayan Oraon"],"He created it in 1925; Lako Bodra made Warang Citi for Ho.",""],
["T8","In which year was the Ol Chiki script created?",["1925","1955","1905","2003"],"1925 — its centenary was celebrated in 2025. 2003 is the year Santhali entered the Eighth Schedule.",""],
["T8","On 25 December 2025, the President released the Constitution of India in which language, in the centenary year of its script?",["Santhali","Bodo","Manipuri","Ho"],"It was released in Santhali, in the Ol Chiki script, at Rashtrapati Bhavan.",""],
["T8","The horizontal line drawn along the top of Devanagari letters is called the:",["Shirorekha","Matra","Halant","Anusvara"],"The shirorekha joins the letters of a word; the halant is the mark that removes the inherent vowel.",""],
["T8","How many of the 22 scheduled languages are written mainly in Devanagari?",["Eight","Four","Twelve","Two"],"Hindi, Marathi, Nepali, Sanskrit, Konkani, Bodo, Dogri and Maithili.",""],
["T8","Which scheduled language is written in India in both the Perso-Arabic and the Devanagari script?",["Sindhi","Urdu","Gujarati","Punjabi"],"Sindhi speakers in India use both scripts. Urdu uses Perso-Arabic, Gujarati its own script and Punjabi Gurmukhi.",""],
["T8","The Bodo Sahitya Sabha accepted which script for Bodo in 1975?",["Devanagari","Roman","Bengali–Assamese","Ol Chiki"],"The movement for the Roman script ended when Devanagari was accepted in 1975.",""],
["T8","Which of these languages is written in the Roman script?",["Khasi","Bodo","Dogri","Maithili"],"Khasi, Mizo and Garo use the Roman script; Bodo, Dogri and Maithili use Devanagari.",""],
["T8","The Indus (Harappan) script is:",["Still undeciphered","Read by James Prinsep","An early form of Brahmi","Written in Kharosthi"],"No one has yet convincingly read the signs on the Harappan seals.",""],
["T8","Which of these pairs of script and maker is wrong?",["Warang Citi — Raghunath Murmu","Sorang Sompeng — Mangei Gomango","Tolong Siki — Narayan Oraon","Ol Chiki — Raghunath Murmu"],"Warang Citi was made by Lako Bodra for Ho.",""],
["T8","Before Meitei Mayek returned to official use, Manipuri had for long been written in which script?",["Bengali","Devanagari","Roman","Tibetan"],"The Bengali script replaced Meitei Mayek in the 18th century; since 2021 both may be used.",""]
);

LASTMOMENT.push(
{t:"Scripts", era:["tl"], rows:[["Brahmi","Mother script; Prinsep 1837"],["Kharosthi","Right to left; Aramaic"],["Gurmukhi","Punjabi — Guru Angad Dev"],["Grantha","Sanskrit in the south → Malayalam"],["Meitei Mayek","Manipuri"],["Ol Chiki","Santhali — Raghunath Murmu, 1925"],["Warang Citi","Ho — Lako Bodra"]]}
);
TILES.push(["1837","Prinsep reads Brahmi","tl"],["1925","Ol Chiki created","tl"]);
