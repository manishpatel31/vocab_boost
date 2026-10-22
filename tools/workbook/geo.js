// Places for the maps in the apps' visual.js files: [longitude, latitude], rounded (the maps are simplified and not to scale).
// CITY covers India and the world; COUNTRY gives a point to pin a country on the world map, and its Natural Earth name for marking it.
const CITY = {
  // India
  'New Delhi': [77.21, 28.61], 'Mumbai': [72.88, 19.08], 'Kolkata': [88.36, 22.57], 'Chennai': [80.27, 13.08], 'Bengaluru': [77.59, 12.97],
  'Hyderabad': [78.49, 17.39], 'Secunderabad': [78.5, 17.44], 'Pune': [73.86, 18.52], 'Ahmedabad': [72.57, 23.02], 'Lucknow': [80.95, 26.85],
  'Jaipur': [75.79, 26.91], 'Shimla': [77.17, 31.1], 'Udhampur': [75.14, 32.93], 'Chandimandir': [76.87, 30.73], 'Visakhapatnam': [83.22, 17.69],
  'Kochi': [76.27, 9.93], 'Shillong': [91.89, 25.58], 'Prayagraj': [81.85, 25.43], 'Gandhinagar': [72.64, 23.22], 'Thiruvananthapuram': [76.95, 8.52],
  'Nagpur': [79.09, 21.15], 'Port Blair': [92.73, 11.62], 'Dehradun': [78.03, 30.32], 'Ezhimala': [75.21, 12.03], 'Dundigal': [78.4, 17.6],
  'Wellington': [76.79, 11.36], 'Gulmarg': [74.38, 34.05], 'Vairengte': [92.76, 24.5], 'Khadakwasla': [73.77, 18.44], 'Sriharikota': [80.23, 13.72],
  'Mahendragiri': [77.5, 8.39], 'Kalpakkam': [80.16, 12.53], 'Mysuru': [76.64, 12.3], 'Pilani': [75.6, 28.37], 'Dona Paula': [73.8, 15.46],
  'Vasco da Gama': [73.81, 15.39], 'Karnal': [76.99, 29.69], 'Jodhpur': [73.02, 26.24], 'Coimbatore': [76.96, 11.02], 'Cuttack': [85.88, 20.46],
  'Kanpur': [80.33, 26.45], 'Varanasi': [82.97, 25.32], 'Kozhikode': [75.78, 11.26], 'Kasaragod': [75.0, 12.5], 'Bikaner': [73.31, 28.02],
  'Hisar': [75.72, 29.15], 'Bareilly': [79.43, 28.37], 'Kottayam': [76.52, 9.59], 'Guntur': [80.44, 16.31], 'Anand': [72.95, 22.56],
  'Vadodara': [73.18, 22.31], 'Noida': [77.39, 28.54], 'Gurugram': [77.03, 28.46], 'Haridwar': [78.16, 29.95], 'Ghaziabad': [77.44, 28.67],
  'Patiala': [76.39, 30.34], 'Gwalior': [78.18, 26.22], 'Imphal': [93.94, 24.81], 'Amritsar': [74.87, 31.63], 'Bhubaneswar': [85.82, 20.29],
  'Guwahati': [91.74, 26.14], 'Belagavi': [74.5, 15.85], 'Aligarh': [78.08, 27.88], 'Santiniketan': [87.68, 23.68], 'Amalner': [75.06, 21.04], 'Ludhiana': [75.86, 30.9], 'Bhopal': [77.41, 23.26], 'Indore': [75.86, 22.72], 'Kanyakumari': [77.54, 8.08], 'Srinagar': [74.8, 34.08],
  // the world
  'New York': [-74.0, 40.71], 'Washington, D.C.': [-77.04, 38.9], 'Geneva': [6.14, 46.2], 'Paris': [2.35, 48.86], 'Bern': [7.45, 46.95],
  'Rome': [12.5, 41.9], 'Vienna': [16.37, 48.21], 'Nairobi': [36.82, -1.29], 'The Hague': [4.3, 52.08], 'London': [-0.13, 51.51],
  'Montreal': [-73.57, 45.5], 'Madrid': [-3.7, 40.42], 'Tokyo': [139.69, 35.69], 'Manila': [120.98, 14.6], 'Beijing': [116.4, 39.9],
  'Shanghai': [121.47, 31.23], 'Basel': [7.59, 47.56], 'Jakarta': [106.85, -6.2], 'Kathmandu': [85.32, 27.71], 'Dhaka': [90.41, 23.81],
  'Brussels': [4.35, 50.85], 'Addis Ababa': [38.75, 9.02], 'Cairo': [31.24, 30.04], 'Jeddah': [39.19, 21.49], 'Lyon': [4.84, 45.76],
  'Amsterdam': [4.9, 52.37], 'Gland': [6.27, 46.42], 'Cologny': [6.18, 46.22], 'Zurich': [8.54, 47.37], 'Lausanne': [6.63, 46.52],
  'Dubai': [55.27, 25.2], 'Kuala Lumpur': [101.69, 3.14], 'Monaco': [7.42, 43.74], 'Nyon': [6.24, 46.38], 'Mies': [6.17, 46.3],
  'Aigle': [6.97, 46.32], 'Kuwait City': [47.98, 29.37], 'Munich': [11.58, 48.14], 'Dublin': [-6.26, 53.35], 'Redmond': [-122.12, 47.67],
  'Cupertino': [-122.03, 37.32], 'Mountain View': [-122.08, 37.39], 'Seattle': [-122.33, 47.61], 'Menlo Park': [-122.18, 37.45],
  'Austin': [-97.74, 30.27], 'Santa Clara': [-121.95, 37.35], 'Bentonville': [-94.21, 36.37], 'Beaverton': [-122.8, 45.49],
  'Herzogenaurach': [10.88, 49.57], 'Hangzhou': [120.16, 30.27], 'Shenzhen': [114.06, 22.54], 'Atlanta': [-84.39, 33.75], 'Espoo': [24.65, 60.21],
  'Moscow': [37.62, 55.75], 'Singapore': [103.82, 1.35], 'Riyadh': [46.72, 24.69], 'Abu Dhabi': [54.37, 24.45], 'Ottawa': [-75.7, 45.42],
  'Canberra': [149.13, -35.28], 'Berlin': [13.4, 52.52], 'Stockholm': [18.07, 59.33], 'Oslo': [10.75, 59.91], 'Copenhagen': [12.57, 55.68],
  'Rio de Janeiro': [-43.2, -22.91], 'Los Angeles': [-118.24, 34.05], 'Buenos Aires': [-58.38, -34.6], 'Johannesburg': [28.05, -26.2],
  'Doha': [51.53, 25.29], 'Seoul': [126.98, 37.57], 'Sydney': [151.21, -33.87], 'Melbourne': [144.96, -37.81], 'Athens': [23.73, 37.98],
  'Barcelona': [2.17, 41.39], 'Mexico City': [-99.13, 19.43], 'Montevideo': [-56.16, -34.9], 'Lisbon': [-9.14, 38.72], 'Strasbourg': [7.75, 48.57],
  'Frankfurt': [8.68, 50.11], 'Luxembourg': [6.13, 49.61], 'Brasília': [-47.88, -15.79], 'Pretoria': [28.19, -25.75], 'Colombo': [79.86, 6.93],
  'Bangkok': [100.5, 13.76], 'Hamburg': [9.99, 53.55], 'Montego Bay': [-77.92, 18.47], 'Kingston': [-76.79, 18.0], 'Bonn': [7.1, 50.73],
  'Gaborone': [25.91, -24.65], 'Abuja': [7.49, 9.06], 'Lima': [-77.04, -12.05], 'Caracas': [-66.9, 10.48], 'Port Louis': [57.5, -20.16],
  'Male': [73.51, 4.18], 'Victoria (Seychelles)': [55.45, -4.62], 'Kabul': [69.18, 34.53], 'Islamabad': [73.05, 33.68], 'Thimphu': [89.64, 27.47],
  'Naypyidaw': [96.13, 19.75], 'Tashkent': [69.24, 41.3], 'Bishkek': [74.59, 42.87], 'Astana': [71.45, 51.17], 'Muscat': [58.41, 23.59],
  'Hanoi': [105.85, 21.03], 'Phnom Penh': [104.92, 11.56], 'Ulaanbaatar': [106.92, 47.89], 'Jerusalem': [35.22, 31.77], 'Tehran': [51.39, 35.69], 'Miami': [-80.19, 25.76], 'Ebene': [57.49, -20.24], 'Évian-les-Bains': [6.59, 46.4], 'Kananaskis': [-115.1, 50.9], 'Belgrade': [20.46, 44.79], 'Baghdad': [44.36, 33.31]
};
// [lon, lat, Natural Earth name] — the point sits inside the country, so the pin is on it even when the country is tiny on the map
const COUNTRY = {
  'USA': [-98, 39, 'United States of America'], 'Sri Lanka': [80.7, 7.9, 'Sri Lanka'], 'Nepal': [84.1, 28.4, 'Nepal'], 'Bangladesh': [90.3, 23.7, 'Bangladesh'],
  'Mongolia': [103.8, 46.9, 'Mongolia'], 'Thailand': [101, 15.5, 'Thailand'], 'France': [2.3, 46.6, 'France'], 'United Kingdom': [-2, 53, 'United Kingdom'],
  'Japan': [138.5, 36.5, 'Japan'], 'Indonesia': [113.9, -0.8, 'Indonesia'], 'Malaysia': [101.97, 4.2, 'Malaysia'], 'Seychelles': [55.45, -4.68, null],
  'Maldives': [73.5, 3.2, null], 'Uzbekistan': [64.6, 41.4, 'Uzbekistan'], 'Kyrgyzstan': [74.8, 41.4, 'Kyrgyzstan'], 'Kazakhstan': [66.9, 48, 'Kazakhstan'],
  'Oman': [57, 21.5, 'Oman'], 'UAE': [54.3, 24, 'United Arab Emirates'], 'Australia': [134, -25, 'Australia'], 'Vietnam': [106, 16, 'Vietnam'],
  'Egypt': [30.8, 26.8, 'Egypt'], 'Saudi Arabia': [45, 24, 'Saudi Arabia'], 'Singapore': [103.82, 1.35, null], 'Cambodia': [104.99, 12.57, 'Cambodia'],
  'Russia': [45, 56, 'Russia'], 'Philippines': [122, 12.9, 'Philippines'], 'Israel': [34.85, 31.05, 'Israel'], 'Pakistan': [69.3, 30.4, 'Pakistan'],
  'China': [104, 35, 'China'], 'Bhutan': [90.4, 27.5, 'Bhutan'], 'Myanmar': [96, 21, 'Myanmar'], 'Afghanistan': [66, 34, 'Afghanistan'],
  'Iran': [53.7, 32.4, 'Iran'], 'Germany': [10.4, 51.2, 'Germany'], 'Italy': [12.6, 42.8, 'Italy'], 'Canada': [-106, 56, 'Canada'],
  'Brazil': [-51.9, -14.2, 'Brazil'], 'South Africa': [24.7, -29, 'South Africa'], 'Nigeria': [8.7, 9.1, 'Nigeria'], 'Kenya': [37.9, 0.2, 'Kenya'],
  'Argentina': [-63.6, -38.4, 'Argentina'], 'Mexico': [-102.5, 23.6, 'Mexico'], 'South Korea': [127.8, 36.5, 'South Korea'], 'Turkey': [35.2, 39, 'Turkey'],
  'Spain': [-3.7, 40.4, 'Spain'], 'Netherlands': [5.3, 52.1, 'Netherlands'], 'Switzerland': [8.2, 46.8, 'Switzerland'], 'Qatar': [51.2, 25.3, 'Qatar'],
  'Mauritius': [57.55, -20.3, null], 'Greece': [21.8, 39.1, 'Greece'], 'New Zealand': [172, -41, 'New Zealand'], 'Ethiopia': [40.5, 9.1, 'Ethiopia']
};
const city = n => { const c = CITY[n]; if (!c) throw new Error('geo.js: no city "' + n + '"'); return c; };
const country = n => { const c = COUNTRY[n]; if (!c) throw new Error('geo.js: no country "' + n + '"'); return c; };
// the country names the world map (study-world.js) can colour in
let NAMES = null;
const worldNames = () => NAMES || (NAMES = new Set(JSON.parse(require('fs').readFileSync(require('path').join(__dirname, '..', '..', 'study-world.js'), 'utf8').match(/const WORLD_MAP = (\{.*?\});\n/s)[1]).c.map(c => c.n)));
module.exports = { CITY, COUNTRY, city, country, worldNames };
