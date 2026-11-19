import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { SwissProjectIndex } from '../../components/ProjectCard/SwissProjectIndex';
import { techProjects, designProjects } from '../../data/projectsData';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [filter, setFilter] = useState<'all' | 'technology' | 'design'>('all');

  // Curate top selected builds across both domains
  const selectedTech = techProjects.filter((p) =>
    ['openlearn-hub', 'structo', 'sankalp', 'rayofroads'].includes(p.slug)
  );

  const selectedDesign = designProjects.filter((p) =>
    ['kinetic-type-poster-lab', 'aether-identity-system', 'neo-kolkata-illustrated'].includes(p.slug)
  );

  const combinedProjects = [
    selectedTech[0], // OpenLearn Hub
    selectedDesign[0], // Kinetic Type Poster Lab
    selectedTech[1], // Structo
    selectedDesign[1], // Aether Identity System
    selectedTech[2], // Sankalp
    selectedDesign[2], // Neo-Kolkata Illustrated
  ].filter(Boolean);

  const displayedProjects =
    filter === 'technology'
      ? selectedTech
      : filter === 'design'
      ? selectedDesign
      : combinedProjects;

  return (
    <section id="selected-work" className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Section Header: Swiss Monograph Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#eaf8bf]/15 pb-8 mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#eca400] mb-3 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#eca400]" />
            <span>SELECTED WORK // CURATED INDEX</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#eaf8bf]">
            WORK INDEX<span className="text-[#eca400]">.</span>
          </h2>
          <p className="font-editorial italic text-lg sm:text-xl text-[#eaf8bf]/70 mt-2 max-w-xl">
            Hover over any ledger row to reveal live interactive previews and architectural blueprints.
          </p>
        </div>

        {/* Filter Pills + Archive Link */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#27476e]/40 border border-[#eaf8bf]/15">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#eca400] text-[#001d4a] font-bold shadow-sm'
                  : 'text-[#eaf8bf]/70 hover:text-[#eaf8bf]'
              }`}
            >
              All [{combinedProjects.length}]
            </button>
            <button
              onClick={() => setFilter('technology')}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'technology'
                  ? 'bg-[#eca400] text-[#001d4a] font-bold shadow-sm'
                  : 'text-[#eaf8bf]/70 hover:text-[#eaf8bf]'
              }`}
            >
              Tech [{selectedTech.length}]
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'design'
                  ? 'bg-[#eca400] text-[#001d4a] font-bold shadow-sm'
                  : 'text-[#eaf8bf]/70 hover:text-[#eaf8bf]'
              }`}
            >
              Design [{selectedDesign.length}]
            </button>
          </div>

          <Link
            to="/projects"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#eaf8bf]/25 text-[#eaf8bf] hover:border-[#eca400] hover:text-[#eca400] font-mono text-xs uppercase tracking-wider transition-colors ml-auto sm:ml-0"
          >
            <span>Full Archive [12]</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Swiss Hover-Reveal Interactive Ledger */}
      <SwissProjectIndex
        projects={displayedProjects}
        variant="midnight"
        showCategoryTag={true}
      />

      {/* Footnote Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-xs font-mono text-[#eaf8bf]/50 border-t border-[#eaf8bf]/10 gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#eca400]" />
          <span>REAL-TIME CURSOR PREVIEW POWERED BY MOTION PHYSICS</span>
        </div>
        <Link
          to="/projects"
          className="text-[#eca400] hover:underline flex items-center gap-1 font-semibold"
        >
          <span>BROWSE COMPLETE ARCHIVE WITH FILTERING</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};
