# Editing the Silverwood HOA website

A plain-English guide for board members. No coding experience assumed.

## First, the two things that trip people up

**1. Only files inside the `content` folder change the website.**

There are some leftover files sitting loose at the top level of this
repository named `site.js`, `news.js`, and `page.js`. **They are dead copies.
Editing them does nothing at all.** The real ones live in the `content`
folder (and `app` for page layout). If you're ever unsure whether you're in
the right file, check that the path shown at the top of the GitHub page
starts with `content/`.

**2. Changes go live on their own, about a minute after you save.**

Committing a change to the `main` branch publishes it. There is no separate
"publish" button, and no undo button either — see *Undoing a change* below.

Note: the site currently publishes to **silverwood-hoa.vercel.app**.
Residents visiting **silverwoodneighborhood.org** still see the old website.
Until that's switched over, your edits won't reach them.

## Where to change what

| To change... | Edit this file | Look for |
| --- | --- | --- |
| Pool hours | `content/site.js` | `poolInfo` → `hours` |
| Pool announcement (the bold notice) | `content/site.js` | `poolInfo` → `announcement` |
| The three tiles on the home page | `content/site.js` | `quickFacts` |
| Board member names and roles | `content/site.js` | `board` |
| Management company contacts | `content/site.js` | `management` |
| A news post | `content/news.js` | find the entry by its `title` |
| Documents and their descriptions | `content/documents.js` | find the entry by its `title` |
| New Resident pages | `content/newResident.js` | find the entry by its `title` |

Pool hours appear in **two** places — `content/site.js` (the home page) and
the "Pool Information" post in `content/news.js`. Change both, or the site
will contradict itself.

## How to make a text edit on GitHub

1. Open the file (e.g. `content/site.js`) on github.com.
2. Click the pencil icon (**Edit this file**).
3. Change the text **between the quotation marks** only. Leave the quotes,
   commas, and brackets exactly as they are — a missing quote or comma will
   break the site build, and the page won't update.
4. Scroll down, write a short note of what you changed, and click
   **Commit changes**.
5. Wait about a minute, then reload the website.

If the site doesn't update after a couple of minutes, the build probably
failed because of a typo in the punctuation. The fix is to undo (below) or
ask Claude to look at it.

## Adding a news post

In `content/news.js`, copy an existing entry — everything from one `{` to
its matching `},` — paste it directly above the first entry, and change:

- `slug` — the URL, lowercase with hyphens, no spaces (e.g. `spring-cleanup`).
  It must be unique.
- `title` — the headline
- `date` — free text; existing posts use things like `2027`, `Seasonal`,
  `Reminder`
- `image` — `"/images/some-file.jpg"`, or `null` for no picture
- `summary` — one sentence shown on the news card
- `body` — the paragraphs, each in quotes, separated by commas

Newest posts go at the top; the home page shows the first three.

## Adding a picture

1. Upload it into the **`public/images`** folder — open that folder on
   GitHub, then *Add file → Upload files*.
2. Name it lowercase with hyphens and keep the extension: `spring-party.jpg`,
   not `Spring Party` (a name with no extension won't display, and spaces
   cause problems).
3. Reference it in the content file as `"/images/spring-party.jpg"`.

Photos are cropped to a wide banner shape on the cards. **Logos get cropped
badly** — if you're adding a logo rather than a photo, ask Claude to set it
up so the whole logo stays visible (there's a setting for this).

## Undoing a change

Every change is saved forever and can be reversed:

1. Go to the repository's **Commits** list.
2. Find the change you want to undo and open it.
3. Use *Revert* (or ask Claude to revert it, naming the change).

Reverting publishes the previous version, again within about a minute.

## Working with Claude on changes

Claude works branch-by-branch: it makes each change on its own branch, opens
a pull request so there's a preview and a record, then merges it and confirms
the live site updated. That gives you a reviewable history and a clean
rollback point per change.

One request: **avoid committing directly to `main` while Claude is mid-task
on the same files.** That's how edits get lost or duplicated — it already
caused one round of confusion in this project. Either tell Claude what you
changed, or let it make the change for you.
