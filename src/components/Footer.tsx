import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

import { EMAIL_ADDRESS_AA, GITHUB_URL_AA, LINKEDIN_URL_AA } from '@/constants';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

const SOCIALS = [
  { href: GITHUB_URL_AA, label: 'GitHub', Icon: GitHubIcon },
  { href: LINKEDIN_URL_AA, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: `mailto:${EMAIL_ADDRESS_AA}`, label: 'Email', Icon: Mail }
];

const Footer: React.FC = () => (
  <footer className="relative mt-10 border-t border-white/10 py-12">
    <div className="mx-auto max-w-[1040px] px-4 sm:px-8">
      <div className="flex flex-col items-center gap-7 text-center">
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-normal text-white/55 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/15 hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} Amlan Audri. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
