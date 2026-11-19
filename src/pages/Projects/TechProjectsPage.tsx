import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { techProjects } from '../../data/projectsData';
import { TechSubcategory } from '../../types/project';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Code2, ExternalLink, Sparkles } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CATEGORIES: ('All' | TechSubcategory)[] = [
  'All',
  'Developer Tools',
  'Open Source',
  'Web Applications',
  'AI Applications',
];

export const TechProjectsPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [selectedCategory, setSelectedCategory] = useState<'All' | TechSubcategory>('All');

  const filteredProjects = techProjects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.subcategory === selectedCategory;
  });

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
          <Code2 className="w-3.5 h-3.5 text-[#fca311]" />
          <span>PRODUCTION ARCHIVES // COMPUTATIONAL SYSTEMS</span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#ffffff]">
          TECHNOLOGY PROJECTS<span className="text-[#fca311]">.</span>
        </h1>
        <p className="font-editorial italic text-xl sm:text-2xl text-[#e5e5e5]/80 mt-3 max-w-2xl leading-relaxed">
          Open-source software systems, developer platforms, AST compilers, and cognitive learning engines.
        </p>
      </motion.div>

      {/* Category Filter Pills (Minimal Unboxed Line) */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {CATEGORIES.map((cat) => {
          const count = cat === 'All' ? techProjects.length : techProjects.filter(p => p.subcategory === cat).length;
          if (cat !== 'All' && count === 0) return null;
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer z-10 ${
                isActive ? 'text-[#000000] font-bold' : 'text-[#e5e5e5]/70 hover:text-[#ffffff] bg-[#14213d]/40 border border-[#ffffff]/10'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeTechFilter"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  className="absolute inset-0 bg-[#fca311] rounded-full z-[-1] shadow-md shadow-[#fca311]/25"
                />
              )}
              <span>{cat} [{count}]</span>
            </button>
          );
        })}
      </div>

      {/* Unboxed Editorial Ledger Stream (No Cards, Pure Swiss Rows) */}
      <div className="divide-y divide-[#ffffff]/15 border-t border-b border-[#ffffff]/15">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="py-10 sm:py-12 group transition-colors duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column: Index Number & Metadata */}
              <div className="lg:col-span-3 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm sm:text-base text-[#fca311] font-bold tracking-wider">
                    № {project.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff]/30" />
                  <span className="font-mono text-xs text-[#e5e5e5]/60">
                    {project.year}
                  </span>
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-[#fca311] font-semibold">
                  {project.subcategory}
                </div>
              </div>

              {/* Center Column: Core Typographic Identity & Details */}
              <div className="lg:col-span-6 space-y-3">
                <Link
                  to={`/projects/technology/${project.slug}`}
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={resetCursor}
                  className="block group/title"
                >
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#ffffff] group-hover/title:text-[#fca311] transition-colors duration-300">
                    {project.title}<span className="text-[#fca311]">.</span>
                  </h2>
                </Link>

                <p className="font-body text-sm sm:text-base text-[#e5e5e5]/80 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech Stack - Clean Dot-Separated Inline List */}
                <div className="pt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-[#e5e5e5]/60">
                  {project.techStack.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="hover:text-[#ffffff] transition-colors">{tech}</span>
                      {i < project.techStack.length - 1 && (
                        <span className="text-[#fca311]/40">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col lg:items-end justify-between lg:justify-start gap-4 pt-2 lg:pt-0">
                <Link
                  to={`/projects/technology/${project.slug}`}
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={resetCursor}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#fca311] font-bold hover:text-[#ffffff] transition-colors group/link"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>

                <div className="flex items-center gap-4 font-mono text-xs text-[#e5e5e5]/70">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursorType('external')}
                    onMouseLeave={resetCursor}
                    className="inline-flex items-center gap-1.5 hover:text-[#fca311] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setCursorType('external')}
                      onMouseLeave={resetCursor}
                      className="inline-flex items-center gap-1.5 hover:text-[#fca311] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footnote Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-12 text-xs font-mono text-[#e5e5e5]/50 gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#fca311]" />
          <span>PRODUCTION SYSTEMS ARCHIVE • 5 VERIFIED PROJECTS</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/projects/design" className="hover:text-[#fca311] transition-colors flex items-center gap-1">
            <span>Explore Design Dossier</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="https://github.com/tech-akash010"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fca311] transition-colors flex items-center gap-1 font-semibold"
          >
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
