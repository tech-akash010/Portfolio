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
    <div className="pt-36 sm:pt-40 md:pt-44 pb-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="border-b border-[#eaf8bf]/15 pb-8 mb-10">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#eaf8bf]">
          THINGS I'VE MADE<span className="text-[#eca400]">.</span>
        </h1>
        <p className="font-editorial italic text-xl sm:text-2xl text-[#eaf8bf]/70 mt-3 max-w-2xl">
          A collection of visual experiments, digital experiences and technology projects.
        </p>

        {/* Category Jump Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <Link
            to="/projects/design"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="p-5 bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 rounded-lg hover:border-[#eca400] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#eaf8bf]/10 text-[#eaf8bf] flex items-center justify-center border border-[#eaf8bf]/10">
                <Palette className="w-5 h-5 text-[#eca400]" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-[#eaf8bf] group-hover:text-[#eca400] transition-colors block">
                  Design Portfolio
                </span>
                <span className="font-mono text-xs text-[#eaf8bf]/60">
                  Branding, Posters, UI/UX &amp; Illustrations
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#eaf8bf] group-hover:text-[#eca400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            to="/projects/technology"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="p-5 bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 rounded-lg hover:border-[#eca400] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#eca400] text-[#001d4a] flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-[#eaf8bf] group-hover:text-[#eca400] transition-colors block">
                  Technology Projects
                </span>
                <span className="font-mono text-xs text-[#eaf8bf]/60">
                  Web Applications, Dev Tools &amp; AI
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#eaf8bf] group-hover:text-[#eca400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#eaf8bf]/15">
        {/* Discipline Tabs */}
        <div className="flex items-center gap-2 bg-[#eaf8bf]/[0.05] p-1.5 rounded-full border border-[#eaf8bf]/15 self-start">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors ${
              activeTab === 'all'
                ? 'bg-[#eca400] text-[#001d4a] font-bold'
                : 'text-[#eaf8bf]/70 hover:text-[#eaf8bf]'
            }`}
          >
            All Works ({designProjects.length + techProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors ${
              activeTab === 'design'
                ? 'bg-[#eca400] text-[#001d4a] font-bold'
                : 'text-[#eaf8bf]/70 hover:text-[#eaf8bf]'
            }`}
          >
            Design ({designProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('technology')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors ${
              activeTab === 'technology'
                ? 'bg-[#eca400] text-[#001d4a] font-bold'
                : 'text-[#eaf8bf]/70 hover:text-[#eaf8bf]'
            }`}
          >
            Tech ({techProjects.length})
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#eaf8bf]/50" />
          <input
            type="text"
            placeholder="Search projects or stacks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-[#eaf8bf]/[0.05] border border-[#eaf8bf]/20 rounded-full font-mono text-xs text-[#eaf8bf] placeholder:text-[#eaf8bf]/40 focus:outline-none focus:border-[#eca400]"
          />
        </div>
      </div>

      {/* Grid of Results */}
      <div className="space-y-16">
        {/* Section: Technology Projects */}
        {filteredTech.length > 0 && (
          <div>
            <div className="flex items-center justify-between border-b border-[#eaf8bf]/15 pb-3 mb-6 font-mono text-xs">
              <span className="font-bold text-[#eaf8bf] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#eca400]" />
                TECHNOLOGY &amp; SOFTWARE ARCHITECTURE ({filteredTech.length})
              </span>
              <Link to="/projects/technology" className="text-[#eca400] hover:underline flex items-center gap-1">
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
                  className="group bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#eca400] hover:shadow-lg transition-all"
                >
                  <div className="h-52 w-full border-b border-[#eaf8bf]/10 overflow-hidden">
                    <ProjectVisualPreview slug={project.slug} />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-center font-mono text-[10px] text-[#eaf8bf]/60 mb-1">
                        <span className="text-[#eca400] font-bold">№ {project.number}</span>
                        <span>{project.subcategory}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#eaf8bf] group-hover:text-[#eca400] transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-body text-xs text-[#eaf8bf]/75 mt-1.5 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#eaf8bf]/10 flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-[#eaf8bf]/10 rounded font-mono text-[9px] text-[#eaf8bf]/80">
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
            <div className="flex items-center justify-between border-b border-[#eaf8bf]/15 pb-3 mb-6 font-mono text-xs">
              <span className="font-bold text-[#eaf8bf] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#eca400]" />
                DESIGN &amp; VISUAL COMMUNICATION ({filteredDesign.length})
              </span>
              <Link to="/projects/design" className="text-[#eca400] hover:underline flex items-center gap-1">
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
                  className="group bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#eca400] hover:shadow-lg transition-all"
                >
                  <div className="h-52 w-full border-b border-[#eaf8bf]/10 overflow-hidden">
                    <ProjectVisualPreview slug={project.slug} />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-center font-mono text-[10px] text-[#eaf8bf]/60 mb-1">
                        <span className="text-[#eca400] font-bold">№ {project.number}</span>
                        <span>{project.subcategory}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#eaf8bf] group-hover:text-[#eca400] transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-body text-xs text-[#eaf8bf]/75 mt-1.5 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#eaf8bf]/10 flex flex-wrap gap-1">
                      {project.toolsUsed.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-[#eaf8bf]/10 rounded font-mono text-[9px] text-[#eaf8bf]/80">
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

