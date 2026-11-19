import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Palette, Code2 } from 'lucide-react';

export const CreativeIdentities: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <section id="studio-disciplines" className="py-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#ffffff]/15">
      {/* Studio Header */}
      <div className="border-b border-[#ffffff]/15 pb-6 mb-12">
        <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-[#ffffff]">
          TWO DISCIPLINES<span className="text-[#fca311]">.</span> ONE VISION<span className="text-[#fca311]">.</span>
        </h2>
      </div>

      {/* Split-Screen Architectural Studio Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT PANEL: DESIGN */}
        <Link
          to="/projects/design"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={resetCursor}
          className="group relative bg-[#14213d]/30 text-[#ffffff] p-8 sm:p-12 rounded-lg overflow-hidden border border-[#ffffff]/15 transition-all duration-500 hover:border-[#fca311]/60 hover:shadow-2xl hover:shadow-black/40 flex flex-col justify-between min-h-[480px]"
        >
          {/* Subtle background Swiss grid */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Top Panel Icon */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-[#fca311] text-[#000000] flex items-center justify-center shadow-xs">
              <Palette className="w-5 h-5" />
            </div>
          </div>

          {/* Center Graphic & Huge Typography */}
          <div className="relative z-10 my-8">
            <h3 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#ffffff] group-hover:text-[#fca311] transition-colors duration-300">
              DESIGN<span className="text-[#fca311]">.</span>
            </h3>
            <p className="font-editorial italic text-xl sm:text-2xl text-[#e5e5e5]/75 mt-3 max-w-md font-normal leading-relaxed">
              Visual communication, editorial branding, Swiss typography, UI/UX systems &amp; art direction.
            </p>

            {/* Micro Tags Preview */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['Branding', 'Poster Lab', 'Illustrations', 'Design Systems', 'UI/UX'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-[#ffffff]/10 text-[#ffffff]/80 font-mono text-[10px] tracking-wide border border-[#ffffff]/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="relative z-10 flex items-center justify-between border-t border-[#ffffff]/15 pt-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#ffffff] group-hover:text-[#fca311] transition-colors">
              Explore Design Portfolio Archive
            </span>
            <div className="w-10 h-10 rounded-full border border-[#ffffff]/30 flex items-center justify-center group-hover:border-[#fca311] group-hover:bg-[#fca311] group-hover:text-[#000000] transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </Link>

        {/* RIGHT PANEL: TECHNOLOGY */}
        <Link
          to="/projects/technology"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={resetCursor}
          className="group relative bg-[#14213d]/30 text-[#ffffff] p-8 sm:p-12 rounded-lg overflow-hidden border border-[#ffffff]/15 transition-all duration-500 hover:border-[#fca311]/60 hover:shadow-2xl hover:shadow-black/40 flex flex-col justify-between min-h-[480px]"
        >
          {/* Subtle background technical grid */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Top Panel Icon */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-[#ffffff]/10 text-[#ffffff] flex items-center justify-center border border-[#ffffff]/20">
              <Code2 className="w-5 h-5 text-[#fca311]" />
            </div>
          </div>

          {/* Center Graphic & Huge Typography */}
          <div className="relative z-10 my-8">
            <h3 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#ffffff] group-hover:text-[#fca311] transition-colors duration-300">
              TECHNOLOGY<span className="text-[#fca311]">.</span>
            </h3>
            <p className="font-editorial italic text-xl sm:text-2xl text-[#e5e5e5]/75 mt-3 max-w-md font-normal leading-relaxed">
              Full-stack software systems, developer tools, algorithms, graph analyzers &amp; experiments.
            </p>

            {/* Micro Tags Preview */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['React 19', 'TypeScript', 'Node.js', 'Developer Tools', 'Open Source'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-[#ffffff]/10 text-[#ffffff]/80 font-mono text-[10px] tracking-wide border border-[#ffffff]/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="relative z-10 flex items-center justify-between border-t border-[#ffffff]/15 pt-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#ffffff] group-hover:text-[#fca311] transition-colors">
              Explore Tech Projects Archive
            </span>
            <div className="w-10 h-10 rounded-full border border-[#ffffff]/30 flex items-center justify-center group-hover:border-[#fca311] group-hover:bg-[#fca311] group-hover:text-[#000000] transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
