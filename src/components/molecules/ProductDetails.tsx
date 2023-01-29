import styled from "styled-components";

interface IProductDetails {
  isAvailable: boolean;
  gender: string;
}

export const ProductDetails = ({ isAvailable, gender }: IProductDetails) => {
  return (
    <ProductDetailsWrapper>
      <StyledSpan>Szczegółowe informacje</StyledSpan>
      <StyledDetail>{`Dostępność: ${
        isAvailable ? "Na stanie" : "Brak w magazynach"
      }`}</StyledDetail>
      <StyledDetail>{`Płeć: ${gender}`}</StyledDetail>
    </ProductDetailsWrapper>
  );
};

const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledDetail = styled.span``;

const StyledSpan = styled.span`
  font-size: 20px;
  border-bottom: 1px solid black;
`;
