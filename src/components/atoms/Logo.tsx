import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from "styled-components";

export const Logo = () => {
  return (
    <Link to="products">
      <StyledImg src={logo} />
    </Link>
  );
};

const StyledImg = styled.img`
  height: 100%;
`;
