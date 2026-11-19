import React from 'react';
import { Link } from 'react-router-dom';
import { techProjects } from '../../data/projectsData';
import { ProjectVisualPreview } from '../../components/ProjectCard/ProjectVisualPreview';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const TechProjectsPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="border-b border-[#eaf8bf]/15 pb-8 mb-12">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#eaf8bf]">
          TECHNOLOGY PROJECTS<span className="text-[#eca400]">.</span>
        </h1>
        <p className="font-editorial italic text-xl sm:text-2xl text-[#eaf8bf]/70 mt-3 max-w-2xl">
          Software development, web applications, AI-powered products, programming and technical experiments.
        </p>
      </div>

      {/* Structured Technical Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#eca400] hover:shadow-xl transition-all duration-300"
          >
            {/* Visual Container */}
            <Link
              to={`/projects/technology/${project.slug}`}
              onMouseEnter={() => setCursorType('project', 'VIEW PROJECT')}
              onMouseLeave={resetCursor}
              className="h-60 w-full border-b border-[#eaf8bf]/15 block overflow-hidden"
            >
              <ProjectVisualPreview slug={project.slug} />
            </Link>

            {/* Content Details */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#eaf8bf]/60 mb-2">
                  <span className="text-[#eca400] font-bold uppercase tracking-wider">{project.subcategory}</span>
                  <span>{project.year}</span>
                </div>

                <Link
                  to={`/projects/technology/${project.slug}`}
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={resetCursor}
                >
                  <h2 className="font-display text-2xl font-bold tracking-tight text-[#eaf8bf] group-hover:text-[#eca400] transition-colors">
                    {project.title}
                  </h2>
                </Link>

                <p className="font-body text-xs sm:text-sm text-[#eaf8bf]/75 mt-2 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="mt-4 pt-3 border-t border-[#eaf8bf]/10 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#eaf8bf]/10 text-[#eaf8bf]/80 font-mono text-[9px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* External Action Links (GitHub, Live Demo & Case Study) */}
                <div className="mt-4 pt-3 border-t border-[#eaf8bf]/10 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setCursorType('external')}
                      onMouseLeave={resetCursor}
                      className="text-[#eaf8bf]/70 hover:text-[#eaf8bf] flex items-center gap-1"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Code</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setCursorType('external')}
                        onMouseLeave={resetCursor}
                        className="text-[#eaf8bf]/70 hover:text-[#eca400] flex items-center gap-1"
                        title="Live Application Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Live</span>
                      </a>
                    )}
                  </div>

                  <Link
                    to={`/projects/technology/${project.slug}`}
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={resetCursor}
                    className="font-bold text-[#eca400] hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <span>Read Study</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
