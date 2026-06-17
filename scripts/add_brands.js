const fs = require('fs');
const path = require('path');

function updateFile(filePath, replacer) {
  const p = path.join(__dirname, filePath);
  let content = fs.readFileSync(p, 'utf8');
  content = replacer(content);
  fs.writeFileSync(p, content);
  console.log(`Updated ${filePath}`);
}

// 1. Update i18n.js for svc1.text
updateFile('../assets/js/i18n.js', (content) => {
  content = content.replace(
    /"svc1\.text": "Повністю змінюємо вигляд авто: мат, глянець, сатин або індивідуальні кольори\. Якісна плівка з точною обробкою, що ще й захищає оригінальний лак та робить вашу появу на дорозі неповторною\.",/,
    `"svc1.text": "Повністю змінюємо вигляд авто: мат, глянець, сатин або індивідуальні кольори. Якісна плівка з точною обробкою, що ще й захищає оригінальний лак та робить вашу появу на дорозі неповторною. Працюємо з преміум-матеріалами: 3М, Avery Dennison, Oracal, XPEL, SunTek.",`
  );

  content = content.replace(
    /"svc1\.text": "Verwandeln Sie Ihr Fahrzeug komplett: matt, glänzend, satin oder individuelle Sonderfarben\. Hochwertige Folie mit präziser Verarbeitung, die zugleich den Originallack schützt und für einen einzigartigen Auftritt sorgt\.",/,
    `"svc1.text": "Verwandeln Sie Ihr Fahrzeug komplett: matt, glänzend, satin oder individuelle Sonderfarben. Hochwertige Folie mit präziser Verarbeitung, die zugleich den Originallack schützt und für einen einzigartigen Auftritt sorgt. Wir verwenden Premium-Materialien: 3М, Avery Dennison, Oracal, XPEL, SunTek.",`
  );

  content = content.replace(
    /"svc1\.text": "Полностью меняем облик авто: мат, глянец, сатин или индивидуальные цвета\. Качественная плёнка с точной обработкой, которая ещё и защищает оригинальный лак и делает вашу машину неповторимой\.",/,
    `"svc1.text": "Полностью меняем облик авто: мат, глянец, сатин или индивидуальные цвета. Качественная плёнка с точной обработкой, которая ещё и защищает оригинальный лак и делает вашу машину неповторимой. Работаем с премиум-материалами: 3М, Avery Dennison, Oracal, XPEL, SunTek.",`
  );

  content = content.replace(
    /"svc1\.text": "Completely transform your car: matte, gloss, satin or custom colours\. Quality film with precise installation that also protects the original paint and makes you stand out on the road\.",/,
    `"svc1.text": "Completely transform your car: matte, gloss, satin or custom colours. Quality film with precise installation that also protects the original paint and makes you stand out on the road. We use premium materials: 3М, Avery Dennison, Oracal, XPEL, SunTek.",`
  );

  return content;
});

// 2. Update Marquee in car-wrapping.html and werbetechnik.html
const newMarqueeTrack = `<div class="marquee__track">
        <span>Car Wrapping</span><i>✦</i>
        <span>3M</span><i>✦</i>
        <span>PPF Lackschutz</span><i>✦</i>
        <span>Avery Dennison</span><i>✦</i>
        <span>Vollfolierung</span><i>✦</i>
        <span>Oracal</span><i>✦</i>
        <span>Werbetechnik</span><i>✦</i>
        <span>XPEL</span><i>✦</i>
        <span>Custom Details</span><i>✦</i>
        <span>SunTek</span><i>✦</i>
        <span>Car Wrapping</span><i>✦</i>
        <span>3M</span><i>✦</i>
        <span>PPF Lackschutz</span><i>✦</i>
        <span>Avery Dennison</span><i>✦</i>
        <span>Vollfolierung</span><i>✦</i>
        <span>Oracal</span><i>✦</i>
        <span>Werbetechnik</span><i>✦</i>
        <span>XPEL</span><i>✦</i>
        <span>Custom Details</span><i>✦</i>
        <span>SunTek</span><i>✦</i>
      </div>`;

updateFile('../car-wrapping.html', (content) => {
  return content.replace(/<div class="marquee__track">[\s\S]*?<\/div>/, newMarqueeTrack);
});

updateFile('../werbetechnik.html', (content) => {
  return content.replace(/<div class="marquee__track">[\s\S]*?<\/div>/, newMarqueeTrack);
});
