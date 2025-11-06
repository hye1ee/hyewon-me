import styled from "styled-components";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  sectionTitle: string;
  gap?: number;
  children: React.ReactNode;
  id?: string;
  align?: "left" | "center" | "right";
  marginBottom?: string;
  titleSize?: string;
}

const Section = ({
  sectionTitle,
  children,
  id,
  gap = 12,
  align = "center",
  marginBottom = "16px",
  titleSize = "16px",
}: SectionProps) => {
  return (
    <SectionWrapper id={id} gap={gap}>
      <SectionTitle
        align={align}
        marginBottom={marginBottom}
        titleSize={titleSize}
      >
        {sectionTitle}
      </SectionTitle>
      {children}
    </SectionWrapper>
  );
};

export default Section;

const SectionWrapper = styled.div<{ gap: number }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  padding-top: 35px;
  padding-bottom: 10px;
  gap: ${(props) => props.gap}px;
  box-sizing: border-box;
`;
