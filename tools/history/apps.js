// The History pages built from tools/history/data: one hub plus five subject apps.
// Ids are the module ids in app.js's STUDY list (letters only: the shell's #study-<id> links need \w).
// `lessons` fixes both which app a lesson lives in and its order there.
module.exports = {
  hub: {
    id: 'history', file: 'study-history.html', key: 'history_hub_v1', mode: 'hub',
    title: 'History: Start here', brand: 'History', small: 'इतिहास · start here · plan · revise',
    plans: [5, 7, 10, 15, 30]
  },
  apps: [
    { id: 'histancient', file: 'study-history-ancient.html', key: 'history_ancient_v1', era: 'anc', ico: '🏺',
      title: 'Ancient India', hi: 'प्राचीन भारत', plans: [3, 5, 7, 10],
      lessons: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8'] },
    { id: 'histmedieval', file: 'study-history-medieval.html', key: 'history_medieval_v1', era: 'med', ico: '🕌',
      title: 'Medieval India', hi: 'मध्यकालीन भारत', plans: [3, 5, 7, 10],
      lessons: ['L9', 'L10', 'L11', 'L12', 'L13', 'L14', 'L15', 'L16'] },
    { id: 'histmodern', file: 'study-history-modern.html', key: 'history_modern_v1', era: 'mod', ico: '🇮🇳',
      title: 'Modern India', hi: 'आधुनिक भारत', plans: [3, 5, 7, 10, 15],
      lessons: ['L17', 'L18', 'L19', 'L20', 'L21', 'L31', 'L22', 'L23', 'L32', 'L24', 'L25', 'L33'],
      parts: [['From traders to rulers', 'व्यापारी से शासक', ['L17', 'L18', 'L19', 'L20']],
              ['Reform and awakening', 'सुधार और जागरण', ['L21', 'L31']],
              ['The freedom struggle', 'स्वतंत्रता संग्राम', ['L22', 'L23', 'L32', 'L24']],
              ['Constitution and after 1947', 'संविधान और 1947 के बाद', ['L25', 'L33']]] },
    { id: 'artculture', file: 'study-art-culture.html', key: 'art_culture_v1', era: 'art', ico: '🎨',
      title: 'Art & Culture', hi: 'कला एवं संस्कृति', plans: [3, 5, 7],
      lessons: ['L26', 'L27', 'L35', 'L28', 'L34'] },
    { id: 'worldhist', file: 'study-world-history.html', key: 'world_history_v1', era: 'wld', ico: '🌍',
      title: 'World History & Who’s Who', hi: 'विश्व इतिहास · कौन क्या', plans: [2, 3, 5],
      lessons: ['L36', 'L29', 'L30'] }
  ]
};
