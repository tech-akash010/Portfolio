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
        return <Terminal className="w-4 h-4 text-[#FF6D1F]" />;
      case 'design':
        return <Palette className="w-4 h-4 text-[#FF6D1F]" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-[#FF6D1F]" />;
      default:
        return <Layers className="w-4 h-4 text-[#FF6D1F]" />;
    }
  };

  return (
    <section id="toolkit" className="py-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#222222]/15">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#222222]/15 pb-6 mb-12 gap-4">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-[#222222]">
            MY TOOLKIT<span className="text-[#FF6D1F]">.</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-[#222222]/70 max-w-xs leading-relaxed">
          Structured capabilities across engineering, visual craft, and developer workflow. Hover any logo to inspect details.
        </p>
      </div>

      {/* Structured Category Rows with Thin Dividers */}
      <div className="space-y-12">
        {skillsData.map((category) => (
          <div
            key={category.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 border-b border-[#222222]/15 items-start"
          >
            {/* Category Label Col */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-1">
                {getCategoryIcon(category.id)}
                <h3 className="font-display text-xl font-bold tracking-tight text-[#222222]">
                  {category.title}
                </h3>
              </div>
              <p className="font-mono text-[11px] text-[#222222]/60 mt-1">
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
                        ? 'bg-[#222222] border-[#FF6D1F] shadow-lg shadow-[#FF6D1F]/20 scale-105'
                        : skill.highlight
                        ? 'bg-[#F5E7C6] border-[#222222]/20 hover:border-[#FF6D1F] hover:-translate-y-1 hover:shadow-md'
                        : 'bg-[#FAF3E1] border-[#222222]/15 hover:border-[#FF6D1F] hover:-translate-y-1 hover:shadow-md'
                    }`}
                  >
                    <SkillLogo
                      name={skill.name}
                      className="w-9 h-9 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Minimalist Floating Tooltip on Hover */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30 px-2.5 py-0.5 bg-[#222222] text-[#FAF3E1] font-mono text-[10px] rounded whitespace-nowrap shadow-md">
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
      <div className="mt-10 p-6 sm:p-8 bg-[#F5E7C6]/70 border border-[#222222]/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-5">
          {activeSkill && (
            <div className="w-16 h-16 rounded-xl bg-[#FAF3E1] border border-[#222222]/15 p-2.5 flex items-center justify-center shrink-0 shadow-xs">
              <SkillLogo name={activeSkill.name} className="w-10 h-10" />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#FF6D1F] uppercase tracking-wider mb-1">
              <span>TOOL INSPECTOR</span>
              <span>•</span>
              <span>{activeSkill ? activeSkill.category.toUpperCase() : 'HOVER ANY LOGO'}</span>
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold text-[#222222]">
              {activeSkill ? activeSkill.name : 'Hover or select any tool logo'}
            </div>
            <p className="font-body text-xs sm:text-sm text-[#222222]/80 mt-1 max-w-xl leading-relaxed">
              {activeSkill
                ? activeSkill.description
                : 'Click or hover any technology logo above to inspect engineering proficiencies, implementation contexts, and tooling capabilities.'}
            </p>
          </div>
        </div>

        {activeSkill && (
          <div className="shrink-0 font-mono text-xs text-[#222222]/70 bg-[#FAF3E1] px-4 py-2 rounded-full border border-[#222222]/15">
            PROFICIENCY: <strong className="text-[#FF6D1F]">{activeSkill.level}</strong>
          </div>
        )}
      </div>
    </section>
  );
};

