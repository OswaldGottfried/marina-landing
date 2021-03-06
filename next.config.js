/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: [
      'images.unsplash.com',
      'localhost',
      'blog.molitvina.ru',
      'static.ghost.org',
    ],
  },
}

module.exports = nextConfig
