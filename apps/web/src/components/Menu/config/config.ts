import { ContextApi } from '@pancakeswap/localization'
import { SUPPORTED_CHAIN_IDS as POOL_SUPPORTED_CHAINS } from '@pancakeswap/pools'
import { SUPPORTED_CHAIN_IDS as POSITION_MANAGERS_SUPPORTED_CHAINS } from '@pancakeswap/position-managers'
import {
  BridgeIcon,
  DropdownMenuItems,
  DropdownMenuItemType,
  EarnFillIcon,
  EarnIcon,
  MenuItemsType,
  MoreIcon,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'
import { SUPPORT_CAKE_STAKING, SUPPORT_FARMS, SUPPORT_ONLY_BSC } from 'config/constants/supportChains'
import { getOptionsUrl } from 'utils/getOptionsUrl'
import { getPerpetualUrl } from 'utils/getPerpetualUrl'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

export const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        {
          label: t('Perps'),
          href: getPerpetualUrl({
            chainId,
            languageCode,
            isDark,
          }),
          confirmModalId: 'perpConfirmModal',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Options'),
          href: getOptionsUrl(),
          confirmModalId: 'optionsConfirmModal',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Buy Crypto'),
          href: '/buy-crypto',
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/liquidity/pools',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      supportChainIds: SUPPORT_FARMS,
      hideSubNav: true,
      items: [
        {
          label: t('Farm / Liquidity'),
          href: '/liquidity/pools',
          supportChainIds: SUPPORT_FARMS,
        },
        {
          label: t('Position Manager'),
          href: '/position-managers',
          supportChainIds: POSITION_MANAGERS_SUPPORTED_CHAINS,
        },
        {
          label: t('Staking'),
          supportChainIds: SUPPORT_CAKE_STAKING,
          items: [
            {
              label: t('CAKE Staking'),
              href: '/cake-staking',
              supportChainIds: SUPPORT_CAKE_STAKING,
            },
            {
              label: t('Syrup Pools'),
              href: '/pools',
              supportChainIds: POOL_SUPPORTED_CHAINS,
            },
          ].map((item) => addMenuItemSupported(item, chainId)),
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Bridge'),
      href: 'https://bridge.sgcdex.finance',
      icon: BridgeIcon,
      type: DropdownMenuItemType.EXTERNAL_LINK,
      image: '/images/decorations/pe2.png',
      items: [
        {
          label: t('Stargate'),
          href: 'https://bridge.sgcdex.finance/stargate',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Axelar'),
          href: 'https://bridge.sgcdex.finance/axelar',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Celer'),
          href: 'https://cbridge.celer.network/1/12360001/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Wormhole'),
          href: 'https://bridge.sgcdex.finance/wormhole',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Aptos'),
          href: 'https://docs.sgcdex.finance/readme/get-started-aptos/aptos-coin-guide',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    // {
    //   label: t('Play'),
    //   icon: GameIcon,
    //   hideSubNav: true,
    //   href: '/prediction',
    //   items: [
    //     {
    //       label: t('Prediction (BETA)'),
    //       href: '/prediction',
    //       image: '/images/decorations/prediction.png',
    //       supportChainIds: PREDICTION_SUPPORTED_CHAINS,
    //     },
    //     {
    //       label: t('Lottery'),
    //       href: '/lottery',
    //       image: '/images/decorations/lottery.png',
    //     },
    //     {
    //       label: t('Quests'),
    //       href: 'https://quest.sgcdex.finance/quests',
    //       status: { text: t('New'), color: 'success' },
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
    {
      label: '',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        {
          label: t('Info'),
          href: '/info/v3',
        },
        {
          label: t('IFO'),
          href: '/ifo',
          image: '/images/ifos/ifo-bunny.png',
        },
        {
          label: t('Voting'),
          image: '/images/voting/voting-bunny.png',
          items: [
            {
              label: t('Proposals'),
              href: '/voting',
              supportChainIds: SUPPORT_ONLY_BSC,
            },
            {
              label: t('Gauges'),
              href: '/gauges-voting',
              supportChainIds: SUPPORT_CAKE_STAKING,
            },
          ].map((item) => addMenuItemSupported(item, chainId)),
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Blog'),
          href: 'https://blog.sgcdex.finance',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Docs'),
          href: 'https://docs.sgcdex.finance',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('v4'),
          href: '/v4',
          isMobileOnly: true,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
