import React from 'react';
import { useTranslations } from 'next-intl';
import { BrowserFrame } from '@/components/scrapbook/BrowserFrame';
import { Tape } from '@/components/scrapbook/Tape';
import { ArrowDoodle } from '@/components/scrapbook/doodles';
import {
  dentalSysFrame,
  heroCodeNote,
  odontogramFrame,
} from '@/content/data/hero-composition';

type ChromeCopy = {
  patients: string;
  calendar: string;
  treatments: string;
  records: string;
  search: string;
  toothView: string;
};

function DentalSysIllustration({ chrome }: { readonly chrome: ChromeCopy }) {
  const rows = [0, 1, 2, 3];

  return (
    <div className="flex min-h-[11.5rem] bg-surface sm:min-h-[13rem]">
      <aside className="w-[30%] space-y-2 border-r border-border bg-sage-light p-2.5">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-3.5 w-3.5 rounded-[3px] bg-forest" aria-hidden="true" />
          <span className="font-mono text-[9px] tracking-wide text-foreground">
            DentalSys
          </span>
        </div>
        {[chrome.patients, chrome.calendar, chrome.treatments].map((item) => (
          <div key={item} className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-[1px] bg-forest/70" aria-hidden="true" />
            <span className="truncate font-mono text-[9px] text-muted">{item}</span>
          </div>
        ))}
      </aside>
      <div className="flex-1 p-2.5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] text-foreground">{chrome.records}</span>
          <span className="hidden rounded-[2px] border border-border px-2 py-0.5 font-mono text-[9px] text-muted sm:inline">
            {chrome.search}
          </span>
        </div>
        <div className="space-y-1.5">
          {rows.map((row) => (
            <div key={row} className="flex items-center gap-2">
              <span className="h-2 w-8 rounded-sm bg-sage" />
              <span className="h-2 flex-1 rounded-sm bg-sage-light" />
              <span className="h-2 w-10 rounded-sm bg-butter" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OdontogramIllustration({ chrome }: { readonly chrome: ChromeCopy }) {
  const arches = [
    { id: 'upper', teeth: [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28] },
    { id: 'lower', teeth: [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38] },
  ] as const;
  const marked = new Set([16, 24, 36]);

  return (
    <div className="flex min-h-[9.5rem] gap-2 bg-surface p-2.5">
      <div className="flex-1">
        <div className="mb-2 font-mono text-[9px] tracking-wide text-muted">
          {odontogramFrame.title}
        </div>
        <div className="space-y-1.5">
          {arches.map((arch) => (
            <div key={arch.id} className="flex flex-wrap justify-center gap-[2px]">
              {arch.teeth.map((tooth) => (
                <span
                  key={tooth}
                  className={`flex h-4 w-3 items-center justify-center rounded-[2px] border font-mono text-[6px] ${
                    marked.has(tooth)
                      ? 'border-forest bg-sage text-foreground'
                      : 'border-border bg-sage-light text-muted'
                  }`}
                >
                  {tooth}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-16 flex-col items-center justify-center gap-1 border-l border-border pl-2">
        <span className="h-8 w-8 rotate-12 border border-border bg-sage-light shadow-paper" />
        <span className="font-mono text-[8px] text-muted">{chrome.toothView}</span>
      </div>
    </div>
  );
}

function CodeNote() {
  return (
    <div className="paper-surface relative rounded-[3px] border border-border bg-butter px-3 py-2.5">
      <pre className="overflow-x-auto font-mono text-[9px] leading-relaxed text-foreground">
        <code>
          {heroCodeNote.lines.map((line, index) => (
            <span key={`${heroCodeNote.id}-${index}`} className="block">
              {line.startsWith('//') ? (
                <span className="text-muted">{line}</span>
              ) : (
                line
              )}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export function HeroSoftwareComposition() {
  const t = useTranslations('Hero');
  const chrome: ChromeCopy = {
    patients: t('placeholderChrome.patients'),
    calendar: t('placeholderChrome.calendar'),
    treatments: t('placeholderChrome.treatments'),
    records: t('placeholderChrome.records'),
    search: t('placeholderChrome.search'),
    toothView: t('placeholderChrome.toothView'),
  };

  return (
    <figure className="relative">
      <figcaption className="sr-only">
        {t('compositionLabel')}. {t('compositionDescription')}
      </figcaption>
      <div className="hero-board" aria-hidden="true">
        <div className="hero-board__dentalsys lg:-rotate-[1.4deg]">
          <Tape tone="sage" className="left-[22%] top-[-0.45rem] w-16 -rotate-2" />
          <BrowserFrame title={dentalSysFrame.title} address={dentalSysFrame.address}>
            <DentalSysIllustration chrome={chrome} />
          </BrowserFrame>
        </div>

        <div className="hero-board__odontogram lg:rotate-[1.8deg]">
          <Tape tone="pink" className="right-[18%] top-[-0.4rem] w-14 rotate-3" />
          <BrowserFrame title={odontogramFrame.title} address={odontogramFrame.address}>
            <OdontogramIllustration chrome={chrome} />
          </BrowserFrame>
        </div>

        <div className="hero-board__code lg:-rotate-[1.2deg]">
          <Tape tone="butter" className="left-6 top-[-0.35rem] w-12 rotate-2" />
          <CodeNote />
        </div>

        <div className="hero-board__note hidden lg:block">
          <div className="-rotate-[2deg] text-right">
            <p className="font-hand text-2xl leading-none text-forest">
              {t('annotationTitle')}
            </p>
            <p className="mt-1 font-hand text-lg leading-tight text-muted">
              {t('annotationSubtitle')}
            </p>
            <ArrowDoodle className="ml-auto mt-1 text-forest" />
          </div>
        </div>
      </div>

      <div className="mt-3 text-center lg:hidden" aria-hidden="true">
        <p className="font-hand text-xl text-forest">{t('annotationTitle')}</p>
        <p className="font-hand text-base text-muted">{t('annotationSubtitle')}</p>
      </div>
    </figure>
  );
}
