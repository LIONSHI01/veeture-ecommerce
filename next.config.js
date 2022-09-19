/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
};

module.exports = nextConfig;
