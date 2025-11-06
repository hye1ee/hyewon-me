import styled from "styled-components";

interface SectionTitleProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  marginBottom?: string;
  titleSize?: string;
}

const SectionTitle = ({
  children,
  align = "center",
  marginBottom = "16px",
  titleSize = "16px",
}: SectionTitleProps) => {
  return (
    <TitleWrapper
      align={align}
      marginBottom={marginBottom}
      titleSize={titleSize}
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
}>`
  align-self: flex-start;
  font-weight: 550;
  font-size: ${(props) => props.titleSize};
  text-align: ${(props) => props.align};
  margin-bottom: ${(props) => props.marginBottom};
  color: black;
`;
