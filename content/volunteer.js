// Volunteer page content. Plain data, like the other content files — the page
// component in app/volunteer/page.js reads from here, so copy edits never
// require touching layout.
//
// To add a photo to an opportunity, upload it to public/images/ and set
// `image` to "/images/<file>.jpg". Leave it as null and the card simply
// renders without a picture.

export const volunteer = {
  title: "Volunteer",
  subtitle: "A few hours from a few neighbors keeps our dues where they are.",

  // Wide banner across the top of the page. Set to "/images/<file>.jpg" once
  // the photo is in public/images/; null hides the banner entirely.
  // A generic "neighbors working together" photo belongs here rather than on
  // one of the opportunity cards below, where it would imply it shows that
  // specific project.
  heroImage: "/images/volunteer.jpg",
  heroImageAlt: "Neighbors working together on a neighborhood planting project",

  why: [
    "Silverwood is run by volunteers. Dues cover the two entrances, the pool and pool house, the retention pond and fence, and the landscaping contracts — and every project the neighborhood takes on itself is a project we don't have to put out for bid.",
    "That's the whole equation: the more we can accomplish on our own, the easier it is to keep dues low. A few hours from a handful of homeowners goes a long way toward saving the Association money, and it's a good excuse to meet the people on your street.",
  ],

  opportunities: [
    {
      title: "Christmas Lights",
      when: "November — date to be announced",
      image: null,
      body: [
        "We put up the holiday lights at the neighborhood entrances in November, ahead of the season. With enough hands it's a couple of hours: hanging strands, clipping them in, and running extension cords.",
        "No experience needed. Bring gloves, and a ladder if you have one.",
      ],
      helpful: "Ladders, extension cords, gloves, and a tolerance for cold fingers.",
    },
    {
      title: "Pool Fence Repair & Staining",
      when: "Scheduling now — likely a weekend work day",
      image: null,
      body: [
        "The fence around the pool needs some repair work and a fresh coat of stain. Contracted out, a job like this costs the Association real money; as a weekend work party with a few neighbors, it costs us materials.",
        "Most of it is straightforward work — replacing and securing boards, prep, then stain. Come for the whole day or an hour.",
      ],
      helpful: "Cordless drills, basic carpentry, brushes and rollers, or a sprayer if you own one.",
    },
  ],

  howToHelp: [
    "Interested in either project? Post in the neighborhood Facebook group, or reach out through the Board & Contact page and say which one you'd like to help with. We'll follow up with the date once it's set.",
    "There's no ongoing commitment — helping with one work day doesn't sign you up for anything else.",
  ],

  committeesNote:
    "Looking for something more regular? The HOA also has three standing committees — Beautification, Activities, and Welcome — that are always glad to have new members.",
};
