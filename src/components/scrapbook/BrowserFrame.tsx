import React from 'react';

type BrowserFrameProps = {
  title: string;
  address: string;
  children: React.ReactNode;
  className?: string;
};

export function BrowserFrame({
  title,
  address,
  children,
  className = '',
}: BrowserFrameProps) {
  return (
    <div
      className={`paper-surface overflow-hidden rounded-[4px] border border-border ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-sage-light/70 px-3 py-2">
        <span className="flex gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-dusty-pink" />
          <span className="h-1.5 w-1.5 rounded-full bg-butter" />
          <span className="h-1.5 w-1.5 rounded-full bg-sage" />
        </span>
        <span className="font-mono text-[10px] tracking-wide text-muted">
          {title}
        </span>
      </div>
      <div className="border-b border-border bg-surface px-3 py-1.5">
        <div className="truncate rounded-[2px] border border-border bg-background px-2 py-1 font-mono text-[10px] text-muted">
          {address}
        </div>
      </div>
      {children}
    </div>
  );
}
