import React, { useState } from 'react';
import { skillsData, SkillItem } from '../../data/skillsData';
import { useCursor } from '../../components/CustomCursor/CursorContext';
import { SkillLogo } from '../../components/Toolkit/SkillLogo';
import { Wrench, Terminal, Palette, Layers } from 'lucide-react';

export const Toolkit: React.FC = () => {
  const { setCursorType, resetCursor } = useCursor();
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'development':
        return <Terminal className="w-4 h-4 text-[#fca311]" />;
      case 'design':
        return <Palette className="w-4 h-4 text-[#fca311]" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-[#fca311]" />;
      default:
        return <Layers className="w-4 h-4 text-[#fca311]" />;
    }
  };

  return (
    <section id="toolkit" className="py-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#ffffff]/15">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#ffffff]/15 pb-6 mb-12 gap-4">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-[#ffffff]">
            MY TOOLKIT<span className="text-[#fca311]">.</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-[#e5e5e5]/70 max-w-xs leading-relaxed">
          Structured capabilities across engineering, visual craft, and developer workflow. Hover any logo to inspect details.
        </p>
      </div>

      {/* Structured Category Rows with Thin Dividers */}
      <div className="space-y-12">
        {skillsData.map((category) => (
          <div
            key={category.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 border-b border-[#ffffff]/15 items-start"
          >
            {/* Category Label Col */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-1">
                {getCategoryIcon(category.id)}
                <h3 className="font-display text-xl font-bold tracking-tight text-[#ffffff]">
                  {category.title}
                </h3>
              </div>
              <p className="font-mono text-[11px] text-[#e5e5e5]/60 mt-1">
                {category.subtitle}
              </p>
            </div>

            {/* Interactive Skill Logo Grid Col */}
            <div className="lg:col-span-9 flex flex-wrap gap-3 sm:gap-4 items-center">
              {category.skills.map((skill) => {
                const isSelected = activeSkill?.name === skill.name;

                return (
                  <button
                    key={skill.name}
                    type="button"
                    title={skill.name}
                    aria-label={skill.name}
                    onClick={() => setActiveSkill(skill)}
                    onMouseEnter={() => {
                      setActiveSkill(skill);
                      setCursorType('hover');
                    }}
                    onMouseLeave={() => {
                      resetCursor();
                    }}
                    className={`group relative p-3 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#fca311]/20 border-[#fca311] shadow-lg shadow-[#fca311]/20 scale-105'
                        : 'bg-[#ffffff]/[0.04] border-[#ffffff]/15 hover:border-[#fca311] hover:bg-[#ffffff]/[0.08] hover:-translate-y-1 hover:shadow-md'
                    }`}
                  >
                    <SkillLogo
                      name={skill.name}
                      className="w-9 h-9 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Minimalist Floating Tooltip on Hover */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30 px-2.5 py-0.5 bg-[#14213d] text-[#ffffff] border border-[#ffffff]/20 font-mono text-[10px] rounded whitespace-nowrap shadow-md">
                      {skill.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Active Skill Inspector Box */}
      <div className="mt-10 p-6 sm:p-8 bg-[#ffffff]/[0.03] border border-[#ffffff]/15 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-5">
          {activeSkill && (
            <div className="w-16 h-16 rounded-xl bg-[#ffffff]/10 border border-[#ffffff]/15 p-2.5 flex items-center justify-center shrink-0 shadow-xs">
              <SkillLogo name={activeSkill.name} className="w-10 h-10" />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#fca311] uppercase tracking-wider mb-1">
              <span>TOOL INSPECTOR</span>
              <span>•</span>
              <span>{activeSkill ? activeSkill.category.toUpperCase() : 'HOVER ANY LOGO'}</span>
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold text-[#ffffff]">
              {activeSkill ? activeSkill.name : 'Hover or select any tool logo'}
            </div>
            <p className="font-body text-xs sm:text-sm text-[#e5e5e5]/80 mt-1 max-w-xl leading-relaxed">
              {activeSkill
                ? activeSkill.description
                : 'Click or hover any technology logo above to inspect engineering proficiencies, implementation contexts, and tooling capabilities.'}
            </p>
          </div>
        </div>

        {activeSkill && (
          <div className="shrink-0 font-mono text-xs text-[#e5e5e5]/80 bg-[#ffffff]/10 px-4 py-2 rounded-full border border-[#ffffff]/15">
            PROFICIENCY: <strong className="text-[#fca311]">{activeSkill.level}</strong>
          </div>
        )}
      </div>
    </section>
  );
};

