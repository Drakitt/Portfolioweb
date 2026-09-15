import { readFileSync } from 'node:fs';

function flatten(value, prefix = '') {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return Object.entries(value).flatMap(([key, child]) =>
      flatten(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [prefix];
}

const en = JSON.parse(readFileSync(new URL('../messages/en.json', import.meta.url), 'utf8'));
const es = JSON.parse(readFileSync(new URL('../messages/es.json', import.meta.url), 'utf8'));
const enKeys = new Set(flatten(en));
const esKeys = new Set(flatten(es));

const missingInEs = [...enKeys].filter((key) => !esKeys.has(key));
const missingInEn = [...esKeys].filter((key) => !enKeys.has(key));

console.log(JSON.stringify({
  enCount: enKeys.size,
  esCount: esKeys.size,
  missingInEs,
  missingInEn,
  headerAriaEn: en.Header?.aria ?? null,
  headerAriaEs: es.Header?.aria ?? null,
}, null, 2));
