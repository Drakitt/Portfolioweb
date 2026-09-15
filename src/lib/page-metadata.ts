import type { Metadata } from 'next';
import type { AppLocale } from '@/i18n/routing';
import { getSiteUrl } from '@/lib/site-url';

const OG_LOCALE: Record<AppLocale, string> = {
  en: 'en_US',
  es: 'es_ES',
};

export const homePathnames = {
  en: '/en',
  es: '/es',
} as const;

export const immigrationCrmPathnames = {
  en: '/en/work/immigration-crm',
  es: '/es/work/immigration-crm',
} as const;

export const dentalSysPathnames = {
  en: '/en/work/dentalsys',
  es: '/es/work/dentalsys',
} as const;

export const automationQaPathnames = {
  en: '/en/work/automation-qa',
  es: '/es/work/automation-qa',
} as const;

export const portfolioOgImage = {
  url: '/og/portfolio.png',
  width: 1200,
  height: 630,
  alt: 'Raquel Terrazas, Software Engineer, Barcelona',
} as const;

export const immigrationCrmOgImage = {
  url: '/og/immigration-crm.png',
  width: 1200,
  height: 630,
  alt: 'Immigration CRM case study — Raquel Terrazas',
} as const;

export function buildPageMetadata({
  locale,
  title,
  description,
  pathname,
  alternatePathnames,
  type = 'website',
  image = portfolioOgImage,
}: {
  locale: AppLocale;
  title: string;
  description: string;
  pathname: string;
  alternatePathnames: Record<AppLocale, string>;
  type?: 'website' | 'article';
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const siteUrl = getSiteUrl();
  const otherLocale: AppLocale = locale === 'en' ? 'es' : 'en';

  return {
    title,
    description,
    ...(siteUrl ? { metadataBase: siteUrl } : {}),
    alternates: {
      canonical: pathname,
      languages: {
        en: alternatePathnames.en,
        es: alternatePathnames.es,
        'x-default': alternatePathnames.en,
      },
    },
    openGraph: {
      type,
      siteName: 'Raquel Terrazas',
      title,
      description,
      locale: OG_LOCALE[locale],
      alternateLocale: [OG_LOCALE[otherLocale]],
      images: [image],
      ...(siteUrl ? { url: new URL(pathname, siteUrl).toString() } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  };
}
