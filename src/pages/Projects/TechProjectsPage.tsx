import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { techProjects } from '../../data/projectsData';
import { SwissProjectIndex } from '../../components/ProjectCard/SwissProjectIndex';
import { ProjectVisualPreview } from '../../components/ProjectCard/ProjectVisualPreview';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Code2, ExternalLink, TableProperties, LayoutGrid, Sparkles } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const TechProjectsPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [viewMode, setViewMode] = useState<'ledger' | 'grid'>('ledger');

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="border-b border-[#ffffff]/15 pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#fca311] mb-3 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#fca311]" />
            <span>SYSTEMS &amp; COMPUTATION // 06 ENTRIES</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#ffffff]">
            TECH SYSTEMS<span className="text-[#fca311]">.</span>
          </h1>
          <p className="font-editorial italic text-xl sm:text-2xl text-[#e5e5e5]/70 mt-3 max-w-2xl leading-relaxed">
            Software engineering, web architectures, developer tools, algorithms, and technical prototypes.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 p-1 rounded-full bg-[#000000]/80 border border-[#ffffff]/15 self-start md:self-auto">
          <button
            onClick={() => setViewMode('ledger')}
            aria-label="Ledger Index View"
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'ledger'
                ? 'bg-[#fca311] text-[#000000] font-bold shadow-sm'
                : 'text-[#e5e5e5]/70 hover:text-[#ffffff]'
            }`}
          >
            <TableProperties className="w-3.5 h-3.5" />
            <span>Ledger</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            aria-label="Grid Tiles View"
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#fca311] text-[#000000] font-bold shadow-sm'
                : 'text-[#e5e5e5]/70 hover:text-[#ffffff]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Tiles</span>
          </button>
        </div>
      </div>

      {/* Main Content: Swiss Index Ledger OR Visual Grid */}
      {viewMode === 'ledger' ? (
        <div className="space-y-4">
          <SwissProjectIndex
            projects={techProjects}
            variant="midnight"
            showCategoryTag={true}
          />
          <div className="flex items-center justify-between pt-4 font-mono text-xs text-[#e5e5e5]/50 border-t border-[#ffffff]/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#fca311]" />
              <span>HOVER OVER ANY ROW TO REVEAL CODE SANDBOX &amp; ARCHITECTURE PREVIEW</span>
            </div>
            <span>6 TECHNICAL REPOSITORIES</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#14213d]/30 border border-[#ffffff]/15 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#fca311] hover:shadow-xl transition-all duration-300"
            >
              {/* Visual Container */}
              <Link
                to={`/projects/technology/${project.slug}`}
                onMouseEnter={() => setCursorType('project', 'VIEW PROJECT')}
                onMouseLeave={resetCursor}
                className="h-60 w-full border-b border-[#ffffff]/15 block overflow-hidden bg-[#14213d]"
              >
                <ProjectVisualPreview slug={project.slug} />
              </Link>

              {/* Content Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#e5e5e5]/60 mb-2">
                    <span className="text-[#fca311] font-bold uppercase tracking-wider">{project.subcategory}</span>
                    <span>{project.year}</span>
                  </div>

                  <Link
                    to={`/projects/technology/${project.slug}`}
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={resetCursor}
                  >
                    <h2 className="font-display text-2xl font-bold tracking-tight text-[#ffffff] group-hover:text-[#fca311] transition-colors">
                      {project.title}
                    </h2>
                  </Link>

                  <p className="font-body text-xs sm:text-sm text-[#e5e5e5]/75 mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="mt-4 pt-3 border-t border-[#ffffff]/10 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#ffffff]/10 text-[#ffffff]/80 font-mono text-[9px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* External Action Links (GitHub, Live Demo & Case Study) */}
                  <div className="mt-4 pt-3 border-t border-[#ffffff]/10 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setCursorType('external')}
                        onMouseLeave={resetCursor}
                        className="text-[#e5e5e5]/70 hover:text-[#ffffff] flex items-center gap-1"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Code</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => setCursorType('external')}
                          onMouseLeave={resetCursor}
                          className="text-[#e5e5e5]/70 hover:text-[#ffffff] flex items-center gap-1"
                          title="Live Application"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Live</span>
                        </a>
                      )}
                    </div>

                    <Link
                      to={`/projects/technology/${project.slug}`}
                      onMouseEnter={() => setCursorType('hover')}
                      onMouseLeave={resetCursor}
                      className="text-[#fca311] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
