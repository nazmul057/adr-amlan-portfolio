import React from 'react';
import {
  School,
  Award as AwardIcon,
  BadgeCheck,
  ChevronDown,
  ExternalLink,
  MapPin,
  BookOpen,
  Trophy
} from 'lucide-react';

import { AWARDS, EXPERIENCE_DATA } from '../constants';
import type { ExperienceItem } from '../types';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-lg border border-primary/20 bg-primary/5 px-3.5 py-2.5">
    <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-primary-soft">{label}</p>
    <p className="mt-0.5 text-sm font-bold text-white">{value}</p>
  </div>
);

const EduEntry: React.FC<{
  item: ExperienceItem;
  index: number;
  isLast: boolean;
  isCert: boolean;
}> = ({ item, index, isLast, isCert }) => {
  const Icon = isCert ? BadgeCheck : School;
  const hasBody =
    item.details?.length ||
    item.courses?.length ||
    item.auditedCourses?.length ||
    item.tags?.length ||
    item.cgpa ||
    item.honors ||
    item.thesis;

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="tl-node">
          <Icon size={18} className="text-white" />
        </div>
        {!isLast && <div className="tl-line" />}
      </div>

      <Reveal className="flex flex-col pb-14" delay={index * 70}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <h3 className="text-xl font-bold tracking-tight text-white">{item.title}</h3>
            <p className="mt-2 text-lg font-medium text-primary-soft">{item.organization}</p>

            {item.orgDesc && (
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-white/55">{item.orgDesc}</p>
            )}

            {item.location && (
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/45">
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
                {isCert ? 'View Credential' : 'Explore Organization'}
                <ExternalLink size={13} className="opacity-70" />
              </a>
            )}
          </div>

          <span className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/60">
            {item.period}
          </span>
        </div>

        {hasBody && (
          <div className="surface surface--lift mt-4 p-1">
            <details className="group" open={!isCert}>
              <summary className="flex cursor-pointer items-center justify-between p-4">
                <span className="text-sm font-medium text-white/90">
                  {isCert ? 'Certification Details' : 'Academic Overview'}
                </span>
                <ChevronDown
                  size={18}
                  className="text-white/50 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-white/10 px-4 pb-4 pt-3">
                {(item.cgpa || item.honors) && (
                  <div className="mb-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {item.cgpa && <Stat label="Cumulative Average" value={item.cgpa} />}
                    {item.honors && <Stat label="Honors" value={item.honors} />}
                  </div>
                )}

                {item.thesis && (
                  <div className="mb-4 rounded-lg border-l-2 border-primary/60 bg-white/[0.03] px-4 py-3">
                    <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary-soft">
                      Undergraduate Thesis
                    </p>
                    <p className="text-sm leading-relaxed text-white/70">{item.thesis}</p>
                  </div>
                )}

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

                {item.courses && item.courses.length > 0 && (
                  <div className="mt-4">
                    <p className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                      <BookOpen size={13} /> Selected Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course) => (
                        <span key={course} className="chip">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.auditedCourses && item.auditedCourses.length > 0 && (
                  <div className="mt-4">
                    <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-white/40">
                      Audited
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.auditedCourses.map((course) => (
                        <span key={course} className="chip chip--plain opacity-70">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
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

const Education: React.FC = () => {
  const degrees = EXPERIENCE_DATA.filter((i) => i.type === 'education');
  const certs = EXPERIENCE_DATA.filter((i) => i.type === 'certification');

  return (
    <div className="flex flex-col gap-20">
      <PageHeader
        eyebrow="Background"
        title="Education & Certifications"
        lead="Academic training, coursework, and continued professional development."
      />

      <section>
        <SectionHeading eyebrow="Degrees" title="Education" icon={<School size={18} />} />
        <div className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-10">
          {degrees.map((item, i) => (
            <EduEntry
              key={item.id}
              item={item}
              index={i}
              isLast={i === degrees.length - 1}
              isCert={false}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Continued learning"
          title="Certifications"
          icon={<AwardIcon size={18} />}
        />
        <div className="grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-10">
          {certs.map((item, i) => (
            <EduEntry
              key={item.id}
              item={item}
              index={i}
              isLast={i === certs.length - 1}
              isCert
            />
          ))}
        </div>
      </section>

      {AWARDS.length > 0 && (
        <section>
          <SectionHeading
            eyebrow="Recognition"
            title="Awards & Competitions"
            icon={<Trophy size={18} />}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {AWARDS.map((award, i) => (
              <Reveal key={award.id} delay={i * 90}>
                <div className="surface surface--lift flex h-full items-start gap-4 p-5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/15 text-primary-soft">
                    <Trophy size={18} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">{award.title}</h3>
                    <p className="mt-1 text-sm text-white/55">{award.organization}</p>
                    <p className="mt-1.5 font-mono text-xs text-primary-soft">{award.year}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Education;
