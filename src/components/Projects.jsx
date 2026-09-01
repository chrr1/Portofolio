import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-4"
        >
          <span className="font-semibold text-zinc-950 dark:text-zinc-100">03</span>
          <span>/</span>
          <span>Projects</span>
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
              Selected Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 uppercase tracking-tight">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-700 dark:text-zinc-400 mt-4 md:mt-0 max-w-md">
            A collection of web apps, personal scripts, Flutter experiments, and authorized cybersecurity labs.
          </p>
        </motion.div>

        {/* Projects Editorial Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Image Preview Box */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
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
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">
                    <span>{project.id} / {project.category}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-800 dark:text-zinc-300 mt-2 line-clamp-3 leading-relaxed">
                    {t(project.description)}
                  </p>
                </div>

                {/* Tech Stack List */}
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
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
