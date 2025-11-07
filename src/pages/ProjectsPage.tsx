import styled from "styled-components";
import { colors } from "utils/styles";
import projects from "@assets/strings/projects";
import Tag from "@components/Tag";
import Section from "@components/Section";
import PageContainer from "@components/PageContainer";
import { useState } from "react";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Research" | "Web" | "Design"
  >("All");
  return (
    <PageContainer>
      <Section sectionTitle="Projects" id="projects" titleSize="20px">
        {/* <ContentContainer>
          The projects here mainly focus on interaction design. They come from
          my research, coursework, and personal explorations-for fun!
        </ContentContainer> */}
        <FilterContainer>
          <FilterButton
            active={activeFilter === "All"}
            onClick={() => setActiveFilter("All")}
          >
            All
          </FilterButton>
          <FilterButton
            active={activeFilter === "Research"}
            onClick={() => setActiveFilter("Research")}
          >
            Research
          </FilterButton>
          <FilterButton
            active={activeFilter === "Web"}
            onClick={() => setActiveFilter("Web")}
          >
            Web
          </FilterButton>
          <FilterButton
            active={activeFilter === "Design"}
            onClick={() => setActiveFilter("Design")}
          >
            Interactive Design
          </FilterButton>
        </FilterContainer>
        <ProjectsContainer>
          {projects
            .filter((el) => {
              if (activeFilter === "All") {
                return true;
              }
              return el.type === activeFilter;
            })
            .map((el, index) => (
              <ProjectItem
                key={index}
                title={el.title}
                src={el.img}
                year={el.year}
                type={el.type}
                tags={el.tags}
                link={el.link}
                description={el.description}
              />
            ))}
        </ProjectsContainer>
      </Section>
    </PageContainer>
  );
};

export default ProjectsPage;

// Styled Components
const ProjectsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  line-height: 1.6;
  width: 100%;

  /* font-size: 14px; */
`;

interface ProjectItemProps {
  title: string;
  src: string;
  year: number;
  type: "Web" | "Research" | "Design";
  tags?: string[];
  link?: string;
  description: string;
}

const ProjectItem = (props: ProjectItemProps) => {
  return (
    <ProjectItemWrapper
      onClick={() => {
        if (props.link) window.open(props.link);
      }}
    >
      <ProjectTitleWrapper>
        <div style={{ fontSize: "16px", fontWeight: 550 }}>{props.title}</div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Tag>{"# " + props.type}</Tag>
          <div style={{ fontSize: "14px", color: colors.darkgray }}>
            {props.year}
          </div>
        </div>
      </ProjectTitleWrapper>
      <ProjectItemImgWrapper>
        <ProjectItemImg alt={props.title} src={props.src} />
      </ProjectItemImgWrapper>
      <ProjectDescription>{props.description}</ProjectDescription>
    </ProjectItemWrapper>
  );
};

const ProjectTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ProjectItemWrapper = styled.div`
  width: 48%;
  @media (width <= 1024px) {
    width: 100%;
  }
  height: fit-content;
  box-sizing: border-box;
  margin: 0 0 60px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    transition: all 1s ease;
  }
`;

const ProjectItemImgWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  /* border: 1px solid ${colors.gray}; */
  overflow: hidden;
`;

const ProjectItemImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProjectDescription = styled.div`
  /* line-height: 1.6; */
  font-size: 14px;
  color: ${colors.darkgray};
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  /* border: 1px solid ${colors.black}; */
  box-sizing: border-box;
  padding: 4px 0px;
`;

const FilterButton = styled.div<{ active: boolean }>`
  cursor: pointer;
  padding: 4px 0px;
  border-radius: 4px;
  color: ${(props) => (props.active ? colors.primary : colors.darkgray)};
  font-weight: ${(props) => (props.active ? 550 : 350)};
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    /* color: ${colors.black}; */
    font-weight: 550;
  }
`;
