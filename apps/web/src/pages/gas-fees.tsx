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
    line-height: 24px;
  }

  li {
    margin: 0.8em 0px 0px 1em;
    color: ${({ theme }) => theme.colors.text};
  }
`

const GasFees = () => {
  return (
    <Container>
      <Text as="h1">Gas Fees and SGCDEX Fees</Text>
      <Text as="h3">Gas Fees</Text>

      <Text as="p">
        You are responsible for paying any Gas Fees associated with the blockchain transactions you initiate, unless
        otherwise specified by SGCDEX.
      </Text>

      <Text as="h3">Additional SGCDEX Fees and Charges</Text>

      <ol>
        <li>
          Transaction Fees: SGCDEX.Finance applies a transaction fee ranging from 0.05% to 1.0% on all blockchain
          transactions
        </li>
        <li>
          Volrex Coin (Volrex Chain) Fees: If you use Volrex Coin (on the Volrex Chain), SGCDEX.Finance will apply a
          transaction fee ranging from 0.025% to 0.50% on all blockchain transactions.
        </li>
      </ol>
    </Container>
  )
}

GasFees.chains = []

export default GasFees
