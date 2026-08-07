const NO_KNOCK_IMG_B64 =
  "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";

export const newResidentPages = [
  {
    slug: "important-telephone-numbers",
    title: "Important Telephone Numbers",
    image: "https://silverwoodneighborhood.org/wp-content/uploads/2023/06/phone.jpg",
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
    image: "https://silverwoodneighborhood.org/wp-content/uploads/2023/06/IMG_2496-370x261.jpg",
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
    image: null,
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
    image: "data:image/jpeg;base64," + NO_KNOCK_IMG_B64,
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
