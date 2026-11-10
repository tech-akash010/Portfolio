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
        return <Compass className="w-5 h-5 text-[#FF6D1F]" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-[#FF6D1F]" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-[#FF6D1F]" />;
      case 'Film':
        return <Film className="w-5 h-5 text-[#FF6D1F]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#FF6D1F]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#FF6D1F]" />;
    }
  };

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 md:px-12 max-w-5xl mx-auto min-h-screen">
      {/* 1. Page Header & Introduction */}
      <header className="border-b border-[#222222]/15 pb-12 mb-16">
        <span className="font-mono text-xs tracking-widest text-[#FF6D1F] uppercase block mb-2">
          BIOGRAPHY // PROFILE DOSSIER
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#222222] leading-[1.05]">
          A CURIOUS MIND<span className="text-[#FF6D1F]">.</span><br />
          A CREATIVE APPROACH<span className="text-[#FF6D1F]">.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10 items-start">
          <div className="md:col-span-8 space-y-4 font-body text-base sm:text-lg text-[#222222]/85 leading-relaxed">
            <p>
              I'm <strong className="text-[#222222]">Akash Kundu (AK)</strong>, an undergraduate Computer Science Engineering student, designer, software developer and technology enthusiast based in India.
            </p>
            <p>
              My work exists at the vital intersection of aesthetic order and computational logic. Rather than separating code from visual design, I view software engineering as the structural framework and graphic design as the expressive soul of digital experiences.
            </p>
            <p className="font-editorial italic text-xl text-[#222222]/90">
              "A mind in motion. Think. Create. Build."
            </p>
          </div>

          {/* Quick Stat / ID Card */}
          <div className="md:col-span-4 p-5 bg-[#F5E7C6] border border-[#222222]/20 rounded-lg space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[#222222]/15 pb-2">
              <span className="text-[#FF6D1F] font-bold">STATUS</span>
              <span>UNDERGRADUATE</span>
            </div>
            <div>
              <span className="text-[10px] text-[#222222]/60 block uppercase">DEGREE</span>
              <span className="font-bold text-[#222222]">B.Tech in CSE</span>
            </div>
            <div>
              <span className="text-[10px] text-[#222222]/60 block uppercase">INSTITUTION</span>
              <span className="font-bold text-[#222222]">Academy of Technology</span>
            </div>
            <div>
              <span className="text-[10px] text-[#222222]/60 block uppercase">EXPECTED COMPLETION</span>
              <span className="text-[#FF6D1F] font-bold">2028</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. My Journey: Interactive Vertical Timeline */}
      <section className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#222222]/15 pb-4 mb-10 gap-2">
          <div>
            <span className="font-mono text-xs text-[#FF6D1F] uppercase tracking-widest block mb-1">
              CHRONOLOGY // 2024 — 2028
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#222222]">
              MY JOURNEY<span className="text-[#FF6D1F]">.</span>
            </h2>
          </div>
          <span className="font-mono text-xs text-[#222222]/60">
            Interactive progression timeline
          </span>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#222222]/20 space-y-12">
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
                      ? 'border-[#FF6D1F] bg-[#FF6D1F] text-[#FAF3E1] scale-110'
                      : 'border-[#222222] bg-[#FAF3E1] text-[#222222] group-hover:border-[#FF6D1F]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>

                {/* Milestone Content Card */}
                <div
                  className={`p-6 rounded-lg border transition-all ${
                    isSelected
                      ? 'bg-[#222222] text-[#FAF3E1] border-[#222222] shadow-xl'
                      : 'bg-[#FAF3E1] text-[#222222] border-[#222222]/15 hover:border-[#FF6D1F]'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span
                      className={`text-xl font-display font-black tracking-tight ${
                        isSelected ? 'text-[#FF6D1F]' : 'text-[#FF6D1F]'
                      }`}
                    >
                      {item.year}
                    </span>
                    <span
                      className={`uppercase text-[10px] tracking-wider px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#FAF3E1]/10 text-[#FAF3E1]/80'
                          : 'bg-[#F5E7C6] text-[#222222]/70'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p
                    className={`font-editorial italic text-base mt-1 ${
                      isSelected ? 'text-[#FAF3E1]/80' : 'text-[#222222]/70'
                    }`}
                  >
                    {item.subtitle}
                  </p>

                  <p
                    className={`font-body text-xs sm:text-sm mt-3 leading-relaxed ${
                      isSelected ? 'text-[#FAF3E1]/80' : 'text-[#222222]/80'
                    }`}
                  >
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-current/10">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={`font-mono text-[9px] uppercase px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-[#FAF3E1]/15 text-[#FAF3E1]'
                            : 'bg-[#F5E7C6] text-[#222222]'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Experience and Leadership */}
      <section className="mb-20">
        <div className="border-b border-[#222222]/15 pb-4 mb-8">
          <span className="font-mono text-xs text-[#FF6D1F] uppercase tracking-widest block mb-1">
            LEADERSHIP // COMMUNITY &amp; INITIATIVE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#222222]">
            EXPERIENCE &amp; IMPACT<span className="text-[#FF6D1F]">.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {experienceAndLeadership.map((role) => (
            <div
              key={role.role}
              className="p-6 sm:p-8 bg-[#FAF3E1] border border-[#222222]/20 rounded-lg hover:border-[#FF6D1F] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#222222]/10 pb-4 mb-4">
                <div>
                  <span className="font-mono text-[10px] uppercase text-[#FF6D1F] tracking-widest block">
                    {role.type}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#222222]">
                    {role.role}
                  </h3>
                  <span className="font-mono text-xs text-[#222222]/70">
                    {role.organization} • {role.location}
                  </span>
                </div>
                <div className="font-mono text-xs text-[#222222]/60 self-start sm:self-auto bg-[#F5E7C6] px-3 py-1 rounded">
                  {role.period}
                </div>
              </div>

              <p className="font-body text-sm sm:text-base text-[#222222]/85 leading-relaxed">
                {role.description}
              </p>

              <div className="mt-4 space-y-2">
                <span className="font-mono text-xs font-bold text-[#222222] uppercase tracking-wide block">
                  Key Accomplishments:
                </span>
                <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-[#222222]/80">
                  {role.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-[#222222]/10">
                {role.skills.map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-[#F5E7C6] rounded font-mono text-[10px] text-[#222222]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Education Deep-Dive */}
      <section className="mb-20">
        <div className="border-b border-[#222222]/15 pb-4 mb-8">
          <span className="font-mono text-xs text-[#FF6D1F] uppercase tracking-widest block mb-1">
            ACADEMIC QUALIFICATIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#222222]">
            EDUCATION<span className="text-[#FF6D1F]">.</span>
          </h2>
        </div>

        <div className="p-8 bg-[#F5E7C6] border border-[#222222]/20 rounded-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#222222]/15 pb-4">
            <div>
              <div className="flex items-center gap-2 text-[#222222]">
                <GraduationCap className="w-5 h-5 text-[#FF6D1F]" />
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#222222]">
                  {educationDetails.institution}
                </h3>
              </div>
              <p className="font-mono text-xs text-[#222222]/70 mt-1">
                {educationDetails.degree} in {educationDetails.major}
              </p>
            </div>
            <span className="font-mono text-xs bg-[#222222] text-[#FAF3E1] px-3.5 py-1.5 rounded-full font-bold self-start sm:self-auto">
              {educationDetails.period}
            </span>
          </div>

          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#222222] block mb-3">
              Core Technical Coursework:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {educationDetails.coursework.map((course) => (
                <div key={course} className="p-2.5 bg-[#FAF3E1] border border-[#222222]/10 rounded font-mono text-xs text-[#222222]/90 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D1F]" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skills Grid Summary */}
      <section className="mb-20">
        <div className="border-b border-[#222222]/15 pb-4 mb-8">
          <span className="font-mono text-xs text-[#FF6D1F] uppercase tracking-widest block mb-1">
            CORE CAPABILITIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#222222]">
            SKILLS &amp; METHODOLOGIES<span className="text-[#FF6D1F]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((cat) => (
            <div key={cat.id} className="p-6 bg-[#FAF3E1] border border-[#222222]/15 rounded-lg space-y-4">
              <div className="font-mono text-xs text-[#FF6D1F] font-bold uppercase">
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span key={s.name} className="px-2.5 py-1 rounded bg-[#F5E7C6] font-mono text-xs text-[#222222]">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Beyond the Screen: Personal Interests */}
      <section className="mb-12">
        <div className="border-b border-[#222222]/15 pb-4 mb-8">
          <span className="font-mono text-xs text-[#FF6D1F] uppercase tracking-widest block mb-1">
            LIFESTYLE &amp; EXPLORATION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#222222]">
            BEYOND THE SCREEN<span className="text-[#FF6D1F]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInterests.map((interest) => (
            <div
              key={interest.title}
              className="p-6 bg-[#FAF3E1] border border-[#222222]/15 rounded-lg hover:border-[#FF6D1F] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#F5E7C6] flex items-center justify-center">
                    {getInterestIcon(interest.iconName)}
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#222222] text-[#FAF3E1] uppercase font-bold">
                    {interest.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#222222]">
                  {interest.title}
                </h3>
                <span className="font-editorial italic text-xs text-[#222222]/70 block mt-0.5">
                  {interest.subtitle}
                </span>
                <p className="font-body text-xs sm:text-sm text-[#222222]/80 mt-3 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Callout */}
      <div className="p-8 bg-[#222222] text-[#FAF3E1] rounded-lg text-center space-y-4">
        <h3 className="font-display text-2xl sm:text-3xl font-bold">
          Interested in collaborating or discussing an idea?
        </h3>
        <p className="font-body text-sm text-[#FAF3E1]/70 max-w-md mx-auto">
          I'm always open to talking about software engineering, creative design, or student tech initiatives.
        </p>
        <Link
          to="/connect"
          onMouseEnter={() => setCursorType('hover')}
          onMouseLeave={resetCursor}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6D1F] text-[#FAF3E1] font-mono text-xs uppercase font-bold rounded-full hover:bg-[#FAF3E1] hover:text-[#222222] transition-colors"
        >
          <span>Connect With AK</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

