export default function PricingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: "#0f172a",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
        Zuhaib-AI Pricing
      </h1>

      <p style={{ color: "#cbd5e1", marginBottom: "40px" }}>
        Choose the plan that works for you.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <div
          style={{
            width: "280px",
            padding: "30px",
            borderRadius: "20px",
            background: "#1e293b",
            border: "1px solid #334155",
          }}
        >
          <h2>Free</h2>

          <h3 style={{ fontSize: "32px", margin: "20px 0" }}>
            ₹0
          </h3>

          <p>AI tools</p>
          <p>Basic AI generation</p>
          <p>Free prompts</p>

          <button
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>

        <div
          style={{
            width: "280px",
            padding: "30px",
            borderRadius: "20px",
            background: "#1e293b",
            border: "1px solid #334155",
          }}
        >
          <h2>Pro</h2>

          <h3 style={{ fontSize: "32px", margin: "20px 0" }}>
            ₹199
          </h3>

          <p>Advanced AI tools</p>
          <p>Premium prompts</p>
          <p>More generations</p>

          <button
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Coming Soon
          </button>
        </div>
      </div>
    </main>
  );
}