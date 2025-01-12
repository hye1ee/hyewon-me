import styled from "styled-components";

import PageLayout from "@components/PageLayout";

// import LinkedinIcon from "@assets/linkedinIcon.png";
// import GithubIcon from "@assets/githubIcon.png";
// import CvIcon from "@assets/cvIcon.png";
import NewsItem from "@components/NewsItem";
import { news, newsFixed, newsIcons } from "@assets/strings/news";
import { colors } from "utils/styles";
import Tag from "@components/Tag";

const Main = () => {
  return (
    <PageLayout>
      <div
        style={{
          width: "100%",
          height: "100%",

          boxSizing: "border-box",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          lineHeight: 1.1,
          gap: "16px",
          position: "relative",
        }}
      >
        {/* <MainImg alt="profile" src="/img/profile.png" /> */}

        <div
          style={{ fontWeight: 450, fontSize: "20px", textAlign: "center" }}
        >{`Imagine, Build, and Play!`}</div>

        <ContentWrapper>
          <div>
            <div style={{ display: "inline-block", fontWeight: 500 }}>
              Hyewon Lee
            </div>
            {" is an "}
            <div
              style={{
                display: "inline-block",
                fontWeight: 500,
                color: colors.primary,
              }}
            >
              HCI Researcher
            </div>
            {" and "}
            <div
              style={{
                display: "inline-block",
                fontWeight: 500,
                color: colors.primary,
              }}
            >
              Creative Technologist
            </div>
            {`\nwho is passionate about crafting creative interactions\nthrough cutting-edge computer technologies.`}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              marginTop: "12px",
            }}
          >
            <Tag># Creativity Support</Tag>
            <Tag># Multimodal Interaction</Tag>
            <Tag># AI</Tag>
            <Tag># XR</Tag>
          </div>
        </ContentWrapper>

        <ContentWrapper>
          {`hyewon0809@kaist.ac.kr\nDaejeon, South Korea\n`}
          <div
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => window.open("https://kaist.ac.kr/en/")}
          >
            Korea Advanced Institute of Science and Technology
          </div>
        </ContentWrapper>
        <div
          style={{
            fontWeight: 450,
            fontSize: "20px",
            textAlign: "center",
            opacity: 0,
          }}
        >{`Imagine, Build, and Play!`}</div>
      </div>
      <div
        style={{
          width: "fit-content",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          right: "0px",
          bottom: "0px",

          boxSizing: "border-box",
          padding: "",
          borderLeft: `1px solid ${colors.gray}`,
        }}
      >
        <div
          style={{
            fontSize: "14px",
            boxSizing: "border-box",
            padding: "30px 0px 30px 20px",
            borderBottom: `1px solid ${colors.gray}`,
          }}
        >
          Updates
        </div>
        <NewsSection>
          {newsFixed.map((el) => (
            <NewsItem icon={newsIcons[el.icon]} line={el.line} pinned={true} />
          ))}
          {news.map((el) => (
            <NewsItem
              icon={newsIcons[el.icon]}
              line={el.line}
              pinned={false}
              date={el.date}
            />
          ))}
        </NewsSection>
      </div>
    </PageLayout>
  );
};
export default Main;

const MainImg = styled.img`
  width: 400px;

  cursor: pointer;

  &:hover {
    width: 300px;
  }
  transition: all 0.5s;
`;

const ContentWrapper = styled.div`
  width: fit-content;
  height: 300px;

  line-height: 1.4;
  font-weight: 350;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const NewsSection = styled.div`
  width: fit-content;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  box-sizing: border-box;

  overflow-y: scroll;
`;
