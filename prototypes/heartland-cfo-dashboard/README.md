# Heartland Foods — CFO Dashboard (Draft 1)

A self-contained clickable prototype of the CFO dashboard described in
*Heartland Foods — CFO Dashboard: KPI Specification by Cadence* (Revdrive working draft).

Open `index.html` in a browser. No build step, no server, no dependencies — it is one
HTML file with inline CSS and JS and no external requests.

**All numbers are illustrative sample data.** They are internally consistent and sized to a
company like Heartland, but nothing here came from a real system. The proposal is the
shapes, definitions, comparisons and drill paths.

## What it covers

Every KPI in the spec, on the cadence tab it belongs to:

| Tab | Spec IDs | Notes |
|---|---|---|
| Today | D1–D5, plus the optional D6 | Cash, receipts, invoiced, AR past due, new deductions |
| This week | W1–W7 | Sales pace, order book, DSO/aging movement, deduction workload, trade pace, inventory, pipeline |
| This month | M1–M9 | P&L, net revenue bridge, margin by line, customer profitability, accrual true-up, deduction economics, working capital, inventory health, close status |
| This quarter | Q1–Q6 | Trajectory, concentration, portfolio margin map, deduction structural trend, trade rate by customer, covenants |

Q3 (trade spend ROI) and Q7 (market share) render as deliberately dashed Phase 2 panels —
both need NIQ lift/syndicated data that no Phase 1 source can produce.

Tile IDs (`D1`, `W3`, `M6`…) are printed on screen so this prototype and the spec can be
read side by side in a review.

## Design contract, as implemented

- **Cadence is a tab, not a filter.** The time grain is pre-selected on every view.
- **One global control**: the entity picker. Dollar measures rescale per entity; ratio,
  day-count and structural measures are consolidated and carry a `Consolidated` chip.
  Measures that do not exist for an entity (trade, deductions, pipeline for Logistics)
  say so rather than showing a zero.
- **Every number carries one comparison** — prior period, budget, or last year — plus a
  sparkline.
- **Exception-first.** Each tab has a ranked "Needs attention" feed, max five rows, with a
  severity stripe and an icon + text label (never colour alone). Alerts that quote a
  consolidated figure are scoped to the consolidated view.
- **Drill-down is one click, never required.** Tiles and alerts with a `Detail →` affordance
  open a side panel with the underlying customer / invoice / order / SKU list.
- **Trust marker.** "Data as of" in the control bar opens per-source last-sync times,
  including NIQ shown as not connected.

## Chart conventions

Charts follow one house style throughout: a validated categorical palette (blue / orange /
aqua), a single-hue ordinal ramp for ordered buckets, a blue↔red diverging pair for
polarity, and reserved status colours for good / watch / serious / critical. Bars are capped
at 24px with 4px rounded data-ends and a 2px surface gap between touching fills; grids and
axes are solid hairlines.

Two rules worth calling out because they shaped the layout:

- **No dual-axis charts.** Quarterly revenue (dollars) and gross margin (points) are two
  charts, not one plot with two scales. Same for deduction dollars and recovery rate.
- **Nothing is gated behind a hover.** Every chart has a `Table` toggle that swaps the SVG
  for the same numbers as a table, and direct labels carry the values that matter.

Charts are hand-built SVG sized so one viewBox unit is about one CSS pixel at its rendered
card width — that is why full-width and half-width cards pass different widths.

## Open questions for the client review

Listed at the bottom of the page itself, so they travel with the artefact. The main one:
which 3–5 month-end reports would make close easier? Whatever finance names goes on the
Month tab first, verbatim, ahead of anything chosen here.

## Note on this repository

This prototype is not part of the Silverwood HOA site and is not linked from it — it lives
under `prototypes/` as a standalone deliverable and is not routed by the Next.js app.
