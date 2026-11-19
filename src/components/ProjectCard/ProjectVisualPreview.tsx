import React from 'react';

interface ProjectVisualPreviewProps {
  slug: string;
  className?: string;
  interactive?: boolean;
}

const DESIGN_ARTWORKS: Record<string, { image: string; alt: string }> = {
  'kinetic-type-poster-lab': {
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/ART%20of%20not%20giving%20SHIT.png?raw=true',
    alt: 'The Art of Not Giving a Shit',
  },
  'aether-identity-system': {
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Algo%20final.png?raw=true',
    alt: 'Algo Design System',
  },
  'neo-kolkata-illustrated': {
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/BMW%20poster.png?raw=true',
    alt: 'BMW Poster',
  },
  'nexus-design-system': {
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Dsgn.png?raw=true',
    alt: 'Dsgn Poster',
  },
  'gdg-campus-brand-kit': {
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Lewis%204.0.png?raw=true',
    alt: 'Lewis 4.0',
  },
  'abstract-monolith-print': {
    image: 'https://github.com/tech-akash010/portfolio-assets/blob/main/Money%20Heist_coloured.png?raw=true',
    alt: 'Money Heist Coloured',
  },
};

export const ProjectVisualPreview: React.FC<ProjectVisualPreviewProps> = ({
  slug,
  className = '',
}) => {
  if (DESIGN_ARTWORKS[slug]) {
    const artwork = DESIGN_ARTWORKS[slug];
    return (
      <div className={`relative w-full h-full bg-[#14213d] p-4 flex items-center justify-center overflow-hidden select-none border border-[#ffffff]/15 ${className}`}>
        <img
          src={artwork.image}
          alt={artwork.alt}
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes('github.com') && target.src.includes('/blob/')) {
              target.src = target.src
                .replace('github.com', 'raw.githubusercontent.com')
                .replace('/blob/', '/');
            }
          }}
          className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 hover:scale-105 pointer-events-none"
        />
      </div>
    );
  }

  switch (slug) {
    case 'openlearn-hub':
      return (
        <div className={`relative w-full h-full bg-[#14213d] text-[#ffffff] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          {/* Top IDE Bar */}
          <div className="flex items-center justify-between border-b border-[#ffffff]/15 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fca311]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff]/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffffff]/30" />
              <span className="font-mono text-[10px] text-[#e5e5e5]/60 ml-2">openlearn-hub / workspace</span>
            </div>
            <span className="font-mono text-[9px] bg-[#fca311]/20 text-[#fca311] px-2 py-0.5 rounded">
              v1.4 // LIVE
            </span>
          </div>

          {/* Code Visual Lines & Graph */}
          <div className="grid grid-cols-12 gap-4 my-auto py-4">
            <div className="col-span-7 font-mono text-[11px] leading-relaxed space-y-1 text-[#e5e5e5]/80">
              <div className="text-[#fca311]">const curriculum = await syncPrerequisites();</div>
              <div className="text-[#e5e5e5]/40">// Traversing semester graph nodes...</div>
              <div>
                <span className="text-[#fca311]">export default</span> function KnowledgeGraph() &#123;
              </div>
              <div className="pl-4 text-[#e5e5e5]/70">
                return &lt;<span className="text-[#fca311]">GraphCanvas</span> nodes=&#123;dsaTree&#125; /&gt;;
              </div>
              <div>&#125;</div>
            </div>

            {/* Knowledge Nodes Representation */}
            <div className="col-span-5 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-24">
                <line x1="20" y1="20" x2="50" y2="50" stroke="#fca311" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="80" y1="20" x2="50" y2="50" stroke="#ffffff" strokeWidth="1.5" opacity="0.3" />
                <line x1="50" y1="50" x2="30" y2="80" stroke="#fca311" strokeWidth="1.5" />
                <line x1="50" y1="50" x2="70" y2="80" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />
                <circle cx="20" cy="20" r="5" fill="#ffffff" />
                <circle cx="80" cy="20" r="4" fill="#ffffff" opacity="0.5" />
                <circle cx="50" cy="50" r="7" fill="#fca311" />
                <circle cx="30" cy="80" r="4" fill="#ffffff" />
                <circle cx="70" cy="80" r="5" fill="#ffffff" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Bottom Metric bar */}
          <div className="flex items-center justify-between border-t border-[#ffffff]/15 pt-3 font-mono text-[10px] text-[#e5e5e5]/60">
            <span>PEER REPUTATION: 99.4%</span>
            <span className="text-[#fca311]">120+ REVIEWS</span>
          </div>
        </div>
      );

    case 'concept-mirror':
      return (
        <div className={`relative w-full h-full bg-[#14213d] text-[#ffffff] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex items-center justify-between border-b border-[#ffffff]/15 pb-3">
            <span className="font-mono text-[10px] text-[#fca311] uppercase tracking-wider">
              CONCEPT MIRROR // SEMANTIC GRAPH
            </span>
            <span className="font-mono text-[9px] text-[#e5e5e5]/50">
              COGNITIVE REFLECTION
            </span>
          </div>

          {/* Interactive Semantic Graph & Reflection Plane */}
          <div className="my-auto py-2 relative flex items-center justify-center">
            <svg viewBox="0 0 200 90" className="w-full h-24">
              {/* Central Mirror Plane (dashed) */}
              <line x1="100" y1="5" x2="100" y2="85" stroke="#fca311" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
              
              {/* Left Domain (Abstract Concept Nodes) */}
              <circle cx="35" cy="45" r="14" fill="#14213d" stroke="#ffffff" strokeWidth="1.2" />
              <text x="35" y="48" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">ABSTRACT</text>

              <circle cx="70" cy="25" r="8" fill="#000000" stroke="#fca311" strokeWidth="1" />
              <circle cx="70" cy="65" r="9" fill="#000000" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />

              <line x1="48" y1="40" x2="63" y2="28" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />
              <line x1="48" y1="50" x2="62" y2="62" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" />

              {/* Reflection Rays across center */}
              <line x1="78" y1="25" x2="122" y2="25" stroke="#fca311" strokeWidth="1.2" strokeDasharray="2 2" />
              <line x1="79" y1="65" x2="121" y2="65" stroke="#fca311" strokeWidth="1.2" strokeDasharray="2 2" />

              {/* Right Domain (Reflected Mental Model Nodes) */}
              <circle cx="165" cy="45" r="14" fill="#fca311" />
              <text x="165" y="48" fill="#000000" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">INTUITION</text>

              <circle cx="130" cy="25" r="8" fill="#ffffff" />
              <circle cx="130" cy="65" r="9" fill="#fca311" opacity="0.7" />

              <line x1="152" y1="40" x2="137" y2="28" stroke="#fca311" strokeWidth="1.2" />
              <line x1="152" y1="50" x2="138" y2="62" stroke="#fca311" strokeWidth="1.2" />
            </svg>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-[#e5e5e5]/60 border-t border-[#ffffff]/15 pt-3">
            <span>SEMANTIC PRCS: 500+</span>
            <span className="text-[#fca311]">LATENCY: &lt;12MS</span>
          </div>
        </div>
      );

    case 'flashcards':
      return (
        <div className={`relative w-full h-full bg-[#14213d] text-[#ffffff] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex items-center justify-between border-b border-[#ffffff]/15 pb-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#fca311] font-semibold">
              FLASHCARDS // SM-2 STUDIO
            </span>
            <span className="font-mono text-[10px] text-[#e5e5e5]/50">
              ACTIVE RECALL
            </span>
          </div>

          {/* Minimalist Flashcard Surface */}
          <div className="my-auto py-2 flex flex-col items-center">
            <div className="w-full max-w-[220px] p-3 rounded-lg bg-[#000000]/80 border border-[#ffffff]/20 shadow-xl space-y-2">
              <div className="flex justify-between items-center text-[9px] font-mono text-[#e5e5e5]/50">
                <span>CARD #042 // SYSTEM_DESIGN</span>
                <span className="text-[#fca311] font-bold">INTERVAL: 6D</span>
              </div>
              <p className="font-mono text-xs text-[#ffffff] font-semibold">
                What guarantees Raft linearizability?
              </p>
              <div className="flex items-center justify-between pt-1 border-t border-[#ffffff]/10 text-[9px] font-mono text-[#e5e5e5]/40">
                <span>[SPACE] FLIP</span>
                <span className="text-[#fca311]">[1-4] GRADE</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] border-t border-[#ffffff]/15 pt-3 text-[#e5e5e5]/70">
            <span>STREAK: 34 DAYS</span>
            <span className="text-[#fca311]">RETENTION: 94.2%</span>
          </div>
        </div>
      );

    case 'structo':
      return (
        <div className={`relative w-full h-full bg-[#14213d] text-[#ffffff] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex items-center justify-between border-b border-[#ffffff]/15 pb-3">
            <span className="font-mono text-[10px] text-[#fca311] uppercase tracking-wider">
              STRUCTO // AST TOPOLOGY
            </span>
            <span className="font-mono text-[9px] text-[#e5e5e5]/50">
              60 FPS RENDERER
            </span>
          </div>

          {/* Interactive DAG Radar Diagram */}
          <div className="my-auto py-3 relative flex items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full h-28">
              {/* Concentric radar rings */}
              <circle cx="100" cy="60" r="50" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />
              <circle cx="100" cy="60" r="30" stroke="#fca311" strokeWidth="0.8" opacity="0.4" />
              <line x1="20" y1="60" x2="180" y2="60" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" />
              <line x1="100" y1="10" x2="100" y2="110" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" />

              {/* Connected node cluster */}
              <line x1="50" y1="40" x2="90" y2="60" stroke="#fca311" strokeWidth="1.5" />
              <line x1="90" y1="60" x2="140" y2="40" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
              <line x1="90" y1="60" x2="110" y2="90" stroke="#fca311" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="110" y1="90" x2="150" y2="80" stroke="#ffffff" strokeWidth="1" opacity="0.4" />

              {/* Circular warning node */}
              <circle cx="90" cy="60" r="7" fill="#fca311" />
              <circle cx="50" cy="40" r="4" fill="#ffffff" />
              <circle cx="140" cy="40" r="5" fill="#ffffff" opacity="0.7" />
              <circle cx="110" cy="90" r="6" fill="#fca311" />
              <circle cx="150" cy="80" r="3.5" fill="#ffffff" opacity="0.5" />

              <text x="100" y="105" fill="#fca311" fontSize="8" fontFamily="monospace">CYCLIC IMPORT DETECTED</text>
            </svg>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-[#e5e5e5]/60 border-t border-[#ffffff]/15 pt-3">
            <span>NODES: 1,482</span>
            <span className="text-[#fca311]">TARJAN'S SCC: OK</span>
          </div>
        </div>
      );

    case 'rayofroads':
      return (
        <div className={`relative w-full h-full bg-[#14213d] text-[#ffffff] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex items-center justify-between border-b border-[#ffffff]/15 pb-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#e5e5e5]/70">
              RAYOFROADS // CARTOGRAPHY
            </span>
            <span className="font-mono text-[10px] text-[#fca311] font-bold">
              ELEVATION +1,840M
            </span>
          </div>

          {/* Contour Lines Elevation Profile */}
          <div className="my-auto py-2">
            <svg viewBox="0 0 200 80" className="w-full h-24">
              {/* Mountain Contour Curves */}
              <path
                d="M 10 70 Q 50 10, 90 40 T 170 20 L 190 70 Z"
                fill="#000000"
                stroke="#ffffff"
                strokeWidth="1.2"
                opacity="0.6"
              />
              <path
                d="M 20 70 Q 70 30, 110 50 T 180 35"
                fill="none"
                stroke="#fca311"
                strokeWidth="2"
              />
              {/* Waypoint markers */}
              <circle cx="110" cy="50" r="4" fill="#fca311" />
              <circle cx="110" cy="50" r="7" stroke="#fca311" strokeWidth="1" fill="none" />
              <text x="120" y="48" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">
                SCENIC VISTA #04
              </text>
            </svg>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] border-t border-[#ffffff]/15 pt-3 text-[#e5e5e5]/70">
            <span>SCENIC SCORE: 9.6/10</span>
            <span className="text-[#fca311]">ROUTE: CURVATURE 84%</span>
          </div>
        </div>
      );

    case 'kinetic-type-poster-lab':
      return (
        <div className={`relative w-full h-full bg-[#14213d] text-[#ffffff] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-baseline border-b border-[#ffffff]/15 pb-2 font-mono text-[10px]">
            <span>POSTER LAB // SWISS 12C</span>
            <span className="text-[#fca311]">№ 01</span>
          </div>

          <div className="my-auto py-3">
            <h4 className="font-display text-4xl sm:text-5xl font-black tracking-tighter leading-none text-[#ffffff] uppercase">
              ENTROPY
            </h4>
            <div className="flex items-center gap-3 my-2">
              <span className="w-12 h-1 bg-[#fca311]" />
              <span className="font-editorial italic text-2xl text-[#ffffff]">in the Grid</span>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-[#e5e5e5]/60">
              JOSEF MÜLLER-BROCKMANN × CONTEMPORARY CODE
            </p>
          </div>

          <div className="flex justify-between items-center text-[9px] font-mono border-t border-[#ffffff]/15 pt-2 text-[#e5e5e5]/60">
            <span>70 × 100 CM SILKSCREEN</span>
            <span className="text-[#fca311]">#ffffff // #14213d // #fca311</span>
          </div>
        </div>
      );

    case 'aether-identity-system':
      return (
        <div className={`relative w-full h-full bg-[#14213d] text-[#ffffff] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-center border-b border-[#ffffff]/15 pb-2 font-mono text-[10px]">
            <span className="text-[#fca311]">AETHER STUDIO</span>
            <span className="opacity-50">BRAND ARCHITECTURE</span>
          </div>

          <div className="my-auto flex flex-col items-center justify-center py-4">
            <div className="relative w-20 h-20 border border-[#ffffff]/30 flex items-center justify-center">
              <div className="absolute inset-2 border border-[#fca311]" />
              <span className="font-display text-3xl font-black text-[#ffffff]">Æ</span>
            </div>
            <span className="font-editorial italic text-base text-[#e5e5e5]/80 mt-3">
              Generative Identity System
            </span>
          </div>

          <div className="flex justify-between items-center text-[9px] font-mono border-t border-[#ffffff]/15 pt-2 text-[#e5e5e5]/50">
            <span>80-PAGE SPECIFICATION</span>
            <span className="text-[#fca311]">VARIABLE MONOGRAM</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative w-full h-full bg-[#14213d] text-[#ffffff] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-center border-b border-[#ffffff]/15 pb-2 font-mono text-[10px]">
            <span className="uppercase text-[#fca311]">CASE STUDY</span>
            <span className="opacity-50">{slug.toUpperCase()}</span>
          </div>
          <div className="my-auto py-4 text-center">
            <span className="font-display text-2xl font-bold tracking-tight block">
              Editorial Concept
            </span>
            <span className="font-mono text-xs text-[#e5e5e5]/60 mt-1 block">
              Design &amp; Technology Investigation
            </span>
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono border-t border-[#ffffff]/15 pt-2 text-[#e5e5e5]/50">
            <span>EXPLORATION</span>
            <span className="text-[#fca311]">AK.2026</span>
          </div>
        </div>
      );
  }
};

