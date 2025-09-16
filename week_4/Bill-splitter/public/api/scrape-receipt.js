export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { base64Image, prompt } = req.body;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.scarapeReceipt}`, // ✅ comes from Vercel env
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-maverick:free",
        messages: [
          {
            role: "system",
            content: "You are an OCR assistant. Extract text from receipts clearly.",
          },
          {
            role: "user",
            content: [
              { type: "input_text", text: prompt || "Extract all readable text from this receipt:" },
              { type: "input_image", image_url: base64Image },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.statusText}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in /api/scrape-receipt:", error.message);
    return res.status(500).json({ error: "Failed to process receipt" });
  }
}
