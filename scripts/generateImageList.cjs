const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/thumbnails');
const outputFile = path.join(__dirname, '../src/imports/availableImages.json');

const files = fs.readdirSync(imageDir)
  .filter(file => file.endsWith('.webp'))
  .map(file => file.replace('.webp', ''));

fs.writeFileSync(outputFile, JSON.stringify(files));
