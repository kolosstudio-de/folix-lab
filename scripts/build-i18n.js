#!/usr/bin/env node
/**
 * Generates real per-language static pages (/, /uk/, /ru/, /en/) from the
 * DE/UK-authored templates in the repo root, using the translations already
 * defined in assets/js/i18n.js.
 *
 * German stays on the unprefixed root URLs (/, /car-wrapping, /werbetechnik)
 * and is always what gets baked into those files — no client-side language
 * detection or session/query override decides what a fresh visitor sees.
 * Other languages live under /uk/, /ru/, /en/ as fully separate, indexable
 * static pages (own canonical, own hreflang, own <html lang>).
 *
 * Run: node scripts/build-i18n.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SITE_URL = "https://folix-lab.de";
const LANGS = ["de", "uk", "ru", "en"];
const DEFAULT_LANG = "de";
const LOCALE = { de: "de_DE", uk: "uk_UA", ru: "ru_RU", en: "en_US" };
const LANG_LABEL = { uk: ["UA", "Українська"], de: ["DE", "Deutsch"], ru: ["RU", "Русский"], en: ["EN", "English"] };

// slug: '' = homepage (index.html), otherwise the clean-URL path segment
const PAGES = [
  { file: "index.html", slug: "" },
  { file: "car-wrapping.html", slug: "car-wrapping" },
  { file: "werbetechnik.html", slug: "werbetechnik" },
];

function pageUrl(lang, slug) {
  const prefix = lang === DEFAULT_LANG ? "" : `/${lang}`;
  return slug ? `${SITE_URL}${prefix}/${slug}` : `${SITE_URL}${prefix}/`;
}
function pageHref(lang, slug) {
  const prefix = lang === DEFAULT_LANG ? "" : `/${lang}`;
  return slug ? `${prefix}/${slug}` : `${prefix}/`;
}

/* ---------- Extract the I18N dictionary out of assets/js/i18n.js ---------- */
function loadDict() {
  const src = fs.readFileSync(path.join(ROOT, "assets/js/i18n.js"), "utf8");
  const start = src.indexOf("const I18N = {");
  if (start === -1) throw new Error("Could not find I18N object in i18n.js");
  const braceStart = src.indexOf("{", start);
  let depth = 0, i = braceStart, inStr = false, strCh = "";
  for (; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (c === "\\") { i++; continue; }
      if (c === strCh) inStr = false;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { inStr = true; strCh = c; continue; }
    if (c === "{") depth++;
    else if (c === "}") { depth--; if (depth === 0) break; }
  }
  const objLiteral = src.slice(braceStart, i + 1);
  // eslint-disable-next-line no-new-func
  return new Function(`return (${objLiteral});`)();
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escapeAttr(s) {
  return escapeHtml(s).replace(/"/g, "&quot;");
}

/* ---------- Bake data-i18n text/content directly into the markup ---------- */
function bakeI18n(html, dict) {
  return html.replace(
    /<([a-zA-Z][a-zA-Z0-9]*)((?:\s+[a-zA-Z][a-zA-Z0-9:-]*(?:="[^"]*")?)*)\s*(\/?)>([^<]*)/g,
    (full, tag, attrs, selfClose, text) => {
      const keyMatch = attrs.match(/\bdata-i18n="([\w.]+)"/);
      if (!keyMatch) return full;
      const val = dict[keyMatch[1]];
      if (val == null) return full;
      if (tag.toLowerCase() === "meta") {
        const newAttrs = /\bcontent="[^"]*"/.test(attrs)
          ? attrs.replace(/\bcontent="[^"]*"/, `content="${escapeAttr(val)}"`)
          : `${attrs} content="${escapeAttr(val)}"`;
        return `<${tag}${newAttrs}${selfClose ? " /" : ""}>${text}`;
      }
      return `<${tag}${attrs}${selfClose ? " /" : ""}>${escapeHtml(val)}`;
    }
  );
}

function buildLangMenu(currentLang, slug) {
  const items = LANGS.map((l) => {
    const [code, label] = LANG_LABEL[l];
    const active = l === currentLang ? ' class="is-active"' : "";
    return `          <li role="option"${active}><a href="${pageHref(l, slug)}"><span>${code}</span> ${label}</a></li>`;
  });
  return `<ul class="lang__menu" role="listbox">\n${items.join("\n")}\n        </ul>`;
}

function buildHreflang(slug) {
  const lines = LANGS.map(
    (l) => `  <link rel="alternate" hreflang="${l === "uk" ? "uk" : l}" href="${pageUrl(l, slug)}" />`
  );
  lines.push(`  <link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LANG, slug)}" />`);
  return lines.join("\n");
}

function render(template, lang, slug) {
  let html = bakeI18n(template, dict[lang] || dict[DEFAULT_LANG]);

  // <html lang="xx" data-lang="xx">
  html = html.replace(/<html lang="[a-z-]+" data-lang="[a-z-]+">/, `<html lang="${lang}" data-lang="${lang}">`);

  // canonical + og:url
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${pageUrl(lang, slug)}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${pageUrl(lang, slug)}" />`);

  // og:locale (primary + alternates)
  const altLocales = LANGS.filter((l) => l !== lang).map((l) => `  <meta property="og:locale:alternate" content="${LOCALE[l]}" />`).join("\n");
  html = html.replace(/<meta property="og:locale" content="[^"]*" \/>\n(?:\s*<meta property="og:locale:alternate" content="[^"]*" \/>\n?)+/,
    `<meta property="og:locale" content="${LOCALE[lang]}" />\n${altLocales}\n`);

  // hreflang block
  html = html.replace(/(?:  <link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>\n?)+/, buildHreflang(slug) + "\n");

  // lang switcher menu
  html = html.replace(/<ul class="lang__menu" role="listbox">[\s\S]*?<\/ul>/, buildLangMenu(lang, slug));

  // internal navigation (root-relative, language-aware)
  html = html
    .replace(/href="index\.html"/g, `href="${pageHref(lang, "")}"`)
    .replace(/href="car-wrapping\.html"/g, `href="${pageHref(lang, "car-wrapping")}"`)
    .replace(/href="werbetechnik\.html"/g, `href="${pageHref(lang, "werbetechnik")}"`)
    .replace(/href="impressum\.html"/g, `href="/impressum.html"`)
    .replace(/href="datenschutz\.html"/g, `href="/datenschutz.html"`)
    .replace(/href="agb\.html"/g, `href="/agb.html"`);

  // asset paths must be root-absolute so they resolve from /uk/, /ru/, /en/ too
  html = html
    .replace(/="assets\//g, '="/assets/')
    .replace(/="site\.webmanifest"/g, '="/site.webmanifest"');

  return html;
}

// Strip the legacy "?lang=" query-param interception from the split-page (index.html)
// — links are now real per-language URLs, no JS redirect needed.
function stripLegacyLangScript(html) {
  return html.replace(
    /\s*<script>\s*\/\/ Ensure navigation links carry language search parameter[\s\S]*?<\/script>\n?/,
    "\n"
  );
}

const dict = loadDict();

for (const { file, slug } of PAGES) {
  const templatePath = path.join(ROOT, file);
  let template = fs.readFileSync(templatePath, "utf8");
  if (file === "index.html") template = stripLegacyLangScript(template);

  for (const lang of LANGS) {
    const html = render(template, lang, slug);
    const outDir = lang === DEFAULT_LANG ? ROOT : path.join(ROOT, lang);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, file), html, "utf8");
    console.log("wrote", path.relative(ROOT, path.join(outDir, file)));
  }
}

/* ---------- sitemap.xml ---------- */
const changefreq = { "": "monthly", "car-wrapping": "monthly", werbetechnik: "monthly" };
const priority = { "": "1.0", "car-wrapping": "0.9", werbetechnik: "0.9" };
const today = new Date().toISOString().slice(0, 10);

const urlBlocks = PAGES.map(({ slug }) => {
  const alt = LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${pageUrl(l, slug)}"/>`).join("\n");
  return `  <url>
    <loc>${pageUrl(DEFAULT_LANG, slug)}</loc>
${alt}
    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LANG, slug)}"/>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq[slug]}</changefreq>
    <priority>${priority[slug]}</priority>
  </url>`;
}).join("\n");

// Non-default-language variants get their own <url> entries too (own canonical URL each)
const altUrlBlocks = [];
for (const { slug } of PAGES) {
  for (const l of LANGS) {
    if (l === DEFAULT_LANG) continue;
    altUrlBlocks.push(`  <url><loc>${pageUrl(l, slug)}</loc><changefreq>${changefreq[slug]}</changefreq><priority>${(parseFloat(priority[slug]) - 0.1).toFixed(1)}</priority></url>`);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlBlocks}
${altUrlBlocks.join("\n")}
  <url><loc>${SITE_URL}/impressum.html</loc><changefreq>yearly</changefreq><priority>0.2</priority></url>
  <url><loc>${SITE_URL}/datenschutz.html</loc><changefreq>yearly</changefreq><priority>0.2</priority></url>
  <url><loc>${SITE_URL}/agb.html</loc><changefreq>yearly</changefreq><priority>0.2</priority></url>
</urlset>
`;
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap, "utf8");
console.log("wrote sitemap.xml");
