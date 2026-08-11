# Heartland Foods — Leadership Reporting

Three leadership dashboards on one cadence structure and one set of numbers, built as a static
site. No build step, no framework, no dependencies — every page is a single HTML file with inline
CSS and JS and no external requests.

**All values are illustrative sample data.** The shapes, definitions, comparisons and drill paths
are the proposal; the numbers are placeholders sized to a company like Heartland until the marts
point at SYSPRO.

## Layout

```
index.html            Landing page — the three views, the shared-number tie-out, the Phase 2 gaps
cfo/index.html        Office of the CFO
president/index.html  President & head of marketing
vp-sales/index.html   VP of Sales
docs/                 Design notes for each dashboard
vercel.json           Static hosting config (clean URLs)
```

Deployed URLs, with `cleanUrls` on: `/`, `/cfo`, `/president`, `/vp-sales`.

## The three views

| View | Audience | Question | Global control |
|---|---|---|---|
| [CFO](docs/cfo.md) | Office of the CFO | Did we make money, and is the balance sheet clean? | Entity |
| [President](docs/president.md) | President & head of marketing | Is the growth real, can we serve it, and did the money work? | Channel |
| [VP of Sales](docs/vp-sales.md) | VP of Sales | Are we tracking to forecast, by territory and by account? | Territory + customer |

Each has four cadence tabs — today, this week, this month, this quarter — because the time grain
should be pre-selected rather than chosen at the start of a meeting.

## What makes them a set

Where a measure appears on more than one dashboard, it is the same measure with the same
definition and the same value. The landing page carries the full tie-out table; the short version
for July 2026:

| Measure | July 2026 | On |
|---|---|---|
| Gross sales | $16.42M | all three |
| Trade spend | $2.03M | all three |
| Net revenue | $13.78M | all three |
| Trade rate on gross | 12.4% | all three |
| Case fill rate | 94.2% | President, VP Sales |
| Gross margin | 25.9% | CFO, President |
| Top 5 concentration | 63.0% | CFO, President |

The VP of Sales view adds a cut the others do not have: seven territories that sum to the company
total on actual, forecast *and* plan.

## Shared design contract

- **Cadence is a tab, not a filter.** The time grain is pre-selected on every view.
- **One global control per view**, matched to how its reader works — except the VP of Sales view,
  which takes two because people are managed by territory and revenue by account.
- **Exception-first.** Each tab ranks at most five exceptions with a severity stripe plus an icon
  and a text label, never colour alone.
- **Every number carries one comparison** — prior period, plan, forecast, budget, last year, or
  the customer's own requirement — plus a sparkline.
- **Nothing is gated behind a hover.** Every chart has a `Table` toggle.
- **Drill-down is one click, never required.**
- **Trust marker.** "Data as of" opens per-source last-sync times, including the Phase 2 feeds
  shown as not connected.

## Chart conventions

One house style across all three: a validated categorical palette (blue / orange / aqua), a
single-hue ordinal ramp for ordered buckets, a blue↔red diverging pair for polarity, and reserved
status colours for good / watch / serious / critical. Bars cap at 24px with 4px rounded data-ends
and a 2px surface gap between touching fills. Grids and axes are solid hairlines.

Two rules shaped the layouts: **no dual-axis charts** — dollars and points get two charts, not one
plot with two scales — and **nothing gated behind a hover**.

Charts whose default axis would mislead are reframed rather than truncated. Case fill by customer
plots the gap to each retailer's requirement, because nine fill rates between 92% and 97% draw
nine identical bars on a 0–100 axis. The growth bridge is scaled to the growth rather than to
revenue, because $12.78M anchor bars leave every driver an unreadable sliver.

## Phase 1 versus Phase 2

Everything on these pages is what we shipped and what we spent. None of it is what the shopper or
the operator did. Three gaps are marked as dashed panels rather than filled with a proxy:

1. **Market share, %ACV and promotion lift** — needs NIQ syndicated data.
2. **Foodservice sell-through** — needs distributor POS. Sell-in moves when a distributor moves
   inventory; demand does not.
3. **Brand health** — needs a consumer panel and a brand tracker.

## Local preview

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8080
```

## Open questions for the client

One per view, printed at the bottom of each page so they travel with the artefact:

- **CFO** — which 3–5 month-end reports would make close easier?
- **President & marketing** — does one page serve both chairs, or does marketing need its own?
- **VP of Sales** — at what point in the month does a rep's forecast lock?
