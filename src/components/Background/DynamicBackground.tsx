import React from 'react';

export type BackgroundTheme = 'paper' | 'creative' | 'dark';

interface DynamicBackgroundProps {
  theme?: BackgroundTheme;
  className?: string;
  showGrid?: boolean;
  showNoise?: boolean;
  showRegistrationMarks?: boolean;
}

export const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  theme = 'paper',
  className = '',
  showGrid = true,
  showNoise = true,
  showRegistrationMarks = true,
}) => {
  // Theme-specific styles
  const themeClasses = {
    paper: 'bg-[#FAF3E1] text-[#222222]',
    creative: 'bg-[#F5E7C6] text-[#222222]',
    dark: 'bg-[#222222] text-[#FAF3E1]',
  }[theme];

  const gridLineColor = {
    paper: 'rgba(34, 34, 34, 0.04)',
    creative: 'rgba(34, 34, 34, 0.05)',
    dark: 'rgba(250, 243, 225, 0.04)',
  }[theme];

  const markColor = {
    paper: 'rgba(34, 34, 34, 0.2)',
    creative: '#FF6D1F',
    dark: 'rgba(255, 109, 31, 0.6)',
  }[theme];

  return (
    <div
      className={`fixed inset-0 pointer-events-none -z-10 transition-colors duration-700 ease-in-out ${themeClasses} ${className}`}
      aria-hidden="true"
    >
      {/* Delicate Swiss Grid Lines */}
      {showGrid && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${gridLineColor} 1px, transparent 1px),
              linear-gradient(to bottom, ${gridLineColor} 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      )}

      {/* Subtle Analog Paper Grain (Pure SVG Data URI, no HTTP request) */}
      {showNoise && (
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Swiss Editorial Registration Marks & Coordinates */}
      {showRegistrationMarks && (
        <>
          {/* Top-Left Coordinate */}
          <div className="absolute top-6 left-6 flex items-center gap-2 select-none opacity-40">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 0V12M0 6H12" stroke={markColor} strokeWidth="1" />
            </svg>
            <span className="font-mono text-[9px] tracking-widest uppercase">
              GRID: 48PX / LAT: 22.5726° N
            </span>
          </div>

          {/* Top-Right Registration */}
          <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 select-none opacity-40">
            <span className="font-mono text-[9px] tracking-widest uppercase">
              SYS // AK.2026
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="4.5" stroke={markColor} strokeWidth="1" />
              <path d="M6 0V12M0 6H12" stroke={markColor} strokeWidth="0.8" />
            </svg>
          </div>

          {/* Bottom-Left Micro Scale */}
          <div className="absolute bottom-6 left-6 hidden md:flex items-center gap-3 select-none opacity-40">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D1F]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#222222]/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#222222]/30" />
            </div>
            <span className="font-mono text-[9px] tracking-widest uppercase">
              AXIS: 0.00.1
            </span>
          </div>

          {/* Bottom-Right Crosshair */}
          <div className="absolute bottom-6 right-6 select-none opacity-40">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 0V14M0 7H14" stroke={markColor} strokeWidth="1" />
              <circle cx="7" cy="7" r="2" fill={markColor} />
            </svg>
          </div>
        </>
      )}

      {/* Creative Theme Geometric Accents */}
      {theme === 'creative' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#FF6D1F]/20 opacity-40" />
          <div className="absolute top-1/3 -left-20 w-60 h-60 border border-[#222222]/10 rotate-12 opacity-30" />
          <div className="absolute bottom-10 right-1/4 w-32 h-32 border-l-2 border-t-2 border-[#FF6D1F]/40" />
        </div>
      )}
    </div>
  );
};
