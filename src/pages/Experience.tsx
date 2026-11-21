import React from 'react';
import {
  Microscope,
  GraduationCap,
  HeartHandshake,
  Users,
  ChevronDown,
  ExternalLink,
  MapPin,
  FileText,
  Info
} from 'lucide-react';

import { EXPERIENCE_DATA, PUBLICATIONS } from '../constants';
import type { ExperienceItem, ExperienceKind } from '../types';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const ICONS: Record<string, React.ElementType> = {
  research: Microscope,
  teaching: GraduationCap,
  volunteer: HeartHandshake,
  leadership_extracurricular: Users
};

const by = (kind: ExperienceKind) => EXPERIENCE_DATA.filter((item) => item.type === kind);

/* ------------------------------------------------------------------ */

const TimelineEntry: React.FC<{
  item: ExperienceItem;
  index: number;
  isLast: boolean;
  kind: ExperienceKind;
}> = ({ item, index, isLast, kind }) => {
  const Icon = ICONS[kind] ?? Microscope;

  return (
    <>
      {/* Rail */}
      <div className="flex flex-col items-center">
        <div className={`tl-node ${item.current ? 'tl-node--now' : ''}`}>
          <Icon size={18} className="text-white" />
        </div>
        {!isLast && <div className="tl-line" />}
      </div>

      {/* Body */}
      <Reveal className="flex flex-col pb-14" delay={index * 70}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-bold tracking-tight text-white">{item.title}</h3>
              {item.engagement && <span className="chip">{item.engagement}</span>}
              {item.current && (
                <span className="chip border-emerald-400/30 bg-emerald-400/10 text-emerald-200">
                  Current
                </span>
              )}
            </div>

            <p className="mt-2 text-lg font-medium text-primary-tint">{item.organization}</p>

            {item.orgDesc && (
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-white/70">{item.orgDesc}</p>
            )}

            {item.location && (
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/65">
                <MapPin size={13} /> {item.location}
              </p>
            )}

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="chip chip--plain mt-3 inline-flex w-fit"
              >
                {item.orgType ? `Explore ${item.orgType}` : 'Explore'}
                <ExternalLink size={13} className="opacity-70" />
              </a>
            )}
          </div>

          <span className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/75">
            {item.period}
          </span>
        </div>

        {item.note && (
          <p className="mt-4 flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3.5 py-2.5 text-xs leading-relaxed text-purple-200/80">
            <Info size={14} className="mt-0.5 flex-none" />
            {item.note}
          </p>
        )}

        {(item.details?.length || item.tags?.length) && (
          <div className="surface surface--lift mt-4 p-1">
            <details className="group" open={index === 0}>
              <summary className="flex cursor-pointer items-center justify-between p-4">
                <span className="text-sm font-medium text-white/90">
                  {kind === 'research' ? 'Role Details' : 'Details'}
                </span>
                <ChevronDown
                  size={18}
                  className="text-white/50 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-white/10 px-4 pb-4 pt-3">
                {item.details && item.details.length > 0 && (
                  <ul className="mb-4 space-y-2.5 text-sm leading-relaxed text-white/70">
                    {item.details.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="marker-dot" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </details>
          </div>
        )}
      </Reveal>
    </>
  );
};

/* ------------------------------------------------------------------ */

const Timeline: React.FC<{
  items: ExperienceItem[];
  kind: ExperienceKind;
  eyebrow: string;
  title: string;
  subtitle?: string;
}> = ({ items, kind, eyebrow, title, subtitle }) => {
  if (!items.length) return null;
  const Icon = ICONS[kind] ?? Microscope;

  return (
    <section>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} icon={<Icon size={18} />} />
      <div className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-10">
        {items.map((item, index) => (
          <TimelineEntry
            key={item.id}
            item={item}
            index={index}
            isLast={index === items.length - 1}
            kind={kind}
          />
        ))}
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */

const Experience: React.FC = () => {
  const research = by('research');
  const teaching = by('teaching');
  const volunteering = by('volunteer');
  const leadership = by('leadership_extracurricular');
  const secondary = by('secondary');

  return (
    <div className="flex flex-col gap-20">
      <PageHeader
        eyebrow="Journey"
        title="Research & Professional Experience"
        lead="Research roles, teaching, and the published work that has come out of them."
      />

      <Timeline
        items={research}
        kind="research"
        eyebrow="Primary focus"
        title="Research Experience"
        subtitle="Agentic AI and bioinformatics, biomedical signal processing, and the data systems behind long-running studies."
      />

      {/* ---------------- Publications ---------------- */}
      {PUBLICATIONS.length > 0 && (
        <section>
          <SectionHeading
            eyebrow="Output"
            title="Publications"
            icon={<FileText size={18} />}
            subtitle="Peer-reviewed work in preparation and under review."
          />
          <ol className="flex flex-col gap-4">
            {PUBLICATIONS.map((pub, i) => (
              <Reveal as="li" key={pub.id} delay={i * 90}>
                <article className="surface surface--lift flex gap-4 p-5 sm:p-6">
                  <span className="mt-0.5 font-mono text-sm font-bold text-primary-soft">
                    [{pub.id}]
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold leading-snug text-white">{pub.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{pub.authors}</p>
                    <p className="mt-2 text-sm italic text-white/50">{pub.venue}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="chip">{pub.status}</span>
                      <span className="chip chip--plain">{pub.year}</span>
                    </div>
                    {pub.note && <p className="mt-3 text-xs text-white/40">{pub.note}</p>}
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      <Timeline
        items={teaching}
        kind="teaching"
        eyebrow="Instruction"
        title="Teaching Experience"
        subtitle="Preparing and running technical sessions for undergraduate audiences of mixed experience."
      />

      <Timeline items={volunteering} kind="volunteer" eyebrow="Service" title="Volunteering" />

      <Timeline
        items={leadership}
        kind="leadership_extracurricular"
        eyebrow="Beyond the lab"
        title="Leadership & Extracurricular"
      />

      {/* ---------------- Secondary engagements (low key) ---------------- */}
      {secondary.length > 0 && (
        <section className="border-t border-white/[0.07] pt-10">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
              Additional Engagements
            </h2>
          </Reveal>

          <div className="mt-5 flex flex-col gap-3">
            {secondary.map((item, i) => (
              <Reveal key={item.id} delay={i * 70}>
                <details className="surface--quiet group">
                  <summary className="flex cursor-pointer flex-wrap items-center gap-x-3 gap-y-1 p-4">
                    <span className="text-sm font-medium text-white/80">{item.title}</span>
                    <span className="text-sm text-white/60">· {item.organization}</span>
                    {item.engagement && (
                      <span className="rounded border border-white/10 px-1.5 py-0.5 text-[0.65rem] text-white/60">
                        {item.engagement}
                      </span>
                    )}
                    <span className="ml-auto flex items-center gap-2 font-mono text-[0.7rem] text-white/55">
                      {item.period}
                      <ChevronDown
                        size={15}
                        className="transition-transform duration-300 group-open:rotate-180"
                      />
                    </span>
                  </summary>

                  <div className="border-t border-white/[0.07] px-4 pb-4 pt-3">
                    {item.orgDesc && (
                      <p className="mb-3 text-xs leading-relaxed text-white/60">{item.orgDesc}</p>
                    )}
                    {item.details && (
                      <ul className="space-y-2 text-xs leading-relaxed text-white/65">
                        {item.details.map((point, idx) => (
                          <li key={idx} className="flex gap-2.5">
                            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-white/45" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.tags && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-white/[0.07] px-2 py-0.5 text-[0.65rem] text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] text-white/55 transition-colors hover:text-white/85"
                      >
                        {item.orgType ? `Explore ${item.orgType}` : 'Explore'}
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Experience;
