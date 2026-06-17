const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function rotateImage() {
  const targetImage = path.join(__dirname, '../assets/img/car_8.webp');
  const tempImage = path.join(__dirname, '../assets/img/car_8_temp.webp');

  if (fs.existsSync(targetImage)) {
    await sharp(targetImage)
      .rotate(90) // Rotate 90 degrees clockwise
      .webp({ quality: 80, effort: 6 })
      .toFile(tempImage);

    // Replace original
    fs.renameSync(tempImage, targetImage);
    console.log('car_8.webp rotated successfully.');
  } else {
    console.log('car_8.webp not found.');
  }
}

rotateImage().catch(console.error);
