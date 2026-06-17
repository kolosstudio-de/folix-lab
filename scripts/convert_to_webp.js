const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { globSync } = require('glob');

async function convertAndReplace() {
  const imgDir = path.join(__dirname, '../assets/img');
  
  // 1. Find all images
  const images = globSync('**/*.{jpg,jpeg,png,JPG,PNG,JPEG}', { cwd: imgDir, absolute: true });
  
  console.log(`Found ${images.length} images to convert.`);
  
  // 2. Convert to WebP
  for (const img of images) {
    const ext = path.extname(img);
    const webpPath = img.replace(ext, '.webp');
    
    try {
      // .rotate() without arguments auto-rotates based on EXIF Orientation tag!
      await sharp(img)
        .rotate()
        .webp({ quality: 80, effort: 6 })
        .toFile(webpPath);
        
      // Delete original to save repo size
      fs.unlinkSync(img);
      console.log(`Converted and deleted: ${path.basename(img)}`);
    } catch (err) {
      console.error(`Failed to process ${img}:`, err);
    }
  }

  // 3. Update references in code
  const codeFiles = globSync('**/*.{html,css,js}', { 
    cwd: path.join(__dirname, '..'), 
    absolute: true,
    ignore: ['node_modules/**', 'scripts/**']
  });

  for (const file of codeFiles) {
    let content = fs.readFileSync(file, 'utf-8');
    
    let updated = content
      .replace(/\.jpg/g, '.webp')
      .replace(/\.jpeg/g, '.webp')
      .replace(/\.png/g, '.webp')
      .replace(/\.JPG/g, '.webp')
      .replace(/\.PNG/g, '.webp')
      .replace(/\.JPEG/g, '.webp');

    if (content !== updated) {
      fs.writeFileSync(file, updated);
      console.log(`Updated references in: ${path.basename(file)}`);
    }
  }

  console.log('✅ All images converted to WebP (with proper EXIF rotation) and references updated.');
}

convertAndReplace().catch(console.error);
