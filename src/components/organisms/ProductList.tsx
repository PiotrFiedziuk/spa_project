import styled from "styled-components";
import { ProductListMapper } from "../molecules/ProductListMapper";
import { FilteringTab } from "../molecules/FilteringTab";

export const ProductList = () => {
  return (
    <Wrapper>
      <FilteringTab />
      <ProductListMapper />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  width: calc(100% - 350px);
  overflow-y: auto;

  @media (max-width: 808px) {
    width: 100%;
  }
`;
