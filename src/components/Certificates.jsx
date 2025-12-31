import React from 'react';
import { Card } from './ui/card';
import { ArrowLeft, Award, Calendar } from 'lucide-react';
import { certificatesData } from '../data/mock';
import { Button } from './ui/button';

const Certificates = ({ setActiveSection }) => {
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
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Certificates</h1>
        <div className="w-20 h-1 bg-spotify-green rounded"></div>
        <p className="text-gray-400 mt-4 text-lg">Professional certifications and achievements</p>
      </div>

      {/* Certificates Cards */}
      <div className="space-y-6">
        {certificatesData.map((cert) => (
          <Card key={cert.id} className="bg-spotify-card border-none p-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Award size={32} className="text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-spotify-green text-lg font-semibold mb-1">{cert.issuer}</p>
                <p className="text-gray-400 mb-3">{cert.description}</p>

                <div className="flex flex-wrap gap-4 mb-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} />
                    <span>{cert.credentialId}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-white font-semibold mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-spotify-dark rounded-full text-sm text-spotify-green border border-spotify-green"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
