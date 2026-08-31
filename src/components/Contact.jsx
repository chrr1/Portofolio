import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';

export const Contact = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="py-28 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Numbered Section Header */}
        <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">06</span>
          <span>/</span>
          <span>Contact</span>
        </div>

        {/* Big Editorial Banner Heading */}
        <div className="py-12 border-b border-zinc-200 dark:border-zinc-800 space-y-6">
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight leading-none uppercase">
            {t(profileData.contact.heading)}
          </h2>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal leading-relaxed">
            {t(profileData.contact.subheading)}
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          
          {/* Email */}
          <a
            href={`mailto:${profileData.contact.email}`}
            className="group p-6 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-5 h-5 text-zinc-500" />
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase block mb-1">Email</span>
              <span className="text-base font-bold text-zinc-950 dark:text-zinc-50 group-hover:underline">
                {profileData.contact.email}
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <GithubIcon className="w-5 h-5 text-zinc-500" />
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase block mb-1">GitHub</span>
              <span className="text-base font-bold text-zinc-950 dark:text-zinc-50 group-hover:underline">
                github.com/placeholder
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <LinkedinIcon className="w-5 h-5 text-zinc-500" />
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase block mb-1">LinkedIn</span>
              <span className="text-base font-bold text-zinc-950 dark:text-zinc-50 group-hover:underline">
                linkedin.com/in/placeholder
              </span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

