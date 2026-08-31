import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const { lang, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Numbered Section Header */}
        <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">03</span>
          <span>/</span>
          <span>Projects</span>
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
              Selected Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 uppercase tracking-tight">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-4 md:mt-0 max-w-md">
            A collection of web apps, personal scripts, Flutter experiments, and authorized cybersecurity labs.
          </p>
        </div>

        {/* Projects Editorial Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300"
            >
              {/* Image Preview Box */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center p-6 bg-zinc-900 text-zinc-400 text-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-1">{project.id} — {project.category}</span>
                  <span className="text-2xl font-bold text-zinc-100">{project.title}</span>
                </div>

                {/* Status Overlay Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-zinc-950/80 backdrop-blur-sm rounded text-[10px] font-mono text-zinc-300 uppercase tracking-wider border border-zinc-800">
                  {t(project.status)}
                </div>
              </div>

              {/* Text Meta Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                    <span>{project.id} / {project.category}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                    {t(project.description)}
                  </p>
                </div>

                {/* Tech Stack List */}
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal viewer */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
