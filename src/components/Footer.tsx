import React from 'react';
// import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

import { EMAIL_ADDRESS_AA, PHONE_NUMBER_AA, GITHUB_URL_AA, LINKEDIN_URL_AA } from "@/constants";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="layout-content-container mx-auto max-w-[960px] px-4 sm:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/" className="min-w-20 text-sm font-normal text-white/60 hover:text-white">Home</a>
            <a href="#/experience" className="min-w-20 text-sm font-normal text-white/60 hover:text-white">Experience</a>
            <a href="#/education" className="min-w-20 text-sm font-normal text-white/60 hover:text-white">Education</a>
            <a href="#/skills" className="min-w-20 text-sm font-normal text-white/60 hover:text-white">Skills</a>
            <a href="#/projects" className="min-w-20 text-sm font-normal text-white/60 hover:text-white">Projects</a>
            <a href="#/contact" className="min-w-20 text-sm font-normal text-white/60 hover:text-white">Contact</a>
          </div>

          <div className="flex gap-6">
            <a href={GITHUB_URL_AA} className="text-white/60 transition-colors hover:text-primary">
              <FaGithub size={20} />
            </a>
            <a href={LINKEDIN_URL_AA} className="text-white/60 transition-colors hover:text-primary">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${EMAIL_ADDRESS_AA}`} className="text-white/60 transition-colors hover:text-primary">
              <FaEnvelope size={20} />
            </a>
          </div>

          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Amlan Audri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;