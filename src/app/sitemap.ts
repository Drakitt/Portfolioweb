import type { MetadataRoute } from 'next';
import {
  automationQaPathnames,
  dentalSysPathnames,
  homePathnames,
  immigrationCrmPathnames,
} from '@/lib/page-metadata';
import { getSiteUrl } from '@/lib/site-url';

const publicPaths = [
  homePathnames.en,
  homePathnames.es,
  immigrationCrmPathnames.en,
  immigrationCrmPathnames.es,
  dentalSysPathnames.en,
  dentalSysPathnames.es,
  automationQaPathnames.en,
  automationQaPathnames.es,
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) {
    return [];
  }

  return publicPaths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
