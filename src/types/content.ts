export type Locale = 'en' | 'es';

export interface LocalizedString {
  en: string;
  es: string;
}

export type ProjectCategory =
  | 'healthcare'
  | 'professional-services'
  | 'automation';

export type ProjectSlug = 'dentalsys' | 'immigration-crm' | 'automation-qa';

export interface Project {
  id: string;
  slug: ProjectSlug;
  serial: string;
  category: ProjectCategory;
  title: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  capabilities: LocalizedString;
  technologies: readonly string[];
  image: string | null;
  imageAlt: LocalizedString;
  annotation: LocalizedString;
  featured: boolean;
  confidential: boolean;
  caseStudyHref: '/work/immigration-crm' | '/work/dentalsys' | '/work/automation-qa' | null;
}

export function localize(value: LocalizedString, locale: Locale): string {
  return value[locale];
}
