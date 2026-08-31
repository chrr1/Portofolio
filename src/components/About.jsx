import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';

export const About = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Numbered Section Header */}
        <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-12">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">01</span>
          <span>/</span>
          <span>About</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Philosophical Tagline & Main Copy */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight leading-tight">
              {t(profileData.bio.headline)}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <p>{t(profileData.bio.paragraph1)}</p>
              <p>{t(profileData.bio.paragraph2)}</p>
              <p>{t(profileData.bio.paragraph3)}</p>
            </div>
          </div>

          {/* Right Column: Structured Background Card */}
          <div className="lg:col-span-4 bg-zinc-100/60 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg border border-zinc-200 dark:border-zinc-800 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold">
              Background Summary
            </h3>

            <dl className="space-y-4 text-sm divide-y divide-zinc-200 dark:divide-zinc-800">
              <div className="pt-2 flex flex-col">
                <dt className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase">Location</dt>
                <dd className="font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">{profileData.location}</dd>
              </div>

              <div className="pt-3 flex flex-col">
                <dt className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase">Education</dt>
                <dd className="font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">{profileData.degree}</dd>
              </div>

              <div className="pt-3 flex flex-col">
                <dt className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase">University</dt>
                <dd className="font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">{profileData.university}</dd>
              </div>

              <div className="pt-3 flex flex-col">
                <dt className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase">Focus</dt>
                <dd className="font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">{profileData.focus}</dd>
              </div>

              <div className="pt-3 flex flex-col">
                <dt className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase">Current Stage</dt>
                <dd className="font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">{t(profileData.currentStatus)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
