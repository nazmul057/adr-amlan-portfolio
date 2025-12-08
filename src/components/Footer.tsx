import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="layout-content-container mx-auto max-w-[960px] px-4 sm:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/" className="min-w-20 text-sm font-normal text-white/60 hover:text-white">Home</a>
            <a href="/#about" className="min-w-20 text-sm font-normal text-white/60 hover:text-white">About</a>
            <a href="/projects" className="min-w-20 text-sm font-normal text-white/60 hover:text-white">Projects</a>
            <a href="/contact" className="min-w-20 text-sm font-normal text-white/60 hover:text-white">Contact</a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-white/60 transition-colors hover:text-primary">
              <Github size={20} />
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-primary">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-primary">
              <Mail size={20} />
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