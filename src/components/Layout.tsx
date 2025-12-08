import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col font-display bg-background-dark text-gray-200 selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4 pt-10 sm:px-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
