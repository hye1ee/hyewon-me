import styled from "styled-components";

import RadioImg from "@assets/projects/radio.png";
import ContentLayout from "@components/ContentLayout";

const Projects = () => {
  return (
    <ContentLayout id="projects-page" title="PROJECTS">
      <ProjectsContainer>
        <ProjectItem
          title="Minionize"
          src={RadioImg}
          year={2024}
          type="Web"
          tags={["AR", "Mirror Room"]}
          description=""
        />
        <ProjectItem
          title="MultiDreamer"
          src={RadioImg}
          year={2023}
          type="ML"
          tags={["3D"]}
          description=""
        />
        <ProjectItem
          title="VIVID"
          src={RadioImg}
          year={2023}
          type="Web"
          tags={["HCI", "LLM"]}
          description=""
        />
        <ProjectItem
          title="MySelfieRoom"
          src={RadioImg}
          year={2023}
          type="Web"
          tags={["ML", "Social"]}
          description=""
        />
        <ProjectItem
          title="Radione"
          src={RadioImg}
          year={2023}
          type="Product"
          tags={["UX"]}
          description=""
        />
        <ProjectItem
          title="Artventure"
          src={RadioImg}
          year={2023}
          type="Arduino"
          tags={["ML", "Social"]}
          description=""
        />
        <ProjectItem
          title="RunThroughGravity"
          src={RadioImg}
          year={2022}
          type="Web"
          tags={["P5js", "Firebase"]}
          description=""
        />
        <ProjectItem
          title="HelloWorld"
          src={RadioImg}
          year={2021}
          type="Web"
          tags={["3D", "Threejs"]}
          description=""
        />
        <ProjectItem
          title="ReliefCube"
          src={RadioImg}
          year={2021}
          type="Product"
          tags={["UX"]}
          description=""
        />
      </ProjectsContainer>
    </ContentLayout>
  );
};
export default Projects;

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
  type: "Web" | "Arduino" | "ML" | "Product";
  tags?: string[];
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
          }}
        >
          <div style={{ fontSize: "26px", fontWeight: "bold" }}>
            {props.title}
          </div>
          <ProjectTag type={true}>{props.type}</ProjectTag>
          {props.tags?.map((tag) => (
            <ProjectTag type={false}>{tag}</ProjectTag>
          ))}
        </div>

        <div style={{ fontSize: "15px", color: "darkgray" }}>{props.year}</div>
      </ProjectTitleWrapper>
      <ProjectItemImgWrapper>
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
`;

const ProjectItemWrapper = styled.div`
  width: 48%;
  height: fit-content;

  box-sizing: border-box;
  margin: 0 0 50px 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectTag = styled.div<{ type: boolean }>`
  width: fit-content;
  height: fit-content;

  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px ${(props) => (props.type ? "solid #000000" : "dashed #444444")};
`;

const ProjectOverlay = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.5s;

  box-sizing: border-box;
  padding: 30px;
  font-size: 18px;
  color: white;

  opacity: 0;
  &:hover {
    opacity: 1;
  }

  z-index: 10;
`;

const ProjectItemImgWrapper = styled.div`
  width: 100%;
  height: 450px;

  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
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
