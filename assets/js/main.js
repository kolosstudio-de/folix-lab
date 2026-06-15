/* ============================================================
   FOLIX-LAB — interactions
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Loader ---------- */
  const loader = $("#loader");
  function hideLoader() { if (loader) { loader.classList.add("is-done"); setTimeout(() => loader.remove(), 700); } }
  window.addEventListener("load", () => setTimeout(hideLoader, 650));
  setTimeout(hideLoader, 2600); // safety net

  /* ---------- Year ---------- */
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();

  /* ---------- Hero video: respect reduced motion ---------- */
  const heroVid = $(".hero__video");
  if (heroVid && reduce) { heroVid.removeAttribute("autoplay"); try { heroVid.pause(); } catch (e) {} }

  /* ---------- Nav scroll state ---------- */
  const nav = $("#nav");
  const onScroll = () => nav && nav.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll(); addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile burger ---------- */
  const burger = $("#burger"), links = $(".nav__links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
    });
    $$(".nav__links a").forEach((a) =>
      a.addEventListener("click", () => { links.classList.remove("is-open"); burger.classList.remove("is-open"); })
    );
  }

  /* ---------- Language dropdown ---------- */
  const lang = $("#lang");
  if (lang) {
    const btn = $(".lang__btn", lang);
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = lang.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
    });
    $$("[data-set-lang]", lang).forEach((li) =>
      li.addEventListener("click", () => {
        const code = li.getAttribute("data-set-lang");
        if (window.FOLIX_setLang) window.FOLIX_setLang(code);
        lang.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      })
    );
    document.addEventListener("click", (e) => {
      if (!lang.contains(e.target)) { lang.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }
    });
  }

  /* ---------- Reveal on scroll (staggered) ---------- */
  const reveals = $$(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else {
    // stagger by order within parent
    reveals.forEach((el) => {
      const sibs = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
      const i = sibs.indexOf(el);
      el.style.transitionDelay = Math.min(i * 75, 360) + "ms";
    });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  }

  /* ---------- Custom cursor ---------- */
  const cursor = $(".cursor");
  if (cursor && matchMedia("(hover:hover) and (pointer:fine)").matches && !reduce) {
    const dot = $(".cursor__dot", cursor), ring = $(".cursor__ring", cursor);
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px)`;
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px)`;
      requestAnimationFrame(loop);
    })();
    const hov = "a,button,input,textarea,select,label,.svc__card,.gallery__item";
    document.addEventListener("mouseover", (e) => { if (e.target.closest(hov)) cursor.classList.add("is-hover"); });
    document.addEventListener("mouseout", (e) => { if (e.target.closest(hov)) cursor.classList.remove("is-hover"); });
    addEventListener("mousedown", () => cursor.classList.add("is-down"));
    addEventListener("mouseup", () => cursor.classList.remove("is-down"));
  }

  /* ---------- Magnetic buttons ---------- */
  if (matchMedia("(hover:hover) and (pointer:fine)").matches && !reduce) {
    $$(".btn--solid").forEach((b) => {
      b.addEventListener("mousemove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
      });
      b.addEventListener("mouseleave", () => { b.style.transform = ""; });
    });
  }

  /* ---------- Quote form (Web3Forms submission) ---------- */
  const form = $("#quoteForm"), ok = $("#formOk");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = "<span>Sending...</span>";
      submitBtn.disabled = true;

      const d = new FormData(form);
      
      // === WEB3FORMS ACCESS KEY ===
      d.append("access_key", "946f8710-ceac-44e7-bf84-bfd406194585");
      
      const svcSel = $("#f-service");
      const svcLabel = svcSel ? svcSel.options[svcSel.selectedIndex].textContent : d.get("service");
      
      d.append("subject", "FOLIX-LAB Anfrage: " + svcLabel);
      d.append("from_name", "FOLIX-LAB Website");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: d
        });
        const data = await response.json();
        
        if (data.success) {
          if (ok) { ok.hidden = false; }
          form.reset();
        } else {
          alert("Fehler: " + (data.message || "Sendung fehlgeschlagen"));
        }
      } catch (err) {
        alert("Verbindungsfehler. Bitte versuchen Sie es später noch einmal.");
        console.error(err);
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  /* ---------- Showroom Gallery Lightbox ---------- */
  const srItems = $$('.showroom-item');
  const lb = $('#showroomLightbox');
  if (srItems.length && lb) {
    const lbContent = $('#srContent'), lbClose = $('#srClose');
    const lbPrev = $('#srPrev'), lbNext = $('#srNext');
    const lbCur = $('#srCurrent'), lbTot = $('#srTotal'), lbCap = $('#srCaption');
    let curIdx = 0;

    lbTot.textContent = srItems.length;

    const openLightbox = (index) => {
      curIdx = index;
      const item = srItems[curIdx];
      const type = item.getAttribute('data-type');
      const src = item.getAttribute('data-src');
      const cap = item.getAttribute('data-caption') || '';
      
      lbContent.innerHTML = '';
      let mediaEl;
      if (type === 'video') {
        mediaEl = document.createElement('video');
        mediaEl.src = src;
        mediaEl.controls = true;
        mediaEl.autoplay = true;
        mediaEl.playsInline = true;
        mediaEl.muted = false; // allow sound inside lightbox
      } else {
        mediaEl = document.createElement('img');
        mediaEl.src = src;
        mediaEl.alt = cap;
      }
      
      mediaEl.onload = mediaEl.onloadeddata = () => mediaEl.classList.add('is-loaded');
      lbContent.appendChild(mediaEl);
      
      lbCur.textContent = curIdx + 1;
      lbCap.textContent = cap;
      lb.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      
      // Fallback
      setTimeout(() => mediaEl.classList.add('is-loaded'), 50);
    };

    const closeLightbox = () => {
      lb.classList.remove('is-open');
      document.body.style.overflow = '';
      lbContent.innerHTML = ''; // stop video
    };

    const nextLightbox = () => { curIdx = (curIdx + 1) % srItems.length; openLightbox(curIdx); };
    const prevLightbox = () => { curIdx = (curIdx - 1 + srItems.length) % srItems.length; openLightbox(curIdx); };

    srItems.forEach((el, i) => {
      el.addEventListener('click', () => openLightbox(i));
    });

    lbClose.addEventListener('click', closeLightbox);
    lbNext.addEventListener('click', nextLightbox);
    lbPrev.addEventListener('click', prevLightbox);
    lb.addEventListener('click', (e) => { if (e.target === lb || e.target === $('.showroom-lightbox__bg', lb)) closeLightbox(); });

    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    });
    
    // Autoplay video on hover for grid
    if (matchMedia("(hover:hover) and (pointer:fine)").matches) {
      srItems.forEach(el => {
        const vid = el.querySelector('video');
        if (vid) {
          el.addEventListener('mouseenter', () => { vid.muted = true; vid.play().catch(()=>{}); });
          el.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
        }
      });
    }
  }

  /* ---------- Before/After Slider ---------- */
  const baSlider = $('.ba-slider');
  if (baSlider) {
    const beforeImg = $('.ba-slider__before', baSlider);
    const handle = $('.ba-slider__handle', baSlider);
    let isDragging = false;
    
    const updateSlider = (x) => {
      const rect = baSlider.getBoundingClientRect();
      let percent = ((x - rect.left) / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));
      beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      handle.style.left = `${percent}%`;
    };

    baSlider.addEventListener('mousedown', (e) => { isDragging = true; updateSlider(e.clientX); });
    baSlider.addEventListener('mousemove', (e) => { if(isDragging) updateSlider(e.clientX); });
    window.addEventListener('mouseup', () => { isDragging = false; });
    
    baSlider.addEventListener('touchstart', (e) => { isDragging = true; updateSlider(e.touches[0].clientX); }, {passive: true});
    baSlider.addEventListener('touchmove', (e) => { if(isDragging) updateSlider(e.touches[0].clientX); }, {passive: true});
    window.addEventListener('touchend', () => { isDragging = false; });
  }

  /* ---------- Cookie / GDPR Banner ---------- */
  const checkCookieConsent = () => {
    if (!localStorage.getItem('cookie_consent')) {
      const banner = document.createElement('div');
      banner.className = 'cookie-banner reveal is-visible';
      banner.innerHTML = `
        <div class="cookie-banner__inner">
          <p class="cookie-banner__text">
            Мы используем файлы cookie и локальное хранилище для обеспечения лучшего пользовательского опыта и сохранения ваших языковых настроек.
          </p>
          <div class="cookie-banner__actions">
            <button class="btn btn--ghost btn--sm cookie-banner__btn--ess">Только необходимые</button>
            <button class="btn btn--solid btn--sm cookie-banner__btn--all">Принять все</button>
          </div>
        </div>
      `;
      document.body.appendChild(banner);

      const btnEss = banner.querySelector('.cookie-banner__btn--ess');
      const btnAll = banner.querySelector('.cookie-banner__btn--all');
      
      const hideBanner = () => {
        banner.classList.add('is-hidden');
        setTimeout(() => banner.remove(), 400);
      };

      btnEss.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'essential');
        hideBanner();
      });

      btnAll.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'all');
        // If Google Analytics is added later, initialize it here or trigger page reload
        hideBanner();
      });
      
      // Basic i18n support for the cookie banner
      const savedLang = localStorage.getItem('FOLIX_LANG') || 'de';
      const textEl = banner.querySelector('.cookie-banner__text');
      
      if (savedLang === 'de') {
        textEl.innerHTML = 'Wir verwenden Cookies und Local Storage, um Ihnen das beste Nutzererlebnis zu bieten und für künftige Analysedienste. <a href="datenschutz.html" class="cookie-banner__link">Datenschutzerklärung</a>';
        btnEss.textContent = 'Nur Notwendige';
        btnAll.textContent = 'Alle akzeptieren';
      } else if (savedLang === 'uk') {
        textEl.innerHTML = 'Ми використовуємо файли cookie для забезпечення кращого досвіду та майбутньої аналітики. <a href="datenschutz.html" class="cookie-banner__link">Політика конфіденційності</a>';
        btnEss.textContent = 'Лише необхідні';
        btnAll.textContent = 'Прийняти всі';
      } else if (savedLang === 'en') {
        textEl.innerHTML = 'We use cookies and local storage to provide you with the best user experience and for future analytics. <a href="datenschutz.html" class="cookie-banner__link">Privacy Policy</a>';
        btnEss.textContent = 'Essential Only';
        btnAll.textContent = 'Accept All';
      }
    }
  };
  setTimeout(checkCookieConsent, 1500); // delay banner

})();
