import { ReactNode } from "react";
import styled from "styled-components";

const PageLayout = styled.div<{ main?: boolean }>`
  width: 100%;
  height: ${(props) => (props.main === true ? "calc(100% - 100px)" : "100%")};
  background-color: yellow;
  border: 3px solid black;

  flex: 0 0 auto;
`;
export default PageLayout;
