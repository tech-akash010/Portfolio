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
      className={`relative w-full overflow-hidden border-y border-[#FAF3E1]/15 bg-[#222222] py-4 select-none ${className}`}
      aria-label="Scrolling creative disciplines"
    >
      <div className={`flex w-max animate-marquee ${speedClass} hover:[animation-play-state:paused]`}>
        {repeatedItems.map((word, index) => (
          <div key={`${word}-${index}`} className="flex items-center shrink-0">
            <span className="font-display text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#FAF3E1] px-4 md:px-6">
              {word}
            </span>
            <span className="font-display text-2xl md:text-3xl text-[#FF6D1F] px-2 font-bold">
              —
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

