import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { AutomationDebugTrace } from './AutomationDebugTrace';
import { AutomationWorkflowVisual } from './AutomationWorkflowVisual';
import { withBasePath } from '@/lib/hosting';

function SectionEyebrow({ children }: { readonly children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{children}</p>
  );
}

export function AutomationQaExperience() {
  const t = useTranslations('AutomationQa');
  const locale = useLocale();
  const workHref = withBasePath(`/${locale}/#work`);

  const loopSteps = [
    t('loop.steps.understand'),
    t('loop.steps.extract'),
    t('loop.steps.normalize'),
    t('loop.steps.validate'),
    t('loop.steps.qa'),
    t('loop.steps.release'),
    t('loop.steps.investigate'),
    t('loop.steps.improve'),
  ];

  const layers = [
    { title: t('validate.layers.executionTitle'), body: t('validate.layers.executionBody') },
    { title: t('validate.layers.structureTitle'), body: t('validate.layers.structureBody') },
    { title: t('validate.layers.contentTitle'), body: t('validate.layers.contentBody') },
    { title: t('validate.layers.regressionTitle'), body: t('validate.layers.regressionBody') },
    { title: t('validate.layers.releaseTitle'), body: t('validate.layers.releaseBody') },
  ];

  const tools = [
    t('tooling.items.scripts'),
    t('tooling.items.tables'),
    t('tooling.items.checks'),
    t('tooling.items.docs'),
  ];

  const lifecycle = [
    t('lifecycle.items.development'),
    t('lifecycle.items.qa'),
    t('lifecycle.items.deploy'),
    t('lifecycle.items.finalQa'),
    t('lifecycle.items.docs'),
    t('lifecycle.items.onboarding'),
    t('lifecycle.items.cases'),
  ];

  const principles = [
    { title: t('principles.failTitle'), body: t('principles.failBody') },
    { title: t('principles.outputsTitle'), body: t('principles.outputsBody') },
    { title: t('principles.changeTitle'), body: t('principles.changeBody') },
    { title: t('principles.debugTitle'), body: t('principles.debugBody') },
  ];

  const stack = [
    t('build.stack.js'),
    t('build.stack.node'),
    t('build.stack.puppeteer'),
    t('build.stack.rest'),
  ];

  return (
    <article className="overflow-x-clip">
      <div className="mx-auto max-w-6xl px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <a
          href={workHref}
          className="inline-flex min-h-touch items-center font-mono text-xs text-muted hover:text-foreground"
        >
          ← {t('backToWork')}
        </a>
      </div>

      <header className="mx-auto grid max-w-6xl items-start gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:px-8">
        <div>
          <SectionEyebrow>{t('hero.eyebrow')}</SectionEyebrow>
          <h1 className="mt-4 font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="mt-4 max-w-xl font-heading text-2xl leading-snug tracking-tight text-foreground">
            {t('hero.headline')}
          </p>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-muted">
            {t('hero.intro')}
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {t('hero.context')}
          </p>
        </div>
        <AutomationWorkflowVisual variant="hero" />
      </header>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {t('loop.eyebrow')}
        </h2>
        <p className="mt-4 max-w-2xl font-heading text-2xl tracking-tight text-foreground">
          {t('loop.headline')}
        </p>
        <p className="mt-3 max-w-xl font-body text-sm text-muted">{t('loop.frame')}</p>
        <ol className="aq-loop mt-8">
          {loopSteps.map((step, index) => (
            <li key={step} className="aq-loop__item">
              <span className="aq-loop__index">{String(index + 1).padStart(2, '0')}</span>
              <span className="aq-loop__text">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {t('build.eyebrow')}
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted">
          {t('build.body')}
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {stack.map((item) => (
            <li
              key={item}
              className="paper-surface border border-border px-4 py-2.5 font-mono text-sm text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {t('validate.eyebrow')}
        </h2>
        <p className="mt-4 max-w-2xl font-heading text-2xl tracking-tight text-foreground">
          {t('validate.headline')}
        </p>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted">
          {t('validate.body')}
        </p>
        <ol className="aq-layers mt-8">
          {layers.map((layer, index) => (
            <li key={layer.title} className="aq-layers__item">
              <span className="aq-layers__index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="font-heading text-lg text-foreground">{layer.title}</p>
                <p className="mt-1 font-body text-sm text-muted">{layer.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {t('debug.eyebrow')}
          </h2>
          <p className="mt-4 max-w-md font-body text-base leading-relaxed text-muted">
            {t('debug.body')}
          </p>
        </div>
        <AutomationDebugTrace />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {t('tooling.eyebrow')}
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted">
          {t('tooling.body')}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {tools.map((item) => (
            <li
              key={item}
              className="paper-surface border border-border px-4 py-3 font-mono text-sm text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {t('lifecycle.eyebrow')}
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted">
          {t('lifecycle.body')}
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {lifecycle.map((item) => (
            <li
              key={item}
              className="border border-border bg-sage-light/60 px-4 py-2.5 font-mono text-sm text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {t('principles.eyebrow')}
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {principles.map((item, index) => (
            <li key={item.title} className="paper-surface border border-border p-5">
              <p className="font-mono text-[11px] text-muted">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-heading text-xl text-foreground">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {t('reflection.eyebrow')}
        </h2>
        <p className="mt-4 font-heading text-2xl leading-snug tracking-tight text-foreground">
          {t('reflection.body')}
        </p>
      </section>
    </article>
  );
}
