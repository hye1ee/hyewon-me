import styled from "styled-components";
import { colors } from "utils/styles";

const SmallTag = styled.div`
  width: fit-content;
  height: fit-content;

  flex: 0 0 auto;

  font-size: 12px;

  box-sizing: border-box;
  padding: 6px 12px;
  border-radius: 6px;

  background-color: ${colors.white};
  color: ${colors.darkgray};
  border: 1px solid ${colors.gray};

  &:hover {
    background-color: ${colors.lightgray};
  }

  cursor: pointer;
  transition: all 0.5s;
`;

export default SmallTag;
