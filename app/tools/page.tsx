"use client";

import { useState } from "react";

const tools = [
  {
    id: "prompt",
    icon: "💡",
    name: "Prompt Generator",
    description: "Create powerful AI prompts.",
    instruction:
      "Create a detailed, professional AI prompt based on the user's request. Make it specific, useful, and ready to copy.",
  },
  {
    id: "summary",
    icon: "📄",
    name: "Text Summarizer",
    description: "Turn long text into clear summaries.",
    instruction:
      "Summarize the provided text clearly. Keep the most important information and remove unnecessary details.",
  },
  {
    id: "email",
    icon: "📧",
    name: "Email Generator",
    description: "Write professional emails quickly.",
    instruction:
      "Write a professional email based on the user's request. Include a suitable subject and polished email body.",
  },
  {
    id: "social",
    icon: "📱",
    name: "Social Media Generator",
    description: "Create engaging social posts.",
    instruction:
      "Create an engaging social media post based on the user's request. Include a strong hook and suitable hashtags.",
  },
  {
    id: "study",
    icon: "📚",
    name: "Study Assistant",
    description: "Create notes and explanations.",
    instruction:
      "Act as a helpful study assistant. Explain the topic simply and provide clear, exam-ready notes.",
  },
  {
    id: "business",
    icon: "💼",
    name: "Business Idea Generator",
    description: "Generate practical business ideas.",
    instruction:
      "Generate realistic business ideas based on the user's request. Include the target customer, how it makes money, and how to start.",
  },
];

export default function ToolsPage() {
  const [selectedTool, setSelectedTool] = useState(tools[0]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function runTool() {
    if (!input.trim() || loading) return;

    setLoading(true);
    setResult("");

    const finalPrompt = `${selectedTool.instruction}

User request:
${input}

Give a high-quality, practical answer.`;

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: finalPrompt,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.text || "AI request failed");
      }

      setResult(data.text || "No response received.");
    } catch (error) {
      console.error("Tool error:", error);
      setResult("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function copyResult() {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  }

  function clearTool() {
    setInput("");
    setResult("");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 text-5xl">🛠️</div>

          <h1 className="text-4xl font-bold">
            Zuhaib-AI Tools Pro
          </h1>

          <p className="mt-3 text-slate-400">
            Powerful AI tools for everyday work, study and business.
          </p>
        </div>

        {/* Tools */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const active = selectedTool.id === tool.id;

            return (
              <button
                key={tool.id}
                onClick={() => {
                  setSelectedTool(tool);
                  setResult("");
                }}
                className={`rounded-2xl border p-5 text-left transition ${
                  active
                    ? "border-cyan-400 bg-cyan-500/10"
                    : "border-slate-800 bg-slate-900 hover:border-slate-600"
                }`}
              >
                <div className="text-3xl">{tool.icon}</div>

                <h2 className="mt-3 font-bold">
                  {tool.name}
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  {tool.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Tool workspace */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {selectedTool.icon} {selectedTool.name}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Enter what you want Zuhaib-AI to create.
              </p>
            </div>

            <button
              onClick={clearTool}
              className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:bg-slate-800"
            >
              Clear
            </button>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              selectedTool.id === "prompt"
                ? "Create a prompt for generating professional product advertisements..."
                : selectedTool.id === "summary"
                ? "Paste the text you want to summarize..."
                : selectedTool.id === "email"
                ? "Write an email asking a customer for feedback..."
                : selectedTool.id === "social"
                ? "Create an Instagram post for my AI startup..."
                : selectedTool.id === "study"
                ? "Explain inflation in simple words for a student..."
                : "Give me 10 AI business ideas for beginners..."
            }
            className="min-h-[220px] w-full resize-y rounded-xl border border-slate-700 bg-slate-950 p-5 text-white outline-none focus:border-cyan-500"
          />

          <button
            onClick={runTool}
            disabled={loading || !input.trim()}
            className="mt-5 w-full rounded-xl bg-cyan-500 px-6 py-4 font-bold text-black hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "🤔 Working..." : "🚀 Run AI Tool"}
          </button>
        </section>

        {/* Result */}
        {result && (
          <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                ✨ Result
              </h2>

              <button
                onClick={copyResult}
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
              >
                📋 Copy
              </button>
            </div>

            <div className="whitespace-pre-wrap leading-7 text-slate-200">
              {result}
            </div>
          </section>
        )}

        <div className="mt-8 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            ⭐ Zuhaib-AI Pro Tools
          </span>
        </div>
      </div>
    </main>
  );
}