import styled from "styled-components";

interface IProductImage {
  src: string;
}

export const ProductImage = ({ src }: IProductImage) => {
  return (
    <Wrapper>
      <StyledImg src={src} alt={"Product IMG"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: lightgray;
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
`;
