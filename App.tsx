import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { WhyNaxit } from './components/sections/WhyNaxit';
import { Projects } from './components/sections/Projects';
import { TechEdge } from './components/sections/TechEdge';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/pages/ProjectDetail';
import { Button } from './components/ui/Button';
import { Logo } from './components/ui/Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectProvider, useProjects } from './context/ProjectContext';
import { AdminPage } from './AdminPage';
import { ServiceExamples } from './ServiceExamples';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'Process', href: '/#process' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // If we are on home pages, we can scroll nicely. If not, standard navigation happens
    if (isHome && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-naxit-bg/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-8 md:px-12 lg:px-16 flex justify-between items-center">
          {/* Using a tag wrapper for Logo to handle home navigation */}
          <a href="/" className="cursor-pointer">
            <Logo className="h-10 w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-naxit-primary transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}

            <Button
              className="px-5 py-2 text-sm"
              onClick={() => {
                if (isHome) {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contact';
                }
              }}
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-naxit-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-bold text-white"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}

              <Button
                className="w-full mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = '/#contact';
                }}
              >
                Start Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className=""
  >
    <Hero />
    <WhyNaxit />
    <Services />
    <TechEdge />
    <Projects />
    <Contact />
  </motion.div>
);

const ProjectDetailWrapper = () => {
  const { projects } = useProjects();
  const location = useLocation();
  // /project/:id
  const id = location.pathname.split('/project/')[1];
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="min-h-screen pt-32 text-center text-white">Project Not Found</div>;

  return (
    <div className="pt-20">
      <ProjectDetail project={project} onBack={() => window.history.back()} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-naxit-bg min-h-screen text-naxit-text font-sans selection:bg-naxit-primary selection:text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/work" element={<ServiceExamples />} />
              <Route path="/services/:serviceId" element={<ServiceExamples />} />
              <Route path="/project/:id" element={<ProjectDetailWrapper />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ProjectProvider>
  );
};

export default App;