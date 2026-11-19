import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GitHubIcon, LinkedInIcon } from '@/components/BrandIcons';
import { ArrowRight, MapPin, Mail, Phone, UserRound, FlaskConical } from 'lucide-react';

import TypingAnimation from '@/components/TypingAnimation';
import Reveal from '@/components/Reveal';
import { useSpotlight } from '@/hooks/useSpotlight';
import SectionHeading from '@/components/SectionHeading';

import {
  EMAIL_ADDRESS_AA,
  PHONE_NUMBER_AA,
  GITHUB_URL_AA,
  LINKEDIN_URL_AA,
  FULL_NAME_AA,
  LOCATION_AA
} from '@/constants';

import PROFILE_IMAGE_AA from '@/supp_dcs/images/Profile_Picture_AA.jpg';

const INTERESTS = [
  'Systems Design',
  'Agentic AI',
  'Bioinformatics',
  'Data Engineering',
  'Automation',
  'Backend Systems',
  'Biomedical'
];

const HOBBIES = [
  'Bicycling',
  'Artistic 3D Design',
  'Paramotors',
  'Cooking',
  'Dodgeball',
  'Tennis',
  'City Walk at Night',
  'Exploring Cuisines'
];

const FUN_FACTS = [
  'I have an unusual language quirk: I can speak and understand Hindi but cannot read or write it, and I can read and write Arabic but cannot speak or understand it.',
  'I never follow a cooking recipe exactly. I always have to add my own unique twist to it.'
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const infoCard = useSpotlight<HTMLDivElement>();
  const summaryCard = useSpotlight<HTMLDivElement>();
  const factsCard = useSpotlight<HTMLDivElement>();

  return (
    <div className="flex flex-col gap-20 md:gap-28">
      {/* ================= Hero ================= */}
      <section className="mt-4 sm:mt-10">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center md:gap-12">
          <div className="flex flex-1 flex-col gap-7">
            {/* Availability pill */}
            <div className="flex animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-purple-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-soft opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-soft" />
                </span>
                Researching agentic AI for genomics
              </span>
            </div>

            <div className="flex animate-fade-up flex-col gap-3" style={{ animationDelay: '90ms' }}>
              <h1 className="text-shimmer text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Amlan Audri
              </h1>
              <h2 className="text-lg font-medium text-primary-soft sm:text-xl">
                Systems Design · Agentic AI · Biomedical Research
              </h2>

              <TypingAnimation
                words={[
                  'Hi! I am Amlan.',
                  'I am glad to see you visiting my webpage.',
                  'Feel free to jump across different sections about my profile.',
                  'Explore my Journey, Projects, Education, and Skills.',
                  'I am drawn to the challenge of orchestrating complexity toward effective outcomes.',
                  'Systems thinking, software, and interdisciplinary engineering domains are at my core.'
                ]}
              />
            </div>

            <div className="flex animate-fade-up flex-wrap gap-3" style={{ animationDelay: '190ms' }}>
              <button onClick={() => navigate('/projects')} className="btn btn--primary h-12 px-6 text-sm">
                View Work <ArrowRight size={16} className="btn-arrow" />
              </button>
              <button onClick={() => navigate('/contact')} className="btn btn--ghost h-12 px-6 text-sm">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex flex-1 animate-fade-up justify-center md:justify-end" style={{ animationDelay: '260ms' }}>
            <div className="relative">
              <div
                className="portrait-ring absolute -inset-5 rounded-full opacity-70 blur-2xl"
                style={{
                  background:
                    'conic-gradient(from 180deg, rgba(127,19,236,0.55), rgba(232,121,249,0.35), rgba(127,19,236,0.55))'
                }}
                aria-hidden="true"
              />
              <div className="relative aspect-square w-full max-w-[270px] overflow-hidden rounded-full p-[2px]">
                <div className="h-full w-full overflow-hidden rounded-full ring-1 ring-white/15">
                  <img
                    src={PROFILE_IMAGE_AA}
                    alt={`Portrait of ${FULL_NAME_AA}`}
                    className="h-full w-full object-cover object-[center_30%] transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Profile ================= */}
      <section>
        <SectionHeading
          eyebrow="About"
          title="Profile"
          icon={<UserRound size={18} />}
          subtitle="Who I am, what I work on, and where my attention goes."
        />

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Info card */}
          <Reveal className="lg:col-span-1">
            <div ref={infoCard.ref} onPointerMove={infoCard.onPointerMove} className="surface spotlight flex h-fit flex-col gap-6 p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="eyebrow">Full Name</h3>
                  <p className="mt-1 text-base font-medium text-white">{FULL_NAME_AA}</p>
                </div>

                <div className="h-px bg-white/10" />

                <ul className="flex flex-col gap-3.5 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 flex-none text-primary-soft" />
                    <span className="text-white/80">{LOCATION_AA}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={16} className="mt-0.5 flex-none text-primary-soft" />
                    <span className="text-white/80">{PHONE_NUMBER_AA}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="mt-0.5 flex-none text-primary-soft" />
                    <a
                      href={`mailto:${EMAIL_ADDRESS_AA}`}
                      className="break-all text-white/80 transition-colors hover:text-white"
                    >
                      {EMAIL_ADDRESS_AA}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <h3 className="eyebrow mb-3">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="eyebrow mb-3">Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  {HOBBIES.map((item) => (
                    <span key={item} className="chip chip--plain">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-1">
                <a
                  href={GITHUB_URL_AA}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/20"
                >
                  <GitHubIcon size={18} />
                </a>
                <a
                  href={LINKEDIN_URL_AA}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/20"
                >
                  <LinkedInIcon size={18} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Summary + fun facts */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Reveal delay={80}>
              <div ref={summaryCard.ref} onPointerMove={summaryCard.onPointerMove} className="surface spotlight flex flex-col gap-5 p-7 lg:p-9">
                <div className="flex items-center gap-3">
                  <FlaskConical size={20} className="text-primary-soft" />
                  <h2 className="text-xl font-bold text-white">Profile Summary</h2>
                </div>
                <div className="space-y-5 text-[0.95rem] leading-relaxed text-white/70">
                  <p>
                    Researcher and engineer with graduate training in Systems Design Engineering,
                    currently working on bioinformatics and agentic AI with the Machine Learning Group
                    at Qatar University, in collaboration with research groups at the University of
                    Regina, Canada. Earlier research spans biomedical signal processing,
                    instrumentation, and research data systems at universities in Qatar and
                    Bangladesh.
                  </p>
                  <p>
                    Beyond the core expertise, my background spans across mechatronics, data
                    analytics, and biomedical domains, enabling a holistic, interdisciplinary approach
                    to designing innovative, efficient, and sustainable solutions. Adept at continuous
                    learning and rapid adaptation, I thrive in mastering emerging technologies and
                    contributing effectively in dynamic environments.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div ref={factsCard.ref} onPointerMove={factsCard.onPointerMove} className="surface spotlight flex flex-col gap-5 p-7 lg:p-9">
                <h2 className="text-xl font-bold text-white">Fun Facts About Me</h2>
                <ul className="space-y-4 text-[0.95rem] text-white/70">
                  {FUN_FACTS.map((fact) => (
                    <li key={fact} className="flex gap-3">
                      <span className="marker-dot" />
                      <span className="leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
