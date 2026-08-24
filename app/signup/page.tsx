"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setMessage("Please enter your name and email.");
      return;
    }

    setLoading(true);
    setMessage("");

    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: crypto.randomUUID(),
      options: {
        data: {
          name: name.trim(),
        },
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      setMessage(
        "Account created! Check your email if email confirmation is enabled."
      );
    }

    setLoading(false);
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
            disabled={loading}
            className="mt-7 w-full rounded-xl bg-cyan-400 px-5 py-3 font-bold text-black hover:bg-cyan-300 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          {message && (
            <p className="mt-5 rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300">
              {message}
            </p>
          )}

          <p className="mt-4 text-center text-xs text-slate-500">
            Secure authentication powered by Supabase.
          </p>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Already have an account?
          </p>

          <a
            href="/login"
            className="mt-2 inline-block text-sm text-cyan-400 hover:text-cyan-300"
          >
            Login →
          </a>
        </div>

      </div>
    </main>
  );
}