# Prototypes

Standalone client deliverables. Nothing here is part of the Silverwood HOA site or routed by
the Next.js app — each folder is one self-contained HTML file plus its notes.

| Prototype | Audience | Question it answers |
|---|---|---|
| [`heartland-cfo-dashboard`](heartland-cfo-dashboard) | Office of the CFO | Did we make money, and is the balance sheet clean? |
| [`heartland-president-dashboard`](heartland-president-dashboard) | President & head of marketing | Is the growth real, can we serve it, and did the money work? |
| [`heartland-vpsales-dashboard`](heartland-vpsales-dashboard) | VP of Sales | Are we tracking to forecast, by territory and by account? |

The three Heartland dashboards are siblings: same template, same house chart style, same source
systems, and the same values wherever a measure appears on more than one. Net revenue, gross
sales, trade spend, OTIF fine dollars, product-line margin, case fill and customer concentration
are single figures shared across the set, by design — a territory number that does not roll up to
the company number is worse than no number at all.

Each takes a different global control, matched to how its reader works: **entity** for the CFO,
**channel** for the President and marketing, **territory and customer** for the VP of Sales.
