import React from 'react';

type DoodleProps = {
  className?: string;
};

export function ArrowDoodle({ className = '' }: DoodleProps) {
  return (
    <svg
      className={className}
      width="72"
      height="36"
      viewBox="0 0 72 36"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 24c10-12 24-18 40-16 8 1 16 5 24 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M58 11c4 4 8 8 10 9-4 1-9 2-14 1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UnderlineDoodle({ className = '' }: DoodleProps) {
  return (
    <svg
      className={className}
      width="120"
      height="10"
      viewBox="0 0 120 10"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 6c18-3 36-4 56-2 20 2 40 3 60 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CodeMarkDoodle({ className = '' }: DoodleProps) {
  return (
    <svg
      className={className}
      width="36"
      height="20"
      viewBox="0 0 36 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 3 4 10l8 7M24 3l8 7-8 7M20 2l-4 16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
