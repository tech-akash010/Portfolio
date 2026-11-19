import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, GraduationCap, Users2, Sparkles, Compass } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <section className="py-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#eaf8bf]/15">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Swiss Frame Graphic */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-sm bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 p-5 rounded-2xl shadow-xl shadow-black/40">
            {/* Editorial Canvas */}
            <div className="relative h-80 sm:h-96 w-full bg-[#001d4a] border border-[#eaf8bf]/10 rounded-xl overflow-hidden flex flex-col justify-center items-center p-6 text-[#eaf8bf]">
              {/* Background graphic motif */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 50% 50%, #eaf8bf 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              {/* Central Typographic Avatar Silhouette */}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full border-2 border-[#eca400] flex items-center justify-center bg-[#eaf8bf]/5 p-2">
                  <div className="w-full h-full rounded-full bg-[#eca400] text-[#001d4a] flex items-center justify-center font-display font-black text-3xl tracking-tight shadow-inner">
                    AK
                  </div>
                </div>
                <div className="mt-4 font-display font-bold text-xl text-[#eaf8bf]">
                  Akash Kundu
                </div>
                <div className="font-mono text-xs text-[#eaf8bf]/60 mt-1">
                  Kolkata, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Highlights */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#eaf8bf] leading-tight">
            CURIOSITY HAS ALWAYS BEEN MY FAVOURITE TOOL<span className="text-[#eca400]">.</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#eaf8bf]/80 leading-relaxed">
            I'm a Computer Science Engineering student with a strong interest in visual design, software development and emerging technologies. I enjoy experimenting with ideas and transforming them into meaningful digital experiences.
          </p>

          {/* Structured Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Highlight 1: Education */}
            <div className="p-4 bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 rounded">
              <div className="flex items-center gap-2 mb-1.5 text-[#eaf8bf]">
                <GraduationCap className="w-4 h-4 text-[#eca400]" />
                <span className="font-mono text-xs font-bold uppercase">
                  Education Highlight
                </span>
              </div>
              <p className="font-display font-semibold text-sm text-[#eaf8bf]">
                Academy of Technology
              </p>
              <p className="font-mono text-[11px] text-[#eaf8bf]/70 mt-0.5">
                B.Tech in Computer Science &amp; Engineering (2024–2028)
              </p>
            </div>

            {/* Highlight 2: Community & Leadership */}
            <div className="p-4 bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 rounded">
              <div className="flex items-center gap-2 mb-1.5 text-[#eaf8bf]">
                <Users2 className="w-4 h-4 text-[#eca400]" />
                <span className="font-mono text-xs font-bold uppercase">
                  Community Leadership
                </span>
              </div>
              <p className="font-display font-semibold text-sm text-[#eaf8bf]">
                GDG On Campus
              </p>
              <p className="font-mono text-[11px] text-[#eaf8bf]/70 mt-0.5">
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
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#eca400] text-[#001d4a] font-mono text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#eaf8bf] hover:text-[#001d4a] transition-all duration-300 shadow-sm shadow-[#eca400]/20"
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
