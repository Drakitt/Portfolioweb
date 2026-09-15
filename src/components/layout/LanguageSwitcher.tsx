'use client';

import React, { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, routing, usePathname } from '@/i18n/routing';

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('Header.aria');
  const [hash, setHash] = useState('');

  useEffect(() => {
    const syncHash = () => {
      setHash(window.location.hash.replace(/^#/, ''));
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [pathname]);

  const normalizedPath = pathname || '/';
  const href = hash ? { pathname: normalizedPath, hash } : normalizedPath;

  return (
    <div
      role="group"
      aria-label={t('language')}
      className="locale-switcher inline-flex items-center overflow-hidden border border-border bg-surface font-mono text-xs tracking-wider"
    >
      {routing.locales.map((locale, index) => {
        const isActive = currentLocale === locale;

        return (
          <React.Fragment key={locale}>
            {index > 0 ? (
              <span className="px-0.5 text-border" aria-hidden="true">
                /
              </span>
            ) : null}
            {isActive ? (
              <span data-active="true" aria-current="true" className="locale-switcher__option">
                {locale.toUpperCase()}
              </span>
            ) : (
              <Link
                href={href}
                locale={locale}
                replace
                scroll={false}
                hrefLang={locale}
                data-active="false"
                className="locale-switcher__option"
              >
                {locale.toUpperCase()}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
