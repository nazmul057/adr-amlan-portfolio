import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, HeartHandshake, Users, ChevronDown, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  // Split into sections
  const workExperience = EXPERIENCE_DATA.filter(item => item.type === 'work');
  const volunteerExperience = EXPERIENCE_DATA.filter(item => item.type === 'volunteer');
  const leadershipAndExtracurricular = EXPERIENCE_DATA.filter(
    item => item.type === 'leadership_extracurricular'
  );

  // Toggle sections (comment out any one line to hide that section)
  const SHOW_WORK = true;
  const SHOW_VOLUNTEER = true;
  const SHOW_LEADERSHIP_EXTRACURRICULAR = true;

  const renderTimeline = (
    items: typeof EXPERIENCE_DATA,
    sectionTitle: string,
    sectionType: 'work' | 'volunteer' | 'leadership_extracurricular'
  ) => {
    if (!items.length) return null;

    const iconMap = {
      work: Briefcase,
      volunteer: HeartHandshake,
      leadership_extracurricular: Users
    } as const;

    const Icon = iconMap[sectionType];

    return (
      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-white">{sectionTitle}</h2>

        <div className="relative grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-12">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={item.id}>
                {/* Timeline Column */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary ring-8 ring-primary/10">
                    <Icon size={20} className="text-white" />
                  </div>
                  {!isLast && <div className="my-2 w-0.5 grow bg-white/10"></div>}
                </div>

                {/* Content Column */}
                <div className="flex flex-col pb-16">
                  {/* Header Row: organization + period */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      {/* Organization */}
                      <h3 className="text-xl font-bold text-white">{item.organization}</h3>

                      {/* Organization blurb + link */}
                      {(item.orgDesc || item.link) && (
                        <div className="mt-2 flex flex-col gap-2">
                          {item.orgDesc && (
                            <p className="max-w-2xl text-sm leading-relaxed text-white/60">
                              {item.orgDesc}
                            </p>
                          )}

                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Open external link"
                              className="
                                inline-flex w-fit items-center gap-2
                                rounded-lg border border-white/10
                                bg-white/5 px-3 py-1.5
                                text-xs font-medium text-white/70
                                transition-colors
                                hover:border-white/20 hover:bg-white/10 hover:text-white
                              "
                            >
                              <span>{item.orgType ? `Explore ${item.orgType}` : 'Explore'}</span>
                              <ExternalLink size={14} className="opacity-70" />
                            </a>
                          )}
                        </div>
                      )}

                      {/* Title + engagement */}
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <p className="text-lg font-medium text-primary">{item.title}</p>

                        {item.engagement && (
                          <span
                            className="
                              flex h-7 items-center rounded-lg
                              bg-primary/5
                              px-3 text-xs font-medium
                              text-purple-500
                              border border-primary/25
                              transition-colors
                              hover:text-purple-300 hover:bg-primary/10
                            "
                          >
                            {item.engagement}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Period */}
                    <span className="shrink-0 text-sm font-medium text-white/60 sm:mt-1">
                      {item.period}
                    </span>
                  </div>

                  {/* Details Card */}
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-1 transition-colors hover:border-white/20">
                    <details className="group" open={index === 0}>
                      <summary className="flex cursor-pointer list-none items-center justify-between p-4">
                        <span className="text-sm font-medium text-white/90">
                          {sectionType === 'work' ? 'Role Details' : 'Details'}
                        </span>
                        <ChevronDown
                          size={18}
                          className="text-white/60 transition-transform duration-300 group-open:rotate-180"
                        />
                      </summary>

                      <div className="border-t border-white/10 px-4 pb-4 pt-2">
                        {item.details && item.details.length > 0 ? (
                          <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/70 marker:text-primary">
                            {item.details.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mb-4 text-sm leading-relaxed text-white/70">
                            {/* Optional fallback text */}
                          </p>
                        )}

                        {item.tags && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="
                                  flex h-7 items-center rounded-lg
                                  bg-primary/5
                                  px-3 text-xs font-medium
                                  text-purple-400
                                  border border-primary/25
                                  transition-colors
                                  hover:text-purple-300 hover:bg-primary/10
                                "
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </details>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
          Professional Journey
        </h1>
        <p className="text-lg text-white/60">
          My career path and professional roles.
        </p>
      </div>

      {SHOW_WORK && renderTimeline(workExperience, 'Work Experience', 'work')}
      {SHOW_VOLUNTEER && renderTimeline(volunteerExperience, 'Volunteering', 'volunteer')}
      {SHOW_LEADERSHIP_EXTRACURRICULAR &&
        renderTimeline(leadershipAndExtracurricular, 'Leadership & Extracurricular', 'leadership_extracurricular')}
    </div>
  );
};

export default Experience;
