import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCursor } from '../CustomCursor/CursorContext';
import { ArrowUp, ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const { pathname } = useLocation();
  const footerRef = useRef<HTMLElement>(null);
  const [isWaving, setIsWaving] = useState(false);
  const hasTriggeredInitialWave = useRef(false);

  // Footer is pure white background with black text across the site
  const footerBg = 'bg-[#ffffff] text-[#000000] border-t border-[#000000]/15';
  const bottomBarBg = 'bg-[#ffffff] border-t border-[#000000]/10 text-[#000000]/60';
  const letterFill = '#000000';
  const dividerColor = 'border-[#000000]/15';
  const textColor = 'text-[#000000]';
  const textMutedColor = 'text-[#000000]/70';
  const textSubtleColor = 'text-[#000000]/50';

  const triggerWave = () => {
    setIsWaving(true);
    setTimeout(() => {
      setIsWaving(false);
    }, 1200);
  };

  useEffect(() => {
    // IntersectionObserver to trigger wave whenever footer scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerWave();
        }
      },
      { rootMargin: '0px 0px 120px 0px', threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Trigger wave once shortly after mount if already visible
    const timer = setTimeout(() => {
      if (!hasTriggeredInitialWave.current) {
        hasTriggeredInitialWave.current = true;
        triggerWave();
      }
    }, 400);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const letterVariants = {
    idle: {
      y: 0,
      opacity: 1,
    },
    wave: (i: number) => ({
      y: [0, -26, 8, -3, 0],
      opacity: 1,
      transition: {
        duration: 0.95,
        delay: i * 0.08,
        times: [0, 0.38, 0.72, 0.88, 1],
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const letters = [
    {
      id: 'A1',
      name: 'A',
      d: 'M218.80 180L197 180L173.60 147L45.60 147L22.20 180L0.60 180L97.80 43.60L121.40 43.60L218.80 180M109.60 56.20L55 133.60L164.20 133.60L109.60 56.20',
    },
    {
      id: 'K',
      name: 'K',
      d: 'M252.80 140L252.80 180L234.80 180L234.80 43.60L252.80 43.60L252.80 123.60L291.60 98.20L381.80 43.60L408 43.60L320.20 99L410.60 180L386.40 180L305.20 107.80L252.80 140',
    },
    {
      id: 'A2',
      name: 'A',
      d: 'M636.80 180L615 180L591.60 147L463.60 147L440.20 180L418.60 180L515.80 43.60L539.40 43.60L636.80 180M527.60 56.20L473 133.60L582.20 133.60L527.60 56.20',
    },
    {
      id: 'S',
      name: 'S',
      d: 'M824.60 144.80Q824.60 158.60 817.30 166.50Q810 174.40 791.80 178.30Q773.60 182.20 741.20 182.20Q719.20 182.20 693.60 179.50Q668 176.80 650 173L652.80 158Q671.80 162 697.60 164.70Q723.40 167.40 744.80 167.40Q770.80 167.40 784.40 164.90Q798 162.40 802.60 157.80Q807.20 153.20 807.20 144.40Q807.20 132.20 800.50 127.90Q793.80 123.60 777 121.60L698.40 114Q672.40 111.80 660.20 104.20Q648 96.60 648 78.80Q648 58.40 666.30 49.90Q684.60 41.40 730 41.40Q750 41.40 775.30 43.90Q800.60 46.40 818.60 50.20L815.60 64.60Q798.20 61.20 772.50 58.70Q746.80 56.20 726.80 56.20Q701.20 56.20 687.90 58.50Q674.60 60.80 669.90 65.30Q665.20 69.80 665.20 78.40Q665.20 89.20 672.60 93.20Q680 97.20 697.60 99L773.80 106.40Q786.60 107.60 795.10 109.60Q803.60 111.60 810.70 115.70Q817.80 119.80 821.20 127Q824.60 134.20 824.60 144.80',
    },
    {
      id: 'H',
      name: 'H',
      d: 'M869.80 116.60L869.80 180L851.80 180L851.80 43.60L869.80 43.60L869.80 101L1016.40 101L1016.40 43.60L1034.40 43.60L1034.40 180L1016.40 180L1016.40 116.60',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/tech-akash010',
      handle: '@tech-akash010',
      category: 'CODE ARCHIVE',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/akashkundu010/',
      handle: 'in/akashkundu010',
      category: 'PROFESSIONAL',
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/officialak_X',
      handle: '@officialak_X',
      category: 'LOGS & THOUGHTS',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/0x.akash/',
      handle: '@0x.akash',
      category: 'VISUAL LAB',
    },
    {
      name: 'Email',
      url: 'mailto:contact@akashkundu.dev',
      handle: 'contact@akashkundu.dev',
      category: 'DIRECT INQUIRY',
    },
  ];



  return (
    <footer ref={footerRef} className={`relative ${footerBg} overflow-hidden transition-colors duration-500`}>
      {/* Subtle Swiss grid in footer background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-16 pb-6">
        {/* Top Info Strip: Perspective + Back to Top */}
        <div className={`flex flex-col md:flex-row md:items-start justify-between border-b ${dividerColor} pb-12 gap-8`}>
          {/* Left Column: Author Mindset & Focus */}
          <div className="max-w-xl space-y-3">
            <h3 className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${textColor}`}>
              A Mind in Motion<span className="text-[#fca311]">.</span> Think. Create. Build.
            </h3>
            <p className={`font-body text-sm ${textMutedColor} leading-relaxed`}>
              Engineering high-performance software systems and architecting art-directed visual identities at the intersection of aesthetic precision and computational logic.
            </p>
            <div className={`flex items-center gap-3 pt-2 font-mono text-xs ${textSubtleColor}`}>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#fca311]" /> Kolkata, India
              </span>
              <span>•</span>
              <span>IST (UTC+5:30)</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#000000] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fca311] animate-pulse" />
                Available for Select Projects
              </span>
            </div>
          </div>

          {/* Right Column: Sleek Back to Top Action */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="group self-start md:self-auto flex items-center gap-3 px-5 py-3 rounded-full border border-[#000000]/25 hover:border-[#fca311] hover:bg-[#fca311]/10 transition-all duration-300 cursor-pointer"
            aria-label="Back to top"
          >
            <span className="font-mono text-xs tracking-wider uppercase text-[#000000] group-hover:text-[#fca311]">
              BACK TO TOP
            </span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:-translate-y-1 bg-[#000000] text-[#ffffff] group-hover:bg-[#fca311] group-hover:text-[#000000]">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Middle Section: Clean Unboxed Social Links Directory */}
        <div className={`py-12 border-b ${dividerColor}`}>
          {/* 5-Column Open Typography Grid (No Boxes) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {socialLinks.map((social, idx) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorType('external')}
                onMouseLeave={resetCursor}
                className="group flex flex-col space-y-2 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#fca311] font-bold">0{idx + 1}</span>
                  <ArrowUpRight className="w-4 h-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#000000]/40 group-hover:text-[#fca311]" />
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider block mb-1 text-[#000000]/50">
                    {social.category}
                  </span>
                  <span className="font-display font-bold text-xl block transition-colors text-[#000000] group-hover:text-[#fca311]">
                    {social.name}
                  </span>
                  <span className="font-mono text-xs mt-0.5 block truncate transition-colors text-[#000000]/60">
                    {social.handle}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Full-Bleed Name Stage: AKASH in black on white with Wave Entrance & Interactive Wave Hover */}
      <div className="relative w-full overflow-visible select-none leading-none pt-8 pb-4">
        <svg
          viewBox="0.6 41.4 1033.8 140.8"
          className="w-full h-auto block overflow-visible cursor-pointer"
          aria-label="AKASH"
          role="img"
          onClick={triggerWave}
          onMouseEnter={triggerWave}
        >
          {letters.map((letter, idx) => (
            <motion.g
              key={letter.id}
              custom={idx}
              initial="idle"
              animate={isWaving ? 'wave' : 'idle'}
              variants={letterVariants}
              whileHover={{
                y: -16,
                transition: { type: 'spring', stiffness: 500, damping: 14 },
              }}
              className="cursor-pointer"
            >
              <motion.path
                d={letter.d}
                fill={letterFill}
                whileHover={{
                  fill: '#fca311',
                  transition: { duration: 0.15 },
                }}
                className="transition-colors duration-200"
              />
            </motion.g>
          ))}
        </svg>
      </div>

      {/* Bottommost Legal / Copyright Bar */}
      <div className={`relative w-full ${bottomBarBg} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] gap-3">
          <div>
            © {new Date().getFullYear()} AKASH KUNDU. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fca311]" />
            <span>OPEN FOR COLLABORATION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
