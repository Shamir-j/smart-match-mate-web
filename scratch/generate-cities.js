const fs = require('fs');
const path = require('path');
const { cities } = require('world-cities-json');

console.log('Total cities in raw database:', cities.length);

// Sort by population descending
const sortedCities = [...cities]
  .filter(c => c.city_ascii && c.country && c.population)
  .sort((a, b) => parseInt(b.population) - parseInt(a.population));

console.log('Filtered and sorted cities:', sortedCities.length);

const topCities = sortedCities; // Process all cities (no limit!)

const slugCounts = {};
const finalCitiesList = [];

topCities.forEach(city => {
  const baseSlug = city.city_ascii
    .toLowerCase()
    .normalize('NFD') // remove accents
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  if (!baseSlug) return;

  let slug = baseSlug;

  // If collision exists, resolve it by appending country name
  if (slugCounts[slug]) {
    const countrySuffix = city.country
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    slug = `${baseSlug}-${countrySuffix}`;
  }

  // Double check if still a collision (e.g. same city/country name in different states)
  if (slugCounts[slug]) {
    slugCounts[slug]++;
    slug = `${slug}-${slugCounts[slug]}`;
  } else {
    slugCounts[slug] = 1;
  }

  finalCitiesList.push({
    slug,
    name: city.city,
    country: city.country
  });
});

console.log(`Generated list of ${finalCitiesList.length} unique cities.`);

// Write the file to src/constants/cities.json
const targetDir = path.join(__dirname, '../src/constants');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(
  path.join(targetDir, 'cities.json'),
  JSON.stringify(finalCitiesList, null, 2),
  'utf-8'
);

console.log('Cities JSON written successfully to src/constants/cities.json!');
