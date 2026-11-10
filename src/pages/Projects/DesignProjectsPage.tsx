import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal
} from 'lucide-react';

interface DesignExhibit {
  id: string;
  image: string;
  slug: string;
  alt: string;
}

const DESIGN_EXHIBITS: DesignExhibit[] = [
  { id: '01', image: '/posters/poster-lab.png', slug: 'kinetic-type-poster-lab', alt: 'Kinetic Type Lab' },
  { id: '02', image: '/branding/aether-brand.png', slug: 'aether-identity-system', alt: 'Aether Identity' },
  { id: '03', image: '/illustrations/neo-kolkata.png', slug: 'neo-kolkata-illustrated', alt: 'Neo-Kolkata' },
  { id: '04', image: '/ui/nexus-ds.png', slug: 'nexus-design-system', alt: 'Nexus Design System' },
  { id: '05', image: '/branding/gdg-campus.png', slug: 'gdg-campus-brand-kit', alt: 'GDG Campus Brand' },
  { id: '06', image: '/experiments/monolith.png', slug: 'abstract-monolith-print', alt: 'Abstract Monolith' },
  { id: '07', image: '/posters/swiss-grid-74.png', slug: 'kinetic-type-poster-lab', alt: 'Swiss Grid 74' },
  { id: '08', image: '/branding/solaris-spatial.png', slug: 'nexus-design-system', alt: 'Solaris Spatial UI' },
  { id: '09', image: '/experiments/analog-glitch.png', slug: 'abstract-monolith-print', alt: 'Analog Disruption' },
  { id: '10', image: '/posters/bauhaus-form.png', slug: 'kinetic-type-poster-lab', alt: 'Bauhaus 2026' },
];

// Triplicated for seamless infinite wrapping in both scroll directions
const EXHIBITS_TRIPLED = [...DESIGN_EXHIBITS, ...DESIGN_EXHIBITS, ...DESIGN_EXHIBITS];

export const DesignProjectsPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const containerRef = useRef<HTMLDivElement>(null);

  // Drag & Scroll State
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Auto-scroll State
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [speed, setSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const interactionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll Progress (0 to 100%)
  const [scrollProgress, setScrollProgress] = useState(0);

  const speedValues = {
    slow: 35,
    normal: 65,
    fast: 125,
  };

  // Pause auto-scroll temporarily during interaction, resume after 2s of idle
  const notifyUserInteraction = useCallback(() => {
    setIsUserInteracting(true);
    if (interactionTimer.current) clearTimeout(interactionTimer.current);
    interactionTimer.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  }, []);

  // Initialize scroll position to the middle segment
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const timer = setTimeout(() => {
        if (container) {
          const segmentWidth = container.scrollWidth / 3;
          container.scrollLeft = segmentWidth;
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Infinite Scroll & Auto-motion Engine
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (container) {
        const totalWidth = container.scrollWidth;
        const segmentWidth = totalWidth / 3;

        if (segmentWidth > 0) {
          // Continuous seamless wrapping
          if (container.scrollLeft <= 0.2 * segmentWidth) {
            container.scrollLeft += segmentWidth;
          } else if (container.scrollLeft >= 2.2 * segmentWidth) {
            container.scrollLeft -= segmentWidth;
          }

          // Calculate normalized progress (0% - 100%) through single set
          const normalizedLeft = container.scrollLeft % segmentWidth;
          setScrollProgress((normalizedLeft / segmentWidth) * 100);

          // Auto-scroll from left to right (decreasing scrollLeft moves content rightwards)
          if (isAutoScrolling && !isDragging.current && !isUserInteracting) {
            const pxPerSec = speedValues[speed];
            container.scrollLeft -= pxPerSec * dt;
          }
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoScrolling, isUserInteracting, speed]);

  // Trackpad / Wheel Horizontal & Vertical Translation
  const handleWheel = (e: React.WheelEvent) => {
    if (!containerRef.current) return;
    notifyUserInteraction();

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 0) {
      containerRef.current.scrollLeft += delta;
    }
  };

  // Mouse Drag Events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.clientX;
    startScrollLeft.current = containerRef.current.scrollLeft;
    setIsGrabbing(true);
    notifyUserInteraction();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 5) {
      hasDragged.current = true;
    }
    containerRef.current.scrollLeft = startScrollLeft.current - dx;
    notifyUserInteraction();
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsGrabbing(false);
    setTimeout(() => {
      hasDragged.current = false;
    }, 60);
  };

  // Manual Step Buttons (Left / Right)
  const stepScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    notifyUserInteraction();
    const stepAmount = 460;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -stepAmount : stepAmount,
      behavior: 'smooth',
    });
  };

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
            {/* Left: Auto-scroll Toggle & Direction Indicator */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#222222] text-[#FAF3E1] font-mono text-xs uppercase tracking-wider hover:bg-[#FF6D1F] transition-colors shadow-sm"
                aria-label={isAutoScrolling ? 'Pause auto-scroll' : 'Resume auto-scroll'}
              >
                {isAutoScrolling ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Resume</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5E7C6] border border-[#222222]/15 font-mono text-xs text-[#222222]">
                <MoveHorizontal className="w-3.5 h-3.5 text-[#FF6D1F]" />
                <span className="font-bold">SCROLL OR DRAG</span>
              </div>
            </div>

            {/* Right: Step Arrow Buttons & Speed Selector */}
            <div className="flex items-center gap-3 font-mono text-xs">
              {/* Stepping Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => stepScroll('left')}
                  className="p-2 rounded-full bg-[#F5E7C6] border border-[#222222]/20 hover:bg-[#222222] hover:text-[#FAF3E1] transition-colors"
                  title="Scroll Left"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => stepScroll('right')}
                  className="p-2 rounded-full bg-[#F5E7C6] border border-[#222222]/20 hover:bg-[#222222] hover:text-[#FAF3E1] transition-colors"
                  title="Scroll Right"
                  aria-label="Scroll Right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Speed Buttons */}
              <div className="flex items-center bg-[#F5E7C6] p-1 rounded-full border border-[#222222]/15">
                {(['slow', 'normal', 'fast'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setSpeed(s);
                      notifyUserInteraction();
                    }}
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
            </div>
          </div>
        </div>
      </div>

      {/* INFINITE SCROLLABLE EXHIBIT RUNWAY: PURE ARTWORK */}
      <section className="relative w-full overflow-hidden select-none my-6">
        {/* Subtle Edge Vignettes */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF3E1] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF3E1] to-transparent z-20 pointer-events-none" />

        {/* Scrollable Container with native Wheel & Drag handling */}
        <div
          ref={containerRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex w-full overflow-x-auto scrollbar-none py-6 px-6 sm:px-12 touch-pan-x ${
            isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {EXHIBITS_TRIPLED.map((design, idx) => (
            <div key={`${design.id}-${idx}`} className="shrink-0 px-3 sm:px-5">
              <Link
                to={`/projects/design/${design.slug}`}
                onClick={(e) => {
                  if (hasDragged.current) {
                    e.preventDefault();
                  }
                }}
                onMouseEnter={() => {
                  if (!isDragging.current) {
                    setCursorType('project', 'VIEW CASE STUDY');
                  }
                }}
                onMouseLeave={resetCursor}
                className="group block relative w-[280px] sm:w-[360px] md:w-[440px] h-[440px] sm:h-[540px] md:h-[620px] bg-[#F5E7C6] rounded-2xl border border-[#222222]/15 overflow-hidden transition-all duration-500 hover:border-[#FF6D1F] hover:shadow-2xl hover:shadow-[#222222]/15 hover:-translate-y-2 p-4 sm:p-6 flex items-center justify-center cursor-pointer"
              >
                <img
                  src={design.image}
                  alt={design.alt}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-contain drop-shadow-md transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Minimalist Swiss Progress Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 my-6">
        <div className="w-full h-1 bg-[#222222]/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-[#FF6D1F] transition-all duration-150 rounded-full"
            style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
          />
        </div>
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
