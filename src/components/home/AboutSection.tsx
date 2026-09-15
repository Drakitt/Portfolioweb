import React from 'react';
import { useTranslations } from 'next-intl';
import { AboutProcessComposition } from './AboutProcessComposition';

export function AboutSection() {
  const t = useTranslations('About');

  return (
    <section
      id="about"
      aria-label={t('sectionLabel')}
      className="scroll-mt-24 overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {t('eyebrow')}
          </p>
          <h2 className="mt-4 font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
            <span className="block">{t('headline1')}</span>
            <span className="mt-1 block italic">{t('headline2')}</span>
          </h2>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted">
            {t('body1')}
          </p>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted">
            {t('body2')}
          </p>
        </div>

        <div className="lg:col-span-6">
          <AboutProcessComposition />
        </div>
      </div>
    </section>
  );
}
