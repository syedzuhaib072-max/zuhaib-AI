export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold">
          Zuhaib<span className="text-cyan-400">-AI</span>
        </h1>

        <a
          href="/"
          className="text-slate-300 hover:text-cyan-400"
        >
          ← Home
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-8 py-16 text-center">
        <p className="mb-4 text-cyan-400 font-semibold">
          AI PRODUCTIVITY HUB
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Powerful AI Tools
          <span className="text-cyan-400"> for Everyone</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Discover useful AI tools to help you work smarter, create faster,
          and grow your business.
        </p>
      </section>

      {/* Tools Grid */}
      <section className="mx-auto grid max-w-6xl gap-6 px-8 pb-20 md:grid-cols-3">
        {/* Tool 1 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
          <div className="text-4xl">✍️</div>

          <h3 className="mt-4 text-xl font-bold">
            AI Writer
          </h3>

          <p className="mt-2 text-slate-400">
            Generate blog posts, social media captions, emails, and more.
          </p>

          <button className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            Try Tool
          </button>
        </div>

        {/* Tool 2 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
          <div className="text-4xl">🎨</div>

          <h3 className="mt-4 text-xl font-bold">
            AI Image Generator
          </h3>

          <p className="mt-2 text-slate-400">
            Create amazing images and creative visuals with AI.
          </p>

          <button className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            Try Tool
          </button>
        </div>

        {/* Tool 3 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
          <div className="text-4xl">🧠</div>

          <h3 className="mt-4 text-xl font-bold">
            Prompt Generator
          </h3>

          <p className="mt-2 text-slate-400">
            Create powerful prompts for ChatGPT and other AI tools.
          </p>

          <button className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            Try Tool
          </button>
        </div>

        {/* Tool 4 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
          <div className="text-4xl">📄</div>

          <h3 className="mt-4 text-xl font-bold">
            AI Summarizer
          </h3>

          <p className="mt-2 text-slate-400">
            Summarize long articles, documents, and text in seconds.
          </p>

          <button className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            Try Tool
          </button>
        </div>

        {/* Tool 5 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
          <div className="text-4xl">💡</div>

          <h3 className="mt-4 text-xl font-bold">
            Business Idea Generator
          </h3>

          <p className="mt-2 text-slate-400">
            Discover new business ideas and opportunities using AI.
          </p>

          <button className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            Try Tool
          </button>
        </div>

        {/* Tool 6 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
          <div className="text-4xl">🚀</div>

          <h3 className="mt-4 text-xl font-bold">
            More AI Tools
          </h3>

          <p className="mt-2 text-slate-400">
            More powerful AI tools are coming soon to Zuhaib-AI.
          </p>

          <button className="mt-6 rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950">
            Coming Soon
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 Zuhaib-AI. Built for the future of AI.
      </footer>
    </main>
  );
}