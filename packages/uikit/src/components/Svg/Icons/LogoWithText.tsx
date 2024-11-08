import { Image } from "@pancakeswap/uikit";

interface LogoProps {
  className?: string; // Define the color prop as an optional string type
}

const Logo: React.FC<LogoProps> = (props) => {
  return <Image alt="sgc" src="/images/sgc.png" width={160} height={60} />;
};

export default Logo;
