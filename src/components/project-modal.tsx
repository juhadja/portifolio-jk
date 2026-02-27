'use client';

import * as React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageCarousel } from '@/components/image-carousel';

export interface ProjectData {
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
  technologies: string[];
  link?: string;
  linkText: string;
  gradient: string;
  thumbnail?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 bottom-4 top-14 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-xl md:max-w-2xl sm:max-h-[88vh] bg-zinc-950 border border-zinc-800/80 rounded-2xl shadow-2xl shadow-black/70 z-50 overflow-hidden flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-500 hover:text-zinc-200 transition-all duration-150"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Mobile drag indicator */}
            <div className="sm:hidden w-10 h-1 bg-zinc-800 rounded-full mx-auto mt-3 mb-0.5" />

            {/* Carousel */}
            <div className="shrink-0">
              <ImageCarousel images={project.images} gradientFallback={project.gradient} />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-zinc-50 mb-3 pr-8 leading-snug">
                  {project.title}
                </h2>

                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {project.fullDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors duration-200 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {project.linkText}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
