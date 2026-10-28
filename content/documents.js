export const documents = [
  {
    slug: "bylaws-covenants",
    title: "Bylaws & Covenants",
    image: "/images/bylaws.jpg",
    summary: "The governing documents for Silverwood HOA, plus adopted amendments.",
    body: [
      "This page is the central repository for Silverwood HOA's governing documents — the original bylaws and covenants, plus amendments adopted since.",
    ],
    files: [
      { label: "Silverwood Bylaws and Covenants", url: "https://silverwoodneighborhood.org/wp-content/uploads/2023/06/Silverwood-By-Laws-and-Convenants.pdf" },
      { label: "Amendment 1 (May 7, 2012)", url: "https://silverwoodneighborhood.org/wp-content/uploads/2023/06/2012.05.07-Amended-Bylaws-Silverwood.pdf" },
      { label: "Amendment 3 (August 9, 2019)", url: "https://silverwoodneighborhood.org/wp-content/uploads/2023/06/2nd-ByLaw-Amendment-SIGNED-080919.docx-3.pdf" },
    ],
  },
  {
    slug: "arc-request-form",
    title: "Architectural Committee (ARC) Request Form",
    image: "/images/arc-request.webp",
    summary: "Exterior changes now go through the member portal; a paper backup remains for now.",
    body: [
      "ALL REQUESTS SHOULD NOW BE DONE THROUGH THE MEMBER PORTAL. Sign in or sign up with the Member Portal button at the top of any page on this site.",
      "A downloadable backup PDF form remains available for residents having technical difficulty with the portal. Note: this paper option is expected to be phased out after the annual meeting.",
      "Completed paper forms should be mailed to Suzie Smith, W&M Consulting, LLC (dba W&M HOA Management), PO Box 140432, Broken Arrow, OK 74014. Phone 918-928-9917, email admin@wandmconsulting.com.",
    ],
  },
  {
    slug: "meeting-minutes",
    title: "Meeting Minutes",
    image: "/images/meeting-minutes.jpg",
    summary: "Annual and board meeting minutes, newest first.",
    body: [
      "Annual and board meeting minutes, newest first. Financials and other member documents are in the member portal (Member Portal button at the top of any page).",
    ],
    files: [
      { label: "June 2026 Board Meeting Minutes (June 8, 2026)", url: "/documents/2026-06-08-board-meeting-minutes.pdf" },
      { label: "2026 Annual Meeting Minutes (May 12, 2026)", url: "/documents/2026-annual-meeting-minutes.pdf" },
      { label: "February 2026 Board Meeting Minutes (Feb 25, 2026)", url: "/documents/2026-02-25-board-meeting-minutes.pdf" },
      { label: "June 2025 Board Meeting Minutes (June 30, 2025)", url: "/documents/2025-06-30-board-meeting-minutes.pdf" },
      { label: "2025 Annual Meeting Minutes (May 15, 2025)", url: "/documents/2025-annual-meeting-minutes.pdf" },
      { label: "2024 Annual Meeting Minutes (May 23, 2024)", url: "/documents/2024-annual-meeting-minutes.pdf" },
    ],
  },
  {
    slug: "annual-dues",
    title: "Annual Dues",
    image: "/images/annual-dues.jpg",
    summary: "Dues are mandatory and due in full by March 1 each year.",
    body: [
      "Silverwood HOA annual dues are mandatory and due in full by March 1 of every year. Per the HOA bylaws, interest may be charged on late payments and liens may be filed against properties with unpaid dues.",
      "Dues support two neighborhood entrances (one with a guardhouse), the pool and pool house, and a retention pond with surrounding fence on the west side of the community.",
      "Pay and manage dues through the member portal (Member Portal button at the top of any page).",
    ],
  },
  {
    slug: "newsletters",
    title: "Newsletters",
    image: "/images/newsletters.jpg",
    summary: "Quarterly community newsletter — now distributed by email.",
    body: [
      "As of 2024, Silverwood has moved to all-email newsletters. Recent issues:",
    ],
    files: [
      { label: "Fall 2024 Newsletter", url: "#" },
      { label: "Spring 2024 Newsletter", url: "#" },
      { label: "Winter 2024 Newsletter", url: "#" },
      { label: "Fall 2023 Newsletter (PDF)", url: "#" },
      { label: "Summer 2023 Newsletter (PDF)", url: "#" },
    ],
    note: "Board: attach the current issue's PDF/email link here each quarter.",
  },
];

export function getDocumentBySlug(slug) {
  return documents.find((d) => d.slug === slug);
}
