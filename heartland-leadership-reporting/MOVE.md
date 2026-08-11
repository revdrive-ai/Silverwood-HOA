# Moving this folder to its own repo and onto Vercel

This folder is the complete contents of the `Heartland-Leadership-Reporting` repo — it is staged
here only because the session that built it could not reach that repo. Everything below runs in a
couple of minutes.

## Why it is staged rather than pushed

The session that built these dashboards was started with only `revdrive-ai/Silverwood-HOA` selected
in the repository picker, so that is the only repo it can touch. Adding the target repo mid-session
failed the real GitHub reachability check:

```
add_repo: repository "revdrive-ai/heartland-leadership-reporting" was not found on
github.com, or this session's GitHub credential doesn't have access to it.
```

Listing everything the connected GitHub account can see returned three repos —
`revdrive-ai/Silverwood-HOA`, `revdrive-ai/kroger-reporter` and
`RandyPronschinske/Kroger` — and no Heartland one. Since other `revdrive-ai` repos are visible,
the likely explanation is that **the target repo does not exist yet**.

There is nothing to "grant": per the
[Claude Code on the web docs](https://code.claude.com/docs/en/claude-code-on-the-web#github-authentication-options),
a cloud session can use any repository the connected GitHub account can see, and Claude GitHub App
installation is not a session-level access control. So the fix is simply to make the repo exist and
be visible to that account:

1. Create it empty at <https://github.com/new> — owner `revdrive-ai`, name
   `Heartland-Leadership-Reporting`. Skip the README, `.gitignore` and licence so the first push
   is a clean fast-forward.
2. If it already exists and Claude still cannot see it, confirm the GitHub account connected to
   Claude has access to it on GitHub — private repos need the same authorization as public ones.

Once it exists, either push it yourself (Option A) or start a fresh session with both repos
selected in the picker (Option B).

## Option A — move it yourself (about two minutes)

From a machine with push access to both repos:

```sh
# 1. Get this folder
git clone https://github.com/revdrive-ai/Silverwood-HOA.git
cd Silverwood-HOA
git checkout claude/heartland-cfo-dashboard-3ef1wj

# 2. Copy its contents into a clone of the new repo
cd ..
git clone https://github.com/revdrive-ai/Heartland-Leadership-Reporting.git
cp -R Silverwood-HOA/heartland-leadership-reporting/. Heartland-Leadership-Reporting/
cd Heartland-Leadership-Reporting
rm MOVE.md                      # this file does not belong in the new repo

# 3. Commit and push
git add -A
git commit -m "Add Heartland Foods leadership reporting site (draft 1)"
git push origin main            # or master, whichever the repo uses
```

## Option B — let a future Claude session do it

Grant repo access as above, then start a session and say: *"push
heartland-leadership-reporting/ from the Silverwood-HOA branch into
revdrive-ai/Heartland-Leadership-Reporting and connect it to Vercel."*

## Then connect Vercel

The site is static — no build step, no framework, no dependencies. Vercel needs no build
configuration; `vercel.json` already sets clean URLs.

**From the Vercel dashboard** (recommended, because it wires up auto-deploy on every future push):

1. **Add New → Project**, then import `revdrive-ai/Heartland-Leadership-Reporting`.
2. Framework preset: **Other**. Leave build command and output directory empty.
3. Root directory: leave as `/`.
4. **Deploy**.

**Or from the CLI**, in a clone of the new repo:

```sh
npx vercel link          # pick the revdrive team, name the project heartland-leadership-reporting
npx vercel --prod
```

Deployed URLs will be `/`, `/cfo`, `/president` and `/vp-sales`.

### One thing to decide before it goes live

A production Vercel URL is public to anyone who has the link. Every page carries a
`Draft 1 · illustrative sample data` chip in its masthead, so the numbers cannot be mistaken for
real reporting — but the pages do carry a client name. If that matters, turn on
**Settings → Deployment Protection → Vercel Authentication** so only your team can open it, or
deploy to a preview URL instead of production.

## What is in the folder

```
index.html            Landing page
cfo/index.html        Office of the CFO
president/index.html  President & head of marketing
vp-sales/index.html   VP of Sales
docs/                 Design notes per dashboard
vercel.json           Clean URLs and two response headers
README.md             Repo README
MOVE.md               This file — delete it after the move
```
