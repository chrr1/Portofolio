import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';

export const Hero = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-20 pb-6 px-6 sm:px-12 overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">

      {/* Center Giant Layered Typography Background */}
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[17vw] sm:text-[14vw] md:text-[12vw] lg:text-[12rem] font-extrabold tracking-tighter uppercase leading-[0.82] text-zinc-800/90 dark:text-zinc-200/90 transition-colors"
        >
          SOFTWARE<br />ENGINEER
        </motion.h1>
      </div>

      {/* Center Hero Plain Image with Smooth Fade Gradient Mask & Floating Motion */}
      <div className="relative z-10 flex-1 flex items-end justify-center pt-4 pb-0 my-auto pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg h-[54vh] sm:h-[62vh] lg:h-[68vh] flex justify-center items-end"
        >
          {/* Subtle floating effect container */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full flex justify-center items-end"
          >
            <img
              src={profileData.profileImage}
              alt={profileData.name}
              className="h-full w-auto max-w-full object-contain object-bottom relative z-10 transition-all duration-300 drop-shadow-2xl"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 98%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 98%)'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />

            {/* Fallback Placeholder */}
            <div className="hidden absolute inset-0 flex-col items-center justify-center p-6 text-center text-zinc-400">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">Profile Image</span>
              <span className="text-3xl font-extrabold text-zinc-100 uppercase font-sans">ADIK</span>
              <span className="text-xs text-zinc-500 mt-2 font-mono">{profileData.profileImage}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Hero Information Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-end pb-6 pt-2"
      >
        {/* Bottom Left: MY NAME */}
        <div className="md:col-span-6 space-y-1.5">
          <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-widest block font-medium">
            MY NAME
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-none text-zinc-950 dark:text-zinc-50">
            ADIK CHRISTIAN<br />
            PURWANINGTRESNO
          </h2>
        </div>

        {/* Bottom Right: ABOUT ME */}
        <div className="md:col-span-6 md:text-left space-y-1.5 max-w-md md:ml-auto">
          <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-widest block font-medium">
            ABOUT ME
          </span>
          <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-300 leading-relaxed font-normal">
            {t({ id: profileData.bio.id.paragraph1, en: profileData.bio.en.paragraph1 })}
          </p>
        </div>
      </motion.div>

      {/* Bottom Bar Divider & Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-20 pt-4 pb-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-600 dark:text-zinc-400"
      >
        <a
          href="#about"
          className="flex items-center space-x-2 uppercase tracking-widest hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors group"
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </a>
      </motion.div>

    </section>
  );
};
