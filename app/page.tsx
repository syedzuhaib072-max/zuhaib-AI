export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-cyan-400">
          🚀 Zuhaib AI
        </h1>

        <div className="flex gap-6">
          <a href="/" className="hover:text-cyan-400">Home</a>
          <a href="/chat" className="hover:text-cyan-400">Chat</a>
          <a href="/writer" className="hover:text-cyan-400">Writer</a>
          <a href="/tools" className="hover:text-cyan-400">Tools</a>
          <a href="/pricing" className="hover:text-cyan-400">Pricing</a>
          <a href="/login" className="hover:text-cyan-400">Login</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h1 className="text-6xl font-extrabold">
          🚀 Zuhaib AI
        </h1>

        <p className="mt-6 text-xl text-slate-400">
          One AI Platform for Chat, Writing, Business, Coding, Prompts and Productivity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          <a
            href="/chat"
            className="bg-cyan-500 hover:bg-cyan-400 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold">💬 AI Chat</h2>
            <p className="mt-3">Ask anything with AI.</p>
          </a>

          <a
            href="/writer"
            className="bg-purple-600 hover:bg-purple-500 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold">✍️ AI Writer</h2>
            <p className="mt-3">Generate blogs, emails and content.</p>
          </a>

          <a
            href="/tools"
            className="bg-green-600 hover:bg-green-500 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold">🛠 AI Tools</h2>
            <p className="mt-3">Use powerful AI utilities.</p>
          </a>

          <a
            href="/business"
            className="bg-orange-600 hover:bg-orange-500 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold">💼 Business AI</h2>
            <p className="mt-3">Marketing, sales and business ideas.</p>
          </a>

        </div>

        <div className="mt-16">
          <a
            href="/pricing"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl"
          >
            Upgrade to Pro
          </a>
        </div>

      </section>

    </main>
  );
}