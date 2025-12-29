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
