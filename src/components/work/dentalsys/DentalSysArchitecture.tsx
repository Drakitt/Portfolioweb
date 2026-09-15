import React from 'react';
import { useTranslations } from 'next-intl';

function ArchNote({
  children,
  detail,
  className = '',
}: {
  readonly children: React.ReactNode;
  readonly detail?: string;
  readonly className?: string;
}) {
  return (
    <div
      className={`paper-surface border border-border px-4 py-3.5 text-center font-mono text-sm text-foreground ${className}`}
    >
      {children}
      {detail ? <span className="mt-1 block text-[11px] text-muted">{detail}</span> : null}
    </div>
  );
}

export function DentalSysArchitecture() {
  const t = useTranslations('DentalSys.architecture');

  return (
    <div className="ds-arch mt-8 max-w-4xl">
      <ArchNote>{t('angular')}</ArchNote>
      <p className="ds-arch__rule" aria-hidden="true">
        ↓
      </p>
      <div className="ds-arch__branches">
        <ArchNote>{t('api')}</ArchNote>
        <ArchNote detail={t('storageDetail')}>{t('storage')}</ArchNote>
        <div className="ds-arch__iframe-chain">
          <ArchNote>{t('iframe')}</ArchNote>
          <p className="ds-arch__rule" aria-hidden="true">
            ↓
          </p>
          <ArchNote>{t('odontogram')}</ArchNote>
          <p className="ds-arch__rule" aria-hidden="true">
            ↓
          </p>
          <ArchNote>{t('odontogramApi')}</ArchNote>
        </div>
      </div>
    </div>
  );
}
