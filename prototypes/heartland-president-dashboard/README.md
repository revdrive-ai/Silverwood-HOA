# Heartland Foods — President & Marketing Dashboard (Draft 1)

A self-contained clickable prototype of the commercial dashboard: the view the President
and the head of marketing share. Sibling to `../heartland-cfo-dashboard`, built on the same
template and the same house chart style.

Open `index.html` in a browser. No build step, no server, no dependencies — one HTML file
with inline CSS and JS and no external requests.

**All numbers are illustrative sample data.** Where a measure also appears on the CFO
dashboard — net revenue, gross sales, trade spend, OTIF fine dollars, product-line margin,
customer concentration — the values here are deliberately *the same values*. Two dashboards
disagreeing on net revenue is the failure mode the project exists to remove.

## Why this is a second dashboard and not a second tab

The CFO dashboard answers "did we make money and is the balance sheet clean". This one
answers two different questions that happen to need the same data:

- **President:** is the growth real, and can we serve it?
- **Head of marketing:** did the money work?

Those two share every number on the page, so they share the page.

## What it covers

| Tab | IDs | The question |
|---|---|---|
| Today | PD1–PD6 | Did we serve the customer yesterday, and is demand moving? |
| This week | PW1–PW7 | Are we tracking to the month, and is the promotion actually running? |
| This month | PM1–PM9 | Where did the growth come from, and did the money work? |
| This quarter | PQ1–PQ7 | Are we winning, or just charging more? Is the portfolio the right shape? |

IDs are printed on screen so this prototype and the spec can be read side by side. They are
prefixed `P` so they never collide with the CFO deck's `D1`/`W3`/`M6` in a review where both
are on the table.

### The centrepiece

**PM2, growth decomposition.** One month's $1.00M of growth split five ways — volume on base
items, price realization, mix, new items, lost distribution. Every other card on the Month tab
exists to explain one of those five bars. It is scaled to the *growth* rather than to revenue,
because $12.78M anchor bars leave every driver an unreadable sliver.

**PQ2, volume against price.** The same decomposition at five-quarter depth, and the argument
the board will actually have: volume growth has fallen from 5.1 points to 3.4 while price has
run at 5.6 to 8.1. In dollars, growing a business and repricing one look identical.

## Design contract, as implemented

- **Cadence is a tab, not a filter.** The time grain is pre-selected on every view.
- **Channel is the only global control** — not entity, not brand. Dollar, case and count
  measures rescale per channel. Rates (fill, OTIF, growth, promoted volume, discount depth,
  innovation) are held per channel rather than divided, because a rate is not divisible.
  Product-line and portfolio measures stay consolidated and carry a `Consolidated` chip.
- **Measures that do not exist in a channel say so.** Foodservice runs contract deviations
  rather than retail promotion mechanics, and distributors levy no OTIF fines; e-commerce has
  no retailer OTIF scorecard. Those tiles print an explanation, never a zero.
- **Every number carries one comparison** — prior period, plan, last year, or the customer's
  own requirement — plus a sparkline.
- **Exception-first.** Each tab has a ranked "Needs attention" feed, max five rows, severity
  stripe plus an icon and a text label (never colour alone). Alerts are scoped to the channels
  where their figure is true, so an all-channel number does not follow you into a channel view.
- **Drill-down is one click, never required.** Seven side panels: OTIF by customer, cut order
  lines, live promotions, distribution breadth, customer growth, line growth, launch tracker.
- **Trust marker.** "Data as of" opens per-source last-sync times, including the two Phase 2
  feeds shown as not connected.

## Chart conventions

Same house style as the CFO deck: validated categorical palette, single-hue ordinal ramp for
ordered buckets, reserved status colours for good / watch / serious / critical, bars capped at
24px with 4px rounded data-ends, hairline solid grids. No dual-axis plots anywhere — promoted
volume share and discount depth are two charts, as are case fill and fine dollars.

Nothing is gated behind a hover: every chart has a `Table` toggle that swaps the SVG for the
same numbers.

Two additions beyond the CFO template, both earned by this audience:

- **Promotion calendar** — a lane chart of promotions across six weeks, with a Today marker.
  Marketing thinks in this shape and no other chart carries it. Retailer execution status is
  shown by a solid versus dashed bar *and* a glyph *and* the table, never by colour alone.
- **Bubble quadrant** — the portfolio chart plots growth against margin with bubble area
  carrying revenue, so the size of the decision is visible alongside its direction.

Charts whose axis would otherwise mislead were reframed rather than truncated: case fill by
customer plots the *gap to each retailer's requirement*, because nine fill rates between 92%
and 97% draw nine identical bars on a 0–100 axis.

## What Phase 1 cannot answer

Three dashed panels on the Quarter tab, and they are the point rather than an omission:

1. **Market share, %ACV and category growth** (NIQ). Everything on the page is what we
   shipped. Whether 7.8% was share gained or a rising tide is not in any Phase 1 source.
2. **Promotion lift and true trade ROI** (NIQ + retailer POS). We can show what a promotion
   cost and how deep it went. Return needs a baseline — what would have sold without it.
3. **Brand health** (consumer panel + brand tracker). The only place brand spend can be shown
   to do something trade spend cannot, which is why the working / non-working split on the
   Month tab is a stopgap.

The lineage band therefore shows **two** Phase 2 sources, not one: NIQ for the category and
the retailer POS portals (Luminate, 84.51°, Instacart) for store-level sell-through.

## Open question for the client review

Printed at the bottom of the page so it travels with the artefact: **what is the service
number you promise your top five customers, and who owns it?** Fill rate and OTIF appear on
three of the four tabs because nothing else on the page survives a supply failure — but the
target and the owner are the client's to name.

## Note on this repository

Not part of the Silverwood HOA site and not linked from it — it lives under `prototypes/` as a
standalone deliverable and is not routed by the Next.js app.
