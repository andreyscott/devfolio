/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['andreyscott.vercel.app', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
