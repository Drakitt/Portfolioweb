export interface HeroBrowserFrame {
  id: string;
  title: string;
  address: string;
}

export interface HeroCodeNote {
  id: string;
  lines: readonly string[];
}

export const dentalSysFrame: HeroBrowserFrame = {
  id: 'hero-dentalsys',
  title: 'DentalSys',
  address: 'dentalsys://clinic',
};

export const odontogramFrame: HeroBrowserFrame = {
  id: 'hero-odontogram',
  title: '3D odontogram',
  address: 'dentalsys://odontogram',
};

export const heroCodeNote: HeroCodeNote = {
  id: 'hero-code-note',
  lines: [
    '// solve real problems',
    '',
    'const solution = build({',
    '  problem: understood,',
    '  design: simple,',
    '  impact: useful',
    '});',
  ],
};
