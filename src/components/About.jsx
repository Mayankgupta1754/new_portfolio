import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Card } from './ui/card';
import {
  ArrowLeft, Sparkles, Target, Heart, MapPin, GraduationCap,
  Code2, Trophy, Users, Brain, Database, Shield, Cpu, Layers, Zap, Rocket, Presentation,
  BarChart3, LineChart, PieChart, Activity, FileSpreadsheet, Server
} from 'lucide-react';
import { aboutData, profileData } from '../data/mock';
import { Button } from './ui/button';

const AnimatedCounter = ({ value, suffix = '', duration = 1.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.4, 0, 0.2, 1]
      });
      return controls.stop;
    }
  }, [inView, value, duration, motionValue]);

  useEffect(() => {
    return rounded.on('change', (v) => setDisplay(v));
  }, [rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

const About = ({ setActiveSection }) => {
  const [hoveredInterest, setHoveredInterest] = useState(null);

  const stats = [
    { label: 'Dashboards & Analyses', value: 25, suffix: '+', icon: BarChart3, color: 'from-blue-500 to-cyan-500' },
    { label: 'Students Mentored', value: 250, suffix: '+', icon: Users, color: 'from-purple-500 to-pink-500' },
    { label: 'Workshops Led', value: 3, suffix: '+', icon: Presentation, color: 'from-yellow-500 to-orange-500' },
    { label: 'Certifications', value: 5, suffix: '+', icon: Sparkles, color: 'from-green-500 to-emerald-500' }
  ];

  const interestIcons = {
    'Data Analytics': BarChart3,
    'Business Intelligence': PieChart,
    'Data Visualization': LineChart,
    'SQL & Databases': Server,
    'Statistical Analysis': Activity,
    'Machine Learning': Brain,
    'Data Storytelling': FileSpreadsheet
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
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

        {/* Hero: Profile + Intro */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="mb-12 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-center"
        >
          {/* Profile photo with rotating ring */}
          <motion.div variants={itemVariants} className="relative w-48 h-48 mx-auto lg:mx-0">
            {/* Outer rotating conic ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #1DB954, transparent 30%, #8b5cf6 50%, transparent 70%, #1DB954)',
                filter: 'blur(2px)'
              }}
            />
            {/* Inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full p-1"
              style={{
                background: 'conic-gradient(from 90deg, #1DB954, transparent 50%, #1DB954)'
              }}
            >
              <div className="w-full h-full rounded-full bg-black" />
            </motion.div>
            {/* Image */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-spotify-green/40">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online status dot */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-spotify-green border-4 border-black"
              style={{ boxShadow: '0 0 12px rgba(29,185,84,0.8)' }}
            />
          </motion.div>

          {/* Intro text */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-spotify-green text-sm font-bold uppercase tracking-[0.3em] mb-3 flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="eq-container">
                <span className="eq-bar"></span>
                <span className="eq-bar"></span>
                <span className="eq-bar"></span>
                <span className="eq-bar"></span>
              </span>
              Now Playing
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-3 leading-tight">
              <span className="gradient-text">About Me</span>
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl mb-4">
              {profileData.title}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-1.5">
                <BarChart3 size={16} className="text-spotify-green" />
                Aspiring Data Analyst
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap size={16} className="text-spotify-green" />
                VIT Vellore
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-spotify-green" />
                India
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Counters */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} variants={itemVariants}>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#1DB954"
                  glarePosition="all"
                  glareBorderRadius="12px"
                  scale={1.03}
                  transitionSpeed={1500}
                >
                  <Card className="relative bg-spotify-card border-none p-5 overflow-hidden spotify-card-lift group">
                    <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                    <div className="shine-overlay" />
                  </Card>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-6"
        >
          <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            glareEnable={true}
            glareMaxOpacity={0.08}
            glareColor="#1DB954"
            glarePosition="all"
            glareBorderRadius="12px"
            transitionSpeed={2000}
          >
            <Card className="relative bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-spotify-green opacity-5 blur-3xl" />
              <div className="relative flex items-start gap-5">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-spotify-green to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-spotify-green/30"
                >
                  <Sparkles size={26} className="text-black" />
                </motion.div>
                <div className="flex-1">
                  <div className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] mb-1">Track 01</div>
                  <h2 className="text-3xl font-bold text-white mb-4">My Story</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">{aboutData.bio}</p>
                </div>
              </div>
            </Card>
          </Tilt>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-6"
        >
          <motion.div variants={itemVariants} className="mb-5">
            <div className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] mb-1">Track 02</div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              Highlights
              <Trophy size={26} className="text-yellow-400" />
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutData.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card className="relative bg-spotify-card border-none p-5 cursor-default overflow-hidden group spotify-card-lift h-full">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-spotify-green to-emerald-600" />
                  <div className="flex items-start gap-4 pl-3">
                    <div className="w-10 h-10 rounded-lg bg-spotify-green/10 border border-spotify-green/30 flex items-center justify-center flex-shrink-0 group-hover:bg-spotify-green/20 transition-colors">
                      <span className="text-spotify-green font-bold text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-gray-200 text-base leading-relaxed">{highlight}</p>
                  </div>
                  <div className="shine-overlay" />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests with magnetic tags */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-5">
            <div className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] mb-1">Track 03</div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              What I Love
              <Heart size={26} className="text-pink-500 fill-pink-500" />
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none p-8 overflow-hidden relative">
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-pink-500 opacity-10 blur-3xl" />
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-spotify-green opacity-10 blur-3xl" />

              <div className="relative flex flex-wrap gap-3">
                {aboutData.interests.map((interest, index) => {
                  const Icon = interestIcons[interest] || Sparkles;
                  const isHovered = hoveredInterest === index;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.6, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.07,
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{
                        scale: 1.12,
                        y: -6,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.4 }
                      }}
                      onHoverStart={() => setHoveredInterest(index)}
                      onHoverEnd={() => setHoveredInterest(null)}
                      className={`relative flex items-center gap-2 px-5 py-3 rounded-full cursor-default transition-all duration-300 ${
                        isHovered
                          ? 'bg-spotify-green text-black shadow-lg'
                          : 'bg-spotify-dark text-spotify-green border border-spotify-green/40'
                      }`}
                      style={{
                        boxShadow: isHovered ? '0 8px 30px rgba(29,185,84,0.4)' : undefined
                      }}
                    >
                      <Icon size={18} className={isHovered ? 'text-black' : 'text-spotify-green'} />
                      <span className="font-semibold">{interest}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-4"
        >
          <Card className="bg-gradient-to-r from-spotify-green/10 via-spotify-card to-purple-500/10 border border-spotify-green/20 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="mesh-blob mesh-blob-1" style={{ width: 200, height: 200, top: '-30%', left: '10%' }} />
            </div>
            <div className="relative">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Need an analyst who can ship insights?
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                I&apos;m actively seeking Data Analyst opportunities &mdash; let&apos;s turn your data into decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setActiveSection('projects')}
                    className="bg-spotify-green hover:bg-spotify-green-dark text-black font-semibold px-6 py-3 rounded-full shadow-lg shadow-spotify-green/30"
                  >
                    <Rocket size={18} className="mr-2" />
                    See My Dashboards
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setActiveSection('contact')}
                    variant="outline"
                    className="border-spotify-green text-spotify-green hover:bg-spotify-green hover:text-black font-semibold px-6 py-3 rounded-full"
                  >
                    Hire Me
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
