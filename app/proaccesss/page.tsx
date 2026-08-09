"use client";

import { useState } from "react";

export default function ProAccessPage() {
  const [plan, setPlan] = useState("Free");

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="text-5xl">💎</div>

          <h1 className="mt-4 text-4xl font-bold">
            Zuhaib-AI Pro
          </h1>

          <p className="mt-3 text-slate-400">
            Unlock the complete AI experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* FREE */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">
            <h2 className="text-2xl font-bold">Free</h2>

            <p className="mt-4 text-4xl font-bold">₹0</p>

            <div className="mt-6 space-y-3 text-slate-300">
              <p>✅ Basic AI Chat</p>
              <p>✅ Basic AI Writer</p>
              <p>✅ Basic AI Tools</p>
              <p>🔒 Advanced Business AI</p>
              <p>🔒 Premium features</p>
            </div>

            <button
              onClick={() => setPlan("Free")}
              className="mt-7 w-full rounded-xl border border-slate-700 px-5 py-3 font-bold hover:bg-slate-800"
            >
              Continue Free
            </button>
          </div>

          {/* PRO */}
          <div className="rounded-2xl border-2 border-cyan-400 bg-cyan-500/10 p-7">
            <div className="inline-block rounded-full bg-cyan-400 px-3 py-1 text-sm font-bold text-black">
              ⭐ PRO
            </div>

            <h2 className="mt-4 text-2xl font-bold">Pro</h2>

            <p className="mt-4 text-4xl font-bold">
              ₹399
              <span className="text-base font-normal text-slate-400">
                /month
              </span>
            </p>

            <div className="mt-6 space-y-3 text-slate-200">
              <p>✅ Advanced AI Chat</p>
              <p>✅ AI Writer Pro</p>
              <p>✅ AI Tools Pro</p>
              <p>✅ Business AI Pro</p>
              <p>✅ Premium prompts</p>
              <p>✅ Advanced features</p>
            </div>

            <button
             onClick={() => {
  localStorage.setItem("zuhaib_pro", "true");
  setPlan("Pro");
}} 
              className="mt-7 w-full rounded-xl bg-cyan-400 px-5 py-3 font-bold text-black hover:bg-cyan-300"
            >
              Upgrade to Pro — ₹399/month
            </button>

            <p className="mt-3 text-center text-xs text-slate-400">
              Payment integration coming soon.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
          <p className="text-sm text-slate-400">
            Current selected plan
          </p>

          <p className="mt-2 text-2xl font-bold">
            {plan === "Pro" ? "💎 Pro" : "🆓 Free"}
          </p>
        </div>
      </div>
    </main>
  );
}