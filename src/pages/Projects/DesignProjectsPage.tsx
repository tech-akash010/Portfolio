import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { designProjects } from '../../data/projectsData';
import { DesignSubcategory } from '../../types/project';
import { ProjectVisualPreview } from '../../components/ProjectCard/ProjectVisualPreview';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Palette, Sparkles, Filter } from 'lucide-react';

const CATEGORIES: ('All' | DesignSubcategory)[] = [
  'All',
  'Event Posters',
  'Branding and Identity',
  'Illustrations',
  'UI/UX',
  'Social Media Design',
  'Creative Experiments',
];

export const DesignProjectsPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [selectedCategory, setSelectedCategory] = useState<'All' | DesignSubcategory>('All');

  const filteredProjects = designProjects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.subcategory === selectedCategory;
  });

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="border-b border-[#222222]/15 pb-8 mb-10">
        <div className="flex items-center gap-2 font-mono text-xs text-[#FF6D1F] uppercase tracking-widest mb-2">
          <Palette className="w-4 h-4" />
          <span>DISCIPLINE 01 // VISUAL COMMUNICATION</span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#222222]">
          DESIGN PORTFOLIO<span className="text-[#FF6D1F]">.</span>
        </h1>
        <p className="font-editorial italic text-xl sm:text-2xl text-[#222222]/70 mt-3 max-w-2xl">
          Visual communication, branding, graphic design, illustrations, UI/UX and creative direction.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#222222]/50 mr-2 flex items-center gap-1">
          <Filter className="w-3 h-3 text-[#FF6D1F]" /> FILTER:
        </span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
              selectedCategory === cat
                ? 'bg-[#222222] text-[#FAF3E1] font-bold shadow-sm'
                : 'bg-[#F5E7C6] text-[#222222] hover:bg-[#222222] hover:text-[#FAF3E1]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Asymmetrical Editorial Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {filteredProjects.map((project, idx) => {
          // Asymmetrical layout span: first item spans 8, second spans 4, others span 6
          const colSpan = idx === 0 ? 'md:col-span-8' : idx === 1 ? 'md:col-span-4' : 'md:col-span-6';

          return (
            <div key={project.id} className={colSpan}>
              <Link
                to={`/projects/design/${project.slug}`}
                onMouseEnter={() => setCursorType('project', 'VIEW PROJECT')}
                onMouseLeave={resetCursor}
                className="group block bg-[#FAF3E1] border border-[#222222]/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#FF6D1F] hover:shadow-xl hover:shadow-[#222222]/5 h-full flex flex-col justify-between"
              >
                {/* Visual Art Container */}
                <div className={`w-full border-b border-[#222222]/15 overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] ${idx === 0 ? 'h-80 sm:h-96' : 'h-64 sm:h-72'}`}>
                  <ProjectVisualPreview slug={project.slug} />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-[#222222]/60 mb-2">
                      <span className="text-[#FF6D1F] font-bold">№ {project.number} // {project.subcategory.toUpperCase()}</span>
                      <span>{project.year}</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#222222] group-hover:text-[#FF6D1F] transition-colors">
                      {project.title}
                    </h2>
                    <p className="font-body text-xs sm:text-sm text-[#222222]/75 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#222222]/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded bg-[#F5E7C6] text-[#222222] font-mono text-[9px]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <span className="font-mono text-xs uppercase tracking-wider text-[#222222] group-hover:text-[#FF6D1F] flex items-center gap-1 transition-colors">
                      Case Study <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

