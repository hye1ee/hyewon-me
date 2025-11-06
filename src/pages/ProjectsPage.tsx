import styled from "styled-components";
import { colors } from "utils/styles";
import projects from "@assets/strings/projects";
import Tag from "@components/Tag";
import Section from "@components/Section";
import { useState } from "react";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<
    "Selected" | "Research" | "Web" | "Design"
  >("Selected");
  return (
    <PageContainer>
      <Section sectionTitle="Projects" id="projects">
        <div style={{ display: "flex", gap: "8px", fontWeight: 350 }}>
          <FilterButton
            active={activeFilter === "Selected"}
            onClick={() => setActiveFilter("Selected")}
          >
            Selected
          </FilterButton>
          {"/"}
          <FilterButton
            active={activeFilter === "Research"}
            onClick={() => setActiveFilter("Research")}
          >
            Research
          </FilterButton>
          {"/"}
          <FilterButton
            active={activeFilter === "Web"}
            onClick={() => setActiveFilter("Web")}
          >
            Web
          </FilterButton>
          {"/"}
          <FilterButton
            active={activeFilter === "Design"}
            onClick={() => setActiveFilter("Design")}
          >
            Interactive Design
          </FilterButton>
        </div>
        <div
          style={{ width: "100%", borderBottom: `1px solid ${colors.gray}` }}
        ></div>
        <ProjectsContainer>
          {projects
            .filter((el) => {
              if (activeFilter === "Selected") {
                return el.selected;
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
const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const ProjectsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
    <ProjectItemWrapper>
      <ProjectTitleWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: 450 }}>{props.title}</div>
          <Tag>{"# " + props.type}</Tag>
        </div>
        <div
          style={{ fontSize: "14px", color: colors.darkgray, fontWeight: 350 }}
        >
          {props.year}
        </div>
      </ProjectTitleWrapper>
      <ProjectItemImgWrapper
        onClick={() => {
          if (props.link) window.open(props.link);
        }}
      >
        <ProjectOverlay>{props.description}</ProjectOverlay>
        <ProjectItemImg alt={props.title} src={props.src} />
      </ProjectItemImgWrapper>
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
  width: 32%;
  @media (width <= 1440px) {
    width: 48%;
  }
  @media (width <= 1024px) {
    width: 100%;
  }
  height: fit-content;
  box-sizing: border-box;
  margin: 0 0 60px 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ProjectOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.5s;
  box-sizing: border-box;
  padding: 24px;
  /* font-size: 14px; */
  line-height: 1.8;
  font-weight: 350;
  color: white;
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  z-index: 10;
`;

const ProjectItemImgWrapper = styled.div`
  width: 100%;
  height: 450px;
  @media (width <= 1440px) {
    height: 350px;
  }
  @media (width <= 1024px) {
    height: 250px;
  }
  border: 1px solid ${colors.gray};
  overflow: hidden;
  position: relative;
`;

const ProjectItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

const FilterButton = styled.div<{ active: boolean }>`
  cursor: pointer;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  color: ${(props) => (props.active ? colors.black : colors.darkgray)};
  font-weight: ${(props) => (props.active ? 500 : 350)};
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.black};
    font-weight: 500;
  }
`;
