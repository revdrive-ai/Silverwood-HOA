export const newResidentPages = [
  {
    slug: "important-telephone-numbers",
    title: "Important Telephone Numbers",
    image: "/images/phone.jpg",
    summary: "Key local numbers for Silverwood residents. All area code 918 unless noted.",
    groups: [
      { heading: "Emergency Services", items: [
        { label: "Emergency", value: "911" },
        { label: "Bixby Police", value: "366-8294" },
        { label: "Bixby Fire", value: "366-8600" },
        { label: "Ambulance", value: "596-3010" },
        { label: "Poison Control", value: "800-764-7661" },
      ]},
      { heading: "Phone Service", items: [
        { label: "Bixby Telephone (Main)", value: "366-8000" },
        { label: "Bixby Telephone (Repair)", value: "366-7000" },
      ]},
      { heading: "Water / Sewer", items: [
        { label: "Bixby Public Works", value: "366-4430" },
      ]},
      { heading: "Electric", items: [
        { label: "PSO", value: "888-216-3523" },
      ]},
      { heading: "Gas", items: [
        { label: "ONG", value: "834-8000" },
      ]},
      { heading: "Trash", items: [
        { label: "Controlled Waste", value: "582-1147" },
        { label: "American Waste Control", value: "446-0023" },
      ]},
    ],
    note: "All area code 918 unless otherwise stated.",
  },
  {
    slug: "bixby-ordinances",
    title: "Bixby Ordinances Impacting Silverwood",
    image: "/images/ordinances.jpg",
    summary: "City ordinances that complement the neighborhood's own covenants.",
    body: [
      "Tree maintenance (Code 7-1-2): branches over sidewalks must be at least 8 feet high; branches over roads must reach at least 10 feet, to protect pedestrians and keep sightlines clear.",
      "Sidewalk obstruction: it is unlawful to block sidewalks with vehicles, sports equipment, or other items — particularly important so kids aren't forced into the street.",
      "Yard waste (Code 7-1-6): grass clippings, leaves, dirt, and debris may not be deposited on streets or sidewalks; blown clippings can damage storm water drainage. This also covers fireworks debris.",
      "To report a violation, use the Bixby Police website or the Bixby Connect mobile app (iOS and Android).",
    ],
  },
  {
    slug: "tornado-siren-locations",
    title: "Tornado Siren Locations",
    image: null,
    summary: "Siren locations and map for the City of Bixby.",
    body: [
      "A City of Bixby document shows the list of siren locations and a map for the area.",
      "The City of Bixby Emergency Management Office works to mitigate loss of life and property in emergencies such as tornadoes, storms, wildfires, floods, and man-made disasters.",
    ],
    files: [
      { label: "City of Bixby Warning Sirens Map (PDF)", url: "#" },
    ],
    note: "Board: link the current PDF from the old site or the City of Bixby.",
  },
  {
    slug: "power-outage",
    title: "What To Do In a Power Outage",
    image: "/images/pso-logo.jpg",
    imageFit: "contain",
    summary: "Guidance from PSO for staying safe during an outage.",
    body: [
      "Report an outage using your cellphone if possible, via the PSO website.",
      "Disconnect major appliances to avoid damage from power surges, and keep one light switched on so you'll know when power returns.",
      "Refuel heating equipment and generators outdoors only, away from anything that could ignite. Never run lanterns, heaters, or fuel stoves without proper airflow, and never burn charcoal indoors — carbon monoxide risk.",
      "Stay clear of downed lines and damaged equipment, and keep at least 10 feet from power lines when clearing debris.",
      "Keep candles and oil lamps away from children.",
      "Emergency kit essentials: flashlights with batteries, a battery-powered radio, candles, drinking water, a portable heater, camping gear, canned food with a manual can opener, and instruction manuals for motorized devices like garage doors and generators.",
    ],
  },
  {
    slug: "no-knock-list",
    title: "No-Knock List for Bixby Residents",
    image: "/images/no-knock-list.jpg",
    summary: "Register with the City to keep door-to-door solicitors away.",
    body: [
      "Following recent litigation, it's uncertain whether HOAs can continue to represent residents on door-to-door sales restrictions. The City of Bixby recommends residents take two steps: display a 'No Solicitation' sign, and register with the City's No-Knock database.",
      "Permit holders for door-to-door business are given a copy of the No-Knock List and must have their permit visible while conducting business. Register even if you're unsure whether you've registered before.",
    ],
    files: [
      { label: "Register on the City of Bixby No-Knock List", url: "https://www.bixbyok.gov/FormCenter/Administrative-9/No-Knock-List-81" },
    ],
  },
];

export function getResidentPageBySlug(slug) {
  return newResidentPages.find((p) => p.slug === slug);
}
