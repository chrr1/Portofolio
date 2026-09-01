import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';

export const Contact = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="py-28 border-t border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Numbered Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-4"
        >
          <span className="font-semibold text-zinc-950 dark:text-zinc-100">06</span>
          <span>/</span>
          <span>Contact</span>
        </motion.div>

        {/* Big Editorial Banner Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="py-12 border-b border-zinc-200 dark:border-zinc-800 space-y-6"
        >
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight leading-none uppercase">
            {t(profileData.contact.heading)}
          </h2>
          <p className="text-lg sm:text-xl text-zinc-800 dark:text-zinc-300 max-w-2xl font-normal leading-relaxed">
            {t(profileData.contact.subheading)}
          </p>
        </motion.div>

        {/* Contact Links Grid (4 Cards: Email, WhatsApp, GitHub, LinkedIn) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          
          {/* Email */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            href={`mailto:${profileData.contact.email}`}
            className="group p-6 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform" />
              <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase block mb-1 font-medium">Email</span>
              <span className="text-sm font-bold text-zinc-950 dark:text-zinc-50 group-hover:underline truncate block">
                {profileData.contact.email}
              </span>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6, scale: 1.02 }}
            href={profileData.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <WhatsappIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
              <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase block mb-1 font-medium">WhatsApp</span>
              <span className="text-sm font-bold text-zinc-950 dark:text-zinc-50 group-hover:underline block">
                {profileData.contact.whatsappDisplay || "Chat on WhatsApp"}
              </span>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.02 }}
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <GithubIcon className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform" />
              <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase block mb-1 font-medium">GitHub</span>
              <span className="text-sm font-bold text-zinc-950 dark:text-zinc-50 group-hover:underline block">
                github.com/chrr1
              </span>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -6, scale: 1.02 }}
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <LinkedinIcon className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform" />
              <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase block mb-1 font-medium">LinkedIn</span>
              <span className="text-sm font-bold text-zinc-950 dark:text-zinc-50 group-hover:underline block truncate">
                Adik Christian P.
              </span>
            </div>
          </motion.a>

        </div>

      </div>
    </section>
  );
};
