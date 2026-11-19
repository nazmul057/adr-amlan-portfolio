import React from 'react';
import {
  Code2,
  Wrench,
  Database,
  Cpu,
  Monitor,
  Boxes,
  Terminal,
  Brain,
  Workflow,
  Rocket
} from 'lucide-react';

import { SKILLS } from '../constants';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

const SKILL_ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Wrench,
  Database,
  Cpu,
  Monitor,
  Boxes,
  Brain,
  Workflow,
  Terminal
};

const LEARNING = [
  'Agentic AI',
  'LLMs',
  'Knowledge Graphs',
  'Rust',
  'Advanced System Architecture'
];

const Skills: React.FC = () => (
  <div className="flex flex-col gap-14">
    <PageHeader
      eyebrow="Toolkit"
      title="Technical Skills"
      lead="Languages, platforms, and instruments I work with across research and engineering."
    />

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {SKILLS.map((group, i) => {
        const Icon = SKILL_ICON_MAP[group.icon] ?? Terminal;

        return (
          <Reveal key={group.category} delay={i * 60}>
            <div className="surface surface--lift group flex h-full flex-col gap-5 p-6">
              <div className="flex items-center gap-3.5 border-b border-white/10 pb-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-linear-to-br from-primary/25 to-primary/5 text-primary-soft transition-transform duration-500 group-hover:scale-110">
                  <Icon size={21} />
                </span>
                <h2 className="text-base font-bold leading-tight text-white">{group.category}</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.8rem] font-medium text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/15 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>

    {/* Continuous learning */}
    <Reveal>
      <div className="surface relative overflow-hidden p-8 lg:p-10">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(127,19,236,0.35), transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-soft">
              <Rocket size={19} />
            </span>
            <h3 className="text-xl font-bold text-white">Continuous Learning</h3>
          </div>
          <p className="max-w-3xl leading-relaxed text-white/65">
            Technology is constantly evolving, and so am I. I am currently expanding my knowledge in:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {LEARNING.map((topic) => (
              <span key={topic} className="chip px-3.5 py-2 text-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  </div>
);

export default Skills;
