import { HelpIcon, Image } from '@pancakeswap/uikit'
// import { ASSET_CDN } from 'config/constants/endpoints'

import { memo } from 'react'
import { isChainSupported } from 'utils/wagmi'

export const ChainLogo = memo(
  ({ chainId, width = 24, height = 24 }: { chainId?: number; width?: number; height?: number }) => {
    if (chainId && isChainSupported(chainId)) {
      return (
        <Image
          alt={`chain-${chainId}`}
          style={{ maxHeight: `${height}px` }}
          src={`/images/chains/${chainId}.png`}
          width={width}
          height={height}
        />
      )
    }

    return <HelpIcon width={width} height={height} />
  },
)
