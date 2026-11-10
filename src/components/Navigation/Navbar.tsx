import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useCursor } from '../CustomCursor/CursorContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursorType, resetCursor } = useCursor();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Connect', path: '/connect' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-4 sm:px-8 md:px-12 ${
          isScrolled ? 'pt-3 pb-3' : 'pt-6 pb-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* AK. Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-1.5 focus:outline-none"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            aria-label="AK. Home"
          >
            <span className="font-display text-2xl md:text-3xl font-black tracking-tight text-[#222222] transition-colors group-hover:text-[#FF6D1F]">
              AK<span className="text-[#FF6D1F]">.</span>
            </span>
          </Link>

          {/* Floating Pill Navigation on Desktop */}
          <nav
            aria-label="Main Navigation"
            className={`hidden md:flex items-center gap-1 bg-[#222222] text-[#FAF3E1] px-2 py-1.5 rounded-full shadow-md border border-[#222222] transition-all duration-300 ${
              isScrolled ? 'scale-95 shadow-lg shadow-[#222222]/15' : ''
            }`}
          >
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={resetCursor}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium font-mono uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'text-[#FAF3E1] font-bold'
                      : 'text-[#FAF3E1]/70 hover:text-[#FAF3E1]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill-active"
                      className="absolute inset-0 bg-[#FF6D1F] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Mobile Menu Toggle */}
          <div className="flex items-center">
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#222222] text-[#FAF3E1] focus:outline-none focus:ring-2 focus:ring-[#FF6D1F]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-[#222222] text-[#FAF3E1] flex flex-col justify-between pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            {/* Grid background texture */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(250, 243, 225, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(250, 243, 225, 0.1) 1px, transparent 1px)',
                backgroundSize: '36px 36px',
              }}
            />

            <div className="relative z-10 flex flex-col space-y-6 mt-4">
              <span className="font-mono text-[10px] tracking-widest text-[#FF6D1F] uppercase">
                INDEX NAVIGATION
              </span>

              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-baseline justify-between text-3xl font-display font-bold transition-colors ${
                      isActive ? 'text-[#FF6D1F]' : 'text-[#FAF3E1] hover:text-[#FF6D1F]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs opacity-50">0{idx + 1}</span>
                </NavLink>
              ))}

              <div className="pt-6 border-t border-[#FAF3E1]/15">
                <span className="font-mono text-[10px] tracking-widest text-[#FAF3E1]/50 uppercase block mb-3">
                  DISCIPLINES
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/projects/design"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-[#FAF3E1]/5 rounded border border-[#FAF3E1]/10 text-xs font-mono hover:border-[#FF6D1F]"
                  >
                    Design Portfolio
                  </Link>
                  <Link
                    to="/projects/technology"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-[#FAF3E1]/5 rounded border border-[#FAF3E1]/10 text-xs font-mono hover:border-[#FF6D1F]"
                  >
                    Tech Projects
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-[#FAF3E1]/15 space-y-3 font-mono text-xs text-[#FAF3E1]/70">
              <div className="flex items-center gap-2 text-[#FF6D1F]">
                <span className="w-2 h-2 rounded-full bg-[#FF6D1F] animate-pulse"></span>
                <span>OPEN FOR COLLABORATION 2026</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <a
                  href="https://github.com/akashkundu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6D1F] flex items-center gap-1"
                >
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://linkedin.com/in/akashkundu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6D1F] flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="mailto:contact@akashkundu.dev"
                  className="hover:text-[#FF6D1F]"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

