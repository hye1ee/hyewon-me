import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;

  box-sizing: border-box;
  padding-right: calc(100% - 960px);

  @media (width <= 1280px) {
    padding-right: calc(100% - 840px);
  }

  @media (width <= 1024px) {
    padding-right: 0;
  }

  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export default PageContainer;
