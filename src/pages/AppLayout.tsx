import { Outlet, useLoaderData } from "react-router-dom";
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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;
