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
      <div className={`relative w-full h-full bg-[#222222] p-4 flex items-center justify-center overflow-hidden select-none border border-[#FAF3E1]/15 ${className}`}>
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
        <div className={`relative w-full h-full bg-[#222222] text-[#FAF3E1] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          {/* Top IDE Bar */}
          <div className="flex items-center justify-between border-b border-[#FAF3E1]/15 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6D1F]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FAF3E1]/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FAF3E1]/30" />
              <span className="font-mono text-[10px] text-[#FAF3E1]/60 ml-2">openlearn-hub / workspace</span>
            </div>
            <span className="font-mono text-[9px] bg-[#FF6D1F]/20 text-[#FF6D1F] px-2 py-0.5 rounded">
              v1.4 // LIVE
            </span>
          </div>

          {/* Code Visual Lines & Graph */}
          <div className="grid grid-cols-12 gap-4 my-auto py-4">
            <div className="col-span-7 font-mono text-[11px] leading-relaxed space-y-1 text-[#FAF3E1]/80">
              <div className="text-[#FF6D1F]">const curriculum = await syncPrerequisites();</div>
              <div className="text-[#FAF3E1]/40">// Traversing semester graph nodes...</div>
              <div>
                <span className="text-[#FF6D1F]">export default</span> function KnowledgeGraph() &#123;
              </div>
              <div className="pl-4 text-[#FAF3E1]/70">
                return &lt;<span className="text-[#FF6D1F]">GraphCanvas</span> nodes=&#123;dsaTree&#125; /&gt;;
              </div>
              <div>&#125;</div>
            </div>

            {/* Knowledge Nodes Representation */}
            <div className="col-span-5 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-24">
                <line x1="20" y1="20" x2="50" y2="50" stroke="#FF6D1F" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="80" y1="20" x2="50" y2="50" stroke="#FAF3E1" strokeWidth="1.5" opacity="0.3" />
                <line x1="50" y1="50" x2="30" y2="80" stroke="#FF6D1F" strokeWidth="1.5" />
                <line x1="50" y1="50" x2="70" y2="80" stroke="#FAF3E1" strokeWidth="1.5" opacity="0.5" />
                <circle cx="20" cy="20" r="5" fill="#FAF3E1" />
                <circle cx="80" cy="20" r="4" fill="#FAF3E1" opacity="0.5" />
                <circle cx="50" cy="50" r="7" fill="#FF6D1F" />
                <circle cx="30" cy="80" r="4" fill="#FAF3E1" />
                <circle cx="70" cy="80" r="5" fill="#FAF3E1" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Bottom Metric bar */}
          <div className="flex items-center justify-between border-t border-[#FAF3E1]/15 pt-3 font-mono text-[10px] text-[#FAF3E1]/60">
            <span>PEER REPUTATION: 99.4%</span>
            <span className="text-[#FF6D1F]">120+ REVIEWS</span>
          </div>
        </div>
      );

    case 'sankalp':
      return (
        <div className={`relative w-full h-full bg-[#222222] text-[#FAF3E1] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex items-center justify-between border-b border-[#FAF3E1]/15 pb-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#FAF3E1]/70">
              COMMUNITY DIRECTORY // SANKALP
            </span>
            <span className="font-mono text-[10px] text-[#FF6D1F] font-bold">
              ● REAL-TIME DISPATCH
            </span>
          </div>

          <div className="my-auto py-4 space-y-3">
            <div className="p-3 bg-[#FAF3E1]/10 rounded border border-[#FAF3E1]/15 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#FF6D1F] block">EMERGENCY APPEAL</span>
                <span className="font-display font-bold text-sm text-[#FAF3E1]">Blood Group O- Required</span>
              </div>
              <span className="px-2 py-1 rounded bg-[#FF6D1F] text-[#FAF3E1] font-mono text-[10px]">
                URGENT
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 bg-[#FAF3E1]/5 rounded border border-[#FAF3E1]/10">
                <span className="text-[9px] text-[#FAF3E1]/60 block">VERIFIED DONORS</span>
                <span className="font-display font-bold text-base text-[#FAF3E1]">314 Active</span>
              </div>
              <div className="p-2.5 bg-[#FAF3E1]/5 rounded border border-[#FAF3E1]/10">
                <span className="text-[9px] text-[#FAF3E1]/60 block">RESPONSE TIME</span>
                <span className="font-display font-bold text-base text-[#FF6D1F]">11.4 Mins</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono border-t border-[#FAF3E1]/15 pt-3 text-[#FAF3E1]/60">
            <span>CAMPUS IMPACT INITIATIVE</span>
            <span>WB / 2025</span>
          </div>
        </div>
      );

    case 'structo':
      return (
        <div className={`relative w-full h-full bg-[#222222] text-[#FAF3E1] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex items-center justify-between border-b border-[#FAF3E1]/15 pb-3">
            <span className="font-mono text-[10px] text-[#FF6D1F] uppercase tracking-wider">
              STRUCTO // AST TOPOLOGY
            </span>
            <span className="font-mono text-[9px] text-[#FAF3E1]/50">
              60 FPS RENDERER
            </span>
          </div>

          {/* Interactive DAG Radar Diagram */}
          <div className="my-auto py-3 relative flex items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full h-28">
              {/* Concentric radar rings */}
              <circle cx="100" cy="60" r="50" stroke="#FAF3E1" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />
              <circle cx="100" cy="60" r="30" stroke="#FF6D1F" strokeWidth="0.8" opacity="0.4" />
              <line x1="20" y1="60" x2="180" y2="60" stroke="#FAF3E1" strokeWidth="0.5" opacity="0.2" />
              <line x1="100" y1="10" x2="100" y2="110" stroke="#FAF3E1" strokeWidth="0.5" opacity="0.2" />

              {/* Connected node cluster */}
              <line x1="50" y1="40" x2="90" y2="60" stroke="#FF6D1F" strokeWidth="1.5" />
              <line x1="90" y1="60" x2="140" y2="40" stroke="#FAF3E1" strokeWidth="1" opacity="0.5" />
              <line x1="90" y1="60" x2="110" y2="90" stroke="#FF6D1F" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="110" y1="90" x2="150" y2="80" stroke="#FAF3E1" strokeWidth="1" opacity="0.4" />

              {/* Circular warning node */}
              <circle cx="90" cy="60" r="7" fill="#FF6D1F" />
              <circle cx="50" cy="40" r="4" fill="#FAF3E1" />
              <circle cx="140" cy="40" r="5" fill="#FAF3E1" opacity="0.7" />
              <circle cx="110" cy="90" r="6" fill="#FF6D1F" />
              <circle cx="150" cy="80" r="3.5" fill="#FAF3E1" opacity="0.5" />

              <text x="100" y="105" fill="#FF6D1F" fontSize="8" fontFamily="monospace">CYCLIC IMPORT DETECTED</text>
            </svg>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-[#FAF3E1]/60 border-t border-[#FAF3E1]/15 pt-3">
            <span>NODES: 1,482</span>
            <span className="text-[#FF6D1F]">TARJAN'S SCC: OK</span>
          </div>
        </div>
      );

    case 'rayofroads':
      return (
        <div className={`relative w-full h-full bg-[#222222] text-[#FAF3E1] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex items-center justify-between border-b border-[#FAF3E1]/15 pb-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#FAF3E1]/70">
              RAYOFROADS // CARTOGRAPHY
            </span>
            <span className="font-mono text-[10px] text-[#FF6D1F] font-bold">
              ELEVATION +1,840M
            </span>
          </div>

          {/* Contour Lines Elevation Profile */}
          <div className="my-auto py-2">
            <svg viewBox="0 0 200 80" className="w-full h-24">
              {/* Mountain Contour Curves */}
              <path
                d="M 10 70 Q 50 10, 90 40 T 170 20 L 190 70 Z"
                fill="#2D2D2D"
                stroke="#FAF3E1"
                strokeWidth="1.2"
                opacity="0.6"
              />
              <path
                d="M 20 70 Q 70 30, 110 50 T 180 35"
                fill="none"
                stroke="#FF6D1F"
                strokeWidth="2"
              />
              {/* Waypoint markers */}
              <circle cx="110" cy="50" r="4" fill="#FF6D1F" />
              <circle cx="110" cy="50" r="7" stroke="#FF6D1F" strokeWidth="1" fill="none" />
              <text x="120" y="48" fill="#FAF3E1" fontSize="8" fontFamily="monospace" fontWeight="bold">
                SCENIC VISTA #04
              </text>
            </svg>
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] border-t border-[#FAF3E1]/15 pt-3 text-[#FAF3E1]/70">
            <span>SCENIC SCORE: 9.6/10</span>
            <span className="text-[#FF6D1F]">ROUTE: CURVATURE 84%</span>
          </div>
        </div>
      );

    case 'kinetic-type-poster-lab':
      return (
        <div className={`relative w-full h-full bg-[#222222] text-[#FAF3E1] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-baseline border-b border-[#FAF3E1]/15 pb-2 font-mono text-[10px]">
            <span>POSTER LAB // SWISS 12C</span>
            <span className="text-[#FF6D1F]">№ 01</span>
          </div>

          <div className="my-auto py-3">
            <h4 className="font-display text-4xl sm:text-5xl font-black tracking-tighter leading-none text-[#FAF3E1] uppercase">
              ENTROPY
            </h4>
            <div className="flex items-center gap-3 my-2">
              <span className="w-12 h-1 bg-[#FF6D1F]" />
              <span className="font-editorial italic text-2xl text-[#FAF3E1]">in the Grid</span>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-[#FAF3E1]/60">
              JOSEF MÜLLER-BROCKMANN × CONTEMPORARY CODE
            </p>
          </div>

          <div className="flex justify-between items-center text-[9px] font-mono border-t border-[#FAF3E1]/15 pt-2 text-[#FAF3E1]/60">
            <span>70 × 100 CM SILKSCREEN</span>
            <span className="text-[#FF6D1F]">#FAF3E1 // #222222 // #FF6D1F</span>
          </div>
        </div>
      );

    case 'aether-identity-system':
      return (
        <div className={`relative w-full h-full bg-[#222222] text-[#FAF3E1] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-center border-b border-[#FAF3E1]/15 pb-2 font-mono text-[10px]">
            <span className="text-[#FF6D1F]">AETHER STUDIO</span>
            <span className="opacity-50">BRAND ARCHITECTURE</span>
          </div>

          <div className="my-auto flex flex-col items-center justify-center py-4">
            <div className="relative w-20 h-20 border border-[#FAF3E1]/30 flex items-center justify-center">
              <div className="absolute inset-2 border border-[#FF6D1F]" />
              <span className="font-display text-3xl font-black text-[#FAF3E1]">Æ</span>
            </div>
            <span className="font-editorial italic text-base text-[#FAF3E1]/80 mt-3">
              Generative Identity System
            </span>
          </div>

          <div className="flex justify-between items-center text-[9px] font-mono border-t border-[#FAF3E1]/15 pt-2 text-[#FAF3E1]/50">
            <span>80-PAGE SPECIFICATION</span>
            <span className="text-[#FF6D1F]">VARIABLE MONOGRAM</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative w-full h-full bg-[#222222] text-[#FAF3E1] p-6 flex flex-col justify-between overflow-hidden select-none ${className}`}>
          <div className="flex justify-between items-center border-b border-[#FAF3E1]/15 pb-2 font-mono text-[10px]">
            <span className="uppercase text-[#FF6D1F]">CASE STUDY</span>
            <span className="opacity-50">{slug.toUpperCase()}</span>
          </div>
          <div className="my-auto py-4 text-center">
            <span className="font-display text-2xl font-bold tracking-tight block">
              Editorial Concept
            </span>
            <span className="font-mono text-xs text-[#FAF3E1]/60 mt-1 block">
              Design &amp; Technology Investigation
            </span>
          </div>
          <div className="flex justify-between items-center text-[9px] font-mono border-t border-[#FAF3E1]/15 pt-2 text-[#FAF3E1]/50">
            <span>EXPLORATION</span>
            <span className="text-[#FF6D1F]">AK.2026</span>
          </div>
        </div>
      );
  }
};

