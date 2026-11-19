import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { SwissProjectIndex } from '../../components/ProjectCard/SwissProjectIndex';
import { techProjects } from '../../data/projectsData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  // Curate engineering and software systems (designs are showcased exclusively in the design dossier)
  const displayedProjects = techProjects;

  return (
    <section id="selected-work" className="scroll-mt-28 py-20 sm:py-28 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Section Header: Swiss Monograph Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#ffffff]/15 pb-8 mb-10 gap-6"
      >
        <div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#ffffff]">
            WORK INDEX<span className="text-[#fca311]">.</span>
          </h2>
          <p className="font-editorial italic text-lg sm:text-xl text-[#e5e5e5]/70 mt-2 max-w-xl">
            Hover over any ledger row to reveal live interactive previews and architectural blueprints.
          </p>
        </div>

        {/* View Full Archive Action */}
        <motion.div
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <Link
            to="/projects"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#ffffff]/25 text-[#ffffff] hover:border-[#fca311] hover:text-[#fca311] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>View Full Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Swiss Hover-Reveal Interactive Ledger for Engineering & Technology Projects */}
      <SwissProjectIndex
        projects={displayedProjects}
        variant="midnight"
        showCategoryTag={true}
      />

      {/* Footnote Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-between pt-6 text-xs font-mono text-[#e5e5e5]/50 border-t border-[#ffffff]/10 gap-2 mt-6"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#fca311]" />
          <span>ENGINEERING SYSTEMS ARCHIVE</span>
        </div>
        <Link
          to="/projects"
          className="text-[#fca311] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
        >
          <span>VIEW ACTIVE REPOSITORY STATUS</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>
    </section>
  );
};
