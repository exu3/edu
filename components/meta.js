import Head from 'next/head'

const Meta = ({
  title = '@exu3/edu',
  name = '@exu3/edu',
  description = 'My coursework at UVM.',
  image = `https://${
    process.env.NEXT_PUBLIC_VERCEL_URL ?? 'edu.ella.cx'
  }/api/card?title=Coursework`,
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={name} />
    <meta name="twitter:title" content={name} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="@exu3/edu" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <link
      rel="alternate"
      type="application/rss+xml"
      href="https://edu.ella.cx/feed.xml"
    />
  </Head>
)

export default Meta
