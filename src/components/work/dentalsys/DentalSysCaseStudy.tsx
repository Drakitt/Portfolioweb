import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { dentalSysScreenshots } from '@/content/data/dentalsys';
import { EvidenceFrame } from '@/components/work/EvidenceFrame';
import { DentalSysArchitecture } from './DentalSysArchitecture';
import { withBasePath } from '@/lib/hosting';

function SectionEyebrow({ children }: { readonly children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{children}</p>
  );
}

function PaperNote({
  children,
  className = '',
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return (
    <span
      className={`paper-surface inline-block border border-border px-4 py-2.5 font-mono text-sm text-foreground ${className}`}
    >
      {children}
    </span>
  );
}

export function DentalSysCaseStudy() {
  const t = useTranslations('DentalSys');
  const locale = useLocale();
  const workHref = withBasePath(`/${locale}/#work`);

  const modules = [
    t('system.modules.patients'),
    t('system.modules.treatments'),
    t('system.modules.history'),
    t('system.modules.prescriptions'),
    t('system.modules.files'),
    t('system.modules.actions'),
  ];

  const interactions = [
    t('challenge.interactions.orbit'),
    t('challenge.interactions.dentition'),
    t('challenge.interactions.tooth'),
    t('challenge.interactions.face'),
    t('challenge.interactions.state'),
    t('challenge.interactions.treatment'),
  ];

  const treatmentSteps = [
    t('treatment.steps.patient'),
    t('treatment.steps.odontogram'),
    t('treatment.steps.state'),
    t('treatment.steps.treatment'),
  ];

  const worked = [
    t('reflection.worked.webgl'),
    t('reflection.worked.teeth'),
    t('reflection.worked.workflows'),
  ];

  const improve = [
    t('reflection.improve.testing'),
    t('reflection.improve.boundaries'),
    t('reflection.improve.authz'),
    t('reflection.improve.local'),
    t('reflection.improve.responsive'),
  ];

  const engineering = [
    t('engineering.items.angular'),
    t('engineering.items.api'),
    t('engineering.items.auth'),
    t('engineering.items.grid'),
    t('engineering.items.calendar'),
    t('engineering.items.storage'),
    t('engineering.items.docs'),
    t('engineering.items.odontogram'),
  ];

  return (
    <article className="overflow-x-clip">
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <a
          href={workHref}
          className="inline-flex min-h-touch items-center font-mono text-xs text-muted hover:text-foreground"
        >
          ← {t('backToWork')}
        </a>
      </div>

      <header className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('hero.eyebrow')}</SectionEyebrow>
        <h1 className="mt-4 font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
          {t('hero.title')}
        </h1>
        <p className="mt-4 max-w-2xl font-heading text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
          {t('hero.headline')}
        </p>
        <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-muted sm:text-lg">
          {t('hero.intro')}
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <EvidenceFrame
          src={dentalSysScreenshots.odontogram}
          alt={t('hero.odontogramAlt')}
          tapeTone="sage"
          annotation={t('hero.evidenceNote')}
          priority
          sizes="(min-width: 1280px) 80vw, 100vw"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow>{t('system.eyebrow')}</SectionEyebrow>
            <h2 className="mt-4 font-heading text-3xl tracking-tight text-foreground">
              {t('system.headline')}
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-muted">
              {t('system.body')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {modules.map((module, index) => (
                <PaperNote key={module} className={index % 2 === 0 ? '-rotate-1' : 'rotate-1'}>
                  {module}
                </PaperNote>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 lg:rotate-[0.6deg]">
            <EvidenceFrame
              src={dentalSysScreenshots.patients}
              alt={t('system.patientsAlt')}
              tapeTone="butter"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('appointments.eyebrow')}</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-heading text-3xl tracking-tight text-foreground">
          {t('appointments.headline')}
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted">
          {t('appointments.body')}
        </p>
        <div className="mt-8 lg:-rotate-[0.5deg]">
          <EvidenceFrame
            src={dentalSysScreenshots.calendar}
            alt={t('appointments.calendarAlt')}
            tapeTone="pink"
            sizes="(min-width: 1024px) 70vw, 100vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('challenge.eyebrow')}</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-heading text-3xl tracking-tight text-foreground sm:text-[2.1rem]">
          {t('challenge.headline')}
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-muted">
          {t('challenge.body')}
        </p>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {t('challenge.interactionsLabel')}
        </p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {interactions.map((item) => (
            <li key={item}>
              <PaperNote>{item}</PaperNote>
            </li>
          ))}
        </ul>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {t('architecture.eyebrow')}
        </p>
        <DentalSysArchitecture />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('treatment.eyebrow')}</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-heading text-3xl tracking-tight text-foreground">
          {t('treatment.headline')}
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted">
          {t('treatment.body')}
        </p>
        <ol className="mt-6 flex max-w-xl flex-wrap items-center gap-2 font-mono text-sm text-foreground">
          {treatmentSteps.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              <PaperNote>{step}</PaperNote>
              {index < treatmentSteps.length - 1 ? (
                <span className="text-muted" aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <div className="mt-8 lg:rotate-[0.7deg]">
          <EvidenceFrame
            src={dentalSysScreenshots.treatments}
            alt={t('treatment.treatmentsAlt')}
            tapeTone="sage"
            sizes="(min-width: 1024px) 64vw, 100vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {t('engineering.eyebrow')}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {engineering.map((item) => (
            <li key={item}>
              <PaperNote>{item}</PaperNote>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {t('maturity.eyebrow')}
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-muted">{t('maturity.body')}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {t('reflection.eyebrow')}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="paper-surface border border-border p-5 md:-rotate-[0.5deg]">
            <h3 className="font-heading text-xl text-foreground">{t('reflection.workedTitle')}</h3>
            <ul className="mt-3 space-y-2.5 font-body text-sm leading-relaxed text-muted">
              {worked.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="paper-surface border border-border p-5 md:rotate-[0.5deg]">
            <h3 className="font-heading text-xl text-foreground">{t('reflection.improveTitle')}</h3>
            <ul className="mt-3 space-y-2.5 font-body text-sm leading-relaxed text-muted">
              {improve.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </article>
  );
}
