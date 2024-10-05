import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s |  Volrex.Network ',
  defaultTitle: 'Game |  Volrex.Network ',
  description: 'Play different games on  Volrex.Network , using CAKE and  Volrex.Network  NFTs',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@ Volrex.Network ',
    site: '@ Volrex.Network ',
  },
  openGraph: {
    title: ' Volrex.Network  - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description: 'Play different games on  Volrex.Network , using CAKE and  Volrex.Network  NFTs',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg' }],
  },
}
