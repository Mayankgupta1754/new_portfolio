import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Card } from './ui/card';
import { Play } from 'lucide-react';

const Home = ({ setActiveSection }) => {
  const [greeting, setGreeting] = useState('');
  const [typedGreeting, setTypedGreeting] = useState('');
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const subtitles = [
    'Turning data into decisions',
    'Dashboards, SQL & stories',
    'From raw rows to real insight',
    'Press play to explore the analytics'
  ];

  useEffect(() => {
    const hour = new Date().getHours();
    let g = '';
    if (hour < 12) g = 'Good morning';
    else if (hour < 18) g = 'Good afternoon';
    else g = 'Good evening';
    setGreeting(g);
  }, []);

  useEffect(() => {
    if (!greeting) return;
    let i = 0;
    setTypedGreeting('');
    const interval = setInterval(() => {
      i++;
      setTypedGreeting(greeting.slice(0, i));
      if (i >= greeting.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [greeting]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 3200);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const quickAccessCards = [
    {
      id: 'projects',
      title: 'Dashboards & Projects',
      description: 'Power BI, Python & SQL work',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'skills',
      title: 'Skills',
      description: 'SQL, BI tools & analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'experience',
      title: 'Experience',
      description: 'Internships & client work',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=300&fit=crop',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'about',
      title: 'About Me',
      description: 'Story behind the analyst',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Academic background',
      image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=300&h=300&fit=crop',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 'contact',
      title: "Let's Talk",
      description: 'Open to data analyst roles',
      image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=300&h=300&fit=crop',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const featuredSections = [
    {
      id: 'achievements',
      title: 'Achievements',
      subtitle: 'Accomplishments & Milestones',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'blog',
      title: 'My Playlists',
      subtitle: 'Notes, Solutions & Learnings',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      gradient: 'from-orange-600 to-pink-600'
    },
    {
      id: 'github',
      title: 'GitHub Stats',
      subtitle: 'Live code activity & repos',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop',
      gradient: 'from-green-600 to-emerald-600'
    }
  ];

  const portalLinks = [
    {
      id: 'leetcode',
      title: 'LeetCode',
      description: 'Problem Solving & Algorithms',
      url: 'https://leetcode.com/u/themayankgupta17/',
      icon: '💡',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'kaggle',
      title: 'Kaggle',
      description: 'Data Science & ML Competitions',
      url: 'https://www.kaggle.com/mayankgupta17',
      icon: '📊',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'github',
      title: 'GitHub',
      description: 'Open Source Projects',
      url: 'https://github.com/Mayankgupta1754',
      icon: '🐙',
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      description: 'Professional Network',
      url: 'https://www.linkedin.com/in/mayank-gupta-218636253/',
      icon: '💼',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'hackerrank',
      title: 'HackerRank',
      description: 'Coding Challenges',
      url: 'https://www.hackerrank.com/profile/themayankgupta17',
      icon: '🎯',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <div className="relative min-h-screen p-6 lg:p-8 bg-gradient-to-b from-spotify-dark via-[#0f0f0f] to-spotify-dark overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="mesh-gradient">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
        <div className="mesh-blob mesh-blob-3"></div>
      </div>

      <div className="relative z-10">
        {/* Greeting Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-3">
            <span className="gradient-text">{typedGreeting}</span>
            <span className="typing-cursor"></span>
          </h1>
          <div className="h-6 overflow-hidden">
            <motion.p
              key={subtitleIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="text-gray-400 text-sm lg:text-base"
            >
              {subtitles[subtitleIndex]}
            </motion.p>
          </div>
        </motion.div>

        {/* Quick Access - Spotify Style Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {quickAccessCards.map((card) => (
            <motion.div key={card.id} variants={itemVariants}>
              <Card
                onClick={() => setActiveSection(card.id)}
                className="bg-spotify-card border-none p-0 cursor-pointer group overflow-hidden spotify-card-lift relative"
              >
                <div className="flex items-center h-20 relative">
                  <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-40 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                  <div className="flex-1 px-4 min-w-0">
                    <h3 className="text-white font-bold text-sm truncate group-hover:text-spotify-green transition-colors duration-200">
                      {card.title}
                    </h3>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 mr-4">
                    <div className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center play-pulse">
                      <Play size={20} className="text-black ml-1" fill="black" />
                    </div>
                  </div>
                  <div className="shine-overlay"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Sections - Large Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h2
            variants={headingVariants}
            className="text-2xl font-bold text-white mb-5 flex items-center gap-3"
          >
            Featured Sections
            <span className="eq-container">
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSections.map((section) => (
              <motion.div key={section.id} variants={itemVariants}>
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#1DB954"
                  glarePosition="all"
                  glareBorderRadius="8px"
                  scale={1.02}
                  transitionSpeed={1500}
                  className="will-change-transform"
                >
                  <Card
                    onClick={() => setActiveSection(section.id)}
                    className="bg-spotify-card border-none p-4 cursor-pointer group overflow-hidden spotify-card-lift"
                  >
                    <div className="relative mb-4 aspect-square rounded overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="eq-container">
                          <span className="eq-bar"></span>
                          <span className="eq-bar"></span>
                          <span className="eq-bar"></span>
                          <span className="eq-bar"></span>
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                        <div className="w-14 h-14 bg-spotify-green rounded-full flex items-center justify-center shadow-2xl play-pulse">
                          <Play size={22} className="text-black ml-1" fill="black" />
                        </div>
                      </div>
                      <div className="shine-overlay"></div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-spotify-green transition-colors duration-200">
                      {section.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{section.subtitle}</p>
                  </Card>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portal Links - External Platforms */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="mb-8"
        >
          <motion.h2
            variants={headingVariants}
            className="text-2xl font-bold text-white mb-5"
          >
            Explore More
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portalLinks.map((portal) => (
              <motion.div key={`portal-${portal.id}`} variants={itemVariants}>
                <Card
                  onClick={() => window.open(portal.url, '_blank')}
                  className="bg-spotify-card border-none p-4 cursor-pointer group spotify-card-lift border-trace rounded-lg"
                >
                  <div className="relative mb-4 aspect-square rounded overflow-hidden bg-gradient-to-br shadow-lg flex items-center justify-center">
                    <div className={`absolute inset-0 bg-gradient-to-br ${portal.color} group-hover:scale-110 transition-transform duration-500`}></div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10 text-4xl drop-shadow-lg"
                    >
                      {portal.icon}
                    </motion.div>
                    <div className="shine-overlay"></div>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1 truncate group-hover:text-spotify-green transition-colors duration-200">
                    {portal.title}
                  </h3>
                  <p className="text-gray-400 text-xs line-clamp-2">{portal.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
