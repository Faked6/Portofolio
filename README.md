# 🎓 5th Semester Computer Science Student Portfolio

A modern, fast, and responsive developer portfolio website built specifically for a **5th-semester Computer Science undergraduate**. Crafted with clean **HTML5**, **Vanilla CSS**, and **Vanilla JavaScript** — zero complex build tools, zero `node_modules` headaches!

---

## ✨ Features

- 🌓 **Dark & Light Mode**: Default sleek dark theme with smooth ambient glow and instant theme toggle.
- ⚡ **Hero Section**: Dynamic typewriter role text, real-time availability badge, and an interactive syntax-highlighted code editor preview card (`StudentProfile.js`).
- 🎓 **Student Academic Journey**: Timeline highlighting 5th-semester standing, university courses, lab assistant mentorship, and tech club involvement.
- 🗂️ **Interactive Projects Showcase**: Categorized filter tabs (*All*, *Full-Stack*, *Frontend*, *Semester Coursework*) with detailed interactive **Case Study Modals** breaking down the Challenge, Solution, and Learnings.
- 📄 **On-Screen CV / Resume Modal**: Ready-to-view academic resume with a built-in "Print / Save PDF" feature.
- ✉️ **Contact & Quick Copy**: Direct communication channels, 1-click email copy with instant toast notifications, and interactive message form.
- ⚙️ **Quick Personalize Helper**: Built-in test personalizer widget in the bottom-left corner to see your custom name live on screen.

---

## 🚀 How to Run Locally

### Option 1: Just Double Click!
Simply navigate to your `Porto` folder and double-click [index.html](file:///c:/Games/Porto/index.html) in your file explorer. It opens directly in Google Chrome, Edge, or Firefox!

### Option 2: Run with Python Local Server
Open PowerShell in this folder and run:
```powershell
python -m http.server 4321
```
Then visit: `http://localhost:4321`

---

## 🎨 How to Customize

All code is cleanly organized with comments for effortless customization:

1. **Change Your Name & Title**:
   - In [index.html](file:///c:/Games/Porto/index.html), search for `class="display-name"` and replace `Claymore` with your name.
   - Update your university and major under the `#about` and `#journey` sections.

2. **Add or Edit Projects**:
   - Open [js/script.js](file:///c:/Games/Porto/js/script.js). At the top of the file, you'll find `PROJECT_DATABASE` where you can customize project titles, summaries, technologies, and GitHub links.

3. **Update Social Links & Email**:
   - In [index.html](file:///c:/Games/Porto/index.html), search for `https://github.com`, `https://linkedin.com`, and `claymore.dev@university.edu` to point to your real profiles.

---

## 🌐 Free Deployment Guide

- **GitHub Pages**:
  1. Create a repository on GitHub named `portfolio` or `username.github.io`.
  2. Push these files (`index.html`, `css/`, `js/`).
  3. Go to **Settings > Pages** and select `main` branch. Your site is live!
- **Vercel / Netlify**:
  - Simply drag & drop this folder into [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com) for a free instant live URL.
