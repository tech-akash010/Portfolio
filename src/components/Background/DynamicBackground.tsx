import React from 'react';

export type BackgroundTheme = 'midnight' | 'lapis' | 'ocean' | 'editorial';

interface DynamicBackgroundProps {
  theme?: BackgroundTheme;
  className?: string;
  showGrid?: boolean;
  showNoise?: boolean;
  showRegistrationMarks?: boolean;
}

export const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  theme = 'midnight',
  className = '',
  showGrid = true,
  showNoise = true,
  showRegistrationMarks = true,
}) => {
  // Page-specific color themes from the 5-color palette:
  // midnight: #001d4a (Home & Tech)
  // lapis:    #27476e (Projects Archive & About)
  // ocean:    #006992 (Connect)
  // editorial:#eaf8bf (Design Dossier - light tactile paper)
  const themeClasses: Record<BackgroundTheme, string> = {
    midnight: 'bg-[#001d4a] text-[#eaf8bf]',
    lapis: 'bg-[#27476e] text-[#eaf8bf]',
    ocean: 'bg-[#006992] text-[#eaf8bf]',
    editorial: 'bg-[#eaf8bf] text-[#001d4a]',
  };

  const gridLineColor: Record<BackgroundTheme, string> = {
    midnight: 'rgba(234, 248, 191, 0.04)',
    lapis: 'rgba(234, 248, 191, 0.05)',
    ocean: 'rgba(234, 248, 191, 0.07)',
    editorial: 'rgba(0, 29, 74, 0.06)',
  };

  const markColor: Record<BackgroundTheme, string> = {
    midnight: 'rgba(236, 164, 0, 0.6)',
    lapis: '#eca400',
    ocean: '#eca400',
    editorial: '#006992',
  };

  return (
    <div
      className={`fixed inset-0 pointer-events-none -z-10 transition-colors duration-700 ease-in-out ${themeClasses[theme] || themeClasses.midnight} ${className}`}
      aria-hidden="true"
    >
      {/* Delicate Swiss Grid Lines */}
      {showGrid && (
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${gridLineColor[theme]} 1px, transparent 1px),
              linear-gradient(to bottom, ${gridLineColor[theme]} 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      )}

      {/* Subtle Analog Paper Grain (Pure SVG Data URI, no HTTP request) */}
      {showNoise && (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            theme === 'editorial' ? 'opacity-[0.035] mix-blend-multiply' : 'opacity-[0.03] mix-blend-screen'
          }`}
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
              <path d="M6 0V12M0 6H12" stroke={markColor[theme]} strokeWidth="1" />
            </svg>
            <span className="font-mono text-[9px] tracking-widest uppercase">
              GRID: 48PX / LAT: 22.5726° N
            </span>
          </div>

          {/* Top-Right Registration */}
          <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 select-none opacity-40">
            <span className="font-mono text-[9px] tracking-widest uppercase">
              SYS // AK.2026 // {theme.toUpperCase()}
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="4.5" stroke={markColor[theme]} strokeWidth="1" />
              <path d="M6 0V12M0 6H12" stroke={markColor[theme]} strokeWidth="0.8" />
            </svg>
          </div>

          {/* Bottom-Left Micro Scale */}
          <div className="absolute bottom-6 left-6 hidden md:flex items-center gap-3 select-none opacity-40">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#eca400]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#006992]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#27476e]" />
            </div>
            <span className="font-mono text-[9px] tracking-widest uppercase">
              AXIS: {theme === 'editorial' ? 'PAPER.01' : theme === 'ocean' ? 'OCEAN.01' : theme === 'lapis' ? 'SLATE.01' : 'CORE.01'}
            </span>
          </div>

          {/* Bottom-Right Crosshair */}
          <div className="absolute bottom-6 right-6 select-none opacity-40">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 0V14M0 7H14" stroke={markColor[theme]} strokeWidth="1" />
              <circle cx="7" cy="7" r="2" fill={markColor[theme]} />
            </svg>
          </div>
        </>
      )}

      {/* Atmospheric Theme-Specific Geometric Accents */}
      {theme === 'editorial' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#006992]/15 opacity-40" />
          <div className="absolute top-1/3 -left-20 w-60 h-60 border border-[#001d4a]/10 rotate-12 opacity-30" />
          <div className="absolute bottom-10 right-1/4 w-32 h-32 border-l-2 border-t-2 border-[#eca400]/40" />
        </div>
      )}

      {theme === 'ocean' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[#001d4a]/20 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-[#27476e]/30 blur-2xl" />
        </div>
      )}

      {theme === 'lapis' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-[#001d4a]/30 blur-2xl" />
          <div className="absolute bottom-1/3 -left-20 w-72 h-72 rounded-full bg-[#006992]/20 blur-2xl" />
        </div>
      )}
    </div>
  );
};

