import React from 'react';
import { routing } from '@/i18n/routing';

const englishHref = `./${routing.defaultLocale}/`;

export default function RootEntryLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="refresh" content={`0;url=${englishHref}`} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={englishHref} />
        <title>Raquel Terrazas</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
