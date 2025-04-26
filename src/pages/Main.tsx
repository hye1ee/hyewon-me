import styled from "styled-components";

import PageLayout from "@components/PageLayout";

// import LinkedinIcon from "@assets/linkedinIcon.png";
// import GithubIcon from "@assets/githubIcon.png";
// import CvIcon from "@assets/cvIcon.png";
import NewsItem from "@components/NewsItem";
import { news, newsFixed, newsIcons } from "@assets/strings/news";
import { colors } from "utils/styles";
import Tag from "@components/Tag";
import Underline from "@components/Underline";

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
        >{`Hi, I'm Hyewon Lee, 이혜원`}</div>

        <ContentWrapper>
          <div>
            {"I'm an "}
            <div
              style={{
                display: "inline-block",
                fontWeight: 500,
                color: colors.primary,
              }}
            >
              HCI researcher
            </div>
            {" and "}
            <div
              style={{
                display: "inline-block",
                fontWeight: 500,
                color: colors.primary,
              }}
            >
              creative technologist
            </div>
            {`\npassionate about crafting creative interactions for designers\nthrough cutting-edge computer technologies.`}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              marginTop: "12px",
              flexWrap: "wrap",
            }}
          >
            <Tag># Creativity Support</Tag>
            <Tag># Design Tool</Tag>
            <Tag># AI</Tag>
            <Tag># XR</Tag>
          </div>
        </ContentWrapper>

        <ContentWrapper>
          <div>
            {"I am currently an "}
            <div
              style={{
                display: "inline-block",
                fontWeight: 500,
                color: colors.primary,
              }}
            >
              undergraduate student
            </div>
          </div>

          <div>
            {"studying "}
            <Underline text="Computer Science" link="https://cs.kaist.ac.kr/" />
            {" and "}
            <Underline
              text="Industrial Design"
              link="https://id.kaist.ac.kr/"
            />
            {" @ "}
            <Underline text="KAIST" link="https://kaist.ac.kr/en/" />
          </div>
          <div
            style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
              marginTop: "15px",
            }}
          >
            {"I'm seeking a "}
            <div
              style={{
                display: "inline-block",
                fontWeight: 500,
                textDecoration: "underline",
                textDecorationStyle: "dotted",
              }}
            >
              Phd position
            </div>
            {" this year!"}
          </div>
        </ContentWrapper>
        <div // for alignment
          style={{
            fontWeight: 450,
            fontSize: "20px",
            textAlign: "center",
            opacity: 0,
          }}
        >{`Hi, I'm Hyewon Lee, 이혜원`}</div>
      </div>
      <NewsWrapper>
        <NewsTitle>Updates</NewsTitle>
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
      </NewsWrapper>
    </PageLayout>
  );
};
export default Main;

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

const NewsWrapper = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0px;
  bottom: 0px;

  box-sizing: border-box;
  border-left: 1px solid ${colors.gray};

  @media (width <= 1024px) {
    width: 100%;
    height: fit-content;

    border-left: 0px;
    border-top: 1px solid ${colors.gray};

    position: relative;
  }
`;

const NewsTitle = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  padding: 30px 0px 30px 20px;
  border-bottom: 1px solid ${colors.gray};

  @media (width <= 1024px) {
    padding: 30px 0px 30px 32px;
  }
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

  @media (width <= 1024px) {
    width: 100%;
    height: fit-content;

    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;
