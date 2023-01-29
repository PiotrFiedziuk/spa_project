import styled from "styled-components";
import { Logo } from "../atoms/Logo";

export const TopBar = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 1px solid black;
  height: 70px;
  width: 100%;
  background-color: #cfe1fc;
`;
