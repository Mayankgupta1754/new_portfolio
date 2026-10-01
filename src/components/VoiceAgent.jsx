import React, { useEffect, useState } from "react";
import { Mic, X } from "lucide-react";

const AGENT_ID = "agent_3701m3w93x7dedpa0f8qbp99f6ga";
const BRANCH_ID = "agtbrch_6301m3w93zncfs08y7hrkcf7d25s";
const SCRIPT_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed";
const OPEN_EVENT = "mayank-open-voice";

const loadWidgetScript = () => {
  if (document.querySelector('script[data-elevenlabs-widget="true"]')) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.type = "text/javascript";
    script.dataset.elevenlabsWidget = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Could not load ElevenLabs voice widget"));
    document.body.appendChild(script);
  });
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => (typeof window !== "undefined" ? window.matchMedia("(max-width: 1023px)").matches : false)
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return isMobile;
};

const VoiceAgent = () => {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const isMobile = useIsMobile();

  useEffect(() => {
    loadWidgetScript()
      .then(() => setReady(true))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    const openVoice = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, openVoice);
    return () => window.removeEventListener(OPEN_EVENT, openVoice);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("voice-agent-open", open);
    return () => document.body.classList.remove("voice-agent-open");
  }, [open]);

  const dockClass = open
    ? isMobile
      ? "bottom-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] left-4 right-auto items-start"
      : "bottom-[7rem] right-6"
    : "bottom-[max(1.25rem,calc(env(safe-area-inset-bottom)+0.75rem))] right-4 lg:bottom-6 lg:right-6";

  return (
    <>
      {open && ready &&
        React.createElement("elevenlabs-convai", {
          key: `${AGENT_ID}-${isMobile ? "mobile" : "desktop"}`,
          "agent-id": AGENT_ID,
          "branch-id": BRANCH_ID,
          variant: isMobile ? "compact" : "expanded",
          dismissible: "true",
          "avatar-orb-color-1": "#1DB954",
          "avatar-orb-color-2": "#22d3ee",
          "action-text": "Talk to Mayank",
          "start-call-text": "Start talking",
          "end-call-text": "End call",
        })}

      <div className={`fixed z-[80] flex flex-col items-end gap-2 ${dockClass}`}>
        {error && open && (
          <p className="max-w-[220px] text-xs text-red-400 bg-black/80 border border-red-500/30 rounded-lg px-3 py-2">
            {error}
          </p>
        )}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`group relative flex items-center justify-center gap-2 rounded-full shadow-lg transition-all duration-200 touch-manipulation ${
            open
              ? "bg-white text-black h-12 pl-3 pr-3"
              : "bg-spotify-green text-black h-12 w-12 lg:w-auto lg:pl-3 lg:pr-4 shadow-spotify-green/30 hover:bg-spotify-green-dark"
          }`}
          aria-pressed={open}
          aria-label={open ? "Close voice agent" : "Open voice agent"}
        >
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              open ? "bg-black text-white" : "bg-black/10"
            }`}
          >
            {open ? <X size={16} /> : <Mic size={16} />}
          </span>
          <span className={`text-sm font-semibold whitespace-nowrap ${open ? "inline" : "hidden lg:inline"}`}>
            {open ? "Close" : "Voice"}
          </span>
          {!open && (
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-white border-2 border-spotify-green animate-pulse" />
          )}
        </button>
      </div>
    </>
  );
};

export const openVoiceAgent = () => {
  window.dispatchEvent(new Event(OPEN_EVENT));
};

export default VoiceAgent;
