import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../CustomCursor/CursorContext';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const footerRef = useRef<HTMLElement>(null);
  const [isWaving, setIsWaving] = useState(false);
  const hasTriggeredInitialWave = useRef(false);

  // Pure white background with black Swiss typography
  const footerBg = 'bg-[#ffffff] text-[#000000] border-t border-[#000000]/15';
  const bottomBarBg = 'bg-[#ffffff] border-t border-[#000000]/10 text-[#000000]/60';
  const letterFill = '#000000';
  const dividerColor = 'border-[#000000]/15';

  const triggerWave = () => {
    setIsWaving(true);
    setTimeout(() => {
      setIsWaving(false);
    }, 1500);
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

  // Kinetic wave animation with motion blur on SVG letterforms
  const letterVariants = {
    idle: {
      y: 0,
      filter: 'blur(0px)',
      opacity: 1,
    },
    wave: (i: number) => ({
      y: [0, -32, 10, -4, 0],
      filter: ['blur(0px)', 'blur(10px)', 'blur(2.5px)', 'blur(0.5px)', 'blur(0px)'],
      opacity: [1, 0.78, 0.95, 1, 1],
      transition: {
        duration: 1.05,
        delay: i * 0.09,
        times: [0, 0.36, 0.7, 0.86, 1],
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

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'WORKS', path: '/projects' },
    { name: 'TECHNOLOGY', path: '/projects/tech' },
    { name: 'DESIGN', path: '/projects/design' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONNECT', path: '/connect' },
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

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-16 pb-8">
        {/* Top Info Strip: Perspective + Back to Top */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between border-b ${dividerColor} pb-10 gap-6`}>
          <div className="max-w-2xl space-y-2">
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#000000] uppercase leading-[0.92]">
              THINK. CREATE. BUILD<span className="text-[#fca311]">.</span>
            </h3>
            <p className="font-body text-sm sm:text-base text-[#000000]/70 max-w-xl leading-relaxed pt-1 font-normal">
              Akash Kundu — Engineering high-performance software systems and art-directed visual identities at the intersection of aesthetic precision and computational logic.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="group self-start md:self-auto flex items-center gap-3 px-6 py-3.5 rounded-full border border-[#000000]/20 hover:border-[#fca311] hover:bg-[#fca311]/10 transition-all duration-300 cursor-pointer"
            aria-label="Back to top"
          >
            <span className="font-mono text-xs tracking-wider uppercase text-[#000000] font-bold group-hover:text-[#fca311]">
              BACK TO TOP
            </span>
            <div className="w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:-translate-y-0.5 bg-[#000000] text-[#ffffff] group-hover:bg-[#fca311] group-hover:text-[#000000]">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Clean Minimalist Directory Strip: Navigation + Direct Contact */}
        <div className={`py-8 border-b ${dividerColor} flex flex-col md:flex-row md:items-center justify-between gap-6`}>
          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wider font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={resetCursor}
                className="text-[#000000]/70 hover:text-[#000000] transition-colors flex items-center gap-1 group py-1"
              >
                <span className="text-[#fca311] font-bold group-hover:translate-x-0.5 transition-transform">/</span>
                <span className="group-hover:font-bold">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Direct Email Action */}
          <div className="flex items-center gap-4 font-mono text-xs">
            <a
              href="mailto:contact@akashkundu.dev"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="font-display font-bold text-base sm:text-lg text-[#000000] hover:text-[#fca311] transition-colors flex items-center gap-1.5 group"
            >
              <span>contact@akashkundu.dev</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>

      {/* Full-Bleed Name Stage: AKASH with Motion Blur & Kinetic Wave */}
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
                y: -18,
                filter: 'blur(0px)',
                transition: { type: 'spring', stiffness: 500, damping: 14 },
              }}
              style={{ willChange: 'transform, filter' }}
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#fca311] animate-pulse" />
            <span>KOLKATA, INDIA • OPEN FOR SELECT COMMISSIONS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
