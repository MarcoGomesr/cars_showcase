/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
        port: ''
      }
    ],
    typescript: {
      ignoreBuildErrors: true
    }
  }
}

module.exports = nextConfig
