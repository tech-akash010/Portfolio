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
  const projectsList = isDesign ? designProjects : techProjects;

  const currentIndex = projectsList.findIndex((p) => p.slug === slug);
  const project = projectsList[currentIndex];

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-28 px-6 text-center">
        <span className="font-mono text-xs text-[#FF6D1F] uppercase tracking-widest mb-2">
          ERROR 404 // CASE STUDY NOT FOUND
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-[#FAF3E1]">
          Project Not Found
        </h1>
        <p className="font-body text-[#FAF3E1]/70 mt-3 max-w-md">
          The requested project case study could not be located in the current archive.
        </p>
        <Link
          to="/projects"
          className="mt-6 px-6 py-3 bg-[#FF6D1F] text-[#FAF3E1] font-mono text-xs uppercase rounded-full hover:bg-[#FAF3E1] hover:text-[#222222] transition-colors"
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
      <div className="flex items-center justify-between border-b border-[#FAF3E1]/15 pb-4 mb-8">
        <Link
          to={`/projects/${category}`}
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={resetCursor}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#FAF3E1]/70 hover:text-[#FF6D1F] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to {isDesign ? 'Design Archive' : 'Tech Archive'}</span>
        </Link>

        <div className="font-mono text-xs text-[#FAF3E1]/50">
          <span>{project.year}</span> • <span className="text-[#FF6D1F]">№ {project.number}</span>
        </div>
      </div>

      {/* Hero Header */}
      <header className="space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded bg-[#FAF3E1]/10 border border-[#FAF3E1]/15 text-[#FAF3E1] uppercase font-bold">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded bg-[#FAF3E1]/5 border border-[#FAF3E1]/10 text-[#FAF3E1]/80 uppercase">
            {project.subcategory}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#FAF3E1] leading-tight">
          {project.title}
        </h1>

        <p className="font-editorial italic text-xl sm:text-2xl text-[#FAF3E1]/80 max-w-3xl leading-relaxed">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF3E1]/10 border border-[#FAF3E1]/15 text-[#FAF3E1] font-mono text-xs uppercase tracking-wider hover:bg-[#FF6D1F] hover:border-[#FF6D1F] transition-colors"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FAF3E1]/30 text-[#FAF3E1] font-mono text-xs uppercase tracking-wider hover:border-[#FF6D1F] hover:text-[#FF6D1F] transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#FF6D1F]" />
                <span>Live Application</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </header>

      {/* Main Visual Display Stage */}
      <div className="relative w-full h-80 sm:h-[420px] rounded-lg border border-[#FAF3E1]/15 overflow-hidden shadow-xl mb-16">
        <ProjectVisualPreview slug={project.slug} />
      </div>

      {/* ========================================================== */}
      {/* CASE STUDY SECTION: DESIGN PROJECT TEMPLATE                */}
      {/* ========================================================== */}
      {isDesign && (
        <div className="space-y-16">
          {/* 1. Project Overview */}
          <section className="border-t border-[#FAF3E1]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF3E1] mb-4">
              The Context &amp; Purpose
            </h2>
            <p className="font-body text-base text-[#FAF3E1]/85 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </section>

          {/* 2. Brief and Objectives */}
          <section className="border-t border-[#FAF3E1]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF3E1] mb-4">
              Project Brief
            </h2>
            <div className="p-5 bg-[#FAF3E1]/[0.03] border border-[#FAF3E1]/15 rounded-lg mb-6 font-body text-base text-[#FAF3E1]">
              {(project as DesignProject).brief}
            </div>

            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FAF3E1] mb-3">
              Core Objectives:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(project as DesignProject).objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 bg-[#FAF3E1]/[0.03] border border-[#FAF3E1]/15 rounded">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6D1F] shrink-0 mt-0.5" />
                  <span className="font-body text-xs sm:text-sm text-[#FAF3E1]/80">{obj}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Research & Inspiration */}
          <section className="border-t border-[#FAF3E1]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF3E1] mb-4">
              Theoretical Foundation
            </h2>
            <p className="font-body text-base text-[#FAF3E1]/85 leading-relaxed max-w-3xl">
              {(project as DesignProject).researchAndInspiration}
            </p>
          </section>

          {/* 4. Creative Direction */}
          <section className="border-t border-[#FAF3E1]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF3E1] mb-4">
              Design System &amp; Aesthetics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Concept & Typography */}
              <div className="p-5 bg-[#FAF3E1]/[0.03] border border-[#FAF3E1]/15 rounded-lg space-y-4">
                <div>
                  <span className="font-mono text-[10px] text-[#FF6D1F] uppercase tracking-wider block">CONCEPT</span>
                  <div className="font-display font-bold text-lg text-[#FAF3E1]">
                    {(project as DesignProject).creativeDirection.concept}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-[#FF6D1F] uppercase tracking-wider block">TYPOGRAPHY HIERARCHY</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {(project as DesignProject).creativeDirection.typography.map((type) => (
                      <span key={type} className="px-2.5 py-1 bg-[#FAF3E1]/10 border border-[#FAF3E1]/15 rounded font-mono text-xs text-[#FAF3E1]">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Color Palette Specification */}
              <div className="p-5 bg-[#FAF3E1]/[0.03] border border-[#FAF3E1]/15 rounded-lg">
                <span className="font-mono text-[10px] text-[#FF6D1F] uppercase tracking-wider block mb-3">
                  STRICT PALETTE APPLIED
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {(project as DesignProject).creativeDirection.colorPalette.map((color) => (
                    <div key={color.name} className="flex items-center gap-2.5 p-2 bg-[#FAF3E1]/[0.04] border border-[#FAF3E1]/10 rounded">
                      <span
                        className="w-5 h-5 rounded border border-[#FAF3E1]/20 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="font-mono text-[10px] leading-tight">
                        <span className="block font-bold text-[#FAF3E1]">{color.name}</span>
                        <span className="text-[#FAF3E1]/60">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Design Process */}
          <section className="border-t border-[#FAF3E1]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF3E1] mb-6">
              Iterative Execution
            </h2>
            <div className="space-y-4">
              {(project as DesignProject).designProcess.map((step, idx) => (
                <div key={idx} className="p-5 bg-[#FAF3E1]/[0.03] border border-[#FAF3E1]/15 rounded-lg flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className="px-2.5 py-1 rounded bg-[#FAF3E1]/10 text-[#FAF3E1] font-mono text-xs font-bold shrink-0 self-start">
                    {step.phase}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#FAF3E1]">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#FAF3E1]/80 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Final Outcome & Tools */}
          <section className="border-t border-[#FAF3E1]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF3E1] mb-4">
              Deliverables &amp; Impact
            </h2>
            <div className="p-6 bg-[#FAF3E1]/[0.03] border border-[#FAF3E1]/15 rounded-lg mb-6">
              <p className="font-body text-base leading-relaxed text-[#FAF3E1]/90">
                {(project as DesignProject).finalOutcome}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-[#FAF3E1]/60 uppercase">TOOLS USED:</span>
              {(project as DesignProject).toolsUsed.map((tool) => (
                <span key={tool} className="px-3 py-1 bg-[#FAF3E1]/10 border border-[#FAF3E1]/15 rounded font-mono text-xs font-bold text-[#FAF3E1]">
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ========================================================== */}
      {/* CASE STUDY SECTION: TECHNOLOGY PROJECT TEMPLATE           */}
      {/* ========================================================== */}
      {!isDesign && (
        <div className="space-y-16">
          {/* Key Metrics Strip if available */}
          {(project as TechProject).stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#FAF3E1]/[0.03] border border-[#FAF3E1]/15 rounded-lg">
              {(project as TechProject).stats!.map((st) => (
                <div key={st.label} className="font-mono">
                  <span className="block text-[10px] text-[#FAF3E1]/60 uppercase">{st.label}</span>
                  <span className="font-display text-2xl font-bold text-[#FF6D1F]">{st.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* 1. Problem Statement */}
          <section className="border-t border-[#FAF3E1]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF3E1] mb-4">
              Why This Needed To Be Built
            </h2>
            <div className="p-5 bg-[#FAF3E1]/[0.03] border-l-4 border-[#FF6D1F] border-y border-r border-[#FAF3E1]/15 rounded-r-lg font-body text-base text-[#FAF3E1]/85 leading-relaxed">
              {(project as TechProject).problemStatement}
            </div>
          </section>

          {/* 2. Solution */}
          <section className="border-t border-[#FAF3E1]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF3E1] mb-4">
              Engineered Solution
            </h2>
            <p className="font-body text-base text-[#FAF3E1]/85 leading-relaxed mb-6">
              {(project as TechProject).solution}
            </p>

            {/* Architecture Layers */}
            <div className="space-y-3">
              {(project as TechProject).architecture.layers.map((layer, idx) => (
                <div key={idx} className="p-5 bg-[#FAF3E1]/[0.03] border border-[#FAF3E1]/15 rounded-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 font-mono">
                    <span className="text-xs font-bold text-[#FF6D1F]">
                      {layer.title.toUpperCase()}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#FAF3E1]/10 text-[#FAF3E1]/70">
                      {layer.tech}
                    </span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#FAF3E1]/80 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Tech Stack Breakdown */}
          <section className="border-t border-[#FAF3E1]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF3E1] mb-4">
              Libraries &amp; Runtime Environment
            </h2>
            <div className="flex flex-wrap gap-2">
              {(project as TechProject).techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full bg-[#FAF3E1]/10 border border-[#FAF3E1]/20 text-[#FAF3E1] font-mono text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* 4. Code Sample / Key Implementation Details */}
          {(project as TechProject).codeSnippet && (
            <section className="border-t border-[#FAF3E1]/15 pt-8">
              <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#FAF3E1]/70">
                <span className="flex items-center gap-1.5">
                  <FileCode2 className="w-4 h-4 text-[#FF6D1F]" />
                  {(project as TechProject).codeSnippet!.filename}
                </span>
                <span className="uppercase text-[10px]">TypeScript</span>
              </div>
              <pre className="p-5 bg-black/50 text-[#FAF3E1] rounded-lg overflow-x-auto font-mono text-xs leading-relaxed border border-[#FAF3E1]/15">
                <code>{(project as TechProject).codeSnippet!.code}</code>
              </pre>
            </section>
          )}

          {/* 5. Key Implementation Details List */}
          <section className="border-t border-[#FAF3E1]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF3E1] mb-4">
              Engineering Feats
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(project as TechProject).keyImplementationDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-[#FAF3E1]/[0.03] border border-[#FAF3E1]/15 rounded">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6D1F] shrink-0 mt-0.5" />
                  <span className="font-body text-xs sm:text-sm text-[#FAF3E1]/80">{detail}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Challenges & Learnings */}
          <section className="border-t border-[#FAF3E1]/15 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF3E1] mb-4">
              Overcoming Engineering Roadblocks
            </h2>
            <div className="space-y-4">
              {(project as TechProject).challengesAndLearnings.map((item, idx) => (
                <div key={idx} className="p-5 bg-[#FAF3E1]/[0.03] border border-[#FAF3E1]/15 rounded-lg space-y-2">
                  <div className="font-mono text-xs font-bold text-[#FAF3E1] flex items-center gap-2">
                    <span className="text-[#FF6D1F]">CHALLENGE:</span>
                    <span>{item.challenge}</span>
                  </div>
                  <div className="font-body text-xs sm:text-sm text-[#FAF3E1]/80 pl-4 border-l-2 border-[#FF6D1F]">
                    <strong className="text-[#FAF3E1]">Learning &amp; Solution: </strong>
                    {item.learning}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Next / Previous Project Navigation Footer */}
      <footer className="mt-20 pt-8 border-t border-[#FAF3E1]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 font-mono text-xs">
        {prevProject ? (
          <Link
            to={`/projects/${category}/${prevProject.slug}`}
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 text-[#FAF3E1] hover:text-[#FF6D1F] transition-colors p-3 rounded border border-[#FAF3E1]/15 hover:border-[#FF6D1F]"
          >
            <ArrowLeft className="w-4 h-4" />
            <div>
              <span className="text-[10px] text-[#FAF3E1]/60 block uppercase">PREVIOUS PROJECT</span>
              <span className="font-bold">{prevProject.title}</span>
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
            className="flex items-center gap-2 text-[#FAF3E1] hover:text-[#FF6D1F] transition-colors p-3 rounded border border-[#FAF3E1]/15 hover:border-[#FF6D1F] text-right"
          >
            <div>
              <span className="text-[10px] text-[#FAF3E1]/60 block uppercase">NEXT PROJECT</span>
              <span className="font-bold">{nextProject.title}</span>
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
