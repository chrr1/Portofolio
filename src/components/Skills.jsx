import React from 'react';
import { CheckCircle2, ShieldCheck, Cpu, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/skills';

export const Skills = () => {
  const { lang, t } = useLanguage();

  const getLevelBadgeClass = (levelId) => {
    switch (levelId) {
      case 'Intermediate':
        return 'bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-950';
      case 'Familiar':
        return 'bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200';
      case 'Learning':
      default:
        return 'bg-zinc-100 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800';
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Numbered Section Header */}
        <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">02</span>
          <span>/</span>
          <span>Skills</span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
              My Toolkit
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 uppercase tracking-tight">
              SKILLS & CAPABILITIES
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-4 md:mt-0 max-w-md">
            Self-assessment categories based on hands-on practical practice, labs, and academic coursework.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillsData.categories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {t(cat.name)}
                </h3>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  0{idx + 1}
                </span>
              </div>

              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">
                      {skill.name}
                    </span>
                    <span className={`px-2 py-0.5 text-[10px] font-mono rounded ${getLevelBadgeClass(skill.level.en)}`}>
                      {t(skill.level)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section G: Current Learning Areas */}
        <div className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-6">
            <Terminal className="w-4 h-4" />
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100">Current Learning Areas</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.learningAreas.map((area, aIdx) => (
              <div key={aIdx} className="p-6 rounded-lg bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center space-x-2">
                  {aIdx === 0 && <Cpu className="w-4 h-4 text-zinc-500" />}
                  {aIdx === 1 && <ShieldCheck className="w-4 h-4 text-zinc-500" />}
                  {aIdx === 2 && <Terminal className="w-4 h-4 text-zinc-500" />}
                  <span>{t(area.title)}</span>
                </h4>
                <ul className="space-y-2">
                  {area.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start space-x-2">
                      <span className="text-zinc-400 dark:text-zinc-600 mt-0.5">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mt-6 text-center italic">
            Note: Cybersecurity explorations are strictly conducted within authorized local lab environments (VirtualBox, Metasploitable, DVWA).
          </p>
        </div>

      </div>
    </section>
  );
};
