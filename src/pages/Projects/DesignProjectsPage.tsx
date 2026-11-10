import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Play, Pause, ArrowRight, Sparkles } from 'lucide-react';

interface DesignExhibit {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  image: string;
  slug: string;
  description: string;
  tags: string[];
}

const DESIGN_EXHIBITS: DesignExhibit[] = [
  {
    id: '01',
    number: '№ 01',
    title: 'Kinetic Type Lab',
    category: 'Event Posters',
    year: '2025',
    image: '/posters/poster-lab.png',
    slug: 'kinetic-type-poster-lab',
    description: 'Experimental typography and Swiss poster explorations deconstructing Josef Müller-Brockmann grid principles.',
    tags: ['Swiss Grid', 'Typography', 'Silk Screen'],
  },
  {
    id: '02',
    number: '№ 02',
    title: 'Aether Identity System',
    category: 'Branding & Identity',
    year: '2025',
    image: '/branding/aether-brand.png',
    slug: 'aether-identity-system',
    description: 'Dynamic brand identity system and 80-page specification book for a generative media studio.',
    tags: ['Generative', 'Identity Spec', 'Logomark'],
  },
  {
    id: '03',
    number: '№ 03',
    title: 'Neo-Kolkata Illustrated',
    category: 'Illustrations',
    year: '2025',
    image: '/illustrations/neo-kolkata.png',
    slug: 'neo-kolkata-illustrated',
    description: 'Cyber-heritage vector series capturing historic colonial arches, trams, and Howrah Bridge cantilever structures.',
    tags: ['Vector Art', 'Heritage', 'Cyber-Punk'],
  },
  {
    id: '04',
    number: '№ 04',
    title: 'Nexus Design System',
    category: 'UI/UX Architecture',
    year: '2026',
    image: '/ui/nexus-ds.png',
    slug: 'nexus-design-system',
    description: 'Modular cross-platform design token architecture and 140+ accessible high-density UI components.',
    tags: ['Design Tokens', 'Figma Variants', 'WCAG AAA'],
  },
  {
    id: '05',
    number: '№ 05',
    title: 'GDG Campus Brand Kit',
    category: 'Social Media Design',
    year: '2025',
    image: '/branding/gdg-campus.png',
    slug: 'gdg-campus-brand-kit',
    description: 'Dynamic visual identity package, speaker decks, and brutalist social collateral for developer communities.',
    tags: ['Brutalist', 'Keynotes', 'Community'],
  },
  {
    id: '06',
    number: '№ 06',
    title: 'Abstract Monolith Print',
    category: 'Creative Experiments',
    year: '2025',
    image: '/experiments/monolith.png',
    slug: 'abstract-monolith-print',
    description: 'Constructivist geometric equilibrium study rendered in carbon black soy ink and safety orange paper textures.',
    tags: ['Constructivism', 'Soy Ink', 'Equilibrium'],
  },
  {
    id: '07',
    number: '№ 07',
    title: 'Swiss Grid 74',
    category: 'Event Posters',
    year: '2025',
    image: '/posters/swiss-grid-74.png',
    slug: 'kinetic-type-poster-lab',
    description: 'Archival study exploring 12-column baseline typographic grids and asymmetrical planar tension.',
    tags: ['Baseline 12C', 'Akzidenz', 'Geometry'],
  },
  {
    id: '08',
    number: '№ 08',
    title: 'Solaris Spatial UI',
    category: 'UI/UX Architecture',
    year: '2026',
    image: '/branding/solaris-spatial.png',
    slug: 'nexus-design-system',
    description: 'Speculative 3D spatial interface tokens, volumetric coordinate typography, and 120 FPS FOV rendering.',
    tags: ['Spatial Tokens', 'Volumetric', '120 FPS'],
  },
  {
    id: '09',
    number: '№ 09',
    title: 'Analog Disruption',
    category: 'Creative Experiments',
    year: '2025',
    image: '/experiments/analog-glitch.png',
    slug: 'abstract-monolith-print',
    description: 'Cathode-ray tube scanline investigations and optical halftone distortion algorithms.',
    tags: ['Scanlines', 'Halftone', 'Cathode Ray'],
  },
  {
    id: '10',
    number: '№ 10',
    title: 'Bauhaus 2026',
    category: 'Event Posters',
    year: '2026',
    image: '/posters/bauhaus-form.png',
    slug: 'kinetic-type-poster-lab',
    description: 'Primary geometric forms—circle, triangle, square—exploring timeless visual harmony and intentional rhythm.',
    tags: ['Form & Color', 'Primary Shapes', 'Harmony'],
  },
];

export const DesignProjectsPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [viewMode, setViewMode] = useState<'panoramic' | 'dual'>('panoramic');

  const speedSeconds = speed === 'slow' ? 56 : speed === 'fast' ? 22 : 36;
  const speedSecondsRow2 = speed === 'slow' ? 64 : speed === 'fast' ? 26 : 42;

  // Seamless duplication for 100% continuous left-to-right infinite loop
  const primaryRepeated = [...DESIGN_EXHIBITS, ...DESIGN_EXHIBITS];

  // For dual view mode, split into two curated streams
  const row1Designs = [...DESIGN_EXHIBITS.slice(0, 5), ...DESIGN_EXHIBITS.slice(0, 5)];
  const row2Designs = [...DESIGN_EXHIBITS.slice(5), ...DESIGN_EXHIBITS.slice(5)];

  const renderExhibit = (design: DesignExhibit, key: string, isCompact: boolean = false) => (
    <div key={key} className="shrink-0 px-3 sm:px-5">
      <Link
        to={`/projects/design/${design.slug}`}
        onMouseEnter={() => setCursorType('project', 'VIEW CASE STUDY')}
        onMouseLeave={resetCursor}
        className={`group block relative bg-[#FAF3E1] rounded-2xl border border-[#222222]/15 overflow-hidden transition-all duration-500 hover:border-[#FF6D1F] hover:shadow-2xl hover:shadow-[#222222]/10 hover:-translate-y-2 cursor-pointer ${
          isCompact
            ? 'w-[260px] sm:w-[320px] md:w-[360px]'
            : 'w-[280px] sm:w-[360px] md:w-[420px]'
        }`}
      >
        {/* Visual Artwork Container */}
        <div
          className={`relative w-full bg-[#F5E7C6] overflow-hidden flex items-center justify-center p-4 sm:p-6 ${
            isCompact
              ? 'h-[260px] sm:h-[300px] md:h-[340px]'
              : 'h-[360px] sm:h-[440px] md:h-[500px]'
          }`}
        >
          <img
            src={design.image}
            alt={design.title}
            loading="lazy"
            className="w-full h-full object-contain drop-shadow-md transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Category Pill Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full bg-[#222222]/90 backdrop-blur-sm text-[#FAF3E1] font-mono text-[10px] font-bold uppercase tracking-wider border border-[#FAF3E1]/20">
              {design.category}
            </span>
          </div>

          {/* Year Tag */}
          <div className="absolute top-4 right-4 z-10">
            <span className="font-mono text-[11px] text-[#222222]/70 font-bold bg-[#FAF3E1]/85 backdrop-blur-sm px-2.5 py-0.5 rounded border border-[#222222]/10">
              {design.year}
            </span>
          </div>
        </div>

        {/* Caption & Metadata Strip */}
        <div className="p-5 sm:p-6 bg-[#FAF3E1] border-t border-[#222222]/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-[#222222]/60 mb-1.5">
              <span className="text-[#FF6D1F] font-bold">{design.number}</span>
              <span>{design.category.toUpperCase()}</span>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#222222] tracking-tight group-hover:text-[#FF6D1F] transition-colors flex items-center justify-between gap-2">
              <span>{design.title}</span>
              <ArrowUpRight className="w-5 h-5 text-[#222222] group-hover:text-[#FF6D1F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </h3>

            <p className="font-editorial italic text-xs sm:text-sm text-[#222222]/75 mt-2 line-clamp-2 leading-relaxed">
              {design.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#222222]/10">
            {design.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-[#F5E7C6] text-[#222222] font-mono text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-24 min-h-screen">
      {/* Top Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-8">
        <div className="border-b border-[#222222]/15 pb-8">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#222222]">
            DESIGN PORTFOLIO<span className="text-[#FF6D1F]">.</span>
          </h1>
          <p className="font-editorial italic text-xl sm:text-2xl text-[#222222]/70 mt-3 max-w-2xl leading-relaxed">
            Visual communication, branding, graphic design, illustrations, UI/UX and creative direction.
          </p>

          {/* Interactive Runway Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-[#222222]/10">
            {/* Left: Direction Indicator & Play/Pause */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#222222] text-[#FAF3E1] font-mono text-xs uppercase tracking-wider hover:bg-[#FF6D1F] transition-colors"
                aria-label={isPaused ? 'Resume infinite scroll' : 'Pause infinite scroll'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
                <span>{isPaused ? 'Resume' : 'Pause'}</span>
              </button>

              <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E7C6] border border-[#222222]/15 font-mono text-xs text-[#222222]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6D1F]" />
                <span className="font-bold">SCROLL: LEFT TO RIGHT</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF6D1F]" />
              </div>
            </div>

            {/* Right: View Mode & Speed Switcher */}
            <div className="flex items-center gap-3 font-mono text-xs">
              {/* Speed Buttons */}
              <div className="flex items-center bg-[#F5E7C6] p-1 rounded-full border border-[#222222]/15">
                {(['slow', 'normal', 'fast'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSpeed(s)}
                    className={`px-3 py-1 rounded-full uppercase tracking-wider transition-colors ${
                      speed === s
                        ? 'bg-[#222222] text-[#FAF3E1] font-bold'
                        : 'text-[#222222]/70 hover:text-[#222222]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* View Layout Toggle */}
              <div className="flex items-center bg-[#F5E7C6] p-1 rounded-full border border-[#222222]/15">
                <button
                  type="button"
                  onClick={() => setViewMode('panoramic')}
                  className={`px-3 py-1 rounded-full uppercase tracking-wider transition-colors ${
                    viewMode === 'panoramic'
                      ? 'bg-[#222222] text-[#FAF3E1] font-bold'
                      : 'text-[#222222]/70 hover:text-[#222222]'
                  }`}
                >
                  Panoramic
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('dual')}
                  className={`px-3 py-1 rounded-full uppercase tracking-wider transition-colors ${
                    viewMode === 'dual'
                      ? 'bg-[#222222] text-[#FAF3E1] font-bold'
                      : 'text-[#222222]/70 hover:text-[#222222]'
                  }`}
                >
                  Dual Stream
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INFINITE SCROLLING RUNWAY: SCROLLS SEAMLESSLY FROM LEFT TO RIGHT */}
      <section className="relative w-full overflow-hidden select-none my-6">
        {/* Subtle Edge Vignettes */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF3E1] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF3E1] to-transparent z-20 pointer-events-none" />

        {viewMode === 'panoramic' ? (
          /* Single Monumental Runway */
          <div className="py-4">
            <div
              className={`flex w-max animate-marquee-ltr ${
                isPaused ? '[animation-play-state:paused]' : 'hover:[animation-play-state:paused]'
              }`}
              style={{
                animationDuration: `${speedSeconds}s`,
                animationPlayState: isPaused ? 'paused' : undefined,
              }}
            >
              {primaryRepeated.map((design, idx) =>
                renderExhibit(design, `p-${design.id}-${idx}`, false)
              )}
            </div>
          </div>
        ) : (
          /* Dual Stream Runways (Both Scrolling Left-to-Right) */
          <div className="space-y-8 py-2">
            {/* Stream 1 */}
            <div
              className={`flex w-max animate-marquee-ltr ${
                isPaused ? '[animation-play-state:paused]' : 'hover:[animation-play-state:paused]'
              }`}
              style={{
                animationDuration: `${speedSeconds}s`,
                animationPlayState: isPaused ? 'paused' : undefined,
              }}
            >
              {row1Designs.map((design, idx) =>
                renderExhibit(design, `r1-${design.id}-${idx}`, true)
              )}
            </div>

            {/* Stream 2 (Offset Tempo, also scrolling Left-to-Right) */}
            <div
              className={`flex w-max animate-marquee-ltr ${
                isPaused ? '[animation-play-state:paused]' : 'hover:[animation-play-state:paused]'
              }`}
              style={{
                animationDuration: `${speedSecondsRow2}s`,
                animationPlayState: isPaused ? 'paused' : undefined,
              }}
            >
              {row2Designs.map((design, idx) =>
                renderExhibit(design, `r2-${design.id}-${idx}`, true)
              )}
            </div>
          </div>
        )}
      </section>

      {/* Editorial Instruction Note */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center my-8">
        <p className="font-mono text-xs text-[#222222]/50 uppercase tracking-widest">
          Hover any exhibit to pause &amp; inspect • Click to view in-depth case study
        </p>
      </div>

      {/* Design Philosophy Manifest Callout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mt-16">
        <div className="p-8 sm:p-12 bg-[#222222] text-[#FAF3E1] rounded-2xl relative overflow-hidden">
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
                to="/connect"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="px-6 py-3 rounded-full bg-[#FF6D1F] text-[#FAF3E1] font-bold uppercase tracking-wider hover:bg-[#FAF3E1] hover:text-[#222222] transition-colors"
              >
                COMMISSION A DESIGN WORK →
              </Link>
              <Link
                to="/about"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="px-6 py-3 rounded-full border border-[#FAF3E1]/20 hover:border-[#FF6D1F] hover:bg-[#FAF3E1]/10 text-[#FAF3E1] uppercase tracking-wider transition-colors"
              >
                READ CREATIVE MANIFESTO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
