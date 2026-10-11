# E2E Engineers

One-page portfolio and pitch site for Maha Javed (full-stack web) and Muhammad Nouman Ali (data engineering and SQL). Built with Next.js (App Router, TypeScript) as a fully static export.

The brand name is set in `content.ts` (`brand.name`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # writes static files to /out
npm start        # serves /out locally
```

## Edit content

All copy lives in `content.ts`. Components in `components/` only render it. Keep every claim real: no invented metrics, clients or testimonials. The "How we work" steps are a proposal and should be confirmed before publishing.

## Deploy to Netlify

`netlify.toml` already sets the build command (`npm run build`), the publish directory (`out`) and Node 22. Connect the repo in Netlify, choose this branch and deploy.

## Background

`portfolio-prompt-metropolitan.md` is the design brief and content source this site was built from.
