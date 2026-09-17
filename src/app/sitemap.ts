import type { MetadataRoute } from 'next';
import {
  automationQaPathnames,
  dentalSysPathnames,
  homePathnames,
  crmProjectPathnames,
} from '@/lib/page-metadata';
import { joinSiteUrl } from '@/lib/site-url';

export const dynamic = 'force-static';

const publicPaths = [
  homePathnames.en,
  homePathnames.es,
  crmProjectPathnames.en,
  crmProjectPathnames.es,
  dentalSysPathnames.en,
  dentalSysPathnames.es,
  automationQaPathnames.en,
  automationQaPathnames.es,
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = publicPaths
    .map((path) => joinSiteUrl(path))
    .filter((url): url is string => Boolean(url));

  return urls.map((url) => ({ url }));
}
