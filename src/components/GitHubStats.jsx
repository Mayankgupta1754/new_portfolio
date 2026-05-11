import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Card } from './ui/card';
import {
  ArrowLeft, Github, Star, GitFork, Users, BookOpen, Code2, ExternalLink,
  Flame, GitBranch, Sparkles
} from 'lucide-react';
import { Button } from './ui/button';

const GITHUB_USERNAME = 'Mayankgupta1754';

const AnimatedNumber = ({ value, suffix = '', duration = 1.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
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

const GitHubStats = ({ setActiveSection }) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error('Failed to fetch');
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        if (!cancelled) {
          setUser(userData);
          setRepos(reposData);
          setLoading(false);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e.message);
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => { cancelled = true; };
  }, []);

  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  const totalForks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);

  // Language distribution
  const languageMap = repos.reduce((acc, r) => {
    if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
    return acc;
  }, {});
  const languages = Object.entries(languageMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const totalLangCount = languages.reduce((sum, [, c]) => sum + c, 0);

  const langColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Jupyter: '#DA5B0B',
    'Jupyter Notebook': '#DA5B0B',
    C: '#555555',
    'C++': '#f34b7d',
    Shell: '#89e051',
    Go: '#00ADD8',
    Rust: '#dea584'
  };

  const topRepos = [...repos]
    .filter((r) => !r.fork)
    .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
    .slice(0, 6);

  const stats = [
    { label: 'Public Repos', value: user?.public_repos || 0, icon: BookOpen, color: 'from-spotify-green to-emerald-500', glow: 'rgba(29,185,84,0.4)' },
    { label: 'Followers', value: user?.followers || 0, icon: Users, color: 'from-blue-500 to-cyan-500', glow: 'rgba(59,130,246,0.4)' },
    { label: 'Total Stars', value: totalStars, icon: Star, color: 'from-yellow-500 to-orange-500', glow: 'rgba(234,179,8,0.4)' },
    { label: 'Total Forks', value: totalForks, icon: GitFork, color: 'from-purple-500 to-pink-500', glow: 'rgba(168,85,247,0.4)' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
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
          <h1 className="text-4xl lg:text-6xl font-bold mb-3 flex items-center gap-3 flex-wrap">
            <span className="gradient-text">GitHub Stats</span>
            <motion.a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center"
            >
              <Github size={36} className="text-spotify-green" />
            </motion.a>
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
            Live from <span className="text-spotify-green font-mono">@{GITHUB_USERNAME}</span>
          </p>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-32">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 border-4 border-spotify-green border-t-transparent rounded-full"
            />
          </div>
        )}

        {error && (
          <Card className="bg-spotify-card border-none p-8 text-center">
            <p className="text-red-400">Could not load GitHub data. {error}</p>
          </Card>
        )}

        {!loading && !error && user && (
          <>
            {/* Profile Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#1DB954"
                glarePosition="all"
                glareBorderRadius="16px"
                transitionSpeed={2000}
              >
                <Card className="relative bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none p-6 lg:p-8 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-spotify-green opacity-10 blur-3xl" />
                  <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-28 h-28 flex-shrink-0"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        className="absolute -inset-1 rounded-full"
                        style={{
                          background: 'conic-gradient(from 0deg, #1DB954, transparent 40%, #1DB954)',
                          padding: '3px'
                        }}
                      >
                        <div className="w-full h-full rounded-full bg-black" />
                      </motion.div>
                      <img
                        src={user.avatar_url}
                        alt={user.name}
                        className="absolute inset-1 rounded-full object-cover border-2 border-spotify-green/40"
                      />
                    </motion.div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                        {user.name || user.login}
                      </h2>
                      <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-spotify-green text-sm font-mono hover:underline inline-flex items-center gap-1"
                      >
                        @{user.login}
                        <ExternalLink size={12} />
                      </a>
                      {user.bio && <p className="text-gray-300 mt-3 leading-relaxed">{user.bio}</p>}
                      <div className="flex items-center justify-center md:justify-start gap-4 mt-3 text-sm text-gray-400 flex-wrap">
                        {user.location && (
                          <span className="flex items-center gap-1">{user.location}</span>
                        )}
                        <span className="flex items-center gap-1">
                          Joined {new Date(user.created_at).getFullYear()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Tilt>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
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
                      scale={1.04}
                      transitionSpeed={1500}
                    >
                      <Card className="relative bg-spotify-card border-none p-5 overflow-hidden spotify-card-lift group">
                        <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-11 h-11 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-md`}
                          style={{ boxShadow: `0 6px 20px ${stat.glow}` }}
                        >
                          <Icon size={22} className="text-white drop-shadow" />
                        </motion.div>
                        <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                          <AnimatedNumber value={stat.value} />
                        </div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                        <div className="shine-overlay" />
                      </Card>
                    </Tilt>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Languages */}
            {languages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <div className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] mb-1">Track 01</div>
                <h2 className="text-3xl font-bold text-white mb-5 flex items-center gap-3">
                  Most Used Languages
                  <Code2 size={26} className="text-blue-400" />
                </h2>
                <Card className="relative bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none p-6 lg:p-8 overflow-hidden">
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-spotify-green opacity-10 blur-3xl" />

                  {/* Stacked bar */}
                  <div className="relative h-4 rounded-full overflow-hidden flex mb-6 bg-spotify-dark">
                    {languages.map(([lang, count], i) => {
                      const pct = (count / totalLangCount) * 100;
                      return (
                        <motion.div
                          key={lang}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                          style={{ background: langColors[lang] || '#1DB954' }}
                          title={`${lang}: ${pct.toFixed(1)}%`}
                        />
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {languages.map(([lang, count], i) => {
                      const pct = (count / totalLangCount) * 100;
                      return (
                        <motion.div
                          key={lang}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.07 }}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-2.5 group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.4 }}
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{
                              background: langColors[lang] || '#1DB954',
                              boxShadow: `0 0 10px ${langColors[lang] || '#1DB954'}80`
                            }}
                          />
                          <span className="text-white font-medium text-sm flex-1">{lang}</span>
                          <span className="text-gray-400 text-xs font-mono">{pct.toFixed(1)}%</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Contribution Graph (SVG embed) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] mb-1">Track 02</div>
              <h2 className="text-3xl font-bold text-white mb-5 flex items-center gap-3">
                Contribution Activity
                <Flame size={26} className="text-orange-400" />
              </h2>
              <Card className="relative bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none p-4 lg:p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-orange-500 opacity-10 blur-3xl" />
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=181818&color=1DB954&line=1DB954&point=ffffff&area=true&hide_border=true`}
                  alt="GitHub contribution graph"
                  className="relative w-full rounded-lg"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </Card>
            </motion.div>

            {/* Top Repositories */}
            {topRepos.length > 0 && (
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
                    Top Repositories
                    <Sparkles size={26} className="text-yellow-400" />
                  </h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topRepos.map((repo, idx) => (
                    <motion.div
                      key={repo.id}
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                    >
                      <Tilt
                        tiltMaxAngleX={6}
                        tiltMaxAngleY={6}
                        glareEnable={true}
                        glareMaxOpacity={0.12}
                        glareColor="#1DB954"
                        glarePosition="all"
                        glareBorderRadius="12px"
                        scale={1.02}
                        transitionSpeed={1500}
                        className="h-full"
                      >
                        <Card
                          onClick={() => window.open(repo.html_url, '_blank')}
                          className="relative bg-spotify-card border-none p-5 cursor-pointer group h-full flex flex-col spotify-card-lift overflow-hidden"
                        >
                          <div className="absolute top-3 right-3 text-xs text-gray-500 font-mono">
                            #{String(idx + 1).padStart(2, '0')}
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-spotify-green to-emerald-600 flex items-center justify-center flex-shrink-0">
                              <GitBranch size={18} className="text-black" />
                            </div>
                            <h3 className="text-white font-bold truncate flex-1 group-hover:text-spotify-green transition-colors">
                              {repo.name}
                            </h3>
                          </div>
                          <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                            {repo.description || 'No description provided'}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-400 flex-wrap">
                            {repo.language && (
                              <span className="flex items-center gap-1.5">
                                <span
                                  className="w-2.5 h-2.5 rounded-full"
                                  style={{
                                    background: langColors[repo.language] || '#1DB954',
                                    boxShadow: `0 0 6px ${langColors[repo.language] || '#1DB954'}80`
                                  }}
                                />
                                {repo.language}
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <Star size={12} />
                              {repo.stargazers_count}
                            </span>
                            <span className="flex items-center gap-1">
                              <GitFork size={12} />
                              {repo.forks_count}
                            </span>
                          </div>
                          <div className="shine-overlay" />
                        </Card>
                      </Tilt>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default GitHubStats;
