import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col font-display text-gray-200">
      {/* Ambient animated backdrop */}
      <div className="ambient" aria-hidden="true">
        <div className="ambient__vignette" />
        <div className="ambient__blob ambient__blob--a" />
        <div className="ambient__blob ambient__blob--b" />
        <div className="ambient__blob ambient__blob--c" />
        <div className="ambient__grid" />
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
