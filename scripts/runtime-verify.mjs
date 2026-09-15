const base = 'http://localhost:3000';

const pages = [
  '/es',
  '/en',
  '/es/work/immigration-crm',
  '/en/work/immigration-crm',
];

const bad = [
  'Header.aria.skipToContent',
  'Header.aria.language',
  'MISSING_MESSAGE',
  'IntlError',
];

for (const path of pages) {
  const response = await fetch(`${base}${path}`, { cache: 'no-store' });
  const text = await response.text();
  const hits = Object.fromEntries(bad.map((needle) => [needle, text.includes(needle)]));
  console.log(JSON.stringify({
    path,
    status: response.status,
    skipEn: text.includes('Skip to main content'),
    skipEs: text.includes('Saltar al contenido principal'),
    languageEn: text.includes('aria-label="Language"'),
    languageEs: text.includes('aria-label="Idioma"'),
    fallbacks: hits,
  }));
}
