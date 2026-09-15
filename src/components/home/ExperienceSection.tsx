import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  capabilityGroups,
  educationPrograms,
  trilogyCapabilities,
} from '@/content/data/experience';

export function ExperienceSection() {
  const t = useTranslations('Experience');
  const groupLabels = {
    build: t('groups.build'),
    automate: t('groups.automate'),
    product: t('groups.product'),
  };

  return (
    <section
      id="experience"
      aria-label={t('sectionLabel')}
      className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {t('eyebrow')}
          </p>
          <h2 className="mt-4 font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
            {t('headline')}
          </h2>
        </header>

        <ol className="experience-timeline mt-12">
          <li className="experience-timeline__item">
            <article className="paper-surface border border-border p-5 sm:p-6 lg:-rotate-[0.4deg]">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {t('trilogy.period')}
              </p>
              <h3 className="mt-2 font-heading text-2xl tracking-tight text-foreground">
                Trilogy Software
              </h3>
              <p className="mt-1 font-body text-sm text-foreground">{t('trilogy.role')}</p>
              <p className="mt-4 font-body text-sm leading-relaxed text-muted">
                {t('trilogy.body1')}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                {t('trilogy.body2')}
              </p>
              <p className="mt-4 font-mono text-xs tracking-wide text-muted">
                {trilogyCapabilities.join(' · ')}
              </p>
            </article>
          </li>

          <li className="experience-timeline__item">
            <article className="paper-surface border border-border p-5 sm:p-6 lg:rotate-[0.45deg]">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {t('consulting.kind')}
              </p>
              <h3 className="mt-2 font-heading text-2xl tracking-tight text-foreground">
                {t('consulting.heading')}
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-muted">
                {t('consulting.body')}
              </p>
              <Link
                href="/work/immigration-crm"
                className="mt-5 inline-flex min-h-touch items-center font-mono text-xs text-foreground underline decoration-foreground/35 underline-offset-4 hover:text-forest hover:decoration-forest"
              >
                {t('consulting.caseStudy')}
              </Link>
            </article>
          </li>
        </ol>

        <aside className="mt-14 max-w-xl border-t border-border pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {t('education.eyebrow')}
          </p>
          <p className="mt-3 font-heading text-xl text-foreground">{t('education.degree')}</p>
          <p className="mt-1 font-body text-sm text-muted">{t('education.institution')}</p>
          <ul className="mt-4 space-y-1 font-mono text-xs text-muted">
            {educationPrograms.map((program) => (
              <li key={program.id}>
                {program.name} — {program.year}
              </li>
            ))}
          </ul>
        </aside>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {capabilityGroups.map((group) => (
            <div key={group.id}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {groupLabels[group.id]}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="paper-surface border border-border px-3 py-1.5 font-mono text-xs text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
