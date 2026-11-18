import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ArrowUpRight,
} from 'lucide-react';

interface DesignExhibit {
  id: string;
  image: string;
  alt: string;
}

const DESIGN_EXHIBITS: DesignExhibit[] = [
  {
    id: '01',
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/ART%20of%20not%20giving%20SHIT.png?raw=true',
    alt: 'The Art of Not Giving a Shit',
  },
  {
    id: '02',
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Algo%20final.png?raw=true',
    alt: 'Algo Design',
  },
  {
    id: '03',
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/BMW%20poster.png?raw=true',
    alt: 'BMW Poster',
  },
  {
    id: '04',
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Dsgn.png?raw=true',
    alt: 'Dsgn Poster',
  },
  {
    id: '05',
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Lewis%204.0.png?raw=true',
    alt: 'Lewis 4.0',
  },
  {
    id: '06',
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Money%20Heist_coloured.png?raw=true',
    alt: 'Money Heist Coloured',
  },
  {
    id: '07',
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Overthink.png?raw=true',
    alt: 'Overthink',
  },
  {
    id: '08',
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Virat-kohli.png?raw=true',
    alt: 'Virat Kohli',
  },
  {
    id: '09',
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/crsl1.png?raw=true',
    alt: 'Creative Carousel',
  },
  {
    id: '10',
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/leonardo%20dicaprio.png?raw=true',
    alt: 'Leonardo DiCaprio',
  },
];

export const DesignProjectsPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const filmstripRef = useRef<HTMLDivElement>(null);

  const activeExhibit = DESIGN_EXHIBITS[currentIndex];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + DESIGN_EXHIBITS.length) % DESIGN_EXHIBITS.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % DESIGN_EXHIBITS.length);
  }, []);

  // Keyboard navigation (← / → and Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Keep active thumbnail centered in filmstrip
  useEffect(() => {
    const container = filmstripRef.current;
    if (container && container.children[currentIndex]) {
      const activeEl = container.children[currentIndex] as HTMLElement;
      activeEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [currentIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  return (
    <div className="pt-32 sm:pt-36 md:pt-40 pb-24 min-h-screen text-[#FAF3E1]">
      {/* Top Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-10 sm:mb-12">
        <div className="border-b border-[#FAF3E1]/15 pb-8 sm:pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#FAF3E1] leading-[0.88]">
              DESIGN DOSSIER<span className="text-[#FF6D1F]">.</span>
            </h1>
            <p className="font-editorial italic text-2xl sm:text-3xl text-[#FAF3E1]/70 mt-4 max-w-2xl font-normal leading-relaxed">
              A curated collection of poster design, typography, and visual art direction.
            </p>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-4 font-mono text-xs">
            <span className="text-[#FAF3E1]/60 tracking-wider">
              <strong className="text-[#FF6D1F] font-bold">{activeExhibit.id}</strong> / {DESIGN_EXHIBITS.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="p-2.5 rounded-full bg-[#FAF3E1]/10 border border-[#FAF3E1]/15 hover:bg-[#FF6D1F] hover:text-[#FAF3E1] transition-colors"
                title="Previous (←)"
                aria-label="Previous artwork"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="p-2.5 rounded-full bg-[#FAF3E1]/10 border border-[#FAF3E1]/15 hover:bg-[#FF6D1F] hover:text-[#FAF3E1] transition-colors"
                title="Next (→)"
                aria-label="Next artwork"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Spotlight Stage */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-10 sm:mb-12">
        <div className="relative w-full h-[520px] sm:h-[640px] md:h-[740px] bg-[#FAF3E1]/5 rounded-3xl border border-[#FAF3E1]/15 overflow-hidden flex items-center justify-center p-6 sm:p-12 shadow-2xl">
          {/* Subtle Graphic Grid Lines */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(250, 243, 225, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(250, 243, 225, 0.08) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Large Floating Stage Left / Right Controls */}
          <button
            type="button"
            onClick={handlePrev}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="absolute left-3 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-[#222222]/80 border border-[#FAF3E1]/20 text-[#FAF3E1] hover:bg-[#FF6D1F] hover:border-[#FF6D1F] transition-all duration-300 shadow-xl backdrop-blur-sm"
            title="Previous (←)"
            aria-label="Previous exhibit"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="absolute right-3 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-[#222222]/80 border border-[#FAF3E1]/20 text-[#FAF3E1] hover:bg-[#FF6D1F] hover:border-[#FF6D1F] transition-all duration-300 shadow-xl backdrop-blur-sm"
            title="Next (→)"
            aria-label="Next exhibit"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Central Active Artwork Presentation */}
          <div
            className="relative z-10 w-full h-full flex items-center justify-center cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
            onMouseEnter={() => setCursorType('project', 'EXPAND')}
            onMouseLeave={resetCursor}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeExhibit.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                src={activeExhibit.image}
                alt={activeExhibit.alt}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('github.com') && target.src.includes('/blob/')) {
                    target.src = target.src
                      .replace('github.com', 'raw.githubusercontent.com')
                      .replace('/blob/', '/');
                  }
                }}
                className="max-h-full max-w-full object-contain rounded-xl drop-shadow-2xl select-none"
              />
            </AnimatePresence>
          </div>

          {/* Corner Controls */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#222222]/80 border border-[#FAF3E1]/20 text-[#FAF3E1] font-mono text-xs uppercase tracking-wider hover:bg-[#FF6D1F] hover:border-[#FF6D1F] transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Screen</span>
            </button>
          </div>

          <div className="absolute bottom-4 left-4 z-20">
            <span className="font-mono text-xs text-[#FAF3E1]/70 px-3 py-1.5 rounded-full bg-[#222222]/80 border border-[#FAF3E1]/15 backdrop-blur-sm">
              EXHIBIT <strong className="text-[#FF6D1F]">{activeExhibit.id}</strong> / {DESIGN_EXHIBITS.length}
            </span>
          </div>
        </div>
      </div>

      {/* Filmstrip Runway Selector */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 mb-24">
        {/* Filmstrip Top Label */}
        <div className="flex items-center justify-between font-mono text-xs text-[#FAF3E1]/50 uppercase tracking-widest pb-3 mb-2 border-b border-[#FAF3E1]/10">
          <span>FILMSTRIP SELECTOR</span>
          <span className="hidden sm:inline text-[11px] text-[#FAF3E1]/40">Use keyboard ← / → to switch</span>
        </div>

        {/* Horizontal Filmstrip Cards */}
        <div
          ref={filmstripRef}
          className="flex items-center gap-3 sm:gap-4 overflow-x-auto scrollbar-none py-3 px-1"
          style={{ scrollbarWidth: 'none' }}
        >
          {DESIGN_EXHIBITS.map((exhibit, index) => {
            const isSelected = index === currentIndex;

            return (
              <button
                key={exhibit.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className={`group relative shrink-0 w-24 sm:w-28 md:w-32 h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden border-2 transition-all duration-300 p-2 bg-[#FAF3E1]/5 cursor-pointer ${
                  isSelected
                    ? 'border-[#FF6D1F] scale-105 shadow-xl shadow-[#FF6D1F]/20'
                    : 'border-[#FAF3E1]/15 opacity-60 hover:opacity-100 hover:border-[#FAF3E1]/40'
                }`}
                title={exhibit.alt}
                aria-label={`Select exhibit ${exhibit.id}`}
              >
                <img
                  src={exhibit.image}
                  alt={exhibit.alt}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes('github.com') && target.src.includes('/blob/')) {
                      target.src = target.src
                        .replace('github.com', 'raw.githubusercontent.com')
                        .replace('/blob/', '/');
                    }
                  }}
                  className="w-full h-full object-contain pointer-events-none select-none drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />

                <div
                  className={`absolute bottom-1.5 right-1.5 font-mono text-[9px] px-1.5 py-0.5 rounded ${
                    isSelected
                      ? 'bg-[#FF6D1F] text-[#FAF3E1] font-bold'
                      : 'bg-[#222222]/80 text-[#FAF3E1]/70'
                  }`}
                >
                  {exhibit.id}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Creative Perspective Manifest Callout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="p-8 sm:p-14 bg-[#FAF3E1]/5 text-[#FAF3E1] rounded-3xl relative overflow-hidden border border-[#FAF3E1]/15">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6D1F]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6D1F] block mb-3">
              CREATIVE PERSPECTIVE
            </span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              FORM FOLLOWS INTENTION<span className="text-[#FF6D1F]">.</span>
            </h3>
            <p className="font-editorial italic text-xl sm:text-2xl text-[#FAF3E1]/80 mt-4 leading-relaxed font-normal">
              "Design is not decoration applied onto engineering; it is the cognitive architecture through which humans interface with thought, data, and technology."
            </p>
            <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
              <Link
                to="/connect"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FF6D1F] text-[#FAF3E1] font-bold uppercase tracking-wider hover:bg-[#FAF3E1] hover:text-[#222222] transition-colors"
              >
                <span>COMMISSION A DESIGN WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#FAF3E1]/20 hover:border-[#FF6D1F] hover:bg-[#FAF3E1]/10 text-[#FAF3E1] uppercase tracking-wider transition-colors"
              >
                <span>STUDIO DOSSIER</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#222222]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Modal Top Bar */}
            <div
              className="flex items-center justify-between text-[#FAF3E1] font-mono text-xs uppercase tracking-wider z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF6D1F]" />
                <span>
                  EXHIBIT {activeExhibit.id} OF {DESIGN_EXHIBITS.length}
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-2.5 rounded-full bg-[#FAF3E1]/10 hover:bg-[#FF6D1F] text-[#FAF3E1] transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central High-Resolution Artwork Stage */}
            <div
              className="relative my-auto flex items-center justify-center max-h-[82vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-[#FAF3E1]/10 hover:bg-[#FF6D1F] text-[#FAF3E1] transition-colors shadow-lg"
                title="Previous (←)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={activeExhibit.id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                src={activeExhibit.image}
                alt={activeExhibit.alt}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('github.com') && target.src.includes('/blob/')) {
                    target.src = target.src
                      .replace('github.com', 'raw.githubusercontent.com')
                      .replace('/blob/', '/');
                  }
                }}
                className="max-h-[80vh] max-w-[88vw] object-contain rounded-xl drop-shadow-2xl select-none"
              />

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-[#FAF3E1]/10 hover:bg-[#FF6D1F] text-[#FAF3E1] transition-colors shadow-lg"
                title="Next (→)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Bottom Keyboard Hint */}
            <div
              className="text-center font-mono text-[11px] text-[#FAF3E1]/50 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              Use <kbd className="px-1.5 py-0.5 bg-[#FAF3E1]/10 rounded text-[#FAF3E1]/80">←</kbd> /{' '}
              <kbd className="px-1.5 py-0.5 bg-[#FAF3E1]/10 rounded text-[#FAF3E1]/80">→</kbd> to navigate,{' '}
              <kbd className="px-1.5 py-0.5 bg-[#FAF3E1]/10 rounded text-[#FAF3E1]/80">ESC</kbd> to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
