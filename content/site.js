// Site-wide settings. This file is intentionally plain data (no logic) so it can
// later be swapped for a CMS-driven source without touching page components.

export const site = {
  name: "Silverwood HOA",
  tagline: "A friendly neighborhood of 125 homes near 111th & Memorial, Bixby, OK",
  nav: [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: "Documents", href: "/documents" },
    { label: "New Residents", href: "/new-resident" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Board & Contact", href: "/board" },
  ],
  externalLinks: {
    memberPortal: "https://wandmhoapropmngmt.appfolio.com/connect",
    facebookGroup: "https://www.facebook.com/groups/187414009235035",
  },
  management: {
    company: "W&M Consulting, LLC",
    dba: "dba W&M HOA Management",
    address: "PO Box 140432, Broken Arrow, OK 74014",
    phone: "918-928-9917",
    contacts: [
      { name: "Suzie Smith", role: "Main contact", email: "admin@wandmconsulting.com" },
    ],
  },
  boardEmail: "silverwoodhoaboardbixby@gmail.com",
  board: [
    { role: "President", name: "Open" },
    { role: "Vice President", name: "Gary Yaeger" },
    { role: "Director", name: "Nathan Paul" },
    { role: "Director", name: "Randy Pronschinske" },
    { role: "Member at Large", name: "Tim Sanderson" },
    { role: "Member at Large", name: "Laura Chrismon" },
    { role: "Member at Large", name: "Roberto Rodriguez" },
  ],
  quickFacts: [
    { label: "Annual dues", value: "Due in full by March 1 each year" },
    {
      label: "Pool season",
      value: "Memorial Day – Labor Day",
      note: "Extended! The pool now closes Sunday, September 13th at 9 PM for the season.",
    },
    { label: "Next Annual Meeting", value: "May 2027 · Time & location TBD" },
  ],
  amenities:
    "Dues support two neighborhood entrances (one with a guardhouse), a pool and pool house, and a retention pond with surrounding fence on the west side of the community.",
  poolInfo: {
    hours: "Mon 1–9 PM (pool cleaning day) · Tue–Thu 9 AM–9 PM · Fri–Sun 9 AM–10 PM",
    season: "Memorial Day weekend through Labor Day weekend (exact closing date depends on weather and usage)",
    announcement:
      "The Board has voted to extend the pool season an extra week — the pool closes Sunday, September 13th at 9 PM for the season. This may get extended depending on usage and the weather; watch for more announcements.",
    access:
      "Electronic pool keys are available from Tim Sanderson or a board member — residents must have current dues to receive one. Request a key via the contact page or the Facebook group.",
    rules:
      "Please clean all tables and pick up all trash before leaving the pool area. Staying at the pool after the posted closing time is not permitted.",
  },
  footerNote: "Content on this site is maintained by Silverwood HOA board volunteers.",
};
