import React, { useState } from 'react';
import { Card } from './ui/card';
import { ArrowLeft, ExternalLink, Github, X } from 'lucide-react';
import { projectsData } from '../data/mock';
import { Button } from './ui/button';

const Projects = ({ setActiveSection }) => {
  const [selectedProject, setSelectedProject] = useState(null);

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
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Projects</h1>
        <div className="w-20 h-1 bg-spotify-green rounded"></div>
        <p className="text-gray-400 mt-4 text-lg">Explore my work and creations</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <Card
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-spotify-card border-none overflow-hidden cursor-pointer hover:bg-spotify-card-hover transition-all duration-300 hover:scale-105 group"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-spotify-green font-semibold mb-2">{project.category}</div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-spotify-dark rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-spotify-dark rounded text-xs text-gray-400">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-spotify-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-spotify-card border-b border-gray-800 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-xs text-spotify-green font-semibold mb-2">
                {selectedProject.category}
              </div>
              <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-spotify-dark rounded-full text-sm text-spotify-green border border-spotify-green"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => window.open(selectedProject.link, '_blank')}
                  className="bg-spotify-green hover:bg-spotify-green-dark text-black font-semibold"
                >
                  <ExternalLink size={18} className="mr-2" />
                  View Project
                </Button>
                <Button
                  onClick={() => window.open(selectedProject.github, '_blank')}
                  variant="outline"
                  className="border-spotify-green text-spotify-green hover:bg-spotify-green hover:text-black"
                >
                  <Github size={18} className="mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;