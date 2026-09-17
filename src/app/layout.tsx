import React from 'react';
import type { Metadata } from 'next';
import { siteIcons } from '@/lib/site-icons';
import '@/styles/globals.css';

export const metadata: Metadata = {
  icons: siteIcons(),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
