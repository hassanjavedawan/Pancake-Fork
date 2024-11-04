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
    margin: 0.5em 0px 0px 1em;
    color: ${({ theme }) => theme.colors.text};
  }
`

const TermsOfService = () => {
  return (
    <Container>
      <Text as="h1">SGCDEX Terms of Service</Text>
      <Text as="h3">Last modified: October 23, 2024</Text>
      <Text as="p">
        <Text as="span">
          These Terms of Service (the “Agreement”) explains the terms and conditions by which you may access and use
        </Text>
        <Link m="0 4px" display="inline !important" href="https://sgcdex.finance">
          https://sgcdex.finance
        </Link>
        <Text as="span">
          usehttps://SGCDEX.financeand any subdomains associated with the Website. You must read this Agreement
          carefully as it governs your use of the Website. By accessing or using the Website, you signify that you have
          read, understand, and agree to be bound by this Agreement in its entirety. If you do not agree, you are not
          authorized to access or use the Website and should not use the Website.
        </Text>
      </Text>

      <Text as="p" fontWeight="600">
        NOTICE: This Agreement contains important information, including a binding arbitration provision and a class
        action waiver, both of which impact your rights as to how disputes are resolved. The Website is only available
        to you — and you should only access the Website — if you agree completely with these terms.
      </Text>

      <Text as="h3">Introduction</Text>
      <Text as="p">
        The Website provides access to (a) a decentralized protocol on various public blockchains, including but not
        limited to Volrex Chain, Aptos and Ethereum, that allow users to trade certain compatible digital assets (“the
        SGCDEX protocol” or the “Protocol”), among other services. The Website is one, but not the exclusive, means of
        accessing the Protocol.
      </Text>
      <Text as="p">
        To access the Website, you must use non-custodial wallet software, which allows you to interact with public
        blockchains. Your relationship with that non-custodial wallet provider is governed by the applicable terms of
        service of that third party, not this Agreement. Wallets are not operated by, maintained by, or affiliated with
        us, and we do not have custody or control over the contents of your wallet and have no ability to retrieve or
        transfer its contents. By connecting your wallet to our Website, you agree to be bound by this Agreement and all
        of the terms incorporated herein by reference.
      </Text>

      <Text as="h3">Modification of this Agreement</Text>
      <Text as="p">
        <Text as="span">
          To access the Website, you must use non-custodial wallet software, which allows you to interact with public
          blockchains. Your relationship with that non-custodial wallet provider is governed by the applicable terms of
          service of that third party, not this Agreement. Wallets are not operated by, maintained by, or affiliated
          with us, and we do not have custody or control over the contents of your wallet and have no ability to
          retrieve or transfer its contents. By connecting your wallet to our Website, you agree to be bound by this
          Agreement and all of the terms incorporated herein by reference. at
        </Text>
        <Link m="0 4px" display="inline !important" href="https://sgcdex.finance/terms-of-service">
          https://sgcdex.finance/terms-of-service.
        </Link>
        <Text as="span">
          All modifications will be effective when they are posted, and your continued accessing or use of the Website
          will serve as confirmation of your acceptance of those modifications. If you do not agree with any
          modifications to this Agreement, you must immediately stop accessing and using the Website.
        </Text>
      </Text>

      <Text as="h3">Description of Services provided through the Website</Text>
      <Text as="p">The Website provides a web or mobile-based means of accessing the Protocol.</Text>

      <Text as="h3">Website for accessing Protocol</Text>
      <Text as="p">
        All modifications will be effective when they are posted, and your continued accessing or use of the Website
        will serve as confirmation of your acceptance of those modifications. If you do not agree with any modifications
        to this Agreement, you must immediately stop accessing and using the Website.
      </Text>

      <Text as="h3">Eligibility</Text>
      <Text as="p">
        To access or use the Website, you must be able to form a legally binding contract with us. Accordingly, you
        represent that you are at least the age of majority in your jurisdiction (e.g., 18 years old in the United
        States) and have the full right, power, and authority to enter into and comply with the terms and conditions of
        this Agreement on behalf of yourself and any company or legal entity for which you may access or use the
        Website.
      </Text>
      <Text as="p">
        You further represent that you are not (a) the subject of economic or trade sanctions administered or enforced
        by any governmental authority or otherwise designated on any list of prohibited or restricted parties (including
        but not limited to the list maintained by the Office of Foreign Assets Control of the U.S. Department of the
        Treasury) or (b) a citizen, resident, or organized in a jurisdiction or territory that is the subject of
        comprehensive country-wide, territory-wide, or regional economic sanctions by the United States. Finally, you
        represent that your access and use of the Website will fully comply with all applicable laws and regulations,
        and that you will not access or use the Website to conduct, promote, or otherwise facilitate any illegal
        activity.
      </Text>

      <Text as="h3">Intellectual Property Rights</Text>
      <Text as="p">
        SGCDEX owns all intellectual property and other rights in the Website and its contents, including (but not
        limited to) software, text, images, trademarks, service marks, copyrights, patents, designs, and its “look and
        feel.” Unlike the Website, versions 1-3 of the Protocol are comprised entirely of open-source or
        source-available software running on public blockchains.
      </Text>
      <Text as="p">
        By using the Website to list, post, promote, or display NFTs, you grant us a worldwide, non-exclusive,
        sublicensable, royalty-free license to use, copy, modify, and display any content, including but not limited to
        text, materials, images, files, communications, comments, feedback, suggestions, ideas, concepts, questions,
        data, or otherwise, that you post on or through the Website for our current and future business purposes,
        including to provide, promote, and improve the services. This includes any digital file, art, or other material
        linked to or associated with any NFTs that are displayed.
      </Text>
      <Text as="p">
        You represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions, power
        and/or authority necessary to grant the rights granted herein for any NFTs that you list, post, promote, or
        display on or through the Website. You represent and warrant that such content does not contain material subject
        to copyright, trademark, publicity rights, or other intellectual property rights, unless you have necessary
        permission or are otherwise legally entitled to post the material and to grant us the license described above,
        and that the content does not violate any laws.
      </Text>

      <Text as="h3">Additional Rights</Text>
      <Text as="p">
        We reserve the following rights, which do not constitute obligations of ours: (a) with or without notice to you,
        to modify, substitute, eliminate or add to the Website; (b) to review, modify, filter, disable, delete and
        remove any and all content and information from the Website; and (c) to cooperate with any law enforcement,
        court or government investigation or order or third party requesting or directing that we disclose information
        or content or information that you provide.
      </Text>

      <Text as="h3">Prohibited Activity</Text>
      <Text as="p">
        You agree not to engage in, or attempt to engage in, any of the following categories of prohibited activity in
        relation to your access and use of the Website:
      </Text>
      <ul>
        <li>
          Intellectual Property Infringement. Activity that infringes on or violates any copyright, trademark, service
          mark, patent, right of publicity, right of privacy, or other proprietary or intellectual property rights under
          the law.
        </li>
        <li>
          Cyberattack. Activity that seeks to interfere with or compromise the integrity, security, or proper
          functioning of any computer, server, network, personal device, or other information technology system,
          including (but not limited to) the deployment of viruses and denial of service attacks.
        </li>
        <li>
          Fraud and Misrepresentation. Activity that seeks to defraud us or any other person or entity, including (but
          not limited to) providing any false, inaccurate, or misleading information in order to unlawfully obtain the
          property of another.
        </li>
        <li>
          Market Manipulation. Activity that violates any applicable law, rule, or regulation concerning the integrity
          of trading markets, including (but not limited to) the manipulative tactics commonly known as “rug pulls”,
          pumping and dumping, and wash trading.
        </li>
        <li>
          Securities and Derivatives Violations. Activity that violates any applicable law, rule, or regulation
          concerning the trading of securities or derivatives, including (but not limited to) the unregistered offering
          of securities and the offering of leveraged and margined commodity products to retail customers in the United
          States.
        </li>
        <li>
          Sale of Stolen Property. Buying, selling, or transferring of stolen items, fraudulently obtained items, items
          taken without authorization, and/or any other illegally obtained items.
        </li>
        <li>
          Data Mining or Scraping. Activity that involves data mining, robots, scraping, or similar data gathering or
          extraction methods of content or information from the Website.
        </li>
        <li>
          Objectionable Content. Activity that involves soliciting information from anyone under the age of 18 or that
          is otherwise harmful, threatening, abusive, harassing, tortious, excessively violent, defamatory, vulgar,
          obscene, pornographic, libelous, invasive of another’s privacy, hateful, discriminatory, or otherwise
          objectionable.
        </li>
        <li>
          Any Other Unlawful Conduct. Activity that violates any applicable law, rule, or regulation of the United
          States or another relevant jurisdiction, including (but not limited to) the restrictions and regulatory
          requirements imposed by U.S. law.
        </li>
      </ul>

      <Text as="h3">Initial Farm Offering</Text>
      <Text as="p">
        You represent that you are not a user from the following countries or regions when participating in our Initial
        Farm Offerings:
      </Text>
      <Text as="p">
        Belarus, Cuba, Crimea Region, Democratic Republic of Congo, Iran, Iraq, New Zealand, North Korea, South Sudan,
        Sudan, Syria, United States of America and its territories (American Samoa, Guam, Puerto Rico, the Northern
        Mariana Islands, and the U.S. Virgin Islands), Zimbabwe.
      </Text>

      <Text as="h3">Not Registered with the SEC, ASIC or Any Other Agency</Text>
      <Text as="p">
        We are not registered with the U.S. Securities and Exchange Commission, Austrac or and Australian Securities &
        Investments Commission (ASIC) as a national securities exchange or in any other capacity. You understand and
        acknowledge that we do not broker trading orders on your behalf. We also do not facilitate the execution or
        settlement of your trades, which occur entirely on the public distributed blockchains like Volrex Chain or
        Ethereum or any other blockchains. As a result, we do not (and cannot) guarantee market best pricing or best
        execution through the Website or when using our Smart Router feature, which routes trades across liquidity pools
        on the Protocol only. Any references in the Website to “best price” do not constitute a representation or
        warranty about pricing available through the Website, on the Protocol, or elsewhere.
      </Text>

      <Text as="h3">Non-Solicitation; No Investment Advice</Text>
      <Text as="p">
        You agree and understand that: (a) all trades you submit through the Website are considered unsolicited, which
        means that they are solely initiated by you; (b) you have not received any investment advice from us in
        connection with any trades, including those you place via our Smart Router API; and (c) we do not conduct a
        suitability review of any trades you submit.
      </Text>
      <Text as="p">
        We may provide information about tokens in the Website sourced from third-party data partners through features
        such as rarity scores, token explorer or token lists (which includes the SGCDEX default token list and SGCDEX
        expanded list hosted at tokenlists.org). We may also provide warning labels for certain tokens. The provision of
        informational materials does not make trades in those tokens solicited; we are not attempting to induce you to
        make any purchase as a result of information provided. All such information provided by the Website is for
        informational purposes only and should not be construed as investment advice or a recommendation that a
        particular token is a safe or sound investment. You should not take, or refrain from taking, any action based on
        any information contained in the Website. By providing token information for your convenience, we do not make
        any investment recommendations to you or opine on the merits of any transaction or opportunity. You alone are
        responsible for determining whether any investment, investment strategy or related transaction is appropriate
        for you based on your personal investment objectives, financial circumstances, and risk tolerance.
      </Text>

      <Text as="h3">Non-Custodial and No Fiduciary Duties</Text>
      <Text as="p">
        The Website operates as a non-custodial platform. This means we do not hold or control your digital assets, and
        you alone are responsible for the safekeeping of your private keys and wallet credentials. Do not share your
        seed phrase or private information with anyone. We accept no liability for any wallet-related issues or losses
        you may incur, nor do we offer guarantees regarding the Website's compatibility with any particular wallet.
      </Text>
      <Text as="p">
        The Website operates as a non-custodial platform. This means we do not hold or control your digital assets, and
        you alone are responsible for the safekeeping of your private keys and wallet credentials. Do not share your
        seed phrase or private information with anyone. We accept no liability for any wallet-related issues or losses
        you may incur, nor do we offer guarantees regarding the Website's compatibility with any particular wallet.
      </Text>

      <Text as="h3">Compliance and Tax Obligations</Text>
      <Text as="p">
        You are solely responsible for complying with all laws and regulations in your jurisdiction. This includes any
        tax obligations resulting from your use of the Website or the Protocol, such as income or capital gains taxes.
        It is your duty to report and pay any applicable taxes to the appropriate authorities.
      </Text>

      <Text as="h3">Assumption of Risk</Text>
      <Text as="p">
        You are solely responsible for complying with all laws and regulations in your jurisdiction. This includes any
        tax obligations resulting from your use of the Website or the Protocol, such as income or capital gains taxes.
        It is your duty to report and pay any applicable taxes to the appropriate authorities.
      </Text>
      <Text as="p">
        If you provide liquidity to the Protocol, you understand that your assets may lose value. In sum, you agree to
        assume all risks of using the Website and interacting with the Protocol.
      </Text>

      <Text as="h3">Third-Party Resources and Promotions</Text>
      <Text as="p">
        If you provide liquidity to the Protocol, you understand that your assets may lose value. In sum, you agree to
        assume all risks of using the Website and interacting with the Protocol.
      </Text>

      <Text as="h3">Release of Claims</Text>
      <Text as="p">
        You waive and release us from any liability related to your use of the Website. If you are a California
        resident, you waive the protections of California Civil Code § 1542 and any other international judiciary.
      </Text>

      <Text as="h3">Indemnity</Text>
      <Text as="p">
        You agree to indemnify us, our employees, and affiliates from any claims or losses related to your use of the
        Website, violations of this Agreement, or actions by others using your devices or accounts.
      </Text>

      <Text as="h3">No Warranties</Text>
      <Text as="p">
        The Website is provided “AS IS” without any warranties. We make no guarantees regarding the continuous
        operation, accuracy, or security of the Website, nor do we take responsibility for any advertisements or
        third-party offers associated with it. The Protocol is similarly provided without warranties. Any use or
        interaction with the Protocol is at your own risk.
      </Text>

      <Text as="h3">Limitation of Liability</Text>
      <Text as="p">
        We are not liable for any indirect, punitive, incidental, or consequential damages arising from your use of the
        Website or the Protocol. This includes losses due to unauthorized access, errors, or interruptions.
      </Text>

      <Text as="h3">Dispute Resolution</Text>
      <Text as="p">
        We will attempt to resolve any disputes through good faith negotiations. If unresolved, disputes will be settled
        through confidential arbitration under the Arbitration Rules of the International Court International
        Arbitration Centre, with International Court as the venue unless otherwise agreed.
      </Text>

      <Text as="h3">Class Action and Jury Trial Waiver</Text>
      <Text as="p">
        You agree to bring any claims solely in your individual capacity, waiving the right to participate in class
        actions or demand a jury trial.
      </Text>

      <Text as="h3">Governing Law</Text>
      <Text as="p">
        You agree to bring any claims solely in your individual capacity, waiving the right to participate in class
        actions or demand a jury trial.
      </Text>

      <Text as="h3">Entire Agreement</Text>
      <Text as="p">
        This Agreement constitutes the full understanding between you and us, superseding all prior agreements.
      </Text>

      <Text as="h3">Gas Fees</Text>
      <Text as="p">
        You are responsible for paying any Gas Fees associated with blockchain transactions you initiate, unless
        otherwise specified by SGCDEX.
      </Text>
    </Container>
  )
}

TermsOfService.chains = []

export default TermsOfService
