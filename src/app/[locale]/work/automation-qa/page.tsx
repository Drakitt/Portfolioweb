import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { isAppLocale } from '@/i18n/routing';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AutomationQaExperience } from '@/components/work/automation-qa/AutomationQaExperience';
import { automationQaPathnames, buildPageMetadata, portfolioOgImage } from '@/lib/page-metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isAppLocale(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: 'AutomationQa.meta' });

  return buildPageMetadata({
    locale,
    title: t('title'),
    description: t('description'),
    pathname: automationQaPathnames[locale],
    alternatePathnames: automationQaPathnames,
    type: 'article',
    image: portfolioOgImage,
  });
}

export default async function AutomationQaPage({
  params,
}: {
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col justify-between selection:bg-accent selection:text-on-accent">
      <Header />
      <main id="main-content" className="flex-grow">
        <AutomationQaExperience />
      </main>
      <Footer />
    </div>
  );
}
