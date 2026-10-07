import styled from "styled-components";
import { colors } from "utils/styles";

// Small uppercase label, Tate-style
const Tag = styled.div`
  border: 1px solid ${colors.black};
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.black};
  white-space: nowrap;
`;

export default Tag;
