import styled from "styled-components";

// import HelloWorldImg from "@assets/projects/helloworld.png";
// import ReliefCubeImg from "@assets/projects/reliefcube.png";

import PageLayout from "@components/PageLayout";
import { colors } from "utils/styles";
import { useLocation, useNavigate } from "react-router-dom";
import projects from "@assets/strings/projects";
import Tag from "@components/Tag";

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <PageLayout style={{ padding: "32px", gap: "28px" }}>
      <div
        style={{ fontWeight: 450, fontSize: "20px", textAlign: "center" }}
      >{`Projects`}</div>
      <div style={{ display: "flex", gap: "8px", fontWeight: 350 }}>
        <div
          style={{
            textDecoration: location.hash === "" ? "underline" : "",
            cursor: "pointer",
          }}
          onClick={() => navigate("/projects")}
        >
          Selected
        </div>
        {"/"}
        <div
          style={{
            textDecoration: location.hash === "#research" ? "underline" : "",
            cursor: "pointer",
          }}
          onClick={() => navigate("/projects/#research")}
        >
          Research
        </div>
        {"/"}
        <div
          style={{
            textDecoration: location.hash === "#web" ? "underline" : "",
            cursor: "pointer",
          }}
          onClick={() => navigate("/projects/#web")}
        >
          Web
        </div>
        {"/"}
        <div
          style={{
            textDecoration: location.hash === "#design" ? "underline" : "",
            cursor: "pointer",
          }}
          onClick={() => navigate("/projects/#design")}
        >
          Design
        </div>
      </div>
      <div
        style={{ width: "100%", borderBottom: `1px solid ${colors.gray}` }}
      ></div>
      <ProjectsContainer>
        {projects.map((el) => {
          if (location.hash === "" && !el.selected) return <></>;
          if (location.hash === "#web" && el.type !== "Web") return <></>;
          if (location.hash === "#research" && el.type !== "Research")
            return <></>;
          if (location.hash === "#design" && el.type !== "Design") return <></>;

          return (
            <ProjectItem
              title={el.title}
              src={el.img}
              year={el.year}
              type={el.type}
              tags={el.tags}
              link={el.link}
              description={el.description}
            />
          );
        })}
      </ProjectsContainer>
    </PageLayout>
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
          {/* <ProjectTag type={true}>{props.type}</ProjectTag>
          {props.tags?.map((tag) => (
            <ProjectTag type={false}>{tag}</ProjectTag>
          ))} */}
          <Tag>{"# " + props.type}</Tag>
        </div>

        <div
          style={{ fontSize: "12px", color: colors.darkgray, fontWeight: 350 }}
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

// const ProjectTag = styled.div<{ type: boolean }>`
//   width: fit-content;
//   height: fit-content;

//   box-sizing: border-box;
//   padding: 5px 10px;
//   border-radius: 10px;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   border: 1px ${(props) => (props.type ? "solid #000000" : "dashed #444444")};
// `;

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

  font-size: 14px;
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
