import { Outlet } from "react-router-dom";
import { LeftBar } from "../components/organisms/LeftBar";
import { TopBar } from "../components/organisms/TopBar";
import styled from "styled-components";

export const AppLayout = () => {
  return (
    <LayoutWrapper>
      <TopBar />
      <LeftBar />
      <Outlet />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;

  @media (max-width: 808px) {
    flex-direction: column;
  }
`;
