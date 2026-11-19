import React from 'react';

interface MarqueeProps {
  text?: string[];
  speed?: 'normal' | 'slow' | 'fast';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  text = ['DESIGN', 'DEVELOP', 'EXPLORE', 'EXPERIMENT', 'CREATE'],
  speed = 'normal',
  className = '',
}) => {
  // Speed mapping in seconds for one full loop
  const speedClass = {
    slow: 'duration-[35s]',
    normal: 'duration-[22s]',
    fast: 'duration-[14s]',
  }[speed];

  // Repeat items for seamless continuous looping
  const repeatedItems = [...text, ...text, ...text, ...text];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-[#ffffff]/15 bg-[#000000] py-4 select-none ${className}`}
      aria-label="Scrolling creative disciplines"
    >
      {/* Edge gradient fade masks for smooth infinite feel */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />

      <div className={`flex w-max animate-marquee ${speedClass} hover:[animation-play-state:paused]`}>
        {repeatedItems.map((word, index) => (
          <div key={`${word}-${index}`} className="flex items-center shrink-0 group">
            <span className="font-display text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#ffffff] px-4 md:px-6 transition-colors duration-200 group-hover:text-[#fca311]">
              {word}
            </span>
            <span className="font-display text-2xl md:text-3xl text-[#fca311] px-2 font-bold transition-transform duration-200 group-hover:scale-125">
              —
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

