import React from 'react';
import Image from 'next/image';
import { Tape } from '@/components/scrapbook/Tape';

type TapeTone = 'sage' | 'butter' | 'pink';

type EvidenceFrameProps = {
  readonly src: string;
  readonly alt: string;
  readonly tapeTone?: TapeTone;
  readonly annotation?: string;
  readonly priority?: boolean;
  readonly sizes?: string;
  readonly className?: string;
};

export function EvidenceFrame({
  src,
  alt,
  tapeTone = 'sage',
  annotation,
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  className = '',
}: EvidenceFrameProps) {
  return (
    <figure className={`relative ${className}`}>
      <Tape tone={tapeTone} className="left-[18%] top-[-0.4rem] w-14 -rotate-2" />
      <div className="paper-surface overflow-hidden rounded-[3px] border border-border">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full"
        />
      </div>
      {annotation ? (
        <figcaption className="mt-2 font-hand text-lg text-forest" aria-hidden="true">
          {annotation}
        </figcaption>
      ) : null}
    </figure>
  );
}
