import { languageList, useTranslation } from '@pancakeswap/localization'
import { Text, Menu as UikitMenu, footerLinks, useModal } from '@pancakeswap/uikit'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { usePhishingBanner } from '@pancakeswap/utils/user'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'
import USCitizenConfirmModal from 'components/Modal/USCitizenConfirmModal'
import { NetworkSwitcher } from 'components/NetworkSwitcher'
import PhishingWarningBanner from 'components/PhishingWarningBanner'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useCakePrice } from 'hooks/useCakePrice'
import { usePerpUrl } from 'hooks/usePerpUrl'
import useTheme from 'hooks/useTheme'
import { IdType, useUserNotUsCitizenAcknowledgement } from 'hooks/useUserIsUsCitizenAcknowledgement'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { getOptionsUrl } from 'utils/getOptionsUrl'
import GlobalSettings from './GlobalSettings'
import { SettingsMode } from './GlobalSettings/types'
import UserMenu from './UserMenu'
import { UseMenuItemsParams, useMenuItems } from './hooks/useMenuItems'
import { getActiveMenuItem, getActiveSubMenuChildItem, getActiveSubMenuItem } from './utils'

const LinkComponent = (linkProps) => {
  return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
}

const Menu = (props) => {
  const { chainId } = useActiveChainId()
  const { isDark, setTheme } = useTheme()
  const cakePrice = useCakePrice()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useRouter()
  const perpUrl = usePerpUrl({ chainId, isDark, languageCode: currentLanguage.code })
  const [perpConfirmed] = useUserNotUsCitizenAcknowledgement(IdType.PERPETUALS)
  const [optionsConfirmed] = useUserNotUsCitizenAcknowledgement(IdType.OPTIONS)

  const [onPerpConfirmModalPresent] = useModal(
    <USCitizenConfirmModal title={t('SGCDEX Perpetuals')} id={IdType.PERPETUALS} href={perpUrl} />,
    true,
    false,
    'perpConfirmModal',
  )
  const [onOptionsConfirmModalPresent] = useModal(
    <USCitizenConfirmModal
      title={t('SGCDEX Options')}
      id={IdType.OPTIONS}
      href={getOptionsUrl()}
      desc={
        <Text mt="0.5rem">
          {t(
            'Please note that you are being redirected to an externally hosted website associated with our partner Stryke (formerly Dopex).',
          )}
        </Text>
      }
    />,
    true,
    false,
    'optionsConfirmModal',
  )
  const onSubMenuClick = useCallback<NonNullable<UseMenuItemsParams['onClick']>>(
    (e, item) => {
      const preventRedirect = () => {
        e.preventDefault()
        e.stopPropagation()
      }
      if (item.confirmModalId === 'perpConfirmModal' && !perpConfirmed) {
        preventRedirect()
        onPerpConfirmModalPresent()
        return
      }
      if (item.confirmModalId === 'optionsConfirmModal' && !optionsConfirmed) {
        preventRedirect()
        onOptionsConfirmModalPresent()
      }
    },
    [perpConfirmed, optionsConfirmed, onPerpConfirmModalPresent, onOptionsConfirmModalPresent],
  )
  const [showPhishingWarningBanner] = usePhishingBanner()

  const menuItems = useMenuItems({
    onClick: onSubMenuClick,
  })

  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })
  const activeSubChildMenuItem = getActiveSubMenuChildItem({ menuItem: activeMenuItem, pathname })

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'light' : 'dark')
  }, [setTheme, isDark])

  const getFooterLinks = useMemo(() => {
    return footerLinks(t)
  }, [t])

  return (
    <>
      <UikitMenu
        linkComponent={LinkComponent}
        rightSide={
          <>
            <GlobalSettings mode={SettingsMode.GLOBAL} />
            {/* {enabled && (
              <Suspense fallback={null}>
                <Notifications />
              </Suspense>
            )} */}
            <NetworkSwitcher />
            <UserMenu />
          </>
        }
        chainId={chainId}
        banner={showPhishingWarningBanner && typeof window !== 'undefined' && <PhishingWarningBanner />}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={currentLanguage.code}
        langs={languageList}
        setLang={setLanguage}
        cakePriceUsd={cakePrice.eq(BIG_ZERO) ? undefined : cakePrice}
        links={menuItems}
        subLinks={activeMenuItem?.hideSubNav || activeSubMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
        footerLinks={getFooterLinks}
        activeItem={activeMenuItem?.href}
        activeSubItem={activeSubMenuItem?.href}
        activeSubItemChildItem={activeSubChildMenuItem?.href}
        buyCakeLabel={t('Buy CAKE')}
        buyCakeLink="https://sgcdex.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
        {...props}
      />
    </>
  )
}

export default Menu
