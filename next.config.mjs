/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Zaroori hai Cloudflare Pages ke liye
  images: {
    unoptimized: true, // Image optimization disable karein static export ke liye
  },
};

export default nextConfig;
