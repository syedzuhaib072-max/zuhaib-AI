"use client";

import { useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function ChatPage() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function askAI(customPrompt?: string) {
    const question = (customPrompt ?? prompt).trim();

    if (!question || loading) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
    ]);

    setPrompt("");
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: question,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.text || "Request failed");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.text || "No response received.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "❌ Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function newChat() {
    setMessages([]);
    setPrompt("");
  }

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      console.error("Copy failed");
    }
  }

  function regenerate() {
    const lastUserMessage = [...messages]
      .reverse()
      .find((message) => message.role === "user");

    if (lastUserMessage) {
      askAI(lastUserMessage.text);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              🤖 Zuhaib-AI Chat
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Your AI assistant
            </p>
          </div>

          <button
            onClick={newChat}
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-800"
          >
            🆕 New Chat
          </button>
        </header>

        {/* Chat area */}
        <section className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          {messages.length === 0 ? (
            <div className="flex min-h-[450px] items-center justify-center text-center">
              <div>
                <div className="mb-4 text-6xl">🤖</div>

                <h2 className="text-2xl font-bold">
                  What can I help you with?
                </h2>

                <p className="mt-2 text-slate-400">
                  Ask me anything.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {[
                    "Explain AI in simple words",
                    "Give me business ideas",
                    "Write a professional email",
                  ].map((example) => (
                    <button
                      key={example}
                      onClick={() => askAI(example)}
                      className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={
                    message.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  <div
                    className={
                      message.role === "user"
                        ? "max-w-[85%] rounded-2xl bg-cyan-500 px-5 py-3 text-black"
                        : "max-w-[85%] rounded-2xl bg-slate-800 px-5 py-4 text-white"
                    }
                  >
                    <div className="mb-2 text-xs font-bold opacity-70">
                      {message.role === "user" ? "YOU" : "ZUHAIB-AI"}
                    </div>

                    <div className="whitespace-pre-wrap leading-7">
                      {message.text}
                    </div>

                    {message.role === "ai" && (
                      <button
                        onClick={() => copyText(message.text)}
                        className="mt-3 rounded-lg border border-slate-600 px-3 py-1 text-xs hover:bg-slate-700"
                      >
                        📋 Copy
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-slate-800 px-5 py-4 text-slate-300">
                    🤔 Thinking...
                  </div>
                </div>
              )}

              {!loading && messages.some((m) => m.role === "ai") && (
                <button
                  onClick={regenerate}
                  className="rounded-xl border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
                >
                  🔄 Regenerate
                </button>
              )}
            </div>
          )}
        </section>

        {/* Input */}
        <div className="mt-5">
          <div className="flex gap-3">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  askAI();
                }
              }}
              placeholder="Ask Zuhaib-AI anything..."
              className="min-h-[60px] flex-1 resize-none rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-cyan-500"
            />

            <button
              onClick={() => askAI()}
              disabled={loading || !prompt.trim()}
              className="rounded-2xl bg-cyan-500 px-6 font-bold text-black hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "..." : "Send 🚀"}
            </button>
          </div>

          <p className="mt-2 text-center text-xs text-slate-500">
            Press Enter to send • Shift + Enter for a new line
          </p>
        </div>
      </div>
    </main>
  );
}