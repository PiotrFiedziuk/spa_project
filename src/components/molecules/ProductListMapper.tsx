import { ProductCard } from "./ProductCard";
import { useAppStore } from "../../store/productsStore";
import styled from "styled-components";
import { looseStringCompare } from "../../utils/looseStringCompare";
import { TProduct } from "../../types/fakeApiTypes/productsListApiTypes";

const sortFunction = (a: TProduct, b: TProduct) => (a.name > b.name ? 1 : -1);

export const ProductListMapper = () => {
  const selectedCategory = useAppStore(
    (state) => state.selectedLeftBarCategory
  );
  const products = useAppStore((state) => state.products);
  const searchedValue = useAppStore((state) => state.searchedValue);
  const selectedSizeFilters = useAppStore((state) => state.selectedSizeFilters);
  const selectedGenderFilter = useAppStore(
    (state) => state.selectedGenderFilter
  );
  const isAsc = useAppStore((state) => state.isAsc);

  const filteredProducts = products
    .filter((product) => {
      if (!selectedCategory) return true;
      return product.type === selectedCategory;
    })
    .filter((product) => {
      return selectedSizeFilters.includes(product.size);
    })
    .filter((product) => {
      if (selectedGenderFilter === undefined) return true;
      return product.gender === selectedGenderFilter;
    })
    .filter((product) => looseStringCompare(product.name, searchedValue));
  const sortedProducts = isAsc
    ? filteredProducts.sort(sortFunction)
    : filteredProducts.sort(sortFunction).reverse();

  return (
    <Wrapper>
      {sortedProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
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

  @media (max-width: 670px) {
    justify-content: center;
  }
`;
