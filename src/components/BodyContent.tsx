import styled from "styled-components";

interface BodyContentProps {
  children: React.ReactNode;
  lineHeight?: string;
  width?: string;
  flex?: boolean;
  gap?: number;
}

const BodyContent = ({
  children,
  lineHeight = "1.6",
  width = "900px",
  flex = false,
  gap = 0,
}: BodyContentProps) => {
  return (
    <BodyWrapper lineHeight={lineHeight} width={width} gap={gap} flex={flex}>
      {children}
    </BodyWrapper>
  );
};

export default BodyContent;

const BodyWrapper = styled.div<{
  lineHeight: string;
  width: string;
  gap: number;
  flex: boolean;
}>`
  ${(props) =>
    props.flex && `display: flex; flex-direction: column; gap: ${props.gap}px;`}

  line-height: ${(props) => props.lineHeight};
  max-width: ${(props) => props.width};
  width: 80%;
  margin-right: 60px;

  @media (width <= 1280px) {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
  }
  @media (width >= 1440px) {
  }
`;
