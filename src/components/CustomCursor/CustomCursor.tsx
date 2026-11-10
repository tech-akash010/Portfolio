import React, { useEffect, useState, useRef } from 'react';
import { useCursor } from './CursorContext';
import { ArrowUpRight } from 'lucide-react';

export const CustomCursor: React.FC = () => {
  const { cursorType, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Position references for smooth interpolation
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(hover: none) and (pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouch(true);
      return;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionListener);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Immediately move the central dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth lerp loop for the outer ring
    const render = () => {
      // Lerp factor
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      reqRef.current = requestAnimationFrame(render);
    };

    reqRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      motionQuery.removeEventListener('change', motionListener);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [isVisible]);

  if (isTouch || prefersReducedMotion || cursorType === 'hidden' || !isVisible) {
    return null;
  }

  const isProject = cursorType === 'project';
  const isHover = cursorType === 'hover';
  const isExternal = cursorType === 'external';
  const isDrag = cursorType === 'drag';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Center pinpoint dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full transition-transform duration-75 ease-out ${
          isProject || isDrag ? 'opacity-0' : 'bg-[#FF6D1F]'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer contextual ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-300 ease-out will-change-transform ${
          isProject
            ? '-ml-12 -mt-12 w-24 h-24 bg-[#FF6D1F] text-[#FAF3E1] shadow-lg shadow-[#FF6D1F]/20'
            : isDrag
            ? '-ml-9 -mt-9 w-18 h-18 bg-[#222222] text-[#FAF3E1] border border-[#FF6D1F]'
            : isExternal
            ? '-ml-7 -mt-7 w-14 h-14 bg-[#222222] text-[#FAF3E1] border border-[#FF6D1F]/60'
            : isHover
            ? '-ml-6 -mt-6 w-12 h-12 border-2 border-[#FF6D1F] bg-[#FF6D1F]/10 scale-110'
            : '-ml-4 -mt-4 w-8 h-8 border border-[#222222]/50'
        }`}
        style={{ willChange: 'transform' }}
      >
        {isProject && (
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-center px-2 select-none leading-tight">
            {cursorText || 'VIEW PROJECT'}
          </span>
        )}

        {isDrag && (
          <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-center select-none text-[#FF6D1F]">
            {cursorText || 'DRAG'}
          </span>
        )}

        {isExternal && (
          <ArrowUpRight className="w-5 h-5 text-[#FF6D1F] animate-pulse" />
        )}
      </div>
    </div>
  );
};

