# CLAUDE.md — working notes for this repo

Silverwood HOA website (Bixby, OK — 125 homes). Next.js 14 App Router +
Tailwind, deployed on Vercel via Git integration. This file is for whoever
picks the project up next, human or Claude. Keep it accurate: if you change
how something works, change it here too.

## Deploy

- Merging to `main` triggers a **production** deploy automatically. No manual
  deploy step.
- Pushing any other branch produces a **preview** deploy, linked from the PR
  by the Vercel bot. Preview deploys sit behind Vercel Authentication, so you
  must be signed in to the `revdrive` Vercel team to view one.
- Production URL: `https://silverwood-hoa.vercel.app`
- **`silverwoodneighborhood.org` is NOT this site.** That domain still serves
  the old site, so nothing merged here is visible to residents yet. Pointing
  it at this project is an open DNS task.

## Where the content lives

All page copy is plain JS data in `content/`, deliberately separated from
layout. Editing content should never require touching a component.

| File | Drives |
| --- | --- |
| `content/site.js` | Site name/tagline, nav, board roster, management contacts, home-page quick facts, pool info, footer note |
| `content/news.js` | News list (`/news`) and each article (`/news/[slug]`) |
| `content/documents.js` | Documents list and detail pages |
| `content/newResident.js` | New Resident pages, including the phone-number and ordinance pages |

Each content file exports an array plus a `getXBySlug()` helper used by the
`[slug]` route. Entries are keyed by `slug`, which is also the URL segment —
changing a slug changes the URL and breaks existing links.

Common entry fields: `slug`, `title`, `date`, `image`, `summary`, `body`
(array of paragraphs). Some also use `files`, `groups`, or `note`.

## Components worth knowing about

`components/ui.js`:

- **`Card`** — the grid card used on the news/documents/new-resident index
  pages and the home page. Renders `image` as a 160px banner **above** the
  text, cropped with `object-cover`.
  - `imageFit="contain"` switches that slot to a padded white field with
    `object-contain`. Use it for **logos/wordmarks**, which `object-cover`
    would crop badly. The PSO logo on the Power Outage card uses this.
- **`InfoStrip`** — the three quick-fact tiles on the home page, fed by
  `site.quickFacts`. Each fact takes `label`, `value`, and an optional `note`
  (rendered bold underneath — used for the pool-season extension notice).
- **`PageHero`**, **`SectionHeading`** — section furniture.

Note that detail pages render `item.image` themselves rather than through
`Card` (see `app/new-resident/[slug]/page.js`), so an image treatment often
needs changing in **two** places: the card and the detail page.

## Design tokens

Defined in `tailwind.config.js` — use the token names, not raw hex:

- `primary` `#2f5d46`, `accent` `#1e4433`, `pine` `#1e3329` (greens)
- `cream` `#eef3ee`, `cream2` `#e3e9e5` (backgrounds/borders)
- `ink` `#33403a`, `subink` `#5a675f` (text)
- Fonts: `font-serif` (Lora) for headings, `font-sans` (Public Sans) for UI,
  both loaded as CSS variables in `app/layout.js`.

## Images

Self-hosted in `public/images/`, referenced as `/images/<name>`. Names are
lowercase-with-hyphens. Keep spaces out of filenames — they force URL
escaping. Reference images by path string; nothing uses static imports.

## Workflow

**`main` receives direct commits from the GitHub web UI** (board members
upload files there). So:

1. **Always `git fetch origin main` before starting**, and rebase onto it.
   The branch you had last session may be far behind.
2. One branch and PR per change, named for the change: `claude/<topic>`.
   Don't reuse a branch after its PR merges — restart it from `main`
   (`git checkout -B <branch> origin/main`).
3. After a squash merge, your local branch's old commits are gone from
   `main`'s history but their content is there. Rebasing will correctly skip
   them as "previously applied".
4. Verify before merging: `npm run build`, and for anything visual, actually
   look at it (see below). Then merge and confirm production serves it.

## Verifying a visual change

`node_modules` is not committed, so run `npm install` first. Then:

```
npx next dev -p 3111
/opt/pw-browsers/chromium --headless --disable-gpu --no-sandbox \
  --window-size=1200,900 --screenshot=/tmp/out.png \
  --virtual-time-budget=8000 http://localhost:3111/new-resident
```

Read the PNG. Don't infer appearance from class names — an `object-cover`
crop or a colour mismatch only shows up in the render.

Outbound `curl` to the production domain is blocked by this environment's
proxy (`CONNECT tunnel failed, 403`). Use the Vercel MCP
`web_fetch_vercel_url` tool to read live pages instead.

## Known open items

- **Domain cutover** — `silverwoodneighborhood.org` → this project (above).
- **Stale root duplicates** — `site.js`, `news.js`, `page.js` at the repo
  root are dead, out-of-date copies of `content/site.js`, `content/news.js`,
  and `app/page.js`. Nothing imports them. They exist because files were
  uploaded to the repo root by mistake. **Edits made there do nothing.**
  They should be deleted.
- **`README.txt`** — empty file, safe to delete. `README.md` is the real one.
- **Contact form** (`app/board/page.js`) doesn't submit anywhere yet.
- **PDF links** in `content/documents.js` and `content/newResident.js` still
  have `url: "#"` placeholders.
- **Code-free editing** for board members (a CMS or an `/admin` route) is
  still unbuilt; see `EDITING.md` for the current manual process.
