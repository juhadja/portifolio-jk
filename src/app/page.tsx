'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Calendar, MapPin, GraduationCap, Briefcase, Code, Star, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      technologies: ["JavaScript", "HTML", "CSS"],
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
      technologies: ["JavaScript", "HTML", "CSS", "Figma"],
      link: t('academicExperience.project4.link'),
      linkText: t('academicExperience.visitProject'),
      gradient: 'bg-gradient-to-br from-pink-500 to-purple-600',
      thumbnail: '/vinheria-1.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800"
      >
        <div className="container max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-slate-800 dark:text-slate-100"
          >
            JK
          </motion.div>
          <div className="flex gap-2 items-center">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button onClick={scrollToContact} variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              {t('header.contact')}
            </Button>
            <Button onClick={handleDownloadCV} size="sm">
              <Download className="mr-2 h-4 w-4" />
              {t('header.downloadCV')}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Gradient Background - Light Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-pink-50 to-amber-50 dark:from-slate-950 dark:via-violet-950 dark:to-slate-900 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/50 via-transparent to-transparent dark:from-violet-800/30 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-pink-200/40 via-transparent to-transparent dark:from-fuchsia-900/20 -z-10" />
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                {t('hero.name')}
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200">
                {t('hero.role')}
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('hero.description')}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center gap-4 pt-4">
              <Button variant="outline" size="icon">
                <a href="https://github.com/juhadja"><Github className="h-5 w-5" /></a>
              </Button>
              <Button variant="outline" size="icon">
                <a href="https://www.linkedin.com/in/juhadja/"><Linkedin className="h-5 w-5" /></a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Formação Acadêmica */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              {t('education.title')}
            </motion.h2>

            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{t('education.degree')}</CardTitle>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4" />
                    {t('education.institution')}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    {t('education.description')}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    {t('education.conclusion')}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experiências Acadêmicas */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <Code className="h-8 w-8 text-primary" />
              {t('academicExperience.title')}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow dark:bg-slate-900 dark:border-slate-800 overflow-hidden p-0 flex flex-col">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="h-48 w-full object-cover"
                      />
                    ) : (
                      <div className={`h-48 ${project.gradient}`}></div>
                    )}
                    <CardHeader>
                      <CardTitle className="dark:text-slate-100">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mb-5"
                          onClick={() => setSelectedProject(project)}
                        >
                          {t('academicExperience.viewMore')}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiência Profissional */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-12 flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              {t('professionalExperience.title')}
            </motion.h2>

            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

              <motion.div variants={fadeInUp} className="relative mb-12 ml-20">
                <div className="absolute -left-[3.25rem] top-2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
                <Card>
                  <CardHeader>
                    <CardTitle>{t('professionalExperience.job1.title')}</CardTitle>
                    <p className="text-sm text-muted-foreground">{t('professionalExperience.job1.company')}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {t('professionalExperience.job1.description')}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="h-4 w-4" />
                      {t('professionalExperience.job1.period')}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative ml-20">
                <div className="absolute -left-[3.25rem] top-2 w-6 h-6 rounded-full bg-slate-400 border-4 border-white dark:border-slate-900"></div>
                <Card>
                  <CardHeader>
                    <CardTitle>{t('professionalExperience.job2.title')}</CardTitle>
                    <p className="text-sm text-muted-foreground">{t('professionalExperience.job2.company')}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {t('professionalExperience.job2.description')}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="h-4 w-4" />
                      {t('professionalExperience.job2.period')}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cursos Complementares */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
              <Star className="h-8 w-8 text-primary" />
              {t('courses.title')}
            </motion.h2>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{t('courses.course1.title')}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{t('courses.course1.description')}</p>
                    </div>

                    <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{t('courses.course2.title')}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{t('courses.course2.description')}</p>
                    </div>

                    <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{t('courses.course3.title')}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{t('courses.course3.description')}</p>
                    </div>

                    <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{t('courses.course4.title')}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{t('courses.course4.description')}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{t('courses.course5.title')}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{t('courses.course5.description')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">
              {t('skills.title')}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">{t('skills.professional.title')}</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.professional.skill1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.professional.skill2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.professional.skill3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.professional.skill4')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.professional.skill5')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.professional.skill6')}</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">{t('skills.personal.title')}</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.personal.skill1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.personal.skill2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.personal.skill3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.personal.skill4')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.personal.skill5')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t('skills.personal.skill6')}</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Idiomas */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              {t('languages.title')}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  {t('languages.description')}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6">
              {t('contact.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-300 mb-8 max-w-2xl mx-auto">
              {t('contact.description')}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                <Mail className="mr-2 h-5 w-5" />
                juliahadja@gmail.com
              </Button>
              <a href="https://github.com/juhadja"><Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button></a>
              <a href="https://www.linkedin.com/in/juhadja/"><Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button></a>              
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-950 text-slate-400 text-center">
        <p className="text-sm">
          {t('footer.copyright')}
        </p>
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
