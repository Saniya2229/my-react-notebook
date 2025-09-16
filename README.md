# React Mini Projects 🚀

This repository contains a collection of React mini projects built using **React + Vite + Tailwind CSS**.  
Each project demonstrates different React concepts such as **state management, hooks, context API, routing, and UI design**.

---

## 📌 Features
- ⚛️ Built with **React (Vite for fast builds)**
- 🎨 Styled with **Tailwind CSS**
- 🔄 Includes examples using **React Router**
- 📂 Modular components for reusability
- 🧩 Demonstrates **React Hooks**: `useState`, `useEffect`, `useRef`, `useCallback`, `useContext`

---

## 🛠️ Tech Stack
- **React 18+**
- **Vite** (Development Server + Bundler)
- **Tailwind CSS** (Styling)
- **React Router DOM** (Routing between pages/components)

---

## 📦 Dependencies
Make sure you have **Node.js (>=16)** installed.

Main dependencies (from `package.json`):
```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.23.1"
},
"devDependencies": {
  "@vitejs/plugin-react": "^4.3.1",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.47",
  "tailwindcss": "^3.4.13",
  "vite": "^5.4.10"
}
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/react-mini-projects.git
cd react-mini-projects
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start development server
```bash
npm run dev
```
Vite will start the project at:
👉 `http://localhost:5173`

---

## 📂 Folder Structure
```
react/
│-- src/
│   │-- assets/         # Static images/icons
│   │-- components/     # Reusable components (Login, Profile, Contact, etc.)
│   │-- context/        # Context API (UserContext)
│   │-- pages/          # Pages for routing
│   │-- App.jsx         # Main App component with routes
│   │-- main.jsx        # Entry point (ReactDOM.createRoot)
│-- index.html          # Base HTML
│-- package.json        # Dependencies & scripts
│-- tailwind.config.js  # Tailwind configuration
│-- vite.config.js      # Vite config
```

---

## 📖 How it Works
1. The project uses **React Router DOM** for navigation between pages (`/`, `/contact`, `/github`, etc.).
2. **Context API** is implemented in `context/UserContext.js` to manage global user state (login/profile).
3. Each mini project (Password Generator, Color Changer, Login System, etc.) is structured as a separate component/page.
4. Styling is done with **Tailwind classes**, ensuring a clean responsive UI.
5. Vite ensures fast hot-reload during development.

---

## 🙌 Contribution
Pull requests are welcome! If you’d like to add a new mini project or improve an existing one:
1. Fork this repo
2. Create a feature branch
3. Commit your changes
4. Open a PR 🎉

---

## 📜 License
This project is open-source under the **MIT License**.
