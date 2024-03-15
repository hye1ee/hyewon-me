import styled from "styled-components";
import { ReactNode } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import LottieSectionTitle from "@assets/section_title.json";

interface ContentLayoutProps {
  title: string;
  id: string;
  children: ReactNode;
  gap?: number;
}

const ContentLayout = (props: ContentLayoutProps) => {
  return (
    <ContentLayoutWrapper id={props.id}>
      <SectionDivider />

      <ContentContainer>
        <SectionTitleWrapper>
          <SectionTitleText>
            {props.title}
            <Lottie
              style={{
                width: "130px",
                position: "absolute",
              }}
              autoplay={true}
              loop={true}
              animationData={LottieSectionTitle}
            />
          </SectionTitleText>
        </SectionTitleWrapper>
        <ContentColWrapper style={{ gap: `${props.gap}px` }}>
          {props.children}
        </ContentColWrapper>
      </ContentContainer>
    </ContentLayoutWrapper>
  );
};
export default ContentLayout;

const ContentLayoutWrapper = styled.div<{ main?: boolean }>`
  width: 100%;
  height: "fit-content";

  position: relative;
  box-sizing: border-box;
  /* padding: 0px 200px; */

  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 80px 0 80px 0;
`;

const ContentColWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 1280px;
  max-width: 90%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const SectionTitleWrapper = styled.div`
  width: 230px;
  margin-top: 10px;
`;

const SectionTitleText = styled.div`
  width: 150px;
  font-size: 18px;
  font-weight: bold;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;
