import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { designProjects } from '../../data/projectsData';
import { DesignSubcategory } from '../../types/project';
import { ProjectVisualPreview } from '../../components/ProjectCard/ProjectVisualPreview';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import CircularGallery, { CircularGalleryItem } from '../../components/CircularGallery';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES: ('All' | DesignSubcategory)[] = [
  'All',
  'Event Posters',
  'Branding and Identity',
  'Illustrations',
  'UI/UX',
  'Social Media Design',
  'Creative Experiments',
];

const GALLERY_ITEMS: CircularGalleryItem[] = [
  {
    image: '/posters/poster-lab.png',
    text: 'Kinetic Type Lab',
    category: 'Event Posters',
    slug: 'kinetic-type-poster-lab',
    description: 'Experimental typography and Swiss poster explorations deconstructing Josef Müller-Brockmann grid principles.',
  },
  {
    image: '/branding/aether-brand.png',
    text: 'Aether Identity',
    category: 'Branding and Identity',
    slug: 'aether-identity-system',
    description: 'Dynamic brand identity system and 80-page specification book for a generative media studio.',
  },
  {
    image: '/illustrations/neo-kolkata.png',
    text: 'Neo-Kolkata',
    category: 'Illustrations',
    slug: 'neo-kolkata-illustrated',
    description: 'Cyber-heritage vector series capturing historic colonial arches, trams, and Howrah Bridge cantilever structures.',
  },
  {
    image: '/ui/nexus-ds.png',
    text: 'Nexus Design System',
    category: 'UI/UX',
    slug: 'nexus-design-system',
    description: 'Modular cross-platform design token architecture and 140+ accessible high-density UI components.',
  },
  {
    image: '/branding/gdg-campus.png',
    text: 'GDG Campus Brand',
    category: 'Social Media Design',
    slug: 'gdg-campus-brand-kit',
    description: 'Dynamic visual identity package, speaker decks, and brutalist social collateral for developer communities.',
  },
  {
    image: '/experiments/monolith.png',
    text: 'Abstract Monolith',
    category: 'Creative Experiments',
    slug: 'abstract-monolith-print',
    description: 'Constructivist geometric equilibrium study rendered in carbon black soy ink and safety orange paper textures.',
  },
  {
    image: '/posters/swiss-grid-74.png',
    text: 'Swiss Grid 74',
    category: 'Event Posters',
    slug: 'kinetic-type-poster-lab',
    description: 'Archival study exploring 12-column baseline typographic grids and asymmetrical planar tension.',
  },
  {
    image: '/branding/solaris-spatial.png',
    text: 'Solaris Spatial UI',
    category: 'UI/UX',
    slug: 'nexus-design-system',
    description: 'Speculative 3D spatial interface tokens, volumetric coordinate typography, and 120 FPS FOV rendering.',
  },
  {
    image: '/experiments/analog-glitch.png',
    text: 'Analog Disruption',
    category: 'Creative Experiments',
    slug: 'abstract-monolith-print',
    description: 'Cathode-ray tube scanline investigations and optical halftone distortion algorithms.',
  },
  {
    image: '/posters/bauhaus-form.png',
    text: 'Bauhaus 2026',
    category: 'Event Posters',
    slug: 'kinetic-type-poster-lab',
    description: 'Primary geometric forms—circle, triangle, square—exploring timeless visual harmony and intentional rhythm.',
  },
];

export const DesignProjectsPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [selectedCategory, setSelectedCategory] = useState<'All' | DesignSubcategory>('All');
  const archiveRef = useRef<HTMLDivElement>(null);

  const filteredProjects = designProjects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.subcategory === selectedCategory;
  });

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="border-b border-[#222222]/15 pb-8 mb-12">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#222222]">
          DESIGN PORTFOLIO<span className="text-[#FF6D1F]">.</span>
        </h1>
        <p className="font-editorial italic text-xl sm:text-2xl text-[#222222]/70 mt-3 max-w-2xl leading-relaxed">
          Visual communication, branding, graphic design, illustrations, UI/UX and creative direction.
        </p>
      </div>

      {/* 3D CIRCULAR GALLERY SHOWCASE */}
      <section className="mb-20">
        <div className="relative w-full h-[520px] sm:h-[600px] md:h-[640px] bg-gradient-to-b from-[#F5E7C6]/60 via-[#F5E7C6]/30 to-[#FAF3E1] border border-[#222222]/15 shadow-xl rounded-2xl overflow-hidden">
          <CircularGallery
            items={GALLERY_ITEMS}
            bend={2.6}
            textColor="#222222"
            borderRadius={0.045}
            font="bold 26px Outfit, sans-serif"
            itemSize={1.08}
            itemAspect={0.78}
            gap={0.24}
            wave={0.75}
            fadeEdges={0.14}
            shadow={0.32}
            snap={true}
            autoScroll={0.12}
            openOnClick={true}
            className="w-full h-full"
          />
        </div>
      </section>

      {/* EDITORIAL ARCHIVE / ASYMMETRICAL GALLERY SECTION */}
      <div ref={archiveRef} className="pt-8 border-t border-[#222222]/15">
        <div className="flex flex-wrap items-baseline justify-between gap-6 mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#222222] tracking-tight">
            EDITORIAL CASE STUDIES<span className="text-[#FF6D1F]">.</span>
          </h2>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#222222] text-[#FAF3E1] font-bold shadow-sm'
                    : 'bg-[#F5E7C6] text-[#222222] hover:bg-[#222222] hover:text-[#FAF3E1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            const colSpan = idx === 0 ? 'md:col-span-8' : idx === 1 ? 'md:col-span-4' : 'md:col-span-6';

            return (
              <div key={project.id} className={colSpan}>
                <Link
                  to={`/projects/design/${project.slug}`}
                  onMouseEnter={() => setCursorType('project', 'VIEW PROJECT')}
                  onMouseLeave={resetCursor}
                  className="group block bg-[#FAF3E1] border border-[#222222]/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF6D1F] hover:shadow-xl hover:shadow-[#222222]/5 h-full flex flex-col justify-between"
                >
                  {/* Visual Art Container */}
                  <div
                    className={`w-full border-b border-[#222222]/15 overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] ${
                      idx === 0 ? 'h-80 sm:h-96' : 'h-64 sm:h-72'
                    }`}
                  >
                    <ProjectVisualPreview slug={project.slug} />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between font-mono text-xs text-[#222222]/60 mb-2">
                        <span className="text-[#FF6D1F] font-bold uppercase tracking-wider">
                          {project.subcategory}
                        </span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#222222] group-hover:text-[#FF6D1F] transition-colors">
                        {project.title}
                      </h3>
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

                      <span className="font-mono text-xs uppercase tracking-wider text-[#222222] group-hover:text-[#FF6D1F] flex items-center gap-1 transition-colors font-bold">
                        Case Study{' '}
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Design Philosophy Manifest Callout */}
      <div className="mt-24 p-8 sm:p-12 bg-[#222222] text-[#FAF3E1] rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6D1F]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            FORM FOLLOWS INTENTION<span className="text-[#FF6D1F]">.</span>
          </h3>
          <p className="font-editorial italic text-xl text-[#FAF3E1]/80 mt-4 leading-relaxed">
            "Design is not decoration applied onto engineering; it is the cognitive architecture through which humans interface with thought, data, and technology."
          </p>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#FF6D1F] text-[#FAF3E1] font-bold uppercase tracking-wider hover:bg-[#FAF3E1] hover:text-[#222222] transition-colors"
            >
              COMMISSION A DESIGN WORK →
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-full border border-[#FAF3E1]/20 hover:border-[#FF6D1F] hover:bg-[#FAF3E1]/10 text-[#FAF3E1] uppercase tracking-wider transition-colors"
            >
              READ CREATIVE MANIFESTO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
