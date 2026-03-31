# FHS Frontend

This project is a from-scratch React + TypeScript + Vite frontend scaffold for implementing the FHS Figma design.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that deploys the site to GitHub Pages whenever `main` is updated.

Set these repository variables before deploying so the ElevenLabs widget is available in production:

- `VITE_ELEVENLABS_AGENT_ID`
- `VITE_ELEVENLABS_VOICE_ID`

After the repo is pushed, enable GitHub Pages to use GitHub Actions as the source.

## Structure

- `src/App.tsx`: Full page composition
- `src/components/`: Reusable UI primitives and layout components
- `src/data/siteContent.ts`: Content objects that can be replaced with CMS/API data later
- `src/styles.css`: Design tokens, responsive layout, and visual system
- `FIGMA_MAP.md`: Checklist for converting each Figma detail into code
