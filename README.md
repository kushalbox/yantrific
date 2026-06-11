# Yantrific — Website (Vite + React)

Marketing site for Yantrific, built with **Vite + React**.

## Prerequisites

- Node.js 18+ and npm.

## Run locally

```bash
npm install      # installs React + Vite (needs internet)
npm run dev      # starts dev server at http://localhost:5173
```

## Build for production

```bash
npm run build    # outputs static files into dist/
npm run preview  # serves the production build locally to verify
```

## Deploy

The `dist/` folder is a fully static site — deploy it anywhere:

- **Vercel (recommended):** either push this folder to a Git repo and click **Add New → Project → Import** on Vercel, _or_ run `npx vercel` from inside this folder and follow the prompts. Vercel auto-detects Vite — Framework Preset **Vite**, Build Command `npm run build`, Output Directory `dist`. No extra config needed. Add your domain under **Project → Settings → Domains** (point yantrific.com's DNS at Vercel).
- **Netlify:** import the repo (build command `npm run build`, publish directory `dist`), or drag-and-drop the built `dist/` folder onto Netlify Drop.
- **Your own host (yantrific.com / LiteSpeed):** upload the **contents** of `dist/` into the web root (e.g. `public_html`).

## Project structure

```
index.html            # HTML entry, loads fonts + /src/main.jsx
public/logo.png       # Yantrific logo (served at /logo.png)
src/main.jsx          # React entry point
src/App.jsx           # All page sections (Nav, Hero, Services, ...)
src/styles.css        # Design system + layout
vite.config.js        # Vite + @vitejs/plugin-react config
```

## Editing content

All copy lives in the data arrays at the top of `src/App.jsx`
(`SERVICES`, `STATS`, `APPROACH`, `INDUSTRIES`, `FAQS`). Edit text there —
no layout changes needed.

## Notes

- Brand colors: blue `#0167ff`, deep blue `#0125c2`, orange `#fa8b1e`.
- Fonts: EB Garamond (display) + Sora (UI), loaded from Google Fonts.
- Proof / case studies are intentionally omitted from this v1.
