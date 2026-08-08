export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || !prompt.trim()) {
      return Response.json(
        { text: "Please enter a message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { text: "GEMINI_API_KEY is missing from .env.local" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("GEMINI STATUS:", response.status);
    console.log("GEMINI DATA:", data);

    if (!response.ok) {
      return Response.json(
        {
          text:
            data?.error?.message ||
            `Gemini API error: ${response.status}`,
        },
        { status: 500 }
      );
    }

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Gemini returned no text.";

    return Response.json({ text });
  } catch (error) {
    console.error("FULL SERVER ERROR:", error);

    return Response.json(
      {
        text: "Server error while contacting Gemini.",
      },
      { status: 500 }
    );
  }
}