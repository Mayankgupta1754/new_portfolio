import React from 'react';
import { Card } from './ui/card';
import { ArrowLeft, GraduationCap, Award, Calendar } from 'lucide-react';
import { educationData } from '../data/mock';
import { Button } from './ui/button';

const Education = ({ setActiveSection }) => {
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
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Education</h1>
        <div className="w-20 h-1 bg-spotify-green rounded"></div>
        <p className="text-gray-400 mt-4 text-lg">Academic background and qualifications</p>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">
        {educationData.map((edu) => (
          <Card key={edu.id} className="bg-spotify-card border-none p-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={32} className="text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-spotify-green text-lg font-semibold mb-1">{edu.institution}</p>
                <p className="text-gray-400 mb-3">{edu.field}</p>
                
                <div className="flex flex-wrap gap-4 mb-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-white font-semibold mb-3">Achievements</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-spotify-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Education;