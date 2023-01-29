import {
  TGenders,
  TProduct,
} from "../../types/fakeApiTypes/productsListApiTypes";
import styled from "styled-components";
import { ProductImage } from "../atoms/ProductImage";
import { ProductPrice } from "../atoms/ProductPrice";
import { ProductName } from "../atoms/ProductName";
import { ProductDescription } from "../atoms/ProductDescription";
import { ProductDetails } from "./ProductDetails";

interface IProductCardBig {
  product: TProduct;
}

const ID_TO_TEXT = {
  M: "Male",
  F: "Female",
  U: "Unisex",
} as Record<TGenders, string>;

export const ProductCardBig = ({ product }: IProductCardBig) => {
  return (
    <Wrapper>
      <ProductImage src={product.bigImage} />
      <ProductName name={product.name} fontSize={20} />
      <ProductPrice
        price={product.price}
        discount={product.percentageDiscount}
      />
      <ProductDescription description={product.description} />
      <ProductDetails
        gender={ID_TO_TEXT[product.gender]}
        isAvailable={product.isAvailable}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  height: 100%;
  width: fit-content;
  font-size: 16px;
`;
