export const trilogyCapabilities = [
  'JavaScript',
  'Node.js',
  'Puppeteer',
  'REST APIs',
  'Web Automation',
  'QA',
  'Testing',
  'Debugging',
] as const;

export const capabilityGroups = [
  {
    id: 'build',
    items: ['React', 'Next.js', 'Angular', 'Node.js', 'TypeScript', 'JavaScript', 'PostgreSQL'],
  },
  {
    id: 'automate',
    items: ['Puppeteer', 'Web Automation', 'REST APIs', 'QA', 'Testing', 'Debugging'],
  },
  {
    id: 'product',
    items: [
      'Requirements Discovery',
      'Process Modeling',
      'Internal Tools',
      'Technical Documentation',
    ],
  },
] as const;

export const educationPrograms = [
  {
    id: 'huawei',
    name: 'Huawei Seeds for the Future',
    year: '2021',
  },
  {
    id: 'cisco',
    name: 'Cisco Networking Essentials',
    year: '2021',
  },
] as const;

export const education = {
  degree: 'Software Engineering',
  institution: 'Universidad Privada Franz Tamayo',
} as const;
