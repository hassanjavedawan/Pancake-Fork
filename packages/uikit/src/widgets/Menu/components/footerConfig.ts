import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("Ecosystem"),
    items: [
      {
        label: t("Trade"),
        href: "https://sgcdex.finance/swap",
      },
      {
        label: t("Earn"),
        href: "https://sgcdex.finance/liquidity/pools",
      },
      {
        label: t("Play"),
        href: "https://sgcdex.finance/prediction",
      },
      // {
      //   label: t("veCAKE"),
      //   href: "https://sgcdex.finance/cake-staking",
      // },
      // {
      //   label: t("Merchandise"),
      //   href: "https://merch.sgcdex.finance/",
      // },
    ],
  },
  {
    label: "Business",
    items: [
      // {
      //   label: t("CAKE Incentives"),
      //   href: "https://docs.sgcdex.finance/ecosystem-and-partnerships/business-partnerships/syrup-pools-and-farms",
      // },
      {
        label: t("Staking Pools"),
        href: "https://sgcdex.finance/pools",
      },
      // {
      //   label: t("Token Launches"),
      //   href: "https://docs.sgcdex.finance/ecosystem-and-partnerships/business-partnerships/initial-farm-offerings-ifos",
      // },
      // {
      //   label: t("Brand Assets"),
      //   href: "https://docs.sgcdex.finance/ecosystem-and-partnerships/brand",
      // },
    ],
  },
  // {
  //   label: t("Developers"),
  //   items: [
  //     {
  //       label: t("Contributing"),
  //       href: "https://docs.sgcdex.finance/developers/contributing",
  //     },
  //     {
  //       label: t("Github"),
  //       href: "https://github.com/pancakeswap",
  //     },
  //     {
  //       label: t("Bug Bounty"),
  //       href: "https://docs.sgcdex.finance/developers/bug-bounty",
  //     },
  //     {
  //       label: t("V4"),
  //       href: "https://sgcdex.finance/v4",
  //     },
  //   ],
  // },
  {
    label: t("Support"),
    items: [
      {
        label: t("Get Help"),
        href: "https://docs.sgcdex.finance/contact-us/customer-support",
      },
      {
        label: t("Troubleshooting"),
        href: "https://docs.sgcdex.finance/readme/help/troubleshooting",
      },
      {
        label: t("Documentation"),
        href: "https://docs.sgcdex.finance/",
      },
      {
        label: t("Audits"),
        href: "https://docs.sgcdex.finance/readme/audits",
      },
      {
        label: t("Legacy products"),
        href: "https://docs.sgcdex.finance/products/legacy-products",
      },
    ],
  },
  {
    label: t("About"),
    items: [
      // {
      //   label: t("Tokenomics"),
      //   href: "https://docs.sgcdex.finance/governance-and-tokenomics/cake-tokenomics",
      // },
      // {
      //   label: t("CAKE Emission Projection"),
      //   href: "https://analytics.sgcdex.finance/",
      // },
      {
        label: t("Blog"),
        href: "https://blog.sgcdex.finance/",
      },
      {
        label: t("Careers"),
        href: "https://docs.sgcdex.finance/team/become-a-chef",
      },
      {
        label: t("Terms Of Service"),
        href: "https://docs.sgcdex.finance/terms-of-service",
      },
    ],
  },
];
