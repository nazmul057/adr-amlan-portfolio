import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <header className="sticky top-5 z-50 px-4 sm:px-10">
      <div className="mx-auto max-w-[960px] rounded-xl border border-white/10 bg-background-dark/80 backdrop-blur-md px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-4 text-white" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
            <div className="text-primary">
               <Terminal size={24} />
            </div>
            <h2 className="hidden text-lg font-bold leading-tight tracking-tight text-white sm:block">
              Amlan Audri
            </h2>
          </div>

          {/* Desktop Nav */}
          <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-white/70 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <div className="flex gap-2">
                <button 
                  onClick={() => navigate('/contact')}
                  className="flex h-10 cursor-pointer items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
                >
                  Contact
                </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-white md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
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
                  className="mt-2 flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
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