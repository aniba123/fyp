import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Azure OpenAI client
const client = new OpenAI({
  apiKey: process.env.AZURE_MODEL_KEY,
  baseURL: `${process.env.AZURE_MODEL_ENDPOINT}openai/deployments/${process.env.AZURE_MODEL_DEPLOYMENT}`,
  defaultQuery: { "api-version": process.env.AZURE_MODEL_VERSION },
  defaultHeaders: { "api-key": process.env.AZURE_MODEL_KEY }
});

// Test endpoint
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await client.chat.completions.create({
      model: process.env.AZURE_MODEL_DEPLOYMENT,
      messages: [{ role: "user", content: message }]
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("❌ Azure AI Error:", error);
    res.status(500).json({ error: "AI request failed" });
  }
});

export default router;
