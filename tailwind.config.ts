import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-background)',
        foreground: 'var(--text-foreground)',
        muted: 'var(--text-muted)',
        border: 'var(--border-color)',
        accent: {
          DEFAULT: 'var(--accent-color)',
          hover: 'var(--accent-hover)',
        },
        'on-accent': 'var(--text-on-accent)',
        surface: 'var(--bg-surface)',
        forest: 'var(--color-forest)',
        sage: 'var(--color-sage)',
        'sage-light': 'var(--color-sage-light)',
        'dusty-pink': 'var(--color-dusty-pink)',
        butter: 'var(--color-butter)',
      },
      fontFamily: {
        heading: ['var(--font-newsreader)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        hand: ['var(--font-caveat)', 'cursive'],
      },
      minHeight: {
        touch: '44px',
      },
      boxShadow: {
        paper: 'var(--paper-shadow)',
      },
    },
  },
  plugins: [],
};

export default config;
