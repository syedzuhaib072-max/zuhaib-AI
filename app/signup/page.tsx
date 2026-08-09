"use client";

import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [created, setCreated] = useState(false);

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      return;
    }

    localStorage.setItem(
      "zuhaib_user",
      JSON.stringify({
        name: name.trim(),
        email: email.trim(),
      })
    );

    setCreated(true);
  }

  if (created) {
    return (
      <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
        <div className="mx-auto max-w-md text-center">

          <div className="text-6xl">🎉</div>

          <h1 className="mt-5 text-3xl font-bold">
            Account Created!
          </h1>

          <p className="mt-3 text-slate-400">
            Welcome to Zuhaib-AI, {name}.
          </p>

          <a
            href="/dashboard"
            className="mt-7 inline-block rounded-xl bg-cyan-400 px-7 py-3 font-bold text-black hover:bg-cyan-300"
          >
            Go to Dashboard →
          </a>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-md">

        <div className="mb-8 text-center">
          <div className="text-5xl">🤖</div>

          <h1 className="mt-4 text-4xl font-bold">
            Create your account
          </h1>

          <p className="mt-3 text-slate-400">
            Join Zuhaib-AI and start using AI tools.
          </p>
        </div>

        <form
          onSubmit={handleSignup}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-7"
        >

          <label className="block text-sm font-medium">
            Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
          />

          <label className="mt-5 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="mt-7 w-full rounded-xl bg-cyan-400 px-5 py-3 font-bold text-black hover:bg-cyan-300"
          >
            Create Account
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            Account system is currently in demo mode.
          </p>

        </form>

        <div className="mt-6 text-center">
          <a
            href="/dashboard"
            className="text-sm text-cyan-400 hover:text-cyan-300"
          >
            ← Back to Dashboard
          </a>
        </div>

      </div>
    </main>
  );
}