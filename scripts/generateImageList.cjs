const fs = require('fs');
const path = require('path');

const thumbnailDir = path.join(__dirname, '../public/thumbnails');
const ingredientDir = path.join(__dirname, '../public/ingredient-info-images');
const outputFile = path.join(__dirname, '../src/imports/availableProductImages.json');
const ingredientOutputFile = path.join(__dirname, '../src/imports/availableIngredientImages.json');

const thumbnailFiles = fs.readdirSync(thumbnailDir)
  .filter(file => file.endsWith('.webp'))
  .map(file => file.replace('.webp', ''));

const ingredientFiles = fs.readdirSync(ingredientDir)
  .filter(file => file.endsWith('.webp'))
  .map(file => file.replace('.webp', ''));

fs.writeFileSync(outputFile, JSON.stringify(thumbnailFiles));
fs.writeFileSync(ingredientOutputFile, JSON.stringify(ingredientFiles));
