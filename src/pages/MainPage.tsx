import styled from "styled-components";
import { colors } from "utils/styles";
import NewsItem from "@components/NewsItem";
import { news } from "@assets/strings/news";
import Tag from "@components/Tag";
import Underline from "@components/Underline";
import Highlight from "@components/Highlight";
import SmallTag from "@components/SmallTag";
import Section from "@components/Section";

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

            <ContentContainer>
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
            </ContentContainer>

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
          </ContentWrapper>
        </div>
      </Section>
      {/* Publications and Updates Side by Side */}
      <SplitSectionContainer id="publications">
        <Section sectionTitle="Publications" gap={0} align="left">
          <PubContainer>
            <PubItem
              image="/publications/thumb-radi.jpg"
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
                Paper: "https://dl.acm.org/doi/10.1145/3746058.3758404",
                Archive: "",
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
                Archive: "",
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
          </PubContainer>
        </Section>

        <Section sectionTitle="Updates" id="updates" gap={0} align="left">
          <NewsContainer>
            {news.map((el, index) => (
              <NewsItem
                key={`news-${index}`}
                icon={el.icon}
                line={el.line}
                date={el.date}
              />
            ))}
          </NewsContainer>
        </Section>
      </SplitSectionContainer>
      <div style={{ marginBottom: "50px" }} />
    </PageContainer>
  );
};

export default MainPage;

// Styled Components
const PageContainer = styled.div`
  width: 100%;

  box-sizing: border-box;
  padding-right: calc(100% - 900px);

  @media (width <= 1280px) {
    padding-right: calc(100% - 800px);
  }

  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const ContentWrapper = styled.div`
  width: 100%;
  line-height: 0.8;
  font-weight: 350;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ContentContainer = styled.div`
  line-height: 1.6;
  width: 100%;

  font-size: 14px;
`;

const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const SplitSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: flex-start;

  @media (width <= 1024px) {
    flex-direction: column;
  }

  /* Nested Sections styling */
  & > div {
    flex: 1;

    &:first-child {
      padding-right: 16px !important;
    }

    &:last-child {
      padding-left: 16px !important;
    }
  }
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

const PubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

interface PubItemProps {
  image: string;
  title: string;
  titleLink?: string;
  authors: string[];
  description: string;
  links: {
    Webpage?: string;
    Paper?: string;
    Github?: string;
    Archive?: string;
  };
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
  return (
    <PubItemContainer>
      <HorizontalImage>
        <img
          src={image}
          alt={image}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <ConferenceBadge>{conference}</ConferenceBadge>
      </HorizontalImage>
      <PubInfoContainer>
        <PubTitle onClick={() => titleLink && window.open(titleLink, "_blank")}>
          {title}
        </PubTitle>
        <div
          style={{
            color: colors.darkgray,
            fontSize: "12px",
            lineHeight: "1.4",
          }}
        >
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
          style={{
            gap: "16px",
            display: "flex",
            alignItems: "center",
            marginTop: "0px",
          }}
        >
          {Object.entries(links).map((link, idx) => {
            const linkType = link[0].toLowerCase();
            let iconPath = "";

            if (linkType.includes("paper")) {
              iconPath = "/icon/paper.svg";
            } else if (
              linkType.includes("webpage") ||
              linkType.includes("website")
            ) {
              iconPath = "/icon/home.svg";
            } else if (linkType.includes("archive")) {
              iconPath = "/icon/pdf.svg";
            }

            return (
              <SmallTag
                key={idx}
                icon={iconPath}
                onClick={() => window.open(link[1], "_blank")}
              >
                {link[0]}
              </SmallTag>
            );
          })}
        </div>
      </PubInfoContainer>
    </PubItemContainer>
  );
};

const PubItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 12px; */
  border-bottom: 1px solid ${colors.gray};
  box-sizing: border-box;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const PubInfoContainer = styled.div`
  padding: 16px 4px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
`;

const PubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  color: black;
  line-height: 1.6;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    font-weight: 500;
    /* text-decoration: underline;
    text-decoration-style: solid; */
    text-shadow: 2px 2px 8px rgba(0, 169, 234, 0.3);
  }
`;

const HorizontalImage = styled.div`
  width: 100%;
  height: 160px;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
`;

const ConferenceBadge = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10px;
  font-weight: 400;
  padding: 6px 10px;
  background-color: #fafcfe;
  border: 1px solid ${colors.gray};
  color: ${colors.darkgray};

  z-index: 1;
`;
