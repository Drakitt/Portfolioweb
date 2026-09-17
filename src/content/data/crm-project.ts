/**
 * CRM case-study assets and portfolio-safe technical facts.
 * Screenshot files live in `public/projects/crm-project/`.
 */

export const CRM_PROJECT_ASSET_DIR = '/projects/crm-project';

export const crmProjectScreenshots = {
  dashboard: `${CRM_PROJECT_ASSET_DIR}/dashboard.png`,
  clients: `${CRM_PROJECT_ASSET_DIR}/clients.png`,
  clientProfile: `${CRM_PROJECT_ASSET_DIR}/client-profile.png`,
  quotationWhatsapp: `${CRM_PROJECT_ASSET_DIR}/quotation-whatsapp.png`,
  invoices: `${CRM_PROJECT_ASSET_DIR}/invoices.png`,
} as const;

export const crmProjectTechCallouts = [
  'Next.js 15',
  'React 19',
  'TypeScript',
  'PostgreSQL',
  'Prisma',
  'JWT authentication',
  'Role-based permissions',
  'Cloudflare R2',
  'REST /api/v1',
  'image/PDF handling',
] as const;

export const crmProjectArchitecture = {
  client: ['Browser', 'React 19 + TypeScript'],
  application: ['Next.js 15', 'REST /api/v1', 'Application services'],
  stores: [
    { label: 'PostgreSQL', detail: 'Prisma' },
    { label: 'Cloudflare R2', detail: 'Private files' },
  ],
} as const;
