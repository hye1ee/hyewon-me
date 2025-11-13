import styled from "styled-components";

import Header from "@components/Header";
import { Outlet } from "react-router-dom";
import HeaderMobile from "@components/HeaderMobile";
import { Analytics } from "@vercel/analytics/react";
const App = () => {
  return (
    <PageWrapper>
      <Header />
      <HeaderMobile />
      <ContentsWrapper>
        <Outlet />
      </ContentsWrapper>
      <Analytics />
    </PageWrapper>
  );
};

export default App;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  overflow: hidden;

  @media (width <= 1024px) {
    flex-direction: column;
  }
`;

const ContentsWrapper = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  overflow-y: auto;

  @media (width <= 1024px) {
    flex: 1;
    width: 100%;
  }
`;
