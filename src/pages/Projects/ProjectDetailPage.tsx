import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { designProjects, techProjects } from '../../data/projectsData';
import { DesignProject, TechProject } from '../../types/project';
import { ProjectVisualPreview } from '../../components/ProjectCard/ProjectVisualPreview';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Layers,
  Cpu,
  Target,
  Sparkles,
  CheckCircle2,
  FileCode2,
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ProjectDetailPage: React.FC = () => {
  const { category, slug } = useParams<{ category: 'design' | 'technology'; slug: string }>();
  const navigate = useNavigate();
  const { setCursorType, resetCursor } = useCursor();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const isDesign = category === 'design';

  const projectsList: (DesignProject | TechProject)[] = isDesign ? designProjects : techProjects;

  const currentIndex = projectsList.findIndex((p) => p.slug === slug);
  const project = projectsList[currentIndex];

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-28 px-6 text-center">
        <span className="font-mono text-xs text-[#fca311] uppercase tracking-widest mb-2">
          ERROR 404 // CASE STUDY NOT FOUND
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-[#ffffff]">
          Project Not Found
        </h1>
        <p className="font-body text-[#e5e5e5]/70 mt-3 max-w-md">
          The requested project case study could not be located in the current archive.
        </p>
        <Link
          to="/projects"
          className="mt-6 px-6 py-3 bg-[#fca311] text-[#000000] font-mono text-xs uppercase font-bold rounded-full hover:bg-[#ffffff] hover:text-[#000000] transition-colors"
        >
          Return to Projects Index
        </Link>
      </div>
    );
  }

  // Next and Previous navigation
  const prevProject = currentIndex > 0 ? projectsList[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsList.length - 1 ? projectsList[currentIndex + 1] : null;

  return (
    <article className="pt-36 sm:pt-40 md:pt-44 pb-24 px-6 sm:px-8 md:px-12 max-w-5xl mx-auto min-h-screen">
      {/* Top Back Navigation Bar */}
      <div className="flex items-center justify-between border-b border-[#ffffff]/15 pb-4 mb-8">
        <Link
          to={`/projects/${category}`}
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={resetCursor}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#e5e5e5]/70 hover:text-[#fca311] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to {isDesign ? 'Design Archive' : 'Tech Archive'}</span>
        </Link>

        <div className="font-mono text-xs text-[#e5e5e5]/50">
          <span>{project.year}</span> • <span className="text-[#fca311]">№ {project.number}</span>
        </div>
      </div>

      {/* Hero Header */}
      <header className="space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded bg-[#ffffff]/10 border border-[#ffffff]/15 text-[#ffffff] uppercase font-bold">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded bg-[#ffffff]/5 border border-[#ffffff]/10 text-[#e5e5e5]/80 uppercase">
            {project.subcategory}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#ffffff] leading-tight">
          {project.title}
        </h1>

        <p className="font-editorial italic text-xl sm:text-2xl text-[#e5e5e5]/80 max-w-3xl leading-relaxed">
          {project.tagline}
        </p>

        {/* Quick External CTAs if Technology project */}
        {!isDesign && (
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href={(project as TechProject).githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorType('external')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ffffff]/10 border border-[#ffffff]/15 text-[#ffffff] font-mono text-xs uppercase tracking-wider hover:bg-[#fca311] hover:text-[#000000] hover:border-[#fca311] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {(project as TechProject).liveUrl && (
              <a
                href={(project as TechProject).liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorType('external')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#ffffff]/30 text-[#ffffff] font-mono text-xs uppercase tracking-wider hover:border-[#fca311] hover:text-[#fca311] transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#fca311]" />
                <span>Live Application</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </header>

      {/* Main Visual Display Stage (Real Artwork for Design Projects Only) */}
      {isDesign && (
        <div className="relative w-full h-80 sm:h-[480px] md:h-[560px] overflow-hidden mb-16 flex items-center justify-center">
          <ProjectVisualPreview slug={project.slug} />
        </div>
      )}

      {/* ========================================================== */}
      {/* CASE STUDY SECTION: DESIGN PROJECT TEMPLATE                */}
      {/* ========================================================== */}
      {isDesign && (
        <div className="space-y-16">
          {/* 1. Project Overview */}
          <section className="border-t border-[#ffffff]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff] mb-4">
              The Context &amp; Purpose
            </h2>
            <p className="font-body text-base text-[#e5e5e5]/85 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </section>

          {/* 2. Brief and Objectives */}
          <section className="border-t border-[#ffffff]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff] mb-4">
              Project Brief
            </h2>
            <div className="p-5 bg-[#ffffff]/[0.03] border border-[#ffffff]/15 rounded-lg mb-6 font-body text-base text-[#ffffff]">
              {(project as DesignProject).brief}
            </div>

            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#ffffff] mb-3">
              Core Objectives:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(project as DesignProject).objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 bg-[#ffffff]/[0.03] border border-[#ffffff]/15 rounded">
                  <CheckCircle2 className="w-4 h-4 text-[#fca311] shrink-0 mt-0.5" />
                  <span className="font-body text-xs sm:text-sm text-[#e5e5e5]/80">{obj}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Research & Inspiration */}
          <section className="border-t border-[#ffffff]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff] mb-4">
              Theoretical Foundation
            </h2>
            <p className="font-body text-base text-[#e5e5e5]/85 leading-relaxed max-w-3xl">
              {(project as DesignProject).researchAndInspiration}
            </p>
          </section>

          {/* 4. Creative Direction */}
          <section className="border-t border-[#ffffff]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff] mb-4">
              Design System &amp; Aesthetics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Concept & Typography */}
              <div className="p-5 bg-[#ffffff]/[0.03] border border-[#ffffff]/15 rounded-lg space-y-4">
                <div>
                  <span className="font-mono text-[10px] text-[#fca311] uppercase tracking-wider block">CONCEPT</span>
                  <div className="font-display font-bold text-lg text-[#ffffff]">
                    {(project as DesignProject).creativeDirection.concept}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#fca311] uppercase tracking-wider block">TYPOGRAPHY HIERARCHY</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {(project as DesignProject).creativeDirection.typography.map((type) => (
                      <span key={type} className="px-2.5 py-1 bg-[#ffffff]/10 border border-[#ffffff]/15 rounded font-mono text-xs text-[#ffffff]">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Color Palette Specification */}
              <div className="p-5 bg-[#ffffff]/[0.03] border border-[#ffffff]/15 rounded-lg">
                <span className="font-mono text-[10px] text-[#fca311] uppercase tracking-wider block mb-3">
                  STRICT PALETTE APPLIED
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {(project as DesignProject).creativeDirection.colorPalette.map((color) => (
                    <div key={color.name} className="flex items-center gap-2.5 p-2 bg-[#ffffff]/[0.04] border border-[#ffffff]/10 rounded">
                      <span
                        className="w-5 h-5 rounded border border-[#ffffff]/20 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="font-mono text-[10px] leading-tight">
                        <span className="block font-bold text-[#ffffff]">{color.name}</span>
                        <span className="text-[#e5e5e5]/60">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Design Process */}
          <section className="border-t border-[#ffffff]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff] mb-6">
              Iterative Execution
            </h2>
            <div className="space-y-4">
              {(project as DesignProject).designProcess.map((step, idx) => (
                <div key={idx} className="p-5 bg-[#ffffff]/[0.03] border border-[#ffffff]/15 rounded-lg flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className="px-2.5 py-1 rounded bg-[#ffffff]/10 text-[#ffffff] font-mono text-xs font-bold shrink-0 self-start">
                    {step.phase}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#ffffff]">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#e5e5e5]/80 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Final Outcome & Tools */}
          <section className="border-t border-[#ffffff]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff] mb-4">
              Deliverables &amp; Impact
            </h2>
            <div className="p-6 bg-[#ffffff]/[0.03] border border-[#ffffff]/15 rounded-lg mb-6">
              <p className="font-body text-base leading-relaxed text-[#e5e5e5]/90">
                {(project as DesignProject).finalOutcome}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-[#e5e5e5]/60 uppercase">TOOLS USED:</span>
              {(project as DesignProject).toolsUsed.map((tool) => (
                <span key={tool} className="px-3 py-1 bg-[#ffffff]/10 border border-[#ffffff]/15 rounded font-mono text-xs font-bold text-[#ffffff]">
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ========================================================== */}
      {/* CASE STUDY SECTION: TECHNOLOGY PROJECT TEMPLATE (UNBOXED)  */}
      {/* ========================================================== */}
      {!isDesign && (
        <div className="space-y-16">
          {/* 1. Problem Statement */}
          <section className="border-t border-[#ffffff]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff] mb-4">
              Why This Needed To Be Built<span className="text-[#fca311]">.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-[#e5e5e5]/85 leading-relaxed max-w-3xl font-normal">
              {(project as TechProject).problemStatement}
            </p>
          </section>

          {/* 2. Solution & Architecture */}
          <section className="border-t border-[#ffffff]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff] mb-4">
              Engineered Solution<span className="text-[#fca311]">.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-[#e5e5e5]/85 leading-relaxed max-w-3xl mb-8 font-normal">
              {(project as TechProject).solution}
            </p>

            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#fca311] mb-4">
              System Architecture:
            </h3>
            <div className="divide-y divide-[#ffffff]/10 border-t border-b border-[#ffffff]/10">
              {(project as TechProject).architecture.layers.map((layer, idx) => (
                <div key={idx} className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <div className="sm:w-1/3">
                    <span className="font-mono text-xs font-bold text-[#ffffff] block">
                      {layer.title}
                    </span>
                    <span className="font-mono text-[11px] text-[#fca311] mt-0.5 block">
                      {layer.tech}
                    </span>
                  </div>
                  <p className="sm:w-2/3 font-body text-sm text-[#e5e5e5]/80 leading-relaxed font-normal">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Tech Stack Breakdown */}
          <section className="border-t border-[#ffffff]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff] mb-4">
              Libraries &amp; Runtime Environment<span className="text-[#fca311]">.</span>
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-[#e5e5e5]/80">
              {(project as TechProject).techStack.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="hover:text-[#fca311] transition-colors">{tech}</span>
                  {i < (project as TechProject).techStack.length - 1 && (
                    <span className="text-[#fca311]/40">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* 4. Code Sample / Key Implementation Details */}
          {(project as TechProject).codeSnippet && (
            <section className="border-t border-[#ffffff]/15 pt-8">
              <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#e5e5e5]/70">
                <span className="flex items-center gap-1.5 text-[#fca311]">
                  <FileCode2 className="w-4 h-4" />
                  {(project as TechProject).codeSnippet!.filename}
                </span>
                <span className="uppercase text-[10px]">TypeScript</span>
              </div>
              <pre className="p-6 bg-[#000000]/60 text-[#ffffff] font-mono text-xs leading-relaxed border border-[#ffffff]/15 overflow-x-auto">
                <code>{(project as TechProject).codeSnippet!.code}</code>
              </pre>
            </section>
          )}

          {/* 5. Key Implementation Details List */}
          <section className="border-t border-[#ffffff]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff] mb-4">
              Engineering Feats<span className="text-[#fca311]">.</span>
            </h2>
            <div className="divide-y divide-[#ffffff]/10 border-t border-b border-[#ffffff]/10">
              {(project as TechProject).keyImplementationDetails.map((detail, idx) => (
                <div key={idx} className="py-4 flex items-start gap-3">
                  <span className="font-mono text-xs text-[#fca311] font-bold mt-0.5">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="font-body text-sm sm:text-base text-[#e5e5e5]/85 leading-relaxed font-normal">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Challenges & Learnings */}
          <section className="border-t border-[#ffffff]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff] mb-4">
              Overcoming Engineering Roadblocks<span className="text-[#fca311]">.</span>
            </h2>
            <div className="space-y-6">
              {(project as TechProject).challengesAndLearnings.map((item, idx) => (
                <div key={idx} className="space-y-2 border-b border-[#ffffff]/10 pb-6">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#fca311] font-semibold">
                    CHALLENGE // {item.challenge}
                  </div>
                  <p className="font-body text-sm sm:text-base text-[#e5e5e5]/80 pl-4 border-l-2 border-[#ffffff]/30 leading-relaxed font-normal">
                    <strong className="text-[#ffffff]">Solution: </strong>
                    {item.learning}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Next / Previous Project Navigation Footer */}
      <footer className="mt-20 pt-8 border-t border-[#ffffff]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-mono text-xs">
        {prevProject ? (
          <Link
            to={`/projects/${category}/${prevProject.slug}`}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 text-[#ffffff] hover:text-[#fca311] transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <div>
              <span className="text-[10px] text-[#e5e5e5]/60 block uppercase">PREVIOUS PROJECT</span>
              <span className="font-bold text-sm">{prevProject.title}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/projects/${category}/${nextProject.slug}`}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 text-[#ffffff] hover:text-[#fca311] transition-colors py-2 text-right"
          >
            <div>
              <span className="text-[10px] text-[#e5e5e5]/60 block uppercase">NEXT PROJECT</span>
              <span className="font-bold text-sm">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <div />
        )}
      </footer>
    </article>
  );
};
