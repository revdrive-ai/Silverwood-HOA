// Site-wide settings. This file is intentionally plain data (no logic) so it can
// later be swapped for a CMS-driven source without touching page components.

const memberPortal = "https://wandmhoapropmngmt.appfolio.com/connect";

export const site = {
  name: "Silverwood HOA",
  established: 2001,
  homes: 125,
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
    memberPortal,
    facebookGroup: "https://www.facebook.com/groups/187414009235035",
  },
  management: {
    company: "W&M Consulting, LLC",
    dba: "dba W&M HOA Management",
    // The name residents know; used in the footer.
    shortName: "W&M HOA Management",
    address: "PO Box 140432, Broken Arrow, OK 74014",
    phone: "918-928-9917",
    contacts: [
      { name: "Suzie Smith", role: "Main contact", email: "admin@wandmconsulting.com" },
      { name: "T. James Weinacht, CPA, CGMA, CFE", role: "Community Manager" },
    ],
  },
  boardEmail: "silverwoodhoaboardbixby@gmail.com",
  board: [
    { role: "President", name: "Open" },
    { role: "Vice President", name: "Gary Yaeger" },
    { role: "Treasurer", name: "Randy Pronschinske" },
    { role: "Secretary", name: "Tim Sanderson" },
    { role: "Member at Large", name: "Nathan Paul" },
    { role: "Member at Large", name: "Laura Chrismon" },
    { role: "Member at Large", name: "Roberto Rodriguez" },
  ],
  // The three cards under the home-page photo. `icon` is one of: dues, pool,
  // meeting. `note` is optional: when present it shows as an amber notice
  // (use it for time-sensitive changes, and delete it once it's out of date).
  // `link` is optional.
  quickFacts: [
    {
      icon: "dues",
      label: "Annual dues",
      value: "Due in full by March 1",
      body: "Each year. Pay early to avoid late fees.",
      link: { label: "Pay Online →", href: memberPortal },
    },
    {
      icon: "pool",
      label: "Pool season",
      value: "Memorial Day – Labor Day",
      note: "Extended: Closes Sept 13 at 9 PM",
      // Google Calendar all-day event, Memorial Day weekend–Labor Day 2027
      // (end date is the day after). Update the dates each year.
      link: {
        label: "+ Add to Calendar",
        href: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Silverwood%20Pool%20Season&dates=20270529/20270907&location=Silverwood%20Pool%2C%20Bixby%2C%20OK",
      },
    },
    {
      icon: "meeting",
      label: "Next Annual Meeting",
      value: "May 2027",
      body: "Time & Location TBD — check back for updates.",
      link: { label: "Meeting details →", href: "/news/annual-meeting-2027" },
    },
  ],
  // The green band of four links on the home page. `icon` is one of:
  // bylaws, arc, trash, pool.
  homeQuickLinks: [
    { icon: "bylaws", label: "Bylaws & CC&Rs", href: "/documents/bylaws-covenants" },
    { icon: "arc", label: "ARC Request Form", href: "/documents/arc-request-form" },
    { icon: "trash", label: "Trash Schedule", href: "/new-resident/important-telephone-numbers" },
    { icon: "pool", label: "Pool Rules", href: "/news/pool-information" },
  ],
  footerNote: "All rights reserved",
};
