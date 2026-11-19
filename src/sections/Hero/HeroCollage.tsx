import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export const HeroCollage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <section className="relative min-h-[85svh] flex flex-col justify-center pt-32 sm:pt-36 md:pt-40 pb-16 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Center Giant Kinetic Typographic Stage */}
      <div className="py-6 sm:py-10 space-y-1 sm:space-y-3">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] font-black tracking-tighter text-[#ffffff] leading-[0.84]"
          >
            THINK<span className="text-[#fca311]">.</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden flex flex-wrap items-baseline gap-4 sm:gap-6 md:gap-8">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] font-black tracking-tighter text-[#ffffff] leading-[0.84]"
          >
            CREATE<span className="text-[#fca311]">.</span>
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-editorial italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#e5e5e5]/55 font-normal tracking-normal select-none"
          >
            a mind in motion
          </motion.span>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] font-black tracking-tighter text-[#ffffff] leading-[0.84]"
          >
            BUILD<span className="text-[#fca311]">.</span>
          </motion.h1>
        </div>
      </div>

      {/* Editorial Hairline Divider & Balanced Split Row */}
      <div className="border-t border-[#ffffff]/15 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Author Narrative & Focus Areas */}
        <div className="lg:col-span-7 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-body text-lg sm:text-xl md:text-2xl text-[#e5e5e5]/90 leading-relaxed font-normal max-w-2xl"
          >
            I'm <strong className="text-[#ffffff] font-semibold">Akash Kundu (AK)</strong> — an engineering student, software developer, and graphic designer based in India. I engineer high-performance systems and architect art-directed visual identities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 font-mono text-xs text-[#e5e5e5]/65"
          >
            <span className="flex items-center gap-1.5">
              <span className="text-[#fca311] font-bold">/</span> Full-Stack Systems
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#fca311] font-bold">/</span> Editorial Design &amp; Posters
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#fca311] font-bold">/</span> Computational Logic
            </span>
          </motion.div>
        </div>

        {/* Right Column: Actions & Scroll Cue */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              to="/projects"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#fca311] text-[#000000] font-mono text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-300 shadow-sm shadow-[#fca311]/20"
            >
              <span>Explore Projects Archive</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              to="/about"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2 px-6 py-4 border border-[#ffffff]/25 text-[#ffffff] font-mono text-xs uppercase tracking-wider rounded-full hover:border-[#fca311] hover:text-[#fca311] transition-colors"
            >
              <span>Studio Dossier / Bio</span>
            </Link>
          </motion.div>

          <motion.a
            href="#selected-work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="font-mono text-xs text-[#e5e5e5]/50 hover:text-[#fca311] transition-colors flex items-center gap-1.5 group pt-1"
          >
            <span>Scroll to explore index</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#fca311]" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
