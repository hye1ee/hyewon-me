import styled from "styled-components";
import { colors } from "utils/styles";

const Tag = styled.div`
  /* width: fit-content;
  height: fit-content; */

  /* flex: 0 0 auto;

  font-size: 12px;
  font-weight: 450;

  box-sizing: border-box;
  padding: 8px 12px;

  background-color: ${colors.white};
  color: ${colors.black};
  border: 1px solid ${colors.black};

  &:hover {
    background-color: ${colors.secondary};
  }

  cursor: pointer;
  transition: all 0.5s;
   */

  position: relative;
  align-self: center;
  background-color: white;
  border: 1px solid black;
  padding: 6px 12px;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  color: black;
  text-align: center;
  max-width: 200px;
  word-wrap: break-word;

  /* Triangle pointer */
  &::before {
    content: "";
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid black;
  }

  &::after {
    content: "";
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid white;
  }
`;

export default Tag;
