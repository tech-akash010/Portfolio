import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { AkashPortrait } from '../../components/Portrait/AkashPortrait';
import {
  ArrowDown,
  ArrowUpRight,
  Terminal,
  Palette,
  Sparkles,
  MapPin,
  Clock,
  Layers,
  Code2,
  Compass,
} from 'lucide-react';

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
          <span>KOLKATA {timeString || '15:00:00'} IST</span>
        </div>

        {/* Dual Disciplines Filter Tabs */}
        <div className="hidden sm:flex items-center gap-1">
          <span className="text-[#222222]/40 mr-1">DISCIPLINE:</span>
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

      {/* 2. Main Studio Canvas: Asymmetrical Editorial Collage with Akash's Portrait */}
      <div className="relative z-10 my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Oversized Swiss Headlines & Manifest Description */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#FF6D1F] font-bold tracking-widest uppercase">
              // A MIND IN MOTION
            </span>
            <span className="h-px w-12 bg-[#FF6D1F]/50" />
            <span className="font-mono text-[10px] text-[#222222]/60 uppercase">
              CSE UNDERGRAD × CREATIVE DIRECTION
            </span>
          </div>

          {/* Staggered Giant Kinetic Headlines */}
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

            <div className="overflow-hidden flex flex-wrap items-baseline gap-3 sm:gap-4">
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
            I'm <strong className="text-[#222222] font-bold">Akash Kundu (AK)</strong>, a Computer Science Engineering student, designer, and developer based in Kolkata, India. Exploring the vital boundary where rigorous software systems meet expressive visual direction.
          </motion.p>

          {/* Dual Discipline Spec Tags */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 max-w-xl font-mono text-xs"
          >
            <div className="p-3 bg-[#F5E7C6]/60 border border-[#222222]/15 rounded-lg flex items-start gap-2.5">
              <Palette className="w-4 h-4 text-[#FF6D1F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#222222] block">DISCIPLINE 01 // DESIGN</span>
                <span className="text-[11px] text-[#222222]/70 leading-tight block mt-0.5">
                  Branding, Swiss Posters, UI/UX Systems &amp; Editorial Craft
                </span>
              </div>
            </div>

            <div className="p-3 bg-[#F5E7C6]/60 border border-[#222222]/15 rounded-lg flex items-start gap-2.5">
              <Code2 className="w-4 h-4 text-[#FF6D1F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#222222] block">DISCIPLINE 02 // CODE</span>
                <span className="text-[11px] text-[#222222]/70 leading-tight block mt-0.5">
                  TypeScript, React 19, Node.js, WebGL &amp; Algorithms
                </span>
              </div>
            </div>
          </motion.div>

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
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#222222] text-[#FAF3E1] font-mono text-xs uppercase tracking-wider rounded-full hover:bg-[#FF6D1F] transition-all duration-300 shadow-sm font-bold"
            >
              <span>Explore Selected Works</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              to="/connect"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#222222] text-[#222222] font-mono text-xs uppercase tracking-wider rounded-full hover:bg-[#222222] hover:text-[#FAF3E1] transition-all font-bold"
            >
              <span>Connect With Akash</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Editorial Portrait Collage Component */}
        <div className="lg:col-span-5 relative w-full flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md"
          >
            {/* Background Decorative Asymmetric Plate */}
            <div className="absolute -inset-3 bg-[#F5E7C6] border-2 border-[#222222]/30 rounded-2xl -rotate-1 pointer-events-none" />

            {/* Central Interactive Portrait Component */}
            <AkashPortrait variant="hero" showControls={true} className="relative z-10" />

            {/* Sub-badge: University & Batch Stamp */}
            <div className="mt-4 px-4 py-2.5 bg-[#FAF3E1] border border-[#222222]/15 rounded-lg flex items-center justify-between font-mono text-[11px] text-[#222222]/75">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6D1F]" />
                <span className="font-bold text-[#222222]">ACADEMY OF TECHNOLOGY</span>
              </div>
              <span className="text-[#FF6D1F] font-bold">CSE '28</span>
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
          <span className="hidden md:inline">SPRINGY RIBBONS CURSOR</span>
        </div>
      </motion.div>
    </section>
  );
};
