import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { profileData } from '../data/profile';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '#home', num: '01', label: { id: 'Home', en: 'Home' } },
    { href: '#about', num: '02', label: { id: 'About', en: 'About' } },
    { href: '#skills', num: '03', label: { id: 'Skills', en: 'Skills' } },
    { href: '#projects', num: '04', label: { id: 'Projects', en: 'Projects' } },
    { href: '#journey', num: '05', label: { id: 'Journey', en: 'Journey' } },
    { href: '#certificates', num: '06', label: { id: 'Certificates', en: 'Certificates' } },
    { href: '#contact', num: '07', label: { id: 'Contact', en: 'Contact' } }
  ];

  return (
    <>
      {/* Top Fixed Minimal Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
            ? 'bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60 py-4'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Brand Logo */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#home"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            <img
              src="/images/icon-profile-removebg.png"
              alt={profileData.name}
              className="w-12 h-12 object-contain rounded-full border-2 border-zinc-600 bg-black"
            />
          </motion.a>

          {/* Right Action Controls: Language, Theme & Toggle Menu Trigger */}
          <div className="flex items-center space-x-3">

            {/* Language Switcher Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1.5 text-xs font-mono font-semibold rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-950 dark:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
              title="Switch Language (ID/EN)"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200" />
              <span className="uppercase">{lang}</span>
            </motion.button>

            {/* Light / Dark Theme Switcher Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-950 dark:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
              title="Toggle Light/Dark Theme"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-zinc-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </motion.button>

            {/* Unified Toggle Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center space-x-2 px-3.5 py-1.5 text-xs font-mono uppercase font-bold rounded-full bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 hover:opacity-90 transition-opacity shadow-sm"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? (
                <>
                  <span>CLOSE</span>
                  <X className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>MENU</span>
                  <Menu className="w-4 h-4" />
                </>
              )}
            </motion.button>

          </div>

        </div>
      </header>

      {/* Full-Screen Overlay Toggle Menu with Framer Motion Stagger */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-zinc-950/95 dark:bg-zinc-950/98 backdrop-blur-2xl text-zinc-50 flex flex-col justify-between p-6 sm:p-12"
          >

            {/* Menu Header Bar inside Overlay */}
            <div className="max-w-6xl w-full mx-auto flex items-center justify-between border-b border-zinc-800/80 pb-6">
              <span className="text-xl font-extrabold tracking-tight text-zinc-100">
                {profileData.shortName}<span className="text-zinc-500">.</span>
              </span>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 px-3 py-1.5 text-xs font-mono rounded-full border border-zinc-800 text-zinc-300 hover:bg-zinc-900"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span className="uppercase">{lang}</span>
                </button>

                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full border border-zinc-800 text-zinc-300 hover:bg-zinc-900"
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
                </button>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center space-x-2 px-4 py-2 text-xs font-mono uppercase font-bold bg-zinc-100 text-zinc-950 rounded-full hover:bg-white transition-colors"
                >
                  <span>CLOSE</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Numbered Navigation Links List with Stagger Animation */}
            <div className="max-w-6xl w-full mx-auto my-auto py-8">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-8">
                Navigation Menu
              </span>
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-zinc-900/60 transition-colors"
                  >
                    <span className="font-mono text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {link.num}
                    </span>
                    <span className="text-2xl sm:text-4xl font-extrabold text-zinc-100 uppercase tracking-tight group-hover:translate-x-2 transition-transform">
                      {link.label[lang]}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Menu Overlay Footer Info */}
            <div className="max-w-6xl w-full mx-auto pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
              <span>{profileData.degree} — {profileData.university}</span>
              <span>PRESS ESC TO CLOSE</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
