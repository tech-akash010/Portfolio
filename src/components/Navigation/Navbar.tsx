import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useCursor } from '../CustomCursor/CursorContext';
import { ArrowUpRight, Copy, Check, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const { setCursorType, resetCursor } = useCursor();
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live IST Clock (UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeStr(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key to close overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@akashkundu.dev');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { number: '01', name: 'HOME', path: '/', label: 'Overview & Selected Work' },
    { number: '02', name: 'WORKS', path: '/projects', label: 'Index & Case Studies [12]' },
    { number: '03', name: 'ABOUT', path: '/about', label: 'Monograph & Tech Capabilities' },
    { number: '04', name: 'CONNECT', path: '/connect', label: 'Direct Inquiries & Transmissions' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/tech-akash010', handle: '@tech-akash010' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akashkundu010/', handle: 'in/akashkundu010' },
    { name: 'X / Twitter', url: 'https://x.com/officialak_X', handle: '@officialak_X' },
    { name: 'Instagram', url: 'https://www.instagram.com/0x.akash/', handle: '@0x.akash' },
  ];

  // Theme awareness based on current route
  const isEditorial = location.pathname.startsWith('/projects/design');
  const isOcean = location.pathname === '/connect';
  const isLapis = location.pathname === '/projects' || location.pathname === '/about';

  const scrolledBg = isEditorial
    ? 'bg-[#eaf8bf]/90 border-b border-[#001d4a]/15 backdrop-blur-md'
    : isOcean
    ? 'bg-[#006992]/90 border-b border-[#eaf8bf]/15 backdrop-blur-md'
    : isLapis
    ? 'bg-[#27476e]/90 border-b border-[#eaf8bf]/15 backdrop-blur-md'
    : 'bg-[#001d4a]/90 border-b border-[#eaf8bf]/10 backdrop-blur-md';

  const textColor = isEditorial ? 'text-[#001d4a]' : 'text-[#eaf8bf]';

  return (
    <>
      {/* Architectural Low-Profile Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-4 sm:px-8 md:px-12 ${
          isScrolled ? `py-3.5 ${scrolledBg}` : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* AK. Brand Mark */}
          <Link
            to="/"
            className="group flex items-center gap-1.5 focus:outline-none"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            aria-label="AK. Home"
          >
            <span
              className={`font-display text-2xl md:text-3xl font-black tracking-tight transition-colors ${
                isEditorial
                  ? 'text-[#001d4a] group-hover:text-[#006992]'
                  : 'text-[#eaf8bf] group-hover:text-[#eca400]'
              }`}
            >
              AK<span className="text-[#eca400]">.</span>
            </span>
          </Link>

          {/* Center Architectural Telemetry Strip (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] tracking-wider">
            <span className={isEditorial ? 'text-[#001d4a]/70' : 'text-[#eaf8bf]/70'}>
              KOLKATA, IN <span className="text-[#eca400]">22.57°N 88.36°E</span>
            </span>
            <span className={isEditorial ? 'text-[#001d4a]/30' : 'text-[#eaf8bf]/30'}>//</span>
            <span className={isEditorial ? 'text-[#001d4a]/80' : 'text-[#eaf8bf]/80'}>
              {timeStr || '12:00:00'} IST
            </span>
            <span className={isEditorial ? 'text-[#001d4a]/30' : 'text-[#eaf8bf]/30'}>//</span>
            <div className="flex items-center gap-1.5 text-[#eca400]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#eca400] animate-pulse" />
              <span className="uppercase text-[10px] font-semibold">Available for Work</span>
            </div>
          </div>

          {/* Right Action: Quick Nav Links + Fullscreen Menu Pill */}
          <div className="flex items-center gap-3 sm:gap-4">
            <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? 'text-[#eca400] font-bold'
                      : isEditorial
                      ? 'text-[#001d4a]/70 hover:text-[#001d4a]'
                      : 'text-[#eaf8bf]/70 hover:text-[#eaf8bf]'
                  }`
                }
              >
                Works [12]
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? 'text-[#eca400] font-bold'
                      : isEditorial
                      ? 'text-[#001d4a]/70 hover:text-[#001d4a]'
                      : 'text-[#eaf8bf]/70 hover:text-[#eaf8bf]'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/connect"
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? 'text-[#eca400] font-bold'
                      : isEditorial
                      ? 'text-[#001d4a]/70 hover:text-[#001d4a]'
                      : 'text-[#eaf8bf]/70 hover:text-[#eaf8bf]'
                  }`
                }
              >
                Connect
              </NavLink>
            </nav>

            {/* Menu Toggle Pill Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-300 font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer ${
                menuOpen
                  ? 'bg-[#eca400] text-[#001d4a] border-[#eca400]'
                  : isEditorial
                  ? 'border-[#001d4a]/25 text-[#001d4a] hover:bg-[#001d4a] hover:text-[#eaf8bf]'
                  : 'border-[#eaf8bf]/25 text-[#eaf8bf] hover:bg-[#eca400] hover:text-[#001d4a] hover:border-[#eca400]'
              }`}
            >
              <span>{menuOpen ? 'CLOSE // ESC' : 'MENU // 04'}</span>
              {menuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Animated Swiss Typographic Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#001d4a]/98 text-[#eaf8bf] backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-6 sm:px-12 md:px-16 overflow-y-auto"
          >
            {/* Background Swiss Grid Lines */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(234, 248, 191, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(234, 248, 191, 0.2) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />

            {/* Overlay Body: Typographic Index Navigation + Telemetry Rail */}
            <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto">
              {/* Left Column: Huge Swiss Index Links */}
              <div className="lg:col-span-8 flex flex-col justify-center divide-y divide-[#eaf8bf]/10">
                {navLinks.map((link, idx) => {
                  const isActive =
                    link.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(link.path);

                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        onMouseEnter={() => setCursorType('hover')}
                        onMouseLeave={resetCursor}
                        className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-5 sm:py-7 transition-all"
                      >
                        <div className="flex items-baseline gap-4 sm:gap-6">
                          <span className="font-mono text-sm sm:text-base text-[#eca400] font-bold">
                            {link.number}
                          </span>
                          <span
                            className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight transition-transform duration-300 group-hover:translate-x-3 ${
                              isActive
                                ? 'text-[#eca400]'
                                : 'text-[#eaf8bf] group-hover:text-[#eca400]'
                            }`}
                          >
                            {link.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-2 sm:mt-0 font-mono text-xs text-[#eaf8bf]/60 group-hover:text-[#eaf8bf]">
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#eca400]" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column: Sub-disciplines & Transmissions Rail */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-8 border-t lg:border-t-0 lg:border-l border-[#eaf8bf]/15 pt-8 lg:pt-0 lg:pl-10">
                {/* Discipline Quick Jump */}
                <div className="space-y-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#eca400] font-bold block">
                    // JUMP BY DISCIPLINE
                  </span>
                  <div className="space-y-2">
                    <Link
                      to="/projects/technology"
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between p-3 rounded-lg border border-[#eaf8bf]/15 hover:border-[#eca400] hover:bg-[#eaf8bf]/5 transition-all"
                    >
                      <div>
                        <span className="font-display font-bold text-sm block group-hover:text-[#eca400] transition-colors">
                          Technology &amp; Systems
                        </span>
                        <span className="font-mono text-[10px] text-[#eaf8bf]/60">
                          Web Apps, Dev Tools &amp; Compilers [06]
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#eca400]" />
                    </Link>

                    <Link
                      to="/projects/design"
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between p-3 rounded-lg border border-[#eaf8bf]/15 hover:border-[#eca400] hover:bg-[#eaf8bf]/5 transition-all"
                    >
                      <div>
                        <span className="font-display font-bold text-sm block group-hover:text-[#eca400] transition-colors">
                          Design &amp; Art Direction
                        </span>
                        <span className="font-mono text-[10px] text-[#eaf8bf]/60">
                          Posters, Brand Systems &amp; Type [06]
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#eca400]" />
                    </Link>
                  </div>
                </div>

                {/* Direct Transmission Socials */}
                <div className="space-y-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#eca400] font-bold block">
                    // TRANSMISSIONS &amp; NETWORKS
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#eaf8bf]/80 hover:text-[#eca400] transition-colors flex items-center gap-1.5"
                      >
                        <span>{s.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#eca400]" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Instant Copy Email Action */}
                <div className="pt-4 border-t border-[#eaf8bf]/15">
                  <span className="font-mono text-[11px] text-[#eaf8bf]/60 block mb-2">
                    DIRECT INQUIRY
                  </span>
                  <button
                    onClick={copyEmail}
                    className="w-full py-3 px-4 bg-[#eca400] text-[#001d4a] font-mono text-xs uppercase tracking-wider font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#eaf8bf] transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>EMAIL COPIED TO CLIPBOARD</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>COPY: CONTACT@AKASHKUNDU.DEV</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Overlay Footer Coordinates */}
            <div className="relative max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[#eaf8bf]/15 font-mono text-[11px] text-[#eaf8bf]/50 gap-2">
              <div>
                AKASH KUNDU ARCHIVE • SYSTEM PROTOCOL 2026
              </div>
              <div>
                PRESS <span className="text-[#eca400] font-bold">ESC</span> TO EXIT
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
