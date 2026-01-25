'use client';

import * as React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="fixed inset-x-0 bottom-0 top-12 sm:inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full md:max-h-[90vh] bg-white dark:bg-slate-900 rounded-t-2xl sm:rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-3 top-3 z-10 bg-black/30 hover:bg-black/50 text-white h-10 w-10 sm:h-8 sm:w-8"
              onClick={onClose}
            >
              <X className="h-6 w-6 sm:h-5 sm:w-5" />
            </Button>

            {/* Mobile drag indicator */}
            <div className="sm:hidden w-12 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mt-3 mb-1" />

            {/* Carousel */}
            <div className="shrink-0">
              <ImageCarousel images={project.images} gradientFallback={project.gradient} />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2 sm:mb-3 pr-8">
                {project.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Link button */}
              {project.link && (
                <Button asChild className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.linkText}
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
