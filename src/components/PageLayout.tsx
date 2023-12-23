import styled from "styled-components";

const PageLayout = styled.div<{ main?: boolean }>`
  width: 100%;
  height: ${(props) => (props.main === true ? "calc(100% - 105px)" : "100%")};
  background-color: yellow;

  position: relative;
  box-sizing: border-box;
  padding: 0px 40px;

  flex: 0 0 auto;
`;
export default PageLayout;
