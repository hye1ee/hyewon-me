import React, { useState } from "react";
import styled from "styled-components";

import Header from "@components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  const [animateEvent, setAnimateEvent] = useState<boolean>(false);
  const onAnimate = () => {
    if (!animateEvent) setAnimateEvent(true);
  };

  return (
    <PageWrapper>
      <Header onAnimate={onAnimate} />
      <ContentsWrapper>
        <Outlet />
      </ContentsWrapper>
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
`;

const ContentsWrapper = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  overflow-y: scroll;
`;
