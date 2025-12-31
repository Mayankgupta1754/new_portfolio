import React, { useState } from 'react';
import { Card } from './ui/card';
import { ArrowLeft, Trophy, BookOpen, Users, Calendar, Play, Pause, SkipBack, SkipForward, X, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Achievements = ({ setActiveSection }) => {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedAchievements, setLikedAchievements] = useState(new Set());

  // Sample achievements data - replace with your actual data
  const achievementsData = [
    {
      id: 1,
      title: 'Hackathon Winner - Smart India Hackathon',
      description: 'Led a team to victory in the Smart India Hackathon by developing an AI-powered healthcare solution for rural areas. This was an incredible experience where we built a comprehensive platform that connected rural healthcare providers with AI-driven diagnostic tools. The solution included real-time telemedicine capabilities, automated appointment scheduling, and predictive analytics for resource allocation. Our team worked tirelessly for 36 hours straight, implementing cutting-edge machine learning algorithms to analyze medical data and provide accurate preliminary diagnoses. The victory not only validated our technical skills but also reinforced our commitment to using technology for social good.',
      date: '2024',
      type: 'hackathon',
      position: 'Winner',
      technologies: ['AI', 'Healthcare', 'IoT'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'Google Cloud Study Jam Participant',
      description: 'Completed intensive training on Google Cloud Platform fundamentals, machine learning APIs, and cloud architecture. This comprehensive program covered everything from basic cloud computing concepts to advanced machine learning implementations. We learned to deploy scalable applications, implement security best practices, and leverage Google\'s powerful AI and ML tools. The hands-on labs were particularly valuable, allowing us to build real-world applications using Vertex AI, BigQuery, and Cloud Functions. The certification earned through this program has been instrumental in my cloud computing career.',
      date: '2023',
      type: 'course',
      issuer: 'Google Cloud',
      skills: ['Cloud Computing', 'Machine Learning', 'GCP'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'VIT Hackathon 2023',
      description: 'Participated in the annual VIT Hackathon, developing innovative solutions for campus-related problems. Our team focused on creating a smart campus management system that integrated IoT sensors, mobile applications, and predictive analytics. We built a comprehensive platform that optimized energy consumption, improved security, and enhanced the overall student experience. The project included real-time crowd monitoring, automated lighting systems, and a mobile app for students to access campus resources. Although we didn\'t win, the experience taught us valuable lessons in rapid prototyping and user-centered design.',
      date: '2023',
      type: 'hackathon',
      position: 'Participant',
      technologies: ['Web Development', 'AI', 'Mobile Apps'],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Machine Learning Workshop Organizer',
      description: 'Organized and conducted a 3-day workshop on Machine Learning fundamentals for 200+ students at VIT Vellore. This was an incredibly rewarding experience that combined my passion for teaching with my technical expertise. We covered everything from basic statistics and linear algebra to advanced neural network architectures. The workshop included hands-on sessions with Python, scikit-learn, and TensorFlow, where students built their own ML models from scratch. We also discussed real-world applications, ethical considerations, and career opportunities in AI. The feedback was overwhelmingly positive, with many students expressing newfound interest in the field.',
      date: '2024',
      type: 'event',
      role: 'Organizer',
      participants: '200+',
      skills: ['Teaching', 'ML', 'Event Management'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Cybersecurity Bootcamp Completion',
      description: 'Completed an intensive 2-week cybersecurity bootcamp covering ethical hacking, network security, and penetration testing. This rigorous program pushed my technical limits and expanded my understanding of digital security. We learned to identify vulnerabilities, implement security measures, and conduct ethical penetration testing. The curriculum included hands-on labs with tools like Metasploit, Wireshark, and Burp Suite. We also studied cryptography, secure coding practices, and incident response strategies. The practical experience gained has been invaluable in understanding how to protect systems and data in an increasingly connected world.',
      date: '2024',
      type: 'course',
      issuer: 'EC-Council',
      skills: ['Ethical Hacking', 'Network Security', 'Penetration Testing'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'AI for Social Good Hackathon',
      description: 'Collaborated with a diverse team to create AI solutions addressing social challenges in education and healthcare. Our project focused on developing an AI-powered tutoring system for underprivileged students and a diagnostic assistant for rural healthcare workers. We built machine learning models that could adapt to individual learning styles and provide personalized educational content. The healthcare component included natural language processing for symptom analysis and treatment recommendations. Working with such a talented and passionate team was inspiring, and reaching the finals validated our approach to using technology for positive social impact.',
      date: '2023',
      type: 'hackathon',
      position: 'Finalist',
      technologies: ['AI', 'Social Impact', 'Education'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
      link: '#'
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
