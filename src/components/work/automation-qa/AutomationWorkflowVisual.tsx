import React from 'react';
import { useTranslations } from 'next-intl';

const heroSteps = ['input', 'extract', 'normalize', 'validate', 'qa', 'release'] as const;

type AutomationWorkflowVisualProps = {
  readonly variant: 'card' | 'hero';
};

export function AutomationWorkflowVisual({ variant }: AutomationWorkflowVisualProps) {
  const t = useTranslations('AutomationQa.flow');
  const isHero = variant === 'hero';

  return (
    <figure
      className={`aq-visual paper-surface border border-border ${isHero ? 'aq-visual--hero' : 'aq-visual--card'}`}
    >
      {isHero ? (
        <div className="aq-visual__chrome" aria-hidden="true">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-dusty-pink" />
            <span className="h-1.5 w-1.5 rounded-full bg-butter" />
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
          </span>
          <span className="font-mono text-[10px] tracking-wide text-muted">
            {t('browserLabel')}
          </span>
        </div>
      ) : null}

      <ol className="aq-visual__steps">
        {heroSteps.map((step, index) => (
          <li key={step} className="aq-visual__step">
            <span className="aq-visual__index">{String(index + 1).padStart(2, '0')}</span>
            <span className="aq-visual__label">{t(`heroSteps.${step}` as 'heroSteps.input')}</span>
            {index < heroSteps.length - 1 ? (
              <span className="aq-visual__arrow" aria-hidden="true">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      {isHero ? (
        <p className="aq-visual__snippet" aria-hidden="true">
          {t('snippet')}
        </p>
      ) : null}

      <figcaption className="sr-only">{t('visualAlt')}</figcaption>
    </figure>
  );
}
