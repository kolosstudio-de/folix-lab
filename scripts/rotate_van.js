const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function rotateImage() {
  const targetImage = path.join(__dirname, '../assets/img/van.webp');
  const tempImage = path.join(__dirname, '../assets/img/van_temp.webp');

  if (fs.existsSync(targetImage)) {
    await sharp(targetImage)
      .rotate(90) // Rotate 90 degrees clockwise
      .webp({ quality: 80, effort: 6 })
      .toFile(tempImage);

    // Replace original
    fs.renameSync(tempImage, targetImage);
    console.log('van.webp rotated successfully.');
  } else {
    console.log('van.webp not found.');
  }
}

rotateImage().catch(console.error);
