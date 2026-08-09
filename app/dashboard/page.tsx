"use client";

import { useEffect, useState } from "react";
import { isProUser } from "@/lib/proAccess";

export default function DashboardPage() {
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    setIsPro(isProUser());
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-cyan-400">
            ZUHAIB-AI
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            👋 Welcome to your Dashboard
          </h1>

          <p className="mt-3 text-slate-400">
            Manage your AI tools and Pro access from one place.
          </p>
        </div>

        {/* Account card */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm text-slate-400">
                Current plan
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {isPro ? "💎 Pro" : "🆓 Free"}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {isPro
                  ? "You have Pro access on this browser."
                  : "You're currently using the Free plan."}
              </p>
            </div>

            {!isPro && (
              <a
                href="/proaccesss"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-bold text-black hover:bg-cyan-300"
              >
                Upgrade — ₹399/month
              </a>
            )}
          </div>
        </section>

        {/* AI products */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">
            🚀 Your AI Tools
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <a
              href="/chat"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-400"
            >
              <div className="text-3xl">🤖</div>
              <h3 className="mt-4 font-bold">AI Chat</h3>
              <p className="mt-2 text-sm text-slate-400">
                Chat with Zuhaib-AI.
              </p>
            </a>

            <a
              href="/writer"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-400"
            >
              <div className="text-3xl">✍️</div>
              <h3 className="mt-4 font-bold">AI Writer</h3>
              <p className="mt-2 text-sm text-slate-400">
                Create content with AI.
              </p>
            </a>

            <a
              href="/tools"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-400"
            >
              <div className="text-3xl">🛠️</div>
              <h3 className="mt-4 font-bold">AI Tools</h3>
              <p className="mt-2 text-sm text-slate-400">
                Use your AI toolkit.
              </p>
            </a>

            <a
              href="/business"
              className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6 hover:border-cyan-400"
            >
              <div className="text-3xl">💼</div>
              <h3 className="mt-4 font-bold">
                Business AI
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {isPro
                  ? "Your Pro business tools."
                  : "Available with Pro."}
              </p>
            </a>

          </div>
        </section>

        {/* Pro features */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            💎 Pro Features
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <p>✅ AI Chat Pro</p>
            <p>✅ AI Writer Pro</p>
            <p>✅ AI Tools Pro</p>
            <p>✅ Business AI Pro</p>
            <p>✅ Premium prompts</p>
            <p>🔜 More Pro features coming soon</p>
          </div>
        </section>

        {/* Payment status */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
          <p className="text-sm text-slate-400">
            Subscription
          </p>

          <p className="mt-2 font-bold">
            ₹399/month
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Payment integration coming soon.
          </p>
        </section>

      </div>
    </main>
  );
}