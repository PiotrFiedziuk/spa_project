import styled from "styled-components";
import { useAppStore } from "../../store/productsStore";
import { ProductCard } from "../molecules/ProductCard";
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
  background-color: #fff6ef;
  width: calc(100% - 350px);
`;
