import React, { useState } from 'react';
import { skillsData, SkillItem } from '../../data/skillsData';
import { useCursor } from '../../components/CustomCursor/CursorContext';
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
          Structured capabilities across engineering, visual craft, and developer workflow. Hover any label for details.
        </p>
      </div>

      {/* Structured Category Rows with Thin Dividers */}
      <div className="space-y-12">
        {skillsData.map((category, index) => (
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

            {/* Interactive Skill Badges & Typography Labels Col */}
            <div className="lg:col-span-9 flex flex-wrap gap-2.5 sm:gap-3">
              {category.skills.map((skill) => {
                const isSelected = activeSkill?.name === skill.name;

                return (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => setActiveSkill(skill)}
                    onMouseEnter={() => {
                      setActiveSkill(skill);
                      setCursorType('hover');
                    }}
                    onMouseLeave={() => {
                      resetCursor();
                    }}
                    className={`group relative text-left px-4 py-2.5 rounded border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#222222] text-[#FAF3E1] border-[#222222] shadow-md'
                        : skill.highlight
                        ? 'bg-[#F5E7C6] text-[#222222] border-[#222222]/20 hover:border-[#FF6D1F]'
                        : 'bg-[#FAF3E1] text-[#222222] border-[#222222]/15 hover:border-[#FF6D1F]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-display font-semibold text-sm sm:text-base tracking-tight">
                        {skill.name}
                      </span>
                      <span
                        className={`font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded ${
                          isSelected
                            ? 'bg-[#FF6D1F] text-[#FAF3E1]'
                            : 'bg-[#222222]/5 text-[#222222]/60 group-hover:text-[#FF6D1F]'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Active Skill Inspector Box */}
      <div className="mt-8 p-6 bg-[#F5E7C6]/70 border border-[#222222]/20 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#FF6D1F] uppercase tracking-wider mb-1">
            <span>TOOL INSPECTOR</span>
            <span>•</span>
            <span>{activeSkill ? activeSkill.category.toUpperCase() : 'HOVER ANY SKILL'}</span>
          </div>
          <div className="font-display text-lg font-bold text-[#222222]">
            {activeSkill ? activeSkill.name : 'Interactive Skill Architecture'}
          </div>
          <p className="font-body text-xs sm:text-sm text-[#222222]/80 mt-1 max-w-xl">
            {activeSkill
              ? activeSkill.description
              : 'Every skill listed represents practical project implementation in real codebases, published design files, or campus leadership.'}
          </p>
        </div>

        {activeSkill && (
          <div className="shrink-0 font-mono text-xs text-[#222222]/70 bg-[#FAF3E1] px-3 py-1.5 rounded border border-[#222222]/15">
            PROFICIENCY: <strong className="text-[#FF6D1F]">{activeSkill.level}</strong>
          </div>
        )}
      </div>
    </section>
  );
};

