export const documents = [
  {
    slug: "bylaws-covenants",
    title: "Bylaws & Covenants",
    image: "https://silverwoodneighborhood.org/wp-content/uploads/2023/06/contract.jpg",
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
    image: "https://silverwoodneighborhood.org/wp-content/uploads/2023/06/BKS053667-c8536506b874467e8d0f3445ed4d6b06-e1688060063487-285x300.webp",
    summary: "Exterior changes now go through the member portal; a paper backup remains for now.",
    body: [
      "ALL REQUESTS SHOULD NOW BE DONE THROUGH THE MEMBER PORTAL. Sign up at portal.silverwoodneighborhood.org — residents say it's a big improvement over the old paper process.",
      "A downloadable backup PDF form remains available for residents having technical difficulty with the portal. Note: this paper option is expected to be phased out after the annual meeting.",
      "Completed paper forms should be mailed to Robson Property Management, 901 N Forest Ridge Blvd, Broken Arrow, OK 74014. Phone 918-994-6562, email k.reid@rp-management.com.",
    ],
  },
  {
    slug: "meeting-minutes",
    title: "Meeting Minutes",
    image: "https://silverwoodneighborhood.org/wp-content/uploads/2023/06/1652243898247-285x300.jpg",
    summary: "Archived annual meeting minutes. Current documents live in the member portal.",
    body: [
      "Current minutes and documents are available in the member portal at portal.silverwoodneighborhood.org. Historical archive below:",
    ],
    files: [
      { label: "2021 Annual Meeting Minutes (posted 6/15/23)", url: "#" },
      { label: "2022 Annual Meeting Minutes", url: "#" },
      { label: "2021 HOA Meeting Minutes", url: "#" },
      { label: "2018 Annual Meeting Minutes", url: "#" },
      { label: "Minutes of Annual Meeting (5-2-17)", url: "#" },
      { label: "Minutes of Annual Meeting (5-3-16)", url: "#" },
      { label: "2013 Meeting Minutes", url: "#" },
    ],
    note: "No meeting was held in 2020. 2019 minutes are not available. Board: replace the # links above with the actual PDF URLs from the old site or the portal.",
  },
  {
    slug: "annual-dues",
    title: "Annual Dues",
    image: "https://silverwoodneighborhood.org/wp-content/uploads/2023/06/shutterstock_1925972186-285x300.jpg",
    summary: "Dues are mandatory and due in full by March 1 each year.",
    body: [
      "Silverwood HOA annual dues are mandatory and due in full by March 1 of every year. Per the HOA bylaws, interest may be charged on late payments and liens may be filed against properties with unpaid dues.",
      "Dues support two neighborhood entrances (one with a guardhouse), the pool and pool house, and a retention pond with surrounding fence on the west side of the community.",
      "Pay and manage dues through the member portal at portal.silverwoodneighborhood.org.",
    ],
  },
  {
    slug: "newsletters",
    title: "Newsletters",
    image: "https://silverwoodneighborhood.org/wp-content/uploads/2023/07/newsletter-285x300.jpg",
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
