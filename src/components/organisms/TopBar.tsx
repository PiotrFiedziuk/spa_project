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
  border-bottom: 1px solid #6F5F5E;
  height: 70px;
  width: 100%;
  background-color: #D28A7C;
`;
