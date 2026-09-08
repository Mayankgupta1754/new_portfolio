import React, { useEffect, useMemo, useState } from "react";
import { Bot, FolderOpen, Search } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { projectsData } from "../data/mock";

const PAGES = [
  { id: "home", label: "Home" },
  { id: "twin", label: "Digital Twin" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "My Playlists" },
  { id: "github", label: "GitHub Stats" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const looksLikeQuestion = (value) => {
  const q = value.trim().toLowerCase();
  if (!q) return false;
  if (q.includes("?")) return true;
  return /^(what|who|where|when|why|how|tell|walk|describe|show|list|do you|are you|can you)/.test(q);
};

const SearchPalette = ({ open, setOpen, onNavigate, onAskTwin }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const filteredPages = useMemo(() => {
    const q = query.toLowerCase();
    return PAGES.filter((page) => page.label.toLowerCase().includes(q));
  }, [query]);

  const filteredProjects = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return projectsData.slice(0, 5);
    return projectsData
      .filter((project) =>
        `${project.title} ${project.description} ${project.technologies.join(" ")}`
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 6);
  }, [query]);

  if (!open) return null;

  const ask = () => {
    const text = query.trim();
    if (!text) {
      onNavigate("twin");
    } else {
      onAskTwin(text);
    }
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close search"
        onClick={() => setOpen(false)}
      />
      <div className="relative mx-auto mt-[12vh] w-[min(640px,calc(100%-2rem))] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#121212]">
        <Command className="bg-[#121212] text-white" shouldFilter={false}>
          <CommandInput
            value={query}
            onValueChange={setQuery}
            placeholder="Search the site or ask Mayank's twin…"
            className="text-white placeholder:text-gray-500"
          />
          <CommandList className="max-h-[420px]">
            <CommandEmpty className="text-gray-400">No matching pages. Ask the twin instead.</CommandEmpty>

            <CommandGroup heading="Digital Twin" className="text-gray-400">
              <CommandItem
                onSelect={ask}
                className="text-white data-[selected=true]:bg-spotify-green data-[selected=true]:text-black cursor-pointer"
              >
                <Bot className="text-spotify-green" />
                {query.trim() && looksLikeQuestion(query)
                  ? `Ask twin: “${query.trim()}”`
                  : query.trim()
                    ? `Ask twin about “${query.trim()}”`
                    : "Open digital twin chat"}
              </CommandItem>
            </CommandGroup>

            <CommandSeparator className="bg-white/10" />

            <CommandGroup heading="Jump to" className="text-gray-400">
              {filteredPages.map((page) => (
                <CommandItem
                  key={page.id}
                  onSelect={() => {
                    onNavigate(page.id);
                    setOpen(false);
                  }}
                  className="text-white data-[selected=true]:bg-[#282828] cursor-pointer"
                >
                  <Search />
                  {page.label}
                </CommandItem>
              ))}
            </CommandGroup>

            {filteredProjects.length > 0 && (
              <>
                <CommandSeparator className="bg-white/10" />
                <CommandGroup heading="Projects" className="text-gray-400">
                  {filteredProjects.map((project) => (
                    <CommandItem
                      key={project.id}
                      onSelect={() => {
                        onNavigate("projects");
                        setOpen(false);
                      }}
                      className="text-white data-[selected=true]:bg-[#282828] cursor-pointer"
                    >
                      <FolderOpen />
                      {project.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
        <div className="px-3 py-2 text-[10px] uppercase tracking-wider text-gray-500 border-t border-white/10 flex justify-between">
          <span>Ctrl / ⌘ + K</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
};

export default SearchPalette;
