import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | SGCDEX',
  defaultTitle: 'PancakeSGCDEXSwap',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@SGCDEX',
    site: '@SGCDEX',
  },
  openGraph: {
    title: "🥞 Volrex.Network Aptos - Everyone's Favorite DEX",
    description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
    images: [{ url: 'https://aptos.sgcdex.finance/images/hero.jpeg' }],
  },
}
