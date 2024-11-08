import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | SGCDEX.Finance',
  defaultTitle: 'Game |  SGCDEX.Finance',
  description: 'Play different games on   SGCDEX.Finance NFTs',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@SGCDEX.Finance',
    site: '@SGCDEX.Finance',
  },
  openGraph: {
    title: 'SGCDEX.Finance  - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description: 'Play different games on   SGCDEX.Finance NFTs',
    images: [{ url: '/logo1.png' }],
  },
}
