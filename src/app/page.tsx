'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Calendar, MapPin, GraduationCap, Briefcase, Code, Star, Globe, ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ProjectModal, ProjectData } from '@/components/project-modal';

export default function Portfolio() {
  const t = useTranslations();
  const [selectedProject, setSelectedProject] = React.useState<ProjectData | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const spotlightRef = React.useRef<HTMLDivElement>(null);
  const glowNearRef = React.useRef<HTMLDivElement>(null);
  const glowFarRef = React.useRef<HTMLDivElement>(null);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;
    if (spotlightRef.current) {
      const mask = `radial-gradient(circle 200px at ${xPct}% ${yPct}%, black 0%, transparent 100%)`;
      spotlightRef.current.style.maskImage = mask;
      spotlightRef.current.style.setProperty('-webkit-mask-image', mask);
    }
    if (glowNearRef.current) {
      glowNearRef.current.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    }
    if (glowFarRef.current) {
      glowFarRef.current.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    }
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-julia-kfouri.docx';
    link.download = 'cv-julia-kfouri.docx';
    link.click();
  };

  const projects: ProjectData[] = [
    {
      title: t('academicExperience.project1.title'),
      description: t('academicExperience.project1.description'),
      fullDescription: t('academicExperience.project1.fullDescription'),
      images: ['/mapa-dor2.png', '/mapa-dor3.png', '/mapa-dor1.png', '/mapa-dor4.png'],
      technologies: ['React', 'JavaScript', 'Tailwind'],
      link: t('academicExperience.project1.link'),
      linkText: t('academicExperience.visitProject'),
      gradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
      thumbnail: '/mapa-dor-capa.png',
    },
    {
      title: t('academicExperience.project2.title'),
      description: t('academicExperience.project2.description'),
      fullDescription: t('academicExperience.project2.fullDescription'),
      images: ['/biovolt1.jpg', '/biovolt2.jpg', '/biovolt3.jpg', '/biovolt4.jpg'],
      technologies: ['JavaScript', 'HTML', 'CSS', 'Arduino UNO', 'Figma'],
      link: t('academicExperience.project2.link'),
      linkText: t('academicExperience.visitProject'),
      gradient: 'bg-gradient-to-br from-green-500 to-teal-600',
      thumbnail: '/biovolte.png',
    },
    {
      title: t('academicExperience.project3.title'),
      description: t('academicExperience.project3.description'),
      fullDescription: t('academicExperience.project3.fullDescription'),
      images: ['/pacotinho-capa.png', '/pacotinho-2.png', '/pacotinho-3.png', '/pacotinho-4.png'],
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link: t('academicExperience.project3.link'),
      linkText: t('academicExperience.visitProject'),
      gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
      thumbnail: '/pacotinho-capa.png',
    },
    {
      title: t('academicExperience.project4.title'),
      description: t('academicExperience.project4.description'),
      fullDescription: t('academicExperience.project4.fullDescription'),
      images: ['/vinheria-1.png', '/vinheria-2.png', '/vinheria-3.png', '/vinheria-4.png'],
      technologies: ['JavaScript', 'HTML', 'CSS', 'Figma'],
      link: t('academicExperience.project4.link'),
      linkText: t('academicExperience.visitProject'),
      gradient: 'bg-gradient-to-br from-pink-500 to-purple-600',
      thumbnail: '/vinheria-1.png',
    },
  ];

  const professionalSkills = [
    t('skills.professional.skill1'),
    t('skills.professional.skill2'),
    t('skills.professional.skill3'),
    t('skills.professional.skill4'),
    t('skills.professional.skill5'),
    t('skills.professional.skill6'),
  ];

  const personalSkills = [
    t('skills.personal.skill1'),
    t('skills.personal.skill2'),
    t('skills.personal.skill3'),
    t('skills.personal.skill4'),
    t('skills.personal.skill5'),
    t('skills.personal.skill6'),
  ];

  const courses = [
    { title: t('courses.course1.title'), description: t('courses.course1.description') },
    { title: t('courses.course2.title'), description: t('courses.course2.description') },
    { title: t('courses.course3.title'), description: t('courses.course3.description') },
    { title: t('courses.course4.title'), description: t('courses.course4.description') },
    { title: t('courses.course5.title'), description: t('courses.course5.description') },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">

      {/* ── Header ── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md z-50 border-b border-zinc-800/60"
      >
        <div className="container max-w-5xl mx-auto px-4 py-3.5 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <a href="#" className="text-lg font-bold font-mono text-violet-400 tracking-widest hover:text-violet-300 transition-colors">
              JK
            </a>
          </motion.div>
          <div className="flex gap-2 items-center">
            <LanguageSwitcher />
            
            <Button
              onClick={scrollToContact}
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 hidden sm:flex"
            >
              <Mail className="mr-2 h-4 w-4" />
              {t('header.contact')}
            </Button>
            <Button
              onClick={handleDownloadCV}
              size="sm"
              className="bg-violet-600 hover:bg-violet-500 text-white border-0"
            >
              <Download className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">{t('header.downloadCV')}</span>
              <span className="sm:hidden">CV</span>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* ── Hero ── */}
      <section
        className="isolate relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        onMouseMove={handleHeroMouseMove}
      >
        {/* Dot grid — base dim */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #27272a 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Dot grid — spotlight near cursor */}
        <div
          ref={spotlightRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #71717a 1.5px, transparent 1.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Violet glow — segue o cursor de perto */}
        <div
          ref={glowNearRef}
          className="absolute top-0 left-0 w-90 h-90 rounded-full blur-[90px] z-0 bg-violet-600/14 pointer-events-none"
          style={{ willChange: 'transform' }}
        />

        {/* Violet glow — halo maior, segue com lag */}
        <div
          ref={glowFarRef}
          className="absolute top-0 left-0 w-175 h-175 rounded-full blur-[140px] z-0 bg-violet-500/6 pointer-events-none"
          style={{ willChange: 'transform', transition: 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
        />

        <div className="relative z-10 container max-w-5xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-5"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block text-violet-400 font-mono text-xs tracking-[0.4em] uppercase mb-2">
                Portfolio
              </span>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-zinc-50 leading-none">
                {t('hero.name')}
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-violet-400">
                {t('hero.role')}
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-base sm:text-lg text-zinc-400 max-w-lg mx-auto leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                {t('hero.description')}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center gap-3 pt-4 flex-wrap">
              <a href="https://github.com/juhadja">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-violet-500/50 hover:bg-zinc-900 transition-all"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/juhadja/">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-violet-500/50 hover:bg-zinc-900 transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <motion.div
                animate={{ y: [0, -7, 0, -5, 0] }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <Button
                  onClick={scrollToContact}
                  className="bg-violet-600 hover:bg-violet-500 text-white border-0 px-6 shadow-lg shadow-violet-500/20"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {t('header.contact')}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-700 z-10"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Education ── */}
      <section className="py-24 px-4">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                <GraduationCap className="h-5 w-5 text-violet-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-50">{t('education.title')}</h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8 hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-100 mb-2">
                  {t('education.degree')}
                </h3>
                <p className="text-zinc-400 flex items-center gap-2 mb-4 text-sm">
                  <MapPin className="h-4 w-4 text-violet-400 flex-shrink-0" />
                  {t('education.institution')}
                </p>
                <p className="text-zinc-400 leading-relaxed text-sm mb-5">
                  {t('education.description')}
                </p>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Calendar className="h-4 w-4 text-violet-400" />
                  {t('education.conclusion')}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Academic Projects ── */}
      <section className="py-24 px-4 bg-zinc-900/20">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                <Code className="h-5 w-5 text-violet-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-50">{t('academicExperience.title')}</h2>
            </motion.div>

            <div className="space-y-4">
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div
                    className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex flex-col md:grid md:grid-cols-[1fr_300px]">

                      {/* Imagem — topo no mobile */}
                      <div className="relative h-52 md:hidden overflow-hidden">
                        {project.thumbnail ? (
                          <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
                        ) : (
                          <div className={`h-full w-full ${project.gradient}`} />
                        )}
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-900/70" />
                      </div>

                      {/* Conteúdo */}
                      <div className="p-6 sm:p-8 flex flex-col">
                        <div className="flex items-center gap-3 mb-5">
                          <span className="text-4xl font-bold font-mono text-zinc-800 leading-none select-none">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="h-7 w-px bg-zinc-800 shrink-0" />
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h3 className="text-base font-semibold text-zinc-100 leading-snug mb-2">
                          {project.title}
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed flex-1">
                          {project.description}
                        </p>

                        <div className="flex items-center gap-1.5 mt-6 text-violet-400 text-sm font-medium">
                          <span>{t('academicExperience.viewMore')}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </div>
                      </div>

                      {/* Imagem — direita no desktop */}
                      <div className="relative hidden md:block overflow-hidden">
                        {project.thumbnail ? (
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className={`h-full w-full ${project.gradient}`} />
                        )}
                        <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/0 transition-colors duration-300" />
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Professional Experience ── */}
      <section className="py-24 px-4">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                <Briefcase className="h-5 w-5 text-violet-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-50">{t('professionalExperience.title')}</h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[1.85rem] top-0 bottom-0 w-px bg-violet-500/20" />

              <motion.div variants={fadeInUp} className="relative mb-6 pl-16">
                <div className="absolute left-6 top-6 w-3.5 h-3.5 rounded-full bg-violet-500 border-2 border-zinc-950 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-6 hover:border-violet-500/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-100">{t('professionalExperience.job1.title')}</h3>
                      <p className="text-violet-400 text-sm font-medium mt-0.5">{t('professionalExperience.job1.company')}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 sm:flex-shrink-0">
                      <Calendar className="h-3 w-3" />
                      {t('professionalExperience.job1.period')}
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm">{t('professionalExperience.job1.description')}</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative pl-16">
                <div className="absolute left-6 top-6 w-3.5 h-3.5 rounded-full bg-zinc-700 border-2 border-zinc-950" />
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-6 hover:border-zinc-700 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-100">{t('professionalExperience.job2.title')}</h3>
                      <p className="text-zinc-400 text-sm font-medium mt-0.5">{t('professionalExperience.job2.company')}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 sm:flex-shrink-0">
                      <Calendar className="h-3 w-3" />
                      {t('professionalExperience.job2.period')}
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm">{t('professionalExperience.job2.description')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Courses ── */}
      <section className="py-24 px-4 bg-zinc-900/20">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                <Star className="h-5 w-5 text-violet-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-50">{t('courses.title')}</h2>
            </motion.div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              {courses.map((course, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className={`flex gap-5 p-5 sm:p-6 ${index < courses.length - 1 ? 'border-b border-zinc-800' : ''}`}>
                    <span className="text-2xl font-bold font-mono text-violet-500/25 flex-shrink-0 w-7 leading-tight pt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-semibold text-zinc-100 mb-1 text-sm sm:text-base">{course.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{course.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-24 px-4">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-50">{t('skills.title')}</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div variants={fadeInUp}>
                <h3 className="text-xs font-semibold text-violet-400 font-mono tracking-[0.25em] uppercase mb-5">
                  {t('skills.professional.title')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {professionalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm bg-zinc-900 border border-zinc-700 text-zinc-300 hover:border-violet-500/40 hover:text-zinc-100 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-xs font-semibold text-zinc-500 font-mono tracking-[0.25em] uppercase mb-5">
                  {t('skills.personal.title')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Languages ── */}
      <section className="py-24 px-4 bg-zinc-900/20">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                <Globe className="h-5 w-5 text-violet-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-50">{t('languages.title')}</h2>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8">
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                {t('languages.description')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contato" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-zinc-950">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-violet-600/6 rounded-full blur-[120px]" />
        </div>

        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.p variants={fadeInUp} className="text-violet-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">
              {t('contact.title')}
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-50 mb-4 max-w-2xl mx-auto leading-tight">
              {t('contact.description')}
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-3 mt-12 flex-wrap">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-500 text-white border-0 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
              >
                <Mail className="mr-2 h-5 w-5" />
                juliahadja@gmail.com
              </Button>
              <a href="https://github.com/juhadja">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-transparent border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700 hover:text-zinc-100 transition-all"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/juhadja/">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-transparent border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700 hover:text-zinc-100 transition-all"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-6 px-4 border-t border-zinc-900">
        <div className="container max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-mono text-violet-400 text-sm font-bold tracking-widest">JK</span>
          <p className="text-xs text-zinc-600 text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
