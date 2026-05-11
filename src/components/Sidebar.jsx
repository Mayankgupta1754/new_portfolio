import React from 'react';
import { motion } from 'framer-motion';
import { Home, FolderOpen, Award, Briefcase, GraduationCap, Mail, Download, Github, Linkedin, Menu, X, Trophy, User, BookOpen, Code2 } from 'lucide-react';
import { profileData } from '../data/mock';
import { Button } from './ui/button';

const Sidebar = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'blog', label: 'My Playlists', icon: BookOpen },
    { id: 'github', label: 'GitHub Stats', icon: Code2 },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black rounded-full text-spotify-green hover:bg-gray-900 transition-colors"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-black w-72 flex flex-col p-6 z-40
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.05 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center shadow-lg shadow-spotify-green/30"
            >
              <span className="text-black font-bold text-xl">MG</span>
            </motion.div>
            <div>
              <h2 className="text-white font-bold text-lg">Mayank</h2>
              <h2 className="text-white font-bold text-lg -mt-1">Gupta</h2>
            </div>
          </div>
        </motion.div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #1DB954, transparent 40%, #1DB954)',
                padding: '4px'
              }}
            >
              <div className="w-full h-full rounded-full bg-black"></div>
            </motion.div>
            <div className="absolute inset-1 rounded-full overflow-hidden">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-white text-xl font-bold text-center mb-1">{profileData.name}</h1>
          <p className="text-gray-400 text-sm text-center mb-3">{profileData.title}</p>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center mb-2"
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-spotify-green/10 border border-spotify-green/40 text-spotify-green text-[10px] font-bold uppercase tracking-wider">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-spotify-green"
                style={{ boxShadow: '0 0 8px rgba(29,185,84,0.8)' }}
              />
              Open to Data Analyst Roles
            </div>
          </motion.div>
          <div className="flex justify-center">
            <span className="eq-container">
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
            </span>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1 relative">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      relative w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 z-10
                      ${isActive
                        ? 'text-black font-semibold'
                        : 'text-gray-300 hover:text-white'
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-spotify-green rounded-lg -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-lg bg-gray-900 opacity-0 hover:opacity-100 transition-opacity duration-200 -z-10" />
                    )}
                    <Icon size={20} />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto eq-container"
                      >
                        <span className="eq-bar" style={{ background: '#000' }}></span>
                        <span className="eq-bar" style={{ background: '#000' }}></span>
                        <span className="eq-bar" style={{ background: '#000' }}></span>
                      </motion.span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Download Resume */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 mb-4"
        >
          <Button
            onClick={() => window.open(profileData.resumeUrl, '_blank')}
            className="w-full bg-spotify-green hover:bg-spotify-green-dark text-black font-semibold py-3 rounded-full transition-all shadow-lg shadow-spotify-green/20 hover:shadow-spotify-green/40"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </Button>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-4 border-t border-gray-800">
          {[
            { href: profileData.social.github, Icon: Github },
            { href: profileData.social.linkedin, Icon: Linkedin },
            { href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('themayankgupta17@gmail.com')}`, Icon: Mail }
          ].map(({ href, Icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-spotify-green transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </>
  );
};

export default Sidebar;
