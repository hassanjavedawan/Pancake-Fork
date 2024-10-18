import { ChainId } from '@pancakeswap/chains'
import {
  arbitrum,
  base,
  bsc,
  mainnet as ethereum,
  fantom,
  optimism,
  polygonZkEvm,
  moonbeam,
  // linea,
  // opBNB,
  zkSync,
  celo,
  gnosis,
  coreDao,
} from 'wagmi/chains'

export const SUPPORT_ONLY_BSC = [ChainId.BSC]

export const targetChains = [
  ethereum,
  bsc,
  zkSync,
  arbitrum,
  polygonZkEvm,
  base,
  fantom,
  optimism,
  moonbeam,
  celo,
  gnosis,
  coreDao,
  // linea,
  // opBNB,
]

export const predictionTaskSupportChains = [bsc]

export const SUPPORTED_CHAIN = [
  ChainId.ETHEREUM,
  ChainId.BSC,
  ChainId.ZKSYNC,
  ChainId.ARBITRUM_ONE,
  ChainId.BASE,
  ChainId.POLYGON_ZKEVM,
  ChainId.FANTOM,
  ChainId.AVALANCHE,
  ChainId.OPTIMISM,
  ChainId.MOONBEAM,
  ChainId.CELO,
  ChainId.GNOSIS,
  ChainId.COREDAO,

  // ChainId.LINEA,
  // ChainId.OPBNB,
]
