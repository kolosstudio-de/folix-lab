/* ============================================================
   FOLIX-LAB — i18n
   Default: Ukrainian (uk). Switchable: de, ru, en.
   Persists choice in localStorage; respects ?lang= URL param.
   Note: advertising copy kept neutral & defensible (UWG-konform) —
   no unprovable guarantees, percentages, "certified" or brand-partner claims.
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    /* ---------------- UKRAINIAN (default) ---------------- */
    uk: {
      "meta.title": "FOLIX-LAB — Преміальне оклеювання та захист авто · Мюнхен",
      "meta.desc": "FOLIX-LAB — студія преміального оклеювання авто в Мюнхені. Повна та часткова оклейка, PPF-захист лаку, рекламне брендування. Професійні плівки, індивідуальний підхід.",
      "nav.services": "Послуги", "nav.process": "Процес", "nav.works": "Роботи",
      "nav.materials": "Матеріали", "nav.contact": "Контакти", "nav.cta": "Розрахувати вартість",
      "hero.eyebrow": "Студія преміального оклеювання · Мюнхен",
      "hero.title1": "Друга шкіра", "hero.title2": "для вашого авто",
      "hero.sub": "Професійна оклейка, PPF-захист лаку та рекламне брендування для приватних і бізнес-клієнтів. Точність, якісні матеріали та бездоганний фініш.",
      "hero.cta1": "Розрахувати вартість", "hero.cta2": "Дивитись роботи",
      "hero.stat1n": "Точність", "hero.stat1l": "ретельне виконання",
      "hero.stat2n": "Захист", "hero.stat2l": "PPF проти сколів",
      "hero.stat3n": "Дизайн", "hero.stat3l": "індивідуальні рішення", "hero.scroll": "Гортайте",
      "services.eyebrow": "Послуги", "services.title": "Усе, що робить авто бездоганним",
      "services.lead": "Від повної зміни кольору до невидимого захисту лаку — кожен проєкт виконуємо з ювелірною точністю та якісними матеріалами.",
      "svc1.title": "Повна оклейка",
      "svc1.text": "Повністю змінюємо вигляд авто: мат, глянець, сатин або індивідуальні кольори. Якісна плівка з точною обробкою, що ще й захищає оригінальний лак та робить вашу появу на дорозі неповторною. Працюємо з преміум-матеріалами: 3М, Avery Dennison, Oracal, XPEL, SunTek.",
      "svc1.t1": "Мат / Глянець / Сатин", "svc1.t2": "Спецкольори", "svc1.t3": "Захист лаку",
      "svc2.title": "PPF — захист лаку",
      "svc2.text": "Прозрачна плівка PPF захищає лак від сколів, подряпин, дорожнього бруду та щоденного зносу. Найбільш вразливі зони — бампер, капот, крила, пороги — довше зберігають свій вигляд. Гарне рішення для нових та спортивних авто.",
      "svc2.t1": "Анти-скол", "svc2.t2": "Самовідновлення", "svc2.t3": "Глянець / Мат",
      "svc3.title": "Custom Details",
      "svc3.text": "Часткова оклейка та індивідуальні деталі для точних акцентів. Дах, дзеркала, капот, молдинги чи спеціальні дизайн-елементи — розробляємо рішення під ваше авто та ваш стиль.",
      "svc3.t1": "Дах / Дзеркала", "svc3.t2": "Color-shift", "svc3.t3": "Декор-акценти",
      "svc4.title": "Рекламне брендування",
      "svc4.text": "Перетворюємо ваш транспорт на рекламний носій, що працює. Зовнішня реклама, фірмова айдентика та брендування авто для бізнесу — стильно, читабельно та довговічно.",
      "svc4.t1": "Брендування авто", "svc4.t2": "Cut-плоттер", "svc4.t3": "Друк / Дизайн",
      "svc5.title": "Сонцезахист & Тонування",
      "svc5.text": "Професійне тонування скла для більшої приватності, UV-захисту та комфортної температури в салоні. Якісні тонувальні плівки зменшують сонячне випромінювання та сторонні погляди, надаючи авто елегантного вигляду.",
      "svc5.t1": "Приватність", "svc5.t2": "UV-захист", "svc5.t3": "Стайлінг",
      "svc.btn": "Надіслати запит",
      "process.eyebrow": "Як ми працюємо", "process.title": "Процес без компромісів",
      "step1.title": "Консультація", "step1.text": "Обговорюємо ідею, оглядаємо авто та підбираємо оптимальне рішення.",
      "step2.title": "Підбір плівки та прорахунок", "step2.text": "Зразки кольорів і фактур, прозорий кошторис без прихованих витрат.",
      "step3.title": "Підготовка та оклейка", "step3.text": "Глибока мийка, знежирення, демонтаж елементів і точна оклейка майстром.",
      "step4.title": "Контроль і видача", "step4.text": "Перевірка кожного шва, фінальна детейлінг-обробка та догляд-рекомендації.",
      "works.eyebrow": "Портфоліо", "works.title": "Вибрані роботи", "works.lead": "Кожен проєкт — це деталі, які видно зблизька.",
      "works.cap1": "Повна оклейка · Satin Black", "works.cap2": "Custom · Color-Shift",
      "works.cap3": "PPF · Захист лаку", "works.cap4": "Werbetechnik · Брендування",
      "why.eyebrow": "Чому FOLIX-LAB", "why.title": "Преміальність, яку видно в деталях",
      "why.lead": "Ми робимо ставку на точне виконання та якісні матеріали. Результат — бездоганний фініш, що служить роками.",
      "why.cta": "Обговорити проєкт",
      "why1.title": "Досвідчені майстри", "why1.text": "Досвідчена команда, що працює з точністю до міліметра.",
      "why2.title": "Якісні плівки", "why2.text": "Працюємо лише з якісними професійними плівками відомих виробників.",
      "why3.title": "Довговічний результат", "why3.text": "Ретельна робота заради чистого та довговічного результату.",
      "why4.title": "Індивідуальний підхід", "why4.text": "Рішення під ваше авто, стиль і бюджет — від ідеї до результату.",
      "quote.eyebrow": "Безкоштовний прорахунок", "quote.title": "Розрахуйте вартість вашого проєкту",
      "quote.lead": "Залиште заявку — підготуємо індивідуальну пропозицію та підберемо оптимальне рішення для вашого авто.",
      "quote.perk1": "Швидка відповідь", "quote.perk2": "Прозорий кошторис", "quote.perk3": "Без зобов'язань",
      "form.name": "Ім'я", "form.phone": "Телефон", "form.email": "E-mail",
      "form.vehicle": "Авто (марка / модель)", "form.service": "Послуга",
      "form.opt1": "Повна оклейка", "form.opt2": "PPF — захист лаку", "form.opt3": "Часткова оклейка",
      "form.opt4": "Зовнішня реклама", "form.opt5": "Дизайн і брендування",
      "form.message": "Повідомлення", "form.submit": "Надіслати заявку",
      "form.consent": "Я погоджуюсь, що мої дані будуть оброблені для опрацювання запиту.",
      "form.privacylink": "Політика конфіденційності",
      "form.ok": "Дякуємо! Ми зв'яжемося з вами найближчим часом.",
      "contact.eyebrow": "Контакти", "contact.title": "Завітайте до студії",
      "contact.addrk": "Адреса", "contact.mailk": "E-mail", "contact.phonek": "Телефон", "contact.hoursk": "Години роботи",
      "contact.hoursv": "Пн–Пт 09:00–18:00 · Сб за домовленістю",
      "footer.tag": "Преміальне оклеювання, дизайн та якість. Мюнхен.", "footer.cta": "Залишити заявку",
      "footer.imprint": "Impressum", "footer.privacy": "Datenschutz", "footer.terms": "AGB",
      "footer.rights": "Усі права захищені.",

      // --- Split Landing Page (Нові ключі) ---
      "split.title": "FOLIX-LAB — Преміальне оклеювання авто та зовнішня реклама в Мюнхені",
      "split.leftTitle": "Car Wrapping",
      "split.leftSub": "Повна та часткова оклейка, PPF-захист лаку та індивідуальні деталі стилю для вашого автомобіля.",
      "split.leftBtn": "Увійти в студію",
      "split.rightTitle": "Werbetechnik",
      "split.rightSub": "Оформлення витрин, вивіски, рекламні таблички, банери та друк наклейок будь-якої складності.",
      "split.rightBtn": "Переглянути послуги",

      // --- Werbetechnik Page (Нові ключі) ---
      "werbe.meta.title": "FOLIX-LAB — Зовнішня реклама, вивіски та наклейки в Мюнхені",
      "werbe.meta.desc": "Професійне оформлення витрин, виготовлення вивісок, табличок та наклейок у Мюнхені. Якісні матеріали, точний плоттерний крій та монтаж.",
      "werbe.hero.eyebrow": "Студія рекламних технологій · Мюнхен",
      "werbe.hero.title1": "Яскравий бренд", "werbe.hero.title2": "для вашого бізнесу",
      "werbe.hero.sub": "Оформлення вітрин, рекламне обклеювання транспорту, вивіски та друк наклейок будь-якої форми. Привертаємо увагу клієнтів та працюємо на ваш імідж.",
      "werbe.hero.cta1": "Розрахувати вартість", "werbe.hero.cta2": "Дивитись послуги",
      "werbe.hero.stat1n": "Видимість", "werbe.hero.stat1l": "залучення клієнтів",
      "werbe.hero.stat2n": "Якість", "werbe.hero.stat2l": "стійкість до сонця й дощу",
      "werbe.hero.stat3n": "Дизайн", "werbe.hero.stat3l": "індивідуальна порізка",
      "werbe.services.eyebrow": "Послуги", "werbe.services.title": "Рішення, які роблять вас помітними",
      "werbe.services.lead": "Від оформлення витрин магазину до брендування автопарку та рекламних вивісок — допомагаємо бізнесу виділитися серед конкурентів.",
      "werbe.svc1.title": "Оформлення витрин",
      "werbe.svc1.text": "Привертайте увагу клієнтів з першого погляду. Оформлення вітрин матовою плівкою (Milchglas), контурна порізка логотипів, рекламні написи та сезонні знижки. Професійний монтаж та легке видалення без слідів.",
      "werbe.svc1.t1": "Матова плівка", "werbe.svc1.t2": "Логотипи & Шрифти", "werbe.svc1.t3": "Оформлення вітрин",
      "werbe.svc2.title": "Реклама на авто & наклейки",
      "werbe.svc2.text": "Мобільна реклама вашого бізнесу. Від маленьких наклейок, логотипів на двері та контактних даних до брендування комерційних фургонів та корпоративних автопарків. Зносостійкі плівки, стійкі до автомийок.",
      "werbe.svc2.t1": "Наклейки на авто", "werbe.svc2.t2": "Логотипи на двері", "werbe.svc2.t3": "Брендування",
      "werbe.svc3.title": "Вивіски та таблички",
      "werbe.svc3.text": "Професійні вивіски для офісів, праксисів та магазинів. Індивідуальні таблички з акрилу (Acrylglas), міцного композиту (Alu-Dibond), інформаційні щити та світлові короба (Leuchtkästen), які працюють на ваш імідж.",
      "werbe.svc3.t1": "Акрил & Dibond", "werbe.svc3.t2": "Інформаційні щити", "werbe.svc3.t3": "Світлові вивіски",
      "werbe.svc4.title": "Тонування вікон та захист",
      "werbe.svc4.text": "Професійне тонування вікон для більшої конфіденційності, захисту від ультрафіолету та створення комфортної температури в салоні. Наші високоякісні плівки зменшують сонячне світло та захищають від сторонніх поглядів, надаючи авто елегантного вигляду.",
      "werbe.svc4.t1": "Тонування", "werbe.svc4.t2": "УФ-захист", "werbe.svc4.t3": "Конфіденційність",
      "werbe.works.lead": "Кожен проєкт — це акуратний монтаж та якісні плівки.",
      "werbe.why.title": "Якість реклами, яка працює на вас",
      "werbe.why.lead": "Ми використовуємо високоякісні плівки, які стійкі до ультрафіолету та опадів. Гарантуємо акуратну роботу без бульбашок та рівні лінії крою.",
      "werbe.why1.title": "Плоттерна точність", "werbe.why1.text": "Ідеальний контурний крій букв, логотипів та фігурних наклейок будь-якого розміру.",
      "werbe.why2.title": "Стійкість до погоди", "werbe.why2.text": "Реклама не вигорає на сонці та не відклеюється під дощем і снігом.",
      "werbe.why3.title": "Професійний монтаж", "werbe.why3.text": "Наклеюємо без бульбашок, складок та заломів на будь-які гладкі поверхні.",
      "werbe.why4.title": "Швидкий демонтаж", "werbe.why4.text": "При необхідності знімемо стару рекламу без пошкодження скла чи лаку.",
      "werbe.quote.title": "Розрахуйте вартість реклами",
      "werbe.quote.lead": "Надішліть розміри та ваші побажання — ми підготуємо макет і точний прорахунок вартості виготовлення та монтажу.",
      "werbe.form.service": "Тип реклами",
      "werbe.form.opt1": "Оформлення вітрини",
      "werbe.form.opt2": "Реклама на авто / наклейки",
      "werbe.form.opt3": "Вивіска / Табличка",
      "werbe.form.opt4": "Друк наклейок / етикеток",
      "werbe.form.opt5": "Банер / Інше",
      "werbe.footer.tag": "Професійна зовнішня реклама, вивіски та наклейки. Мюнхен.",
    },

    /* ---------------- GERMAN ---------------- */
    de: {
      "meta.title": "FOLIX-LAB — Premium Fahrzeugfolierung & Lackschutz · München",
      "meta.desc": "FOLIX-LAB — Studio für Premium-Fahrzeugfolierung in München. Voll- und Teilfolierung, PPF-Lackschutz, Werbetechnik. Hochwertige Folien, individuelle Lösungen.",
      "nav.services": "Leistungen", "nav.process": "Ablauf", "nav.works": "Projekte",
      "nav.materials": "Materialien", "nav.contact": "Kontakt", "nav.cta": "Preis anfragen",
      "hero.eyebrow": "Premium-Folierungsstudio · München",
      "hero.title1": "Eine zweite Haut", "hero.title2": "für Ihr Fahrzeug",
      "hero.sub": "Professionelle Fahrzeugfolierung, PPF-Lackschutz und Werbetechnik für Privat- und Geschäftskunden. Präzision, hochwertige Materialien und ein makelloses Finish.",
      "hero.cta1": "Preis anfragen", "hero.cta2": "Projekte ansehen",
      "hero.stat1n": "Präzision", "hero.stat1l": "sorgfältige Verarbeitung",
      "hero.stat2n": "Schutz", "hero.stat2l": "PPF gegen Steinschläge",
      "hero.stat3n": "Design", "hero.stat3l": "individuelle Lösungen", "hero.scroll": "Scrollen",
      "services.eyebrow": "Leistungen", "services.title": "Alles für den perfekten Auftritt",
      "services.lead": "Von der kompletten Farbänderung bis zum unsichtbaren Lackschutz — jedes Projekt mit höchster Präzision und hochwertigen Materialien.",
      "svc1.title": "Vollfolierung",
      "svc1.text": "Verwandeln Sie Ihr Fahrzeug komplett: matt, glänzend, satin oder individuelle Sonderfarben. Hochwertige Folie mit präziser Verarbeitung, die zugleich den Originallack schützt und für einen einzigartigen Auftritt sorgt. Wir verwenden Premium-Materialien: 3М, Avery Dennison, Oracal, XPEL, SunTek.",
      "svc1.t1": "Matt / Glanz / Satin", "svc1.t2": "Sonderfarben", "svc1.t3": "Lackschutz",
      "svc2.title": "PPF — Lackschutz",
      "svc2.text": "Die transparente PPF-Folie schützt den Lack vor Steinschlägen, Kratzern, Straßenschmutz und Abnutzung. Besonders beanspruchte Bereiche wie Frontstoßstange, Motorhaube, Kotflügel und Einstiege behalten länger ihr gepflegtes Aussehen. Eine gute Wahl für Neu- und Sportwagen.",
      "svc2.t1": "Steinschlagschutz", "svc2.t2": "Selbstheilend", "svc2.t3": "Glanz / Matt",
      "svc3.title": "Custom Details",
      "svc3.text": "Mit individueller Teilfolierung und Custom Details setzen wir gezielte Akzente. Ob Dach, Spiegel, Motorhaube, Zierleisten oder spezielle Design-Elemente — wir entwickeln Lösungen passend zu Fahrzeug und Stil.",
      "svc3.t1": "Dach / Spiegel", "svc3.t2": "Color-Shift", "svc3.t3": "Design-Akzente",
      "svc4.title": "Werbetechnik",
      "svc4.text": "Wir verwandeln Ihr Fahrzeug in einen wirksamen Werbeträger. Außenwerbung, Corporate Design und Fahrzeugbeschriftung für Unternehmen — stilvoll, lesbar und langlebig.",
      "svc4.t1": "Fahrzeugbeschriftung", "svc4.t2": "Plott & Schnitt", "svc4.t3": "Druck / Design",
      "svc5.title": "Sichtschutz & Tönung",
      "svc5.text": "Professionelle Scheibentönung für mehr Privatsphäre, UV-Schutz und eine angenehmere Temperatur im Innenraum. Unsere hochwertigen Tönungsfolien reduzieren Sonneneinstrahlung und neugierige Blicke, während sie Ihrem Fahrzeug eine elegante und moderne Optik verleihen.",
      "svc5.t1": "Privatsphäre", "svc5.t2": "UV-Schutz", "svc5.t3": "Styling",
      "svc.btn": "Anfrage stellen",
      "process.eyebrow": "So arbeiten wir", "process.title": "Ein Prozess ohne Kompromisse",
      "step1.title": "Beratung", "step1.text": "Wir besprechen Ihre Idee, begutachten das Fahrzeug und finden die optimale Lösung.",
      "step2.title": "Folienauswahl & Angebot", "step2.text": "Farb- und Strukturmuster, transparente Kalkulation ohne versteckte Kosten.",
      "step3.title": "Vorbereitung & Folierung", "step3.text": "Gründliche Reinigung, Entfettung, Teildemontage und präzise Folierung vom Profi.",
      "step4.title": "Kontrolle & Übergabe", "step4.text": "Prüfung jeder Kante, finales Detailing und Pflegeempfehlungen.",
      "works.eyebrow": "Projekte", "works.title": "Ausgewählte Projekte", "works.lead": "Jedes Projekt lebt von Details, die man aus der Nähe sieht.",
      "works.cap1": "Vollfolierung · Satin Black", "works.cap2": "Custom · Color-Shift",
      "works.cap3": "PPF · Lackschutz", "works.cap4": "Werbetechnik · Branding",
      "why.eyebrow": "Warum FOLIX-LAB", "why.title": "Premium, das man im Detail sieht",
      "why.lead": "Wir setzen auf präzise Ausführung und hochwertige Materialien. Das Ergebnis: ein makelloses Finish, das lange hält.",
      "why.cta": "Projekt besprechen",
      "why1.title": "Erfahrene Profis", "why1.text": "Ein erfahrenes Team, das millimetergenau arbeitet.",
      "why2.title": "Hochwertige Folien", "why2.text": "Wir verarbeiten ausschließlich hochwertige Profi-Folien namhafter Hersteller.",
      "why3.title": "Langlebiges Ergebnis", "why3.text": "Sorgfältige Verarbeitung für ein sauberes, langlebiges Ergebnis.",
      "why4.title": "Individuelle Lösungen", "why4.text": "Lösungen passend zu Fahrzeug, Stil und Budget — von der Idee bis zum Ergebnis.",
      "quote.eyebrow": "Kostenlose Kalkulation", "quote.title": "Berechnen Sie den Preis Ihres Projekts",
      "quote.lead": "Senden Sie eine Anfrage — wir erstellen ein individuelles Angebot und finden die optimale Lösung für Ihr Fahrzeug.",
      "quote.perk1": "Schnelle Rückmeldung", "quote.perk2": "Transparente Kalkulation", "quote.perk3": "Unverbindlich",
      "form.name": "Name", "form.phone": "Telefon", "form.email": "E-Mail",
      "form.vehicle": "Fahrzeug (Marke / Modell)", "form.service": "Leistung",
      "form.opt1": "Vollfolierung", "form.opt2": "PPF — Lackschutz", "form.opt3": "Teilfolierung",
      "form.opt4": "Außenwerbung", "form.opt5": "Design & Branding",
      "form.message": "Nachricht", "form.submit": "Anfrage senden",
      "form.consent": "Ich willige in die Verarbeitung meiner Daten zur Bearbeitung der Anfrage ein.",
      "form.privacylink": "Datenschutzerklärung",
      "form.ok": "Danke! Wir melden uns in Kürze bei Ihnen.",
      "contact.eyebrow": "Kontakt", "contact.title": "Besuchen Sie unser Studio",
      "contact.addrk": "Adresse", "contact.mailk": "E-Mail", "contact.phonek": "Telefon", "contact.hoursk": "Öffnungszeiten",
      "contact.hoursv": "Mo–Fr 09:00–18:00 · Sa nach Vereinbarung",
      "footer.tag": "Premium Folierung, Design und Qualität. München.", "footer.cta": "Anfrage senden",
      "footer.imprint": "Impressum", "footer.privacy": "Datenschutz", "footer.terms": "AGB",
      "footer.rights": "Alle Rechte vorbehalten.",

      // --- Split Landing Page ---
      "split.title": "FOLIX-LAB — Premium Fahrzeugfolierung & Werbetechnik in München",
      "split.leftTitle": "Car Wrapping",
      "split.leftSub": "Premium Voll- und Teilfolierung, PPF-Lackschutz und individuelle Design-Akzente für Ihr Fahrzeug.",
      "split.leftBtn": "Studio betreten",
      "split.rightTitle": "Werbetechnik",
      "split.rightSub": "Schaufensterbeschriftung, Schilder, Lichtwerbung, Banner und Aufkleberdruck aller Art.",
      "split.rightBtn": "Bereich betreten",

      // --- Werbetechnik Page ---
      "werbe.meta.title": "FOLIX-LAB — Werbetechnik, Schaufensterbeschriftung & Aufkleber · München",
      "werbe.meta.desc": "Professionelle Schaufensterbeschriftung, Schilder und Aufkleber in München. Hochwertige Folien, präziser Plotschnitt und fachgerechte Montage vor Ort.",
      "werbe.hero.eyebrow": "Studio für Werbetechnik · München",
      "werbe.hero.title1": "Sichtbarer Erfolg", "werbe.hero.title2": "für Ihr Unternehmen",
      "werbe.hero.sub": "Professionelle Beschriftungen, Außenwerbung, Schilder und individueller Aufkleberdruck. Wir bringen Ihre Werbebotschaft präzise auf die Fläche.",
      "werbe.hero.cta1": "Preis anfragen", "werbe.hero.cta2": "Leistungen ansehen",
      "werbe.hero.stat1n": "Sichtbarkeit", "werbe.hero.stat1l": "mehr Kunden im Blick",
      "werbe.hero.stat2n": "Qualität", "werbe.hero.stat2l": "wetter- & UV-beständig",
      "werbe.hero.stat3n": "Design", "werbe.hero.stat3l": "maßgeschneiderter Plott",
      "werbe.services.eyebrow": "Leistungen", "werbe.services.title": "Lösungen, die auffallen",
      "werbe.services.lead": "Von der Schaufensterbeklebung über Fahrzeugplots bis hin zu Firmenschildern — wir sorgen dafür, dass Ihr Geschäft aus der Masse heraussticht.",
      "werbe.svc1.title": "Schaufensterbeschriftung",
      "werbe.svc1.text": "Gewinnen Sie Kunden auf den ersten Blick. Schaufensterbeklebung mit Milchglasfolie (Sichtschutz), geplotteten Logos, Werbeschriften und Sale-Aktionen. Professionelle Montage und rückstandsfreie Entfernung.",
      "werbe.svc1.t1": "Milchglasfolie", "werbe.svc1.t2": "Logo-Plots", "werbe.svc1.t3": "Schaufensterwerbung",
      "werbe.svc2.title": "Fahrzeugbeschriftung & Aufkleber",
      "werbe.svc2.text": "Mobile Werbung für Ihr Unternehmen. Von kleinen Aufklebern und Logos auf den Türen über Kontaktdaten bis zur Teilbeklebung von Kastenwagen und ganzen Fuhrparks. Waschanlagenfeste, UV-beständige Folien.",
      "werbe.svc2.t1": "Fahrzeugsticker", "werbe.svc2.t2": "Türbeschriftung", "werbe.svc2.t3": "Fuhrparkbranding",
      "werbe.svc3.title": "Schilder & Werbeanlagen",
      "werbe.svc3.text": "Professionelle Schilder für Büros, Kanzleien, Praxen und Geschäfte. Individuelle Acrylglasschilder, robuste Alu-Dibond-Platten, Werbesysteme und Leuchtkästen, die für ein starkes Image sorgen.",
      "werbe.svc3.t1": "Acryl & Alu-Dibond", "werbe.svc3.t2": "Wandschilder", "werbe.svc3.t3": "Leuchtreklame",
      "werbe.svc4.title": "Sichtschutz & Tönung",
      "werbe.svc4.text": "Professionelle Scheibentönung für mehr Privatsphäre, UV-Schutz und eine angenehmere Temperatur im Innenraum. Unsere hochwertigen Tönungsfolien reduzieren Sonneneinstrahlung und neugierige Blicke, während sie Ihrem Fahrzeug eine elegante und moderne Optik verleihen.",
      "werbe.svc4.t1": "Scheibentönung", "werbe.svc4.t2": "UV-Schutz", "werbe.svc4.t3": "Sichtschutz",
      "werbe.works.lead": "Jedes Projekt steht für präzise Montage und langlebige Folien.",
      "werbe.why.title": "Werbung, die für Sie arbeitet",
      "werbe.why.lead": "Wir verarbeiten Markenfolien, die UV-stabil und witterungsbeständig sind. Wir garantieren blasenfreie Applikation und saubere Schnittkanten.",
      "werbe.why1.title": "Präziser Plott", "werbe.why1.text": "Perfekter Konturschnitt für Schriften, Logos und Formaufkleber jeder Größe.",
      "werbe.why2.title": "Wetterfest", "werbe.why2.text": "Unsere Folien trotzen UV-Strahlung, Regen und Schnee über Jahre hinweg.",
      "werbe.why3.title": "Fachmontage", "werbe.why3.text": "Blasenfreie und saubere Verklebung auf Glas, Metall und Schildern direkt vor Ort.",
      "werbe.why4.title": "Rückstandsfrei", "werbe.why4.text": "Wir entfernen alte Beschriftungen rückstandsfrei, ohne Glas oder Lack zu zerkratzen.",
      "werbe.quote.title": "Werbeprojekt kalkulieren",
      "werbe.quote.lead": "Senden Sie uns Maße und Wünsche — wir erstellen einen Entwurf und eine genaue Kalkulation für Produktion und Montage.",
      "werbe.form.service": "Art der Werbung",
      "werbe.form.opt1": "Schaufensterbeschriftung",
      "werbe.form.opt2": "Fahrzeugbeschriftung / Sticker",
      "werbe.form.opt3": "Schild / Werbeanlage",
      "werbe.form.opt4": "Aufkleber- / Etikettendruck",
      "werbe.form.opt5": "Banner / Sonstiges",
      "werbe.footer.tag": "Professionelle Werbetechnik, Beschriftungen und Schilder. München.",
    },

    /* ---------------- RUSSIAN ---------------- */
    ru: {
      "meta.title": "FOLIX-LAB — Премиальная оклейка и защита авто · Мюнхен",
      "meta.desc": "FOLIX-LAB — студия премиальной оклейки авто в Мюнхене. Полная и частичная оклейка, PPF-защита лака, рекламное брендирование. Профессиональные плёнки, индивидуальный подход.",
      "nav.services": "Услуги", "nav.process": "Процесс", "nav.works": "Работы",
      "nav.materials": "Материалы", "nav.contact": "Контакты", "nav.cta": "Рассчитать стоимость",
      "hero.eyebrow": "Студия премиальной оклейки · Мюнхен",
      "hero.title1": "Вторая кожа", "hero.title2": "для вашего авто",
      "hero.sub": "Профессиональная оклейка, PPF-заглава лака и рекламное брендирование для частных и бизнес-клиентов. Точность, качественные материалы и безупречный результат.",
      "hero.cta1": "Рассчитать стоимость", "hero.cta2": "Смотреть работы",
      "hero.stat1n": "Точность", "hero.stat1l": "тщательная работа",
      "hero.stat2n": "Защита", "hero.stat2l": "PPF против сколов",
      "hero.stat3n": "Дизайн", "hero.stat3l": "индивидуальные решения", "hero.scroll": "Листайте",
      "services.eyebrow": "Услуги", "services.title": "Всё, что делает авто безупречным",
      "services.lead": "От полной смены цвета до невидимой защиты лака — каждый проект выполняем с ювелирной точностью и качественными материалами.",
      "svc1.title": "Полная оклейка",
      "svc1.text": "Полностью меняем облик авто: мат, глянец, сатин или индивидуальные цвета. Качественная плёнка с точной обработкой, которая ещё и защищает оригинальный лак и делает вашу машину неповторимой. Работаем с премиум-материалами: 3М, Avery Dennison, Oracal, XPEL, SunTek.",
      "svc1.t1": "Мат / Глянец / Сатин", "svc1.t2": "Спеццвета", "svc1.t3": "Защита лака",
      "svc2.title": "PPF — защита лака",
      "svc2.text": "Прозрачная плёнка PPF защищает лак от сколов, царапин, дорожной грязи и износа. Самые уязвимые зоны — бампер, капот, крылья, пороги — дольше сохраняют ухоженный вид. Хорошее решение для новых и спортивных авто.",
      "svc2.t1": "Анти-скол", "svc2.t2": "Самовосстановление", "svc2.t3": "Глянец / Мат",
      "svc3.title": "Custom Details",
      "svc3.text": "Частичная оклейка и индивидуальные детали для точных акцентов. Крыша, зеркала, капот, молдинги или специальные дизайн-элементы — разрабатываем решения под ваше авто и стиль.",
      "svc3.t1": "Крыша / Зеркала", "svc3.t2": "Color-Shift", "svc3.t3": "Декор-акценты",
      "svc4.title": "Рекламное брендирование",
      "svc4.text": "Превращаем ваш транспорт в работающий рекламный носитель. Наружная реклама, фирменный стиль и брендирование авто для бизнеса — стильно, читаемо и долговечно.",
      "svc4.t1": "Брендирование авто", "svc4.t2": "Плоттерная резка", "svc4.t3": "Печать / Дизайн",
      "svc5.title": "Тонировка & Защита стекол",
      "svc5.text": "Профессиональная тонировка стекол для большей приватности, UV-защиты и комфортной температуры в салоне. Качественные тонировочные пленки снижают солнечное излучение и посторонние взгляды, придавая авто элегантный вид.",
      "svc5.t1": "Приватность", "svc5.t2": "UV-защита", "svc5.t3": "Стайлинг",
      "svc.btn": "Отправить запрос",
      "process.eyebrow": "Как мы работаем", "process.title": "Процесс без компромиссов",
      "step1.title": "Консультация", "step1.text": "Обсуждаем идею, осматриваем авто и подбираем оптимальное решение.",
      "step2.title": "Подбор плёнки и расчёт", "step2.text": "Образцы цветов и фактур, прозрачная смета без скрытых расходов.",
      "step3.title": "Подготовка и оклейка", "step3.text": "Глубокая мойка, обезжиривание, демонтаж элементов и точная оклейка мастером.",
      "step4.title": "Контроль и выдача", "step4.text": "Проверка каждого шва, финальный детейлинг и рекомендации по уходу.",
      "works.eyebrow": "Портфолио", "works.title": "Избранные работы", "works.lead": "Каждый проект — это детали, которые видно вблизи.",
      "works.cap1": "Полная оклейка · Satin Black", "works.cap2": "Custom · Color-Shift",
      "works.cap3": "PPF · Защита лака", "works.cap4": "Werbetechnik · Брендирование",
      "why.eyebrow": "Почему FOLIX-LAB", "why.title": "Премиальность, которую видно в деталях",
      "why.lead": "Мы делаем ставку на точное исполнение и качественные материалы. Результат — безупречный финиш, служащий годами.",
      "why.cta": "Обсудить проект",
      "why1.title": "Опытные мастера", "why1.text": "Опытная команда, работающая с точностью до миллиметра.",
      "why2.title": "Качественные плёнки", "why2.text": "Работаем только с качественными профессиональными плёнками известных производителей.",
      "why3.title": "Долговечный результат", "why3.text": "Тщательная работа ради чистого и долговечного результата.",
      "why4.title": "Индивидуальный подход", "why4.text": "Решения под ваше авто, стиль и бюджет — от идеи до результата.",
      "quote.eyebrow": "Бесплатный расчёт", "quote.title": "Рассчитайте стоимость вашего проекта",
      "quote.lead": "Оставьте заявку — подготовим индивидуальное предложение и подберём оптимальное решение для вашего авто.",
      "quote.perk1": "Быстрый ответ", "quote.perk2": "Прозрачная смета", "quote.perk3": "Без обязательств",
      "form.name": "Имя", "form.phone": "Телефон", "form.email": "E-mail",
      "form.vehicle": "Авто (марка / модель)", "form.service": "Услуга",
      "form.opt1": "Полная оклейка", "form.opt2": "PPF — защита лака", "form.opt3": "Частичная оклейка",
      "form.opt4": "Наружная реклама", "form.opt5": "Дизайн и брендирование",
      "form.message": "Сообщение", "form.submit": "Отправить заявку",
      "form.consent": "Я согласен на обработку моих данных для ответа на запрос.",
      "form.privacylink": "Политика конфиденциальности",
      "form.ok": "Спасибо! Мы свяжемся с вами в ближайшее время.",
      "contact.eyebrow": "Контакты", "contact.title": "Загляните в студию",
      "contact.addrk": "Адрес", "contact.mailk": "E-mail", "contact.phonek": "Телефон", "contact.hoursk": "Часы работы",
      "contact.hoursv": "Пн–Пт 09:00–18:00 · Сб по договорённости",
      "footer.tag": "Премиальная оклейка, дизайн и качество. Мюнхен.", "footer.cta": "Оставить заявку",
      "footer.imprint": "Impressum", "footer.privacy": "Datenschutz", "footer.terms": "AGB",
      "footer.rights": "Все права защищены.",

      // --- Split Landing Page ---
      "split.title": "FOLIX-LAB — Премиальная оклейка авто и наружная реклама в Мюнхене",
      "split.leftTitle": "Car Wrapping",
      "split.leftSub": "Полная и частичная оклейка, PPF-защита лака и индивидуальные детали стиля для вашего автомобиля.",
      "split.leftBtn": "Войти в студию",
      "split.rightTitle": "Werbetechnik",
      "split.rightSub": "Оформление витрин, вывески, рекламные таблички, баннеры и печать наклеек любой сложности.",
      "split.rightBtn": "Посмотреть услуги",

      // --- Werbetechnik Page ---
      "werbe.meta.title": "FOLIX-LAB — Наружная реклама, вывески и наклейки в Мюнхене",
      "werbe.meta.desc": "Профессиональное оформление витрин, изготовление вывесок, табличек и наклеек в Мюнхене. Качественные материалы, точная плоттерная резка и монтаж.",
      "werbe.hero.eyebrow": "Студия рекламных технологий · Мюнхен",
      "werbe.hero.title1": "Яркий бренд", "werbe.hero.title2": "для вашего бизнеса",
      "werbe.hero.sub": "Оформление витрин, рекламная оклейка транспорта, вывески и печать наклеек любой формы. Привлекаем внимание клиентов и работаем на ваш имидж.",
      "werbe.hero.cta1": "Рассчитать стоимость", "werbe.hero.cta2": "Смотреть услуги",
      "werbe.hero.stat1n": "Видимость", "werbe.hero.stat1l": "привлечение клиентов",
      "werbe.hero.stat2n": "Качество", "werbe.hero.stat2l": "устойчивость к погоде",
      "werbe.hero.stat3n": "Дизайн", "werbe.hero.stat3l": "индивидуальная резка",
      "werbe.services.eyebrow": "Услуги", "werbe.services.title": "Решения, которые делают вас заметными",
      "werbe.services.lead": "От оформления витрин магазина до брендирования автопарка и рекламных вывесок — помогаем бизнесу выделиться среди конкурентов.",
      "werbe.svc1.title": "Оформление витрин",
      "werbe.svc1.text": "Привлекайте внимание клиентов с первого взгляда. Оформление витрин матовой пленкой (Milchglas), контурная резка логотипов, рекламные надписи и сезонные скидки. Профессиональный монтаж и легкое удаление без следов.",
      "werbe.svc1.t1": "Матовая пленка", "werbe.svc1.t2": "Логотипы & Шрифты", "werbe.svc1.t3": "Оформление витрин",
      "werbe.svc2.title": "Реклама на авто & наклейки",
      "werbe.svc2.text": "Мобильная реклама вашего бизнеса. От маленьких наклеек, логотипов на двери и контактных данных до брендирования коммерческих фургонов и корпоративных автопарков. Износостойкие пленки, устойчивые к автомойкам.",
      "werbe.svc2.t1": "Наклейки на авто", "werbe.svc2.t2": "Логотипы на двери", "werbe.svc2.t3": "Брендирование",
      "werbe.svc3.title": "Вывески и таблички",
      "werbe.svc3.text": "Профессиональные вывески для офисов, праксисов и магазинов. Индивідуальные таблички из акрила (Acrylglas), прочного композита (Alu-Dibond), информационные щиты и световые короба (Leuchtkästen), которые работают на ваш имидж.",
      "werbe.svc3.t1": "Акрил & Dibond", "werbe.svc3.t2": "Информационные щиты", "werbe.svc3.t3": "Световые вывески",
      "werbe.svc4.title": "Тонировка стекол",
      "werbe.svc4.text": "Профессиональная тонировка стекол для уединения, защиты от ультрафиолета и комфортной температуры в салоне. Наши высококачественные пленки снижают солнечное излучение и защищают от посторонних взглядов, придавая автомобилю элегантный вид.",
      "werbe.svc4.t1": "Тонировка", "werbe.svc4.t2": "УФ-защита", "werbe.svc4.t3": "Приватность",
      "werbe.works.lead": "Каждый проект — это аккуратный монтаж и качественные пленки.",
      "werbe.why.title": "Качество рекламы, которая работает на вас",
      "werbe.why.lead": "Мы используем высококачественные пленки, устойчивые к ультрафиолету и осадкам. Гарантируем аккуратную работу без пузырей и ровные линии реза.",
      "werbe.why1.title": "Плоттерная точность", "werbe.why1.text": "Идеальный контурный рез букв, логотипов и фигурных наклеек любого размера.",
      "werbe.why2.title": "Стойкость к погоде", "werbe.why2.text": "Наша реклама не выгорает на солнце и не отклеивается под дождем и снегом.",
      "werbe.why3.title": "Профессиональный монтаж", "werbe.why3.text": "Наклеиваем без пузырей, складок и заломов на любые гладкие поверхности.",
      "werbe.why4.title": "Быстрый демонтаж", "werbe.why4.text": "При необходимости снимем старую рекламу без повреждения стекла или лака.",
      "werbe.quote.title": "Рассчитайте стоимость рекламы",
      "werbe.quote.lead": "Отправьте размеры и ваши пожелания — мы подготовим макет и точный расчет стоимости изготовления и монтажа.",
      "werbe.form.service": "Тип рекламы",
      "werbe.form.opt1": "Оформление витрины",
      "werbe.form.opt2": "Реклама на авто / наклейки",
      "werbe.form.opt3": "Вывеска / Табличка",
      "werbe.form.opt4": "Печать наклеек / этикеток",
      "werbe.form.opt5": "Баннер / Другое",
      "werbe.footer.tag": "Профессиональная наружная реклама, вывески и наклейки. Мюнхен.",
    },

    /* ---------------- ENGLISH ---------------- */
    en: {
      "meta.title": "FOLIX-LAB — Premium Car Wrapping & Paint Protection · Munich",
      "meta.desc": "FOLIX-LAB — premium car wrapping studio in Munich. Full & partial wraps, PPF paint protection, vehicle branding. Professional films, individual approach.",
      "nav.services": "Services", "nav.process": "Process", "nav.works": "Work",
      "nav.materials": "Materials", "nav.contact": "Contact", "nav.cta": "Get a quote",
      "hero.eyebrow": "Premium wrapping studio · Munich",
      "hero.title1": "A second skin", "hero.title2": "for your car",
      "hero.sub": "Professional car wrapping, PPF paint protection and vehicle branding for private and business clients. Precision, quality materials and a flawless finish.",
      "hero.cta1": "Get a quote", "hero.cta2": "View our work",
      "hero.stat1n": "Precision", "hero.stat1l": "careful workmanship",
      "hero.stat2n": "Protection", "hero.stat2l": "PPF against chips",
      "hero.stat3n": "Design", "hero.stat3l": "individual solutions", "hero.scroll": "Scroll",
      "services.eyebrow": "Services", "services.title": "Everything for a flawless car",
      "services.lead": "From a full colour change to invisible paint protection — every project is executed with precision and quality materials.",
      "svc1.title": "Full wrap",
      "svc1.text": "Completely transform your car: matte, gloss, satin or custom colours. Quality film with precise installation that also protects the original paint and makes you stand out on the road. We use premium materials: 3М, Avery Dennison, Oracal, XPEL, SunTek.",
      "svc1.t1": "Matte / Gloss / Satin", "svc1.t2": "Custom colours", "svc1.t3": "Paint protection",
      "svc2.title": "PPF — paint protection",
      "svc2.text": "Transparent PPF protects the paint from stone chips, scratches, road dirt and daily wear. High-stress areas — bumper, hood, fenders, sills — keep their look longer. A good choice for new and sports cars.",
      "svc2.t1": "Anti-chip", "svc2.t2": "Self-healing", "svc2.t3": "Gloss / Matte",
      "svc3.title": "Custom Details",
      "svc3.text": "Partial wrapping and custom details for precise accents. Roof, mirrors, hood, trim or special design elements — we develop solutions tailored to your car and style.",
      "svc3.t1": "Roof / Mirrors", "svc3.t2": "Color-Shift", "svc3.t3": "Design accents",
      "svc4.title": "Vehicle branding",
      "svc4.text": "We turn your vehicle into advertising that works. Exterior advertising, corporate identity and vehicle lettering for business — stylish, legible and durable.",
      "svc4.t1": "Vehicle lettering", "svc4.t2": "Plotter cut", "svc4.t3": "Print / Design",
      "svc5.title": "Window Tinting & Privacy",
      "svc5.text": "Professional window tinting for more privacy, UV protection and a cooler interior. Our quality tinting films reduce solar radiation and prying eyes, while giving your vehicle an elegant and modern look.",
      "svc5.t1": "Privacy", "svc5.t2": "UV Protection", "svc5.t3": "Styling",
      "svc.btn": "Send request",
      "process.eyebrow": "How we work", "process.title": "A process without compromise",
      "step1.title": "Consultation", "step1.text": "We discuss your idea, inspect the car and find the optimal solution.",
      "step2.title": "Film selection & quote", "step2.text": "Colour and texture samples, a transparent quote with no hidden costs.",
      "step3.title": "Prep & installation", "step3.text": "Deep cleaning, degreasing, partial disassembly and precise installation by a pro.",
      "step4.title": "QC & handover", "step4.text": "Every edge checked, final detailing and care recommendations.",
      "works.eyebrow": "Portfolio", "works.title": "Selected work", "works.lead": "Every project is about details you notice up close.",
      "works.cap1": "Full wrap · Satin Black", "works.cap2": "Custom · Color-Shift",
      "works.cap3": "PPF · Paint protection", "works.cap4": "Werbetechnik · Branding",
      "why.eyebrow": "Why FOLIX-LAB", "why.title": "Premium you can see in the details",
      "why.lead": "We rely on precise execution and quality materials. The result: a flawless finish that lasts for years.",
      "why.cta": "Discuss your project",
      "why1.title": "Experienced installers", "why1.text": "An experienced team working to the millimetre.",
      "why2.title": "Quality films", "why2.text": "We work only with high-quality professional films from reputable manufacturers.",
      "why3.title": "Long-lasting result", "why3.text": "Careful workmanship for a clean, durable result.",
      "why4.title": "Individual approach", "why4.text": "Solutions tailored to your car, style and budget — from idea to result.",
      "quote.eyebrow": "Free estimate", "quote.title": "Estimate the cost of your project",
      "quote.lead": "Send a request — we'll prepare an individual offer and find the best solution for your car.",
      "quote.perk1": "Fast response", "quote.perk2": "Transparent quote", "quote.perk3": "No obligation",
      "form.name": "Name", "form.phone": "Phone", "form.email": "E-mail",
      "form.vehicle": "Vehicle (make / model)", "form.service": "Service",
      "form.opt1": "Full wrap", "form.opt2": "PPF — paint protection", "form.opt3": "Partial wrap",
      "form.opt4": "Exterior advertising", "form.opt5": "Design & branding",
      "form.message": "Message", "form.submit": "Send request",
      "form.consent": "I agree to my data being processed to handle my request.",
      "form.privacylink": "Privacy Policy",
      "form.ok": "Thank you! We'll get back to you shortly.",
      "contact.eyebrow": "Contact", "contact.title": "Visit our studio",
      "contact.addrk": "Contact details", "contact.mailk": "E-mail", "contact.phonek": "Phone", "contact.hoursk": "Opening hours",
      "contact.hoursv": "Mon–Fri 09:00–18:00 · Sat by appointment",
      "footer.tag": "Premium wrapping, design and quality. Munich.", "footer.cta": "Send a request",
      "footer.imprint": "Impressum", "footer.privacy": "Datenschutz", "footer.terms": "AGB",
      "footer.rights": "All rights reserved.",

      // --- Split Landing Page ---
      "split.title": "FOLIX-LAB — Premium Car Wrapping & Signage in Munich",
      "split.leftTitle": "Car Wrapping",
      "split.leftSub": "Full & partial wraps, PPF paint protection and custom design accents for your vehicle.",
      "split.leftBtn": "Enter Studio",
      "split.rightTitle": "Werbetechnik",
      "split.rightSub": "Window lettering, signage, lightboxes, banners and custom sticker printing of all kinds.",
      "split.rightBtn": "Enter Area",

      // --- Werbetechnik Page ---
      "werbe.meta.title": "FOLIX-LAB — Signage, Window Lettering & Stickers · Munich",
      "werbe.meta.desc": "Professional window lettering, signage, and custom stickers in Munich. Premium materials, precise plotter cutting, and on-site installation.",
      "werbe.hero.eyebrow": "Advertising technology studio · Munich",
      "werbe.hero.title1": "Visible Brand", "werbe.hero.title2": "for your business",
      "werbe.hero.sub": "Professional window graphics, fleet decals, signage, and custom sticker printing. We bring your brand message to life with precision.",
      "werbe.hero.cta1": "Get a quote", "werbe.hero.cta2": "View services",
      "werbe.hero.stat1n": "Visibility", "werbe.hero.stat1l": "customer attraction",
      "werbe.hero.stat2n": "Quality", "werbe.hero.stat2l": "weatherproof & UV-stable",
      "werbe.hero.stat3n": "Design", "werbe.hero.stat3l": "tailored plotting",
      "werbe.services.eyebrow": "Services", "werbe.services.title": "Solutions that get noticed",
      "werbe.services.lead": "From retail storefront displays to vehicle fleet lettering and custom company signs — we help your business stand out.",
      "werbe.svc1.title": "Window Lettering",
      "werbe.svc1.text": "Attract clients at first glance. Window branding with frosted film (Milchglas), plotted logos, promotional lettering, and seasonal sales stickers. Professional installation and clean removal.",
      "werbe.svc1.t1": "Frosted Film", "werbe.svc1.t2": "Logo Plots", "werbe.svc1.t3": "Storefront Graphics",
      "werbe.svc2.title": "Vehicle Lettering & Decals",
      "werbe.svc2.text": "Mobile advertising for your business. From small stickers, door logos, and contact details to graphics for commercial vans and corporate fleets. Weatherproof and carwash-safe films.",
      "werbe.svc2.t1": "Car Stickers", "werbe.svc2.t2": "Door Graphics", "werbe.svc2.t3": "Fleet Branding",
      "werbe.svc3.title": "Signs & Displays",
      "werbe.svc3.text": "Custom acrylic signs, robust Alu-Dibond plates, information boards, and lightboxes that project a premium brand image.",
      "werbe.svc3.t1": "Acrylic & Dibond", "werbe.svc3.t2": "Wall Signs", "werbe.svc3.t3": "Lightboxes",
      "werbe.svc4.title": "Window Tinting & Privacy",
      "werbe.svc4.text": "Professional window tinting for increased privacy, UV protection, and a more comfortable interior temperature. Our high-quality films reduce glare and unwanted attention, while giving your vehicle a sleek and modern look.",
      "werbe.svc4.t1": "Window Tinting", "werbe.svc4.t2": "UV Protection", "werbe.svc4.t3": "Privacy Films",
      "werbe.works.lead": "Every project represents precise installation and durable films.",
      "werbe.why.title": "Advertising that works for you",
      "werbe.why.lead": "We use premium films that are UV-resistant and weatherproof. We guarantee bubble-free application and clean edges.",
      "werbe.why1.title": "Precise Plotting", "werbe.why1.text": "Perfect contour-cutting for letters, logos, and custom-shaped decals of any size.",
      "werbe.why2.title": "Weatherproof", "werbe.why2.text": "Our graphics withstand UV rays, rain, and snow for years to come.",
      "werbe.why3.title": "Professional Install", "werbe.why3.text": "Clean and bubble-free installation on glass, metal, and signs directly on site.",
      "werbe.why4.title": "Clean Removal", "werbe.why4.text": "We remove old lettering cleanly without scratching glass or paint surfaces.",
      "werbe.quote.title": "Estimate your signage project",
      "werbe.quote.lead": "Send us your dimensions and requirements — we will prepare a layout and a precise estimate for production and installation.",
      "werbe.form.service": "Type of Advertising",
      "werbe.form.opt1": "Window Lettering",
      "werbe.form.opt2": "Vehicle Lettering / Decals",
      "werbe.form.opt3": "Sign / Lightbox",
      "werbe.form.opt4": "Sticker / Label Printing",
      "werbe.form.opt5": "Banner / Other",
      "werbe.footer.tag": "Professional signage, lettering, and custom stickers. Munich.",
    },
  };

  const LABEL = { uk: "UA", de: "DE", ru: "RU", en: "EN" };

  function initVinylAnimation() {
    document.querySelectorAll(".iri").forEach((el) => {
      if (el.parentNode && el.parentNode.classList.contains("vinyl-wrapper")) return;
      const wrapper = document.createElement("span");
      wrapper.className = "vinyl-wrapper";
      const backing = document.createElement("span");
      backing.className = "vinyl-backing";
      backing.textContent = el.textContent;
      backing.setAttribute("data-text", el.getAttribute("data-text") || el.textContent);
      el.parentNode.insertBefore(wrapper, el);
      wrapper.appendChild(backing);
      wrapper.appendChild(el);
    });
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.uk;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = dict[el.getAttribute("data-i18n")];
      if (val == null) return;
      if (el.tagName === "META") {
        el.setAttribute("content", val);
      } else {
        el.textContent = val;
        el.setAttribute("data-text", val);
        if (el.parentNode && el.parentNode.classList.contains("vinyl-wrapper")) {
          const backing = el.parentNode.querySelector(".vinyl-backing");
          if (backing) {
            backing.textContent = val;
            backing.setAttribute("data-text", val);
          }
        }
      }
    });
    const root = document.documentElement;
    root.lang = lang;
    root.setAttribute("data-lang", lang);
    const cur = document.querySelector(".lang__cur");
    if (cur) cur.textContent = LABEL[lang];
    document.querySelectorAll("[data-set-lang]").forEach((li) =>
      li.classList.toggle("is-active", li.getAttribute("data-set-lang") === lang)
    );
    try { sessionStorage.setItem("folix_lang", lang); } catch (e) { }
  }

  // Resolve initial language: ?lang= > saved > default de
  let lang = "de";
  try {
    const url = new URLSearchParams(location.search).get("lang");
    const saved = sessionStorage.getItem("folix_lang");
    if (url && I18N[url]) lang = url;
    else if (saved && I18N[saved]) lang = saved;
  } catch (e) { }

  function initSwitcherClicks() {
    document.querySelectorAll(".site-switch__btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const href = btn.getAttribute("href");
        const currentLang = document.documentElement.getAttribute("data-lang") || "de";
        window.location.href = href + "?lang=" + currentLang;
      });
    });
  }

  // Wrap DOM elements for vinyl animation before translation
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initVinylAnimation();
      applyLang(lang);
      initSwitcherClicks();
    });
  } else {
    initVinylAnimation();
    applyLang(lang);
    initSwitcherClicks();
  }
  window.FOLIX_setLang = applyLang;
  window.FOLIX_LANGS = Object.keys(I18N);
})();
