import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Main from "./pages/Main";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <PageWrapper>
      <Header />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </PageWrapper>
  );
};

export default App;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
`;
