import { ProductCard } from "./ProductCard";
import { useAppStore } from "../../store/productsStore";
import styled from "styled-components";
import { looseStringCompare } from "../../utils/looseStringCompare";

export const ProductListMapper = () => {
  const selectedCategory = useAppStore(
    (state) => state.selectedLeftBarCategory
  );
  const products = useAppStore((state) => state.products);
  const searchedValue = useAppStore((state) => state.searchedValue);
  const isAsc = useAppStore((state) => state.isAsc);

  const filteredProducts = products
    .filter((product) => {
      if (!selectedCategory) return true;
      return product.type === selectedCategory;
    })
    .filter((product) => looseStringCompare(product.name, searchedValue));
  const sortedProducts = isAsc
    ? filteredProducts.sort()
    : filteredProducts.sort().reverse();

  return (
    <Wrapper>
      {sortedProducts.map((product) => {
        return <ProductCard product={product} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 24px;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
`;
