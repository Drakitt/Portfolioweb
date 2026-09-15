'use client';

import React, { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Menu, X } from 'lucide-react';

const sectionHashes = ['work', 'about', 'experience', 'contact'] as const;

export function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = sectionHashes.map((hash) => ({
    hash,
    href: `/${locale}#${hash}`,
    label: t(`nav.${hash}`),
  }));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm transition-colors">
      <a
        href="#main-content"
        className="absolute left-4 top-3 z-[60] -translate-y-16 bg-accent px-4 py-2 font-body text-sm text-on-accent transition-transform focus:translate-y-0"
      >
        {t('aria.skipToContent')}
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-base tracking-tight text-foreground transition-colors hover:text-forest sm:text-lg"
        >
          {t('brand')}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.href}
              className="inline-flex min-h-touch items-center font-body text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={t('aria.toggleMenu')}
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border bg-surface text-muted hover:text-foreground md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="space-y-1 border-t border-border bg-surface px-4 py-3 md:hidden"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block min-h-11 border-b border-border/40 py-3 font-body text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
