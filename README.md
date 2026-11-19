# Amlan Audri — Portfolio

Personal portfolio site. React + TypeScript, built with Vite, deployed to GitHub Pages at
**<https://nazmul057.github.io/adr-amlan-portfolio/>**.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000/adr-amlan-portfolio/
```

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server with hot reload                    |
| `npm run build`     | Production build into `dist/`                 |
| `npm run preview`   | Serve the built output locally                |
| `npm run typecheck` | `tsc --noEmit` against the whole project      |
| `npm run deploy`    | Build, then publish `dist/` to the `gh-pages` branch |

## How it is put together

- **Vite + React 19 + TypeScript** (`strict` mode).
- **Tailwind CSS v4** via `@tailwindcss/vite`. The theme is declared once in the
  `@theme` block at the top of `src/index.css` — colours, fonts and easings all
  come from there, so there is no separate Tailwind config file.
- **HashRouter**, because GitHub Pages cannot rewrite unknown paths to `index.html`.
- **No UI framework.** Repeated styling lives as small component classes
  (`.surface`, `.chip`, `.btn`, `.tl-node`, …) in `src/index.css`.

### Layout

```
src/
  index.css            Theme tokens, base styles, component classes, animations
  index.tsx            Entry point
  App.tsx              Routes, scroll restoration, page transitions
  constants.ts         ALL site content — the only file to edit for updates
  types.ts             Shapes for projects, experience, publications, awards
  hooks/
    useTypewriter.ts   Hero typing effect
  components/
    Layout.tsx         Page shell plus the ambient animated background
    Navbar.tsx         Sticky nav with scroll state
    Footer.tsx
    Reveal.tsx         IntersectionObserver fade-in wrapper
    PageHeader.tsx     Page title block
    SectionHeading.tsx Section title block
    ProjectArt.tsx     Hand-drawn SVG artwork for each project card
    BrandIcons.tsx     GitHub / LinkedIn marks
  pages/               Home, Experience, Education, Skills, Projects, Contact
  supp_dcs/images/     Profile photo
```

## Editing content

Almost everything on the site is data in **`src/constants.ts`**:

- `PROJECTS` — project cards. Each has an `art` key naming one of the drawings in
  `ProjectArt.tsx`; the filter buttons on the Projects page are derived from the
  `types` used, so a new type needs no extra wiring.
- `EXPERIENCE_DATA` — one list, split by `type` across the Experience and Education
  pages: `research`, `teaching`, `volunteer`, `leadership_extracurricular`,
  `education`, `certification`, and `secondary` (shown low-key at the bottom of the
  Experience page).
- `PUBLICATIONS`, `AWARDS`, `SKILLS`.

## Contact form

Posts to [Formspree](https://formspree.io); the endpoint is at the top of
`src/pages/Contact.tsx`.

## Deploying

```bash
npm run deploy
```

Builds and pushes `dist/` to the `gh-pages` branch. The `base` path in
`vite.config.ts` must match the repository name.

## Accessibility

Animations are decorative and are disabled under `prefers-reduced-motion: reduce`.
