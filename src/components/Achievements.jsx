import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Card } from './ui/card';
import { ArrowLeft, Trophy, BookOpen, Users, Calendar, Play, Pause, SkipBack, SkipForward, Heart, Award, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Achievements = ({ setActiveSection }) => {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedAchievements, setLikedAchievements] = useState(new Set());
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);

  const achievementsData = [
    {
      id: 1,
      title: 'SDG-EcoAnalysis: AI for Sustainable Development',
      description: 'Organized and led SDG-EcoAnalysis, an event hosted by the AI & ML Club (TAM-VIT), focusing on how AI, economics, and technology can drive progress toward the UN Sustainable Development Goals. The event featured discussions on AI-driven decision making, economic sustainability, case studies in education and healthcare, an interactive puzzle game, and the EconoAI Quest competition. The initiative successfully highlighted AI\u2019s role in predicting trends, mitigating crises, and enabling sustainable growth.',
      date: '2023',
      type: 'event',
      role: 'Organizer',
      technologies: ['AI', 'Economics', 'Sustainability', 'Data Science'],
      image: '/assests/sdg.jpg'
    },
    {
      id: 2,
      title: 'LeetCode 50-Day Streak Badge',
      description: 'Earned my first LeetCode badge by completing daily coding challenges for 50 consecutive days. This milestone strengthened my problem-solving skills, consistency, and confidence in data structures and algorithms. The journey involved tackling diverse problems, learning optimized approaches, and engaging with the global LeetCode community for continuous improvement.',
      date: '2024',
      type: 'achievement',
      platform: 'LeetCode',
      skills: ['DSA', 'Problem Solving', 'Consistency'],
      image: '/assests/leetcode.jpg'
    },
    {
      id: 3,
      title: 'Gravitas 2024 \u2013 AI/ML Club Contributions',
      description: 'Played a key role in multiple initiatives during Gravitas 2024 as a member of the AI/ML Club (TAM-VIT). Contributed to Survival Showdown by managing technical and data operations, served as a speaker for the Data Alchemy 2.0 AI/ML workshop, and acted as a reviewer and mentor during Code Cortex, a 36-hour hackathon. These experiences strengthened my leadership, mentoring, and technical evaluation skills.',
      date: '2024',
      type: 'event',
      role: 'Speaker, Reviewer & Mentor',
      technologies: ['AI', 'ML', 'Data Science'],
      image: '/assests/gravitas.jpg'
    },
    {
      id: 4,
      title: 'Microsoft Certified: Azure AI Engineer Associate',
      description: 'Achieved the Microsoft Certified: Azure AI Engineer Associate certification by passing the AI-102 exam. Gained hands-on expertise in NLP, computer vision, generative AI, and Azure AI services. This certification validated my ability to design, build, and deploy AI solutions using Microsoft Azure in real-world scenarios.',
      date: '2025',
      type: 'certification',
      issuer: 'Microsoft',
      skills: ['Azure AI', 'NLP', 'Computer Vision', 'Generative AI'],
      image: '/assests/microsoft.png'
    },
    {
      id: 5,
      title: 'Algo Arena Hackathon \u2013 Winner & Best Pitch',
      description: 'Secured 1st position and won the Best Pitch award at the Algo Arena Hackathon during Yantra 2024, organized by the AI-ML (TAM-VIT) Club. Built a robot with real-time object detection and RC controls using multiple sensors and embedded computing boards. The project involved real-time video processing, intelligent interaction, and seamless hardware-software integration.',
      date: '2024',
      type: 'hackathon',
      position: 'Winner',
      technologies: ['AI', 'Machine Learning', 'Robotics', 'Computer Vision'],
      image: '/assests/algoarena.jpg'
    }
  ];

  const currentAchievementData = achievementsData[currentAchievement];

  const TRACK_DURATION_MS = 6000;

  useEffect(() => {
    setProgress(0);
  }, [currentAchievement]);

  useEffect(() => {
    if (!isPlaying) return;
    const tickMs = 60;
    const step = (tickMs / TRACK_DURATION_MS) * 100;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p + step >= 100) {
          setDirection(1);
          setCurrentAchievement((idx) => (idx + 1) % achievementsData.length);
          return 0;
        }
        return p + step;
      });
    }, tickMs);
    return () => clearInterval(interval);
  }, [isPlaying, achievementsData.length]);

  const nextAchievement = () => {
    setDirection(1);
    setCurrentAchievement((prev) => (prev + 1) % achievementsData.length);
  };

  const prevAchievement = () => {
    setDirection(-1);
    setCurrentAchievement((prev) => (prev - 1 + achievementsData.length) % achievementsData.length);
  };

  const goToAchievement = (index) => {
    setDirection(index > currentAchievement ? 1 : -1);
    setCurrentAchievement(index);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  const toggleLike = () => {
    setLikedAchievements((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(currentAchievement)) newSet.delete(currentAchievement);
      else newSet.add(currentAchievement);
      return newSet;
    });
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'hackathon': return Trophy;
      case 'course': return BookOpen;
      case 'event': return Users;
      case 'certification': return Award;
      default: return Sparkles;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'hackathon': return 'from-yellow-500 to-orange-500';
      case 'course': return 'from-blue-500 to-purple-500';
      case 'event': return 'from-green-500 to-teal-500';
      case 'certification': return 'from-indigo-500 to-cyan-500';
      default: return 'from-pink-500 to-rose-500';
    }
  };

  const getTypeGlow = (type) => {
    switch (type) {
      case 'hackathon': return 'rgba(251, 191, 36, 0.5)';
      case 'course': return 'rgba(139, 92, 246, 0.5)';
      case 'event': return 'rgba(34, 197, 94, 0.5)';
      case 'certification': return 'rgba(99, 102, 241, 0.5)';
      default: return 'rgba(236, 72, 153, 0.5)';
    }
  };

  // 3D slide transition variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      rotateY: dir > 0 ? 45 : -45,
      scale: 0.85
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      rotateY: dir > 0 ? -45 : 45,
      scale: 0.85,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    })
  };

  const isLiked = likedAchievements.has(currentAchievement);

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
            <motion.span
              whileHover={{ x: -4 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="flex items-center"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </motion.span>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="w-24 h-1 bg-spotify-green rounded origin-left"
          />
          <p className="text-gray-400 mt-4 text-lg flex items-center gap-2">
            <span className="eq-container">
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
            </span>
            Wins, hackathons &amp; data milestones &mdash;{' '}
            <span className="text-spotify-green font-bold">{achievementsData.length}</span> tracks
          </p>
        </motion.div>

        {/* Player Card */}
        <div className="max-w-5xl mx-auto" style={{ perspective: '1500px' }}>
          <Tilt
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            glareEnable={true}
            glareMaxOpacity={0.12}
            glareColor="#1DB954"
            glarePosition="all"
            glareBorderRadius="12px"
            transitionSpeed={2000}
            tiltReverse={false}
          >
            <Card className="relative bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none p-8 overflow-hidden shadow-2xl">
              {/* Glow border that follows currentType */}
              <motion.div
                key={`glow-${currentAchievement}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${getTypeGlow(currentAchievementData.type)} 0%, transparent 60%)`
                }}
              />

              <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* 3D Album Cover with Vinyl */}
                <div className="flex-shrink-0 relative w-80 h-80" style={{ perspective: '1000px' }}>
                  {/* Vinyl record - peeks out from behind the album cover */}
                  <motion.div
                    animate={{
                      rotate: isPlaying ? 360 : 0,
                      x: isPlaying ? 60 : 0
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
                        repeat: isPlaying ? Infinity : 0,
                        ease: 'linear'
                      },
                      x: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
                    }}
                    className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, #000 0%, #1a1a1a 40%, #000 50%, #1a1a1a 60%, #000 100%)',
                      boxShadow: '0 0 40px rgba(29, 185, 84, 0.25), inset 0 0 60px rgba(0,0,0,0.8)',
                      zIndex: 1
                    }}
                  >
                    {/* Vinyl grooves */}
                    {[0.95, 0.85, 0.75, 0.65, 0.55, 0.45].map((scale, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 rounded-full border border-gray-800"
                        style={{
                          width: `${scale * 100}%`,
                          height: `${scale * 100}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    ))}
                    {/* Vinyl center */}
                    <div
                      className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-spotify-green"
                      style={{ transform: 'translate(-50%, -50%)' }}
                    >
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full"
                        style={{ transform: 'translate(-50%, -50%)' }} />
                    </div>
                  </motion.div>

                  {/* Album cover with flip transition */}
                  <div className="relative w-80 h-80" style={{ zIndex: 2 }}>
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={currentAchievement}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl group relative">
                          <img
                            src={currentAchievementData.image}
                            alt={currentAchievementData.title}
                            className="w-full h-full object-cover"
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t opacity-30"
                            style={{
                              backgroundImage: `linear-gradient(to top, ${getTypeGlow(currentAchievementData.type)}, transparent)`
                            }}
                          />
                          {/* Winner badge */}
                          {currentAchievementData.position === 'Winner' && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                              className="absolute top-3 right-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-3 shadow-2xl"
                              style={{ boxShadow: '0 0 30px rgba(251,191,36,0.6)' }}
                            >
                              <Trophy size={24} className="text-white" />
                            </motion.div>
                          )}
                          <div className="shine-overlay"></div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Info Panel */}
                <div className="flex-1 flex flex-col justify-between min-w-0 w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`info-${currentAchievement}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      {/* Type badge + counter */}
                      <div className="flex items-center justify-between mb-3">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 }}
                          className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-spotify-green animate-pulse" />
                          {currentAchievementData.type}
                        </motion.div>
                        <div className="text-sm text-gray-500 font-mono">
                          <span className="text-spotify-green font-bold">
                            {String(currentAchievement + 1).padStart(2, '0')}
                          </span>
                          {' / '}
                          {String(achievementsData.length).padStart(2, '0')}
                        </div>
                      </div>

                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl lg:text-4xl font-bold text-white mb-3 leading-tight"
                      >
                        {currentAchievementData.title}
                      </motion.h2>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center gap-3 text-gray-400 mb-5 text-sm"
                      >
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {currentAchievementData.date}
                        </span>
                        {currentAchievementData.position && (
                          <span className="flex items-center gap-1.5 text-yellow-400">
                            <Trophy size={14} />
                            {currentAchievementData.position}
                          </span>
                        )}
                        {currentAchievementData.issuer && (
                          <span className="flex items-center gap-1.5">
                            <Award size={14} />
                            {currentAchievementData.issuer}
                          </span>
                        )}
                        {currentAchievementData.role && (
                          <span className="flex items-center gap-1.5">
                            <Users size={14} />
                            {currentAchievementData.role}
                          </span>
                        )}
                      </motion.div>

                      {/* Tags with stagger */}
                      {(currentAchievementData.skills || currentAchievementData.technologies) && (
                        <motion.div
                          initial="hidden"
                          animate="show"
                          variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.4 } }
                          }}
                          className="flex flex-wrap gap-2 mb-5"
                        >
                          {(currentAchievementData.skills || currentAchievementData.technologies).map((item, idx) => (
                            <motion.span
                              key={idx}
                              variants={{
                                hidden: { opacity: 0, y: 10, scale: 0.8 },
                                show: { opacity: 1, y: 0, scale: 1 }
                              }}
                              whileHover={{ scale: 1.08, y: -2 }}
                              className="px-3 py-1 bg-spotify-dark rounded-full text-xs text-spotify-green border border-spotify-green/40 hover:border-spotify-green hover:shadow-lg transition-shadow cursor-default"
                              style={{ boxShadow: '0 0 0 rgba(29,185,84,0)' }}
                            >
                              {item}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="relative h-1 bg-gray-700 rounded-full overflow-hidden group cursor-pointer">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-spotify-green rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1.5 font-mono">
                      <span>0:{String(Math.floor((progress / 100) * 6)).padStart(2, '0')}</span>
                      <span>0:06</span>
                    </div>
                  </div>

                  {/* Player Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.button
                        onClick={prevAchievement}
                        whileHover={{ scale: 1.15, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-white transition-colors p-2"
                      >
                        <SkipBack size={22} />
                      </motion.button>

                      <motion.button
                        onClick={togglePlay}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className={`relative w-14 h-14 rounded-full bg-spotify-green text-black flex items-center justify-center shadow-lg ${isPlaying ? 'play-pulse' : ''}`}
                      >
                        {isPlaying ? <Pause size={26} fill="black" /> : <Play size={26} fill="black" className="ml-1" />}
                      </motion.button>

                      <motion.button
                        onClick={nextAchievement}
                        whileHover={{ scale: 1.15, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-white transition-colors p-2"
                      >
                        <SkipForward size={22} />
                      </motion.button>
                    </div>

                    <motion.button
                      onClick={toggleLike}
                      whileTap={{ scale: 0.85 }}
                      className="relative p-2"
                    >
                      <motion.div
                        animate={isLiked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Heart
                          size={26}
                          className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}
                          fill={isLiked ? 'currentColor' : 'none'}
                        />
                      </motion.div>
                      {/* Heart burst particles */}
                      <AnimatePresence>
                        {isLiked && (
                          <>
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                                animate={{
                                  opacity: 0,
                                  scale: 1,
                                  x: Math.cos((i * Math.PI * 2) / 6) * 30,
                                  y: Math.sin((i * Math.PI * 2) / 6) * 30
                                }}
                                transition={{ duration: 0.6 }}
                                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-red-500"
                                style={{ x: '-50%', y: '-50%' }}
                              />
                            ))}
                          </>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-gray-700/50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-white">About this track</h3>
                  <Sparkles size={18} className="text-spotify-green" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`desc-${currentAchievement}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="max-h-60 overflow-y-auto"
                  >
                    <p className="text-gray-300 leading-relaxed text-base">
                      {currentAchievementData.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </Card>
          </Tilt>

          {/* Achievement List with 3D depth */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
            }}
            className="mt-12"
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 }
              }}
              className="text-2xl font-bold text-white mb-5 flex items-center gap-3"
            >
              Track List
              <span className="eq-container">
                <span className="eq-bar"></span>
                <span className="eq-bar"></span>
                <span className="eq-bar"></span>
                <span className="eq-bar"></span>
              </span>
            </motion.h3>

            <div className="space-y-2" style={{ perspective: '1200px' }}>
              {achievementsData.map((achievement, index) => {
                const Icon = getTypeIcon(achievement.type);
                const colorClass = getTypeColor(achievement.type);
                const isActive = index === currentAchievement;

                return (
                  <motion.div
                    key={achievement.id}
                    variants={{
                      hidden: { opacity: 0, y: 20, rotateX: -15 },
                      show: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                      }
                    }}
                    whileHover={{
                      scale: 1.015,
                      rotateY: 1,
                      transition: { duration: 0.2 }
                    }}
                    onClick={() => goToAchievement(index)}
                    className={`relative flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 group overflow-hidden ${
                      isActive
                        ? 'bg-spotify-green/15 border border-spotify-green/40 shadow-lg shadow-spotify-green/10'
                        : 'bg-spotify-card hover:bg-spotify-card-hover border border-transparent'
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Track number */}
                    <div className={`w-8 text-center font-mono text-sm font-bold ${isActive ? 'text-spotify-green' : 'text-gray-500'}`}>
                      {isActive && isPlaying ? (
                        <span className="eq-container justify-center" style={{ height: 14 }}>
                          <span className="eq-bar" style={{ width: 2 }}></span>
                          <span className="eq-bar" style={{ width: 2 }}></span>
                          <span className="eq-bar" style={{ width: 2 }}></span>
                        </span>
                      ) : (
                        String(index + 1).padStart(2, '0')
                      )}
                    </div>

                    {/* Icon thumbnail */}
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`relative w-14 h-14 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      style={{
                        boxShadow: isActive ? `0 0 25px ${getTypeGlow(achievement.type)}` : undefined
                      }}
                    >
                      <Icon size={22} className="text-white drop-shadow-md" />
                      {achievement.position === 'Winner' && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shadow-md"
                          style={{ boxShadow: '0 0 10px rgba(251,191,36,0.7)' }}
                        >
                          <Trophy size={10} className="text-black" />
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Title + meta */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold truncate transition-colors ${isActive ? 'text-spotify-green' : 'text-white group-hover:text-spotify-green'}`}>
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 text-sm capitalize">
                        {achievement.type} &middot; {achievement.date}
                      </p>
                    </div>

                    {/* Hover-only play icon */}
                    <motion.div
                      initial={false}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-spotify-green"
                    >
                      {isActive ? (
                        <div className="w-10 h-10 rounded-full bg-spotify-green flex items-center justify-center">
                          {isPlaying ? <Pause size={16} className="text-black" fill="black" /> : <Play size={16} className="text-black ml-0.5" fill="black" />}
                        </div>
                      ) : (
                        <Play size={20} fill="currentColor" />
                      )}
                    </motion.div>

                    {/* Hover shine */}
                    <div className="shine-overlay"></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
