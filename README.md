# FOLIX-LAB — Premium Landing

Преміальний лендинг для студії оклеювання авто **FOLIX-LAB** (Мюнхен).
Дизайн-концепція: **«Liquid Carbon»** — матовий чорний, іридисцентний (color-shift)
акцент як у реальних плівок color-flip, хром-деталі.

Статичний сайт (HTML/CSS/JS, без збірки) — швидкий, легко деплоїться будь-куди.

---

## 📁 Структура

```
index.html              # вся розмітка (секції + SEO-теги + JSON-LD)
robots.txt              # для пошукових систем
sitemap.xml             # карта сайту з hreflang
site.webmanifest        # PWA-маніфест
assets/
  css/styles.css        # вся стилізація (дизайн-система «Liquid Carbon»)
  js/i18n.js            # 🌐 ПЕРЕКЛАДИ (4 мови) — редагувати тут
  js/main.js            # анімації, меню, перемикач мов, форма
  img/                  # hero.jpg, ppf.jpg, colorshift.jpg, van.jpg, favicon.svg
```

## 🌐 Мови

За замовчуванням — **українська (UA)**. Доступні: **UA · DE · RU · EN**
(перемикач у шапці справа). Вибір зберігається у `localStorage`, також працює
`?lang=de` в URL.

**Як редагувати тексти / переклади:** усі рядки лежать у `assets/js/i18n.js`
в об'єкті `I18N` (по словнику на кожну мову, однакові ключі). У розмітці елементи
позначені `data-i18n="ключ"`. Достатньо змінити значення в потрібній мові.

## 🖼 Зображення

`hero.jpg`, `ppf.jpg`, `colorshift.jpg`, `van.jpg` — згенеровані під бренд
(матове авто, нанесення PPF, color-shift плівка, фургон з брендуванням).
Щоб замінити на реальні фото робіт — просто покладіть файли з тими ж іменами
в `assets/img/` (рекомендований розмір 1400–1600px по ширині, JPG, < 350 КБ).

## ✅ Що варто заповнити власнику

1. **Соцмережі** — у секції «Контакти» та футері посилання Instagram / WhatsApp /
   Facebook поки що заглушки. Вкажіть реальні в `index.html` (пошук `instagram.com`,
   `wa.me`, `facebook.com`).
2. **Телефон** — на сайті не було номера; за бажанням додайте в секцію «Контакти».
3. **Юридичні сторінки** — `impressum.html`, `datenschutz.html`, `agb.html` створені як
   DSGVO/DDG-шаблони. Заповніть жовті `[плейсхолдери]` (ПІБ, телефон, USt-IdNr, хостер)
   і перевірте у юриста. Повний правовий + SEO/Ads аудит — у **`ANALYSE.md`**.
4. **Форма заявки** — зараз відкриває поштовий клієнт (`mailto:info@folix-lab.de`)
   з заповненими полями. Для надсилання без поштового клієнта підключіть бекенд:
   - **Formspree** (найпростіше): замініть обробник у `main.js` на `fetch` до
     `https://formspree.io/f/ВАШ_ID`;
   - або **Vercel/Netlify Forms**.

## 🚀 Деплой

Будь-який статичний хостинг. Найшвидше — **Vercel**:
```bash
npx vercel --prod      # з кореня проєкту
```
або перетягнути папку в Netlify Drop. Домен `folix-lab.de` навести на хостинг.

## 🔎 SEO

Вже зроблено: title/description, Open Graph + Twitter Card, canonical, hreflang
(4 мови), JSON-LD `AutoBodyShop` (адреса, гео, послуги), semantic HTML, alt-тексти,
lazy-loading зображень, robots.txt, sitemap.xml.
Після деплою: додати сайт у Google Search Console та надіслати sitemap.

---
© FOLIX-LAB · Atterseestraße 15, 81241 München · info@folix-lab.de
