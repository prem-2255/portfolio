# Prem Tiwari — Portfolio

Personal portfolio built with **React + Vite**, deployed free on **GitHub Pages**.

**Live:** https://prem-2255.github.io/portfolio/

---

## Run locally

```bash
npm install       # ek hi baar — packages download karega
npm run dev       # http://localhost:5173 pe khul jaayega
```

Build check karna ho to:

```bash
npm run build     # dist/ folder banayega
npm run preview   # build ko locally dekho
```

## Content kaise badlein

Sab kuch **`src/data.js`** me hai — sirf wahi file edit karo. Baaki kisi file ko chhune ki zaroorat nahi.

Us file me `TODO` dhoondho aur apni asli details bhar do:

- `profile` — naam, role, tagline
- `about` — apne baare me lines
- `skills` — categories aur tech
- `projects` — asli projects (title, description, tech, live/code links)
- `socials` — email, GitHub, LinkedIn

Resume add karna ho to `resume.pdf` naam se `public/` folder me daal do.
Resume ka button nahi chahiye to `data.js` me `resume: null` kar do.

## Deploy

`main` branch pe push karte hi GitHub Actions khud build karke Pages pe publish kar deta hai
(dekho `.github/workflows/deploy.yml`). Manually kuch build karne ki zaroorat nahi.

> **Zaroori:** `vite.config.js` me `base` repo ke naam se match hona chahiye.
> Repo `portfolio` hai to `base: '/portfolio/'`. Warna live site pe blank page aayega.

## Tech

React 18 · Vite 5 · plain CSS (CSS variables) · GitHub Actions · GitHub Pages
