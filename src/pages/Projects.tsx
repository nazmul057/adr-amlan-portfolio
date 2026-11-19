import React, { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

import { PROJECTS } from '../constants';
import type { ProjectType } from '../types';
import ProjectArt from '@/components/ProjectArt';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

type Filter = 'All' | ProjectType;

const Projects: React.FC = () => {
  // Categories are derived from the data, so a filter can never come up empty.
  const categories = useMemo<Filter[]>(() => {
    const seen = new Set<ProjectType>();
    PROJECTS.forEach((p) => p.types.forEach((t) => seen.add(t)));
    return ['All', ...Array.from(seen).sort()];
  }, []);

  const [filter, setFilter] = useState<Filter>('All');

  const filtered = useMemo(() => {
    const list = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.types.includes(filter));
    return [...list].sort((a, b) => a.id - b.id);
  }, [filter]);

  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        eyebrow="Portfolio"
        title="My Work"
        lead="A selection of projects spanning software, research systems, mechatronics, biomedical engineering, and AI."
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-2.5">
        {categories.map((cat) => {
          const active = filter === cat;
          const count =
            cat === 'All'
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.types.includes(cat as ProjectType)).length;

          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={active}
              className={`flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium transition-all duration-300 ${
                active
                  ? 'bg-linear-to-r from-primary to-[#9333ea] text-white shadow-[0_10px_28px_-12px_rgba(127,19,236,1)]'
                  : 'border border-white/10 bg-white/[0.04] text-white/65 hover:border-white/20 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
              <span className={`text-[0.7rem] ${active ? 'text-white/70' : 'text-white/35'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((project, i) => (
          <Reveal key={project.id} delay={(i % 4) * 80}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="surface surface--lift group flex h-full flex-col gap-4 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              aria-label={`Open project: ${project.title}`}
            >
              <ProjectArt art={project.art} label={project.altText} />

              <div className="flex flex-1 flex-col gap-3 p-1">
                <h3 className="text-base font-bold leading-snug text-white transition-colors group-hover:text-primary-soft">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {project.types.map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 text-[0.68rem] font-medium text-white/60"
                    >
                      {type}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5 text-[0.82rem] leading-relaxed text-white/55">
                  {project.description.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <span className="marker-dot !mt-[0.45rem]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip !text-[0.68rem]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 self-end text-sm font-medium text-primary-soft transition-all duration-300 group-hover:gap-2.5 group-hover:text-accent">
                    View Project
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
