import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import FlexCarousel, {
  FlexCarouselItem,
  FlexCarouselPreset,
} from '../../components/FlexCarousel';
import {
  Palette,
  ArrowUpRight,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';

const DESIGN_EXHIBITS: FlexCarouselItem[] = [
  {
    src: 'https://raw.githubusercontent.com/tech-akash010/portfolio-assets/main/ART%20of%20not%20giving%20SHIT.png',
    alt: 'The Art of Not Giving a Shit',
    title: 'The Art of Not Giving a Shit',
    subtitle: 'Editorial Typography & Swiss Chaos Grid',
  },
  {
    src: 'https://raw.githubusercontent.com/tech-akash010/portfolio-assets/main/Algo%20final.png',
    alt: 'Algo Design',
    title: 'Algo Design',
    subtitle: 'Algorithmic Geometry & Generative Identity',
  },
  {
    src: 'https://raw.githubusercontent.com/tech-akash010/portfolio-assets/main/BMW%20poster.png',
    alt: 'BMW Poster',
    title: 'BMW Poster',
    subtitle: 'Swiss Automotive Monograph',
  },
  {
    src: 'https://raw.githubusercontent.com/tech-akash010/portfolio-assets/main/Dsgn.png',
    alt: 'Dsgn Poster',
    title: 'Dsgn Poster',
    subtitle: 'Minimalist Baseline Grid & Type Scale',
  },
  {
    src: 'https://raw.githubusercontent.com/tech-akash010/portfolio-assets/main/Lewis%204.0.png',
    alt: 'Lewis 4.0',
    title: 'Lewis 4.0',
    subtitle: 'Motorsport Kinetic Typographic Poster',
  },
  {
    src: 'https://raw.githubusercontent.com/tech-akash010/portfolio-assets/main/Money%20Heist_coloured.png',
    alt: 'Money Heist Coloured',
    title: 'Money Heist Coloured',
    subtitle: 'Pop-Culture Narrative Visual Artwork',
  },
  {
    src: 'https://raw.githubusercontent.com/tech-akash010/portfolio-assets/main/Overthink.png',
    alt: 'Overthink',
    title: 'Overthink',
    subtitle: 'Dark Monochromatic Psychological Study',
  },
  {
    src: 'https://raw.githubusercontent.com/tech-akash010/portfolio-assets/main/Virat-kohli.png',
    alt: 'Virat Kohli',
    title: 'Virat Kohli',
    subtitle: 'Editorial Athlete Iconography',
  },
  {
    src: 'https://raw.githubusercontent.com/tech-akash010/portfolio-assets/main/crsl1.png',
    alt: 'Creative Carousel',
    title: 'Creative Carousel',
    subtitle: 'Multi-Slide Visual System',
  },
  {
    src: 'https://raw.githubusercontent.com/tech-akash010/portfolio-assets/main/leonardo%20dicaprio.png',
    alt: 'Leonardo DiCaprio',
    title: 'Leonardo DiCaprio',
    subtitle: 'Cinematic Portrait & Type Experiment',
  },
];

const PRESETS: { id: FlexCarouselPreset; label: string; desc: string }[] = [
  { id: 'liquid', label: 'Liquid', desc: 'Fluid glass refraction & dispersion' },
  { id: 'ribbon', label: 'Ribbon', desc: 'Symmetrical cylindrical ribbon flow' },
  { id: 'vortex', label: 'Vortex', desc: '30° tilted helical vortex lens' },
  { id: 'arch', label: 'Arch', desc: 'Vertical parabolic rising arch' },
];

export const DesignProjectsPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [currentPreset, setCurrentPreset] = useState<FlexCarouselPreset>('liquid');
  const [activeItem, setActiveItem] = useState<FlexCarouselItem>(DESIGN_EXHIBITS[0]);

  return (
    <div className="pt-32 sm:pt-36 md:pt-40 pb-24 min-h-screen text-[#ffffff]">
      {/* Top Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-8 sm:mb-10">
        <div className="border-b border-[#ffffff]/15 pb-8 sm:pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#fca311] mb-3 font-semibold">
              <Palette className="w-3.5 h-3.5 text-[#fca311]" />
              <span>VISUAL DOSSIER // LIQUID GLASS CAROUSEL</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#ffffff] leading-[0.9]">
              DESIGN DOSSIER<span className="text-[#fca311]">.</span>
            </h1>
            <p className="font-editorial italic text-xl sm:text-2xl text-[#e5e5e5]/80 mt-3 max-w-2xl font-normal leading-relaxed">
              An infinite visual continuum of Swiss poster explorations, kinetic typography, and art-directed identities flowing through invisible liquid glass.
            </p>
          </div>

          {/* Interactive Bending Preset Switcher */}
          <div className="flex flex-col sm:items-end gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#e5e5e5]/60 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3 h-3 text-[#fca311]" />
              <span>Liquid Glass Presets</span>
            </span>
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#14213d]/60 border border-[#ffffff]/15">
              {PRESETS.map((p) => {
                const isActive = currentPreset === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setCurrentPreset(p.id)}
                    className={`relative px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer z-10 ${
                      isActive ? 'text-[#000000] font-bold' : 'text-[#e5e5e5]/70 hover:text-[#ffffff]'
                    }`}
                    title={p.desc}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activePresetPill"
                        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                        className="absolute inset-0 bg-[#fca311] rounded-full z-[-1] shadow-md shadow-[#fca311]/25"
                      />
                    )}
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Flex Carousel WebGL Stage - Borderless, full-bleed fluid liquid glass row */}
      <div className="w-full relative mb-10 sm:mb-14 overflow-hidden">
        {/* WebGL Canvas Viewport - Unboxed, seamlessly embedded in black background */}
        <div className="relative w-full h-[620px] sm:h-[700px] md:h-[760px] lg:h-[820px]">
          {/* Interactive WebGL Liquid Glass Flex Carousel */}
          <FlexCarousel
            items={DESIGN_EXHIBITS}
            preset={currentPreset}
            intro="rise"
            cardHeight={0.64}
            gap={24}
            radius={18}
            fit="portrait"
            focusOnClick={true}
            captions={true}
            squeeze={0.22}
            captureWheel={true}
            onChange={(_, item) => setActiveItem(item)}
            className="h-full w-full"
          />
        </div>

        {/* Footnote Telemetry Bar */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between pt-6 font-mono text-xs text-[#e5e5e5]/50 gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#fca311]" />
            <span>RENDERED VIA OGL CHROMATIC REFRACTION SHADERS &amp; REAL-TIME LIQUID GLASS LENS</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">DRAG OR SCROLL TO FLOW • CLICK TO FOCUS</span>
            <span>PRESS ESC TO CLOSE</span>
          </div>
        </div>
      </div>

      {/* Creative Perspective Manifest Callout - Deep Anchor Card */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mt-16 sm:mt-24">
        <div className="p-8 sm:p-14 bg-[#14213d]/30 text-[#ffffff] rounded-3xl relative overflow-hidden border border-[#ffffff]/15 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fca311]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#fca311] block mb-3 font-semibold">
              CREATIVE PERSPECTIVE
            </span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              FORM FOLLOWS INTENTION<span className="text-[#fca311]">.</span>
            </h3>
            <p className="font-editorial italic text-xl sm:text-2xl text-[#e5e5e5]/80 mt-4 leading-relaxed font-normal">
              "Design is not decoration applied onto engineering; it is the cognitive architecture through which humans interface with thought, data, and technology."
            </p>
            <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
              <Link
                to="/connect"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#fca311] text-[#000000] font-bold uppercase tracking-wider hover:bg-[#ffffff] hover:text-[#000000] transition-colors"
              >
                <span>COMMISSION A DESIGN WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#ffffff]/20 hover:border-[#fca311] hover:bg-[#ffffff]/10 text-[#ffffff] uppercase tracking-wider transition-colors"
              >
                <span>STUDIO DOSSIER</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
