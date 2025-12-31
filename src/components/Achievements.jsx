import React, { useState } from 'react';
import { Card } from './ui/card';
import { ArrowLeft, Trophy, BookOpen, Users, Calendar, Play, Pause, SkipBack, SkipForward, X, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Achievements = ({ setActiveSection }) => {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedAchievements, setLikedAchievements] = useState(new Set());

  // Sample achievements data - replace with your actual data
  const achievementsData =[
  {
    id: 1,
    title: 'SDG-EcoAnalysis: AI for Sustainable Development',
    description: 'Organized and led SDG-EcoAnalysis, an event hosted by the AI & ML Club (TAM-VIT), focusing on how AI, economics, and technology can drive progress toward the UN Sustainable Development Goals. The event featured discussions on AI-driven decision making, economic sustainability, case studies in education and healthcare, an interactive puzzle game, and the EconoAI Quest competition. The initiative successfully highlighted AI’s role in predicting trends, mitigating crises, and enabling sustainable growth.',
    date: '2023',
    type: 'event',
    role: 'Organizer',
    technologies: ['AI', 'Economics', 'Sustainability', 'Data Science'],
    image: '/assests/sdg.jpg'
  },
  {
    id: 2,
    title: 'LeetCode 50-Day Streak Badge',
    description: 'Earned my first LeetCode badge by completing daily coding challenges for 50 consecutive days. This milestone strengthened my problem-solving skills, consistency, and confidence in data structures and algorithms. The journey involved tackling diverse problems, learning optimized approaches, and engaging with the global LeetCode community for continuous improvement.',
    date: '2024',
    type: 'achievement',
    platform: 'LeetCode',
    skills: ['DSA', 'Problem Solving', 'Consistency'],
    image: '/assests/leetcode.jpg'
  },
  {
    id: 3,
    title: 'Gravitas 2024 – AI/ML Club Contributions',
    description: 'Played a key role in multiple initiatives during Gravitas 2024 as a member of the AI/ML Club (TAM-VIT). Contributed to Survival Showdown by managing technical and data operations, served as a speaker for the Data Alchemy 2.0 AI/ML workshop, and acted as a reviewer and mentor during Code Cortex, a 36-hour hackathon. These experiences strengthened my leadership, mentoring, and technical evaluation skills.',
    date: '2024',
    type: 'event',
    role: 'Speaker, Reviewer & Mentor',
    technologies: ['AI', 'ML', 'Data Science'],
    image: '/assests/gravitas.jpg'
  },
  {
    id: 4,
    title: 'Microsoft Certified: Azure AI Engineer Associate',
    description: 'Achieved the Microsoft Certified: Azure AI Engineer Associate certification by passing the AI-102 exam. Gained hands-on expertise in NLP, computer vision, generative AI, and Azure AI services. This certification validated my ability to design, build, and deploy AI solutions using Microsoft Azure in real-world scenarios.',
    date: '2025',
    type: 'certification',
    issuer: 'Microsoft',
    skills: ['Azure AI', 'NLP', 'Computer Vision', 'Generative AI'],
    image: '/assests/microsoft.png'
  },
  {
    id: 5,
    title: 'Algo Arena Hackathon – Winner & Best Pitch',
    description: 'Secured 1st position and won the Best Pitch award at the Algo Arena Hackathon during Yantra 2024, organized by the AI-ML (TAM-VIT) Club. Built a robot with real-time object detection and RC controls using multiple sensors and embedded computing boards. The project involved real-time video processing, intelligent interaction, and seamless hardware-software integration.',
    date: '2024',
    type: 'hackathon',
    position: 'Winner',
    technologies: ['AI', 'Machine Learning', 'Robotics', 'Computer Vision'],
    image: '/assests/algoarena.jpg'
  }
];

  const currentAchievementData = achievementsData[currentAchievement];

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievementsData.length);
  };

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievementsData.length) % achievementsData.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleLike = () => {
    setLikedAchievements(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentAchievement)) {
        newSet.delete(currentAchievement);
      } else {
        newSet.add(currentAchievement);
      }
      return newSet;
    });
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'hackathon':
        return Trophy;
      case 'course':
        return BookOpen;
      case 'event':
        return Users;
      default:
        return Trophy;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'hackathon':
        return 'from-yellow-500 to-orange-500';
      case 'course':
        return 'from-blue-500 to-purple-500';
      case 'event':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
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
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Achievements</h1>
        <div className="w-20 h-1 bg-spotify-green rounded"></div>
        <p className="text-gray-400 mt-4 text-lg">My accomplishments, participations, and milestones - {achievementsData.length} achievements</p>
      </div>

      {/* Spotify-like Player */}
      <div className="max-w-4xl mx-auto">
        <Card className="bg-spotify-card border-none p-8">
          {/* Album Cover */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-80 h-80 mx-auto md:mx-0 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={currentAchievementData.image}
                  alt={currentAchievementData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Player Controls and Info */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Song Info */}
              <div className="mb-6">
                <div className="text-sm text-spotify-green font-medium mb-2 uppercase tracking-wider">
                  {currentAchievementData.type}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {currentAchievementData.title}
                </h2>
                <div className="flex items-center gap-4 text-gray-400 mb-4">
                  <span>{currentAchievementData.date}</span>
                  {currentAchievementData.position && (
                    <span className="flex items-center gap-1">
                      <Trophy size={16} />
                      {currentAchievementData.position}
                    </span>
                  )}
                  {currentAchievementData.issuer && (
                    <span>{currentAchievementData.issuer}</span>
                  )}
                </div>

                {/* Technologies/Skills Tags */}
                {(currentAchievementData.skills || currentAchievementData.technologies) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(currentAchievementData.skills || currentAchievementData.technologies).map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-spotify-dark rounded-full text-sm text-spotify-green border border-spotify-green"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    onClick={prevAchievement}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <SkipBack size={24} />
                  </Button>

                  <Button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-spotify-green hover:bg-spotify-green-dark text-black"
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                  </Button>

                  <Button
                    onClick={nextAchievement}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <SkipForward size={24} />
                  </Button>
                </div>

                <Button
                  onClick={toggleLike}
                  variant="ghost"
                  size="sm"
                  className={`text-gray-400 hover:text-white md:block hidden ${likedAchievements.has(currentAchievement) ? 'text-red-500' : ''}`}
                >
                  <Heart size={24} className={likedAchievements.has(currentAchievement) ? 'fill-current' : ''} />
                </Button>
              </div>
            </div>
          </div>

          {/* Lyrics/Description Section */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Description</h3>
            <div className="max-h-60 overflow-y-auto">
              <div className="px-4 py-3 rounded-lg bg-green-500 text-black-800 leading-relaxed">
                {currentAchievementData.description}
              </div>
            </div>
          </div>
        </Card>

        {/* Achievement List */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-4">All Achievements</h3>
          <div className="space-y-2">
            {achievementsData.map((achievement, index) => {
              const Icon = getTypeIcon(achievement.type);
              const colorClass = getTypeColor(achievement.type);

              return (
                <div
                  key={achievement.id}
                  onClick={() => setCurrentAchievement(index)}
                  className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all ${
                    index === currentAchievement
                      ? 'bg-spotify-green bg-opacity-20 border-l-4 border-spotify-green'
                      : 'bg-spotify-card hover:bg-spotify-card-hover'
                  }`}
                >
                  <div className={`w-12 h-12 rounded bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium truncate">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">{achievement.type} • {achievement.date}</p>
                  </div>
                  {index === currentAchievement && (
                    <div className="flex items-center gap-2">
                      {isPlaying && (
                        <div className="flex gap-1">
                          <div className="w-1 h-4 bg-spotify-green animate-pulse"></div>
                          <div className="w-1 h-4 bg-spotify-green animate-pulse" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-1 h-4 bg-spotify-green animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
