let editor;

let languageSelect = document.getElementById("languageSelect");


// ==========================================
// MONACO EDITOR
// ==========================================

require.config({
    paths: {
        vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs"
    }
});


require(["vs/editor/editor.main"], function () {

    editor = monaco.editor.create(
        document.getElementById("editor"),
        {
            value: `// Write your code here

function twoSum(nums, target) {

}`,
            language: "javascript",
            theme: "vs-dark",
            fontSize: 15,

            minimap: {
                enabled: false
            },

            scrollBeyondLastLine: false,

            automaticLayout: true,

            wordWrap: "on"
        }
    );


    // ==========================================
    // LANGUAGE SELECTOR
    // ==========================================

    languageSelect.addEventListener("change", function () {

        let selectedLanguage = languageSelect.value;

        monaco.editor.setModelLanguage(
            editor.getModel(),
            selectedLanguage
        );

    });

});


// ==========================================
// GET AI HINT
// ==========================================

async function getHint() {

    // Get problem from textarea
    const problem =
        document.getElementById("problemInput").value;


    // Check if problem is empty
    if (!problem.trim()) {

        document.getElementById("aiMessage").textContent =
            "⚠️ Please enter a LeetCode problem first.";

        return;
    }


    // Get code from Monaco editor
    const code = editor.getValue();


    try {

        // Show loading message
        document.getElementById("aiMessage").textContent =
            "🤖 Thinking...";


        // Send request to backend
        const response = await fetch(
            "http://localhost:5000/api/hint",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    problem: problem,
                    code: code
                })
            }
        );


        // Convert response to JSON
        const data = await response.json();


        // Show response in browser console
        console.log("AI Response:", data);


        // Check for backend error
        if (!response.ok) {

            document.getElementById("aiMessage").textContent =
                "❌ " + (data.error || "Something went wrong.");

            return;
        }


        // Display Gemini response
        document.getElementById("aiMessage").textContent =
            data.reply;


    } catch (error) {

        console.error("Error:", error);


        document.getElementById("aiMessage").textContent =
            "❌ Failed to connect to the AI server.";

    }

}