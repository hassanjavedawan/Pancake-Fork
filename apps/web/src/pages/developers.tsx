/* eslint-disable react/no-unescaped-entities */
import { Flex, Link, Text } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

export const Container = styled(Flex)`
  display: grid;
  max-width: 650px;
  margin: 50px auto;
  padding: 0px 16px;

  h1 {
    font-size: 2.25rem;
    font-width: bold;
  }

  h3 {
    margin: 1em 0px 0.5em;
    font-weight: bold;
  }

  p {
    opacity: 0.94;
    margin-bottom: 1em;
    margin-top: 1em;
    line-height: 24px;
  }

  li {
    margin: 0.8em 0px 0px 1em;
    color: ${({ theme }) => theme.colors.text};
  }
`

const Developers = () => {
  return (
    <Container>
      <Text as="p">
        If you’re aiming to build tokens on the <strong>SGC Blockchain</strong> , which will soon be rebranded as the{' '}
        <strong>Volrex Chain,</strong> you’ll find a variety of open-source blockchain technologies and the{' '}
        <strong>SGCDEX.Finance</strong> decentralized exchange (DEX) provide a solid foundation for both token
        development and trading.X.
      </Text>

      <Text as="h3">SGC Blockchain – Transitioning to Volrex Chains</Text>

      <ol>
        <li>
          <strong>Blockchain:</strong> The SGC Blockchain, set to be rebranded as the Volrex Chain, is a
          well-established open-source blockchain that supports the creation of tokens through the
          <strong> VRC-20 </strong> standard for fungible tokens and the
          <strong> VRC-721/1155 </strong> standards for non-fungible tokens (NFTs). With a mature development ecosystem
          and strong community backing, it serves as an excellent platform for creating and deploying digital assets.
        </li>
        <li>
          <strong>Development Tools</strong> Developers can take advantage of a suite of popular blockchain development
          tools. <strong>Solidity</strong> is utilized for writing smart contracts, while <strong>Truffle</strong> and{' '}
          <strong>Hardhat</strong> offer frameworks for developing, testing, and deploying blockchain applications.
          Additionally, <strong>OpenZeppelin</strong> provides pre-audited smart contract libraries that enhance
          security and efficiency in token development on the Volrex Chain.
        </li>
        <li>
          <strong>Decentralized Exchange:</strong> <strong>SGCDEX.Finance</strong> stands out as the premier open-source
          decentralized exchange designed specifically for the Volrex Chain/SGC Blockchain. It harnesses the power of
          smart contracts to enable seamless token swaps and liquidity pools, ensuring a reliable and transparent
          platform for decentralized trading.
        </li>
      </ol>
      <Text as="p">
        The forthcoming rebranding to Volrex Chain, combined with SGCDEX.Finance, creates a dynamic ecosystem for the
        development, management, and exchange of both fungible and non-fungible tokens. This robust infrastructure is
        tailored to meet the diverse needs of decentralized finance (DeFi) and a variety of blockchain-based projects,
        positioning it as a go-to solution for innovators in the space.
      </Text>
    </Container>
  )
}

Developers.chains = []

export default Developers
