# quantumtales.org

This folder is the GitHub Pages site for [Quantum Tales](https://quantumtales.org): a single
self-contained static page with no build step (`.nojekyll`).

## Structure

- `index.html`: the whole site (content, styles, and the PDF-preview loader)
- `quantum-tales.pdf`: the book (first edition), served at [quantumtales.org/quantum-tales.pdf](https://quantumtales.org/quantum-tales.pdf)
- `cover.jpg`: front cover, used as the hero image and social-share card (rendered from `images/QT cover pre.pdf`)
- `img/`: one story-opener illustration per tale (rendered from the book PDF, pages 6, 14, 22, 34)
- `apple-touch-icon.png`, `favicon.ico`: icons
- `CNAME`: custom-domain record for GitHub Pages

## Regenerating images

The cover and tale art are rendered with `pdftoppm` (poppler). For example:

```sh
pdftoppm -jpeg -jpegopt quality=80,optimize=y -f 6 -l 6 -scale-to 900 docs/quantum-tales.pdf docs/img/cowherd
```
