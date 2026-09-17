import { routing } from '@/i18n/routing';

const englishHref = `./${routing.defaultLocale}/`;

export default function RootPage() {
  return (
    <p>
      <a href={englishHref}>Continue to the English portfolio</a>
    </p>
  );
}
