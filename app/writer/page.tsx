"use client";

import { useState } from "react";

export default function WriterPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateContent() {
    if (!prompt.trim()) {
      setResult("Please enter something to write.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResult(data.text);
    } catch (error) {
      console.error(error);
      setResult("Error: Could not generate content.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          What do you want to write?
        </h1>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write a short blog post about the best AI tools for students"
          className="w-full h-48 p-5 rounded-2xl bg-slate-900 border border-slate-700 text-white"
        />

        <button
          onClick={generateContent}
          disabled={loading}
          className="mt-6 px-8 py-4 rounded-xl bg-blue-500 text-white font-bold"
        >
          {loading ? "Generating..." : "Generate Content"}
        </button>

        {result && (
          <div className="mt-8 p-6 rounded-2xl bg-slate-900 border border-slate-700 whitespace-pre-wrap">
            <h2 className="text-2xl font-bold mb-4">
              AI Generated Content
            </h2>

            {result}
          </div>
        )}
      </div>
    </main>
  );
}