/**
 * Optional public origin for canonical, sitemap, and social URLs.
 *
 * After the first deployment, set NEXT_PUBLIC_SITE_URL in the host
 * (for example the Vercel project env) to the live origin with no
 * trailing slash:
 *
 *   NEXT_PUBLIC_SITE_URL=https://<deployment-host>
 *
 * Local development must work when this is unset. Do not invent a
 * production domain here.
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
