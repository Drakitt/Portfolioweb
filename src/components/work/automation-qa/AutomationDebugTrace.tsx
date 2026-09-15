import React from 'react';
import { useTranslations } from 'next-intl';

export function AutomationDebugTrace() {
  const t = useTranslations('AutomationQa.debug');

  return (
    <aside className="aq-trace paper-surface border border-border">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{t('label')}</p>
      <dl className="mt-4 space-y-3 font-mono text-sm">
        <div>
          <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{t('runLabel')}</dt>
          <dd className="mt-1 text-foreground">{t('runValue')}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{t('statusLabel')}</dt>
          <dd className="mt-1 text-foreground">{t('statusValue')}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{t('expectedLabel')}</dt>
          <dd className="mt-1 text-foreground">{t('expectedValue')}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{t('receivedLabel')}</dt>
          <dd className="mt-1 text-foreground">{t('receivedValue')}</dd>
        </div>
      </dl>
      <ul className="mt-5 space-y-2 font-mono text-sm">
        <li className="text-forest">{t('checkRequest')}</li>
        <li className="text-forest">{t('checkPage')}</li>
        <li className="text-dusty-pink">{t('checkField')}</li>
        <li className="text-muted">{t('nextStep')}</li>
      </ul>
    </aside>
  );
}
