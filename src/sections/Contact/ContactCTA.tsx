import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactCTA: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <section className="relative bg-[#001d4a] text-[#eaf8bf] py-28 px-6 sm:px-8 md:px-12 overflow-hidden border-t border-[#eaf8bf]/15">
      {/* Background Graphic Lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(234, 248, 191, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(234, 248, 191, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Massive Headline */}
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#eaf8bf] leading-none max-w-4xl">
          LET'S MAKE SOMETHING<span className="text-[#eca400]">.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="font-body text-base sm:text-lg md:text-xl text-[#eaf8bf]/80 max-w-2xl mt-6 leading-relaxed">
          Have an idea, an interesting project or just want to connect? Let's start a conversation.
        </p>

        {/* Action Button & Email */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/connect"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#eca400] text-[#001d4a] font-mono text-sm uppercase tracking-wider font-bold rounded-full hover:bg-[#eaf8bf] hover:text-[#001d4a] transition-all duration-300 shadow-lg shadow-[#eca400]/20"
          >
            <span>Start a Conversation</span>
            <div className="w-6 h-6 rounded-full bg-[#eaf8bf]/20 flex items-center justify-center group-hover:bg-[#001d4a] group-hover:text-[#eaf8bf] transition-colors">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>

          <a
            href="mailto:contact@akashkundu.dev"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-2 px-6 py-4 border border-[#eaf8bf]/30 text-[#eaf8bf] font-mono text-xs uppercase tracking-wider rounded-full hover:border-[#eca400] hover:text-[#eca400] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#eca400]" />
            <span>contact@akashkundu.dev</span>
          </a>
        </div>

        {/* Social Links Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 font-mono text-xs text-[#eaf8bf]/60">
          <a
            href="https://www.linkedin.com/in/akashkundu010/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#eca400] transition-colors flex items-center gap-1"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3 h-3 text-[#eca400]" />
          </a>
          <span className="opacity-30">•</span>
          <a
            href="https://www.instagram.com/0x.akash/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#eca400] transition-colors flex items-center gap-1"
          >
            <span>INSTAGRAM</span>
            <ArrowUpRight className="w-3 h-3 text-[#eca400]" />
          </a>
          <span className="opacity-30">•</span>
          <a
            href="https://github.com/tech-akash010"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#eca400] transition-colors flex items-center gap-1"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3 h-3 text-[#eca400]" />
          </a>
          <span className="opacity-30">•</span>
          <a
            href="https://x.com/officialak_X"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#eca400] transition-colors flex items-center gap-1"
          >
            <span>X (TWITTER)</span>
            <ArrowUpRight className="w-3 h-3 text-[#eca400]" />
          </a>
        </div>
      </div>
    </section>
  );
};

