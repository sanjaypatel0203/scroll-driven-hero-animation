/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export creates the `out` directory ready for GitHub Pages or Vercel
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
