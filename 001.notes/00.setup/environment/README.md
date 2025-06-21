# 🌐 React Environment Setup Guide

React ke development ke liye kuch **basic environment tools** ki jarurat hoti hai jo smooth experience aur compatibility ensure karte hain.

---

## ✅ 1. Node.js

React app run karne ke liye **Node.js + npm** installed hona chahiye.

- **Check Version**:
  ```bash
  node -v
  npm -v
  ```

- 📥 Download: https://nodejs.org

---

## ✅ 2. NPM or Yarn

- **NPM**: Node ke sath aata hai
- **Yarn** (alternative): Fast & clean package manager
  ```bash
  npm install -g yarn
  ```

---

## ✅ 3. Code Editor (VS Code Recommended)

- Install extensions:
  - 🧠 ES7+ React Snippets
  - 🌈 Prettier
  - 🧪 ESLint
  - 🔍 React Developer Tools (browser)

---

## ✅ 4. Browserslist (for build compatibility)

React build tool (like Vite, CRA) `browserslist` use karta hai to decide:
- Kaunse browsers ke liye code transpile karna hai
- Kaunse polyfills add karne hain

👉 Iska config hota hai:
```txt
> 0.5%
last 2 versions
not dead
```

⬇️ Full explanation: [`.browserlist-explained.md`](.browserlist-explained.md)

---

## ✅ 5. Git Setup

```bash
git init
git config user.name "Your Name"
git config user.email "you@example.com"
```

---

## ✅ 6. Optional Global Tools

| Tool             | Purpose                          |
|------------------|----------------------------------|
| `serve`          | Serve static build locally       |
| `npx create-react-app` | Create React app easily    |
| `vite`           | Modern build tool (faster)       |

---

📌 Once setup is done, you can create apps via:

```bash
npm create vite@latest
# or
npx create-react-app my-app
```

Happy coding! ⚛️🚀
