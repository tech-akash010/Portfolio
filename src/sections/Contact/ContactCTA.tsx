import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactCTA: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <section className="relative bg-[#000000] text-[#ffffff] py-28 px-6 sm:px-8 md:px-12 overflow-hidden border-t border-[#ffffff]/15">
      {/* Background Graphic Lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Massive Headline */}
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#ffffff] leading-none max-w-4xl">
          LET'S MAKE SOMETHING<span className="text-[#fca311]">.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="font-body text-base sm:text-lg md:text-xl text-[#e5e5e5]/80 max-w-2xl mt-6 leading-relaxed">
          Have an idea, an interesting project or just want to connect? Let's start a conversation.
        </p>

        {/* Action Button & Email */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/connect"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#fca311] text-[#000000] font-mono text-sm uppercase tracking-wider font-bold rounded-full hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-300 shadow-lg shadow-[#fca311]/20"
          >
            <span>Start a Conversation</span>
            <div className="w-6 h-6 rounded-full bg-[#000000]/10 flex items-center justify-center group-hover:bg-[#000000] group-hover:text-[#ffffff] transition-colors">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>

          <a
            href="mailto:contact@akashkundu.dev"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-2 px-6 py-4 border border-[#ffffff]/30 text-[#ffffff] font-mono text-xs uppercase tracking-wider rounded-full hover:border-[#fca311] hover:text-[#fca311] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#fca311]" />
            <span>contact@akashkundu.dev</span>
          </a>
        </div>

        {/* Social Links Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 font-mono text-xs text-[#e5e5e5]/60">
          <a
            href="https://www.linkedin.com/in/akashkundu010/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#fca311] transition-colors flex items-center gap-1"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3 h-3 text-[#fca311]" />
          </a>
          <span className="opacity-30">•</span>
          <a
            href="https://www.instagram.com/0x.akash/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#fca311] transition-colors flex items-center gap-1"
          >
            <span>INSTAGRAM</span>
            <ArrowUpRight className="w-3 h-3 text-[#fca311]" />
          </a>
          <span className="opacity-30">•</span>
          <a
            href="https://github.com/tech-akash010"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#fca311] transition-colors flex items-center gap-1"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3 h-3 text-[#fca311]" />
          </a>
          <span className="opacity-30">•</span>
          <a
            href="https://x.com/officialak_X"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#fca311] transition-colors flex items-center gap-1"
          >
            <span>X (TWITTER)</span>
            <ArrowUpRight className="w-3 h-3 text-[#fca311]" />
          </a>
        </div>
      </div>
    </section>
  );
};

