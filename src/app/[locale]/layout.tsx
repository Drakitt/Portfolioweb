import React from 'react';
import { Newsreader, Inter, JetBrains_Mono, Caveat } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PersonJsonLd } from '@/components/seo/PersonJsonLd';
import { themeInitScript } from '@/components/providers/ThemeProvider';
import { isAppLocale, routing } from '@/i18n/routing';
import { joinSiteUrl } from '@/lib/site-url';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isAppLocale(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const metadataBaseUrl = joinSiteUrl('/');

  return {
    title: t('title'),
    description: t('description'),
    ...(metadataBaseUrl ? { metadataBase: new URL(metadataBaseUrl) } : {}),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-background text-foreground antialiased selection:bg-accent selection:text-on-accent"
        suppressHydrationWarning
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PersonJsonLd />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
