import { getBasePath } from '@/lib/hosting';

/**
 * Optional public origin for canonical, sitemap, and social URLs.
 *
 * After the first deployment, set NEXT_PUBLIC_SITE_URL to the live origin
 * with no trailing slash. Production builds default to the GitHub Pages
 * project URL when the variable is unset:
 *
 *   NEXT_PUBLIC_SITE_URL=https://drakitt.github.io/portfolio
 *
 * Local `next dev` works when this is unset. Do not invent a custom domain.
 */
export function getSiteUrl(): URL | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    return undefined;
  }

  try {
    const url = new URL(raw);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return undefined;
    }
    return url;
  } catch {
    return undefined;
  }
}

/**
 * Resolve a site-relative path against the public origin.
 *
 * `NEXT_PUBLIC_SITE_URL` may already include `/portfolio`. `basePath` may
 * also be `/portfolio`. This join keeps a single copy of the project path.
 */
export function joinSiteUrl(pathname: string): string | undefined {
  const siteUrl = getSiteUrl();
  if (!siteUrl) {
    return undefined;
  }

  const configuredPath = siteUrl.pathname.replace(/\/+$/, '');
  const basePath = getBasePath();
  const alreadyHasBasePath =
    Boolean(basePath) &&
    (configuredPath === basePath || configuredPath.startsWith(`${basePath}/`));
  const prefix = alreadyHasBasePath ? configuredPath : `${configuredPath}${basePath}`;

  const hashIndex = pathname.indexOf('#');
  const pathPart = hashIndex === -1 ? pathname : pathname.slice(0, hashIndex);
  const hashPart = hashIndex === -1 ? '' : pathname.slice(hashIndex);
  const normalizedPath = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;

  const url = new URL(`${prefix}${normalizedPath}`, siteUrl.origin);
  if (hashPart) {
    url.hash = hashPart.startsWith('#') ? hashPart.slice(1) : hashPart;
  }

  return url.href;
}
