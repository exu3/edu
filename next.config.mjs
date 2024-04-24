import { withContentlayer } from 'next-contentlayer'

/**
 * @type {import('next').NextConfig}
 */
const config = withContentlayer({
  swcMinify: true,
  compiler: {
    emotion: true,
  },
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
        destination:
          'https://cdn.glitch.me/e9a14532-952f-41d5-a8f2-de28e52b377a/crude%20potion%20poker%20instructions%20engr1020.mp4?v=1713924318307',
        permanent: true,
      },
    ]
  },
})

export default config
