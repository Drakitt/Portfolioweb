import React from 'react';
import { useTranslations } from 'next-intl';
import { siteLinks } from '@/content/data/site';
import { UnderlineDoodle } from '@/components/scrapbook/doodles';
import { HeroSoftwareComposition } from './HeroSoftwareComposition';

export function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section
      aria-label="Hero"
      className="relative overflow-x-clip px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {t('techLabel')}
          </p>

          <h1 className="mt-5 font-heading text-[2rem] leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
            <span className="block">{t('headlineBefore')}</span>
            <span className="mt-1 block">
              {t('headlineAfter')}{' '}
              <span className="relative inline-block italic">
                {t('headlineEmphasis')}
                <UnderlineDoodle className="absolute -bottom-1 left-0 w-full text-forest" />
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted sm:text-lg">
            {t('body')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex min-h-touch items-center justify-center border border-accent bg-accent px-6 py-3 font-body text-sm text-on-accent transition-colors hover:bg-accent-hover"
            >
              {t('ctaPrimary')}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-touch items-center justify-center border border-border bg-surface px-6 py-3 font-body text-sm text-foreground transition-colors hover:border-foreground"
            >
              {t('ctaSecondary')}
            </a>
          </div>

          <div className="mt-8 space-y-2">
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted">
              <li>
                <a
                  href={siteLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-touch items-center hover:text-foreground"
                >
                  {t('links.github')}
                </a>
              </li>
              <li aria-hidden="true">·</li>
              <li>
                <a
                  href={siteLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-touch items-center hover:text-foreground"
                >
                  {t('links.linkedin')}
                </a>
              </li>
              <li aria-hidden="true">·</li>
              <li>
                <a
                  href={`mailto:${siteLinks.email}`}
                  className="inline-flex min-h-touch items-center hover:text-foreground"
                >
                  {t('links.email')}
                </a>
              </li>
            </ul>
            <p className="font-mono text-xs text-muted">{t('location')}</p>
          </div>
        </div>

        <HeroSoftwareComposition />
      </div>
    </section>
  );
}
