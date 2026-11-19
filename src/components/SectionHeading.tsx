import React from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, subtitle, icon }) => (
  <Reveal className="mb-8 flex flex-col gap-3">
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <div className="flex items-center gap-3">
      {icon && (
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary-soft">
          {icon}
        </span>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">{title}</h2>
    </div>
    <div className="rule h-px w-full bg-linear-to-r from-primary/70 via-white/10 to-transparent" />
    {subtitle && <p className="max-w-2xl text-sm leading-relaxed text-white/55">{subtitle}</p>}
  </Reveal>
);

export default SectionHeading;
