import styled from "styled-components";
import { colors, subtitleTextStyle } from "utils/styles";

interface SectionTitleProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  marginBottom?: string;
  titleSize?: string;
  // Small gray label instead of a heading
  muted?: boolean;
}

const SectionTitle = ({
  children,
  align = "center",
  marginBottom = "16px",
  titleSize = "16px",
  muted = false,
}: SectionTitleProps) => {
  return (
    <TitleWrapper
      align={align}
      marginBottom={marginBottom}
      titleSize={muted ? "12px" : titleSize}
      $muted={muted}
    >
      {children}
    </TitleWrapper>
  );
};

export default SectionTitle;

const TitleWrapper = styled.div<{
  align: string;
  marginBottom: string;
  titleSize: string;
  $muted: boolean;
}>`
  align-self: flex-start;
  ${subtitleTextStyle}
  font-size: ${(props) => props.titleSize};
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  text-align: ${(props) => props.align};
  margin-bottom: ${(props) => props.marginBottom};
  color: ${(props) => (props.$muted ? colors.darkgray : "black")};
`;
