import styled from "styled-components";

interface IProductLowestPrice {
  smallestAvailablePrice: number;
}

export const ProductLowestPrice = ({
  smallestAvailablePrice,
}: IProductLowestPrice) => {
  return (
    <StyledLowestPrice>{`Najniższa cena przed obniżką ${smallestAvailablePrice}`}</StyledLowestPrice>
  );
};

const StyledLowestPrice = styled.div`
  font-size: 12px;
  color: black;
`;
