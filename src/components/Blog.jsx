import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Card } from './ui/card';
import { ArrowLeft, BookOpen, Clock, Filter, Play, ExternalLink, Sparkles } from 'lucide-react';
import { blogData } from '../data/mock';
import { Button } from './ui/button';

const Blog = ({ setActiveSection }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set(blogData.map((b) => b.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'All') return blogData;
    return blogData.filter((b) => b.category === activeCategory);
  }, [activeCategory]);

  const featured = blogData[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <div className="relative min-h-screen p-6 lg:p-8 overflow-hidden">
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
              <span className="gradient-text">My Playlists</span>
            </h1>
            <span className="text-spotify-green font-bold text-xl mb-2">
              {String(blogData.length).padStart(2, '0')}
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
            Notes, solutions, and learnings &mdash; press play to read
          </p>
        </motion.div>

        {/* Featured Article Hero */}
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
              onClick={() => window.open(featured.link, '_blank')}
              className="relative bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none overflow-hidden cursor-pointer group shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-0 items-stretch">
                <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                  <motion.img
                    src={featured.cover}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${featured.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                  <div className="absolute top-4 left-4">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center gap-2 px-3 py-1.5 bg-spotify-green text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-lg"
                      style={{ boxShadow: '0 0 20px rgba(29,185,84,0.5)' }}
                    >
                      <Sparkles size={12} fill="black" />
                      Top Pick
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                    <div className="w-14 h-14 bg-spotify-green rounded-full flex items-center justify-center shadow-2xl play-pulse">
                      <Play size={22} className="text-black ml-1" fill="black" />
                    </div>
                  </div>
                  <div className="shine-overlay" />
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 bg-gradient-to-r ${featured.color} bg-clip-text text-transparent`}>
                    <BookOpen size={14} className="text-spotify-green" />
                    {featured.category}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:text-spotify-green transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-gray-300 text-base mb-5 leading-relaxed">{featured.subtitle}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {featured.readTime}
                    </span>
                    <span>{featured.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-spotify-green text-sm font-semibold">
                    <span>Read Now</span>
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
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm">
            <Filter size={16} />
            <span>Filter by genre</span>
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
                    isActive ? 'text-black' : 'text-gray-300 bg-spotify-card hover:bg-spotify-card-hover'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBlogPill"
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

        {/* Blog Grid - album style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              >
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  glareEnable={true}
                  glareMaxOpacity={0.18}
                  glareColor="#1DB954"
                  glarePosition="all"
                  glareBorderRadius="12px"
                  scale={1.03}
                  transitionSpeed={1500}
                  className="h-full"
                >
                  <Card
                    onClick={() => window.open(post.link, '_blank')}
                    className="relative bg-spotify-card border-none p-4 cursor-pointer group h-full flex flex-col spotify-card-lift"
                  >
                    <div className="relative mb-3 aspect-square rounded overflow-hidden">
                      <motion.img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${post.color} opacity-25 group-hover:opacity-50 transition-opacity duration-500`} />

                      {/* Track number */}
                      <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur rounded text-[10px] text-spotify-green font-mono font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Play button */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                        <div className="w-11 h-11 bg-spotify-green rounded-full flex items-center justify-center shadow-2xl play-pulse">
                          <Play size={16} className="text-black ml-0.5" fill="black" />
                        </div>
                      </div>
                      <div className="shine-overlay" />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <h3 className="text-white font-bold text-sm mb-1 line-clamp-2 group-hover:text-spotify-green transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-xs line-clamp-2 mb-3 flex-1">
                        {post.subtitle}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className={`bg-gradient-to-r ${post.color} bg-clip-text text-transparent font-bold`}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-400"
          >
            <BookOpen size={48} className="mx-auto mb-3 text-gray-600" />
            <p>No articles in this genre yet</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;
