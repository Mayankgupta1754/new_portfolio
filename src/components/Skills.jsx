import React from 'react';
import { Card } from './ui/card';
import { ArrowLeft, Code, Wrench, Users } from 'lucide-react';
import { skillsData } from '../data/mock';
import { Button } from './ui/button';

const Skills = ({ setActiveSection }) => {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Back Button */}
      <Button
        onClick={() => setActiveSection('home')}
        variant="ghost"
        className="mb-6 text-gray-400 hover:text-spotify-green transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Home
      </Button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Skills</h1>
        <div className="w-20 h-1 bg-spotify-green rounded"></div>
        <p className="text-gray-400 mt-4 text-lg">Technical expertise and capabilities</p>
      </div>

      {/* Technical Skills */}
      <Card className="bg-spotify-card border-none p-8 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-spotify-green flex items-center justify-center">
            <Code size={24} className="text-black" />
          </div>
          <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
        </div>
        <div className="space-y-4">
          {skillsData.technical.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-spotify-green font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-spotify-dark rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-spotify-green to-green-400 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Tools & Technologies */}
      <Card className="bg-spotify-card border-none p-8 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
            <Wrench size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Tools & Technologies</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {skillsData.tools.map((tool, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-spotify-dark rounded-full text-gray-300 border border-gray-700 hover:border-spotify-green hover:text-spotify-green transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </Card>

      {/* Soft Skills */}
      <Card className="bg-spotify-card border-none p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
            <Users size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Soft Skills</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-spotify-dark p-4 rounded-lg text-center hover:bg-opacity-80 transition-all"
            >
              <span className="text-gray-300 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Skills;