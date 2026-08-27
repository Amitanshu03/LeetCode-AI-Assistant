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

// ==========================================
// AI DEBUG
// ==========================================

app.post("/api/debug", async (req, res) => {

    try {

        const { problem, code, language } = req.body;

        const prompt = `
You are a LeetCode AI debugging assistant.

Analyze the user's code and find possible:

1. Syntax errors
2. Logical errors
3. Incorrect conditions
4. Runtime errors
5. Edge cases that may fail

Problem:
${problem}

Programming Language:
${language}

User's Code:
${code}

Give a clear and beginner-friendly explanation.

Do NOT provide the complete solution unless necessary.
Focus on identifying and explaining the problems.
`;

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: prompt
        });

        res.json({
            reply: response.text
        });

    } catch (error) {

        console.error("Gemini Debug Error:", error);

        res.status(500).json({
            error: "Failed to debug the code"
        });

    }

});


// ==========================================
// AI EXPLAIN
// ==========================================

app.post("/api/explain", async (req, res) => {

    try {

        const { problem, code, language } = req.body;

        const prompt = `
You are a LeetCode AI coding assistant.

Explain the user's code in a simple and beginner-friendly way.

Explain:

1. What the code is trying to do
2. How the code works step by step
3. Important variables and conditions
4. Time complexity
5. Space complexity

Problem:
${problem}

Programming Language:
${language}

User's Code:
${code}

Do not rewrite the complete solution.
Explain the existing code.
`;

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: prompt
        });

        res.json({
            reply: response.text
        });

    } catch (error) {

        console.error("Gemini Explain Error:", error);

        res.status(500).json({
            error: "Failed to explain the code"
        });

    }

});

// ==========================================
// AI OPTIMIZE
// ==========================================

app.post("/api/optimize", async (req, res) => {

    try {

        const { problem, code, language } = req.body;

        const prompt = `
You are a LeetCode AI optimization assistant.

Analyze the user's code and suggest ways to improve it.

Focus on:

1. Time complexity
2. Space complexity
3. Unnecessary loops or operations
4. Better algorithms or data structures
5. Code readability

Problem:
${problem}

Programming Language:
${language}

User's Code:
${code}

Explain what can be optimized and why.

Do not provide a completely rewritten solution unless necessary.
`;

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: prompt
        });

        res.json({
            reply: response.text
        });

    } catch (error) {

        console.error("Gemini Optimize Error:", error);

        res.status(500).json({
            error: "Failed to optimize the code"
        });

    }

});

// Start server
app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});