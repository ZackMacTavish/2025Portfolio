# Copilot Instructions for 2025Portfolio

## Project Overview
- This is a React + Vite monorepo for a design/portfolio site, using styled-components and custom UI foundations.
- Major UI and layout primitives are in `@zackmactavish/foundation` (see `packages/foundation/README.md`).
- Pages are in `src/pages/`, components in `src/components/`, and static assets in `src/assets/` and `public/assets/`.

## Image Handling
- Use the `SingleImage` and `DoubleImage` components (from `src/pages/Access_Direct/AD.jsx`) for all image rendering. These support AVIF, WebP, and fallback formats via `<picture>`.
- Always import and pass all available formats (e.g., `.avif`, `.webp`, `.jpg`/`.png`) for each image. If a format is missing, do not import it.
- Example:
  ```jsx
  import img from '../../assets/example.png';
  import imgAvif from '../../assets/example.avif';
  import imgWebp from '../../assets/example.webp';
  <SingleImage src={img} avif={imgAvif} webp={imgWebp} />
  ```
- If only AVIF and PNG exist, pass only those props.

## SEO and Metadata
- Use the `Seo` component from `@zackmactavish/foundation` for all page-level meta, OG/Twitter, canonical, and JSON-LD.
- See `packages/foundation/README.md` for usage and required props.

## Build & Development
- Use `npm run dev` to start the Vite dev server with HMR.
- Use `npm run build` to create a production build.
- Use `npm run lint` to check code style (ESLint config is in `eslint.config.js`).
- No custom test runner is present; add tests in the future as needed.

## Project Conventions
- All new images should be added to `src/assets/` (or `public/assets/` for public-only files) in AVIF, WebP, and PNG/JPG if possible.
- Filenames may include spaces and dashes; always match import names to actual files.
- Use React functional components and hooks throughout.
- Use styled-components for all styling; avoid CSS modules or inline styles except for quick overrides.
- All page-level components live in `src/pages/`; shared UI in `src/components/`.
- Use the grid/layout primitives from `@zackmactavish/foundation` for consistent spacing and structure.

## Integration Points
- The `@zackmactavish/foundation` package is the main source of shared UI, SEO, and theme logic.
- No backend or API integration is present; all data is static or imported from local files.

## Example Patterns
- See `src/pages/Microsoft/Microsoft.jsx` and `src/pages/Outsource/Outsource.jsx` for best practices in image imports and usage.
- See `packages/foundation/README.md` for custom layout and SEO primitives.

---

If you add new image types or change the image pipeline, update these instructions. For any unclear conventions, check the latest page/component files for examples or ask for clarification.
