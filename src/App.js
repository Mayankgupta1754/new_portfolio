import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import GitHubStats from "./components/GitHubStats";
import DigitalTwin from "./components/DigitalTwin";
import SearchPalette from "./components/SearchPalette";
import { Search } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sectionHistory, setSectionHistory] = useState(["home"]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [twinSeed, setTwinSeed] = useState("");

  useEffect(() => {
    const handlePopState = () => {
      if (sectionHistory.length > 1) {
        const newHistory = [...sectionHistory];
        newHistory.pop();
        const previousSection = newHistory[newHistory.length - 1];
        setSectionHistory(newHistory);
        setActiveSection(previousSection);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [sectionHistory]);

  const handleSetActiveSection = (section) => {
    if (section !== activeSection) {
      setSectionHistory((prev) => [...prev, section]);
      setActiveSection(section);
      window.history.pushState({ section }, "", `#${section}`);
      window.scrollTo(0, 0);
    }
  };

  const askTwin = (question) => {
    setTwinSeed(question || "");
    handleSetActiveSection("twin");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home setActiveSection={handleSetActiveSection} />;
      case "twin":
        return (
          <DigitalTwin
            setActiveSection={handleSetActiveSection}
            seedQuestion={twinSeed}
            onSeedConsumed={() => setTwinSeed("")}
          />
        );
      case "about":
        return <About setActiveSection={handleSetActiveSection} />;
      case "projects":
        return <Projects setActiveSection={handleSetActiveSection} />;
      case "blog":
        return <Blog setActiveSection={handleSetActiveSection} />;
      case "github":
        return <GitHubStats setActiveSection={handleSetActiveSection} />;
      case "achievements":
        return <Achievements setActiveSection={handleSetActiveSection} />;
      case "skills":
        return <Skills setActiveSection={handleSetActiveSection} />;
      case "experience":
        return <Experience setActiveSection={handleSetActiveSection} />;
      case "education":
        return <Education setActiveSection={handleSetActiveSection} />;
      case "contact":
        return <Contact setActiveSection={handleSetActiveSection} />;
      default:
        return <Home setActiveSection={handleSetActiveSection} />;
    }
  };

  return (
    <div className="App bg-spotify-dark min-h-screen">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={handleSetActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <main className="lg:ml-72 pt-14 lg:pt-0 transition-all duration-300">
        {renderSection()}
      </main>
      <SearchPalette
        open={searchOpen}
        setOpen={setSearchOpen}
        onNavigate={handleSetActiveSection}
        onAskTwin={askTwin}
      />
      <button
        type="button"
        onClick={() => setSearchOpen(true)}
        className="lg:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-spotify-green text-black shadow-lg shadow-spotify-green/30 flex items-center justify-center"
        aria-label="Search or ask the digital twin"
      >
        <Search size={22} />
      </button>
    </div>
  );
}

export default App;
