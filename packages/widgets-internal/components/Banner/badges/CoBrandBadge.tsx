import { FlexGap, LogoWithTextIcon } from "@pancakeswap/uikit";
import Image from "next/legacy/image";
import { VerticalDivider } from "../VerticalDivider";
import { BadgeLogo } from "./Badge";
// import { PancakeSwapBadge } from "./PancakeSwapBadge";

export type CoBrandBadgeProps = {
  whiteText?: boolean;
  compact?: boolean;
  coBrandLogo: string;
  coBrand: string;
  coBrandAlt?: string;
  cWidth?: number | `${number}`;
  cHeight?: number | `${number}`;
  dividerBg?: string;
};

export const CoBrandBadge: React.FC<React.PropsWithChildren<CoBrandBadgeProps>> = ({
  compact,
  coBrandLogo,
  coBrand,
  coBrandAlt = "",
  cWidth,
  cHeight,
  dividerBg,
}) => {
  if (compact) {
    return (
      <FlexGap gap="4px">
        <LogoWithTextIcon color="white" />
        <VerticalDivider bg={dividerBg ?? ""} />
        <BadgeLogo src={coBrandLogo} alt={coBrandAlt} />
      </FlexGap>
    );
  }

  return (
    <FlexGap gap="8px" alignItems="center">
      <LogoWithTextIcon color="white" />

      <VerticalDivider bg={dividerBg ?? ""} />
      {cWidth && cHeight ? <Image src={coBrand} alt={coBrandAlt} width={cWidth} height={cHeight} unoptimized /> : null}
    </FlexGap>
  );
};
