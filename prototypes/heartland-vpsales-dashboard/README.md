# Heartland Foods — VP of Sales Dashboard (Draft 1)

A self-contained clickable prototype of the sales dashboard: shipments, trade spend, the
Foodservice division, and how every territory and account is tracking to forecast. Third in the
set with `../heartland-cfo-dashboard` and `../heartland-president-dashboard`, on the same
template and the same house chart style.

Open `index.html` in a browser. No build step, no server, no dependencies.

**All numbers are illustrative sample data**, and they tie to the two sibling decks wherever a
measure appears on more than one. Territory is a new cut of the same figures: the seven
territories sum to the company total on actual, forecast and plan alike.

## What this one does differently

**Two global controls, not one.** The CFO and President decks each take a single control by
design. This one takes **territory and customer**, because that is how a VP of Sales works —
people are managed by territory, revenue by account. The two pickers are wired together: pick a
territory and the customer list narrows to its accounts; pick a customer and the territory
picker snaps to whoever owns it.

**Every scorecard sorts.** Click any column header — territory, manager, actual, forecast,
attainment, growth, trade rate, case fill, forecast error. Ascending and descending, remembered
per table, with `aria-sort` on the active column. Sorting is the requirement, not a nicety: the
same table answers "who is behind forecast" and "who is absorbing the service problem" depending
on which column you sort.

**Forecast is a separate number from plan.** Plan is the annual commitment; forecast is the call
the team is making now. Attainment against both appears on every cadence, and forecast *error* —
rolling six-month mean absolute — says whose number can be taken to a board meeting.

## What it covers

| Tab | IDs | The question |
|---|---|---|
| Today | SD1–SD6 | Are we going to make the month? |
| This week | SW1–SW7 | Who moved their number, and what is at risk? |
| This month | SM1–SM9 | How did we track to forecast, by territory and by account? |
| This quarter | SQ1–SQ7 | Whose number can you take to the boardroom? |

### The centrepieces

- **Territory scorecard and customer scorecard** (Month tab) — the two sortable tables the whole
  dashboard is built around. Manager on every territory row; twenty accounts on the customer
  table, scoped by the pickers.
- **Month-to-date pace** (Today) — cumulative shipped against forecast pace, with the run-rate
  projection carried to month end. Six days in, the run rate lands $0.73M under the team's own
  call. Month-to-date and pace are held exactly per territory, so the tiles and the card agree.
- **Forecast revisions by territory** (This week) — who revised their August call up and who
  revised it down, with the manager and the reason. Net −$140K, third week down, and National
  Accounts revising *up* is the only reason the company number moved less than Northeast alone.

## The Foodservice division

Selectable in the territory picker, since it has its own sales force, and given its own six-card
block on the Month tab because its mechanics are genuinely different:

- **Sell-in by distributor** — US Foods, Sysco, Gordon, regionals. Exact, invoiced figures.
- **Operator segments** — chain and independent restaurants, healthcare, education, B&I, lodging.
  Distributor-reported estimates with a four-to-six week lag, labelled as such on every row.
- **Where the money goes** — contract price deviations, distributor allowances and broker
  commissions, not features and displays. This is why Foodservice's 9.7% trade rate is not
  directly comparable to a retail territory's, and the card says so.
- **Contract against street business** — 62% contract, up from 58%. More predictable, and the
  reason Foodservice is the only division that hit its forecast this week.
- **Broker performance against quota** — four brokers, self-reported, flagged as the softest data
  on the page.
- **Indexed growth against the company** (Quarter tab) — the division has fallen 11 index points
  behind in two years.

**The honest gap:** everything above is *sell-in*. When a distributor builds or draws down
inventory, sell-in moves and demand does not, which means the Foodservice forecast is built on
shipment patterns rather than operator demand. Distributor POS files close that gap and would
also replace the segment estimates with measured numbers. That is the dashed panel on the Quarter
tab and the biggest blind spot on the dashboard.

## Chart conventions

Same house style as the sibling decks, with the same two rules that shaped the layout: no
dual-axis plots, and nothing gated behind a hover — every chart has a `Table` toggle.

Charts whose default axis would mislead were reframed rather than truncated: gap-to-plan and
forecast revisions are diverging bars around zero, broker performance plots points off quota
rather than percent of quota, and the month-to-date chart pins its axis to the month rather than
letting a 12% pad waste half the plot.

One primitive was added for this deck — the **sortable scorecard**. Numeric columns sort on a raw
value carried beside the formatted string, so `$1.75M` and `103.1%` sort as numbers. Attainment
cells carry a severity glyph as well as a colour.

## Consistency work this deck forced

Modelling territory meant aggregating the two earlier decks' customer figures for the first time,
which surfaced four places where their sample data did not tie. All four were fixed across the
set rather than worked around:

- **Top-5 concentration** read 48.2% while the customer P&L both decks share puts the top five at
  63.0% of gross. Rebased on the P&L, preserving every delta already quoted in prose.
- **The customer tail** grew −4.2%, which implied a company prior year of $12.89M against the
  $12.78M all three decks use. It is flat, not shrinking.
- **Foodservice trade rate** was 4.5% in the President deck against roughly 10% in the CFO deck's
  customer P&L. Rebalanced to 9.4%.
- **Per-customer trade rates** were carried as a separate rate table that had drifted from the
  trade dollars in the CFO P&L. They are now derived from those dollars.

A fifth issue was a real bug in the shared line-chart primitive: the end marker assumed the last
point in a series exists, which crashed on the month-to-date series once it had trailing nulls.
Fixed in all three decks so the primitive stays identical across the set.

## Open question for the client review

Printed at the bottom of the page: **at what point in the month does a rep's forecast lock?**
Revision tracking, at-risk revenue and forecast error all need one agreed cut-off, and that is a
sales-management decision rather than a data one.

## Note on this repository

Not part of the Silverwood HOA site and not linked from it — it lives under `prototypes/` as a
standalone deliverable and is not routed by the Next.js app.
