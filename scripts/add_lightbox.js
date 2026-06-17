const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../werbetechnik.html');
let content = fs.readFileSync(targetPath, 'utf8');

// 1. Add data-type and data-src to showroom-item elements
content = content.replace(/<figure class="gallery__item showroom-item reveal">[\s\n]*<img src="(.*?)" alt="(.*?)" loading="lazy" \/>[\s\n]*<\/figure>/g, 
  (match, src, alt) => {
    return `<figure class="gallery__item showroom-item reveal" data-type="image" data-src="${src}" data-caption="${alt}">\n          <img src="${src}" alt="${alt}" loading="lazy" />\n        </figure>`;
});

// 2. Add the Lightbox HTML before </main> if it doesn't exist
const lightboxHtml = `
    <!-- ===================== SHOWROOM LIGHTBOX ===================== -->
    <div class="showroom-lightbox" id="showroomLightbox" aria-hidden="true">
      <div class="showroom-lightbox__bg"></div>
      <div class="showroom-lightbox__toolbar">
        <div class="showroom-lightbox__counter"><span id="srCurrent">1</span> / <span id="srTotal">10</span></div>
        <button class="showroom-lightbox__close" id="srClose" aria-label="Close">
          <svg viewBox="0 0 24 24" width="24" height="24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="square"/></svg>
        </button>
      </div>
      
      <button class="showroom-lightbox__nav showroom-lightbox__nav--prev" id="srPrev" aria-label="Previous">
        <svg viewBox="0 0 24 24" width="32" height="32"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="square"/></svg>
      </button>

      <div class="showroom-lightbox__content" id="srContent">
        <!-- Media will be injected here dynamically -->
      </div>

      <button class="showroom-lightbox__nav showroom-lightbox__nav--next" id="srNext" aria-label="Next">
        <svg viewBox="0 0 24 24" width="32" height="32"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="square"/></svg>
      </button>
      
      <div class="showroom-lightbox__caption" id="srCaption"></div>
    </div>
`;

if (!content.includes('id="showroomLightbox"')) {
  content = content.replace('</main>', lightboxHtml + '\n  </main>');
}

fs.writeFileSync(targetPath, content);
console.log('werbetechnik.html updated successfully with Lightbox integration.');
