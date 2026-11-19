import React from 'react';
import { Link } from 'react-router-dom';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactCTA: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <section className="relative bg-[#000000] text-[#ffffff] py-28 px-6 sm:px-8 md:px-12 overflow-hidden border-t border-[#ffffff]/15">
      {/* Background Graphic Lines & Glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#fca311]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Top Mini Pill Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14213d]/60 border border-[#ffffff]/15 font-mono text-[11px] text-[#fca311] mb-6 font-semibold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#fca311] animate-ping" />
          <span>INITIATE COLLABORATION</span>
        </motion.div>

        {/* Massive Headline with Staggered Kinetic Entrance */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#ffffff] leading-none max-w-4xl"
          >
            LET'S MAKE SOMETHING
            <motion.span
              whileHover={{ scale: 1.4, y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="text-[#fca311] inline-block"
            >
              .
            </motion.span>
          </motion.h2>
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-base sm:text-lg md:text-xl text-[#e5e5e5]/80 max-w-2xl mt-6 leading-relaxed"
        >
          Have an idea, an interesting project or just want to connect? Let's start a conversation.
        </motion.p>

        {/* Action Button & Email */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Link
              to="/connect"
              onMouseEnter={() => setCursorType('hover')}
              onMouseLeave={resetCursor}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#fca311] text-[#000000] font-mono text-sm uppercase tracking-wider font-bold rounded-full hover:bg-[#ffffff] hover:text-[#000000] transition-all duration-300 shadow-lg shadow-[#fca311]/25 cursor-pointer"
            >
              <span>Start a Conversation</span>
              <div className="w-6 h-6 rounded-full bg-[#000000]/10 flex items-center justify-center group-hover:bg-[#000000] group-hover:text-[#ffffff] transition-colors">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>

          <motion.a
            href="mailto:contact@akashkundu.dev"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-2 px-6 py-4 border border-[#ffffff]/30 text-[#ffffff] font-mono text-xs uppercase tracking-wider rounded-full hover:border-[#fca311] hover:text-[#fca311] hover:bg-[#ffffff]/5 transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#fca311]" />
            <span>contact@akashkundu.dev</span>
          </motion.a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-wrap justify-center gap-6 font-mono text-xs text-[#e5e5e5]/60"
        >
          <a
            href="https://www.linkedin.com/in/akashkundu010/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#fca311] transition-colors flex items-center gap-1 group"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3 h-3 text-[#fca311] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <span className="opacity-30">•</span>
          <a
            href="https://www.instagram.com/0x.akash/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#fca311] transition-colors flex items-center gap-1 group"
          >
            <span>INSTAGRAM</span>
            <ArrowUpRight className="w-3 h-3 text-[#fca311] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <span className="opacity-30">•</span>
          <a
            href="https://github.com/tech-akash010"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#fca311] transition-colors flex items-center gap-1 group"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3 h-3 text-[#fca311] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <span className="opacity-30">•</span>
          <a
            href="https://x.com/officialak_X"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorType('external')}
            onMouseLeave={resetCursor}
            className="hover:text-[#fca311] transition-colors flex items-center gap-1 group"
          >
            <span>X (TWITTER)</span>
            <ArrowUpRight className="w-3 h-3 text-[#fca311] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

