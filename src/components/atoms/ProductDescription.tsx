import styled from "styled-components";

interface IProductDescription {
  description: string;
}

export const ProductDescription = ({ description }: IProductDescription) => {
  return (
    <Wrapper>
      <StyledSpan>Opis</StyledSpan>
      {description}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  font-size: 20px;
  border-bottom: 1px solid black;
`;
