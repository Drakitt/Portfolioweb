import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  crmProjectScreenshots,
  crmProjectTechCallouts,
} from '@/content/data/crm-project';
import { EvidenceFrame } from '@/components/work/EvidenceFrame';
import { ArrowDoodle } from '@/components/scrapbook/doodles';
import { withBasePath } from '@/lib/hosting';

function SectionEyebrow({ children }: { readonly children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
      {children}
    </p>
  );
}

function PaperNote({
  children,
  className = '',
  handwritten = false,
  size = 'sm',
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly handwritten?: boolean;
  readonly size?: 'sm' | 'base';
}) {
  const typeClass = handwritten ? 'font-hand' : 'font-mono';
  const sizeClass = handwritten || size === 'base' ? 'text-base' : 'text-sm';

  return (
    <span
      className={`paper-surface inline-block border border-border px-4 py-2.5 text-foreground ${typeClass} ${sizeClass} ${className}`}
    >
      {children}
    </span>
  );
}

export function CrmProjectCaseStudy() {
  const t = useTranslations('CrmProject');
  const locale = useLocale();
  const workHref = withBasePath(`/${locale}/#work`);

  const sources = [
    t('startingPoint.sources.excel'),
    t('startingPoint.sources.files'),
    t('startingPoint.sources.whatsapp'),
    t('startingPoint.sources.email'),
    t('startingPoint.sources.calendar'),
    t('startingPoint.sources.memory'),
  ];

  const discoveryNotes = [
    t('discovery.notes.management'),
    t('discovery.notes.staff'),
    t('discovery.notes.workflow'),
    t('discovery.notes.friction'),
    t('discovery.notes.model'),
  ];

  const quoteSteps = [
    t('product.steps.quotation'),
    t('product.steps.client'),
    t('product.steps.template'),
    t('product.steps.handoff'),
    t('product.steps.followUp'),
  ];

  const uses = [
    { serial: '01', text: t('realWorld.uses.one') },
    { serial: '02', text: t('realWorld.uses.two') },
    { serial: '03', text: t('realWorld.uses.three') },
    { serial: '04', text: t('realWorld.uses.four') },
  ];

  const improvements = [
    { title: t('next.items.testingTitle'), body: t('next.items.testingBody') },
    { title: t('next.items.frontendTitle'), body: t('next.items.frontendBody') },
    { title: t('next.items.observabilityTitle'), body: t('next.items.observabilityBody') },
    { title: t('next.items.a11yTitle'), body: t('next.items.a11yBody') },
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

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-24">
        <div>
          <SectionEyebrow>{t('hero.eyebrow')}</SectionEyebrow>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {t('hero.label')}
          </p>
          <h1 className="mt-5 font-heading text-[2rem] leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[3.1rem] lg:leading-[1.12]">
            <span className="block">{t('hero.headline1')}</span>
            <span className="block">{t('hero.headline2')}</span>
            <span className="block italic">{t('hero.headline3')}</span>
          </h1>
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted sm:text-lg">
            {t('hero.body')}
          </p>
          <p className="mt-4 font-mono text-[11px] text-muted">{t('hero.datasetNote')}</p>
        </div>
        <div className="lg:-rotate-[1.2deg]">
          <EvidenceFrame
            src={crmProjectScreenshots.dashboard}
            alt={t('hero.dashboardAlt')}
            tapeTone="sage"
            annotation={t('hero.annotation')}
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('startingPoint.eyebrow')}</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
          {t('startingPoint.headline')}
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-muted">
          {t('startingPoint.body')}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {sources.map((source, index) => (
            <PaperNote
              key={source}
              className={index % 2 === 0 ? '-rotate-1' : 'rotate-1'}
            >
              {source}
            </PaperNote>
          ))}
        </div>
        <div className="mt-6 text-forest" aria-hidden="true">
          <ArrowDoodle className="rotate-90" />
        </div>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <PaperNote className="bg-butter -rotate-1">
            {t('startingPoint.resultInfo')}
          </PaperNote>
          <PaperNote className="rotate-1">
            {t('startingPoint.resultFollowUp')}
          </PaperNote>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('discovery.eyebrow')}</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
          {t('discovery.headline')}
        </h2>
        <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-muted">
          {t('discovery.body')}
        </p>
        <ol className="discovery-flow mt-10">
          {discoveryNotes.map((note, index) => (
            <li key={note} className="discovery-flow__step">
              <span className="font-mono text-[11px] text-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <PaperNote
                handwritten
                className={index % 2 === 0 ? '-rotate-1' : 'rotate-1'}
              >
                {note}
              </PaperNote>
              {index < discoveryNotes.length - 1 ? (
                <span className="discovery-flow__arrow text-forest" aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('modeling.eyebrow')}</SectionEyebrow>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="max-w-md font-body text-base leading-relaxed text-muted">
              {t('modeling.body')}
            </p>
            <div className="paper-surface mt-6 border border-border px-5 py-5">
              <p className="font-heading text-2xl tracking-tight text-foreground">
                {t('modeling.treeTitle')}
              </p>
              <ul className="mt-4 space-y-2.5 font-mono text-sm text-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-forest" aria-hidden="true">→</span>
                  {t('modeling.tree.procedures')}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forest" aria-hidden="true">→</span>
                  {t('modeling.tree.documents')}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forest" aria-hidden="true">→</span>
                  {t('modeling.tree.quotations')}
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forest" aria-hidden="true">→</span>
                  {t('modeling.tree.invoices')}
                </li>
              </ul>
            </div>
          </div>
          <div className="relative lg:col-span-8 lg:min-h-[32rem]">
            <div className="hidden w-[62%] lg:block lg:-rotate-[1.4deg] lg:opacity-70">
              <EvidenceFrame
                src={crmProjectScreenshots.clients}
                alt={t('modeling.clientsAlt')}
                tapeTone="butter"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
            <div className="lg:absolute lg:right-0 lg:top-10 lg:w-[78%] lg:rotate-[1.3deg]">
              <EvidenceFrame
                src={crmProjectScreenshots.clientProfile}
                alt={t('modeling.profileAlt')}
                tapeTone="pink"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('product.eyebrow')}</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
          {t('product.headline')}
        </h2>
        <ol className="mt-8 flex max-w-md flex-col gap-3 font-mono text-sm text-foreground">
          {quoteSteps.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              <PaperNote>{step}</PaperNote>
              {index < quoteSteps.length - 1 ? (
                <span className="text-muted" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <div className="mt-8 lg:rotate-[0.8deg]">
          <EvidenceFrame
            src={crmProjectScreenshots.quotationWhatsapp}
            alt={t('product.quoteAlt')}
            tapeTone="sage"
            sizes="(min-width: 1024px) 70vw, 100vw"
          />
        </div>
        <p className="mt-5 max-w-2xl font-body text-sm leading-relaxed text-muted">
          {t('product.accuracy')}
        </p>
        <p className="mt-2 font-mono text-[11px] text-muted">{t('product.demoNote')}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('architecture.eyebrow')}</SectionEyebrow>
        <div className="architecture-diagram mt-10 max-w-4xl space-y-3 font-mono">
          <PaperNote size="base" className="block w-full py-3.5 text-center">
            {t('architecture.browser')}
          </PaperNote>
          <PaperNote size="base" className="block w-full py-3.5 text-center">
            {t('architecture.stack')}
          </PaperNote>
          <p className="py-1 text-center text-lg text-muted" aria-hidden="true">
            ↓
          </p>
          <PaperNote size="base" className="block w-full py-3.5 text-center">
            {t('architecture.next')}
          </PaperNote>
          <PaperNote size="base" className="block w-full py-3.5 text-center">
            {t('architecture.api')}
          </PaperNote>
          <PaperNote size="base" className="block w-full py-3.5 text-center">
            {t('architecture.services')}
          </PaperNote>
          <p className="py-1 text-center text-lg text-muted" aria-hidden="true">
            ↓
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <PaperNote size="base" className="block py-4 text-center">
              {t('architecture.postgres')}
              <span className="mt-1 block font-mono text-sm text-muted">
                {t('architecture.prisma')}
              </span>
            </PaperNote>
            <PaperNote size="base" className="block py-4 text-center">
              {t('architecture.r2')}
              <span className="mt-1 block font-mono text-sm text-muted">
                {t('architecture.files')}
              </span>
            </PaperNote>
          </div>
        </div>
        <ul className="mt-10 flex flex-wrap gap-3">
          {crmProjectTechCallouts.map((item) => (
            <li key={item}>
              <PaperNote>{item}</PaperNote>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('operations.eyebrow')}</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
          <span className="block">{t('operations.headline1')}</span>
          <span className="block italic">{t('operations.headline2')}</span>
        </h2>
        <p className="mt-4 font-hand text-xl text-forest" aria-hidden="true">
          {t('operations.labels.clients')} · {t('operations.labels.procedures')} ·{' '}
          {t('operations.labels.quotes')} · {t('operations.labels.invoices')}
        </p>
        <div className="crm-ops-board mt-8">
          <div className="crm-ops-board__clients">
            <EvidenceFrame
              src={crmProjectScreenshots.clients}
              alt={t('operations.clientsAlt')}
              tapeTone="butter"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
          <div className="crm-ops-board__invoices">
            <EvidenceFrame
              src={crmProjectScreenshots.invoices}
              alt={t('operations.invoicesAlt')}
              tapeTone="pink"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('realWorld.eyebrow')}</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-heading text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          <span className="block">{t('realWorld.headline1')}</span>
          <span className="block italic">{t('realWorld.headline2')}</span>
        </h2>
        <p className="mt-6 font-body text-base text-muted">{t('realWorld.intro')}</p>
        <ol className="mt-6 max-w-2xl space-y-3">
          {uses.map((item) => (
            <li key={item.serial} className="flex gap-3 font-body text-base text-foreground">
              <span className="font-mono text-sm text-muted">{item.serial}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <SectionEyebrow>{t('next.eyebrow')}</SectionEyebrow>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {improvements.map((item, index) => (
            <article
              key={item.title}
              className={`paper-surface border border-border p-5 ${
                index % 2 === 0 ? 'md:-rotate-[0.6deg]' : 'md:rotate-[0.6deg]'
              }`}
            >
              <h3 className="font-heading text-xl text-foreground">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
