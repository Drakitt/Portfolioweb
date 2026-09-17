# Raquel Terrazas — Software Engineering Portfolio

A bilingual software engineering portfolio focused on building, automating, testing, and improving software around real business problems. Selected work is presented as technical and product-oriented case studies rather than a generic project list.

This repository contains the portfolio site: pages, copy, and public presentation assets. It is not a deployment of the systems described in the case studies.

## Featured work

Three case studies are linked from the home page (`/en#work`, `/es#work`) and have dedicated routes under `/work`.

### CRM

`/en/work/crm-project` · `/es/work/crm-project`

Business-process digitization: moving from scattered operational tools to a centralized workspace for client information, procedures, documents, and follow-up.

The case study describes the product problem and the resulting workflow. Portfolio screenshots use an isolated synthetic demo dataset prepared for public presentation. Proprietary application source is not included here.

### DentalSys

`/en/work/dentalsys` · `/es/work/dentalsys`

An academic web system for dental appointment and treatment workflows, including an interactive 3D odontogram. The case study documents the clinic-facing interface and how the odontogram fits the treatment path. Screenshots use synthetic demo data.

### Automation & QA

`/en/work/automation-qa` · `/es/work/automation-qa`

Professional engineering work focused on web automation, data extraction, validation, debugging, QA, and release verification. The case study covers how those practices fit together; it does not expose employer- or client-specific systems.

## Tech stack

Stack for **this** site:

- Next.js 15 / App Router
- React
- TypeScript
- Tailwind CSS
- next-intl

Technologies used in the showcased products are documented on their case-study pages and are not mixed into this list.

## Internationalization

English and Spanish are first-class locales. The default locale is English. Routes always carry a locale prefix (`localePrefix: 'always'`):

- `/en` — English
- `/es` — Spanish

Case studies follow the same pattern. Translation dictionaries live in `messages/` (`en.json`, `es.json`). Locale routing is configured in `src/i18n/` with explicit `/en` and `/es` prefixes.

## Project structure

```
src/
  app/           App Router: locale layouts, pages, sitemap, robots
  components/    Layout, home, case studies, and SEO UI
  content/       Typed site copy and case-study content
  i18n/          Locale routing and next-intl request config
  lib/           Metadata helpers and public-origin resolution
  styles/        Global CSS
messages/        EN/ES translation dictionaries
public/          Static assets (screenshots, Open Graph images)
scripts/         Local verification utilities
```

`src/app/[locale]/` holds the home page and the three case-study routes. `src/content/data/` holds site links and project records used by those pages.

## Running locally

```bash
npm install
npm run dev
```

Then open:

- [http://localhost:3000/en](http://localhost:3000/en)
- [http://localhost:3000/es](http://localhost:3000/es)

No extra environment variables are required to run the site locally. `NEXT_PUBLIC_SITE_URL` is optional: when unset, the app still runs; absolute canonical, sitemap, and social URLs are only formed once a public origin is configured. See `.env.example`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
npm run compare-messages
```

`lint` runs Next.js ESLint. `typecheck` runs `tsc --noEmit`. `build` produces a production Next.js build. `compare-messages` checks that the English and Spanish dictionaries expose the same keys.

## Accessibility

The UI uses semantic heading structure, a skip-navigation link to the main landmark, keyboard `:focus-visible` outlines, and a `prefers-reduced-motion` fallback that shortens animations and transitions. These are implementation choices, not a formal WCAG certification.

## SEO

Pages emit localized titles and descriptions, canonical URLs, hreflang alternates (`en`, `es`, `x-default`), Open Graph metadata, `robots.txt`, a sitemap, and Person JSON-LD.

Absolute production URLs depend on:

```bash
NEXT_PUBLIC_SITE_URL
```

Set this to the live origin (no trailing slash) after the first real deployment. Until then, sitemap generation stays empty and `metadataBase` is omitted so the site does not invent a public host.

## Privacy and demo data

Portfolio screenshots of business and academic systems use synthetic or demo data prepared for public presentation. They are not production records.

This repository is the portfolio presentation. It does not include proprietary source code for those systems.

## Deployment

The site is a static Next.js export hosted on GitHub Pages as a project site:

https://drakitt.github.io/portfolio

Pushes to `main` run `.github/workflows/deploy-pages.yml`, which lints, typechecks, compares translation keys, builds the `out/` directory, and deploys it with GitHub Pages Actions. The same workflow can be started manually with `workflow_dispatch`.

Production builds set `NEXT_PUBLIC_SITE_URL` to that GitHub Pages origin so canonical URLs, the sitemap, Open Graph tags, and Person JSON-LD resolve there. Local `next dev` does not require the variable.

## Contact

- Email: [d.raquel.terrazas.t@gmail.com](mailto:d.raquel.terrazas.t@gmail.com)
- GitHub: [github.com/Drakitt](https://github.com/Drakitt)
- LinkedIn: [linkedin.com/in/raquel-terrazas-968897206](https://www.linkedin.com/in/raquel-terrazas-968897206/)
- Barcelona, Spain
