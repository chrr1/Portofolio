import React from 'react';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { journeyData } from '../data/experience';

export const Experience = () => {
  const { lang, t } = useLanguage();

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
            An honest reflection of academic learning, student engineering milestones, and web development experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Timeline Column */}
          <div className="lg:col-span-8 space-y-12">
            <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-6 sm:pl-8 space-y-10">
              {journeyData.experiences.map((exp, idx) => (
                <motion.div 
                  key={idx} 
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
                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-zinc-500 dark:bg-zinc-500 group-hover:bg-zinc-950 dark:group-hover:bg-zinc-100 group-hover:scale-125 transition-all duration-300" 
                  />

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                        <Calendar className="w-3 h-3 text-zinc-600 dark:text-zinc-400" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase font-medium">
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                      {t(exp.role)}
                    </h3>

                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                      {exp.organization}
                    </p>

                    <p className="text-xs font-mono text-zinc-700 dark:text-zinc-400">
                      Focus: {t(exp.focus)}
                    </p>

                    <p className="text-sm text-zinc-800 dark:text-zinc-300 pt-2 leading-relaxed">
                      {t(exp.description)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Card Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 bg-zinc-100/60 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg border border-zinc-200 dark:border-zinc-800 space-y-6 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors duration-300 shadow-sm hover:shadow-md"
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
