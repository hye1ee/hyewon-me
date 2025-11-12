import PageContainer from "@components/PageContainer";
import Section from "@components/Section";
import ReactPlayer from "react-player";
import styled from "styled-components";
import {
  bodyTextStyle,
  colors,
  tagTextStyle,
  titleTextStyle,
} from "utils/styles";

type ProjectTextBlock = {
  type: "text";
  content: string | React.ReactNode;
};

type ProjectImageBlock = {
  type: "image";
  src: string;
  alt?: string;
  caption?: string;
};

type ProjectYoutubeBlock = {
  type: "youtube";
  url: string;
  title?: string;
};

type ProjectEmbedBlock = {
  type: "embed";
  html: string;
  title?: string;
  ratio?: number;
};

export type ProjectContentBlock =
  | ProjectTextBlock
  | ProjectImageBlock
  | ProjectYoutubeBlock
  | ProjectEmbedBlock;

interface ProjectTemplateProps {
  sectionTitle?: string;
  id?: string;
  title: string;
  projectPeriod: string;
  role: string;
  members: string[];
  blocks: ProjectContentBlock[];
}

const ProjectTemplate = ({
  sectionTitle = "Overview",
  id = "project",
  title,
  projectPeriod,
  role,
  members,
  blocks,
}: ProjectTemplateProps) => {
  return (
    <PageContainer>
      <Section
        sectionTitle={sectionTitle}
        id={id}
        style={{ gap: "28px", marginBottom: "180px" }}
      >
        <ProjectHeader>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectMeta>
            <MetaColumn>
              <MetaLabel>Members</MetaLabel>
              <MetaValue>
                {members.length > 0
                  ? members.map((member, idx) => {
                      const separator = idx < members.length - 1 ? ", " : "";
                      if (member.toLowerCase().includes("hyewon lee")) {
                        return (
                          <strong key={member + idx}>
                            Hyewon Lee{separator}
                          </strong>
                        );
                      }
                      return (
                        <span key={member + idx}>
                          {member}
                          {separator}
                        </span>
                      );
                    })
                  : "—"}
              </MetaValue>
            </MetaColumn>
            <MetaColumn>
              <MetaLabel>My Role</MetaLabel>
              <MetaValue>{role}</MetaValue>
            </MetaColumn>
            <MetaColumn>
              <MetaLabel>Project Period</MetaLabel>
              <MetaValue>
                {projectPeriod
                  .split(/(present)/i)
                  .filter((segment) => segment.length > 0)
                  .map((segment, idx) =>
                    segment.toLowerCase() === "present" ? (
                      <strong key={segment + idx}>Present</strong>
                    ) : (
                      <span key={segment + idx}>{segment}</span>
                    )
                  )}
              </MetaValue>
            </MetaColumn>
          </ProjectMeta>
        </ProjectHeader>

        <ProjectBody>
          {blocks.map((block, index) => {
            switch (block.type) {
              case "text":
                return (
                  <TextBlock key={`text-${index}`}>
                    {typeof block.content === "string"
                      ? block.content
                      : block.content}
                  </TextBlock>
                );
              case "image":
                return (
                  <MediaBlock key={`image-${index}`}>
                    <ProjectImage src={block.src} alt={block.alt ?? title} />
                    {block.caption && (
                      <ImageCaption>{block.caption}</ImageCaption>
                    )}
                  </MediaBlock>
                );
              case "youtube":
                return (
                  <MediaBlock key={`youtube-${index}`}>
                    {block.title && <MediaTitle>{block.title}</MediaTitle>}
                    <YoutubeContainer>
                      <ReactPlayer
                        url={block.url}
                        width="100%"
                        height="100%"
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </YoutubeContainer>
                  </MediaBlock>
                );
              case "embed":
                return (
                  <MediaBlock key={`embed-${index}`}>
                    {block.title && <MediaTitle>{block.title}</MediaTitle>}
                    <EmbedContainer $ratio={block.ratio ?? 56.25}>
                      <EmbedInner
                        dangerouslySetInnerHTML={{ __html: block.html }}
                      />
                    </EmbedContainer>
                  </MediaBlock>
                );
              default:
                return null;
            }
          })}
        </ProjectBody>
      </Section>
    </PageContainer>
  );
};

export default ProjectTemplate;

const ProjectHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;

  box-sizing: border-box;
  padding-bottom: 26px;
  margin-bottom: 12px;
  border-bottom: 1px dotted ${colors.gray};
`;

const ProjectTitle = styled.div`
  ${titleTextStyle}
  margin-bottom: 12px;
`;

const ProjectMeta = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media (width <= 768px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`;

const MetaColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const MetaLabel = styled.div`
  ${tagTextStyle}
`;

const MetaValue = styled.div`
  ${bodyTextStyle}/* font-weight: 450; */
`;

const ProjectBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TextBlock = styled.div`
  ${bodyTextStyle}
`;

const MediaBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;

const ImageCaption = styled.div`
  font-size: 13px;
  color: ${colors.darkgray};
  text-align: center;
`;

const MediaTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const YoutubeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 12px;
  overflow: hidden;

  @media (width <= 768px) {
    padding-top: 56.25%;
  }
`;

const EmbedContainer = styled.div<{ $ratio: number }>`
  position: relative;
  width: 100%;
  padding-top: ${(props) => props.$ratio}%;
  border-radius: 12px;
  overflow: hidden;
`;

const EmbedInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & iframe,
  & embed,
  & object {
    width: 100%;
    height: 100%;
  }
`;
