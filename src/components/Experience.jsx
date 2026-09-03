import React from 'react';
import { GraduationCap, Gem, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { journeyData } from '../data/experience';

export const Experience = () => {
  const { t } = useLanguage();

  const getLogoBgClass = (exp) => {
    if (exp.id === 'electratour' || exp.organization?.toLowerCase().includes('electra')) {
      return 'bg-zinc-950 border-zinc-800';
    }
    if (exp.id === 'cipta-solutindo' || exp.organization?.toLowerCase().includes('cipta')) {
      return 'bg-white border-zinc-200';
    }
    return 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800';
  };

  return (
    <section id="journey" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Numbered Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-4"
        >
          <span className="font-semibold text-zinc-950 dark:text-zinc-100">04</span>
          <span>/</span>
          <span>Journey</span>
        </motion.div>

        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-800"
        >
          <div>
            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block mb-1">
              Learning & Experience
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 uppercase tracking-tight">
              MY JOURNEY
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-700 dark:text-zinc-400 mt-4 md:mt-0 max-w-md">
            An honest reflection of work experiences, software engineering milestones, and web development journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Timeline Column with Line & Dots */}
          <div className="lg:col-span-8 space-y-12">
            <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-6 sm:pl-8 space-y-12">
              {journeyData.experiences.map((exp, idx) => (
                <motion.div 
                  key={exp.id || idx} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <motion.span 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 + 0.2 }}
                    className="absolute -left-[31px] sm:-left-[39px] top-2 w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-zinc-950 dark:group-hover:bg-zinc-100 group-hover:scale-125 transition-all duration-300 ring-4 ring-white dark:ring-zinc-950" 
                  />

                  <div className="space-y-4">
                    {/* Header: Company Logo + Role & Organization */}
                    <div className="flex items-start space-x-4">
                      {/* Company Logo */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl border p-1 flex items-center justify-center flex-shrink-0 shadow-sm ${getLogoBgClass(exp)}`}>
                        {exp.logo ? (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.organization} logo`} 
                            className="w-full h-full object-contain rounded-lg"
                          />
                        ) : (
                          <Building2 className="w-6 h-6 text-zinc-400" />
                        )}
                      </div>

                      {/* Role & Company Header */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-50 leading-tight">
                          {t(exp.role)}
                        </h3>
                        
                        <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 flex flex-wrap items-center gap-1.5 mt-0.5">
                          <span>{exp.organization}</span>
                          {exp.employmentType && (
                            <>
                              <span className="text-zinc-400">•</span>
                              <span className="text-zinc-600 dark:text-zinc-400 font-normal">{t(exp.employmentType)}</span>
                            </>
                          )}
                        </div>

                        <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1 space-y-0.5">
                          <div>{t(exp.period)}</div>
                          <div>{t(exp.location)}</div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights / Bullet points */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300 pt-1">
                        {exp.highlights.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2.5">
                            <span className="text-zinc-400 dark:text-zinc-500 select-none mt-0.5">•</span>
                            <span className="leading-relaxed">{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Skills Badges */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        <Gem className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400 flex-shrink-0" />
                        <div className="flex flex-wrap items-center gap-1.5">
                          {exp.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-[11px] font-medium border border-zinc-200 dark:border-zinc-700/60">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Card Sidebar - KEPT UNTOUCHED */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 bg-zinc-100/60 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg border border-zinc-200 dark:border-zinc-800 space-y-6 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors duration-300 shadow-sm hover:shadow-md sticky top-24"
          >
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-semibold">
              <GraduationCap className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
              <span>Education</span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 block mb-1">Degree</span>
                <h4 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">
                  {t(journeyData.education.degree)}
                </h4>
              </div>

              <div>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 block mb-1">University</span>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                  {journeyData.education.institution}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <div>
                  <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 block mb-0.5">Timeline</span>
                  <span className="text-xs font-mono font-medium text-zinc-950 dark:text-zinc-100">
                    {journeyData.education.period}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 block mb-0.5">Status</span>
                  <span className="text-xs font-mono font-medium text-zinc-950 dark:text-zinc-100">
                    {t(journeyData.education.status)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
