/**
 * Immigration CRM case-study assets and portfolio-safe technical facts.
 * Screenshot files live in `public/projects/immigration-crm/`.
 */

export const IMMIGRATION_CRM_ASSET_DIR = '/projects/immigration-crm';

export const immigrationCrmScreenshots = {
  dashboard: `${IMMIGRATION_CRM_ASSET_DIR}/dashboard.png`,
  clients: `${IMMIGRATION_CRM_ASSET_DIR}/clients.png`,
  clientProfile: `${IMMIGRATION_CRM_ASSET_DIR}/client-profile.png`,
  quotationWhatsapp: `${IMMIGRATION_CRM_ASSET_DIR}/quotation-whatsapp.png`,
  invoices: `${IMMIGRATION_CRM_ASSET_DIR}/invoices.png`,
} as const;

export const immigrationCrmTechCallouts = [
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

export const immigrationCrmArchitecture = {
  client: ['Browser', 'React 19 + TypeScript'],
  application: ['Next.js 15', 'REST /api/v1', 'Application services'],
  stores: [
    { label: 'PostgreSQL', detail: 'Prisma' },
    { label: 'Cloudflare R2', detail: 'Private files' },
  ],
} as const;
