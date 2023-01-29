import { useParams } from "react-router";
import styled from "styled-components";
import { useAppStore } from "../../store/productsStore";
import { ProductDontExist } from "../molecules/ProductDontExist";
import { ProductCardBig } from "../molecules/ProductCardBig";

export const ProductPage = () => {
  const { productSlug } = useParams();

  const selectedProduct = useAppStore((state) =>
    state.products.find((product) => product.slug === productSlug)
  );
  if (!selectedProduct) return <ProductDontExist />;

  return (
    <Wrapper>
      <ProductCardBig product={selectedProduct} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-inline: 20px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  justify-content: center;

  @media (max-width: 520px) {
    width: calc(100% - 10px);
  }
`;
