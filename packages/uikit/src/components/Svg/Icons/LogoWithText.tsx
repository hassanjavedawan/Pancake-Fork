import { Text } from "@pancakeswap/uikit";

interface LogoProps {
  color?: string; // Define the color prop as an optional string type
}

const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <Text fontSize="20px" fontWeight="bold" color={color}>
      SGCDEX.Finance
    </Text>
  );
};

export default Logo;
