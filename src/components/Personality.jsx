import React, { useState } from 'react';
import { Card } from './ui/card';
import { ArrowLeft, Heart, Gamepad2, Music, Camera, BookOpen, Play, X } from 'lucide-react';
import { personalityData } from '../data/mock';
import { Button } from './ui/button';

const Personality = ({ setActiveSection }) => {
  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [likedPersonalities, setLikedPersonalities] = useState(new Set());

  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'gaming':
        return <Gamepad2 size={24} className="text-black" />;
      case 'music':
        return <Music size={24} className="text-black" />;
      case 'photography':
        return <Camera size={24} className="text-black" />;
      case 'reading':
        return <BookOpen size={24} className="text-black" />;
      default:
        return <Heart size={24} className="text-black" />;
    }
  };

  const handleCardClick = (personality) => {
    setSelectedPersonality(personality);
  };

  const toggleLike = (personalityId) => {
    setLikedPersonalities(prev => {
      const newSet = new Set(prev);
      if (newSet.has(personalityId)) {
        newSet.delete(personalityId);
      } else {
        newSet.add(personalityId);
      }
      return newSet;
    });
  };

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
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Personality</h1>
        <div className="w-20 h-1 bg-spotify-green rounded"></div>
        <p className="text-gray-400 mt-4 text-lg">My hobbies, interests, and what makes me tick</p>
      </div>

      {/* Personality Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {personalityData.map((item) => (
          <div key={item.id} className="group cursor-pointer" onClick={() => handleCardClick(item)}>
            <div className="aspect-square bg-spotify-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
              <div className="w-full h-full bg-gradient-to-br from-spotify-green to-green-600 flex items-center justify-center">
                {getIcon(item.category)}
              </div>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="bg-spotify-green rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play size={24} className="text-black ml-1" />
                </div>
              </div>
            </div>
            {/* Card Info */}
            <div className="mt-3">
              <h4 className="text-white text-sm font-medium truncate" title={item.title}>
                {item.title}
              </h4>
              <p className="text-gray-400 text-xs">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Personality Detail Modal */}
      {selectedPersonality && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-spotify-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-spotify-card border-b border-gray-800 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{selectedPersonality.title}</h2>
              <button
                onClick={() => setSelectedPersonality(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              {/* Album Cover Style Display */}
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-spotify-green to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {getIcon(selectedPersonality.category)}
                </div>
                <div className="flex-1">
                  <div className="text-xs text-spotify-green font-semibold mb-2">{selectedPersonality.category}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedPersonality.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{selectedPersonality.description}</p>

                  {/* Like Button */}
                  <Button
                    onClick={() => toggleLike(selectedPersonality.id)}
                    className={`font-semibold px-8 py-3 rounded-full mb-6 transition-colors ${
                      likedPersonalities.has(selectedPersonality.id)
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-spotify-green hover:bg-spotify-green-dark text-black'
                    }`}
                  >
                    <Heart
                      size={20}
                      className={`mr-2 ${likedPersonalities.has(selectedPersonality.id) ? 'fill-current' : ''}`}
                    />
                    {likedPersonalities.has(selectedPersonality.id) ? 'Liked' : 'Like'}
                  </Button>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedPersonality.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-spotify-dark rounded-full text-sm text-spotify-green border border-spotify-green"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Content Display */}
              <div className="border-t border-gray-800 pt-6 space-y-6">
                {/* Favorite Quote */}
                {selectedPersonality.favoriteQuote && (
                  <div>
                    <h4 className="text-lg font-semibold text-spotify-green mb-2">Favorite Quote</h4>
                    <blockquote className="text-gray-300 italic border-l-4 border-spotify-green pl-4">
                      {selectedPersonality.favoriteQuote}
                    </blockquote>
                  </div>
                )}

                {/* Personal Story */}
                {selectedPersonality.personalStory && (
                  <div>
                    <h4 className="text-lg font-semibold text-spotify-green mb-2">Personal Story</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedPersonality.personalStory}
                    </p>
                  </div>
                )}

                {/* Goals & Aspirations */}
                {selectedPersonality.goalsAndAspirations && (
                  <div>
                    <h4 className="text-lg font-semibold text-spotify-green mb-2">Goals & Aspirations</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedPersonality.goalsAndAspirations}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Personality;
