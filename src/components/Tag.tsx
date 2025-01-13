import styled from "styled-components";
import { colors } from "utils/styles";

const Tag = styled.div`
  width: fit-content;
  height: fit-content;

  flex: 0 0 auto;

  font-size: 13px;
  font-weight: 450;

  box-sizing: border-box;
  padding: 7px 14px;
  border-radius: 20px;

  background-color: ${colors.lightgray};
  color: ${colors.darkgray};
  border: 1px solid ${colors.gray};

  &:hover {
    background-color: ${colors.secondary};
  }

  cursor: pointer;
  transition: all 0.5s;
`;

export default Tag;
