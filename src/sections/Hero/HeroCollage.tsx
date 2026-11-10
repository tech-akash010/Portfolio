import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight } from 'lucide-react';

export const HeroCollage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [activeDiscipline, setActiveDiscipline] = useState<'all' | 'design' | 'tech'>('all');

  return (
    <section className="relative min-h-[85svh] flex flex-col justify-center pt-32 sm:pt-36 pb-16 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Main Studio Canvas */}
      <div className="relative z-10 my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Oversized Kinetic Headlines & Bio */}
        <div className="lg:col-span-7 space-y-6">
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

        {/* Right Column: Architectural Discipline Showcase */}
        <div className="lg:col-span-5 relative w-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full bg-[#F5E7C6] border border-[#222222]/20 p-6 sm:p-8 rounded-2xl shadow-xl shadow-[#222222]/5"
          >
            {/* Discipline Selector Tabs */}
            <div className="flex items-center gap-2 mb-6">
              <button
                type="button"
                onClick={() => setActiveDiscipline('all')}
                className={`px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  activeDiscipline === 'all'
                    ? 'bg-[#222222] text-[#FAF3E1] font-bold'
                    : 'bg-[#FAF3E1] text-[#222222] hover:bg-[#222222] hover:text-[#FAF3E1]'
                }`}
              >
                Hybrid
              </button>
              <button
                type="button"
                onClick={() => setActiveDiscipline('design')}
                className={`px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  activeDiscipline === 'design'
                    ? 'bg-[#FF6D1F] text-[#FAF3E1] font-bold'
                    : 'bg-[#FAF3E1] text-[#222222] hover:bg-[#FF6D1F] hover:text-[#FAF3E1]'
                }`}
              >
                Design
              </button>
              <button
                type="button"
                onClick={() => setActiveDiscipline('tech')}
                className={`px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  activeDiscipline === 'tech'
                    ? 'bg-[#FF6D1F] text-[#FAF3E1] font-bold'
                    : 'bg-[#FAF3E1] text-[#222222] hover:bg-[#FF6D1F] hover:text-[#FAF3E1]'
                }`}
              >
                Code
              </button>
            </div>

            {/* Dynamic Discipline Screen */}
            <div className="h-60 bg-[#222222] text-[#FAF3E1] p-6 rounded-xl relative overflow-hidden flex flex-col justify-center">
              {/* Background Grid Pattern */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(250, 243, 225, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(250, 243, 225, 0.2) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10">
                <div className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#FAF3E1]">
                  {activeDiscipline === 'design'
                    ? 'Editorial Typography'
                    : activeDiscipline === 'tech'
                    ? 'Full-Stack Architecture'
                    : 'Design × Engineering'}
                </div>
                <p className="font-body text-sm sm:text-base text-[#FAF3E1]/75 mt-3 leading-relaxed">
                  {activeDiscipline === 'design'
                    ? 'Swiss grids, branding systems, vector craft & UI tokens.'
                    : activeDiscipline === 'tech'
                    ? 'TypeScript, React 19, Node.js, WebGL & computational algorithms.'
                    : 'A balanced equilibrium of visual aesthetics & systems code.'}
                </p>
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="grid grid-cols-2 gap-3 mt-4 font-mono text-xs">
              <div className="p-3.5 bg-[#FAF3E1] border border-[#222222]/10 rounded-xl">
                <span className="text-[10px] text-[#222222]/60 block uppercase">CORE STACK</span>
                <span className="font-bold text-[#222222] text-sm mt-0.5 block">React 19 / TS / Node</span>
              </div>
              <div className="p-3.5 bg-[#FAF3E1] border border-[#222222]/10 rounded-xl">
                <span className="text-[10px] text-[#222222]/60 block uppercase">DESIGN TOOLS</span>
                <span className="font-bold text-[#FF6D1F] text-sm mt-0.5 block">Figma / Illustrator</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
