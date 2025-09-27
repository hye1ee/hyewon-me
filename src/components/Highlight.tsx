import styled from "styled-components";
import { colors } from "utils/styles";

interface HighlightProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  weight?: "normal" | "medium" | "bold";
}

const Highlight = ({
  children,
  variant = "primary",
  weight = "medium",
}: HighlightProps) => {
  return (
    <HighlightWrapper variant={variant} weight={weight}>
      {children}
    </HighlightWrapper>
  );
};

export default Highlight;

const HighlightWrapper = styled.span<{ variant: string; weight: string }>`
  color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return colors.primary;
      case "secondary":
        return colors.primary_highlight;
      case "accent":
        return colors.darkgray;
      default:
        return colors.primary;
    }
  }};

  font-weight: ${(props) => {
    switch (props.weight) {
      case "normal":
        return "400";
      case "medium":
        return "500";
      case "bold":
        return "600";
      default:
        return "500";
    }
  }};

  transition: all 0.2s ease;

  &:hover {
    text-shadow: 0 0 8px ${colors.primary}40;
  }
`;
