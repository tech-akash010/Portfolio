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

  // All pages are now dark theme
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
          isScrolled
            ? 'py-3.5 bg-[#001d4a]/85 backdrop-blur-md border-b border-[#eaf8bf]/10'
            : 'py-6 bg-transparent'
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
            <span className="font-display text-2xl md:text-3xl font-black tracking-tight transition-colors group-hover:text-[#eca400] text-[#eaf8bf]">
              AK<span className="text-[#eca400]">.</span>
            </span>
          </Link>

          {/* Clean Unboxed Navigation on Desktop */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-12 transition-all duration-300"
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
                  className={`relative font-mono text-xs uppercase tracking-widest py-1.5 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#eca400] font-bold'
                      : 'text-[#eaf8bf]/70 hover:text-[#eaf8bf]'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#eca400] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
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
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-[#eca400] bg-[#eaf8bf]/10 text-[#eaf8bf] border border-[#eaf8bf]/20 hover:bg-[#eaf8bf]/20 transition-colors"
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
            className="fixed inset-0 z-30 bg-[#001d4a] text-[#eaf8bf] flex flex-col justify-between pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            {/* Grid background texture */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(234, 248, 191, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(234, 248, 191, 0.1) 1px, transparent 1px)',
                backgroundSize: '36px 36px',
              }}
            />

            <div className="relative z-10 flex flex-col space-y-6 mt-4">
              <span className="font-mono text-[10px] tracking-widest text-[#eca400] uppercase">
                INDEX NAVIGATION
              </span>

              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-baseline justify-between text-3xl font-display font-bold transition-colors ${
                      isActive ? 'text-[#eca400]' : 'text-[#eaf8bf] hover:text-[#eca400]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs opacity-50">0{idx + 1}</span>
                </NavLink>
              ))}

              <div className="pt-6 border-t border-[#eaf8bf]/15">
                <span className="font-mono text-[10px] tracking-widest text-[#eaf8bf]/50 uppercase block mb-3">
                  DISCIPLINES
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/projects/design"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-[#eaf8bf]/5 rounded border border-[#eaf8bf]/10 text-xs font-mono hover:border-[#eca400]"
                  >
                    Design Portfolio
                  </Link>
                  <Link
                    to="/projects/technology"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-[#eaf8bf]/5 rounded border border-[#eaf8bf]/10 text-xs font-mono hover:border-[#eca400]"
                  >
                    Tech Projects
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-[#eaf8bf]/15 space-y-3 font-mono text-xs text-[#eaf8bf]/70">
              <div className="flex items-center gap-2 text-[#eca400]">
                <span className="w-2 h-2 rounded-full bg-[#eca400] animate-pulse"></span>
                <span>OPEN FOR COLLABORATION 2026</span>
              </div>
              <div className="flex flex-wrap justify-between items-center text-[11px] gap-2">
                <a
                  href="https://github.com/tech-akash010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#eca400] flex items-center gap-1"
                >
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akashkundu010/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#eca400] flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://x.com/officialak_X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#eca400] flex items-center gap-1"
                >
                  X <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://www.instagram.com/0x.akash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#eca400] flex items-center gap-1"
                >
                  Instagram <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

