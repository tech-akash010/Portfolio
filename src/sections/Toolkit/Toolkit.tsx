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
        return <Terminal className="w-4 h-4 text-[#eca400]" />;
      case 'design':
        return <Palette className="w-4 h-4 text-[#eca400]" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-[#eca400]" />;
      default:
        return <Layers className="w-4 h-4 text-[#eca400]" />;
    }
  };

  return (
    <section id="toolkit" className="py-24 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#eaf8bf]/15">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#eaf8bf]/15 pb-6 mb-12 gap-4">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-[#eaf8bf]">
            MY TOOLKIT<span className="text-[#eca400]">.</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-[#eaf8bf]/70 max-w-xs leading-relaxed">
          Structured capabilities across engineering, visual craft, and developer workflow. Hover any logo to inspect details.
        </p>
      </div>

      {/* Structured Category Rows with Thin Dividers */}
      <div className="space-y-12">
        {skillsData.map((category) => (
          <div
            key={category.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10 border-b border-[#eaf8bf]/15 items-start"
          >
            {/* Category Label Col */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-1">
                {getCategoryIcon(category.id)}
                <h3 className="font-display text-xl font-bold tracking-tight text-[#eaf8bf]">
                  {category.title}
                </h3>
              </div>
              <p className="font-mono text-[11px] text-[#eaf8bf]/60 mt-1">
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
                        ? 'bg-[#eca400]/20 border-[#eca400] shadow-lg shadow-[#eca400]/20 scale-105'
                        : 'bg-[#eaf8bf]/[0.04] border-[#eaf8bf]/15 hover:border-[#eca400] hover:bg-[#eaf8bf]/[0.08] hover:-translate-y-1 hover:shadow-md'
                    }`}
                  >
                    <SkillLogo
                      name={skill.name}
                      className="w-9 h-9 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Minimalist Floating Tooltip on Hover */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30 px-2.5 py-0.5 bg-[#001d4a] text-[#eaf8bf] border border-[#eaf8bf]/20 font-mono text-[10px] rounded whitespace-nowrap shadow-md">
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
      <div className="mt-10 p-6 sm:p-8 bg-[#eaf8bf]/[0.03] border border-[#eaf8bf]/15 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-5">
          {activeSkill && (
            <div className="w-16 h-16 rounded-xl bg-[#eaf8bf]/10 border border-[#eaf8bf]/15 p-2.5 flex items-center justify-center shrink-0 shadow-xs">
              <SkillLogo name={activeSkill.name} className="w-10 h-10" />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#eca400] uppercase tracking-wider mb-1">
              <span>TOOL INSPECTOR</span>
              <span>•</span>
              <span>{activeSkill ? activeSkill.category.toUpperCase() : 'HOVER ANY LOGO'}</span>
            </div>
            <div className="font-display text-xl sm:text-2xl font-bold text-[#eaf8bf]">
              {activeSkill ? activeSkill.name : 'Hover or select any tool logo'}
            </div>
            <p className="font-body text-xs sm:text-sm text-[#eaf8bf]/80 mt-1 max-w-xl leading-relaxed">
              {activeSkill
                ? activeSkill.description
                : 'Click or hover any technology logo above to inspect engineering proficiencies, implementation contexts, and tooling capabilities.'}
            </p>
          </div>
        </div>

        {activeSkill && (
          <div className="shrink-0 font-mono text-xs text-[#eaf8bf]/80 bg-[#eaf8bf]/10 px-4 py-2 rounded-full border border-[#eaf8bf]/15">
            PROFICIENCY: <strong className="text-[#eca400]">{activeSkill.level}</strong>
          </div>
        )}
      </div>
    </section>
  );
};

