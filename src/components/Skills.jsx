import React, { useMemo } from 'react';
import { Cpu, ShieldCheck, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/skills';

/* ── Marquee keyframes ── */
const marqueeStyles = `
@keyframes ticker-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes ticker-right {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
.ticker-l { animation: ticker-left  var(--dur, 30s) linear infinite; }
.ticker-r { animation: ticker-right var(--dur, 30s) linear infinite; }
.ticker-l:hover,
.ticker-r:hover { animation-play-state: paused; }
`;

const levelColor = (level) => {
  if (level === 'Intermediate')
    return 'text-zinc-950 dark:text-zinc-50 border-zinc-950 dark:border-zinc-50';
  if (level === 'Familiar')
    return 'text-zinc-500 dark:text-zinc-400 border-zinc-400 dark:border-zinc-600';
  return 'text-zinc-300 dark:text-zinc-700 border-zinc-200 dark:border-zinc-800';
};

/* Row config: font size, direction, speed */
const ROW_CONFIG = [
  { size: 'text-sm',    dir: 'l', dur: '22s' },
  { size: 'text-2xl',  dir: 'r', dur: '32s' },
  { size: 'text-xs',   dir: 'l', dur: '18s' },
  { size: 'text-lg',   dir: 'r', dur: '28s' },
];

const learningIcons = [
  <Cpu className="w-3.5 h-3.5" />,
  <ShieldCheck className="w-3.5 h-3.5" />,
  <Terminal className="w-3.5 h-3.5" />,
];

export const Skills = () => {
  const { t } = useLanguage();

  /* All skills flattened, shuffled into 4 rows */
  const allSkills = useMemo(() => {
    return skillsData.categories.flatMap((cat) => cat.skills);
  }, []);

  /* Distribute skills across 4 rows in round-robin */
  const rows = useMemo(() => {
    const r = [[], [], [], []];
    allSkills.forEach((s, i) => r[i % 4].push(s));
    return r;
  }, [allSkills]);

  return (
    <section id="skills" className="py-24 border-t border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <style>{marqueeStyles}</style>

      {/* ── Section header (padded) ── */}
      <div className="max-w-6xl mx-auto px-6 mb-14">
        <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">02</span>
          <span>/</span>
          <span>Skills</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4">
          <div>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
              My Toolkit
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 uppercase tracking-tight">
              SKILLS &amp; CAPABILITIES
            </h2>
          </div>
          {/* Legend */}
          <div className="flex items-center gap-5 text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-950 dark:bg-zinc-50 inline-block" />
              Intermediate
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 inline-block" />
              Familiar
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-700 inline-block" />
              Learning
            </span>
          </div>
        </div>
      </div>

      {/* ── Ticker wall — full viewport width ── */}
      <div className="flex flex-col gap-3 mb-20 py-4 border-y border-zinc-100 dark:border-zinc-900">
        {rows.map((row, rIdx) => {
          const cfg = ROW_CONFIG[rIdx];
          const doubled = [...row, ...row];
          return (
            <div key={rIdx} className="overflow-hidden w-full">
              <div
                className={`flex items-center gap-8 w-max ${cfg.dir === 'l' ? 'ticker-l' : 'ticker-r'}`}
                style={{ '--dur': cfg.dur }}
              >
                {doubled.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`inline-flex items-center gap-2.5 font-mono font-semibold whitespace-nowrap border-b pb-0.5 ${cfg.size} ${levelColor(skill.level.en)}`}
                  >
                    {skill.name}
                    <span className="text-zinc-200 dark:text-zinc-800 font-light">·</span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Category breakdown (simple) ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 mb-16">
          {skillsData.categories.map((cat, cIdx) => (
            <div key={cIdx}>
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-3 pb-2 border-b border-zinc-100 dark:border-zinc-900">
                {t(cat.name)}
              </h3>
              <ul className="space-y-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className={`text-sm font-medium flex items-center gap-2 ${
                      skill.level.en === 'Intermediate'
                        ? 'text-zinc-900 dark:text-zinc-100'
                        : skill.level.en === 'Familiar'
                        ? 'text-zinc-600 dark:text-zinc-400'
                        : 'text-zinc-400 dark:text-zinc-600'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        skill.level.en === 'Intermediate'
                          ? 'bg-zinc-900 dark:bg-zinc-100'
                          : skill.level.en === 'Familiar'
                          ? 'bg-zinc-400 dark:bg-zinc-500'
                          : 'bg-zinc-200 dark:bg-zinc-700'
                      }`}
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Currently Learning (compact tags) ── */}
        <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-8">
            <Terminal className="w-4 h-4" />
            <span className="font-bold text-zinc-900 dark:text-zinc-100">Currently Learning</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsData.learningAreas.map((area, aIdx) => (
              <div
                key={aIdx}
                className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30"
              >
                <h4 className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2 uppercase tracking-widest">
                  <span className="text-zinc-400 dark:text-zinc-500">{learningIcons[aIdx]}</span>
                  {t(area.title)}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {area.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-600 mt-6 text-center italic">
            Cybersecurity explorations are strictly conducted within authorized local lab environments (VirtualBox, Metasploitable, DVWA).
          </p>
        </div>
      </div>
    </section>
  );
};
