import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "Bunny is a playful tangible interface that encourages creative storytelling through physical interactions. The project explores how simple gestures and tactile feedback can make ideation more engaging for young creators.",
  },
  {
    type: "image",
    src: "/img/helloworld.png",
    caption: "Early prototype of the Bunny interactive companion.",
  },
  {
    type: "text",
    content:
      "Our team iterated on multiple hardware and software prototypes, focusing on approachable aesthetics and resilient interaction loops. The final deployment was evaluated in a small-scale classroom study, where we observed increases in collaborative engagement.",
  },
];

const Bunny = () => {
  return (
    <ProjectTemplate
      sectionTitle="Projects"
      id="bunny"
      title="Bunny: A Playful Tangible Storytelling Companion"
      projectPeriod="Mar 2023 – Jun 2023"
      role="Project Lead"
      members={["Hyewon Lee"]}
      blocks={blocks}
    />
  );
};

export default Bunny;
