import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowDown, ArrowUpRight, Terminal, Palette, Sparkles, MapPin, Clock } from 'lucide-react';

export const HeroCollage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [activeDiscipline, setActiveDiscipline] = useState<'all' | 'design' | 'tech'>('all');
  const [timeString, setTimeString] = useState<string>('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST (UTC+5:30)
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTimeString(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92svh] lg:min-h-[98svh] flex flex-col justify-between pt-28 pb-10 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* 1. Architectural Studio Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-[#222222]/15 pb-4 font-mono text-[10px] sm:text-xs text-[#222222]/70 select-none uppercase tracking-wider"
      >
        {/* Identity & Status */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6D1F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6D1F]"></span>
          </span>
          <span className="font-bold text-[#222222]">AK. STUDIO // 2026</span>
        </div>

        {/* Live Clock IST */}
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#FF6D1F]" />
          <span>KOLKATA {timeString || '14:30:00'} IST</span>
        </div>

        {/* Dual Disciplines Filter Tabs */}
        <div className="hidden sm:flex items-center gap-1">
          <span className="text-[#222222]/40 mr-1">VIEW:</span>
          <button
            type="button"
            onClick={() => setActiveDiscipline('all')}
            className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
              activeDiscipline === 'all'
                ? 'bg-[#222222] text-[#FAF3E1] font-bold'
                : 'hover:text-[#FF6D1F]'
            }`}
          >
            HYBRID
          </button>
          <button
            type="button"
            onClick={() => setActiveDiscipline('design')}
            className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
              activeDiscipline === 'design'
                ? 'bg-[#FF6D1F] text-[#FAF3E1] font-bold'
                : 'hover:text-[#FF6D1F]'
            }`}
          >
            DESIGN
          </button>
          <button
            type="button"
            onClick={() => setActiveDiscipline('tech')}
            className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
              activeDiscipline === 'tech'
                ? 'bg-[#FF6D1F] text-[#FAF3E1] font-bold'
                : 'hover:text-[#FF6D1F]'
            }`}
          >
            CODE
          </button>
        </div>

        {/* Geographic Coordinates */}
        <div className="flex items-center justify-end gap-1.5 text-right">
          <MapPin className="w-3.5 h-3.5 text-[#FF6D1F]" />
          <span>22.57° N, 88.36° E</span>
        </div>
      </motion.div>

      {/* 2. Main Studio Canvas: Oversized Kinetic Headlines & Architectural Specs */}
      <div className="relative z-10 my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Large Neo-Minimalist Typography Lockup */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#FF6D1F] font-bold tracking-widest uppercase">
              // CONCEPT: A MIND IN MOTION
            </span>
            <span className="h-px w-12 bg-[#FF6D1F]/50" />
            <span className="font-mono text-[10px] text-[#222222]/50 uppercase">
              CSE × CREATIVE DIRECTION
            </span>
          </div>

          {/* Staggered Giant Headlines */}
          <div className="space-y-1">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#222222] leading-[0.88]"
              >
                THINK<span className="text-[#FF6D1F]">.</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden flex flex-wrap items-baseline gap-4">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#222222] leading-[0.88]"
              >
                CREATE<span className="text-[#FF6D1F]">.</span>
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-[#222222]/60 font-normal"
              >
                a mind in motion
              </motion.span>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#222222] leading-[0.88]"
              >
                BUILD<span className="text-[#FF6D1F]">.</span>
              </motion.h1>
            </div>
          </div>

          {/* Supporting Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-base sm:text-lg md:text-xl text-[#222222]/85 max-w-xl leading-relaxed"
          >
            I'm <strong className="text-[#222222] font-semibold">Akash Kundu (AK)</strong>, an engineering student, designer and software developer based in India. I craft high-performance software systems and art-directed digital identities.
          </motion.p>

          {/* Quick Action Navigation CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              to="/projects"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#222222] text-[#FAF3E1] font-mono text-xs uppercase tracking-wider rounded-full hover:bg-[#FF6D1F] transition-all duration-300 shadow-sm"
            >
              <span>Explore Projects Archive</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              to="/about"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#222222]/25 text-[#222222] font-mono text-xs uppercase tracking-wider rounded-full hover:border-[#FF6D1F] hover:text-[#FF6D1F] transition-colors"
            >
              <span>Studio Dossier / Bio</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Architectural Studio Blueprint Stage */}
        <div className="lg:col-span-5 relative w-full flex flex-col justify-center">
          {/* Architectural Blueprint Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full bg-[#F5E7C6] border border-[#222222]/20 p-6 rounded-lg shadow-xl shadow-[#222222]/5"
          >
            {/* Blueprint Header */}
            <div className="flex items-center justify-between border-b border-[#222222]/15 pb-3 mb-5 font-mono text-[10px] text-[#222222]/70 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6D1F]" />
                PLATE SPECIFICATION // № 01
              </span>
              <span className="font-bold text-[#222222]">STUDIO BLUEPRINT</span>
            </div>

            {/* Interactive Blueprint Display */}
            <div className="space-y-4">
              {/* Dynamic Discipline Screen */}
              <div className="h-56 bg-[#222222] text-[#FAF3E1] p-5 rounded-md relative overflow-hidden flex flex-col justify-between">
                {/* Background Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(250, 243, 225, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(250, 243, 225, 0.2) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-[#FAF3E1]/60">
                  <span className="text-[#FF6D1F] font-bold">
                    {activeDiscipline === 'design'
                      ? '// 01. VISUAL SYSTEM'
                      : activeDiscipline === 'tech'
                      ? '// 02. RUNTIME CORE'
                      : '// 00. DUAL PERSPECTIVE'}
                  </span>
                  <span>ACADEMY OF TECHNOLOGY</span>
                </div>

                {/* Central Visual Vector Wireframe */}
                <div className="relative z-10 my-auto py-2">
                  <div className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#FAF3E1]">
                    {activeDiscipline === 'design'
                      ? 'Editorial Typography'
                      : activeDiscipline === 'tech'
                      ? 'Full-Stack Architecture'
                      : 'Design × Engineering'}
                  </div>
                  <p className="font-mono text-xs text-[#FAF3E1]/70 mt-1">
                    {activeDiscipline === 'design'
                      ? 'Swiss grids, branding systems, vector craft & UI tokens'
                      : activeDiscipline === 'tech'
                      ? 'TypeScript, React 19, Node.js, WebGL & algorithms'
                      : 'A balanced equilibrium of visual aesthetics & systems code'}
                  </p>
                </div>

                {/* Bottom Spec Details */}
                <div className="relative z-10 flex items-center justify-between border-t border-[#FAF3E1]/15 pt-3 font-mono text-[9px] text-[#FAF3E1]/60">
                  <span>DISCIPLINES: 2 ACTIVE</span>
                  <span className="text-[#FF6D1F] font-bold">Q1 2026 CYCLE</span>
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-[#FAF3E1] border border-[#222222]/10 rounded">
                  <span className="text-[9px] text-[#222222]/50 block uppercase">CORE STACK</span>
                  <span className="font-bold text-[#222222]">React 19 / TS / Node</span>
                </div>
                <div className="p-3 bg-[#FAF3E1] border border-[#222222]/10 rounded">
                  <span className="text-[9px] text-[#222222]/50 block uppercase">DESIGN TOOLS</span>
                  <span className="font-bold text-[#FF6D1F]">Figma / Illustrator</span>
                </div>
              </div>

              {/* Status footer pill */}
              <div className="flex items-center justify-between p-3 bg-[#FAF3E1] border border-[#222222]/10 rounded font-mono text-[10px] text-[#222222]/70">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D1F]" />
                  <span>CURRENT: B.TECH CSE (2024–2028)</span>
                </div>
                <Link
                  to="/connect"
                  className="font-bold text-[#FF6D1F] hover:underline flex items-center gap-0.5"
                >
                  Connect <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. Bottom Studio Ticker & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-[#222222]/15 font-mono text-[10px] text-[#222222]/60 select-none gap-3"
      >
        <button
          onClick={() => scrollToSection('studio-disciplines')}
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={resetCursor}
          className="group flex items-center gap-2 hover:text-[#FF6D1F] transition-colors focus:outline-none"
          aria-label="Scroll down to explore disciplines"
        >
          <div className="w-5 h-5 rounded-full border border-[#222222]/30 group-hover:border-[#FF6D1F] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="tracking-widest uppercase font-semibold">SCROLL TO DISCOVER</span>
        </button>

        <div className="flex items-center gap-4 text-[10px]">
          <span>INDEX: 12 TOTAL WORKS</span>
          <span className="text-[#FF6D1F]">•</span>
          <span>4 FEATURED BUILDS</span>
          <span className="text-[#FF6D1F] hidden md:inline">•</span>
          <span className="hidden md:inline">SPRINGY RIBBONS ACTIVE</span>
        </div>
      </motion.div>
    </section>
  );
};
