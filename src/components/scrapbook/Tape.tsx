import React from 'react';

type TapeTone = 'sage' | 'butter' | 'pink';

type TapeProps = {
  tone?: TapeTone;
  className?: string;
};

const toneClass: Record<TapeTone, string> = {
  sage: 'bg-sage',
  butter: 'bg-butter',
  pink: 'bg-dusty-pink',
};

export function Tape({ tone = 'sage', className = '' }: TapeProps) {
  return (
    <span
      className={`masking-tape ${toneClass[tone]} ${className}`}
      aria-hidden="true"
    />
  );
}
