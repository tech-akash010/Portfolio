import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { AkashPortrait } from '../../components/Portrait/AkashPortrait';
import { ArrowUpRight, GraduationCap, Users2, Sparkles, Compass } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <section className="py-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#222222]/15">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Portrait with Swiss Frame */}
        <div className="lg:col-span-5 relative">
          <AkashPortrait variant="about" showControls={true} />
        </div>

        {/* Right Column: Narrative & Highlights */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-[#FF6D1F] uppercase block">
              05 // BIOGRAPHY &amp; VISION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#222222] leading-tight">
              CURIOSITY HAS ALWAYS BEEN MY FAVOURITE TOOL<span className="text-[#FF6D1F]">.</span>
            </h2>
          </div>

          <p className="font-body text-base sm:text-lg text-[#222222]/80 leading-relaxed">
            I'm a Computer Science Engineering student with a strong interest in visual design, software development and emerging technologies. I enjoy experimenting with ideas and transforming them into meaningful digital experiences.
          </p>

          {/* Structured Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Highlight 1: Education */}
            <div className="p-4 bg-[#F5E7C6]/60 border border-[#222222]/10 rounded">
              <div className="flex items-center gap-2 mb-1.5 text-[#222222]">
                <GraduationCap className="w-4 h-4 text-[#FF6D1F]" />
                <span className="font-mono text-xs font-bold uppercase">
                  Education Highlight
                </span>
              </div>
              <p className="font-display font-semibold text-sm text-[#222222]">
                Academy of Technology
              </p>
              <p className="font-mono text-[11px] text-[#222222]/70 mt-0.5">
                B.Tech in Computer Science &amp; Engineering (2024–2028)
              </p>
            </div>

            {/* Highlight 2: Community & Leadership */}
            <div className="p-4 bg-[#F5E7C6]/60 border border-[#222222]/10 rounded">
              <div className="flex items-center gap-2 mb-1.5 text-[#222222]">
                <Users2 className="w-4 h-4 text-[#FF6D1F]" />
                <span className="font-mono text-xs font-bold uppercase">
                  Community Leadership
                </span>
              </div>
              <p className="font-display font-semibold text-sm text-[#222222]">
                GDG On Campus
              </p>
              <p className="font-mono text-[11px] text-[#222222]/70 mt-0.5">
                Creative Direction, event planning &amp; technical mentoring
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Link
              to="/about"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#222222] text-[#FAF3E1] font-mono text-xs uppercase tracking-wider rounded-full hover:bg-[#FF6D1F] transition-all duration-300 shadow-sm"
            >
              <span>Explore Full Story &amp; Journey</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

