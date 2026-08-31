export const news = [
  {
    slug: "new-management-wm-2026",
    title: "New Management Company Starting October 1, 2026",
    date: "2026",
    image: "/images/management.jpg",
    summary: "Starting October 1st, 2026 our new management company will be W&M HOA Property Management. More details will be sent to each homeowner in September.",
    body: [
      "Starting October 1st, 2026 our new management company will be W&M HOA Property Management.",
      "More details will be sent to each homeowner in September.",
    ],
  },
  {
    slug: "annual-meeting-2027",
    title: "Annual Meeting 2027",
    date: "2027",
    image: "/images/annual-meeting.jpg",
    summary: "The 2027 Annual Meeting is set for May 2027. Time and location TBD.",
    body: [
      "The Silverwood HOA's 2027 Annual Meeting will be held in May 2027. Time and location are still to be determined.",
      "Residents will receive mailed notices from Robson Property Management containing information about adding agenda items, nominations to serve on the board, and proxy voting forms.",
      "Members who are unable to attend in person are encouraged to complete and return a proxy form prior to the meeting.",
    ],
  },
  {
    slug: "garage-sale",
    title: "Neighborhood Garage Sale",
    date: "2027",
    image: "/images/garage-sale.jpg",
    summary: "We are planning to schedule the 2027 Garage sales in April so it is timed with nearby communities.",
    body: [
      "We are planning to schedule the 2027 Garage sales in April so it is timed with nearby communities.",
      "Banners will be displayed around the neighborhood during the week of the sale. Watch the Facebook group and the member portal for reminders once the date is confirmed.",
    ],
  },
  {
    slug: "new-management-robson",
    title: "Silverwood Now Managed by Robson Property Management",
    date: "2024",
    image: "/images/management.jpg",
    summary: "Robson Property Management (RPM) has been hired by the Board as the new managing agent.",
    body: [
      "Robson Property Management (RPM) has been hired by your Board of Directors as the new managing agent, handling the day-to-day operations of the Association.",
      "Residents should update their records with the new management contact — previous contact channels are no longer monitored for Association communications.",
      "Management contact: 901 N Forest Ridge Blvd, Broken Arrow, OK 74014 · 918-994-6562 · Shari Hawkins, s.hawkins@rp-management.com · www.rp-management.com",
    ],
  },
  {
    slug: "pool-information",
    title: "Pool Information",
    date: "Seasonal",
    image: "/images/pool.jpg",
    summary: "Pool hours, key access, and rules for the season.",
    body: [
      "The Board has voted to extend the pool season an extra week — the pool closes Sunday, September 13th at 9 PM for the season. This may get extended depending on usage and the weather; watch for more announcements.",
      "The community pool operates seasonally from Memorial Day weekend through Labor Day weekend. Hours vary by day: Mondays 1–9 PM (pool cleaning day), Tuesday–Thursday 9 AM–9 PM, Friday–Sunday 9 AM–10 PM.",
      "Electronic pool keys are available from Tim Sanderson or a board member. Residents must have current dues to obtain access — request a key through the contact page or via the Facebook group.",
      "Please clean all tables and pick up all trash before leaving the pool area. Staying at the pool after the posted closing time is not permitted.",
      "The exact closing date each season depends on weather and usage, since operating costs increase with extended hours. Watch for closure notices via Facebook and email.",
    ],
  },
  {
    slug: "keep-our-neighborhood-clean",
    title: "Keep Our Neighborhood Clean",
    date: "Reminder",
    image: null,
    summary: "A few covenant reminders that keep Silverwood looking its best.",
    body: [
      "Weed control: please keep yards, flower beds, tree circles, and street cracks in front of your property free of weeds.",
      "Trash cans: containers can only be visible on trash day and should otherwise be stored in the garage or behind a fence.",
      "Basketball goals: goals positioned over or facing the street are not permitted, per covenant restrictions on street easements and utilities.",
      "Pet waste: please clean up after pets on walks, and don't place waste bags in other residents' trash containers.",
      "Sidewalk clearance: per Bixby city code, tree branches over sidewalks must be trimmed to at least 8 feet of clearance for pedestrian safety.",
    ],
  },
  {
    slug: "silverwood-committees",
    title: "Silverwood Committees — Volunteers Welcome",
    date: "Ongoing",
    image: null,
    summary: "The HOA is looking for volunteers for beautification, activities, and welcoming new neighbors.",
    body: [
      "The HOA is always looking for volunteers to help in a number of areas. Three established committees welcome new members:",
      "Beautification — maintaining green spaces, the pool area, and decorative projects for special occasions beyond regular contracted landscaping.",
      "Activities / Parades / Block Parties — organizing social gatherings and neighborhood events, including kids' parades.",
      "Welcome — serving as official greeters for new residents moving into Silverwood.",
      "Interested in joining a committee, or want to suggest a new one? Reach out through the Board & Contact page.",
    ],
  },
];

export function getNewsBySlug(slug) {
  return news.find((n) => n.slug === slug);
}
