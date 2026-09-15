import React from 'react';
import { useTranslations } from 'next-intl';
import { Tape } from '@/components/scrapbook/Tape';

export function AboutProcessComposition() {
  const t = useTranslations('About');
  const steps = [
    t('notes.understand'),
    t('notes.map'),
    t('notes.build'),
    t('notes.test'),
    t('notes.improve'),
  ];
  const codeLines = [
    t('code.comment'),
    '',
    t('code.line1'),
    t('code.line2'),
    t('code.line3'),
  ];

  return (
    <figure className="relative">
      <figcaption className="sr-only">{t('compositionLabel')}</figcaption>
      <div className="about-board" aria-hidden="true">
        <div className="about-board__window lg:-rotate-[1.1deg]">
          <Tape tone="sage" className="left-[22%] top-[-0.4rem] w-14 -rotate-2" />
          <div className="paper-surface overflow-hidden rounded-[4px] border border-border">
            <div className="flex items-center gap-2 border-b border-border bg-sage-light/70 px-3 py-2">
              <span className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-dusty-pink" />
                <span className="h-1.5 w-1.5 rounded-full bg-butter" />
                <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              </span>
              <span className="font-mono text-[10px] tracking-wide text-muted">
                {t('processTitle')}
              </span>
            </div>
            <div className="border-b border-border bg-surface px-3 py-1.5">
              <div className="truncate rounded-[2px] border border-border bg-background px-2 py-1 font-mono text-[10px] text-muted">
                {t('processAddress')}
              </div>
            </div>
            <ol className="space-y-2 bg-surface px-3 py-3 sm:px-4 sm:py-4">
              {steps.map((step, index) => (
                <li key={step} className="flex items-center gap-2.5">
                  <span className="w-5 font-mono text-[10px] text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`paper-surface inline-block border border-border px-2.5 py-1 font-hand text-lg leading-none text-foreground ${
                      index % 2 === 0 ? '-rotate-1' : 'rotate-1'
                    }`}
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="about-board__code lg:rotate-[1.5deg]">
          <Tape tone="butter" className="left-5 top-[-0.35rem] w-12 rotate-2" />
          <div className="paper-surface rounded-[3px] border border-border bg-butter px-3 py-2.5">
            <pre className="font-mono text-[9px] leading-relaxed text-foreground">
              <code>
                {codeLines.map((line) => (
                  <span key={line || 'blank'} className="block">
                    {line.startsWith('//') ? <span className="text-muted">{line}</span> : line}
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </figure>
  );
}
