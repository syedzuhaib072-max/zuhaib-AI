"use client";

import { useState } from "react";

const writerModes = [
  {
    name: "Blog Writer",
    icon: "📝",
    instruction:
      "Write a well-structured, engaging blog article with a title, introduction, headings, useful details, and conclusion.",
  },
  {
    name: "Email Writer",
    icon: "📧",
    instruction:
      "Write a professional and clear email. Include a suitable subject line and polished email body.",
  },
  {
    name: "Social Media",
    icon: "📱",
    instruction:
      "Create engaging social-media content with a strong hook, concise text, and relevant hashtags.",
  },
  {
    name: "YouTube Script",
    icon: "🎬",
    instruction:
      "Write an engaging YouTube script with a hook, introduction, main sections, and a strong ending.",
  },
  {
    name: "Product Description",
    icon: "🛍️",
    instruction:
      "Write an attractive product description highlighting benefits, features, and a persuasive call to action.",
  },
  {
    name: "Rewrite & Improve",
    icon: "✨",
    instruction:
      "Rewrite the provided text to make it clearer, more professional, engaging, and grammatically correct while keeping the original meaning.",
  },
];

export default function WriterPage() {
  const [selectedMode, setSelectedMode] = useState(writerModes[0]);
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateContent() {
    if (!prompt.trim() || loading) return;

    setLoading(true);
    setAnswer("");

    const finalPrompt = `${selectedMode.instruction}

User request:
${prompt}

Create high-quality content that is useful, clear, and ready to use.`;

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: finalPrompt,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.text || "Generation failed");
      }

      setAnswer(data.text || "No response received.");
    } catch (error) {
      console.error(error);
      setAnswer("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function copyAnswer() {
    if (!answer) return;

    try {
      await navigator.clipboard.writeText(answer);
    } catch {
      console.error("Copy failed");
    }
  }

  function clearWriter() {
    setPrompt("");
    setAnswer("");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-10">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 text-5xl">✍️</div>

          <h1 className="text-4xl font-bold">
            Zuhaib-AI Writer Pro
          </h1>

          <p className="mt-3 text-slate-400">
            Create professional content with AI in seconds.
          </p>
        </div>

        {/* Writer modes */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold">
            Choose a writing tool
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {writerModes.map((mode) => {
              const active = selectedMode.name === mode.name;

              return (
                <button
                  key={mode.name}
                  onClick={() => {
                    setSelectedMode(mode);
                    setAnswer("");
                  }}
                  className={`rounded-2xl border p-5 text-left transition ${
                    active
                      ? "border-cyan-400 bg-cyan-500/10"
                      : "border-slate-800 bg-slate-900 hover:border-slate-600"
                  }`}
                >
                  <div className="text-3xl">
                    {mode.icon}
                  </div>

                  <h3 className="mt-3 font-bold">
                    {mode.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {active ? "Selected" : "Click to select"}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Input */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">
                {selectedMode.icon} {selectedMode.name}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Tell Zuhaib-AI what you want to create.
              </p>
            </div>

            <button
              onClick={clearWriter}
              className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:bg-slate-800"
            >
              Clear
            </button>
          </div>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={
              selectedMode.name === "Blog Writer"
                ? "Example: Write a blog about how AI is changing education..."
                : selectedMode.name === "Email Writer"
                ? "Example: Write an email asking my teacher for two days leave..."
                : selectedMode.name === "Social Media"
                ? "Example: Create an Instagram post for my new AI startup..."
                : selectedMode.name === "YouTube Script"
                ? "Example: Create a YouTube video about the future of AI..."
                : selectedMode.name === "Product Description"
                ? "Example: Write a product description for wireless headphones..."
                : "Paste the text you want Zuhaib-AI to improve..."
            }
            className="min-h-[220px] w-full resize-y rounded-xl border border-slate-700 bg-slate-950 p-5 text-white outline-none focus:border-cyan-500"
          />

          <button
            onClick={generateContent}
            disabled={loading || !prompt.trim()}
            className="mt-5 w-full rounded-xl bg-cyan-500 px-6 py-4 font-bold text-black hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "🤔 Generating..." : "✨ Generate Content"}
          </button>
        </section>

        {/* Result */}
        {answer && (
          <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold">
                ✨ Generated Content
              </h2>

              <button
                onClick={copyAnswer}
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
              >
                📋 Copy
              </button>
            </div>

            <div className="whitespace-pre-wrap leading-7 text-slate-200">
              {answer}
            </div>
          </section>
        )}

        {/* Pro badge */}
        <div className="mt-8 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            ⭐ Zuhaib-AI Pro Writer
          </span>
        </div>
      </div>
    </main>
  );
}