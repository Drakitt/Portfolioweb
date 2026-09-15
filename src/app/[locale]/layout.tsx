import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PersonJsonLd } from '@/components/seo/PersonJsonLd';
import { isAppLocale, routing } from '@/i18n/routing';
import { getSiteUrl } from '@/lib/site-url';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isAppLocale(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const siteUrl = getSiteUrl();

  return {
    title: t('title'),
    description: t('description'),
    ...(siteUrl ? { metadataBase: siteUrl } : {}),
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
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PersonJsonLd />
      {children}
    </NextIntlClientProvider>
  );
}
