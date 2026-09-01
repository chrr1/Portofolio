import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';

export const About = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Numbered Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-12"
        >
          <span className="font-semibold text-zinc-950 dark:text-zinc-100">01</span>
          <span>/</span>
          <span>About</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Philosophical Tagline & Main Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight leading-tight">
              {t({ id: profileData.bio.id.headline, en: profileData.bio.en.headline })}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-800 dark:text-zinc-300 leading-relaxed font-normal pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <p>{t({ id: profileData.bio.id.paragraph1, en: profileData.bio.en.paragraph1 })}</p>
              <p>{t({ id: profileData.bio.id.paragraph2, en: profileData.bio.en.paragraph2 })}</p>
            </div>
          </motion.div>

          {/* Right Column: Structured Background Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 bg-zinc-100/60 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg border border-zinc-200 dark:border-zinc-800 space-y-6 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-semibold">
              Background Summary
            </h3>

            <dl className="space-y-4 text-sm divide-y divide-zinc-200 dark:divide-zinc-800">
              <div className="pt-2 flex flex-col">
                <dt className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase font-medium">Location</dt>
                <dd className="font-semibold text-zinc-950 dark:text-zinc-100 mt-0.5">{profileData.location}</dd>
              </div>

              <div className="pt-3 flex flex-col">
                <dt className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase font-medium">Education</dt>
                <dd className="font-semibold text-zinc-950 dark:text-zinc-100 mt-0.5">{profileData.degree}</dd>
              </div>

              <div className="pt-3 flex flex-col">
                <dt className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase font-medium">University</dt>
                <dd className="font-semibold text-zinc-950 dark:text-zinc-100 mt-0.5">{profileData.university}</dd>
              </div>

              <div className="pt-3 flex flex-col">
                <dt className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase font-medium">Focus</dt>
                <dd className="font-semibold text-zinc-950 dark:text-zinc-100 mt-0.5">{profileData.focus}</dd>
              </div>

              <div className="pt-3 flex flex-col">
                <dt className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase font-medium">Current Stage</dt>
                <dd className="font-semibold text-zinc-950 dark:text-zinc-100 mt-0.5">{t(profileData.currentStatus)}</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
