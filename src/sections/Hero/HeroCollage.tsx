import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowDown, ArrowUpRight, Sparkles, Wand2 } from 'lucide-react';
import Ribbons, { RibbonShape } from '../../components/Ribbons';

export const HeroCollage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [ribbonShape, setRibbonShape] = useState<RibbonShape>('lens');
  const [ribbonWave, setRibbonWave] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized offset from center [-1 to 1]
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90svh] lg:min-h-[96svh] flex flex-col justify-between pt-28 pb-10 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* WebGL Springy Ribbons that Trail Cursor */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <Ribbons
          colors={['#ff6d1f', '#f5e7c6', '#222222']}
          thickness={36}
          length={2.4}
          shape={ribbonShape}
          spread={18}
          stiffness={0.5}
          bounce={0.5}
          wave={ribbonWave}
          softness={0.8}
          opacity={1}
          fade
        />
      </div>

      {/* Top Editorial Metadata Strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#222222]/15 pb-4 font-mono text-[10px] md:text-xs text-[#222222]/70 select-none uppercase tracking-wider"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6D1F]" />
          <span className="font-bold text-[#222222]">AK / INDEPENDENT CREATIVE</span>
        </div>

        {/* Interactive Ribbon Shape & Wave Mode Switcher */}
        <div className="flex items-center gap-1.5 bg-[#FAF3E1]/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#222222]/20 shadow-xs">
          <span className="text-[9px] text-[#222222]/60 hidden sm:inline flex items-center gap-1">
            <Wand2 className="w-2.5 h-2.5 text-[#FF6D1F]" /> RIBBON:
          </span>
          {(['lens', 'comet', 'even'] as RibbonShape[]).map((shape) => (
            <button
              key={shape}
              type="button"
              onClick={() => setRibbonShape(shape)}
              className={`px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                ribbonShape === shape
                  ? 'bg-[#FF6D1F] text-[#FAF3E1] font-bold shadow-xs'
                  : 'text-[#222222]/70 hover:text-[#222222]'
              }`}
            >
              {shape}
            </button>
          ))}
          <span className="text-[#222222]/20">|</span>
          <button
            type="button"
            onClick={() => setRibbonWave(ribbonWave > 0 ? 0 : 0.6)}
            className={`px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
              ribbonWave > 0
                ? 'bg-[#222222] text-[#FAF3E1] font-bold'
                : 'text-[#222222]/60 hover:text-[#222222]'
            }`}
          >
            Wave: {ribbonWave > 0 ? 'ON' : 'OFF'}
          </button>
        </div>

        <div className="hidden sm:block">PORTFOLIO / 2026</div>
        <div className="hidden md:flex items-center gap-1.5">
          <span className="text-[#FF6D1F]">LOC:</span>
          <span>INDIA</span>
        </div>
      </motion.div>

      {/* Main Asymmetrical Collage Body */}
      <div className="relative z-10 my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Col: Main Typography & Brand Statement */}
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="font-mono text-xs text-[#FF6D1F] font-bold tracking-widest uppercase">
              // CONCEPT: A MIND IN MOTION
            </span>
          </motion.div>

          {/* Staggered Oversized Headlines */}
          <div className="space-y-1">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#222222] leading-[0.88]"
              >
                THINK<span className="text-[#FF6D1F]">.</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden flex items-baseline gap-4">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#222222] leading-[0.88]"
              >
                CREATE<span className="text-[#FF6D1F]">.</span>
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hidden sm:inline-block font-editorial italic text-2xl md:text-3xl text-[#222222]/60"
              >
                editorial &amp; code
              </motion.span>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
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
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 md:mt-8 font-body text-base sm:text-lg md:text-xl text-[#222222]/85 max-w-xl leading-relaxed"
          >
            I'm <strong className="text-[#222222] font-semibold">AK</strong>, a designer and developer exploring the intersection of creativity and technology. I turn ideas into visuals, and thoughts into digital experiences.
          </motion.p>

          {/* Quick CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#222222] text-[#FAF3E1] font-mono text-xs uppercase tracking-wider rounded-full hover:bg-[#FF6D1F] transition-all duration-300 shadow-sm"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              to="/about"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#222222]/30 text-[#222222] font-mono text-xs uppercase tracking-wider rounded-full hover:border-[#FF6D1F] hover:text-[#FF6D1F] transition-all duration-300"
            >
              <span>About AK</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Col: Layered Editorial Digital Collage */}
        <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] md:h-[480px] w-full flex items-center justify-center">
          {/* Layer 1: Huge Background Monogram 'AK' */}
          <motion.div
            style={{
              transform: `translate3d(${mouseOffset.x * -12}px, ${mouseOffset.y * -12}px, 0)`,
            }}
            className="absolute -right-4 -top-6 select-none opacity-10 pointer-events-none"
          >
            <span className="font-display text-[160px] sm:text-[220px] font-black leading-none text-[#222222]">
              AK
            </span>
          </motion.div>

          {/* Layer 2: Main Featured Artboard (Swiss Frame) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              transform: `translate3d(${mouseOffset.x * 10}px, ${mouseOffset.y * 10}px, 0)`,
            }}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] bg-[#F5E7C6] border border-[#222222]/20 p-5 rounded shadow-lg shadow-[#222222]/5"
          >
            {/* Header of frame */}
            <div className="flex items-center justify-between border-b border-[#222222]/15 pb-2.5 mb-3 font-mono text-[9px] uppercase tracking-wider text-[#222222]/60">
              <span className="flex items-center gap-1.5 text-[#222222]">
                <Sparkles className="w-3 h-3 text-[#FF6D1F]" />
                PLATE № 01 // DUAL PERSPECTIVE
              </span>
              <span className="text-[#FF6D1F] font-bold">LIVE ARCHIVE</span>
            </div>

            {/* Inner Graphic Composition */}
            <div className="space-y-3">
              <div className="h-44 sm:h-48 bg-[#222222] text-[#FAF3E1] p-4 flex flex-col justify-between rounded relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div className="font-mono text-[9px] text-[#FF6D1F]">
                    // SYS.ARCH.ENGINEERING
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#FF6D1F]" />
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#FAF3E1]/50 uppercase tracking-widest block">
                    CURRENT STATE:
                  </span>
                  <div className="font-display font-bold text-xl sm:text-2xl text-[#FAF3E1]">
                    &lt;Code × Aesthetics /&gt;
                  </div>
                  <p className="font-mono text-[9px] text-[#FAF3E1]/70">
                    Academy of Technology // CSE
                  </p>
                </div>

                <div className="flex justify-between items-center font-mono text-[8px] text-[#FAF3E1]/40 pt-2 border-t border-[#FAF3E1]/10">
                  <span>SCALE: 1:1</span>
                  <span className="text-[#FF6D1F]">DISCIPLINES: 2</span>
                </div>
              </div>

              {/* Sub-fragment with orange accent */}
              <div className="flex items-center justify-between p-3 bg-[#FAF3E1] border border-[#222222]/10 rounded">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[#FF6D1F] text-[#FAF3E1] flex items-center justify-center font-display font-black text-xs">
                    01
                  </div>
                  <div className="text-left font-mono">
                    <span className="block text-[10px] font-bold text-[#222222]">
                      OpenLearn Hub
                    </span>
                    <span className="block text-[9px] text-[#222222]/60">
                      Collaborative Learning Platform
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[9px] text-[#FF6D1F] font-bold">
                  2025
                </span>
              </div>
            </div>
          </motion.div>

          {/* Layer 3: Floating Accent Card 1 (Abstract Orange Geometric Element) */}
          <motion.div
            style={{
              transform: `translate3d(${mouseOffset.x * 24}px, ${mouseOffset.y * 24}px, 0)`,
            }}
            className="absolute -top-4 -left-2 sm:-left-6 z-20 bg-[#FF6D1F] text-[#FAF3E1] px-4 py-2.5 rounded shadow-md border border-[#222222]/15 hidden sm:block select-none"
          >
            <span className="font-mono text-[9px] tracking-widest uppercase block opacity-80">
              DISCIPLINE // 01
            </span>
            <span className="font-display font-bold text-sm tracking-tight block">
              Visual Design &amp; UI
            </span>
          </motion.div>

          {/* Layer 4: Floating Accent Card 2 (Code Fragment) */}
          <motion.div
            style={{
              transform: `translate3d(${mouseOffset.x * -20}px, ${mouseOffset.y * -20}px, 0)`,
            }}
            className="absolute -bottom-4 -right-2 sm:-right-4 z-20 bg-[#222222] text-[#FAF3E1] px-4 py-3 rounded shadow-lg border border-[#FAF3E1]/20 hidden sm:block select-none font-mono text-[9px]"
          >
            <div className="text-[#FF6D1F]">// SOFTWARE RUNTIME</div>
            <div className="text-[#FAF3E1]/80">const ak = new Developer(&#123; design: true &#125;);</div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Row: Animated Scroll Indicator & Micro-coordinates */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="relative z-10 flex items-center justify-between pt-4 border-t border-[#222222]/10 font-mono text-[10px] text-[#222222]/60 select-none"
      >
        <button
          onClick={() => scrollToSection('creative-identities')}
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={resetCursor}
          className="group flex items-center gap-2 hover:text-[#FF6D1F] transition-colors focus:outline-none"
          aria-label="Scroll down to explore"
        >
          <div className="w-5 h-5 rounded-full border border-[#222222]/30 group-hover:border-[#FF6D1F] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="tracking-widest uppercase font-semibold">SCROLL TO DISCOVER</span>
        </button>

        <div className="hidden sm:flex items-center gap-4">
          <span>CURATED SELECTION</span>
          <span className="text-[#FF6D1F]">•</span>
          <span>SPRINGY RIBBONS // WEBGL</span>
        </div>
      </motion.div>
    </section>
  );
};
