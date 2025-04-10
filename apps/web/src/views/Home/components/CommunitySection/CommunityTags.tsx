import {
  DiscordIcon,
  InstagramIcon,
  Link,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@pancakeswap/uikit'
import { cloneElement } from 'react'
import { styled } from 'styled-components'

const CommunityWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 12px;
  justify-content: center;
`
const CommunityTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.blue};
  width: 32px;
  height: 32px;
  transition: background-color 0.25s ease-in-out;
  svg path {
    fill: ${({ theme }) => theme.colors.primary};
    transition: fill 0.25s ease-in-out;
  }
  &:hover {
    svg path {
      fill: ${({ theme }) => (theme.isDark ? '#000000' : '#000000')};
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 48px;
    height: 48px;
  }
`
const communityData = [
  { icon: <TwitterIcon />, href: 'https://twitter.com/', alt: 'TwitterIcon' },
  { icon: <TelegramIcon />, href: 'https://t.me/', alt: 'TelegramIcon' },
  { icon: <DiscordIcon />, href: 'https://discord.gg/', alt: 'DiscordIcon' },
  { icon: <InstagramIcon />, href: 'https://www.instagram.com/', alt: 'InstagramIcon' },
  { icon: <RedditIcon />, href: 'https://www.reddit.com/r//', alt: 'RedditIcon' },
  { icon: <YoutubeIcon />, href: 'https://www.youtube.com/@', alt: 'YoutubeIcon' },
]

export const CommunityTags: React.FC = () => {
  return (
    <CommunityWrapper>
      {communityData.map((item) => (
        <Link href={item.href} key={item.alt} external>
          <CommunityTag>{cloneElement(item.icon, { width: 18 })}</CommunityTag>
        </Link>
      ))}
    </CommunityWrapper>
  )
}
