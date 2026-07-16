# quantumtales.org

The [Quantum Tales](https://quantumtales.org) website, built with [Astro](https://astro.build).

## Develop

Node 22 and pnpm 10 are pinned in `mise.toml` (`mise install` provides both).

```sh
pnpm install
pnpm dev       # local dev server
pnpm build     # static build into dist/
pnpm preview   # serve the build
pnpm check     # typecheck
```

## Structure

- `src/pages/index.astro` — the one-page site; `404.astro` for GitHub Pages' not-found page
- `src/layouts/Base.astro` — `<head>`, Open Graph + Book JSON-LD, fonts, footer
- `src/components/` — `Hero`, `TaleCard`, `Preview` (click-to-load PDF iframe), `Footer`
- `src/data/` — `tales.ts` (the four tales; card links derive from `page`/`notebook`/`original`) and `site.ts` (shared copy + external links)
- `src/styles/global.css` — design tokens (light/dark, contrast-verified) and shared utilities
- `src/assets/` — cover and tale art; `astro:assets` generates responsive WebP at build
- `public/` — served verbatim: `quantum-tales.pdf` (the book), icons, `CNAME`

EB Garamond is self-hosted through Astro's Fonts API (configured in `astro.config.mjs`) — no Google Fonts CDN.

## Deploy

Pushes to `master` that touch `site/` build and deploy via `.github/workflows/deploy.yml`.
One-time repo setup: **Settings → Pages → Source → "GitHub Actions"** (the custom domain
`quantumtales.org` stays configured there; `public/CNAME` mirrors it).

## Regenerating images

The cover (`src/assets/cover.jpg`, also rendered from `images/QT cover pre.pdf`) and tale art
(`src/assets/tales/`, from book pages 6, 14, 22, 34) come from `pdftoppm` (poppler):

```sh
pdftoppm -jpeg -jpegopt quality=80,optimize=y -f 6 -l 6 -scale-to 900 site/public/quantum-tales.pdf site/src/assets/tales/cowherd
```
