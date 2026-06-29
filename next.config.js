/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'fleks-epoxy-website.vercel.app',
          },
        ],
        destination: 'https://fleksepoxy.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
