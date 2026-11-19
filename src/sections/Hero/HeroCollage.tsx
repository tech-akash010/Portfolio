import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';

export const HeroCollage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const heroRef = useRef<HTMLElement>(null);

  // Gentle mouse parallax for high-craft spatial depth
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 25 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const headlineOffset1 = useTransform(smoothX, [-400, 400], [-8, 8]);
  const headlineOffset2 = useTransform(smoothY, [-300, 300], [-6, 6]);
  const subtitleOffset = useTransform(smoothX, [-400, 400], [6, -6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[85svh] flex flex-col justify-center pt-32 sm:pt-36 md:pt-40 pb-16 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Center Giant Kinetic Typographic Stage */}
      <div className="py-6 sm:py-10 space-y-1 sm:space-y-3">
        {/* Line 1: THINK. */}
        <div className="overflow-hidden">
          <motion.div
            style={{ x: headlineOffset1, y: headlineOffset2 }}
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="group cursor-default inline-block"
          >
            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] font-black tracking-tighter text-[#ffffff] leading-[0.84] transition-colors duration-300 group-hover:text-[#ffffff]/90">
              THINK
              <motion.span
                whileHover={{ scale: 1.4, y: -6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="text-[#fca311] inline-block"
              >
                .
              </motion.span>
            </h1>
          </motion.div>
        </div>

        {/* Line 2: CREATE. + a mind in motion */}
        <div className="overflow-hidden flex flex-wrap items-baseline gap-4 sm:gap-6 md:gap-8">
          <motion.div
            style={{ x: headlineOffset1, y: headlineOffset2 }}
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="group cursor-default inline-block"
          >
            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] font-black tracking-tighter text-[#ffffff] leading-[0.84] transition-colors duration-300 group-hover:text-[#ffffff]/90">
              CREATE
              <motion.span
                whileHover={{ scale: 1.4, y: -6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="text-[#fca311] inline-block"
              >
                .
              </motion.span>
            </h1>
          </motion.div>

          <motion.span
            style={{ x: subtitleOffset }}
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#e5e5e5]/55 font-normal tracking-normal select-none"
          >
            a mind in motion
          </motion.span>
        </div>

        {/* Line 3: BUILD. */}
        <div className="overflow-hidden">
          <motion.div
            style={{ x: headlineOffset1, y: headlineOffset2 }}
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="group cursor-default inline-block"
          >
            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] font-black tracking-tighter text-[#ffffff] leading-[0.84] transition-colors duration-300 group-hover:text-[#ffffff]/90">
              BUILD
              <motion.span
                whileHover={{ scale: 1.4, y: -6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="text-[#fca311] inline-block"
              >
                .
              </motion.span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Editorial Hairline Divider & Balanced Split Row */}
      <div className="border-t border-[#ffffff]/15 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Author Narrative */}
        <div className="lg:col-span-7 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-lg sm:text-xl md:text-2xl text-[#e5e5e5]/90 leading-relaxed font-normal max-w-2xl"
          >
            I'm <strong className="text-[#ffffff] font-semibold">Akash Kundu (AK)</strong> — an engineering student, software developer, and graphic designer based in India. I engineer high-performance systems and architect art-directed visual identities.
          </motion.p>
        </div>

        {/* Right Column: Actions & Scroll Cue */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <Link
                to="/projects"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#fca311] text-[#000000] font-mono text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-300 shadow-sm shadow-[#fca311]/20 cursor-pointer"
              >
                <span>Explore Projects Archive</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <Link
                to="/about"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-6 py-4 border border-[#ffffff]/25 text-[#ffffff] font-mono text-xs uppercase tracking-wider rounded-full hover:border-[#fca311] hover:text-[#fca311] hover:bg-[#ffffff]/5 transition-colors cursor-pointer"
              >
                <span>Studio Dossier / Bio</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.a
            href="#selected-work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="font-mono text-xs text-[#e5e5e5]/50 hover:text-[#fca311] transition-colors flex items-center gap-1.5 group pt-1 cursor-pointer"
          >
            <span>Scroll to explore index</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#fca311]" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

