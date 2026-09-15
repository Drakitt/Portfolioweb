import React from 'react';
import type { Locale, Project } from '@/types/content';
import { localize } from '@/types/content';
import { Link } from '@/i18n/routing';
import { Tape } from '@/components/scrapbook/Tape';
import { ProjectVisual } from './ProjectVisual';

type TapeTone = 'sage' | 'butter' | 'pink';

type ProjectCardProps = {
  readonly project: Project;
  readonly locale: Locale;
  readonly categoryLabel: string;
  readonly caseStudyLabel: string;
  readonly tapeTone?: TapeTone;
};

export function ProjectCard({
  project,
  locale,
  categoryLabel,
  caseStudyLabel,
  tapeTone = 'sage',
}: ProjectCardProps) {
  const rotationBySerial: Record<string, string> = {
    '01': 'lg:-rotate-[0.7deg]',
    '02': 'lg:rotate-[0.55deg]',
    '03': 'lg:-rotate-[0.35deg]',
  };
  const rotationClass = rotationBySerial[project.serial] ?? '';

  return (
    <article className={`relative ${rotationClass}`}>
      <Tape tone={tapeTone} className="left-8 top-[-0.4rem] w-14 -rotate-2" />
      <div className="paper-surface flex h-full flex-col border border-border p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {project.serial} / {categoryLabel}
        </p>

        <h3 className="mt-3 font-heading text-3xl tracking-tight text-foreground">
          {localize(project.title, locale)}
        </h3>

        <p className="mt-3 font-heading text-lg leading-snug text-foreground/90">
          {localize(project.summary, locale)}
        </p>

        <div className="relative mt-5">
          <ProjectVisual project={project} locale={locale} />
          <p
            className="pointer-events-none absolute -right-1 -top-3 font-hand text-lg text-forest sm:text-xl"
            aria-hidden="true"
          >
            {localize(project.annotation, locale)}
          </p>
        </div>

        <p className="mt-5 font-body text-sm leading-relaxed text-muted">
          {localize(project.description, locale)}
        </p>

        <p className="mt-4 font-body text-sm text-foreground">
          {localize(project.capabilities, locale)}
        </p>

        {project.technologies.length > 0 ? (
          <p className="mt-3 font-mono text-[11px] tracking-wide text-muted">
            {project.technologies.join(' · ')}
          </p>
        ) : null}

        {project.caseStudyHref ? (
          <Link
            href={project.caseStudyHref}
            className="mt-6 inline-flex min-h-touch items-center font-mono text-xs text-foreground underline decoration-foreground/35 underline-offset-4 hover:text-forest hover:decoration-forest"
          >
            {caseStudyLabel}
          </Link>
        ) : (
          <p className="mt-6 font-mono text-xs text-muted">{caseStudyLabel}</p>
        )}
      </div>
    </article>
  );
}
