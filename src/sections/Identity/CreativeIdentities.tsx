import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Palette, Code2 } from 'lucide-react';

export const CreativeIdentities: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [hoveredDiscipline, setHoveredDiscipline] = useState<'design' | 'technology' | null>(null);

  return (
    <section id="studio-disciplines" className="scroll-mt-28 py-20 sm:py-28 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Studio Headline */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="border-b border-[#ffffff]/15 pb-8 mb-0"
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#ffffff] leading-[1.05]">
          TWO DISCIPLINES<span className="text-[#fca311]">.</span> ONE VISION<span className="text-[#fca311]">.</span>
        </h2>
        <p className="font-editorial italic text-lg sm:text-xl md:text-2xl text-[#e5e5e5]/80 mt-3 max-w-2xl leading-relaxed">
          Where aesthetic Swiss precision informs computational logic, and systems architecture empowers visual craft.
        </p>
      </motion.div>

      {/* 2-Column Split Stage (Symmetric, Bordered, No Overlapping Axis Badge) */}
      <div className="relative border-b border-[#ffffff]/15">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#ffffff]/15">
          {/* ======================================================== */}
          {/* LEFT COLUMN: DESIGN */}
          {/* ======================================================== */}
          <div
            onMouseEnter={() => {
              setHoveredDiscipline('design');
              setCursorType('hover');
            }}
            onMouseLeave={() => {
              setHoveredDiscipline(null);
              resetCursor();
            }}
            className="group relative flex flex-col justify-between py-12 lg:py-16 lg:pr-12 transition-colors duration-300 overflow-hidden"
          >
            {/* Subtle Golden Sheen on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-[#fca311]/10 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${
                hoveredDiscipline === 'design' ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Top Telemetry Strip */}
            <div className="relative z-10 flex items-center justify-between pb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#fca311] text-[#000000] flex items-center justify-center font-bold">
                  <Palette className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#fca311] font-semibold">
                  DISCIPLINE // 01
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#e5e5e5]/40 tracking-wider uppercase">
                SWISS VISUAL SYSTEMS
              </span>
            </div>

            {/* Core Typographic Stage */}
            <div className="relative z-10 py-6 space-y-4">
              <Link to="/projects/design" className="block group/title">
                <h3 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#ffffff] group-hover/title:text-[#fca311] transition-colors duration-300">
                  DESIGN<span className="text-[#fca311]">.</span>
                </h3>
              </Link>

              <p className="font-editorial italic text-xl sm:text-2xl text-[#e5e5e5]/80 max-w-lg leading-relaxed">
                Visual communication, editorial posters, Swiss typography, brand identities &amp; art direction.
              </p>

              {/* Focus List */}
              <div className="pt-2 font-mono text-xs text-[#e5e5e5]/60 flex flex-wrap gap-x-4 gap-y-1.5">
                <span>• Poster Lab</span>
                <span>• Swiss Grid Typography</span>
                <span>• Brand Dossier</span>
                <span>• Art Direction</span>
              </div>
            </div>

            {/* Bottom Runway Action Link */}
            <div className="relative z-10 pt-8 border-t border-[#ffffff]/10 flex items-center justify-between">
              <Link
                to="/projects/design"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#ffffff] group-hover:text-[#fca311] transition-colors font-semibold"
              >
                <span>Explore Design Dossier</span>
                <div className="w-8 h-8 rounded-full border border-[#ffffff]/25 flex items-center justify-center group-hover:border-[#fca311] group-hover:bg-[#fca311] group-hover:text-[#000000] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: TECHNOLOGY */}
          {/* ======================================================== */}
          <div
            onMouseEnter={() => {
              setHoveredDiscipline('technology');
              setCursorType('hover');
            }}
            onMouseLeave={() => {
              setHoveredDiscipline(null);
              resetCursor();
            }}
            className="group relative flex flex-col justify-between py-12 lg:py-16 lg:pl-12 transition-colors duration-300 overflow-hidden"
          >
            {/* Subtle Blue/Slate Sheen on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-bl from-[#14213d]/40 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${
                hoveredDiscipline === 'technology' ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Top Telemetry Strip */}
            <div className="relative z-10 flex items-center justify-between pb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#ffffff]/10 text-[#ffffff] flex items-center justify-center border border-[#ffffff]/20 font-bold">
                  <Code2 className="w-4 h-4 text-[#fca311]" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#fca311] font-semibold">
                  DISCIPLINE // 02
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#fca311] tracking-wider uppercase font-semibold">
                SOFTWARE &amp; COMPUTATIONAL SYSTEMS
              </span>
            </div>

            {/* Core Typographic Stage */}
            <div className="relative z-10 py-6 space-y-4">
              <Link to="/projects/technology" className="block group/title">
                <h3 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#ffffff] group-hover/title:text-[#fca311] transition-colors duration-300">
                  TECHNOLOGY<span className="text-[#fca311]">.</span>
                </h3>
              </Link>

              <p className="font-editorial italic text-xl sm:text-2xl text-[#e5e5e5]/80 max-w-lg leading-relaxed">
                Full-stack software engineering, developer tools, algorithms, compilers &amp; computational systems.
              </p>

              {/* Focus List */}
              <div className="pt-2 font-mono text-xs text-[#e5e5e5]/60 flex flex-wrap gap-x-4 gap-y-1.5">
                <span>• OpenLearn Hub</span>
                <span>• Structo</span>
                <span>• RayOfRoads</span>
                <span>• Concept Mirror</span>
                <span>• Flashcards</span>
              </div>
            </div>

            {/* Bottom Runway Action Link */}
            <div className="relative z-10 pt-8 border-t border-[#ffffff]/10 flex items-center justify-between">
              <Link
                to="/projects/technology"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#ffffff] group-hover:text-[#fca311] transition-colors font-semibold"
              >
                <span>Explore Tech Systems</span>
                <div className="w-8 h-8 rounded-full border border-[#ffffff]/25 flex items-center justify-center group-hover:border-[#fca311] group-hover:bg-[#fca311] group-hover:text-[#000000] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
