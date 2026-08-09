"use client";

import { useEffect, useState } from "react";
import { isProUser } from "@/lib/proAccess";

const businessTools = [
  {
    id: "plan",
    icon: "📊",
    name: "Business Plan",
    description: "Create a complete business plan.",
    instruction:
      "Create a practical business plan including the business idea, target customers, value proposition, products or services, marketing, operations, revenue model, costs, and growth strategy.",
  },
  {
    id: "marketing",
    icon: "📢",
    name: "Marketing Strategy",
    description: "Build a marketing strategy.",
    instruction:
      "Create a detailed marketing strategy including target audience, positioning, marketing channels, content strategy, customer acquisition, and measurable goals.",
  },
  {
    id: "ads",
    icon: "✍️",
    name: "Ad Copy Generator",
    description: "Create persuasive advertisements.",
    instruction:
      "Write persuasive advertising copy with a strong headline, benefits, call to action, and suitable variations for online advertising.",
  },
  {
    id: "customers",
    icon: "👥",
    name: "Customer Strategy",
    description: "Understand and attract customers.",
    instruction:
      "Analyse the likely target customers and create a practical strategy for attracting, converting, and retaining them.",
  },
  {
    id: "pricing",
    icon: "💰",
    name: "Pricing Ideas",
    description: "Create a pricing strategy.",
    instruction:
      "Create a practical pricing strategy with suitable pricing options, value positioning, customer segments, and ways to improve revenue.",
  },
  {
    id: "startup",
    icon: "🚀",
    name: "Startup Ideas",
    description: "Generate realistic startup ideas.",
    instruction:
      "Generate realistic startup ideas. For each idea explain the problem, solution, target customer, revenue model, required resources, and how to start.",
  },
];

export default function BusinessPage() {
  const [isPro, setIsPro] = useState(false);
  const [selectedTool, setSelectedTool] = useState(businessTools[0]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsPro(isProUser());
  }, []);

  async function runBusinessAI() {
    if (!input.trim() || loading) return;

    setLoading(true);
    setResult("");

    const finalPrompt = `${selectedTool.instruction}

Business information/request:
${input}

Give a practical, clear, professional answer that a small business owner can actually use.`;

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
        throw new Error(data?.text || "Business AI request failed");
      }

      setResult(data.text || "No response received.");
    } catch (error) {
      console.error("Business AI error:", error);
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

  function clearBusinessAI() {
    setInput("");
    setResult("");
  }

  /* PRO LOCK */
  if (!isPro) {
    return (
      <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
        <div className="mx-auto max-w-xl text-center">
          <div className="text-6xl">🔒</div>

          <h1 className="mt-5 text-4xl font-bold">
            Business AI Pro
          </h1>

          <p className="mt-4 text-slate-400">
            This feature is available with Zuhaib-AI Pro.
          </p>

          <p className="mt-5 text-3xl font-bold">
            ₹399
            <span className="text-base font-normal text-slate-400">
              /month
            </span>
          </p>

          <a
            href="/proaccesss"
            className="mt-7 inline-block rounded-xl bg-cyan-400 px-7 py-3 font-bold text-black hover:bg-cyan-300"
          >
            💎 Upgrade to Pro
          </a>

          <p className="mt-4 text-xs text-slate-500">
            Payment integration coming soon.
          </p>
        </div>
      </main>
    );
  }

  /* PRO BUSINESS AI */
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-10">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 text-5xl">💼</div>

          <h1 className="text-4xl font-bold">
            Zuhaib-AI Business Pro
          </h1>

          <p className="mt-3 text-slate-400">
            AI-powered tools to help you plan, market and grow your business.
          </p>

          <div className="mt-4">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              💎 Pro Active
            </span>
          </div>
        </div>

        {/* Business tools */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessTools.map((tool) => {
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

        {/* Workspace */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {selectedTool.icon} {selectedTool.name}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Tell Zuhaib-AI about your business or idea.
              </p>
            </div>

            <button
              onClick={clearBusinessAI}
              className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:bg-slate-800"
            >
              Clear
            </button>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              selectedTool.id === "plan"
                ? "Example: I want to start an online AI tools business for students..."
                : selectedTool.id === "marketing"
                ? "Example: I have a small clothing business and want more online customers..."
                : selectedTool.id === "ads"
                ? "Example: Create an advertisement for my new AI writing tool..."
                : selectedTool.id === "customers"
                ? "Example: My product is an affordable AI tool for college students..."
                : selectedTool.id === "pricing"
                ? "Example: I sell an AI writing service to small businesses..."
                : "Example: Give me AI startup ideas that can be started with a small budget..."
            }
            className="min-h-[230px] w-full resize-y rounded-xl border border-slate-700 bg-slate-950 p-5 text-white outline-none focus:border-cyan-500"
          />

          <button
            onClick={runBusinessAI}
            disabled={loading || !input.trim()}
            className="mt-5 w-full rounded-xl bg-cyan-500 px-6 py-4 font-bold text-black hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "🤔 Analysing..." : "🚀 Run Business AI"}
          </button>
        </section>

        {/* Result */}
        {result && (
          <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                ✨ Business AI Result
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
            ⭐ Zuhaib-AI Business Pro
          </span>
        </div>
      </div>
    </main>
  );
}