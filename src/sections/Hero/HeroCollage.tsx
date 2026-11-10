import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight } from 'lucide-react';

export const HeroCollage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <section className="relative min-h-[85svh] flex flex-col justify-center pt-32 sm:pt-40 md:pt-44 pb-16 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Main Studio Canvas */}
      <div className="relative z-10 max-w-4xl space-y-8">
        {/* Staggered Giant Headlines */}
        <div className="space-y-1 sm:space-y-2">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-[#222222] leading-[0.85]"
            >
              THINK<span className="text-[#FF6D1F]">.</span>
            </motion.h1>
          </div>

          <div className="overflow-hidden flex flex-wrap items-baseline gap-4 sm:gap-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-[#222222] leading-[0.85]"
            >
              CREATE<span className="text-[#FF6D1F]">.</span>
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-editorial italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#222222]/60 font-normal"
            >
              a mind in motion
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-[#222222] leading-[0.85]"
            >
              BUILD<span className="text-[#FF6D1F]">.</span>
            </motion.h1>
          </div>
        </div>

        {/* Supporting Bio Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="font-body text-lg sm:text-xl md:text-2xl text-[#222222]/85 max-w-2xl leading-relaxed"
        >
          I'm <strong className="text-[#222222] font-semibold">Akash Kundu (AK)</strong>, an engineering student, software developer, and graphic designer based in India. I craft high-performance digital systems and architect art-directed identities.
        </motion.p>

        {/* Quick Action Navigation CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <Link
            to="/projects"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#222222] text-[#FAF3E1] font-mono text-xs uppercase tracking-wider rounded-full hover:bg-[#FF6D1F] transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Projects Archive</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>

          <Link
            to="/about"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-2 px-7 py-4 border border-[#222222]/25 text-[#222222] font-mono text-xs uppercase tracking-wider rounded-full hover:border-[#FF6D1F] hover:text-[#FF6D1F] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Studio Dossier / Bio</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
