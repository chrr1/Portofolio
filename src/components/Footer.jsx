import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-700 dark:text-zinc-400">
        <div>
          © {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </div>

        <div className="flex items-center space-x-6">
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors uppercase"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
