"use client";

import { useState } from "react";

const prompts = [
  {
    title: "100 ChatGPT Prompts for Students",
    category: "Education",
    description:
      "A powerful collection of prompts for studying, research, summaries, exams, and learning.",
    price: "₹49",
  },
  {
    title: "50 AI Prompts for YouTube Creators",
    category: "Content Creation",
    description:
      "Generate video ideas, titles, scripts, descriptions, and thumbnail concepts.",
    price: "₹49",
  },
  {
    title: "100 Business & Marketing Prompts",
    category: "Business",
    description:
      "Prompts for marketing, social media, business ideas, customer research, and growth.",
    price: "₹99",
  },
];

export default function PromptsPage() {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold mb-3">
            ZUHAIB-AI MARKETPLACE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Premium AI Prompt Packs
          </h1>

          <p className="text-slate-400 text-lg">
            Save time. Work smarter. Get powerful AI results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {prompts.map((prompt) => (
            <div
              key={prompt.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
            >
              <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400 mb-4">
                {prompt.category}
              </span>

              <h2 className="text-2xl font-bold mb-4">
                {prompt.title}
              </h2>

              <p className="text-slate-400 mb-6">
                {prompt.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">
                  {prompt.price}
                </span>

                <button
                  onClick={() => setSelectedPrompt(prompt.title)}
                  className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
                >
                  Get Access
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPrompt && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 px-6">
            <div className="max-w-md rounded-2xl bg-slate-900 p-8 text-center border border-slate-700">
              <h2 className="text-2xl font-bold mb-4">
                {selectedPrompt}
              </h2>

             <p className="text-slate-400 mb-6">
  Get instant access to this premium prompt pack and start creating better results with AI.
</p> 

              <button
                onClick={() => setSelectedPrompt(null)}
                className="rounded-xl bg-slate-700 px-6 py-3"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}