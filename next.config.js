/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: { domains: ['images.microcms-assets.io'] },
  images: {
    loader: 'custom',
    domains: ['images.microcms-assets.io'],
  },
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? '/repository_name' : '',
};

module.exports = nextConfig
