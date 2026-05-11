import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Card } from './ui/card';
import {
  ArrowLeft, Code2, Wrench, Users, Brain, Database, Cpu, Shield, Sparkles,
  Lightbulb, MessageSquare, Briefcase, Search, GraduationCap, Crown,
  BarChart3, LineChart, PieChart, FileSpreadsheet, Server, Activity, Presentation
} from 'lucide-react';
import { skillsData } from '../data/mock';
import { Button } from './ui/button';

const AnimatedNumber = ({ value, suffix = '%', duration = 1.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

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

const CircularSkill = ({ skill, index, icon: Icon, color }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#1DB954"
        glarePosition="all"
        glareBorderRadius="12px"
        scale={1.04}
        transitionSpeed={1500}
      >
        <Card className="relative bg-spotify-card border-none p-6 overflow-hidden spotify-card-lift group">
          <div
            className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
          />
          <div className="relative flex flex-col items-center">
            <div className="relative w-32 h-32 mb-3">
              {/* Background ring */}
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  stroke="#282828"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r={radius}
                  stroke="url(#skillGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={inView ? { strokeDashoffset: circumference - (skill.level / 100) * circumference } : {}}
                  transition={{ delay: index * 0.1 + 0.2, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                  style={{ filter: 'drop-shadow(0 0 6px rgba(29,185,84,0.5))' }}
                />
                <defs>
                  <linearGradient id="skillGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1DB954" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-1 shadow-md`}
                >
                  <Icon size={18} className="text-white" />
                </motion.div>
                <div className="text-spotify-green font-bold text-lg">
                  <AnimatedNumber value={skill.level} />
                </div>
              </div>
            </div>
            <h4 className="text-white font-bold text-center text-sm">{skill.name}</h4>
          </div>
          <div className="shine-overlay" />
        </Card>
      </Tilt>
    </motion.div>
  );
};

const Skills = ({ setActiveSection }) => {
  const [activeToolCategory, setActiveToolCategory] = useState('All');

  // Map skill name -> icon + color
  const skillMeta = {
    'Data Analytics': { icon: BarChart3, color: 'from-spotify-green to-emerald-500' },
    'SQL': { icon: Server, color: 'from-indigo-500 to-blue-500' },
    'Power BI': { icon: PieChart, color: 'from-yellow-500 to-orange-500' },
    'Tableau': { icon: LineChart, color: 'from-blue-500 to-cyan-500' },
    'Excel': { icon: FileSpreadsheet, color: 'from-green-500 to-emerald-600' },
    'Python': { icon: Code2, color: 'from-blue-500 to-cyan-500' },
    'Statistical Analysis': { icon: Activity, color: 'from-purple-500 to-pink-500' },
    'Machine Learning': { icon: Brain, color: 'from-violet-500 to-purple-500' },
    'Java': { icon: Code2, color: 'from-orange-500 to-red-500' },
    'Data Science': { icon: Database, color: 'from-green-500 to-emerald-500' },
    'Deep Learning': { icon: Cpu, color: 'from-violet-500 to-purple-500' },
    'Artificial Intelligence': { icon: Sparkles, color: 'from-pink-500 to-rose-500' },
    'Ethical Hacking': { icon: Shield, color: 'from-red-500 to-pink-500' }
  };

  const softSkillMeta = {
    'Problem Solving': { icon: Lightbulb, color: 'from-yellow-500 to-orange-500', desc: 'Breaking complex business problems into structured analysis' },
    'Communication': { icon: MessageSquare, color: 'from-blue-500 to-cyan-500', desc: 'Translating numbers into clear narratives for any audience' },
    'Data Storytelling': { icon: Presentation, color: 'from-spotify-green to-emerald-500', desc: 'Turning insights into compelling, decision-ready stories' },
    'Stakeholder Management': { icon: Briefcase, color: 'from-green-500 to-emerald-500', desc: 'Aligning analytics with what the business actually needs' },
    'Critical Thinking': { icon: Search, color: 'from-indigo-500 to-purple-500', desc: 'Questioning the data, the method, and the conclusion' },
    'Team Leadership': { icon: Crown, color: 'from-purple-500 to-pink-500', desc: 'Leading teams toward shared goals' },
    'Project Management': { icon: Briefcase, color: 'from-green-500 to-emerald-500', desc: 'Planning, executing, delivering on time' },
    'Research': { icon: Search, color: 'from-indigo-500 to-purple-500', desc: 'Deep diving into the unknown' },
    'Mentoring': { icon: GraduationCap, color: 'from-pink-500 to-rose-500', desc: 'Helping others grow into confident analysts' }
  };

  // Categorize tools — analyst-first ordering
  const toolCategories = {
    'BI & Visualization': ['Power BI', 'Tableau', 'Excel', 'DAX', 'Power Query', 'Matplotlib', 'Seaborn', 'Plotly', 'Dashboarding', 'Data Storytelling'],
    'Databases': ['SQL'],
    'Analysis': ['Pandas', 'NumPy', 'Data Cleaning', 'Data Visualization', 'EDA', 'Feature Engineering', 'Statistical Analysis', 'Hypothesis Testing', 'A/B Testing', 'KPI Reporting'],
    'Languages': ['Python', 'Java'],
    'ML / Modeling': ['Scikit-learn', 'TensorFlow', 'Keras', 'Model Evaluation', 'Cross-Validation', 'Hyperparameter Tuning'],
    'Tools': ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Kaggle']
  };

  const categoryFilters = ['All', ...Object.keys(toolCategories)];

  const getCategoryForTool = (tool) => {
    for (const [cat, list] of Object.entries(toolCategories)) {
      if (list.includes(tool)) return cat;
    }
    return 'Other';
  };

  const filteredTools = activeToolCategory === 'All'
    ? skillsData.tools
    : skillsData.tools.filter((t) => getCategoryForTool(t) === activeToolCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
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
            <span className="gradient-text">Skills</span>
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
            My analyst toolkit &mdash; tools, tech, and traits
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {[
            { label: 'Core Skills', value: skillsData.technical.length, color: 'from-spotify-green to-emerald-500' },
            { label: 'Tools & Tech', value: skillsData.tools.length, color: 'from-blue-500 to-cyan-500' },
            { label: 'Soft Skills', value: skillsData.softSkills.length, color: 'from-purple-500 to-pink-500' }
          ].map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="relative bg-spotify-card border-none p-5 overflow-hidden spotify-card-lift group">
                <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
                <div className="relative">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    <AnimatedNumber value={stat.value} suffix="+" />
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Top Skills - Circular Progress */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="mb-5">
            <div className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] mb-1">Track 01</div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              Top Skills
              <Brain size={26} className="text-purple-400" />
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData.technical.map((skill, index) => {
              const meta = skillMeta[skill.name] || { icon: Code2, color: 'from-gray-500 to-gray-700' };
              return (
                <CircularSkill
                  key={skill.name}
                  skill={skill}
                  index={index}
                  icon={meta.icon}
                  color={meta.color}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Tools & Tech Stack */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="mb-5">
            <div className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] mb-1">Track 02</div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              Tools & Tech Stack
              <Wrench size={26} className="text-blue-400" />
            </h2>
          </motion.div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {categoryFilters.map((cat) => {
              const isActive = activeToolCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveToolCategory(cat)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-black' : 'text-gray-300 bg-spotify-card hover:bg-spotify-card-hover'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeToolPill"
                      className="absolute inset-0 bg-spotify-green rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Tools grid */}
          <Card className="bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none p-6 lg:p-8 overflow-hidden relative">
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-spotify-green opacity-10 blur-3xl" />
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-purple-500 opacity-10 blur-3xl" />
            <motion.div
              key={activeToolCategory}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.03 } }
              }}
              initial="hidden"
              animate="show"
              className="relative flex flex-wrap gap-2.5"
            >
              {filteredTools.map((tool, idx) => (
                <motion.span
                  key={`${activeToolCategory}-${tool}-${idx}`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.6, y: 15 },
                    show: {
                      opacity: 1, scale: 1, y: 0,
                      transition: { type: 'spring', stiffness: 200, damping: 15 }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.4 }
                  }}
                  className="group relative px-4 py-2 rounded-full text-sm font-medium text-spotify-green bg-spotify-dark border border-spotify-green/30 hover:border-spotify-green hover:bg-spotify-green hover:text-black transition-colors cursor-default"
                  style={{ boxShadow: '0 0 0 rgba(29,185,84,0)' }}
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>
          </Card>
        </motion.div>

        {/* Soft Skills - Flip cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mb-8"
        >
          <motion.div variants={itemVariants} className="mb-5">
            <div className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] mb-1">Track 03</div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              Soft Skills
              <Users size={26} className="text-pink-400" />
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ perspective: '1200px' }}>
            {skillsData.softSkills.map((skill, index) => {
              const meta = softSkillMeta[skill] || { icon: Sparkles, color: 'from-spotify-green to-emerald-500', desc: '' };
              const Icon = meta.icon;
              return (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  className="relative h-40 cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front */}
                  <Card
                    className="absolute inset-0 bg-spotify-card border-none flex flex-col items-center justify-center p-5 overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${meta.color} opacity-20 blur-2xl`} />
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${meta.color} flex items-center justify-center shadow-lg mb-3`}
                    >
                      <Icon size={26} className="text-white" />
                    </motion.div>
                    <h4 className="relative text-white font-bold text-center">{skill}</h4>
                  </Card>
                  {/* Back */}
                  <Card
                    className={`absolute inset-0 bg-gradient-to-br ${meta.color} border-none flex items-center justify-center p-5`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <p className="text-white text-center text-sm font-medium leading-relaxed">
                      {meta.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
