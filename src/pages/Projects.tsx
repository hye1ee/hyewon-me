import styled from "styled-components";

import MinionizeImg from "@assets/projects/minionize.png";
import MultiDreamerImg from "@assets/projects/multidreamer.png";
import VividImg from "@assets/projects/vivid.png";
import MySelfieRoomImg from "@assets/projects/myselfieroom.png";
import RadioneImg from "@assets/projects/radione.png";

import ArtVentureImg from "@assets/projects/artventure.png";
import RunThroughGravityImg from "@assets/projects/runthroughgravity.png";
import BlackGhostImg from "@assets/projects/blackghost.png";

// import HelloWorldImg from "@assets/projects/helloworld.png";
// import ReliefCubeImg from "@assets/projects/reliefcube.png";

import ContentLayout from "@components/ContentLayout";

const Projects = () => {
  return (
    <ContentLayout id="projects-page" title="PROJECTS">
      <ProjectsContainer>
        <ProjectItem
          title="Minionize"
          src={MinionizeImg}
          year={2024}
          type="Web"
          tags={["AR", "Mirror Room"]}
          description="Minionize is a web-based mirror room space where user can generate their minion mask and try it on in the mirror room via AR experience. It conveys a message that 'What is the matter even if we are different look like minions?'"
        />
        <ProjectItem
          title="MultiDreamer"
          src={MultiDreamerImg}
          year={2023}
          type="ML"
          tags={["3D"]}
          description="MultiDreamer is an end-to-end machine learning pipeline based on SyncDreamer. It enables to generate of 3D meshes from a single-view multi-objects image. The chamfer distance between the inferred model and the ground truth model has decreased by 60% compared with the baseline."
          link="https://github.com/hye1ee/MultiDreamer"
        />
        <ProjectItem
          title="VIVID"
          src={VividImg}
          year={2023}
          type="Web"
          tags={["HCI", "LLM"]}
          description="VIVID is an LLM(Large Language Model) collaborative authoring tool to design, evaluate, and modify pedagogical dialogues. It is built on React with Typescript and Redux, utilizing OpenAI APIs."
          link="https://github.com/hye1ee/VIVID-demo"
        />
        <ProjectItem
          title="MySelfieRoom"
          src={MySelfieRoomImg}
          year={2023}
          type="Web"
          tags={["ML", "Social"]}
          description="MySelfieRoom is a web-based online photobooth service that can take, edit, and share photos. Developed with Typescript and React. To handle the image processing procedure, states are managed by Recoil."
          link="https://github.com/hye1ee/My-SelfieRoom"
        />
        <ProjectItem
          title="Radione"
          src={RadioneImg}
          year={2023}
          type="Product"
          tags={["UX", "Circuit"]}
          description="Radione is a brand new type of radio that improved the usability of finding channels. It simplifies the process at one touch by providing a channel chip that contains channel information as resistors."
        />
        <ProjectItem
          title="Artventure"
          src={ArtVentureImg}
          year={2023}
          type="Arduino"
          tags={["UX", "Visual Thinking"]}
          description="Artventure is an interactive art toy inspired by a pictionary game. It provides an opportunity to enjoy the visual thinking process through art, away from digital stimulations."
        />
        <ProjectItem
          title="RunThroughGravity"
          src={RunThroughGravityImg}
          year={2022}
          type="Web"
          tags={["P5js", "Firebase"]}
          description="RunThroughGravity is a mini arcade game implemented with p5.js based on pure Javascript. It developed by adapting an observer pattern to organize game objects and utilized Firebase to manage users."
          link="https://github.com/hye1ee/run-through-gravity"
        />
        <ProjectItem
          title="BlackGhost"
          src={BlackGhostImg}
          year={2022}
          type="Web"
          tags={["Electron", "Automator"]}
          description="BlackGhost is a web-based puzzle game built for Korean reality game show, Treasure Hunt. It is implemented based on React, packed as an app by Electron. To be utilized in a game, its auto-play and termination logic have been developed with a shell script using Automator to run in the background process."
          link="https://github.com/hye1ee/blackghost"
        />
        {/* <ProjectItem
          title="HelloWorld"
          src={HelloWorldImg}
          year={2021}
          type="Web"
          tags={["3D", "Threejs"]}
          description=""
        />
        <ProjectItem
          title="ReliefCube"
          src={ReliefCubeImg}
          year={2021}
          type="Product"
          tags={["UX"]}
          description=""
        /> */}
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
  width: 48%;
  height: fit-content;

  box-sizing: border-box;
  margin: 0 0 60px 0;

  display: flex;
  flex-direction: column;
  gap: 18px;
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
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s;
  box-sizing: border-box;
  padding: 35px;
  font-size: 16px;
  line-height: 1.8;
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

  border-radius: 10px;
  border: 1px solid lightgray;
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
