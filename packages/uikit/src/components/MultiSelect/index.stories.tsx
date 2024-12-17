import React, { useState } from "react";
import { styled } from "styled-components";
import { MultiSelect } from "./index";
import { Column } from "../Column";
import { Flex } from "../Box";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
};

const chains = [
  { label: "Volrex", value: "VOX", icon: "https://aptos.sgcdex.finance/images/786.png" },
  { label: "BNB", value: "BNB", icon: "https://assets.sgcdex.finance/web/chains/56.png" },
  { label: "Ethereum", value: "Ethereum", icon: "https://assets.sgcdex.finance/web/chains/1.png" },
  { label: "Polygon zkEVM", value: "Polygon zkEVM", icon: "https://assets.sgcdex.finance/web/chains/1101.png" },
  { label: "zkSync Era", value: "zkSync Era", icon: "https://assets.sgcdex.finance/web/chains/324.png" },
  { label: "Arbitrum One", value: "Arbitrum One", icon: "https://assets.sgcdex.finance/web/chains/42161.png" },
  { label: "Linea", value: "Linea", icon: "https://assets.sgcdex.finance/web/chains/59144.png" },
  { label: "Base", value: "Base", icon: "https://assets.sgcdex.finance/web/chains/8453.png" },
  { label: "opBNB", value: "opbnb", icon: "https://assets.sgcdex.finance/web/chains/204.png" },
  { label: "Aptos", value: "Aptos", icon: "https://aptos.sgcdex.finance/images/apt.png" },
  { label: "Fantom", value: "Fantom", icon: "https://aptos.sgcdex.finance/images/250.png" },
  { label: "Avalanche", value: "Avalanche", icon: "https://aptos.sgcdex.finance/images/43114.png" },
  { label: "optimism", value: "optimism", icon: "https://aptos.sgcdex.finance/images/10.png" },
  { label: "Moonbeam", value: "Moonbeam", icon: "https://aptos.sgcdex.finance/images/1284.png" },
  { label: "CELO", value: "celo", icon: "https://aptos.sgcdex.finance/images/42220.png" },
  { label: "Gnosis", value: "XDAI", icon: "https://aptos.sgcdex.finance/images/100.png" },
  { label: "CoreDao", value: "core", icon: "https://aptos.sgcdex.finance/images/1116.png" },
];

const Title = styled.div`
  margin-bottom: 20px;
`;

export const Default: React.FC<React.PropsWithChildren> = () => {
  return (
    <Flex
      style={{
        padding: "32px",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Column>
        <Title>MultiSelect with filter:</Title>
        <MultiSelect
          style={{
            width: "328px",
          }}
          panelStyle={{
            minHeight: "382px",
          }}
          scrollHeight="382px"
          options={chains}
          isShowFilter
          panelFooterTemplate={() => <span>Don’t see expected tokens?</span>}
        />
      </Column>
      <Column>
        <Title>MultiSelect with selectAll:</Title>
        <MultiSelect
          style={{
            width: "273px",
          }}
          scrollHeight="400px"
          options={chains}
          isShowSelectAll
          selectAllLabel="All networks"
        />
      </Column>
    </Flex>
  );
};

export const ControlledMode: React.FC<React.PropsWithChildren> = () => {
  const [selectedValue, setSelectedValue] = useState([chains[0].value]);
  return (
    <Flex
      style={{
        padding: "32px",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Column>
        <MultiSelect
          style={{
            width: "273px",
            backgroundColor: "var(--colors-input)",
          }}
          panelStyle={{
            backgroundColor: "var(--colors-input)",
          }}
          scrollHeight="380px"
          options={chains}
          isShowSelectAll
          selectAllLabel="All networks"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.value)}
        />
      </Column>
    </Flex>
  );
};
