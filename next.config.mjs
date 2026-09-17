import createNextIntlPlugin from 'next-intl/plugin';
import { GITHUB_PAGES_BASE_PATH, GITHUB_PAGES_SITE_URL } from './hosting.config.mjs';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : GITHUB_PAGES_BASE_PATH;

process.env.NEXT_PUBLIC_BASE_PATH ??= basePath;
if (!isDev) {
  process.env.NEXT_PUBLIC_SITE_URL ??= GITHUB_PAGES_SITE_URL;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
