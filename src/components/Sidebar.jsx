import React from 'react';
import { Home, FolderOpen, Award, Briefcase, GraduationCap, Mail, Download, Github, Linkedin, Menu, X, BookOpen, Heart, Trophy } from 'lucide-react';
import { profileData } from '../data/mock';
import { Button } from './ui/button';

const Sidebar = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'knowledge-sharing', label: 'Knowledge Sharing', icon: BookOpen },
    { id: 'personality', label: 'Personality', icon: Heart },
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
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">MG</span>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Mayank</h2>
              <h2 className="text-white font-bold text-lg -mt-1">Gupta</h2>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-spotify-green">
            <img
              src={profileData.profileImage}
              alt={profileData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-white text-xl font-bold text-center mb-1">{profileData.name}</h1>
          <p className="text-gray-400 text-sm text-center">{profileData.title}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                      ${activeSection === item.id
                        ? 'bg-spotify-green text-black font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-gray-900'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Download Resume */}
        <div className="mt-6 mb-4">
          <Button
            onClick={() => window.open(profileData.resumeUrl, '_blank')}
            className="w-full bg-spotify-green hover:bg-spotify-green-dark text-black font-semibold py-3 rounded-full transition-all"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-4 border-t border-gray-800">
          <a
            href={profileData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-spotify-green transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={profileData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-spotify-green transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={profileData.social.email}
            className="text-gray-400 hover:text-spotify-green transition-colors"
          >
            <Mail size={20} />
          </a>
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