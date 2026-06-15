const fs = require('fs');
const path = require('path');

const i18nContent = fs.readFileSync('assets/js/i18n.js', 'utf8');
const ukKeys = [];
const regex = /"([^"]+)":/g;
let match;
let inUk = false;
const lines = i18nContent.split('\n');
for (const line of lines) {
  if (line.includes('uk: {')) inUk = true;
  if (line.includes('de: {')) inUk = false;
  if (inUk) {
    let m;
    while ((m = regex.exec(line)) !== null) {
      ukKeys.push(m[1]);
    }
  }
}

const missing = new Set();
const files = fs.readdirSync('.');
const htmlFiles = files.filter(f => f.endsWith('.html') && !f.startsWith('._'));

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const attrRegex = /data-i18n="([^"]+)"/g;
  let m2;
  while ((m2 = attrRegex.exec(content)) !== null) {
    if (!ukKeys.includes(m2[1])) {
      missing.add(m2[1] + " (in " + f + ")");
    }
  }
});
console.log("Missing keys in HTML files:");
if (missing.size === 0) {
    console.log("None!");
} else {
    missing.forEach(k => console.log("- " + k));
}

// Now check if DE, RU, EN have the exact same keys as UK
const checkLang = (langCode) => {
    let inLang = false;
    let keys = [];
    for (const line of lines) {
      if (line.includes(`${langCode}: {`)) inLang = true;
      if (inLang && line.includes('},')) inLang = false; // crude but works for this structure
      if (inLang) {
        let m;
        while ((m = regex.exec(line)) !== null) {
          keys.push(m[1]);
        }
      }
    }
    
    // Compare ukKeys with keys
    const missingInLang = ukKeys.filter(k => !keys.includes(k));
    console.log(`\nMissing keys in ${langCode} dictionary:`);
    if (missingInLang.length === 0) {
        console.log("None!");
    } else {
        missingInLang.forEach(k => console.log("- " + k));
    }
}

checkLang('de');
checkLang('ru');
checkLang('en');
