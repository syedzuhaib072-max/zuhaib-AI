export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Zuhaib-AI Dashboard
        </h1>

        <p className="text-slate-300 mb-8">
          Welcome to your AI dashboard.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold mb-2">
              AI Tools
            </h2>
            <p className="text-slate-400">
              Explore AI-powered tools.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold mb-2">
              AI Chat
            </h2>
            <p className="text-slate-400">
              Ask AI questions and generate responses.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold mb-2">
              Prompt Marketplace
            </h2>
            <p className="text-slate-400">
              Discover useful AI prompts.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}