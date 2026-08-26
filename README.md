# Portfolio / Digital CV

A personal portfolio site with a searchable skill/project index. Built with
plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step,
no paid services.

## Architecture

```
Browser
  ├─ index.html         (structure, semantic landmarks)
  ├─ css/styles.css      (theme, layout, responsive rules)
  ├─ js/app.js           (fetches JSON, renders DOM, runs search)
  └─ data/*.json         (content — the "backend")
        ├─ profile.json  (name, contact, summary)
        ├─ skills.json   (skill list + category)
        └─ projects.json (projects + technologies used)
```

There is no server-side code. `app.js` fetches the JSON files with
`fetch()` on page load, renders the DOM from them, and re-filters the
in-memory `projects` array whenever the user types — so search is instant
and never triggers a page reload or network round-trip after the initial
load.

If you outgrow static JSON (e.g. you want to edit content from a CMS or
add many more projects), swap the three `fetch("data/*.json")` calls in
`js/app.js` for calls to a small REST endpoint that returns the same
shapes — the rendering code doesn't need to change. A minimal schema for
that case:

```
profile   { name, title, location, summary, email, social: {github, linkedin, website}, resumeUrl }
skills    [ { name, category } ]
projects  [ { id, name, description, technologies: [string], repo, demo } ]
```

## Data model

**`data/profile.json`** — one object with your name, title, summary,
contact info, and social links.

**`data/skills.json`** — an array of `{ name, category }`. `category` is
only used for grouping later if you want it; the search feature ignores
it today.

**`data/projects.json`** — an array of projects. Each project's
`technologies` array is exactly the list of strings the search matches
against, so keep names consistent with `skills.json` (e.g. always
`"Node.js"`, not sometimes `"NodeJS"`).

## Filling in your own content

Edit the three files in `data/` and replace every placeholder value
(`"Your Name"`, `your.email@example.com`, sample project entries, etc.)
with your real information. Nothing in this repo displays any personal
data beyond what you put into those files — there's no analytics,
tracking, or third-party form embed.

Optional: drop your résumé PDF at `assets/resume.pdf` to power the
"Download Résumé" button (or update `resumeUrl` in `profile.json` to
point elsewhere, or delete the field to hide the button).

## Running locally

Opening `index.html` directly (`file://`) will fail to load the JSON
files — browsers block `fetch()` on local files for security reasons.
Serve the folder over HTTP instead, e.g.:

```bash
python3 -m http.server 8000
```

or

```bash
npx serve .
```

Then visit `http://localhost:8000`.

## How the search feature works

1. On load, `app.js` fetches `data/projects.json` once and keeps it in
   memory (`state.projects`).
2. The search `<input>` fires on every keystroke, debounced 150ms
   (`debounce()` in `js/app.js`) so filtering doesn't run on every single
   keypress while typing fast.
3. `filterProjects(projects, query)` does a case-insensitive substring
   match of the query against each project's `technologies` array —
   e.g. typing `"react"` matches a project tagged `"React"`.
4. `renderProjects()` re-renders the `<ul id="projectGrid">` from the
   filtered array, highlights the matching tag on each card, and updates
   an `aria-live="polite"` status line so screen reader users hear the
   result count without needing to re-navigate.
5. Clicking a skill pill under "Skills" does the same thing: it sets the
   search box to that skill's name and re-runs the filter, so there's a
   single matching code path for typed search and pill clicks.
6. Nothing submits a form to a server or reloads the page — the `submit`
   handler on the search form calls `event.preventDefault()`.

### Sample queries to try

| Type this | Expect |
|---|---|
| `react` | Projects tagged `React` |
| `python` | The ETL pipeline project |
| `docker` | Task Tracker API and ETL pipeline |
| `zzz` | The "no projects match" empty state |
| *(empty)* | All projects |

## Responsive design

- Layout uses CSS Grid (`auto-fit`/`auto-fill`) for the About and Projects
  sections, so cards reflow from a single column on narrow screens to a
  multi-column grid on wide screens with no media query needed there.
- Fluid type sizes use `clamp()` for headings so text scales between
  mobile and desktop without separate breakpoints.
- One breakpoint (`max-width: 640px`) collapses the top nav into a
  hamburger-toggled menu (`js/app.js` → `setupNav()`).
- Test it: resize the browser window, or use your browser's device
  toolbar (e.g. Chrome DevTools → Toggle device toolbar) at common
  widths like 375px (mobile), 768px (tablet), and 1280px (desktop).

## Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- A "Skip to main content" link appears on keyboard focus for keyboard
  users who want to bypass the nav.
- The search input has a proper (visually hidden) `<label>`, and results
  update via an `aria-live="polite"` region so assistive tech announces
  match counts.
- Skill filter pills are real `<button>` elements with `aria-pressed`
  reflecting selection state — operable by keyboard and mouse alike.
- Focus states use a visible `:focus-visible` outline everywhere,
  including a non-default color for contrast.
- `prefers-reduced-motion: reduce` disables transitions/animations for
  users who've asked for that at the OS level.
- Color palette respects `prefers-color-scheme: dark` and keeps text
  contrast readable in both themes.
- Check it: run the page through your browser's built-in accessibility
  audit (e.g. Chrome DevTools → Lighthouse → Accessibility) and fix
  anything it flags after you add your own content/images.

## Deploying

This is a static site — any static host works (GitHub Pages, Netlify,
Vercel, Cloudflare Pages). For GitHub Pages from this repo:

```bash
git push origin main
```

then enable Pages in the repo settings, serving from the `main` branch,
root folder.
