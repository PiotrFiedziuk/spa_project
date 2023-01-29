import styled from "styled-components";
import { TProduct } from "../../types/fakeApiTypes/productsListApiTypes";
import { ProductThumbnail } from "../atoms/ProductThumbnail";
import { ProductName } from "../atoms/ProductName";
import { NavLink } from "react-router-dom";
import { ProductPrice } from "../atoms/ProductPrice";
import { ProductLowestPrice } from "../atoms/ProductLowestPrice";

interface IProductCard {
  product: TProduct;
}

export const ProductCard = ({ product }: IProductCard) => {
  return (
    <StyledLink to={`/product/${product.slug}`}>
      <Wrapper>
        <ProductThumbnail src={product.thumbnail} />
        <ProductInfo>
          <ProductName name={product.name} />
          <ProductPrice
            price={product.price}
            discount={product.percentageDiscount}
          />
          <ProductLowestPrice
            smallestAvailablePrice={product.smallestAvailablePrice}
          />
        </ProductInfo>
      </Wrapper>
    </StyledLink>
  );
};

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  :hover {
    color: #6470fa;
  }
`;

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid grey;
  transition: scale 200ms, ease-in border-color 200ms;
  border-radius: 5px;
  background-color: white;

  :hover {
    cursor: pointer;
    scale: 1.1;
    border-color: black;
  }
`;

const ProductInfo = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
