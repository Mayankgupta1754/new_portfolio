import React, { useState } from 'react';
import { ArrowLeft, Play, Pause, Heart, Clock } from 'lucide-react';
import { knowledgeSharingData } from '../data/mock';
import { Button } from './ui/button';

const KnowledgeSharing = ({ setActiveSection }) => {
  const [playingTrack, setPlayingTrack] = useState(null);
  const [likedTracks, setLikedTracks] = useState(new Set());
  const [activeTab, setActiveTab] = useState('dsa');

  const togglePlay = (trackId) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId);
  };

  const toggleLike = (trackId) => {
    setLikedTracks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(trackId)) {
        newSet.delete(trackId);
      } else {
        newSet.add(trackId);
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
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Knowledge Playlists</h1>
        <div className="w-20 h-1 bg-spotify-green rounded"></div>
        <p className="text-gray-400 mt-4 text-lg">My learning journey - {knowledgeSharingData.length} tracks</p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'dsa', label: 'DSA Questions', icon: '📊' },
            { id: 'other', label: 'Other Content', icon: '📚' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-spotify-green text-black'
                  : 'bg-spotify-card text-gray-300 hover:bg-spotify-card-hover'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Playlist Header */}
      <div className="bg-spotify-card rounded-lg p-4 mb-4">
        <div className="grid grid-cols-12 gap-4 text-sm text-gray-400 font-medium mb-2 px-4">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-3">Artist</div>
          <div className="col-span-2">Album</div>
          <div className="col-span-1 flex items-center">
            <Clock size={16} />
          </div>
        </div>
        <div className="border-t border-gray-700"></div>
      </div>

      {/* Playlist Tracks */}
      <div className="space-y-2">
        {knowledgeSharingData
          .filter(item => activeTab === 'dsa' ? item.type === 'dsa' : item.type !== 'dsa')
          .map((item, index) => (
          <div
            key={item.id}
            className="group bg-spotify-card hover:bg-spotify-card-hover rounded-lg p-4 transition-all duration-200 cursor-pointer"
            onClick={() => window.open(item.link, '_blank')}
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Track Number / Play Button */}
              <div className="col-span-1 flex items-center justify-center">
                <div className="relative">
                  <span className="group-hover:hidden text-gray-400">{index + 1}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay(item.id);
                    }}
                    className="hidden group-hover:flex items-center justify-center w-8 h-8 bg-spotify-green rounded-full text-black hover:scale-110 transition-transform"
                  >
                    {playingTrack === item.id ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                  </button>
                </div>
              </div>

              {/* Title & Image */}
              <div className="col-span-5 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-medium truncate">{item.title}</h3>
                  <p className="text-gray-400 text-sm truncate">{item.category}</p>
                </div>
              </div>

              {/* Artist */}
              <div className="col-span-3 text-gray-300 truncate">
                {item.artist}
              </div>

              {/* Album */}
              <div className="col-span-2 text-gray-300 truncate">
                {item.album}
              </div>

              {/* Duration & Like */}
              <div className="col-span-1 flex items-center justify-between">
                <span className="text-gray-400 text-sm">{item.duration}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(item.id);
                  }}
                  className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                    likedTracks.has(item.id) ? 'text-red-500' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Heart size={16} className={likedTracks.has(item.id) ? 'fill-current' : ''} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default KnowledgeSharing;
