import type { Project } from '@/types/content';

/** Featured project records. */
export const projects: readonly Project[] = [
  {
    id: 'dentalsys',
    slug: 'dentalsys',
    serial: '01',
    category: 'healthcare',
    title: {
      en: 'DentalSys',
      es: 'DentalSys',
    },
    summary: {
      en: 'Dental workflow management with an interactive 3D odontogram.',
      es: 'Gestión de flujos odontológicos con un odontograma 3D interactivo.',
    },
    description: {
      en: 'An academic clinic-management project: patients, appointments, treatments and a separate interactive 3D odontogram.',
      es: 'Un proyecto académico de gestión clínica: pacientes, citas, tratamientos y un odontograma 3D interactivo desarrollado por separado.',
    },
    capabilities: {
      en: 'Appointments · Clinical records · Treatments · 3D odontogram',
      es: 'Citas · Historiales clínicos · Tratamientos · Odontograma 3D',
    },
    technologies: [
      'Angular',
      'TypeScript',
      'React',
      'Three.js',
      'FullCalendar',
      'AG Grid',
      'Firebase Storage',
    ],
    image: '/projects/dentalsys/odontogram-3d.png',
    imageAlt: {
      en: 'DentalSys interactive 3D odontogram showing synthetic dental states.',
      es: 'Odontograma 3D interactivo de DentalSys mostrando estados dentales sintéticos.',
    },
    annotation: {
      en: '3D odontogram →',
      es: 'odontograma 3D →',
    },
    featured: true,
    confidential: false,
    caseStudyHref: '/work/dentalsys',
  },
  {
    id: 'immigration-crm',
    slug: 'immigration-crm',
    serial: '02',
    category: 'professional-services',
    title: {
      en: 'Immigration CRM',
      es: 'Immigration CRM',
    },
    summary: {
      en: 'From scattered administrative processes to an organized digital workflow.',
      es: 'De procesos administrativos dispersos a un flujo digital organizado.',
    },
    description: {
      en: 'Client management, procedures, document tracking, reminders, billing and generated paperwork in one workflow.',
      es: 'Gestión de clientes, trámites, seguimiento de documentos, recordatorios, facturación y documentos generados en un solo flujo.',
    },
    capabilities: {
      en: 'Clients · Procedures · Documents · Reminders · Billing',
      es: 'Clientes · Trámites · Documentos · Recordatorios · Facturación',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma'],
    image: '/projects/immigration-crm/dashboard.png',
    imageAlt: {
      en: 'Immigration CRM dashboard from an isolated synthetic demo dataset.',
      es: 'Panel de control del CRM de extranjería con un conjunto de datos sintéticos y aislados.',
    },
    annotation: {
      en: 'documents → deadlines → actions',
      es: 'documentos → plazos → acciones',
    },
    featured: true,
    confidential: false,
    caseStudyHref: '/work/immigration-crm',
  },
  {
    id: 'automation-qa',
    slug: 'automation-qa',
    serial: '03',
    category: 'automation',
    title: {
      en: 'Automation & QA',
      es: 'Automatización & QA',
    },
    summary: {
      en: 'Web automation, validation and QA for reliable data workflows.',
      es: 'Automatización web, validación y QA para flujos de datos confiables.',
    },
    description: {
      en: 'Engineering practice around extraction, debugging, validation and safer releases.',
      es: 'Práctica de ingeniería en extracción, depuración, validación y entregas más seguras.',
    },
    capabilities: {
      en: 'Automation · Extraction · QA · Debugging · Validation',
      es: 'Automatización · Extracción · QA · Depuración · Validación',
    },
    technologies: ['JavaScript', 'Node.js', 'Puppeteer', 'REST APIs', 'QA', 'Automation'],
    image: null,
    imageAlt: {
      en: 'Portfolio illustration of a web automation workflow: input, extract, normalize, validate, QA and release.',
      es: 'Ilustración de portafolio de un flujo de automatización web: entrada, extracción, normalización, validación, QA y entrega.',
    },
    annotation: {
      en: 'extract → validate → QA',
      es: 'extraer → validar → QA',
    },
    featured: true,
    confidential: false,
    caseStudyHref: '/work/automation-qa',
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
