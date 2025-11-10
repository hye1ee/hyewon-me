import { useState } from "react";
import PageContainer from "@components/PageContainer";
import Section from "@components/Section";
import SmallTag from "@components/SmallTag";
import ReactPlayer from "react-player";
import styled from "styled-components";
import {
  bodyTextStyle,
  colors,
  subtitleTextStyle,
  tagTextStyle,
  titleTextStyle,
} from "utils/styles";

type PublicationTextBlock = {
  type: "text";
  content: string;
};

type PublicationImageBlock = {
  type: "image";
  src: string;
  alt?: string;
  caption?: string;
};

type PublicationYoutubeBlock = {
  type: "youtube";
  url: string;
  title?: string;
};

export type PublicationContentBlock =
  | PublicationTextBlock
  | PublicationImageBlock
  | PublicationYoutubeBlock;

export type PublicationLink = {
  text: string;
  href: string;
  icon?: string;
};

export type PublicationAuthor = {
  name: string;
  affiliation?: string;
  link?: string;
  img?: string;
};

type PublicationSection = {
  title: string;
  body: string;
  kind?: "default" | "bibtex";
  copyLabel?: string;
};

interface PublicationTemplateProps {
  sectionTitle?: string;
  id?: string;
  title: string;
  links?: PublicationLink[];
  authors?: PublicationAuthor[];
  blocks?: PublicationContentBlock[];
  sections?: PublicationSection[];
}

const PublicationTemplate = ({
  sectionTitle = "Publication",
  id = "publication",
  title,
  links = [],
  authors = [],
  blocks = [],
  sections = [],
}: PublicationTemplateProps) => {
  const [copiedSection, setCopiedSection] = useState<number | null>(null);

  const handleCopySection = (index: number, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedSection(index);
      window.dispatchEvent(
        new CustomEvent("publication:bibtex-copied", {
          detail: { index, text },
        })
      );
      setTimeout(() => setCopiedSection(null), 1600);
    });
  };

  return (
    <PageContainer>
      <Section
        sectionTitle={sectionTitle}
        id={id}
        style={{ alignItems: "center", gap: "28px", marginBottom: "180px" }}
      >
        <HeaderCard>
          <PublicationTitle>{title}</PublicationTitle>
          {links.length > 0 && (
            <LinksRow>
              {links.map((link) => (
                <SmallTag
                  key={link.text}
                  icon={link.icon}
                  onClick={() => window.open(link.href, "_blank")}
                >
                  {link.text}
                </SmallTag>
              ))}
            </LinksRow>
          )}

          {authors.length > 0 && (
            <AuthorsList>
              {authors.map((author) => (
                <AuthorCard key={author.name} author={author} />
              ))}
            </AuthorsList>
          )}
        </HeaderCard>

        <BodyWrapper>
          {blocks.map((block, index) => {
            switch (block.type) {
              case "text":
                return (
                  <TextBlock key={`text-${index}`}>{block.content}</TextBlock>
                );
              case "image":
                return (
                  <MediaBlock key={`image-${index}`}>
                    <MediaImage src={block.src} alt={block.alt ?? title} />
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
              default:
                return null;
            }
          })}

          {sections.map((section, index) => (
            <SectionCard key={`section-${index}`}>
              <SectionDivider />
              <SectionTitle>{section.title}</SectionTitle>
              {section.kind === "bibtex" ? (
                <div>
                  <BibtexContainer
                    role="button"
                    $copied={copiedSection === index}
                    onClick={() => handleCopySection(index, section.body)}
                    aria-label="Copy BibTeX to clipboard"
                  >
                    {section.body}
                  </BibtexContainer>
                  {copiedSection === index && (
                    <CopyToast>{section.copyLabel ?? "Copied!"}</CopyToast>
                  )}
                </div>
              ) : (
                <SectionBody>{section.body}</SectionBody>
              )}
            </SectionCard>
          ))}
        </BodyWrapper>
      </Section>
    </PageContainer>
  );
};

export default PublicationTemplate;

const HeaderCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;

  box-sizing: border-box;
  padding-bottom: 26px;
  border-bottom: 1px dotted ${colors.gray};
`;

const PublicationTitle = styled.div`
  ${titleTextStyle}
`;

const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const AuthorsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TextBlock = styled.div`
  ${bodyTextStyle}
  white-space: pre-wrap;
`;

const MediaBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MediaImage = styled.img`
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

const SectionCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionDivider = styled.div`
  width: 100%;
  /* border-bottom: 1px solid ${colors.gray}; */
  margin-bottom: 8px;
`;

const SectionTitle = styled.div`
  ${subtitleTextStyle}
`;

const SectionBody = styled.div`
  ${bodyTextStyle}
  display: flex;
  flex-direction: column;
  gap: 12px;
  white-space: pre-wrap;
`;

const AuthorCard = ({ author }: { author: PublicationAuthor }) => {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (author.link) {
      window.open(author.link, "_blank");
    }
  };

  return (
    <AuthorCardWrapper>
      {author.img && <AuthorAvatar src={author.img} alt={author.name} />}
      <AuthorName
        onMouseEnter={() => author.link && setHover(true)}
        onMouseLeave={() => author.link && setHover(false)}
        onClick={handleClick}
        $clickable={Boolean(author.link)}
        $hover={hover}
      >
        {author.name}
      </AuthorName>
      {author.affiliation && (
        <AuthorAffiliation>{author.affiliation}</AuthorAffiliation>
      )}
    </AuthorCardWrapper>
  );
};

const AuthorCardWrapper = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (width <= 768px) {
    width: 100px;
  }
`;

const AuthorAvatar = styled.img`
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 6px;

  @media (width <= 768px) {
    width: 56px;
    height: 56px;
  }
`;

const AuthorName = styled.div<{ $clickable: boolean; $hover: boolean }>`
  ${bodyTextStyle}
  font-weight: 500;
  text-align: center;
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
  text-decoration: ${(props) => (props.$hover ? "underline" : "none")};
  text-decoration-style: dotted;
`;

const AuthorAffiliation = styled.div`
  ${tagTextStyle}
  text-align: center;
`;

const BibtexContainer = styled.div<{ $copied: boolean }>`
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  padding: 16px;
  position: relative;
  background: ${colors.lightgray};
  color: ${colors.darkgray};
  font-family: monospace;
  font-size: 12px;
  white-space: pre-wrap;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${(props) =>
    props.$copied ? colors.lightgray_highlight : colors.lightgray};
  color: ${(props) => (props.$copied ? colors.black : colors.darkgray)};

  &:hover {
    background: ${colors.lightgray_highlight};
  }
`;

const CopyToast = styled.div`
  ${tagTextStyle}
  color: ${colors.primary};
  font-style: italic;
  margin-top: 6px;
  text-align: right;
`;
