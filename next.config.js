/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "placeimg.com",
      "m.media-amazon.com",
      "resources.claroshop.com",
      "source.unsplash.com",
    ],
  },
}

module.exports = nextConfig
