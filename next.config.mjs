import { withContentlayer } from 'next-contentlayer'

/**
 * @type {import('next').NextConfig}
 */
const config = withContentlayer({
  swcMinify: true,
  compiler: { emotion: true },
  pageExtensions: ['js', 'ts', 'tsx', 'mdx'],
  images: {
    domains: ['cdn.glitch.com', 'www.icloud.com'],
  },
  async rewrites() {
    return []
  },
  async redirects() {
    return [
      {
        source: '/20240423-engr1020',
        destination: 'https://www.youtube.com/watch?v=pwBlMwo_roQ',
        permanent: true,
      },
    ]
  },
  webpack(config) {
    config.ignoreWarnings = [
      {
        message:
          /Parsing of .*getConfig\/index\.js for build dependencies failed/,
      },
    ]
    return config
  },
})

export default config
