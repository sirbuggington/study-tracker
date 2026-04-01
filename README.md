# Study Tracker — Hamilton County IT

A progress-tracking web app for the Hamilton County Application Developer 3-week study plan. Track daily tasks, see progress roll up across weeks, and stay on track with a clean mobile-first UI.

## What it does

- Converts the 19-day study plan into an interactive tracker with checkboxes
- Separates "Must Finish" vs "Nice to Finish" tasks with distinct visual treatment
- Shows progress at day, week, and overall levels
- Auto-expands today's tasks when the date matches the plan
- Filters: All, To Do, Done, Must only, Nice only
- Search across all task text
- Collapsible day cards and week sections
- Sidebar navigation to jump between days
- Course reference table with direct links

## Stack

- **React 19** + **TypeScript** + **Vite**
- Zero runtime dependencies beyond React
- CSS-only styling (no UI framework)
- ~15KB gzipped total

## How the document is represented

The study plan markdown is parsed into a typed data structure in `src/data/studyPlan.ts`. The hierarchy is:

```
StudyPlan
  > Week (3 weeks)
     > Day (6-7 days per week, including rest days)
        > Must Finish tasks (tracked)
        > Nice to Finish tasks (tracked)
        > End-of-Day Proof (reference text)
```

To update the plan content, edit `src/data/studyPlan.ts`. The app UI and progress state are fully separated from the content data.

## Persistence

- Progress is saved to `localStorage` automatically on every change
- Survives browser refreshes and restarts
- **Export:** Settings > Download Progress (saves JSON file)
- **Import:** Settings > Choose File or paste JSON
- **Reset:** Settings > Reset All Progress (with confirmation)
- To move progress between devices, export on one and import on the other

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/` — a fully static site ready for any hosting.

## Deploy (Netlify — recommended for free static hosting)

### Option A: Drag and drop
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page
4. Done — you get a live URL instantly

### Option B: Git-connected deploy
1. Push to GitHub
2. Connect the repo at [app.netlify.com](https://app.netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

### Alternative: Vercel
Same process — connect repo, it auto-detects Vite, deploys instantly. Also free.

### Alternative: GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Set `base` in `vite.config.ts` to your repo name: `base: '/repo-name/'`
4. Run: `npm run build && npm run deploy`
