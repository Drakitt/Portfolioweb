import React from 'react';
import { useTranslations } from 'next-intl';
import { siteLinks } from '@/content/data/site';
import { Tape } from '@/components/scrapbook/Tape';

export function ContactSection() {
  const t = useTranslations('Contact');

  return (
    <section
      id="contact"
      aria-label={t('sectionLabel')}
      className="scroll-mt-24 overflow-x-clip px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {t('eyebrow')}
          </p>
          <h2 className="mt-4 font-heading text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t('headline')}
          </h2>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted sm:text-lg">
            {t('body')}
          </p>
          <p className="mt-4 font-hand text-2xl text-forest" aria-hidden="true">
            {t('annotation')}
          </p>
        </div>

        <div className="paper-surface relative mt-10 flex max-w-lg flex-col items-start border border-border p-6 sm:p-8">
          <Tape tone="butter" className="right-10 top-[-0.4rem] w-14 rotate-2" />
          <a
            href={`mailto:${siteLinks.email}`}
            className="inline-flex min-h-touch items-center justify-center border border-accent bg-accent px-6 py-3 font-body text-sm text-on-accent transition-colors hover:bg-accent-hover"
          >
            {t('cta')}
          </a>
          <a
            href={`mailto:${siteLinks.email}`}
            className="mt-4 inline-flex min-h-touch items-center font-mono text-sm text-muted hover:text-foreground"
          >
            {siteLinks.email}
          </a>
          <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-muted">
            <li>
              <a
                href={siteLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-touch items-center hover:text-foreground"
              >
                GitHub
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
                LinkedIn
              </a>
            </li>
            <li aria-hidden="true">·</li>
            <li className="inline-flex min-h-touch items-center">{t('location')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
