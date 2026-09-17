/**
 * Public path helpers for the GitHub Pages project site.
 *
 * Production origin: https://drakitt.github.io/portfolio
 *
 * `next dev` leaves NEXT_PUBLIC_BASE_PATH empty so local URLs stay at
 * `/en` and `/es`. Production builds prefix raw paths with `/portfolio`.
 *
 * Prefer next/link, next/image, and next-intl navigation when possible —
 * those already honor `basePath`. Use `withBasePath` only for raw `href`
 * values that Next.js will not rewrite.
 */

export function getBasePath(): string {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? '';
  if (!raw || raw === '/') {
    return '';
  }

  const withLeadingSlash = raw.startsWith('/') ? raw : `/${raw}`;
  return withLeadingSlash.replace(/\/+$/, '');
}

export function withBasePath(path: string): string {
  const base = getBasePath();
  const hashIndex = path.indexOf('#');
  const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? '' : path.slice(hashIndex);
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;

  return `${base}${normalized}${hash}`;
}
