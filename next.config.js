/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: { domains: ['images.microcms-assets.io'] },
  images: {
    loader: 'custom',
    domains: ['images.microcms-assets.io'],
  },
  basePath:'./'
};

module.exports = nextConfig
