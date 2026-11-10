import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { designProjects, techProjects } from '../../data/projectsData';
import { ProjectVisualPreview } from '../../components/ProjectCard/ProjectVisualPreview';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Palette, Code2, Search, Filter } from 'lucide-react';

export const ProjectsIndexPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [activeTab, setActiveTab] = useState<'all' | 'design' | 'technology'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDesign = designProjects.filter((p) => {
    if (activeTab === 'technology') return false;
    if (!searchQuery) return true;
    return (
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredTech = techProjects.filter((p) => {
    if (activeTab === 'design') return false;
    if (!searchQuery) return true;
    return (
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="border-b border-[#222222]/15 pb-8 mb-10">
        <span className="font-mono text-xs tracking-widest text-[#FF6D1F] uppercase block mb-2">
          INDEX OF WORKS // 2024 — 2026
        </span>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#222222]">
          THINGS I'VE MADE<span className="text-[#FF6D1F]">.</span>
        </h1>
        <p className="font-editorial italic text-xl sm:text-2xl text-[#222222]/70 mt-3 max-w-2xl">
          A collection of visual experiments, digital experiences and technology projects.
        </p>

        {/* Category Jump Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <Link
            to="/projects/design"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="p-5 bg-[#FAF3E1] border border-[#222222]/20 rounded-lg hover:border-[#FF6D1F] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#222222] text-[#FAF3E1] flex items-center justify-center">
                <Palette className="w-5 h-5 text-[#FF6D1F]" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-[#222222] group-hover:text-[#FF6D1F] transition-colors block">
                  Design Portfolio
                </span>
                <span className="font-mono text-xs text-[#222222]/60">
                  Branding, Posters, UI/UX &amp; Illustrations
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#222222] group-hover:text-[#FF6D1F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            to="/projects/technology"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="p-5 bg-[#222222] text-[#FAF3E1] border border-[#222222] rounded-lg hover:border-[#FF6D1F] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF6D1F] text-[#FAF3E1] flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-[#FAF3E1] group-hover:text-[#FF6D1F] transition-colors block">
                  Technology Projects
                </span>
                <span className="font-mono text-xs text-[#FAF3E1]/60">
                  Web Applications, Dev Tools &amp; AI
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#FAF3E1] group-hover:text-[#FF6D1F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#222222]/10">
        {/* Discipline Tabs */}
        <div className="flex items-center gap-2 bg-[#F5E7C6] p-1.5 rounded-full border border-[#222222]/15 self-start">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors ${
              activeTab === 'all'
                ? 'bg-[#222222] text-[#FAF3E1] font-bold'
                : 'text-[#222222]/70 hover:text-[#222222]'
            }`}
          >
            All Works ({designProjects.length + techProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors ${
              activeTab === 'design'
                ? 'bg-[#222222] text-[#FAF3E1] font-bold'
                : 'text-[#222222]/70 hover:text-[#222222]'
            }`}
          >
            Design ({designProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('technology')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors ${
              activeTab === 'technology'
                ? 'bg-[#222222] text-[#FAF3E1] font-bold'
                : 'text-[#222222]/70 hover:text-[#222222]'
            }`}
          >
            Tech ({techProjects.length})
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#222222]/50" />
          <input
            type="text"
            placeholder="Search projects or stacks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-[#FAF3E1] border border-[#222222]/20 rounded-full font-mono text-xs text-[#222222] placeholder:text-[#222222]/40 focus:outline-none focus:border-[#FF6D1F]"
          />
        </div>
      </div>

      {/* Grid of Results */}
      <div className="space-y-16">
        {/* Section: Technology Projects */}
        {filteredTech.length > 0 && (
          <div>
            <div className="flex items-center justify-between border-b border-[#222222]/15 pb-3 mb-6 font-mono text-xs">
              <span className="font-bold text-[#222222] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6D1F]" />
                TECHNOLOGY &amp; SOFTWARE ARCHITECTURE ({filteredTech.length})
              </span>
              <Link to="/projects/technology" className="text-[#FF6D1F] hover:underline flex items-center gap-1">
                Full Tech Archive <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTech.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/technology/${project.slug}`}
                  onMouseEnter={() => setCursorType('project', 'VIEW PROJECT')}
                  onMouseLeave={resetCursor}
                  className="group bg-[#FAF3E1] border border-[#222222]/15 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#FF6D1F] hover:shadow-lg transition-all"
                >
                  <div className="h-52 w-full border-b border-[#222222]/10 overflow-hidden">
                    <ProjectVisualPreview slug={project.slug} />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-center font-mono text-[10px] text-[#222222]/60 mb-1">
                        <span className="text-[#FF6D1F] font-bold">№ {project.number}</span>
                        <span>{project.subcategory}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#222222] group-hover:text-[#FF6D1F] transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-body text-xs text-[#222222]/75 mt-1.5 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#222222]/10 flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-[#F5E7C6] rounded font-mono text-[9px] text-[#222222]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Section: Design Projects */}
        {filteredDesign.length > 0 && (
          <div>
            <div className="flex items-center justify-between border-b border-[#222222]/15 pb-3 mb-6 font-mono text-xs">
              <span className="font-bold text-[#222222] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6D1F]" />
                DESIGN &amp; VISUAL COMMUNICATION ({filteredDesign.length})
              </span>
              <Link to="/projects/design" className="text-[#FF6D1F] hover:underline flex items-center gap-1">
                Full Design Archive <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDesign.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/design/${project.slug}`}
                  onMouseEnter={() => setCursorType('project', 'VIEW PROJECT')}
                  onMouseLeave={resetCursor}
                  className="group bg-[#FAF3E1] border border-[#222222]/15 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#FF6D1F] hover:shadow-lg transition-all"
                >
                  <div className="h-52 w-full border-b border-[#222222]/10 overflow-hidden">
                    <ProjectVisualPreview slug={project.slug} />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-center font-mono text-[10px] text-[#222222]/60 mb-1">
                        <span className="text-[#FF6D1F] font-bold">№ {project.number}</span>
                        <span>{project.subcategory}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#222222] group-hover:text-[#FF6D1F] transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-body text-xs text-[#222222]/75 mt-1.5 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#222222]/10 flex flex-wrap gap-1">
                      {project.toolsUsed.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-[#F5E7C6] rounded font-mono text-[9px] text-[#222222]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
