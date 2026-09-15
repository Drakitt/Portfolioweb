import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturedProjects } from '@/components/projects/FeaturedProjects';
import { AboutSection } from '@/components/home/AboutSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { ContactSection } from '@/components/home/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { isAppLocale } from '@/i18n/routing';
import { buildPageMetadata, homePathnames } from '@/lib/page-metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isAppLocale(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return buildPageMetadata({
    locale,
    title: t('title'),
    description: t('description'),
    pathname: homePathnames[locale],
    alternatePathnames: homePathnames,
    type: 'website',
  });
}

export default async function HomePage({
  params,
}: {
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col justify-between selection:bg-accent selection:text-on-accent">
      <Header />
      <main id="main-content" className="flex-grow">
        <HeroSection />
        <FeaturedProjects />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
