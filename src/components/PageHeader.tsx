import React from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, lead }) => (
  <header className="flex flex-col gap-4 animate-fade-up">
    <span className="eyebrow">{eyebrow}</span>
    <h1 className="text-gradient text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">
      {title}
    </h1>
    {lead && <p className="max-w-2xl text-base leading-relaxed text-white/60">{lead}</p>}
    <div className="mt-2 h-px w-28 bg-linear-to-r from-primary to-transparent" />
  </header>
);

export default PageHeader;
