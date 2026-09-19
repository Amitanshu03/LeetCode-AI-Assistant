let editor;

let languageSelect =
    document.getElementById("languageSelect");


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


    // LANGUAGE SELECTOR

    languageSelect.addEventListener(
        "change",
        function () {

            let selectedLanguage =
                languageSelect.value;


            monaco.editor.setModelLanguage(

                editor.getModel(),

                selectedLanguage

            );

        }
    );

});


// ==========================================
// HINT
// ==========================================

async function getHint() {

    const problem =
        document.getElementById(
            "problemInput"
        ).value;


    if (!problem.trim()) {

        document.getElementById(
            "aiMessage"
        ).textContent =
            "⚠️ Please enter a LeetCode problem first.";

        return;

    }


    const code = editor.getValue();


    try {

        document.getElementById(
            "aiMessage"
        ).textContent =
            "🤖 Thinking...";


        const response = await fetch(

            "http://localhost:5000/api/hint",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    problem: problem,

                    code: code

                })

            }

        );


        const data =
            await response.json();


        console.log(
            "AI Response:",
            data
        );


        if (!response.ok) {

            document.getElementById(
                "aiMessage"
            ).textContent =
                "❌ " +
                (
                    data.error ||
                    "Something went wrong."
                );

            return;

        }


        document.getElementById(
            "aiMessage"
        ).textContent =
            data.reply;


    }

    catch (error) {

        console.error(
            "Hint Error:",
            error
        );


        document.getElementById(
            "aiMessage"
        ).textContent =
            "❌ Failed to connect to the AI server.";

    }

}


// ==========================================
// DEBUG
// ==========================================

async function debugCode() {

    const problem =
        document.getElementById(
            "problemInput"
        ).value;


    const code =
        editor.getValue();


    const language =
        document.getElementById(
            "languageSelect"
        ).value;


    if (!problem.trim()) {

        document.getElementById(
            "aiMessage"
        ).textContent =
            "⚠️ Please enter a LeetCode problem first.";

        return;

    }


    if (!code.trim()) {

        document.getElementById(
            "aiMessage"
        ).textContent =
            "⚠️ Please write some code first.";

        return;

    }


    try {

        document.getElementById(
            "aiMessage"
        ).textContent =
            "🐛 Analyzing your code...";


        const response = await fetch(

            "http://localhost:5000/api/debug",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    problem: problem,

                    code: code,

                    language: language

                })

            }

        );


        const data =
            await response.json();


        console.log(
            "Debug Response:",
            data
        );


        if (!response.ok) {

            document.getElementById(
                "aiMessage"
            ).textContent =
                "❌ " +
                (
                    data.error ||
                    "Debugging failed."
                );

            return;

        }


        document.getElementById(
            "aiMessage"
        ).textContent =
            data.reply;


    }

    catch (error) {

        console.error(
            "Debug Error:",
            error
        );


        document.getElementById(
            "aiMessage"
        ).textContent =
            "❌ Failed to connect to the AI server.";

    }

}


// ==========================================
// EXPLAIN
// ==========================================

async function explainCode() {

    const problem =
        document.getElementById(
            "problemInput"
        ).value;


    const code =
        editor.getValue();


    const language =
        document.getElementById(
            "languageSelect"
        ).value;


    if (!problem.trim()) {

        document.getElementById(
            "aiMessage"
        ).textContent =
            "⚠️ Please enter a LeetCode problem first.";

        return;

    }


    if (!code.trim()) {

        document.getElementById(
            "aiMessage"
        ).textContent =
            "⚠️ Please write some code first.";

        return;

    }


    try {

        document.getElementById(
            "aiMessage"
        ).textContent =
            "📖 Explaining your code...";


        const response = await fetch(

            "http://localhost:5000/api/explain",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    problem: problem,

                    code: code,

                    language: language

                })

            }

        );


        const data =
            await response.json();


        console.log(
            "Explain Response:",
            data
        );


        if (!response.ok) {

            document.getElementById(
                "aiMessage"
            ).textContent =
                "❌ " +
                (
                    data.error ||
                    "Explanation failed."
                );

            return;

        }


        document.getElementById(
            "aiMessage"
        ).textContent =
            data.reply;


    }

    catch (error) {

        console.error(
            "Explain Error:",
            error
        );


        document.getElementById(
            "aiMessage"
        ).textContent =
            "❌ Failed to connect to the AI server.";

    }

}


// ==========================================
// OPTIMIZE
// ==========================================

async function optimizeCode() {

    const problem =
        document.getElementById(
            "problemInput"
        ).value;


    const code =
        editor.getValue();


    const language =
        document.getElementById(
            "languageSelect"
        ).value;


    if (!problem.trim()) {

        document.getElementById(
            "aiMessage"
        ).textContent =
            "⚠️ Please enter a LeetCode problem first.";

        return;

    }


    if (!code.trim()) {

        document.getElementById(
            "aiMessage"
        ).textContent =
            "⚠️ Please write some code first.";

        return;

    }


    try {

        document.getElementById(
            "aiMessage"
        ).textContent =
            "⚡ Analyzing your code for optimization...";


        const response = await fetch(

            "http://localhost:5000/api/optimize",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    problem: problem,

                    code: code,

                    language: language

                })

            }

        );


        const data =
            await response.json();


        console.log(
            "Optimize Response:",
            data
        );


        if (!response.ok) {

            document.getElementById(
                "aiMessage"
            ).textContent =
                "❌ " +
                (
                    data.error ||
                    "Optimization failed."
                );

            return;

        }


        document.getElementById(
            "aiMessage"
        ).textContent =
            data.reply;


    }

    catch (error) {

        console.error(
            "Optimize Error:",
            error
        );


        document.getElementById(
            "aiMessage"
        ).textContent =
            "❌ Failed to connect to the AI server.";

    }

}

async function generateTestCases() {
    const problem = document.getElementById("problemInput").value;
    const language = document.getElementById("languageSelect").value;
    const aiMessage = document.getElementById("aiMessage");

    if (!problem.trim()) {
        aiMessage.textContent = "Please enter a LeetCode problem first.";
        return;
    }

    aiMessage.textContent = "🧪 Generating test cases...";

    try {
        const response = await fetch("http://localhost:5000/api/testcases", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                problem: problem,
                language: language
            })
        });

        const data = await response.json();

        if (data.success) {
            aiMessage.innerHTML = formatAIResponse(data.response);
        } else {
            aiMessage.textContent = "❌ Failed to generate test cases.";
        }

    } catch (error) {
        console.error(error);
        aiMessage.textContent = "❌ Server error. Make sure the backend is running.";
    }
}


function formatAIResponse(text) {
    return text
        // Headings
        .replace(/^### (.+)$/gm, "<h3>$1</h3>")
        .replace(/^## (.+)$/gm, "<h2>$1</h2>")
        .replace(/^# (.+)$/gm, "<h1>$1</h1>")

        // Bold
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

        // Inline code
        .replace(/`([^`]+)`/g, "<code>$1</code>")

        // Bullet points
        .replace(/^\s*[-*] (.+)$/gm, "<li>$1</li>")

        // Numbered lists
        .replace(/^\s*(\d+)\.\s+(.+)$/gm, "<li>$2</li>")

        // Horizontal line
        .replace(/^---+$/gm, "<hr>")

        // New lines
        .replace(/\n/g, "<br>");
}