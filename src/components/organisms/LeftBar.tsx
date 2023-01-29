import { LeftBarListMapper } from "../molecules/LeftBarListMapper";
import styled from "styled-components";
import { CATEGORIES } from "../../constants";
import { useLocation } from "react-router";

export const LeftBar = () => {
  const { pathname } = useLocation();
  const splitedPathname = pathname.split("/", 2);

  if (splitedPathname[1] === "product") return null;

  return (
    <Wrapper>
      <LeftBarListMapper items={CATEGORIES} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 350px;
  min-height: 100vh;
  border-right: 1px solid black;
  padding: 16px;
  background-color: #e8f0fc;

  @media (max-width: 808px) {
    width: 100%;
    min-height: 0;
    height: 100%;
  }
`;
