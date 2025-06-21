# ⚡ Vite Explained

Vite (pronounced `veet`) is a fast build tool and development server for modern frontend frameworks like React, Vue, etc.

## 🔥 Why Vite?

| Feature                   | Vite                        | Old Bundlers (like Webpack) |
|--------------------------|-----------------------------|-----------------------------|
| Startup Time             | 🚀 Instant                  | 🐌 Slow (bundles first)     |
| HMR (Hot Module Reload)  | ⚡ Super Fast               | ⚠️ Laggy sometimes          |
| Native ES Modules        | ✅ Supported in Dev         | ❌ Requires bundling        |
| Build                    | 🎯 Rollup Optimized Bundle | 🎯 Webpack                  |

## 🧪 Behind the Scenes

- **Dev Mode:** Uses native ES modules, no bundling needed
- **Prod Mode:** Uses Rollup to optimize and bundle
- **Supports:** JSX, TypeScript, CSS pre-processors, Tailwind, PostCSS etc.

## 🚀 Get Started (React + Vite)

```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
