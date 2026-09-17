import type { Metadata } from 'next';
import { withBasePath } from '@/lib/hosting';

/**
 * Favicon and Apple touch icons for the GitHub Pages project site.
 *
 * File-convention `app/icon.svg` emits `sizes="any"`, which Chromium often
 * skips, and raw `/icon.svg` would resolve to the github.io origin instead of
 * `/portfolio`. These hrefs go through `withBasePath` so production keeps the
 * project prefix while `next dev` stays at the site root.
 */
export function siteIcons(): NonNullable<Metadata['icons']> {
  return {
    icon: [
      {
        url: withBasePath('/icon.svg'),
        type: 'image/svg+xml',
      },
      {
        url: withBasePath('/apple-icon.png'),
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: [
      {
        url: withBasePath('/apple-icon.png'),
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  };
}
