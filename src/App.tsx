import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import ContactSent from './pages/ContactSent';

/** Scrolls to the top on every route change. */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

/** Re-keys the page on navigation so each route fades in. */
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fade-up">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/sent" element={<ContactSent />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => (
  <HashRouter>
    <ScrollToTop />
    <Layout>
      <AnimatedRoutes />
    </Layout>
  </HashRouter>
);

export default App;
