import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();
  const { pathname } = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [pathname]);

  const variants = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: {
          opacity: 0,
          y: 18,
          filter: 'blur(4px)',
        },
        animate: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
        exit: {
          opacity: 0,
          y: -14,
          filter: 'blur(4px)',
          transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
      };

  return (
    <>
      {/* Top Architectural Telemetry Progress Wipe Bar */}
      <motion.div
        key={`progress-${pathname}`}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isNavigating ? [0, 0.7, 1] : 1,
          opacity: isNavigating ? [1, 1, 0] : 0,
        }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
        style={{ transformOrigin: '0% 50%' }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#14213d] via-[#fca311] to-[#ffffff] z-50 pointer-events-none shadow-[0_0_12px_rgba(252,163,17,0.8)]"
      />

      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full flex-1"
      >
        {children}
      </motion.div>
    </>
  );
};
