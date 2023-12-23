import styled from "styled-components";

const PageLayout = styled.div<{ main?: boolean }>`
  width: 100%;
  height: ${(props) => (props.main === true ? "calc(100% - 110px)" : "100%")};
  background-color: yellow;

  box-sizing: border-box;
  border: 3px solid black;

  flex: 0 0 auto;
`;
export default PageLayout;
