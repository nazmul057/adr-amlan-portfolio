import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import AmbientField from './AmbientField';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Pages built from running text laid directly over the ambient field. They get
 * the stronger scrim; everywhere else the copy already sits on .surface cards,
 * so the field can stay much more visible.
 */
const TEXT_DENSE_ROUTES = ['/experience', '/education'];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const dense = TEXT_DENSE_ROUTES.includes(pathname);

  return (
    <div className="relative flex min-h-screen flex-col font-display text-gray-200">
      {/* Ambient animated backdrop */}
      <div className="ambient" aria-hidden="true">
        <div className="ambient__vignette" />
        <div className="ambient__blob ambient__blob--a" />
        <div className="ambient__blob ambient__blob--b" />
        <div className="ambient__blob ambient__blob--c" />
        <div className="ambient__grid" />
        <AmbientField />
        <div className="ambient__scrim" data-density={dense ? 'text' : 'card'} />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="mx-auto flex w-full max-w-[1040px] flex-col px-4 pb-24 pt-12 sm:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
