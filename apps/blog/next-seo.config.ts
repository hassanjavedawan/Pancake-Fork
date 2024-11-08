import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s |  SGCDEX.Finance ',
  defaultTitle: 'Blog |  SGCDEX.Finance ',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@Volrex.Network ',
    site: '@Volrex.Network ',
  },
  openGraph: {
    title: "Volrex.Network  - Everyone's Favorite DEX",
    description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
    images: [{ url: '/logo1.png' }],
  },
}
