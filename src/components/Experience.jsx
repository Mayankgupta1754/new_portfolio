import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Card } from './ui/card';
import {
  ArrowLeft, Building, Calendar, MapPin, TrendingUp, Award, Github,
  Briefcase, ExternalLink, Sparkles
} from 'lucide-react';
import { experienceData } from '../data/mock';
import { Button } from './ui/button';

const Experience = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  const cardColors = [
    { from: 'from-spotify-green', to: 'to-emerald-600', glow: 'rgba(29,185,84,0.4)', text: 'text-spotify-green' },
    { from: 'from-blue-500', to: 'to-cyan-500', glow: 'rgba(59,130,246,0.4)', text: 'text-blue-400' },
    { from: 'from-purple-500', to: 'to-pink-500', glow: 'rgba(168,85,247,0.4)', text: 'text-purple-400' },
    { from: 'from-orange-500', to: 'to-red-500', glow: 'rgba(249,115,22,0.4)', text: 'text-orange-400' }
  ];

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
            <span className="gradient-text">Experience</span>
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
            Where I&apos;ve turned data into decisions &mdash; the analyst&apos;s tracklist
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative max-w-5xl mx-auto"
        >
          {/* Vertical timeline line (animated) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-spotify-green via-spotify-green/50 to-transparent origin-top"
          />

          <div className="space-y-8">
            {experienceData.map((exp, index) => {
              const c = cardColors[index % cardColors.length];
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-12 lg:pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 300 }}
                    className="absolute left-0 lg:left-4 top-6 w-9 h-9 rounded-full bg-black border-4 border-spotify-green flex items-center justify-center z-10"
                    style={{ boxShadow: `0 0 20px ${c.glow}` }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-spotify-green rounded-full"
                    />
                  </motion.div>

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
                    <Card className="relative bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none p-6 lg:p-8 overflow-hidden group">
                      {/* Decorative gradient blob */}
                      <div
                        className={`absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20 blur-3xl bg-gradient-to-br ${c.from} ${c.to}`}
                      />

                      <div className="relative">
                        {/* Track number */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-spotify-green animate-pulse" />
                            Track {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="hidden md:flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                            {exp.duration}
                          </div>
                        </div>

                        {/* Company + Role */}
                        <div className="flex items-start gap-4 mb-5">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.from} ${c.to} flex items-center justify-center flex-shrink-0 shadow-lg`}
                            style={{ boxShadow: `0 8px 24px ${c.glow}` }}
                          >
                            <Building size={26} className="text-white drop-shadow" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1 leading-tight">
                              {exp.position}
                            </h3>
                            <p className={`${c.text} text-lg font-semibold flex items-center gap-2`}>
                              <Briefcase size={16} />
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 mb-5 text-sm text-gray-400">
                          <div className="md:hidden flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-spotify-green" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                        {/* Achievements */}
                        <div className="mb-5">
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp size={18} className="text-spotify-green" />
                            <h4 className="text-white font-bold">Key Achievements</h4>
                          </div>
                          <motion.ul
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                              hidden: {},
                              show: { transition: { staggerChildren: 0.06 } }
                            }}
                            className="space-y-2.5"
                          >
                            {exp.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                variants={{
                                  hidden: { opacity: 0, x: -15 },
                                  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                                }}
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

                        {/* Certificates */}
                        {exp.certificates && exp.certificates.length > 0 && (
                          <div className="mb-5">
                            <div className="flex items-center gap-2 mb-3">
                              <Award size={18} className="text-spotify-green" />
                              <h4 className="text-white font-bold">Certificates</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {exp.certificates.map((cert, idx) => (
                                <motion.a
                                  key={idx}
                                  href={cert.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  whileTap={{ scale: 0.97 }}
                                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-spotify-dark border border-spotify-green/40 text-spotify-green text-sm font-medium hover:bg-spotify-green hover:text-black hover:border-spotify-green transition-colors"
                                >
                                  <Sparkles size={14} />
                                  {cert.title}
                                  <ExternalLink size={14} />
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* GitHub link */}
                        {exp.github && (
                          <motion.a
                            href={exp.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03, x: 4 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-spotify-green text-black font-semibold shadow-lg shadow-spotify-green/30 hover:shadow-spotify-green/50 transition-shadow"
                          >
                            <Github size={16} />
                            View Project on GitHub
                            <ExternalLink size={14} />
                          </motion.a>
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

export default Experience;
