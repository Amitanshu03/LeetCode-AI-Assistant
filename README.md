# 🤖 LeetCode AI Assistant

An AI-powered coding assistant that helps developers solve LeetCode problems by providing **hints, code explanations, debugging suggestions, and code optimization advice**.

Built with **HTML, CSS, JavaScript, Node.js, Express.js, Monaco Editor, and Google Gemini AI**.

---

## ✨ Features

### 💡 AI Hint

Get a helpful hint for the given LeetCode problem without directly revealing the complete solution.

### 📖 Explain Code

Understand your code with a simple AI-generated explanation.

### 🐛 Debug Code

Identify possible bugs and receive suggestions for fixing them.

### ⚡ Optimize Code

Get suggestions to improve code efficiency, readability, and performance.

### 📝 Monaco Code Editor

Write and edit code using the **Monaco Editor**, the same editor technology used by Visual Studio Code.

### 🌐 Multiple Languages

Currently supports:

* JavaScript
* Python
* C
* C++
* Java

### 🎨 Modern Responsive UI

The application has a dark, responsive interface that works across desktop and smaller screens.

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Monaco Editor

### Backend

* Node.js
* Express.js

### AI

* Google Gemini API

### Development Tools

* VS Code
* Git
* GitHub
* Live Server

---

## 📂 Project Structure

```text
LeetCode-AI-Assistant/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
└── README.md
```

---

## ⚙️ How It Works

The project follows a simple frontend-backend architecture:

```text
User
  │
  ▼
Frontend
HTML + CSS + JavaScript
  │
  ▼
Express.js Backend
  │
  ▼
Gemini AI API
  │
  ▼
AI Response
  │
  ▼
Frontend
```

The user enters a LeetCode problem and code in the editor.

When an action such as **Hint**, **Explain**, **Debug**, or **Optimize** is selected:

1. The frontend sends the problem and code to the backend.
2. The Express.js server processes the request.
3. The backend sends the request to the Gemini API.
4. Gemini generates an AI response.
5. The response is sent back to the frontend.
6. The result is displayed in the AI Response section.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Then enter the project directory:

```bash
cd LeetCode-AI-Assistant
```

---

### 2. Install Backend Dependencies

Open a terminal inside the project folder:

```bash
cd backend
```

Install the required packages:

```bash
npm install
```

If PowerShell blocks `npm`, use:

```bash
npm.cmd install
```

---

### 3. Configure Gemini API

Inside the `backend` folder, create a file named:

```text
.env
```

Add your Gemini API key:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Replace `YOUR_GEMINI_API_KEY` with your actual API key.

> ⚠️ Never upload your `.env` file or expose your API key publicly.

---

### 4. Start the Backend Server

From the `backend` directory:

```bash
node server.js
```

You should see:

```text
Server running on http://localhost:5000
```

---

### 5. Start the Frontend

Open the `frontend` folder in VS Code.

Open:

```text
index.html
```

Then run it using **Live Server**.

The application should open in your browser.

---

## 🔌 API Endpoints

The backend currently provides the following endpoints:

| Endpoint        | Purpose                     |
| --------------- | --------------------------- |
| `/api/hint`     | Generates a hint            |
| `/api/explain`  | Explains the submitted code |
| `/api/debug`    | Finds possible bugs         |
| `/api/optimize` | Suggests code optimization  |

All endpoints communicate with the Gemini AI API.

---

## 🧑‍💻 Example Workflow

### Step 1

Enter a LeetCode problem.

### Step 2

Write your solution in the Monaco code editor.

### Step 3

Select the programming language.

### Step 4

Choose an AI action:

```text
💡 Hint
📖 Explain
🐛 Debug
⚡ Optimize
```

### Step 5

View the generated response in the AI Response section.

---

## 🔐 Security

The Gemini API key is stored in the `.env` file and should never be committed to GitHub.

The `.gitignore` file contains:

```text
node_modules/
.env
```

Before pushing changes, always check:

```bash
git status
```

Make sure `.env` is not listed as a file to be committed.

---

## 🔮 Future Improvements

Planned improvements include:

* 🧪 AI Test Case Generator
* 📊 Time Complexity Analysis
* 💾 Save Code
* 🌓 Theme customization
* 📚 Problem History
* 🔐 User authentication
* 🏆 LeetCode problem integration
* 🧠 More advanced AI coding assistance
* 📱 Improved mobile experience

---

## 📸 Screenshots

Add screenshots of the application here as the project develops.

Example:

```text
![LeetCode AI Assistant](screenshots/home.png)
```

---

## 🎯 Project Goal

The goal of this project is to create a practical AI-powered learning tool that helps programmers **understand problems, improve their code, identify bugs, and learn better problem-solving techniques** rather than simply providing solutions.

---

## 👨‍💻 Author

**Amitanshu Mohanty**

Diploma Student | Aspiring Full Stack Developer | AI/ML Enthusiast

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
