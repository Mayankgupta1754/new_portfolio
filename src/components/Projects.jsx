import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Card } from './ui/card';
import { ArrowLeft, ExternalLink, Github, X, Sparkles, Filter, Play, Star, Code2 } from 'lucide-react';
import { projectsData } from '../data/mock';
import { Button } from './ui/button';

const Projects = ({ setActiveSection }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set(projectsData.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const getCategoryColor = (category) => {
    const colors = {
      'Robotics & AI': 'from-orange-500 to-red-500',
      'AI & NLP': 'from-blue-500 to-cyan-500',
      'Cyber Security': 'from-red-500 to-pink-500',
      'Data Analytics': 'from-purple-500 to-violet-500',
      'AI + IoT': 'from-green-500 to-emerald-500',
      'AI + IoT + Web': 'from-yellow-500 to-orange-500'
    };
    return colors[category] || 'from-gray-500 to-gray-700';
  };

  const getCategoryGlow = (category) => {
    const glows = {
      'Robotics & AI': 'rgba(249, 115, 22, 0.4)',
      'AI & NLP': 'rgba(59, 130, 246, 0.4)',
      'Cyber Security': 'rgba(239, 68, 68, 0.4)',
      'Data Analytics': 'rgba(168, 85, 247, 0.4)',
      'AI + IoT': 'rgba(34, 197, 94, 0.4)',
      'AI + IoT + Web': 'rgba(234, 179, 8, 0.4)'
    };
    return glows[category] || 'rgba(29, 185, 84, 0.4)';
  };

  const featured = projectsData[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <div className="relative min-h-screen p-6 lg:p-8 overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="mesh-gradient">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
        <div className="mesh-blob mesh-blob-3"></div>
      </div>

      <div className="relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={() => setActiveSection('home')}
            variant="ghost"
            className="mb-6 text-gray-400 hover:text-spotify-green transition-colors group"
          >
            <motion.span whileHover={{ x: -4 }} transition={{ type: 'spring', stiffness: 400 }} className="flex items-center">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </motion.span>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-end gap-3 mb-2">
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="gradient-text">Projects</span>
            </h1>
            <span className="text-spotify-green font-bold text-xl mb-2">
              {String(projectsData.length).padStart(2, '0')}
            </span>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-spotify-green rounded origin-left mb-4"
          />
          <p className="text-gray-400 text-lg flex items-center gap-2">
            <span className="eq-container">
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
            </span>
            Dashboards, data stories &amp; ML builds &mdash; the analyst&apos;s playlist
          </p>
        </motion.div>

        {/* Featured Project Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10"
        >
          <Tilt
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            glareEnable={true}
            glareMaxOpacity={0.12}
            glareColor="#1DB954"
            glarePosition="all"
            glareBorderRadius="16px"
            transitionSpeed={2000}
          >
            <Card
              onClick={() => setSelectedProject(featured)}
              className="relative bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none overflow-hidden cursor-pointer group shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative aspect-video md:aspect-auto md:h-full overflow-hidden">
                  <motion.img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  />
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      background: `linear-gradient(to right, transparent, ${getCategoryGlow(featured.category)})`
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center gap-2 px-3 py-1.5 bg-spotify-green text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-lg"
                      style={{ boxShadow: '0 0 20px rgba(29,185,84,0.5)' }}
                    >
                      <Star size={12} fill="black" />
                      Featured
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                    <div className="w-14 h-14 bg-spotify-green rounded-full flex items-center justify-center shadow-2xl play-pulse">
                      <Play size={22} className="text-black ml-1" fill="black" />
                    </div>
                  </div>
                  <div className="shine-overlay" />
                </div>

                {/* Content side */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r ${getCategoryColor(featured.category)} bg-clip-text text-transparent`}>
                    <Sparkles size={14} className="text-spotify-green" />
                    {featured.category}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-spotify-green transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-300 text-base mb-5 leading-relaxed line-clamp-3">
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {featured.technologies.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-spotify-dark/80 backdrop-blur rounded-full text-xs text-spotify-green border border-spotify-green/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-spotify-green text-sm font-semibold">
                    <span>View Project</span>
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink size={16} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </Card>
          </Tilt>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
            <Filter size={16} />
            <span>Filter by category</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-black'
                      : 'text-gray-300 bg-spotify-card hover:bg-spotify-card-hover'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-spotify-green rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              >
                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#1DB954"
                  glarePosition="all"
                  glareBorderRadius="12px"
                  scale={1.02}
                  transitionSpeed={1500}
                  className="h-full"
                >
                  <Card
                    onClick={() => setSelectedProject(project)}
                    className="relative bg-spotify-card border-none overflow-hidden cursor-pointer group h-full flex flex-col spotify-card-lift"
                  >
                    {/* Project number badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <div className="px-2.5 py-1 bg-black/70 backdrop-blur rounded-md text-xs text-spotify-green font-mono font-bold">
                        {String(index + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="aspect-video overflow-hidden relative">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      />
                      <div
                        className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to top, ${getCategoryGlow(project.category)}, transparent)`
                        }}
                      />
                      {/* Play button on hover */}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                        <div className="w-11 h-11 bg-spotify-green rounded-full flex items-center justify-center shadow-2xl play-pulse">
                          <Play size={18} className="text-black ml-0.5" fill="black" />
                        </div>
                      </div>
                      <div className="shine-overlay" />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className={`text-xs font-bold uppercase tracking-wider mb-2 bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text text-transparent`}>
                        {project.category}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-spotify-green transition-colors duration-200 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-spotify-dark rounded text-[10px] text-gray-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 bg-spotify-dark rounded text-[10px] text-spotify-green font-bold">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-400"
          >
            <Code2 size={48} className="mx-auto mb-3 text-gray-600" />
            <p>No projects in this category yet</p>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-800"
            >
              {/* Hero image */}
              <div className="relative h-64 md:h-80 overflow-hidden flex-shrink-0">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, #181818 0%, ${getCategoryGlow(selectedProject.category)} 50%, transparent 100%)`
                  }}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur text-white hover:bg-spotify-green hover:text-black transition-colors flex items-center justify-center"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-4 left-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`inline-block text-xs font-bold uppercase tracking-[0.2em] mb-2 bg-gradient-to-r ${getCategoryColor(selectedProject.category)} bg-clip-text text-transparent`}
                  >
                    {selectedProject.category}
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-4xl font-bold text-white drop-shadow-2xl"
                  >
                    {selectedProject.title}
                  </motion.h2>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 text-base md:text-lg leading-relaxed mb-6"
                >
                  {selectedProject.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6"
                >
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Code2 size={18} className="text-spotify-green" />
                    Tech Stack
                  </h3>
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.04, delayChildren: 0.55 } }
                    }}
                    className="flex flex-wrap gap-2"
                  >
                    {selectedProject.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, scale: 0.6 },
                          show: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-3 py-1.5 bg-spotify-dark rounded-full text-sm text-spotify-green border border-spotify-green/40 hover:border-spotify-green hover:shadow-lg hover:shadow-spotify-green/20 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-3"
                >
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Button
                      onClick={() => window.open(selectedProject.link, '_blank')}
                      className="bg-spotify-green hover:bg-spotify-green-dark text-black font-semibold px-6 py-3 rounded-full shadow-lg shadow-spotify-green/30"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      View Project
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Button
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      variant="outline"
                      className="border-spotify-green text-spotify-green hover:bg-spotify-green hover:text-black font-semibold px-6 py-3 rounded-full"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
