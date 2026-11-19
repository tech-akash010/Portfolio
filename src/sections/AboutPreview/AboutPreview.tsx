import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, GraduationCap, Users2, Sparkles, Compass } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <section className="py-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#ffffff]/15 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Swiss Frame Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-sm bg-[#14213d]/30 border border-[#ffffff]/15 p-5 rounded-2xl shadow-xl shadow-black/40">
            {/* Editorial Canvas */}
            <div className="relative h-80 sm:h-96 w-full bg-[#000000] border border-[#ffffff]/10 rounded-xl overflow-hidden flex flex-col justify-center items-center p-6 text-[#ffffff]">
              {/* Background graphic motif */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              {/* Central Typographic Avatar Silhouette with Radar Ring */}
              <div className="relative z-10 text-center">
                <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                  {/* Rotating Dashed Orbit Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                    className="absolute -inset-3 rounded-full border border-dashed border-[#fca311]/50 pointer-events-none"
                  />

                  {/* Breathing Ambient Halo */}
                  <div className="absolute inset-0 rounded-full bg-[#fca311]/20 blur-xl animate-pulse pointer-events-none" />

                  {/* Outer Avatar Frame */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#fca311] flex items-center justify-center bg-[#ffffff]/5 p-2 shadow-lg shadow-[#fca311]/20 cursor-pointer"
                  >
                    <div className="w-full h-full rounded-full bg-[#fca311] text-[#000000] flex items-center justify-center font-display font-black text-3xl tracking-tight shadow-inner">
                      AK
                    </div>
                  </motion.div>
                </div>

                <div className="mt-5 font-display font-bold text-xl text-[#ffffff]">
                  Akash Kundu
                </div>
                <div className="font-mono text-xs text-[#e5e5e5]/60 mt-1 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fca311]" />
                  <span>Kolkata, India</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative & Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#fca311] tracking-widest uppercase font-semibold">
            <Compass className="w-4 h-4 text-[#fca311]" />
            <span>BACKGROUND // PHILOSOPHY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#ffffff] leading-tight">
            CURIOSITY HAS ALWAYS BEEN MY FAVOURITE TOOL<span className="text-[#fca311]">.</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#e5e5e5]/80 leading-relaxed">
            I'm a Computer Science Engineering student with a strong interest in visual design, software development and emerging technologies. I enjoy experimenting with ideas and transforming them into meaningful digital experiences.
          </p>

          {/* Structured Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Highlight 1: Education */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(252, 163, 17, 0.4)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="p-4 bg-[#14213d]/30 border border-[#ffffff]/15 rounded-lg transition-colors cursor-default"
            >
              <div className="flex items-center gap-2 mb-1.5 text-[#ffffff]">
                <GraduationCap className="w-4 h-4 text-[#fca311]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wide">
                  Education Highlight
                </span>
              </div>
              <p className="font-display font-semibold text-sm text-[#ffffff]">
                Academy of Technology
              </p>
              <p className="font-mono text-[11px] text-[#e5e5e5]/70 mt-0.5">
                B.Tech in Computer Science &amp; Engineering (2024–2028)
              </p>
            </motion.div>

            {/* Highlight 2: Community & Leadership */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(252, 163, 17, 0.4)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="p-4 bg-[#14213d]/30 border border-[#ffffff]/15 rounded-lg transition-colors cursor-default"
            >
              <div className="flex items-center gap-2 mb-1.5 text-[#ffffff]">
                <Users2 className="w-4 h-4 text-[#fca311]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wide">
                  Community Leadership
                </span>
              </div>
              <p className="font-display font-semibold text-sm text-[#ffffff]">
                GDG On Campus
              </p>
              <p className="font-mono text-[11px] text-[#e5e5e5]/70 mt-0.5">
                Creative Direction, event planning &amp; technical mentoring
              </p>
            </motion.div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="inline-block"
            >
              <Link
                to="/about"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#fca311] text-[#000000] font-mono text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-300 shadow-sm shadow-[#fca311]/20 cursor-pointer"
              >
                <span>Explore Full Story &amp; Journey</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
