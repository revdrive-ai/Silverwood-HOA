# Silverwood HOA Website

Rebuilt from the content on silverwoodneighborhood.org (Bixby, OK — 125 homes),
using Next.js 14 (App Router) + Tailwind CSS. Deployed to Vercel.

## Project structure

- `content/*.js` — all page content lives here as plain JS data (site settings,
  news posts, documents, new-resident pages). This is intentional: it keeps
  content separate from layout so it's easy to either edit directly or wire
  up to a CMS later.
- `app/*` — Next.js routes. Most sections (`news`, `documents`, `new-resident`)
  use a list page + a `[slug]` detail page that reads from the matching
  content file.
- `components/*` — shared header, footer, and UI pieces (cards, section
  headings, info strips).
- `public/images/*` — all site images, self-hosted. Referenced by path
  (`/images/pool.jpg`). The site no longer depends on the old site's media.

See also:

- **`EDITING.md`** — how to update content, written for board members.
- **`CLAUDE.md`** — conventions, content map, and gotchas for developers
  (and for Claude).

## Making a content edit right now (no coding experience needed)

1. Open the relevant file in `content/` (e.g. `content/news.js` to add a news
   post, `content/site.js` to update the board roster or quick facts).
2. Copy an existing entry, change the text, save.
3. Commit and push — Vercel will automatically rebuild and redeploy.

This works, but does require comfort with GitHub. See "Next step: editing
without code" below for a friendlier long-term option.

## Known placeholders to fill in

- **Contact form** (`app/board/page.js`): the form doesn't send anywhere yet.
  Sign up for a free [Formspree](https://formspree.io) account (or similar)
  and set the `action` attribute to your form endpoint. Alternatively wire it
  to a Vercel serverless function that emails the board.
- **Meeting minutes & newsletter PDFs** (`content/documents.js`): the old
  site's PDF links weren't all reachable during migration — the `files`
  arrays have `url: "#"` placeholders. Replace with the actual PDF URLs
  (re-upload the PDFs from the old site, or link to the member portal).
- **Tornado siren map PDF** (`content/newResident.js`): same — needs the real
  PDF link.
- Double-check the board roster and management contacts in `content/site.js`
  are still current — they were accurate as of this migration but boards
  change.

## Next step: editing without code

You told me the goal is a site non-technical board members can update
without touching code. That's a separate, meaningful chunk of work — it
needs either:

1. **A hosted git-based CMS** (e.g. Tina Cloud, Decap CMS) that gives board
   members a simple web form to edit `content/*` files, which commits the
   change to GitHub automatically. Free tier available at small scale, but
   requires creating an account with that service.
2. **A small custom admin page** (a password-protected `/admin` route in this
   app that writes directly to GitHub via a personal access token). More
   work to build, but no third-party CMS dependency.

The project now lives in GitHub (`revdrive-ai/Silverwood-HOA`) with Vercel
deploying `main` automatically, so either path is unblocked.

## Local development

```
npm install
npm run dev
```

<!-- Vercel Git integration verified 2026-08-10 -->
