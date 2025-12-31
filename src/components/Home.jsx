import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Play, User, FolderOpen, Award, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { profileData } from '../data/mock';

const Home = ({ setActiveSection }) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const quickAccessCards = [
    {
      id: 'about',
      title: 'About Me',
      description: 'My journey and passion',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'ML & AI Creations',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=300&fit=crop',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'skills',
      title: 'Skills',
      description: 'Technical expertise',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'experience',
      title: 'Experience',
      description: 'Professional journey',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=300&fit=crop',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Academic background',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=300&fit=crop',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch',
      image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=300&h=300&fit=crop',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const featuredSections = [
    {
      id: 'knowledge-sharing',
      title: 'Knowledge Sharing',
      subtitle: 'Tutorials, Guides & Resources',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      id: 'achievements',
      title: 'Achievements',
      subtitle: 'Accomplishments & Milestones',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'personality',
      title: 'Personality',
      subtitle: 'Hobbies & Interests',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      gradient: 'from-pink-600 to-rose-600'
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
      url: 'https://kaggle.com/mayankgupta1754',
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
      url: 'https://hackerrank.com/mayankgupta1754',
      icon: '🎯',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'medium',
      title: 'Medium',
      description: 'Technical Writing',
      url: 'https://medium.com/@mayankgupta1754',
      icon: '✍️',
      color: 'from-black to-gray-700'
    }
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8 bg-gradient-to-b from-spotify-dark via-[#1a1a1a] to-spotify-dark">
      {/* Greeting Header */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
          {greeting}
        </h1>
      </div>

      {/* Quick Access - Spotify Style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {quickAccessCards.map((card) => (
          <Card
            key={card.id}
            onClick={() => setActiveSection(card.id)}
            className="bg-spotify-card hover:bg-spotify-card-hover border-none p-0 cursor-pointer transition-all duration-200 group overflow-hidden"
          >
            <div className="flex items-center h-20">
              <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-40`}></div>
              </div>
              <div className="flex-1 px-4 min-w-0">
                <h3 className="text-white font-bold text-sm truncate">{card.title}</h3>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity mr-4">
                <div className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                  <Play size={20} className="text-black ml-1" fill="black" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Featured Sections - Large Cards */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Featured Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSections.map((section) => (
            <Card
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className="bg-spotify-card hover:bg-spotify-card-hover border-none p-4 cursor-pointer transition-all duration-300 group overflow-hidden"
            >
              <div className="relative mb-4 aspect-square rounded overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-30 group-hover:opacity-40 transition-opacity`}></div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center shadow-2xl">
                    <Play size={20} className="text-black ml-1" fill="black" />
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold text-base mb-1">{section.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{section.subtitle}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Portal Links - External Platforms */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Explore More</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {portalLinks.map((portal) => (
            <Card
              key={`portal-${portal.id}`}
              onClick={() => window.open(portal.url, '_blank')}
              className="bg-spotify-card hover:bg-spotify-card-hover border-none p-4 cursor-pointer transition-all duration-300 group"
            >
              <div className="relative mb-4 aspect-square rounded overflow-hidden bg-gradient-to-br shadow-lg flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${portal.color}`}></div>
                <div className="relative z-10 text-4xl">
                  {portal.icon}
                </div>
              </div>
              <h3 className="text-white font-bold text-sm mb-1 truncate">{portal.title}</h3>
              <p className="text-gray-400 text-xs line-clamp-2">{portal.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;