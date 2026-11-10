import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../CustomCursor/CursorContext';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Design Portfolio', path: '/projects/design' },
    { name: 'Tech Projects', path: '/projects/technology' },
    { name: 'About Me', path: '/about' },
    { name: 'Connect', path: '/connect' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/akashkundu', handle: '@akashkundu' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/akashkundu', handle: 'in/akashkundu' },
    { name: 'Instagram', url: 'https://instagram.com/akashkundu', handle: '@akashkundu.design' },
    { name: 'Email', url: 'mailto:contact@akashkundu.dev', handle: 'contact@akashkundu.dev' },
  ];

  return (
    <footer className="relative bg-[#222222] text-[#FAF3E1] border-t border-[#FAF3E1]/15 overflow-hidden">
      {/* Subtle Swiss grid in footer */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(250, 243, 225, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(250, 243, 225, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-16 pb-12">
        {/* Massive Brand Watermark */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#FAF3E1]/15 pb-12 gap-8">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#FF6D1F] uppercase block mb-2">
              PORTFOLIO ARCHIVE // 2026
            </span>
            <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#FAF3E1] leading-none">
              AK<span className="text-[#FF6D1F]">.</span>
            </h2>
            <p className="font-editorial italic text-xl md:text-2xl text-[#FAF3E1]/70 mt-3 max-w-md">
              A Mind in Motion. Think. Create. Build.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="group self-start md:self-auto flex items-center gap-3 px-5 py-3 rounded-full border border-[#FAF3E1]/30 hover:border-[#FF6D1F] hover:bg-[#FF6D1F]/10 transition-all duration-300"
            aria-label="Back to top"
          >
            <span className="font-mono text-xs tracking-wider uppercase text-[#FAF3E1] group-hover:text-[#FF6D1F]">
              BACK TO TOP
            </span>
            <div className="w-8 h-8 rounded-full bg-[#FAF3E1] text-[#222222] flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:bg-[#FF6D1F] group-hover:text-[#FAF3E1]">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Middle Navigation & Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-[#FAF3E1]/15">
          {/* Col 1: Navigation */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-mono text-[11px] tracking-widest text-[#FF6D1F] uppercase block mb-4">
              SITEMAP
            </span>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-6">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={resetCursor}
                  className="font-mono text-xs text-[#FAF3E1]/75 hover:text-[#FF6D1F] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#FF6D1F]/50 text-[10px]">/</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2: Social & Contact */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[11px] tracking-widest text-[#FF6D1F] uppercase block mb-4">
              CHANNELS
            </span>
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorType('external')}
                  onMouseLeave={resetCursor}
                  className="group flex items-center justify-between font-mono text-xs text-[#FAF3E1]/75 hover:text-[#FAF3E1] py-1 border-b border-[#FAF3E1]/5"
                >
                  <span className="group-hover:text-[#FF6D1F] transition-colors">
                    {social.name}
                  </span>
                  <span className="text-[11px] text-[#FAF3E1]/40 flex items-center gap-1 group-hover:text-[#FAF3E1]">
                    {social.handle}
                    <ArrowUpRight className="w-3 h-3 group-hover:text-[#FF6D1F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Colophon & Philosophy */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs text-[#FAF3E1]/60">
            <span className="font-mono text-[11px] tracking-widest text-[#FF6D1F] uppercase block mb-4">
              COLOPHON
            </span>
            <p className="leading-relaxed text-[11px]">
              Art-directed digital experience. Engineered with React 19, TypeScript, Tailwind CSS, Motion & GSAP.
            </p>
            <div className="pt-2 text-[10px] space-y-1 text-[#FAF3E1]/40">
              <div>TYPE: Space Grotesk, Inter, Space Mono, Playfair</div>
              <div>PALETTE: #FAF3E1 / #F5E7C6 / #FF6D1F / #222222</div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-[#FAF3E1]/50 gap-4">
          <div>
            © {new Date().getFullYear()} AKASH KUNDU (AK). ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF6D1F]" />
            <span>DESIGNED & CODED WITH INTENT — INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
