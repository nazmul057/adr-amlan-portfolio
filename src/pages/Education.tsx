import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { School, Award, ChevronDown, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const educationHistory = EXPERIENCE_DATA.filter(
    item => item.type === 'education'
  );
  const certificationHistory = EXPERIENCE_DATA.filter(
    item => item.type === 'certification'
  );

  const renderTimeline = (
    items: typeof EXPERIENCE_DATA,
    sectionTitle: string,
    isCertificationSection: boolean
  ) => {
    if (!items.length) return null;

    return (
      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-white">
          {sectionTitle}
        </h2>
        <div className="relative grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-12">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const Icon = isCertificationSection ? Award : School;

            return (
              <React.Fragment key={item.id}>
                {/* Timeline Column */}
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary ring-8 ring-primary/10">
                    <Icon size={20} className="text-white" />
                  </div>
                  {!isLast && (
                    <div className="my-2 w-0.5 grow bg-white/10" />
                  )}
                </div>

                {/* Content Column */}
                <div className="flex flex-col pb-16">
                  {/* Header Row: organization + period */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      {/* Organization */}
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      {/* Title */}
                      <p className="mt-3 text-lg font-medium text-primary">
                        {item.organization}
                      </p>

                      {/* Organization description + credentials link */}
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
                              aria-label={
                                isCertificationSection
                                  ? 'Open external credential link'
                                  : 'Open external organization link'
                              }
                              className="
                                inline-flex w-fit items-center gap-2
                                rounded-lg border border-white/10
                                bg-white/5 px-3 py-1.5
                                text-xs font-medium text-white/70
                                transition-colors
                                hover:border-white/20 hover:bg-white/10 hover:text-white
                              "
                            >
                              <span>
                                {isCertificationSection ? 'View Credential' : 'Explore Organization'}
                              </span>
                              <ExternalLink size={14} className="opacity-70" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Period */}
                    <span className="shrink-0 text-sm font-medium text-white/60 sm:mt-1">
                      {item.period}
                    </span>
                  </div>

                  {/* Details Card */}
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-1 transition-colors hover:border-white/20">
                    <details className="group" open={true}>
                      <summary className="flex cursor-pointer list-none items-center justify-between p-4">
                        <span className="text-sm font-medium text-white/90">
                          {isCertificationSection
                            ? 'Certification Details'
                            : 'Academic Overview'}
                        </span>
                        <ChevronDown
                          size={18}
                          className="text-white/60 transition-transform duration-300 group-open:rotate-180"
                        />
                      </summary>
                      <div className="border-t border-white/10 px-4 pb-4 pt-2">
                        {item.details && item.details.length > 0 && (
                          <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/70 marker:text-primary">
                            {item.details.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        )}
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {item.cgpa && (
                            <div className="text-sm text-white/80">
                              <span className="font-semibold text-purple-500">
                                CGPA:
                              </span>{' '}
                              {item.cgpa}
                            </div>
                          )}
                          {item.honors && (
                            <div className="text-sm text-white/80">
                              <span className="font-semibold text-purple-500">
                                Honors:
                              </span>{' '}
                              {item.honors}
                            </div>
                          )}
                        </div>

                        {item.courses && item.courses.length > 0 && (
                          <div className="mt-4">
                            <div className="mb-2 text-sm font-semibold text-white/80">
                              Key Courses
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.courses.map(course => (
                                <span
                                  key={course}
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
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {item.tags && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map(tag => (
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
          Education & Certifications
        </h1>
        <p className="text-lg text-white/60">
          My academic background and continuous learning achievements.
        </p>
      </div>

      {renderTimeline(educationHistory, 'Education', false)}
      {renderTimeline(certificationHistory, 'Certifications', true)}
    </div>
  );
};

export default Education;
