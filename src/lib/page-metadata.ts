import type { Metadata } from 'next';
import type { AppLocale } from '@/i18n/routing';
import { withBasePath } from '@/lib/hosting';
import { getSiteUrl, joinSiteUrl } from '@/lib/site-url';

const OG_LOCALE: Record<AppLocale, string> = {
  en: 'en_US',
  es: 'es_ES',
};

export const homePathnames = {
  en: '/en/',
  es: '/es/',
} as const;

export const crmProjectPathnames = {
  en: '/en/work/crm-project/',
  es: '/es/work/crm-project/',
} as const;

export const dentalSysPathnames = {
  en: '/en/work/dentalsys/',
  es: '/es/work/dentalsys/',
} as const;

export const automationQaPathnames = {
  en: '/en/work/automation-qa/',
  es: '/es/work/automation-qa/',
} as const;

export const portfolioOgImage = {
  url: '/og/portfolio.png',
  width: 1200,
  height: 630,
  alt: 'Raquel Terrazas, Software Engineer, Barcelona',
} as const;

export const crmProjectOgImage = {
  url: '/og/crm-project.png',
  width: 1200,
  height: 630,
  alt: 'CRM case study — Raquel Terrazas',
} as const;

function publicHref(pathname: string): string {
  return joinSiteUrl(pathname) ?? withBasePath(pathname);
}

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
  const metadataBaseUrl = joinSiteUrl('/');
  const otherLocale: AppLocale = locale === 'en' ? 'es' : 'en';
  const canonical = publicHref(pathname);
  const imageUrl = publicHref(image.url);

  return {
    title,
    description,
    ...(metadataBaseUrl ? { metadataBase: new URL(metadataBaseUrl) } : {}),
    alternates: {
      canonical,
      languages: {
        en: publicHref(alternatePathnames.en),
        es: publicHref(alternatePathnames.es),
        'x-default': publicHref(alternatePathnames.en),
      },
    },
    openGraph: {
      type,
      siteName: 'Raquel Terrazas',
      title,
      description,
      locale: OG_LOCALE[locale],
      alternateLocale: [OG_LOCALE[otherLocale]],
      images: [{ ...image, url: imageUrl }],
      ...(siteUrl ? { url: publicHref(pathname) } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
