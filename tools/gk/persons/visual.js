/* Famous Personalities — faces to the titles, and the memorials in pictures (drawn by study-visual.js; photos come from
   Wikipedia). place() comes from applyVisual in tools/workbook/lib.js. */
const P = (w, n, c) => [w, n, c];

place("P1", "Title → leader", { k: "photos", title: "The faces behind the titles", items: [
  P("Mahatma_Gandhi", "Mahatma Gandhi", "Bapu · Mahatma"), P("Subhas_Chandra_Bose", "Subhas Chandra Bose", "Netaji"),
  P("Vallabhbhai_Patel", "Vallabhbhai Patel", "Sardar · Iron Man"), P("Bal_Gangadhar_Tilak", "Bal Gangadhar Tilak", "Lokmanya"),
  P("Chittaranjan_Das", "Chittaranjan Das", "Deshbandhu"), P("Dadabhai_Naoroji", "Dadabhai Naoroji", "Grand Old Man of India"),
  P("Madan_Mohan_Malaviya", "Madan Mohan Malaviya", "Mahamana"), P("Jayaprakash_Narayan", "Jayaprakash Narayan", "Loknayak"),
  P("Bhagat_Singh", "Bhagat Singh", "Shaheed-e-Azam"), P("Surya_Sen", "Surya Sen", "Masterda"),
  P("Abdul_Ghaffar_Khan", "Khan Abdul Ghaffar Khan", "Frontier Gandhi"), P("Rabindranath_Tagore", "Rabindranath Tagore", "Gurudev")] });

place("P3", "Reformers and women", { k: "photos", title: "Reformers and women leaders", items: [
  P("Ram_Mohan_Roy", "Raja Ram Mohan Roy", "Father of the Indian Renaissance"), P("Savitribai_Phule", "Savitribai Phule", "Krantijyoti"),
  P("Swami_Vivekananda", "Swami Vivekananda", "Cyclonic Monk"), P("Periyar", "E. V. Ramasamy", "Periyar"),
  P("Sarojini_Naidu", "Sarojini Naidu", "Nightingale of India"), P("Bhikaiji_Cama", "Bhikaji Cama", "Mother of the Indian Revolution"),
  P("Aruna_Asaf_Ali", "Aruna Asaf Ali", "Grand Old Lady"), P("Ahilyabai_Holkar", "Ahilyabai Holkar", "Punyashlok")] });

place("P4", "Indian sportspersons", { k: "photos", title: "Nicknames in pictures", items: [
  P("Milkha_Singh", "Milkha Singh", "Flying Sikh"), P("P._T._Usha", "P. T. Usha", "Payyoli Express"),
  P("Hima_Das", "Hima Das", "Dhing Express"), P("Dhyan_Chand", "Dhyan Chand", "The Wizard"),
  P("Neeraj_Chopra", "Neeraj Chopra", "Golden Boy"), P("Mary_Kom", "M. C. Mary Kom", "Magnificent Mary"),
  P("Viswanathan_Anand", "Viswanathan Anand", "Tiger of Madras"), P("Rahul_Dravid", "Rahul Dravid", "The Wall"),
  P("MS_Dhoni", "M. S. Dhoni", "Captain Cool"), P("Kapil_Dev", "Kapil Dev", "Haryana Hurricane")] });

place("P6", "World figures", { k: "photos", title: "World figures and their names", items: [
  P("Margaret_Thatcher", "Margaret Thatcher", "Iron Lady"), P("Florence_Nightingale", "Florence Nightingale", "Lady with the Lamp"),
  P("Joan_of_Arc", "Joan of Arc", "Maid of Orleans"), P("Erwin_Rommel", "Erwin Rommel", "Desert Fox"),
  P("Napoleon", "Napoleon Bonaparte", "Man of Destiny"), P("Otto_von_Bismarck", "Otto von Bismarck", "Iron Chancellor"),
  P("Nelson_Mandela", "Nelson Mandela", "Madiba"), P("Mustafa_Kemal_Atatürk", "Mustafa Kemal Atatürk", "Father of the Turks")] });

place("P8", "Samadhis and memorial ghats", { k: "photos", title: "The memorials in pictures", items: [
  P("Raj_Ghat_and_associated_memorials", "Raj Ghat", "Mahatma Gandhi"), P("Shanti_Van", "Shanti Van", "Jawaharlal Nehru"),
  P("Vijay_Ghat", "Vijay Ghat", "Lal Bahadur Shastri"), P("Shakti_Sthal", "Shakti Sthal", "Indira Gandhi"),
  P("Sadaiv_Atal", "Sadaiv Atal", "Atal Bihari Vajpayee"), P("Chaitya_Bhoomi", "Chaitya Bhoomi", "B. R. Ambedkar"),
  P("Deekshabhoomi", "Deekshabhoomi", "Ambedkar's conversion, 1956"), P("Statue_of_Unity", "Statue of Unity", "Vallabhbhai Patel"),
  P("Statue_of_Equality_(Ramanuja)", "Statue of Equality", "Ramanujacharya")] });

VISUAL = { mode: true, VIS: { key: "personalities_photos_v1", word: "personality", words: "personalities", search: "", quiz: "personality or memorial", ask: "", rows: [], tabs: [["vphotos", "Photo quiz"]] } };
