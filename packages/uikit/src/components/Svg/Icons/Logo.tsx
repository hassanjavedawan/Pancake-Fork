import React from "react";
import { Image } from "@pancakeswap/uikit";

interface LogoProps {
  className?: string; // Define the color prop as an optional string type
}
const Icon: React.FC<LogoProps> = (props) => {
  return <Image alt="sgc" src="/images/786.png" width={32} height={32} />;
};

export default Icon;
