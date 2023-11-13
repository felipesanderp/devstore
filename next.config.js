/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErros: true,
  },
  images: {
    domains: ['github.com'],
  },
}

module.exports = nextConfig
