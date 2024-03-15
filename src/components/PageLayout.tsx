import styled from "styled-components";

const PageLayout = styled.div<{ main?: boolean }>`
  width: 100%;
  height: ${(props) =>
    props.main === true ? "calc(100% - 105px)" : "fit-content"};

  position: relative;
  box-sizing: border-box;
  /* padding: 0px 200px; */
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;
`;
export default PageLayout;
