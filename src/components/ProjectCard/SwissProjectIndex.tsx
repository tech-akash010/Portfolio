import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useSpring } from 'motion/react';
import { Project, DesignProject, TechProject } from '../../types/project';
import { ProjectVisualPreview } from './ProjectVisualPreview';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useCursor } from '../CustomCursor/CursorContext';

interface SwissProjectIndexProps {
  projects: (DesignProject | TechProject)[];
  variant?: 'midnight' | 'lapis' | 'editorial' | 'ocean';
  showCategoryTag?: boolean;
  limit?: number;
  className?: string;
}

export const SwissProjectIndex: React.FC<SwissProjectIndexProps> = ({
  projects,
  variant = 'midnight',
  showCategoryTag = true,
  limit,
  className = '',
}) => {
  const [hoveredProject, setHoveredProject] = useState<(DesignProject | TechProject) | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [expandedMobileSlug, setExpandedMobileSlug] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCursorType, resetCursor } = useCursor();

  // Smooth mouse tracking spring for floating preview
  const mouseX = useSpring(0, { stiffness: 350, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 350, damping: 28 });

  useEffect(() => {
    // Detect touch-only devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice) return;
    // Track relative to viewport or offset for floating preview
    mouseX.set(e.clientX + 24);
    mouseY.set(e.clientY - 120);
  };

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  // Variant color definitions based on 5-color palette (000000, 14213d, fca311, e5e5e5, ffffff)
  const isEditorial = variant === 'editorial';
  const borderColor = isEditorial ? 'border-[#000000]/15' : 'border-[#ffffff]/15';
  const textPrimary = isEditorial ? 'text-[#000000]' : 'text-[#ffffff]';
  const textMuted = isEditorial ? 'text-[#000000]/60' : 'text-[#e5e5e5]/70';
  const rowHoverBg = isEditorial ? 'hover:bg-[#000000]/[0.04]' : 'hover:bg-[#ffffff]/[0.04]';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full ${className}`}
    >
      {/* Floating Preview Portal on Desktop */}
      {!isTouchDevice && (
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                left: mouseX,
                top: mouseY,
              }}
              className="fixed z-50 pointer-events-none w-80 sm:w-96 rounded-xl overflow-hidden shadow-2xl bg-[#000000] border border-[#fca311]/40 backdrop-blur-xl"
            >
              {/* Media Preview Box */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#14213d]">
                <ProjectVisualPreview slug={hoveredProject.slug} className="h-full w-full" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#000000]/90 border border-[#fca311]/40 font-mono text-[10px] text-[#fca311] flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>PREVIEW</span>
                </div>
              </div>

              {/* Preview Information Header */}
              <div className="p-4 bg-[#000000] text-[#ffffff]">
                <div className="flex items-center justify-between font-mono text-[11px] text-[#fca311] mb-1">
                  <span className="uppercase font-semibold tracking-wider">
                    {hoveredProject.category === 'design'
                      ? (hoveredProject as DesignProject).subcategory
                      : (hoveredProject as TechProject).subcategory}
                  </span>
                  <span>{hoveredProject.year}</span>
                </div>
                <h4 className="font-display font-bold text-lg text-[#ffffff] truncate">
                  {hoveredProject.title}
                </h4>
                <p className="font-body text-xs text-[#e5e5e5]/70 line-clamp-2 mt-1">
                  {hoveredProject.description}
                </p>

                {/* Tech / Design Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-[#ffffff]/10">
                  {hoveredProject.category === 'technology'
                    ? (hoveredProject as TechProject).techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#14213d] text-[#ffffff] font-mono text-[9px]"
                        >
                          {tech}
                        </span>
                      ))
                    : (hoveredProject as DesignProject).creativeDirection?.typography.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#14213d] text-[#ffffff] font-mono text-[9px]"
                        >
                          {t}
                        </span>
                      ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Swiss Index Ledger Table */}
      <div className={`divide-y ${borderColor} border-t border-b ${borderColor}`}>
        {displayedProjects.map((project, idx) => {
          const projectUrl =
            project.category === 'design'
              ? `/projects/design/${project.slug}`
              : `/projects/technology/${project.slug}`;

          const isHovered = hoveredProject?.slug === project.slug;
          const isMobileExpanded = expandedMobileSlug === project.slug;

          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <Link
                to={projectUrl}
                onMouseEnter={() => {
                  if (!isTouchDevice) {
                    setHoveredProject(project);
                    setCursorType('project', 'OPEN // VIEW');
                  }
                }}
                onMouseLeave={() => {
                  if (!isTouchDevice) {
                    setHoveredProject(null);
                    resetCursor();
                  }
                }}
                onClick={(e) => {
                  // On touch devices, first tap expands preview, second tap navigates
                  if (isTouchDevice && expandedMobileSlug !== project.slug) {
                    e.preventDefault();
                    setExpandedMobileSlug(project.slug);
                  }
                }}
                className={`flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-7 px-3 sm:px-4 transition-all duration-200 ${rowHoverBg} cursor-pointer`}
              >
                {/* Left Unit: Index Number + Project Title */}
                <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8 flex-1 min-w-0">
                  <span className="font-mono text-xs sm:text-sm text-[#fca311] font-semibold flex-shrink-0 tracking-wider">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-200 truncate ${
                        isHovered ? 'text-[#fca311]' : textPrimary
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className={`font-body text-xs sm:text-sm ${textMuted} truncate mt-1 max-w-xl`}>
                      {project.tagline || project.description}
                    </p>
                  </div>
                </div>

                {/* Right Unit: Discipline / Subcategory + Stack / Details + Arrow */}
                <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-8 mt-4 md:mt-0 flex-shrink-0">
                  {showCategoryTag && (
                    <div className="flex flex-col md:items-end">
                      <span className="font-mono text-[10px] sm:text-xs text-[#fca311] uppercase tracking-wider font-semibold">
                        {project.category === 'design'
                          ? (project as DesignProject).subcategory
                          : (project as TechProject).subcategory}
                      </span>
                      <span className={`font-mono text-[10px] sm:text-xs ${textMuted}`}>
                        {project.year} • {project.category.toUpperCase()}
                      </span>
                    </div>
                  )}

                  {/* Micro Arrow Action */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isHovered
                        ? 'bg-[#fca311] text-[#000000] border-[#fca311] scale-110'
                        : isEditorial
                        ? 'border-[#000000]/20 text-[#000000] group-hover:border-[#14213d]'
                        : 'border-[#ffffff]/20 text-[#ffffff] group-hover:border-[#fca311]'
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
                      }`}
                    />
                  </div>
                </div>
              </Link>

              {/* Mobile Tap-To-Expand Accordion Media */}
              {isTouchDevice && isMobileExpanded && (
                <div className="md:hidden pb-6 px-3">
                  <div className="rounded-lg overflow-hidden border border-[#fca311]/40 bg-[#000000] p-4 text-[#ffffff]">
                    <div className="h-48 w-full overflow-hidden rounded bg-[#14213d] mb-3">
                      <ProjectVisualPreview slug={project.slug} className="h-full w-full" />
                    </div>
                    <Link
                      to={projectUrl}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#fca311] text-[#000000] font-mono text-xs uppercase tracking-wider font-bold rounded"
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
