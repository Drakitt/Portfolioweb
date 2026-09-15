'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toggleDocumentTheme } from '@/components/providers/ThemeProvider';

export function ThemeSwitcher() {
  const t = useTranslations('Header.aria');

  return (
    <button
      onClick={toggleDocumentTheme}
      type="button"
      aria-label={t('toggleTheme')}
      className="inline-flex min-h-touch items-center gap-1.5 border border-border bg-surface px-2.5 py-1 font-body text-xs tracking-wide text-foreground transition-colors hover:bg-sage-light"
    >
      <span className="theme-switcher__on-light items-center gap-1.5">
        <Moon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
        <span>DARK</span>
      </span>
      <span className="theme-switcher__on-dark items-center gap-1.5">
        <Sun className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
        <span>LIGHT</span>
      </span>
    </button>
  );
}
