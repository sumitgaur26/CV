// Update this once the site has a custom domain (or set
// NEXT_PUBLIC_SITE_URL at deploy time, as the GitHub Pages workflow
// does). Used for the canonical URL, Open Graph metadata, and the
// JSON-LD Person schema.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sumitgaur26.github.io/CV";

// Must match next.config.mjs's basePath. Needed anywhere a raw asset
// URL is built by hand — next/link and next/image apply basePath
// automatically, but next/image does NOT when images.unoptimized is
// true (required for a static export with no image-optimization
// server), and a plain <a href> never does.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
