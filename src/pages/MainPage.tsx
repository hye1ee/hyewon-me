import styled from "styled-components";
import { colors } from "utils/styles";
import Tag from "@components/Tag";
import Underline from "@components/Underline";
import Highlight from "@components/Highlight";
import SmallTag from "@components/SmallTag";
import Section from "@components/Section";
import PageContainer from "@components/PageContainer";
import UpdatesBar from "@components/UpdatesBar";
import PixelFace from "@components/PixelFace";
import { AppWindow, Clapperboard, Orbit, Shapes } from "lucide-react";
import ProfilePhoto from "@components/ProfilePhoto";
import { getLocalUrl } from "utils";

// Helper to construct local domain links

const MainPage = () => {
  return (
    <PageContainer>
      {/* Main Section */}
      <Section sectionTitle="" id="about">
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
            <HeadlineRow>
              <Headline>
                Hi, I&apos;m Hyewon 혜원.{" "}
                <HeadlineMuted>
                  An HCI researcher designing how people and AI create
                  together.
                </HeadlineMuted>
              </Headline>
              <PixelFace />
            </HeadlineRow>
            <MobileProfilePhoto />

            <ContentContainer>
              I am a first-year Ph.D. student in{" "}
              <Highlight>Computer Science</Highlight> at{" "}
              <InlineLogo src="/icon/purdue.png" alt="Purdue" />
              <Underline
                text="Purdue University"
                link="https://www.cs.purdue.edu/"
              />
              , advised by{" "}
              <Underline text="Prof. Jason Wu" link="https://jasonwunix.com/" />
              . I am honored to be supported by the Ross Fellowship with Herbold
              Scholarship. I received my B.S. in computer science and industrial
              design from{" "}
              <InlineLogo src="/icon/kaist.png" alt="KAIST" />
              <Underline text="KAIST" link="https://kaist.ac.kr/en/" />, where I
              worked with{" "}
              <img
                style={{ width: "12px", height: "12px", marginRight: "4px" }}
                src="/icon/kixlab.png"
                alt="KIXLAB"
              />
              <Underline
                text="Prof. Juho Kim at KIXLAB"
                link="https://juhokim.com/"
              />{" "}
              and{" "}
              <img
                style={{ width: "12px", height: "12px", marginRight: "4px" }}
                src="/icon/makelab.png"
                alt="Makelab"
              />
              <Underline
                text="Prof. Andrea Bianchi at Makelab"
                link="https://make.kaist.ac.kr/andrea"
              />
              .
              <br />
              <br />
              I combine my background as a designer with computational methods
              to tackle problems in <Highlight>designer–AI interaction</Highlight>
              . My work has centered on{" "}
              <Highlight>
                agentic systems, user modeling, and sensemaking for creative
                work
              </Highlight>{" "}
              across{" "}
              <DomainIcon as={Clapperboard} aria-hidden="true" />
              video, <DomainIcon as={AppWindow} aria-hidden="true" />
              UI, <DomainIcon as={Shapes} aria-hidden="true" />
              graphics, and <DomainIcon as={Orbit} aria-hidden="true" />
              motion. Recently, I&apos;ve been bringing{" "}
              <Highlight>machine learning techniques</Highlight> into the
              interaction loop. My vision is to make the creative
              process <Highlight>more fun</Highlight>{" "}
              <Kaomoji dir="ltr">٩( ᐛ )و</Kaomoji> through AI-augmented
              interaction.
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  marginTop: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Tag>Human-AI Interaction</Tag>
                <Tag>Creativity Support</Tag>
                <Tag>Generative Interfaces</Tag>
              </div>
              <br />
              Outside research, I love documenting myself in creative ways{" "}
              <ToolIcons tabIndex={0}>
                <InlineLogo src="/icon/figma.svg" alt="Figma" />
                <InlineLogo src="/icon/womp.png" alt="Womp 3D" />
                <InlineLogo
                  src="/icon/premiere.svg"
                  alt="Premiere Pro"
                  style={{ marginRight: 0 }}
                />
                <ToolTip role="tooltip">favorite tools these days!</ToolTip>
              </ToolIcons>
              . Find me on Instagram{" "}
              <Underline
                text="@hia.some"
                link="https://www.instagram.com/hia.some/"
              />
              !
            </ContentContainer>
          </ContentWrapper>
        </div>
      </Section>


      <Section sectionTitle="" id="updates-section">
        <UpdatesBar />
      </Section>

      <Section
        sectionTitle="Publications"
        id="publications"
        gap={0}
        align="left"
      >
        <PubContainer>
          <PubItem
            image="/publications/thumb-guide.png"
            title="GUIDE: Designer-in-the-loop Authoring of Conformant Generative User Interfaces"
            authors={[
              "Hyewon Lee",
              "Ziying Wang",
              "Aiden Moy",
              "Saran Nagubandi",
              "Jason Wu",
            ]}
            description=""
            links={{
              Paper: "https://arxiv.org/abs/2609.21285",
            }}
            conference="arXiv 2026"
          />
          <PubItem
            image="/projects/thumb-hangulo.png"
            title="Hangulo: Demonstrating Workflow-Embedded AI Support for Korean Lettering Implementation"
            authors={["Hyewon Lee", "Tak Yeon Lee"]}
            description=""
            links={{
              Webpage: getLocalUrl("/project/hangulo"),
              Paper: getLocalUrl("/pdf/hangulo-full.pdf"),
            }}
            conference="UIST Adjunct 2026"
          />
          <PubItem
            image="/projects/thumb-tacitagent.png"
            title={`"When to Hand Off, When to Work Together": Understanding Concurrent Human-Agent Interaction in Shared Co-Creative Workspaces`}
            authors={[
              "Kihoon Son",
              "Hyewon Lee",
              "DaEun Choi",
              "Yoonsu Kim",
              "Tae Soo Kim",
              "Yoonjoo Lee",
              "John Joon Young Chung",
              "HyunJoon Jung",
              "Juho Kim",
            ]}
            description=""
            links={{
              Webpage: "https://cleo.kixlab.org/",
              Paper: "https://arxiv.org/abs/2603.02050",
            }}
            conference="arXiv 2026"
          />
          <PubItem
            image="/publications/thumb-radi.jpg"
            title="RADI: A Design Framework for Relational and Adaptive Disclosure Interfaces"
            authors={[
              "Hyewon Lee*",
              "Ihchae Ryu*",
              "Yumin Cho*",
              "Hyunseung Lim",
              "Hwajung Hong",
            ]}
            description=""
            links={{
              Webpage: getLocalUrl("/publication/radi"),
              Paper: "https://dl.acm.org/doi/10.1145/3746058.3758404",
              Archive: getLocalUrl("/pdf/radi-full.pdf"),
            }}
            conference="UIST Adjunct 2025"
          />
          <PubItem
            image="/publications/thumb-camara.jpg"
            title="CamARa: Exploring and Creating Camera Movements with Spatial Reference in Augmented Reality"
            authors={["Hyewon Lee", "Christopher Bannon", "Andrea Bianchi"]}
            description=""
            links={{
              Webpage: getLocalUrl("/publication/camara"),
              Paper: "https://dl.acm.org/doi/10.1145/3706599.3721180",
              Archive: getLocalUrl("/pdf/camara-full.pdf"),
            }}
            conference="CHI EA 2025"
          />
          <PubItem
            image="/publications/thumb-vivid.jpg"
            title="VIVID: Human-AI Collaborative Authoring of Vicarious Dialogues from Lecture Videos"
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

      <div style={{ marginBottom: "50px" }} />
    </PageContainer>
  );
};

export default MainPage;

// Styled Components
const ContentWrapper = styled.div`
  width: 100%;
  line-height: 0.8;
  font-weight: 350;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

// Two-tone intro line, Figma-style
const HeadlineRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 28px;
`;

const Headline = styled.h1`
  max-width: 640px;
  margin: 0;
  word-break: keep-all;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${colors.black};

  @media (width <= 1024px) {
    font-size: 26px;
  }
`;

const HeadlineMuted = styled.span`
  color: ${colors.darkgray};
`;

// Small line icon placed before a creative domain in the intro text
const DomainIcon = styled.svg`
  width: 14px;
  height: 14px;
  margin-right: 3px;
  vertical-align: -2px;
  stroke-width: 1.5;
  color: ${colors.darkgray};
`;

// Keeps the mixed-script face in left-to-right order on one line
const Kaomoji = styled.bdi`
  white-space: nowrap;
  unicode-bidi: isolate;
`;

// Tool icons with a small tooltip on hover
const TOOLTIP_BG = "#efefef";
const ToolTip = styled.span`
  position: absolute;
  left: 50%;
  bottom: calc(100% + 3px);
  transform: translate(-50%, 4px);
  padding: 4px 8px;
  border-radius: 6px;
  background: ${TOOLTIP_BG};
  color: ${colors.black};
  font-size: 12px;
  line-height: 1.4;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.15s,
    transform 0.15s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${TOOLTIP_BG};
  }
`;

const ToolIcons = styled.span`
  position: relative;
  display: inline-block;
  cursor: default;
  outline: none;

  &:hover ${ToolTip}, &:focus-visible ${ToolTip} {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

// Small logo placed before a name in the intro text
const InlineLogo = styled.img`
  height: 12px;
  width: auto;
  margin-right: 4px;
  vertical-align: -1px;
`;

const ContentContainer = styled.div`
  line-height: 1.6;
  width: 100%;

  /* font-size: 14px; */
`;

const MobileProfilePhoto = styled(ProfilePhoto)`
  display: none;

  @media (width <= 1024px) {
    display: block;
    max-height: 50vh;
    margin-bottom: 24px;
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
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </HorizontalImage>
      <PubInfoContainer>
        <ConferenceBadge>{conference}</ConferenceBadge>
        <PubTitle
          $clickable={Boolean(links.Webpage)}
          onClick={() => links.Webpage && window.open(links.Webpage)}
        >
          {title}
        </PubTitle>
        <PubAuthors>
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
        </PubAuthors>
        <PubLinks>
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
                onClick={() => window.open(link[1])}
              >
                {link[0]}
              </SmallTag>
            );
          })}
        </PubLinks>
      </PubInfoContainer>
    </PubItemContainer>
  );
};

const PubItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 28px;
  padding: 24px 0;
  border-top: 1px dotted ${colors.gray};
  box-sizing: border-box;

  &:first-child {
    border-top: none;
    padding-top: 0;
  }

  @media (width <= 768px) {
    flex-direction: column;
    gap: 14px;
  }
`;

const PubInfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  text-align: left;
`;

const PubTitle = styled.div<{ $clickable: boolean }>`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: ${colors.black};
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};

  &:hover {
    text-decoration: ${(props) => (props.$clickable ? "underline" : "none")};
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }
`;

const PubAuthors = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.darkgray};
`;

const PubLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 2px;
`;

const HorizontalImage = styled.div`
  width: 260px;
  height: 146px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;

  @media (width <= 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 2 / 1;
  }
`;

const ConferenceBadge = styled.div`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.darkgray};
`;
