import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-8">
      <div
        className={`mx-auto max-w-[1040px] rounded-2xl border px-5 py-3 transition-all duration-500 ${
          scrolled
            ? 'border-white/15 bg-background-dark/95 shadow-[0_18px_50px_-24px_rgba(127,19,236,0.85)] backdrop-blur-xl'
            : 'border-white/10 bg-background-dark/55 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Wordmark */}
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-white"
            aria-label="Go to home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-[#4c0f8f] shadow-[0_8px_20px_-8px_rgba(127,19,236,0.9)] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
              <Terminal size={18} className="text-white" />
            </span>
            <span className="hidden text-left leading-tight sm:block">
              <span className="block text-sm font-bold tracking-tight text-white">Amlan Audri</span>
              <span className="block text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white/40">
                Systems · Research
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden flex-1 items-center justify-end gap-7 md:flex">
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link text-sm font-medium ${isActive ? 'is-active' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <button onClick={() => navigate('/contact')} className="btn btn--primary h-10 px-5 text-sm">
              Contact
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-1 border-t border-white/10 pt-3 md:hidden">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${i * 45}ms` }}
                className={({ isActive }) =>
                  `animate-fade-up rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                    isActive ? 'bg-primary/15 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={() => {
                navigate('/contact');
                setIsOpen(false);
              }}
              className="btn btn--primary mt-2 h-11 w-full text-sm"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
