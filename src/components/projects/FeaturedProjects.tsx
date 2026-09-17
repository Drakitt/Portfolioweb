import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { getFeaturedProjects } from '@/content/data/projects';
import { isAppLocale } from '@/i18n/routing';
import type { Project, ProjectCategory } from '@/types/content';
import { CodeMarkDoodle } from '@/components/scrapbook/doodles';
import { ProjectCard } from './ProjectCard';

type TapeTone = 'sage' | 'butter' | 'pink';

const tapeBySlug: Record<Project['slug'], TapeTone> = {
  dentalsys: 'sage',
  'crm-project': 'butter',
  'automation-qa': 'pink',
};

export function FeaturedProjects() {
  const t = useTranslations('Work');
  const localeValue = useLocale();
  const locale = isAppLocale(localeValue) ? localeValue : 'en';
  const featured = getFeaturedProjects();
  const categoryLabels: Record<ProjectCategory, string> = {
    healthcare: t('categories.healthcare'),
    'professional-services': t('categories.professional-services'),
    automation: t('categories.automation'),
  };

  return (
    <section
      id="work"
      aria-label={t('sectionLabel')}
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <div className="flex items-center gap-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {t('heading')}
            </h2>
            <CodeMarkDoodle className="text-forest" />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {t('microcopy')}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-3 lg:items-start lg:gap-6">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              categoryLabel={categoryLabels[project.category]}
              caseStudyLabel={
                project.slug === 'automation-qa'
                  ? t('experienceAction')
                  : t('caseStudyAction')
              }
              tapeTone={tapeBySlug[project.slug]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
