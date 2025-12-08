import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, ChevronDown } from 'lucide-react';

const Experience: React.FC = () => {
  // Filter for Work Experience only
  const workExperience = EXPERIENCE_DATA.filter(item => item.type === 'work');

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            Professional Journey
        </h1>
        <p className="text-lg text-white/60">
            My career path and professional roles.
        </p>
      </div>

      <div className="relative mt-8 grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-12">
        {workExperience.map((item, index) => {
            const isLast = index === workExperience.length - 1;
            
            return (
                <React.Fragment key={item.id}>
                    {/* Timeline Column */}
                    <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary ring-8 ring-primary/10">
                            <Briefcase size={20} className="text-white" />
                        </div>
                        {!isLast && <div className="w-0.5 grow bg-white/10 my-2"></div>}
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col pb-16">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                            <h3 className="text-xl font-bold text-white">{item.organization}</h3>
                            <span className="text-sm font-medium text-white/60">{item.period}</span>
                        </div>
                        <p className="mt-1 text-lg font-medium text-primary">{item.title}</p>
                        
                        {/* Details Card */}
                        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-1 transition-colors hover:border-white/20">
                            <details className="group" open={index === 0}>
                                <summary className="flex cursor-pointer list-none items-center justify-between p-4">
                                    <span className="text-sm font-medium text-white/90">
                                        Role Details
                                    </span>
                                    <ChevronDown size={18} className="text-white/60 transition-transform duration-300 group-open:rotate-180" />
                                </summary>
                                <div className="border-t border-white/10 px-4 pb-4 pt-2">
                                    <p className="mb-4 text-sm leading-relaxed text-white/70">
                                        {item.details || "Led development of scalable solutions and contributed to core engineering initiatives. Collaborated with cross-functional teams to deliver high-quality software."}
                                    </p>
                                    {item.tags && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="flex h-7 items-center rounded-lg bg-primary/10 px-3 text-xs font-medium text-primary">
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
    </div>
  );
};

export default Experience;