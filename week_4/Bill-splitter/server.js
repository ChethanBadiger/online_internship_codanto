import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;    //process.env.PORT

app.use(bodyParser.json({ limit: "10mb" })); // allow big base64 images

app.post("/api/scrape-receipt", async (req, res) => {
  try {
    const { base64Image, prompt } = req.body;

    if (!process.env.API_KEY) {
      return res.status(500).json({ error: "Missing API_KEY in environment" });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.scarapeReceipt}`,
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
      const errText = await response.text();
      console.error("OpenRouter error:", errText);
      return res.status(response.status).json({ error: errText });
    }

    const data = await response.json();
    res.json(data); 
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ error: "Failed to process receipt" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
