// Set NEXT_PUBLIC_BASE_PATH=/CV only in the GitHub Pages deploy
// workflow. Local builds (npm run build / npm run dev) leave it unset
// so paths stay root-relative for easy local previewing. This is the
// single source of truth for the base path — both this file and any
// code that constructs a plain (non-next/image, non-next/link) URL to
// a public/ asset must read the same env var, since next/image and
// next/link apply basePath automatically but a raw <a href> does not.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
};

export default nextConfig;
