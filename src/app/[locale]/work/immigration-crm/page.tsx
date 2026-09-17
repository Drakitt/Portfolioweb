import React from 'react';
import { notFound } from 'next/navigation';
import { isAppLocale } from '@/i18n/routing';
import { crmProjectPathnames } from '@/lib/page-metadata';
import { withBasePath } from '@/lib/hosting';
import { joinSiteUrl } from '@/lib/site-url';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isAppLocale(locale)) {
    return {};
  }

  const canonical = joinSiteUrl(crmProjectPathnames[locale]);

  return {
    robots: {
      index: false,
      follow: true,
    },
    ...(canonical ? { alternates: { canonical } } : {}),
  };
}

export default async function LegacyCrmProjectRedirectPage({
  params,
}: {
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const href = withBasePath(crmProjectPathnames[locale]);
  const label =
    locale === 'es'
      ? 'Continuar al caso de estudio CRM'
      : 'Continue to the CRM case study';

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(href)});`,
        }}
      />
      <p className="font-mono text-sm">
        <a href={href} className="underline underline-offset-4">
          {label}
        </a>
      </p>
    </main>
  );
}
