import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, forceShow = false }) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [phase, setPhase] = useState<'mask' | 'line' | 'meta' | 'exit'>('mask');

  useEffect(() => {
    // Check if user already saw the intro in this session or prefers reduced motion
    const hasSeenIntro = sessionStorage.getItem('ak_portfolio_intro_seen');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasSeenIntro && !forceShow) {
      if (onComplete) onComplete();
      return;
    }

    if (prefersReducedMotion && !forceShow) {
      sessionStorage.setItem('ak_portfolio_intro_seen', 'true');
      if (onComplete) onComplete();
      return;
    }

    setShouldShow(true);

    // Fast, punchy 1.35s sequence
    const t1 = setTimeout(() => setPhase('line'), 350);
    const t2 = setTimeout(() => setPhase('meta'), 650);
    const t3 = setTimeout(() => setPhase('exit'), 1100);
    const t4 = setTimeout(() => {
      sessionStorage.setItem('ak_portfolio_intro_seen', 'true');
      setShouldShow(false);
      if (onComplete) onComplete();
    }, 1450);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [forceShow, onComplete]);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF3E1] text-[#222222] select-none cursor-wait overflow-hidden"
        >
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(34, 34, 34, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 34, 34, 0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative flex flex-col items-center max-w-md w-full px-8">
            {/* Step 2: AK Monogram with Typography Mask */}
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)', y: 20 }}
              animate={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-center"
            >
              <h1 className="font-display text-8xl md:text-9xl font-black tracking-tighter leading-none text-[#222222]">
                AK<span className="text-[#FF6D1F]">.</span>
              </h1>
            </motion.div>

            {/* Step 3: Thin Orange Line Drawing Across */}
            <div className="w-full h-0.5 bg-[#222222]/10 my-6 relative overflow-hidden">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{
                  scaleX: phase !== 'mask' ? 1 : 0,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                }}
                className="absolute inset-0 bg-[#FF6D1F] origin-left"
              />
            </div>

            {/* Step 4: Metadata Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: phase === 'meta' || phase === 'exit' ? 1 : 0,
                y: phase === 'meta' || phase === 'exit' ? 0 : 10,
              }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full flex justify-between items-center font-mono text-[10px] md:text-xs tracking-wider uppercase text-[#222222]/70"
            >
              <div>AK // CREATIVE</div>
              <div className="text-[#FF6D1F] font-bold">2026</div>
              <div>THINK. CREATE. BUILD.</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

