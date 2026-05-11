import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Card } from './ui/card';
import {
  ArrowLeft, GraduationCap, Award, Calendar, BookOpen, Star, MapPin, Sparkles
} from 'lucide-react';
import { educationData } from '../data/mock';
import { Button } from './ui/button';

const AnimatedNumber = ({ value, suffix = '', duration = 1.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => latest.toFixed(value % 1 === 0 ? 0 : 2));
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration, ease: [0.4, 0, 0.2, 1] });
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

const Education = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  const cardThemes = [
    { from: 'from-purple-500', to: 'to-pink-500', glow: 'rgba(168,85,247,0.4)', text: 'text-purple-400', accent: 'purple' },
    { from: 'from-blue-500', to: 'to-cyan-500', glow: 'rgba(59,130,246,0.4)', text: 'text-blue-400', accent: 'blue' },
    { from: 'from-orange-500', to: 'to-red-500', glow: 'rgba(249,115,22,0.4)', text: 'text-orange-400', accent: 'orange' }
  ];

  const parsePercent = (str) => {
    if (!str) return null;
    const m = String(str).match(/[\d.]+/);
    return m ? parseFloat(m[0]) : null;
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
          className="mb-10"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-3">
            <span className="gradient-text">Education</span>
          </h1>
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
            The academic record behind the analytics &mdash; CS, stats &amp; data
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative max-w-5xl mx-auto"
        >
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-spotify-green via-spotify-green/50 to-transparent origin-top"
          />

          <div className="space-y-8">
            {educationData.map((edu, index) => {
              const c = cardThemes[index % cardThemes.length];
              const gpaVal = parsePercent(edu.gpa);
              const tenthVal = parsePercent(edu.tenthPercentage);
              const twelfthVal = parsePercent(edu.twelfthPercentage);

              return (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative pl-12 lg:pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
                    className="absolute left-0 lg:left-4 top-6 w-9 h-9 rounded-full bg-black border-4 border-spotify-green flex items-center justify-center z-10"
                    style={{ boxShadow: `0 0 20px ${c.glow}` }}
                  >
                    <GraduationCap size={14} className="text-spotify-green" />
                  </motion.div>

                  <Tilt
                    tiltMaxAngleX={3}
                    tiltMaxAngleY={3}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    glareColor="#1DB954"
                    glarePosition="all"
                    glareBorderRadius="12px"
                    transitionSpeed={2000}
                  >
                    <Card className="relative bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none p-6 lg:p-8 overflow-hidden group">
                      {/* Decorative gradient blob */}
                      <div
                        className={`absolute -top-12 -right-12 w-56 h-56 rounded-full opacity-20 blur-3xl bg-gradient-to-br ${c.from} ${c.to}`}
                      />

                      <div className="relative">
                        {/* Top row */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-spotify-green animate-pulse" />
                            Chapter {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                            <Calendar size={12} />
                            {edu.duration}
                          </div>
                        </div>

                        {/* Degree + Institution */}
                        <div className="flex items-start gap-4 mb-6">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.from} ${c.to} flex items-center justify-center flex-shrink-0 shadow-xl`}
                            style={{ boxShadow: `0 8px 30px ${c.glow}` }}
                          >
                            <GraduationCap size={30} className="text-white drop-shadow" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1 leading-tight">
                              {edu.degree}
                            </h3>
                            <p className={`${c.text} text-lg font-semibold flex items-center gap-2 mb-1`}>
                              <BookOpen size={16} />
                              {edu.institution}
                            </p>
                            {edu.field && (
                              <p className="text-gray-400 text-sm">{edu.field}</p>
                            )}
                          </div>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                          {gpaVal !== null && (
                            <motion.div
                              whileHover={{ scale: 1.04, y: -3 }}
                              className="bg-spotify-dark/60 backdrop-blur rounded-xl p-4 border border-spotify-green/20"
                            >
                              <div className="flex items-center gap-2 mb-1 text-xs text-spotify-green font-bold uppercase tracking-wider">
                                <Award size={14} />
                                GPA
                              </div>
                              <div className="text-2xl font-bold text-white">
                                <AnimatedNumber value={gpaVal} />
                              </div>
                            </motion.div>
                          )}
                          {tenthVal !== null && (
                            <motion.div
                              whileHover={{ scale: 1.04, y: -3 }}
                              className="bg-spotify-dark/60 backdrop-blur rounded-xl p-4 border border-spotify-green/20"
                            >
                              <div className="flex items-center gap-2 mb-1 text-xs text-spotify-green font-bold uppercase tracking-wider">
                                <Award size={14} />
                                Class 10
                              </div>
                              <div className="text-2xl font-bold text-white">
                                <AnimatedNumber value={tenthVal} suffix="%" />
                              </div>
                            </motion.div>
                          )}
                          {twelfthVal !== null && (
                            <motion.div
                              whileHover={{ scale: 1.04, y: -3 }}
                              className="bg-spotify-dark/60 backdrop-blur rounded-xl p-4 border border-spotify-green/20"
                            >
                              <div className="flex items-center gap-2 mb-1 text-xs text-spotify-green font-bold uppercase tracking-wider">
                                <Award size={14} />
                                Class 12
                              </div>
                              <div className="text-2xl font-bold text-white">
                                <AnimatedNumber value={twelfthVal} suffix="%" />
                              </div>
                            </motion.div>
                          )}
                        </div>

                        {/* Achievements */}
                        {edu.achievements && edu.achievements.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Star size={18} className="text-spotify-green" fill="#1DB954" />
                              <h4 className="text-white font-bold">Highlights</h4>
                            </div>
                            <motion.ul
                              initial="hidden"
                              whileInView="show"
                              viewport={{ once: true, amount: 0.3 }}
                              variants={{
                                hidden: {},
                                show: { transition: { staggerChildren: 0.07 } }
                              }}
                              className="space-y-2.5"
                            >
                              {edu.achievements.map((achievement, idx) => (
                                <motion.li
                                  key={idx}
                                  variants={{
                                    hidden: { opacity: 0, x: -15 },
                                    show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                                  }}
                                  whileHover={{ x: 4 }}
                                  className="flex items-start gap-3 group/item"
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.5 }}
                                    className="w-2 h-2 bg-spotify-green rounded-full mt-2 flex-shrink-0 group-hover/item:shadow-[0_0_10px_rgba(29,185,84,0.8)] transition-shadow"
                                  />
                                  <span className="text-gray-300 leading-relaxed">{achievement}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>
                        )}

                        <div className="shine-overlay" />
                      </div>
                    </Card>
                  </Tilt>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
