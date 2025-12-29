import React from 'react';
import { Card } from './ui/card';
import { ArrowLeft, Sparkles, Target, Heart } from 'lucide-react';
import { aboutData } from '../data/mock';
import { Button } from './ui/button';

const About = ({ setActiveSection }) => {
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
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h1>
        <div className="w-20 h-1 bg-spotify-green rounded"></div>
      </div>

      {/* Bio */}
      <Card className="bg-spotify-card border-none p-8 mb-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-spotify-green flex items-center justify-center flex-shrink-0">
            <Sparkles size={24} className="text-black" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Bio</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{aboutData.bio}</p>
          </div>
        </div>
      </Card>

      {/* Highlights */}
      <Card className="bg-spotify-card border-none p-8 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
            <Target size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-4">Highlights</h2>
            <ul className="space-y-3">
              {aboutData.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-spotify-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-lg">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Interests */}
      <Card className="bg-spotify-card border-none p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
            <Heart size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-4">Interests</h2>
            <div className="flex flex-wrap gap-3">
              {aboutData.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-spotify-dark rounded-full text-spotify-green border border-spotify-green font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;