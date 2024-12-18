import { ChainId } from '@pancakeswap/chains'
import { Native, NativeCurrency } from '@pancakeswap/sdk'
import { useMemo } from 'react'
import { useActiveChainId } from './useActiveChainId'

export default function useNativeCurrency(overrideChainId?: ChainId): NativeCurrency {
  const { chainId } = useActiveChainId()
  return useMemo(() => {
    try {
      return Native.onChain(overrideChainId ?? chainId ?? ChainId.VOX)
    } catch (e) {
      return Native.onChain(ChainId.VOX)
    }
  }, [overrideChainId, chainId])
}
