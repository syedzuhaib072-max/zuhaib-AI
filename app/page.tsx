"use client";

import { useState } from "react";

export default function WriterPage() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateContent = () => {
    if (!idea.trim()) {
      setResult("⚠️ Please write an idea first.");
      return;
    }

    setLoading(true);
    setResult("");
    setCopied(false);

    setTimeout(() => {
      const generatedText = `AI GENERATED CONTENT

Title: ${idea}

Introduction

Artificial intelligence is changing the way people learn, work, and create content. Today, AI tools are becoming increasingly useful for students, creators, businesses, and professionals.

Main Content

${idea} is an important topic in today's digital world. With the help of modern AI tools, users can save time, improve productivity, and create high-quality content more efficiently.

AI can help users generate ideas, write content, analyze information, solve problems, and discover new opportunities. When used correctly, artificial intelligence becomes a powerful assistant for creativity and productivity.

Benefits

• Saves time
• Improves productivity
• Helps generate creative ideas
• Makes difficult tasks easier
• Supports learning and innovation

Conclusion

The future of artificial intelligence is full of possibilities. By using AI tools responsibly and creatively, people can work smarter, learn faster, and achieve better results.

Created with Zuhaib-AI Writer 🚀`;

      setResult(generatedText);
      setLoading(false);
    }, 1200);
  };

  const copyContent = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const clearAll = () => {
    setIdea("");
    setResult("");
    setCopied(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-bold tracking-widest text-sm">
            ZUHAIB-AI
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-4">
            AI Content Writer
          </h1>

          <p className="text-slate-400 mt-5 text-lg">
            Create powerful blog posts, social media captions, emails, and more.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">

          {/* Label */}
          <div className="flex justify-between items-center mb-4">
            <label className="text-xl font-bold">
              ✍️ What do you want to write?
            </label>

            <span className="text-sm text-slate-500">
              {idea.length}/2000
            </span>
          </div>

          {/* Textarea */}
          <textarea
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
            maxLength={2000}
            placeholder="Example: Write a blog post about AI tools for students..."
            className="w-full h-52 resize-none rounded-2xl bg-slate-800 border border-slate-700 p-5 text-white outline-none focus:border-cyan-400 transition"
          />

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">

            <button
              type="button"
              onClick={generateContent}
              disabled={loading}
              className="bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-black font-bold px-7 py-3 rounded-xl transition"
            >
              {loading ? "Generating..." : "✨ Generate Content"}
            </button>

            <button
              type="button"
              onClick={clearAll}
              className="bg-slate-700 hover:bg-slate-600 px-7 py-3 rounded-xl font-semibold transition"
            >
              🗑️ Clear
            </button>

          </div>

          {/* Result */}
          {result && (
            <div className="mt-10">

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  📝 Generated Content
                </h2>

                <button
                  type="button"
                  onClick={copyContent}
                  className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm"
                >
                  {copied ? "✅ Copied!" : "📋 Copy"}
                </button>
              </div>

              <div className="whitespace-pre-line bg-slate-800 border border-cyan-500/30 rounded-2xl p-6 text-slate-200 leading-8">
                {result}
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <p className="text-center text-slate-600 mt-10">
          Built with ❤️ by Zuhaib-AI
        </p>

      </div>
    </main>
  );
}