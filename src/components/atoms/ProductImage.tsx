import styled from "styled-components";

interface IProductImage {
  src: string;
}

export const ProductImage = ({ src }: IProductImage) => {
  return (
    <Wrapper>
      <StyledImg width="198px" height="150px" src={src} alt={"Product IMG"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: lightgray;
`;

const StyledImg = styled.img``;
