import styled from "styled-components";
import { colors } from "utils/styles";

const PageLayout = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100%;

  position: relative;
  box-sizing: border-box;
  /* padding: 0px 200px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  flex: 0 0 auto;
  overflow: hidden;

  background-color: ${colors.white};
  color: ${colors.black};
`;
export default PageLayout;
