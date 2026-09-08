import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

function formatTwinText(text) {
  const escaped = String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br />");
}

const TwinChat = ({ seedQuestion, seedKey, onSeedConsumed }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey — I'm Mayank's digital twin. Ask about my analytics work, internships, Power BI dashboards, or whether I'd be a fit for a data analyst role.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef(null);
  const lastSeedKey = useRef("");

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (raw) => {
    const text = (raw ?? input).trim();
    if (!text || loading) return;

    setError("");
    setInput("");
    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setLoading(true);

    try {
      const history = nextMessages
        .slice(1, -1)
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch("/api/twin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Request failed");
      }
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setError(err.message || "Could not reach the twin.");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I couldn't reach the API just now. Locally, run `npm start` with OPENAI_API_KEY in `.env.local`. On Vercel, add the same key in Project Settings → Environment Variables.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!seedQuestion) return;
    const key = String(seedKey ?? seedQuestion);
    if (lastSeedKey.current === key) return;
    lastSeedKey.current = key;
    sendMessage(seedQuestion);
    if (onSeedConsumed) onSeedConsumed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seedQuestion, seedKey]);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <div className="flex flex-col h-full min-h-[420px]">
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {messages.map((msg, index) => (
          <motion.div
            key={`${msg.role}-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-spotify-green text-black font-bold text-xs flex items-center justify-center mr-2 mt-1 shrink-0">
                MG
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-spotify-green text-black rounded-br-sm"
                  : "bg-[#282828] text-gray-100 rounded-bl-sm"
              }`}
              dangerouslySetInnerHTML={{ __html: formatTwinText(msg.content) }}
            />
          </motion.div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-gray-400 text-sm pl-10">
            <Sparkles size={14} className="text-spotify-green animate-pulse" />
            Thinking through the profile…
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {error && (
        <p className="text-red-400 text-xs mt-3">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about skills, internships, dashboards…"
          className="flex-1 h-12 rounded-full bg-[#282828] border border-white/10 px-5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-spotify-green"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="w-12 h-12 rounded-full bg-spotify-green text-black flex items-center justify-center disabled:opacity-40 hover:bg-spotify-green-dark transition-colors"
          aria-label="Send"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default TwinChat;
