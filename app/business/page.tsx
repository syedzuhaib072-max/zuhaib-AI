export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          AI Services for Businesses
        </h1>

        <p className="text-slate-300 mb-8">
          Powerful AI solutions to help businesses create content,
          automate tasks, and grow faster.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold mb-2">
              AI Content
            </h2>
            <p className="text-slate-400">
              Create marketing content, social media posts and more.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold mb-2">
              AI Automation
            </h2>
            <p className="text-slate-400">
              Automate repetitive business tasks with AI.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-bold mb-2">
              AI Solutions
            </h2>
            <p className="text-slate-400">
              Build AI-powered solutions for your business.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}