import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldAlert } from 'lucide-react';
import { GithubIcon } from './Icons';

import { useLanguage } from '../context/LanguageContext';

export const ProjectModal = ({ project, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase font-semibold">
              {project.id} — {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Image Placeholder */}
          <div className="relative aspect-video w-full bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-700">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 text-zinc-400 p-6 text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">Project Preview</span>
              <span className="text-2xl font-bold text-zinc-100">{project.title}</span>
              <span className="text-xs font-mono text-zinc-500 mt-2">{project.image}</span>
            </div>
          </div>

          {/* Title & Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50">
              {project.title}
            </h3>
            <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 w-fit">
              {t(project.status)}
            </span>
          </div>

          {/* Special Disclaimer for Cybersecurity Lab */}
          {project.isLabNote && (
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs flex items-start space-x-3">
              <ShieldAlert className="w-5 h-5 shrink-0 text-amber-500 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Educational Lab Notice:</strong>
                This project documents authorized security learning, network enumeration, and vulnerability analysis in isolated environment setups (VirtualBox, DVWA, Metasploitable).
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {t(project.description)}
          </p>

          {/* Environment (if present) */}
          {project.environment && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                Environment Setup
              </h4>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                {project.environment}
              </p>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
              Technologies / Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end space-x-4 bg-zinc-100/50 dark:bg-zinc-950/50">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-mono uppercase font-medium bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 rounded hover:opacity-90 transition-opacity"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
