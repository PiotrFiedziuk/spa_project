import styled from "styled-components";

interface IProductName {
  name: string;
  fontSize?: number;
}

export const ProductName = ({ name, fontSize = 14 }: IProductName) => {
  return <StyledName fontSize={fontSize}>{name}</StyledName>;
};

const StyledName = styled.span<{ fontSize: number }>`
  font-size: ${({ fontSize }) => fontSize + "px"};
  line-height: 16px;
  font-weight: bold;
`;
