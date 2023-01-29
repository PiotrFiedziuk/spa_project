import styled from "styled-components";

interface IProductPrice {
  price: number;
  discount: number;
}

export const ProductPrice = ({ price, discount }: IProductPrice) => {
  const isOnDiscount = !!discount;

  return (
    <>
      {isOnDiscount ? (
        <PriceWrapper>
          <LineTroughPrice>{`${price} zł`}</LineTroughPrice>
          <StyledPrice isOnDiscount={isOnDiscount}>
            {`${price - (price * discount) / 100} zł`}
          </StyledPrice>
        </PriceWrapper>
      ) : (
        <StyledPrice isOnDiscount={isOnDiscount}>{`${price} zł`}</StyledPrice>
      )}
    </>
  );
};

const StyledPrice = styled.div<{ isOnDiscount?: boolean }>`
  align-self: flex-end;
  color: ${({ isOnDiscount }) => (isOnDiscount ? "red" : "black")};
`;

const LineTroughPrice = styled.div<{ isOnDiscount?: boolean }>`
  align-self: flex-end;
  text-decoration: line-through;
  color: gray;
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
