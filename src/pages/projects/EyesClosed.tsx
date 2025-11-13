import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "EyesClosed is a kinetic typography project based on the lyrics of Ed Sheeran's song 'Eyes Closed'. I designed the assets in Illustrator and created the motion graphics using After Effects.",
  },
  {
    type: "youtube",
    url: "https://youtu.be/ti0eGVoPjaA",
  },
];

const EyesClosedProject = () => {
  return (
    <ProjectTemplate
      sectionTitle="Project"
      id="eyesclosed"
      title="EyesClosed - Kinetic Typography Project"
      projectPeriod="Sep 2024 - Oct 2024"
      role="Project Lead"
      members={["Hyewon Lee"]}
      blocks={blocks}
    />
  );
};

export default EyesClosedProject;
