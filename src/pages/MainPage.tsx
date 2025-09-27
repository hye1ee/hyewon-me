import styled from "styled-components";
import { colors } from "utils/styles";
import NewsItem from "@components/NewsItem";
import { news, newsIcons } from "@assets/strings/news";
import Tag from "@components/Tag";
import Underline from "@components/Underline";
import Highlight from "@components/Highlight";
import SmallTag from "@components/SmallTag";
import Section from "@components/Section";
import BodyContent from "@components/BodyContent";
import { useState } from "react";

const MainPage = () => {
  return (
    <PageContainer>
      {/* Main Section */}
      <Section sectionTitle="Hi, I'm Hyewon Lee, 이혜원" id="about">
        <div
          style={{
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            lineHeight: 1.1,
            gap: "12px",
            position: "relative",
          }}
        >
          <ContentWrapper>
            <ProfileImage src="/img/profile.png" alt="Hyewon Lee" />

            <BodyContent>
              I am a senior undergraduate student and{" "}
              <Highlight>HCI researcher</Highlight> at{" "}
              <Underline text="KAIST" link="https://kaist.ac.kr/en/" />,
              double-majoring in{" "}
              <Underline
                text="Computer Science"
                link="https://cs.kaist.ac.kr/"
              />{" "}
              and{" "}
              <Underline
                text="Industrial Design"
                link="https://id.kaist.ac.kr/"
              />
              . I work with{" "}
              <Underline
                text="Prof. Juho Kim at KIXLAB"
                link="https://juhokim.com/"
              />{" "}
              and previously collaborated with{" "}
              <Underline
                text="Prof. Andrea Bianchi at Makelab"
                link="https://make.kaist.ac.kr/andrea"
              />
              .
              <br />
              <br />
              My research motivation lies in{" "}
              <Highlight variant="secondary">
                making the creative process enjoyable
              </Highlight>
              . Humans are inherently creative—they constantly discover hidden
              potentials of tools, while tools inspire creativity and expression
              in return. I believe good creativity support tools should bring
              joy both in the process of creation and in the sense of
              accomplishment. With the rapid progress of generative AI, the
              latter has become easier to achieve, but tools must evolve further
              to naturally blend into the creative process itself. My work
              focuses on{" "}
              <Highlight variant="secondary">
                developing creativity support tools by integrating cutting-edge
                technologies{" "}
              </Highlight>{" "}
              like AI and XR to expand the design space of creation.
              <br />
              <br />
              Outside research, I enjoy expressing myself through videos,
              writing, and music. I also find huge energy in activities like
              taekwondo and badminton. I love sharing insights through teaching
              and networking, so please feel free to reach out at
              hyewon0809[at]kaist.ac.kr.
            </BodyContent>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                marginTop: "12px",
                flexWrap: "wrap",
              }}
            >
              <Tag># Creativity Support Tools</Tag>
              <Tag># Human-AI Interaction</Tag>
              <Tag># Generative Interfaces</Tag>
            </div>
            <div
              style={{
                color: colors.darkgray,
                marginTop: "15px",
                lineHeight: "1.6",
              }}
            >
              {
                "*I'm a PhD applicant this year for 2026 entry.\n*I'm updating my website, please visit again after a few days (09/27).  "
              }
            </div>
          </ContentWrapper>
        </div>
      </Section>
      <Section sectionTitle="Updates" id="updates" gap={0}>
        <NewsCarousel>
          {/* {newsFixed.map((el, index) => (
                <NewsItem
                  key={`fixed-${index}`}
                  icon={newsIcons[el.icon]}
                  line={el.line}
                  pinned={true}
                />
              ))} */}
          {news.map((el, index) => (
            <NewsItem
              key={`news-${index}`}
              icon={newsIcons[el.icon]}
              line={el.line}
              pinned={false}
              date={el.date}
            />
          ))}
        </NewsCarousel>
      </Section>

      {/* Publications Section */}
      <Section sectionTitle="Publications" id="publications">
        <BodyContent flex={true} gap={20}>
          <PubItem
            image="/publications/thumb-radi.png"
            title="RADI: A Design Framework for Relational and Adaptive Disclosure Interfaces"
            // titleLink="https://hyewon.me/pub/camara/"
            authors={[
              "Hyewon Lee*",
              "Ihchae Ryu*",
              "Yumin Cho*",
              "Hyunseung Lim",
              "Hwajung Hong",
            ]}
            description=""
            links={{
              Paper:
                "https://camps.aptaracorp.com/ACM_PMS/PMS/ACM/UISTADJUNCT25/58/34d31128-6f50-11f0-957d-16ffd757ba29/OUT/uistadjunct25-58.html#",
            }}
            conference="UIST Adjunct 2025"
          />
          <PubItem
            image="/publications/thumb-camara.jpg"
            title="CamARa: Exploring and Creating Camera Movements with Spatial Reference in Augmented Reality"
            titleLink="https://hyewon.me/pub/camara/"
            authors={["Hyewon Lee", "Christopher Bannon", "Andrea Bianchi"]}
            description=""
            links={{
              Webpage: "https://hyewon.me/pub/camara",
              Paper: "https://dl.acm.org/doi/10.1145/3706599.3721180",
            }}
            conference="CHI EA 2025"
          />
          <PubItem
            image="/publications/thumb-vivid.jpg"
            title="VIVID: Human-AI Collaborative Authoring of Vicarious Dialogues from Lecture Videos"
            titleLink="https://vivid.kixlab.org/"
            authors={["Seulgi Choi", "Hyewon Lee", "Yoonjoo Lee", "Juho Kim"]}
            description=""
            links={{
              Webpage: "https://vivid.kixlab.org/",
              Paper: "https://dl.acm.org/doi/10.1145/3613904.3642867",
            }}
            conference="CHI 2024"
          />
        </BodyContent>
      </Section>
      <div style={{ marginBottom: "50px" }} />
    </PageContainer>
  );
};

export default MainPage;

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const ContentWrapper = styled.div`
  width: 100%;
  line-height: 0.8;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const NewsCarousel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 0;

  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Smooth scrolling */
  scroll-behavior: smooth;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: none;

  @media (width <= 1024px) {
    display: block;
    align-self: center;
    max-width: 350px;
  }
`;

interface PubItemProps {
  image: string;
  title: string;
  titleLink?: string;
  authors: string[];
  description: string;
  links: { Webpage?: string; Paper?: string; Github?: string };
  conference?: string;
}

const PubItem = ({
  image,
  title,
  titleLink,
  authors,
  description,
  links,
  conference,
}: PubItemProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <ThumbnailImage>
        <img
          src={image}
          alt={image}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
      </ThumbnailImage>
      <div
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <Tag>{conference}</Tag>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            fontWeight: hover ? 500 : 450,
            fontSize: "20px",
            cursor: "pointer",
            textDecoration: hover ? "underline" : "none",
            textDecorationStyle: hover ? "dotted" : "solid",
            transition: "all 0.3s",
            color: "black",
            marginLeft: "8px",
          }}
          onClick={() => window.open(titleLink, "_blank")}
        >
          {title}
        </div>
        <div style={{ marginLeft: "8px", color: colors.darkgray }}>
          {authors.map((author, index) => (
            <span key={index}>
              {author.includes("Hyewon Lee") ? (
                <div
                  style={{
                    fontWeight: 500,
                    color: colors.black,
                    display: "inline-block",
                  }}
                >
                  {author}
                </div>
              ) : (
                author
              )}
              {index < authors.length - 1 && ", "}
            </span>
          ))}
        </div>
        <div
          className="hide-on-mobile"
          style={{ fontSize: "14px", marginLeft: "8px" }}
        >
          {description}
        </div>
        <div
          style={{
            gap: "8px",
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            marginTop: "8px",
          }}
        >
          {Object.entries(links).map((link, idx) => (
            <SmallTag key={idx} onClick={() => window.open(link[1], "_blank")}>
              {link[0]}
            </SmallTag>
          ))}
        </div>
      </div>
    </div>
  );
};

const ThumbnailImage = styled.div`
  width: 200px;
  margin-right: 20px;
  border-radius: 8px;
  border: 0.5px solid ${colors.gray};

  @media (width <= 768px) {
    display: none;
  }
`;
