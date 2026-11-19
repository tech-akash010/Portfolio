import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { designProjects, techProjects } from '../../data/projectsData';
import { SwissProjectIndex } from '../../components/ProjectCard/SwissProjectIndex';
import { ProjectVisualPreview } from '../../components/ProjectCard/ProjectVisualPreview';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Palette, Code2, Search, TableProperties, LayoutGrid, Sparkles } from 'lucide-react';

export const ProjectsIndexPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [activeTab, setActiveTab] = useState<'all' | 'technology' | 'design'>('all');
  const [viewMode, setViewMode] = useState<'ledger' | 'grid'>('ledger');
  const [searchQuery, setSearchQuery] = useState('');

  const allProjects = [...techProjects, ...designProjects];

  const filteredProjects = allProjects.filter((p) => {
    if (activeTab === 'technology' && p.category !== 'technology') return false;
    if (activeTab === 'design' && p.category !== 'design') return false;
    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase();
    const titleMatch = p.title.toLowerCase().includes(query);
    const subMatch = (p as any).subcategory?.toLowerCase().includes(query);
    const tagMatch = (p as any).tagline?.toLowerCase().includes(query);
    const stackMatch =
      p.category === 'technology'
        ? (p as any).techStack?.some((t: string) => t.toLowerCase().includes(query))
        : false;

    return titleMatch || subMatch || tagMatch || stackMatch;
  });

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="border-b border-[#ffffff]/15 pb-8 mb-10">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#fca311] mb-3 font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#fca311]" />
          <span>PORTFOLIO LEDGER // ARCHIVE 2026</span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#ffffff]">
          WORKS ARCHIVE<span className="text-[#fca311]">.</span>
        </h1>
        <p className="font-editorial italic text-xl sm:text-2xl text-[#e5e5e5]/70 mt-3 max-w-2xl leading-relaxed">
          A cataloged index of computational software systems, developer platforms, and Swiss visual identities.
        </p>

        {/* Category Jump Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <Link
            to="/projects/technology"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="p-5 bg-[#14213d]/60 border border-[#ffffff]/15 rounded-xl hover:border-[#fca311] transition-all flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#fca311] text-[#000000] flex items-center justify-center font-bold">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-[#ffffff] group-hover:text-[#fca311] transition-colors block">
                  Technology Systems [06]
                </span>
                <span className="font-mono text-xs text-[#e5e5e5]/60">
                  Compilers, Open Source, React &amp; AI
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#ffffff] group-hover:text-[#fca311] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            to="/projects/design"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="p-5 bg-[#14213d]/60 border border-[#ffffff]/15 rounded-xl hover:border-[#fca311] transition-all flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffffff]/10 text-[#ffffff] flex items-center justify-center border border-[#ffffff]/20">
                <Palette className="w-5 h-5 text-[#fca311]" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-[#ffffff] group-hover:text-[#fca311] transition-colors block">
                  Design Dossier [06]
                </span>
                <span className="font-mono text-xs text-[#e5e5e5]/60">
                  Swiss Posters, Brand Systems &amp; Type
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#ffffff] group-hover:text-[#fca311] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Filter, Search & View Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#ffffff]/15">
        {/* Discipline Tabs */}
        <div className="flex items-center gap-2 bg-[#14213d]/80 p-1.5 rounded-full border border-[#ffffff]/15 self-start shadow-md">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#fca311] text-[#000000] font-bold'
                : 'text-[#e5e5e5]/70 hover:text-[#ffffff]'
            }`}
          >
            All Works ({allProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('technology')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'technology'
                ? 'bg-[#fca311] text-[#000000] font-bold'
                : 'text-[#e5e5e5]/70 hover:text-[#ffffff]'
            }`}
          >
            Tech ({techProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'design'
                ? 'bg-[#fca311] text-[#000000] font-bold'
                : 'text-[#e5e5e5]/70 hover:text-[#ffffff]'
            }`}
          >
            Design ({designProjects.length})
          </button>
        </div>

        {/* Search Bar + View Toggle */}
        <div className="flex items-center gap-3">
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#e5e5e5]/50" />
            <input
              type="text"
              placeholder="Search projects or stacks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#14213d]/60 border border-[#ffffff]/20 rounded-full font-mono text-xs text-[#ffffff] placeholder:text-[#e5e5e5]/40 focus:outline-none focus:border-[#fca311]"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center p-1 rounded-full bg-[#14213d]/80 border border-[#ffffff]/15">
            <button
              onClick={() => setViewMode('ledger')}
              aria-label="Ledger Index View"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                viewMode === 'ledger'
                  ? 'bg-[#fca311] text-[#000000]'
                  : 'text-[#e5e5e5]/60 hover:text-[#ffffff]'
              }`}
            >
              <TableProperties className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#fca311] text-[#000000]'
                  : 'text-[#e5e5e5]/60 hover:text-[#ffffff]'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content: Swiss Index Ledger OR Visual Grid */}
      {viewMode === 'ledger' ? (
        <div className="space-y-4">
          <SwissProjectIndex
            projects={filteredProjects}
            variant="lapis"
            showCategoryTag={true}
          />
          <div className="flex items-center justify-between pt-4 font-mono text-xs text-[#e5e5e5]/50">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#fca311]" />
              <span>HOVER OVER ANY ROW TO SUMMON THE CURSOR MEDIA PREVIEW</span>
            </div>
            <span>TOTAL {filteredProjects.length} RECORDS INDEXED</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const projectUrl =
              project.category === 'design'
                ? `/projects/design/${project.slug}`
                : `/projects/technology/${project.slug}`;

            return (
              <Link
                key={project.id}
                to={projectUrl}
                onMouseEnter={() => setCursorType('project', 'VIEW PROJECT')}
                onMouseLeave={resetCursor}
                className="group bg-[#14213d]/70 border border-[#ffffff]/20 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#fca311] hover:shadow-2xl transition-all"
              >
                <div className="h-56 w-full border-b border-[#ffffff]/10 overflow-hidden bg-[#000000]">
                  <ProjectVisualPreview slug={project.slug} />
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-center font-mono text-[10px] text-[#e5e5e5]/60 mb-1">
                      <span className="text-[#fca311] font-bold">№ {project.number}</span>
                      <span>{(project as any).subcategory}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#ffffff] group-hover:text-[#fca311] transition-colors truncate">
                      {project.title}
                    </h3>
                    <p className="font-body text-xs text-[#e5e5e5]/75 mt-1.5 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ffffff]/10 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase text-[#fca311] font-semibold">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs flex items-center gap-1 text-[#ffffff] group-hover:text-[#fca311]">
                      Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
