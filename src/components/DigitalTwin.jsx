import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Bot, Sparkles } from "lucide-react";
import TwinChat from "./TwinChat";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { profileData } from "../data/mock";

const SUGGESTIONS = [
  "What data analyst roles are you targeting?",
  "Walk me through your Power BI projects",
  "Which internships have you completed?",
  "What tools do you use day to day?",
];

const DigitalTwin = ({ setActiveSection, seedQuestion, onSeedConsumed }) => {
  const [prompt, setPrompt] = React.useState("");
  const [seedKey, setSeedKey] = React.useState(0);

  const applyPrompt = (text) => {
    setPrompt(text);
    setSeedKey((n) => n + 1);
  };

  React.useEffect(() => {
    if (seedQuestion) applyPrompt(seedQuestion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seedQuestion]);

  return (
    <div className="relative min-h-screen p-6 lg:p-8 bg-gradient-to-b from-spotify-dark via-[#0f0f0f] to-spotify-dark overflow-hidden">
      <div className="mesh-gradient">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
        <div className="mesh-blob mesh-blob-3"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <Button
          onClick={() => setActiveSection("home")}
          variant="ghost"
          className="mb-6 text-gray-400 hover:text-white"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back
        </Button>

        <div className="flex items-start gap-4 mb-8">
          <div className="relative w-16 h-16 shrink-0">
            <div className="absolute inset-0 rounded-full bg-spotify-green/30 blur-md" />
            <img
              src={profileData.profileImage}
              alt={profileData.name}
              className="relative w-16 h-16 rounded-full object-cover border-2 border-spotify-green"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-spotify-green text-xs font-bold uppercase tracking-wider mb-1">
              <Bot size={14} />
              Digital Twin
              <span className="eq-container">
                <span className="eq-bar"></span>
                <span className="eq-bar"></span>
                <span className="eq-bar"></span>
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Talk to Mayank
            </h1>
            <p className="text-gray-400 text-sm lg:text-base max-w-xl">
              An AI twin trained on my career, projects, and internships.
              Ask like a recruiter — I will stay in my lane and not invent details.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {SUGGESTIONS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => applyPrompt(item)}
              className="text-xs lg:text-sm px-3 py-2 rounded-full bg-[#181818] text-gray-300 border border-white/5 hover:border-spotify-green/50 hover:text-white transition-colors"
            >
              <Sparkles size={12} className="inline mr-1.5 text-spotify-green" />
              {item}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-spotify-card border-white/5 p-4 lg:p-6 min-h-[520px]">
            <TwinChat
              seedQuestion={prompt}
              seedKey={seedKey}
              onSeedConsumed={() => {
                if (onSeedConsumed) onSeedConsumed();
              }}
            />
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalTwin;
