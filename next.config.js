/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next resizes and re-encodes images on demand (WebP/AVIF) and serves the
    // size the layout actually needs. Every <Image fill> in this app passes a
    // `sizes` hint so the browser can pick correctly — without one, Next
    // assumes 100vw and ships a full-width file to a small card.
    remotePatterns: [
      { protocol: "https", hostname: "silverwoodneighborhood.org" },
    ],
  },
};

module.exports = nextConfig;
