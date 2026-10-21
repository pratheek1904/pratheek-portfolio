# Pratheek · portfolio

React + TypeScript + Vite + Framer Motion build of the "Release notes" design.

## Run it

Needs Node.js 20.19+ (or 22.12+).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build in dist/
npm run preview  # serve the build locally
```

## Make it yours

- **All text, projects, metrics, skills, experience:** `src/data.ts`
- **Hero image:** drop your screenshot in `public/` and set `heroImage` in `src/data.ts`,
  or set `heroVideo` to an `.mp4`/`.webm` for a looping screen recording.
- **Colors and fonts:** CSS variables at the top of `src/styles.css` (light + dark).

## Animations

- Word-by-word headline reveal and staggered hero intro
- Floating phone with scroll parallax, spring-in stat chips
- Count-up metrics when scrolled into view
- Platform filter with a sliding pill and animated card layout
- Scroll-reveal sections, a timeline that draws as you scroll, top scroll progress bar
- Hide-on-scroll nav and a light/dark toggle

Motion respects the visitor's "reduce motion" setting.
