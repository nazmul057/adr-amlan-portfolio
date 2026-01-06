import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TypingAnimation from "@/components/TypingAnimation";

import { EMAIL_ADDRESS_AA, PHONE_NUMBER_AA, GITHUB_URL_AA, LINKEDIN_URL_AA } from "@/constants";

import PROFILE_IMAGE_AA from "@/supp_dcs/images/Profile_Picture_AA.jpg";
// export const PROFILE_IMAGE_URL_AA = ProfileImgAA;

import ABSTRACT_NETWORK_IMG from "@/supp_dcs/images/homepage_abstract.webp";
// export const ABSTRACT_NETWORK_IMAGE = AbsNetPath;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const interests = [
    "Systems Design",
    "Agentic AI",
    "Data Engineering",
    "Automation",
    "Backend Systems",
    "Biomedical"
  ];

  const hobbies = [
    "Bicycling",
    "Artistic 3D Design",
    "Paramotors",
    "Cooking",
    "Dodgeball",
    "Tennis",
    "City Walk at Night",
    "Exploring Cuisines"
  ];

  const funFacts = [
    "I have an unusual language quirk: I can speak and understand Hindi but cannot read or write it, and I can read and write Arabic but cannot speak or understand it.",
    "I never follow a cooking recipe exactly. I always have to add my own unique twist to it."
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="mt-8 sm:mt-16">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Amlan Audri
              </h1>
              <h2 className="text-lg font-medium text-primary sm:text-xl">
                Systems Design | Biomedical | Software
              </h2>

              <TypingAnimation
                words={[
                  "Hi! I am Amlan.",
                  "Nice to see you visiting my webpage.",
                  "Feel free to jump across different sections about my profile.",
                  "Explore my Journey, Projects, Education, and Skills.",
                  "I am drawn to the challenge of orchestrating complexity toward effective outcomes.",
                  "Systems thinking, software, and interdisciplinary engineering domains are at my core."
                ]}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate('/projects')}
                className="flex h-12 min-w-[120px] items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
              >
                View Work
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="flex h-12 min-w-[120px] items-center justify-center rounded-lg bg-white/10 px-6 text-sm font-bold text-white transition-colors hover:bg-white/20"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="flex flex-1 justify-center md:justify-end">
            <div
              className="aspect-square w-full max-w-[260px] rounded-full bg-cover bg-center shadow-xl ring-1 ring-white/10"
              style={{ backgroundImage: `url(${PROFILE_IMAGE_AA})` }}
              aria-label="Profile image"
            />
          </div>
        </div>
      </section>

      {/* Profile & About Section */}
      <section className="grid gap-8 lg:grid-cols-3 lg:gap-12">
        {/* Personal Info Card */}
        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl h-fit">
          <div
            className="aspect-square w-full rounded-xl bg-cover shadow-inner"
            style={{ backgroundImage: `url(${ABSTRACT_NETWORK_IMG})` }}
          />

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Full Name</h3>
                <p className="text-base text-white font-medium">Amlan Nazmul Hai Audri</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Location</h3>
                <p className="text-base text-white font-medium">Toronto, Ontario, Canada</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Phone</h3>
                <p className="text-base text-white font-medium">{PHONE_NUMBER_AA}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Email</h3>
                <p className="text-base text-white font-medium text-sm break-all">{EMAIL_ADDRESS_AA}</p>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map(item => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-md bg-white/10 text-xs font-medium text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map(item => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-md bg-white/10 text-xs font-medium text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={GITHUB_URL_AA}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-primary"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={LINKEDIN_URL_AA}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-primary"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Summary + Fun Facts */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Profile Summary */}
          <div className="flex flex-col justify-start gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-white">Profile Summary</h2>
            <div className="space-y-6 text-base text-white/70 leading-relaxed">
              <p>
                Fascinated by the visions, ingenuity, and engineering behind modern computing and information infrastructure,
                I have built core expertise in software systems and technologies. A Master’s in Systems Design Engineering
                complements this foundation with emphasis on development processes and design effectiveness.
              </p>
              <p>
                Beyond the core expertise, my background spans across mechatronics, data analytics, and biomedical domains,
                enabling a holistic, interdisciplinary approach to designing innovative, efficient, and sustainable solutions.
                Adept at continuous learning and rapid adaptation, I thrive in mastering emerging technologies and contributing
                effectively in dynamic environments.
              </p>
            </div>
          </div>

          {/* Fun Facts Card */}
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-white">Fun Facts About Me</h2>
            <ul className="space-y-3 text-base text-white/70">
              {funFacts.map(fact => (
                <li key={fact} className="flex gap-3">
                  <span className="mt-1 text-primary">⟡</span>
                  <span className="leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
