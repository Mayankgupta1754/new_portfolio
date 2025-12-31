import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import KnowledgeSharing from "./components/KnowledgeSharing";
import Achievements from "./components/Achievements";
import Personality from "./components/Personality";

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About setActiveSection={setActiveSection} />;
      case 'projects':
        return <Projects setActiveSection={setActiveSection} />;
      case 'knowledge-sharing':
        return <KnowledgeSharing setActiveSection={setActiveSection} />;
      case 'personality':
        return <Personality setActiveSection={setActiveSection} />;
      case 'achievements':
        return <Achievements setActiveSection={setActiveSection} />;
      case 'skills':
        return <Skills setActiveSection={setActiveSection} />;
      case 'experience':
        return <Experience setActiveSection={setActiveSection} />;
      case 'education':
        return <Education setActiveSection={setActiveSection} />;
      case 'contact':
        return <Contact setActiveSection={setActiveSection} />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="App bg-spotify-dark min-h-screen">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="lg:ml-72 transition-all duration-300">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
