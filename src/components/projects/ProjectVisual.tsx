import React from 'react';
import Image from 'next/image';
import type { Locale, Project } from '@/types/content';
import { localize } from '@/types/content';
import { AutomationWorkflowVisual } from '@/components/work/automation-qa/AutomationWorkflowVisual';

type ProjectVisualProps = {
  readonly project: Project;
  readonly locale: Locale;
};

export function ProjectVisual({ project, locale }: ProjectVisualProps) {
  const alt = localize(project.imageAlt, locale);

  if (project.slug === 'automation-qa') {
    return <AutomationWorkflowVisual variant="card" />;
  }

  if (!project.image) {
    return null;
  }

  return (
    <div className="overflow-hidden border border-border bg-sage-light">
      <Image
        src={project.image}
        alt={alt}
        width={1600}
        height={900}
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
