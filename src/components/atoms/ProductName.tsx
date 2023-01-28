import styled from "styled-components";

interface IProductName {
  name: string;
}

export const ProductName = ({ name }: IProductName) => {
  return <StyledName>{name}</StyledName>;
};

const StyledName = styled.span`
  font-size: 12px;
  padding: 10px;
  display: block;
  line-height: 16px;
`;
