import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Palette, Code2 } from 'lucide-react';

export const CreativeIdentities: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <section id="studio-disciplines" className="py-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#222222]/15">
      {/* Studio Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#222222]/15 pb-6 mb-12 gap-4">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-[#222222]">
            TWO DISCIPLINES<span className="text-[#FF6D1F]">.</span> ONE VISION<span className="text-[#FF6D1F]">.</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-[#222222]/70 max-w-xs leading-relaxed">
          Bridging visual precision with computational logic. Select a discipline to inspect archives.
        </p>
      </div>

      {/* Split-Screen Architectural Studio Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT PANEL: DESIGN */}
        <Link
          to="/projects/design"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={resetCursor}
          className="group relative bg-[#222222] text-[#FAF3E1] p-8 sm:p-12 rounded-lg overflow-hidden border border-[#222222] transition-all duration-500 hover:shadow-2xl hover:shadow-[#222222]/20 flex flex-col justify-between min-h-[480px]"
        >
          {/* Subtle background Swiss grid */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-15 transition-opacity"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(250, 243, 225, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(250, 243, 225, 0.15) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Top Panel Icon */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-[#FF6D1F] text-[#FAF3E1] flex items-center justify-center shadow-xs">
              <Palette className="w-5 h-5" />
            </div>
          </div>

          {/* Center Graphic & Huge Typography */}
          <div className="relative z-10 my-8">
            <h3 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#FAF3E1] group-hover:text-[#FF6D1F] transition-colors duration-300">
              DESIGN<span className="text-[#FF6D1F]">.</span>
            </h3>
            <p className="font-editorial italic text-xl sm:text-2xl text-[#FAF3E1]/75 mt-3 max-w-md font-normal leading-relaxed">
              Visual communication, editorial branding, Swiss typography, UI/UX systems &amp; art direction.
            </p>

            {/* Micro Tags Preview */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['Branding', 'Poster Lab', 'Illustrations', 'Design Systems', 'UI/UX'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-[#FAF3E1]/10 text-[#FAF3E1]/80 font-mono text-[10px] tracking-wide border border-[#FAF3E1]/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="relative z-10 flex items-center justify-between border-t border-[#FAF3E1]/15 pt-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#FAF3E1] group-hover:text-[#FF6D1F] transition-colors">
              Explore Design Portfolio Archive
            </span>
            <div className="w-10 h-10 rounded-full border border-[#FAF3E1]/30 flex items-center justify-center group-hover:border-[#FF6D1F] group-hover:bg-[#FF6D1F] group-hover:text-[#FAF3E1] transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </Link>

        {/* RIGHT PANEL: TECHNOLOGY */}
        <Link
          to="/projects/technology"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={resetCursor}
          className="group relative bg-[#F5E7C6] text-[#222222] p-8 sm:p-12 rounded-lg overflow-hidden border border-[#222222]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#222222]/10 flex flex-col justify-between min-h-[480px]"
        >
          {/* Subtle background technical grid */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(34, 34, 34, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 34, 34, 0.1) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Top Panel Icon */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-[#222222] text-[#FAF3E1] flex items-center justify-center shadow-xs">
              <Code2 className="w-5 h-5 text-[#FF6D1F]" />
            </div>
          </div>

          {/* Center Graphic & Huge Typography */}
          <div className="relative z-10 my-8">
            <h3 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#222222] group-hover:text-[#FF6D1F] transition-colors duration-300">
              TECHNOLOGY<span className="text-[#FF6D1F]">.</span>
            </h3>
            <p className="font-editorial italic text-xl sm:text-2xl text-[#222222]/75 mt-3 max-w-md font-normal leading-relaxed">
              Full-stack software systems, developer tools, algorithms, graph analyzers &amp; experiments.
            </p>

            {/* Micro Tags Preview */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['React 19', 'TypeScript', 'Node.js', 'Developer Tools', 'Open Source'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-[#FAF3E1] text-[#222222] font-mono text-[10px] tracking-wide border border-[#222222]/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="relative z-10 flex items-center justify-between border-t border-[#222222]/15 pt-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#222222] group-hover:text-[#FF6D1F] transition-colors">
              Explore Tech Projects Archive
            </span>
            <div className="w-10 h-10 rounded-full border border-[#222222]/30 bg-[#222222] text-[#FAF3E1] flex items-center justify-center group-hover:bg-[#FF6D1F] transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
