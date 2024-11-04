import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s |  Volrex.Network ',
  defaultTitle: ' Volrex.Network ',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@ Volrex.Network ',
    site: '@ Volrex.Network ',
  },
  openGraph: {
    title: "🥞  Volrex.Network  - Everyone's Favorite DEX",
    description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
    images: [{ url: 'https://assets.sgcdex.finance/web/og/v2/hero.jpg' }],
  },
}
