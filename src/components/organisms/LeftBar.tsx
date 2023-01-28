import { LeftBarListMapper } from "../molecules/LeftBarListMapper";
import styled from "styled-components";
import { CATEGORIES } from "../../constants";

export const LeftBar = () => {
  return (
    <Wrapper>
      <LeftBarListMapper items={CATEGORIES} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 350px;
  height: calc(100vh - 70px);
  border-right: 1px solid black;
  padding: 16px;
  background-color: #fec397;
`;
