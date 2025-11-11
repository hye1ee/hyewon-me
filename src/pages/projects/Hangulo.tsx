import ProjectTemplate, {
  ProjectContentBlock,
} from "@components/ProjectTemplate";

const blocks: ProjectContentBlock[] = [
  {
    type: "text",
    content:
      "Hangulo pairs tangible letter tiles with an AI tutor that observes handwriting and pronunciation practice. Learners receive adaptive hints, cultural anecdotes, and collaborative challenges that make mastering Hangul memorable and fun.",
  },
  {
    type: "text",
    content:
      "I led early ethnographic research with heritage learners, mapped opportunity areas, and designed the multimodal feedback loop spanning AR overlays, haptics, and conversational prompts. Prototypes informed how tactile play can coexist with AI guidance.",
  },
  {
    type: "image",
    src: "/img/helloworld.png",
    caption: "Tangibles exploration for Hangulo’s adaptive learning tiles.",
  },
];

const HanguloProject = () => {
  return (
    <ProjectTemplate
      sectionTitle="Projects"
      id="hangulo-project"
      title="Hangulo — Tangible + AI Scaffolds for Hangul Learning"
      projectPeriod="Jan 2025 – Present"
      role="Lead Designer · Researcher · Prototype Fabrication"
      members={["Hyewon Lee", "Language Learning Lab Fellows"]}
      blocks={blocks}
    />
  );
};

export default HanguloProject;
