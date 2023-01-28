import styled from "styled-components";
import { TProduct } from "../../types/fakeApiTypes/productsListApiTypes";
import { ProductImage } from "../atoms/ProductImage";
import { ProductName } from "../atoms/ProductName";

interface IProductCard {
  product: TProduct;
}

export const ProductCard = ({ product }: IProductCard) => {
  return (
    <Wrapper>
      <ProductImage src={product.thumbnail} />
      <ProductName name={product.name} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid #6F5F5E;
  transition: scale 200ms;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    scale: 1.1;
    transition: scale 200ms;
  }
`;
