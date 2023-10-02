/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["source.unsplash.com", "images.unsplash.com"],
  },
}

module.exports = nextConfig
