"use client";

import { useState } from "react";

export default function ChatPage() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!prompt.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        setAnswer(`❌ ${data.text || "Server Error"}`);
      } else {
        setAnswer(data.text);
      }
    } catch (err) {
      console.error(err);
      setAnswer("❌ Network Error");
    } finally {
      setLoading(false);
    }
  }

  async function copyAnswer() {
    if (!answer) return;
    await navigator.clipboard.writeText(answer);
    alert("Copied!");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-10">
          💬 Zuhaib AI Chat
        </h1>

        <p className="text-center text-slate-400 mb-8">
          Ask anything. Powered by Gemini AI.
        </p>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything..."
          className="w-full h-40 bg-slate-900 rounded-xl p-5 border border-slate-700 outline-none"
        />

        <div className="flex gap-4 mt-5">

          <button
            onClick={askAI}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-black font-bold px-8 py-3 rounded-xl"
          >
            {loading ? "Thinking..." : "🚀 Ask AI"}
          </button>

          <button
            onClick={() => {
              setPrompt("");
              setAnswer("");
            }}
            className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-xl"
          >
            Clear
          </button>

          {answer && (
            <button
              onClick={copyAnswer}
              className="bg-green-600 hover:bg-green-500 px-8 py-3 rounded-xl"
            >
              Copy
            </button>
          )}

        </div>

        {answer && (
          <div className="mt-10 bg-slate-900 border border-slate-700 rounded-2xl p-6 whitespace-pre-wrap">
            {answer}
          </div>
        )}

      </div>
    </main>
  );
}