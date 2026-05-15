🔐 Password Generator
A clean and responsive Password Generator built with React + Vite and styled using Tailwind CSS.
✨ Features

🔡 Generate random passwords with uppercase & lowercase letters
🔢 Toggle Numbers (0–9)
🔣 Toggle Special Characters (!@#$%^&*()_+)
📏 Adjustable password length (6 to 100)
📋 Copy to clipboard button
⚡ Password auto-regenerates on any setting change

🛠️ Tech Stack

React — UI library
Vite — Fast build tool
Tailwind CSS — Utility-first styling

🚀 Getting Started
1. Clone the repo
bashgit clone https://github.com/khushboothakur/react-practice.git
cd react-practice/05passwordgenerator
2. Install dependencies
bashnpm install
3. Run the dev server
bashnpm run dev
Open http://localhost:5173 in your browser.
📁 Project Structure
05passwordgenerator/
├── public/
├── src/
│   ├── App.jsx       # Main component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── index.html
├── package.json
└── vite.config.js
🧠 Concepts Used

useState — managing length, toggles, password state
useCallback — memoizing password generator function
useEffect — auto-generating password on state change
useRef — copying password to clipboard

📸 Preview

Password Generator with dark theme UI, range slider for length, and toggles for numbers/special characters.
