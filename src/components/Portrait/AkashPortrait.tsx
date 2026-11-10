import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Camera, MapPin, Sliders, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface AkashPortraitProps {
  className?: string;
  variant?: 'hero' | 'about' | 'compact';
  showControls?: boolean;
}

type LensFilter = 'duotone' | 'natural' | 'editorial';

export const AkashPortrait: React.FC<AkashPortraitProps> = ({
  className = '',
  variant = 'hero',
  showControls = true,
}) => {
  const [lens, setLens] = useState<LensFilter>('duotone');
  const [imgSrcIndex, setImgSrcIndex] = useState(0);

  // Progressive image cascade:
  // 1. Local user photo in public/
  // 2. Akash Kundu's GitHub profile avatar
  // 3. Fallback vector editorial portrait
  const imageSources = [
    '/akash.jpg',
    '/akash.png',
    'https://github.com/akashkundu.png',
    '/akash-portrait.svg',
  ];

  const handleImageError = () => {
    if (imgSrcIndex < imageSources.length - 1) {
      setImgSrcIndex((prev) => prev + 1);
    }
  };

  const currentSrc = imageSources[imgSrcIndex];

  // CSS filter classes matching our strict 4-color palette
  const getFilterStyle = (): React.CSSProperties => {
    switch (lens) {
      case 'duotone':
        return {
          filter: 'contrast(1.15) brightness(0.95)',
        };
      case 'editorial':
        return {
          filter: 'grayscale(100%) contrast(1.25) brightness(0.9)',
        };
      case 'natural':
      default:
        return {
          filter: 'none',
        };
    }
  };

  return (
    <div className={`relative select-none ${className}`}>
      {/* Outer Swiss Frame with Dual Shadows */}
      <div className="relative bg-[#F5E7C6] border-2 border-[#222222] p-3.5 sm:p-4 rounded-xl shadow-[8px_8px_0px_0px_#222222] transition-transform duration-500 hover:shadow-[12px_12px_0px_0px_#FF6D1F]">
        {/* Frame Top Header */}
        <div className="flex items-center justify-between border-b border-[#222222]/20 pb-2.5 mb-3 font-mono text-[9px] sm:text-[10px] text-[#222222] uppercase tracking-wider">
          <div className="flex items-center gap-1.5 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FF6D1F] animate-pulse" />
            <span>FIGURE 01 // AKASH KUNDU</span>
          </div>

          <div className="flex items-center gap-2 text-[#222222]/70">
            <span className="hidden sm:inline">22.57° N, 88.36° E</span>
            <span className="text-[#FF6D1F] font-bold">● LIVE</span>
          </div>
        </div>

        {/* Image Canvas Container */}
        <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-[#222222] border border-[#222222]/30 group">
          {/* Halftone / Grid Texture Overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none z-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 50%, #FAF3E1 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Actual Photo */}
          <img
            src={currentSrc}
            alt="Akash Kundu — Designer & Technology Enthusiast"
            onError={handleImageError}
            style={getFilterStyle()}
            className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
            loading="eager"
          />

          {/* Duotone Color Tint Overlay for Swiss Mode */}
          {lens === 'duotone' && (
            <div
              className="absolute inset-0 mix-blend-color pointer-events-none z-10 opacity-30"
              style={{ backgroundColor: '#FF6D1F' }}
            />
          )}

          {/* Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/90 via-[#222222]/20 to-transparent pointer-events-none z-10" />

          {/* Floating Archive Stamps */}
          <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 font-mono text-[9px]">
            <span className="px-2 py-0.5 rounded bg-[#FAF3E1]/90 backdrop-blur-md text-[#222222] font-bold border border-[#222222]/20 shadow-sm flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#FF6D1F]" />
              <span>B.TECH CSE '28</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-[#222222]/80 backdrop-blur-md text-[#FAF3E1] border border-[#FAF3E1]/20 hidden sm:inline-block">
              GDG LEAD
            </span>
          </div>

          <div className="absolute top-3 right-3 z-20 font-mono text-[9px]">
            <span className="px-2 py-0.5 rounded bg-[#FF6D1F] text-[#FAF3E1] font-bold shadow-sm">
              AK.2026
            </span>
          </div>

          {/* Bottom Card Identity Strip */}
          <div className="absolute bottom-3 inset-x-3 z-20 flex items-end justify-between text-[#FAF3E1]">
            <div>
              <div className="font-display font-black text-xl sm:text-2xl leading-none text-[#FAF3E1] tracking-tight">
                Akash Kundu
              </div>
              <div className="font-mono text-[10px] text-[#FAF3E1]/80 mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#FF6D1F]" />
                <span>Kolkata, West Bengal</span>
              </div>
            </div>

            <span className="font-mono text-[9px] text-[#FF6D1F] font-bold px-2 py-0.5 rounded bg-[#222222]/90 border border-[#FF6D1F]/40">
              DES × TECH
            </span>
          </div>
        </div>

        {/* Interactive Lens Switcher Controls */}
        {showControls && (
          <div className="mt-3 pt-2.5 border-t border-[#222222]/15 flex items-center justify-between font-mono text-[10px]">
            <div className="flex items-center gap-1.5 text-[#222222]/70">
              <Camera className="w-3.5 h-3.5 text-[#FF6D1F]" />
              <span className="hidden sm:inline">LENS:</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setLens('duotone')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  lens === 'duotone'
                    ? 'bg-[#FF6D1F] text-[#FAF3E1] shadow-sm'
                    : 'bg-[#FAF3E1] text-[#222222] hover:bg-[#222222] hover:text-[#FAF3E1]'
                }`}
                title="Swiss Warm Duotone treatment"
              >
                DUOTONE
              </button>

              <button
                type="button"
                onClick={() => setLens('natural')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  lens === 'natural'
                    ? 'bg-[#222222] text-[#FAF3E1] shadow-sm'
                    : 'bg-[#FAF3E1] text-[#222222] hover:bg-[#222222] hover:text-[#FAF3E1]'
                }`}
                title="Natural photography"
              >
                NATURAL
              </button>

              <button
                type="button"
                onClick={() => setLens('editorial')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  lens === 'editorial'
                    ? 'bg-[#222222] text-[#FAF3E1] shadow-sm'
                    : 'bg-[#FAF3E1] text-[#222222] hover:bg-[#222222] hover:text-[#FAF3E1]'
                }`}
                title="High-contrast monochromatic editorial"
              >
                EDITORIAL
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
