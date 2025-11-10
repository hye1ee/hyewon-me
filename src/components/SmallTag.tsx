import styled from "styled-components";
import { colors, tagTextStyle } from "utils/styles";

interface SmallTagProps {
  children: React.ReactNode;
  icon?: string;
  onClick?: () => void;
}

const SmallTag = ({ children, icon, onClick }: SmallTagProps) => {
  return (
    <StyledSmallTag onClick={onClick}>
      {icon && (
        <IconWrapper>
          <img src={icon} alt="" style={{ width: "12px", height: "12px" }} />
        </IconWrapper>
      )}
      {children}
    </StyledSmallTag>
  );
};

const StyledSmallTag = styled.div`
  width: fit-content;
  height: fit-content;

  flex: 0 0 auto;

  ${tagTextStyle}

  box-sizing: border-box;
  padding: 6px 0px;

  background-color: ${colors.white};
  /* border: 1px solid ${colors.gray}; */

  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: ${colors.lightgray};
    color: ${colors.black};
  }

  cursor: pointer;
  transition: all 0.5s;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  line-height: 0;
`;

export default SmallTag;
