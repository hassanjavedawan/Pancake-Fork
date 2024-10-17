import { ChainId } from '@pancakeswap/chains'
import type { Address, Hash } from 'viem'

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'

const FACTORY_ADDRESS_ETH = '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  [ChainId.GOERLI]: FACTORY_ADDRESS_ETH,
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.BSC_TESTNET]: '0x6725F303b657a9451d8BA641348b6761A6CC7a17',
  [ChainId.ARBITRUM_ONE]: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
  [ChainId.ARBITRUM_GOERLI]: '0x333EAE459075b1d7dE8eb57997b5d4eee5F1070a',
  [ChainId.POLYGON_ZKEVM]: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0xBA40c83026213F9cbc79998752721a0312bdB74a',
  [ChainId.ZKSYNC]: '0xd03D8D566183F0086d8D09A84E1e30b58Dd5619d',
  [ChainId.ZKSYNC_TESTNET]: '0x48a33610Cd0E130af2024D55F67aE72a8C51aC27',
  [ChainId.LINEA]: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
  [ChainId.LINEA_TESTNET]: '0xB6FAfd4ADbCd21cF665909767e0eD0D05709abfB',
  [ChainId.OPBNB]: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
  [ChainId.OPBNB_TESTNET]: '0x776e4bD2f72de2176A59465e316335aaf8ed4E8F',
  [ChainId.BASE]: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
  [ChainId.BASE_TESTNET]: '0x715303D2eF7dA7FFAbF637651D71FD11d41fAf7F',
  [ChainId.SCROLL_SEPOLIA]: '0x2B3C5df29F73dbF028BA82C33e0A5A6e5800F75e',
  [ChainId.SEPOLIA]: '0x1bdc540dEB9Ed1fA29964DeEcCc524A8f5e2198e',
  [ChainId.ARBITRUM_SEPOLIA]: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
  [ChainId.BASE_SEPOLIA]: '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E',
} as const satisfies Record<ChainId, Address>

export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
export const INIT_CODE_HASH_MAP = {
  [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH,
  [ChainId.GOERLI]: INIT_CODE_HASH_ETH,
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.BSC_TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.ARBITRUM_ONE]: INIT_CODE_HASH_ETH,
  [ChainId.ARBITRUM_GOERLI]: INIT_CODE_HASH_ETH,
  [ChainId.POLYGON_ZKEVM]: INIT_CODE_HASH_ETH,
  [ChainId.POLYGON_ZKEVM_TESTNET]: INIT_CODE_HASH_ETH,
  [ChainId.ZKSYNC]: '0x0100045707a42494392b3558029b9869f865ff9df8f375dc1bf20b0555093f43',
  [ChainId.ZKSYNC_TESTNET]: '0x0100045707a42494392b3558029b9869f865ff9df8f375dc1bf20b0555093f43',
  [ChainId.LINEA]: INIT_CODE_HASH_ETH,
  [ChainId.LINEA_TESTNET]: INIT_CODE_HASH_ETH,
  [ChainId.OPBNB]: INIT_CODE_HASH_ETH,
  [ChainId.OPBNB_TESTNET]: INIT_CODE_HASH_ETH,
  [ChainId.BASE]: INIT_CODE_HASH_ETH,
  [ChainId.BASE_TESTNET]: '0xa5934690703a592a07e841ca29d5e5c79b5e22ed4749057bb216dc31100be1c0',
  [ChainId.SCROLL_SEPOLIA]: INIT_CODE_HASH_ETH,
  [ChainId.SEPOLIA]: INIT_CODE_HASH_ETH,
  [ChainId.ARBITRUM_SEPOLIA]: INIT_CODE_HASH_ETH,
  [ChainId.BASE_SEPOLIA]: INIT_CODE_HASH_ETH,
  [ChainId.FANTOM]: '0xe242e798f6cee26a9cb0bbf24653bf066e5356ffeac160907fe2cc108e238617',
} as const satisfies Record<ChainId, Hash>
