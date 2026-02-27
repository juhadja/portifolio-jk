'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  gradientFallback: string;
}

export function ImageCarousel({ images, gradientFallback }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isFullscreen) return;
      if (e.key === 'Escape') setIsFullscreen(false);
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isFullscreen, currentIndex]);

  if (images.length === 0) {
    return <div className={`w-full h-64 ${gradientFallback}`} />;
  }

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <>
      {/* ── Carousel ── */}
      <div className="group relative w-full h-64 sm:h-72 overflow-hidden bg-zinc-900">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-cover cursor-zoom-in"
              onClick={() => setIsFullscreen(true)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Top-right: fullscreen + counter */}
        <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {images.length > 1 && (
            <span className="text-xs font-mono text-zinc-300 bg-zinc-950/70 backdrop-blur-sm border border-zinc-700/50 px-2 py-0.5 rounded-full">
              {currentIndex + 1}/{images.length}
            </span>
          )}
          <button
            onClick={() => setIsFullscreen(true)}
            className="p-1.5 rounded-lg bg-zinc-950/70 backdrop-blur-sm border border-zinc-700/50 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 transition-all"
          >
            <Expand className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-zinc-950/70 backdrop-blur-sm border border-zinc-700/50 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-zinc-950/70 backdrop-blur-sm border border-zinc-700/50 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 items-center">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                  className={`rounded-full transition-all duration-200 ${
                    i === currentIndex
                      ? 'w-4 h-1.5 bg-violet-400'
                      : 'w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Fullscreen ── */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-zinc-950/96 backdrop-blur-xl z-100 flex flex-col items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Top bar */}
            <div className="absolute top-0 inset-x-0 flex items-center justify-between px-5 py-4">
              <span className="text-xs font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                {currentIndex + 1} / {images.length}
              </span>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-100 transition-all"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Image */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="relative w-[min(90vw,1000px)] h-[min(70vh,700px)]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  fill
                  className="object-contain rounded-lg"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                  className="absolute left-5 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-violet-500/30 text-zinc-400 hover:text-zinc-100 transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-5 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-violet-500/30 text-zinc-400 hover:text-zinc-100 transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Thumbnails */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                      className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        i === currentIndex
                          ? 'border-violet-500 opacity-100'
                          : 'border-zinc-700 opacity-40 hover:opacity-70 hover:border-zinc-500'
                      }`}
                    >
                      <Image src={img} alt={`Thumb ${i + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
