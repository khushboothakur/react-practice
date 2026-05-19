# 07 React Router
 
A React project demonstrating client-side routing using React Router DOM v6.
 
## 📦 Tech Stack
- React 19
- React Router DOM
- Tailwind CSS v4
- Vite
## 📁 Project Structure
```
src/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Home/
│   ├── About/
│   ├── Contact/
│   ├── User/
│   └── Github/
├── Layout.jsx
└── main.jsx
```
 
## ✨ Features
- Client-side routing with `createBrowserRouter`
- Active link highlighting using `NavLink`
- Dynamic route with URL params (`/user/:userid`)
- GitHub API integration using `useLoaderData`
- Responsive navbar and footer with Tailwind CSS
## 🚀 Getting Started
```bash
npm install
npm run dev
```
 
## 🔗 Routes
| Path | Component |
|------|-----------|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/user/:userid` | User |
| `/github` | Github |
