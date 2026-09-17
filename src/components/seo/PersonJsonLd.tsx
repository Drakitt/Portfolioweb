import { siteLinks } from '@/content/data/site';
import { joinSiteUrl } from '@/lib/site-url';

export function PersonJsonLd() {
  const siteUrl = joinSiteUrl('/');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Raquel Terrazas',
    jobTitle: 'Software Engineer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Barcelona',
      addressCountry: 'ES',
    },
    sameAs: [siteLinks.github, siteLinks.linkedin],
    email: siteLinks.email,
    ...(siteUrl ? { url: siteUrl } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
