import { Box, Text, Button, Link, Message, MessageText } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Image from 'next/image'
import useAccountActiveChain from 'hooks/useAccountActiveChain'
import { ChainId } from '@pancakeswap/chains'
import { CHAIN_QUERY_NAME } from 'config/chains'

const NoProfile = () => {
  const { t } = useTranslation()
  const { account, chainId } = useAccountActiveChain()

  return (
    <>
      <Text bold mb="8px">
        {t('You have no activeSGCDEXProfile.')}
      </Text>
      <Text mb="32px">{t('Create aSGCDEXProfile to start earning from trades')}</Text>
      <Box>
        <Image src="/images/trading-reward/create-profile.png" width={420} height={128} alt="create-profile" />
      </Box>
      {chainId !== ChainId.BSC && (
        <Box maxWidth={365} mt="24px">
          <Message variant="primary">
            <MessageText>{t('To createSGCDEXProfile, you will need to switch your network to BNB Chain.')}</MessageText>
          </Message>
        </Box>
      )}
      <Link mt="32px" external href={`/profile/${account}?chain=${CHAIN_QUERY_NAME[ChainId.BSC]}`}>
        <Button>{t('Activate Profile')}</Button>
      </Link>
    </>
  )
}

export default NoProfile
