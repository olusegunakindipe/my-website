"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function SiteAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi. Ask about Segun's work, services, projects, or how this site was built with AI agents.",
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open, loading]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const message = input.trim();
    if (!message || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = (await response.json()) as {
        reply?: string;
        error?: string;
      };

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            data.error ||
            "Something went wrong. Please try again.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Network error. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-[80] flex w-[calc(100vw-2rem)] max-w-[22rem] flex-col items-end gap-3 sm:right-6 md:bottom-[5.5rem]">
      {open ? (
        <div className="flex max-h-[min(65vh,28rem)] w-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#12131a]/95 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-sm font-bold text-white">Ask about me</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-1 text-white/60 hover:text-white"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div
            ref={listRef}
            className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-3"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-4 bg-blue-600 text-white sm:ml-6"
                    : "mr-4 bg-white/5 text-white/80 sm:mr-6"
                }`}
              >
                {message.content}
              </div>
            ))}
            {loading ? (
              <p className="text-xs text-white/40">Thinking…</p>
            ) : null}
          </div>

          <form
            onSubmit={onSubmit}
            className="flex gap-2 border-t border-white/10 p-3"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={500}
              placeholder="Ask a short question…"
              className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-white/35 outline-none focus:border-blue-500/50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="shrink-0 rounded-xl bg-blue-600 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat" : "Ask AI"}
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_10px_40px_rgba(37,99,235,0.45)] transition hover:bg-blue-500"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
