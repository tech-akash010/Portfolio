import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { journeyTimeline, experienceAndLeadership, educationDetails, personalInterests } from '../../data/experienceData';
import { skillsData } from '../../data/skillsData';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import {
  GraduationCap,
  Users2,
  Calendar,
  Compass,
  Camera,
  Gauge,
  Film,
  Cpu,
  ArrowUpRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [activeTimelineYear, setActiveTimelineYear] = useState<string>('2026');

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#fca311]" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-[#fca311]" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-[#fca311]" />;
      case 'Film':
        return <Film className="w-5 h-5 text-[#fca311]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#fca311]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#fca311]" />;
    }
  };

  return (
    <div className="pt-36 sm:pt-40 md:pt-44 pb-24 px-6 sm:px-8 md:px-12 max-w-5xl mx-auto min-h-screen">
      {/* 1. Page Header & Introduction */}
      <header className="border-b border-[#ffffff]/15 pb-12 mb-16">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#ffffff] leading-[1.05]">
          A CURIOUS MIND<span className="text-[#fca311]">.</span><br />
          A CREATIVE APPROACH<span className="text-[#fca311]">.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10 items-start">
          <div className="md:col-span-8 space-y-4 font-body text-base sm:text-lg text-[#e5e5e5]/85 leading-relaxed">
            <p>
              I'm <strong className="text-[#ffffff]">Akash Kundu (AK)</strong>, an undergraduate Computer Science Engineering student, designer, software developer and technology enthusiast based in India.
            </p>
            <p>
              My work exists at the vital intersection of aesthetic order and computational logic. Rather than separating code from visual design, I view software engineering as the structural framework and graphic design as the expressive soul of digital experiences.
            </p>
            <p className="font-editorial italic text-xl text-[#ffffff]/90">
              "A mind in motion. Think. Create. Build."
            </p>
          </div>

          {/* Quick Stat / ID Card */}
          <div className="md:col-span-4 p-5 bg-[#14213d]/55 border border-[#ffffff]/20 rounded-xl space-y-3 font-mono text-xs shadow-lg">
            <div>
              <span className="text-[10px] text-[#e5e5e5]/60 block uppercase">DEGREE</span>
              <span className="font-bold text-[#ffffff]">B.Tech in CSE</span>
            </div>
            <div>
              <span className="text-[10px] text-[#e5e5e5]/60 block uppercase">INSTITUTION</span>
              <span className="font-bold text-[#ffffff]">Academy of Technology</span>
            </div>
            <div>
              <span className="text-[10px] text-[#e5e5e5]/60 block uppercase">GRADUATION</span>
              <span className="text-[#fca311] font-bold">2028</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. My Journey: Interactive Vertical Timeline */}
      <section className="mb-20">
        <div className="border-b border-[#ffffff]/15 pb-4 mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#ffffff]">
            MY JOURNEY<span className="text-[#fca311]">.</span>
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#ffffff]/20 space-y-12">
          {journeyTimeline.map((item) => {
            const isSelected = activeTimelineYear === item.year;

            return (
              <div
                key={item.year}
                onClick={() => setActiveTimelineYear(item.year)}
                className="relative group cursor-pointer"
              >
                {/* Year Marker on Timeline Axis */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                    isSelected
                      ? 'border-[#fca311] bg-[#fca311] text-[#000000] scale-110'
                      : 'border-[#ffffff]/40 bg-[#000000] text-[#ffffff] group-hover:border-[#fca311]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>

                {/* Milestone Content Card */}
                <div
                  className={`p-6 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[#14213d]/85 text-[#ffffff] border-[#fca311] shadow-2xl scale-[1.01]'
                      : 'bg-[#14213d]/45 text-[#ffffff] border-[#ffffff]/15 hover:border-[#fca311]'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span
                      className={`text-xl font-display font-black tracking-tight text-[#fca311]`}
                    >
                      {item.year}
                    </span>
                    <span
                      className={`uppercase text-[10px] tracking-wider px-2 py-0.5 rounded bg-[#ffffff]/10 text-[#e5e5e5]/80`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#ffffff]">
                    {item.title}
                  </h3>
                  <p className="font-editorial italic text-base mt-1 text-[#e5e5e5]/70">
                    {item.subtitle}
                  </p>

                  <p className="font-body text-xs sm:text-sm mt-3 leading-relaxed text-[#e5e5e5]/80">
                    {item.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#ffffff]/10">
                    {item.tags.map((h) => (
                      <span
                        key={h}
                        className="font-mono text-[9px] uppercase px-2 py-0.5 rounded bg-[#ffffff]/10 text-[#e5e5e5]/80"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Experience & Leadership */}
      <section className="mb-20">
        <div className="border-b border-[#ffffff]/15 pb-4 mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#ffffff]">
            EXPERIENCE &amp; IMPACT<span className="text-[#fca311]">.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {experienceAndLeadership.map((exp) => (
            <div
              key={exp.role}
              className="p-6 sm:p-8 bg-[#14213d]/50 border border-[#ffffff]/20 rounded-xl hover:border-[#fca311] transition-all shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ffffff]/10 pb-4 mb-4">
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#fca311] tracking-widest block">
                    {exp.type}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#ffffff]">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-[#e5e5e5]/70">
                    {exp.organization}
                  </span>
                </div>
                <div className="font-mono text-xs text-[#e5e5e5]/70 self-start sm:self-auto bg-[#ffffff]/10 px-3 py-1 rounded">
                  {exp.period}
                </div>
              </div>

              <p className="font-body text-sm sm:text-base text-[#e5e5e5]/85 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="mt-4 space-y-2">
                <span className="font-mono text-xs font-bold text-[#ffffff] uppercase tracking-wide block">
                  Key Responsibilities &amp; Initiatives:
                </span>
                <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-[#e5e5e5]/80">
                  {exp.achievements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              {/* Skills used */}
              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-[#ffffff]/10">
                {exp.skills.map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-[#ffffff]/10 rounded font-mono text-[10px] text-[#e5e5e5]/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Education Deep Dive */}
      <section className="mb-20">
        <div className="border-b border-[#ffffff]/15 pb-4 mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#ffffff]">
            EDUCATION<span className="text-[#fca311]">.</span>
          </h2>
        </div>

        <div className="p-8 bg-[#14213d]/50 border border-[#ffffff]/20 rounded-xl space-y-6 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ffffff]/15 pb-4">
            <div>
              <div className="flex items-center gap-2 text-[#ffffff]">
                <GraduationCap className="w-5 h-5 text-[#fca311]" />
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#ffffff]">
                  {educationDetails.degree}
                </h3>
              </div>
              <p className="font-mono text-xs text-[#e5e5e5]/70 mt-1">
                {educationDetails.institution} • {educationDetails.location}
              </p>
            </div>
            <span className="font-mono text-xs bg-[#ffffff]/10 border border-[#ffffff]/15 text-[#ffffff] px-3.5 py-1.5 rounded-full font-bold self-start sm:self-auto">
              {educationDetails.period}
            </span>
          </div>

          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ffffff] block mb-3">
              Core Coursework &amp; Academic Focus:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {educationDetails.coursework.map((course) => (
                <div key={course} className="p-2.5 bg-[#ffffff]/[0.04] border border-[#ffffff]/10 rounded font-mono text-xs text-[#e5e5e5]/90 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fca311]" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Skills Matrix */}
      <section className="mb-20">
        <div className="border-b border-[#ffffff]/15 pb-4 mb-8">
          <span className="font-mono text-xs text-[#fca311] uppercase tracking-widest block mb-1">
            TECHNICAL REPERTOIRE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#ffffff]">
            SKILLS &amp; METHODOLOGIES<span className="text-[#fca311]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((cat) => (
            <div key={cat.id} className="p-6 bg-[#14213d]/50 border border-[#ffffff]/20 rounded-xl space-y-4 shadow-lg">
              <div className="font-mono text-xs text-[#fca311] font-bold uppercase">
                {cat.title}
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s.name} className="px-2.5 py-1 rounded bg-[#ffffff]/10 font-mono text-xs text-[#e5e5e5]/80">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Personal Interests & Dimensions */}
      <section className="mb-20">
        <div className="border-b border-[#ffffff]/15 pb-4 mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#ffffff]">
            BEYOND THE SCREEN<span className="text-[#fca311]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {personalInterests.map((interest) => (
            <div
              key={interest.title}
              className="p-6 bg-[#14213d]/30 border border-[#ffffff]/15 rounded-lg hover:border-[#fca311] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#ffffff]/10 flex items-center justify-center">
                    {getInterestIcon(interest.iconName)}
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#ffffff]/10 border border-[#ffffff]/15 text-[#ffffff] uppercase font-bold">
                    {interest.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#ffffff]">
                  {interest.title}
                </h3>
                <span className="font-editorial italic text-xs text-[#e5e5e5]/70 block mt-0.5">
                  {interest.subtitle}
                </span>
                <p className="font-body text-xs sm:text-sm text-[#e5e5e5]/80 mt-3 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Callout */}
      <div className="p-8 bg-[#14213d]/40 border border-[#ffffff]/15 text-[#ffffff] rounded-lg text-center space-y-4">
        <h3 className="font-display text-2xl sm:text-3xl font-bold">
          Want to collaborate or discuss an idea?
        </h3>
        <p className="font-body text-sm text-[#e5e5e5]/70 max-w-md mx-auto">
          I'm always open to discussing new projects, creative challenges, or opportunities to be part of your vision.
        </p>
        <div className="pt-2">
          <Link
            to="/connect"
            onMouseEnter={() => setCursorType('hover')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#fca311] text-[#000000] font-mono text-xs uppercase font-bold rounded-full hover:bg-[#ffffff] hover:text-[#000000] transition-colors"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
