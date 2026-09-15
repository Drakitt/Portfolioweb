import React from 'react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full border-t border-border bg-background py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted tracking-widest uppercase">
        <div>
          <span>RAQUEL TERRAZAS</span>
          <span className="mx-2 text-border">|</span>
          <span>{t('location')}</span>
        </div>
        <div>
          <span>© 2026 {t('rights')}</span>
        </div>
      </div>
    </footer>
  );
}
