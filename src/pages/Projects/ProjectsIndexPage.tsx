import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { techProjects } from '../../data/projectsData';
import { SwissProjectIndex } from '../../components/ProjectCard/SwissProjectIndex';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Code2, Palette, Sparkles } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ProjectsIndexPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto min-h-screen text-[#ffffff]">
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="border-b border-[#ffffff]/15 pb-8 mb-10"
      >
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#fca311] mb-3 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#fca311]" />
          <span>PORTFOLIO LEDGER // ARCHIVE 2026</span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#ffffff]">
          WORKS ARCHIVE<span className="text-[#fca311]">.</span>
        </h1>
        <p className="font-editorial italic text-xl sm:text-2xl text-[#e5e5e5]/80 mt-3 max-w-2xl leading-relaxed">
          Cataloged software engineering platforms, developer tools, algorithms, and Swiss visual identities.
        </p>

        {/* Dual Discipline Gateway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Link
            to="/projects/technology"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="p-6 bg-[#14213d]/50 border border-[#ffffff]/15 rounded-xl hover:border-[#fca311] transition-all flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#fca311] text-[#000000] flex items-center justify-center font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg sm:text-xl text-[#ffffff] group-hover:text-[#fca311] transition-colors block">
                  Technology Systems [05]
                </span>
                <span className="font-mono text-xs text-[#e5e5e5]/60">
                  OpenLearn Hub, Structo, RayOfRoads, Concept Mirror, Flashcards
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#ffffff] group-hover:text-[#fca311] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            to="/projects/design"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="p-6 bg-[#14213d]/50 border border-[#ffffff]/15 rounded-xl hover:border-[#fca311] transition-all flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#ffffff]/10 text-[#ffffff] flex items-center justify-center border border-[#ffffff]/20">
                <Palette className="w-5 h-5 text-[#fca311]" />
              </div>
              <div>
                <span className="font-display font-bold text-lg sm:text-xl text-[#ffffff] group-hover:text-[#fca311] transition-colors block">
                  Design Dossier [10]
                </span>
                <span className="font-mono text-xs text-[#e5e5e5]/60">
                  Liquid Glass WebGL Carousel, Swiss Posters, Brand Identity
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#ffffff] group-hover:text-[#fca311] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* Technology Projects Section Header */}
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-black text-[#ffffff] tracking-tight">
          ENGINEERING INDEX<span className="text-[#fca311]">.</span>
        </h2>
        <span className="font-mono text-xs text-[#e5e5e5]/60">
          5 Verified Production Repositories &amp; Developer Tools
        </span>
      </div>

      {/* Main Content: Pure Swiss Hover-Reveal Ledger (Zero Cards) */}
      <div>
        <SwissProjectIndex
          projects={techProjects}
          variant="midnight"
          showCategoryTag={true}
        />
        <div className="flex items-center justify-between pt-4 font-mono text-xs text-[#e5e5e5]/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#fca311]" />
            <span>HOVER OVER ANY ROW TO SUMMON THE CURSOR MEDIA PREVIEW</span>
          </div>
          <span>TOTAL 5 RECORDS INDEXED</span>
        </div>
      </div>

      {/* Alternative Live Channels Action Bar */}
      <div className="border-t border-[#ffffff]/15 pt-8 mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h4 className="font-display font-bold text-xl text-[#ffffff]">
            Follow live code on GitHub
          </h4>
          <p className="font-body text-xs sm:text-sm text-[#e5e5e5]/70 mt-1">
            All active commits, PRs, and repositories remain open and inspectable.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/tech-akash010"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fca311] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#ffffff] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Open GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <Link
            to="/projects/design"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#ffffff]/25 text-[#ffffff] font-mono text-xs uppercase tracking-wider hover:border-[#fca311] hover:text-[#fca311] transition-colors"
          >
            <Palette className="w-4 h-4 text-[#fca311]" />
            <span>Explore Design Dossier</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
