require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();

const PORT = 5000;


// Gemini AI client
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


// Middleware
app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.send("LeetCode AI Assistant Backend is running!");
});


// Test route
app.post("/api/test", (req, res) => {

    const message = req.body.message;

    res.json({
        reply: `Backend received: ${message}`
    });

});


// AI Hint
app.post("/api/hint", async (req, res) => {

    try {

        const { problem, code } = req.body;

        const prompt = `
You are a LeetCode AI coding assistant.

Give the user ONE useful hint.

Do NOT provide the complete solution.
Do NOT write the full corrected code.

Problem:
${problem}

User's Code:
${code}

Give a clear and beginner-friendly hint that helps the user solve the problem.
`;

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: prompt
        });

        res.json({
            reply: response.text
        });

    } catch (error) {

        console.error("Gemini Error:", error);

        res.status(500).json({
            error: "Failed to get AI response"
        });

    }

});


// Start server
app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});