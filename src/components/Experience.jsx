import React from 'react';
import { Card } from './ui/card';
import { ArrowLeft, Building, Calendar, MapPin, TrendingUp, Award, Github } from 'lucide-react';
import { experienceData } from '../data/mock';
import { Button } from './ui/button';

const Experience = ({ setActiveSection }) => {
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
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Experience</h1>
        <div className="w-20 h-1 bg-spotify-green rounded"></div>
        <p className="text-gray-400 mt-4 text-lg">Professional journey and achievements</p>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <Card key={exp.id} className="bg-spotify-card border-none p-8 relative">
            {/* Timeline dot */}
            <div className="absolute -left-3 top-8 w-6 h-6 bg-spotify-green rounded-full border-4 border-spotify-dark hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-spotify-green to-green-600 flex items-center justify-center flex-shrink-0">
                    <Building size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    <p className="text-spotify-green text-lg font-semibold">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp size={18} className="text-spotify-green" />
                    <h4 className="text-white font-semibold">Key Achievements</h4>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-spotify-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.certificates && exp.certificates.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={18} className="text-spotify-green" />
                      <h4 className="text-white font-semibold">Certificates</h4>
                    </div>
                    <ul className="space-y-2">
                      {exp.certificates.map((cert, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-spotify-green rounded-full mt-2 flex-shrink-0"></div>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-spotify-green hover:text-green-400 transition-colors underline"
                          >
                            {cert.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {exp.github && (
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Github size={18} className="text-spotify-green" />
                      <h4 className="text-white font-semibold">Project Links</h4>
                    </div>
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-spotify-green hover:text-green-400 transition-colors underline"
                    >
                      <Github size={16} />
                      View Project on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;