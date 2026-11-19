import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ProjectVisualPreview } from '../../components/ProjectCard/ProjectVisualPreview';
import { ArrowUpRight } from 'lucide-react';
import { techProjects } from '../../data/projectsData';

export const SelectedWork: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  // The 4 featured projects required by user
  const openlearn = techProjects.find((p) => p.slug === 'openlearn-hub')!;
  const sankalp = techProjects.find((p) => p.slug === 'sankalp')!;
  const structo = techProjects.find((p) => p.slug === 'structo')!;
  const rayofroads = techProjects.find((p) => p.slug === 'rayofroads')!;

  return (
    <section id="selected-work" className="py-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#eaf8bf]/15 pb-6 mb-12 gap-4">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#eaf8bf]">
            FEATURED BUILDS<span className="text-[#eca400]">.</span>
          </h2>
        </div>
        <Link
          to="/projects"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={resetCursor}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#eaf8bf]/80 hover:text-[#eca400] transition-colors"
        >
          <span>View All 12 Projects</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Asymmetrical Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Card 1: ONE LARGE FEATURED PROJECT (OpenLearn Hub) - Col 1 to 8 */}
        <div className="lg:col-span-8">
          <Link
            to={`/projects/technology/${openlearn.slug}`}
            onMouseEnter={() => setCursorType('project', 'VIEW PROJECT')}
            onMouseLeave={resetCursor}
            className="group block bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#eca400] hover:shadow-xl hover:shadow-black/40"
          >
            {/* Visual Screen Container */}
            <div className="h-72 sm:h-96 w-full border-b border-[#eaf8bf]/15 overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
              <ProjectVisualPreview slug={openlearn.slug} />
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#eaf8bf]/60 mb-2">
                  <span className="text-[#eca400] font-bold uppercase tracking-wider">{openlearn.subcategory}</span>
                  <span>{openlearn.year}</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#eaf8bf] group-hover:text-[#eca400] transition-colors">
                  {openlearn.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-[#eaf8bf]/75 mt-2 max-w-2xl leading-relaxed">
                  {openlearn.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-[#eaf8bf]/15">
                <div className="flex flex-wrap gap-1.5">
                  {openlearn.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-[#eaf8bf]/10 text-[#eaf8bf]/80 font-mono text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#eaf8bf] group-hover:text-[#eca400] flex items-center gap-1 transition-colors">
                  Case Study <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Card 2: ONE VERTICAL PROJECT PREVIEW (Structo) - Col 9 to 12 */}
        <div className="lg:col-span-4 flex">
          <Link
            to={`/projects/technology/${structo.slug}`}
            onMouseEnter={() => setCursorType('project', 'VIEW PROJECT')}
            onMouseLeave={resetCursor}
            className="group w-full flex flex-col justify-between bg-[#eaf8bf]/[0.03] text-[#eaf8bf] border border-[#eaf8bf]/15 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#eca400] hover:shadow-xl hover:shadow-black/40"
          >
            {/* Visual Container */}
            <div className="h-64 lg:h-72 w-full border-b border-[#eaf8bf]/15 overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
              <ProjectVisualPreview slug={structo.slug} />
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#eaf8bf]/50 mb-2">
                  <span className="text-[#eca400] font-bold uppercase tracking-wider">DEV TOOLS</span>
                  <span>{structo.year}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#eaf8bf] group-hover:text-[#eca400] transition-colors">
                  {structo.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#eaf8bf]/70 mt-2 leading-relaxed">
                  {structo.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#eaf8bf]/15">
                <span className="font-mono text-[10px] text-[#eca400]">
                  D3.JS / TYPESCRIPT / CANVAS
                </span>
                <div className="w-8 h-8 rounded-full border border-[#eaf8bf]/30 flex items-center justify-center group-hover:bg-[#eca400] group-hover:border-[#eca400] group-hover:text-[#eaf8bf] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Card 3: TWO SMALLER PROJECT PREVIEWS (Sankalp) - Col 1 to 6 */}
        <div className="lg:col-span-6">
          <Link
            to={`/projects/technology/${sankalp.slug}`}
            onMouseEnter={() => setCursorType('project', 'VIEW PROJECT')}
            onMouseLeave={resetCursor}
            className="group block bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#eca400] hover:shadow-lg hover:shadow-black/30"
          >
            <div className="h-56 sm:h-64 w-full border-b border-[#eaf8bf]/15 overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
              <ProjectVisualPreview slug={sankalp.slug} />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between font-mono text-xs text-[#eaf8bf]/60 mb-2">
                <span className="text-[#eca400] font-bold uppercase tracking-wider">WEB PLATFORM</span>
                <span>{sankalp.year}</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-[#eaf8bf] group-hover:text-[#eca400] transition-colors">
                {sankalp.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#eaf8bf]/75 mt-2 line-clamp-2">
                {sankalp.description}
              </p>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#eaf8bf]/15 font-mono text-xs">
                <span className="text-[11px] text-[#eaf8bf]/60">Full-Stack Platform</span>
                <span className="text-[#eca400] font-bold flex items-center gap-1">
                  Read Case Study <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Card 4: TWO SMALLER PROJECT PREVIEWS (RayOfRoads) - Col 7 to 12 */}
        <div className="lg:col-span-6">
          <Link
            to={`/projects/technology/${rayofroads.slug}`}
            onMouseEnter={() => setCursorType('project', 'VIEW PROJECT')}
            onMouseLeave={resetCursor}
            className="group block bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#eca400] hover:shadow-lg hover:shadow-black/30"
          >
            <div className="h-56 sm:h-64 w-full border-b border-[#eaf8bf]/15 overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
              <ProjectVisualPreview slug={rayofroads.slug} />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between font-mono text-xs text-[#eaf8bf]/60 mb-2">
                <span className="text-[#eca400] font-bold uppercase tracking-wider">CARTOGRAPHY</span>
                <span>{rayofroads.year}</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-[#eaf8bf] group-hover:text-[#eca400] transition-colors">
                {rayofroads.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#eaf8bf]/75 mt-2 line-clamp-2">
                {rayofroads.description}
              </p>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#eaf8bf]/15 font-mono text-xs">
                <span className="text-[11px] text-[#eaf8bf]/60">Interactive Routing</span>
                <span className="text-[#eca400] font-bold flex items-center gap-1">
                  Read Case Study <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

