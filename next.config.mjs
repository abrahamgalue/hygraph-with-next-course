/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
