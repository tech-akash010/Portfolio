import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { designProjects } from '../../data/projectsData';
import { DesignSubcategory } from '../../types/project';
import { ProjectVisualPreview } from '../../components/ProjectCard/ProjectVisualPreview';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import CircularGallery, { CircularGalleryItem } from '../../components/CircularGallery';
import {
  ArrowUpRight,
  Palette,
  Filter,
  Eye,
  Grid,
  Sparkles,
  MoveHorizontal,
  Play,
  Pause,
  Compass,
  Layers,
  Sliders
} from 'lucide-react';

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
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [bendFactor, setBendFactor] = useState(2.6);
  const archiveRef = useRef<HTMLDivElement>(null);

  const filteredProjects = designProjects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.subcategory === selectedCategory;
  });

  const activeItem = GALLERY_ITEMS[activeGalleryIndex] || GALLERY_ITEMS[0];

  const scrollToArchive = () => {
    archiveRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="border-b border-[#222222]/15 pb-8 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF6D1F] uppercase tracking-widest">
            <Palette className="w-4 h-4" />
            <span>DISCIPLINE 01 // VISUAL COMMUNICATION</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-[#222222]/60">
            <span>6 CASE STUDIES</span>
            <span className="text-[#FF6D1F]">•</span>
            <span>10 CURATED EXHIBITS</span>
            <span className="text-[#FF6D1F]">•</span>
            <span>BASEL × KOLKATA</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mt-2">
          <div className="lg:col-span-8">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#222222]">
              DESIGN PORTFOLIO<span className="text-[#FF6D1F]">.</span>
            </h1>
            <p className="font-editorial italic text-xl sm:text-2xl text-[#222222]/70 mt-3 max-w-2xl leading-relaxed">
              Visual communication, branding, graphic design, illustrations, UI/UX and creative direction.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end gap-3 font-mono text-xs">
            <button
              onClick={scrollToArchive}
              className="px-4 py-2.5 rounded-full border border-[#222222]/20 hover:border-[#FF6D1F] hover:bg-[#F5E7C6] transition-all flex items-center justify-center gap-2 text-[#222222]"
            >
              <Grid className="w-3.5 h-3.5 text-[#FF6D1F]" />
              <span>JUMP TO EDITORIAL ARCHIVE ↓</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3D CIRCULAR GALLERY SHOWCASE */}
      <section className="mb-20">
        {/* Gallery Control HUD */}
        <div className="bg-[#222222] text-[#FAF3E1] px-5 py-3.5 rounded-t-2xl flex flex-wrap items-center justify-between gap-4 border-b border-[#FAF3E1]/10">
          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF6D1F] animate-pulse" />
              <span className="font-bold tracking-wider text-[#FAF3E1]">3D CIRCULAR RUNWAY</span>
            </div>
            <span className="text-[#FAF3E1]/40 hidden sm:inline">//</span>
            <span className="text-[#FAF3E1]/60 text-[11px] hidden sm:inline flex items-center gap-1">
              <MoveHorizontal className="w-3 h-3 text-[#FF6D1F]" /> DRAG, SCROLL, OR ARROWS TO ROTATE
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            {/* Auto-scroll toggle */}
            <button
              type="button"
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#FAF3E1]/10 hover:bg-[#FAF3E1]/20 text-[#FAF3E1] text-[11px] transition-colors"
              title={isAutoScrolling ? 'Pause ambient rotation' : 'Resume ambient rotation'}
            >
              {isAutoScrolling ? (
                <>
                  <Pause className="w-3 h-3 text-[#FF6D1F]" />
                  <span>AUTORUN: ON</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[#FF6D1F]" />
                  <span>AUTORUN: OFF</span>
                </>
              )}
            </button>

            {/* Curvature adjustment */}
            <button
              type="button"
              onClick={() => setBendFactor((b) => (b === 2.6 ? 3.5 : b === 3.5 ? 1.8 : 2.6))}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#FAF3E1]/10 hover:bg-[#FAF3E1]/20 text-[#FAF3E1] text-[11px] transition-colors"
              title="Toggle curvature depth"
            >
              <Sliders className="w-3 h-3 text-[#FF6D1F]" />
              <span>BEND: {bendFactor}x</span>
            </button>
          </div>
        </div>

        {/* 3D WebGL Canvas Container */}
        <div className="relative w-full h-[520px] sm:h-[600px] md:h-[640px] bg-gradient-to-b from-[#F5E7C6]/60 via-[#F5E7C6]/30 to-[#FAF3E1] border-x border-b border-[#222222]/15 shadow-xl rounded-b-2xl overflow-hidden">
          <CircularGallery
            items={GALLERY_ITEMS}
            bend={bendFactor}
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
            autoScroll={isAutoScrolling ? 0.12 : 0}
            openOnClick={true}
            onActiveChange={(idx) => setActiveGalleryIndex(idx)}
            className="w-full h-full"
          />

          {/* Interactive Floating Quick-Tag at bottom right */}
          <div className="absolute bottom-5 right-6 pointer-events-none hidden sm:flex items-center gap-2 font-mono text-[11px] bg-[#FAF3E1]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#222222]/15 text-[#222222]">
            <Sparkles className="w-3 h-3 text-[#FF6D1F]" />
            <span>CLICK CARD TO EXPAND FULL VIEW</span>
          </div>

          {/* Active Card Indicator at bottom left */}
          <div className="absolute bottom-5 left-6 pointer-events-none hidden sm:flex items-center gap-3 font-mono text-[11px] bg-[#222222]/90 backdrop-blur-md text-[#FAF3E1] px-4 py-1.5 rounded-full border border-[#FAF3E1]/15">
            <span className="text-[#FF6D1F] font-bold">
              0{activeGalleryIndex + 1} / 0{GALLERY_ITEMS.length}
            </span>
            <span className="opacity-40">|</span>
            <span className="font-semibold">{activeItem.text}</span>
          </div>
        </div>

        {/* Action ribbon for currently focused gallery work */}
        <div className="mt-4 px-4 py-3 bg-[#FAF3E1] border border-[#222222]/15 rounded-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FF6D1F] text-[#FAF3E1] font-mono text-[10px] font-bold uppercase tracking-wider">
              {activeItem.category || 'FEATURED'}
            </span>
            <span className="font-display font-bold text-base sm:text-lg text-[#222222]">
              {activeItem.text}
            </span>
            <span className="text-xs font-editorial italic text-[#222222]/70 hidden md:inline">
              — {activeItem.description}
            </span>
          </div>

          {activeItem.slug && (
            <Link
              to={`/projects/design/${activeItem.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#222222] text-[#FAF3E1] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FF6D1F] transition-colors"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </section>

      {/* EDITORIAL ARCHIVE / ASYMMETRICAL GALLERY SECTION */}
      <div ref={archiveRef} className="pt-8 border-t border-[#222222]/15">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#FF6D1F] uppercase tracking-widest mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>CATALOG // COMPREHENSIVE ARCHIVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#222222] tracking-tight">
              EDITORIAL CASE STUDIES<span className="text-[#FF6D1F]">.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#222222]/50 mr-1 flex items-center gap-1">
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
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            // Asymmetrical layout: item 0 spans 8, item 1 spans 4, others span 6
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
                        <span className="text-[#FF6D1F] font-bold">
                          № {project.number} // {project.subcategory.toUpperCase()}
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
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF6D1F] uppercase tracking-widest mb-3">
            <Compass className="w-4 h-4" />
            <span>DESIGN PHILOSOPHY // "A MIND IN MOTION"</span>
          </div>
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
