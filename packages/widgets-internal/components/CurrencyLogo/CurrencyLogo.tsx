import { ChainId } from "@pancakeswap/chains";
import { useHttpLocations } from "@pancakeswap/hooks";
import { BinanceIcon, TokenLogo } from "@pancakeswap/uikit";
import Image from "next/legacy/image";
import { useMemo } from "react";
import { styled } from "styled-components";
import { space, SpaceProps } from "styled-system";

import { CurrencyInfo } from "./types";
import { getCurrencyLogoUrlsByInfo } from "./utils";

const StyledLogo = styled(TokenLogo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;

  ${space}
`;

export function CurrencyLogo({
  currency,
  size = "24px",
  style,
  useTrustWalletUrl,
  ...props
}: {
  currency?: CurrencyInfo & {
    logoURI?: string | undefined;
  };
  size?: string;
  style?: React.CSSProperties;
  useTrustWalletUrl?: boolean;
} & SpaceProps) {
  const uriLocations = useHttpLocations(currency?.logoURI);

  const srcs: string[] = useMemo(() => {
    if (currency?.isNative) return [];

    if (currency?.isToken) {
      const logoUrls = getCurrencyLogoUrlsByInfo(currency, { useTrustWallet: useTrustWalletUrl });

      if (currency?.logoURI) {
        return [...uriLocations, ...logoUrls];
      }
      return [...logoUrls];
    }
    return [];
  }, [currency, uriLocations, useTrustWalletUrl]);

  if (currency?.isNative) {
    if (currency.chainId === ChainId.VOX) {
      return <Image width={24} height={24} src="/images/786.png" />;
    }
    return (
      <StyledLogo
        size={size}
        srcs={[`https://assets.sgcdex.finance/web/native/${currency.chainId}.png`]}
        width={size}
        style={style}
        {...props}
      />
    );
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? "token"} logo`} style={style} {...props} />;
}
